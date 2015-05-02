var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');

    mix.scripts([
        'vendor/bootstrapSwitch.js',
        'pubsub.js',
        'app.js',
        'ajax-helpers.js'

    ],null,'public/js')

    mix.styles([
        'vendor/bootstrap.min.css',
        'app.css',
        'vendor/bootstrapSwitch.css'
    ],null,'public/css')
});
