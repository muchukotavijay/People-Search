module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        sassFiles: 'src/**/*.scss',

        sass: {
            dist: {
                files: {
                    'build/css/peopleSearch.css': 'src/scss/peopleSearch.scss'
                }
            }
        },

        watch: {
            sass: {
                tasks: ['sass'],
                files: 'src/**/*.scss'
            },
            karma: {
                // run these tasks when these files change
                files: ['src/app.js', 'test/*.js'],
                tasks: ['karma:continuous:run'] // note the :run flag
            }
        },

        copy: {
            root: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['imageData.json', 'index.html'],
                    dest: 'build/'
                }]
            },
            app: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['*.js', '**/*.js'],
                    dest: 'build/'
                }]
            },
            img: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['*'],
                    dest: 'build/img/'
                }]
            },
            lib: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/angular/',
                    src: ['*.min.js'],
                    dest: 'build/lib/'
                }]
            }
        },

        karma: {
            options: {
                configFile: 'karma.conf.js',
            },
            unit: {
                singleRun: true
            },
            continuous: {
                background: true
            }
        },

        'http-server': {
            'root': {
                root: "build/",
                host: "localhost",
                port: function(){ return 8080; },
                https: false,
                openBrowser: true,
                customPages: {
                    "/custom": "README.md"
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('dev', ['default', 'karma:continuous:start', 'watch']);
    grunt.registerTask('default', ['sass', 'copy','http-server']);

};