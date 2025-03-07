# Teki Scraper

A command line tool to scrape streaming providers.

## Installation

1. Make sure you have Node.js 16+ installed
2. Install dependencies:
```bash
npm install
```

## Usage

The scraper provides two main commands:

### List Available Providers

To see all available providers:

```bash
npm run list
```

### Scrape Content

To scrape content, use the following command:

```bash
npm run scrape -- [options]
```

Required options:
- `-t, --type <type>`: Content type (movie/tv)
- `-i, --tmdb <id>`: TMDB ID of the content

Optional options:
- `-s, --season <number>`: Season number (for TV shows)
- `-e, --episode <number>`: Episode number (for TV shows)
- `-p, --provider <name>`: Specific provider to use (if not specified, all providers will be tried)

### Examples

1. Scrape a movie:
```bash
npm run scrape -- -t movie -i 123456
```

2. Scrape a TV show episode:
```bash
npm run scrape -- -t tv -i 123456 -s 1 -e 1
```

3. Scrape from a specific provider:
```bash
npm run scrape -- -t movie -i 123456 -p dist/providers/vidsrc.js
```

## Notes

- The scraper uses TMDB IDs for content identification
- For TV shows, both season and episode numbers are required
- Results may vary depending on provider availability and content availability
- Make sure to include `--` before the options when using npm run commands