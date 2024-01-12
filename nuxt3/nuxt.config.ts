// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default {
    head: {
        htmlAttrs: {
            lang: 'ko',
        },
        title: 'Learn Nuxt3',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
    },
    devtools: { enabled: true },
    alias: {
        '@': resolve(__dirname, '/'),
    },
    css: ['~/css/main.css'],
    devServer: {
        port: 5000,
    },
    //env config
    env: {
        baseUrl:
            process.env.NODE_ENV === 'production'
                ? 'https://my-json-server/typicode.com/joshua1988/nuxt-shopping-api'
                : 'http://localhost:3000',
    },
};
