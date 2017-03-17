# grunt-npmrelease
[Grunt](http://gruntjs.com) plugin for automating the release steps of a node project to npm. It will also push the new version and tags to Github.

Fork of [geddski/grunt-release](https://github.com/geddski/grunt-release)

```shell
grunt release
```
## Setup
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-npmrelease --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-npmrelease');
```

## Using grunt-npmrelease

**Patch Release:**
```shell
grunt npmrelease
```
or
```shell
grunt npmrelease:patch
```

**Minor Release:**
```shell
grunt npmrelease:minor
```

**Major Release:**
```shell
grunt npmrelease:major
```

**Pre-release**
```shell
grunt npmrelease:prerelease
```

`prerelease` will just update the number after `MAJOR.MINOR.PATCH` (eg: `1.0.0-1`)
If you want to add an alphanumeric identifier, you will need to add it by hand.
Example: add `-alpha.0` to get something like `1.0.0-alpha.0`. Calling `grunt npmrelease:prerelease` will just update the last number to `1.0.0-alpha.1`.

**Releasing Unstable/Beta Versions**
Sometimes it is useful to publish an 'unstable' or 'beta' version to `npm`, while leaving your last stable release as the default that gets installed on an `npm install`.
`npm` accomplishes this using the `--tag myUnstableVersion` flag. You can enable this flag in grunt-npmrelease either by setting the `npmtag` option:

```js
  npmrelease: {
    options: {
      npmtag: 'canary',
    }
  }
```

or by passing the CLI arg:

```shell
grunt npmrelease --npmtag canary
```

NOTE: If the tag you pass is **true**, then the tag will be the *new* version number after the bump. Otherwise it will be the string you provided.


**Dry Run:**
To see what npmrelease does, without really changing anything, use `--no-write` option.

```shell
grunt npmrelease --no-write
```

You'll see something like:
```
>> -------RELEASE DRY RUN-------
>> created new npm version: npm version patch -m "release %s"
>> pushed to remote git repo
>> pushed new tag patch to remote git repo
>> published version patch to npm with a tag of "test"

Done, without errors.
```

## Options
The following are all the release steps, you can disable any you need to:

```js
  npmrelease: {
    options: {
      bump: false, //default: true
      file: 'component.json', //default: package.json
      push: false, //default: true
      pushTags: false, //default: true
      npm: false, //default: true
      npmtag: true, //default: no tag
      folder: 'folder/to/publish/to/npm', //default project root
      commitMessage: 'check out my release <%= version %>', //default: 'release <%= version %>'
    }
  }
```

## License
MIT
