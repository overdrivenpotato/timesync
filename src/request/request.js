var isNode = typeof navigator === 'undefined';

// FIXME: how to do conditional loading this with ES6 modules?
module.exports = isNode ?
    require('./request.node') :
    require('./request.polyfill');
