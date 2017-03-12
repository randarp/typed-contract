module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-npm-release");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('dts-generator');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.initConfig({

        // Creates a minified version of the library
        uglify: {
            dev: {
                files: {
                    "typedcontract.min.js": "./typedcontract.js"
                }
            }
        },
        // Copies the files over to the directory used to deploy to NPM
        copy:{
            library: {
                cwd: './',
                src: [
                    "typedcontract.js",
                    "package.json",
                    "typedcontract.js.map",
                    "typedcontract.min.js",
                    "typedcontract.d.ts",
                    "LICENSE-MIT"],
                dest: './packages/npm',
                expand: true,
                nonull: true
            },
            readme:
            {
                cwd: '../',
                src: [
                    "ReadMe.md"
                ],
                dest: './packages/npm',
                expand: true,
                nonull: true
            }
        },
        // Generate the TypeScript .d.ts file
        dtsGenerator: {
            options: {
                name: "typedcontract",
                project: "./TypedContract",
                out: "typedcontract.d.ts"
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
            dist: {
                src: ['./TypedContract/typedcontract-lib.js', './TypedContract/typedcontract-bootstrapper.js'],
                dest: 'typedcontract.js',
                options: {
                    sourceMap: true,
                    sourceMapName: "typedcontract.js.map",
                },
            },
            definition: {
                src: ['./typedcontract.d.ts','./TypedContract/TypeValidators.d.ts'],
                dest: 'typedcontract.d.ts'
            }
        },
        // Clean up any generated files
        replace: {
            // Clean up the generated typescript definition
            dts: {
                src: 'typedcontract.d.ts',
                overwrite: true,
                replacements: [{
                    // To fix TSLint issues
                    from: "\'",
                    to: "\""
                }, {
                    // To make the definition match the JS file generated by webpack
                    from: /from "typed-contract\/.*"/g,
                    to: "from \"typed-contract\""
                }, {
                    // To make the definition match the JS file generated by webpack
                    from: /declare module "typed-contract\/.*"/g,
                    to: "declare module \"typed-contract\""
                },{
                    // Collapse the module into a single module - remove inner modules
                    from: "}\ndeclare module \"typed-contract\" {",
                    to: ""
                },{
                    // Collapse the module into a single module - remove imports
                    from: "\timport { BaseValidator } from \"typed-contract\";",
                    to: ""
                },{
                    // Remove some references that are merged in
                    from: "\t\/\/\/ <reference path=\"TypeValidators/TypeValidators.d.ts\" \/>",
                    to: ""
                },{
                    // Remove some references that are merged in
                    from: "\t\/\/\/ <reference path=\"..\/TypeValidators\/TypeValidators.d.ts\" \/>",
                    to: ""
                },{
                    // Remove some references that are merged in
                    from: "\t\/\/\/ <reference path=\"TypeValidators.d.ts\" \/>",
                    to: ""
                },{
                    // Remove some references that are merged in
                    from: "\t\/\/\/ <reference path=\"..\/IContract.d.ts\" \/>",
                    to: ""
                },{
                    // Remove some references that are merged in
                    from: "\t\/\/\/ <reference path=\"IContract.d.ts\" \/>",
                    to: ""
                },{
                    // Remove some references that are merged in
                    from: "\t\/\/\/ <reference path=\"TypeValidators/TypeValidators.d.ts\" \/>",
                    to: ""
                },{
                    // Clean up some whitespace after replaces
                    from: "\n\n\n",
                    to: "\n"
                },{
                    // Clean up some whitespace after replaces
                    from: "\n\n",
                    to: "\n"
                }
                ]
            },js: {
                src: 'typedcontract.js',
                overwrite: true,
                replacements: [{
                    // Remove some references that are merged in
                    from: "\/\/\/ <reference path=\"..\/TypeValidators\/TypeValidators.d.ts\" \/>",
                    to: ""
                },{
                    // Remove some references that are merged in
                    from: "\/\/\/ <reference path=\"TypeValidators.d.ts\" \/>",
                    to: ""
                },{
                    // Fix the link to the source mapping, which was based on the initially generated one
                    from: "sourceMappingURL=typedcontract-bootstrapper.js.map",
                    to: "sourceMappingURL=typedcontract.js.map"
                }
                ]
            }
        }
    });

    // Run all grunt tasks required to build the solution and get it ready for deployment
    grunt.task.registerTask("default", ["webpack", "dtsGenerator", "concat", "replace", "uglify", "copy"]);
};