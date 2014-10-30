module.exports = function is(type) {
  if (!type.meta) {
    throw new TypeError('tcomb type expected');
  }
  var tKind = type.meta.kind;
  var tName = type.meta.name;

  return function(props, propName, componentName) {
    if (!type.is(props[propName])) {
      return new Error('Expected `' + propName + '` to be a ' + tKind + '(' + tName + ')');
    }
  }
}
