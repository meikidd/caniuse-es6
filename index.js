'use strict';

/* let */
try {
  eval('let es6_let = true');
  console.log('√ let');
} catch(e) {
  console.log('x let');
}

/* const */
try {
  eval('const es6_const = true');
  console.log('√ const');
} catch(e) {
  console.log('x const');
}

/* template string */
try {
  eval('`es6`');
  console.log('√ template string');
} catch(e) {
  console.log('x template string');
}

/* arrow function */
try {
  eval('a => "es6"');
  console.log('√ arrow function');
} catch(e) {
  console.log('x arrow function');
}

/* promise */
try {
  eval('Promise.prototype');
  console.log('√ Promise');
} catch(e) {
  console.log('x Promise');
}

/* class */
try {
  eval('class ES {}');
  console.log('√ Class');
} catch(e) {
  console.log('x Class');
}

/* generator */
try {
  eval('function *es6 () {}');
  console.log('√ generator');
} catch(e) {
  console.log('x generator');
}