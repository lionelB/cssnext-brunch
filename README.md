# [cssnext](http://https://github.com/cssnext/cssnext)-brunch

[![Build Status](http://img.shields.io/travis/cssnext/cssnext-brunch.svg)](https://travis-ci.org/cssnext/cssnext-brunch)
[![NPM version](http://img.shields.io/npm/v/cssnext-brunch.svg)](https://www.npmjs.org/package/cssnext-brunch)

> Use tomorrow's CSS syntax, today. Via Brunch.

**Issues with the output should be reported on [cssnext issue tracker](https://github.com/cssnext/cssnext/issues).**

_Follow [@cssnext](https://twitter.com/cssnext) to get latest news & [join #cssnext on irc.freenode.net](irc://irc.freenode.net/cssnext) if you have any questions._

## Install

    $ npm install cssnext-brunch

## Usage

Add a `cssnext` section in the plugins section of your [brunch config file](https://github.com/brunch/brunch/blob/stable/docs/config.md)

```coffeescript
plugins:
    cssnext:
      browsers:['> 5%', 'last 3 version', 'IE 8']
      path: 'app/css'
      sourcemap: true
```

Options are directly passed to cssnext, so checkout [cssnext options](https://github.com/cssnext/cssnext#nodejs-options) directly.

## Notes

cssnext-brunch is a compile-type plugin, so it's play well optimizer like [clean-css-brunch](https://github.com/brunch/clean-css-brunch)

### SourceMaps

For now, sourcemap is inlined in the generated css.
If you want to enable cssnext sourcemap, you should disabled brunch default sourcemap.

Also, it seems that minification (via `compress` option or via another brunch plugin) broke sourcemap support.

### Import

By default, brunch concatenates css files. In order to  take advantage of postcss-import, you'll need to add `_` to filename (`@import "_filename.css"`).
You also need to specify import folder in the brunch config.
`import: "app/css"` for example.

###  Production

When build for production, inlined sourcemap is disabled.

---

## Contributing

Work on a branch, install dev-dependencies, respect coding style & run tests before submitting a bug fix or a feature.

    $ git clone https://github.com/cssnext/cssnext-brunch.git
    $ git checkout -b patch-1
    $ npm install
    $ npm test

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
