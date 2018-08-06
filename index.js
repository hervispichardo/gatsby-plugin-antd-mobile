'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.modifyBabelrc = function (_ref, _ref2) {
  var babelrc = _ref.babelrc;
  var style = _ref2.style;

  return _extends({}, babelrc, {
    plugins: babelrc.plugins.concat([['import', {
      libraryName: 'antd-mobile',
      style: style ? style : 'css'
    }]])
  });
};