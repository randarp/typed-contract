module.exports = function(grunt){
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-npm-release");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('dts-generator');

    grunt.initConfig({

        uglify: {
            dev: {
                files: {
                    "typed-contract.min.js": "C:/Projects/TypedContract/Code/typed-contract.js"
                }
            }
        },
        copy:{
            files:{
                cwd: 'C:/Projects/TypedContract/Code/',
                src: [
                    "typed-contract.js",
                    "package.json",
                    "typed-contract.js.map",
                    "typed-contract.min.js",
                    "ReadMe.md",
                    "LICENSE-MIT"],
                dest: 'C:/Projects/TypedContract/Code/typed-contract',
                expand: true

            }
        },
        npmrelease: {
            options: {
                bump: true,
                file: 'package.json',
                push: false,
                pushTags: false,
                npm: false,
                npmtag: false,
                folder: 'C:Projects/TypedContract/Code/typed-contract',
                commitMessage: 'check out our new typed-contract release <%= version %>', //default: 'release <%= version %>'
            }
        },
        dtsGenerator: {
            options: {
                name: "typed-contract",
                project: "./TypedContract",
                out: "typed-contract.d.ts"
            },
            default: {
                src: [ "/TypedContract/**/*.ts" ]
            }
        },
        webpack: {
            default: require("./webpack.config.js")
        }
    });

    grunt.registerTask("publish",function(){
        console.log("Published, Yaay!");
    });

    grunt.task.registerTask("release and set-up",["uglify","copy"]);

    // Run all grunt tasks required to build the solution
    grunt.task.registerTask("build",["webpack","dtsGenerator","uglify","copy"]);
};