requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'https:////code.jquery.com/jquery-1.10.2.min',
        'bootstrap': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min',
        'chartsjs': 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.bundle.min',
        'axios': 'https://unpkg.com/axios/dist/axios.min',
        'ripples': '../md/js/ripples.min',
        'material': '../md/js/material.min',
        'snackbar': 'https://fezvrasta.github.io/snackbarjs/dist/snackbar.min'
    },
    shim: {
        'app': {
            deps: ['vuex', 'vue', 'jquery', 'bootstrap', 'chartsjs', 'ripples', 'material' /* 'mdb.min', 'tether.min', */ ]
        },
        'vue': {
            deps: ['vuex'],
            exports: 'Vue'
        },
        'vuex': {
            exports: 'Vuex'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap',
        },
        'material': {
            deps: ['jquery'],
            exports: 'material',
        },
        'ripples': {
            deps: ['jquery'],
            exports: 'ripples',
        },
    }
});

requirejs(['app']);
