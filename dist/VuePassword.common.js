/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(481);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(400);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".VuePassword__Container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:center;position:relative}.VuePassword__Input{border:1px solid #cbd5e0;border-radius:.125rem;display:block;padding:.5rem .75rem;width:100%}.VuePassword__Input--has-toggle{padding-right:3rem}.VuePassword__Toggle{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:none;border:none;bottom:0;color:#718096;display:-webkit-box;display:-ms-flexbox;display:flex;margin-right:.75rem;outline:none;position:absolute;right:0;top:0}.VuePassword__Toggle:hover{color:#4a5568;-webkit-transition:color .3s ease-in-out;transition:color .3s ease-in-out}.VuePassword__Toggle-Icon{fill:currentColor;pointer-events:none;width:1rem}.VuePassword__Meter{color:#afafaf;display:-webkit-box;display:-ms-flexbox;display:flex;height:.25rem;margin-left:-.25%;margin-right:-.25%;margin-top:.125rem}.VuePassword__Meter svg{fill:currentColor;height:100%;padding-left:.25%;padding-right:.25%;-webkit-transition:all .6s ease-in-out;transition:all .6s ease-in-out;width:25%}.VuePassword--very-weak{color:#afafaf}.VuePassword--weak{color:#e53e3e}.VuePassword--medium{color:#fc8181}.VuePassword--good{color:#68d391}.VuePassword--great{color:#38a169}.VuePassword__Message{cursor:default;font-size:1rem;padding-left:.5rem;padding-right:.5rem;text-align:right;text-transform:uppercase}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 400:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 481:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 744:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 315:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(522);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("0e8eb45a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ addStylesClient; }
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__(679)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/VuePassword.vue?vue&type=template&id=bb97598c

var _hoisted_1 = {
  class: "VuePassword"
};
var _hoisted_2 = {
  class: "VuePassword__Container"
};
var _hoisted_3 = ["title", "value"];
var _hoisted_4 = ["title"];
var _hoisted_5 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("svg", {
  class: "VuePassword__Toggle-Icon VuePassword__Toggle-Icon--hide",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  d: "M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0 1 12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"
})], -1);
var _hoisted_6 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("svg", {
  class: "VuePassword__Toggle-Icon VuePassword__Toggle-Icon--show",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  d: "M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
})], -1);
var _hoisted_7 = ["title"];
var _hoisted_8 = ["data-strength"];
var _hoisted_9 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("rect", {
  width: "100%",
  height: "100%"
}, null, -1);
var _hoisted_10 = [_hoisted_9];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "password-input", {
    strength: this.strength,
    type: $data.type,
    updatePassword: $options.updatePassword,
    value: $props.modelValue
  }, function () {
    return [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("input", (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)({
      ref: "input",
      class: [$props.classes, 'VuePassword__Input', {
        'VuePassword__Input--has-toggle': !$props.disableToggle
      }],
      title: $options.strengthMessage,
      value: $props.modelValue
    }, $options.attrs), null, 16, _hoisted_3)];
  }), !$props.disableToggle ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "password-toggle", {
    key: 0,
    toggle: $options.togglePassword
  }, function () {
    return [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("button", {
      class: "VuePassword__Toggle",
      title: $options.toggleMessage,
      type: "button",
      onClick: _cache[0] || (_cache[0] = function () {
        return $options.togglePassword && $options.togglePassword.apply($options, arguments);
      })
    }, [_this.type === 'text' ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "password-hide", {
      key: 0
    }, function () {
      return [_hoisted_5];
    }) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "password-show", {
      key: 1
    }, function () {
      return [_hoisted_6];
    })], 8, _hoisted_4)];
  }) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)]), !$props.disableStrength ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "strength-meter", {
    key: 0,
    strength: this.strength,
    strengthClass: $options.strengthClass,
    strengthClasses: $props.strengthClasses,
    strengthMessage: $options.strengthMessage,
    strengthMessages: $props.strengthMessages
  }, function () {
    return [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
      class: "VuePassword__Meter",
      title: $options.strengthMessage
    }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)(4, function (i) {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("svg", {
        key: i,
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(i <= $props.strength ? $options.strengthClass : ''),
        preserveAspectRatio: "none",
        "data-strength": i,
        viewBox: "0 0 2 1"
      }, _hoisted_10, 10, _hoisted_8);
    }), 64))], 8, _hoisted_7)];
  }) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)]);
}
;// CONCATENATED MODULE: ./src/components/VuePassword.vue?vue&type=template&id=bb97598c

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/VuePassword.vue?vue&type=script&lang=js
/* harmony default export */ var VuePasswordvue_type_script_lang_js = ({
  inheritAttrs: false,
  data: function data() {
    return {
      type: this.$attrs.type
    };
  },
  props: {
    classes: {
      type: [Object, Array, String]
    },
    disableStrength: Boolean,
    disableToggle: Boolean,
    strength: {
      type: Number,
      default: 0
    },
    /**
     * Classes to apply for the various strength levels.
     */
    strengthClasses: {
      type: Array,
      default: function _default() {
        return ["VuePassword--very-weak", "VuePassword--weak", "VuePassword--medium", "VuePassword--good", "VuePassword--great"];
      }
    },
    /**
     * Messages for the password strength values.
     */
    strengthMessages: {
      type: Array,
      default: function _default() {
        return ["Very Weak Password", "Weak Password", "Medium Password", "Strong Password", "Very Strong Password"];
      }
    },
    modelValue: String
  },
  computed: {
    inputElement: function inputElement() {
      if (this.$refs.input) {
        return this.$refs.input;
      }
      if (this.$el) {
        return this.$el.querySelector(".VuePassword__Container input");
      }
      return null;
    },
    attrs: function attrs() {
      return Object.assign({}, this.$attrs, {
        onInput: this.updatePassword
      });
    },
    model: {
      get: function get() {
        return this.modelValue;
      },
      set: function set(value) {
        this.$emit("update:modelValue", value);
      }
    },
    strengthClass: function strengthClass() {
      return Array.isArray(this.strengthClasses) && this.strengthClasses[this.strength];
    },
    strengthMessage: function strengthMessage() {
      if (this.disableStrength) {
        return false;
      }
      return Array.isArray(this.strengthMessages) && this.strengthMessages[this.strength];
    },
    toggleMessage: function toggleMessage() {
      return this.type === "password" ? "Show Password" : "Hide Password";
    }
  },
  watch: {
    strength: function strength(newValue, oldValue) {
      if (newValue != oldValue) {
        this.$emit("strength-updated", newValue);
      }
    }
  },
  mounted: function mounted() {
    if (!this.$attrs.type) {
      this.togglePassword(false);
    }
  },
  methods: {
    /**
     * Get the current strength class based on the current strength score.
     *
     * @param  {Number} strength
     * @return {String}
     */
    getStrengthClass: function getStrengthClass(strength) {
      if (this.strength > strength) {
        return this.strengthClasses[strength];
      }
      return "";
    },
    /**
     * Toggle the visibilty of the password.
     */
    togglePassword: function togglePassword() {
      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.type = this.type === "password" ? "text" : "password";
      this.inputElement.setAttribute("type", this.type);
      if (focus) {
        this.inputElement.focus();
      }
    },
    /**
     * Update the password input.
     *
     * @param  {String} password
     */
    updatePassword: function updatePassword(event) {
      this.model = event.target.value;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/VuePassword.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/VuePassword.vue?vue&type=style&index=0&id=bb97598c&lang=css
var VuePasswordvue_type_style_index_0_id_bb97598c_lang_css = __webpack_require__(315);
;// CONCATENATED MODULE: ./src/components/VuePassword.vue?vue&type=style&index=0&id=bb97598c&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/components/VuePassword.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(VuePasswordvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var VuePassword = (__exports__);
;// CONCATENATED MODULE: ./src/index.js
// import Vue from "vue";

function install(app) {
  if (install.installed) return;
  install.installed = true;
  app.component("VuePassword", VuePassword);
}

// const plugin = {
//   install
// };

// let GlobalVue = null;

// if (typeof window !== "undefined") {
//   GlobalVue = window.Vue;
// } else if (typeof global !== "undefined") {
//   GlobalVue = global.vue;
// }

// if (GlobalVue) {
//   GlobalVue.use(plugin);
// }

VuePassword.install = install;
/* harmony default export */ var src_0 = (VuePassword);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=VuePassword.common.js.map