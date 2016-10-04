'use strict';

/**
 * @returns {Array}
 */
function getGeneratorPrompts() {

  return [
    {
      message: 'create .travis.yml',
      name: 'create-travis',
      type: 'confirm'
    }
  ];
}

module.exports = getGeneratorPrompts;
