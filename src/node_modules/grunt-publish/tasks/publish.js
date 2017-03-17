/*
 * grunt-publish
 * https://github.com/maxleiko/grunt-publish
 *
 * Copyright (c) 2014 Maxime Tricoire
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path'),
  async = require('async'),
  npmPublisher = require('./lib/npm-publisher');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('publish', 'Automatically publish to NPM registry one or more modules', function() {
    var done = this.async(), tasks = [];

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      ignore: ['node_modules'],
      registry: null,
      exitOnFailure: false
    });

    /**
     * Validates "ignore" option for given path
     * @param filepath
     * @returns {*}
     */
    function getIgnored(filepath) {
      for (var i in options.ignore) {
        if (filepath.indexOf(options.ignore[i]) !== -1) {
          return options.ignore[i];
        }
      }
      return null;
    }

    /**
     * Tells whether or not, the given path is a valid directory (directory which contains a package.json)
     * @param filepath
     * @returns {*}
     */
    function isValidDir(filepath) {
      if (grunt.file.isDir(filepath)) {
        return grunt.file.exists(path.resolve(filepath, 'package.json'));
      }
      return false;
    }

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      f.src.forEach(function(filepath) {
        var ignored = getIgnored(filepath);
        if (!ignored && isValidDir(filepath)) {
          var moduleName = grunt.file.readJSON(path.resolve(filepath, 'package.json')).name;
          tasks.push(function(cb) {
            grunt.log.ok('Publishing ' + moduleName + ' (' + filepath + ') ...');
            npmPublisher(filepath, options, function(err) {
              if (err) {
                if (options.exitOnFailure) {
                  cb(err);
                } else {
                  cb(null, { name: moduleName, err: err });
                }
              } else {
                grunt.log.ok(moduleName + ' published successfully');
                cb(null, { name: moduleName });
              }
            });
          });
        }
      });
    });

    async[options.exitOnFailure ? 'series':'parallel'](tasks, function(err, results) {
      if (err) {
        done(err);
      } else {
        var success = [], error = [];
        for (var i in results) {
          if (results[i].err) {
            error.push(results[i]);
          } else {
            success.push(results[i]);
          }
        }

        if (success.length > 0) {
          grunt.log.subhead('Successfully published:');
        }
        success.forEach(function (item) {
          grunt.log.ok(path.basename(item.name));
        });

        if (error.length > 0) {
          grunt.log.subhead('Unable to publish:');
        }
        error.forEach(function (item) {
          grunt.log.error(path.basename(item.err));
        });

        done();
      }
    });
  });

};
