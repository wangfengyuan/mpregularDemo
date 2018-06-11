/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = global["webpackJsonp"];
/******/ 	global["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {__webpack_require__(33)();



var _  = module.exports;
var entities = __webpack_require__(34);
var o2str = ({}).toString;
var win = typeof window !=='undefined'? window: global;
var MAX_PRIORITY = 9999;
var config = __webpack_require__(1);


_.noop = function(){};
_.uid = (function(){
  var _uid=0;
  return function(){
    return _uid++;
  }
})();

_.extend = function( o1, o2, override ){
  for(var i in o2) if (o2.hasOwnProperty(i)){
    if( o1[i] === undefined || override === true ){
      o1[i] = o2[i]
    }
  }
  return o1;
}


_.keys = Object.keys? Object.keys: function(obj){
  var res = [];
  for(var i in obj) if(obj.hasOwnProperty(i)){
    res.push(i);
  }
  return res;
}

_.values = Object.values? Object.values: function(obj){
  var res = [];
  for(var i in obj) if(obj.hasOwnProperty(i)){
    res.push(obj[i]);
  }
  return res;
}

_.some = function(list, fn){
  for(var i =0,len = list.length; i < len; i++){
    if(fn(list[i])) return true
  }
}

_.varName = 'd';
_.setName = 'p_';
_.ctxName = 'c';
_.extName = 'e';

_.rWord = /^[\$\w]+$/;
_.rSimpleAccessor = /^[\$\w]+(\.[\$\w]+)*$/;

_.nextTick = typeof setImmediate === 'function'? 
  setImmediate.bind(win) : 
  function(callback) {
    setTimeout(callback, 0) 
  }



_.prefix = "'use strict';var " + _.varName + "=" + _.ctxName + ".data;" +  _.extName  + "=" + _.extName + "||'';";


_.slice = function(obj, start, end){
  var res = [];
  for(var i = start || 0, len = end || obj.length; i < len; i++){
    res.push(obj[i])
  }
  return res;
}

// beacuse slice and toLowerCase is expensive. we handle undefined and null in another way
_.typeOf = function (o) {
  return o == null ? String(o) :o2str.call(o).slice(8, -1).toLowerCase();
}


_.makePredicate = function makePredicate(words, prefix) {
  if (typeof words === "string") {
      words = words.split(" ");
  }
  var f = "",
  cats = [];
  out: for (var i = 0; i < words.length; ++i) {
      for (var j = 0; j < cats.length; ++j){
        if (cats[j][0].length === words[i].length) {
            cats[j].push(words[i]);
            continue out;
        }
      }
      cats.push([words[i]]);
  }

  if (cats.length < 3) {
    return function(str) {
      if (words && words.indexOf(str) !== -1) {
        return true;
      }
      return false;
    }
  }

  var lenMap = {};
  for (var k = 0; k < cats.length; ++k) {
    lenMap[cats[k][0].length] = cats[k];
  }

  return function(str) {
    var words = lenMap[str.length];
    if (words && words.indexOf(str) !== -1) {
      return true;
    }
    return false;
  }
}

// _.makePredicate = function makePredicate(words, prefix) {
//     if (typeof words === "string") {
//         words = words.split(" ");
//     }
//     var f = "",
//     cats = [];
//     out: for (var i = 0; i < words.length; ++i) {
//         for (var j = 0; j < cats.length; ++j){
//           if (cats[j][0].length === words[i].length) {
//               cats[j].push(words[i]);
//               continue out;
//           }
//         }
//         cats.push([words[i]]);
//     }
//     function compareTo(arr) {
//         if (arr.length === 1) return f += "return str === '" + arr[0] + "';";
//         f += "switch(str){";
//         for (var i = 0; i < arr.length; ++i){
//            f += "case '" + arr[i] + "':";
//         }
//         f += "return true}return false;";
//     }

//     // When there are more than three length categories, an outer
//     // switch first dispatches on the lengths, to save on comparisons.
//     if (cats.length > 3) {
//         cats.sort(function(a, b) {
//             return b.length - a.length;
//         });
//         f += "switch(str.length){";
//         for (var i = 0; i < cats.length; ++i) {
//             var cat = cats[i];
//             f += "case " + cat[0].length + ":";
//             compareTo(cat);
//         }
//         f += "}";

//         // Otherwise, simply generate a flat `switch` statement.
//     } else {
//         compareTo(words);
//     }
//     return new Function("str", f);
// }


_.trackErrorPos = (function (){
  // linebreak
  var lb = /\r\n|[\n\r\u2028\u2029]/g;
  var minRange = 50, maxRange = 20;
  function findLine(lines, pos){
    var tmpLen = 0;
    for(var i = 0,len = lines.length; i < len; i++){
      var lineLen = (lines[i] || "").length;

      if(tmpLen + lineLen > pos) {
        return {num: i, line: lines[i], start: pos - tmpLen , prev:lines[i-1], next: lines[i+1] };
      }
      // 1 is for the linebreak
      tmpLen = tmpLen + lineLen + 1;
    }
  }
  function formatLine(str, column, row, target){
    var len = str.length;
    var min = column - minRange;
    if(min < 0) min = 0;
    var max = column + maxRange;
    if(max > len) max = len;

    var remain = str.slice(min, max);
    var prefix = "[" +(row+1) + "] " + (min > 0? ".." : "")
    var postfix = max < len ? "..": "";
    var res = prefix + leadingTabsToSpaces(remain) + postfix;
    if(target) {
      res += "\n" + spaces(
        leadingTabsToSpaces(str.slice(min,column)).length +
        prefix.length
      ) + "^";
    }
    return res;
  }
  function spaces(n) {
    return new Array(n+1).join(" ")
  }
  function leadingTabsToSpaces(str) {
    return str.replace( /^\t+/, function(match) {
      return match.split('\t').join('  ');
    } )
  }
  return function(input, pos){
    if( pos > input.length-1 ) pos = input.length-1;

    lb.lastIndex = 0;
    var lines = input.split(lb);
    var line = findLine(lines,pos);
    var start = line.start, num = line.num;

    return (line.prev? formatLine(line.prev, start, num-1 ) + '\n': '' ) + 
      formatLine(line.line, start, num, true) + '\n' + 
      (line.next? formatLine(line.next, start, num+1 ) + '\n': '' );

  }
})();


var ignoredRef = /\((\?\!|\?\:|\?\=)/g;
_.findSubCapture = function (regStr) {
  var left = 0,
    right = 0,
    len = regStr.length,
    ignored = regStr.match(ignoredRef); // ignored uncapture
  if(ignored) ignored = ignored.length
  else ignored = 0;
  for (; len--;) {
    var letter = regStr.charAt(len);
    if (len === 0 || regStr.charAt(len - 1) !== "\\" ) { 
      if (letter === "(") left++;
      if (letter === ")") right++;
    }
  }
  if (left !== right) throw "RegExp: "+ regStr + "'s bracket is not marched";
  else return left - ignored;
};


_.escapeRegExp = function( str){// Credit: XRegExp 0.6.1 (c) 2007-2008 Steven Levithan <http://stevenlevithan.com/regex/xregexp/> MIT License
  return str.replace(/[-[\]{}()*+?.\\^$|,#\s]/g, function(match){
    return '\\' + match;
  });
};


var rEntity = new RegExp("&(?:(#x[0-9a-fA-F]+)|(#[0-9]+)|(" + _.keys(entities).join('|') + '));', 'gi');

_.convertEntity = function(chr){

  return ("" + chr).replace(rEntity, function(all, hex, dec, capture){
    var charCode;
    if( dec ) charCode = parseInt( dec.slice(1), 10 );
    else if( hex ) charCode = parseInt( hex.slice(2), 16 );
    else charCode = entities[capture]

    return String.fromCharCode( charCode )
  });

}


// simple get accessor

_.createObject = Object.create? function(o){
  return Object.create(o || null)
}: (function(){
    function Temp() {}
    return function(o){
      if(!o) return {}
      Temp.prototype = o;
      var obj = new Temp();
      Temp.prototype = null; // 不要保持一个 O 的杂散引用（a stray reference）...
      return obj
    }
})();

_.createProto = function(fn, o){
    function Foo() { this.constructor = fn;}
    Foo.prototype = o;
    return (fn.prototype = new Foo());
}


_.removeOne = function(list , filter){
  var len = list.length;
  for(;len--;){
    if(filter(list[len])) {
      list.splice(len, 1)
      return;
    }
  }
}


/**
clone
*/
_.clone = function clone(obj){
  if(!obj || (typeof obj !== 'object' )) return obj;
  if(Array.isArray(obj)){
    var cloned = [];
    for(var i=0,len = obj.length; i< len;i++){
      cloned[i] = obj[i]
    }
    return cloned;
  }else{
    var cloned = {};
    for(var i in obj) if(obj.hasOwnProperty(i)){
      cloned[i] = obj[i];
    }
    return cloned;
  }
}

_.equals = function(now, old){
  var type = typeof now;
  if(type === 'number' && typeof old === 'number'&& isNaN(now) && isNaN(old)) return true
  return now === old;
}

var dash = /-([a-z])/g;
_.camelCase = function(str){
  return str.replace(dash, function(all, capture){
    return capture.toUpperCase();
  })
}



_.throttle = function throttle(func, wait){
  var wait = wait || 100;
  var context, args, result;
  var timeout = null;
  var previous = 0;
  var later = function() {
    previous = +new Date;
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };
  return function() {
    var now = + new Date;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

// hogan escape
// ==============
_.escape = (function(){
  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos = /\'/g,
      rQuot = /\"/g,
      hChars = /[&<>\"\']/;

  return function(str) {
    return hChars.test(str) ?
      str
        .replace(rAmp, '&amp;')
        .replace(rLt, '&lt;')
        .replace(rGt, '&gt;')
        .replace(rApos, '&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }
})();

_.cache = function(max){
  max = max || 1000;
  var keys = [],
      cache = {};
  return {
    set: function(key, value) {
      if (keys.length > this.max) {
        cache[keys.shift()] = undefined;
      }
      // 
      if(cache[key] === undefined){
        keys.push(key);
      }
      cache[key] = value;
      return value;
    },
    get: function(key) {
      if (key === undefined) return cache;
      return cache[key];
    },
    max: max,
    len:function(){
      return keys.length;
    }
  };
}

// // setup the raw Expression


// handle the same logic on component's `on-*` and element's `on-*`
// return the fire object
_.handleEvent = function(value, type ){
  var self = this, evaluate;
  if(value.type === 'expression'){ // if is expression, go evaluated way
    evaluate = value.get;
  }
  if(evaluate){
    return function fire(obj){
      self.$update(function(){
        var data = this.data;
        data.$event = obj;
        var res = evaluate(self);
        if(res === false && obj && obj.preventDefault) obj.preventDefault();
        data.$event = undefined;
      })

    }
  }else{
    return function fire(){
      var args = _.slice(arguments);
      args.unshift(value);
      self.$update(function(){
        self.$emit.apply(self, args);
      })
    }
  }
}

// only call once
_.once = function(fn){
  var time = 0;
  return function(){
    if( time++ === 0) fn.apply(this, arguments);
  }
}

_.fixObjStr = function(str){
  if(str.trim().indexOf('{') !== 0){
    return '{' + str + '}';
  }
  return str;
}


_.map= function(array, callback){
  var res = [];
  for (var i = 0, len = array.length; i < len; i++) {
    res.push(callback(array[i], i));
  }
  return res;
}

function log(msg, type){
  if(typeof console !== "undefined")  console[type || "log"](msg);
}

_.log = log;


_.normListener = function( events  ){
    var eventListeners = [];
    var pType = _.typeOf( events );
    if( pType === 'array' ){
      return events;
    }else if ( pType === 'object' ){
      for( var i in events ) if ( events.hasOwnProperty(i) ){
        eventListeners.push({
          type: i,
          listener: events[i]
        })
      }
    }
    return eventListeners;
}


//http://www.w3.org/html/wg/drafts/html/master/single-page.html#void-elements
_.isVoidTag = _.makePredicate("area base br col embed hr img input keygen link menuitem meta param source track wbr r-content");
_.isBooleanAttr = _.makePredicate('selected checked disabled readonly required open autofocus controls autoplay compact loop defer multiple');


_.isExpr = function(expr){
  return expr && expr.type === 'expression';
}
// @TODO: make it more strict
_.isGroup = function(group){
  return group.inject || group.$inject;
}

_.blankReg = /^\s*$/; 

_.getCompileFn = function(source, ctx, options){
  return function( passedOptions ){
    if( passedOptions && options ) _.extend( passedOptions , options );
    else passedOptions = options;
    return ctx.$compile(source, passedOptions )
  }
  return ctx.$compile.bind(ctx,source, options)
}

// remove directive param from AST
_.fixTagAST = function( tagAST, Component ){

  if( tagAST.touched ) return;

  var attrs = tagAST.attrs;

  if( !attrs ) return;

  // Maybe multiple directive need same param, 
  // We place all param in totalParamMap
  var len = attrs.length;
  if(!len) return;
  var directives=[], otherAttrMap = {};
  for(;len--;){

    var attr = attrs[ len ];


    // @IE fix IE9- input type can't assign after value
    if(attr.name === 'type') attr.priority = MAX_PRIORITY + 1;

    var directive = Component.directive( attr.name );
    if( directive ) {

      attr.priority = directive.priority || 1;
      attr.directive = true;
      directives.push(attr);

    }else if(attr.type === 'attribute'){
      otherAttrMap[attr.name] = attr.value;
    }
  }

  directives.forEach( function( attr ){
    var directive = Component.directive(attr.name);
    var param = directive.param;
    if(param && param.length){
      attr.param = {};
      param.forEach(function( name ){
        if( name in otherAttrMap ){
          attr.param[name] = otherAttrMap[name] === undefined? true: otherAttrMap[name]
          _.removeOne(attrs, function(attr){
            return attr.name === name
          })
        }
      })
    }
  });

  attrs.sort(function(a1, a2){
    
    var p1 = a1.priority;
    var p2 = a2.priority;

    if( p1 == null ) p1 = MAX_PRIORITY;
    if( p2 == null ) p2 = MAX_PRIORITY;

    return p2 - p1;

  })

  tagAST.touched = true;
}

_.findItem = function(list, filter){
  if(!list || !list.length) return;
  var len = list.length;
  while(len--){
    if(filter(list[len])) return list[len]
  }
}

_.getParamObj = function(component, param){
  var paramObj = {};
  if(param) {
    for(var i in param) if(param.hasOwnProperty(i)){
      var value = param[i];
      paramObj[i] =  value && value.type==='expression'? component.$get(value): value;
    }
  }
  return paramObj;
}
_.eventReg = /^on-(\w[-\w]+)$/;

_.toText = function(obj){
  return obj == null ? "": "" + obj;
}


// hogan
// https://github.com/twitter/hogan.js
// MIT
_.escape = (function(){
  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos = /\'/g,
      rQuot = /\"/g,
      hChars = /[&<>\"\']/;

  function ignoreNullVal(val) {
    return String((val === undefined || val == null) ? '' : val);
  }

  return function (str) {
    str = ignoreNullVal(str);
    return hChars.test(str) ?
      str
        .replace(rAmp, '&amp;')
        .replace(rLt, '&lt;')
        .replace(rGt, '&gt;')
        .replace(rApos, '&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

})();

_.simpleDiff = function (now, old){
  var nlen = now.length;
  var olen = old.length;
  if(nlen !== olen){
    return true;
  }
  for(var i = 0; i < nlen ; i++){
    if(now[i] !== old[i]) return  true;
  }
  return false

}

_.getLocalComponentIndex = function (ast, options) {
  var extra = options.extra;
  if (extra.__listInfo__) {
    var listItemId = _.getListIndexArray(extra);
    if (listItemId.length > 0) {
      return ast.localComponentIndex + '-' + listItemId.join('-');
    }
  }
  return ast.localComponentIndex + '';
}

_.getListIndexArray = function(extra) {
  var listInfo = extra.__listInfo__;
  var listIndexArray = [];
  for (var i = listInfo.length - 1; i >= 0; --i) {
    var itemId = extra[listInfo[i].indexName || listInfo[i].keyName];
    if (itemId === undefined || itemId === null) {
      return [];
    }
    listIndexArray.push(itemId)
  }
  return listIndexArray;
}








/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__(31).setImmediate))

/***/ }),
/* 1 */
/***/ (function(module, exports) {


module.exports = {
  'BEGIN': '{',
  'END': '}',
  'PRECOMPILE': false
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  'COMPONENT_TYPE': 1,
  'ELEMENT_TYPE': 2,
  'ERROR': {
    'UNMATCHED_AST': 101
  },
  "MSG": {
    101: "Unmatched ast and mountNode, report issue at https://github.com/regularjs/regular/issues"
  },
  'NAMESPACE': {
    html: "http://www.w3.org/1999/xhtml",
    svg: "http://www.w3.org/2000/svg"
  },
  'OPTIONS': {
    'STABLE_INIT': { stable: !0, init: !0 },
    'FORCE_INIT': { force: !0, init: !0 },
    'STABLE': {stable: !0},
    'INIT': { init: !0 },
    'SYNC': { sync: !0 },
    'FORCE': { force: !0 }
  },
  'DIFF': {
    'REMOVE_ALL': 1,
    'ADD_ALL': 0
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * render for component in browsers
 */

var env = __webpack_require__(6);
var Lexer = __webpack_require__(8);
var Parser = __webpack_require__(9);
var config = __webpack_require__(1);
var _ = __webpack_require__(0);
var extend = __webpack_require__(36);
var shared = __webpack_require__(11);
var combine = {};

// if(env.browser){
  // var dom = require("../dom");
  var walkers = __webpack_require__(37);
  var Group = __webpack_require__(18);
  // var doc = dom.doc;
  combine = __webpack_require__(14);
// }
var events = __webpack_require__(46);
var Watcher = __webpack_require__(47);
var parse = __webpack_require__(12);
var filter = __webpack_require__(49);
var ERROR = __webpack_require__(2).ERROR;
var nodeCursor = __webpack_require__(15);
var shared = __webpack_require__(11);
var mp = __webpack_require__(19);
var NOOP = function(){};


/**
* `Regular` is regularjs's NameSpace and BaseClass. Every Component is inherited from it
* 
* @class Regular
* @module Regular
* @constructor
* @param {Object} options specification of the component
*/
var Regular = function(definition, options = {}) {
  if (this.mpType && !options.page) {
    var Component = this.constructor;
    mp.initMP(this, {
      Component,
      definition,
      options
    });
    return;
  }


  var prevRunning = env.isRunning;
  env.isRunning = true;
  var node, template, cursor, context = this, body, mountNode;
  options = options || {};
  definition = definition || {};

  var dtemplate = definition.template;

  // if(env.browser) {

  //   if( node = tryGetSelector( dtemplate ) ){
  //     dtemplate = node;
  //   }
  //   if( dtemplate && dtemplate.nodeType ){
  //     definition.template = dtemplate.innerHTML
  //   }
    
  //   mountNode = definition.mountNode;
  //   if(typeof mountNode === 'string'){
  //     mountNode = dom.find( mountNode );
  //     if(!mountNode) throw Error('mountNode ' + mountNode + ' is not found')
  //   } 

  //   if(mountNode){
  //     cursor = nodeCursor(mountNode.firstChild, mountNode)
  //     delete definition.mountNode
  //   }else{
  //     cursor = options.cursor
  //   }
  // }

  template = shared.initDefinition(context, definition)
  
  context.$parent = context.$parent || options.$parent;

  if(context.$parent){
    context.$parent._append(context);
  }
  context._children = [];
  context.$refs = {};
  context.$root = context.$root || (options.$parent && options.$parent.$root) || context;

  var extra = options.extra;
  var oldModify = extra && extra.$$modify;

  
  var newExtra;
  if( body = context._body ){
    context._body = null
    var modifyBodyComponent = context.modifyBodyComponent;
    if( typeof modifyBodyComponent  === 'function'){
      modifyBodyComponent = modifyBodyComponent.bind(this)
      newExtra = _.createObject(extra);
      newExtra.$$modify = function( comp ){
        return modifyBodyComponent(comp, oldModify? oldModify: NOOP)
      }
    }else{ //@FIXIT: multiply modifier
      newExtra = extra
    }
    if(body.ast && body.ast.length){
      context.$body = _.getCompileFn(body.ast, body.ctx , {
        outer: context,
        namespace: options.namespace,
        extra: newExtra,
        record: true
      })
    }
  }

  // handle computed
  if(template){
    var cplOpt = {
      namespace: options.namespace,
      cursor: cursor
    }
    // if(extra && extra.$$modify){
      cplOpt.extra = {$$modify : extra&& extra.$$modify}
    // }
    context.group = context.$compile(template, cplOpt);
    combine.node(context);
  }



  // modify在compile之后调用， 这样就无需处理SSR相关逻辑
  
  if( oldModify ){
    oldModify(this);
  }

  // this is outest component
  if( !context.$parent ) context.$update();
  context.$ready = true;

  context.$emit("$init");
  if(context.init ) context.init( context.data );
  context.$emit("$afterInit");

  env.isRunning = prevRunning;

  // children is not required;
  
  if (this.devtools) {
    this.devtools.emit("init", this)
  }

}

// check if regular devtools hook exists
if(typeof window !== 'undefined'){
  var devtools = window.__REGULAR_DEVTOOLS_GLOBAL_HOOK__;
  if (devtools) {
    Regular.prototype.devtools = devtools;
  }
}

walkers && (walkers.Regular = Regular);


// description
// -------------------------
// 1. Regular and derived Class use same filter
_.extend(Regular, {
  // private data stuff
  _directives: { __regexp__:[] },
  _plugins: {},
  _protoInheritCache: [ 'directive', 'use'] ,
  __after__: function(supr, o) {

    var template;
    this.__after__ = supr.__after__;

    // use name make the component global.
    if(o.name) Regular.component(o.name, this);
    // this.prototype.template = dom.initTemplate(o)
    if(template = o.template){
      var node, name;
      // if( env.browser ){
      //   if( node = tryGetSelector(template) ) template = node ;
      //   if( template && template.nodeType ){

      //     if(name = dom.attr(template, 'name')) Regular.component(name, this);

      //     template = template.innerHTML;
      //   } 
      // }

      if(typeof template === 'string' ){
        this.prototype.template = config.PRECOMPILE? new Parser(template).parse(): template;
      }
    }

    if(o.computed) this.prototype.computed = shared.handleComputed(o.computed);
    // inherit directive and other config from supr
    Regular._inheritConfig(this, supr);

  },
  /**
   * Define a directive
   *
   * @method directive
   * @return {Object} Copy of ...
   */  
  directive: function(name, cfg){
    if(!name) return;

    var type = typeof name;
    if(type === 'object' && !cfg){
      for(var k in name){
        if(name.hasOwnProperty(k)) this.directive(k, name[k]);
      }
      return this;
    }
    var directives = this._directives, directive;
    if(cfg == null){
      if( type === 'string' ){
        if( directive = directives[name] ) return directive;
        else{
          var regexp = directives.__regexp__;
          for(var i = 0, len = regexp.length; i < len ; i++){
            directive = regexp[i];
            var test = directive.regexp.test(name);
            if(test) return directive;
          }
        }
      }
    }else{
      if( typeof cfg === 'function') cfg = { link: cfg } 
      if( type === 'string' ) directives[name] = cfg;
      else{
        cfg.regexp = name;
        directives.__regexp__.push(cfg)
      }
      return this
    }
  },
  plugin: function(name, fn){
    var plugins = this._plugins;
    if(fn == null) return plugins[name];
    plugins[name] = fn;
    return this;
  },
  use: function(fn){
    if(typeof fn === "string") fn = Regular.plugin(fn);
    if(typeof fn !== "function") return this;
    fn(this, Regular);
    return this;
  },
  // config the Regularjs's global
  config: function(name, value){
    var needGenLexer = false;
    if(typeof name === "object"){
      for(var i in name){
        // if you config
        if( i ==="END" || i==='BEGIN' )  needGenLexer = true;
        config[i] = name[i];
      }
    }
    if(needGenLexer) Lexer.setup();
  },
  expression: parse.expression,
  Parser: Parser,
  Lexer: Lexer,
  _addProtoInheritCache: function(name, transform){
    if( Array.isArray( name ) ){
      return name.forEach(Regular._addProtoInheritCache);
    }
    var cacheKey = "_" + name + "s"
    Regular._protoInheritCache.push(name)
    Regular[cacheKey] = {};
    if(Regular[name]) return;
    Regular[name] = function(key, cfg){
      var cache = this[cacheKey];

      if(typeof key === "object"){
        for(var i in key){
          if(key.hasOwnProperty(i)) this[name](i, key[i]);
        }
        return this;
      }
      if(cfg == null) return cache[key];
      cache[key] = transform? transform(cfg) : cfg;
      return this;
    }
  },
  _inheritConfig: function(self, supr){

    // prototype inherit some Regular property
    // so every Component will have own container to serve directive, filter etc..
    var defs = Regular._protoInheritCache;
    var keys = _.slice(defs);
    keys.forEach(function(key){
      self[key] = supr[key];
      var cacheKey = '_' + key + 's';
      if(supr[cacheKey]) self[cacheKey] = _.createObject(supr[cacheKey]);
    })
    return self;
  }

});

extend(Regular);

Regular._addProtoInheritCache("component")

Regular._addProtoInheritCache("filter", function(cfg){
  return typeof cfg === "function"? {get: cfg}: cfg;
})


events.mixTo(Regular);
Watcher.mixTo(Regular);

Regular.implement({
  init: function(){},
  config: function(){},
  destroy: function(){
    // destroy event wont propgation;
    this.$emit("$destroy");
    this._watchers = null;
    this._watchersForStable = null;
    this.group && this.group.destroy(true);
    this.group = null;
    this.parentNode = null;
    this._children = null;
    this.$root = null;
    this._handles = null;
    this.$refs = null;
    var parent = this.$parent;
    if(parent && parent._children){
      var index = parent._children.indexOf(this);
      parent._children.splice(index,1);
    }
    this.$parent = null;

    if (this.devtools) {
      this.devtools.emit("destroy", this)
    }
    this._handles = null;
    this.$phase = "destroyed";
  },

  /**
   * compile a block ast ; return a group;
   * @param  {Array} parsed ast
   * @param  {[type]} record
   * @return {[type]}
   */
  $compile: function(ast, options){
    options = options || {};
    if(typeof ast === 'string'){
      ast = new Parser(ast).parse()
    }
    var preExt = this.__ext__,
      record = options.record, 
      records;

    if(options.extra) this.__ext__ = options.extra;


    if(record) this._record();
    var group = this._walk(ast, options);
    if(record){
      records = this._release();
      var self = this;
      if( records.length ){
        // auto destroy all wather;
        group.ondestroy = function(){ self.$unwatch(records); }
      }
    }
    if(options.extra) this.__ext__ = preExt;
    return group;
  },


  /**
   * create two-way binding with another component;
   * *warn*: 
   *   expr1 and expr2 must can operate set&get, for example: the 'a.b' or 'a[b + 1]' is set-able, but 'a.b + 1' is not, 
   *   beacuse Regular dont know how to inverse set through the expression;
   *   
   *   if before $bind, two component's state is not sync, the component(passed param) will sync with the called component;
   *
   * *example: *
   *
   * ```javascript
   * // in this example, we need to link two pager component
   * var pager = new Pager({}) // pager compoennt
   * var pager2 = new Pager({}) // another pager component
   * pager.$bind(pager2, 'current'); // two way bind throw two component
   * pager.$bind(pager2, 'total');   // 
   * // or just
   * pager.$bind(pager2, {"current": "current", "total": "total"}) 
   * ```
   * 
   * @param  {Regular} component the
   * @param  {String|Expression} expr1     required, self expr1 to operate binding
   * @param  {String|Expression} expr2     optional, other component's expr to bind with, if not passed, the expr2 will use the expr1;
   * @return          this;
   */
  $bind: function(component, expr1, expr2){
    var type = _.typeOf(expr1);
    if( expr1.type === 'expression' || type === 'string' ){
      this._bind(component, expr1, expr2)
    }else if( type === "array" ){ // multiply same path binding through array
      for(var i = 0, len = expr1.length; i < len; i++){
        this._bind(component, expr1[i]);
      }
    }else if(type === "object"){
      for(var i in expr1) if(expr1.hasOwnProperty(i)){
        this._bind(component, i, expr1[i]);
      }
    }
    // digest
    component.$update();
    return this;
  },
  /**
   * unbind one component( see $bind also)
   *
   * unbind will unbind all relation between two component
   * 
   * @param  {Regular} component [descriptionegular
   * @return {This}    this
   */
  $unbind: function(){
    // todo
  },
  $inject: combine.inject,
  $mute: function(isMute){

    isMute = !!isMute;

    var needupdate = isMute === false && this._mute;

    this._mute = !!isMute;

    if(needupdate) this.$update();
    return this;
  },
  // private bind logic
  _bind: function(component, expr1, expr2){

    var self = this;
    // basic binding

    if(!component || !(component instanceof Regular)) throw "$bind() should pass Regular component as first argument";
    if(!expr1) throw "$bind() should  pass as least one expression to bind";

    if(!expr2) expr2 = expr1;

    expr1 = parse.expression( expr1 );
    expr2 = parse.expression( expr2 );

    // set is need to operate setting ;
    if(expr2.set){
      var wid1 = this.$watch( expr1, function(value){
        component.$update(expr2, value)
      });
      component.$on('$destroy', function(){
        self.$unwatch(wid1)
      })
    }
    if(expr1.set){
      var wid2 = component.$watch(expr2, function(value){
        self.$update(expr1, value)
      });
      // when brother destroy, we unlink this watcher
      this.$on('$destroy', component.$unwatch.bind(component,wid2))
    }
    // sync the component's state to called's state
    expr2.set(component, expr1.get(this));
  },
  _walk: function(ast, options){
    if( Array.isArray(ast) ){
      var res = [];

      for(var i = 0, len = ast.length; i < len; i++){
        var ret = this._walk(ast[i], options);
        if(ret && ret.code === ERROR.UNMATCHED_AST){
          ast.splice(i, 1);
          i--;
          len--;
        }else res.push( ret );
      }
      return new Group(res);
    }
    if(typeof ast === 'string') {
      // return doc.createTextNode(ast)
      return;
    }
    return walkers[ast.type || "default"].call(this, ast, options);
  },
  _append: function(component){
    this._children.push(component);
    component.$parent = this;
  },
  _handleEvent: function(elem, type, value, attrs){
    // var Component = this.constructor,
    //   fire = typeof value !== "function"? _.handleEvent.call( this, value, type ) : value,
    //   handler = Component.event(type), destroy;

    // if ( handler ) {
    //   destroy = handler.call(this, elem, fire, attrs);
    // } else {
    //   dom.on(elem, type, fire);
    // }
    // return handler ? destroy : function() {
    //   dom.off(elem, type, fire);
    // }
    var eventId = attrs.eventId;
    this._addMPEventHandler(eventId, type, value);

    return function() {}
  },
  // 1. 用来处理exprBody -> Function
  // 2. list里的循环
  _touchExpr: function(expr, ext){
    var rawget, touched = {}, expressions = this.expressions;
    ext = ext || this.__ext__;
    if(expr.type !== 'expression' || expr.touched) return expr;

    rawget = expr.get;
    if(!rawget) {
      // rawget = expr.get = new Function(_.ctxName, _.extName , _.prefix+ "return (" + expr.body + ")");
      if (expr.holderId !== undefined) {
        var exprBody = expr.body;
        var holderId = expr.holderId || '0';
        rawget = expr.get = function(ctx, e) {
          var v = expressions.get[exprBody](ctx, e);
          ctx._updateMPHolders(v, {
            key: '__holders',
            id: holderId,
            extra: e,
          });
          return v;
        }
      } else {
        rawget = expr.get = expressions.get[expr.body];
      }
      expr.body = null;
    }
    touched.get = !ext? rawget : rawget && function(context, e){
      return rawget( context, e || ext )
    }

    if(expr.setbody && !expr.set){
      var setbody = expr.setbody;
      var filters = expr.filters;
      var self = this;
      if(!filters || !_.some(filters, function(filter){ return !self._f_(filter).set }) ){
        expr.set = function(ctx, value, ext){
          // expr.set = new Function(_.ctxName, _.setName , _.extName, _.prefix + setbody);          
          expr.set = expressions.set[setbody];
          return expr.set(ctx, value, ext);
        }
      }
      expr.filters = expr.setbody = null;
    }
    if(expr.set){
      touched.set = !ext? expr.set : function(ctx, value){
        return expr.set(ctx, value, ext);
      }
    }

    touched.type = 'expression';
    touched.touched = true;
    touched.once = expr.once || expr.constant;
    return touched
  },
  // find filter
  _f_: function(name){
    var Component = this.constructor;
    var filter = Component.filter(name);
    if(!filter) throw Error('filter ' + name + ' is undefined');
    return filter;
  },
  // simple accessor get
  _sg_:function(path, defaults, ext){
    if( path === undefined ) return undefined;
    if(ext && typeof ext === 'object'){
      if(ext[path] !== undefined)  return ext[path];
    }
    var computed = this.computed,
      computedProperty = computed[path];
    if(computedProperty){
      if(computedProperty.type==='expression' && !computedProperty.get) this._touchExpr(computedProperty);
      if(computedProperty.get)  return computedProperty.get(this);
      else _.log("the computed '" + path + "' don't define the get function,  get data."+path + " altnately", "warn")
    }

    if( defaults === undefined  ){
      return undefined;
    }
    return defaults[path];

  },
  // simple accessor set
  _ss_:function(path, value, data , op, computed){
    var computed = this.computed,
      op = op || "=", prev, 
      computedProperty = computed? computed[path]:null;

    if(op !== '='){
      prev = computedProperty? computedProperty.get(this): data[path];
      switch(op){
        case "+=":
          value = prev + value;
          break;
        case "-=":
          value = prev - value;
          break;
        case "*=":
          value = prev * value;
          break;
        case "/=":
          value = prev / value;
          break;
        case "%=":
          value = prev % value;
          break;
      }
    }
    if(computedProperty) {
      if(computedProperty.set) return computedProperty.set(this, value);
    }
    data[path] = value;
    return value;
  }
});

Regular.prototype.inject = function(){
  _.log("use $inject instead of inject", "warn");
  return this.$inject.apply(this, arguments);
}


// only one builtin filter

Regular.filter(filter);

mp.install(Regular);

module.exports = Regular;


// function tryGetSelector(tpl){
//   var node;
//   if( typeof tpl === 'string' && tpl.length < 16 && (node = dom.find( tpl )) ) {
//     _.log("pass selector as template has be deprecated, pass node or template string instead", 'warn')
//     return node
//   }
// }


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var env =  __webpack_require__(6);
var config = __webpack_require__(1); 
var Regular = module.exports = __webpack_require__(3);
var Parser = Regular.Parser;
var Lexer = Regular.Lexer;

// if(env.browser){
    __webpack_require__(50);
    // require("./directive/animation");
    __webpack_require__(53);
    // Regular.dom = require("./dom");
// }
Regular.env = env;
Regular.util = __webpack_require__(0);
Regular.parse = function(str, options){
  options = options || {};

  if(options.BEGIN || options.END){
    if(options.BEGIN) config.BEGIN = options.BEGIN;
    if(options.END) config.END = options.END;
    Lexer.setup();
  }
  var ast = new Parser(str).parse();
  return !options.stringify? ast : JSON.stringify(ast);
}
Regular.Cursor =__webpack_require__(15) 

Regular.isServer = env.node;
Regular.isRegular = function( Comp ){
  return  Comp.prototype instanceof Regular;
}




/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const Buffer = __webpack_require__(39);

function initRootVM(page, opt) {
  var _opt = Object.assign({}, opt.options, {
    page: this
  });

  var rootVM = new opt.Component(opt.definition, _opt);

  rootVM.$mp = {
    page: page,
    status: 'load',
    buffer: new Buffer()
  };

  return rootVM;
}

function getLocalComponentIndex(vm = {}) {
  return vm._localComponentIndex || '0';
}

function getParentKey(vm) {
  var res = [];
  var cursor = vm;
  cursor = vm.$parent;
  while(cursor) {
    res.unshift(getLocalComponentIndex(cursor)); 
    cursor = cursor.$parent;
  }
  return res;
}

function extractData(obj, fn) {
  return Object.keys(obj)
    .filter(key => !!~['__holders', '__wxparsed'].indexOf(key))
    .reduce(function(res, key) {
      var v = obj[key];
      res[key] = typeof fn === 'function' ? fn(v) : v;
      return res;
    }, {})
}

function getData(vm) {
  return Object.assign(
    {},
    extractData(vm),
    // extractData(vm.data),
    // extractData(vm.computed, function(v) {return v.get(vm)})
  )
}


function getVm(rootVM, $k = '') {
  var path = $k.split(',').slice(1);
  var i = 0;
  var cursor = rootVM;
  while(cursor && cursor._children && path[i] !== undefined) {
    cursor = getVmByLocalComponentIndex(cursor._children, path[i]);
    i++;
  }
  return cursor;
}

function getMP(vm) {
  if (!vm || !vm.$root || !vm.$root.$mp) {
    return;
  }

  return vm.$root.$mp;
}

function getBuffer(vm) {
  if (!vm || !vm.$root || !vm.$root.$mp || !vm.$root.$mp.buffer) {
    return;
  }

  return vm.$root.$mp.buffer;
}

function getPage(vm) {
  if (!vm || !vm.$root || !vm.$root.$mp) {
    return;
  }

  return vm.$root.$mp.page;
}

function getVmByLocalComponentIndex(vms, id) {
  for(var i = 0;i < vms.length; ++i) {
    if (vms[i]._localComponentIndex === id) {
      return vms[i];
    }
  }
}

module.exports = {
  getLocalComponentIndex,
  getParentKey,
  getData,
  getVm,
  getPage,
  getMP,
  getBuffer,
  getVmByLocalComponentIndex,
  initRootVM
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// some fixture test;
// ---------------
var _ = __webpack_require__(0);
exports.svg = (function(){
  return typeof document !== "undefined" && document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1" );
})();


exports.browser = typeof document !== "undefined" && document.nodeType;
// whether have component in initializing
exports.exprCache = _.cache(1000);
exports.node = typeof process !== "undefined" && ( '' + process ) === '[object process]';
exports.isRunning = false;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(0);
var config = __webpack_require__(1);
var createFSM = __webpack_require__(35);

// some custom tag  will conflict with the Lexer progress
var conflictTag = {"}": "{", "]": "["}, map1, map2;
// some macro for lexer
var macro = {
  'NAME': /(?:[:_A-Za-z][-\.:_0-9A-Za-z]*)/,
  'IDENT': /[\$_A-Za-z][_0-9A-Za-z\$]*/,
  'SPACE': /[\r\n\t\f ]/
}


var test = /a|(b)/.exec("a");
var testSubCapure = test && test[1] === undefined? 
  function(str){ return str !== undefined }
  :function(str){return !!str};

function wrapHander(handler){
  return function(all){
    return {type: handler, value: all }
  }
}

function Lexer(input, opts){
  if(conflictTag[config.END]){
    this.markStart = conflictTag[config.END];
    this.markEnd = config.END;
  }

  this.input = input||"";
  this.opts = opts || {};
  this.syntaxSets = createFSM();
  this.state = createFSM();
  this.map = this.opts.mode !== 2?  map1: map2;
  this.syntaxSets.enter('INIT');
  if(opts && opts.expression){
     this.syntaxSets.enter('JST');
     this.expression = true;
  }
}

var lo = Lexer.prototype


lo.lex = function(str){
  str = str || this.input
  var leadingWhitespaces = /^\s*/.exec(str)
  str = str.trim();
  var tokens = [], split, test,mlen, token, syntax;
  this.input = str, 
  this.marks = 0;
  // fix the pos offset caused by trim
  this.index=leadingWhitespaces ? leadingWhitespaces[0].length : 0;
  var i = 0;
  while(str){
    i++
    syntax = this.syntaxSets.get();
    split = this.map[syntax];
    test = split.TRUNK.exec(str);
    if(!test){
      this.error('Unrecoginized Token');
    }
    mlen = test[0].length;
    str = str.slice(mlen)
    token = this._process.call(this, test, split, str)
    if(token) tokens.push(token)
    this.index += mlen;
    // if(state == 'TAG' || state == 'JST') str = this.skipspace(str);
  }

  tokens.push({type: 'EOF'});
  
  return tokens;
}

lo.error = function(msg){
  throw  Error("Parse Error: " + msg +  ':\n' + _.trackErrorPos(this.input, this.index));
}

lo._process = function(args, split,str){
  // console.log(args.join(","), this.state())
  var links = split.links, marched = false, token;

  for(var len = links.length, i=0;i<len ;i++){
    var link = links[i],
      handler = link[2],
      index = link[0];
    // if(args[6] === '>' && index === 6) console.log('haha')
    if(testSubCapure(args[index])) {
      marched = true;
      if(handler){
        token = handler.apply(this, _.slice(args, index, index + link[1]))
        if(token)  token.pos = this.index;
      }
      break;
    }
  }
  if(!marched){ // in ie lt8 . sub capture is "" but ont 
    switch(str.charAt(0)){
      case "<":
        this.syntaxSets.enter("TAG");
        break;
      default:
        this.syntaxSets.enter("JST");
        break;
    }
  }
  return token;
}

Lexer.setup = function(){
  macro.END = config.END;
  macro.BEGIN = config.BEGIN;
  
  // living template lexer
  map1 = genMap([
    // INIT
    rules.BODY_END,
    rules.ENTER_JST,
    rules.ENTER_TAG,
    rules.TEXT,

    //TAG
    rules.TAG_NAME,
    rules.TAG_OPEN,
    rules.TAG_CLOSE,
    rules.TAG_PUNCHOR,
    rules.TAG_ENTER_JST,
    rules.TAG_UNQ_VALUE,
    rules.TAG_STRING,
    rules.TAG_SPACE,
    rules.TAG_COMMENT,

    // JST
    rules.JST_OPEN,
    rules.JST_BODY_OPEN,
    rules.JST_CLOSE,
    rules.JST_EXPR_OPEN,
    rules.JST_IDENT,
    rules.JST_SPACE,
    rules.JST_LEAVE,
    rules.JST_NUMBER,
    rules.JST_PUNCHOR,
    rules.JST_STRING,
    rules.JST_COMMENT
    ])

  // ignored the tag-relative token
  map2 = genMap([
    // INIT no < restrict
    rules.BODY_END,
    rules.ENTER_JST2,
    rules.TEXT,
    // JST
    rules.JST_OPEN,
    rules.JST_BODY_OPEN,
    rules.JST_CLOSE,
    rules.JST_EXPR_OPEN,
    rules.JST_IDENT,
    rules.JST_SPACE,
    rules.JST_LEAVE,
    rules.JST_NUMBER,
    rules.JST_PUNCHOR,
    rules.JST_STRING,
    rules.JST_COMMENT
    ])
}


function genMap(rules){
  var rule, map = {}, sign;
  for(var i = 0, len = rules.length; i < len ; i++){
    rule = rules[i];
    sign = rule[2] || 'INIT';
    ( map[sign] || (map[sign] = {rules:[], links:[]}) ).rules.push(rule);
  }
  return setup(map);
}

function setup(map){
  var split, rules, trunks, handler, reg, retain, rule;
  function replaceFn(all, one){
    return typeof macro[one] === 'string'? 
      _.escapeRegExp(macro[one]) 
      : String(macro[one]).slice(1,-1);
  }

  for(var i in map){

    split = map[i];
    split.curIndex = 1;
    rules = split.rules;
    trunks = [];

    for(var j = 0,len = rules.length; j<len; j++){
      rule = rules[j]; 
      reg = rule[0];
      handler = rule[1];

      if(typeof handler === 'string'){
        handler = wrapHander(handler);
      }
      if(_.typeOf(reg) === 'regexp') reg = reg.toString().slice(1, -1);

      reg = reg.replace(/\{(\w+)\}/g, replaceFn)
      retain = _.findSubCapture(reg) + 1; 
      split.links.push([split.curIndex, retain, handler]); 
      split.curIndex += retain;
      trunks.push(reg);
    }
    split.TRUNK = new RegExp("^(?:(" + trunks.join(")|(") + "))")
  }
  return map;
}

var rules = {

  // 1. INIT
  // ---------------

  // mode1's JST ENTER RULE
  ENTER_JST: [/[^\x00<]*?(?={BEGIN})/, function(all){
    this.syntaxSets.enter('JST');
    if(all) return {type: 'TEXT', value: all}
  }],

  // mode2's JST ENTER RULE
  ENTER_JST2: [/[^\x00]*?(?={BEGIN})/, function(all){
    this.syntaxSets.enter('JST');
    if(all) return {type: 'TEXT', value: all}
  }],

  ENTER_TAG: [/[^\x00]*?(?=<[\w\/\!])/, function(all){ 
    this.syntaxSets.enter('TAG');
    if(all) return {type: 'TEXT', value: all}
  }],

  // {~ <div></div> }
  BODY_END: [/{SPACE}*{END}/,  function(val){
    var sets = this.syntaxSets.all(), slen = sets.length;

    if(sets[slen-2] === 'JST'){
      this.syntaxSets.leave('INIT');
      this.syntaxSets.leave('JST');
      return {type: 'END'}
    }

    return { type: 'TEXT', value: val }

  } ],

  TEXT: [/[^\x00]+/, 'TEXT' ],

  // 2. TAG
  // --------------------
  TAG_NAME: [/{NAME}/, 'NAME', 'TAG'],
  TAG_UNQ_VALUE: [/[^\{}&"'=><`\r\n\f\t ]+/, 'UNQ', 'TAG'],

  TAG_OPEN: [/<({NAME})\s*/, function(all, one){ //"
    return {type: 'TAG_OPEN', value: one}
  }, 'TAG'],
  TAG_CLOSE: [/<\/({NAME})[\r\n\f\t ]*>/, function(all, one){
    this.syntaxSets.leave();
    return {type: 'TAG_CLOSE', value: one }
  }, 'TAG'],

    // mode2's JST ENTER RULE
  TAG_ENTER_JST: [/(?={BEGIN})/, function(){
    this.syntaxSets.enter('JST');
  }, 'TAG'],


  TAG_PUNCHOR: [/[\>\/=&]/, function(all){
    if(all === '>') this.syntaxSets.leave();
    return {type: all, value: all }
  }, 'TAG'],

  TAG_STRING:  [ /'([^']*)'|"([^"]*)\"/, /*'*/  function(all, one, two){ 
    var value = one || two || "";

    return {type: 'STRING', value: value}
  }, 'TAG'],

  TAG_SPACE: [/{SPACE}+/, null, 'TAG'],
  TAG_COMMENT: [/<\!--([^\x00]*?)--\>/, function(all){
    this.syntaxSets.leave()
    // this.leave('TAG')
  } ,'TAG'],

  // 3. JST
  // -------------------
  JST_OPEN: ['{BEGIN}#{SPACE}*({IDENT})', function(all, name){
    this.state.enter('JST_OPEN');
    return {
      type: 'OPEN',
      value: name
    }
  }, 'JST'],
  // title = {~ <div></div>}
  JST_BODY_OPEN: ['{BEGIN}~{SPACE}*', function(all, name){
    this.syntaxSets.enter('INIT');
    return {
      type: 'BODY_OPEN',
      value: name
    }
  }, 'JST'],
  JST_LEAVE: [/{END}/, function(all){
    if(this.markEnd === all && this.expression) return {type: this.markEnd, value: this.markEnd};
    if(!this.markEnd || !this.marks ){
      this.state.leave('JST_OPEN');
      this.state.leave('JST_EXPR_OPEN');
      this.syntaxSets.leave('JST');
      return {type: 'END'}
    }else{
      this.marks--;
      return {type: this.markEnd, value: this.markEnd}
    }
  }, 'JST'],
  JST_CLOSE: [/{BEGIN}\s*\/({IDENT})\s*{END}/, function(all, one){
    this.syntaxSets.leave('JST');
    return {
      type: 'CLOSE',
      value: one
    }
  }, 'JST'],
  JST_COMMENT: [/{BEGIN}\!([^\x00]*?)\!{END}/, function(){
    this.syntaxSets.leave();
  }, 'JST'],
  JST_EXPR_OPEN: ['{BEGIN}',function(all, one){
    if(all === this.markStart){
      if(this.expression) return { type: this.markStart, value: this.markStart };
      if(this.state.is('JST_OPEN') || this.state.is('JST_EXPR_OPEN') || this.marks){
        this.marks++
        return { type: this.markStart, value: this.markStart };
      }else{
        this.state.enter('JST_EXPR_OPEN');
      }
    }
    return {
      type: 'EXPR_OPEN',
      escape: false
    }

  }, 'JST'],
  JST_IDENT: ['{IDENT}', 'IDENT', 'JST'],
  JST_SPACE: [/[ \r\n\f]+/, null, 'JST'],
  JST_PUNCHOR: [/[=!]?==|[-=><+*\/%\!]?\=|\|\||&&|\@\(|\.\.|[<\>\[\]\(\)\-\|\{}\+\*\/%?:\.!,]/, function(all){
    return { type: all, value: all }
  },'JST'],

  JST_STRING:  [ /'([^']*)'|"([^"]*)"/, function(all, one, two){ //"'
    return {type: 'STRING', value: one || two || ""}
  }, 'JST'],
  JST_NUMBER: [/(?:[0-9]*\.[0-9]+|[0-9]+)(e\d+)?/, function(all){
    return {type: 'NUMBER', value: parseFloat(all, 10)};
  }, 'JST']
}


// setup when first config
Lexer.setup();



module.exports = Lexer;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(0);

var config = __webpack_require__(1);
var node = __webpack_require__(10);
var Lexer = __webpack_require__(8);
var varName = _.varName;
var ctxName = _.ctxName;
var extName = _.extName;
var isPath = _.makePredicate("STRING IDENT NUMBER");
var isKeyWord = _.makePredicate("true false undefined null this Array Date JSON Math NaN RegExp decodeURI decodeURIComponent encodeURI encodeURIComponent parseFloat parseInt Object");
var isInvalidTag = _.makePredicate("script style");
var isLastBind = /\.bind$/;



function Parser(input, opts){
  opts = opts || {};

  this.input = input;
  this.tokens = new Lexer(input, opts).lex();
  this.pos = 0;
  this.length = this.tokens.length;
}


var op = Parser.prototype;


op.parse = function(){
  this.pos = 0;
  var res= this.program();
  if(this.ll().type === 'TAG_CLOSE'){
    this.error("You may got a unclosed Tag")
  }
  return res;
}

op.ll =  function(k){
  k = k || 1;
  if(k < 0) k = k + 1;
  var pos = this.pos + k - 1;
  if(pos > this.length - 1){
      return this.tokens[this.length-1];
  }
  return this.tokens[pos];
}
  // lookahead
op.la = function(k){
  return (this.ll(k) || '').type;
}

op.match = function(type, value){
  var ll;
  if(!(ll = this.eat(type, value))){
    ll  = this.ll();
    this.error('expect [' + type + (value == null? '':':'+ value) + ']" -> got "[' + ll.type + (value==null? '':':'+ll.value) + ']', ll.pos)
  }else{
    return ll;
  }
}

op.error = function(msg, pos){
  msg =  "\n【 parse failed 】 " + msg +  ':\n\n' + _.trackErrorPos(this.input, typeof pos === 'number'? pos: this.ll().pos||0);
  throw new Error(msg);
}

op.next = function(k){
  k = k || 1;
  this.pos += k;
}
op.eat = function(type, value){
  var ll = this.ll();
  if(typeof type !== 'string'){
    for(var len = type.length ; len--;){
      if(ll.type === type[len]) {
        this.next();
        return ll;
      }
    }
  }else{
    if( ll.type === type && (typeof value === 'undefined' || ll.value === value) ){
       this.next();
       return ll;
    }
  }
  return false;
}

// program
//  :EOF
//  | (statement)* EOF
op.program = function(isAttr){
  var statements = [],  ll = this.ll();
  while(ll.type !== 'EOF' && ll.type !=='TAG_CLOSE'){

    statements.push(this.statement());
    ll = this.ll();
    // {~ <div></div>}
    if( isAttr && ll.type === 'END'){
      this.next();
      return node.body(statements)
    }
  }
  // if(ll.type === 'TAG_CLOSE') this.error("You may have unmatched Tag")
  return statements;
}

// statement
//  : xml
//  | jst
//  | text
var rRN = /\r\n/g;
op.statement = function(){
  var ll = this.ll();
  switch(ll.type){
    case 'NAME':
    case 'TEXT':
      var text = ll.value;
      this.next();
      while(ll = this.eat(['NAME', 'TEXT'])){
        text += ll.value;
      }
      return node.text(text.replace(rRN, '\n'));
    case 'TAG_OPEN':
      return this.xml();
    case 'OPEN': 
      return this.directive();
    case 'EXPR_OPEN':
      return this.interplation();
    default:
      this.error('Unexpected token: '+ this.la())
  }
}

// xml 
// stag statement* TAG_CLOSE?(if self-closed tag)
op.xml = function(){
  var name, attrs, children, selfClosed;
  name = this.match('TAG_OPEN').value;

  if( isInvalidTag(name)){
    this.error('Invalid Tag: ' + name);
  }
  attrs = this.attrs();
  selfClosed = this.eat('/')
  this.match('>');
  if( !selfClosed && !_.isVoidTag(name) ){
    children = this.program();
    if(!this.eat('TAG_CLOSE', name)) this.error('expect </'+name+'> got'+ 'no matched closeTag')
  }
  return node.element(name, attrs, children);
}

// xentity
//  -rule(wrap attribute)
//  -attribute
//
// __example__
//  name = 1 |  
//  ng-hide |
//  on-click={{}} | 
//  {{#if name}}on-click={{xx}}{{#else}}on-tap={{}}{{/if}}

op.xentity = function(ll){
  var name = ll.value, value, modifier;
  if(ll.type === 'NAME'){
    //@ only for test
    if(~name.indexOf('.')){
      var tmp = name.split('.');
      name = tmp[0];
      modifier = tmp[1]

    }
    if( this.eat("=") ) value = this.attvalue(modifier);
    return node.attribute( name, value, modifier );
  }else{
    if( name !== 'if') this.error("current version. ONLY RULE #if #else #elseif is valid in tag, the rule #" + name + ' is invalid');
    return this['if'](true);
  }

}

// stag     ::=    '<' Name (S attr)* S? '>'  
// attr    ::=     Name Eq attvalue
op.attrs = function(isAttribute){
  var eat
  if(!isAttribute){
    eat = ["NAME", "OPEN"]
  }else{
    eat = ["NAME"]
  }

  var attrs = [], ll;
  while (ll = this.eat(eat)){
    attrs.push(this.xentity( ll ))
  }
  return attrs;
}

// attvalue
//  : STRING  
//  | NAME
op.attvalue = function(mdf){
  var ll = this.ll();
  switch(ll.type){
    case "NAME":
    case "UNQ":
    case "STRING":
      this.next();
      var value = ll.value;
      return value;
    case "EXPR_OPEN":
      return this.interplation();
    case "BODY_OPEN":
      this.next();
      return this.program(true);
    default:
      this.error('Unexpected token: '+ this.la())
  }
}


// {{#}}
op.directive = function(){
  var name = this.ll().value;
  this.next();
  if(typeof this[name] === 'function'){
    return this[name]()
  }else{
    this.error('Undefined directive['+ name +']');
  }
}





// {{}}
op.interplation = function(){
  this.match('EXPR_OPEN');
  var res = this.expression(true);
  this.match('END');
  return res;
}

// {{~}}
op.inc = op.include = function(){
  var content = this.expression();
  this.match('END');
  return node.template(content);
}

// {{#if}}
op["if"] = function(tag){
  var test = this.expression();
  var consequent = [], alternate=[];

  var container = consequent;
  var statement = !tag? "statement" : "attrs";

  this.match('END');

  var ll, close;
  while( ! (close = this.eat('CLOSE')) ){
    ll = this.ll();
    if( ll.type === 'OPEN' ){
      switch( ll.value ){
        case 'else':
          container = alternate;
          this.next();
          this.match( 'END' );
          break;
        case 'elseif':
          this.next();
          alternate.push( this["if"](tag) );
          return node['if']( test, consequent, alternate );
        default:
          container.push( this[statement](true) );
      }
    }else{
      container.push(this[statement](true));
    }
  }
  // if statement not matched
  if(close.value !== "if") this.error('Unmatched if directive')
  return node["if"](test, consequent, alternate);
}


// @mark   mustache syntax have natrure dis, canot with expression
// {{#list}}
op.list = function(){
  // sequence can be a list or hash
  var sequence = this.expression(), variable, ll, track;
  var consequent = [], alternate=[];
  var container = consequent;

  this.match('IDENT', 'as');

  variable = this.match('IDENT').value;

  if(this.eat('IDENT', 'by')){
    if(this.eat('IDENT', variable+'_key')){
      this.error('can not track by ' + variable + '_key in list statement');
    }
    if(this.eat('IDENT',variable + '_index')){
      track = true;
    }else{
      track = this.expression();
      if(track.constant){
        // true is means constant, we handle it just like xxx_index.
        track = true;
      }
    }
  }

  this.match('END');

  while( !(ll = this.eat('CLOSE')) ){
    if(this.eat('OPEN', 'else')){
      container =  alternate;
      this.match('END');
    }else{
      container.push(this.statement());
    }
  }
  
  if(ll.value !== 'list') this.error('expect ' + 'list got ' + '/' + ll.value + ' ', ll.pos );
  return node.list(sequence, variable, consequent, alternate, track);
}


op.expression = function(){
  var expression;
  if(this.eat('@(')){ //once bind
    expression = this.expr();
    expression.once = true;
    this.match(')')
  }else{
    expression = this.expr();
  }
  return expression;
}

op.expr = function(){
  this.depend = [];

  var buffer = this.filter()

  var body = buffer.get || buffer;
  var setbody = buffer.set;
  return node.expression(body, setbody, !this.depend.length, buffer.filters);
}


// filter
// assign ('|' filtername[':' args]) * 
op.filter = function(){
  var left = this.assign();
  var ll = this.eat('|');
  var buffer = [], filters,setBuffer, prefix,
    attr = "t", 
    set = left.set, get, 
    tmp = "";

  if(ll){
    if(set) {
      setBuffer = [];
      filters = [];
    }

    prefix = "(function(" + attr + "){";

    do{
      var filterName = this.match('IDENT').value;
      tmp = attr + " = " + ctxName + "._f_('" + filterName + "' ).get.call( "+_.ctxName +"," + attr ;
      if(this.eat(':')){
        tmp +=", "+ this.arguments("|").join(",") + ");"
      }else{
        tmp += ');'
      }
      buffer.push(tmp);
      
      if(set){
        // only in runtime ,we can detect  whether  the filter has a set function. 
        filters.push(filterName);
        setBuffer.unshift( tmp.replace(" ).get.call", " ).set.call") );
      }

    }while(ll = this.eat('|'));
    buffer.push("return " + attr );
    setBuffer && setBuffer.push("return " + attr);

    get =  prefix + buffer.join("") + "})("+left.get+")";
    // we call back to value.
    if(setBuffer){
      // change _ss__(name, _p_) to _s__(name, filterFn(_p_));
      set = set.replace(_.setName, 
        prefix + setBuffer.join("") + "})("+　_.setName　+")" );

    }
    // the set function is depend on the filter definition. if it have set method, the set will work
    var ret = getset(get, set);
    ret.filters = filters;
    return ret;
  }
  return left;
}

// assign
// left-hand-expr = condition
op.assign = function(){
  var left = this.condition(), ll;
  if(ll = this.eat(['=', '+=', '-=', '*=', '/=', '%='])){
    if(!left.set) this.error('invalid lefthand expression in assignment expression');
    return getset( left.set.replace( "," + _.setName, "," + this.condition().get ).replace("'='", "'"+ll.type+"'"), left.set);
    // return getset('(' + left.get + ll.type  + this.condition().get + ')', left.set);
  }
  return left;
}

// or
// or ? assign : assign
op.condition = function(){

  var test = this.or();
  if(this.eat('?')){
    return getset([test.get + "?", 
      this.assign().get, 
      this.match(":").type, 
      this.assign().get].join(""));
  }

  return test;
}

// and
// and && or
op.or = function(){

  var left = this.and();

  if(this.eat('||')){
    return getset(left.get + '||' + this.or().get);
  }

  return left;
}
// equal
// equal && and
op.and = function(){

  var left = this.equal();

  if(this.eat('&&')){
    return getset(left.get + '&&' + this.and().get);
  }
  return left;
}
// relation
// 
// equal == relation
// equal != relation
// equal === relation
// equal !== relation
op.equal = function(){
  var left = this.relation(), ll;
  // @perf;
  if( ll = this.eat(['==','!=', '===', '!=='])){
    return getset(left.get + ll.type + this.equal().get);
  }
  return left
}
// relation < additive
// relation > additive
// relation <= additive
// relation >= additive
// relation in additive
op.relation = function(){
  var left = this.additive(), ll;
  // @perf
  if(ll = (this.eat(['<', '>', '>=', '<=']) || this.eat('IDENT', 'in') )){
    return getset(left.get + ll.value + this.relation().get);
  }
  return left
}
// additive :
// multive
// additive + multive
// additive - multive
op.additive = function(){
  var left = this.multive() ,ll;
  if(ll= this.eat(['+','-']) ){
    return getset(left.get + ll.value + this.additive().get);
  }
  return left
}
// multive :
// unary
// multive * unary
// multive / unary
// multive % unary
op.multive = function(){
  var left = this.range() ,ll;
  if( ll = this.eat(['*', '/' ,'%']) ){
    return getset(left.get + ll.type + this.multive().get);
  }
  return left;
}

op.range = function(){
  var left = this.unary(), ll, right;

  if(ll = this.eat('..')){
    right = this.unary();
    var body = 
      "(function(start,end){var res = [],step=end>start?1:-1; for(var i = start; end>start?i <= end: i>=end; i=i+step){res.push(i); } return res })("+left.get+","+right.get+")"
    return getset(body);
  }

  return left;
}



// lefthand
// + unary
// - unary
// ~ unary
// ! unary
op.unary = function(){
  var ll;
  if(ll = this.eat(['+','-','~', '!'])){
    return getset('(' + ll.type + this.unary().get + ')') ;
  }else{
    return this.member()
  }
}

// call[lefthand] :
// member args
// member [ expression ]
// member . ident  

op.member = function(base, last, pathes, prevBase){
  var ll, path;


  var onlySimpleAccessor = false;
  if(!base){ //first
    path = this.primary();
    var type = typeof path;
    if(type === 'string'){ 
      pathes = [];
      pathes.push( path );
      last = path;
      base = ctxName + "._sg_('" + path + "', " + varName + ", " + extName + ")";
      onlySimpleAccessor = true;
    }else{ //Primative Type
      if(path.get === 'this'){
        base = ctxName;
        pathes = ['this'];
      }else{
        pathes = null;
        base = path.get;
      }
    }
  }else{ // not first enter
    if(typeof last === 'string' && isPath( last) ){ // is valid path
      pathes.push(last);
    }else{
      if(pathes && pathes.length) this.depend.push(pathes);
      pathes = null;
    }
  }
  if(ll = this.eat(['[', '.', '('])){
    switch(ll.type){
      case '.':
          // member(object, property, computed)
        var tmpName = this.match('IDENT').value;
        prevBase = base;
        if( this.la() !== "(" ){ 
          base = ctxName + "._sg_('" + tmpName + "', " + base + ")";
        }else{
          base += "." + tmpName ;
        }
        return this.member( base, tmpName, pathes,  prevBase);
      case '[':
          // member(object, property, computed)
        path = this.assign();
        prevBase = base;
        if( this.la() !== "(" ){ 
        // means function call, we need throw undefined error when call function
        // and confirm that the function call wont lose its context
          base = ctxName + "._sg_(" + path.get + ", " + base + ")";
        }else{
          base += "[" + path.get + "]";
        }
        this.match(']')
        return this.member(base, path, pathes, prevBase);
      case '(':
        // call(callee, args)

        base = base.replace(isLastBind, '.__bind__')
        var args = this.arguments().join(',');

        base =  base+"(" + args +")";
        this.match(')')
        return this.member(base, null, pathes);
    }
  }
  if( pathes && pathes.length ) this.depend.push( pathes );
  var res =  {get: base};
  if(last){
    res.set = ctxName + "._ss_(" + 
        (last.get? last.get : "'"+ last + "'") + 
        ","+ _.setName + ","+ 
        (prevBase?prevBase:_.varName) + 
        ", '=', "+ ( onlySimpleAccessor? 1 : 0 ) + ")";
  
  }
  return res;
}

/**
 * 
 */
op.arguments = function(end){
  end = end || ')'
  var args = [];
  do{
    if(this.la() !== end){
      args.push(this.assign().get)
    }
  }while( this.eat(','));
  return args
}


// primary :
// this 
// ident
// literal
// array
// object
// ( expression )

op.primary = function(){
  var ll = this.ll();
  switch(ll.type){
    case "{":
      return this.object();
    case "[":
      return this.array();
    case "(":
      return this.paren();
    // literal or ident
    case 'STRING':
      this.next();
      var value = "" + ll.value;
      var quota = ~value.indexOf("'")? "\"": "'" ;
      return getset(quota + value + quota);
    case 'NUMBER':
      this.next();
      return getset( "" + ll.value );
    case "IDENT":
      this.next();
      if(isKeyWord(ll.value)){
        return getset( ll.value );
      }
      return ll.value;
    default: 
      this.error('Unexpected Token: ' + ll.type);
  }
}

// object
//  {propAssign [, propAssign] * [,]}

// propAssign
//  prop : assign

// prop
//  STRING
//  IDENT
//  NUMBER

op.object = function(){
  var code = [this.match('{').type];

  var ll = this.eat( ['STRING', 'IDENT', 'NUMBER'] );
  while(ll){
    code.push("'" + ll.value + "'" + this.match(':').type);
    var get = this.assign().get;
    code.push(get);
    ll = null;
    if(this.eat(",") && (ll = this.eat(['STRING', 'IDENT', 'NUMBER'])) ) code.push(",");
  }
  code.push(this.match('}').type);
  return {get: code.join("")}
}

// array
// [ assign[,assign]*]
op.array = function(){
  var code = [this.match('[').type], item;
  if( this.eat("]") ){

     code.push("]");
  } else {
    while(item = this.assign()){
      code.push(item.get);
      if(this.eat(',')) code.push(",");
      else break;
    }
    code.push(this.match(']').type);
  }
  return {get: code.join("")};
}

// '(' expression ')'
op.paren = function(){
  this.match('(');
  var res = this.filter()
  res.get = '(' + res.get + ')';
  res.set = res.set;
  this.match(')');
  return res;
}

function getset(get, set){
  return {
    get: get,
    set: set
  }
}



module.exports = Parser;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  element: function(name, attrs, children){
    return {
      type: 'element',
      tag: name,
      attrs: attrs,
      children: children
    }
  },
  attribute: function(name, value, mdf){
    return {
      type: 'attribute',
      name: name,
      value: value,
      mdf: mdf
    }
  },
  "if": function(test, consequent, alternate){
    return {
      type: 'if',
      test: test,
      consequent: consequent,
      alternate: alternate
    }
  },
  list: function(sequence, variable, body, alternate, track){
    return {
      type: 'list',
      sequence: sequence,
      alternate: alternate,
      variable: variable,
      body: body,
      track: track
    }
  },
  expression: function( body, setbody, constant, filters ){
    return {
      type: "expression",
      body: body,
      constant: constant || false,
      setbody: setbody || false,
      filters: filters
    }
  },
  // {~ <div>{name}</div>}
  body: function( body ){
    return {
      type: "body",
      body: body
    }
  },
  text: function(text){
    return {
      type: "text",
      text: text
    }
  },
  template: function(template){
    return {
      type: 'template',
      content: template
    }
  }
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(0);
var config = __webpack_require__(1);
var parse = __webpack_require__(12);
var node = __webpack_require__(10);


function initDefinition(context, definition, beforeConfig){

  var eventConfig, hasInstanceComputed = !!definition.computed, template;
  var usePrototyeString = typeof context.template === 'string' && !definition.template;

 // template is a string (len < 16). we will find it container first

  definition.data = definition.data || {};
  definition.computed = definition.computed || {};
  if( context.data ) _.extend( definition.data, context.data );
  if( context.computed ) _.extend( definition.computed, context.computed );

  var listeners = context._eventListeners || [];
  var normListener;
  // hanle initialized event binding
  if( definition.events){
    normListener = _.normListener(definition.events);
    if(normListener.length){
      listeners = listeners.concat(normListener)
    }
    delete definition.events;
  }


  definition.data = definition.data || {};
  definition.computed = definition.computed || {};
  if(context.data) _.extend(definition.data, context.data);
  if(context.computed) _.extend(definition.computed, context.computed);

  var usePrototyeString = typeof context.template === 'string' && !definition.template;

  _.extend(context, definition, true);



  if(listeners && listeners.length){
    listeners.forEach(function( item ){
      context.$on(item.type, item.listener)
    })
  }


  // we need add some logic at client.
  beforeConfig && beforeConfig();

  // only have instance computed, we need prepare the property
  if( hasInstanceComputed ) context.computed = handleComputed(context.computed);

  context.$emit( "$config", context.data );
  context.config && context.config( context.data );
  context.$emit( "$afterConfig", context.data );

  template = context.template;

 
  if(typeof template === 'string') {
    template = parse.parse(template);
    if(usePrototyeString) {
    // avoid multiply compile
      context.constructor.prototype.template = template;
    }else{
      delete context.template;
    }
  }
  return template;
}

var handleComputed = (function(){
  // wrap the computed getter;
  function wrapGet(get){
    return function(context){
      return get.call(context, context.data );
    }
  }
  // wrap the computed setter;
  function wrapSet(set){
    return function(context, value){
      set.call( context, value, context.data );
      return value;
    }
  }

  return function( computed ){
    if(!computed) return;
    var parsedComputed = {}, handle, pair, type;
    for(var i in computed){
      handle = computed[i]
      type = typeof handle;

      if(handle.type === 'expression'){
        parsedComputed[i] = handle;
        continue;
      }
      if( type === "string" ){
        parsedComputed[i] = parse.expression(handle)
      }else{
        pair = parsedComputed[i] = {type: 'expression'};
        if(type === "function" ){
          pair.get = wrapGet(handle);
        }else{
          if(handle.get) pair.get = wrapGet(handle.get);
          if(handle.set) pair.set = wrapSet(handle.set);
        }
      } 
    }
    return parsedComputed;
  }
})();


function prepareAttr ( ast ,directive ){
  if(ast.parsed ) return ast;
  var value = ast.value;
  var name=  ast.name, body, constant;
  if(typeof value === 'string' && ~value.indexOf(config.BEGIN) && ~value.indexOf(config.END) ){
    if( !directive || !directive.nps ) {
      var parsed = parse.parse(value, { mode: 2 });
      if(parsed.length === 1 && parsed[0].type === 'expression'){ 
        body = parsed[0];
      } else{
        constant = true;
        body = [];
        parsed.forEach(function(item){
          if(!item.constant) constant=false;
          // silent the mutiple inteplation
            body.push(item.body || "'" + item.text.replace(/'/g, "\\'") + "'");        
        });
        body = node.expression("[" + body.join(",") + "].join('')", null, constant);
      }
      ast.value = body;
    }
  }
  ast.parsed = true;
  return ast;
}

module.exports = {
  // share logic between server and client
  initDefinition: initDefinition,
  handleComputed: handleComputed,
  prepareAttr: prepareAttr
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var exprCache = __webpack_require__(6).exprCache;
var _ = __webpack_require__(0);
var Parser = __webpack_require__(9);
module.exports = {
  expression: function(expr, simple){
    // @TODO cache
    if( typeof expr === 'string' && ( expr = expr.trim() ) ){
      expr = exprCache.get( expr ) || exprCache.set( expr, new Parser( expr, { mode: 2, expression: true } ).expression() )
    }
    if(expr) return expr;
  },
  parse: function(template){
    return new Parser(template).parse();
  }
}



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(0);
var diffTrack = __webpack_require__(17);


function equals(a,b){
  return a === b;
}

// array1 - old array
// array2 - new array
function ld(array1, array2, equalFn){
  var n = array1.length;
  var m = array2.length;
  var equalFn = equalFn || equals;
  var matrix = [];
  for(var i = 0; i <= n; i++){
    matrix.push([i]);
  }
  for(var j=1;j<=m;j++){
    matrix[0][j]=j;
  }
  for(var i = 1; i <= n; i++){
    for(var j = 1; j <= m; j++){
      if(equalFn(array1[i-1], array2[j-1])){
        matrix[i][j] = matrix[i-1][j-1];
      }else{
        matrix[i][j] = Math.min(
          matrix[i-1][j]+1, //delete
          matrix[i][j-1]+1//add
          )
      }
    }
  }
  return matrix;
}
// arr2 - new array
// arr1 - old array
function diffArray(arr2, arr1, diff, diffFn) {
  if(!diff) return _.simpleDiff(arr2, arr1);
  var matrix = ld(arr1, arr2, diffFn)
  var n = arr1.length;
  var i = n;
  var m = arr2.length;
  var j = m;
  var edits = [];
  var current = matrix[i][j];
  while(i>0 || j>0){
  // the last line
    if (i === 0) {
      edits.unshift(3);
      j--;
      continue;
    }
    // the last col
    if (j === 0) {
      edits.unshift(2);
      i--;
      continue;
    }
    var northWest = matrix[i - 1][j - 1];
    var west = matrix[i - 1][j];
    var north = matrix[i][j - 1];

    var min = Math.min(north, west, northWest);

    if (min === west) {
      edits.unshift(2); //delete
      i--;
      current = west;
    } else if (min === northWest ) {
      if (northWest === current) {
        edits.unshift(0); //no change
      } else {
        edits.unshift(1); //update
        current = northWest;
      }
      i--;
      j--;
    } else {
      edits.unshift(3); //add
      j--;
      current = north;
    }
  }
  var LEAVE = 0;
  var ADD = 3;
  var DELELE = 2;
  var UPDATE = 1;
  var n = 0;m=0;
  var steps = [];
  var step = { index: null, add:0, removed:[] };

  for(var i=0;i<edits.length;i++){
    if(edits[i] > 0 ){ // NOT LEAVE
      if(step.index === null){
        step.index = m;
      }
    } else { //LEAVE
      if(step.index != null){
        steps.push(step)
        step = {index: null, add:0, removed:[]};
      }
    }
    switch(edits[i]){
      case LEAVE:
        n++;
        m++;
        break;
      case ADD:
        step.add++;
        m++;
        break;
      case DELELE:
        step.removed.push(arr1[n])
        n++;
        break;
      case UPDATE:
        step.add++;
        step.removed.push(arr1[n])
        n++;
        m++;
        break;
    }
  }
  if(step.index != null){
    steps.push(step)
  }
  return steps
}



// diffObject
// ----
// test if obj1 deepEqual obj2
function diffObject( now, last, diff, keyOf, lastTrackInfo ){

  if(!diff){

    for( var j in now ){
      if( last[j] !== now[j] ) return true
    }

    for( var n in last ){
      if(last[n] !== now[n]) return true;
    }

  }else{

    var nValues = _.values( now );
    var lValues = _.values( last );

    /**
     * [description]
     * @param  {[type]} a    [description]
     * @param  {[type]} b){                   return now[b] [description]
     * @return {[type]}      [description]
     */
    if(typeof keyOf === 'function'){
      return diffTrack( nValues, lValues, keyOf, lastTrackInfo);
    }
    return diffArray( nValues, lValues, diff);

  }

  return false;
}




module.exports = {
  diffArray: diffArray,
  diffObject: diffObject,
  diffTrack: diffTrack
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// some nested  operation in ast 
// --------------------------------

// var dom = require("../dom");
// var animate = require("./animate");

var combine = module.exports = {

  // get the initial dom in object
  node: function(item){
    var children,node, nodes;
    if(!item) return;
    if(typeof item.node === "function") return item.node();
    if(typeof item.nodeType === "number") return item;
    if(item.group) return combine.node(item.group)

    item = item.children || item;
    if( Array.isArray(item )){
      var len = item.length;
      if(len === 1){
        return combine.node(item[0]);
      }
      nodes = [];
      for(var i = 0, len = item.length; i < len; i++ ){
        node = combine.node(item[i]);
        if(Array.isArray(node)){
          nodes.push.apply(nodes, node)
        }else if(node) {
          nodes.push(node)
        }
      }
      return nodes;
    }
    
  },
  // @TODO remove _gragContainer
  inject: function(node, pos ){
    var group = this;
    var fragment = combine.node(group.group || group);
    // mp return
    if(group.$emit) {
      group.$emit("$inject");
    }
    return group;

    // if(node === false) {
    //   animate.remove(fragment)
    //   return group;
    // }else{
    //   if(!fragment) return group;
    //   if(typeof node === 'string') node = dom.find(node);
    //   if(!node) throw Error('injected node is not found');
    //   // use animate to animate firstchildren
    //   animate.inject(fragment, node, pos);
    // }
    // // if it is a component
    // if(group.$emit) {
    //   var preParent = group.parentNode;
    //   var newParent = (pos ==='after' || pos === 'before')? node.parentNode : node;
    //   group.parentNode = newParent;
    //   group.$emit("$inject", node, pos, preParent);
    // }
    // return group;
  },

  // get the last dom in object(for insertion operation)
  last: function(item){
    var children = item.children;

    if(typeof item.last === "function") return item.last();
    if(typeof item.nodeType === "number") return item;

    if(children && children.length) return combine.last(children[children.length - 1]);
    if(item.group) return combine.last(item.group);

  },

  destroy: function(item, first){
    if(!item) return;
    // if( typeof item.nodeType === "number"  ) return first && dom.remove(item)
    if( typeof item.destroy === "function" ) return item.destroy(first);

    if( Array.isArray(item)){
      for(var i = 0, len = item.length; i < len; i++ ){
        combine.destroy(item[i], first);
      }
    }
  }

}


// @TODO: need move to dom.js
// dom.element = function( component, all ){
//   if(!component) return !all? null: [];
//   var nodes = combine.node( component );
//   if( nodes.nodeType === 1 ) return all? [nodes]: nodes;
//   var elements = [];
//   for(var i = 0; i<nodes.length ;i++){
//     var node = nodes[i];
//     if( node && node.nodeType === 1){
//       if(!all) return node;
//       elements.push(node);
//     } 
//   }
//   return !all? elements[0]: elements;
// }





/***/ }),
/* 15 */
/***/ (function(module, exports) {

function NodeCursor(node, parentNode){
  this.node = node;
  this.parent = parentNode;
}


var no = NodeCursor.prototype;

no.next = function(){
  this.prev = this.node;
  this.node = this.node.nextSibling;
  return this;
}

module.exports = function(n, p){ return new NodeCursor(n, p)}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


var _ = __webpack_require__(0);

var dconst = __webpack_require__(2).DIFF
var ADD_ALL = dconst.ADD_ALL
var REMOVE_ALL = dconst.REMOVE_ALL


// tracked 与 ls不同， 我们要确保所有被tracked的数据对应的节点是存在的，不能有任何损失
function diffTrack( newArr, oldArr, keyOf  ){

  var olen = oldArr.length;
  var nlen = newArr.length;


  var steps = [];
  var ret = {
    isTrack: true,
    steps:steps
  }

  // 确保当存在无法被keyOf的item时，不会死循环
  // true 说明 不同
  // false 说明 引用相同
  if( !_.simpleDiff(newArr, oldArr) ) return ret;

  ret.dirty = true;

  if( olen && !nlen ) { // 直接删除所有
    createStep( steps, 0,0,olen );
    return ret
  }
  if(nlen && !olen){ //直接添加所有
    createStep(steps, 1,0,nlen);
    return ret
  }

  // 模拟被真实操作的groups获得真实的下标
  var substitute = _.slice( oldArr );
  var newTrack = getTrackInfo( newArr, keyOf );
  var oldTrack = getTrackInfo( oldArr, keyOf );

  var newTrackMap = newTrack.trackMap;
  var oldTrackMap = oldTrack.trackMap;

  var oldRemoved = {};

  // 使用替身数组完成对应操作，模拟DOM操作

  // i 老数据下标， 
  // j 新数组下标
  var untrackIndex = 0, 
    oldUntracked = oldTrack.untrack, 
    oldUntrackedLength = oldUntracked.length;

  // @FIXIT, 当数组对应的key发生改变，而缓存key其实是一种错误开销
  // 暂时将所有untraked的东西都进行删除，实际这是用户的一种错误使用, 可以引发性能开销
  if(oldUntrackedLength){
    while(oldUntrackedLength--){
      var oidx = oldUntracked[oldUntrackedLength];
      remove( substitute, steps, oldUntracked[ oldUntrackedLength ] );
    }
  }

  var len = substitute.length;
  for(var i =0; i<len ;i++){
    var oldItem = substitute[i];
    var oldKey = keyOf( oldItem);

    // 将所有其它不存在与
    if( !newTrackMap.hasOwnProperty(oldKey) ){
      oldRemoved[ oldKey ] = oldTrackMap[ oldKey ]
      remove( substitute, steps, i );
      i--;
      len--;
    }
    
  }


  var jlen = newArr.length;
  // i old index
  // j new index
  var i = 0, j = 0;

  while( j < jlen  ){

    //@TODO 大量重复key的计算
    if(i >= substitute.length){
      insert( substitute, steps, i, 1 );
      i++;
      j++;
      continue
    }
    var oldKey = keyOf( substitute[i] );


    var item = newArr[ j ];
    var key = keyOf( item );

    if( key === oldKey ){
      i++; j++;
      continue;
    }else{
      //先插入一个节点
      insert( substitute, steps, i, 1 );
      i++;
      j++;
      continue;
    }

  }
  // 说明还未完全处理完毕，因为j条件短了

  var slen = substitute.length;
  if( j < slen ){
    createStep(steps, 0, j, slen - j )
    for(var k = j; k < slen; k++ ){
      var oldKey = keyOf( substitute[k]);
      oldRemoved[oldKey] = oldTrackMap[oldKey];
    }
  }
  // 这些将在apply到前台时，被复用
  ret.oldKeyMap = oldRemoved;

  return ret;
}


function createStep(steps ,mode, index, len, oldIndex){
  len = len || 1;
  var last = steps[steps.length-1];
  if(last && last.mode === mode  ){
    if( (mode === 0 && last.index === index) ||
        (mode === 1 && last.index + last.len === index)
      ){
      last.len++;
      return steps;
    }
    
  }
  steps.push( {
    mode: mode,
    index:index,
    len: len
  } );
  return steps;

}

function insert( substitute, steps ,index, len){

  createStep(steps, 1, index, len, steps)
  substitute.splice(index, 0, null)
}

function remove( substitute, steps ,index, len ){
  createStep(steps, 0, index, len)
  substitute.splice(index, 1);
}

// convert <Array>list to 
// <Object>{ trackMap: <Map> trackMap, unmark: <Array> indextrackPair}

function getTrackInfo( list, keyOf ){

  var untrack = [], trackMap = {};

  for(var i = 0, len = list.length; i < len ; i++){

    var item = list[i];
    var trackKey = keyOf(list[i]);

    // can be stringify
    if( !trackMap.hasOwnProperty(trackKey) ){

      trackMap[ trackKey ] = i
    }else{

      untrack.push( i )
    }
  }

  return {
    untrack: untrack,
    trackMap: trackMap
  }
}

function isTrackable( key ){
  var type = typeof key;
  return type !== 'object' && type !== 'undefined';
}


module.exports = diffTrack

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(0);
var combine = __webpack_require__(14)

function Group(list){
  this.children = list || [];
}


var o = _.extend(Group.prototype, {
  destroy: function(first){
    combine.destroy(this.children, first);
    if(this.ondestroy) this.ondestroy();
    this.children = null;
  },
  get: function(i){
    return this.children[i]
  },
  push: function(item){
    this.children.push( item );
  }
})
o.inject = o.$inject = combine.inject



module.exports = Group;




/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var page = __webpack_require__(38);
var app = __webpack_require__(45);
var dataSync = __webpack_require__(22);
var events = __webpack_require__(20);
var wxParse = __webpack_require__(23);

module.exports = {
  initMP($vm, ...args) {
    var mpType = $vm.mpType || 'page';
    if (mpType === 'app') {
      return app.init($vm, ...args);
    } else {
      return page.init($vm, ...args);
    }
  },
  updateData: dataSync.updateData,
  initDataToMP: dataSync.initDataToMP,
  proxyEvent: events.proxyEvent,
  addEventHandler: events.addEventHandler,
  install(Regular) {
    var proto = Regular.prototype;
    proto._addMPEventHandler = events.addEventHandler;
    proto._removeMPEventHandler = events.removeEventHandler;

    proto._updateMPData = dataSync.updateData;
    proto._updateMPHolders = dataSync.updateHolders;

    proto._initWxParse = wxParse.init;
    return Regular;
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var VM = __webpack_require__(5);

function addEventHandler(eventId, type, handler) {
  if (!this._eventHandlers) {
    this._eventHandlers = {}
  }
  if (!this._eventHandlers[eventId]) {
    this._eventHandlers[eventId] = {}
  }
  this._eventHandlers[eventId][type] = handler;
  return this;
}

function removeEventHandler(eventId, type) {
  var eventHanlders = this._eventHandlers;
  if (eventHanlders && eventHanlders[eventId]) {
    if (!type) {
      delete eventHanlders[eventId];
    } else if(eventHanlders[eventId][type]) {
      delete eventHanlders[eventId][type];
    }
  }
}

function proxyEvent(rootVM, e) {
  var target = e.currentTarget || e.target || {};
  var dataSet = target.dataset || {};
  var eventId = dataSet.eventId;
  var compId = dataSet.compId;

  var vm = VM.getVm(rootVM, compId);
  var type = e.type;

  if (!vm) {
    return;
  }

  var eventHandlers = vm._eventHandlers;

  if (eventHandlers) {
    var handlerMap = eventHandlers[eventId];
    var value;
    if (type === 'tap') {
      value = handlerMap['tap'] || handlerMap['click'];
    } else {
      value = handlerMap[EVENT_MAP[type]];
    }

    if (type === 'input' && handlerMap['r-model']) {
      handlerMap['r-model'].call(vm, e);
    }

    if (value) {
      vm.data.$event = e;

      value.get(vm);

      vm.data.$event = undefined;
      vm.$update();
    }
  }

}

const EVENT_MAP = {
  tap: 'click',
  touchstart: 'touchstart',
  touchmove: 'touchmove',
  touchcancel: 'touchcancel',
  touchend: 'touchend',
  longtap: 'longtap',
  input: 'input',
  change: 'change',
  submit: 'submit',
  blur: 'blur',
  focus: 'focus',
  reset: 'reset',
  confirm: 'confirm',
  columnchange: 'columnchange',
  linechange: 'linechange',
  error: 'error',
  scrolltoupper: 'scrolltoupper',
  scrolltolower: 'scrolltolower',
  scroll: 'scroll',
  load: 'load'
};

module.exports = {
  proxyEvent,
  addEventHandler,
  removeEventHandler,
  EVENT_MAP
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function callHook(vm, hook, options) {
  if (!vm) {
    return;
  }
  
  var result;
  if (vm[hook]) {
    result = vm[hook].call(vm, options);
  }

  if (vm._children) {
    vm._children.forEach(function (child) {
      result = callHook(child, hook, options) || result;
    });
  }

  if (hook === 'onUnload') {
    var rootVM = vm.$root;

    rootVM && rootVM.destroy();
  }

  return result;
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

const diff = __webpack_require__(13);
const _ = __webpack_require__(0);
const utils = __webpack_require__(40);
const throttle = __webpack_require__(41);
const VM = __webpack_require__(5);
const DATA_ROOT = '$root';
const SPLITTER = ',';

let time = 0;

const throttleSetData = throttle((vm) => {
  const page = VM.getPage(vm);
  const buffer = VM.getBuffer(vm);

  if (!page || !buffer) {
    return;
  }

  const data = buffer.pop();
  page.setData(data);
}, 50);

const setData = (vm, data) => {
  const buffer = VM.getBuffer(vm);
  if (!buffer) {
    return;
  }

  buffer.push(data);
  throttleSetData(vm);
};

function formatData(vm) {
  const page = VM.getPage(vm);
  if (!page) {
    return;
  }

  const pageData = page.data.$root;

  const $p = VM.getParentKey(vm).join(SPLITTER);
  const localComponentIndex = VM.getLocalComponentIndex(vm);
  const $k = ($p ? $p + SPLITTER : '') + localComponentIndex;
  const dataKey = DATA_ROOT + '.' + $k;
  const vmData = VM.getData(vm);

  let data = {};

  data[dataKey] = Object.assign({}, vmData, {
    $k: $k,
    $kk: $k + SPLITTER,
    $p: $p
  });

  delete data[dataKey].$event;

  try {
    const path = dataKey.replace('$root.', '');
    if (pageData && pageData[path]) {
      const oldData = utils.flatten(pageData[path], 2);
      const newData = utils.flatten(data[dataKey], 2);
      data = utils.getDiffProperty(newData, oldData, dataKey);
      data = utils.addPrefixToProperty(data, `${dataKey}.`);
    }
  } catch(err) {
    console.error('diff error', err)
  }

  return data;
}


function updateData(vm, data) {
  vm = vm || this;
  const rootVM = vm.$root;
  const page = VM.getPage(vm);

  if (page) {
    if (vm === rootVM) {
      updateAllData(vm);
    } else {
      data = data || formatData(vm);
      data && setData(vm, data);
    }
  }
}

function collectData(vm, res = {}) {
  const children = vm._children;
  if (children) {
    children.forEach(function(c) {
      collectData(c, res);
    });
  }
  return Object.assign(res, formatData(vm));
}

function updateAllData(vm) {
  const page = VM.getPage(vm);
  if (!page) {
    return;
  }

  const data = collectData(vm);
  const updatedData = Object.keys(data)
    .reduce((res, path) => {
      res[path] = data[path];
      return res;
    }, {});

  setData(vm, updatedData);
}

function initDataToMP(vm) {
  const data = collectData(vm);
  setData(vm, data);
}

function updateHolders(value, options = {}) {
  const key = options.key || '__holders';
  const id = options.id || '0';
  if (!this[key]) {
    this[key] = {};
  }

  const keys = [id];
  const extra = options.extra || {};
  if (extra.__listInfo__) {
    const listIndexArray = _.getListIndexArray(extra);
    if (listIndexArray.length > 0) {
      keys.push(listIndexArray.join('-'));
    }
  }
  const parsedKey = keys.join('-');

  this[key][parsedKey] = value;
}

module.exports = {
  updateData,
  initDataToMP,
  updateHolders
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var wxParse = __webpack_require__(24);

module.exports = {
  init() {
    var root = this.$root;
    if (!root.__useRHtml) {
      root.__useRHtml = true;
    }
  },
  install(vm) {
    if (!vm || !vm.$root || !vm.$root.$mp) {
      return;
    }
    
    var root = vm.$root;
    var page = root.$mp && root.$mp.page;
    page.wxParseImgLoad = function(e) {
      // wxParse.wxParseImgLoad();
      root.onWxParseImgLoad && root.onWxParseImgLoad(e)
    }
    page.wxParseImgTap = function(e) {
      root.onWxParseImgTap && root.onWxParseImgTap(e)
      // wxParse.wxParseImgTap.call(page, e)
    };
  }

}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 * 
 * github地址: https://github.com/icindy/wxParse
 * 
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */

/**
 * utils函数引入
 **/
// var showdown = require('./showdown.js');
var HtmlToJson = __webpack_require__(42);
/**
 * 配置及公有属性
 **/
var realWindowWidth = 0;
var realWindowHeight = 0;
wx.getSystemInfo({
  success: function (res) {
    realWindowWidth = res.windowWidth
    realWindowHeight = res.windowHeight
  }
})
/**
 * 主函数入口区
 **/
function wxParse(bindName = 'wxParseData', type='html', data='<div class="color:red;">数据不能为空</div>', target,imagePadding) {
  // var that = target;
  var transData = {};//存放转化后的数据
  if (type == 'html') {
    transData = HtmlToJson.html2json(data, bindName);
    // console.log(JSON.stringify(transData, ' ', ' '));
  } else if (type == 'md' || type == 'markdown') {
    // var converter = new showdown.Converter();
    // var html = converter.makeHtml(data);
    // transData = HtmlToJson.html2json(html, bindName);
    // console.log(JSON.stringify(transData, ' ', ' '));
  }
  transData.view = {};
  transData.view.imagePadding = 0;
  if(typeof(imagePadding) != 'undefined'){
    transData.view.imagePadding = imagePadding
  }

  return transData;
  // var bindData = {};
  // bindData[bindName] = transData;
  // that.setData(bindData)
  // that.wxParseImgLoad = wxParseImgLoad;
  // that.wxParseImgTap = wxParseImgTap;
}
// 图片点击事件
function wxParseImgTap(e) {
  var that = this;
  var dataSet = e.target.dataset;
  if (!dataSet.preview) {
    return;
  }
  var nowImgUrl = e.target.dataset.src;
  var tagFrom = e.target.dataset.from;
  if (typeof (tagFrom) != 'undefined' && tagFrom.length > 0) {
    wx.previewImage({
      current: nowImgUrl, // 当前显示图片的http链接
      urls: [ nowImgUrl ],
      // that.data[tagFrom].imageUrls // 需要预览的图片http链接列表
    })
  }
}

/**
 * 图片视觉宽高计算函数区 
 **/
function wxParseImgLoad(e) {
  var that = this;
  var tagFrom = e.target.dataset.from;
  var idx = e.target.dataset.idx;
  if (typeof (tagFrom) != 'undefined' && tagFrom.length > 0) {
    calMoreImageInfo(e, idx, that, tagFrom)
  } 
}
// 假循环获取计算图片视觉最佳宽高
function calMoreImageInfo(e, idx, that, bindName) {
  var temData = that.data[bindName];
  if (!temData || temData.images.length == 0) {
    return;
  }
  var temImages = temData.images;
  //因为无法获取view宽度 需要自定义padding进行计算，稍后处理
  var recal = wxAutoImageCal(e.detail.width, e.detail.height,that,bindName); 
  // temImages[idx].width = recal.imageWidth;
  // temImages[idx].height = recal.imageheight; 
  // temData.images = temImages;
  // var bindData = {};
  // bindData[bindName] = temData;
  // that.setData(bindData);
  var index = temImages[idx].index
  var key = `${bindName}`
  for (var i of index.split('.')) key+=`.nodes[${i}]`
  var keyW = key + '.width'
  var keyH = key + '.height'
  that.setData({
    [keyW]: recal.imageWidth,
    [keyH]: recal.imageheight,
  })
}

// 计算视觉优先的图片宽高
function wxAutoImageCal(originalWidth, originalHeight,that,bindName) {
  //获取图片的原始长宽
  var windowWidth = 0, windowHeight = 0;
  var autoWidth = 0, autoHeight = 0;
  var results = {};
  var padding = that.data[bindName].view.imagePadding;
  windowWidth = realWindowWidth-2*padding;
  windowHeight = realWindowHeight;
  //判断按照那种方式进行缩放
  // console.log("windowWidth" + windowWidth);
  if (originalWidth > windowWidth) {//在图片width大于手机屏幕width时候
    autoWidth = windowWidth;
    // console.log("autoWidth" + autoWidth);
    autoHeight = (autoWidth * originalHeight) / originalWidth;
    // console.log("autoHeight" + autoHeight);
    results.imageWidth = autoWidth;
    results.imageheight = autoHeight;
  } else {//否则展示原来的数据
    results.imageWidth = originalWidth;
    results.imageheight = originalHeight;
  }
  return results;
}

// function wxParseTemArray(temArrayName,bindNameReg,total,that){
//   var array = [];
//   var temData = that.data;
//   var obj = null;
//   for(var i = 0; i < total; i++){
//     var simArr = temData[bindNameReg+i].nodes;
//     array.push(simArr);
//   }

//   temArrayName = temArrayName || 'wxParseTemArray';
//   obj = JSON.parse('{"'+ temArrayName +'":""}');
//   obj[temArrayName] = array;
//   that.setData(obj);
// }

/**
 * 配置emojis
 * 
 */

// function emojisInit(reg='',baseSrc="/wxParse/emojis/",emojis){
//    HtmlToJson.emojisInit(reg,baseSrc,emojis);
// }

module.exports = {
  wxParse,
  // emojisInit,
  wxParseImgLoad,
  wxParseImgTap,
}




/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(32);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__(16)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// shim for es5
var slice = [].slice;
var tstr = ({}).toString;

function extend(o1, o2 ){
  for(var i in o2) if( o1[i] === undefined){
    o1[i] = o2[i]
  }
  return o2;
}


module.exports = function(){
  // String proto ;
  extend(String.prototype, {
    trim: function(){
      return this.replace(/^\s+|\s+$/g, '');
    }
  });


  // Array proto;
  extend(Array.prototype, {
    indexOf: function(obj, from){
      from = from || 0;
      for (var i = from, len = this.length; i < len; i++) {
        if (this[i] === obj) return i;
      }
      return -1;
    },
    // polyfill from MDN 
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    forEach: function(callback, ctx){
      var k = 0;

      // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
      var O = Object(this);

      var len = O.length >>> 0; 

      if ( typeof callback !== "function" ) {
        throw new TypeError( callback + " is not a function" );
      }

      // 7. Repeat, while k < len
      while( k < len ) {

        var kValue;

        if ( k in O ) {

          kValue = O[ k ];

          callback.call( ctx, kValue, k, O );
        }
        k++;
      }
    },
    // @deprecated
    //  will be removed at 0.5.0
    filter: function(fun, context){

      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== "function")
        throw new TypeError();

      var res = [];
      for (var i = 0; i < len; i++)
      {
        if (i in t)
        {
          var val = t[i];
          if (fun.call(context, val, i, t))
            res.push(val);
        }
      }

      return res;
    }
  });

  // Function proto;
  extend(Function.prototype, {
    bind: function(context){
      var fn = this;
      var preArgs = slice.call(arguments, 1);
      return function(){
        var args = preArgs.concat(slice.call(arguments));
        return fn.apply(context, args);
      }
    },
    //@FIXIT
    __bind__: function(context){
      if(this.__binding__){
        return this.__binding__
      }else{
        return (this.__binding__ = this.bind.apply(this, arguments))
      }
    }
  })
  
  // Array
  extend(Array, {
    isArray: function(arr){
      return tstr.call(arr) === "[object Array]";
    }
  })
}



/***/ }),
/* 34 */
/***/ (function(module, exports) {

// http://stackoverflow.com/questions/1354064/how-to-convert-characters-to-html-entities-using-plain-javascript
var entities = {
  'quot':34, 
  'amp':38, 
  'apos':39, 
  'lt':60, 
  'gt':62, 
  'nbsp':160, 
  'iexcl':161, 
  'cent':162, 
  'pound':163, 
  'curren':164, 
  'yen':165, 
  'brvbar':166, 
  'sect':167, 
  'uml':168, 
  'copy':169, 
  'ordf':170, 
  'laquo':171, 
  'not':172, 
  'shy':173, 
  'reg':174, 
  'macr':175, 
  'deg':176, 
  'plusmn':177, 
  'sup2':178, 
  'sup3':179, 
  'acute':180, 
  'micro':181, 
  'para':182, 
  'middot':183, 
  'cedil':184, 
  'sup1':185, 
  'ordm':186, 
  'raquo':187, 
  'frac14':188, 
  'frac12':189, 
  'frac34':190, 
  'iquest':191, 
  'Agrave':192, 
  'Aacute':193, 
  'Acirc':194, 
  'Atilde':195, 
  'Auml':196, 
  'Aring':197, 
  'AElig':198, 
  'Ccedil':199, 
  'Egrave':200, 
  'Eacute':201, 
  'Ecirc':202, 
  'Euml':203, 
  'Igrave':204, 
  'Iacute':205, 
  'Icirc':206, 
  'Iuml':207, 
  'ETH':208, 
  'Ntilde':209, 
  'Ograve':210, 
  'Oacute':211, 
  'Ocirc':212, 
  'Otilde':213, 
  'Ouml':214, 
  'times':215, 
  'Oslash':216, 
  'Ugrave':217, 
  'Uacute':218, 
  'Ucirc':219, 
  'Uuml':220, 
  'Yacute':221, 
  'THORN':222, 
  'szlig':223, 
  'agrave':224, 
  'aacute':225, 
  'acirc':226, 
  'atilde':227, 
  'auml':228, 
  'aring':229, 
  'aelig':230, 
  'ccedil':231, 
  'egrave':232, 
  'eacute':233, 
  'ecirc':234, 
  'euml':235, 
  'igrave':236, 
  'iacute':237, 
  'icirc':238, 
  'iuml':239, 
  'eth':240, 
  'ntilde':241, 
  'ograve':242, 
  'oacute':243, 
  'ocirc':244, 
  'otilde':245, 
  'ouml':246, 
  'divide':247, 
  'oslash':248, 
  'ugrave':249, 
  'uacute':250, 
  'ucirc':251, 
  'uuml':252, 
  'yacute':253, 
  'thorn':254, 
  'yuml':255, 
  'fnof':402, 
  'Alpha':913, 
  'Beta':914, 
  'Gamma':915, 
  'Delta':916, 
  'Epsilon':917, 
  'Zeta':918, 
  'Eta':919, 
  'Theta':920, 
  'Iota':921, 
  'Kappa':922, 
  'Lambda':923, 
  'Mu':924, 
  'Nu':925, 
  'Xi':926, 
  'Omicron':927, 
  'Pi':928, 
  'Rho':929, 
  'Sigma':931, 
  'Tau':932, 
  'Upsilon':933, 
  'Phi':934, 
  'Chi':935, 
  'Psi':936, 
  'Omega':937, 
  'alpha':945, 
  'beta':946, 
  'gamma':947, 
  'delta':948, 
  'epsilon':949, 
  'zeta':950, 
  'eta':951, 
  'theta':952, 
  'iota':953, 
  'kappa':954, 
  'lambda':955, 
  'mu':956, 
  'nu':957, 
  'xi':958, 
  'omicron':959, 
  'pi':960, 
  'rho':961, 
  'sigmaf':962, 
  'sigma':963, 
  'tau':964, 
  'upsilon':965, 
  'phi':966, 
  'chi':967, 
  'psi':968, 
  'omega':969, 
  'thetasym':977, 
  'upsih':978, 
  'piv':982, 
  'bull':8226, 
  'hellip':8230, 
  'prime':8242, 
  'Prime':8243, 
  'oline':8254, 
  'frasl':8260, 
  'weierp':8472, 
  'image':8465, 
  'real':8476, 
  'trade':8482, 
  'alefsym':8501, 
  'larr':8592, 
  'uarr':8593, 
  'rarr':8594, 
  'darr':8595, 
  'harr':8596, 
  'crarr':8629, 
  'lArr':8656, 
  'uArr':8657, 
  'rArr':8658, 
  'dArr':8659, 
  'hArr':8660, 
  'forall':8704, 
  'part':8706, 
  'exist':8707, 
  'empty':8709, 
  'nabla':8711, 
  'isin':8712, 
  'notin':8713, 
  'ni':8715, 
  'prod':8719, 
  'sum':8721, 
  'minus':8722, 
  'lowast':8727, 
  'radic':8730, 
  'prop':8733, 
  'infin':8734, 
  'ang':8736, 
  'and':8743, 
  'or':8744, 
  'cap':8745, 
  'cup':8746, 
  'int':8747, 
  'there4':8756, 
  'sim':8764, 
  'cong':8773, 
  'asymp':8776, 
  'ne':8800, 
  'equiv':8801, 
  'le':8804, 
  'ge':8805, 
  'sub':8834, 
  'sup':8835, 
  'nsub':8836, 
  'sube':8838, 
  'supe':8839, 
  'oplus':8853, 
  'otimes':8855, 
  'perp':8869, 
  'sdot':8901, 
  'lceil':8968, 
  'rceil':8969, 
  'lfloor':8970, 
  'rfloor':8971, 
  'lang':9001, 
  'rang':9002, 
  'loz':9674, 
  'spades':9824, 
  'clubs':9827, 
  'hearts':9829, 
  'diams':9830, 
  'OElig':338, 
  'oelig':339, 
  'Scaron':352, 
  'scaron':353, 
  'Yuml':376, 
  'circ':710, 
  'tilde':732, 
  'ensp':8194, 
  'emsp':8195, 
  'thinsp':8201, 
  'zwnj':8204, 
  'zwj':8205, 
  'lrm':8206, 
  'rlm':8207, 
  'ndash':8211, 
  'mdash':8212, 
  'lsquo':8216, 
  'rsquo':8217, 
  'sbquo':8218, 
  'ldquo':8220, 
  'rdquo':8221, 
  'bdquo':8222, 
  'dagger':8224, 
  'Dagger':8225, 
  'permil':8240, 
  'lsaquo':8249, 
  'rsaquo':8250, 
  'euro':8364
}



module.exports  = entities;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// create a simple finite state machine
function createFSM() {
  return {
    _stack: [],
    enter: function(state) {
      this._stack.push(state);
      return this;
    },
    leave: function(state) {
      var stack = this._stack;
      // if state is falsy or state equals to last item in stack
      if(!state || stack[stack.length-1] === state) {
        stack.pop();
      }
      return this;
    },
    get: function() {
      var stack = this._stack;
      return stack[stack.length - 1];
    },
    all: function() {
      return this._stack;
    },
    is: function(state) {
      var stack = this._stack;
      return stack[stack.length - 1] === state
    }
  }
}

module.exports = createFSM;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org

// klass: a classical JS OOP façade
// https://github.com/ded/klass
// License MIT (c) Dustin Diaz 2014
  
// inspired by backbone's extend and klass
var _ = __webpack_require__(0),
  fnTest = /xy/.test(function(){"xy";}) ? /\bsupr\b/:/.*/,
  isFn = function(o){return typeof o === "function"};

var hooks = {
  events: function( propertyValue, proto ){
    var eventListeners = proto._eventListeners || [];
    var normedEvents = _.normListener(propertyValue);

    if(normedEvents.length) {
      proto._eventListeners = eventListeners.concat( normedEvents );
    }
    delete proto.events ;
  }
}


function wrap( k, fn, supro ) {
  return function () {
    var tmp = this.supr;
    this.supr = supro[k];
    var ret = fn.apply(this, arguments);
    this.supr = tmp;
    return ret;
  }
}

function process( what, o, supro ) {
  for ( var k in o ) {
    if (o.hasOwnProperty(k)) {
      if(hooks.hasOwnProperty(k)) {
        hooks[k](o[k], what, supro)
      }
      what[k] = isFn( o[k] ) && isFn( supro[k] ) && 
        fnTest.test( o[k] ) ? wrap(k, o[k], supro) : o[k];
    }
  }
}

// if the property is ["events", "data", "computed"] , we should merge them
var merged = ["data", "computed"], mlen = merged.length;
module.exports = function extend(o){
  o = o || {};
  var supr = this, proto,
    supro = supr && supr.prototype || {};

  if(typeof o === 'function'){
    proto = o.prototype;
    o.implement = implement;
    o.extend = extend;
    return o;
  } 
  
  function fn() {
    supr.apply(this, arguments);
  }

  proto = _.createProto(fn, supro);

  function implement(o){
    // we need merge the merged property
    var len = mlen;
    for(;len--;){
      var prop = merged[len];
      if(proto[prop] && o.hasOwnProperty(prop) && proto.hasOwnProperty(prop)){
        _.extend(proto[prop], o[prop], true) 
        delete o[prop];
      }
    }


    process(proto, o, supro); 
    return this;
  }



  fn.implement = implement
  fn.implement(o)
  if(supr.__after__) supr.__after__.call(fn, supr, o);
  fn.extend = extend;
  return fn;
}



/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var diffArray = __webpack_require__(13).diffArray;
var combine = __webpack_require__(14);
// var animate = require("./helper/animate");
var Parser = __webpack_require__(9);
var node = __webpack_require__(10);
var Group = __webpack_require__(18);
// var dom = require("./dom");
var _ = __webpack_require__(0);
var consts = __webpack_require__(2);
var OPTIONS = consts.OPTIONS;
var ERROR = consts.ERROR;
var MSG = consts.MSG;
var nodeCursor = __webpack_require__(15);
var config = __webpack_require__(1)
var shared = __webpack_require__(11);
var dconst = __webpack_require__(2).DIFF
var mp = __webpack_require__(19);



var walkers = module.exports = {};

// used in walkers.list
// remove block in group

walkers.list = function(ast, options){

  var Regular = walkers.Regular;
  // var placeholder = document.createComment("Regular list"),
  var namespace = options.namespace,
    extra = options.extra;

  var self = this;
  var group = new Group([{}]);
  // var group = new Group([]);
  var children = group.children;

  var indexName = ast.variable + '_index';
  var keyName = ast.variable + '_key';
  var variable = ast.variable;
  var alternate = ast.alternate;
  var track = ast.track, keyOf, extraObj;
  var cursor = options.cursor;

  // for mp: `多层级 list
  extra = _.createObject(extra);
  var __listInfo__ = [
    {
      indexName: indexName,
      keyName: keyName,
      variable: variable
    }
  ].concat(extra.__listInfo__ || []);

  extra.__listInfo__ = __listInfo__;

  // insertPlaceHolder(placeholder, cursor)

  if( track && track !== true ){

    track = this._touchExpr(track);
    extraObj = _.createObject(extra);
    keyOf = function( item, index ){
      extraObj[ variable ] = item;
      // @FIX keyName
      return track.get( self, extraObj );
    }
  }

  function removeRange(index, rlen, children, oldKeyMap){
    for(var j = 1; j <= rlen; j++){ //removed
      var removed = children[ index + j ];
      if( oldKeyMap  ){
        var mayBeReuse = keyOf(removed.data[variable]);
        // 将被复用
        if(typeof oldKeyMap[mayBeReuse] !== 'undefined') {
          if(oldKeyMap[mayBeReuse]!==null){//hasn't already moved
            removed.inject(false);
          }
          continue;
        }
      }

      // for mp
      var eventIds = getEventIdsFromGroup(removed);
      for (var i = 0; i < eventIds.length; ++i) {
        this._removeMPEventHandler(eventIds[i]);
      }

      removed.destroy(true);
    }
    children.splice(index+1, rlen);
  }

  function addRange(index, end, newList, rawNewValue, oldKeyMap){
    for(var o = index; o < end; o++){ //add
      // prototype inherit
      var item = newList[o];
      var section = null;

      if(oldKeyMap){
        var key = keyOf( item );
        section = oldKeyMap[key];
        // 只能复用一次
        if(section) oldKeyMap[key] = null;
        // 如果在原来的节点中可以找到，则复用原节点
      }
      var hasReusedSection = !!section;

      if(!hasReusedSection){
        var data = _.createObject(extra);
        updateTarget(data, o, item, rawNewValue);
        section = self.$compile(ast.body, {
          extra: data,
          namespace:namespace,
          record: true,
          outer: options.outer,
          cursor: cursor
        })
        section.data = data;
      }else{
        // means track reused section
        updateTarget(section.data, o, item)
      }


      // for mp:
      // // autolink
      // var insert =  combine.last(group.get(o));
      // if(insert.parentNode && !(cursor && cursor.node) ){
      //   // hasReusedSection
      //   (hasReusedSection?dom:animate).inject(combine.node(section),insert, 'after');
      // }
      // // insert.parentNode.insertBefore(combine.node(section), insert.nextSibling);
      children.splice( o + 1 , 0, section);
    }
  }

  function updateTarget(target, index, item, rawNewValue){
    target[ indexName ] = index;
    if( rawNewValue ){
      target[ keyName ] = item;
      target[ variable ] = rawNewValue[ item ];
    }else{
      target[ variable ] = item;
      target[keyName] = null
    }
  }


  function updateRange(start, end, newList, rawNewValue){
    for(var k = start; k < end; k++){ // no change
      var sect = group.get( k + 1 ), item = newList[ k ];
      updateTarget(sect.data, k, item, rawNewValue);
    }
  }

  function updateLD(newList, oldList, steps, rawNewValue ){

    // var cur = placeholder;
    var m = 0, len = newList.length;

    if(!steps && (len !==0 || oldList.length !==0)  ){
      steps = diffArray(newList, oldList, true);
    }

    if(!steps || !steps.length) return;
      
    for(var i = 0; i < steps.length; i++){ //init

      var splice = steps[i];
      var index = splice.index; // beacuse we use a comment for placeholder
      var removed = splice.removed;
      var add = splice.add;
      var rlen = removed.length;
      // update
      updateRange(m, index, newList, rawNewValue);

      removeRange.call(this, index ,rlen, children)

      addRange(index, index+add, newList, rawNewValue)

      m = index + add - rlen;
      m  = m < 0? 0 : m;

    }
    if(m < len){
      for(var i = m; i < len; i++){
        var pair = group.get(i + 1);
        pair.data[indexName] = i;
        // @TODO fix keys
      }
    }
  }

  // if the track is constant test.
  function updateSimple(newList, oldList, rawNewValue ){

    var nlen = newList.length;
    var olen = oldList.length;
    var mlen = Math.min(nlen, olen);

    updateRange(0, mlen, newList, rawNewValue)
    if(nlen < olen){ //need add
      removeRange.call(this, nlen, olen-nlen, children);
    }else if(nlen > olen){
      addRange(olen, nlen, newList, rawNewValue);
    }
  }



  // oldKeyMap: 复用原来的节点
  function updateTrack( newList, oldList, steps,  rawNewValue, oldKeyMap ){
    
    for(var i =0, slen = steps.length; i < slen ;i++){
      var step = steps[i];
      switch( step.mode){
        case 0 : //remove
          removeRange.call(this, step.index, step.len, group.children, oldKeyMap);
          break;
        case 1 : //insert
          addRange(step.index, step.index + step.len, newList, rawNewValue, oldKeyMap )
          break;
      }
    }     
    var children = group.children;
    for(var j=1, len = children.length; j < len; j++){
      var child = children[j];
      if( child ){
        child.data[variable] = newList[j-1];
        child.data[indexName] = j-1
      }
    }

    
  }

  function update(newValue, oldValue, steps, oldKeyMap, isSimple){

    var nType = _.typeOf( newValue );
    var oType = _.typeOf( oldValue );

    var newList = getListFromValue( newValue, nType );
    var oldList = getListFromValue( oldValue, oType );


    var rawNewValue;


    var nlen = newList && newList.length;
    var olen = oldList && oldList.length;

    // if previous list has , we need to remove the altnated section.

    if( nType === 'object' ) rawNewValue = newValue;

    if(!olen && nlen){
      if(group.get(1)){
        var altGroup = children.pop();
        if(altGroup.destroy)  altGroup.destroy(true);
      } 
      return addRange(0, nlen, newList, rawNewValue )
    }
    // for mp

    // @ {#list} {#else}
    if(!nlen ){
      if(olen){
        removeRange.call(this, 0, olen, group.children) 
      }
      if(alternate && alternate.length){
        var section = self.$compile(alternate, {
          extra: extra,
          record: true,
          outer: options.outer,
          namespace: namespace
        })
        children.push(section);
        // if(placeholder.parentNode){
        //   animate.inject(combine.node(section), placeholder, 'after');
        // }
      }
      return;
    }

    // for mp
    // TODO: 列表变化做全量更新，以此同步 eventHanlders，但性能会较差
    // 用 diff 性能会好，但改动会比较大
    if(nlen) {
      if(olen){
        removeRange.call(this, 0, olen, group.children) 
      }
      if(group.get(1)){
        var altGroup = children.pop();
        if(altGroup.destroy)  altGroup.destroy(true);
      } 
      return addRange(0, nlen, newList, rawNewValue )
    }

    if(track){
      
      if( track === true || (isSimple && !steps.length) ){ // track 可能走simple update
        updateSimple( newList, oldList,  rawNewValue );
      }else{
        if(oldKeyMap){
          for(var i in oldKeyMap){
            var index= oldKeyMap[i];
            if(children[index + 1]) oldKeyMap[i]= children[index + 1];
          }
        }
        updateTrack( newList, oldList , steps, rawNewValue, oldKeyMap);
      }
      
    }else{
      updateLD( newList, oldList, steps, rawNewValue );
    }

  }

  this.$watch(ast.sequence, update, { 
    init: true, 
    keyOf: keyOf,
    diff: track!==true,
    deep: true
  });

  //@FIXIT, beacuse it is sync process, we can
  cursor = null;
  return group;
}

function getEventIdsFromGroup(node = {}) {
  var res = [];
  if (node.eventId) {
    res.push(node.eventId);
  }
  var children = node.children || node.group && node.group.children || [];
  if (children) {
    for(var i = 0; i < children.length; ++i) {
      res = res.concat(getEventIdsFromGroup(children[i]));
    }
  }
  return res;
}

// {#include } or {#inc template}
walkers.template = function(ast, options){
  var content = ast.content, compiled;
  // var placeholder = document.createComment('inlcude');
  var compiled, namespace = options.namespace, extra = options.extra;
  // var group = new Group([placeholder]);
  var group = new Group([{}]);
  var cursor = options.cursor;

  // insertPlaceHolder(placeholder, cursor);

  if(content){
    var self = this;
    this.$watch(content, function(value){
      var removed = group.get(1), type= typeof value;
      if( removed){
        removed.destroy(true);
        group.children.pop();
      }
      if(!value) return;

      group.push( compiled = type === 'function' ? value(cursor? {cursor: cursor}: null): self.$compile( type !== 'object'? String(value): value, {
        record: true,
        outer: options.outer,
        namespace: namespace,
        cursor: cursor,
        extra: extra}) );
      // if(placeholder.parentNode && !cursor) {
      //   compiled.$inject(placeholder, 'before')
      // }
    }, OPTIONS.INIT);
    cursor = null;
  }
  return group;
};

function getListFromValue(value, type){
  return type === 'array'? value: (type === 'object'? _.keys(value) :  []);
}


// how to resolve this problem
var ii = 0;
walkers['if'] = function(ast, options){
  var self = this, consequent, alternate, extra = options.extra;
  if(options && options.element){ // attribute inteplation
    var update = function(nvalue){
      if(!!nvalue){
        if(alternate) combine.destroy(alternate)
        if(ast.consequent) consequent = self.$compile(ast.consequent, {
          record: true,
          element: options.element ,
          extra:extra
        });
      }else{
        if( consequent ) combine.destroy(consequent)
        if( ast.alternate ) alternate = self.$compile(ast.alternate, {record: true, element: options.element, extra: extra});
      }
    }
    this.$watch(ast.test, update, OPTIONS.FORCE);
    return {
      destroy: function(){
        if(consequent) combine.destroy(consequent);
        else if(alternate) combine.destroy(alternate);
      }
    }
  }

  var test, node;
  // for map
  // var placeholder = document.createComment("Regular if" + ii++);
  var group = new Group();
  group.push({});
  var preValue = null, namespace= options.namespace;
  var cursor = options.cursor;

  // for map
  // insertPlaceHolder(placeholder, cursor)

  var update = function (nvalue, old){
    var value = !!nvalue, compiledSection;
    if(value === preValue) return;
    preValue = value;
    if(group.children[1]){
      group.children[1].destroy(true);
      group.children.pop();
    }
    var curOptions = {
      record: true,
      outer: options.outer,
      namespace: namespace,
      extra: extra,
      cursor: cursor
    }
    if(value){ //true

      if(ast.consequent && ast.consequent.length){
        compiledSection = self.$compile( ast.consequent , curOptions );
      }
    }else{ //false
      if(ast.alternate && ast.alternate.length){
        compiledSection = self.$compile(ast.alternate, curOptions);
      }
    }

    // for map
    // placeholder.parentNode && placeholder.parentNode.insertBefore( node, placeholder );
    if(compiledSection){
      group.push(compiledSection );

      // for map
      // if(placeholder.parentNode && !cursor){
      //   animate.inject(combine.node(compiledSection), placeholder, 'before');
      // }
    }
    cursor = null;
    // this._updateMPData();
    // after first mount , we need clear this flat;
  }
  this.$watch(ast.test, update, OPTIONS.FORCE_INIT);

  return group;
}


// walkers._handleMountText = function(cursor, astText){
//     var node, mountNode = cursor.node;
//     // fix unused black in astText;
//     var nodeText = dom.text(mountNode);

//     if( nodeText === astText ){
//       node = mountNode;
//       cursor.next();
//     }else{
//       // maybe have some redundancy  blank
//       var index = nodeText.indexOf(astText);
//       if(~index){
//         // node = document.createTextNode(astText);
//         // dom.text( mountNode, nodeText.slice(index + astText.length) );
//         // dom.inject(node, mountNode, 'before');
//       } else {
//         // if( _.blankReg.test( astText ) ){ }
//         throw Error( MSG[ERROR.UNMATCHED_AST]);
//       }
//     }

//     return node;
// }


walkers.expression = function(ast, options){

  var cursor = options.cursor, node,
    mountNode = cursor && cursor.node;

  if(mountNode){
    //@BUG: if server render &gt; in Expression will cause error
    var astText = _.toText( this.$get(ast) );
    // node = walkers._handleMountText(cursor, astText);

  }else{
    // node = document.createTextNode("");
  }

  this.$watch(ast, function(newval){
    // dom.text(node, _.toText(newval));
    // this._updateMPData();
  }, OPTIONS.STABLE_INIT )
  return node;

}


walkers.text = function(ast, options){
  // for mp
  return {
    type: 'text'
  };

  // var cursor = options.cursor , node;
  // var text = ast.text;
  // var astText = text.indexOf('&') !== -1? _.convertEntity(text): text;

  // if(cursor && cursor.node) {
  //   var mountNode = cursor.node;
  //   // maybe regularjs parser have some difference with html builtin parser when process  empty text
  //   // @todo error report
  //   if(mountNode.nodeType !== 3 ){

  //     if( _.blankReg.test(astText) ) return {
  //       code:  ERROR.UNMATCHED_AST
  //     }

  //   }else{
  //     node = walkers._handleMountText( cursor, astText )
  //   }
  // }


  // return node || document.createTextNode( astText );
}




/**
 * walkers element (contains component)
 */
walkers.element = function(ast, options){

  var attrs = ast.attrs, self = this,
    Constructor = this.constructor,
    children = ast.children,
    namespace = options.namespace,
    extra = options.extra,
    cursor = options.cursor,
    tag = ast.tag,
    Component = Constructor.component(tag),
    ref, group, element, mountNode;
    



  if( tag === 'r-content' ){
    _.log('r-content is deprecated, use {#inc this.$body} instead (`{#include}` as same)', 'warn');
    return this.$body && this.$body(cursor? {cursor: cursor}: null);
  }


  // if inititalized with mount mode, sometime, 
  // browser will ignore the whitespace between node, and sometimes it won't
  if(cursor ){
    // textCOntent with Empty text
    if(cursor.node && cursor.node.nodeType === 3){
      // if(_.blankReg.test(dom.text(cursor.node) ) ) cursor.next();
      // else if( !Component && tag !== 'r-component' ) {
      //   throw Error(MSG[ERROR.UNMATCHED_AST]);
      // } 
    }
  }
  
  if(Component || tag === 'r-component'){
    options.Component = Component;
    return walkers.component.call(this, ast, options)
  }

  if(cursor) mountNode = cursor.node;

  if(tag === 'svg') namespace = "svg";
  // @Deprecated: may be removed in next version, use {#inc } instead

  if( children && children.length && !hasStopDirective( attrs ) ){

    var subMountNode = mountNode? mountNode.firstChild: null;
    group = this.$compile(children, {
      extra: extra ,
      outer: options.outer,
      namespace: namespace,
      cursor: nodeCursor( subMountNode, mountNode )
    });
  }


  if(mountNode){
    element = mountNode
    cursor.next();
  }else{
    // element = dom.create( tag, namespace, attrs);
  }

  // if(group && !_.isVoidTag( tag ) && !mountNode ){ // if not init with mount mode
  //   animate.inject( combine.node( group ) , element)
  // }

  // fix tag ast, some infomation only avaliable at runtime (directive etc..)
  _.fixTagAST(ast, Constructor)
  
  var eventId = getEventId(ast, options);
  var rhtmlId = getRHtmlId(ast, options);

  var destroies = walkAttributes.call(this, attrs, element, extra, eventId, rhtmlId);

  return {
    type: "element",
    group: group,
    // for mp: 记录当前节点的 eventId，后面会挂载到 vm 上
    eventId: eventId,
    node: function(){
      return element;
    },
    last: function(){
      return element;
    },
    destroy: function(first){
      if( first ){
        // animate.remove( element, group? group.destroy.bind( group ): _.noop );
      }else if(group) {
        group.destroy();
      }
      // destroy ref
      if( destroies.length ) {
        destroies.forEach(function( destroy ){
          if( destroy ){
            if( typeof destroy.destroy === 'function' ){
              destroy.destroy()
            }else{
              destroy();
            }
          }
        })
      }
    }
  }
}



walkers.component = function(ast, options){
  var attrs = ast.attrs,
    Component = options.Component,
    cursor = options.cursor,
    Constructor = this.constructor,
    isolate,
    extra = options.extra,
    namespace = options.namespace,
    refDirective = walkers.Regular.directive('ref'),
    ref, self = this, is;

  var data = {}, events;

  for(var i = 0, len = attrs.length; i < len; i++){
    var attr = attrs[i];
    // consider disabled   equlasto  disabled={true}

    shared.prepareAttr( attr, attr.name === 'ref' && refDirective );

    var value = this._touchExpr(attr.value === undefined? true: attr.value);
    if(value.constant) value = attr.value = value.get(this);
    if(attr.value && attr.value.constant === true){
      value = value.get(this);
    }
    var name = attr.name;
    if(!attr.event){
      var etest = name.match(_.eventReg);
      // event: 'nav'
      if(etest) attr.event = etest[1];
    }


    // @deprecated  use 
    if(attr.mdf === 'cmpl'){
      value = _.getCompileFn(value, this, {
        record: true,
        namespace:namespace,
        extra: extra,
        outer: options.outer
      })
    }

    // title = {~ <h2>{name}</h2>}
    if(value && value.type === 'body'){
      value = _.getCompileFn(value.body, this, {
        record: true,
        namespace: namespace,
        extra: extra,
        outer: options.outer
      }) 
    }

    // @if is r-component . we need to find the target Component
    if(name === 'is' && !Component){
      is = value;
      var componentName = this.$get(value, true);
      Component = Constructor.component(componentName)
      if(typeof Component !== 'function') throw new Error("component " + componentName + " has not registed!");
    }
    // bind event proxy
    var eventName;
    if(eventName = attr.event){
      events = events || {};
      events[eventName] = _.handleEvent.call(this, value, eventName);
      continue;
    }else {
      name = attr.name = _.camelCase( name );
    }

    if(!value || value.type !== 'expression'){
      data[name] = value;
    }else{
      data[name] = value.get(self);
    }
    if( name === 'ref'  && value != null){
      ref = value
    }
    if( name === 'isolate'){
      // 1: stop: composite -> parent
      // 2. stop: composite <- parent
      // 3. stop 1 and 2: composite <-> parent
      // 0. stop nothing (defualt)
      isolate = value.type === 'expression'? value.get(self): parseInt(value === true? 3: value, 10);
      data.isolate = isolate;
    }
  }

  var definition = {
    data: data,
    events: events,
    $parent: (isolate & 2)? null: this,
    $root: this.$root,
    $outer: options.outer,
    _extra: options.extra, // for mp: list index
    _localComponentIndex: _.getLocalComponentIndex(ast, options),  // for mp: localComponentIndex in a rgl
    _body: {
      ctx: this,
      ast: ast.children
    }
  }
  var options = {
    namespace: namespace,
    cursor: cursor,
    extra: options.extra
  }

  var component = new Component(definition, options), reflink;


  if(ref && this.$refs){
    reflink = refDirective.link;
    var refDestroy = reflink.call(this, component, ref);
    component.$on('$destroy', refDestroy);
  }
  for(var i = 0, len = attrs.length; i < len; i++){
    var attr = attrs[i];
    var value = attr.value||true;
    var name = attr.name;
    // need compiled
    if(value.type === 'expression' && !attr.event){
      value = self._touchExpr(value);
      // use bit operate to control scope
      if( !(isolate & 2) )
        this.$watch(value, (function(name, val){
          this.data[name] = val;
          // this._updateMPData();  // for mp
        }).bind(component, name), OPTIONS.SYNC)
      if( value.set && !(isolate & 1 ) )
        // sync the data. it force the component don't trigger attr.name's first dirty echeck
        component.$watch(name, self.$update.bind(self, value), OPTIONS.INIT);
    }
  }
  if(is && is.type === 'expression'  ){
    var group = new Group();
    group.push(component);
    this.$watch(is, function(value){
      // found the new component
      var Component = Constructor.component(value);
      if(!Component) throw new Error("component " + value + " has not registed!");
      var ncomponent = new Component(definition);
      var component = group.children.pop();
      group.push(ncomponent);
      ncomponent.$inject(combine.last(component), 'after')
      component.destroy();
      // @TODO  if component changed , we need update ref
      if(ref){
        var refName = ref.get? ref.get(this): ref;
        self.$refs[refName] = ncomponent;
      }

      // this._updateMPData();  // for mp
    }, OPTIONS.SYNC)
    return group;
  }
  // component._updateMPData();
  return component;
}

function walkAttributes(attrs, element, extra, eventId, rhtmlId) {
  var bindings = []
  for(var i = 0, len = attrs.length; i < len; i++){
    var binding = this._walk(attrs[i], {
      element: element,
      fromElement: true,
      attrs: attrs,
      extra: extra,
      eventId: eventId,
      rhtmlId: rhtmlId
    });
    if(binding) bindings.push(binding);
  }
  return bindings;
}

function getEventId(ast, options) {
  if (ast.eventId) {
    return ast.eventId.replace(/(?:{{\s?)(\w*)(?:\s?}})/g, function(str, key) {
      return options.extra[key];
    });
  }
  return (options.eventId + '') || '';
}

function getRHtmlId(ast, options) {
  return (ast.rhtmlId + '') || '0';
}

walkers.attribute = function(ast, options){
  var attr = ast;
  var Component = this.constructor;
  var name = attr.name;
  var directive = Component.directive(name);
  var eventId = options.eventId;
  var rhtmlId = options.rhtmlId;

  shared.prepareAttr(ast, directive);

  var value = attr.value || "";
  var constant = value.constant;
  var element = options.element;
  var self = this;


  if (attr.holders && !/^on\-/.test(attr.name)) {
    attr.holders.forEach((holder) => {
      var holderValue = this._touchExpr(holder);
      if (holder.constant) {
        holderValue.get(this);
      } else if(holder.type === 'expression') {
        this.$watch(holderValue, function() {}, OPTIONS.STABLE_INIT);
      }
    });
  }


  value = this._touchExpr(value);

  if(constant) value = value.get(this);

  if(directive && directive.link){
    var extra = {
      attrs: options.attrs,
      param: _.getParamObj(this, attr.param),
      eventId: eventId,
      rhtmlId: rhtmlId,
      extra: options.extra
    }
    var binding = directive.link.call(self, element, value, name, extra);
    // if update has been passed in , we will  automately watch value for user
    if( typeof directive.update === 'function'){
      if(_.isExpr(value)){
        this.$watch(value, function(val, old){
          directive.update.call(self, element, val, old, extra);
        })
      }else{
        directive.update.call(self, element, value, undefined, extra );
      }
    }
    if(typeof binding === 'function') binding = {destroy: binding};
    
    return binding;
  } else {
    if(value.type === 'expression' && value.get){
      this.$watch(value, function(nvalue, old){
        // dom.attr(element, name, nvalue);
      }, OPTIONS.STABLE_INIT);
    }else{
      if(_.isBooleanAttr(name)){
        // dom.attr(element, name, true);
      }else{
        // dom.attr(element, name, value);
      }
    }
    if(!options.fromElement){
      return {
        destroy: function(){
          // dom.attr(element, name, null);
        }
      }
    }
  }
}

// function insertPlaceHolder(placeholder, cursor){
//   if(cursor){
//     if(cursor.node) dom.inject( placeholder , cursor.node,'before')
//     else if(cursor.prev) {
//       dom.inject( placeholder , cursor.prev,'after')
//       cursor.prev = placeholder;
//     }else if(cursor.parent){
//       dom.inject( placeholder , cursor.parent)
//       cursor.prev = placeholder
//     }
//   }
// }


// @FIXIT
function hasStopDirective(attrs){
  for( var i = attrs.length; i--; ){
    var attr = attrs[i];
    if(attr.name === 'r-html') return true;
  }
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var page = {};
var events = __webpack_require__(20);
var callHook = __webpack_require__(21);
var dataSync = __webpack_require__(22);
var wxParse = __webpack_require__(23);
var VM = __webpack_require__(5);

page.init = function init(vm, opt) {
  Page({
    // 生命周期函数--监听页面加载
    data: {
      $root: {}
    },
    onLoad(options) {
      var rootVM = this.rootVM = VM.initRootVM(this, opt);

      wxParse.install(rootVM);

      callHook(rootVM,'onLoad', options)
    },
    // 生命周期函数--监听页面初次渲染完成
    onReady(options) {
      var rootVM = this.rootVM;
      var mp = rootVM.$mp;

      mp.status = 'ready';
      callHook(rootVM,'onReady', options)
      dataSync.initDataToMP(rootVM);
    },
    // 生命周期函数--监听页面显示
    onShow(options) {
      var rootVM = this.rootVM;
      var mp = rootVM.$mp;

      mp.status = 'show';
      callHook(rootVM,'onShow', options)
    },
    // 生命周期函数--监听页面隐藏
    onHide(options) {
      var rootVM = this.rootVM;
      var mp = rootVM.$mp;

      mp.status = 'hide';
      callHook(rootVM,'onHide', options)
    },
    // 生命周期函数--监听页面卸载
    onUnload(options) {
      var rootVM = this.rootVM;
      var mp = rootVM.$mp;

      mp.status = 'unload';
      callHook(rootVM,'onUnload', options)
    },
    // 页面相关事件处理函数--监听用户下拉动作
    onPullDownRefresh(options) {
      var rootVM = this.rootVM;

      callHook(rootVM,'onPullDownRefresh', options)
    },
    // 页面上拉触底事件的处理函数
    onReachBottom(options) {
      var rootVM = this.rootVM;

      callHook(rootVM,'onReachBottom', options)
    },
    // 用户点击右上角转发
    onShareAppMessage(options) {
      var rootVM = this.rootVM;

      return callHook(rootVM,'onShareAppMessage', options);
    },
    // 页面滚动触发事件的处理函数
    onPageScroll(options) {
      var rootVM = this.rootVM;

      callHook(rootVM,'onPageScroll', options)
    },
    // 当前是 tab 页时，点击 tab 时触发
    onTabItemTap(options) {
      var rootVM = this.rootVM;

      callHook(rootVM,'onTabItemTap', options)
    },
    proxyEvent(e) {
      var rootVM = this.rootVM;

      events.proxyEvent(rootVM, e);
    }
  });
}

module.exports = page;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

class Buffer {
  constructor() {
    this.buffer = [];
  }

  pop() {
    const { buffer, limit } = this;

    const res = this.buffer.reduce((res, buf) => {
      const { key, data } = buf;
      res[key] = data;
      return res;
    }, {});

    this.clear();

    return res;
  }

  push(data) {
    const keys = Object.keys(data);
    const { buffer } = this;

    keys.forEach((key) => {
      const dataPart = data[key]

      let index = buffer.findIndex(buf => buf.key === key);
      let newBuf = {
        key,
        data: dataPart
      };

      if (index !== -1) {
        buffer[index] = newBuf;
      } else{
        buffer.push(newBuf);
      }
      
    });
  }

  clear() {
    const temp = this.buffer;
    this.buffer = [];
    return temp;
  }

  isEmpty() {
    return this.buffer.length === 0;
  }
}

module.exports = Buffer;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(0);

var utils = {};

function diff(pre, cur, maxDep = 5, dep = 1) {
  if (dep > maxDep) {
    return true;
  }

  if (pre !== cur && (pre == undefined || cur == undefined)) {
    return true;
  }

  if (pre === cur && pre == undefined ) {
    return false;
  }

  const curType = _.typeOf(cur);
  const preType = _.typeOf(pre);

  if (curType !== preType) {
    return true;
  }

  if (curType !== 'array' && curType !== 'object') {
    return cur !== pre;
  }

  var preKeys = _.keys(pre);
  var curKeys = _.keys(cur);

  if (curKeys.length !== preKeys.length) {
    return true;
  }

  for (var i = 0; i < preKeys.length; ++i) {
    var k = preKeys[i];

    var type = typeof cur[k];
   
    if (type !== 'object' && cur[k] !== pre[k]) {
      return true;
    }

    if (type === 'object' && diff(pre[k], cur[k], maxDep, dep + 1)) {
      return true;
    }
  }

  return false;
}

function addPrefixToProperty(obj, prefix) {
  return Object.keys(obj).reduce((res, k) => {
    res[`${prefix}${k}`] = obj[k];
    return res;
  }, {});
}

function getDiffProperty(newData, oldData, path) {
  const keys = _.keys(newData);

  const temp = keys.reduce((res, k) => {
    if (diff(newData[k], oldData[k])) {
      res[`${k}`] = newData[k] || '';
    }
    return res;
  }, {});

  return temp;
}
function composePrefix(prefix, key) {
    if(_.typeOf(key) === 'number' && /^\d*$/.test(key)) {
        return [prefix, `[${key}]`].filter(str => str).join('');
    } else if(/^[^a-zA-Z_$]|[^0-9a-zA-Z_$]/.test(key)) {
        return [prefix, `.${key}`].filter(str => str).join('');
    }
    return [prefix, `${key}`].filter(str => str).join('.');
}

function flatten(obj, maxDep = 1) {
    if (obj === undefined || obj === null) {
        return obj;
    }
    const result = {};
    function flat(obj, prefix = '', dep = 1) {
        if (Object.keys(obj).length === 0) {
            result[composePrefix('', prefix)] = '';
        }

        for(let key in obj) {
            if (!obj.hasOwnProperty(key)) {
                continue;
            }
            const composeKey = composePrefix(prefix, key)

            let val = obj[key];

            if (dep >= maxDep) {
              result[composeKey] = val;
              continue;
            }

            let valType = _.typeOf(val);

            switch (valType) {
                case 'object':
                case 'array':
                    flat(val, composeKey, dep + 1);
                    break;
                default:
                    result[composeKey] = val;
                    break;
            }
        }
    }

    flat(obj);

    return result;
}

module.exports = {
  diff,
  flatten,
  addPrefixToProperty,
  getDiffProperty
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      传入函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     [options] 如果想忽略开始边界上的调用，传入{leading: false}。
 * @param  {boolean}    [options.leading=true] 如果想忽略开始边界上的调用，传入{leading: false}。
 * @param  {boolean}    [options.trailing=true] 如果想忽略结尾边界上的调用，传入{trailing: false}
 *
 * @return {Function}
 *
 * @example
 * const throttleCallback = throttle(callback, 100);
 *
 */
module.exports = function throttle(func, wait, options = {}) {
    let context, args, result;
    let timeout = null;
    // 上次执行时间点
    let previous = 0;
    // 延迟执行函数
    let later = function() {
        // 若设定了开始边界不执行选项，上次执行时间始终为0
        previous = options.leading === false ? 0 : (+new Date());
        timeout = null;
        // $flow-disable-line
        result = func.apply(context, args);
        if (!timeout) {
            context = args = null;
        }
    };
    return function() {
        let now = (+new Date());
        // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
        if (!previous && options.leading === false) {
            previous = now;
        }
        // 延迟执行时间间隔
        let remaining = wait - (now - previous);
        context = this;
        args = arguments; // eslint-disable-line
        // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
        // remaining大于时间窗口wait，表示客户端系统时间被调整过
        if (remaining <= 0 || remaining > wait) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
            if (!timeout) {
                context = args = null;
            }
        //如果延迟执行不存在，且没有设定结尾边界不执行选项
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * html2Json 改造来自: https://github.com/Jxck/html2json
 * 
 * 
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 * 
 * github地址: https://github.com/icindy/wxParse
 * 
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */

var __placeImgeUrlHttps = "https";
var __emojisReg = '';
var __emojisBaseSrc = '';
var __emojis = {};
var wxDiscode = __webpack_require__(43);
var HTMLParser = __webpack_require__(44);
// Empty Elements - HTML 5
var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");
// Block Elements - HTML 5
var block = makeMap("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

// Inline Elements - HTML 5
var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

// Attributes that have their values filled in disabled="disabled"
var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

// Special Elements (can contain anything)
var special = makeMap("wxxxcode-style,script,style,view,scroll-view,block");
function makeMap(str) {
    var obj = {}, items = str.split(",");
    for (var i = 0; i < items.length; i++)
        obj[items[i]] = true;
    return obj;
}

function q(v) {
    return '"' + v + '"';
}

function removeDOCTYPE(html) {
    return html
        .replace(/<\?xml.*\?>\n/, '')
        .replace(/<.*!doctype.*\>\n/, '')
        .replace(/<.*!DOCTYPE.*\>\n/, '');
}

function trimHtml(html) {
  return html
        .replace(/\r?\n+/g, '')
        .replace(/<!--.*?-->/ig, '')
        .replace(/\/\*.*?\*\//ig, '')
        .replace(/[ ]+</ig, '<')
}


function html2json(html, bindName) {
    //处理字符串
    html = removeDOCTYPE(html);
    html = trimHtml(html);
    html = wxDiscode.strDiscode(html);
    //生成node节点
    var bufArray = [];
    var results = {
        node: bindName,
        nodes: [],
        images:[],
        imageUrls:[]
    };
    var index = 0;
    HTMLParser(html, {
        start: function (tag, attrs, unary) {
            //debug(tag, attrs, unary);
            // node for this element
            var node = {
                node: 'element',
                tag: tag,
            };

            if (bufArray.length === 0) {
                node.index = index.toString()
                index += 1
            } else {
                var parent = bufArray[0];
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                node.index = parent.index + '.' + parent.nodes.length
            }

            if (block[tag]) {
                node.tagType = "block";
            } else if (inline[tag]) {
                node.tagType = "inline";
            } else if (closeSelf[tag]) {
                node.tagType = "closeSelf";
            }

            if (attrs.length !== 0) {
                node.attr = attrs.reduce(function (pre, attr) {
                    var name = attr.name;
                    var value = attr.value;
                    if (name == 'class') {
                        // console.dir(value);
                        //  value = value.join("")
                        node.classStr = value;
                    }
                    // has multi attibutes
                    // make it array of attribute
                    if (name == 'style') {
                        // console.dir(value);
                        //  value = value.join("")
                        node.styleStr = value;
                    }
                    if (value.match(/ /)) {
                        value = value.split(' ');
                    }
                    

                    // if attr already exists
                    // merge it
                    if (pre[name]) {
                        if (Array.isArray(pre[name])) {
                            // already array, push to last
                            pre[name].push(value);
                        } else {
                            // single value, make it array
                            pre[name] = [pre[name], value];
                        }
                    } else {
                        // not exist, put it
                        pre[name] = value;
                    }

                    return pre;
                }, {});
            }

            //对img添加额外数据
            if (node.tag === 'img') {
                node.imgIndex = results.images.length;
                var imgUrl = node.attr.src;
                if (imgUrl[0] == '') {
                    imgUrl.splice(0, 1);
                }
                imgUrl = wxDiscode.urlToHttpUrl(imgUrl, __placeImgeUrlHttps);
                node.attr.src = imgUrl;
                node.from = bindName;
                results.images.push(node);
                results.imageUrls.push(imgUrl);
            }
            
            // 处理font标签样式属性
            if (node.tag === 'font') {
                var fontSize = ['x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', '-webkit-xxx-large'];
                var styleAttrs = {
                    'color': 'color',
                    'face': 'font-family',
                    'size': 'font-size'
                };
                if (!node.attr.style) node.attr.style = [];
                if (!node.styleStr) node.styleStr = '';
                for (var key in styleAttrs) {
                    if (node.attr[key]) {
                        var value = key === 'size' ? fontSize[node.attr[key]-1] : node.attr[key];
                        node.attr.style.push(styleAttrs[key]);
                        node.attr.style.push(value);
                        node.styleStr += styleAttrs[key] + ': ' + value + ';';
                    }
                }
            }

            //临时记录source资源
            if(node.tag === 'source'){
                results.source = node.attr.src;
            }
            
            if (unary) {
                // if this tag doesn't have end tag
                // like <img src="hoge.png"/>
                // add to parents
                var parent = bufArray[0] || results;
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                parent.nodes.push(node);
            } else {
                bufArray.unshift(node);
            }
        },
        end: function (tag) {
            //debug(tag);
            // merge into parent tag
            var node = bufArray.shift();
            if (node.tag !== tag) console.error('invalid state: mismatch end tag');

            //当有缓存source资源时于于video补上src资源
            if(node.tag === 'video' && results.source){
                node.attr.src = results.source;
                delete results.source;
            }
            
            if (bufArray.length === 0) {
                results.nodes.push(node);
            } else {
                var parent = bufArray[0];
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                parent.nodes.push(node);
            }
        },
        chars: function (text) {
            //debug(text);
            var node = {
                node: 'text',
                text: text,
                textArray:transEmojiStr(text)
            };
            
            if (bufArray.length === 0) {
                node.index = index.toString()
                index += 1
                results.nodes.push(node);
            } else {
                var parent = bufArray[0];
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                node.index = parent.index + '.' + parent.nodes.length
                parent.nodes.push(node);
            }
        },
        comment: function (text) {
            //debug(text);
            // var node = {
            //     node: 'comment',
            //     text: text,
            // };
            // var parent = bufArray[0];
            // if (parent.nodes === undefined) {
            //     parent.nodes = [];
            // }
            // parent.nodes.push(node);
        },
    });
    return results;
};

function transEmojiStr(str){
  // var eReg = new RegExp("["+__reg+' '+"]");
//   str = str.replace(/\[([^\[\]]+)\]/g,':$1:')
  var array = [];
  var emojiObjs = [];
  //如果正则表达式为空
  if(__emojisReg.length == 0 || !__emojis){
      var emojiObj = {}
      emojiObj.node = "text";
      emojiObj.text = str;
      array = [emojiObj];
      return array;
  }
//   //这个地方需要调整
//   str = str.replace(/\[([^\[\]]+)\]/g,':$1:')
//   var eReg = new RegExp("[:]");
//   var array = str.split(eReg);
//   for(var i = 0; i < array.length; i++){
//     var ele = array[i];
//     var emojiObj = {};
//     if(__emojis[ele]){
//       emojiObj.node = "element";
//       emojiObj.tag = "emoji";
//       emojiObj.text = __emojis[ele];
//       emojiObj.baseSrc= __emojisBaseSrc;
//     }else{
//       emojiObj.node = "text";
//       emojiObj.text = ele;
//     }
//     emojiObjs.push(emojiObj);
//   }
  
//   return emojiObjs;
}

// function emojisInit(reg='',baseSrc="/wxParse/emojis/",emojis){
//     __emojisReg = reg;
//     __emojisBaseSrc=baseSrc;
//     __emojis=emojis;
// }

module.exports = {
    html2json: html2json,
    // emojisInit:emojisInit
};



/***/ }),
/* 43 */
/***/ (function(module, exports) {

// HTML 支持的数学符号
function strNumDiscode(str){
    str = str.replace(/&forall;/g, '∀');
    str = str.replace(/&part;/g, '∂');
    str = str.replace(/&exists;/g, '∃');
    str = str.replace(/&empty;/g, '∅');
    str = str.replace(/&nabla;/g, '∇');
    str = str.replace(/&isin;/g, '∈');
    str = str.replace(/&notin;/g, '∉');
    str = str.replace(/&ni;/g, '∋');
    str = str.replace(/&prod;/g, '∏');
    str = str.replace(/&sum;/g, '∑');
    str = str.replace(/&minus;/g, '−');
    str = str.replace(/&lowast;/g, '∗');
    str = str.replace(/&radic;/g, '√');
    str = str.replace(/&prop;/g, '∝');
    str = str.replace(/&infin;/g, '∞');
    str = str.replace(/&ang;/g, '∠');
    str = str.replace(/&and;/g, '∧');
    str = str.replace(/&or;/g, '∨');
    str = str.replace(/&cap;/g, '∩');
    str = str.replace(/&cap;/g, '∪');
    str = str.replace(/&int;/g, '∫');
    str = str.replace(/&there4;/g, '∴');
    str = str.replace(/&sim;/g, '∼');
    str = str.replace(/&cong;/g, '≅');
    str = str.replace(/&asymp;/g, '≈');
    str = str.replace(/&ne;/g, '≠');
    str = str.replace(/&le;/g, '≤');
    str = str.replace(/&ge;/g, '≥');
    str = str.replace(/&sub;/g, '⊂');
    str = str.replace(/&sup;/g, '⊃');
    str = str.replace(/&nsub;/g, '⊄');
    str = str.replace(/&sube;/g, '⊆');
    str = str.replace(/&supe;/g, '⊇');
    str = str.replace(/&oplus;/g, '⊕');
    str = str.replace(/&otimes;/g, '⊗');
    str = str.replace(/&perp;/g, '⊥');
    str = str.replace(/&sdot;/g, '⋅');
    return str;
}

//HTML 支持的希腊字母
function strGreeceDiscode(str){
    str = str.replace(/&Alpha;/g, 'Α');
    str = str.replace(/&Beta;/g, 'Β');
    str = str.replace(/&Gamma;/g, 'Γ');
    str = str.replace(/&Delta;/g, 'Δ');
    str = str.replace(/&Epsilon;/g, 'Ε');
    str = str.replace(/&Zeta;/g, 'Ζ');
    str = str.replace(/&Eta;/g, 'Η');
    str = str.replace(/&Theta;/g, 'Θ');
    str = str.replace(/&Iota;/g, 'Ι');
    str = str.replace(/&Kappa;/g, 'Κ');
    str = str.replace(/&Lambda;/g, 'Λ');
    str = str.replace(/&Mu;/g, 'Μ');
    str = str.replace(/&Nu;/g, 'Ν');
    str = str.replace(/&Xi;/g, 'Ν');
    str = str.replace(/&Omicron;/g, 'Ο');
    str = str.replace(/&Pi;/g, 'Π');
    str = str.replace(/&Rho;/g, 'Ρ');
    str = str.replace(/&Sigma;/g, 'Σ');
    str = str.replace(/&Tau;/g, 'Τ');
    str = str.replace(/&Upsilon;/g, 'Υ');
    str = str.replace(/&Phi;/g, 'Φ');
    str = str.replace(/&Chi;/g, 'Χ');
    str = str.replace(/&Psi;/g, 'Ψ');
    str = str.replace(/&Omega;/g, 'Ω');

    str = str.replace(/&alpha;/g, 'α');
    str = str.replace(/&beta;/g, 'β');
    str = str.replace(/&gamma;/g, 'γ');
    str = str.replace(/&delta;/g, 'δ');
    str = str.replace(/&epsilon;/g, 'ε');
    str = str.replace(/&zeta;/g, 'ζ');
    str = str.replace(/&eta;/g, 'η');
    str = str.replace(/&theta;/g, 'θ');
    str = str.replace(/&iota;/g, 'ι');
    str = str.replace(/&kappa;/g, 'κ');
    str = str.replace(/&lambda;/g, 'λ');
    str = str.replace(/&mu;/g, 'μ');
    str = str.replace(/&nu;/g, 'ν');
    str = str.replace(/&xi;/g, 'ξ');
    str = str.replace(/&omicron;/g, 'ο');
    str = str.replace(/&pi;/g, 'π');
    str = str.replace(/&rho;/g, 'ρ');
    str = str.replace(/&sigmaf;/g, 'ς');
    str = str.replace(/&sigma;/g, 'σ');
    str = str.replace(/&tau;/g, 'τ');
    str = str.replace(/&upsilon;/g, 'υ');
    str = str.replace(/&phi;/g, 'φ');
    str = str.replace(/&chi;/g, 'χ');
    str = str.replace(/&psi;/g, 'ψ');
    str = str.replace(/&omega;/g, 'ω');
    str = str.replace(/&thetasym;/g, 'ϑ');
    str = str.replace(/&upsih;/g, 'ϒ');
    str = str.replace(/&piv;/g, 'ϖ');
    str = str.replace(/&middot;/g, '·');
    return str;
}

// 

function strcharacterDiscode(str){
    // 加入常用解析
    str = str.replace(/&nbsp;/g, ' ');
    str = str.replace(/&quot;/g, "'");
    str = str.replace(/&amp;/g, '&');
    // str = str.replace(/&lt;/g, '‹');
    // str = str.replace(/&gt;/g, '›');

    str = str.replace(/&lt;/g, '<');
    str = str.replace(/&gt;/g, '>');
    str = str.replace(/&#8226;/g, '•');

    return str;
}

// HTML 支持的其他实体
function strOtherDiscode(str){
    str = str.replace(/&OElig;/g, 'Œ');
    str = str.replace(/&oelig;/g, 'œ');
    str = str.replace(/&Scaron;/g, 'Š');
    str = str.replace(/&scaron;/g, 'š');
    str = str.replace(/&Yuml;/g, 'Ÿ');
    str = str.replace(/&fnof;/g, 'ƒ');
    str = str.replace(/&circ;/g, 'ˆ');
    str = str.replace(/&tilde;/g, '˜');
    str = str.replace(/&ensp;/g, '');
    str = str.replace(/&emsp;/g, '');
    str = str.replace(/&thinsp;/g, '');
    str = str.replace(/&zwnj;/g, '');
    str = str.replace(/&zwj;/g, '');
    str = str.replace(/&lrm;/g, '');
    str = str.replace(/&rlm;/g, '');
    str = str.replace(/&ndash;/g, '–');
    str = str.replace(/&mdash;/g, '—');
    str = str.replace(/&lsquo;/g, '‘');
    str = str.replace(/&rsquo;/g, '’');
    str = str.replace(/&sbquo;/g, '‚');
    str = str.replace(/&ldquo;/g, '“');
    str = str.replace(/&rdquo;/g, '”');
    str = str.replace(/&bdquo;/g, '„');
    str = str.replace(/&dagger;/g, '†');
    str = str.replace(/&Dagger;/g, '‡');
    str = str.replace(/&bull;/g, '•');
    str = str.replace(/&hellip;/g, '…');
    str = str.replace(/&permil;/g, '‰');
    str = str.replace(/&prime;/g, '′');
    str = str.replace(/&Prime;/g, '″');
    str = str.replace(/&lsaquo;/g, '‹');
    str = str.replace(/&rsaquo;/g, '›');
    str = str.replace(/&oline;/g, '‾');
    str = str.replace(/&euro;/g, '€');
    str = str.replace(/&trade;/g, '™');

    str = str.replace(/&larr;/g, '←');
    str = str.replace(/&uarr;/g, '↑');
    str = str.replace(/&rarr;/g, '→');
    str = str.replace(/&darr;/g, '↓');
    str = str.replace(/&harr;/g, '↔');
    str = str.replace(/&crarr;/g, '↵');
    str = str.replace(/&lceil;/g, '⌈');
    str = str.replace(/&rceil;/g, '⌉');

    str = str.replace(/&lfloor;/g, '⌊');
    str = str.replace(/&rfloor;/g, '⌋');
    str = str.replace(/&loz;/g, '◊');
    str = str.replace(/&spades;/g, '♠');
    str = str.replace(/&clubs;/g, '♣');
    str = str.replace(/&hearts;/g, '♥');

    str = str.replace(/&diams;/g, '♦');
    str = str.replace(/&#39;/g, '\'');
    return str;
}

function strMoreDiscode(str){
    str = str.replace(/\r\n/g,"");  
    str = str.replace(/\n/g,"");

    str = str.replace(/code/g,"wxxxcode-style");
    return str;
}

function strDiscode(str){
    str = strNumDiscode(str);
    str = strGreeceDiscode(str);
    str = strcharacterDiscode(str);
    str = strOtherDiscode(str);
    str = strMoreDiscode(str);
    return str;
}
function urlToHttpUrl(url,rep){
    
    var patt1 = new RegExp("^//");
    var result = patt1.test(url);
    if(result){
        url = rep+":"+url;
    }
    return  url;
}

module.exports = {
    strDiscode:strDiscode,
    urlToHttpUrl:urlToHttpUrl
}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * 
 * htmlParser改造自: https://github.com/blowsie/Pure-JavaScript-HTML5-Parser
 * 
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 * 
 * github地址: https://github.com/icindy/wxParse
 * 
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */
// Regular Expressions for parsing tags and attributes
var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
	endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
	attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

// Empty Elements - HTML 5
var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");

// Block Elements - HTML 5
var block = makeMap("a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

// Inline Elements - HTML 5
var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

// Attributes that have their values filled in disabled="disabled"
var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

// Special Elements (can contain anything)
var special = makeMap("wxxxcode-style,script,style,view,scroll-view,block");

function HTMLParser(html, handler) {
	var index, chars, match, stack = [], last = html;
	stack.last = function () {
		return this[this.length - 1];
	};

	while (html) {
		chars = true;

		// Make sure we're not in a script or style element
		if (!stack.last() || !special[stack.last()]) {

			// Comment
			if (html.indexOf("<!--") == 0) {
				index = html.indexOf("-->");

				if (index >= 0) {
					if (handler.comment)
						handler.comment(html.substring(4, index));
					html = html.substring(index + 3);
					chars = false;
				}

				// end tag
			} else if (html.indexOf("</") == 0) {
				match = html.match(endTag);

				if (match) {
					html = html.substring(match[0].length);
					match[0].replace(endTag, parseEndTag);
					chars = false;
				}

				// start tag
			} else if (html.indexOf("<") == 0) {
				match = html.match(startTag);

				if (match) {
					html = html.substring(match[0].length);
					match[0].replace(startTag, parseStartTag);
					chars = false;
				}
			}

			if (chars) {
				index = html.indexOf("<");
				var text = ''
				while (index === 0) {
                                  text += "<";
                                  html = html.substring(1);
                                  index = html.indexOf("<");
				}
				text += index < 0 ? html : html.substring(0, index);
				html = index < 0 ? "" : html.substring(index);

				if (handler.chars)
					handler.chars(text);
			}

		} else {

			html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"), function (all, text) {
				text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2");
				if (handler.chars)
					handler.chars(text);

				return "";
			});


			parseEndTag("", stack.last());
		}

		if (html == last)
			throw "Parse Error: " + html;
		last = html;
	}

	// Clean up any remaining tags
	parseEndTag();

	function parseStartTag(tag, tagName, rest, unary) {
		tagName = tagName.toLowerCase();

		if (block[tagName]) {
			while (stack.last() && inline[stack.last()]) {
				parseEndTag("", stack.last());
			}
		}

		if (closeSelf[tagName] && stack.last() == tagName) {
			parseEndTag("", tagName);
		}

		unary = empty[tagName] || !!unary;

		if (!unary)
			stack.push(tagName);

		if (handler.start) {
			var attrs = [];

			rest.replace(attr, function (match, name) {
				var value = arguments[2] ? arguments[2] :
					arguments[3] ? arguments[3] :
						arguments[4] ? arguments[4] :
							fillAttrs[name] ? name : "";

				attrs.push({
					name: name,
					value: value,
					escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
				});
			});

			if (handler.start) {
				handler.start(tagName, attrs, unary);
			}

		}
	}

	function parseEndTag(tag, tagName) {
		// If no tag name is provided, clean shop
		if (!tagName)
			var pos = 0;

		// Find the closest opened tag of the same type
		else {
			tagName = tagName.toLowerCase();
			for (var pos = stack.length - 1; pos >= 0; pos--)
				if (stack[pos] == tagName)
					break;
		}
		if (pos >= 0) {
			// Close all the open elements, up the stack
			for (var i = stack.length - 1; i >= pos; i--)
				if (handler.end)
					handler.end(stack[i]);

			// Remove the open elements from the stack
			stack.length = pos;
		}
	}
};


function makeMap(str) {
	var obj = {}, items = str.split(",");
	for (var i = 0; i < items.length; i++)
		obj[items[i]] = true;
	return obj;
}

module.exports = HTMLParser;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


var VM = __webpack_require__(5);
var callHook = __webpack_require__(21);
var app = {};

app.init = function init(vm, opt) {
  App({
    data: {
      $root: {}
    },
    //	Function	生命周期函数--监听小程序初始化	当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
    onLaunch(options) {
      var rootVM = this.rootVM = VM.initRootVM(this, opt);

      callHook(rootVM,'onLaunch', options);
    },
    //	Function	生命周期函数--监听小程序显示	当小程序启动，或从后台进入前台显示，会触发 onShow
    onShow(options) {
      var rootVM = this.rootVM;

      callHook(rootVM,'onShow', options);
    },
    //	Function	生命周期函数--监听小程序隐藏	当小程序从前台进入后台，会触发 onHide
    onHide() {
      var rootVM = this.rootVM;

      callHook(rootVM,'onHide');
    },
    //	Function	错误监听函数	当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
    onError(msg) {
      var rootVM = this.rootVM;
      callHook(rootVM,'onError', msg);
    },
    //	Function	页面不存在监听函数	当小程序出现要打开的页面不存在的情况，会带上页面信息回调该函数，详见下文
    onPageNotFound(options) {
      var rootVM = this.rootVM;
      callHook(rootVM,'onPageNotFound', options);
    },
    eventProxy: function (e) {
      var rootVM = this.rootVM;

      const eventId = e.target.dataset.eventId;
      if (eventId) {
        $vm.$event = {
          _mp: e
        }
        $vm[eventId](e);
      }
    }
  });
};

module.exports = app;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// simplest event emitter 60 lines
// ===============================
var _ = __webpack_require__(0);
var fallbackEvent = {
  destory: '$destory',
  update: '$update',
  init: '$init',
  config: '$config'
}

// to fix 0.2.x version event
// map init to $init;
// @FIXIT after version 1.0
function fix(type){
  return fallbackEvent[type] || type
}
var API = {
  $on: function(event, fn, desc) {
    if(typeof event === "object" && event){
      for (var i in event) {
        this.$on(i, event[i], fn);
      }
    }else{
      desc = desc || {};
      // @patch: for list
      var context = this;
      event = fix(event);
      var handles = context._handles || (context._handles = {}),
        calls = handles[event] || (handles[event] = []);
      var realFn;
      if(desc.once){
        realFn = function(){
          fn.apply( this, arguments )
          this.$off(event, fn);
        }
        // @FIX: if  same fn
        fn.real = realFn;
      }
      calls.push( realFn || fn );
    }
    return this;
  },
  $off: function(event, fn) {
    var context = this;
    if(!context._handles) return;
    if(!event) this._handles = {};
    var handles = context._handles,
      calls;

    event = fix(event);
    if (calls = handles[event]) {
      if (!fn) {
        handles[event] = [];
        return context;
      }
      fn = fn.real || fn;
      for (var i = 0, len = calls.length; i < len; i++) {
        if (fn === calls[i]) {
          calls.splice(i, 1);
          return context;
        }
      }
    }
    return context;
  },
  // bubble event
  $emit: function(event){
    // @patch: for list
    var context = this;
    var handles = context._handles, calls, args, type;
    if(!event) return;
    var args = _.slice(arguments, 1);
    var type = fix(event);

    if(!handles) return context;
    if (!(calls = handles[type])) return context;

    if(calls.length > 1){ // handle, when first is off the event
      calls = calls.slice();
    }
    
    for (var i = 0, len = calls.length; i < len; i++) {
      if(typeof calls[i] === 'function') calls[i].apply(context, args)
    }
    return context;
  },
  // capture  event
  $once: function(event, fn){
    var args = _.slice(arguments);
    args.push({once: true})
    return this.$on.apply(this, args);
  }
}
// container class
function Event() {}
_.extend(Event.prototype, API)

Event.mixTo = function(obj){
  obj = typeof obj === "function" ? obj.prototype : obj;
  _.extend(obj, API)
}
module.exports = Event;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(0);
var parseExpression = __webpack_require__(12).expression;
var diff = __webpack_require__(13);
var diffTrack = __webpack_require__(17);
var diffArray = diff.diffArray;
var diffObject = diff.diffObject;
var parsePath = __webpack_require__(48);

function Watcher(){}

var methods = {
  $watch: function(expr, fn, options){
    var get, once, test, rlen, isStable = false, extra = this.__ext__; //records length
    var rawExpr = expr;
    if(!this._watchers) this._watchers = [];
    if(!this._watchersForStable) this._watchersForStable = [];

    options = options || {};
    if(options === true){
       options = { deep: true }
    }
    var uid = _.uid('w_');
    if(Array.isArray(expr)){
      var tests = [];
      for(var i = 0,len = expr.length; i < len; i++){
          tests.push(this.$expression(expr[i]).get)
      }
      var prev = [];
      test = function(context){
        var equal = true;
        for(var i =0, len = tests.length; i < len; i++){
          var splice = tests[i](context, extra);
          if(!_.equals(splice, prev[i])){
             equal = false;
             prev[i] = splice;//_.clone(splice);
          }
        }
        return equal? false: prev;
      }
    }else{
      if(typeof expr === 'function'){
        get = expr.bind(this);      
      }else{
        expr = this.$expression(expr);
        if(_.isExpr(expr)) {
          get = expr.get;
          once = expr.once;
        } else {
          get = function(){return expr};
          once = true;
          isStable = true;
        }
      }
    }

    // for mp: parse watch path
    if (get === undefined && rawExpr) {
      get = parsePath(rawExpr).reduce(function(fn, key) {
        return function(c, e) {
          e = e || '';
          return c._sg_(key, fn(c, e), e);
        }
      }, function(c, e) {
        return c.data;
      });
    }

    var watcher = {
      id: uid, 
      get: get, 
      fn: function(...args) {
        fn.call(this, ...args);
        this._updateMPData();
      }, 
      once: once, 
      force: options.force,
      // don't use ld to resolve array diff
      diff: options.diff,
      keyOf: options.keyOf,
      test: test,
      deep: options.deep,
      last: options.sync? get(this): options.last
      // cache the trackInfo for list tarck.
    }


    this[(options.stable || isStable)? '_watchersForStable': '_watchers'].push(watcher);
    
    rlen = this._records && this._records.length;
    if(rlen) this._records[rlen-1].push(watcher)
    // init state.
    if(options.init === true){
      var prephase = this.$phase;
      this.$phase = 'digest';
      this._checkSingleWatch( watcher);
      this.$phase = prephase;
    }
    return watcher;
  },
  $unwatch: function( watcher ){
    if(!this._watchers || !watcher) return;
    var watchers = this._watchers;
    var type = typeof watcher;

    if(type === 'object'){
      var len = watcher.length;
      if(!len){
        watcher.removed = true
      }else{
        while( (len--) >= 0 ){
          this.$unwatch(watcher[len])
        }
      }
    }else if(type === 'number'){
      var id = watcher;
      watcher =  _.findItem( watchers, function(item){
        return item.id === id;
      } );
      if(!watcher) watcher = _.findItem(this._watchersForStable, function( item ){
        return item.id === id
      })
      return this.$unwatch(watcher);
    }
    return this;
  },
  $expression: function(value){
    return this._touchExpr(parseExpression(value))
  },
  /**
   * the whole digest loop ,just like angular, it just a dirty-check loop;
   * @param  {String} path  now regular process a pure dirty-check loop, but in parse phase, 
   *                  Regular's parser extract the dependencies, in future maybe it will change to dirty-check combine with path-aware update;
   * @return {Void}   
   */

  $digest: function(){
    if(this.$phase === 'digest' || this._mute) return;
    this.$phase = 'digest';
    var dirty = false, n =0;
    while(dirty = this._digest()){

      if((++n) > 20){ // max loop
        throw Error('there may a circular dependencies reaches')
      }
    }
    // stable watch is dirty
    var stableDirty =  this._digest(true);

    if( (n > 0 || stableDirty) && this.$emit) {
      this.$emit("$update");
      if (this.devtools) {
        this.devtools.emit("flush", this)
      }
    }
    this.$phase = null;
  },
  // private digest logic
  _digest: function(stable){
    if(this._mute) return;
    var watchers = !stable? this._watchers: this._watchersForStable;
    var dirty = false, children, watcher, watcherDirty;
    var len = watchers && watchers.length;
    if(len){
      var mark = 0, needRemoved=0;
      for(var i =0; i < len; i++ ){
        watcher = watchers[i];
        var shouldRemove = !watcher ||  watcher.removed;
        if( shouldRemove ){
          needRemoved += 1;
        }else{
          watcherDirty = this._checkSingleWatch(watcher);
          if(watcherDirty) dirty = true;
        }
        // remove when encounter first unmoved item or touch the end
        if( !shouldRemove || i === len-1 ){
          if( needRemoved ){
            watchers.splice(mark, needRemoved );          
            len -= needRemoved;
            i -= needRemoved;
            needRemoved = 0;
          }
          mark = i+1;
        }
      }
    }
    // check children's dirty.
    children = this._children;
    if(children && children.length){
      for(var m = 0, mlen = children.length; m < mlen; m++){
        var child = children[m];
        if(child && child._digest(stable)) dirty = true;
      }
    }
    return dirty;
  },
  // check a single one watcher 
  _checkSingleWatch: function(watcher){
    var dirty = false;
    if(!watcher) return;

    var now, last, tlast, tnow,  
      eq, diff, keyOf, trackDiff
     

    if(!watcher.test){

      now = watcher.get(this);
      last = watcher.last;
      keyOf = watcher.keyOf

      if(now !== last || watcher.force){
        tlast = _.typeOf(last);
        tnow = _.typeOf(now);
        eq = true; 

        // !Object
        if( !(tnow === 'object' && tlast==='object' && watcher.deep) ){
          // Array
          if( tnow === 'array' && ( tlast=='undefined' || tlast === 'array') ){
            if(typeof keyOf === 'function'){
              trackDiff = diffTrack(now, watcher.last || [], keyOf )
              diff = trackDiff.steps;
              if(trackDiff.dirty) dirty = true;
            }else{
              diff = diffArray(now, watcher.last || [], watcher.diff)
            }
            
            if(!dirty && (tlast !== 'array' || diff === true || diff.length) ) dirty = true;
          }else{
            eq = _.equals( now, last );
            if( !eq || watcher.force ){
              watcher.force = null;
              dirty = true; 
            }
          }
        }else{
          diff =  diffObject( now, last, watcher.diff, keyOf  );
          if(diff.isTrack){
            trackDiff = diff;
            diff = trackDiff.steps;
          }
          if( diff === true || diff.length ) dirty = true;
        }
      }

    } else{
      // @TODO 是否把多重改掉
      var result = watcher.test(this);
      if(result){
        dirty = true;
        watcher.fn.apply(this, result)
      }
    }
    if(dirty && !watcher.test){
      if(tnow === 'object' && watcher.deep || tnow === 'array'){
        watcher.last = _.clone(now);
      }else{
        watcher.last = now;
      }
      watcher.fn.call(this, now, last, diff, trackDiff && trackDiff.oldKeyMap, trackDiff && trackDiff.dirty)
      if(watcher.once) this.$unwatch(watcher)
    }

    return dirty;
  },

  /**
   * **tips**: whatever param you passed in $update, after the function called, dirty-check(digest) phase will enter;
   * 
   * @param  {Function|String|Expression} path  
   * @param  {Whatever} value optional, when path is Function, the value is ignored
   * @return {this}     this 
   */
  $set: function(path, value){
    if(path != null){
      var type = typeof (path);
      if( type === 'string' || path.type === 'expression' ){
        path = this.$expression(path);
        path.set(this, value);
      }else if(type === 'function'){
        path.call(this, this.data);
      }else{
        for(var i in path) {
          this.$set(i, path[i])
        }
      }
    }
  },
  // 1. expr canbe string or a Expression
  // 2. detect: if true, if expr is a string will directly return;
  $get: function(expr, detect)  {
    if(detect && typeof expr === 'string') return expr;
    return this.$expression(expr).get(this);
  },
  $update: function() {
    var rootParent = this;
    if(rootParent.$phase==='destroyed') return this;
    do{
      if(rootParent.data.isolate || !rootParent.$parent) break;
      rootParent = rootParent.$parent;
    } while(rootParent)

    var prephase =rootParent.$phase;
    rootParent.$phase = 'digest'

    this.$set.apply(this, arguments);

    rootParent.$phase = prephase

    rootParent.$digest();

    // for mp: update data to mp
    this._updateMPData();

    return this;
  },
  // auto collect watchers for logic-control.
  _record: function(){
    if(!this._records) this._records = [];
    this._records.push([]);
  },
  _release: function(){
    return this._records.pop();
  }
}


_.extend(Watcher.prototype, methods)


Watcher.mixTo = function(obj){
  obj = typeof obj === "function" ? obj.prototype : obj;
  return _.extend(obj, methods)
}

module.exports = Watcher;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var Lexer = __webpack_require__(8);

module.exports = function(path) {
  var tokens = new Lexer(path, { mode: 2, expression: true }).lex();
  var res = [];
  var i = 0;
  var valid = true;

  if (tokens[0].type !== 'IDENT') {
    valid = false;
  }

  while(i < tokens.length) {
    var token = tokens[i];
    var type = token && token.type;
    if (!token || type === 'EOF' || !valid) {
      break;
    }
    switch(type) {
      case 'IDENT':
        res.push(token.value);
        i++;
      break;
      case '[':
        var close = tokens[i + 2];
        var mediate = tokens[i + 1];
        if ( close
            && close.type === ']'
            && (mediate.type === 'STRING' || mediate.type === 'NUMBER')
        ) {
          res.push(mediate.value);
          i += 3;
        } else {
          valid = false;
        }
      break;
      case '.':
        i++;
      break;
      default:
        valid = false;
    }
  }

  if (!valid) {
    throw new Error('Regular.prototype.$watch don\'t support expression "' + path + '"');
    return;
  }
  return res;
}

/***/ }),
/* 49 */
/***/ (function(module, exports) {


var f = module.exports = {};

// json:  two way 
//  - get: JSON.stringify
//  - set: JSON.parse
//  - example: `{ title|json }`
f.json = {
  get: function( value ){
    return typeof JSON !== 'undefined'? JSON.stringify(value): value;
  },
  set: function( value ){
    return typeof JSON !== 'undefined'? JSON.parse(value) : value;
  }
}

// last: one-way
//  - get: return the last item in list
//  - example: `{ list|last }`
f.last = function(arr){
  return arr && arr[arr.length - 1];
}

// average: one-way
//  - get: copute the average of the list
//  - example: `{ list| average: "score" }`
f.average = function(array, key){
  array = array || [];
  return array.length? f.total(array, key)/ array.length : 0;
}


// total: one-way
//  - get: copute the total of the list
//  - example: `{ list| total: "score" }`
f.total = function(array, key){
  var total = 0;
  if(!array) return;
  array.forEach(function( item ){
    total += key? item[key] : item;
  })
  return total;
}




/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Regular
var _ = __webpack_require__(0);
// var dom = require("../dom");
// var animate = require("../helper/animate");
var Regular = __webpack_require__(3);
var consts = __webpack_require__(2);
var namespaces = consts.NAMESPACE;
var OPTIONS = consts.OPTIONS
var STABLE = OPTIONS.STABLE;
var DEEP_STABLE = {deep: true, stable: true};
var html2wxml = __webpack_require__(24);




__webpack_require__(51);
__webpack_require__(52);


module.exports = {
// **warn**: class inteplation will override this directive 
  'r-class': function(elem, value){

    // if(typeof value=== 'string'){
    //   value = _.fixObjStr(value)
    // }
    // var isNotHtml = elem.namespaceURI && elem.namespaceURI !== namespaces.html ;
    // this.$watch(value, function(nvalue){
    //   var className = isNotHtml? elem.getAttribute('class'): elem.className;
    //   className = ' '+ (className||'').replace(/\s+/g, ' ') +' ';
    //   for(var i in nvalue) if(nvalue.hasOwnProperty(i)){
    //     className = className.replace(' ' + i + ' ',' ');
    //     if(nvalue[i] === true){
    //       className += i+' ';
    //     }
    //   }
    //   className = className.trim();
    //   if(isNotHtml){
    //     dom.attr(elem, 'class', className)
    //   }else{
    //     elem.className = className
    //   }
    // }, DEEP_STABLE);
  },
  // **warn**: style inteplation will override this directive 
  'r-style': function(elem, value){
    // if(typeof value=== 'string'){
    //   value = _.fixObjStr(value)
    // }
    // this.$watch(value, function(nvalue){
    //   for(var i in nvalue) if(nvalue.hasOwnProperty(i)){
    //     dom.css(elem, i, nvalue[i]);
    //   }
    // },DEEP_STABLE);
  },
  // when expression is evaluate to true, the elem will add display:none
  // Example: <div r-hide={{items.length > 0}}></div>
  'r-hide': {
    link:function(elem, value){
      var preBool = null, compelete;
      if( _.isExpr(value) || typeof value === "string"){
        this.$watch(value, function(nvalue){
          // var bool = !!nvalue;
          // if(bool === preBool) return; 
          // preBool = bool;
          // if(bool){
          //   if(elem.onleave){
          //     compelete = elem.onleave(function(){
          //       elem.style.display = "none"
          //       compelete = null;
          //     })
          //   }else{
          //     elem.style.display = "none"
          //   }
            
          // }else{
          //   if(compelete) compelete();
          //   elem.style.display = "";
          //   if(elem.onenter){
          //     elem.onenter();
          //   }
          // }
        }, STABLE);
      }else if(!!value){
        // elem.style.display = "none";
      }
    },
    ssr: function(value){
      return value? 'style="display:none"': ''
    }
  },
  'r-html': {
    ssr: function(value, tag){
      tag.body = value;
      return "";
    },
    link: function(elem, value, name , attrs){
      this.$watch(value, function(newVal){
        var node = {};
        try {
          node = html2wxml.wxParse('wxparse', 'html', newVal, null, 0);
        } catch (err) {
          console.error('r-html wxParse error', err);
        }
        this._updateMPHolders(node, {
          key: '__wxparsed',
          id: attrs.rhtmlId,
          extra: attrs.extra
        });

      }, {force: true, stable: true});

      this._initWxParse()
    }
  },
  'ref': {
    // accept: consts.COMPONENT_TYPE + consts.ELEMENT_TYPE,
    // link: function( elem, value ){
    //   var refs = this.$refs || (this.$refs = {});
    //   var cval;
    //   if(_.isExpr(value)){
    //     this.$watch(value, function(nval, oval){
    //       cval = nval;
    //       if(refs[oval] === elem) refs[oval] = null;
    //       if(cval) refs[cval] = elem;
    //     }, STABLE)
    //   }else{
    //     refs[cval = value] = elem;
    //   }
    //   return function(){
    //     refs[cval] = null;
    //   }
    // }
  }
}

Regular.directive(module.exports);












/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * event directive  bundle
 *
 */
var _ = __webpack_require__(0);
// var dom = require("../dom");
var Regular = __webpack_require__(3);

Regular._addProtoInheritCache("event");

Regular.directive( /^on-\w+$/, function( elem, value, name , attrs) {
  if ( !name || !value ) return;
  var type = name.split("-")[1];
  return this._handleEvent( elem, type, value, attrs );
});
// TODO.
/**
- $('dx').delegate()
*/
// Regular.directive( /^(delegate|de)-\w+$/, function( elem, value, name ) {
//   var root = this.$root;
//   var _delegates = root._delegates || ( root._delegates = {} );
//   if ( !name || !value ) return;
//   var type = name.split("-")[1];
//   var fire = _.handleEvent.call(this, value, type);

//   function delegateEvent(ev){
//     matchParent(ev, _delegates[type], root.parentNode);
//   }

//   if( !_delegates[type] ){
//     _delegates[type] = [];

//     if(root.parentNode){
//       dom.on(root.parentNode, type, delegateEvent);
//     }else{
//       root.$on( "$inject", function( node, position, preParent ){
//         var newParent = this.parentNode;
//         if( preParent ){
//           dom.off(preParent, type, delegateEvent);
//         }
//         if(newParent) dom.on(this.parentNode, type, delegateEvent);
//       })
//     }
//     root.$on("$destroy", function(){
//       if(root.parentNode) dom.off(root.parentNode, type, delegateEvent)
//       _delegates[type] = null;
//     })
//   }
//   var delegate = {
//     element: elem,
//     fire: fire
//   }
//   _delegates[type].push( delegate );

//   return function(){
//     var delegates = _delegates[type];
//     if(!delegates || !delegates.length) return;
//     for( var i = 0, len = delegates.length; i < len; i++ ){
//       if( delegates[i] === delegate ) delegates.splice(i, 1);
//     }
//   }

// });


// function matchParent(ev , delegates, stop){
//   if(!stop) return;
//   var target = ev.target, pair;
//   while(target && target !== stop){
//     for( var i = 0, len = delegates.length; i < len; i++ ){
//       pair = delegates[i];
//       if(pair && pair.element === target){
//         pair.fire(ev)
//       }
//     }
//     target = target.parentNode;
//   }
// }

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// Regular
var _ = __webpack_require__(0);
// var dom = require("../dom");
var OPTIONS = __webpack_require__(2).OPTIONS
var STABLE = OPTIONS.STABLE;
var hasInput;
var Regular = __webpack_require__(3);

// var modelHandlers = {
//   "text": initText,
//   "select": initSelect,
//   "checkbox": initCheckBox,
//   "radio": initRadio
// }


// @TODO


// autoUpdate directive for select element
// to fix r-model issue , when handle dynamic options


/**
 * <select r-model={name}> 
 *   <r-option value={value} ></r-option>
 * </select>
 */


// two-way binding with r-model
// works on input, textarea, checkbox, radio, select


Regular.directive("r-model", {
  param: ['throttle', 'lazy'],
  link: function( elem, value, name, extra ) {
    this._addMPEventHandler(extra.eventId, 'r-model', function(e) {
      var v = e.detail && e.detail.value;
      if (v !== undefined) {
        value.set(this, v);
        this.$update();
      }
    });

    // var tag = elem.tagName.toLowerCase();
    // var sign = tag;
    // if(sign === "input") sign = elem.type || "text";
    // else if(sign === "textarea") sign = "text";
    // if(typeof value === "string") value = this.$expression(value);

    // if( modelHandlers[sign] ) return modelHandlers[sign].call(this, elem, value, extra);
    // else if(tag === "input"){
    //   return modelHandlers.text.call(this, elem, value, extra);
    // }
  }
  //@TODO
  // ssr: function(name, value){
  //   return value? "value=" + value: ""
  // }
});





// binding <select>

// function initSelect( elem, parsed, extra){
//   var self = this;
//   var wc = this.$watch(parsed, function(newValue){
//     var children = elem.getElementsByTagName('option');
//     for(var i =0, len = children.length ; i < len; i++){
//       if(children[i].value == newValue){
//         elem.selectedIndex = i;
//         break;
//       }
//     }
//   }, STABLE);

//   function handler(){
//     parsed.set(self, this.value);
//     wc.last = this.value;
//     self.$update();
//   }
//   // var isChanging = true 
//   // var __change = function(){
//   //   if(isChanging) return;
//   //   isChanging = true;
//   //   setTimeout(handler,0)
//   // }

//   dom.on( elem, "change", handler );
  
//   if(parsed.get(self) === undefined && elem.value){
//     parsed.set(self, elem.value);
//   }

//   return function destroy(){
//     dom.off(elem, "change", handler);
//     // @TODO remove __change function 
//     // elem.__change = null;
//   }
// }

// input,textarea binding
// function initText(elem, parsed, extra){
//   var param = extra.param;
//   var throttle, lazy = param.lazy

//   if('throttle' in param){
//     // <input throttle r-model>
//     if(param[throttle] === true){
//       throttle = 400;
//     }else{
//       throttle = parseInt(param.throttle , 10)
//     }
//   }

//   var self = this;
//   var wc = this.$watch(parsed, function(newValue){
//     if(elem.value !== newValue) elem.value = newValue == null? "": "" + newValue;
//   }, STABLE);

//   // @TODO to fixed event
//   var handler = function (ev){
//     var that = this;
//     if(ev.type==='cut' || ev.type==='paste'){
//       _.nextTick(function(){
//         var value = that.value
//         parsed.set(self, value);
//         wc.last = value;
//         self.$update();
//       })
//     }else{
//         var value = that.value
//         parsed.set(self, value);
//         wc.last = value;
//         self.$update();
//     }
//   };

//   if(throttle && !lazy){
//     var preHandle = handler, tid;
//     handler = _.throttle(handler, throttle);
//   }

//   if(hasInput === undefined){
//     hasInput = dom.msie !== 9 && "oninput" in document.createElement('input')
//   }

//   if(lazy){
//     dom.on(elem, 'change', handler)
//   }else{
//     if( hasInput){
//       elem.addEventListener("input", handler );
//     }else{
//       dom.on(elem, "paste keyup cut change", handler)
//     }
//   }
//   if(parsed.get(self) === undefined && elem.value){
//      parsed.set(self, elem.value);
//   }
//   return function (){
//     if(lazy) return dom.off(elem, "change", handler);
//     if( hasInput ){
//       elem.removeEventListener("input", handler );
//     }else{
//       dom.off(elem, "paste keyup cut change", handler)
//     }
//   }
// }


// input:checkbox  binding

// function initCheckBox(elem, parsed){
//   var self = this;
//   var watcher = this.$watch(parsed, function(newValue){
//     dom.attr(elem, 'checked', !!newValue);
//   }, STABLE);

//   var handler = function handler(){
//     var value = this.checked;
//     parsed.set(self, value);
//     watcher.last = value;
//     self.$update();
//   }
//   if(parsed.set) dom.on(elem, "change", handler)

//   if(parsed.get(self) === undefined){
//     parsed.set(self, !!elem.checked);
//   }

//   return function destroy(){
//     if(parsed.set) dom.off(elem, "change", handler)
//   }
// }


// input:radio binding

// function initRadio(elem, parsed){
//   var self = this;
//   var wc = this.$watch(parsed, function( newValue ){
//     if(newValue == elem.value) elem.checked = true;
//     else elem.checked = false;
//   }, STABLE);


//   var handler = function handler(){
//     var value = this.value;
//     parsed.set(self, value);
//     self.$update();
//   }
//   if(parsed.set) dom.on(elem, "change", handler)
//   // beacuse only after compile(init), the dom structrue is exsit. 
//   if(parsed.get(self) === undefined){
//     if(elem.checked) {
//       parsed.set(self, elem.value);
//     }
//   }

//   return function destroy(){
//     if(parsed.set) dom.off(elem, "change", handler)
//   }
// }





/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var Regular = __webpack_require__(3);

/**
 * Timeout Module
 * @param {Component} Component 
 */
function TimeoutModule(Component){

  Component.implement({
    /**
     * just like setTimeout, but will enter digest automately
     * @param  {Function} fn    
     * @param  {Number}   delay 
     * @return {Number}   timeoutid
     */
    $timeout: function(fn, delay){
      delay = delay || 0;
      return setTimeout(function(){
        fn.call(this);
        this.$update(); //enter digest
      }.bind(this), delay);
    },
    /**
     * just like setInterval, but will enter digest automately
     * @param  {Function} fn    
     * @param  {Number}   interval 
     * @return {Number}   intervalid
     */
    $interval: function(fn, interval){
      interval = interval || 1000/60;
      return setInterval(function(){
        fn.call(this);
        this.$update(); //enter digest
      }.bind(this), interval);
    }
  });
}


Regular.plugin('timeout', TimeoutModule);
Regular.plugin('$timeout', TimeoutModule);

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(28);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);
//# sourceMappingURL=vendor.js.map