module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-npm-release");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('dts-generator');

    grunt.initConfig({

        // Creates a minified version of the library
        uglify: {
            dev: {
                files: {
                    "typed-contract.min.js": "./typed-contract.js"
                }
            }
        },
        // Copies the files over to the directory used to deploy to NuGet
        copy:{
            files:{
                cwd: './',
                src: [
                    "typed-contract.js",
                    "package.json",
                    "typed-contract.js.map",
                    "typed-contract.min.js",
                    "ReadMe.md",
                    "LICENSE-MIT"],
                dest: './typed-contract',
                expand: true

            }
        },
        // Push the code up to NPM
        npmrelease: {
            options: {
                bump: true,
                file: 'package.json',
                push: false,
                pushTags: false,
                npm: false,
                npmtag: false,
                folder: './typed-contract',
                commitMessage: 'check out our new typed-contract release <%= version %>', //default: 'release <%= version %>'
            }
        },
        // Generate the TypeScript .d.ts file
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
        // Merge all of the the TypeScript files into a single, transpiled file
        webpack: {
            default: require("./webpack.config.js")
        },
        // Merge the library (from WebPack) and the bootstrapper
        concat: {
            options: {
                sourceMap: true,
                sourceMapName: "typed-contract.js.map"
            },
            dist: {
                src: ['./TypedContract/typed-contract-lib.js', './TypedContract/typed-contract-bootstrapper.js'],
                dest: 'typed-contract.js'
            }
        }
    });

    grunt.registerTask("publish",function(){
        console.log("Published, Yaay!");
    });

    grunt.task.registerTask("release and set-up", ["uglify", "copy"]);

    // Run all grunt tasks required to build the solution and get it ready for deployment
    grunt.task.registerTask("build", ["webpack", "dtsGenerator", "uglify", "copy"]);
};