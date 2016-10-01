/* eslint no-invalid-this: off */

'use strict';

/**
 * @returns {undefined}
 */
function writing() {
  this.fs.copyTpl(
    this.templatePath( '.travis.yml' ),
    this.destinationPath( './.travis.yml' )
  );
}

module.exports = writing;
