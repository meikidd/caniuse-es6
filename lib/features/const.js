'use strict';

module.exports = function() {
  try {
    eval('const es6_const = true');
    return true;
  } catch(e) {
    return false;
  }
}