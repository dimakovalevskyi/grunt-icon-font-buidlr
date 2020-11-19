/*
 * grunt-icon-font-buildr
 * https://github.com/mosby/grunt-icon-font-buildr
 *
 * Copyright (c) 2020 mosby
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },
    // Configuration to be run (and then tested).
    icon_font_buildr: {
      my_icons: {
        options: {
          sources: [
            'icons/[icon].svg',
          ],
          output: {
            fonts: 'tmp',
            fontName: 'MaterialDesign',
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

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'icon_font_buildr']);
};
