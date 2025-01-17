"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireDefault(require("react"));var _extractProps=require("../lib/extract/extractProps");var _Shape2=_interopRequireDefault(require("./Shape"));var _NativeComponents=require("./NativeComponents");var _jsxFileName="/Users/bruno/repos/react-native-svg/src/elements/Line.tsx";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var Line=function(_Shape){(0,_inherits2.default)(Line,_Shape);var _super=_createSuper(Line);function Line(){(0,_classCallCheck2.default)(this,Line);return _super.apply(this,arguments);}(0,_createClass2.default)(Line,[{key:"render",value:function render(){var props=this.props;var x1=props.x1,y1=props.y1,x2=props.x2,y2=props.y2;var lineProps=_objectSpread(_objectSpread({},(0,_extractProps.extract)(this,props)),{},{x1:x1,y1:y1,x2:x2,y2:y2});return _react.default.createElement(_NativeComponents.RNSVGLine,(0,_extends2.default)({ref:this.refMethod},lineProps,{__source:{fileName:_jsxFileName,lineNumber:26,columnNumber:12}}));}}]);return Line;}(_Shape2.default);exports.default=Line;(0,_defineProperty2.default)(Line,"displayName",'Line');(0,_defineProperty2.default)(Line,"defaultProps",{x1:0,y1:0,x2:0,y2:0});
//# sourceMappingURL=Line.js.map