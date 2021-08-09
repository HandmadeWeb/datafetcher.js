const mix = require('laravel-mix');

// Native
mix.js('src/data-fetcher.js', 'dist/data-fetcher.min.js');

// Axios
mix.js('src/data-fetcher.axios.js', 'dist/data-fetcher.axios.min.js');