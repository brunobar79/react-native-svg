Object.defineProperty(exports,"__esModule",{value:true});exports.default=extractBrush;var _extractColor=_interopRequireWildcard(require("./extractColor"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var urlIdPattern=/^url\(#(.+)\)$/;var currentColorBrush=[2];var contextFillBrush=[3];var contextStrokeBrush=[4];function extractBrush(color){if(typeof color==='number'){if(color>>>0===color&&color>=0&&color<=0xffffffff){return(0,_extractColor.integerColor)(color);}}if(!color||color==='none'){return null;}if(color==='currentColor'){return currentColorBrush;}if(color==='context-fill'){return contextFillBrush;}if(color==='context-stroke'){return contextStrokeBrush;}var brush=typeof color==='string'&&color.match(urlIdPattern);if(brush){return[1,brush[1]];}var int32ARGBColor=(0,_extractColor.default)(color);if(typeof int32ARGBColor==='number'){return int32ARGBColor;}console.warn("\""+color+"\" is not a valid color or brush");return null;}
//# sourceMappingURL=extractBrush.js.map