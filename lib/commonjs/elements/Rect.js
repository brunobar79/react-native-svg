"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireDefault(require("react"));var _extractProps=require("../lib/extract/extractProps");var _Shape2=_interopRequireDefault(require("./Shape"));var _NativeComponents=require("./NativeComponents");var _jsxFileName="/Users/bruno/repos/react-native-svg/src/elements/Rect.tsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var Rect=function(_Shape){(0,_inherits2.default)(Rect,_Shape);var _super=_createSuper(Rect);function Rect(){(0,_classCallCheck2.default)(this,Rect);return _super.apply(this,arguments);}(0,_createClass2.default)(Rect,[{key:"render",value:function render(){var props=this.props;var x=props.x,y=props.y,width=props.width,height=props.height,rx=props.rx,ry=props.ry;var rectProps={x:x,y:y,width:width,height:height,rx:rx,ry:ry};return _react.default.createElement(_NativeComponents.RNSVGRect,(0,_extends2.default)({ref:this.refMethod},(0,_extractProps.withoutXY)(this,props),rectProps,{__source:{fileName:_jsxFileName,lineNumber:29,columnNumber:7}}));}}]);return Rect;}(_Shape2.default);exports.default=Rect;(0,_defineProperty2.default)(Rect,"displayName",'Rect');(0,_defineProperty2.default)(Rect,"defaultProps",{x:0,y:0,width:0,height:0});
//# sourceMappingURL=Rect.js.map