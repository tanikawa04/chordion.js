(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Chordion"] = factory();
	else
		root["Chordion"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interval = function () {
  function Interval(number, name) {
    _classCallCheck(this, Interval);

    this._number = number;
    this._name = name;
  }

  _createClass(Interval, [{
    key: 'equals',
    value: function equals(target) {
      return this.name === target.name;
    }
  }, {
    key: 'number',
    get: function get() {
      return this._number;
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }
  }]);

  return Interval;
}();

exports.default = {
  get P1() {
    return new Interval(0, 'P1');
  },
  get m2() {
    return new Interval(1, 'm2');
  },
  get M2() {
    return new Interval(2, 'M2');
  },
  get m3() {
    return new Interval(3, 'm3');
  },
  get M3() {
    return new Interval(4, 'M3');
  },
  get P4() {
    return new Interval(5, 'P4');
  },
  get A4() {
    return new Interval(6, 'A4');
  }, get d5() {
    return new Interval(6, 'd5');
  },
  get P5() {
    return new Interval(7, 'P5');
  },
  get m6() {
    return new Interval(8, 'm6');
  }, get A5() {
    return new Interval(8, 'A5');
  },
  get M6() {
    return new Interval(9, 'M6');
  }, get d7() {
    return new Interval(9, 'd7');
  },
  get m7() {
    return new Interval(10, 'm7');
  },
  get M7() {
    return new Interval(11, 'M7');
  },
  get P8() {
    return new Interval(12, 'P8');
  },
  get m9() {
    return new Interval(13, 'm9');
  },
  get M9() {
    return new Interval(14, 'M9');
  },
  get m10() {
    return new Interval(15, 'm10');
  }, get A9() {
    return new Interval(15, 'A9');
  },
  get M10() {
    return new Interval(16, 'M10');
  },
  get P11() {
    return new Interval(17, 'P11');
  },
  get A11() {
    return new Interval(18, 'A11');
  }, get d12() {
    return new Interval(18, 'd12');
  },
  get P12() {
    return new Interval(19, 'P12');
  },
  get m13() {
    return new Interval(20, 'm13');
  },
  get M13() {
    return new Interval(21, 'M13');
  },
  get m14() {
    return new Interval(22, 'm14');
  },
  get M14() {
    return new Interval(23, 'M14');
  },
  get P15() {
    return new Interval(24, 'P15');
  }
};
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(12)
var ieee754 = __webpack_require__(13)
var isArray = __webpack_require__(14)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

exports.__esModule = true;
var toString = Object.prototype.toString;

var isBuffer = typeof Buffer !== 'undefined' ? function isBuffer(obj) {
  return Buffer.isBuffer(obj);
} : function isBuffer() {
  // always return false in browsers
  return false;
};

var getKeys = typeof Object.keys === 'function' ? function getKeys(obj) {
  return Object.keys(obj);
} : function getKeys(obj) {
  var objType = typeof obj;

  if (obj === null || objType !== 'function' && objType !== 'object') {
    throw new TypeError('obj must be an Object');
  }

  var resultKeys = [],
      key = void 0;

  for (key in obj) {
    Object.prototype.hasOwnProperty.call(obj, key) && resultKeys.push(key);
  }

  return resultKeys;
};

var getSymbols = typeof Symbol === 'function' ? function getSymbols(obj) {
  return Object.getOwnPropertySymbols(obj);
} : function getSymbols() {
  // always return empty Array when Symbol is not supported
  return [];
};

// NOTE:
//
//   Array.prototype.indexOf is cannot find NaN (in Chrome)
//   Array.prototype.includes is can find NaN (in Chrome)
//
//   this function can find NaN, because use SameValue algorithm
function indexOf(array, s) {
  if (toString.call(array) !== '[object Array]') {
    throw new TypeError('array must be an Array');
  }

  var i = void 0,
      len = void 0,
      value = void 0;

  for (i = 0, len = array.length; i < len; ++i) {
    value = array[i];

    // NOTE:
    //
    //   it is SameValue algorithm
    //   http://stackoverflow.com/questions/27144277/comparing-a-variable-with-itself
    //
    // eslint-disable-next-line no-self-compare
    if (value === s || value !== value && s !== s) {
      return i;
    }
  }

  return -1;
}

exports.getKeys = getKeys;
exports.getSymbols = getSymbols;
exports.indexOf = indexOf;
exports.isBuffer = isBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1).Buffer))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _B, _C, _Db, _D, _Eb, _Fb, _E, _F, _Gb, _G, _Ab, _A, _Bb, _Cb, _BS$C$CS$DF$D$DS$EF$E, _mutatorMap;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PitchClass = function () {
  function PitchClass(number, name) {
    _classCallCheck(this, PitchClass);

    this._number = number;
    this._name = name;
  }

  _createClass(PitchClass, [{
    key: 'equals',
    value: function equals(target) {
      return this.number === target.number;
    }
  }, {
    key: 'number',
    get: function get() {
      return this._number;
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }
  }]);

  return PitchClass;
}();

exports.default = (_BS$C$CS$DF$D$DS$EF$E = {
  get BS() {
    return new PitchClass(0, 'B#');
  },
  get C() {
    return new PitchClass(0, 'C');
  },
  get CS() {
    return new PitchClass(1, 'C#');
  },
  get DF() {
    return new PitchClass(1, 'Db');
  },
  get D() {
    return new PitchClass(2, 'D');
  },
  get DS() {
    return new PitchClass(3, 'D#');
  },
  get EF() {
    return new PitchClass(3, 'Eb');
  },
  get E() {
    return new PitchClass(4, 'E');
  },
  get FF() {
    return new PitchClass(4, 'Fb');
  },
  get ES() {
    return new PitchClass(5, 'E#');
  },
  get F() {
    return new PitchClass(5, 'F');
  },
  get FS() {
    return new PitchClass(6, 'F#');
  },
  get GF() {
    return new PitchClass(6, 'Gb');
  },
  get G() {
    return new PitchClass(7, 'G');
  },
  get GS() {
    return new PitchClass(8, 'G#');
  },
  get AF() {
    return new PitchClass(8, 'Ab');
  },
  get A() {
    return new PitchClass(9, 'A');
  },
  get AS() {
    return new PitchClass(10, 'A#');
  },
  get BF() {
    return new PitchClass(10, 'Bb');
  },
  get B() {
    return new PitchClass(11, 'B');
  },
  get CF() {
    return new PitchClass(11, 'Cb');
  }

}, _B = 'B#', _mutatorMap = {}, _mutatorMap[_B] = _mutatorMap[_B] || {}, _mutatorMap[_B].get = function () {
  return this.BS;
}, _C = 'C#', _mutatorMap[_C] = _mutatorMap[_C] || {}, _mutatorMap[_C].get = function () {
  return this.CS;
}, _Db = 'Db', _mutatorMap[_Db] = _mutatorMap[_Db] || {}, _mutatorMap[_Db].get = function () {
  return this.DF;
}, _D = 'D#', _mutatorMap[_D] = _mutatorMap[_D] || {}, _mutatorMap[_D].get = function () {
  return this.DS;
}, _Eb = 'Eb', _mutatorMap[_Eb] = _mutatorMap[_Eb] || {}, _mutatorMap[_Eb].get = function () {
  return this.EF;
}, _Fb = 'Fb', _mutatorMap[_Fb] = _mutatorMap[_Fb] || {}, _mutatorMap[_Fb].get = function () {
  return this.FF;
}, _E = 'E#', _mutatorMap[_E] = _mutatorMap[_E] || {}, _mutatorMap[_E].get = function () {
  return this.ES;
}, _F = 'F#', _mutatorMap[_F] = _mutatorMap[_F] || {}, _mutatorMap[_F].get = function () {
  return this.FS;
}, _Gb = 'Gb', _mutatorMap[_Gb] = _mutatorMap[_Gb] || {}, _mutatorMap[_Gb].get = function () {
  return this.GF;
}, _G = 'G#', _mutatorMap[_G] = _mutatorMap[_G] || {}, _mutatorMap[_G].get = function () {
  return this.GS;
}, _Ab = 'Ab', _mutatorMap[_Ab] = _mutatorMap[_Ab] || {}, _mutatorMap[_Ab].get = function () {
  return this.AF;
}, _A = 'A#', _mutatorMap[_A] = _mutatorMap[_A] || {}, _mutatorMap[_A].get = function () {
  return this.AS;
}, _Bb = 'Bb', _mutatorMap[_Bb] = _mutatorMap[_Bb] || {}, _mutatorMap[_Bb].get = function () {
  return this.BF;
}, _Cb = 'Cb', _mutatorMap[_Cb] = _mutatorMap[_Cb] || {}, _mutatorMap[_Cb].get = function () {
  return this.CF;
}, _defineEnumerableProperties(_BS$C$CS$DF$D$DS$EF$E, _mutatorMap), _BS$C$CS$DF$D$DS$EF$E);
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _interval = __webpack_require__(0);

var _interval2 = _interopRequireDefault(_interval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChordType = function () {
  function ChordType(intervals, name) {
    _classCallCheck(this, ChordType);

    this._intervals = intervals;
    this._name = name;
  }

  _createClass(ChordType, [{
    key: 'equals',
    value: function equals(target) {
      return this.name === target.name;
    }
  }, {
    key: 'intervals',
    get: function get() {
      return [].concat(_toConsumableArray(this._intervals));
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }
  }]);

  return ChordType;
}();

exports.default = {
  get MAJOR() {
    return new ChordType([_interval2.default.P1, _interval2.default.M3, _interval2.default.P5], 'M');
  },
  get SUSPENDED_FOURTH() {
    return new ChordType([_interval2.default.P1, _interval2.default.P4, _interval2.default.P5], 'sus4');
  },
  get AUGMENT() {
    return new ChordType([_interval2.default.P1, _interval2.default.M3, _interval2.default.A5], 'aug');
  },
  get MINOR() {
    return new ChordType([_interval2.default.P1, _interval2.default.m3, _interval2.default.P5], 'm');
  },
  get DIMINISH() {
    return new ChordType([_interval2.default.P1, _interval2.default.m3, _interval2.default.d5], 'dim');
  },
  get MAJOR_SEVENTH() {
    return new ChordType([_interval2.default.P1, _interval2.default.M3, _interval2.default.P5, _interval2.default.M7], 'M7');
  },
  get SEVENTH() {
    return new ChordType([_interval2.default.P1, _interval2.default.M3, _interval2.default.P5, _interval2.default.m7], '7');
  },
  get SEVENTH_SUSPENDED_FOURTH() {
    return new ChordType([_interval2.default.P1, _interval2.default.P4, _interval2.default.P5, _interval2.default.m7], '7sus4');
  },
  get ADD_NINTH() {
    return new ChordType([_interval2.default.P1, _interval2.default.M3, _interval2.default.P5, _interval2.default.M9], 'add9');
  },
  get SIXTH() {
    return new ChordType([_interval2.default.P1, _interval2.default.M3, _interval2.default.P5, _interval2.default.M6], '6');
  },
  get AUGMENT_SEVENTH() {
    return new ChordType([_interval2.default.P1, _interval2.default.M3, _interval2.default.A5, _interval2.default.m7], 'aug7');
  },
  get AUGMENT_MAJOR_SEVENTH() {
    return new ChordType([_interval2.default.P1, _interval2.default.M3, _interval2.default.A5, _interval2.default.M7], 'augM7');
  },
  get MINOR_SEVENTH() {
    return new ChordType([_interval2.default.P1, _interval2.default.m3, _interval2.default.P5, _interval2.default.m7], 'm7');
  },
  get MINOR_MAJOR_SEVENTH() {
    return new ChordType([_interval2.default.P1, _interval2.default.m3, _interval2.default.P5, _interval2.default.M7], 'mM7');
  },
  get MINOR_ADD_NINTH() {
    return new ChordType([_interval2.default.P1, _interval2.default.m3, _interval2.default.P5, _interval2.default.M9], 'madd9');
  },
  get MINOR_SIXTH() {
    return new ChordType([_interval2.default.P1, _interval2.default.m3, _interval2.default.P5, _interval2.default.M6], 'm6');
  },
  get HALF_DIMINISH() {
    return new ChordType([_interval2.default.P1, _interval2.default.m3, _interval2.default.d5, _interval2.default.m7], 'φ');
  },
  get DIMINISH_SEVENTH() {
    return new ChordType([_interval2.default.P1, _interval2.default.m3, _interval2.default.d5, _interval2.default.d7], 'dim7');
  }
};
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parseChord2 = __webpack_require__(6);

var _parseChord3 = _interopRequireDefault(_parseChord2);

var _chord = __webpack_require__(7);

var _chord2 = _interopRequireDefault(_chord);

var _pitchClass = __webpack_require__(3);

var _pitchClass2 = _interopRequireDefault(_pitchClass);

var _chordType = __webpack_require__(4);

var _chordType2 = _interopRequireDefault(_chordType);

var _interval = __webpack_require__(0);

var _interval2 = _interopRequireDefault(_interval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function validate(chord) {
  return;
}

var Chordion = function () {
  function Chordion() {
    _classCallCheck(this, Chordion);
  }

  _createClass(Chordion, null, [{
    key: 'parse',
    value: function parse(text) {
      var validation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var chord = void 0;
      try {
        var _parseChord = (0, _parseChord3.default)(text),
            root = _parseChord.root,
            type = _parseChord.type,
            tensions = _parseChord.tensions,
            bass = _parseChord.bass;

        chord = new _chord2.default(root, type, tensions, bass);
      } catch (err) {
        throw err;
      }

      if (validation) {
        validate(chord);
      }

      return chord;
    }
  }]);

  return Chordion;
}();

exports.default = Chordion;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	"use strict";
	/*
  * Generated by snake parser 0.2.4.1
  */

	function $parse($input, options) {
		options = options || {};
		var $inputLength = $input.length;
		var $pos = 0;
		var $objs = [];
		var $objsLen = 0;
		var $memo = [];
		var $matchTable = new Array($inputLength);
		var $errorMask = 0;
		var $failMatchs = [];
		var $failPos = 0;
		var $failureObj = {};

		function check(seq, tensions) {
			var i = 0,
			    j = 0;
			while (seq[i] && tensions[j]) {
				if (seq[i] === tensions[j++]) i += 1;
			}return !seq[i];
		}

		function mod$0($) {
			return $.join('');
		};

		function rule$start() {
			var pos0 = $pos,
			    objsLen0 = $objsLen;
			rule$chord();
		};

		function rule$chord() {
			var key = $pos * 18 + 0,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			rule$root();
			if ($pos !== -1) {
				if ($objsLen === objsLen0) $objs[objsLen0] = undefined;
				$objs[objsLen0 + 1] = "root";
				$objsLen = objsLen0 + 2;
			}
			if ($pos !== -1) {
				var objsLen1 = $objsLen;
				rule$type();
				if ($pos !== -1) {
					if ($objsLen === objsLen1) $objs[objsLen1] = undefined;
					$objs[objsLen1 + 1] = "type";
					$objsLen = objsLen1 + 2;
				}
				if ($pos !== -1) {
					var objsLen1 = $objsLen;
					var pos1 = $pos;
					rule$tensions();
					if ($pos === -1) {
						$pos = pos1;
						$objsLen = objsLen1;
					}
					if ($pos !== -1) {
						if ($objsLen === objsLen1) $objs[objsLen1] = undefined;
						$objs[objsLen1 + 1] = "tensions";
						$objsLen = objsLen1 + 2;
					}
					if ($pos !== -1) {
						var objsLen1 = $objsLen;
						var pos1 = $pos;
						rule$bass();
						if ($pos === -1) {
							$pos = pos1;
							$objsLen = objsLen1;
						}
						if ($pos !== -1) {
							if ($objsLen === objsLen1) $objs[objsLen1] = undefined;
							$objs[objsLen1 + 1] = "bass";
							$objsLen = objsLen1 + 2;
						}
					}
				}
			}
			if ($pos !== -1) {
				var obj0 = {};
				for (var i = objsLen0; i < $objsLen; i += 2) {
					obj0[$objs[i + 1]] = $objs[i];
				}$objsLen = objsLen0 + 1;
				$objs[objsLen0] = obj0;
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$root() {
			var key = $pos * 18 + 1,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			rule$pitchClass();
			if ($pos !== -1) {
				var pos1 = $pos,
				    objsLen1 = $objsLen;
				rule$accidental();
				if ($pos === -1) {
					$pos = pos1;
					$objsLen = objsLen1;
				}
			}
			if ($pos !== -1) {
				$objs[objsLen0] = $objs.slice(objsLen0, $objsLen);
				$objsLen = objsLen0 + 1;
			}
			if ($pos !== -1) {
				$objs[objsLen0] = mod$0($objs[objsLen0]);
				$objsLen = objsLen0 + 1;
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$type() {
			var key = $pos * 18 + 2,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			if ($input.substr($pos, 4) === "add9") $pos += 4;else $matchingFail("\"add9\"");
			if ($pos !== -1) {
				$objs[$objsLen++] = "ADD_NINTH";
			}
			if ($pos === -1) {
				$pos = pos0;
				$objsLen = objsLen0;
				rule$major();
				if ($pos !== -1) {
					if ($input.charCodeAt($pos) === 55) $pos += 1;else $matchingFail("\"7\"");
					if ($pos !== -1) {
						$objs[$objsLen++] = "MAJOR_SEVENTH";
					}
				}
				if ($pos === -1) {
					$pos = pos0;
					$objsLen = objsLen0;
					if ($input.substr($pos, 5) === "7sus4") $pos += 5;else $matchingFail("\"7sus4\"");
					if ($pos !== -1) {
						$objs[$objsLen++] = "SEVENTH_SUSPENDED_FOURTH";
					}
					if ($pos === -1) {
						$pos = pos0;
						$objsLen = objsLen0;
						if ($input.charCodeAt($pos) === 55) $pos += 1;else $matchingFail("\"7\"");
						if ($pos !== -1) {
							$objs[$objsLen++] = "SEVENTH";
						}
						if ($pos === -1) {
							$pos = pos0;
							$objsLen = objsLen0;
							if ($input.charCodeAt($pos) === 54) $pos += 1;else $matchingFail("\"6\"");
							if ($pos !== -1) {
								$objs[$objsLen++] = "SIXTH";
							}
							if ($pos === -1) {
								$pos = pos0;
								$objsLen = objsLen0;
								if ($input.substr($pos, 4) === "sus4") $pos += 4;else $matchingFail("\"sus4\"");
								if ($pos !== -1) {
									$objs[$objsLen++] = "SUSPENDED_FOURTH";
								}
								if ($pos === -1) {
									$pos = pos0;
									$objsLen = objsLen0;
									rule$minor();
									if ($pos !== -1) {
										if ($input.substr($pos, 4) === "add9") $pos += 4;else $matchingFail("\"add9\"");
										if ($pos !== -1) {
											$objs[$objsLen++] = "MINOR_ADD_NINTH";
										}
									}
									if ($pos === -1) {
										$pos = pos0;
										$objsLen = objsLen0;
										rule$minor();
										if ($pos !== -1) {
											rule$major();
											if ($pos !== -1) {
												if ($input.charCodeAt($pos) === 55) $pos += 1;else $matchingFail("\"7\"");
												if ($pos !== -1) {
													$objs[$objsLen++] = "MINOR_MAJOR_SEVENTH";
												}
											}
										}
										if ($pos === -1) {
											$pos = pos0;
											$objsLen = objsLen0;
											rule$minor();
											if ($pos !== -1) {
												if ($input.charCodeAt($pos) === 55) $pos += 1;else $matchingFail("\"7\"");
												if ($pos !== -1) {
													$objs[$objsLen++] = "MINOR_SEVENTH";
												}
											}
											if ($pos === -1) {
												$pos = pos0;
												$objsLen = objsLen0;
												rule$minor();
												if ($pos !== -1) {
													if ($input.charCodeAt($pos) === 54) $pos += 1;else $matchingFail("\"6\"");
													if ($pos !== -1) {
														$objs[$objsLen++] = "MINOR_SIXTH";
													}
												}
												if ($pos === -1) {
													$pos = pos0;
													$objsLen = objsLen0;
													$errorMask += 1;
													if ($input.substr($pos, 3) === "maj") $pos += 3;else $matchingFail("\"maj\"");
													$errorMask -= 1;
													if ($pos === -1) {
														$objsLen = objsLen0;
														$pos = pos0;
													} else {
														$pos = -1;
													}
													if ($pos !== -1) {
														rule$minor();
														if ($pos !== -1) {
															$objs[$objsLen++] = "MINOR";
														}
													}
													if ($pos === -1) {
														$pos = pos0;
														$objsLen = objsLen0;
														rule$augment();
														if ($pos !== -1) {
															rule$major();
															if ($pos !== -1) {
																if ($input.charCodeAt($pos) === 55) $pos += 1;else $matchingFail("\"7\"");
																if ($pos !== -1) {
																	$objs[$objsLen++] = "AUGMENT_MAJOR_SEVENTH";
																}
															}
														}
														if ($pos === -1) {
															$pos = pos0;
															$objsLen = objsLen0;
															rule$augment();
															if ($pos !== -1) {
																if ($input.charCodeAt($pos) === 55) $pos += 1;else $matchingFail("\"7\"");
																if ($pos !== -1) {
																	$objs[$objsLen++] = "AUGMENT_SEVENTH";
																}
															}
															if ($pos === -1) {
																$pos = pos0;
																$objsLen = objsLen0;
																rule$augment();
																if ($pos !== -1) {
																	$objs[$objsLen++] = "AUGMENT";
																}
																if ($pos === -1) {
																	$pos = pos0;
																	$objsLen = objsLen0;
																	rule$diminish();
																	if ($pos !== -1) {
																		if ($input.charCodeAt($pos) === 55) $pos += 1;else $matchingFail("\"7\"");
																		if ($pos !== -1) {
																			$objs[$objsLen++] = "DIMINISH_SEVENTH";
																		}
																	}
																	if ($pos === -1) {
																		$pos = pos0;
																		$objsLen = objsLen0;
																		rule$half_diminish();
																		if ($pos !== -1) {
																			$objs[$objsLen++] = "HALF_DIMINISH";
																		}
																		if ($pos === -1) {
																			$pos = pos0;
																			$objsLen = objsLen0;
																			rule$diminish();
																			if ($pos !== -1) {
																				$objs[$objsLen++] = "DIMINISH";
																			}
																			if ($pos === -1) {
																				$pos = pos0;
																				$objsLen = objsLen0;
																				rule$major();
																				if ($pos === -1) {
																					$pos = pos0;
																					$objsLen = objsLen0;
																				}
																				if ($pos !== -1) {
																					$objs[$objsLen++] = "MAJOR";
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$tensions() {
			var key = $pos * 18 + 3,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			rule$space();
			if ($pos !== -1) {
				if ($input.charCodeAt($pos) === 40) $pos += 1;else $matchingFail("\"(\"");
				if ($pos !== -1) {
					rule$space();
					if ($pos !== -1) {
						var objsLen1 = $objsLen;
						var pos1 = $pos,
						    objsLen2 = $objsLen;
						for (var i0 = 0;; i0++) {
							rule$tn_all();
							if ($pos !== -1) {
								rule$delimiter();
							}
							if ($pos !== -1) {
								if ($pos === pos1) throw new Error("Infinite loop detected.");
								pos1 = $pos;
								objsLen2 = $objsLen;
							} else {
								break;
							}
						}
						$pos = pos1;
						$objsLen = objsLen2;
						if (i0 < 1) $pos = -1;
						if ($pos !== -1) {
							$objs[objsLen1] = $objs.slice(objsLen1, $objsLen);
							$objsLen = objsLen1 + 1;
						}
						if ($pos !== -1) {
							rule$space();
							if ($pos !== -1) {
								if ($input.charCodeAt($pos) === 41) $pos += 1;else $matchingFail("\")\"");
								if ($pos !== -1) {
									rule$space();
								}
							}
						}
					}
				}
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$bass() {
			var key = $pos * 18 + 4,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			rule$slash();
			if ($pos !== -1) {
				var objsLen1 = $objsLen;
				rule$pitchClass();
				if ($pos !== -1) {
					var pos1 = $pos,
					    objsLen2 = $objsLen;
					rule$accidental();
					if ($pos === -1) {
						$pos = pos1;
						$objsLen = objsLen2;
					}
				}
				if ($pos !== -1) {
					$objs[objsLen1] = $objs.slice(objsLen1, $objsLen);
					$objsLen = objsLen1 + 1;
				}
				if ($pos !== -1) {
					$objs[objsLen1] = mod$0($objs[objsLen1]);
					$objsLen = objsLen1 + 1;
				}
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$pitchClass() {
			var key = $pos * 18 + 5,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			var c = $input.charCodeAt($pos);
			if (65 <= c && c <= 71) $pos += 1;else $matchingFail("[A-G]");
			if ($pos !== -1) {
				$objs[$objsLen++] = $input.substring(pos0, $pos);
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$accidental() {
			var key = $pos * 18 + 6,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			if ($input.charCodeAt($pos) === 9839) $pos += 1;else $matchingFail("\"\u266F\"");
			if ($pos !== -1) {
				$objs[$objsLen++] = "#";
			}
			if ($pos === -1) {
				$pos = pos0;
				$objsLen = objsLen0;
				if ($input.charCodeAt($pos) === 65283) $pos += 1;else $matchingFail("\"\uFF03\"");
				if ($pos !== -1) {
					$objs[$objsLen++] = "#";
				}
				if ($pos === -1) {
					$pos = pos0;
					$objsLen = objsLen0;
					if ($input.charCodeAt($pos) === 35) $pos += 1;else $matchingFail("\"#\"");
					if ($pos !== -1) {
						$objs[$objsLen++] = "#";
					}
					if ($pos === -1) {
						$pos = pos0;
						$objsLen = objsLen0;
						if ($input.charCodeAt($pos) === 9837) $pos += 1;else $matchingFail("\"\u266D\"");
						if ($pos !== -1) {
							$objs[$objsLen++] = "b";
						}
						if ($pos === -1) {
							$pos = pos0;
							$objsLen = objsLen0;
							if ($input.charCodeAt($pos) === 98) $pos += 1;else $matchingFail("\"b\"");
							if ($pos !== -1) {
								$objs[$objsLen++] = "b";
							}
						}
					}
				}
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$major() {
			var key = $pos * 18 + 7,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			if ($input.charCodeAt($pos) === 77) $pos += 1;else $matchingFail("\"M\"");
			if ($pos === -1) {
				$pos = pos0;
				$objsLen = objsLen0;
				if ($input.charCodeAt($pos) === 9651) $pos += 1;else $matchingFail("\"\u25B3\"");
				if ($pos === -1) {
					$pos = pos0;
					$objsLen = objsLen0;
					if ($input.substr($pos, 3) === "maj") $pos += 3;else $matchingFail("\"maj\"");
				}
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$minor() {
			var key = $pos * 18 + 8,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			if ($input.substr($pos, 3) === "min") $pos += 3;else $matchingFail("\"min\"");
			if ($pos === -1) {
				$pos = pos0;
				$objsLen = objsLen0;
				if ($input.charCodeAt($pos) === 109) $pos += 1;else $matchingFail("\"m\"");
				if ($pos === -1) {
					$pos = pos0;
					$objsLen = objsLen0;
					if ($input.charCodeAt($pos) === 45) $pos += 1;else $matchingFail("\"-\"");
				}
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$augment() {
			var key = $pos * 18 + 9,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			if ($input.substr($pos, 3) === "aug") $pos += 3;else $matchingFail("\"aug\"");
			if ($pos === -1) {
				$pos = pos0;
				$objsLen = objsLen0;
				if ($input.charCodeAt($pos) === 43) $pos += 1;else $matchingFail("\"+\"");
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$diminish() {
			var key = $pos * 18 + 10,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			if ($input.substr($pos, 3) === "dim") $pos += 3;else $matchingFail("\"dim\"");
			if ($pos === -1) {
				$pos = pos0;
				$objsLen = objsLen0;
				if ($input.charCodeAt($pos) === 9675) $pos += 1;else $matchingFail("\"\u25CB\"");
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$half_diminish() {
			var key = $pos * 18 + 11,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			if ($input.charCodeAt($pos) === 966) $pos += 1;else $matchingFail("\"\u03C6\"");
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$tn_all() {
			var key = $pos * 18 + 12,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			rule$itv_flat();
			if ($pos !== -1) {
				if ($input.charCodeAt($pos) === 53) $pos += 1;else $matchingFail("\"5\"");
				if ($pos !== -1) {
					$objs[$objsLen++] = "b5";
				}
			}
			if ($pos === -1) {
				$pos = pos0;
				$objsLen = objsLen0;
				rule$itv_sharp();
				if ($pos !== -1) {
					if ($input.charCodeAt($pos) === 53) $pos += 1;else $matchingFail("\"5\"");
					if ($pos !== -1) {
						$objs[$objsLen++] = "#5";
					}
				}
				if ($pos === -1) {
					$pos = pos0;
					$objsLen = objsLen0;
					rule$itv_flat();
					if ($pos !== -1) {
						if ($input.charCodeAt($pos) === 57) $pos += 1;else $matchingFail("\"9\"");
						if ($pos !== -1) {
							$objs[$objsLen++] = "b9";
						}
					}
					if ($pos === -1) {
						$pos = pos0;
						$objsLen = objsLen0;
						if ($input.charCodeAt($pos) === 57) $pos += 1;else $matchingFail("\"9\"");
						if ($pos !== -1) {
							$objs[$objsLen++] = "9";
						}
						if ($pos === -1) {
							$pos = pos0;
							$objsLen = objsLen0;
							rule$itv_sharp();
							if ($pos !== -1) {
								if ($input.charCodeAt($pos) === 57) $pos += 1;else $matchingFail("\"9\"");
								if ($pos !== -1) {
									$objs[$objsLen++] = "#9";
								}
							}
							if ($pos === -1) {
								$pos = pos0;
								$objsLen = objsLen0;
								if ($input.substr($pos, 2) === "11") $pos += 2;else $matchingFail("\"11\"");
								if ($pos !== -1) {
									$objs[$objsLen++] = "11";
								}
								if ($pos === -1) {
									$pos = pos0;
									$objsLen = objsLen0;
									rule$itv_sharp();
									if ($pos !== -1) {
										if ($input.substr($pos, 2) === "11") $pos += 2;else $matchingFail("\"11\"");
										if ($pos !== -1) {
											$objs[$objsLen++] = "#11";
										}
									}
									if ($pos === -1) {
										$pos = pos0;
										$objsLen = objsLen0;
										rule$itv_flat();
										if ($pos !== -1) {
											if ($input.substr($pos, 2) === "13") $pos += 2;else $matchingFail("\"13\"");
											if ($pos !== -1) {
												$objs[$objsLen++] = "b13";
											}
										}
										if ($pos === -1) {
											$pos = pos0;
											$objsLen = objsLen0;
											if ($input.substr($pos, 2) === "13") $pos += 2;else $matchingFail("\"13\"");
											if ($pos !== -1) {
												$objs[$objsLen++] = "13";
											}
										}
									}
								}
							}
						}
					}
				}
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$itv_sharp() {
			var key = $pos * 18 + 13,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			if ($input.charCodeAt($pos) === 9839) $pos += 1;else $matchingFail("\"\u266F\"");
			if ($pos === -1) {
				$pos = pos0;
				$objsLen = objsLen0;
				if ($input.charCodeAt($pos) === 65283) $pos += 1;else $matchingFail("\"\uFF03\"");
				if ($pos === -1) {
					$pos = pos0;
					$objsLen = objsLen0;
					if ($input.charCodeAt($pos) === 35) $pos += 1;else $matchingFail("\"#\"");
					if ($pos === -1) {
						$pos = pos0;
						$objsLen = objsLen0;
						if ($input.charCodeAt($pos) === 43) $pos += 1;else $matchingFail("\"+\"");
						if ($pos === -1) {
							$pos = pos0;
							$objsLen = objsLen0;
							if ($input.charCodeAt($pos) === 65291) $pos += 1;else $matchingFail("\"\uFF0B\"");
						}
					}
				}
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$itv_flat() {
			var key = $pos * 18 + 14,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			if ($input.charCodeAt($pos) === 9837) $pos += 1;else $matchingFail("\"\u266D\"");
			if ($pos === -1) {
				$pos = pos0;
				$objsLen = objsLen0;
				if ($input.charCodeAt($pos) === 98) $pos += 1;else $matchingFail("\"b\"");
				if ($pos === -1) {
					$pos = pos0;
					$objsLen = objsLen0;
					if ($input.charCodeAt($pos) === 45) $pos += 1;else $matchingFail("\"-\"");
					if ($pos === -1) {
						$pos = pos0;
						$objsLen = objsLen0;
						if ($input.charCodeAt($pos) === 8722) $pos += 1;else $matchingFail("\"\u2212\"");
					}
				}
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$delimiter() {
			var key = $pos * 18 + 15,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			$errorMask += 1;
			if ($input.charCodeAt($pos) === 41) $pos += 1;else $matchingFail("\")\"");
			$errorMask -= 1;
			if ($pos !== -1) {
				$objsLen = objsLen0;
				$pos = pos0;
			}
			if ($pos === -1) {
				$pos = pos0;
				$objsLen = objsLen0;
				rule$space();
				if ($pos !== -1) {
					if ($input.charCodeAt($pos) === 44) $pos += 1;else $matchingFail("\",\"");
					if ($pos !== -1) {
						rule$space();
					}
				}
				if ($pos === -1) {
					$pos = pos0;
					$objsLen = objsLen0;
					var pos1 = $pos,
					    objsLen1 = $objsLen;
					for (var i0 = 0;; i0++) {
						if ($input.charCodeAt($pos) === 32) $pos += 1;else $matchingFail("\" \"");
						if ($pos !== -1) {
							if ($pos === pos1) throw new Error("Infinite loop detected.");
							pos1 = $pos;
							objsLen1 = $objsLen;
						} else {
							break;
						}
					}
					$pos = pos1;
					$objsLen = objsLen1;
					if (i0 < 1) $pos = -1;
				}
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$slash() {
			var key = $pos * 18 + 16,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			rule$space();
			if ($pos !== -1) {
				var pos1 = $pos,
				    objsLen1 = $objsLen;
				if ($input.charCodeAt($pos) === 47) $pos += 1;else $matchingFail("\"/\"");
				if ($pos === -1) {
					$pos = pos1;
					$objsLen = objsLen1;
					if ($input.charCodeAt($pos) === 65295) $pos += 1;else $matchingFail("\"\uFF0F\"");
					if ($pos === -1) {
						$pos = pos1;
						$objsLen = objsLen1;
						if ($input.substr($pos, 2) === "on") $pos += 2;else $matchingFail("\"on\"");
					}
				}
				if ($pos !== -1) {
					rule$space();
				}
			}
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function rule$space() {
			var key = $pos * 18 + 17,
			    pos0 = $pos,
			    objsLen0 = $objsLen;
			if ($readMemo(key)) return;
			var pos1 = $pos,
			    objsLen1 = $objsLen;
			while (true) {
				if ($input.charCodeAt($pos) === 32) $pos += 1;else $matchingFail("\" \"");
				if ($pos !== -1) {
					if ($pos === pos1) throw new Error("Infinite loop detected.");
					pos1 = $pos;
					objsLen1 = $objsLen;
				} else {
					break;
				}
			}
			$pos = pos1;
			$objsLen = objsLen1;
			$writeMemo(key, $pos !== -1 && $objs.slice(objsLen0, $objsLen));
		};

		function $matchingFail(match) {
			if ($errorMask === 0 && $failPos <= $pos) {
				match = $matchTable[$pos] ? $matchTable[$pos] : match;
				if ($failPos === $pos) {
					if ($failMatchs.indexOf(match) === -1) $failMatchs.push(match);
				} else {
					$failMatchs = [match];
					$failPos = $pos;
				}
			}
			$pos = -1;
		}

		function $joinByOr(strs) {
			if (strs.length === 0) return "";
			if (strs.length === 1) return strs[0];
			return strs.slice(0, strs.length - 1).join(", ") + " or " + strs[strs.length - 1];
		};

		function $readMemo(key) {
			var res = $memo[key];
			if (res !== undefined) {
				if (res !== $failureObj) {
					$pos = res.pos;
					for (var i = 0, il = res.objs.length; i < il; ++i) {
						$objs[$objsLen++] = res.objs[i];
					}
				} else {
					$pos = -1;
				}
				return true;
			}
			return false;
		}

		function $writeMemo(key, objs) {
			$memo[key] = objs ? {
				pos: $pos,
				objs: objs
			} : $failureObj;
		}

		rule$start();
		if ($pos !== -1) {
			if ($pos === $inputLength) {
				$objs.length = $objsLen;
				return $objs[0];
			}
			$matchingFail("end of input");
		}
		if ($failMatchs.length === 0) $failMatchs.push("something");
		var $line = ($input.slice(0, $failPos).match(/\n/g) || []).length;
		var $column = $failPos - $input.lastIndexOf("\n", $failPos - 1) - 1;
		var $errorMessage = "Line " + ($line + 1) + ", column " + $column + ": Expected " + $joinByOr($failMatchs) + " but " + (JSON.stringify($input[$failPos]) || "end of input") + " found.";
		throw new Error($errorMessage);
	};
	return $parse;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deepcopy = __webpack_require__(8);

var _deepcopy2 = _interopRequireDefault(_deepcopy);

var _pitchClass = __webpack_require__(3);

var _pitchClass2 = _interopRequireDefault(_pitchClass);

var _chordType = __webpack_require__(4);

var _chordType2 = _interopRequireDefault(_chordType);

var _interval = __webpack_require__(0);

var _interval2 = _interopRequireDefault(_interval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function convertPitchClass(pcText) {
  return _pitchClass2.default[pcText];
}

function convertTensions(tensions) {
  var tensionDict = {
    'b5': 'd5',
    '#5': 'A5',
    'b9': 'm9',
    '9': 'M9',
    '#9': 'A9',
    '11': 'P11',
    '#11': 'A11',
    'b13': 'm13',
    '13': 'M13'
  };
  return tensions.map(function (tension) {
    return _interval2.default[tensionDict[tension]];
  });
}

function transformTypeAndTensions(type, tensions) {
  var dstType = (0, _deepcopy2.default)(type);
  var dstTensions = (0, _deepcopy2.default)(tensions);

  if (tensions.some(function (tension) {
    return tension.equals(_interval2.default.d5);
  })) {
    if (type.equals(_chordType2.default.MINOR_SEVENTH)) {
      dstType = _chordType2.default.HALF_DIMINISH;
      dstTensions = tensions.filter(function (tension) {
        return !tension.equals(_interval2.default.d5);
      });
    } else if (type.equals(_chordType2.default.MINOR)) {
      dstType = _chordType2.default.DIMINISH;
      dstTensions = tensions.filter(function (tension) {
        return !tension.equals(_interval2.default.d5);
      });
    }
  } else if (tensions.some(function (tension) {
    return tension.equals(_interval2.default.A5);
  })) {
    if (type.equals(_chordType2.default.SEVENTH)) {
      dstType = _chordType2.default.AUGMENT_SEVENTH;
      dstTensions = tensions.filter(function (tension) {
        return !tension.equals(_interval2.default.A5);
      });
    } else if (type.equals(_chordType2.default.MAJOR_SEVENTH)) {
      dstType = _chordType2.default.AUGMENT_MAJOR_SEVENTH;
      dstTensions = tensions.filter(function (tension) {
        return !tension.equals(_interval2.default.A5);
      });
    } else if (type.equals(_chordType2.default.MAJOR)) {
      dstType = _chordType2.default.AUGMENT;
      dstTensions = tensions.filter(function (tension) {
        return !tension.equals(_interval2.default.A5);
      });
    }
  }

  return {
    type: dstType,
    tensions: dstTensions
  };
}

var Chord = function () {
  function Chord(root, type) {
    var tensions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var bass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : root;

    _classCallCheck(this, Chord);

    this._root = convertPitchClass(root);
    var r = transformTypeAndTensions(_chordType2.default[type], convertTensions(tensions));
    this._type = r.type;
    this._tensions = r.tensions;
    this._bass = convertPitchClass(bass);
  }

  _createClass(Chord, [{
    key: 'toNotes',
    value: function toNotes() {
      var _this = this;

      return [this._bass._number - _interval2.default.P8.number].concat(_toConsumableArray(this._type.intervals.map(function (interval) {
        return _this._root.number + interval.number;
      })), _toConsumableArray(this._tensions.map(function (tension) {
        return _this._root.number + tension.number;
      }))).sort(function (a, b) {
        return a - b;
      });
    }
  }, {
    key: 'toObject',
    value: function toObject() {
      return {
        root: this._root.name,
        type: this._type.name,
        tensions: this._tensions.map(function (tension) {
          return tension.name;
        }),
        bass: this._bass.name
      };
    }
  }]);

  return Chord;
}();

exports.default = Chord;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _copy = __webpack_require__(10);

var _polyfill = __webpack_require__(2);

function defaultCustomizer(target) {
  return void 0;
}

function deepcopy(target) {
  var customizer = arguments.length <= 1 || arguments[1] === void 0 ? defaultCustomizer : arguments[1];

  if (target === null) {
    // copy null
    return null;
  }

  var resultValue = (0, _copy.copyValue)(target);

  if (resultValue !== null) {
    // copy some primitive types
    return resultValue;
  }

  var resultCollection = (0, _copy.copyCollection)(target, customizer),
      clone = resultCollection !== null ? resultCollection : target;

  var visited = [target],
      reference = [clone];

  // recursively copy from collection
  return recursiveCopy(target, customizer, clone, visited, reference);
}

function recursiveCopy(target, customizer, clone, visited, reference) {
  if (target === null) {
    // copy null
    return null;
  }

  var resultValue = (0, _copy.copyValue)(target);

  if (resultValue !== null) {
    // copy some primitive types
    return resultValue;
  }

  var keys = (0, _polyfill.getKeys)(target).concat((0, _polyfill.getSymbols)(target));

  var i = void 0,
      len = void 0;

  var key = void 0,
      value = void 0,
      index = void 0,
      resultCopy = void 0,
      result = void 0,
      ref = void 0;

  for (i = 0, len = keys.length; i < len; ++i) {
    key = keys[i];
    value = target[key];
    index = (0, _polyfill.indexOf)(visited, value);

    resultCopy = void 0;
    result = void 0;
    ref = void 0;

    if (index === -1) {
      resultCopy = (0, _copy.copy)(value, customizer);
      result = resultCopy !== null ? resultCopy : value;

      if (value !== null && /^(?:function|object)$/.test(typeof value)) {
        visited.push(value);
        reference.push(result);
      }
    } else {
      // circular reference
      ref = reference[index];
    }

    clone[key] = ref || recursiveCopy(value, customizer, result, visited, reference);
  }

  return clone;
}

exports['default'] = deepcopy;
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

exports.__esModule = true;
exports.copyValue = exports.copyCollection = exports.copy = void 0;

var _polyfill = __webpack_require__(2);

var toString = Object.prototype.toString;

function copy(target, customizer) {
  var resultValue = copyValue(target);

  if (resultValue !== null) {
    return resultValue;
  }

  return copyCollection(target, customizer);
}

function copyCollection(target, customizer) {
  if (typeof customizer !== 'function') {
    throw new TypeError('customizer is must be a Function');
  }

  if (typeof target === 'function') {
    var source = String(target);

    // NOTE:
    //
    //   https://gist.github.com/jdalton/5e34d890105aca44399f
    //
    //   - https://gist.github.com/jdalton/5e34d890105aca44399f#gistcomment-1283831
    //   - http://es5.github.io/#x15
    //
    //   native functions does not have prototype:
    //
    //       Object.toString.prototype  // => undefined
    //       (function() {}).prototype  // => {}
    //
    //   but cannot detect native constructor:
    //
    //       typeof Object     // => 'function'
    //       Object.prototype  // => {}
    //
    //   and cannot detect null binded function:
    //
    //       String(Math.abs)
    //         // => 'function abs() { [native code] }'
    //
    //     Firefox, Safari:
    //       String((function abs() {}).bind(null))
    //         // => 'function abs() { [native code] }'
    //
    //     Chrome:
    //       String((function abs() {}).bind(null))
    //         // => 'function () { [native code] }'
    if (/^\s*function\s*\S*\([^\)]*\)\s*{\s*\[native code\]\s*}/.test(source)) {
      // native function
      return target;
    } else {
      // user defined function
      return new Function('return ' + String(source))();
    }
  }

  var targetClass = toString.call(target);

  if (targetClass === '[object Array]') {
    return [];
  }

  if (targetClass === '[object Object]' && target.constructor === Object) {
    return {};
  }

  if (targetClass === '[object Date]') {
    // NOTE:
    //
    //   Firefox need to convert
    //
    //   Firefox:
    //     var date = new Date;
    //     +date;            // 1420909365967
    //     +new Date(date);  // 1420909365000
    //     +new Date(+date); // 1420909365967
    //
    //   Chrome:
    //     var date = new Date;
    //     +date;            // 1420909757913
    //     +new Date(date);  // 1420909757913
    //     +new Date(+date); // 1420909757913
    return new Date(target.getTime());
  }

  if (targetClass === '[object RegExp]') {
    // NOTE:
    //
    //   Chrome, Safari:
    //     (new RegExp).source => "(?:)"
    //
    //   Firefox:
    //     (new RegExp).source => ""
    //
    //   Chrome, Safari, Firefox:
    //     String(new RegExp) => "/(?:)/"
    var regexpText = String(target),
        slashIndex = regexpText.lastIndexOf('/');

    return new RegExp(regexpText.slice(1, slashIndex), regexpText.slice(slashIndex + 1));
  }

  if ((0, _polyfill.isBuffer)(target)) {
    var buffer = new Buffer(target.length);

    target.copy(buffer);

    return buffer;
  }

  var customizerResult = customizer(target);

  if (customizerResult !== void 0) {
    return customizerResult;
  }

  return null;
}

function copyValue(target) {
  var targetType = typeof target;

  // copy String, Number, Boolean, undefined and Symbol
  // without null and Function
  if (target !== null && targetType !== 'object' && targetType !== 'function') {
    return target;
  }

  return null;
}

exports.copy = copy;
exports.copyCollection = copyCollection;
exports.copyValue = copyValue;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1).Buffer))

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ })
/******/ ]);
});