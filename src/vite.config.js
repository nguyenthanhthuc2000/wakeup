import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        host: true,
        port: 5173,
        hmr: {
            host: 'localhost',
        },
    },
    plugins: [
        laravel({
            input: [
                'resources/scss/style.scss',
                'resources/scss/icons.scss',
                'resources/js/pages/dashboard.init.js',
                'resources/plugins/morris/morris.min.js', // Morris Chart CSS
                'resources/plugins/raphael/raphael.min.js', // Morris Chart CSS
                'resources/js/jquery.min.js',
                'resources/js/bootstrap.bundle.min.js',
                'resources/js/jquery.slimscroll.js',
                'resources/js/waves.min.js',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
