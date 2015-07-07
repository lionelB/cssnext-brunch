# [cssnext](https://github.com/cssnext/cssnext)-brunch

[![Build Status](http://img.shields.io/travis/cssnext/cssnext-brunch.svg)](https://travis-ci.org/cssnext/cssnext-brunch)
[![NPM version](http://img.shields.io/npm/v/cssnext-brunch.svg)](https://www.npmjs.org/package/cssnext-brunch)

> Use tomorrow's CSS syntax, today. Via Brunch.

**Issues with the output should be reported on [cssnext issue tracker](https://github.com/cssnext/cssnext/issues).**

## Install

```console
$ npm install cssnext-brunch
```

## Usage

Add a `cssnext` section in the plugins section of your [brunch config file](https://github.com/brunch/brunch/blob/stable/docs/config.md)

```coffeescript
plugins:
    cssnext:
      sourcemap: true
      features:
        prefixes:
          browsers:['> 5%', 'last 3 version', 'IE 8']
      import:
        path: 'app/css'
```

Options are directly passed to cssnext, so checkout [cssnext options](http://cssnext.io/usage/) directly.

## Notes

cssnext-brunch is a compile-type plugin, so it's play well optimizer like [clean-css-brunch](https://github.com/brunch/clean-css-brunch)

### SourceMaps

For now, sourcemap is inlined in the generated css.
If you want to enable cssnext sourcemap, you should disabled brunch default sourcemap.

Also, it seems that minification (via `` compress`` option or via another brunch plugin) broke sourcemap support.

### Import

By default, brunch concatenates css files. In order to  take advantage of postcss-import, you'll need to add **_** to filename (* @import "_filename.css"*.
You also need to specify import folder in the brunch config.
``import: "app/css"`` for example.

###  Production

When build for production, inlined sourcemap is disabled.

---

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
