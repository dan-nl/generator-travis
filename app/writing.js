'use strict';

function writing() {
  this.fs.copyTpl(
    this.templatePath( '.travis.yml' ),
    this.destinationPath( './.travis.yml' )
  );
}

module.exports = writing;
