global.webpackJsonp([1],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(26);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.mpType = 'app';

var app = new _index2.default();

app.$inject();

exports.default = {
  config: {
    pages: ['pages/index/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
};

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var __regular_script__, __regular_template__;
__webpack_require__(27)
__regular_script__ = __webpack_require__(29)
__regular_template__ = __webpack_require__(30)
var Regular = __webpack_require__( 3 );

var __rs__ = __regular_script__ || {};
if (__rs__.__esModule) __rs__ = __rs__["default"];
if (Regular.__esModule) Regular = Regular["default"];

var __Component__, __cps__;
if( typeof __rs__ === "object" ) {
	__rs__.template = __regular_template__.ast;
	__rs__.expressions = __regular_template__.expressions;
	__Component__ = Regular.extend(__rs__);
	__cps__ = __rs__.components || __rs__.component;
	if( typeof __cps__ === "object" ) {
		for( var i in __cps__ ) {
			__Component__.component(i, __cps__[ i ]);
		}
	}
} else if( typeof __rs__ === "function" && ( __rs__.prototype instanceof Regular ) ) {
	__rs__.prototype.template = __regular_template__.ast;
	__rs__.prototype.expressions = __regular_template__.expressions;
	__Component__ = __rs__;
}
module.exports = __Component__;

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// <template>
//   <div>12335</div>
// </template>
//
// <script>
exports.default = {
  mpType: 'app',
  created: function created() {}
};
// </script>
//
// <style>
//
// html {
//   background: #f2f2f2;
// }
//
// </style>

/* generated by regular-loader */

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = {
        ast: [{"type":"element","tag":"div","attrs":[],"children":[{"type":"text","text":"12335"}]}],
        expressions: {
    get: {},
    set: {}
    }
      }

/***/ })

},[25]);
//# sourceMappingURL=app.js.map