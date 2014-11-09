module.exports = function (grunt) {

    grunt.initConfig({
        cssmin: {
            my_target: {
                files: [
                    {
                        expand: true,
                        cwd: 'dist/',
                        src: ['weather.css', '!*.min.css'],
                        dest: 'dist/',
                        ext: '.min.css'
                    }
                ]
            }
        },

        stylus: {
            compile: {
                options: {
                    // paths: ['path/to/import', 'another/to/import'],
                },
                files: {
                    'dist/weather.css': 'static/**/*.styl' // 1:1 compile
                }
            }
        },

        jscs: {
            src: "static/**/*.js",
            options: {
                config: true,
                requireCurlyBraces: [ "if" ]
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc' // relative to Gruntfile
            },
            // You get to make the name
            // The paths tell JSHint which files to validate
            myFiles: ['static/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-jscs");

    grunt.registerTask('default', ['stylus', 'cssmin']);
    grunt.registerTask('process_js', ['jscs', 'jshint'] );

};