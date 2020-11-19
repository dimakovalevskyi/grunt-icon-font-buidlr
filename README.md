# grunt-icon-font-buildr

> Grunt plugin for icon-font-buildr

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-icon-font-buildr --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-icon-font-buildr');
```

## The "icon_font_buildr" task

### Overview
In your project's Gruntfile, add a section named `icon_font_buildr` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  // ...
  icon_font_buildr: {
    my_icons: {
      options: {
        sources: [ // Where to get the icons, both remote and local sources are supported. `[icon]` will be replace with the name of your icon
          'icons/[icon].svg',
          'https://raw.githubusercontent.com/Templarian/MaterialDesign/master/svg/[icon].svg'
        ],
        icons: [ // Icons to use/download
          'backup',
          'bug_report',
          'amazon',
          { // Advanced way to define an icon
            icon: 'android-debug-bridge',
            name: 'android debug icon', // Custom icon name
            codepoints: ['\ue042', '\ue064'], // Custom codepoints
            ligatures: ['debug', 'debug_alt'] // Custom ligatures
          }
        ],
        output: {
          fonts: 'fonts/icons', // Where to save the fonts
          fontName: 'MyAwesomeIcons', // The name of the font to generate
          formats: [ // Font formats to output
            'eot',
            'ttf',
            'woff',
            'woff2'
          ]
        }
      }
    }
  }
  // ...
});
```

### Options

All options are the same with [icon-font-buildr](https://github.com/fabiospampinato/icon-font-buildr#api)

#### options.sources
Type: `Array<string>`
*Required*

Where to get the icons, both remote and local sources are supported. `[icon]` will be replace with the name of your icon

#### options.icons
Type: `Array<string|object>`
*Optional*

Icons to use/download.

**This plugin improvement, not supported by icon-font-buildr:** you can ignore this option, in this case all icons will be used for font. This works only for local-stored icons, not remote. 

#### options.output
Type: `object`
*Required*

Options for output files.

#### options.output.codepoints
Type: `boolean`
Defaults: `false`

Enable support for codepoints.

#### options.output.ligatures
Type: `object`
Defaults: `true`

Disable support for ligatures.

#### options.output.icons
Type: `object`
Defaults: `undefined`

Where to save the icons, if not provided they won't be stored permanently.

#### options.output.fonts
Type: `string`
Defaults: `path.join(process.cwd(), 'icon_font')`

Where to save the fonts.

#### options.output.fontName
Type: `object`
Defaults: `IconFont`

The name of the font to generate.

#### options.output.formats
Type: `Array<string>`
Defaults: `['eot', 'ttf', 'woff', 'woff2']`

Font formats to output.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  icon_font_buildr: {
    my_icons: {
      options: {
        sources: ['icons/[icon].svg'],
        output: {
          fonts: 'fonts/icons',
          fontName: 'MyAwesomeIcons',
          formats: [
            'eot',
            'ttf',
            'woff',
            'woff2'
          ]
        }
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.

## Release History
_(Nothing yet)_
