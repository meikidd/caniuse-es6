'use strict';

module.exports = function() {
  try {
    eval('let es6_let = true');
    return true;
  } catch(e) {
    return false;
  }
}