import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

export const libs = {
    request_get: async (url, headers = {}, loadCheerio = false) => {
        try {
            const response = await fetch(url, { headers });
            const text = await response.text();
            return loadCheerio ? cheerio.load(text) : text;
        } catch (error) {
            console.error('Request failed:', error);
            return null;
        }
    },

    string_atob: (str) => {
        try {
            return Buffer.from(str, 'base64').toString('binary');
        } catch (error) {
            return '';
        }
    },

    string_btoa: (str) => {
        try {
            return Buffer.from(str, 'binary').toString('base64');
        } catch (error) {
            return '';
        }
    },

    url_extractHostname: (url) => {
        try {
            return new URL(url).hostname;
        } catch (error) {
            return '';
        }
    },

    log: (data, provider, message) => {
        console.log(`[${provider}] ${message}:`, data);
    }
}; 