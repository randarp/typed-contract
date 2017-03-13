module.exports = function(grunt) {
  grunt.initConfig({
    nodeunit: {
      tests: 'test/release_test.js'
    },
    npmrelease: {
      options: {
        file: 'package.json',
        push: true,
        bump : true,
        pushTags: true,
        npm: true,
        npmtag: false
      }
    },
    setup: {
      test: {

      }
    },

    remove: {
      test : {
        fileList: ['test/output.json']
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-remove');

  grunt.registerTask('test', [
    'setup',
    'npmrelease',
    'nodeunit',
    'remove'
  ]);

  grunt.registerMultiTask('setup', 'Setup test fixtures', function() {
    var commands = [
      'npm version patch -m "release %s"',
      'git push',
      'git push --tags',
      'npm publish --tag testTag'
    ];

    var mockery = require('mockery');
    mockery.enable({ useCleanCache: true, warnOnUnregistered: false });
    mockery.registerMock('shelljs', {
      exec : function(command) {
        var index = commands.indexOf(command);
        if (index > -1) {
          commands.splice(index, 1);
        }

        var fs = require('fs');
        fs.writeFileSync('test/output.json', JSON.stringify({commands : commands}, null, 2));
        return {
          code : 0
        }
      }
    });

    grunt.config.set('npmrelease.options.npmtag', 'testTag');
  });
};
