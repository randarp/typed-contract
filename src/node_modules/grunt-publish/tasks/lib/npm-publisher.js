var npm = require('npm');

/**
 * Created by leiko on 07/03/14.
 */
module.exports = function (filepath, options, callback) {
    if (!callback) {
        callback = options;
        options = {};
    }

    // load npm
    npm.load({ loglevel: 'silent' }, function (err) {
        if (err) {
            return callback(err);
        }

        if (options.registry) {
            npm.config.set('registry', options.registry);
        }

        // npm publish
        npm.commands.publish([filepath], function (err) {
            if (err) {
                return callback(err);
            }

            callback();
        });
    });
};
