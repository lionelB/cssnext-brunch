cssnext-brunch
==============

Add [cssnext](http://https://github.com/cssnext/cssnext) support to brunch

#Install

```bash
 npm install --save cssnext-brunch
```

#Plugin options

Add a ``cssnext`` section in the plugins sectoin of your brunch cinfig file.
[More info on brunch config file](https://github.com/brunch/brunch/blob/stable/docs/config.md)

```coffeescript
plugins:
    cssnext:
      browsers:['> 5%', 'last 3 version', 'IE 8']
      path: 'app/css'
      sourcemap: true
```

Available options are the same as the cssnext node.js options [See more](https://github.com/cssnext/cssnext#nodejs-options)

# Notes

cssnext-brunch is a compile-type plugin, so it's play well optimizer like [clean-css-brunch](https://github.com/brunch/clean-css-brunch)

## SourceMaps

For now, sourcemap is inlined in the generated css.
If you want to enable cssnext sourcemap, you should disabled brunch default sourcemap.

Also, it seems that minification (via `` compress`` option or via another brunch plugin) broke sourcemap support. 

##Import

By default, brunch concatenates css files. In order to  take advantage of postcss-import, you'll need to add **_** to filename (* @import "_filename.css"*.
You also need to spécify import folder in the brunch config.
``import: "app/css"`` for example. 

## Production
When build for production, inlined sourcemap is disabled.