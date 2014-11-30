module.exports = function (grunt) {

    grunt.initConfig({
        stylus: {
            compile: {
                files: {
                    "dist/temp/temp.css": ["static/**/*.styl"]
                }
            }
        },

        autoprefixer: {
            single_file: {
                options: {
                    browsers: ["> 1%", "last 2 versions", "Firefox ESR", "Opera 12.1", "ie 8", "ie 9"]
                },

                src: "dist/temp/temp.css",
                dest: "dist/temp/weather.css"
            }
        },

        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: "dist/temp/",
                    src: ["weather.css", "!*.min.css"],
                    dest: "dist/",
                    ext: ".min.css"
            }]
            }
        },

        watch: {
            options: {
                reload: true
            },
            src: {
                files: ["static/**/*", "static/**/**/**/*"],
                tasks: ["default", "express"],
            }
        },

        jscs: {
            src: "static/**/*.js",
            options: {
                config: true,
                requireCurlyBraces: ["if"]
            }
        },

        jshint: {
            options: {
                jshintrc: ".jshintrc" // relative to Gruntfile
            },
            // You get to make the name
            // The paths tell JSHint which files to validate
            myFiles: ["static/**/*.js"]
        },

        copy: {
            jquery: {
                src: "bower_components/jquery/dist/*",
                dest: "dist/js/",
                expand: true,
                flatten: true
            },
            main: {
                src: "bower_components/normalize.css/normalize.css",
                dest: "dist/normalize.css"
            },
            index: {
                src: "static/pages/views/index.html",
                dest: "dist/index.html"
            },
            staticImages: {
                src: "static/images/*",
                dest: "dist/images/",
                expand: true,
                flatten: true
            },
            js: {
                src: ["static/scripts/*", "static/blocks/tabs/bootstrap.min.js"],
                dest: "dist/js/",
                expand: true,
                flatten: true
            },
            tabscss: {
                src: "static/blocks/tabs/bootstrap.min.css",
                dest: "dist/",
                expand: true,
                flatten: true
            }
        },
        
        uglify: {
            clearBtn: {
                files: {
                    "dist/js/clear.btn.min.js": [ "static/blocks/layout/clear.btn.js" ]
                }
            }
        },

        clean: ["dist/temp/", "!dist/images/"],

        shell: {
            server: {
                options: {
                    stdout: true
                },
                command: [
                    "cd server",
                    "node server"
                ].join("&&")
            },
            
            hooks: {
                command: "chmod +x .git/hooks/pre-commit"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-shell");

    grunt.registerTask("default", ["stylus", "autoprefixer", "cssmin", "copy", "clean", "uglify"]);

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jscs");

    grunt.registerTask("process_js", ["jscs", "jshint"]);
    grunt.registerTask("setup", function() {
        grunt.file.copy('hooks/pre-commit', '.git/hooks/pre-commit');
        grunt.task.run('shell:hooks')
    });

    /* Start Express server */
    grunt.registerTask("express", ["shell"]);

};
