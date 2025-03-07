import { Command } from 'commander';
import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import { fileURLToPath } from 'url';
import { libs } from './libs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');

async function loadProviders() {
    try {
        const providerFile = await fs.readFile(path.join(ROOT_DIR, 'provider.json'), 'utf-8');
        const { providers } = JSON.parse(providerFile);
        return providers;
    } catch (error) {
        console.error(chalk.red('Error loading providers:'), error.message);
        return [];
    }
}

async function loadProvider(providerPath) {
    try {
        // Remove 'dist/' prefix if it exists
        const cleanPath = providerPath.replace(/^dist\//, '');
        const fullPath = path.join(ROOT_DIR, providerPath);
        
        // Create a source object for the provider
        const source = {
            getResource: null // This will be set by the provider
        };

        // Make libs and source available globally for the provider
        global.libs = libs;
        global.source = source;
        
        // Import the provider module
        await import(fullPath);
        
        return source;
    } catch (error) {
        console.error(chalk.red(`Error loading provider ${providerPath}:`), error.message);
        return null;
    }
}

async function scrapeContent(provider, type, tmdbId, season = null, episode = null) {
    try {
        const movieInfo = {
            type,
            tmdb_id: tmdbId,
            season,
            episode
        };

        const config = {}; // Add any necessary config
        
        return await provider.getResource(movieInfo, config, () => {});
    } catch (error) {
        console.error(chalk.red('Error scraping content:'), error.message);
        return null;
    }
}

async function main() {
    const program = new Command();

    program
        .name('teki-scraper')
        .description('CLI tool to scrape streaming providers')
        .version('1.0.0');

    program
        .command('list')
        .description('List all available providers')
        .action(async () => {
            const spinner = ora('Loading providers...').start();
            const providers = await loadProviders();
            spinner.stop();
            
            console.log(chalk.blue('\nAvailable providers:'));
            providers.forEach((provider, index) => {
                console.log(chalk.green(`${index + 1}. ${provider}`));
            });
        });

    program
        .command('scrape')
        .description('Scrape content from providers')
        .requiredOption('-t, --type <type>', 'Content type (movie/tv)')
        .requiredOption('-i, --tmdb <id>', 'TMDB ID of the content')
        .option('-s, --season <number>', 'Season number (for TV shows)')
        .option('-e, --episode <number>', 'Episode number (for TV shows)')
        .option('-p, --provider <name>', 'Specific provider to use (optional)')
        .action(async (options) => {
            const spinner = ora('Loading providers...').start();
            const providers = await loadProviders();
            
            if (options.provider && !providers.includes(options.provider)) {
                spinner.fail(chalk.red(`Provider ${options.provider} not found!`));
                return;
            }

            const targetsToScrape = options.provider 
                ? [options.provider]
                : providers;

            spinner.text = 'Scraping content...';

            for (const providerPath of targetsToScrape) {
                spinner.text = `Scraping from ${providerPath}...`;
                
                const provider = await loadProvider(providerPath);
                if (!provider) continue;

                const result = await scrapeContent(
                    provider,
                    options.type,
                    options.tmdb,
                    options.season,
                    options.episode
                );

                if (result) {
                    spinner.succeed(chalk.green(`Successfully scraped from ${providerPath}`));
                    console.log(chalk.yellow('Result:'), result);
                } else {
                    spinner.warn(chalk.yellow(`No results from ${providerPath}`));
                }
            }
        });

    program.parse();
}

main().catch(error => {
    console.error(chalk.red('Fatal error:'), error);
    process.exit(1);
}); 