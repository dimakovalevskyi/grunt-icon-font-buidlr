/*
 * grunt-icon-font-buildr
 * https://github.com/mosby/grunt-icon-font-buildr
 *
 * Copyright (c) 2020 mosby
 * Licensed under the MIT license.
 */

'use strict';

const IconFontBuildr = require('icon-font-buildr');

module.exports = function(grunt) {
  grunt.registerMultiTask('icon_font_buildr', 'Grunt plugin for icon-font-buildr', function() {
    const done = this.async();

    const options = this.options();

    if (!options.icons) {
      options.icons = [];

      options.sources.forEach(source => {
        const filePattern = source.replace('[icon]', '*');
        const files = grunt.file.expand(filePattern);

        const regexpPattern = source
            .replace('.', '\\.')
            .replace('/', '\\/')
            .replace('[icon]', '(.+)');

        files.forEach(file => {
          const matches = file.match(new RegExp(regexpPattern));
          if (matches) {
            options.icons.push(matches[1]);
          }
        });
      });
    }

    const builder = new IconFontBuildr(options);

    builder.build()
      .then(() => done());
  });

};
