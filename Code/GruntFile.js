/**
 * Created by Andre on 2016-02-07.
 */
module.exports = function(grunt){
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-publish");
    grunt.loadNpmTasks("grunt-npm-release");

    grunt.initConfig({
        uglify: {
            dev: {
                files: {
                    "typed-contract.min.js": "C:/Projects/TypedContract/Code/typed-contract.js"

                },
            },

        },

            npmrelease: {
                options: {
                    bump: true,
                    file: 'package.json',
                    push: true,
                    pushTags: true,
                    npm: true,
                    npmtag: false,
                    folder: '/typed-contract',
                    commitMessage: 'check out our new typed-contract release <%= version %>', //default: 'release <%= version %>'
                }
            }

});

    grunt.registerTask("publish TypedContract",function(){
        console.log("Published");
    })
};