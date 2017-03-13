# grunt-publish

> Automatically publish to NPM registry one or more modules

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-publish --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-publish');
```

## The "publish" task

### Overview
In your project's Gruntfile, add a section named `publish` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    publish: {
        main: {
            src: [
                'test/fixtures/aFolder/another-module',
                'test/fixtures/fake-module'
            ]
        },
        regex: {
            src: ['test/fixtures/**/*']
        }
    },
});
```

### Options

#### options.ignore
Type: `Array`
Default value: `'['node_modules']'`

An array containing different keywords that you want to ignore for publishing.
For example:
```js
publish: {
    main: {
        options: {
            ignore: ['node_modules', 'foo']
        },
        src: [
            'test/fixtures/aFolder/another-module',
            'test/fixtures/fake-module'
        ]
    }
},
```

#### options.registry
Type: `String`
Default value: `null` (default npm registry)

Modify publishing registry
For example:
```js
publish: {
    main: {
        options: {
            registry: 'https://my-own-registry.foo'
        },
        src: [
            'test/fixtures/aFolder/another-module',
            'test/fixtures/fake-module'
        ]
    }
},
```

Will publish your module to the specified registry instead of registry.npmjs.org. If `options.registry` isn't specified, `https://registry.npmjs.org` is used.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(0.0.1)_
