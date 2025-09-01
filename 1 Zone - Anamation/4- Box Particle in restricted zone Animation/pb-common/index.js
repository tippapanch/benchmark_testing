(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.pbCommon = {}));
})(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	(function (factory) {
	  factory();
	})(function () {

	  function _arrayLikeToArray(r, a) {
	    (null == a || a > r.length) && (a = r.length);
	    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	    return n;
	  }
	  function _assertThisInitialized(e) {
	    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    return e;
	  }
	  function _callSuper(t, o, e) {
	    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	  }
	  function _classCallCheck(a, n) {
	    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	  }
	  function _defineProperties(e, r) {
	    for (var t = 0; t < r.length; t++) {
	      var o = r[t];
	      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
	    }
	  }
	  function _createClass(e, r, t) {
	    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
	      writable: !1
	    }), e;
	  }
	  function _createForOfIteratorHelper(r, e) {
	    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	    if (!t) {
	      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
	        t && (r = t);
	        var _n = 0,
	          F = function F() {};
	        return {
	          s: F,
	          n: function n() {
	            return _n >= r.length ? {
	              done: !0
	            } : {
	              done: !1,
	              value: r[_n++]
	            };
	          },
	          e: function e(r) {
	            throw r;
	          },
	          f: F
	        };
	      }
	      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	    }
	    var o,
	      a = !0,
	      u = !1;
	    return {
	      s: function s() {
	        t = t.call(r);
	      },
	      n: function n() {
	        var r = t.next();
	        return a = r.done, r;
	      },
	      e: function e(r) {
	        u = !0, o = r;
	      },
	      f: function f() {
	        try {
	          a || null == t.return || t.return();
	        } finally {
	          if (u) throw o;
	        }
	      }
	    };
	  }
	  function _get() {
	    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
	      var p = _superPropBase(e, t);
	      if (p) {
	        var n = Object.getOwnPropertyDescriptor(p, t);
	        return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
	      }
	    }, _get.apply(null, arguments);
	  }
	  function _getPrototypeOf(t) {
	    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
	      return t.__proto__ || Object.getPrototypeOf(t);
	    }, _getPrototypeOf(t);
	  }
	  function _inherits(t, e) {
	    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
	    t.prototype = Object.create(e && e.prototype, {
	      constructor: {
	        value: t,
	        writable: !0,
	        configurable: !0
	      }
	    }), Object.defineProperty(t, "prototype", {
	      writable: !1
	    }), e && _setPrototypeOf(t, e);
	  }
	  function _isNativeReflectConstruct() {
	    try {
	      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (t) {}
	    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
	      return !!t;
	    })();
	  }
	  function _possibleConstructorReturn(t, e) {
	    if (e && ("object" == typeof e || "function" == typeof e)) return e;
	    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
	    return _assertThisInitialized(t);
	  }
	  function _setPrototypeOf(t, e) {
	    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
	      return t.__proto__ = e, t;
	    }, _setPrototypeOf(t, e);
	  }
	  function _superPropBase(t, o) {
	    for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
	    return t;
	  }
	  function _superPropGet(t, o, e, r) {
	    var p = _get(_getPrototypeOf(t.prototype ), o, e);
	    return "function" == typeof p ? function (t) {
	      return p.apply(e, t);
	    } : p;
	  }
	  function _toPrimitive(t, r) {
	    if ("object" != typeof t || !t) return t;
	    var e = t[Symbol.toPrimitive];
	    if (void 0 !== e) {
	      var i = e.call(t, r);
	      if ("object" != typeof i) return i;
	      throw new TypeError("@@toPrimitive must return a primitive value.");
	    }
	    return (String )(t);
	  }
	  function _toPropertyKey(t) {
	    var i = _toPrimitive(t, "string");
	    return "symbol" == typeof i ? i : i + "";
	  }
	  function _unsupportedIterableToArray(r, a) {
	    if (r) {
	      if ("string" == typeof r) return _arrayLikeToArray(r, a);
	      var t = {}.toString.call(r).slice(8, -1);
	      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	    }
	  }
	  (function (self) {
	    return {
	      NativeAbortSignal: self.AbortSignal,
	      NativeAbortController: self.AbortController
	    };
	  })(typeof self !== 'undefined' ? self : commonjsGlobal);

	  /**
	   * @param {any} reason abort reason
	   */
	  function createAbortEvent(reason) {
	    var event;
	    try {
	      event = new Event('abort');
	    } catch (e) {
	      if (typeof document !== 'undefined') {
	        if (!document.createEvent) {
	          // For Internet Explorer 8:
	          event = document.createEventObject();
	          event.type = 'abort';
	        } else {
	          // For Internet Explorer 11:
	          event = document.createEvent('Event');
	          event.initEvent('abort', false, false);
	        }
	      } else {
	        // Fallback where document isn't available:
	        event = {
	          type: 'abort',
	          bubbles: false,
	          cancelable: false
	        };
	      }
	    }
	    event.reason = reason;
	    return event;
	  }

	  /**
	   * @param {any} reason abort reason
	   */
	  function normalizeAbortReason(reason) {
	    if (reason === undefined) {
	      if (typeof document === 'undefined') {
	        reason = new Error('This operation was aborted');
	        reason.name = 'AbortError';
	      } else {
	        try {
	          reason = new DOMException('signal is aborted without reason');
	          // The DOMException does not support setting the name property directly.
	          Object.defineProperty(reason, 'name', {
	            value: 'AbortError'
	          });
	        } catch (err) {
	          // IE 11 does not support calling the DOMException constructor, use a
	          // regular error object on it instead.
	          reason = new Error('This operation was aborted');
	          reason.name = 'AbortError';
	        }
	      }
	    }
	    return reason;
	  }
	  var Emitter = /*#__PURE__*/function () {
	    function Emitter() {
	      _classCallCheck(this, Emitter);
	      Object.defineProperty(this, 'listeners', {
	        value: {},
	        writable: true,
	        configurable: true
	      });
	    }
	    return _createClass(Emitter, [{
	      key: "addEventListener",
	      value: function addEventListener(type, callback, options) {
	        if (!(type in this.listeners)) {
	          this.listeners[type] = [];
	        }
	        this.listeners[type].push({
	          callback: callback,
	          options: options
	        });
	      }
	    }, {
	      key: "removeEventListener",
	      value: function removeEventListener(type, callback) {
	        if (!(type in this.listeners)) {
	          return;
	        }
	        var stack = this.listeners[type];
	        for (var i = 0, l = stack.length; i < l; i++) {
	          if (stack[i].callback === callback) {
	            stack.splice(i, 1);
	            return;
	          }
	        }
	      }
	    }, {
	      key: "dispatchEvent",
	      value: function dispatchEvent(event) {
	        var _this = this;
	        if (!(event.type in this.listeners)) {
	          return;
	        }
	        var stack = this.listeners[event.type];
	        var stackToCall = stack.slice();
	        var _loop = function _loop() {
	          var listener = stackToCall[i];
	          try {
	            listener.callback.call(_this, event);
	          } catch (e) {
	            Promise.resolve().then(function () {
	              throw e;
	            });
	          }
	          if (listener.options && listener.options.once) {
	            _this.removeEventListener(event.type, listener.callback);
	          }
	        };
	        for (var i = 0, l = stackToCall.length; i < l; i++) {
	          _loop();
	        }
	        return !event.defaultPrevented;
	      }
	    }]);
	  }();
	  var AbortSignal = /*#__PURE__*/function (_Emitter) {
	    function AbortSignal() {
	      var _this2;
	      _classCallCheck(this, AbortSignal);
	      _this2 = _callSuper(this, AbortSignal);
	      // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
	      // constructor has failed to run, then "this.listeners" will still be undefined and then we call
	      // the parent constructor directly instead as a workaround. For general details, see babel bug:
	      // https://github.com/babel/babel/issues/3041
	      // This hack was added as a fix for the issue described here:
	      // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042
	      if (!_this2.listeners) {
	        Emitter.call(_this2);
	      }

	      // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
	      // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl
	      Object.defineProperty(_this2, 'aborted', {
	        value: false,
	        writable: true,
	        configurable: true
	      });
	      Object.defineProperty(_this2, 'onabort', {
	        value: null,
	        writable: true,
	        configurable: true
	      });
	      Object.defineProperty(_this2, 'reason', {
	        value: undefined,
	        writable: true,
	        configurable: true
	      });
	      return _this2;
	    }
	    _inherits(AbortSignal, _Emitter);
	    return _createClass(AbortSignal, [{
	      key: "toString",
	      value: function toString() {
	        return '[object AbortSignal]';
	      }
	    }, {
	      key: "dispatchEvent",
	      value: function dispatchEvent(event) {
	        if (event.type === 'abort') {
	          this.aborted = true;
	          if (typeof this.onabort === 'function') {
	            this.onabort.call(this, event);
	          }
	        }
	        _superPropGet(AbortSignal, "dispatchEvent", this)([event]);
	      }

	      /**
	       * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal/throwIfAborted}
	       */
	    }, {
	      key: "throwIfAborted",
	      value: function throwIfAborted() {
	        var aborted = this.aborted,
	          _this$reason = this.reason,
	          reason = _this$reason === void 0 ? 'Aborted' : _this$reason;
	        if (!aborted) return;
	        throw reason;
	      }

	      /**
	       * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal/timeout_static}
	       * @param {number} time The "active" time in milliseconds before the returned {@link AbortSignal} will abort.
	       *                      The value must be within range of 0 and {@link Number.MAX_SAFE_INTEGER}.
	       * @returns {AbortSignal} The signal will abort with its {@link AbortSignal.reason} property set to a `TimeoutError` {@link DOMException} on timeout,
	       *                        or an `AbortError` {@link DOMException} if the operation was user-triggered.
	       */
	    }], [{
	      key: "timeout",
	      value: function timeout(time) {
	        var controller = new AbortController();
	        setTimeout(function () {
	          return controller.abort(new DOMException("This signal is timeout in ".concat(time, "ms"), 'TimeoutError'));
	        }, time);
	        return controller.signal;
	      }

	      /**
	       * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/any_static}
	       * @param {Iterable<AbortSignal>} iterable An {@link Iterable} (such as an {@link Array}) of abort signals.
	       * @returns {AbortSignal} - **Already aborted**, if any of the abort signals given is already aborted.
	       *                          The returned {@link AbortSignal}'s reason will be already set to the `reason` of the first abort signal that was already aborted.
	       *                        - **Asynchronously aborted**, when any abort signal in `iterable` aborts.
	       *                          The `reason` will be set to the reason of the first abort signal that is aborted.
	       */
	    }, {
	      key: "any",
	      value: function any(iterable) {
	        var controller = new AbortController();
	        /**
	         * @this AbortSignal
	         */
	        function abort() {
	          controller.abort(this.reason);
	          clean();
	        }
	        function clean() {
	          var _iterator = _createForOfIteratorHelper(iterable),
	            _step;
	          try {
	            for (_iterator.s(); !(_step = _iterator.n()).done;) {
	              var signal = _step.value;
	              signal.removeEventListener('abort', abort);
	            }
	          } catch (err) {
	            _iterator.e(err);
	          } finally {
	            _iterator.f();
	          }
	        }
	        var _iterator2 = _createForOfIteratorHelper(iterable),
	          _step2;
	        try {
	          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	            var signal = _step2.value;
	            if (signal.aborted) {
	              controller.abort(signal.reason);
	              break;
	            } else signal.addEventListener('abort', abort);
	          }
	        } catch (err) {
	          _iterator2.e(err);
	        } finally {
	          _iterator2.f();
	        }
	        return controller.signal;
	      }
	    }]);
	  }(Emitter);
	  var AbortController = /*#__PURE__*/function () {
	    function AbortController() {
	      _classCallCheck(this, AbortController);
	      // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
	      // we want Object.keys(new AbortController()) to be [] for compat with the native impl
	      Object.defineProperty(this, 'signal', {
	        value: new AbortSignal(),
	        writable: true,
	        configurable: true
	      });
	    }
	    return _createClass(AbortController, [{
	      key: "abort",
	      value: function abort(reason) {
	        var signalReason = normalizeAbortReason(reason);
	        var event = createAbortEvent(signalReason);
	        this.signal.reason = signalReason;
	        this.signal.dispatchEvent(event);
	      }
	    }, {
	      key: "toString",
	      value: function toString() {
	        return '[object AbortController]';
	      }
	    }]);
	  }();
	  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	    // These are necessary to make sure that we get correct output for:
	    // Object.prototype.toString.call(new AbortController())
	    AbortController.prototype[Symbol.toStringTag] = 'AbortController';
	    AbortSignal.prototype[Symbol.toStringTag] = 'AbortSignal';
	  }
	  function polyfillNeeded(self) {
	    if (self.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
	      console.log('__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill');
	      return true;
	    }

	    // Note that the "unfetch" minimal fetch polyfill defines fetch() without
	    // defining window.Request, and this polyfill need to work on top of unfetch
	    // so the below feature detection needs the !self.AbortController part.
	    // The Request.prototype check is also needed because Safari versions 11.1.2
	    // up to and including 12.1.x has a window.AbortController present but still
	    // does NOT correctly implement abortable fetch:
	    // https://bugs.webkit.org/show_bug.cgi?id=174980#c2
	    return typeof self.Request === 'function' && !self.Request.prototype.hasOwnProperty('signal') || !self.AbortController;
	  }

	  /**
	   * Note: the "fetch.Request" default value is available for fetch imported from
	   * the "node-fetch" package and not in browsers. This is OK since browsers
	   * will be importing umd-polyfill.js from that path "self" is passed the
	   * decorator so the default value will not be used (because browsers that define
	   * fetch also has Request). One quirky setup where self.fetch exists but
	   * self.Request does not is when the "unfetch" minimal fetch polyfill is used
	   * on top of IE11; for this case the browser will try to use the fetch.Request
	   * default value which in turn will be undefined but then then "if (Request)"
	   * will ensure that you get a patched fetch but still no Request (as expected).
	   * @param {fetch, Request = fetch.Request}
	   * @returns {fetch: abortableFetch, Request: AbortableRequest}
	   */
	  function abortableFetchDecorator(patchTargets) {
	    if ('function' === typeof patchTargets) {
	      patchTargets = {
	        fetch: patchTargets
	      };
	    }
	    var _patchTargets = patchTargets,
	      fetch = _patchTargets.fetch,
	      _patchTargets$Request = _patchTargets.Request,
	      NativeRequest = _patchTargets$Request === void 0 ? fetch.Request : _patchTargets$Request,
	      NativeAbortController = _patchTargets.AbortController,
	      _patchTargets$__FORCE = _patchTargets.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,
	      __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL = _patchTargets$__FORCE === void 0 ? false : _patchTargets$__FORCE;
	    if (!polyfillNeeded({
	      fetch: fetch,
	      Request: NativeRequest,
	      AbortController: NativeAbortController,
	      __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
	    })) {
	      return {
	        fetch: fetch,
	        Request: Request
	      };
	    }
	    var Request = NativeRequest;
	    // Note that the "unfetch" minimal fetch polyfill defines fetch() without
	    // defining window.Request, and this polyfill need to work on top of unfetch
	    // hence we only patch it if it's available. Also we don't patch it if signal
	    // is already available on the Request prototype because in this case support
	    // is present and the patching below can cause a crash since it assigns to
	    // request.signal which is technically a read-only property. This latter error
	    // happens when you run the main5.js node-fetch example in the repo
	    // "abortcontroller-polyfill-examples". The exact error is:
	    //   request.signal = init.signal;
	    //   ^
	    // TypeError: Cannot set property signal of #<Request> which has only a getter
	    if (Request && !Request.prototype.hasOwnProperty('signal') || __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
	      Request = function Request(input, init) {
	        var signal;
	        if (init && init.signal) {
	          signal = init.signal;
	          // Never pass init.signal to the native Request implementation when the polyfill has
	          // been installed because if we're running on top of a browser with a
	          // working native AbortController (i.e. the polyfill was installed due to
	          // __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL being set), then passing our
	          // fake AbortSignal to the native fetch will trigger:
	          // TypeError: Failed to construct 'Request': member signal is not of type AbortSignal.
	          delete init.signal;
	        }
	        var request = new NativeRequest(input, init);
	        if (signal) {
	          Object.defineProperty(request, 'signal', {
	            writable: false,
	            enumerable: false,
	            configurable: true,
	            value: signal
	          });
	        }
	        return request;
	      };
	      Request.prototype = NativeRequest.prototype;
	    }
	    var realFetch = fetch;
	    var abortableFetch = function abortableFetch(input, init) {
	      var signal = Request && Request.prototype.isPrototypeOf(input) ? input.signal : init ? init.signal : undefined;
	      if (signal) {
	        var abortError;
	        try {
	          abortError = new DOMException('Aborted', 'AbortError');
	        } catch (err) {
	          // IE 11 does not support calling the DOMException constructor, use a
	          // regular error object on it instead.
	          abortError = new Error('Aborted');
	          abortError.name = 'AbortError';
	        }

	        // Return early if already aborted, thus avoiding making an HTTP request
	        if (signal.aborted) {
	          return Promise.reject(abortError);
	        }

	        // Turn an event into a promise, reject it once `abort` is dispatched
	        var cancellation = new Promise(function (_, reject) {
	          signal.addEventListener('abort', function () {
	            return reject(abortError);
	          }, {
	            once: true
	          });
	        });
	        if (init && init.signal) {
	          // Never pass .signal to the native implementation when the polyfill has
	          // been installed because if we're running on top of a browser with a
	          // working native AbortController (i.e. the polyfill was installed due to
	          // __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL being set), then passing our
	          // fake AbortSignal to the native fetch will trigger:
	          // TypeError: Failed to execute 'fetch' on 'Window': member signal is not of type AbortSignal.
	          delete init.signal;
	        }
	        // Return the fastest promise (don't need to wait for request to finish)
	        return Promise.race([cancellation, realFetch(input, init)]);
	      }
	      return realFetch(input, init);
	    };
	    return {
	      fetch: abortableFetch,
	      Request: Request
	    };
	  }
	  (function (self) {
	    if (!polyfillNeeded(self)) {
	      return;
	    }
	    if (!self.fetch) {
	      console.warn('fetch() is not available, cannot install abortcontroller-polyfill');
	      return;
	    }
	    var _abortableFetch = abortableFetchDecorator(self),
	      fetch = _abortableFetch.fetch,
	      Request = _abortableFetch.Request;
	    self.fetch = fetch;
	    self.Request = Request;
	    Object.defineProperty(self, 'AbortController', {
	      writable: true,
	      enumerable: false,
	      configurable: true,
	      value: AbortController
	    });
	    Object.defineProperty(self, 'AbortSignal', {
	      writable: true,
	      enumerable: false,
	      configurable: true,
	      value: AbortSignal
	    });
	  })(typeof self !== 'undefined' ? self : commonjsGlobal);
	});

	function _OverloadYield(e, d) {
	  this.v = e, this.k = d;
	}
	function _arrayLikeToArray(r, a) {
	  (null == a || a > r.length) && (a = r.length);
	  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	  return n;
	}
	function _arrayWithHoles(r) {
	  if (Array.isArray(r)) return r;
	}
	function _arrayWithoutHoles(r) {
	  if (Array.isArray(r)) return _arrayLikeToArray(r);
	}
	function _asyncGeneratorDelegate(t) {
	  var e = {},
	    n = !1;
	  function pump(e, r) {
	    return n = !0, r = new Promise(function (n) {
	      n(t[e](r));
	    }), {
	      done: !1,
	      value: new _OverloadYield(r, 1)
	    };
	  }
	  return e["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function () {
	    return this;
	  }, e.next = function (t) {
	    return n ? (n = !1, t) : pump("next", t);
	  }, "function" == typeof t.throw && (e.throw = function (t) {
	    if (n) throw n = !1, t;
	    return pump("throw", t);
	  }), "function" == typeof t.return && (e.return = function (t) {
	    return n ? (n = !1, t) : pump("return", t);
	  }), e;
	}
	function _asyncIterator(r) {
	  var n,
	    t,
	    o,
	    e = 2;
	  for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) {
	    if (t && null != (n = r[t])) return n.call(r);
	    if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
	    t = "@@asyncIterator", o = "@@iterator";
	  }
	  throw new TypeError("Object is not async iterable");
	}
	function AsyncFromSyncIterator(r) {
	  function AsyncFromSyncIteratorContinuation(r) {
	    if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
	    var n = r.done;
	    return Promise.resolve(r.value).then(function (r) {
	      return {
	        value: r,
	        done: n
	      };
	    });
	  }
	  return AsyncFromSyncIterator = function (r) {
	    this.s = r, this.n = r.next;
	  }, AsyncFromSyncIterator.prototype = {
	    s: null,
	    n: null,
	    next: function () {
	      return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
	    },
	    return: function (r) {
	      var n = this.s.return;
	      return void 0 === n ? Promise.resolve({
	        value: r,
	        done: !0
	      }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
	    },
	    throw: function (r) {
	      var n = this.s.return;
	      return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
	    }
	  }, new AsyncFromSyncIterator(r);
	}
	function asyncGeneratorStep(n, t, e, r, o, a, c) {
	  try {
	    var i = n[a](c),
	      u = i.value;
	  } catch (n) {
	    return void e(n);
	  }
	  i.done ? t(u) : Promise.resolve(u).then(r, o);
	}
	function _asyncToGenerator(n) {
	  return function () {
	    var t = this,
	      e = arguments;
	    return new Promise(function (r, o) {
	      var a = n.apply(t, e);
	      function _next(n) {
	        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
	      }
	      function _throw(n) {
	        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
	      }
	      _next(void 0);
	    });
	  };
	}
	function _awaitAsyncGenerator(e) {
	  return new _OverloadYield(e, 0);
	}
	function _defineProperties(e, r) {
	  for (var t = 0; t < r.length; t++) {
	    var o = r[t];
	    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
	  }
	}
	function _createClass(e, r, t) {
	  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
	    writable: !1
	  }), e;
	}
	function _createForOfIteratorHelperLoose(r, e) {
	  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	  if (t) return (t = t.call(r)).next.bind(t);
	  if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
	    t && (r = t);
	    var o = 0;
	    return function () {
	      return o >= r.length ? {
	        done: !0
	      } : {
	        done: !1,
	        value: r[o++]
	      };
	    };
	  }
	  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _defineProperty(e, r, t) {
	  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
	    value: t,
	    enumerable: !0,
	    configurable: !0,
	    writable: !0
	  }) : e[r] = t, e;
	}
	function _iterableToArray(r) {
	  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
	}
	function _iterableToArrayLimit(r, l) {
	  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	  if (null != t) {
	    var e,
	      n,
	      i,
	      u,
	      a = [],
	      f = !0,
	      o = !1;
	    try {
	      if (i = (t = t.call(r)).next, 0 === l) {
	        if (Object(t) !== t) return;
	        f = !1;
	      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
	    } catch (r) {
	      o = !0, n = r;
	    } finally {
	      try {
	        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
	      } finally {
	        if (o) throw n;
	      }
	    }
	    return a;
	  }
	}
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function ownKeys(e, r) {
	  var t = Object.keys(e);
	  if (Object.getOwnPropertySymbols) {
	    var o = Object.getOwnPropertySymbols(e);
	    r && (o = o.filter(function (r) {
	      return Object.getOwnPropertyDescriptor(e, r).enumerable;
	    })), t.push.apply(t, o);
	  }
	  return t;
	}
	function _objectSpread2(e) {
	  for (var r = 1; r < arguments.length; r++) {
	    var t = null != arguments[r] ? arguments[r] : {};
	    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
	      _defineProperty(e, r, t[r]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
	      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
	    });
	  }
	  return e;
	}
	function _regeneratorRuntime() {
	  _regeneratorRuntime = function () {
	    return e;
	  };
	  var t,
	    e = {},
	    r = Object.prototype,
	    n = r.hasOwnProperty,
	    o = Object.defineProperty || function (t, e, r) {
	      t[e] = r.value;
	    },
	    i = "function" == typeof Symbol ? Symbol : {},
	    a = i.iterator || "@@iterator",
	    c = i.asyncIterator || "@@asyncIterator",
	    u = i.toStringTag || "@@toStringTag";
	  function define(t, e, r) {
	    return Object.defineProperty(t, e, {
	      value: r,
	      enumerable: !0,
	      configurable: !0,
	      writable: !0
	    }), t[e];
	  }
	  try {
	    define({}, "");
	  } catch (t) {
	    define = function (t, e, r) {
	      return t[e] = r;
	    };
	  }
	  function wrap(t, e, r, n) {
	    var i = e && e.prototype instanceof Generator ? e : Generator,
	      a = Object.create(i.prototype),
	      c = new Context(n || []);
	    return o(a, "_invoke", {
	      value: makeInvokeMethod(t, r, c)
	    }), a;
	  }
	  function tryCatch(t, e, r) {
	    try {
	      return {
	        type: "normal",
	        arg: t.call(e, r)
	      };
	    } catch (t) {
	      return {
	        type: "throw",
	        arg: t
	      };
	    }
	  }
	  e.wrap = wrap;
	  var h = "suspendedStart",
	    l = "suspendedYield",
	    f = "executing",
	    s = "completed",
	    y = {};
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	  var p = {};
	  define(p, a, function () {
	    return this;
	  });
	  var d = Object.getPrototypeOf,
	    v = d && d(d(values([])));
	  v && v !== r && n.call(v, a) && (p = v);
	  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
	  function defineIteratorMethods(t) {
	    ["next", "throw", "return"].forEach(function (e) {
	      define(t, e, function (t) {
	        return this._invoke(e, t);
	      });
	    });
	  }
	  function AsyncIterator(t, e) {
	    function invoke(r, o, i, a) {
	      var c = tryCatch(t[r], t, o);
	      if ("throw" !== c.type) {
	        var u = c.arg,
	          h = u.value;
	        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
	          invoke("next", t, i, a);
	        }, function (t) {
	          invoke("throw", t, i, a);
	        }) : e.resolve(h).then(function (t) {
	          u.value = t, i(u);
	        }, function (t) {
	          return invoke("throw", t, i, a);
	        });
	      }
	      a(c.arg);
	    }
	    var r;
	    o(this, "_invoke", {
	      value: function (t, n) {
	        function callInvokeWithMethodAndArg() {
	          return new e(function (e, r) {
	            invoke(t, n, e, r);
	          });
	        }
	        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	      }
	    });
	  }
	  function makeInvokeMethod(e, r, n) {
	    var o = h;
	    return function (i, a) {
	      if (o === f) throw Error("Generator is already running");
	      if (o === s) {
	        if ("throw" === i) throw a;
	        return {
	          value: t,
	          done: !0
	        };
	      }
	      for (n.method = i, n.arg = a;;) {
	        var c = n.delegate;
	        if (c) {
	          var u = maybeInvokeDelegate(c, n);
	          if (u) {
	            if (u === y) continue;
	            return u;
	          }
	        }
	        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
	          if (o === h) throw o = s, n.arg;
	          n.dispatchException(n.arg);
	        } else "return" === n.method && n.abrupt("return", n.arg);
	        o = f;
	        var p = tryCatch(e, r, n);
	        if ("normal" === p.type) {
	          if (o = n.done ? s : l, p.arg === y) continue;
	          return {
	            value: p.arg,
	            done: n.done
	          };
	        }
	        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
	      }
	    };
	  }
	  function maybeInvokeDelegate(e, r) {
	    var n = r.method,
	      o = e.iterator[n];
	    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
	    var i = tryCatch(o, e.iterator, r.arg);
	    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
	    var a = i.arg;
	    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
	  }
	  function pushTryEntry(t) {
	    var e = {
	      tryLoc: t[0]
	    };
	    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
	  }
	  function resetTryEntry(t) {
	    var e = t.completion || {};
	    e.type = "normal", delete e.arg, t.completion = e;
	  }
	  function Context(t) {
	    this.tryEntries = [{
	      tryLoc: "root"
	    }], t.forEach(pushTryEntry, this), this.reset(!0);
	  }
	  function values(e) {
	    if (e || "" === e) {
	      var r = e[a];
	      if (r) return r.call(e);
	      if ("function" == typeof e.next) return e;
	      if (!isNaN(e.length)) {
	        var o = -1,
	          i = function next() {
	            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
	            return next.value = t, next.done = !0, next;
	          };
	        return i.next = i;
	      }
	    }
	    throw new TypeError(typeof e + " is not iterable");
	  }
	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
	    value: GeneratorFunctionPrototype,
	    configurable: !0
	  }), o(GeneratorFunctionPrototype, "constructor", {
	    value: GeneratorFunction,
	    configurable: !0
	  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
	    var e = "function" == typeof t && t.constructor;
	    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
	  }, e.mark = function (t) {
	    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
	  }, e.awrap = function (t) {
	    return {
	      __await: t
	    };
	  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
	    return this;
	  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
	    void 0 === i && (i = Promise);
	    var a = new AsyncIterator(wrap(t, r, n, o), i);
	    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
	      return t.done ? t.value : a.next();
	    });
	  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
	    return this;
	  }), define(g, "toString", function () {
	    return "[object Generator]";
	  }), e.keys = function (t) {
	    var e = Object(t),
	      r = [];
	    for (var n in e) r.push(n);
	    return r.reverse(), function next() {
	      for (; r.length;) {
	        var t = r.pop();
	        if (t in e) return next.value = t, next.done = !1, next;
	      }
	      return next.done = !0, next;
	    };
	  }, e.values = values, Context.prototype = {
	    constructor: Context,
	    reset: function (e) {
	      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
	    },
	    stop: function () {
	      this.done = !0;
	      var t = this.tryEntries[0].completion;
	      if ("throw" === t.type) throw t.arg;
	      return this.rval;
	    },
	    dispatchException: function (e) {
	      if (this.done) throw e;
	      var r = this;
	      function handle(n, o) {
	        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
	      }
	      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
	        var i = this.tryEntries[o],
	          a = i.completion;
	        if ("root" === i.tryLoc) return handle("end");
	        if (i.tryLoc <= this.prev) {
	          var c = n.call(i, "catchLoc"),
	            u = n.call(i, "finallyLoc");
	          if (c && u) {
	            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
	            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
	          } else if (c) {
	            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
	          } else {
	            if (!u) throw Error("try statement without catch or finally");
	            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
	          }
	        }
	      }
	    },
	    abrupt: function (t, e) {
	      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
	        var o = this.tryEntries[r];
	        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
	          var i = o;
	          break;
	        }
	      }
	      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
	      var a = i ? i.completion : {};
	      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
	    },
	    complete: function (t, e) {
	      if ("throw" === t.type) throw t.arg;
	      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
	    },
	    finish: function (t) {
	      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
	        var r = this.tryEntries[e];
	        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
	      }
	    },
	    catch: function (t) {
	      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
	        var r = this.tryEntries[e];
	        if (r.tryLoc === t) {
	          var n = r.completion;
	          if ("throw" === n.type) {
	            var o = n.arg;
	            resetTryEntry(r);
	          }
	          return o;
	        }
	      }
	      throw Error("illegal catch attempt");
	    },
	    delegateYield: function (e, r, n) {
	      return this.delegate = {
	        iterator: values(e),
	        resultName: r,
	        nextLoc: n
	      }, "next" === this.method && (this.arg = t), y;
	    }
	  }, e;
	}
	function _slicedToArray(r, e) {
	  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
	}
	function _toArray(r) {
	  return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
	}
	function _toConsumableArray(r) {
	  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
	}
	function _toPrimitive(t, r) {
	  if ("object" != typeof t || !t) return t;
	  var e = t[Symbol.toPrimitive];
	  if (void 0 !== e) {
	    var i = e.call(t, r || "default");
	    if ("object" != typeof i) return i;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return ("string" === r ? String : Number)(t);
	}
	function _toPropertyKey(t) {
	  var i = _toPrimitive(t, "string");
	  return "symbol" == typeof i ? i : i + "";
	}
	function _unsupportedIterableToArray(r, a) {
	  if (r) {
	    if ("string" == typeof r) return _arrayLikeToArray(r, a);
	    var t = {}.toString.call(r).slice(8, -1);
	    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	  }
	}
	function _wrapAsyncGenerator(e) {
	  return function () {
	    return new AsyncGenerator(e.apply(this, arguments));
	  };
	}
	function AsyncGenerator(e) {
	  var r, t;
	  function resume(r, t) {
	    try {
	      var n = e[r](t),
	        o = n.value,
	        u = o instanceof _OverloadYield;
	      Promise.resolve(u ? o.v : o).then(function (t) {
	        if (u) {
	          var i = "return" === r ? "return" : "next";
	          if (!o.k || t.done) return resume(i, t);
	          t = e[i](t).value;
	        }
	        settle(n.done ? "return" : "normal", t);
	      }, function (e) {
	        resume("throw", e);
	      });
	    } catch (e) {
	      settle("throw", e);
	    }
	  }
	  function settle(e, n) {
	    switch (e) {
	      case "return":
	        r.resolve({
	          value: n,
	          done: !0
	        });
	        break;
	      case "throw":
	        r.reject(n);
	        break;
	      default:
	        r.resolve({
	          value: n,
	          done: !1
	        });
	    }
	    (r = r.next) ? resume(r.key, r.arg) : t = null;
	  }
	  this._invoke = function (e, n) {
	    return new Promise(function (o, u) {
	      var i = {
	        key: e,
	        arg: n,
	        resolve: o,
	        reject: u,
	        next: null
	      };
	      t ? t = t.next = i : (r = t = i, resume(e, n));
	    });
	  }, "function" != typeof e.return && (this.return = void 0);
	}
	AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () {
	  return this;
	}, AsyncGenerator.prototype.next = function (e) {
	  return this._invoke("next", e);
	}, AsyncGenerator.prototype.throw = function (e) {
	  return this._invoke("throw", e);
	}, AsyncGenerator.prototype.return = function (e) {
	  return this._invoke("return", e);
	};

	/* eslint-disable local-rules/disallow-side-effects */
	/**
	 * Keep references on console methods to avoid triggering patched behaviors
	 *
	 * NB: in some setup, console could already be patched by another SDK.
	 * In this case, some display messages can be sent by the other SDK
	 * but we should be safe from infinite loop nonetheless.
	 */
	var ConsoleApiName = {
	  log: 'log',
	  debug: 'debug',
	  info: 'info',
	  warn: 'warn',
	  error: 'error'
	};
	/**
	 * When building JS bundles, some users might use a plugin[1] or configuration[2] to remove
	 * "console.*" references. This causes some issue as we expect `console.*` to be defined.
	 * As a workaround, let's use a variable alias, so those expressions won't be taken into account by
	 * simple static analysis.
	 *
	 * [1]: https://babeljs.io/docs/babel-plugin-transform-remove-console/
	 * [2]: https://github.com/terser/terser#compress-options (look for drop_console)
	 */
	var globalConsole = console;
	var originalConsoleMethods = {};
	Object.keys(ConsoleApiName).forEach(function (name) {
	  originalConsoleMethods[name] = globalConsole[name];
	});
	var PREFIX = 'Datadog Browser SDK:';
	var display = {
	  debug: originalConsoleMethods.debug.bind(globalConsole, PREFIX),
	  log: originalConsoleMethods.log.bind(globalConsole, PREFIX),
	  info: originalConsoleMethods.info.bind(globalConsole, PREFIX),
	  warn: originalConsoleMethods.warn.bind(globalConsole, PREFIX),
	  error: originalConsoleMethods.error.bind(globalConsole, PREFIX)
	};
	var DOCS_ORIGIN = 'https://docs.datadoghq.com';
	var DOCS_TROUBLESHOOTING = "".concat(DOCS_ORIGIN, "/real_user_monitoring/browser/troubleshooting");
	var MORE_DETAILS = 'More details:';

	function catchUserErrors(fn, errorMsg) {
	  return function () {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	      args[_i] = arguments[_i];
	    }
	    try {
	      return fn.apply(void 0, args);
	    } catch (err) {
	      display.error(errorMsg, err);
	    }
	  };
	}

	/**
	 * Return true if the draw is successful
	 * @param threshold between 0 and 100
	 */
	function performDraw(threshold) {
	  return threshold !== 0 && Math.random() * 100 <= threshold;
	}
	function isPercentage(value) {
	  return isNumber$1(value) && value >= 0 && value <= 100;
	}
	function isNumber$1(value) {
	  return typeof value === 'number';
	}

	var ONE_SECOND = 1000;
	var ONE_MINUTE = 60 * ONE_SECOND;
	var ONE_HOUR = 60 * ONE_MINUTE;
	var ONE_DAY = 24 * ONE_HOUR;
	var ONE_YEAR = 365 * ONE_DAY;
	function dateNow() {
	  // Do not use `Date.now` because sometimes websites are wrongly "polyfilling" it. For example, we
	  // had some users using a very old version of `datejs`, which patched `Date.now` to return a Date
	  // instance instead of a timestamp[1]. Those users are unlikely to fix this, so let's handle this
	  // case ourselves.
	  // [1]: https://github.com/datejs/Datejs/blob/97f5c7c58c5bc5accdab8aa7602b6ac56462d778/src/core-debug.js#L14-L16
	  return new Date().getTime();
	}
	function timeStampNow() {
	  return dateNow();
	}
	function relativeNow() {
	  return performance.now();
	}
	function clocksNow() {
	  return {
	    relative: relativeNow(),
	    timeStamp: timeStampNow()
	  };
	}
	function clocksOrigin() {
	  return {
	    relative: 0,
	    timeStamp: getNavigationStart()
	  };
	}
	function elapsed(start, end) {
	  return end - start;
	}
	function addDuration(a, b) {
	  return a + b;
	}
	/**
	 * Get the time since the navigation was started.
	 *
	 * Note: this does not use `performance.timeOrigin` because it doesn't seem to reflect the actual
	 * time on which the navigation has started: it may be much farther in the past, at least in Firefox 71.
	 * Related issue in Firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=1429926
	 */
	function getRelativeTime(timestamp) {
	  return timestamp - getNavigationStart();
	}
	/**
	 * Navigation start slightly change on some rare cases
	 */
	var navigationStart;
	function getNavigationStart() {
	  if (navigationStart === undefined) {
	    navigationStart = performance.timing.navigationStart;
	  }
	  return navigationStart;
	}

	var ONE_KIBI_BYTE = 1024;
	var ONE_MEBI_BYTE = 1024 * ONE_KIBI_BYTE;
	// eslint-disable-next-line no-control-regex
	var HAS_MULTI_BYTES_CHARACTERS = /[^\u0000-\u007F]/;
	function computeBytesCount(candidate) {
	  // Accurate bytes count computations can degrade performances when there is a lot of events to process
	  if (!HAS_MULTI_BYTES_CHARACTERS.test(candidate)) {
	    return candidate.length;
	  }
	  if (window.TextEncoder !== undefined) {
	    return new TextEncoder().encode(candidate).length;
	  }
	  return new Blob([candidate]).size;
	}

	function includes(candidate, search) {
	  return candidate.indexOf(search) !== -1;
	}
	function arrayFrom(arrayLike) {
	  if (Array.from) {
	    return Array.from(arrayLike);
	  }
	  var array = [];
	  if (arrayLike instanceof Set) {
	    arrayLike.forEach(function (item) {
	      return array.push(item);
	    });
	  } else {
	    for (var i = 0; i < arrayLike.length; i++) {
	      array.push(arrayLike[i]);
	    }
	  }
	  return array;
	}
	function find(array, predicate) {
	  for (var i = 0; i < array.length; i += 1) {
	    var item = array[i];
	    if (predicate(item, i)) {
	      return item;
	    }
	  }
	  return undefined;
	}
	function objectValues(object) {
	  return Object.keys(object).map(function (key) {
	    return object[key];
	  });
	}
	function objectEntries(object) {
	  return Object.keys(object).map(function (key) {
	    return [key, object[key]];
	  });
	}
	function startsWith(candidate, search) {
	  return candidate.slice(0, search.length) === search;
	}
	function endsWith$1(candidate, search) {
	  return candidate.slice(-search.length) === search;
	}
	function assign(target) {
	  var toAssign = [];
	  for (var _i = 1; _i < arguments.length; _i++) {
	    toAssign[_i - 1] = arguments[_i];
	  }
	  toAssign.forEach(function (source) {
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  });
	  return target;
	}

	function shallowClone(object) {
	  return assign({}, object);
	}
	function objectHasValue(object, value) {
	  return Object.keys(object).some(function (key) {
	    return object[key] === value;
	  });
	}
	function isEmptyObject(object) {
	  return Object.keys(object).length === 0;
	}

	/**
	 * inspired by https://mathiasbynens.be/notes/globalthis
	 */
	function getGlobalObject() {
	  if (typeof globalThis === 'object') {
	    return globalThis;
	  }
	  Object.defineProperty(Object.prototype, '_dd_temp_', {
	    get: function get() {
	      return this;
	    },
	    configurable: true
	  });
	  // @ts-ignore _dd_temp is defined using defineProperty
	  var globalObject = _dd_temp_;
	  // @ts-ignore _dd_temp is defined using defineProperty
	  delete Object.prototype._dd_temp_;
	  if (typeof globalObject !== 'object') {
	    // on safari _dd_temp_ is available on window but not globally
	    // fallback on other browser globals check
	    if (typeof self === 'object') {
	      globalObject = self;
	    } else if (typeof window === 'object') {
	      globalObject = window;
	    } else {
	      globalObject = {};
	    }
	  }
	  return globalObject;
	}

	/**
	 * Gets the original value for a DOM API that was potentially patched by Zone.js.
	 *
	 * Zone.js[1] is a library that patches a bunch of JS and DOM APIs. It usually stores the original
	 * value of the patched functions/constructors/methods in a hidden property prefixed by
	 * __zone_symbol__.
	 *
	 * In multiple occasions, we observed that Zone.js is the culprit of important issues leading to
	 * browser resource exhaustion (memory leak, high CPU usage). This method is used as a workaround to
	 * use the original DOM API instead of the one patched by Zone.js.
	 *
	 * [1]: https://github.com/angular/angular/tree/main/packages/zone.js
	 */
	function getZoneJsOriginalValue(target, name) {
	  var browserWindow = getGlobalObject();
	  var original;
	  if (browserWindow.Zone && typeof browserWindow.Zone.__symbol__ === 'function') {
	    original = target[browserWindow.Zone.__symbol__(name)];
	  }
	  if (!original) {
	    original = target[name];
	  }
	  return original;
	}

	var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
	  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	    if (ar || !(i in from)) {
	      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	      ar[i] = from[i];
	    }
	  }
	  return to.concat(ar || Array.prototype.slice.call(from));
	};
	var onMonitorErrorCollected;
	var debugMode = false;
	function startMonitorErrorCollection(newOnMonitorErrorCollected) {
	  onMonitorErrorCollected = newOnMonitorErrorCollected;
	}
	function setDebugMode(newDebugMode) {
	  debugMode = newDebugMode;
	}
	function monitored(_, __, descriptor) {
	  var originalMethod = descriptor.value;
	  descriptor.value = function () {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	      args[_i] = arguments[_i];
	    }
	    var decorated = onMonitorErrorCollected ? monitor(originalMethod) : originalMethod;
	    return decorated.apply(this, args);
	  };
	}
	function monitor(fn) {
	  return function () {
	    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
	    return callMonitored(fn, this, arguments);
	  }; // consider output type has input type
	}
	function callMonitored(fn, context, args) {
	  try {
	    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
	    return fn.apply(context, args);
	  } catch (e) {
	    displayIfDebugEnabled(e);
	    if (onMonitorErrorCollected) {
	      try {
	        onMonitorErrorCollected(e);
	      } catch (e) {
	        displayIfDebugEnabled(e);
	      }
	    }
	  }
	}
	function displayIfDebugEnabled() {
	  var args = [];
	  for (var _i = 0; _i < arguments.length; _i++) {
	    args[_i] = arguments[_i];
	  }
	  if (debugMode) {
	    display.error.apply(display, __spreadArray(['[MONITOR]'], args, false));
	  }
	}

	function setTimeout$1(callback, delay) {
	  return getZoneJsOriginalValue(getGlobalObject(), 'setTimeout')(monitor(callback), delay);
	}
	function clearTimeout$1(timeoutId) {
	  getZoneJsOriginalValue(getGlobalObject(), 'clearTimeout')(timeoutId);
	}
	function setInterval$1(callback, delay) {
	  return getZoneJsOriginalValue(getGlobalObject(), 'setInterval')(monitor(callback), delay);
	}
	function clearInterval$1(timeoutId) {
	  getZoneJsOriginalValue(getGlobalObject(), 'clearInterval')(timeoutId);
	}

	// eslint-disable-next-line no-restricted-syntax
	var Observable = /** @class */function () {
	  function Observable(onFirstSubscribe) {
	    this.onFirstSubscribe = onFirstSubscribe;
	    this.observers = [];
	  }
	  Observable.prototype.subscribe = function (f) {
	    var _this = this;
	    this.observers.push(f);
	    if (this.observers.length === 1 && this.onFirstSubscribe) {
	      this.onLastUnsubscribe = this.onFirstSubscribe(this) || undefined;
	    }
	    return {
	      unsubscribe: function unsubscribe() {
	        _this.observers = _this.observers.filter(function (other) {
	          return f !== other;
	        });
	        if (!_this.observers.length && _this.onLastUnsubscribe) {
	          _this.onLastUnsubscribe();
	        }
	      }
	    };
	  };
	  Observable.prototype.notify = function (data) {
	    this.observers.forEach(function (observer) {
	      return observer(data);
	    });
	  };
	  return Observable;
	}();
	function mergeObservables() {
	  var observables = [];
	  for (var _i = 0; _i < arguments.length; _i++) {
	    observables[_i] = arguments[_i];
	  }
	  return new Observable(function (globalObservable) {
	    var subscriptions = observables.map(function (observable) {
	      return observable.subscribe(function (data) {
	        return globalObservable.notify(data);
	      });
	    });
	    return function () {
	      return subscriptions.forEach(function (subscription) {
	        return subscription.unsubscribe();
	      });
	    };
	  });
	}

	// use lodash API
	function throttle$1(fn, wait, options) {
	  var inWaitPeriod = false;
	  var pendingExecutionWithParameters;
	  var pendingTimeoutId;
	  return {
	    throttled: function throttled() {
	      var parameters = [];
	      for (var _i = 0; _i < arguments.length; _i++) {
	        parameters[_i] = arguments[_i];
	      }
	      if (inWaitPeriod) {
	        pendingExecutionWithParameters = parameters;
	        return;
	      }
	      {
	        fn.apply(void 0, parameters);
	      }
	      inWaitPeriod = true;
	      pendingTimeoutId = setTimeout$1(function () {
	        if (pendingExecutionWithParameters) {
	          fn.apply(void 0, pendingExecutionWithParameters);
	        }
	        inWaitPeriod = false;
	        pendingExecutionWithParameters = undefined;
	      }, wait);
	    },
	    cancel: function cancel() {
	      clearTimeout$1(pendingTimeoutId);
	      inWaitPeriod = false;
	      pendingExecutionWithParameters = undefined;
	    }
	  };
	}
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	function noop$2() {}

	/**
	 * UUID v4
	 * from https://gist.github.com/jed/982883
	 */
	function generateUUID(placeholder) {
	  return placeholder ?
	  // eslint-disable-next-line  no-bitwise
	  (parseInt(placeholder, 10) ^ Math.random() * 16 >> parseInt(placeholder, 10) / 4).toString(16) : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, generateUUID);
	}
	var COMMA_SEPARATED_KEY_VALUE = /([\w-]+)\s*=\s*([^;]+)/g;
	function findCommaSeparatedValue(rawString, name) {
	  COMMA_SEPARATED_KEY_VALUE.lastIndex = 0;
	  // eslint-disable-next-line no-constant-condition
	  while (true) {
	    var match = COMMA_SEPARATED_KEY_VALUE.exec(rawString);
	    if (match) {
	      if (match[1] === name) {
	        return match[2];
	      }
	    } else {
	      break;
	    }
	  }
	}
	function findCommaSeparatedValues(rawString) {
	  var result = new Map();
	  COMMA_SEPARATED_KEY_VALUE.lastIndex = 0;
	  // eslint-disable-next-line no-constant-condition
	  while (true) {
	    var match = COMMA_SEPARATED_KEY_VALUE.exec(rawString);
	    if (match) {
	      result.set(match[1], match[2]);
	    } else {
	      break;
	    }
	  }
	  return result;
	}
	function safeTruncate(candidate, length, suffix) {
	  var lastChar = candidate.charCodeAt(length - 1);
	  var isLastCharSurrogatePair = lastChar >= 0xd800 && lastChar <= 0xdbff;
	  var correctedLength = isLastCharSurrogatePair ? length + 1 : length;
	  if (candidate.length <= correctedLength) {
	    return candidate;
	  }
	  return "".concat(candidate.slice(0, correctedLength)).concat(suffix);
	}

	function isChromium() {
	  return detectBrowserCached() === 1 /* Browser.CHROMIUM */;
	}
	var browserCache;
	function detectBrowserCached() {
	  return browserCache !== null && browserCache !== void 0 ? browserCache : browserCache = detectBrowser();
	}
	// Exported only for tests
	function detectBrowser(browserWindow) {
	  var _a;
	  if (browserWindow === void 0) {
	    browserWindow = window;
	  }
	  var userAgent = browserWindow.navigator.userAgent;
	  if (browserWindow.chrome || /HeadlessChrome/.test(userAgent)) {
	    return 1 /* Browser.CHROMIUM */;
	  }
	  if (
	  // navigator.vendor is deprecated, but it is the most resilient way we found to detect
	  // "Apple maintained browsers" (AKA Safari). If one day it gets removed, we still have the
	  // useragent test as a semi-working fallback.
	  ((_a = browserWindow.navigator.vendor) === null || _a === void 0 ? void 0 : _a.indexOf('Apple')) === 0 || /safari/i.test(userAgent) && !/chrome|android/i.test(userAgent)) {
	    return 2 /* Browser.SAFARI */;
	  }
	  if (browserWindow.document.documentMode) {
	    return 0 /* Browser.IE */;
	  }
	  return 3 /* Browser.OTHER */;
	}

	/**
	 * LIMITATION:
	 * For NPM setup, this feature flag singleton is shared between RUM and Logs product.
	 * This means that an experimental flag set on the RUM product will be set on the Logs product.
	 * So keep in mind that in certain configurations, your experimental feature flag may affect other products.
	 *
	 * FORMAT:
	 * All feature flags should be snake_cased
	 */
	// We want to use a real enum (i.e. not a const enum) here, to be able to check whether an arbitrary
	// string is an expected feature flag
	// eslint-disable-next-line no-restricted-syntax
	var ExperimentalFeature;
	(function (ExperimentalFeature) {
	  ExperimentalFeature["WRITABLE_RESOURCE_GRAPHQL"] = "writable_resource_graphql";
	  ExperimentalFeature["REMOTE_CONFIGURATION"] = "remote_configuration";
	  ExperimentalFeature["LONG_ANIMATION_FRAME"] = "long_animation_frame";
	  ExperimentalFeature["ANONYMOUS_USER_TRACKING"] = "anonymous_user_tracking";
	  ExperimentalFeature["ACTION_NAME_MASKING"] = "action_name_masking";
	  ExperimentalFeature["CONSISTENT_TRACE_SAMPLING"] = "consistent_trace_sampling";
	  ExperimentalFeature["DELAY_VIEWPORT_COLLECTION"] = "delay_viewport_collection";
	})(ExperimentalFeature || (ExperimentalFeature = {}));
	var enabledExperimentalFeatures = new Set();
	function initFeatureFlags(enableExperimentalFeatures) {
	  if (Array.isArray(enableExperimentalFeatures)) {
	    addExperimentalFeatures(enableExperimentalFeatures.filter(function (flag) {
	      return objectHasValue(ExperimentalFeature, flag);
	    }));
	  }
	}
	function addExperimentalFeatures(enabledFeatures) {
	  enabledFeatures.forEach(function (flag) {
	    enabledExperimentalFeatures.add(flag);
	  });
	}
	function isExperimentalFeatureEnabled(featureName) {
	  return enabledExperimentalFeatures.has(featureName);
	}
	function getExperimentalFeatures() {
	  return enabledExperimentalFeatures;
	}

	function setCookie(name, value, expireDelay, options) {
	  if (expireDelay === void 0) {
	    expireDelay = 0;
	  }
	  var date = new Date();
	  date.setTime(date.getTime() + expireDelay);
	  var expires = "expires=".concat(date.toUTCString());
	  var sameSite = options && options.crossSite ? 'none' : 'strict';
	  var domain = options && options.domain ? ";domain=".concat(options.domain) : '';
	  var secure = options && options.secure ? ';secure' : '';
	  var partitioned = options && options.partitioned ? ';partitioned' : '';
	  document.cookie = "".concat(name, "=").concat(value, ";").concat(expires, ";path=/;samesite=").concat(sameSite).concat(domain).concat(secure).concat(partitioned);
	}
	function getCookie(name) {
	  return findCommaSeparatedValue(document.cookie, name);
	}
	var initCookieParsed;
	/**
	 * Returns a cached value of the cookie. Use this during SDK initialization (and whenever possible)
	 * to avoid accessing document.cookie multiple times.
	 */
	function getInitCookie(name) {
	  if (!initCookieParsed) {
	    initCookieParsed = findCommaSeparatedValues(document.cookie);
	  }
	  return initCookieParsed.get(name);
	}
	function deleteCookie(name, options) {
	  setCookie(name, '', 0, options);
	}
	function areCookiesAuthorized(options) {
	  if (document.cookie === undefined || document.cookie === null) {
	    return false;
	  }
	  try {
	    // Use a unique cookie name to avoid issues when the SDK is initialized multiple times during
	    // the test cookie lifetime
	    var testCookieName = "dd_cookie_test_".concat(generateUUID());
	    var testCookieValue = 'test';
	    setCookie(testCookieName, testCookieValue, ONE_MINUTE, options);
	    var isCookieCorrectlySet = getCookie(testCookieName) === testCookieValue;
	    deleteCookie(testCookieName, options);
	    return isCookieCorrectlySet;
	  } catch (error) {
	    display.error(error);
	    return false;
	  }
	}
	/**
	 * No API to retrieve it, number of levels for subdomain and suffix are unknown
	 * strategy: find the minimal domain on which cookies are allowed to be set
	 * https://web.dev/same-site-same-origin/#site
	 */
	var getCurrentSiteCache;
	function getCurrentSite() {
	  if (getCurrentSiteCache === undefined) {
	    // Use a unique cookie name to avoid issues when the SDK is initialized multiple times during
	    // the test cookie lifetime
	    var testCookieName = "dd_site_test_".concat(generateUUID());
	    var testCookieValue = 'test';
	    var domainLevels = window.location.hostname.split('.');
	    var candidateDomain = domainLevels.pop();
	    while (domainLevels.length && !getCookie(testCookieName)) {
	      candidateDomain = "".concat(domainLevels.pop(), ".").concat(candidateDomain);
	      setCookie(testCookieName, testCookieValue, ONE_SECOND, {
	        domain: candidateDomain
	      });
	    }
	    deleteCookie(testCookieName, {
	      domain: candidateDomain
	    });
	    getCurrentSiteCache = candidateDomain;
	  }
	  return getCurrentSiteCache;
	}

	var SESSION_STORE_KEY = '_dd_s';

	/**
	 * Similar to `typeof`, but distinguish plain objects from `null` and arrays
	 */
	function getType(value) {
	  if (value === null) {
	    return 'null';
	  }
	  if (Array.isArray(value)) {
	    return 'array';
	  }
	  return typeof value;
	}

	/**
	 * Clone input data and ensure known user properties (id, name, email)
	 * are strings, as defined here:
	 * https://docs.datadoghq.com/logs/log_configuration/attributes_naming_convention/#user-related-attributes
	 */
	function sanitizeUser(newUser) {
	  // We shallow clone only to prevent mutation of user data.
	  var user = assign({}, newUser);
	  var keys = ['id', 'name', 'email'];
	  keys.forEach(function (key) {
	    if (key in user) {
	      user[key] = String(user[key]);
	    }
	  });
	  return user;
	}
	/**
	 * Simple check to ensure user is valid
	 */
	function checkUser(newUser) {
	  var isValid = getType(newUser) === 'object';
	  if (!isValid) {
	    display.error('Unsupported user:', newUser);
	  }
	  return isValid;
	}
	function generateAnonymousId() {
	  return Math.floor(Math.random() * Math.pow(2, 53)).toString(36);
	}

	var SESSION_TIME_OUT_DELAY = 4 * ONE_HOUR;
	var SESSION_EXPIRATION_DELAY = 15 * ONE_MINUTE;
	var SESSION_COOKIE_EXPIRATION_DELAY = ONE_YEAR;

	var SESSION_ENTRY_REGEXP = /^([a-zA-Z]+)=([a-z0-9-]+)$/;
	var SESSION_ENTRY_SEPARATOR = '&';
	function isValidSessionString(sessionString) {
	  return !!sessionString && (sessionString.indexOf(SESSION_ENTRY_SEPARATOR) !== -1 || SESSION_ENTRY_REGEXP.test(sessionString));
	}

	var EXPIRED = '1';
	function getExpiredSessionState(previousSessionState) {
	  var expiredSessionState = {
	    isExpired: EXPIRED
	  };
	  if (isExperimentalFeatureEnabled(ExperimentalFeature.ANONYMOUS_USER_TRACKING)) {
	    if (previousSessionState === null || previousSessionState === void 0 ? void 0 : previousSessionState.anonymousId) {
	      expiredSessionState.anonymousId = previousSessionState === null || previousSessionState === void 0 ? void 0 : previousSessionState.anonymousId;
	    } else {
	      expiredSessionState.anonymousId = generateAnonymousId();
	    }
	  }
	  return expiredSessionState;
	}
	function isSessionInNotStartedState(session) {
	  return isEmptyObject(session);
	}
	function isSessionStarted(session) {
	  return !isSessionInNotStartedState(session);
	}
	function isSessionInExpiredState(session) {
	  return session.isExpired !== undefined || !isActiveSession(session);
	}
	// An active session is a session in either `Tracked` or `NotTracked` state
	function isActiveSession(sessionState) {
	  // created and expire can be undefined for versions which was not storing them
	  // these checks could be removed when older versions will not be available/live anymore
	  return (sessionState.created === undefined || dateNow() - Number(sessionState.created) < SESSION_TIME_OUT_DELAY) && (sessionState.expire === undefined || dateNow() < Number(sessionState.expire));
	}
	function expandSessionState(session) {
	  session.expire = String(dateNow() + SESSION_EXPIRATION_DELAY);
	}
	function toSessionString(session) {
	  return objectEntries(session)
	  // we use `aid` as a key for anonymousId
	  .map(function (_a) {
	    var key = _a[0],
	      value = _a[1];
	    return key === 'anonymousId' ? "aid=".concat(value) : "".concat(key, "=").concat(value);
	  }).join(SESSION_ENTRY_SEPARATOR);
	}
	function toSessionState(sessionString) {
	  var session = {};
	  if (isValidSessionString(sessionString)) {
	    sessionString.split(SESSION_ENTRY_SEPARATOR).forEach(function (entry) {
	      var matches = SESSION_ENTRY_REGEXP.exec(entry);
	      if (matches !== null) {
	        var key = matches[1],
	          value = matches[2];
	        if (key === 'aid') {
	          // we use `aid` as a key for anonymousId
	          session.anonymousId = value;
	        } else {
	          session[key] = value;
	        }
	      }
	    });
	  }
	  return session;
	}

	var OLD_SESSION_COOKIE_NAME = '_dd';
	var OLD_RUM_COOKIE_NAME = '_dd_r';
	var OLD_LOGS_COOKIE_NAME = '_dd_l';
	// duplicate values to avoid dependency issues
	var RUM_SESSION_KEY = 'rum';
	var LOGS_SESSION_KEY$1 = 'logs';
	/**
	 * This migration should remain in the codebase as long as older versions are available/live
	 * to allow older sdk versions to be upgraded to newer versions without compatibility issues.
	 */
	function tryOldCookiesMigration(cookieStoreStrategy) {
	  var sessionString = getInitCookie(SESSION_STORE_KEY);
	  if (!sessionString) {
	    var oldSessionId = getInitCookie(OLD_SESSION_COOKIE_NAME);
	    var oldRumType = getInitCookie(OLD_RUM_COOKIE_NAME);
	    var oldLogsType = getInitCookie(OLD_LOGS_COOKIE_NAME);
	    var session = {};
	    if (oldSessionId) {
	      session.id = oldSessionId;
	    }
	    if (oldLogsType && /^[01]$/.test(oldLogsType)) {
	      session[LOGS_SESSION_KEY$1] = oldLogsType;
	    }
	    if (oldRumType && /^[012]$/.test(oldRumType)) {
	      session[RUM_SESSION_KEY] = oldRumType;
	    }
	    if (isSessionStarted(session)) {
	      expandSessionState(session);
	      cookieStoreStrategy.persistSession(session);
	    }
	  }
	}

	function selectCookieStrategy(initConfiguration) {
	  var cookieOptions = buildCookieOptions(initConfiguration);
	  return areCookiesAuthorized(cookieOptions) ? {
	    type: 'Cookie',
	    cookieOptions: cookieOptions
	  } : undefined;
	}
	function initCookieStrategy(cookieOptions) {
	  var cookieStore = {
	    /**
	     * Lock strategy allows mitigating issues due to concurrent access to cookie.
	     * This issue concerns only chromium browsers and enabling this on firefox increases cookie write failures.
	     */
	    isLockEnabled: isChromium(),
	    persistSession: persistSessionCookie(cookieOptions),
	    retrieveSession: retrieveSessionCookie,
	    expireSession: function expireSession(sessionState) {
	      return expireSessionCookie(cookieOptions, sessionState);
	    }
	  };
	  tryOldCookiesMigration(cookieStore);
	  return cookieStore;
	}
	function persistSessionCookie(options) {
	  return function (session) {
	    setCookie(SESSION_STORE_KEY, toSessionString(session), SESSION_EXPIRATION_DELAY, options);
	  };
	}
	function expireSessionCookie(options, sessionState) {
	  var expiredSessionState = getExpiredSessionState(sessionState);
	  setCookie(SESSION_STORE_KEY, toSessionString(expiredSessionState), isExperimentalFeatureEnabled(ExperimentalFeature.ANONYMOUS_USER_TRACKING) ? SESSION_COOKIE_EXPIRATION_DELAY : SESSION_TIME_OUT_DELAY, options);
	}
	function retrieveSessionCookie() {
	  var sessionString = getCookie(SESSION_STORE_KEY);
	  var sessionState = toSessionState(sessionString);
	  return sessionState;
	}
	function buildCookieOptions(initConfiguration) {
	  var cookieOptions = {};
	  cookieOptions.secure = !!initConfiguration.useSecureSessionCookie || !!initConfiguration.usePartitionedCrossSiteSessionCookie || !!initConfiguration.useCrossSiteSessionCookie;
	  cookieOptions.crossSite = !!initConfiguration.usePartitionedCrossSiteSessionCookie || !!initConfiguration.useCrossSiteSessionCookie;
	  cookieOptions.partitioned = !!initConfiguration.usePartitionedCrossSiteSessionCookie;
	  if (initConfiguration.trackSessionAcrossSubdomains) {
	    cookieOptions.domain = getCurrentSite();
	  }
	  return cookieOptions;
	}

	var LOCAL_STORAGE_TEST_KEY = '_dd_test_';
	function selectLocalStorageStrategy() {
	  try {
	    var id = generateUUID();
	    var testKey = "".concat(LOCAL_STORAGE_TEST_KEY).concat(id);
	    localStorage.setItem(testKey, id);
	    var retrievedId = localStorage.getItem(testKey);
	    localStorage.removeItem(testKey);
	    return id === retrievedId ? {
	      type: 'LocalStorage'
	    } : undefined;
	  } catch (_a) {
	    return undefined;
	  }
	}
	function initLocalStorageStrategy() {
	  return {
	    isLockEnabled: false,
	    persistSession: persistInLocalStorage,
	    retrieveSession: retrieveSessionFromLocalStorage,
	    expireSession: expireSessionFromLocalStorage
	  };
	}
	function persistInLocalStorage(sessionState) {
	  localStorage.setItem(SESSION_STORE_KEY, toSessionString(sessionState));
	}
	function retrieveSessionFromLocalStorage() {
	  var sessionString = localStorage.getItem(SESSION_STORE_KEY);
	  return toSessionState(sessionString);
	}
	function expireSessionFromLocalStorage(previousSessionState) {
	  persistInLocalStorage(getExpiredSessionState(previousSessionState));
	}

	var LOCK_RETRY_DELAY = 10;
	var LOCK_MAX_TRIES = 100;
	var bufferedOperations = [];
	var ongoingOperations;
	function processSessionStoreOperations(operations, sessionStoreStrategy, numberOfRetries) {
	  var _a;
	  if (numberOfRetries === void 0) {
	    numberOfRetries = 0;
	  }
	  var isLockEnabled = sessionStoreStrategy.isLockEnabled,
	    persistSession = sessionStoreStrategy.persistSession,
	    expireSession = sessionStoreStrategy.expireSession;
	  var persistWithLock = function persistWithLock(session) {
	    return persistSession(assign({}, session, {
	      lock: currentLock
	    }));
	  };
	  var retrieveStore = function retrieveStore() {
	    var session = sessionStoreStrategy.retrieveSession();
	    var lock = session.lock;
	    if (session.lock) {
	      delete session.lock;
	    }
	    return {
	      session: session,
	      lock: lock
	    };
	  };
	  if (!ongoingOperations) {
	    ongoingOperations = operations;
	  }
	  if (operations !== ongoingOperations) {
	    bufferedOperations.push(operations);
	    return;
	  }
	  if (isLockEnabled && numberOfRetries >= LOCK_MAX_TRIES) {
	    next(sessionStoreStrategy);
	    return;
	  }
	  var currentLock;
	  var currentStore = retrieveStore();
	  if (isLockEnabled) {
	    // if someone has lock, retry later
	    if (currentStore.lock) {
	      retryLater(operations, sessionStoreStrategy, numberOfRetries);
	      return;
	    }
	    // acquire lock
	    currentLock = generateUUID();
	    persistWithLock(currentStore.session);
	    // if lock is not acquired, retry later
	    currentStore = retrieveStore();
	    if (currentStore.lock !== currentLock) {
	      retryLater(operations, sessionStoreStrategy, numberOfRetries);
	      return;
	    }
	  }
	  var processedSession = operations.process(currentStore.session);
	  if (isLockEnabled) {
	    // if lock corrupted after process, retry later
	    currentStore = retrieveStore();
	    if (currentStore.lock !== currentLock) {
	      retryLater(operations, sessionStoreStrategy, numberOfRetries);
	      return;
	    }
	  }
	  if (processedSession) {
	    if (isSessionInExpiredState(processedSession)) {
	      expireSession(processedSession);
	    } else {
	      expandSessionState(processedSession);
	      if (isLockEnabled) {
	        persistWithLock(processedSession);
	      } else {
	        persistSession(processedSession);
	      }
	    }
	  }
	  if (isLockEnabled) {
	    // correctly handle lock around expiration would require to handle this case properly at several levels
	    // since we don't have evidence of lock issues around expiration, let's just not do the corruption check for it
	    if (!(processedSession && isSessionInExpiredState(processedSession))) {
	      // if lock corrupted after persist, retry later
	      currentStore = retrieveStore();
	      if (currentStore.lock !== currentLock) {
	        retryLater(operations, sessionStoreStrategy, numberOfRetries);
	        return;
	      }
	      persistSession(currentStore.session);
	      processedSession = currentStore.session;
	    }
	  }
	  // call after even if session is not persisted in order to perform operations on
	  // up-to-date session state value => the value could have been modified by another tab
	  (_a = operations.after) === null || _a === void 0 ? void 0 : _a.call(operations, processedSession || currentStore.session);
	  next(sessionStoreStrategy);
	}
	function retryLater(operations, sessionStore, currentNumberOfRetries) {
	  setTimeout$1(function () {
	    processSessionStoreOperations(operations, sessionStore, currentNumberOfRetries + 1);
	  }, LOCK_RETRY_DELAY);
	}
	function next(sessionStore) {
	  ongoingOperations = undefined;
	  var nextOperations = bufferedOperations.shift();
	  if (nextOperations) {
	    processSessionStoreOperations(nextOperations, sessionStore);
	  }
	}

	/**
	 * Every second, the storage will be polled to check for any change that can occur
	 * to the session state in another browser tab, or another window.
	 * This value has been determined from our previous cookie-only implementation.
	 */
	var STORAGE_POLL_DELAY = ONE_SECOND;
	/**
	 * Checks if cookies are available as the preferred storage
	 * Else, checks if LocalStorage is allowed and available
	 */
	function selectSessionStoreStrategyType(initConfiguration) {
	  var sessionStoreStrategyType = selectCookieStrategy(initConfiguration);
	  if (!sessionStoreStrategyType && initConfiguration.allowFallbackToLocalStorage) {
	    sessionStoreStrategyType = selectLocalStorageStrategy();
	  }
	  return sessionStoreStrategyType;
	}
	/**
	 * Different session concepts:
	 * - tracked, the session has an id and is updated along the user navigation
	 * - not tracked, the session does not have an id but it is updated along the user navigation
	 * - inactive, no session in store or session expired, waiting for a renew session
	 */
	function startSessionStore(sessionStoreStrategyType, productKey, computeSessionState) {
	  var renewObservable = new Observable();
	  var expireObservable = new Observable();
	  var sessionStateUpdateObservable = new Observable();
	  var sessionStoreStrategy = sessionStoreStrategyType.type === 'Cookie' ? initCookieStrategy(sessionStoreStrategyType.cookieOptions) : initLocalStorageStrategy();
	  var expireSession = sessionStoreStrategy.expireSession;
	  var watchSessionTimeoutId = setInterval$1(watchSession, STORAGE_POLL_DELAY);
	  var sessionCache;
	  startSession();
	  var _a = throttle$1(function () {
	      processSessionStoreOperations({
	        process: function process(sessionState) {
	          if (isSessionInNotStartedState(sessionState)) {
	            return;
	          }
	          var synchronizedSession = synchronizeSession(sessionState);
	          expandOrRenewSessionState(synchronizedSession);
	          return synchronizedSession;
	        },
	        after: function after(sessionState) {
	          if (isSessionStarted(sessionState) && !hasSessionInCache()) {
	            renewSessionInCache(sessionState);
	          }
	          sessionCache = sessionState;
	        }
	      }, sessionStoreStrategy);
	    }, STORAGE_POLL_DELAY),
	    throttledExpandOrRenewSession = _a.throttled,
	    cancelExpandOrRenewSession = _a.cancel;
	  function expandSession() {
	    processSessionStoreOperations({
	      process: function process(sessionState) {
	        return hasSessionInCache() ? synchronizeSession(sessionState) : undefined;
	      }
	    }, sessionStoreStrategy);
	  }
	  /**
	   * allows two behaviors:
	   * - if the session is active, synchronize the session cache without updating the session store
	   * - if the session is not active, clear the session store and expire the session cache
	   */
	  function watchSession() {
	    processSessionStoreOperations({
	      process: function process(sessionState) {
	        return isSessionInExpiredState(sessionState) ? getExpiredSessionState(sessionState) : undefined;
	      },
	      after: synchronizeSession
	    }, sessionStoreStrategy);
	  }
	  function synchronizeSession(sessionState) {
	    if (isSessionInExpiredState(sessionState)) {
	      sessionState = getExpiredSessionState(sessionState);
	    }
	    if (hasSessionInCache()) {
	      if (isSessionInCacheOutdated(sessionState)) {
	        expireSessionInCache();
	      } else {
	        sessionStateUpdateObservable.notify({
	          previousState: sessionCache,
	          newState: sessionState
	        });
	        sessionCache = sessionState;
	      }
	    }
	    return sessionState;
	  }
	  function startSession() {
	    processSessionStoreOperations({
	      process: function process(sessionState) {
	        if (isSessionInNotStartedState(sessionState)) {
	          return getExpiredSessionState(sessionState);
	        }
	      },
	      after: function after(sessionState) {
	        sessionCache = sessionState;
	      }
	    }, sessionStoreStrategy);
	  }
	  function expandOrRenewSessionState(sessionState) {
	    if (isSessionInNotStartedState(sessionState)) {
	      return false;
	    }
	    var _a = computeSessionState(sessionState[productKey]),
	      trackingType = _a.trackingType,
	      isTracked = _a.isTracked;
	    sessionState[productKey] = trackingType;
	    delete sessionState.isExpired;
	    if (isTracked && !sessionState.id) {
	      sessionState.id = generateUUID();
	      sessionState.created = String(dateNow());
	    }
	  }
	  function hasSessionInCache() {
	    return sessionCache[productKey] !== undefined;
	  }
	  function isSessionInCacheOutdated(sessionState) {
	    return sessionCache.id !== sessionState.id || sessionCache[productKey] !== sessionState[productKey];
	  }
	  function expireSessionInCache() {
	    sessionCache = getExpiredSessionState(sessionCache);
	    expireObservable.notify();
	  }
	  function renewSessionInCache(sessionState) {
	    sessionCache = sessionState;
	    renewObservable.notify();
	  }
	  function updateSessionState(partialSessionState) {
	    processSessionStoreOperations({
	      process: function process(sessionState) {
	        return assign({}, sessionState, partialSessionState);
	      },
	      after: synchronizeSession
	    }, sessionStoreStrategy);
	  }
	  return {
	    expandOrRenewSession: throttledExpandOrRenewSession,
	    expandSession: expandSession,
	    getSession: function getSession() {
	      return sessionCache;
	    },
	    renewObservable: renewObservable,
	    expireObservable: expireObservable,
	    sessionStateUpdateObservable: sessionStateUpdateObservable,
	    restartSession: startSession,
	    expire: function expire() {
	      cancelExpandOrRenewSession();
	      expireSession(sessionCache);
	      synchronizeSession(getExpiredSessionState(sessionCache));
	    },
	    stop: function stop() {
	      clearInterval$1(watchSessionTimeoutId);
	    },
	    updateSessionState: updateSessionState
	  };
	}

	var TrackingConsent = {
	  GRANTED: 'granted',
	  NOT_GRANTED: 'not-granted'
	};
	function createTrackingConsentState(currentConsent) {
	  var observable = new Observable();
	  return {
	    tryToInit: function tryToInit(trackingConsent) {
	      if (!currentConsent) {
	        currentConsent = trackingConsent;
	      }
	    },
	    update: function update(trackingConsent) {
	      currentConsent = trackingConsent;
	      observable.notify();
	    },
	    isGranted: function isGranted() {
	      return currentConsent === TrackingConsent.GRANTED;
	    },
	    observable: observable
	  };
	}

	/**
	 * Custom implementation of JSON.stringify that ignores some toJSON methods. We need to do that
	 * because some sites badly override toJSON on certain objects. Removing all toJSON methods from
	 * nested values would be too costly, so we just detach them from the root value, and native classes
	 * used to build JSON values (Array and Object).
	 *
	 * Note: this still assumes that JSON.stringify is correct.
	 */
	function jsonStringify(value, replacer, space) {
	  if (typeof value !== 'object' || value === null) {
	    return JSON.stringify(value);
	  }
	  // Note: The order matter here. We need to detach toJSON methods on parent classes before their
	  // subclasses.
	  var restoreObjectPrototypeToJson = detachToJsonMethod(Object.prototype);
	  var restoreArrayPrototypeToJson = detachToJsonMethod(Array.prototype);
	  var restoreValuePrototypeToJson = detachToJsonMethod(Object.getPrototypeOf(value));
	  var restoreValueToJson = detachToJsonMethod(value);
	  try {
	    return JSON.stringify(value, replacer, space);
	  } catch (_a) {
	    return '<error: unable to serialize object>';
	  } finally {
	    restoreObjectPrototypeToJson();
	    restoreArrayPrototypeToJson();
	    restoreValuePrototypeToJson();
	    restoreValueToJson();
	  }
	}
	function detachToJsonMethod(value) {
	  var object = value;
	  var objectToJson = object.toJSON;
	  if (objectToJson) {
	    delete object.toJSON;
	    return function () {
	      object.toJSON = objectToJson;
	    };
	  }
	  return noop$2;
	}

	function normalizeUrl(url) {
	  return buildUrl(url, location.href).href;
	}
	function buildUrl(url, base) {
	  var supportedURL = getSupportedUrl();
	  if (supportedURL) {
	    try {
	      return base !== undefined ? new supportedURL(url, base) : new supportedURL(url);
	    } catch (error) {
	      throw new Error("Failed to construct URL: ".concat(String(error), " ").concat(jsonStringify({
	        url: url,
	        base: base
	      })));
	    }
	  }
	  if (base === undefined && !/:/.test(url)) {
	    throw new Error("Invalid URL: '".concat(url, "'"));
	  }
	  var doc = document;
	  var anchorElement = doc.createElement('a');
	  if (base !== undefined) {
	    doc = document.implementation.createHTMLDocument('');
	    var baseElement = doc.createElement('base');
	    baseElement.href = base;
	    doc.head.appendChild(baseElement);
	    doc.body.appendChild(anchorElement);
	  }
	  anchorElement.href = url;
	  return anchorElement;
	}
	var originalURL = URL;
	var isURLSupported;
	function getSupportedUrl() {
	  if (isURLSupported === undefined) {
	    try {
	      var url = new originalURL('http://test/path');
	      isURLSupported = url.href === 'http://test/path';
	    } catch (_a) {
	      isURLSupported = false;
	    }
	  }
	  return isURLSupported ? originalURL : undefined;
	}

	var INTAKE_SITE_STAGING = 'datad0g.com';
	var INTAKE_SITE_FED_STAGING = 'dd0g-gov.com';
	var INTAKE_SITE_US1 = 'datadoghq.com';
	var INTAKE_SITE_US1_FED = 'ddog-gov.com';
	var PCI_INTAKE_HOST_US1 = 'pci.browser-intake-datadoghq.com';
	var INTAKE_URL_PARAMETERS = ['ddsource', 'ddtags'];

	function createEndpointBuilder(initConfiguration, trackType, configurationTags) {
	  var buildUrlWithParameters = createEndpointUrlWithParametersBuilder(initConfiguration, trackType);
	  return {
	    build: function build(api, payload) {
	      var parameters = buildEndpointParameters(initConfiguration, trackType, configurationTags, api, payload);
	      return buildUrlWithParameters(parameters);
	    },
	    urlPrefix: buildUrlWithParameters(''),
	    trackType: trackType
	  };
	}
	/**
	 * Create a function used to build a full endpoint url from provided parameters. The goal of this
	 * function is to pre-compute some parts of the URL to avoid re-computing everything on every
	 * request, as only parameters are changing.
	 */
	function createEndpointUrlWithParametersBuilder(initConfiguration, trackType) {
	  var path = "/api/v2/".concat(trackType);
	  var proxy = initConfiguration.proxy;
	  if (typeof proxy === 'string') {
	    var normalizedProxyUrl_1 = normalizeUrl(proxy);
	    return function (parameters) {
	      return "".concat(normalizedProxyUrl_1, "?ddforward=").concat(encodeURIComponent("".concat(path, "?").concat(parameters)));
	    };
	  }
	  if (typeof proxy === 'function') {
	    return function (parameters) {
	      return proxy({
	        path: path,
	        parameters: parameters
	      });
	    };
	  }
	  var host = buildEndpointHost(trackType, initConfiguration);
	  return function (parameters) {
	    return "https://".concat(host).concat(path, "?").concat(parameters);
	  };
	}
	function buildEndpointHost(trackType, initConfiguration) {
	  var _a = initConfiguration.site,
	    site = _a === void 0 ? INTAKE_SITE_US1 : _a,
	    internalAnalyticsSubdomain = initConfiguration.internalAnalyticsSubdomain;
	  if (trackType === 'logs' && initConfiguration.usePciIntake && site === INTAKE_SITE_US1) {
	    return PCI_INTAKE_HOST_US1;
	  }
	  if (internalAnalyticsSubdomain && site === INTAKE_SITE_US1) {
	    return "".concat(internalAnalyticsSubdomain, ".").concat(INTAKE_SITE_US1);
	  }
	  if (site === INTAKE_SITE_FED_STAGING) {
	    return "http-intake.logs.".concat(site);
	  }
	  var domainParts = site.split('.');
	  var extension = domainParts.pop();
	  return "browser-intake-".concat(domainParts.join('-'), ".").concat(extension);
	}
	/**
	 * Build parameters to be used for an intake request. Parameters should be re-built for each
	 * request, as they change randomly.
	 */
	function buildEndpointParameters(_a, trackType, configurationTags, api, _b) {
	  var clientToken = _a.clientToken,
	    internalAnalyticsSubdomain = _a.internalAnalyticsSubdomain;
	  var retry = _b.retry,
	    encoding = _b.encoding;
	  var tags = ["sdk_version:".concat("5.34.1"), "api:".concat(api)].concat(configurationTags);
	  if (retry) {
	    tags.push("retry_count:".concat(retry.count), "retry_after:".concat(retry.lastFailureStatus));
	  }
	  var parameters = ['ddsource=browser', "ddtags=".concat(encodeURIComponent(tags.join(','))), "dd-api-key=".concat(clientToken), "dd-evp-origin-version=".concat(encodeURIComponent("5.34.1")), 'dd-evp-origin=browser', "dd-request-id=".concat(generateUUID())];
	  if (encoding) {
	    parameters.push("dd-evp-encoding=".concat(encoding));
	  }
	  if (trackType === 'rum') {
	    parameters.push("batch_time=".concat(timeStampNow()));
	  }
	  if (internalAnalyticsSubdomain) {
	    parameters.reverse();
	  }
	  return parameters.join('&');
	}

	var TAG_SIZE_LIMIT = 200;
	function buildTags(configuration) {
	  var env = configuration.env,
	    service = configuration.service,
	    version = configuration.version,
	    datacenter = configuration.datacenter;
	  var tags = [];
	  if (env) {
	    tags.push(buildTag('env', env));
	  }
	  if (service) {
	    tags.push(buildTag('service', service));
	  }
	  if (version) {
	    tags.push(buildTag('version', version));
	  }
	  if (datacenter) {
	    tags.push(buildTag('datacenter', datacenter));
	  }
	  return tags;
	}
	function buildTag(key, rawValue) {
	  // See https://docs.datadoghq.com/getting_started/tagging/#defining-tags for tags syntax. Note
	  // that the backend may not follow the exact same rules, so we only want to display an informal
	  // warning.
	  var valueSizeLimit = TAG_SIZE_LIMIT - key.length - 1;
	  if (rawValue.length > valueSizeLimit || hasForbiddenCharacters(rawValue)) {
	    display.warn("".concat(key, " value doesn't meet tag requirements and will be sanitized. ").concat(MORE_DETAILS, " ").concat(DOCS_ORIGIN, "/getting_started/tagging/#defining-tags"));
	  }
	  // Let the backend do most of the sanitization, but still make sure multiple tags can't be crafted
	  // by forging a value containing commas.
	  var sanitizedValue = rawValue.replace(/,/g, '_');
	  return "".concat(key, ":").concat(sanitizedValue);
	}
	function hasForbiddenCharacters(rawValue) {
	  // Unicode property escapes is not supported in all browsers, so we use a try/catch.
	  // Todo: Remove the try/catch when dropping IE11.
	  if (!supportUnicodePropertyEscapes()) {
	    return false;
	  }
	  // We use the Unicode property escapes to match any character that is a letter including other languages like Chinese, Japanese, etc.
	  // p{Ll} matches a lowercase letter.
	  // p{Lo} matches a letter that is neither uppercase nor lowercase (ex: Japanese characters).
	  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape#unicode_property_escapes_vs._character_classes
	  return new RegExp('[^\\p{Ll}\\p{Lo}0-9_:./-]', 'u').test(rawValue);
	}
	function supportUnicodePropertyEscapes() {
	  try {
	    new RegExp('[\\p{Ll}]', 'u');
	    return true;
	  } catch (_a) {
	    return false;
	  }
	}

	function computeTransportConfiguration(initConfiguration) {
	  var site = initConfiguration.site || INTAKE_SITE_US1;
	  var tags = buildTags(initConfiguration);
	  var endpointBuilders = computeEndpointBuilders(initConfiguration, tags);
	  var replicaConfiguration = computeReplicaConfiguration(initConfiguration, tags);
	  return assign({
	    replica: replicaConfiguration,
	    site: site
	  }, endpointBuilders);
	}
	function computeEndpointBuilders(initConfiguration, tags) {
	  return {
	    logsEndpointBuilder: createEndpointBuilder(initConfiguration, 'logs', tags),
	    rumEndpointBuilder: createEndpointBuilder(initConfiguration, 'rum', tags),
	    sessionReplayEndpointBuilder: createEndpointBuilder(initConfiguration, 'replay', tags)
	  };
	}
	function computeReplicaConfiguration(initConfiguration, tags) {
	  if (!initConfiguration.replica) {
	    return;
	  }
	  var replicaConfiguration = assign({}, initConfiguration, {
	    site: INTAKE_SITE_US1,
	    clientToken: initConfiguration.replica.clientToken
	  });
	  var replicaEndpointBuilders = {
	    logsEndpointBuilder: createEndpointBuilder(replicaConfiguration, 'logs', tags),
	    rumEndpointBuilder: createEndpointBuilder(replicaConfiguration, 'rum', tags)
	  };
	  return assign({
	    applicationId: initConfiguration.replica.applicationId
	  }, replicaEndpointBuilders);
	}
	function isIntakeUrl(url) {
	  // check if tags is present in the query string
	  return INTAKE_URL_PARAMETERS.every(function (param) {
	    return includes(url, param);
	  });
	}

	function isString$1(tag, tagName) {
	  if (tag !== undefined && tag !== null && typeof tag !== 'string') {
	    display.error("".concat(tagName, " must be defined as a string"));
	    return false;
	  }
	  return true;
	}
	function isDatadogSite(site) {
	  if (site && typeof site === 'string' && !/(datadog|ddog|datad0g|dd0g)/.test(site)) {
	    display.error("Site should be a valid Datadog site. ".concat(MORE_DETAILS, " ").concat(DOCS_ORIGIN, "/getting_started/site/."));
	    return false;
	  }
	  return true;
	}
	function isSampleRate(sampleRate, name) {
	  if (sampleRate !== undefined && !isPercentage(sampleRate)) {
	    display.error("".concat(name, " Sample Rate should be a number between 0 and 100"));
	    return false;
	  }
	  return true;
	}
	function validateAndBuildConfiguration(initConfiguration) {
	  var _a, _b, _c, _d, _e;
	  if (!initConfiguration || !initConfiguration.clientToken) {
	    display.error('Client Token is not configured, we will not send any data.');
	    return;
	  }
	  if (!isDatadogSite(initConfiguration.site) || !isSampleRate(initConfiguration.sessionSampleRate, 'Session') || !isSampleRate(initConfiguration.telemetrySampleRate, 'Telemetry') || !isSampleRate(initConfiguration.telemetryConfigurationSampleRate, 'Telemetry Configuration') || !isSampleRate(initConfiguration.telemetryUsageSampleRate, 'Telemetry Usage') || !isString$1(initConfiguration.version, 'Version') || !isString$1(initConfiguration.env, 'Env') || !isString$1(initConfiguration.service, 'Service')) {
	    return;
	  }
	  if (initConfiguration.trackingConsent !== undefined && !objectHasValue(TrackingConsent, initConfiguration.trackingConsent)) {
	    display.error('Tracking Consent should be either "granted" or "not-granted"');
	    return;
	  }
	  return assign({
	    beforeSend: initConfiguration.beforeSend && catchUserErrors(initConfiguration.beforeSend, 'beforeSend threw an error:'),
	    sessionStoreStrategyType: selectSessionStoreStrategyType(initConfiguration),
	    sessionSampleRate: (_a = initConfiguration.sessionSampleRate) !== null && _a !== void 0 ? _a : 100,
	    telemetrySampleRate: (_b = initConfiguration.telemetrySampleRate) !== null && _b !== void 0 ? _b : 20,
	    telemetryConfigurationSampleRate: (_c = initConfiguration.telemetryConfigurationSampleRate) !== null && _c !== void 0 ? _c : 5,
	    telemetryUsageSampleRate: (_d = initConfiguration.telemetryUsageSampleRate) !== null && _d !== void 0 ? _d : 5,
	    service: initConfiguration.service || undefined,
	    silentMultipleInit: !!initConfiguration.silentMultipleInit,
	    allowUntrustedEvents: !!initConfiguration.allowUntrustedEvents,
	    trackingConsent: (_e = initConfiguration.trackingConsent) !== null && _e !== void 0 ? _e : TrackingConsent.GRANTED,
	    storeContextsAcrossPages: !!initConfiguration.storeContextsAcrossPages,
	    /**
	     * beacon payload max queue size implementation is 64kb
	     * ensure that we leave room for logs, rum and potential other users
	     */
	    batchBytesLimit: 16 * ONE_KIBI_BYTE,
	    eventRateLimiterThreshold: 3000,
	    maxTelemetryEventsPerPage: 15,
	    /**
	     * flush automatically, aim to be lower than ALB connection timeout
	     * to maximize connection reuse.
	     */
	    flushTimeout: 30 * ONE_SECOND,
	    /**
	     * Logs intake limit
	     */
	    batchMessagesLimit: 50,
	    messageBytesLimit: 256 * ONE_KIBI_BYTE
	  }, computeTransportConfiguration(initConfiguration));
	}
	function serializeConfiguration(initConfiguration) {
	  return {
	    session_sample_rate: initConfiguration.sessionSampleRate,
	    telemetry_sample_rate: initConfiguration.telemetrySampleRate,
	    telemetry_configuration_sample_rate: initConfiguration.telemetryConfigurationSampleRate,
	    telemetry_usage_sample_rate: initConfiguration.telemetryUsageSampleRate,
	    use_before_send: !!initConfiguration.beforeSend,
	    use_cross_site_session_cookie: initConfiguration.useCrossSiteSessionCookie,
	    use_partitioned_cross_site_session_cookie: initConfiguration.usePartitionedCrossSiteSessionCookie,
	    use_secure_session_cookie: initConfiguration.useSecureSessionCookie,
	    use_proxy: !!initConfiguration.proxy,
	    silent_multiple_init: initConfiguration.silentMultipleInit,
	    track_session_across_subdomains: initConfiguration.trackSessionAcrossSubdomains,
	    allow_fallback_to_local_storage: !!initConfiguration.allowFallbackToLocalStorage,
	    store_contexts_across_pages: !!initConfiguration.storeContextsAcrossPages,
	    allow_untrusted_events: !!initConfiguration.allowUntrustedEvents,
	    tracking_consent: initConfiguration.trackingConsent
	  };
	}

	/**
	 * Cross-browser stack trace computation.
	 *
	 * Reference implementation: https://github.com/csnover/TraceKit/blob/04530298073c3823de72deb0b97e7b38ca7bcb59/tracekit.js
	 */
	var UNKNOWN_FUNCTION = '?';
	function computeStackTrace(ex) {
	  var stack = [];
	  var stackProperty = tryToGetString(ex, 'stack');
	  var exString = String(ex);
	  if (stackProperty && startsWith(stackProperty, exString)) {
	    stackProperty = stackProperty.slice(exString.length);
	  }
	  if (stackProperty) {
	    stackProperty.split('\n').forEach(function (line) {
	      var stackFrame = parseChromeLine(line) || parseChromeAnonymousLine(line) || parseWinLine(line) || parseGeckoLine(line);
	      if (stackFrame) {
	        if (!stackFrame.func && stackFrame.line) {
	          stackFrame.func = UNKNOWN_FUNCTION;
	        }
	        stack.push(stackFrame);
	      }
	    });
	  }
	  return {
	    message: tryToGetString(ex, 'message'),
	    name: tryToGetString(ex, 'name'),
	    stack: stack
	  };
	}
	var fileUrl = '((?:file|https?|blob|chrome-extension|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)';
	var filePosition = '(?::(\\d+))';
	var CHROME_LINE_RE = new RegExp("^\\s*at (.*?) ?\\(".concat(fileUrl).concat(filePosition, "?").concat(filePosition, "?\\)?\\s*$"), 'i');
	var CHROME_EVAL_RE = new RegExp("\\((\\S*)".concat(filePosition).concat(filePosition, "\\)"));
	function parseChromeLine(line) {
	  var parts = CHROME_LINE_RE.exec(line);
	  if (!parts) {
	    return;
	  }
	  var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
	  var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
	  var submatch = CHROME_EVAL_RE.exec(parts[2]);
	  if (isEval && submatch) {
	    // throw out eval line/column and use top-most line/column number
	    parts[2] = submatch[1]; // url
	    parts[3] = submatch[2]; // line
	    parts[4] = submatch[3]; // column
	  }
	  return {
	    args: isNative ? [parts[2]] : [],
	    column: parts[4] ? +parts[4] : undefined,
	    func: parts[1] || UNKNOWN_FUNCTION,
	    line: parts[3] ? +parts[3] : undefined,
	    url: !isNative ? parts[2] : undefined
	  };
	}
	var CHROME_ANONYMOUS_FUNCTION_RE = new RegExp("^\\s*at ?".concat(fileUrl).concat(filePosition, "?").concat(filePosition, "??\\s*$"), 'i');
	function parseChromeAnonymousLine(line) {
	  var parts = CHROME_ANONYMOUS_FUNCTION_RE.exec(line);
	  if (!parts) {
	    return;
	  }
	  return {
	    args: [],
	    column: parts[3] ? +parts[3] : undefined,
	    func: UNKNOWN_FUNCTION,
	    line: parts[2] ? +parts[2] : undefined,
	    url: parts[1]
	  };
	}
	var WINJS_LINE_RE = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
	function parseWinLine(line) {
	  var parts = WINJS_LINE_RE.exec(line);
	  if (!parts) {
	    return;
	  }
	  return {
	    args: [],
	    column: parts[4] ? +parts[4] : undefined,
	    func: parts[1] || UNKNOWN_FUNCTION,
	    line: +parts[3],
	    url: parts[2]
	  };
	}
	var GECKO_LINE_RE = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
	var GECKO_EVAL_RE = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
	function parseGeckoLine(line) {
	  var parts = GECKO_LINE_RE.exec(line);
	  if (!parts) {
	    return;
	  }
	  var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
	  var submatch = GECKO_EVAL_RE.exec(parts[3]);
	  if (isEval && submatch) {
	    // throw out eval line/column and use top-most line number
	    parts[3] = submatch[1];
	    parts[4] = submatch[2];
	    parts[5] = undefined; // no column when eval
	  }
	  return {
	    args: parts[2] ? parts[2].split(',') : [],
	    column: parts[5] ? +parts[5] : undefined,
	    func: parts[1] || UNKNOWN_FUNCTION,
	    line: parts[4] ? +parts[4] : undefined,
	    url: parts[3]
	  };
	}
	function tryToGetString(candidate, property) {
	  if (typeof candidate !== 'object' || !candidate || !(property in candidate)) {
	    return undefined;
	  }
	  var value = candidate[property];
	  return typeof value === 'string' ? value : undefined;
	}
	function computeStackTraceFromOnErrorMessage(messageObj, url, line, column) {
	  var stack = [{
	    url: url,
	    column: column,
	    line: line
	  }];
	  var _a = tryToParseMessage(messageObj),
	    name = _a.name,
	    message = _a.message;
	  return {
	    name: name,
	    message: message,
	    stack: stack
	  };
	}
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
	var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;
	function tryToParseMessage(messageObj) {
	  var _a;
	  var name;
	  var message;
	  if ({}.toString.call(messageObj) === '[object String]') {
	    _a = ERROR_TYPES_RE.exec(messageObj), name = _a[1], message = _a[2];
	  }
	  return {
	    name: name,
	    message: message
	  };
	}

	/**
	 * Creates a stacktrace without SDK internal frames.
	 * Constraints:
	 * - Has to be called at the utmost position of the call stack.
	 * - No monitored function should encapsulate it, that is why we need to use callMonitored inside it.
	 */
	function createHandlingStack() {
	  /**
	   * Skip the two internal frames:
	   * - SDK API (console.error, ...)
	   * - this function
	   * in order to keep only the user calls
	   */
	  var internalFramesToSkip = 2;
	  var error = new Error();
	  var formattedStack;
	  // IE needs to throw the error to fill in the stack trace
	  if (!error.stack) {
	    try {
	      throw error;
	    } catch (_a) {
	    }
	  }
	  callMonitored(function () {
	    var stackTrace = computeStackTrace(error);
	    stackTrace.stack = stackTrace.stack.slice(internalFramesToSkip);
	    formattedStack = toStackTraceString(stackTrace);
	  });
	  return formattedStack;
	}
	function toStackTraceString(stack) {
	  var result = formatErrorMessage(stack);
	  stack.stack.forEach(function (frame) {
	    var func = frame.func === '?' ? '<anonymous>' : frame.func;
	    var args = frame.args && frame.args.length > 0 ? "(".concat(frame.args.join(', '), ")") : '';
	    var line = frame.line ? ":".concat(frame.line) : '';
	    var column = frame.line && frame.column ? ":".concat(frame.column) : '';
	    result += "\n  at ".concat(func).concat(args, " @ ").concat(frame.url).concat(line).concat(column);
	  });
	  return result;
	}
	function formatErrorMessage(stack) {
	  return "".concat(stack.name || 'Error', ": ").concat(stack.message);
	}

	/**
	 * Instruments a method on a object, calling the given callback before the original method is
	 * invoked. The callback receives an object with information about the method call.
	 *
	 * This function makes sure that we are "good citizens" regarding third party instrumentations: when
	 * removing the instrumentation, the original method is usually restored, but if a third party
	 * instrumentation was set after ours, we keep it in place and just replace our instrumentation with
	 * a noop.
	 *
	 * Note: it is generally better to instrument methods that are "owned" by the object instead of ones
	 * that are inherited from the prototype chain. Example:
	 * * do:    `instrumentMethod(Array.prototype, 'push', ...)`
	 * * don't: `instrumentMethod([], 'push', ...)`
	 *
	 * This method is also used to set event handler properties (ex: window.onerror = ...), as it has
	 * the same requirements as instrumenting a method:
	 * * if the event handler is already set by a third party, we need to call it and not just blindly
	 * override it.
	 * * if the event handler is set by a third party after us, we need to keep it in place when
	 * removing ours.
	 *
	 * @example
	 *
	 *  instrumentMethod(window, 'fetch', ({ target, parameters, onPostCall }) => {
	 *    console.log('Before calling fetch on', target, 'with parameters', parameters)
	 *
	 *    onPostCall((result) => {
	 *      console.log('After fetch calling on', target, 'with parameters', parameters, 'and result', result)
	 *    })
	 *  })
	 */
	function instrumentMethod(targetPrototype, method, onPreCall, _a) {
	  var _b = _a === void 0 ? {} : _a,
	    computeHandlingStack = _b.computeHandlingStack;
	  var original = targetPrototype[method];
	  if (typeof original !== 'function') {
	    if (method in targetPrototype && startsWith(method, 'on')) {
	      original = noop$2;
	    } else {
	      return {
	        stop: noop$2
	      };
	    }
	  }
	  var stopped = false;
	  var instrumentation = function instrumentation() {
	    if (stopped) {
	      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
	      return original.apply(this, arguments);
	    }
	    var parameters = arrayFrom(arguments);
	    var postCallCallback;
	    callMonitored(onPreCall, null, [{
	      target: this,
	      parameters: parameters,
	      onPostCall: function onPostCall(callback) {
	        postCallCallback = callback;
	      },
	      handlingStack: computeHandlingStack ? createHandlingStack() : undefined
	    }]);
	    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
	    var result = original.apply(this, parameters);
	    if (postCallCallback) {
	      callMonitored(postCallCallback, null, [result]);
	    }
	    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
	    return result;
	  };
	  targetPrototype[method] = instrumentation;
	  return {
	    stop: function stop() {
	      stopped = true;
	      // If the instrumentation has been removed by a third party, keep the last one
	      if (targetPrototype[method] === instrumentation) {
	        targetPrototype[method] = original;
	      }
	    }
	  };
	}

	// The maximum size of a single event is 256KiB. By default, we ensure that user-provided data
	// going through sanitize fits inside our events, while leaving room for other contexts, metadata, ...
	var SANITIZE_DEFAULT_MAX_CHARACTER_COUNT = 220 * ONE_KIBI_BYTE;
	// Symbol for the root element of the JSONPath used for visited objects
	var JSON_PATH_ROOT_ELEMENT = '$';
	// When serializing (using JSON.stringify) a key of an object, { key: 42 } gets wrapped in quotes as "key".
	// With the separator (:), we need to add 3 characters to the count.
	var KEY_DECORATION_LENGTH = 3;
	function sanitize(source, maxCharacterCount) {
	  if (maxCharacterCount === void 0) {
	    maxCharacterCount = SANITIZE_DEFAULT_MAX_CHARACTER_COUNT;
	  }
	  // Unbind any toJSON function we may have on [] or {} prototypes
	  var restoreObjectPrototypeToJson = detachToJsonMethod(Object.prototype);
	  var restoreArrayPrototypeToJson = detachToJsonMethod(Array.prototype);
	  // Initial call to sanitizeProcessor - will populate containerQueue if source is an Array or a plain Object
	  var containerQueue = [];
	  var visitedObjectsWithPath = new WeakMap();
	  var sanitizedData = sanitizeProcessor(source, JSON_PATH_ROOT_ELEMENT, undefined, containerQueue, visitedObjectsWithPath);
	  var serializedSanitizedData = JSON.stringify(sanitizedData);
	  var accumulatedCharacterCount = serializedSanitizedData ? serializedSanitizedData.length : 0;
	  if (accumulatedCharacterCount > maxCharacterCount) {
	    warnOverCharacterLimit(maxCharacterCount, 'discarded', source);
	    return undefined;
	  }
	  while (containerQueue.length > 0 && accumulatedCharacterCount < maxCharacterCount) {
	    var containerToProcess = containerQueue.shift();
	    var separatorLength = 0; // 0 for the first element, 1 for subsequent elements
	    // Arrays and Objects have to be handled distinctly to ensure
	    // we do not pick up non-numerical properties from Arrays
	    if (Array.isArray(containerToProcess.source)) {
	      for (var key = 0; key < containerToProcess.source.length; key++) {
	        var targetData = sanitizeProcessor(containerToProcess.source[key], containerToProcess.path, key, containerQueue, visitedObjectsWithPath);
	        if (targetData !== undefined) {
	          accumulatedCharacterCount += JSON.stringify(targetData).length;
	        } else {
	          // When an element of an Array (targetData) is undefined, it is serialized as null:
	          // JSON.stringify([undefined]) => '[null]' - This accounts for 4 characters
	          accumulatedCharacterCount += 4;
	        }
	        accumulatedCharacterCount += separatorLength;
	        separatorLength = 1;
	        if (accumulatedCharacterCount > maxCharacterCount) {
	          warnOverCharacterLimit(maxCharacterCount, 'truncated', source);
	          break;
	        }
	        containerToProcess.target[key] = targetData;
	      }
	    } else {
	      for (var key in containerToProcess.source) {
	        if (Object.prototype.hasOwnProperty.call(containerToProcess.source, key)) {
	          var targetData = sanitizeProcessor(containerToProcess.source[key], containerToProcess.path, key, containerQueue, visitedObjectsWithPath);
	          // When a property of an object has an undefined value, it will be dropped during serialization:
	          // JSON.stringify({a:undefined}) => '{}'
	          if (targetData !== undefined) {
	            accumulatedCharacterCount += JSON.stringify(targetData).length + separatorLength + key.length + KEY_DECORATION_LENGTH;
	            separatorLength = 1;
	          }
	          if (accumulatedCharacterCount > maxCharacterCount) {
	            warnOverCharacterLimit(maxCharacterCount, 'truncated', source);
	            break;
	          }
	          containerToProcess.target[key] = targetData;
	        }
	      }
	    }
	  }
	  // Rebind detached toJSON functions
	  restoreObjectPrototypeToJson();
	  restoreArrayPrototypeToJson();
	  return sanitizedData;
	}
	/**
	 * Internal function to factorize the process common to the
	 * initial call to sanitize, and iterations for Arrays and Objects
	 *
	 */
	function sanitizeProcessor(source, parentPath, key, queue, visitedObjectsWithPath) {
	  // Start by handling toJSON, as we want to sanitize its output
	  var sourceToSanitize = tryToApplyToJSON(source);
	  if (!sourceToSanitize || typeof sourceToSanitize !== 'object') {
	    return sanitizePrimitivesAndFunctions(sourceToSanitize);
	  }
	  var sanitizedSource = sanitizeObjects(sourceToSanitize);
	  if (sanitizedSource !== '[Object]' && sanitizedSource !== '[Array]' && sanitizedSource !== '[Error]') {
	    return sanitizedSource;
	  }
	  // Handle potential cyclic references
	  // We need to use source as sourceToSanitize could be a reference to a new object
	  // At this stage, we know the source is an object type
	  var sourceAsObject = source;
	  if (visitedObjectsWithPath.has(sourceAsObject)) {
	    return "[Reference seen at ".concat(visitedObjectsWithPath.get(sourceAsObject), "]");
	  }
	  // Add processed source to queue
	  var currentPath = key !== undefined ? "".concat(parentPath, ".").concat(key) : parentPath;
	  var target = Array.isArray(sourceToSanitize) ? [] : {};
	  visitedObjectsWithPath.set(sourceAsObject, currentPath);
	  queue.push({
	    source: sourceToSanitize,
	    target: target,
	    path: currentPath
	  });
	  return target;
	}
	/**
	 * Handles sanitization of simple, non-object types
	 *
	 */
	function sanitizePrimitivesAndFunctions(value) {
	  // BigInt cannot be serialized by JSON.stringify(), convert it to a string representation
	  if (typeof value === 'bigint') {
	    return "[BigInt] ".concat(value.toString());
	  }
	  // Functions cannot be serialized by JSON.stringify(). Moreover, if a faulty toJSON is present, it needs to be converted
	  // so it won't prevent stringify from serializing later
	  if (typeof value === 'function') {
	    return "[Function] ".concat(value.name || 'unknown');
	  }
	  // JSON.stringify() does not serialize symbols.
	  if (typeof value === 'symbol') {
	    return "[Symbol] ".concat(value.description || value.toString());
	  }
	  return value;
	}
	/**
	 * Handles sanitization of object types
	 *
	 * LIMITATIONS
	 * - If a class defines a toStringTag Symbol, it will fall in the catch-all method and prevent enumeration of properties.
	 * To avoid this, a toJSON method can be defined.
	 * - IE11 does not return a distinct type for objects such as Map, WeakMap, ... These objects will pass through and their
	 * properties enumerated if any.
	 *
	 */
	function sanitizeObjects(value) {
	  try {
	    // Handle events - Keep a simple implementation to avoid breaking changes
	    if (value instanceof Event) {
	      return {
	        isTrusted: value.isTrusted
	      };
	    }
	    // Handle all remaining object types in a generic way
	    var result = Object.prototype.toString.call(value);
	    var match = result.match(/\[object (.*)\]/);
	    if (match && match[1]) {
	      return "[".concat(match[1], "]");
	    }
	  } catch (_a) {
	    // If the previous serialization attempts failed, and we cannot convert using
	    // Object.prototype.toString, declare the value unserializable
	  }
	  return '[Unserializable]';
	}
	/**
	 * Checks if a toJSON function exists and tries to execute it
	 *
	 */
	function tryToApplyToJSON(value) {
	  var object = value;
	  if (object && typeof object.toJSON === 'function') {
	    try {
	      return object.toJSON();
	    } catch (_a) {
	      // If toJSON fails, we continue by trying to serialize the value manually
	    }
	  }
	  return value;
	}
	/**
	 * Helper function to display the warning when the accumulated character count is over the limit
	 */
	function warnOverCharacterLimit(maxCharacterCount, changeType, source) {
	  display.warn("The data provided has been ".concat(changeType, " as it is over the limit of ").concat(maxCharacterCount, " characters:"), source);
	}

	var NO_ERROR_STACK_PRESENT_MESSAGE = 'No stack, consider using an instance of Error';
	function computeRawError(_a) {
	  var stackTrace = _a.stackTrace,
	    originalError = _a.originalError,
	    handlingStack = _a.handlingStack,
	    startClocks = _a.startClocks,
	    nonErrorPrefix = _a.nonErrorPrefix,
	    source = _a.source,
	    handling = _a.handling;
	  var isErrorInstance = isError(originalError);
	  var message = computeMessage(stackTrace, isErrorInstance, nonErrorPrefix, originalError);
	  var stack = hasUsableStack(isErrorInstance, stackTrace) ? toStackTraceString(stackTrace) : NO_ERROR_STACK_PRESENT_MESSAGE;
	  var causes = isErrorInstance ? flattenErrorCauses(originalError, source) : undefined;
	  var type = stackTrace ? stackTrace.name : undefined;
	  var fingerprint = tryToGetFingerprint(originalError);
	  return {
	    startClocks: startClocks,
	    source: source,
	    handling: handling,
	    handlingStack: handlingStack,
	    originalError: originalError,
	    type: type,
	    message: message,
	    stack: stack,
	    causes: causes,
	    fingerprint: fingerprint
	  };
	}
	function computeMessage(stackTrace, isErrorInstance, nonErrorPrefix, originalError) {
	  // Favor stackTrace message only if tracekit has really been able to extract something meaningful (message + name)
	  // TODO rework tracekit integration to avoid scattering error building logic
	  return (stackTrace === null || stackTrace === void 0 ? void 0 : stackTrace.message) && (stackTrace === null || stackTrace === void 0 ? void 0 : stackTrace.name) ? stackTrace.message : !isErrorInstance ? "".concat(nonErrorPrefix, " ").concat(jsonStringify(sanitize(originalError))) : 'Empty message';
	}
	function hasUsableStack(isErrorInstance, stackTrace) {
	  if (stackTrace === undefined) {
	    return false;
	  }
	  if (isErrorInstance) {
	    return true;
	  }
	  // handle cases where tracekit return stack = [] or stack = [{url: undefined, line: undefined, column: undefined}]
	  // TODO rework tracekit integration to avoid generating those unusable stack
	  return stackTrace.stack.length > 0 && (stackTrace.stack.length > 1 || stackTrace.stack[0].url !== undefined);
	}
	function tryToGetFingerprint(originalError) {
	  return isError(originalError) && 'dd_fingerprint' in originalError ? String(originalError.dd_fingerprint) : undefined;
	}
	function getFileFromStackTraceString(stack) {
	  var _a;
	  return (_a = /@ (.+)/.exec(stack)) === null || _a === void 0 ? void 0 : _a[1];
	}
	function isError(error) {
	  return error instanceof Error || Object.prototype.toString.call(error) === '[object Error]';
	}
	function flattenErrorCauses(error, parentSource) {
	  var currentError = error;
	  var causes = [];
	  while (isError(currentError === null || currentError === void 0 ? void 0 : currentError.cause) && causes.length < 10) {
	    var stackTrace = computeStackTrace(currentError.cause);
	    causes.push({
	      message: currentError.cause.message,
	      source: parentSource,
	      type: stackTrace === null || stackTrace === void 0 ? void 0 : stackTrace.name,
	      stack: stackTrace && toStackTraceString(stackTrace)
	    });
	    currentError = currentError.cause;
	  }
	  return causes.length ? causes : undefined;
	}

	var ErrorSource = {
	  AGENT: 'agent',
	  CONSOLE: 'console',
	  CUSTOM: 'custom',
	  LOGGER: 'logger',
	  NETWORK: 'network',
	  SOURCE: 'source',
	  REPORT: 'report'
	};

	function trackRuntimeError(errorObservable) {
	  var handleRuntimeError = function handleRuntimeError(stackTrace, originalError) {
	    var rawError = computeRawError({
	      stackTrace: stackTrace,
	      originalError: originalError,
	      startClocks: clocksNow(),
	      nonErrorPrefix: "Uncaught" /* NonErrorPrefix.UNCAUGHT */,
	      source: ErrorSource.SOURCE,
	      handling: "unhandled" /* ErrorHandling.UNHANDLED */
	    });
	    errorObservable.notify(rawError);
	  };
	  var stopInstrumentingOnError = instrumentOnError(handleRuntimeError).stop;
	  var stopInstrumentingOnUnhandledRejection = instrumentUnhandledRejection(handleRuntimeError).stop;
	  return {
	    stop: function stop() {
	      stopInstrumentingOnError();
	      stopInstrumentingOnUnhandledRejection();
	    }
	  };
	}
	function instrumentOnError(callback) {
	  return instrumentMethod(window, 'onerror', function (_a) {
	    var _b = _a.parameters,
	      messageObj = _b[0],
	      url = _b[1],
	      line = _b[2],
	      column = _b[3],
	      errorObj = _b[4];
	    var stackTrace;
	    if (isError(errorObj)) {
	      stackTrace = computeStackTrace(errorObj);
	    } else {
	      stackTrace = computeStackTraceFromOnErrorMessage(messageObj, url, line, column);
	    }
	    callback(stackTrace, errorObj !== null && errorObj !== void 0 ? errorObj : messageObj);
	  });
	}
	function instrumentUnhandledRejection(callback) {
	  return instrumentMethod(window, 'onunhandledrejection', function (_a) {
	    var e = _a.parameters[0];
	    var reason = e.reason || 'Empty reason';
	    var stack = computeStackTrace(reason);
	    callback(stack, reason);
	  });
	}

	function makePublicApi(stub) {
	  var publicApi = assign({
	    version: "5.34.1",
	    // This API method is intentionally not monitored, since the only thing executed is the
	    // user-provided 'callback'.  All SDK usages executed in the callback should be monitored, and
	    // we don't want to interfere with the user uncaught exceptions.
	    onReady: function onReady(callback) {
	      callback();
	    }
	  }, stub);
	  // Add a "hidden" property to set debug mode. We define it that way to hide it
	  // as much as possible but of course it's not a real protection.
	  Object.defineProperty(publicApi, '_setDebug', {
	    get: function get() {
	      return setDebugMode;
	    },
	    enumerable: false
	  });
	  return publicApi;
	}
	function defineGlobal(global, name, api) {
	  var existingGlobalVariable = global[name];
	  if (existingGlobalVariable && !existingGlobalVariable.q && existingGlobalVariable.version) {
	    display.warn('SDK is loaded more than once. This is unsupported and might have unexpected behavior.');
	  }
	  global[name] = api;
	  if (existingGlobalVariable && existingGlobalVariable.q) {
	    existingGlobalVariable.q.forEach(function (fn) {
	      return catchUserErrors(fn, 'onReady callback threw an error:')();
	    });
	  }
	}

	function displayAlreadyInitializedError(sdkName, initConfiguration) {
	  if (!initConfiguration.silentMultipleInit) {
	    display.error("".concat(sdkName, " is already initialized."));
	  }
	}

	/**
	 * Add an event listener to an event target object (Window, Element, mock object...).  This provides
	 * a few conveniences compared to using `element.addEventListener` directly:
	 *
	 * * supports IE11 by: using an option object only if needed and emulating the `once` option
	 *
	 * * wraps the listener with a `monitor` function
	 *
	 * * returns a `stop` function to remove the listener
	 */
	function addEventListener(configuration, eventTarget, eventName, listener, options) {
	  return addEventListeners(configuration, eventTarget, [eventName], listener, options);
	}
	/**
	 * Add event listeners to an event target object (Window, Element, mock object...).  This provides
	 * a few conveniences compared to using `element.addEventListener` directly:
	 *
	 * * supports IE11 by: using an option object only if needed and emulating the `once` option
	 *
	 * * wraps the listener with a `monitor` function
	 *
	 * * returns a `stop` function to remove the listener
	 *
	 * * with `once: true`, the listener will be called at most once, even if different events are listened
	 */
	function addEventListeners(configuration, eventTarget, eventNames, listener, _a) {
	  var _b = _a === void 0 ? {} : _a,
	    once = _b.once,
	    capture = _b.capture,
	    passive = _b.passive;
	  var listenerWithMonitor = monitor(function (event) {
	    if (!event.isTrusted && !event.__ddIsTrusted && !configuration.allowUntrustedEvents) {
	      return;
	    }
	    if (once) {
	      stop();
	    }
	    listener(event);
	  });
	  var options = passive ? {
	    capture: capture,
	    passive: passive
	  } : capture;
	  // Use the window.EventTarget.prototype when possible to avoid wrong overrides (e.g: https://github.com/salesforce/lwc/issues/1824)
	  var listenerTarget = window.EventTarget && eventTarget instanceof EventTarget ? window.EventTarget.prototype : eventTarget;
	  var add = getZoneJsOriginalValue(listenerTarget, 'addEventListener');
	  eventNames.forEach(function (eventName) {
	    return add.call(eventTarget, eventName, listenerWithMonitor, options);
	  });
	  function stop() {
	    var remove = getZoneJsOriginalValue(listenerTarget, 'removeEventListener');
	    eventNames.forEach(function (eventName) {
	      return remove.call(eventTarget, eventName, listenerWithMonitor, options);
	    });
	  }
	  return {
	    stop: stop
	  };
	}

	var RawReportType = {
	  intervention: 'intervention',
	  deprecation: 'deprecation',
	  cspViolation: 'csp_violation'
	};
	function initReportObservable(configuration, apis) {
	  var observables = [];
	  if (includes(apis, RawReportType.cspViolation)) {
	    observables.push(createCspViolationReportObservable(configuration));
	  }
	  var reportTypes = apis.filter(function (api) {
	    return api !== RawReportType.cspViolation;
	  });
	  if (reportTypes.length) {
	    observables.push(createReportObservable(reportTypes));
	  }
	  return mergeObservables.apply(void 0, observables);
	}
	function createReportObservable(reportTypes) {
	  return new Observable(function (observable) {
	    if (!window.ReportingObserver) {
	      return;
	    }
	    var handleReports = monitor(function (reports, _) {
	      return reports.forEach(function (report) {
	        return observable.notify(buildRawReportErrorFromReport(report));
	      });
	    });
	    var observer = new window.ReportingObserver(handleReports, {
	      types: reportTypes,
	      buffered: true
	    });
	    observer.observe();
	    return function () {
	      observer.disconnect();
	    };
	  });
	}
	function createCspViolationReportObservable(configuration) {
	  return new Observable(function (observable) {
	    var stop = addEventListener(configuration, document, "securitypolicyviolation" /* DOM_EVENT.SECURITY_POLICY_VIOLATION */, function (event) {
	      observable.notify(buildRawReportErrorFromCspViolation(event));
	    }).stop;
	    return stop;
	  });
	}
	function buildRawReportErrorFromReport(report) {
	  var type = report.type,
	    body = report.body;
	  return buildRawReportError({
	    type: body.id,
	    message: "".concat(type, ": ").concat(body.message),
	    originalError: report,
	    stack: buildStack(body.id, body.message, body.sourceFile, body.lineNumber, body.columnNumber)
	  });
	}
	function buildRawReportErrorFromCspViolation(event) {
	  var message = "'".concat(event.blockedURI, "' blocked by '").concat(event.effectiveDirective, "' directive");
	  return buildRawReportError({
	    type: event.effectiveDirective,
	    message: "".concat(RawReportType.cspViolation, ": ").concat(message),
	    originalError: event,
	    csp: {
	      disposition: event.disposition
	    },
	    stack: buildStack(event.effectiveDirective, event.originalPolicy ? "".concat(message, " of the policy \"").concat(safeTruncate(event.originalPolicy, 100, '...'), "\"") : 'no policy', event.sourceFile, event.lineNumber, event.columnNumber)
	  });
	}
	function buildRawReportError(partial) {
	  return assign({
	    startClocks: clocksNow(),
	    source: ErrorSource.REPORT,
	    handling: "unhandled" /* ErrorHandling.UNHANDLED */
	  }, partial);
	}
	function buildStack(name, message, sourceFile, lineNumber, columnNumber) {
	  return sourceFile ? toStackTraceString({
	    name: name,
	    message: message,
	    stack: [{
	      func: '?',
	      url: sourceFile,
	      line: lineNumber !== null && lineNumber !== void 0 ? lineNumber : undefined,
	      column: columnNumber !== null && columnNumber !== void 0 ? columnNumber : undefined
	    }]
	  }) : undefined;
	}

	function sendToExtension(type, payload) {
	  var callback = window.__ddBrowserSdkExtensionCallback;
	  if (callback) {
	    callback({
	      type: type,
	      payload: payload
	    });
	  }
	}

	/**
	 * Iterate over source and affect its sub values into destination, recursively.
	 * If the source and destination can't be merged, return source.
	 */
	function mergeInto(destination, source, circularReferenceChecker) {
	  if (circularReferenceChecker === void 0) {
	    circularReferenceChecker = createCircularReferenceChecker();
	  }
	  // ignore the source if it is undefined
	  if (source === undefined) {
	    return destination;
	  }
	  if (typeof source !== 'object' || source === null) {
	    // primitive values - just return source
	    return source;
	  } else if (source instanceof Date) {
	    return new Date(source.getTime());
	  } else if (source instanceof RegExp) {
	    var flags = source.flags ||
	    // old browsers compatibility
	    [source.global ? 'g' : '', source.ignoreCase ? 'i' : '', source.multiline ? 'm' : '', source.sticky ? 'y' : '', source.unicode ? 'u' : ''].join('');
	    return new RegExp(source.source, flags);
	  }
	  if (circularReferenceChecker.hasAlreadyBeenSeen(source)) {
	    // remove circular references
	    return undefined;
	  } else if (Array.isArray(source)) {
	    var merged_1 = Array.isArray(destination) ? destination : [];
	    for (var i = 0; i < source.length; ++i) {
	      merged_1[i] = mergeInto(merged_1[i], source[i], circularReferenceChecker);
	    }
	    return merged_1;
	  }
	  var merged = getType(destination) === 'object' ? destination : {};
	  for (var key in source) {
	    if (Object.prototype.hasOwnProperty.call(source, key)) {
	      merged[key] = mergeInto(merged[key], source[key], circularReferenceChecker);
	    }
	  }
	  return merged;
	}
	/**
	 * A simplistic implementation of a deep clone algorithm.
	 * Caveats:
	 * - It doesn't maintain prototype chains - don't use with instances of custom classes.
	 * - It doesn't handle Map and Set
	 */
	function deepClone(value) {
	  return mergeInto(undefined, value);
	}
	function combine() {
	  var sources = [];
	  for (var _i = 0; _i < arguments.length; _i++) {
	    sources[_i] = arguments[_i];
	  }
	  var destination;
	  for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
	    var source = sources_1[_a];
	    // Ignore any undefined or null sources.
	    if (source === undefined || source === null) {
	      continue;
	    }
	    destination = mergeInto(destination, source);
	  }
	  return destination;
	}
	function createCircularReferenceChecker() {
	  if (typeof WeakSet !== 'undefined') {
	    var set_1 = new WeakSet();
	    return {
	      hasAlreadyBeenSeen: function hasAlreadyBeenSeen(value) {
	        var has = set_1.has(value);
	        if (!has) {
	          set_1.add(value);
	        }
	        return has;
	      }
	    };
	  }
	  var array = [];
	  return {
	    hasAlreadyBeenSeen: function hasAlreadyBeenSeen(value) {
	      var has = array.indexOf(value) >= 0;
	      if (!has) {
	        array.push(value);
	      }
	      return has;
	    }
	  };
	}

	function getConnectivity() {
	  var _a;
	  var navigator = window.navigator;
	  return {
	    status: navigator.onLine ? 'connected' : 'not_connected',
	    interfaces: navigator.connection && navigator.connection.type ? [navigator.connection.type] : undefined,
	    effective_type: (_a = navigator.connection) === null || _a === void 0 ? void 0 : _a.effectiveType
	  };
	}

	function removeDuplicates(array) {
	  var set = new Set();
	  array.forEach(function (item) {
	    return set.add(item);
	  });
	  return arrayFrom(set);
	}
	function removeItem(array, item) {
	  var index = array.indexOf(item);
	  if (index >= 0) {
	    array.splice(index, 1);
	  }
	}

	var BUFFER_LIMIT = 500;
	function createBoundedBuffer() {
	  var buffer = [];
	  var add = function add(callback) {
	    var length = buffer.push(callback);
	    if (length > BUFFER_LIMIT) {
	      buffer.splice(0, 1);
	    }
	  };
	  var remove = function remove(callback) {
	    removeItem(buffer, callback);
	  };
	  var drain = function drain(arg) {
	    buffer.forEach(function (callback) {
	      return callback(arg);
	    });
	    buffer.length = 0;
	  };
	  return {
	    add: add,
	    remove: remove,
	    drain: drain
	  };
	}

	var TelemetryType = {
	  log: 'log',
	  configuration: 'configuration',
	  usage: 'usage'
	};

	var ALLOWED_FRAME_URLS = ['https://www.datadoghq-browser-agent.com', 'https://www.datad0g-browser-agent.com', 'https://d3uc069fcn7uxw.cloudfront.net', 'https://d20xtzwzcl0ceb.cloudfront.net', 'http://localhost', '<anonymous>'];
	var TELEMETRY_EXCLUDED_SITES = [INTAKE_SITE_US1_FED];
	// eslint-disable-next-line local-rules/disallow-side-effects
	var preStartTelemetryBuffer = createBoundedBuffer();
	var _onRawTelemetryEventCollected2 = function onRawTelemetryEventCollected(event) {
	  preStartTelemetryBuffer.add(function () {
	    return _onRawTelemetryEventCollected2(event);
	  });
	};
	function startTelemetry(telemetryService, configuration) {
	  var _a;
	  var contextProvider;
	  var observable = new Observable();
	  var alreadySentEvents = new Set();
	  var telemetryEnabled = !includes(TELEMETRY_EXCLUDED_SITES, configuration.site) && performDraw(configuration.telemetrySampleRate);
	  var telemetryEnabledPerType = (_a = {}, _a[TelemetryType.log] = telemetryEnabled, _a[TelemetryType.configuration] = telemetryEnabled && performDraw(configuration.telemetryConfigurationSampleRate), _a[TelemetryType.usage] = telemetryEnabled && performDraw(configuration.telemetryUsageSampleRate), _a);
	  var runtimeEnvInfo = getRuntimeEnvInfo();
	  _onRawTelemetryEventCollected2 = function _onRawTelemetryEventCollected(rawEvent) {
	    var stringifiedEvent = jsonStringify(rawEvent);
	    if (telemetryEnabledPerType[rawEvent.type] && alreadySentEvents.size < configuration.maxTelemetryEventsPerPage && !alreadySentEvents.has(stringifiedEvent)) {
	      var event_1 = toTelemetryEvent(telemetryService, rawEvent, runtimeEnvInfo);
	      observable.notify(event_1);
	      sendToExtension('telemetry', event_1);
	      alreadySentEvents.add(stringifiedEvent);
	    }
	  };
	  startMonitorErrorCollection(addTelemetryError);
	  function toTelemetryEvent(telemetryService, event, runtimeEnvInfo) {
	    return combine({
	      type: 'telemetry',
	      date: timeStampNow(),
	      service: telemetryService,
	      version: "5.34.1",
	      source: 'browser',
	      _dd: {
	        format_version: 2
	      },
	      telemetry: combine(event, {
	        runtime_env: runtimeEnvInfo,
	        connectivity: getConnectivity(),
	        sdk_setup: "npm"
	      }),
	      experimental_features: arrayFrom(getExperimentalFeatures())
	    }, contextProvider !== undefined ? contextProvider() : {});
	  }
	  return {
	    setContextProvider: function setContextProvider(provider) {
	      contextProvider = provider;
	    },
	    observable: observable,
	    enabled: telemetryEnabled
	  };
	}
	function getRuntimeEnvInfo() {
	  return {
	    is_local_file: window.location.protocol === 'file:',
	    is_worker: 'WorkerGlobalScope' in self
	  };
	}
	// need to be called after telemetry context is provided and observers are registered
	function drainPreStartTelemetry() {
	  preStartTelemetryBuffer.drain();
	}
	/**
	 * Avoid mixing telemetry events from different data centers
	 * but keep replicating staging events for reliability
	 */
	function isTelemetryReplicationAllowed(configuration) {
	  return configuration.site === INTAKE_SITE_STAGING;
	}
	function addTelemetryDebug(message, context) {
	  displayIfDebugEnabled(ConsoleApiName.debug, message, context);
	  _onRawTelemetryEventCollected2(assign({
	    type: TelemetryType.log,
	    message: message,
	    status: "debug" /* StatusType.debug */
	  }, context));
	}
	function addTelemetryError(e, context) {
	  _onRawTelemetryEventCollected2(assign({
	    type: TelemetryType.log,
	    status: "error" /* StatusType.error */
	  }, formatError(e), context));
	}
	function addTelemetryConfiguration(configuration) {
	  _onRawTelemetryEventCollected2({
	    type: TelemetryType.configuration,
	    configuration: configuration
	  });
	}
	function addTelemetryUsage(usage) {
	  _onRawTelemetryEventCollected2({
	    type: TelemetryType.usage,
	    usage: usage
	  });
	}
	function formatError(e) {
	  if (isError(e)) {
	    var stackTrace = computeStackTrace(e);
	    return {
	      error: {
	        kind: stackTrace.name,
	        stack: toStackTraceString(scrubCustomerFrames(stackTrace))
	      },
	      message: stackTrace.message
	    };
	  }
	  return {
	    error: {
	      stack: NO_ERROR_STACK_PRESENT_MESSAGE
	    },
	    message: "".concat("Uncaught" /* NonErrorPrefix.UNCAUGHT */, " ").concat(jsonStringify(e))
	  };
	}
	function scrubCustomerFrames(stackTrace) {
	  stackTrace.stack = stackTrace.stack.filter(function (frame) {
	    return !frame.url || ALLOWED_FRAME_URLS.some(function (allowedFrameUrl) {
	      return startsWith(frame.url, allowedFrameUrl);
	    });
	  });
	  return stackTrace;
	}

	var END_OF_TIMES = Infinity;
	var CLEAR_OLD_VALUES_INTERVAL = ONE_MINUTE;
	function createValueHistory(_a) {
	  var expireDelay = _a.expireDelay,
	    maxEntries = _a.maxEntries;
	  var entries = [];
	  var clearOldValuesInterval = setInterval$1(function () {
	    return clearOldValues();
	  }, CLEAR_OLD_VALUES_INTERVAL);
	  function clearOldValues() {
	    var oldTimeThreshold = relativeNow() - expireDelay;
	    while (entries.length > 0 && entries[entries.length - 1].endTime < oldTimeThreshold) {
	      entries.pop();
	    }
	  }
	  /**
	   * Add a value to the history associated with a start time. Returns a reference to this newly
	   * added entry that can be removed or closed.
	   */
	  function add(value, startTime) {
	    var entry = {
	      value: value,
	      startTime: startTime,
	      endTime: END_OF_TIMES,
	      remove: function remove() {
	        removeItem(entries, entry);
	      },
	      close: function close(endTime) {
	        entry.endTime = endTime;
	      }
	    };
	    if (maxEntries && entries.length >= maxEntries) {
	      entries.pop();
	    }
	    entries.unshift(entry);
	    return entry;
	  }
	  /**
	   * Return the latest value that was active during `startTime`, or the currently active value
	   * if no `startTime` is provided. This method assumes that entries are not overlapping.
	   *
	   * If `option.returnInactive` is true, returns the value at `startTime` (active or not).
	   */
	  function find(startTime, options) {
	    if (startTime === void 0) {
	      startTime = END_OF_TIMES;
	    }
	    if (options === void 0) {
	      options = {
	        returnInactive: false
	      };
	    }
	    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
	      var entry = entries_1[_i];
	      if (entry.startTime <= startTime) {
	        if (options.returnInactive || startTime <= entry.endTime) {
	          return entry.value;
	        }
	        break;
	      }
	    }
	  }
	  /**
	   * Helper function to close the currently active value, if any. This method assumes that entries
	   * are not overlapping.
	   */
	  function closeActive(endTime) {
	    var latestEntry = entries[0];
	    if (latestEntry && latestEntry.endTime === END_OF_TIMES) {
	      latestEntry.close(endTime);
	    }
	  }
	  /**
	   * Return all values with an active period overlapping with the duration,
	   * or all values that were active during `startTime` if no duration is provided,
	   * or all currently active values if no `startTime` is provided.
	   */
	  function findAll(startTime, duration) {
	    if (startTime === void 0) {
	      startTime = END_OF_TIMES;
	    }
	    if (duration === void 0) {
	      duration = 0;
	    }
	    var endTime = addDuration(startTime, duration);
	    return entries.filter(function (entry) {
	      return entry.startTime <= endTime && startTime <= entry.endTime;
	    }).map(function (entry) {
	      return entry.value;
	    });
	  }
	  /**
	   * Remove all entries from this collection.
	   */
	  function reset() {
	    entries = [];
	  }
	  /**
	   * Stop internal garbage collection of past entries.
	   */
	  function stop() {
	    clearInterval$1(clearOldValuesInterval);
	  }
	  return {
	    add: add,
	    find: find,
	    closeActive: closeActive,
	    findAll: findAll,
	    reset: reset,
	    stop: stop
	  };
	}

	var VISIBILITY_CHECK_DELAY = ONE_MINUTE;
	var SESSION_CONTEXT_TIMEOUT_DELAY = SESSION_TIME_OUT_DELAY;
	function startSessionManager(configuration, productKey, computeSessionState, trackingConsentState) {
	  var renewObservable = new Observable();
	  var expireObservable = new Observable();
	  // TODO - Improve configuration type and remove assertion
	  var sessionStore = startSessionStore(configuration.sessionStoreStrategyType, productKey, computeSessionState);
	  var sessionContextHistory = createValueHistory({
	    expireDelay: SESSION_CONTEXT_TIMEOUT_DELAY
	  });
	  sessionStore.renewObservable.subscribe(function () {
	    sessionContextHistory.add(buildSessionContext(), relativeNow());
	    renewObservable.notify();
	  });
	  sessionStore.expireObservable.subscribe(function () {
	    expireObservable.notify();
	    sessionContextHistory.closeActive(relativeNow());
	  });
	  // We expand/renew session unconditionally as tracking consent is always granted when the session
	  // manager is started.
	  sessionStore.expandOrRenewSession();
	  sessionContextHistory.add(buildSessionContext(), clocksOrigin().relative);
	  trackingConsentState.observable.subscribe(function () {
	    if (trackingConsentState.isGranted()) {
	      sessionStore.expandOrRenewSession();
	    } else {
	      sessionStore.expire();
	    }
	  });
	  trackActivity(configuration, function () {
	    if (trackingConsentState.isGranted()) {
	      sessionStore.expandOrRenewSession();
	    }
	  });
	  trackVisibility(configuration, function () {
	    return sessionStore.expandSession();
	  });
	  trackResume(configuration, function () {
	    return sessionStore.restartSession();
	  });
	  function buildSessionContext() {
	    return {
	      id: sessionStore.getSession().id,
	      trackingType: sessionStore.getSession()[productKey],
	      isReplayForced: !!sessionStore.getSession().forcedReplay,
	      anonymousId: sessionStore.getSession().anonymousId
	    };
	  }
	  return {
	    findSession: function findSession(startTime, options) {
	      return sessionContextHistory.find(startTime, options);
	    },
	    renewObservable: renewObservable,
	    expireObservable: expireObservable,
	    sessionStateUpdateObservable: sessionStore.sessionStateUpdateObservable,
	    expire: sessionStore.expire,
	    updateSessionState: sessionStore.updateSessionState
	  };
	}
	function trackActivity(configuration, expandOrRenewSession) {
	  addEventListeners(configuration, window, ["click" /* DOM_EVENT.CLICK */, "touchstart" /* DOM_EVENT.TOUCH_START */, "keydown" /* DOM_EVENT.KEY_DOWN */, "scroll" /* DOM_EVENT.SCROLL */], expandOrRenewSession, {
	    capture: true,
	    passive: true
	  }).stop;
	}
	function trackVisibility(configuration, expandSession) {
	  var expandSessionWhenVisible = function expandSessionWhenVisible() {
	    if (document.visibilityState === 'visible') {
	      expandSession();
	    }
	  };
	  addEventListener(configuration, document, "visibilitychange" /* DOM_EVENT.VISIBILITY_CHANGE */, expandSessionWhenVisible).stop;
	  setInterval$1(expandSessionWhenVisible, VISIBILITY_CHECK_DELAY);
	}
	function trackResume(configuration, cb) {
	  addEventListener(configuration, window, "resume" /* DOM_EVENT.RESUME */, cb, {
	    capture: true
	  }).stop;
	}

	function isServerError(status) {
	  return status >= 500;
	}
	function tryToClone(response) {
	  try {
	    return response.clone();
	  } catch (_a) {
	    // clone can throw if the response has already been used by another instrumentation or is disturbed
	    return;
	  }
	}

	var MAX_ONGOING_BYTES_COUNT = 80 * ONE_KIBI_BYTE;
	var MAX_ONGOING_REQUESTS = 32;
	var MAX_QUEUE_BYTES_COUNT = 3 * ONE_MEBI_BYTE;
	var MAX_BACKOFF_TIME = ONE_MINUTE;
	var INITIAL_BACKOFF_TIME = ONE_SECOND;
	function sendWithRetryStrategy(payload, state, sendStrategy, trackType, reportError) {
	  if (state.transportStatus === 0 /* TransportStatus.UP */ && state.queuedPayloads.size() === 0 && state.bandwidthMonitor.canHandle(payload)) {
	    send(payload, state, sendStrategy, {
	      onSuccess: function onSuccess() {
	        return retryQueuedPayloads(0 /* RetryReason.AFTER_SUCCESS */, state, sendStrategy, trackType, reportError);
	      },
	      onFailure: function onFailure() {
	        state.queuedPayloads.enqueue(payload);
	        scheduleRetry(state, sendStrategy, trackType, reportError);
	      }
	    });
	  } else {
	    state.queuedPayloads.enqueue(payload);
	  }
	}
	function scheduleRetry(state, sendStrategy, trackType, reportError) {
	  if (state.transportStatus !== 2 /* TransportStatus.DOWN */) {
	    return;
	  }
	  setTimeout$1(function () {
	    var payload = state.queuedPayloads.first();
	    send(payload, state, sendStrategy, {
	      onSuccess: function onSuccess() {
	        state.queuedPayloads.dequeue();
	        state.currentBackoffTime = INITIAL_BACKOFF_TIME;
	        retryQueuedPayloads(1 /* RetryReason.AFTER_RESUME */, state, sendStrategy, trackType, reportError);
	      },
	      onFailure: function onFailure() {
	        state.currentBackoffTime = Math.min(MAX_BACKOFF_TIME, state.currentBackoffTime * 2);
	        scheduleRetry(state, sendStrategy, trackType, reportError);
	      }
	    });
	  }, state.currentBackoffTime);
	}
	function send(payload, state, sendStrategy, _a) {
	  var onSuccess = _a.onSuccess,
	    onFailure = _a.onFailure;
	  state.bandwidthMonitor.add(payload);
	  sendStrategy(payload, function (response) {
	    state.bandwidthMonitor.remove(payload);
	    if (!shouldRetryRequest(response)) {
	      state.transportStatus = 0 /* TransportStatus.UP */;
	      onSuccess();
	    } else {
	      // do not consider transport down if another ongoing request could succeed
	      state.transportStatus = state.bandwidthMonitor.ongoingRequestCount > 0 ? 1 /* TransportStatus.FAILURE_DETECTED */ : 2 /* TransportStatus.DOWN */;
	      payload.retry = {
	        count: payload.retry ? payload.retry.count + 1 : 1,
	        lastFailureStatus: response.status
	      };
	      onFailure();
	    }
	  });
	}
	function retryQueuedPayloads(reason, state, sendStrategy, trackType, reportError) {
	  if (reason === 0 /* RetryReason.AFTER_SUCCESS */ && state.queuedPayloads.isFull() && !state.queueFullReported) {
	    reportError({
	      message: "Reached max ".concat(trackType, " events size queued for upload: ").concat(MAX_QUEUE_BYTES_COUNT / ONE_MEBI_BYTE, "MiB"),
	      source: ErrorSource.AGENT,
	      startClocks: clocksNow()
	    });
	    state.queueFullReported = true;
	  }
	  var previousQueue = state.queuedPayloads;
	  state.queuedPayloads = newPayloadQueue();
	  while (previousQueue.size() > 0) {
	    sendWithRetryStrategy(previousQueue.dequeue(), state, sendStrategy, trackType, reportError);
	  }
	}
	function shouldRetryRequest(response) {
	  return response.type !== 'opaque' && (response.status === 0 && !navigator.onLine || response.status === 408 || response.status === 429 || isServerError(response.status));
	}
	function newRetryState() {
	  return {
	    transportStatus: 0 /* TransportStatus.UP */,
	    currentBackoffTime: INITIAL_BACKOFF_TIME,
	    bandwidthMonitor: newBandwidthMonitor(),
	    queuedPayloads: newPayloadQueue(),
	    queueFullReported: false
	  };
	}
	function newPayloadQueue() {
	  var queue = [];
	  return {
	    bytesCount: 0,
	    enqueue: function enqueue(payload) {
	      if (this.isFull()) {
	        return;
	      }
	      queue.push(payload);
	      this.bytesCount += payload.bytesCount;
	    },
	    first: function first() {
	      return queue[0];
	    },
	    dequeue: function dequeue() {
	      var payload = queue.shift();
	      if (payload) {
	        this.bytesCount -= payload.bytesCount;
	      }
	      return payload;
	    },
	    size: function size() {
	      return queue.length;
	    },
	    isFull: function isFull() {
	      return this.bytesCount >= MAX_QUEUE_BYTES_COUNT;
	    }
	  };
	}
	function newBandwidthMonitor() {
	  return {
	    ongoingRequestCount: 0,
	    ongoingByteCount: 0,
	    canHandle: function canHandle(payload) {
	      return this.ongoingRequestCount === 0 || this.ongoingByteCount + payload.bytesCount <= MAX_ONGOING_BYTES_COUNT && this.ongoingRequestCount < MAX_ONGOING_REQUESTS;
	    },
	    add: function add(payload) {
	      this.ongoingRequestCount += 1;
	      this.ongoingByteCount += payload.bytesCount;
	    },
	    remove: function remove(payload) {
	      this.ongoingRequestCount -= 1;
	      this.ongoingByteCount -= payload.bytesCount;
	    }
	  };
	}

	function createHttpRequest(endpointBuilder, bytesLimit, reportError) {
	  var retryState = newRetryState();
	  var sendStrategyForRetry = function sendStrategyForRetry(payload, onResponse) {
	    return fetchKeepAliveStrategy(endpointBuilder, bytesLimit, payload, onResponse);
	  };
	  return {
	    send: function send(payload) {
	      sendWithRetryStrategy(payload, retryState, sendStrategyForRetry, endpointBuilder.trackType, reportError);
	    },
	    /**
	     * Since fetch keepalive behaves like regular fetch on Firefox,
	     * keep using sendBeaconStrategy on exit
	     */
	    sendOnExit: function sendOnExit(payload) {
	      sendBeaconStrategy(endpointBuilder, bytesLimit, payload);
	    }
	  };
	}
	function sendBeaconStrategy(endpointBuilder, bytesLimit, payload) {
	  var canUseBeacon = !!navigator.sendBeacon && payload.bytesCount < bytesLimit;
	  if (canUseBeacon) {
	    try {
	      var beaconUrl = endpointBuilder.build('beacon', payload);
	      var isQueued = navigator.sendBeacon(beaconUrl, payload.data);
	      if (isQueued) {
	        return;
	      }
	    } catch (e) {
	      reportBeaconError(e);
	    }
	  }
	  var xhrUrl = endpointBuilder.build('xhr', payload);
	  sendXHR(xhrUrl, payload.data);
	}
	var hasReportedBeaconError = false;
	function reportBeaconError(e) {
	  if (!hasReportedBeaconError) {
	    hasReportedBeaconError = true;
	    addTelemetryError(e);
	  }
	}
	function fetchKeepAliveStrategy(endpointBuilder, bytesLimit, payload, onResponse) {
	  var canUseKeepAlive = isKeepAliveSupported() && payload.bytesCount < bytesLimit;
	  if (canUseKeepAlive) {
	    var fetchUrl = endpointBuilder.build('fetch', payload);
	    fetch(fetchUrl, {
	      method: 'POST',
	      body: payload.data,
	      keepalive: true,
	      mode: 'cors'
	    }).then(monitor(function (response) {
	      return onResponse === null || onResponse === void 0 ? void 0 : onResponse({
	        status: response.status,
	        type: response.type
	      });
	    }), monitor(function () {
	      var xhrUrl = endpointBuilder.build('xhr', payload);
	      // failed to queue the request
	      sendXHR(xhrUrl, payload.data, onResponse);
	    }));
	  } else {
	    var xhrUrl = endpointBuilder.build('xhr', payload);
	    sendXHR(xhrUrl, payload.data, onResponse);
	  }
	}
	function isKeepAliveSupported() {
	  // Request can throw, cf https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#errors
	  try {
	    return window.Request && 'keepalive' in new Request('http://a');
	  } catch (_a) {
	    return false;
	  }
	}
	function sendXHR(url, data, onResponse) {
	  var request = new XMLHttpRequest();
	  request.open('POST', url, true);
	  if (data instanceof Blob) {
	    // When using a Blob instance, IE does not use its 'type' to define the 'Content-Type' header
	    // automatically, so the intake request ends up being rejected with an HTTP status 415
	    // Defining the header manually fixes this issue.
	    request.setRequestHeader('Content-Type', data.type);
	  }
	  addEventListener(
	  // allow untrusted event to acount for synthetic event dispatched by third party xhr wrapper
	  {
	    allowUntrustedEvents: true
	  }, request, 'loadend', function () {
	    onResponse === null || onResponse === void 0 ? void 0 : onResponse({
	      status: request.status
	    });
	  }, {
	    // prevent multiple onResponse callbacks
	    // if the xhr instance is reused by a third party
	    once: true
	  });
	  request.send(data);
	}

	function getEventBridge() {
	  var eventBridgeGlobal = getEventBridgeGlobal();
	  if (!eventBridgeGlobal) {
	    return;
	  }
	  return {
	    getCapabilities: function getCapabilities() {
	      var _a;
	      return JSON.parse(((_a = eventBridgeGlobal.getCapabilities) === null || _a === void 0 ? void 0 : _a.call(eventBridgeGlobal)) || '[]');
	    },
	    getPrivacyLevel: function getPrivacyLevel() {
	      var _a;
	      return (_a = eventBridgeGlobal.getPrivacyLevel) === null || _a === void 0 ? void 0 : _a.call(eventBridgeGlobal);
	    },
	    getAllowedWebViewHosts: function getAllowedWebViewHosts() {
	      return JSON.parse(eventBridgeGlobal.getAllowedWebViewHosts());
	    },
	    send: function send(eventType, event, viewId) {
	      var view = viewId ? {
	        id: viewId
	      } : undefined;
	      eventBridgeGlobal.send(JSON.stringify({
	        eventType: eventType,
	        event: event,
	        view: view
	      }));
	    }
	  };
	}
	function canUseEventBridge(currentHost) {
	  var _a;
	  if (currentHost === void 0) {
	    currentHost = (_a = getGlobalObject().location) === null || _a === void 0 ? void 0 : _a.hostname;
	  }
	  var bridge = getEventBridge();
	  return !!bridge && bridge.getAllowedWebViewHosts().some(function (allowedHost) {
	    return currentHost === allowedHost || endsWith$1(currentHost, ".".concat(allowedHost));
	  });
	}
	function getEventBridgeGlobal() {
	  return getGlobalObject().DatadogEventBridge;
	}

	var PageExitReason = {
	  HIDDEN: 'visibility_hidden',
	  UNLOADING: 'before_unload',
	  PAGEHIDE: 'page_hide',
	  FROZEN: 'page_frozen'
	};
	function createPageExitObservable(configuration) {
	  return new Observable(function (observable) {
	    var stopListeners = addEventListeners(configuration, window, ["visibilitychange" /* DOM_EVENT.VISIBILITY_CHANGE */, "freeze" /* DOM_EVENT.FREEZE */], function (event) {
	      if (event.type === "visibilitychange" /* DOM_EVENT.VISIBILITY_CHANGE */ && document.visibilityState === 'hidden') {
	        /**
	         * Only event that guarantee to fire on mobile devices when the page transitions to background state
	         * (e.g. when user switches to a different application, goes to homescreen, etc), or is being unloaded.
	         */
	        observable.notify({
	          reason: PageExitReason.HIDDEN
	        });
	      } else if (event.type === "freeze" /* DOM_EVENT.FREEZE */) {
	        /**
	         * After transitioning in background a tab can be freezed to preserve resources. (cf: https://developer.chrome.com/blog/page-lifecycle-api)
	         * Allow to collect events happening between hidden and frozen state.
	         */
	        observable.notify({
	          reason: PageExitReason.FROZEN
	        });
	      }
	    }, {
	      capture: true
	    }).stop;
	    var stopBeforeUnloadListener = addEventListener(configuration, window, "beforeunload" /* DOM_EVENT.BEFORE_UNLOAD */, function () {
	      observable.notify({
	        reason: PageExitReason.UNLOADING
	      });
	    }).stop;
	    return function () {
	      stopListeners();
	      stopBeforeUnloadListener();
	    };
	  });
	}
	function isPageExitReason(reason) {
	  return includes(objectValues(PageExitReason), reason);
	}

	function createBatch(_a) {
	  var encoder = _a.encoder,
	    request = _a.request,
	    flushController = _a.flushController,
	    messageBytesLimit = _a.messageBytesLimit;
	  var upsertBuffer = {};
	  var flushSubscription = flushController.flushObservable.subscribe(function (event) {
	    return flush(event);
	  });
	  function push(serializedMessage, estimatedMessageBytesCount, key) {
	    flushController.notifyBeforeAddMessage(estimatedMessageBytesCount);
	    if (key !== undefined) {
	      upsertBuffer[key] = serializedMessage;
	      flushController.notifyAfterAddMessage();
	    } else {
	      encoder.write(encoder.isEmpty ? serializedMessage : "\n".concat(serializedMessage), function (realMessageBytesCount) {
	        flushController.notifyAfterAddMessage(realMessageBytesCount - estimatedMessageBytesCount);
	      });
	    }
	  }
	  function hasMessageFor(key) {
	    return key !== undefined && upsertBuffer[key] !== undefined;
	  }
	  function remove(key) {
	    var removedMessage = upsertBuffer[key];
	    delete upsertBuffer[key];
	    var messageBytesCount = encoder.estimateEncodedBytesCount(removedMessage);
	    flushController.notifyAfterRemoveMessage(messageBytesCount);
	  }
	  function addOrUpdate(message, key) {
	    var serializedMessage = jsonStringify(message);
	    var estimatedMessageBytesCount = encoder.estimateEncodedBytesCount(serializedMessage);
	    if (estimatedMessageBytesCount >= messageBytesLimit) {
	      display.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(messageBytesLimit, "KB. ").concat(MORE_DETAILS, " ").concat(DOCS_TROUBLESHOOTING, "/#technical-limitations"));
	      return;
	    }
	    if (hasMessageFor(key)) {
	      remove(key);
	    }
	    push(serializedMessage, estimatedMessageBytesCount, key);
	  }
	  function flush(event) {
	    var upsertMessages = objectValues(upsertBuffer).join('\n');
	    upsertBuffer = {};
	    var isPageExit = isPageExitReason(event.reason);
	    var send = isPageExit ? request.sendOnExit : request.send;
	    if (isPageExit &&
	    // Note: checking that the encoder is async is not strictly needed, but it's an optimization:
	    // if the encoder is async we need to send two requests in some cases (one for encoded data
	    // and the other for non-encoded data). But if it's not async, we don't have to worry about
	    // it and always send a single request.
	    encoder.isAsync) {
	      var encoderResult = encoder.finishSync();
	      // Send encoded messages
	      if (encoderResult.outputBytesCount) {
	        send(formatPayloadFromEncoder(encoderResult));
	      }
	      // Send messages that are not yet encoded at this point
	      var pendingMessages = [encoderResult.pendingData, upsertMessages].filter(Boolean).join('\n');
	      if (pendingMessages) {
	        send({
	          data: pendingMessages,
	          bytesCount: computeBytesCount(pendingMessages)
	        });
	      }
	    } else {
	      if (upsertMessages) {
	        encoder.write(encoder.isEmpty ? upsertMessages : "\n".concat(upsertMessages));
	      }
	      encoder.finish(function (encoderResult) {
	        send(formatPayloadFromEncoder(encoderResult));
	      });
	    }
	  }
	  return {
	    flushController: flushController,
	    add: addOrUpdate,
	    upsert: addOrUpdate,
	    stop: flushSubscription.unsubscribe
	  };
	}
	function formatPayloadFromEncoder(encoderResult) {
	  var data;
	  if (typeof encoderResult.output === 'string') {
	    data = encoderResult.output;
	  } else {
	    data = new Blob([encoderResult.output], {
	      // This will set the 'Content-Type: text/plain' header. Reasoning:
	      // * The intake rejects the request if there is no content type.
	      // * The browser will issue CORS preflight requests if we set it to 'application/json', which
	      // could induce higher intake load (and maybe has other impacts).
	      // * Also it's not quite JSON, since we are concatenating multiple JSON objects separated by
	      // new lines.
	      type: 'text/plain'
	    });
	  }
	  return {
	    data: data,
	    bytesCount: encoderResult.outputBytesCount,
	    encoding: encoderResult.encoding
	  };
	}

	/**
	 * Returns a "flush controller", responsible of notifying when flushing a pool of pending data needs
	 * to happen. The implementation is designed to support both synchronous and asynchronous usages,
	 * but relies on invariants described in each method documentation to keep a coherent state.
	 */
	function createFlushController(_a) {
	  var messagesLimit = _a.messagesLimit,
	    bytesLimit = _a.bytesLimit,
	    durationLimit = _a.durationLimit,
	    pageExitObservable = _a.pageExitObservable,
	    sessionExpireObservable = _a.sessionExpireObservable;
	  var pageExitSubscription = pageExitObservable.subscribe(function (event) {
	    return flush(event.reason);
	  });
	  var sessionExpireSubscription = sessionExpireObservable.subscribe(function () {
	    return flush('session_expire');
	  });
	  var flushObservable = new Observable(function () {
	    return function () {
	      pageExitSubscription.unsubscribe();
	      sessionExpireSubscription.unsubscribe();
	    };
	  });
	  var currentBytesCount = 0;
	  var currentMessagesCount = 0;
	  function flush(flushReason) {
	    if (currentMessagesCount === 0) {
	      return;
	    }
	    var messagesCount = currentMessagesCount;
	    var bytesCount = currentBytesCount;
	    currentMessagesCount = 0;
	    currentBytesCount = 0;
	    cancelDurationLimitTimeout();
	    flushObservable.notify({
	      reason: flushReason,
	      messagesCount: messagesCount,
	      bytesCount: bytesCount
	    });
	  }
	  var durationLimitTimeoutId;
	  function scheduleDurationLimitTimeout() {
	    if (durationLimitTimeoutId === undefined) {
	      durationLimitTimeoutId = setTimeout$1(function () {
	        flush('duration_limit');
	      }, durationLimit);
	    }
	  }
	  function cancelDurationLimitTimeout() {
	    clearTimeout$1(durationLimitTimeoutId);
	    durationLimitTimeoutId = undefined;
	  }
	  return {
	    flushObservable: flushObservable,
	    get messagesCount() {
	      return currentMessagesCount;
	    },
	    /**
	     * Notifies that a message will be added to a pool of pending messages waiting to be flushed.
	     *
	     * This function needs to be called synchronously, right before adding the message, so no flush
	     * event can happen after `notifyBeforeAddMessage` and before adding the message.
	     *
	     * @param estimatedMessageBytesCount: an estimation of the message bytes count once it is
	     * actually added.
	     */
	    notifyBeforeAddMessage: function notifyBeforeAddMessage(estimatedMessageBytesCount) {
	      if (currentBytesCount + estimatedMessageBytesCount >= bytesLimit) {
	        flush('bytes_limit');
	      }
	      // Consider the message to be added now rather than in `notifyAfterAddMessage`, because if no
	      // message was added yet and `notifyAfterAddMessage` is called asynchronously, we still want
	      // to notify when a flush is needed (for example on page exit).
	      currentMessagesCount += 1;
	      currentBytesCount += estimatedMessageBytesCount;
	      scheduleDurationLimitTimeout();
	    },
	    /**
	     * Notifies that a message *was* added to a pool of pending messages waiting to be flushed.
	     *
	     * This function can be called asynchronously after the message was added, but in this case it
	     * should not be called if a flush event occurred in between.
	     *
	     * @param messageBytesCountDiff: the difference between the estimated message bytes count and
	     * its actual bytes count once added to the pool.
	     */
	    notifyAfterAddMessage: function notifyAfterAddMessage(messageBytesCountDiff) {
	      if (messageBytesCountDiff === void 0) {
	        messageBytesCountDiff = 0;
	      }
	      currentBytesCount += messageBytesCountDiff;
	      if (currentMessagesCount >= messagesLimit) {
	        flush('messages_limit');
	      } else if (currentBytesCount >= bytesLimit) {
	        flush('bytes_limit');
	      }
	    },
	    /**
	     * Notifies that a message was removed from a pool of pending messages waiting to be flushed.
	     *
	     * This function needs to be called synchronously, right after removing the message, so no flush
	     * event can happen after removing the message and before `notifyAfterRemoveMessage`.
	     *
	     * @param messageBytesCount: the message bytes count that was added to the pool. Should
	     * correspond to the sum of bytes counts passed to `notifyBeforeAddMessage` and
	     * `notifyAfterAddMessage`.
	     */
	    notifyAfterRemoveMessage: function notifyAfterRemoveMessage(messageBytesCount) {
	      currentBytesCount -= messageBytesCount;
	      currentMessagesCount -= 1;
	      if (currentMessagesCount === 0) {
	        cancelDurationLimitTimeout();
	      }
	    }
	  };
	}

	function startBatchWithReplica(configuration, primary, replica, reportError, pageExitObservable, sessionExpireObservable, batchFactoryImp) {
	  if (batchFactoryImp === void 0) {
	    batchFactoryImp = createBatch;
	  }
	  var primaryBatch = createBatchFromConfig(configuration, primary);
	  var replicaBatch = replica && createBatchFromConfig(configuration, replica);
	  function createBatchFromConfig(configuration, _a) {
	    var endpoint = _a.endpoint,
	      encoder = _a.encoder;
	    return batchFactoryImp({
	      encoder: encoder,
	      request: createHttpRequest(endpoint, configuration.batchBytesLimit, reportError),
	      flushController: createFlushController({
	        messagesLimit: configuration.batchMessagesLimit,
	        bytesLimit: configuration.batchBytesLimit,
	        durationLimit: configuration.flushTimeout,
	        pageExitObservable: pageExitObservable,
	        sessionExpireObservable: sessionExpireObservable
	      }),
	      messageBytesLimit: configuration.messageBytesLimit
	    });
	  }
	  return {
	    flushObservable: primaryBatch.flushController.flushObservable,
	    add: function add(message, replicated) {
	      if (replicated === void 0) {
	        replicated = true;
	      }
	      primaryBatch.add(message);
	      if (replicaBatch && replicated) {
	        replicaBatch.add(replica.transformMessage ? replica.transformMessage(message) : message);
	      }
	    },
	    upsert: function upsert(message, key) {
	      primaryBatch.upsert(message, key);
	      if (replicaBatch) {
	        replicaBatch.upsert(replica.transformMessage ? replica.transformMessage(message) : message, key);
	      }
	    },
	    stop: function stop() {
	      primaryBatch.stop();
	      if (replicaBatch) {
	        replicaBatch.stop();
	      }
	    }
	  };
	}

	function createIdentityEncoder() {
	  var output = '';
	  var outputBytesCount = 0;
	  return {
	    isAsync: false,
	    get isEmpty() {
	      return !output;
	    },
	    write: function write(data, callback) {
	      var additionalEncodedBytesCount = computeBytesCount(data);
	      outputBytesCount += additionalEncodedBytesCount;
	      output += data;
	      if (callback) {
	        callback(additionalEncodedBytesCount);
	      }
	    },
	    finish: function finish(callback) {
	      callback(this.finishSync());
	    },
	    finishSync: function finishSync() {
	      var result = {
	        output: output,
	        outputBytesCount: outputBytesCount,
	        rawBytesCount: outputBytesCount,
	        pendingData: ''
	      };
	      output = '';
	      outputBytesCount = 0;
	      return result;
	    },
	    estimateEncodedBytesCount: function estimateEncodedBytesCount(data) {
	      return data.length;
	    }
	  };
	}

	// eslint-disable-next-line no-restricted-syntax
	var AbstractLifeCycle = /** @class */function () {
	  function AbstractLifeCycle() {
	    this.callbacks = {};
	  }
	  AbstractLifeCycle.prototype.notify = function (eventType, data) {
	    var eventCallbacks = this.callbacks[eventType];
	    if (eventCallbacks) {
	      eventCallbacks.forEach(function (callback) {
	        return callback(data);
	      });
	    }
	  };
	  AbstractLifeCycle.prototype.subscribe = function (eventType, callback) {
	    var _this = this;
	    if (!this.callbacks[eventType]) {
	      this.callbacks[eventType] = [];
	    }
	    this.callbacks[eventType].push(callback);
	    return {
	      unsubscribe: function unsubscribe() {
	        _this.callbacks[eventType] = _this.callbacks[eventType].filter(function (other) {
	          return callback !== other;
	        });
	      }
	    };
	  };
	  return AbstractLifeCycle;
	}();

	function createEventRateLimiter(eventType, limit, onLimitReached) {
	  var eventCount = 0;
	  var allowNextEvent = false;
	  return {
	    isLimitReached: function isLimitReached() {
	      if (eventCount === 0) {
	        setTimeout$1(function () {
	          eventCount = 0;
	        }, ONE_MINUTE);
	      }
	      eventCount += 1;
	      if (eventCount <= limit || allowNextEvent) {
	        allowNextEvent = false;
	        return false;
	      }
	      if (eventCount === limit + 1) {
	        allowNextEvent = true;
	        try {
	          onLimitReached({
	            message: "Reached max number of ".concat(eventType, "s by minute: ").concat(limit),
	            source: ErrorSource.AGENT,
	            startClocks: clocksNow()
	          });
	        } finally {
	          allowNextEvent = false;
	        }
	      }
	      return true;
	    }
	  };
	}

	var xhrObservable;
	var xhrContexts = new WeakMap();
	function initXhrObservable(configuration) {
	  if (!xhrObservable) {
	    xhrObservable = createXhrObservable(configuration);
	  }
	  return xhrObservable;
	}
	function createXhrObservable(configuration) {
	  return new Observable(function (observable) {
	    var stopInstrumentingStart = instrumentMethod(XMLHttpRequest.prototype, 'open', openXhr).stop;
	    var stopInstrumentingSend = instrumentMethod(XMLHttpRequest.prototype, 'send', function (call) {
	      sendXhr(call, configuration, observable);
	    }, {
	      computeHandlingStack: true
	    }).stop;
	    var stopInstrumentingAbort = instrumentMethod(XMLHttpRequest.prototype, 'abort', abortXhr).stop;
	    return function () {
	      stopInstrumentingStart();
	      stopInstrumentingSend();
	      stopInstrumentingAbort();
	    };
	  });
	}
	function openXhr(_a) {
	  var xhr = _a.target,
	    _b = _a.parameters,
	    method = _b[0],
	    url = _b[1];
	  xhrContexts.set(xhr, {
	    state: 'open',
	    method: String(method).toUpperCase(),
	    url: normalizeUrl(String(url))
	  });
	}
	function sendXhr(_a, configuration, observable) {
	  var xhr = _a.target,
	    handlingStack = _a.handlingStack;
	  var context = xhrContexts.get(xhr);
	  if (!context) {
	    return;
	  }
	  var startContext = context;
	  startContext.state = 'start';
	  startContext.startClocks = clocksNow();
	  startContext.isAborted = false;
	  startContext.xhr = xhr;
	  startContext.handlingStack = handlingStack;
	  var hasBeenReported = false;
	  var stopInstrumentingOnReadyStateChange = instrumentMethod(xhr, 'onreadystatechange', function () {
	    if (xhr.readyState === XMLHttpRequest.DONE) {
	      // Try to report the XHR as soon as possible, because the XHR may be mutated by the
	      // application during a future event. For example, Angular is calling .abort() on
	      // completed requests during an onreadystatechange event, so the status becomes '0'
	      // before the request is collected.
	      onEnd();
	    }
	  }).stop;
	  var onEnd = function onEnd() {
	    unsubscribeLoadEndListener();
	    stopInstrumentingOnReadyStateChange();
	    if (hasBeenReported) {
	      return;
	    }
	    hasBeenReported = true;
	    var completeContext = context;
	    completeContext.state = 'complete';
	    completeContext.duration = elapsed(startContext.startClocks.timeStamp, timeStampNow());
	    completeContext.status = xhr.status;
	    observable.notify(shallowClone(completeContext));
	  };
	  var unsubscribeLoadEndListener = addEventListener(configuration, xhr, 'loadend', onEnd).stop;
	  observable.notify(startContext);
	}
	function abortXhr(_a) {
	  var xhr = _a.target;
	  var context = xhrContexts.get(xhr);
	  if (context) {
	    context.isAborted = true;
	  }
	}

	var fetchObservable;
	function initFetchObservable() {
	  if (!fetchObservable) {
	    fetchObservable = createFetchObservable();
	  }
	  return fetchObservable;
	}
	function createFetchObservable() {
	  return new Observable(function (observable) {
	    if (!window.fetch) {
	      return;
	    }
	    var stop = instrumentMethod(window, 'fetch', function (call) {
	      return beforeSend(call, observable);
	    }, {
	      computeHandlingStack: true
	    }).stop;
	    return stop;
	  });
	}
	function beforeSend(_a, observable) {
	  var parameters = _a.parameters,
	    onPostCall = _a.onPostCall,
	    handlingStack = _a.handlingStack;
	  var input = parameters[0],
	    init = parameters[1];
	  var methodFromParams = init && init.method;
	  if (methodFromParams === undefined && input instanceof Request) {
	    methodFromParams = input.method;
	  }
	  var method = methodFromParams !== undefined ? String(methodFromParams).toUpperCase() : 'GET';
	  var url = input instanceof Request ? input.url : normalizeUrl(String(input));
	  var startClocks = clocksNow();
	  var context = {
	    state: 'start',
	    init: init,
	    input: input,
	    method: method,
	    startClocks: startClocks,
	    url: url,
	    handlingStack: handlingStack
	  };
	  observable.notify(context);
	  // Those properties can be changed by observable subscribers
	  parameters[0] = context.input;
	  parameters[1] = context.init;
	  onPostCall(function (responsePromise) {
	    return afterSend(observable, responsePromise, context);
	  });
	}
	function afterSend(observable, responsePromise, startContext) {
	  var context = startContext;
	  function reportFetch(partialContext) {
	    context.state = 'resolve';
	    assign(context, partialContext);
	    observable.notify(context);
	  }
	  responsePromise.then(monitor(function (response) {
	    reportFetch({
	      response: response,
	      responseType: response.type,
	      status: response.status,
	      isAborted: false
	    });
	  }), monitor(function (error) {
	    var _a, _b;
	    reportFetch({
	      status: 0,
	      isAborted: ((_b = (_a = context.init) === null || _a === void 0 ? void 0 : _a.signal) === null || _b === void 0 ? void 0 : _b.aborted) || error instanceof DOMException && error.code === DOMException.ABORT_ERR,
	      error: error
	    });
	  }));
	}

	var consoleObservablesByApi = {};
	function initConsoleObservable(apis) {
	  var consoleObservables = apis.map(function (api) {
	    if (!consoleObservablesByApi[api]) {
	      consoleObservablesByApi[api] = createConsoleObservable(api); // we are sure that the observable created for this api will yield the expected ConsoleLog type
	    }
	    return consoleObservablesByApi[api];
	  });
	  return mergeObservables.apply(void 0, consoleObservables);
	}
	function createConsoleObservable(api) {
	  return new Observable(function (observable) {
	    var originalConsoleApi = globalConsole[api];
	    globalConsole[api] = function () {
	      var params = [];
	      for (var _i = 0; _i < arguments.length; _i++) {
	        params[_i] = arguments[_i];
	      }
	      originalConsoleApi.apply(console, params);
	      var handlingStack = createHandlingStack();
	      callMonitored(function () {
	        observable.notify(buildConsoleLog(params, api, handlingStack));
	      });
	    };
	    return function () {
	      globalConsole[api] = originalConsoleApi;
	    };
	  });
	}
	function buildConsoleLog(params, api, handlingStack) {
	  var message = params.map(function (param) {
	    return formatConsoleParameters(param);
	  }).join(' ');
	  var error;
	  if (api === ConsoleApiName.error) {
	    var firstErrorParam = find(params, isError);
	    error = {
	      stack: firstErrorParam ? toStackTraceString(computeStackTrace(firstErrorParam)) : undefined,
	      fingerprint: tryToGetFingerprint(firstErrorParam),
	      causes: firstErrorParam ? flattenErrorCauses(firstErrorParam, 'console') : undefined,
	      startClocks: clocksNow(),
	      message: message,
	      source: ErrorSource.CONSOLE,
	      handling: "handled" /* ErrorHandling.HANDLED */,
	      handlingStack: handlingStack
	    };
	  }
	  return {
	    api: api,
	    message: message,
	    error: error,
	    handlingStack: handlingStack
	  };
	}
	function formatConsoleParameters(param) {
	  if (typeof param === 'string') {
	    return sanitize(param);
	  }
	  if (isError(param)) {
	    return formatErrorMessage(computeStackTrace(param));
	  }
	  return jsonStringify(sanitize(param), undefined, 2);
	}

	function createContextManager(customerDataTracker) {
	  var context = {};
	  var changeObservable = new Observable();
	  var contextManager = {
	    getContext: function getContext() {
	      return deepClone(context);
	    },
	    setContext: function setContext(newContext) {
	      if (getType(newContext) === 'object') {
	        context = sanitize(newContext);
	        customerDataTracker === null || customerDataTracker === void 0 ? void 0 : customerDataTracker.updateCustomerData(context);
	      } else {
	        contextManager.clearContext();
	      }
	      changeObservable.notify();
	    },
	    setContextProperty: function setContextProperty(key, property) {
	      context[key] = sanitize(property);
	      customerDataTracker === null || customerDataTracker === void 0 ? void 0 : customerDataTracker.updateCustomerData(context);
	      changeObservable.notify();
	    },
	    removeContextProperty: function removeContextProperty(key) {
	      delete context[key];
	      customerDataTracker === null || customerDataTracker === void 0 ? void 0 : customerDataTracker.updateCustomerData(context);
	      changeObservable.notify();
	    },
	    clearContext: function clearContext() {
	      context = {};
	      customerDataTracker === null || customerDataTracker === void 0 ? void 0 : customerDataTracker.resetCustomerData();
	      changeObservable.notify();
	    },
	    changeObservable: changeObservable
	  };
	  return contextManager;
	}

	var CONTEXT_STORE_KEY_PREFIX = '_dd_c';
	var storageListeners = [];
	function storeContextManager(configuration, contextManager, productKey, customerDataType) {
	  var storageKey = buildStorageKey(productKey, customerDataType);
	  storageListeners.push(addEventListener(configuration, window, "storage" /* DOM_EVENT.STORAGE */, function (_a) {
	    var key = _a.key;
	    if (storageKey === key) {
	      synchronizeWithStorage();
	    }
	  }));
	  contextManager.changeObservable.subscribe(dumpToStorage);
	  contextManager.setContext(combine(getFromStorage(), contextManager.getContext()));
	  function synchronizeWithStorage() {
	    contextManager.setContext(getFromStorage());
	  }
	  function dumpToStorage() {
	    localStorage.setItem(storageKey, JSON.stringify(contextManager.getContext()));
	  }
	  function getFromStorage() {
	    var rawContext = localStorage.getItem(storageKey);
	    return rawContext !== null ? JSON.parse(rawContext) : {};
	  }
	}
	function buildStorageKey(productKey, customerDataType) {
	  return "".concat(CONTEXT_STORE_KEY_PREFIX, "_").concat(productKey, "_").concat(customerDataType);
	}

	// RUM and logs batch bytes limit is 16KB
	// ensure that we leave room for other event attributes and maintain a decent amount of event per batch
	// (3KB (customer data) + 1KB (other attributes)) * 4 (events per batch) = 16KB
	var CUSTOMER_DATA_BYTES_LIMIT = 3 * ONE_KIBI_BYTE;
	// We observed that the compression ratio is around 8 in general, but we also want to keep a margin
	// because some data might not be compressed (ex: last view update on page exit). We chose 16KiB
	// because it is also the limit of the 'batchBytesCount' that we use for RUM and Logs data, but this
	// is a bit arbitrary.
	var CUSTOMER_COMPRESSED_DATA_BYTES_LIMIT = 16 * ONE_KIBI_BYTE;
	var BYTES_COMPUTATION_THROTTLING_DELAY = 200;
	function createCustomerDataTrackerManager(compressionStatus) {
	  if (compressionStatus === void 0) {
	    compressionStatus = 2 /* CustomerDataCompressionStatus.Disabled */;
	  }
	  var customerDataTrackers = new Map();
	  var alreadyWarned = false;
	  function checkCustomerDataLimit(initialBytesCount) {
	    if (initialBytesCount === void 0) {
	      initialBytesCount = 0;
	    }
	    if (alreadyWarned || compressionStatus === 0 /* CustomerDataCompressionStatus.Unknown */) {
	      return;
	    }
	    var bytesCountLimit = compressionStatus === 2 /* CustomerDataCompressionStatus.Disabled */ ? CUSTOMER_DATA_BYTES_LIMIT : CUSTOMER_COMPRESSED_DATA_BYTES_LIMIT;
	    var bytesCount = initialBytesCount;
	    customerDataTrackers.forEach(function (tracker) {
	      bytesCount += tracker.getBytesCount();
	    });
	    if (bytesCount > bytesCountLimit) {
	      displayCustomerDataLimitReachedWarning(bytesCountLimit);
	      alreadyWarned = true;
	    }
	  }
	  return {
	    /**
	     * Creates a detached tracker. The manager will not store a reference to that tracker, and the
	     * bytes count will be counted independently from other detached trackers.
	     *
	     * This is particularly useful when we don't know when the tracker will be unused, so we don't
	     * leak memory (ex: when used in Logger instances).
	     */
	    createDetachedTracker: function createDetachedTracker() {
	      var tracker = createCustomerDataTracker(function () {
	        return checkCustomerDataLimit(tracker.getBytesCount());
	      });
	      return tracker;
	    },
	    /**
	     * Creates a tracker if it doesn't exist, and returns it.
	     */
	    getOrCreateTracker: function getOrCreateTracker(type) {
	      if (!customerDataTrackers.has(type)) {
	        customerDataTrackers.set(type, createCustomerDataTracker(checkCustomerDataLimit));
	      }
	      return customerDataTrackers.get(type);
	    },
	    setCompressionStatus: function setCompressionStatus(newCompressionStatus) {
	      if (compressionStatus === 0 /* CustomerDataCompressionStatus.Unknown */) {
	        compressionStatus = newCompressionStatus;
	        checkCustomerDataLimit();
	      }
	    },
	    getCompressionStatus: function getCompressionStatus() {
	      return compressionStatus;
	    },
	    stop: function stop() {
	      customerDataTrackers.forEach(function (tracker) {
	        return tracker.stop();
	      });
	      customerDataTrackers.clear();
	    }
	  };
	}
	function createCustomerDataTracker(checkCustomerDataLimit) {
	  var bytesCountCache = 0;
	  // Throttle the bytes computation to minimize the impact on performance.
	  // Especially useful if the user call context APIs synchronously multiple times in a row
	  var _a = throttle$1(function (context) {
	      bytesCountCache = computeBytesCount(jsonStringify(context));
	      checkCustomerDataLimit();
	    }, BYTES_COMPUTATION_THROTTLING_DELAY),
	    computeBytesCountThrottled = _a.throttled,
	    cancelComputeBytesCount = _a.cancel;
	  var resetBytesCount = function resetBytesCount() {
	    cancelComputeBytesCount();
	    bytesCountCache = 0;
	  };
	  return {
	    updateCustomerData: function updateCustomerData(context) {
	      if (isEmptyObject(context)) {
	        resetBytesCount();
	      } else {
	        computeBytesCountThrottled(context);
	      }
	    },
	    resetCustomerData: resetBytesCount,
	    getBytesCount: function getBytesCount() {
	      return bytesCountCache;
	    },
	    stop: function stop() {
	      cancelComputeBytesCount();
	    }
	  };
	}
	function displayCustomerDataLimitReachedWarning(bytesCountLimit) {
	  display.warn("Customer data exceeds the recommended ".concat(bytesCountLimit / ONE_KIBI_BYTE, "KiB threshold. ").concat(MORE_DETAILS, " ").concat(DOCS_TROUBLESHOOTING, "/#customer-data-exceeds-the-recommended-threshold-warning"));
	}

	/**
	 * Read bytes from a ReadableStream until at least `limit` bytes have been read (or until the end of
	 * the stream). The callback is invoked with the at most `limit` bytes, and indicates that the limit
	 * has been exceeded if more bytes were available.
	 */
	function readBytesFromStream(stream, callback, options) {
	  var reader = stream.getReader();
	  var chunks = [];
	  var readBytesCount = 0;
	  readMore();
	  function readMore() {
	    reader.read().then(monitor(function (result) {
	      if (result.done) {
	        onDone();
	        return;
	      }
	      {
	        chunks.push(result.value);
	      }
	      readBytesCount += result.value.length;
	      if (readBytesCount > options.bytesLimit) {
	        onDone();
	      } else {
	        readMore();
	      }
	    }), monitor(function (error) {
	      return callback(error);
	    }));
	  }
	  function onDone() {
	    reader.cancel().catch(
	    // we don't care if cancel fails, but we still need to catch the error to avoid reporting it
	    // as an unhandled rejection
	    noop$2);
	    var bytes;
	    var limitExceeded;
	    {
	      var completeBuffer_1;
	      if (chunks.length === 1) {
	        // optimization: if the response is small enough to fit in a single buffer (provided by the browser), just
	        // use it directly.
	        completeBuffer_1 = chunks[0];
	      } else {
	        // else, we need to copy buffers into a larger buffer to concatenate them.
	        completeBuffer_1 = new Uint8Array(readBytesCount);
	        var offset_1 = 0;
	        chunks.forEach(function (chunk) {
	          completeBuffer_1.set(chunk, offset_1);
	          offset_1 += chunk.length;
	        });
	      }
	      bytes = completeBuffer_1.slice(0, options.bytesLimit);
	      limitExceeded = completeBuffer_1.length > options.bytesLimit;
	    }
	    callback(undefined, bytes, limitExceeded);
	  }
	}

	var SYNTHETICS_TEST_ID_COOKIE_NAME = 'datadog-synthetics-public-id';
	var SYNTHETICS_RESULT_ID_COOKIE_NAME = 'datadog-synthetics-result-id';
	var SYNTHETICS_INJECTS_RUM_COOKIE_NAME = 'datadog-synthetics-injects-rum';
	function willSyntheticsInjectRum() {
	  return Boolean(window._DATADOG_SYNTHETICS_INJECTS_RUM || getInitCookie(SYNTHETICS_INJECTS_RUM_COOKIE_NAME));
	}
	function getSyntheticsTestId() {
	  var value = window._DATADOG_SYNTHETICS_PUBLIC_ID || getInitCookie(SYNTHETICS_TEST_ID_COOKIE_NAME);
	  return typeof value === 'string' ? value : undefined;
	}
	function getSyntheticsResultId() {
	  var value = window._DATADOG_SYNTHETICS_RESULT_ID || getInitCookie(SYNTHETICS_RESULT_ID_COOKIE_NAME);
	  return typeof value === 'string' ? value : undefined;
	}

	var _a$3;
	function isAuthorized(status, handlerType, logger) {
	  var loggerHandler = logger.getHandler();
	  var sanitizedHandlerType = Array.isArray(loggerHandler) ? loggerHandler : [loggerHandler];
	  return STATUS_PRIORITIES[status] >= STATUS_PRIORITIES[logger.getLevel()] && includes(sanitizedHandlerType, handlerType);
	}
	var StatusType = {
	  ok: 'ok',
	  debug: 'debug',
	  info: 'info',
	  notice: 'notice',
	  warn: 'warn',
	  error: 'error',
	  critical: 'critical',
	  alert: 'alert',
	  emerg: 'emerg'
	};
	var STATUS_PRIORITIES = (_a$3 = {}, _a$3[StatusType.ok] = 0, _a$3[StatusType.debug] = 1, _a$3[StatusType.info] = 2, _a$3[StatusType.notice] = 4, _a$3[StatusType.warn] = 5, _a$3[StatusType.error] = 6, _a$3[StatusType.critical] = 7, _a$3[StatusType.alert] = 8, _a$3[StatusType.emerg] = 9, _a$3);

	function createErrorFieldFromRawError(rawError, _a) {
	  var _b = _a === void 0 ? {} : _a,
	    /**
	     * Set this to `true` to include the error message in the error field. In most cases, the error
	     * message is already included in the log message, so we don't need to include it again.
	     */
	    _c = _b.includeMessage,
	    /**
	     * Set this to `true` to include the error message in the error field. In most cases, the error
	     * message is already included in the log message, so we don't need to include it again.
	     */
	    includeMessage = _c === void 0 ? false : _c;
	  return {
	    stack: rawError.stack,
	    kind: rawError.type,
	    message: includeMessage ? rawError.message : undefined,
	    causes: rawError.causes,
	    fingerprint: rawError.fingerprint,
	    handling: rawError.handling
	  };
	}

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	  var c = arguments.length,
	    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	    d;
	  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	  return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var HandlerType = {
	  console: 'console',
	  http: 'http',
	  silent: 'silent'
	};
	var STATUSES = Object.keys(StatusType);
	// note: it is safe to merge declarations as long as the methods are actually defined on the prototype
	// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging, no-restricted-syntax
	var Logger = /** @class */function () {
	  function Logger(handleLogStrategy, customerDataTracker, name, handlerType, level, loggerContext) {
	    if (handlerType === void 0) {
	      handlerType = HandlerType.http;
	    }
	    if (level === void 0) {
	      level = StatusType.debug;
	    }
	    if (loggerContext === void 0) {
	      loggerContext = {};
	    }
	    this.handleLogStrategy = handleLogStrategy;
	    this.handlerType = handlerType;
	    this.level = level;
	    this.contextManager = createContextManager(customerDataTracker);
	    this.contextManager.setContext(loggerContext);
	    if (name) {
	      this.contextManager.setContextProperty('logger', {
	        name: name
	      });
	    }
	  }
	  Logger.prototype.logImplementation = function (message, messageContext, status, error, handlingStack) {
	    if (status === void 0) {
	      status = StatusType.info;
	    }
	    var sanitizedMessageContext = sanitize(messageContext);
	    var context;
	    if (error !== undefined && error !== null) {
	      var rawError = computeRawError({
	        stackTrace: isError(error) ? computeStackTrace(error) : undefined,
	        originalError: error,
	        nonErrorPrefix: "Provided" /* NonErrorPrefix.PROVIDED */,
	        source: ErrorSource.LOGGER,
	        handling: "handled" /* ErrorHandling.HANDLED */,
	        startClocks: clocksNow()
	      });
	      context = combine({
	        error: createErrorFieldFromRawError(rawError, {
	          includeMessage: true
	        })
	      }, sanitizedMessageContext);
	    } else {
	      context = sanitizedMessageContext;
	    }
	    this.handleLogStrategy({
	      message: sanitize(message),
	      context: context,
	      status: status
	    }, this, handlingStack);
	  };
	  Logger.prototype.log = function (message, messageContext, status, error) {
	    if (status === void 0) {
	      status = StatusType.info;
	    }
	    var handlingStack;
	    if (isAuthorized(status, HandlerType.http, this)) {
	      handlingStack = createHandlingStack();
	    }
	    this.logImplementation(message, messageContext, status, error, handlingStack);
	  };
	  Logger.prototype.setContext = function (context) {
	    this.contextManager.setContext(context);
	  };
	  Logger.prototype.getContext = function () {
	    return this.contextManager.getContext();
	  };
	  Logger.prototype.setContextProperty = function (key, value) {
	    this.contextManager.setContextProperty(key, value);
	  };
	  Logger.prototype.removeContextProperty = function (key) {
	    this.contextManager.removeContextProperty(key);
	  };
	  Logger.prototype.clearContext = function () {
	    this.contextManager.clearContext();
	  };
	  Logger.prototype.setHandler = function (handler) {
	    this.handlerType = handler;
	  };
	  Logger.prototype.getHandler = function () {
	    return this.handlerType;
	  };
	  Logger.prototype.setLevel = function (level) {
	    this.level = level;
	  };
	  Logger.prototype.getLevel = function () {
	    return this.level;
	  };
	  __decorate([monitored], Logger.prototype, "logImplementation", null);
	  return Logger;
	}();
	/* eslint-disable local-rules/disallow-side-effects */
	Logger.prototype.ok = createLoggerMethod(StatusType.ok);
	Logger.prototype.debug = createLoggerMethod(StatusType.debug);
	Logger.prototype.info = createLoggerMethod(StatusType.info);
	Logger.prototype.notice = createLoggerMethod(StatusType.notice);
	Logger.prototype.warn = createLoggerMethod(StatusType.warn);
	Logger.prototype.error = createLoggerMethod(StatusType.error);
	Logger.prototype.critical = createLoggerMethod(StatusType.critical);
	Logger.prototype.alert = createLoggerMethod(StatusType.alert);
	Logger.prototype.emerg = createLoggerMethod(StatusType.emerg);
	function createLoggerMethod(status) {
	  return function (message, messageContext, error) {
	    var handlingStack;
	    if (isAuthorized(status, HandlerType.http, this)) {
	      handlingStack = createHandlingStack();
	    }
	    this.logImplementation(message, messageContext, status, error, handlingStack);
	  };
	}

	function buildCommonContext(globalContextManager, userContextManager) {
	  return {
	    view: {
	      referrer: document.referrer,
	      url: window.location.href
	    },
	    context: globalContextManager.getContext(),
	    user: userContextManager.getContext()
	  };
	}

	/**
	 * arbitrary value, byte precision not needed
	 */
	var DEFAULT_REQUEST_ERROR_RESPONSE_LENGTH_LIMIT = 32 * ONE_KIBI_BYTE;
	function validateAndBuildLogsConfiguration(initConfiguration) {
	  if (initConfiguration.usePciIntake === true && initConfiguration.site && initConfiguration.site !== 'datadoghq.com') {
	    display.warn('PCI compliance for Logs is only available for Datadog organizations in the US1 site. Default intake will be used.');
	  }
	  var baseConfiguration = validateAndBuildConfiguration(initConfiguration);
	  var forwardConsoleLogs = validateAndBuildForwardOption(initConfiguration.forwardConsoleLogs, objectValues(ConsoleApiName), 'Forward Console Logs');
	  var forwardReports = validateAndBuildForwardOption(initConfiguration.forwardReports, objectValues(RawReportType), 'Forward Reports');
	  if (!baseConfiguration || !forwardConsoleLogs || !forwardReports) {
	    return;
	  }
	  if (initConfiguration.forwardErrorsToLogs && !includes(forwardConsoleLogs, ConsoleApiName.error)) {
	    forwardConsoleLogs.push(ConsoleApiName.error);
	  }
	  return assign({
	    forwardErrorsToLogs: initConfiguration.forwardErrorsToLogs !== false,
	    forwardConsoleLogs: forwardConsoleLogs,
	    forwardReports: forwardReports,
	    requestErrorResponseLengthLimit: DEFAULT_REQUEST_ERROR_RESPONSE_LENGTH_LIMIT,
	    sendLogsAfterSessionExpiration: !!initConfiguration.sendLogsAfterSessionExpiration
	  }, baseConfiguration);
	}
	function validateAndBuildForwardOption(option, allowedValues, label) {
	  if (option === undefined) {
	    return [];
	  }
	  if (!(option === 'all' || Array.isArray(option) && option.every(function (api) {
	    return includes(allowedValues, api);
	  }))) {
	    display.error("".concat(label, " should be \"all\" or an array with allowed values \"").concat(allowedValues.join('", "'), "\""));
	    return;
	  }
	  return option === 'all' ? allowedValues : removeDuplicates(option);
	}
	function serializeLogsConfiguration(configuration) {
	  var baseSerializedInitConfiguration = serializeConfiguration(configuration);
	  return assign({
	    forward_errors_to_logs: configuration.forwardErrorsToLogs,
	    forward_console_logs: configuration.forwardConsoleLogs,
	    forward_reports: configuration.forwardReports,
	    use_pci_intake: configuration.usePciIntake,
	    send_logs_after_session_expiration: configuration.sendLogsAfterSessionExpiration
	  }, baseSerializedInitConfiguration);
	}

	function createPreStartStrategy(getCommonContext, trackingConsentState, doStartLogs) {
	  var bufferApiCalls = createBoundedBuffer();
	  var cachedInitConfiguration;
	  var cachedConfiguration;
	  var trackingConsentStateSubscription = trackingConsentState.observable.subscribe(tryStartLogs);
	  function tryStartLogs() {
	    if (!cachedConfiguration || !cachedInitConfiguration || !trackingConsentState.isGranted()) {
	      return;
	    }
	    trackingConsentStateSubscription.unsubscribe();
	    var startLogsResult = doStartLogs(cachedInitConfiguration, cachedConfiguration);
	    bufferApiCalls.drain(startLogsResult);
	  }
	  return {
	    init: function init(initConfiguration) {
	      if (!initConfiguration) {
	        display.error('Missing configuration');
	        return;
	      }
	      // Set the experimental feature flags as early as possible, so we can use them in most places
	      initFeatureFlags(initConfiguration.enableExperimentalFeatures);
	      if (canUseEventBridge()) {
	        initConfiguration = overrideInitConfigurationForBridge(initConfiguration);
	      }
	      // Expose the initial configuration regardless of initialization success.
	      cachedInitConfiguration = initConfiguration;
	      if (cachedConfiguration) {
	        displayAlreadyInitializedError('DD_LOGS', initConfiguration);
	        return;
	      }
	      var configuration = validateAndBuildLogsConfiguration(initConfiguration);
	      if (!configuration) {
	        return;
	      }
	      cachedConfiguration = configuration;
	      // Instrumuent fetch to track network requests
	      // This is needed in case the consent is not granted and some cutsomer
	      // library (Apollo Client) is storing uninstrumented fetch to be used later
	      // The subscrption is needed so that the instrumentation process is completed
	      initFetchObservable().subscribe(noop$2);
	      trackingConsentState.tryToInit(configuration.trackingConsent);
	      tryStartLogs();
	    },
	    get initConfiguration() {
	      return cachedInitConfiguration;
	    },
	    getInternalContext: noop$2,
	    handleLog: function handleLog(message, statusType, handlingStack, context, date) {
	      if (context === void 0) {
	        context = getCommonContext();
	      }
	      if (date === void 0) {
	        date = timeStampNow();
	      }
	      bufferApiCalls.add(function (startLogsResult) {
	        return startLogsResult.handleLog(message, statusType, handlingStack, context, date);
	      });
	    }
	  };
	}
	function overrideInitConfigurationForBridge(initConfiguration) {
	  return assign({}, initConfiguration, {
	    clientToken: 'empty'
	  });
	}

	var LOGS_STORAGE_KEY = 'logs';
	function makeLogsPublicApi(startLogsImpl) {
	  var customerDataTrackerManager = createCustomerDataTrackerManager();
	  var globalContextManager = createContextManager(customerDataTrackerManager.getOrCreateTracker(2 /* CustomerDataType.GlobalContext */));
	  var userContextManager = createContextManager(customerDataTrackerManager.getOrCreateTracker(1 /* CustomerDataType.User */));
	  var trackingConsentState = createTrackingConsentState();
	  function getCommonContext() {
	    return buildCommonContext(globalContextManager, userContextManager);
	  }
	  var strategy = createPreStartStrategy(getCommonContext, trackingConsentState, function (initConfiguration, configuration) {
	    if (initConfiguration.storeContextsAcrossPages) {
	      storeContextManager(configuration, globalContextManager, LOGS_STORAGE_KEY, 2 /* CustomerDataType.GlobalContext */);
	      storeContextManager(configuration, userContextManager, LOGS_STORAGE_KEY, 1 /* CustomerDataType.User */);
	    }
	    var startLogsResult = startLogsImpl(initConfiguration, configuration, getCommonContext, trackingConsentState);
	    strategy = createPostStartStrategy(initConfiguration, startLogsResult);
	    return startLogsResult;
	  });
	  var customLoggers = {};
	  var mainLogger = new Logger(function () {
	    var params = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	      params[_i] = arguments[_i];
	    }
	    return strategy.handleLog.apply(strategy, params);
	  }, customerDataTrackerManager.createDetachedTracker());
	  return makePublicApi({
	    logger: mainLogger,
	    init: monitor(function (initConfiguration) {
	      return strategy.init(initConfiguration);
	    }),
	    setTrackingConsent: monitor(function (trackingConsent) {
	      trackingConsentState.update(trackingConsent);
	      addTelemetryUsage({
	        feature: 'set-tracking-consent',
	        tracking_consent: trackingConsent
	      });
	    }),
	    getGlobalContext: monitor(function () {
	      return globalContextManager.getContext();
	    }),
	    setGlobalContext: monitor(function (context) {
	      return globalContextManager.setContext(context);
	    }),
	    setGlobalContextProperty: monitor(function (key, value) {
	      return globalContextManager.setContextProperty(key, value);
	    }),
	    removeGlobalContextProperty: monitor(function (key) {
	      return globalContextManager.removeContextProperty(key);
	    }),
	    clearGlobalContext: monitor(function () {
	      return globalContextManager.clearContext();
	    }),
	    createLogger: monitor(function (name, conf) {
	      if (conf === void 0) {
	        conf = {};
	      }
	      customLoggers[name] = new Logger(function () {
	        var params = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	          params[_i] = arguments[_i];
	        }
	        return strategy.handleLog.apply(strategy, params);
	      }, customerDataTrackerManager.createDetachedTracker(), sanitize(name), conf.handler, conf.level, sanitize(conf.context));
	      return customLoggers[name];
	    }),
	    getLogger: monitor(function (name) {
	      return customLoggers[name];
	    }),
	    getInitConfiguration: monitor(function () {
	      return deepClone(strategy.initConfiguration);
	    }),
	    getInternalContext: monitor(function (startTime) {
	      return strategy.getInternalContext(startTime);
	    }),
	    setUser: monitor(function (newUser) {
	      if (checkUser(newUser)) {
	        userContextManager.setContext(sanitizeUser(newUser));
	      }
	    }),
	    getUser: monitor(function () {
	      return userContextManager.getContext();
	    }),
	    setUserProperty: monitor(function (key, property) {
	      var _a;
	      var sanitizedProperty = sanitizeUser((_a = {}, _a[key] = property, _a))[key];
	      userContextManager.setContextProperty(key, sanitizedProperty);
	    }),
	    removeUserProperty: monitor(function (key) {
	      return userContextManager.removeContextProperty(key);
	    }),
	    clearUser: monitor(function () {
	      return userContextManager.clearContext();
	    })
	  });
	}
	function createPostStartStrategy(initConfiguration, startLogsResult) {
	  return assign({
	    init: function init(initConfiguration) {
	      displayAlreadyInitializedError('DD_LOGS', initConfiguration);
	    },
	    initConfiguration: initConfiguration
	  }, startLogsResult);
	}

	var LOGS_SESSION_KEY = 'logs';
	function startLogsSessionManager(configuration, trackingConsentState) {
	  var sessionManager = startSessionManager(configuration, LOGS_SESSION_KEY, function (rawTrackingType) {
	    return computeSessionState(configuration, rawTrackingType);
	  }, trackingConsentState);
	  return {
	    findTrackedSession: function findTrackedSession(startTime, options) {
	      if (options === void 0) {
	        options = {
	          returnInactive: false
	        };
	      }
	      var session = sessionManager.findSession(startTime, options);
	      return session && session.trackingType === "1" /* LoggerTrackingType.TRACKED */ ? {
	        id: session.id
	      } : undefined;
	    },
	    expireObservable: sessionManager.expireObservable
	  };
	}
	function startLogsSessionManagerStub(configuration) {
	  var isTracked = computeTrackingType(configuration) === "1" /* LoggerTrackingType.TRACKED */;
	  var session = isTracked ? {} : undefined;
	  return {
	    findTrackedSession: function findTrackedSession() {
	      return session;
	    },
	    expireObservable: new Observable()
	  };
	}
	function computeTrackingType(configuration) {
	  if (!performDraw(configuration.sessionSampleRate)) {
	    return "0" /* LoggerTrackingType.NOT_TRACKED */;
	  }
	  return "1" /* LoggerTrackingType.TRACKED */;
	}
	function computeSessionState(configuration, rawSessionType) {
	  var trackingType = hasValidLoggerSession(rawSessionType) ? rawSessionType : computeTrackingType(configuration);
	  return {
	    trackingType: trackingType,
	    isTracked: trackingType === "1" /* LoggerTrackingType.TRACKED */
	  };
	}
	function hasValidLoggerSession(trackingType) {
	  return trackingType === "0" /* LoggerTrackingType.NOT_TRACKED */ || trackingType === "1" /* LoggerTrackingType.TRACKED */;
	}

	var logsSentBeforeRumInjectionTelemetryAdded = false;
	function getRUMInternalContext(startTime) {
	  var browserWindow = window;
	  if (willSyntheticsInjectRum()) {
	    var context = getInternalContextFromRumGlobal(browserWindow.DD_RUM_SYNTHETICS);
	    if (!context && !logsSentBeforeRumInjectionTelemetryAdded) {
	      logsSentBeforeRumInjectionTelemetryAdded = true;
	      addTelemetryDebug('Logs sent before RUM is injected by the synthetics worker', {
	        testId: getSyntheticsTestId(),
	        resultId: getSyntheticsResultId()
	      });
	    }
	    return context;
	  }
	  return getInternalContextFromRumGlobal(browserWindow.DD_RUM);
	  function getInternalContextFromRumGlobal(rumGlobal) {
	    if (rumGlobal && rumGlobal.getInternalContext) {
	      return rumGlobal.getInternalContext(startTime);
	    }
	  }
	}

	function startLogsAssembly(sessionManager, configuration, lifeCycle, getCommonContext, reportError) {
	  var statusWithCustom = STATUSES.concat(['custom']);
	  var logRateLimiters = {};
	  statusWithCustom.forEach(function (status) {
	    logRateLimiters[status] = createEventRateLimiter(status, configuration.eventRateLimiterThreshold, reportError);
	  });
	  lifeCycle.subscribe(0 /* LifeCycleEventType.RAW_LOG_COLLECTED */, function (_a) {
	    var _b, _c;
	    var rawLogsEvent = _a.rawLogsEvent,
	      _d = _a.messageContext,
	      messageContext = _d === void 0 ? undefined : _d,
	      _e = _a.savedCommonContext,
	      savedCommonContext = _e === void 0 ? undefined : _e,
	      domainContext = _a.domainContext;
	    var startTime = getRelativeTime(rawLogsEvent.date);
	    var session = sessionManager.findTrackedSession(startTime);
	    if (!session && (!configuration.sendLogsAfterSessionExpiration || !sessionManager.findTrackedSession(startTime, {
	      returnInactive: true
	    }))) {
	      return;
	    }
	    var commonContext = savedCommonContext || getCommonContext();
	    var log = combine({
	      service: configuration.service,
	      session_id: session ? session.id : undefined,
	      session: session ? {
	        id: session.id
	      } : undefined,
	      // Insert user first to allow overrides from global context
	      usr: !isEmptyObject(commonContext.user) ? commonContext.user : undefined,
	      view: commonContext.view
	    }, commonContext.context, getRUMInternalContext(startTime), rawLogsEvent, messageContext);
	    if (((_b = configuration.beforeSend) === null || _b === void 0 ? void 0 : _b.call(configuration, log, domainContext)) === false || log.origin !== ErrorSource.AGENT && ((_c = logRateLimiters[log.status]) !== null && _c !== void 0 ? _c : logRateLimiters['custom']).isLimitReached()) {
	      return;
	    }
	    lifeCycle.notify(1 /* LifeCycleEventType.LOG_COLLECTED */, log);
	  });
	}

	var _a$2;
	var LogStatusForApi = (_a$2 = {}, _a$2[ConsoleApiName.log] = StatusType.info, _a$2[ConsoleApiName.debug] = StatusType.debug, _a$2[ConsoleApiName.info] = StatusType.info, _a$2[ConsoleApiName.warn] = StatusType.warn, _a$2[ConsoleApiName.error] = StatusType.error, _a$2);
	function startConsoleCollection(configuration, lifeCycle) {
	  var consoleSubscription = initConsoleObservable(configuration.forwardConsoleLogs).subscribe(function (log) {
	    var collectedData = {
	      rawLogsEvent: {
	        date: timeStampNow(),
	        message: log.message,
	        origin: ErrorSource.CONSOLE,
	        error: log.error && createErrorFieldFromRawError(log.error),
	        status: LogStatusForApi[log.api]
	      },
	      domainContext: {
	        handlingStack: log.handlingStack
	      }
	    };
	    lifeCycle.notify(0 /* LifeCycleEventType.RAW_LOG_COLLECTED */, collectedData);
	  });
	  return {
	    stop: function stop() {
	      consoleSubscription.unsubscribe();
	    }
	  };
	}

	function startReportCollection(configuration, lifeCycle) {
	  var reportSubscription = initReportObservable(configuration, configuration.forwardReports).subscribe(function (rawError) {
	    var message = rawError.message;
	    var error;
	    var status = rawError.originalError.type === 'deprecation' ? StatusType.warn : StatusType.error;
	    if (status === StatusType.error) {
	      error = createErrorFieldFromRawError(rawError);
	    } else if (rawError.stack) {
	      message += " Found in ".concat(getFileFromStackTraceString(rawError.stack));
	    }
	    lifeCycle.notify(0 /* LifeCycleEventType.RAW_LOG_COLLECTED */, {
	      rawLogsEvent: {
	        date: timeStampNow(),
	        message: message,
	        origin: ErrorSource.REPORT,
	        error: error,
	        status: status
	      }
	    });
	  });
	  return {
	    stop: function stop() {
	      reportSubscription.unsubscribe();
	    }
	  };
	}

	function startNetworkErrorCollection(configuration, lifeCycle) {
	  if (!configuration.forwardErrorsToLogs) {
	    return {
	      stop: noop$2
	    };
	  }
	  var xhrSubscription = initXhrObservable(configuration).subscribe(function (context) {
	    if (context.state === 'complete') {
	      handleResponse("xhr" /* RequestType.XHR */, context);
	    }
	  });
	  var fetchSubscription = initFetchObservable().subscribe(function (context) {
	    if (context.state === 'resolve') {
	      handleResponse("fetch" /* RequestType.FETCH */, context);
	    }
	  });
	  function handleResponse(type, request) {
	    if (!isIntakeUrl(request.url) && (isRejected(request) || isServerError(request.status))) {
	      if ('xhr' in request) {
	        computeXhrResponseData(request.xhr, configuration, onResponseDataAvailable);
	      } else if (request.response) {
	        computeFetchResponseText(request.response, configuration, onResponseDataAvailable);
	      } else if (request.error) {
	        computeFetchErrorText(request.error, configuration, onResponseDataAvailable);
	      }
	    }
	    function onResponseDataAvailable(responseData) {
	      var domainContext = {
	        isAborted: request.isAborted,
	        handlingStack: request.handlingStack
	      };
	      lifeCycle.notify(0 /* LifeCycleEventType.RAW_LOG_COLLECTED */, {
	        rawLogsEvent: {
	          message: "".concat(format(type), " error ").concat(request.method, " ").concat(request.url),
	          date: request.startClocks.timeStamp,
	          error: {
	            stack: responseData || 'Failed to load',
	            // We don't know if the error was handled or not, so we set it to undefined
	            handling: undefined
	          },
	          http: {
	            method: request.method,
	            // Cast resource method because of case mismatch cf issue RUMF-1152
	            status_code: request.status,
	            url: request.url
	          },
	          status: StatusType.error,
	          origin: ErrorSource.NETWORK
	        },
	        domainContext: domainContext
	      });
	    }
	  }
	  return {
	    stop: function stop() {
	      xhrSubscription.unsubscribe();
	      fetchSubscription.unsubscribe();
	    }
	  };
	}
	// TODO: ideally, computeXhrResponseData should always call the callback with a string instead of
	// `unknown`. But to keep backward compatibility, in the case of XHR with a `responseType` different
	// than "text", the response data should be whatever `xhr.response` is. This is a bit confusing as
	// Logs event 'stack' is expected to be a string. This should be changed in a future major version
	// as it could be a breaking change.
	function computeXhrResponseData(xhr, configuration, callback) {
	  if (typeof xhr.response === 'string') {
	    callback(truncateResponseText(xhr.response, configuration));
	  } else {
	    callback(xhr.response);
	  }
	}
	function computeFetchErrorText(error, configuration, callback) {
	  callback(truncateResponseText(toStackTraceString(computeStackTrace(error)), configuration));
	}
	function computeFetchResponseText(response, configuration, callback) {
	  var clonedResponse = tryToClone(response);
	  if (!clonedResponse || !clonedResponse.body) {
	    // if the clone failed or if the body is null, let's not try to read it.
	    callback();
	  } else if (!window.TextDecoder) {
	    // If the browser doesn't support TextDecoder, let's read the whole response then truncate it.
	    //
	    // This should only be the case on early versions of Edge (before they migrated to Chromium).
	    // Even if it could be possible to implement a workaround for the missing TextDecoder API (using
	    // a Blob and FileReader), we found another issue preventing us from reading only the first
	    // bytes from the response: contrary to other browsers, when reading from the cloned response,
	    // if the original response gets canceled, the cloned response is also canceled and we can't
	    // know about it.  In the following illustration, the promise returned by `reader.read()` may
	    // never be fulfilled:
	    //
	    // fetch('/').then((response) => {
	    //   const reader = response.clone().body.getReader()
	    //   readMore()
	    //   function readMore() {
	    //     reader.read().then(
	    //       (result) => {
	    //         if (result.done) {
	    //           console.log('done')
	    //         } else {
	    //           readMore()
	    //         }
	    //       },
	    //       () => console.log('error')
	    //     )
	    //   }
	    //   response.body.getReader().cancel()
	    // })
	    clonedResponse.text().then(monitor(function (text) {
	      return callback(truncateResponseText(text, configuration));
	    }), monitor(function (error) {
	      return callback("Unable to retrieve response: ".concat(error));
	    }));
	  } else {
	    truncateResponseStream(clonedResponse.body, configuration.requestErrorResponseLengthLimit, function (error, responseText) {
	      if (error) {
	        callback("Unable to retrieve response: ".concat(error));
	      } else {
	        callback(responseText);
	      }
	    });
	  }
	}
	function isRejected(request) {
	  return request.status === 0 && request.responseType !== 'opaque';
	}
	function truncateResponseText(responseText, configuration) {
	  if (responseText.length > configuration.requestErrorResponseLengthLimit) {
	    return "".concat(responseText.substring(0, configuration.requestErrorResponseLengthLimit), "...");
	  }
	  return responseText;
	}
	function format(type) {
	  if ("xhr" /* RequestType.XHR */ === type) {
	    return 'XHR';
	  }
	  return 'Fetch';
	}
	function truncateResponseStream(stream, bytesLimit, callback) {
	  readBytesFromStream(stream, function (error, bytes, limitExceeded) {
	    if (error) {
	      callback(error);
	    } else {
	      var responseText = new TextDecoder().decode(bytes);
	      if (limitExceeded) {
	        responseText += '...';
	      }
	      callback(undefined, responseText);
	    }
	  }, {
	    bytesLimit: bytesLimit,
	    collectStreamBody: true
	  });
	}

	function startRuntimeErrorCollection(configuration, lifeCycle) {
	  if (!configuration.forwardErrorsToLogs) {
	    return {
	      stop: noop$2
	    };
	  }
	  var rawErrorObservable = new Observable();
	  var stopRuntimeErrorTracking = trackRuntimeError(rawErrorObservable).stop;
	  var rawErrorSubscription = rawErrorObservable.subscribe(function (rawError) {
	    lifeCycle.notify(0 /* LifeCycleEventType.RAW_LOG_COLLECTED */, {
	      rawLogsEvent: {
	        message: rawError.message,
	        date: rawError.startClocks.timeStamp,
	        error: createErrorFieldFromRawError(rawError),
	        origin: ErrorSource.SOURCE,
	        status: StatusType.error
	      }
	    });
	  });
	  return {
	    stop: function stop() {
	      stopRuntimeErrorTracking();
	      rawErrorSubscription.unsubscribe();
	    }
	  };
	}

	var LifeCycle = AbstractLifeCycle;

	var _a$1;
	function startLoggerCollection(lifeCycle) {
	  function handleLog(logsMessage, logger, handlingStack, savedCommonContext, savedDate) {
	    var messageContext = combine(logger.getContext(), logsMessage.context);
	    if (isAuthorized(logsMessage.status, HandlerType.console, logger)) {
	      displayInConsole(logsMessage, messageContext);
	    }
	    if (isAuthorized(logsMessage.status, HandlerType.http, logger)) {
	      var rawLogEventData = {
	        rawLogsEvent: {
	          date: savedDate || timeStampNow(),
	          message: logsMessage.message,
	          status: logsMessage.status,
	          origin: ErrorSource.LOGGER
	        },
	        messageContext: messageContext,
	        savedCommonContext: savedCommonContext
	      };
	      if (handlingStack) {
	        rawLogEventData.domainContext = {
	          handlingStack: handlingStack
	        };
	      }
	      lifeCycle.notify(0 /* LifeCycleEventType.RAW_LOG_COLLECTED */, rawLogEventData);
	    }
	  }
	  return {
	    handleLog: handleLog
	  };
	}
	var loggerToConsoleApiName = (_a$1 = {}, _a$1[StatusType.ok] = ConsoleApiName.debug, _a$1[StatusType.debug] = ConsoleApiName.debug, _a$1[StatusType.info] = ConsoleApiName.info, _a$1[StatusType.notice] = ConsoleApiName.info, _a$1[StatusType.warn] = ConsoleApiName.warn, _a$1[StatusType.error] = ConsoleApiName.error, _a$1[StatusType.critical] = ConsoleApiName.error, _a$1[StatusType.alert] = ConsoleApiName.error, _a$1[StatusType.emerg] = ConsoleApiName.error, _a$1);
	function displayInConsole(_a, messageContext) {
	  var status = _a.status,
	    message = _a.message;
	  originalConsoleMethods[loggerToConsoleApiName[status]].call(globalConsole, message, messageContext);
	}

	function startLogsBatch(configuration, lifeCycle, reportError, pageExitObservable, session) {
	  var batch = startBatchWithReplica(configuration, {
	    endpoint: configuration.logsEndpointBuilder,
	    encoder: createIdentityEncoder()
	  }, configuration.replica && {
	    endpoint: configuration.replica.logsEndpointBuilder,
	    encoder: createIdentityEncoder()
	  }, reportError, pageExitObservable, session.expireObservable);
	  lifeCycle.subscribe(1 /* LifeCycleEventType.LOG_COLLECTED */, function (serverLogsEvent) {
	    batch.add(serverLogsEvent);
	  });
	  return batch;
	}

	function startLogsBridge(lifeCycle) {
	  var bridge = getEventBridge();
	  lifeCycle.subscribe(1 /* LifeCycleEventType.LOG_COLLECTED */, function (serverLogsEvent) {
	    bridge.send('log', serverLogsEvent);
	  });
	}

	function startInternalContext(sessionManager) {
	  return {
	    get: function get(startTime) {
	      var trackedSession = sessionManager.findTrackedSession(startTime);
	      if (trackedSession) {
	        return {
	          session_id: trackedSession.id
	        };
	      }
	    }
	  };
	}

	function startReportError(lifeCycle) {
	  return function (error) {
	    lifeCycle.notify(0 /* LifeCycleEventType.RAW_LOG_COLLECTED */, {
	      rawLogsEvent: {
	        message: error.message,
	        date: error.startClocks.timeStamp,
	        origin: ErrorSource.AGENT,
	        status: StatusType.error
	      }
	    });
	    addTelemetryDebug('Error reported to customer', {
	      'error.message': error.message
	    });
	  };
	}

	function startLogsTelemetry(initConfiguration, configuration, reportError, pageExitObservable, session) {
	  var telemetry = startTelemetry("browser-logs-sdk" /* TelemetryService.LOGS */, configuration);
	  telemetry.setContextProvider(function () {
	    var _a, _b, _c, _d, _e, _f;
	    return {
	      application: {
	        id: (_a = getRUMInternalContext()) === null || _a === void 0 ? void 0 : _a.application_id
	      },
	      session: {
	        id: (_b = session.findTrackedSession()) === null || _b === void 0 ? void 0 : _b.id
	      },
	      view: {
	        id: (_d = (_c = getRUMInternalContext()) === null || _c === void 0 ? void 0 : _c.view) === null || _d === void 0 ? void 0 : _d.id
	      },
	      action: {
	        id: (_f = (_e = getRUMInternalContext()) === null || _e === void 0 ? void 0 : _e.user_action) === null || _f === void 0 ? void 0 : _f.id
	      }
	    };
	  });
	  var cleanupTasks = [];
	  if (canUseEventBridge()) {
	    var bridge_1 = getEventBridge();
	    var telemetrySubscription_1 = telemetry.observable.subscribe(function (event) {
	      return bridge_1.send('internal_telemetry', event);
	    });
	    cleanupTasks.push(function () {
	      return telemetrySubscription_1.unsubscribe();
	    });
	  } else {
	    var telemetryBatch_1 = startBatchWithReplica(configuration, {
	      endpoint: configuration.rumEndpointBuilder,
	      encoder: createIdentityEncoder()
	    }, configuration.replica && {
	      endpoint: configuration.replica.rumEndpointBuilder,
	      encoder: createIdentityEncoder()
	    }, reportError, pageExitObservable, session.expireObservable);
	    cleanupTasks.push(function () {
	      return telemetryBatch_1.stop();
	    });
	    var telemetrySubscription_2 = telemetry.observable.subscribe(function (event) {
	      return telemetryBatch_1.add(event, isTelemetryReplicationAllowed(configuration));
	    });
	    cleanupTasks.push(function () {
	      return telemetrySubscription_2.unsubscribe();
	    });
	  }
	  drainPreStartTelemetry();
	  addTelemetryConfiguration(serializeLogsConfiguration(initConfiguration));
	  return {
	    telemetry: telemetry,
	    stop: function stop() {
	      cleanupTasks.forEach(function (task) {
	        return task();
	      });
	    }
	  };
	}

	function startLogs(initConfiguration, configuration, getCommonContext,
	// `startLogs` and its subcomponents assume tracking consent is granted initially and starts
	// collecting logs unconditionally. As such, `startLogs` should be called with a
	// `trackingConsentState` set to "granted".
	trackingConsentState) {
	  var lifeCycle = new LifeCycle();
	  var cleanupTasks = [];
	  lifeCycle.subscribe(1 /* LifeCycleEventType.LOG_COLLECTED */, function (log) {
	    return sendToExtension('logs', log);
	  });
	  var reportError = startReportError(lifeCycle);
	  var pageExitObservable = createPageExitObservable(configuration);
	  var session = configuration.sessionStoreStrategyType && !canUseEventBridge() && !willSyntheticsInjectRum() ? startLogsSessionManager(configuration, trackingConsentState) : startLogsSessionManagerStub(configuration);
	  var stopLogsTelemetry = startLogsTelemetry(initConfiguration, configuration, reportError, pageExitObservable, session).stop;
	  cleanupTasks.push(function () {
	    return stopLogsTelemetry();
	  });
	  startNetworkErrorCollection(configuration, lifeCycle);
	  startRuntimeErrorCollection(configuration, lifeCycle);
	  startConsoleCollection(configuration, lifeCycle);
	  startReportCollection(configuration, lifeCycle);
	  var handleLog = startLoggerCollection(lifeCycle).handleLog;
	  startLogsAssembly(session, configuration, lifeCycle, getCommonContext, reportError);
	  if (!canUseEventBridge()) {
	    var stopLogsBatch_1 = startLogsBatch(configuration, lifeCycle, reportError, pageExitObservable, session).stop;
	    cleanupTasks.push(function () {
	      return stopLogsBatch_1();
	    });
	  } else {
	    startLogsBridge(lifeCycle);
	  }
	  var internalContext = startInternalContext(session);
	  return {
	    handleLog: handleLog,
	    getInternalContext: internalContext.get,
	    stop: function stop() {
	      cleanupTasks.forEach(function (task) {
	        return task();
	      });
	    }
	  };
	}

	var datadogLogs = makeLogsPublicApi(startLogs);
	defineGlobal(getGlobalObject(), 'DD_LOGS', datadogLogs);

	var Datadog = /*#__PURE__*/function () {
	  function Datadog() {}
	  var _proto = Datadog.prototype;
	  _proto.init = /*#__PURE__*/function () {
	    var _init = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
	      return _regeneratorRuntime().wrap(function _callee$(_context) {
	        while (1) switch (_context.prev = _context.next) {
	          case 0:
	            datadogLogs.init({
	              clientToken: "pub06035768a8696ee5087fdd7f6480034a",
	              forwardErrorsToLogs: true,
	              version: "1.1.1",
	              forwardConsoleLogs: "all",
	              forwardReports: "all",
	              service: "player-benchmark"
	            });
	            datadogLogs.setGlobalContextProperty('url', window.location.href);
	            datadogLogs.setGlobalContextProperty('pbCommonBuildTime', "4/3/2025, 3:59:34 PM");
	          case 3:
	          case "end":
	            return _context.stop();
	        }
	      }, _callee);
	    }));
	    function init() {
	      return _init.apply(this, arguments);
	    }
	    return init;
	  }();
	  _proto.setContextProperty = function setContextProperty(key, value) {
	    datadogLogs.setGlobalContextProperty(key, value);
	  };
	  return Datadog;
	}();
	var datadog = new Datadog();
	// https://app.datadoghq.com/logs?query=%40service%3Aplayer-benchmark&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=hot&stream_sort=desc&viz=stream&from_ts=1735793770985&to_ts=1735808170985&live=true

	var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

	// shim for using process in browser
	// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

	function defaultSetTimout() {
	  throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	  throw new Error('clearTimeout has not been defined');
	}
	var cachedSetTimeout = defaultSetTimout;
	var cachedClearTimeout = defaultClearTimeout;
	if (typeof global$1.setTimeout === 'function') {
	  cachedSetTimeout = setTimeout;
	}
	if (typeof global$1.clearTimeout === 'function') {
	  cachedClearTimeout = clearTimeout;
	}
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
	  } catch (e) {
	    try {
	      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	      return cachedSetTimeout.call(null, fun, 0);
	    } catch (e) {
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
	  } catch (e) {
	    try {
	      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	      return cachedClearTimeout.call(null, marker);
	    } catch (e) {
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
	  while (len) {
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
	function nextTick(fun) {
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
	}
	// v8 likes predictible objects
	function Item(fun, array) {
	  this.fun = fun;
	  this.array = array;
	}
	Item.prototype.run = function () {
	  this.fun.apply(null, this.array);
	};
	var title = 'browser';
	var platform$2 = 'browser';
	var browser = true;
	var env = {};
	var argv = [];
	var version = ''; // empty string to avoid regexp issues
	var versions = {};
	var release = {};
	var config$1 = {};
	function noop$1() {}
	var on = noop$1;
	var addListener = noop$1;
	var once = noop$1;
	var off = noop$1;
	var removeListener = noop$1;
	var removeAllListeners = noop$1;
	var emit = noop$1;
	function binding(name) {
	  throw new Error('process.binding is not supported');
	}
	function cwd() {
	  return '/';
	}
	function chdir(dir) {
	  throw new Error('process.chdir is not supported');
	}
	function umask() {
	  return 0;
	}

	// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
	var performance$1 = global$1.performance || {};
	var performanceNow = performance$1.now || performance$1.mozNow || performance$1.msNow || performance$1.oNow || performance$1.webkitNow || function () {
	  return new Date().getTime();
	};

	// generate timestamp or delta
	// see http://nodejs.org/api/process.html#process_process_hrtime
	function hrtime(previousTimestamp) {
	  var clocktime = performanceNow.call(performance$1) * 1e-3;
	  var seconds = Math.floor(clocktime);
	  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
	  if (previousTimestamp) {
	    seconds = seconds - previousTimestamp[0];
	    nanoseconds = nanoseconds - previousTimestamp[1];
	    if (nanoseconds < 0) {
	      seconds--;
	      nanoseconds += 1e9;
	    }
	  }
	  return [seconds, nanoseconds];
	}
	var startTime = new Date();
	function uptime() {
	  var currentTime = new Date();
	  var dif = currentTime - startTime;
	  return dif / 1000;
	}
	var process = {
	  nextTick: nextTick,
	  title: title,
	  browser: browser,
	  env: env,
	  argv: argv,
	  version: version,
	  versions: versions,
	  on: on,
	  addListener: addListener,
	  once: once,
	  off: off,
	  removeListener: removeListener,
	  removeAllListeners: removeAllListeners,
	  emit: emit,
	  binding: binding,
	  cwd: cwd,
	  chdir: chdir,
	  umask: umask,
	  hrtime: hrtime,
	  platform: platform$2,
	  release: release,
	  config: config$1,
	  uptime: uptime
	};

	function bind(fn, thisArg) {
	  return function wrap() {
	    return fn.apply(thisArg, arguments);
	  };
	}

	// utils is a library of generic helper functions non-specific to axios

	var toString$1 = Object.prototype.toString;
	var getPrototypeOf = Object.getPrototypeOf;
	var kindOf = function (cache) {
	  return function (thing) {
	    var str = toString$1.call(thing);
	    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
	  };
	}(Object.create(null));
	var kindOfTest = function kindOfTest(type) {
	  type = type.toLowerCase();
	  return function (thing) {
	    return kindOf(thing) === type;
	  };
	};
	var typeOfTest = function typeOfTest(type) {
	  return function (thing) {
	    return typeof thing === type;
	  };
	};

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 *
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	var isArray$1 = Array.isArray;

	/**
	 * Determine if a value is undefined
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	var isUndefined = typeOfTest('undefined');

	/**
	 * Determine if a value is a Buffer
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Buffer, otherwise false
	 */
	function isBuffer$1(val) {
	  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	var isArrayBuffer = kindOfTest('ArrayBuffer');

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = val && val.buffer && isArrayBuffer(val.buffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	var isString = typeOfTest('string');

	/**
	 * Determine if a value is a Function
	 *
	 * @param {*} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	var isFunction = typeOfTest('function');

	/**
	 * Determine if a value is a Number
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	var isNumber = typeOfTest('number');

	/**
	 * Determine if a value is an Object
	 *
	 * @param {*} thing The value to test
	 *
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	var isObject = function isObject(thing) {
	  return thing !== null && typeof thing === 'object';
	};

	/**
	 * Determine if a value is a Boolean
	 *
	 * @param {*} thing The value to test
	 * @returns {boolean} True if value is a Boolean, otherwise false
	 */
	var isBoolean = function isBoolean(thing) {
	  return thing === true || thing === false;
	};

	/**
	 * Determine if a value is a plain Object
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a plain Object, otherwise false
	 */
	var isPlainObject = function isPlainObject(val) {
	  if (kindOf(val) !== 'object') {
	    return false;
	  }
	  var prototype = getPrototypeOf(val);
	  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
	};

	/**
	 * Determine if a value is a Date
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	var isDate = kindOfTest('Date');

	/**
	 * Determine if a value is a File
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	var isFile = kindOfTest('File');

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	var isBlob = kindOfTest('Blob');

	/**
	 * Determine if a value is a FileList
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	var isFileList = kindOfTest('FileList');

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	var isStream = function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	};

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {*} thing The value to test
	 *
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	var isFormData = function isFormData(thing) {
	  var kind;
	  return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||
	  // detect form-data instance
	  kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
	};

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	var isURLSearchParams = kindOfTest('URLSearchParams');
	var _map = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest),
	  _map2 = _slicedToArray(_map, 4),
	  isReadableStream = _map2[0],
	  isRequest = _map2[1],
	  isResponse = _map2[2],
	  isHeaders = _map2[3];

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 *
	 * @returns {String} The String freed of excess whitespace
	 */
	var trim = function trim(str) {
	  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	};

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 *
	 * @param {Boolean} [allOwnKeys = false]
	 * @returns {any}
	 */
	function forEach(obj, fn, _temp) {
	  var _ref = _temp === void 0 ? {} : _temp,
	    _ref$allOwnKeys = _ref.allOwnKeys,
	    allOwnKeys = _ref$allOwnKeys === void 0 ? false : _ref$allOwnKeys;
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	  var i;
	  var l;

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	  if (isArray$1(obj)) {
	    // Iterate over array values
	    for (i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    var keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
	    var len = keys.length;
	    var key;
	    for (i = 0; i < len; i++) {
	      key = keys[i];
	      fn.call(null, obj[key], key, obj);
	    }
	  }
	}
	function findKey(obj, key) {
	  key = key.toLowerCase();
	  var keys = Object.keys(obj);
	  var i = keys.length;
	  var _key;
	  while (i-- > 0) {
	    _key = keys[i];
	    if (key === _key.toLowerCase()) {
	      return _key;
	    }
	  }
	  return null;
	}
	var _global = function () {
	  /*eslint no-undef:0*/
	  if (typeof globalThis !== "undefined") return globalThis;
	  return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global$1;
	}();
	var isContextDefined = function isContextDefined(context) {
	  return !isUndefined(context) && context !== _global;
	};

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 *
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */
	) {
	  var _ref2 = isContextDefined(this) && this || {},
	    caseless = _ref2.caseless;
	  var result = {};
	  var assignValue = function assignValue(val, key) {
	    var targetKey = caseless && findKey(result, key) || key;
	    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
	      result[targetKey] = merge(result[targetKey], val);
	    } else if (isPlainObject(val)) {
	      result[targetKey] = merge({}, val);
	    } else if (isArray$1(val)) {
	      result[targetKey] = val.slice();
	    } else {
	      result[targetKey] = val;
	    }
	  };
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    arguments[i] && forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 *
	 * @param {Boolean} [allOwnKeys]
	 * @returns {Object} The resulting value of object a
	 */
	var extend = function extend(a, b, thisArg, _temp2) {
	  var _ref3 = _temp2 === void 0 ? {} : _temp2,
	    allOwnKeys = _ref3.allOwnKeys;
	  forEach(b, function (val, key) {
	    if (thisArg && isFunction(val)) {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  }, {
	    allOwnKeys: allOwnKeys
	  });
	  return a;
	};

	/**
	 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
	 *
	 * @param {string} content with BOM
	 *
	 * @returns {string} content value without BOM
	 */
	var stripBOM = function stripBOM(content) {
	  if (content.charCodeAt(0) === 0xFEFF) {
	    content = content.slice(1);
	  }
	  return content;
	};

	/**
	 * Inherit the prototype methods from one constructor into another
	 * @param {function} constructor
	 * @param {function} superConstructor
	 * @param {object} [props]
	 * @param {object} [descriptors]
	 *
	 * @returns {void}
	 */
	var inherits = function inherits(constructor, superConstructor, props, descriptors) {
	  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
	  constructor.prototype.constructor = constructor;
	  Object.defineProperty(constructor, 'super', {
	    value: superConstructor.prototype
	  });
	  props && Object.assign(constructor.prototype, props);
	};

	/**
	 * Resolve object with deep prototype chain to a flat object
	 * @param {Object} sourceObj source object
	 * @param {Object} [destObj]
	 * @param {Function|Boolean} [filter]
	 * @param {Function} [propFilter]
	 *
	 * @returns {Object}
	 */
	var toFlatObject = function toFlatObject(sourceObj, destObj, filter, propFilter) {
	  var props;
	  var i;
	  var prop;
	  var merged = {};
	  destObj = destObj || {};
	  // eslint-disable-next-line no-eq-null,eqeqeq
	  if (sourceObj == null) return destObj;
	  do {
	    props = Object.getOwnPropertyNames(sourceObj);
	    i = props.length;
	    while (i-- > 0) {
	      prop = props[i];
	      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
	        destObj[prop] = sourceObj[prop];
	        merged[prop] = true;
	      }
	    }
	    sourceObj = filter !== false && getPrototypeOf(sourceObj);
	  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
	  return destObj;
	};

	/**
	 * Determines whether a string ends with the characters of a specified string
	 *
	 * @param {String} str
	 * @param {String} searchString
	 * @param {Number} [position= 0]
	 *
	 * @returns {boolean}
	 */
	var endsWith = function endsWith(str, searchString, position) {
	  str = String(str);
	  if (position === undefined || position > str.length) {
	    position = str.length;
	  }
	  position -= searchString.length;
	  var lastIndex = str.indexOf(searchString, position);
	  return lastIndex !== -1 && lastIndex === position;
	};

	/**
	 * Returns new array from array like object or null if failed
	 *
	 * @param {*} [thing]
	 *
	 * @returns {?Array}
	 */
	var toArray = function toArray(thing) {
	  if (!thing) return null;
	  if (isArray$1(thing)) return thing;
	  var i = thing.length;
	  if (!isNumber(i)) return null;
	  var arr = new Array(i);
	  while (i-- > 0) {
	    arr[i] = thing[i];
	  }
	  return arr;
	};

	/**
	 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
	 * thing passed in is an instance of Uint8Array
	 *
	 * @param {TypedArray}
	 *
	 * @returns {Array}
	 */
	// eslint-disable-next-line func-names
	var isTypedArray = function (TypedArray) {
	  // eslint-disable-next-line func-names
	  return function (thing) {
	    return TypedArray && thing instanceof TypedArray;
	  };
	}(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

	/**
	 * For each entry in the object, call the function with the key and value.
	 *
	 * @param {Object<any, any>} obj - The object to iterate over.
	 * @param {Function} fn - The function to call for each entry.
	 *
	 * @returns {void}
	 */
	var forEachEntry = function forEachEntry(obj, fn) {
	  var generator = obj && obj[Symbol.iterator];
	  var iterator = generator.call(obj);
	  var result;
	  while ((result = iterator.next()) && !result.done) {
	    var pair = result.value;
	    fn.call(obj, pair[0], pair[1]);
	  }
	};

	/**
	 * It takes a regular expression and a string, and returns an array of all the matches
	 *
	 * @param {string} regExp - The regular expression to match against.
	 * @param {string} str - The string to search.
	 *
	 * @returns {Array<boolean>}
	 */
	var matchAll = function matchAll(regExp, str) {
	  var matches;
	  var arr = [];
	  while ((matches = regExp.exec(str)) !== null) {
	    arr.push(matches);
	  }
	  return arr;
	};

	/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
	var isHTMLForm = kindOfTest('HTMLFormElement');
	var toCamelCase = function toCamelCase(str) {
	  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
	    return p1.toUpperCase() + p2;
	  });
	};

	/* Creating a function that will check if an object has a property. */
	var hasOwnProperty = function (_ref4) {
	  var hasOwnProperty = _ref4.hasOwnProperty;
	  return function (obj, prop) {
	    return hasOwnProperty.call(obj, prop);
	  };
	}(Object.prototype);

	/**
	 * Determine if a value is a RegExp object
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a RegExp object, otherwise false
	 */
	var isRegExp = kindOfTest('RegExp');
	var reduceDescriptors = function reduceDescriptors(obj, reducer) {
	  var descriptors = Object.getOwnPropertyDescriptors(obj);
	  var reducedDescriptors = {};
	  forEach(descriptors, function (descriptor, name) {
	    var ret;
	    if ((ret = reducer(descriptor, name, obj)) !== false) {
	      reducedDescriptors[name] = ret || descriptor;
	    }
	  });
	  Object.defineProperties(obj, reducedDescriptors);
	};

	/**
	 * Makes all methods read-only
	 * @param {Object} obj
	 */

	var freezeMethods = function freezeMethods(obj) {
	  reduceDescriptors(obj, function (descriptor, name) {
	    // skip restricted props in strict mode
	    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
	      return false;
	    }
	    var value = obj[name];
	    if (!isFunction(value)) return;
	    descriptor.enumerable = false;
	    if ('writable' in descriptor) {
	      descriptor.writable = false;
	      return;
	    }
	    if (!descriptor.set) {
	      descriptor.set = function () {
	        throw Error('Can not rewrite read-only method \'' + name + '\'');
	      };
	    }
	  });
	};
	var toObjectSet = function toObjectSet(arrayOrString, delimiter) {
	  var obj = {};
	  var define = function define(arr) {
	    arr.forEach(function (value) {
	      obj[value] = true;
	    });
	  };
	  isArray$1(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
	  return obj;
	};
	var noop = function noop() {};
	var toFiniteNumber = function toFiniteNumber(value, defaultValue) {
	  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
	};
	var ALPHA = 'abcdefghijklmnopqrstuvwxyz';
	var DIGIT = '0123456789';
	var ALPHABET = {
	  DIGIT: DIGIT,
	  ALPHA: ALPHA,
	  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
	};
	var generateString = function generateString(size, alphabet) {
	  if (size === void 0) {
	    size = 16;
	  }
	  if (alphabet === void 0) {
	    alphabet = ALPHABET.ALPHA_DIGIT;
	  }
	  var str = '';
	  var _alphabet = alphabet,
	    length = _alphabet.length;
	  while (size--) {
	    str += alphabet[Math.random() * length | 0];
	  }
	  return str;
	};

	/**
	 * If the thing is a FormData object, return true, otherwise return false.
	 *
	 * @param {unknown} thing - The thing to check.
	 *
	 * @returns {boolean}
	 */
	function isSpecCompliantForm(thing) {
	  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
	}
	var toJSONObject = function toJSONObject(obj) {
	  var stack = new Array(10);
	  var _visit = function visit(source, i) {
	    if (isObject(source)) {
	      if (stack.indexOf(source) >= 0) {
	        return;
	      }
	      if (!('toJSON' in source)) {
	        stack[i] = source;
	        var target = isArray$1(source) ? [] : {};
	        forEach(source, function (value, key) {
	          var reducedValue = _visit(value, i + 1);
	          !isUndefined(reducedValue) && (target[key] = reducedValue);
	        });
	        stack[i] = undefined;
	        return target;
	      }
	    }
	    return source;
	  };
	  return _visit(obj, 0);
	};
	var isAsyncFn = kindOfTest('AsyncFunction');
	var isThenable = function isThenable(thing) {
	  return thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
	};

	// original code
	// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

	var _setImmediate = function (setImmediateSupported, postMessageSupported) {
	  if (setImmediateSupported) {
	    return setImmediate;
	  }
	  return postMessageSupported ? function (token, callbacks) {
	    _global.addEventListener("message", function (_ref5) {
	      var source = _ref5.source,
	        data = _ref5.data;
	      if (source === _global && data === token) {
	        callbacks.length && callbacks.shift()();
	      }
	    }, false);
	    return function (cb) {
	      callbacks.push(cb);
	      _global.postMessage(token, "*");
	    };
	  }("axios@" + Math.random(), []) : function (cb) {
	    return setTimeout(cb);
	  };
	}(typeof setImmediate === 'function', isFunction(_global.postMessage));
	var asap = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind(_global) : typeof process !== 'undefined' && nextTick || _setImmediate;

	// *********************

	var utils$1 = {
	  isArray: isArray$1,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer$1,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isBoolean: isBoolean,
	  isObject: isObject,
	  isPlainObject: isPlainObject,
	  isReadableStream: isReadableStream,
	  isRequest: isRequest,
	  isResponse: isResponse,
	  isHeaders: isHeaders,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isRegExp: isRegExp,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isTypedArray: isTypedArray,
	  isFileList: isFileList,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim,
	  stripBOM: stripBOM,
	  inherits: inherits,
	  toFlatObject: toFlatObject,
	  kindOf: kindOf,
	  kindOfTest: kindOfTest,
	  endsWith: endsWith,
	  toArray: toArray,
	  forEachEntry: forEachEntry,
	  matchAll: matchAll,
	  isHTMLForm: isHTMLForm,
	  hasOwnProperty: hasOwnProperty,
	  hasOwnProp: hasOwnProperty,
	  // an alias to avoid ESLint no-prototype-builtins detection
	  reduceDescriptors: reduceDescriptors,
	  freezeMethods: freezeMethods,
	  toObjectSet: toObjectSet,
	  toCamelCase: toCamelCase,
	  noop: noop,
	  toFiniteNumber: toFiniteNumber,
	  findKey: findKey,
	  global: _global,
	  isContextDefined: isContextDefined,
	  ALPHABET: ALPHABET,
	  generateString: generateString,
	  isSpecCompliantForm: isSpecCompliantForm,
	  toJSONObject: toJSONObject,
	  isAsyncFn: isAsyncFn,
	  isThenable: isThenable,
	  setImmediate: _setImmediate,
	  asap: asap
	};

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	var inited = false;
	function init() {
	  inited = true;
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i];
	    revLookup[code.charCodeAt(i)] = i;
	  }
	  revLookup['-'.charCodeAt(0)] = 62;
	  revLookup['_'.charCodeAt(0)] = 63;
	}
	function toByteArray(b64) {
	  if (!inited) {
	    init();
	  }
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4');
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;
	  var L = 0;
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = tmp >> 16 & 0xFF;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }
	  if (placeHolders === 2) {
	    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }
	  return arr;
	}
	function tripletToBase64(num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
	}
	function encodeChunk(uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('');
	}
	function fromByteArray(uint8) {
	  if (!inited) {
	    init();
	  }
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[tmp << 4 & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
	    output += lookup[tmp >> 10];
	    output += lookup[tmp >> 4 & 0x3F];
	    output += lookup[tmp << 2 & 0x3F];
	    output += '=';
	  }
	  parts.push(output);
	  return parts.join('');
	}

	function read(buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? nBytes - 1 : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];
	  i += d;
	  e = s & (1 << -nBits) - 1;
	  s >>= -nBits;
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : (s ? -1 : 1) * Infinity;
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	}
	function write(buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
	  var i = isLE ? 0 : nBytes - 1;
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
	  value = Math.abs(value);
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	  buffer[offset + i - d] |= s * 128;
	}

	var toString = {}.toString;
	var isArray = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

	var INSPECT_MAX_BYTES = 50;

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
	Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined ? global$1.TYPED_ARRAY_SUPPORT : true;

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	kMaxLength();
	function kMaxLength() {
	  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
	}
	function createBuffer(that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length');
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length);
	    }
	    that.length = length;
	  }
	  return that;
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

	function Buffer(arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length);
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error('If encoding is specified then the first argument must be a string');
	    }
	    return allocUnsafe(this, arg);
	  }
	  return from(this, arg, encodingOrOffset, length);
	}
	Buffer.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype;
	  return arr;
	};
	function from(that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length);
	  }
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset);
	  }
	  return fromObject(that, value);
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
	  return from(null, value, encodingOrOffset, length);
	};
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype;
	  Buffer.__proto__ = Uint8Array;
	  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) ;
	}
	function assertSize(size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number');
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative');
	  }
	}
	function alloc(that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size);
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
	  }
	  return createBuffer(that, size);
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding);
	};
	function allocUnsafe(that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that;
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size);
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size);
	};
	function fromString(that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding');
	  }
	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);
	  var actual = that.write(string, encoding);
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }
	  return that;
	}
	function fromArrayLike(that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that;
	}
	function fromArrayBuffer(that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds');
	  }
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds');
	  }
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that;
	}
	function fromObject(that, obj) {
	  if (internalIsBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);
	    if (that.length === 0) {
	      return that;
	    }
	    obj.copy(that, 0, 0, len);
	    return that;
	  }
	  if (obj) {
	    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0);
	      }
	      return fromArrayLike(that, obj);
	    }
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data);
	    }
	  }
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
	}
	function checked(length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
	  }
	  return length | 0;
	}
	Buffer.isBuffer = isBuffer;
	function internalIsBuffer(b) {
	  return !!(b != null && b._isBuffer);
	}
	Buffer.compare = function compare(a, b) {
	  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers');
	  }
	  if (a === b) return 0;
	  var x = a.length;
	  var y = b.length;
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }
	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};
	Buffer.isEncoding = function isEncoding(encoding) {
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
	      return true;
	    default:
	      return false;
	  }
	};
	Buffer.concat = function concat(list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers');
	  }
	  if (list.length === 0) {
	    return Buffer.alloc(0);
	  }
	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }
	  var buffer = Buffer.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!internalIsBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers');
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer;
	};
	function byteLength(string, encoding) {
	  if (internalIsBuffer(string)) {
	    return string.length;
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength;
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }
	  var len = string.length;
	  if (len === 0) return 0;

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len;
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length;
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2;
	      case 'hex':
	        return len >>> 1;
	      case 'base64':
	        return base64ToBytes(string).length;
	      default:
	        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;
	function slowToString(encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return '';
	  }
	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }
	  if (end <= 0) {
	    return '';
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;
	  if (end <= start) {
	    return '';
	  }
	  if (!encoding) encoding = 'utf8';
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end);
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end);
	      case 'ascii':
	        return asciiSlice(this, start, end);
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end);
	      case 'base64':
	        return base64Slice(this, start, end);
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end);
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true;
	function swap(b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}
	Buffer.prototype.swap16 = function swap16() {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits');
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this;
	};
	Buffer.prototype.swap32 = function swap32() {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits');
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this;
	};
	Buffer.prototype.swap64 = function swap64() {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits');
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this;
	};
	Buffer.prototype.toString = function toString() {
	  var length = this.length | 0;
	  if (length === 0) return '';
	  if (arguments.length === 0) return utf8Slice(this, 0, length);
	  return slowToString.apply(this, arguments);
	};
	Buffer.prototype.equals = function equals(b) {
	  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer');
	  if (this === b) return true;
	  return Buffer.compare(this, b) === 0;
	};
	Buffer.prototype.inspect = function inspect() {
	  var str = '';
	  var max = INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>';
	};
	Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
	  if (!internalIsBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer');
	  }
	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index');
	  }
	  if (thisStart >= thisEnd && start >= end) {
	    return 0;
	  }
	  if (thisStart >= thisEnd) {
	    return -1;
	  }
	  if (start >= end) {
	    return 1;
	  }
	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;
	  if (this === target) return 0;
	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);
	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break;
	    }
	  }
	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1;

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset; // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : buffer.length - 1;
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1;else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;else return -1;
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (internalIsBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1;
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
	      }
	    }
	    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
	  }
	  throw new TypeError('val must be string, number or Buffer');
	}
	function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1;
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }
	  function read(buf, i) {
	    if (indexSize === 1) {
	      return buf[i];
	    } else {
	      return buf.readUInt16BE(i * indexSize);
	    }
	  }
	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break;
	        }
	      }
	      if (found) return i;
	    }
	  }
	  return -1;
	}
	Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1;
	};
	Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
	};
	Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
	};
	function hexWrite(buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');
	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i;
	    buf[offset + i] = parsed;
	  }
	  return i;
	}
	function utf8Write(buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
	}
	function asciiWrite(buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length);
	}
	function latin1Write(buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length);
	}
	function base64Write(buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length);
	}
	function ucs2Write(buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
	}
	Buffer.prototype.write = function write(string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	    // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	    // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	    // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
	  }
	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;
	  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds');
	  }
	  if (!encoding) encoding = 'utf8';
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length);
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length);
	      case 'ascii':
	        return asciiWrite(this, string, offset, length);
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length);
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length);
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length);
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};
	Buffer.prototype.toJSON = function toJSON() {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  };
	};
	function base64Slice(buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return fromByteArray(buf);
	  } else {
	    return fromByteArray(buf.slice(start, end));
	  }
	}
	function utf8Slice(buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];
	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break;
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }
	    res.push(codePoint);
	    i += bytesPerSequence;
	  }
	  return decodeCodePointsArray(res);
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;
	function decodeCodePointsArray(codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
	  }
	  return res;
	}
	function asciiSlice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret;
	}
	function latin1Slice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret;
	}
	function hexSlice(buf, start, end) {
	  var len = buf.length;
	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;
	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out;
	}
	function utf16leSlice(buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res;
	}
	Buffer.prototype.slice = function slice(start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;
	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }
	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }
	  if (end < start) end = start;
	  var newBuf;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }
	  return newBuf;
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset(offset, ext, length) {
	  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
	}
	Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  return val;
	};
	Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }
	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }
	  return val;
	};
	Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset];
	};
	Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | this[offset + 1] << 8;
	};
	Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] << 8 | this[offset + 1];
	};
	Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
	};
	Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
	};
	Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
	  return val;
	};
	Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
	  return val;
	};
	Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return this[offset];
	  return (0xff - this[offset] + 1) * -1;
	};
	Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | this[offset + 1] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};
	Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | this[offset] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};
	Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
	};
	Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
	};
	Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, true, 23, 4);
	};
	Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, false, 23, 4);
	};
	Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, true, 52, 8);
	};
	Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, false, 52, 8);
	};
	function checkInt(buf, value, offset, ext, max, min) {
	  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	}
	Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }
	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }
	  return offset + byteLength;
	};
	Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }
	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }
	  return offset + byteLength;
	};
	Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = value & 0xff;
	  return offset + 1;
	};
	function objectWriteUInt16(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
	  }
	}
	Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};
	Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};
	function objectWriteUInt32(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
	  }
	}
	Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = value >>> 24;
	    this[offset + 2] = value >>> 16;
	    this[offset + 1] = value >>> 8;
	    this[offset] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};
	Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};
	Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);
	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }
	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }
	  return offset + byteLength;
	};
	Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);
	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }
	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }
	  return offset + byteLength;
	};
	Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = value & 0xff;
	  return offset + 1;
	};
	Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};
	Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};
	Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	    this[offset + 2] = value >>> 16;
	    this[offset + 3] = value >>> 24;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};
	Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};
	function checkIEEE754(buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	  if (offset < 0) throw new RangeError('Index out of range');
	}
	function writeFloat(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4);
	  }
	  write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4;
	}
	Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert);
	};
	Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert);
	};
	function writeDouble(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8);
	  }
	  write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8;
	}
	Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert);
	};
	Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert);
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy(target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0;
	  if (target.length === 0 || this.length === 0) return 0;

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds');
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
	  if (end < 0) throw new RangeError('sourceEnd out of bounds');

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }
	  var len = end - start;
	  var i;
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
	  }
	  return len;
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill(val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string');
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding);
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index');
	  }
	  if (end <= start) {
	    return this;
	  }
	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;
	  if (!val) val = 0;
	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }
	  return this;
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
	function base64clean(str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return '';
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str;
	}
	function stringtrim(str) {
	  if (str.trim) return str.trim();
	  return str.replace(/^\s+|\s+$/g, '');
	}
	function toHex(n) {
	  if (n < 16) return '0' + n.toString(16);
	  return n.toString(16);
	}
	function utf8ToBytes(string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        }

	        // valid lead
	        leadSurrogate = codePoint;
	        continue;
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue;
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }
	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break;
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break;
	      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break;
	      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break;
	      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else {
	      throw new Error('Invalid code point');
	    }
	  }
	  return bytes;
	}
	function asciiToBytes(str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray;
	}
	function utf16leToBytes(str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break;
	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }
	  return byteArray;
	}
	function base64ToBytes(str) {
	  return toByteArray(base64clean(str));
	}
	function blitBuffer(src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if (i + offset >= dst.length || i >= src.length) break;
	    dst[i + offset] = src[i];
	  }
	  return i;
	}
	function isnan(val) {
	  return val !== val; // eslint-disable-line no-self-compare
	}

	// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	function isBuffer(obj) {
	  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
	}
	function isFastBuffer(obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer(obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0));
	}

	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [config] The config.
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 *
	 * @returns {Error} The created error.
	 */
	function AxiosError(message, code, config, request, response) {
	  Error.call(this);
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, this.constructor);
	  } else {
	    this.stack = new Error().stack;
	  }
	  this.message = message;
	  this.name = 'AxiosError';
	  code && (this.code = code);
	  config && (this.config = config);
	  request && (this.request = request);
	  if (response) {
	    this.response = response;
	    this.status = response.status ? response.status : null;
	  }
	}
	utils$1.inherits(AxiosError, Error, {
	  toJSON: function toJSON() {
	    return {
	      // Standard
	      message: this.message,
	      name: this.name,
	      // Microsoft
	      description: this.description,
	      number: this.number,
	      // Mozilla
	      fileName: this.fileName,
	      lineNumber: this.lineNumber,
	      columnNumber: this.columnNumber,
	      stack: this.stack,
	      // Axios
	      config: utils$1.toJSONObject(this.config),
	      code: this.code,
	      status: this.status
	    };
	  }
	});
	var prototype$1 = AxiosError.prototype;
	var descriptors = {};
	['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
	// eslint-disable-next-line func-names
	].forEach(function (code) {
	  descriptors[code] = {
	    value: code
	  };
	});
	Object.defineProperties(AxiosError, descriptors);
	Object.defineProperty(prototype$1, 'isAxiosError', {
	  value: true
	});

	// eslint-disable-next-line func-names
	AxiosError.from = function (error, code, config, request, response, customProps) {
	  var axiosError = Object.create(prototype$1);
	  utils$1.toFlatObject(error, axiosError, function filter(obj) {
	    return obj !== Error.prototype;
	  }, function (prop) {
	    return prop !== 'isAxiosError';
	  });
	  AxiosError.call(axiosError, error.message, code, config, request, response);
	  axiosError.cause = error;
	  axiosError.name = error.name;
	  customProps && Object.assign(axiosError, customProps);
	  return axiosError;
	};

	// eslint-disable-next-line strict
	var httpAdapter = null;

	/**
	 * Determines if the given thing is a array or js object.
	 *
	 * @param {string} thing - The object or array to be visited.
	 *
	 * @returns {boolean}
	 */
	function isVisitable(thing) {
	  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
	}

	/**
	 * It removes the brackets from the end of a string
	 *
	 * @param {string} key - The key of the parameter.
	 *
	 * @returns {string} the key without the brackets.
	 */
	function removeBrackets(key) {
	  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
	}

	/**
	 * It takes a path, a key, and a boolean, and returns a string
	 *
	 * @param {string} path - The path to the current key.
	 * @param {string} key - The key of the current object being iterated over.
	 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
	 *
	 * @returns {string} The path to the current key.
	 */
	function renderKey(path, key, dots) {
	  if (!path) return key;
	  return path.concat(key).map(function each(token, i) {
	    // eslint-disable-next-line no-param-reassign
	    token = removeBrackets(token);
	    return !dots && i ? '[' + token + ']' : token;
	  }).join(dots ? '.' : '');
	}

	/**
	 * If the array is an array and none of its elements are visitable, then it's a flat array.
	 *
	 * @param {Array<any>} arr - The array to check
	 *
	 * @returns {boolean}
	 */
	function isFlatArray(arr) {
	  return utils$1.isArray(arr) && !arr.some(isVisitable);
	}
	var predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
	  return /^is[A-Z]/.test(prop);
	});

	/**
	 * Convert a data object to FormData
	 *
	 * @param {Object} obj
	 * @param {?Object} [formData]
	 * @param {?Object} [options]
	 * @param {Function} [options.visitor]
	 * @param {Boolean} [options.metaTokens = true]
	 * @param {Boolean} [options.dots = false]
	 * @param {?Boolean} [options.indexes = false]
	 *
	 * @returns {Object}
	 **/

	/**
	 * It converts an object into a FormData object
	 *
	 * @param {Object<any, any>} obj - The object to convert to form data.
	 * @param {string} formData - The FormData object to append to.
	 * @param {Object<string, any>} options
	 *
	 * @returns
	 */
	function toFormData(obj, formData, options) {
	  if (!utils$1.isObject(obj)) {
	    throw new TypeError('target must be an object');
	  }

	  // eslint-disable-next-line no-param-reassign
	  formData = formData || new (FormData)();

	  // eslint-disable-next-line no-param-reassign
	  options = utils$1.toFlatObject(options, {
	    metaTokens: true,
	    dots: false,
	    indexes: false
	  }, false, function defined(option, source) {
	    // eslint-disable-next-line no-eq-null,eqeqeq
	    return !utils$1.isUndefined(source[option]);
	  });
	  var metaTokens = options.metaTokens;
	  // eslint-disable-next-line no-use-before-define
	  var visitor = options.visitor || defaultVisitor;
	  var dots = options.dots;
	  var indexes = options.indexes;
	  var _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
	  var useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
	  if (!utils$1.isFunction(visitor)) {
	    throw new TypeError('visitor must be a function');
	  }
	  function convertValue(value) {
	    if (value === null) return '';
	    if (utils$1.isDate(value)) {
	      return value.toISOString();
	    }
	    if (!useBlob && utils$1.isBlob(value)) {
	      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
	    }
	    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
	      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
	    }
	    return value;
	  }

	  /**
	   * Default visitor.
	   *
	   * @param {*} value
	   * @param {String|Number} key
	   * @param {Array<String|Number>} path
	   * @this {FormData}
	   *
	   * @returns {boolean} return true to visit the each prop of the value recursively
	   */
	  function defaultVisitor(value, key, path) {
	    var arr = value;
	    if (value && !path && typeof value === 'object') {
	      if (utils$1.endsWith(key, '{}')) {
	        // eslint-disable-next-line no-param-reassign
	        key = metaTokens ? key : key.slice(0, -2);
	        // eslint-disable-next-line no-param-reassign
	        value = JSON.stringify(value);
	      } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))) {
	        // eslint-disable-next-line no-param-reassign
	        key = removeBrackets(key);
	        arr.forEach(function each(el, index) {
	          !(utils$1.isUndefined(el) || el === null) && formData.append(
	          // eslint-disable-next-line no-nested-ternary
	          indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
	        });
	        return false;
	      }
	    }
	    if (isVisitable(value)) {
	      return true;
	    }
	    formData.append(renderKey(path, key, dots), convertValue(value));
	    return false;
	  }
	  var stack = [];
	  var exposedHelpers = Object.assign(predicates, {
	    defaultVisitor: defaultVisitor,
	    convertValue: convertValue,
	    isVisitable: isVisitable
	  });
	  function build(value, path) {
	    if (utils$1.isUndefined(value)) return;
	    if (stack.indexOf(value) !== -1) {
	      throw Error('Circular reference detected in ' + path.join('.'));
	    }
	    stack.push(value);
	    utils$1.forEach(value, function each(el, key) {
	      var result = !(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);
	      if (result === true) {
	        build(el, path ? path.concat(key) : [key]);
	      }
	    });
	    stack.pop();
	  }
	  if (!utils$1.isObject(obj)) {
	    throw new TypeError('data must be an object');
	  }
	  build(obj);
	  return formData;
	}

	/**
	 * It encodes a string by replacing all characters that are not in the unreserved set with
	 * their percent-encoded equivalents
	 *
	 * @param {string} str - The string to encode.
	 *
	 * @returns {string} The encoded string.
	 */
	function encode$1(str) {
	  var charMap = {
	    '!': '%21',
	    "'": '%27',
	    '(': '%28',
	    ')': '%29',
	    '~': '%7E',
	    '%20': '+',
	    '%00': '\x00'
	  };
	  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
	    return charMap[match];
	  });
	}

	/**
	 * It takes a params object and converts it to a FormData object
	 *
	 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
	 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
	 *
	 * @returns {void}
	 */
	function AxiosURLSearchParams(params, options) {
	  this._pairs = [];
	  params && toFormData(params, this, options);
	}
	var prototype = AxiosURLSearchParams.prototype;
	prototype.append = function append(name, value) {
	  this._pairs.push([name, value]);
	};
	prototype.toString = function toString(encoder) {
	  var _encode = encoder ? function (value) {
	    return encoder.call(this, value, encode$1);
	  } : encode$1;
	  return this._pairs.map(function each(pair) {
	    return _encode(pair[0]) + '=' + _encode(pair[1]);
	  }, '').join('&');
	};

	/**
	 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
	 * URI encoded counterparts
	 *
	 * @param {string} val The value to be encoded.
	 *
	 * @returns {string} The encoded value.
	 */
	function encode(val) {
	  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @param {?object} options
	 *
	 * @returns {string} The formatted url
	 */
	function buildURL(url, params, options) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	  var _encode = options && options.encode || encode;
	  var serializeFn = options && options.serialize;
	  var serializedParams;
	  if (serializeFn) {
	    serializedParams = serializeFn(params, options);
	  } else {
	    serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
	  }
	  if (serializedParams) {
	    var hashmarkIndex = url.indexOf("#");
	    if (hashmarkIndex !== -1) {
	      url = url.slice(0, hashmarkIndex);
	    }
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	  return url;
	}

	var InterceptorManager = /*#__PURE__*/function () {
	  function InterceptorManager() {
	    this.handlers = [];
	  }

	  /**
	   * Add a new interceptor to the stack
	   *
	   * @param {Function} fulfilled The function to handle `then` for a `Promise`
	   * @param {Function} rejected The function to handle `reject` for a `Promise`
	   *
	   * @return {Number} An ID used to remove interceptor later
	   */
	  var _proto = InterceptorManager.prototype;
	  _proto.use = function use(fulfilled, rejected, options) {
	    this.handlers.push({
	      fulfilled: fulfilled,
	      rejected: rejected,
	      synchronous: options ? options.synchronous : false,
	      runWhen: options ? options.runWhen : null
	    });
	    return this.handlers.length - 1;
	  }

	  /**
	   * Remove an interceptor from the stack
	   *
	   * @param {Number} id The ID that was returned by `use`
	   *
	   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
	   */;
	  _proto.eject = function eject(id) {
	    if (this.handlers[id]) {
	      this.handlers[id] = null;
	    }
	  }

	  /**
	   * Clear all interceptors from the stack
	   *
	   * @returns {void}
	   */;
	  _proto.clear = function clear() {
	    if (this.handlers) {
	      this.handlers = [];
	    }
	  }

	  /**
	   * Iterate over all the registered interceptors
	   *
	   * This method is particularly useful for skipping over any
	   * interceptors that may have become `null` calling `eject`.
	   *
	   * @param {Function} fn The function to call for each interceptor
	   *
	   * @returns {void}
	   */;
	  _proto.forEach = function forEach(fn) {
	    utils$1.forEach(this.handlers, function forEachHandler(h) {
	      if (h !== null) {
	        fn(h);
	      }
	    });
	  };
	  return InterceptorManager;
	}();

	var transitionalDefaults = {
	  silentJSONParsing: true,
	  forcedJSONParsing: true,
	  clarifyTimeoutError: false
	};

	var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

	var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

	var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

	var platform$1 = {
	  isBrowser: true,
	  classes: {
	    URLSearchParams: URLSearchParams$1,
	    FormData: FormData$1,
	    Blob: Blob$1
	  },
	  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
	};

	var hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';
	var _navigator = typeof navigator === 'object' && navigator || undefined;

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 * nativescript
	 *  navigator.product -> 'NativeScript' or 'NS'
	 *
	 * @returns {boolean}
	 */
	var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

	/**
	 * Determine if we're running in a standard browser webWorker environment
	 *
	 * Although the `isStandardBrowserEnv` method indicates that
	 * `allows axios to run in a web worker`, the WebWorker will still be
	 * filtered out due to its judgment standard
	 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
	 * This leads to a problem when axios post `FormData` in webWorker
	 */
	var hasStandardBrowserWebWorkerEnv = function () {
	  return typeof WorkerGlobalScope !== 'undefined' &&
	  // eslint-disable-next-line no-undef
	  self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
	}();
	var origin = hasBrowserEnv && window.location.href || 'http://localhost';

	var utils = /*#__PURE__*/Object.freeze({
		__proto__: null,
		hasBrowserEnv: hasBrowserEnv,
		hasStandardBrowserEnv: hasStandardBrowserEnv,
		hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
		navigator: _navigator,
		origin: origin
	});

	var platform = _objectSpread2(_objectSpread2({}, utils), platform$1);

	function toURLEncodedForm(data, options) {
	  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
	    visitor: function visitor(value, key, path, helpers) {
	      if (platform.isNode && utils$1.isBuffer(value)) {
	        this.append(key, value.toString('base64'));
	        return false;
	      }
	      return helpers.defaultVisitor.apply(this, arguments);
	    }
	  }, options));
	}

	/**
	 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
	 *
	 * @param {string} name - The name of the property to get.
	 *
	 * @returns An array of strings.
	 */
	function parsePropPath(name) {
	  // foo[x][y][z]
	  // foo.x.y.z
	  // foo-x-y-z
	  // foo x y z
	  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(function (match) {
	    return match[0] === '[]' ? '' : match[1] || match[0];
	  });
	}

	/**
	 * Convert an array to an object.
	 *
	 * @param {Array<any>} arr - The array to convert to an object.
	 *
	 * @returns An object with the same keys and values as the array.
	 */
	function arrayToObject(arr) {
	  var obj = {};
	  var keys = Object.keys(arr);
	  var i;
	  var len = keys.length;
	  var key;
	  for (i = 0; i < len; i++) {
	    key = keys[i];
	    obj[key] = arr[key];
	  }
	  return obj;
	}

	/**
	 * It takes a FormData object and returns a JavaScript object
	 *
	 * @param {string} formData The FormData object to convert to JSON.
	 *
	 * @returns {Object<string, any> | null} The converted object.
	 */
	function formDataToJSON(formData) {
	  function buildPath(path, value, target, index) {
	    var name = path[index++];
	    if (name === '__proto__') return true;
	    var isNumericKey = Number.isFinite(+name);
	    var isLast = index >= path.length;
	    name = !name && utils$1.isArray(target) ? target.length : name;
	    if (isLast) {
	      if (utils$1.hasOwnProp(target, name)) {
	        target[name] = [target[name], value];
	      } else {
	        target[name] = value;
	      }
	      return !isNumericKey;
	    }
	    if (!target[name] || !utils$1.isObject(target[name])) {
	      target[name] = [];
	    }
	    var result = buildPath(path, value, target[name], index);
	    if (result && utils$1.isArray(target[name])) {
	      target[name] = arrayToObject(target[name]);
	    }
	    return !isNumericKey;
	  }
	  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
	    var obj = {};
	    utils$1.forEachEntry(formData, function (name, value) {
	      buildPath(parsePropPath(name), value, obj, 0);
	    });
	    return obj;
	  }
	  return null;
	}

	/**
	 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
	 * of the input
	 *
	 * @param {any} rawValue - The value to be stringified.
	 * @param {Function} parser - A function that parses a string into a JavaScript object.
	 * @param {Function} encoder - A function that takes a value and returns a string.
	 *
	 * @returns {string} A stringified version of the rawValue.
	 */
	function stringifySafely(rawValue, parser, encoder) {
	  if (utils$1.isString(rawValue)) {
	    try {
	      (parser || JSON.parse)(rawValue);
	      return utils$1.trim(rawValue);
	    } catch (e) {
	      if (e.name !== 'SyntaxError') {
	        throw e;
	      }
	    }
	  }
	  return (encoder || JSON.stringify)(rawValue);
	}
	var defaults = {
	  transitional: transitionalDefaults,
	  adapter: ['xhr', 'http', 'fetch'],
	  transformRequest: [function transformRequest(data, headers) {
	    var contentType = headers.getContentType() || '';
	    var hasJSONContentType = contentType.indexOf('application/json') > -1;
	    var isObjectPayload = utils$1.isObject(data);
	    if (isObjectPayload && utils$1.isHTMLForm(data)) {
	      data = new FormData(data);
	    }
	    var isFormData = utils$1.isFormData(data);
	    if (isFormData) {
	      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
	    }
	    if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
	      return data;
	    }
	    if (utils$1.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils$1.isURLSearchParams(data)) {
	      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
	      return data.toString();
	    }
	    var isFileList;
	    if (isObjectPayload) {
	      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
	        return toURLEncodedForm(data, this.formSerializer).toString();
	      }
	      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
	        var _FormData = this.env && this.env.FormData;
	        return toFormData(isFileList ? {
	          'files[]': data
	        } : data, _FormData && new _FormData(), this.formSerializer);
	      }
	    }
	    if (isObjectPayload || hasJSONContentType) {
	      headers.setContentType('application/json', false);
	      return stringifySafely(data);
	    }
	    return data;
	  }],
	  transformResponse: [function transformResponse(data) {
	    var transitional = this.transitional || defaults.transitional;
	    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
	    var JSONRequested = this.responseType === 'json';
	    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
	      return data;
	    }
	    if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
	      var silentJSONParsing = transitional && transitional.silentJSONParsing;
	      var strictJSONParsing = !silentJSONParsing && JSONRequested;
	      try {
	        return JSON.parse(data);
	      } catch (e) {
	        if (strictJSONParsing) {
	          if (e.name === 'SyntaxError') {
	            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
	          }
	          throw e;
	        }
	      }
	    }
	    return data;
	  }],
	  /**
	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
	   * timeout is not created.
	   */
	  timeout: 0,
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	  maxContentLength: -1,
	  maxBodyLength: -1,
	  env: {
	    FormData: platform.classes.FormData,
	    Blob: platform.classes.Blob
	  },
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  },
	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*',
	      'Content-Type': undefined
	    }
	  }
	};
	utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], function (method) {
	  defaults.headers[method] = {};
	});

	// RawAxiosHeaders whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = utils$1.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} rawHeaders Headers needing to be parsed
	 *
	 * @returns {Object} Headers parsed into an object
	 */
	var parseHeaders = (function (rawHeaders) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
	    i = line.indexOf(':');
	    key = line.substring(0, i).trim().toLowerCase();
	    val = line.substring(i + 1).trim();
	    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
	      return;
	    }
	    if (key === 'set-cookie') {
	      if (parsed[key]) {
	        parsed[key].push(val);
	      } else {
	        parsed[key] = [val];
	      }
	    } else {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });
	  return parsed;
	});

	var $internals = Symbol('internals');
	function normalizeHeader(header) {
	  return header && String(header).trim().toLowerCase();
	}
	function normalizeValue(value) {
	  if (value === false || value == null) {
	    return value;
	  }
	  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
	}
	function parseTokens(str) {
	  var tokens = Object.create(null);
	  var tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	  var match;
	  while (match = tokensRE.exec(str)) {
	    tokens[match[1]] = match[2];
	  }
	  return tokens;
	}
	var isValidHeaderName = function isValidHeaderName(str) {
	  return /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
	};
	function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
	  if (utils$1.isFunction(filter)) {
	    return filter.call(this, value, header);
	  }
	  if (isHeaderNameFilter) {
	    value = header;
	  }
	  if (!utils$1.isString(value)) return;
	  if (utils$1.isString(filter)) {
	    return value.indexOf(filter) !== -1;
	  }
	  if (utils$1.isRegExp(filter)) {
	    return filter.test(value);
	  }
	}
	function formatHeader(header) {
	  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function (w, char, str) {
	    return char.toUpperCase() + str;
	  });
	}
	function buildAccessors(obj, header) {
	  var accessorName = utils$1.toCamelCase(' ' + header);
	  ['get', 'set', 'has'].forEach(function (methodName) {
	    Object.defineProperty(obj, methodName + accessorName, {
	      value: function value(arg1, arg2, arg3) {
	        return this[methodName].call(this, header, arg1, arg2, arg3);
	      },
	      configurable: true
	    });
	  });
	}
	var AxiosHeaders = /*#__PURE__*/function () {
	  function AxiosHeaders(headers) {
	    headers && this.set(headers);
	  }
	  var _proto = AxiosHeaders.prototype;
	  _proto.set = function set(header, valueOrRewrite, rewrite) {
	    var self = this;
	    function setHeader(_value, _header, _rewrite) {
	      var lHeader = normalizeHeader(_header);
	      if (!lHeader) {
	        throw new Error('header name must be a non-empty string');
	      }
	      var key = utils$1.findKey(self, lHeader);
	      if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
	        self[key || _header] = normalizeValue(_value);
	      }
	    }
	    var setHeaders = function setHeaders(headers, _rewrite) {
	      return utils$1.forEach(headers, function (_value, _header) {
	        return setHeader(_value, _header, _rewrite);
	      });
	    };
	    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
	      setHeaders(header, valueOrRewrite);
	    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
	      setHeaders(parseHeaders(header), valueOrRewrite);
	    } else if (utils$1.isHeaders(header)) {
	      for (var _iterator = _createForOfIteratorHelperLoose(header.entries()), _step; !(_step = _iterator()).done;) {
	        var _ref = _step.value;
	        var _ref2 = _slicedToArray(_ref, 2);
	        var key = _ref2[0];
	        var value = _ref2[1];
	        setHeader(value, key, rewrite);
	      }
	    } else {
	      header != null && setHeader(valueOrRewrite, header, rewrite);
	    }
	    return this;
	  };
	  _proto.get = function get(header, parser) {
	    header = normalizeHeader(header);
	    if (header) {
	      var key = utils$1.findKey(this, header);
	      if (key) {
	        var value = this[key];
	        if (!parser) {
	          return value;
	        }
	        if (parser === true) {
	          return parseTokens(value);
	        }
	        if (utils$1.isFunction(parser)) {
	          return parser.call(this, value, key);
	        }
	        if (utils$1.isRegExp(parser)) {
	          return parser.exec(value);
	        }
	        throw new TypeError('parser must be boolean|regexp|function');
	      }
	    }
	  };
	  _proto.has = function has(header, matcher) {
	    header = normalizeHeader(header);
	    if (header) {
	      var key = utils$1.findKey(this, header);
	      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
	    }
	    return false;
	  };
	  _proto.delete = function _delete(header, matcher) {
	    var self = this;
	    var deleted = false;
	    function deleteHeader(_header) {
	      _header = normalizeHeader(_header);
	      if (_header) {
	        var key = utils$1.findKey(self, _header);
	        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
	          delete self[key];
	          deleted = true;
	        }
	      }
	    }
	    if (utils$1.isArray(header)) {
	      header.forEach(deleteHeader);
	    } else {
	      deleteHeader(header);
	    }
	    return deleted;
	  };
	  _proto.clear = function clear(matcher) {
	    var keys = Object.keys(this);
	    var i = keys.length;
	    var deleted = false;
	    while (i--) {
	      var key = keys[i];
	      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
	        delete this[key];
	        deleted = true;
	      }
	    }
	    return deleted;
	  };
	  _proto.normalize = function normalize(format) {
	    var self = this;
	    var headers = {};
	    utils$1.forEach(this, function (value, header) {
	      var key = utils$1.findKey(headers, header);
	      if (key) {
	        self[key] = normalizeValue(value);
	        delete self[header];
	        return;
	      }
	      var normalized = format ? formatHeader(header) : String(header).trim();
	      if (normalized !== header) {
	        delete self[header];
	      }
	      self[normalized] = normalizeValue(value);
	      headers[normalized] = true;
	    });
	    return this;
	  };
	  _proto.concat = function concat() {
	    var _this$constructor;
	    for (var _len = arguments.length, targets = new Array(_len), _key = 0; _key < _len; _key++) {
	      targets[_key] = arguments[_key];
	    }
	    return (_this$constructor = this.constructor).concat.apply(_this$constructor, [this].concat(targets));
	  };
	  _proto.toJSON = function toJSON(asStrings) {
	    var obj = Object.create(null);
	    utils$1.forEach(this, function (value, header) {
	      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
	    });
	    return obj;
	  };
	  _proto[Symbol.iterator] = function () {
	    return Object.entries(this.toJSON())[Symbol.iterator]();
	  };
	  _proto.toString = function toString() {
	    return Object.entries(this.toJSON()).map(function (_ref3) {
	      var _ref4 = _slicedToArray(_ref3, 2),
	        header = _ref4[0],
	        value = _ref4[1];
	      return header + ': ' + value;
	    }).join('\n');
	  };
	  AxiosHeaders.from = function from(thing) {
	    return thing instanceof this ? thing : new this(thing);
	  };
	  AxiosHeaders.concat = function concat(first) {
	    var computed = new this(first);
	    for (var _len2 = arguments.length, targets = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      targets[_key2 - 1] = arguments[_key2];
	    }
	    targets.forEach(function (target) {
	      return computed.set(target);
	    });
	    return computed;
	  };
	  AxiosHeaders.accessor = function accessor(header) {
	    var internals = this[$internals] = this[$internals] = {
	      accessors: {}
	    };
	    var accessors = internals.accessors;
	    var prototype = this.prototype;
	    function defineAccessor(_header) {
	      var lHeader = normalizeHeader(_header);
	      if (!accessors[lHeader]) {
	        buildAccessors(prototype, _header);
	        accessors[lHeader] = true;
	      }
	    }
	    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
	    return this;
	  };
	  return _createClass(AxiosHeaders, [{
	    key: Symbol.toStringTag,
	    get: function get() {
	      return 'AxiosHeaders';
	    }
	  }]);
	}();
	AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

	// reserved names hotfix
	utils$1.reduceDescriptors(AxiosHeaders.prototype, function (_ref5, key) {
	  var value = _ref5.value;
	  var mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
	  return {
	    get: function get() {
	      return value;
	    },
	    set: function set(headerValue) {
	      this[mapped] = headerValue;
	    }
	  };
	});
	utils$1.freezeMethods(AxiosHeaders);

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Array|Function} fns A single function or Array of functions
	 * @param {?Object} response The response object
	 *
	 * @returns {*} The resulting transformed data
	 */
	function transformData(fns, response) {
	  var config = this || defaults;
	  var context = response || config;
	  var headers = AxiosHeaders.from(context.headers);
	  var data = context.data;
	  utils$1.forEach(fns, function transform(fn) {
	    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
	  });
	  headers.normalize();
	  return data;
	}

	function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	}

	/**
	 * A `CanceledError` is an object that is thrown when an operation is canceled.
	 *
	 * @param {string=} message The message.
	 * @param {Object=} config The config.
	 * @param {Object=} request The request.
	 *
	 * @returns {CanceledError} The created error.
	 */
	function CanceledError(message, config, request) {
	  // eslint-disable-next-line no-eq-null,eqeqeq
	  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
	  this.name = 'CanceledError';
	}
	utils$1.inherits(CanceledError, AxiosError, {
	  __CANCEL__: true
	});

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 *
	 * @returns {object} The response.
	 */
	function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(new AxiosError('Request failed with status code ' + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
	  }
	}

	function parseProtocol(url) {
	  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
	  return match && match[1] || '';
	}

	/**
	 * Calculate data maxRate
	 * @param {Number} [samplesCount= 10]
	 * @param {Number} [min= 1000]
	 * @returns {Function}
	 */
	function speedometer(samplesCount, min) {
	  samplesCount = samplesCount || 10;
	  var bytes = new Array(samplesCount);
	  var timestamps = new Array(samplesCount);
	  var head = 0;
	  var tail = 0;
	  var firstSampleTS;
	  min = min !== undefined ? min : 1000;
	  return function push(chunkLength) {
	    var now = Date.now();
	    var startedAt = timestamps[tail];
	    if (!firstSampleTS) {
	      firstSampleTS = now;
	    }
	    bytes[head] = chunkLength;
	    timestamps[head] = now;
	    var i = tail;
	    var bytesCount = 0;
	    while (i !== head) {
	      bytesCount += bytes[i++];
	      i = i % samplesCount;
	    }
	    head = (head + 1) % samplesCount;
	    if (head === tail) {
	      tail = (tail + 1) % samplesCount;
	    }
	    if (now - firstSampleTS < min) {
	      return;
	    }
	    var passed = startedAt && now - startedAt;
	    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
	  };
	}

	/**
	 * Throttle decorator
	 * @param {Function} fn
	 * @param {Number} freq
	 * @return {Function}
	 */
	function throttle(fn, freq) {
	  var timestamp = 0;
	  var threshold = 1000 / freq;
	  var lastArgs;
	  var timer;
	  var invoke = function invoke(args, now) {
	    if (now === void 0) {
	      now = Date.now();
	    }
	    timestamp = now;
	    lastArgs = null;
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	    fn.apply(null, args);
	  };
	  var throttled = function throttled() {
	    var now = Date.now();
	    var passed = now - timestamp;
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	    if (passed >= threshold) {
	      invoke(args, now);
	    } else {
	      lastArgs = args;
	      if (!timer) {
	        timer = setTimeout(function () {
	          timer = null;
	          invoke(lastArgs);
	        }, threshold - passed);
	      }
	    }
	  };
	  var flush = function flush() {
	    return lastArgs && invoke(lastArgs);
	  };
	  return [throttled, flush];
	}

	var progressEventReducer = function progressEventReducer(listener, isDownloadStream, freq) {
	  if (freq === void 0) {
	    freq = 3;
	  }
	  var bytesNotified = 0;
	  var _speedometer = speedometer(50, 250);
	  return throttle(function (e) {
	    var _data;
	    var loaded = e.loaded;
	    var total = e.lengthComputable ? e.total : undefined;
	    var progressBytes = loaded - bytesNotified;
	    var rate = _speedometer(progressBytes);
	    var inRange = loaded <= total;
	    bytesNotified = loaded;
	    var data = (_data = {
	      loaded: loaded,
	      total: total,
	      progress: total ? loaded / total : undefined,
	      bytes: progressBytes,
	      rate: rate ? rate : undefined,
	      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
	      event: e,
	      lengthComputable: total != null
	    }, _data[isDownloadStream ? 'download' : 'upload'] = true, _data);
	    listener(data);
	  }, freq);
	};
	var progressEventDecorator = function progressEventDecorator(total, throttled) {
	  var lengthComputable = total != null;
	  return [function (loaded) {
	    return throttled[0]({
	      lengthComputable: lengthComputable,
	      total: total,
	      loaded: loaded
	    });
	  }, throttled[1]];
	};
	var asyncDecorator = function asyncDecorator(fn) {
	  return function () {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	    return utils$1.asap(function () {
	      return fn.apply(void 0, args);
	    });
	  };
	};

	var isURLSameOrigin = platform.hasStandardBrowserEnv ?
	// Standard browser envs have full support of the APIs needed to test
	// whether the request URL is of the same origin as current location.
	function standardBrowserEnv() {
	  var msie = platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent);
	  var urlParsingNode = document.createElement('a');
	  var originURL;

	  /**
	  * Parse a URL to discover its components
	  *
	  * @param {String} url The URL to be parsed
	  * @returns {Object}
	  */
	  function resolveURL(url) {
	    var href = url;
	    if (msie) {
	      // IE needs attribute set twice to normalize properties
	      urlParsingNode.setAttribute('href', href);
	      href = urlParsingNode.href;
	    }
	    urlParsingNode.setAttribute('href', href);

	    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	    return {
	      href: urlParsingNode.href,
	      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	      host: urlParsingNode.host,
	      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	      hostname: urlParsingNode.hostname,
	      port: urlParsingNode.port,
	      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
	    };
	  }
	  originURL = resolveURL(window.location.href);

	  /**
	  * Determine if a URL shares the same origin as the current location
	  *
	  * @param {String} requestURL The URL to test
	  * @returns {boolean} True if URL shares the same origin, otherwise false
	  */
	  return function isURLSameOrigin(requestURL) {
	    var parsed = utils$1.isString(requestURL) ? resolveURL(requestURL) : requestURL;
	    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
	  };
	}() :
	// Non standard browser envs (web workers, react-native) lack needed support.
	function nonStandardBrowserEnv() {
	  return function isURLSameOrigin() {
	    return true;
	  };
	}();

	var cookies = platform.hasStandardBrowserEnv ?
	// Standard browser envs support document.cookie
	{
	  write: function write(name, value, expires, path, domain, secure) {
	    var cookie = [name + '=' + encodeURIComponent(value)];
	    utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());
	    utils$1.isString(path) && cookie.push('path=' + path);
	    utils$1.isString(domain) && cookie.push('domain=' + domain);
	    secure === true && cookie.push('secure');
	    document.cookie = cookie.join('; ');
	  },
	  read: function read(name) {
	    var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	    return match ? decodeURIComponent(match[3]) : null;
	  },
	  remove: function remove(name) {
	    this.write(name, '', Date.now() - 86400000);
	  }
	} :
	// Non-standard browser env (web workers, react-native) lack needed support.
	{
	  write: function write() {},
	  read: function read() {
	    return null;
	  },
	  remove: function remove() {}
	};

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 *
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
	}

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 *
	 * @returns {string} The combined URL
	 */
	function combineURLs(baseURL, relativeURL) {
	  return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
	}

	/**
	 * Creates a new URL by combining the baseURL with the requestedURL,
	 * only when the requestedURL is not already an absolute URL.
	 * If the requestURL is absolute, this function returns the requestedURL untouched.
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} requestedURL Absolute or relative URL to combine
	 *
	 * @returns {string} The combined full path
	 */
	function buildFullPath(baseURL, requestedURL) {
	  if (baseURL && !isAbsoluteURL(requestedURL)) {
	    return combineURLs(baseURL, requestedURL);
	  }
	  return requestedURL;
	}

	var headersToObject = function headersToObject(thing) {
	  return thing instanceof AxiosHeaders ? _objectSpread2({}, thing) : thing;
	};

	/**
	 * Config-specific merge-function which creates a new config-object
	 * by merging two configuration objects together.
	 *
	 * @param {Object} config1
	 * @param {Object} config2
	 *
	 * @returns {Object} New object resulting from merging config2 to config1
	 */
	function mergeConfig(config1, config2) {
	  // eslint-disable-next-line no-param-reassign
	  config2 = config2 || {};
	  var config = {};
	  function getMergedValue(target, source, caseless) {
	    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
	      return utils$1.merge.call({
	        caseless: caseless
	      }, target, source);
	    } else if (utils$1.isPlainObject(source)) {
	      return utils$1.merge({}, source);
	    } else if (utils$1.isArray(source)) {
	      return source.slice();
	    }
	    return source;
	  }

	  // eslint-disable-next-line consistent-return
	  function mergeDeepProperties(a, b, caseless) {
	    if (!utils$1.isUndefined(b)) {
	      return getMergedValue(a, b, caseless);
	    } else if (!utils$1.isUndefined(a)) {
	      return getMergedValue(undefined, a, caseless);
	    }
	  }

	  // eslint-disable-next-line consistent-return
	  function valueFromConfig2(a, b) {
	    if (!utils$1.isUndefined(b)) {
	      return getMergedValue(undefined, b);
	    }
	  }

	  // eslint-disable-next-line consistent-return
	  function defaultToConfig2(a, b) {
	    if (!utils$1.isUndefined(b)) {
	      return getMergedValue(undefined, b);
	    } else if (!utils$1.isUndefined(a)) {
	      return getMergedValue(undefined, a);
	    }
	  }

	  // eslint-disable-next-line consistent-return
	  function mergeDirectKeys(a, b, prop) {
	    if (prop in config2) {
	      return getMergedValue(a, b);
	    } else if (prop in config1) {
	      return getMergedValue(undefined, a);
	    }
	  }
	  var mergeMap = {
	    url: valueFromConfig2,
	    method: valueFromConfig2,
	    data: valueFromConfig2,
	    baseURL: defaultToConfig2,
	    transformRequest: defaultToConfig2,
	    transformResponse: defaultToConfig2,
	    paramsSerializer: defaultToConfig2,
	    timeout: defaultToConfig2,
	    timeoutMessage: defaultToConfig2,
	    withCredentials: defaultToConfig2,
	    withXSRFToken: defaultToConfig2,
	    adapter: defaultToConfig2,
	    responseType: defaultToConfig2,
	    xsrfCookieName: defaultToConfig2,
	    xsrfHeaderName: defaultToConfig2,
	    onUploadProgress: defaultToConfig2,
	    onDownloadProgress: defaultToConfig2,
	    decompress: defaultToConfig2,
	    maxContentLength: defaultToConfig2,
	    maxBodyLength: defaultToConfig2,
	    beforeRedirect: defaultToConfig2,
	    transport: defaultToConfig2,
	    httpAgent: defaultToConfig2,
	    httpsAgent: defaultToConfig2,
	    cancelToken: defaultToConfig2,
	    socketPath: defaultToConfig2,
	    responseEncoding: defaultToConfig2,
	    validateStatus: mergeDirectKeys,
	    headers: function headers(a, b) {
	      return mergeDeepProperties(headersToObject(a), headersToObject(b), true);
	    }
	  };
	  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
	    var merge = mergeMap[prop] || mergeDeepProperties;
	    var configValue = merge(config1[prop], config2[prop], prop);
	    utils$1.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
	  });
	  return config;
	}

	var resolveConfig = (function (config) {
	  var newConfig = mergeConfig({}, config);
	  var data = newConfig.data,
	    withXSRFToken = newConfig.withXSRFToken,
	    xsrfHeaderName = newConfig.xsrfHeaderName,
	    xsrfCookieName = newConfig.xsrfCookieName,
	    headers = newConfig.headers,
	    auth = newConfig.auth;
	  newConfig.headers = headers = AxiosHeaders.from(headers);
	  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);

	  // HTTP basic authentication
	  if (auth) {
	    headers.set('Authorization', 'Basic ' + btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : '')));
	  }
	  var contentType;
	  if (utils$1.isFormData(data)) {
	    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
	      headers.setContentType(undefined); // Let the browser set it
	    } else if ((contentType = headers.getContentType()) !== false) {
	      // fix semicolon duplication issue for ReactNative FormData implementation
	      var _ref = contentType ? contentType.split(';').map(function (token) {
	          return token.trim();
	        }).filter(Boolean) : [],
	        _ref2 = _toArray(_ref),
	        type = _ref2[0],
	        tokens = _ref2.slice(1);
	      headers.setContentType([type || 'multipart/form-data'].concat(_toConsumableArray(tokens)).join('; '));
	    }
	  }

	  // Add xsrf header
	  // This is only done if running in a standard browser environment.
	  // Specifically not if we're in a web worker, or react-native.

	  if (platform.hasStandardBrowserEnv) {
	    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
	    if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
	      // Add xsrf header
	      var xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
	      if (xsrfValue) {
	        headers.set(xsrfHeaderName, xsrfValue);
	      }
	    }
	  }
	  return newConfig;
	});

	var isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
	var xhrAdapter = isXHRAdapterSupported && function (config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var _config = resolveConfig(config);
	    var requestData = _config.data;
	    var requestHeaders = AxiosHeaders.from(_config.headers).normalize();
	    var responseType = _config.responseType,
	      onUploadProgress = _config.onUploadProgress,
	      onDownloadProgress = _config.onDownloadProgress;
	    var onCanceled;
	    var uploadThrottled, downloadThrottled;
	    var flushUpload, flushDownload;
	    function done() {
	      flushUpload && flushUpload(); // flush events
	      flushDownload && flushDownload(); // flush events

	      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
	      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
	    }
	    var request = new XMLHttpRequest();
	    request.open(_config.method.toUpperCase(), _config.url, true);

	    // Set the request timeout in MS
	    request.timeout = _config.timeout;
	    function onloadend() {
	      if (!request) {
	        return;
	      }
	      // Prepare the response
	      var responseHeaders = AxiosHeaders.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
	      var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	      settle(function _resolve(value) {
	        resolve(value);
	        done();
	      }, function _reject(err) {
	        reject(err);
	        done();
	      }, response);

	      // Clean up request
	      request = null;
	    }
	    if ('onloadend' in request) {
	      // Use onloadend if available
	      request.onloadend = onloadend;
	    } else {
	      // Listen for ready state to emulate onloadend
	      request.onreadystatechange = function handleLoad() {
	        if (!request || request.readyState !== 4) {
	          return;
	        }

	        // The request errored out and we didn't get a response, this will be
	        // handled by onerror instead
	        // With one exception: request that using file: protocol, most browsers
	        // will return status as 0 even though it's a successful request
	        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	          return;
	        }
	        // readystate handler is calling before onerror or ontimeout handlers,
	        // so we should call onloadend on the next 'tick'
	        setTimeout(onloadend);
	      };
	    }

	    // Handle browser request cancellation (as opposed to a manual cancellation)
	    request.onabort = function handleAbort() {
	      if (!request) {
	        return;
	      }
	      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      var timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
	      var transitional = _config.transitional || transitionalDefaults;
	      if (_config.timeoutErrorMessage) {
	        timeoutErrorMessage = _config.timeoutErrorMessage;
	      }
	      reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));

	      // Clean up request
	      request = null;
	    };

	    // Remove Content-Type if data is undefined
	    requestData === undefined && requestHeaders.setContentType(null);

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
	        request.setRequestHeader(key, val);
	      });
	    }

	    // Add withCredentials to request if needed
	    if (!utils$1.isUndefined(_config.withCredentials)) {
	      request.withCredentials = !!_config.withCredentials;
	    }

	    // Add responseType to request if needed
	    if (responseType && responseType !== 'json') {
	      request.responseType = _config.responseType;
	    }

	    // Handle progress if needed
	    if (onDownloadProgress) {
	      var _progressEventReducer = progressEventReducer(onDownloadProgress, true);
	      var _progressEventReducer2 = _slicedToArray(_progressEventReducer, 2);
	      downloadThrottled = _progressEventReducer2[0];
	      flushDownload = _progressEventReducer2[1];
	      request.addEventListener('progress', downloadThrottled);
	    }

	    // Not all browsers support upload events
	    if (onUploadProgress && request.upload) {
	      var _progressEventReducer3 = progressEventReducer(onUploadProgress);
	      var _progressEventReducer4 = _slicedToArray(_progressEventReducer3, 2);
	      uploadThrottled = _progressEventReducer4[0];
	      flushUpload = _progressEventReducer4[1];
	      request.upload.addEventListener('progress', uploadThrottled);
	      request.upload.addEventListener('loadend', flushUpload);
	    }
	    if (_config.cancelToken || _config.signal) {
	      // Handle cancellation
	      // eslint-disable-next-line func-names
	      onCanceled = function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
	        request.abort();
	        request = null;
	      };
	      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
	      if (_config.signal) {
	        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
	      }
	    }
	    var protocol = parseProtocol(_config.url);
	    if (protocol && platform.protocols.indexOf(protocol) === -1) {
	      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
	      return;
	    }

	    // Send the request
	    request.send(requestData || null);
	  });
	};

	var composeSignals = function composeSignals(signals, timeout) {
	  var _signals = signals = signals ? signals.filter(Boolean) : [],
	    length = _signals.length;
	  if (timeout || length) {
	    var controller = new AbortController();
	    var aborted;
	    var onabort = function onabort(reason) {
	      if (!aborted) {
	        aborted = true;
	        unsubscribe();
	        var err = reason instanceof Error ? reason : this.reason;
	        controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
	      }
	    };
	    var timer = timeout && setTimeout(function () {
	      timer = null;
	      onabort(new AxiosError("timeout " + timeout + " of ms exceeded", AxiosError.ETIMEDOUT));
	    }, timeout);
	    var unsubscribe = function unsubscribe() {
	      if (signals) {
	        timer && clearTimeout(timer);
	        timer = null;
	        signals.forEach(function (signal) {
	          signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
	        });
	        signals = null;
	      }
	    };
	    signals.forEach(function (signal) {
	      return signal.addEventListener('abort', onabort);
	    });
	    var signal = controller.signal;
	    signal.unsubscribe = function () {
	      return utils$1.asap(unsubscribe);
	    };
	    return signal;
	  }
	};

	var streamChunk = /*#__PURE__*/_regeneratorRuntime().mark(function streamChunk(chunk, chunkSize) {
	  var len, pos, end;
	  return _regeneratorRuntime().wrap(function streamChunk$(_context) {
	    while (1) switch (_context.prev = _context.next) {
	      case 0:
	        len = chunk.byteLength;
	        if (!(!chunkSize || len < chunkSize)) {
	          _context.next = 5;
	          break;
	        }
	        _context.next = 4;
	        return chunk;
	      case 4:
	        return _context.abrupt("return");
	      case 5:
	        pos = 0;
	      case 6:
	        if (!(pos < len)) {
	          _context.next = 13;
	          break;
	        }
	        end = pos + chunkSize;
	        _context.next = 10;
	        return chunk.slice(pos, end);
	      case 10:
	        pos = end;
	        _context.next = 6;
	        break;
	      case 13:
	      case "end":
	        return _context.stop();
	    }
	  }, streamChunk);
	});
	var readBytes = /*#__PURE__*/function () {
	  var _ref = _wrapAsyncGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(iterable, chunkSize) {
	    var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk;
	    return _regeneratorRuntime().wrap(function _callee$(_context2) {
	      while (1) switch (_context2.prev = _context2.next) {
	        case 0:
	          _iteratorAbruptCompletion = false;
	          _didIteratorError = false;
	          _context2.prev = 2;
	          _iterator = _asyncIterator(readStream(iterable));
	        case 4:
	          _context2.next = 6;
	          return _awaitAsyncGenerator(_iterator.next());
	        case 6:
	          if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
	            _context2.next = 12;
	            break;
	          }
	          chunk = _step.value;
	          return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(streamChunk(chunk, chunkSize))), "t0", 9);
	        case 9:
	          _iteratorAbruptCompletion = false;
	          _context2.next = 4;
	          break;
	        case 12:
	          _context2.next = 18;
	          break;
	        case 14:
	          _context2.prev = 14;
	          _context2.t1 = _context2["catch"](2);
	          _didIteratorError = true;
	          _iteratorError = _context2.t1;
	        case 18:
	          _context2.prev = 18;
	          _context2.prev = 19;
	          if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
	            _context2.next = 23;
	            break;
	          }
	          _context2.next = 23;
	          return _awaitAsyncGenerator(_iterator.return());
	        case 23:
	          _context2.prev = 23;
	          if (!_didIteratorError) {
	            _context2.next = 26;
	            break;
	          }
	          throw _iteratorError;
	        case 26:
	          return _context2.finish(23);
	        case 27:
	          return _context2.finish(18);
	        case 28:
	        case "end":
	          return _context2.stop();
	      }
	    }, _callee, null, [[2, 14, 18, 28], [19,, 23, 27]]);
	  }));
	  return function readBytes(_x, _x2) {
	    return _ref.apply(this, arguments);
	  };
	}();
	var readStream = /*#__PURE__*/function () {
	  var _ref2 = _wrapAsyncGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(stream) {
	    var reader, _yield$_awaitAsyncGen, done, value;
	    return _regeneratorRuntime().wrap(function _callee2$(_context3) {
	      while (1) switch (_context3.prev = _context3.next) {
	        case 0:
	          if (!stream[Symbol.asyncIterator]) {
	            _context3.next = 3;
	            break;
	          }
	          return _context3.delegateYield(_asyncGeneratorDelegate(_asyncIterator(stream)), "t0", 2);
	        case 2:
	          return _context3.abrupt("return");
	        case 3:
	          reader = stream.getReader();
	          _context3.prev = 4;
	        case 5:
	          _context3.next = 7;
	          return _awaitAsyncGenerator(reader.read());
	        case 7:
	          _yield$_awaitAsyncGen = _context3.sent;
	          done = _yield$_awaitAsyncGen.done;
	          value = _yield$_awaitAsyncGen.value;
	          if (!done) {
	            _context3.next = 12;
	            break;
	          }
	          return _context3.abrupt("break", 16);
	        case 12:
	          _context3.next = 14;
	          return value;
	        case 14:
	          _context3.next = 5;
	          break;
	        case 16:
	          _context3.prev = 16;
	          _context3.next = 19;
	          return _awaitAsyncGenerator(reader.cancel());
	        case 19:
	          return _context3.finish(16);
	        case 20:
	        case "end":
	          return _context3.stop();
	      }
	    }, _callee2, null, [[4,, 16, 20]]);
	  }));
	  return function readStream(_x3) {
	    return _ref2.apply(this, arguments);
	  };
	}();
	var trackStream = function trackStream(stream, chunkSize, onProgress, onFinish) {
	  var iterator = readBytes(stream, chunkSize);
	  var bytes = 0;
	  var done;
	  var _onFinish = function _onFinish(e) {
	    if (!done) {
	      done = true;
	      onFinish && onFinish(e);
	    }
	  };
	  return new ReadableStream({
	    pull: function pull(controller) {
	      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
	        var _yield$iterator$next, _done, value, len, loadedBytes;
	        return _regeneratorRuntime().wrap(function _callee3$(_context4) {
	          while (1) switch (_context4.prev = _context4.next) {
	            case 0:
	              _context4.prev = 0;
	              _context4.next = 3;
	              return iterator.next();
	            case 3:
	              _yield$iterator$next = _context4.sent;
	              _done = _yield$iterator$next.done;
	              value = _yield$iterator$next.value;
	              if (!_done) {
	                _context4.next = 10;
	                break;
	              }
	              _onFinish();
	              controller.close();
	              return _context4.abrupt("return");
	            case 10:
	              len = value.byteLength;
	              if (onProgress) {
	                loadedBytes = bytes += len;
	                onProgress(loadedBytes);
	              }
	              controller.enqueue(new Uint8Array(value));
	              _context4.next = 19;
	              break;
	            case 15:
	              _context4.prev = 15;
	              _context4.t0 = _context4["catch"](0);
	              _onFinish(_context4.t0);
	              throw _context4.t0;
	            case 19:
	            case "end":
	              return _context4.stop();
	          }
	        }, _callee3, null, [[0, 15]]);
	      }))();
	    },
	    cancel: function cancel(reason) {
	      _onFinish(reason);
	      return iterator.return();
	    }
	  }, {
	    highWaterMark: 2
	  });
	};

	var isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
	var isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

	// used only inside the fetch adapter
	var encodeText = isFetchSupported && (typeof TextEncoder === 'function' ? function (encoder) {
	  return function (str) {
	    return encoder.encode(str);
	  };
	}(new TextEncoder()) : (/*#__PURE__*/function () {
	  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(str) {
	    return _regeneratorRuntime().wrap(function _callee$(_context) {
	      while (1) switch (_context.prev = _context.next) {
	        case 0:
	          _context.t0 = Uint8Array;
	          _context.next = 3;
	          return new Response(str).arrayBuffer();
	        case 3:
	          _context.t1 = _context.sent;
	          return _context.abrupt("return", new _context.t0(_context.t1));
	        case 5:
	        case "end":
	          return _context.stop();
	      }
	    }, _callee);
	  }));
	  return function (_x) {
	    return _ref.apply(this, arguments);
	  };
	}()));
	var test = function test(fn) {
	  try {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	    return !!fn.apply(void 0, args);
	  } catch (e) {
	    return false;
	  }
	};
	var supportsRequestStream = isReadableStreamSupported && test(function () {
	  var duplexAccessed = false;
	  var hasContentType = new Request(platform.origin, {
	    body: new ReadableStream(),
	    method: 'POST',
	    get duplex() {
	      duplexAccessed = true;
	      return 'half';
	    }
	  }).headers.has('Content-Type');
	  return duplexAccessed && !hasContentType;
	});
	var DEFAULT_CHUNK_SIZE = 64 * 1024;
	var supportsResponseStream = isReadableStreamSupported && test(function () {
	  return utils$1.isReadableStream(new Response('').body);
	});
	var resolvers = {
	  stream: supportsResponseStream && function (res) {
	    return res.body;
	  }
	};
	isFetchSupported && function (res) {
	  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(function (type) {
	    !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? function (res) {
	      return res[type]();
	    } : function (_, config) {
	      throw new AxiosError("Response type '" + type + "' is not supported", AxiosError.ERR_NOT_SUPPORT, config);
	    });
	  });
	}(new Response());
	var getBodyLength = /*#__PURE__*/function () {
	  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(body) {
	    var _request;
	    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
	      while (1) switch (_context2.prev = _context2.next) {
	        case 0:
	          if (!(body == null)) {
	            _context2.next = 2;
	            break;
	          }
	          return _context2.abrupt("return", 0);
	        case 2:
	          if (!utils$1.isBlob(body)) {
	            _context2.next = 4;
	            break;
	          }
	          return _context2.abrupt("return", body.size);
	        case 4:
	          if (!utils$1.isSpecCompliantForm(body)) {
	            _context2.next = 9;
	            break;
	          }
	          _request = new Request(platform.origin, {
	            method: 'POST',
	            body: body
	          });
	          _context2.next = 8;
	          return _request.arrayBuffer();
	        case 8:
	          return _context2.abrupt("return", _context2.sent.byteLength);
	        case 9:
	          if (!(utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body))) {
	            _context2.next = 11;
	            break;
	          }
	          return _context2.abrupt("return", body.byteLength);
	        case 11:
	          if (utils$1.isURLSearchParams(body)) {
	            body = body + '';
	          }
	          if (!utils$1.isString(body)) {
	            _context2.next = 16;
	            break;
	          }
	          _context2.next = 15;
	          return encodeText(body);
	        case 15:
	          return _context2.abrupt("return", _context2.sent.byteLength);
	        case 16:
	        case "end":
	          return _context2.stop();
	      }
	    }, _callee2);
	  }));
	  return function getBodyLength(_x2) {
	    return _ref2.apply(this, arguments);
	  };
	}();
	var resolveBodyLength = /*#__PURE__*/function () {
	  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(headers, body) {
	    var length;
	    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
	      while (1) switch (_context3.prev = _context3.next) {
	        case 0:
	          length = utils$1.toFiniteNumber(headers.getContentLength());
	          return _context3.abrupt("return", length == null ? getBodyLength(body) : length);
	        case 2:
	        case "end":
	          return _context3.stop();
	      }
	    }, _callee3);
	  }));
	  return function resolveBodyLength(_x3, _x4) {
	    return _ref3.apply(this, arguments);
	  };
	}();
	var fetchAdapter = isFetchSupported && (/*#__PURE__*/function () {
	  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(config) {
	    var _resolveConfig, url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, _resolveConfig$withCr, withCredentials, fetchOptions, composedSignal, request, unsubscribe, requestContentLength, _request, contentTypeHeader, _progressEventDecorat, _progressEventDecorat2, onProgress, flush, isCredentialsSupported, response, isStreamResponse, options, responseContentLength, _ref5, _ref6, _onProgress, _flush, responseData;
	    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
	      while (1) switch (_context4.prev = _context4.next) {
	        case 0:
	          _resolveConfig = resolveConfig(config), url = _resolveConfig.url, method = _resolveConfig.method, data = _resolveConfig.data, signal = _resolveConfig.signal, cancelToken = _resolveConfig.cancelToken, timeout = _resolveConfig.timeout, onDownloadProgress = _resolveConfig.onDownloadProgress, onUploadProgress = _resolveConfig.onUploadProgress, responseType = _resolveConfig.responseType, headers = _resolveConfig.headers, _resolveConfig$withCr = _resolveConfig.withCredentials, withCredentials = _resolveConfig$withCr === void 0 ? 'same-origin' : _resolveConfig$withCr, fetchOptions = _resolveConfig.fetchOptions;
	          responseType = responseType ? (responseType + '').toLowerCase() : 'text';
	          composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
	          unsubscribe = composedSignal && composedSignal.unsubscribe && function () {
	            composedSignal.unsubscribe();
	          };
	          _context4.prev = 4;
	          _context4.t0 = onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head';
	          if (!_context4.t0) {
	            _context4.next = 11;
	            break;
	          }
	          _context4.next = 9;
	          return resolveBodyLength(headers, data);
	        case 9:
	          _context4.t1 = requestContentLength = _context4.sent;
	          _context4.t0 = _context4.t1 !== 0;
	        case 11:
	          if (!_context4.t0) {
	            _context4.next = 15;
	            break;
	          }
	          _request = new Request(url, {
	            method: 'POST',
	            body: data,
	            duplex: "half"
	          });
	          if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
	            headers.setContentType(contentTypeHeader);
	          }
	          if (_request.body) {
	            _progressEventDecorat = progressEventDecorator(requestContentLength, progressEventReducer(asyncDecorator(onUploadProgress))), _progressEventDecorat2 = _slicedToArray(_progressEventDecorat, 2), onProgress = _progressEventDecorat2[0], flush = _progressEventDecorat2[1];
	            data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
	          }
	        case 15:
	          if (!utils$1.isString(withCredentials)) {
	            withCredentials = withCredentials ? 'include' : 'omit';
	          }

	          // Cloudflare Workers throws when credentials are defined
	          // see https://github.com/cloudflare/workerd/issues/902
	          isCredentialsSupported = "credentials" in Request.prototype;
	          request = new Request(url, _objectSpread2(_objectSpread2({}, fetchOptions), {}, {
	            signal: composedSignal,
	            method: method.toUpperCase(),
	            headers: headers.normalize().toJSON(),
	            body: data,
	            duplex: "half",
	            credentials: isCredentialsSupported ? withCredentials : undefined
	          }));
	          _context4.next = 20;
	          return fetch(request);
	        case 20:
	          response = _context4.sent;
	          isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
	          if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
	            options = {};
	            ['status', 'statusText', 'headers'].forEach(function (prop) {
	              options[prop] = response[prop];
	            });
	            responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));
	            _ref5 = onDownloadProgress && progressEventDecorator(responseContentLength, progressEventReducer(asyncDecorator(onDownloadProgress), true)) || [], _ref6 = _slicedToArray(_ref5, 2), _onProgress = _ref6[0], _flush = _ref6[1];
	            response = new Response(trackStream(response.body, DEFAULT_CHUNK_SIZE, _onProgress, function () {
	              _flush && _flush();
	              unsubscribe && unsubscribe();
	            }), options);
	          }
	          responseType = responseType || 'text';
	          _context4.next = 26;
	          return resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);
	        case 26:
	          responseData = _context4.sent;
	          !isStreamResponse && unsubscribe && unsubscribe();
	          _context4.next = 30;
	          return new Promise(function (resolve, reject) {
	            settle(resolve, reject, {
	              data: responseData,
	              headers: AxiosHeaders.from(response.headers),
	              status: response.status,
	              statusText: response.statusText,
	              config: config,
	              request: request
	            });
	          });
	        case 30:
	          return _context4.abrupt("return", _context4.sent);
	        case 33:
	          _context4.prev = 33;
	          _context4.t2 = _context4["catch"](4);
	          unsubscribe && unsubscribe();
	          if (!(_context4.t2 && _context4.t2.name === 'TypeError' && /fetch/i.test(_context4.t2.message))) {
	            _context4.next = 38;
	            break;
	          }
	          throw Object.assign(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request), {
	            cause: _context4.t2.cause || _context4.t2
	          });
	        case 38:
	          throw AxiosError.from(_context4.t2, _context4.t2 && _context4.t2.code, config, request);
	        case 39:
	        case "end":
	          return _context4.stop();
	      }
	    }, _callee4, null, [[4, 33]]);
	  }));
	  return function (_x5) {
	    return _ref4.apply(this, arguments);
	  };
	}());

	var knownAdapters = {
	  http: httpAdapter,
	  xhr: xhrAdapter,
	  fetch: fetchAdapter
	};
	utils$1.forEach(knownAdapters, function (fn, value) {
	  if (fn) {
	    try {
	      Object.defineProperty(fn, 'name', {
	        value: value
	      });
	    } catch (e) {
	      // eslint-disable-next-line no-empty
	    }
	    Object.defineProperty(fn, 'adapterName', {
	      value: value
	    });
	  }
	});
	var renderReason = function renderReason(reason) {
	  return "- " + reason;
	};
	var isResolvedHandle = function isResolvedHandle(adapter) {
	  return utils$1.isFunction(adapter) || adapter === null || adapter === false;
	};
	var adapters = {
	  getAdapter: function getAdapter(adapters) {
	    adapters = utils$1.isArray(adapters) ? adapters : [adapters];
	    var _adapters = adapters,
	      length = _adapters.length;
	    var nameOrAdapter;
	    var adapter;
	    var rejectedReasons = {};
	    for (var i = 0; i < length; i++) {
	      nameOrAdapter = adapters[i];
	      var id = void 0;
	      adapter = nameOrAdapter;
	      if (!isResolvedHandle(nameOrAdapter)) {
	        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
	        if (adapter === undefined) {
	          throw new AxiosError("Unknown adapter '" + id + "'");
	        }
	      }
	      if (adapter) {
	        break;
	      }
	      rejectedReasons[id || '#' + i] = adapter;
	    }
	    if (!adapter) {
	      var reasons = Object.entries(rejectedReasons).map(function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 2),
	          id = _ref2[0],
	          state = _ref2[1];
	        return "adapter " + id + " " + (state === false ? 'is not supported by the environment' : 'is not available in the build');
	      });
	      var s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
	      throw new AxiosError("There is no suitable adapter to dispatch the request " + s, 'ERR_NOT_SUPPORT');
	    }
	    return adapter;
	  },
	  adapters: knownAdapters
	};

	/**
	 * Throws a `CanceledError` if cancellation has been requested.
	 *
	 * @param {Object} config The config that is to be used for the request
	 *
	 * @returns {void}
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	  if (config.signal && config.signal.aborted) {
	    throw new CanceledError(null, config);
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 *
	 * @returns {Promise} The Promise to be fulfilled
	 */
	function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	  config.headers = AxiosHeaders.from(config.headers);

	  // Transform request data
	  config.data = transformData.call(config, config.transformRequest);
	  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
	    config.headers.setContentType('application/x-www-form-urlencoded', false);
	  }
	  var adapter = adapters.getAdapter(config.adapter || defaults.adapter);
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData.call(config, config.transformResponse, response);
	    response.headers = AxiosHeaders.from(response.headers);
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData.call(config, config.transformResponse, reason.response);
	        reason.response.headers = AxiosHeaders.from(reason.response.headers);
	      }
	    }
	    return Promise.reject(reason);
	  });
	}

	var VERSION = "1.7.7";

	var validators$1 = {};

	// eslint-disable-next-line func-names
	['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
	  validators$1[type] = function validator(thing) {
	    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
	  };
	});
	var deprecatedWarnings = {};

	/**
	 * Transitional option validator
	 *
	 * @param {function|boolean?} validator - set to false if the transitional option has been removed
	 * @param {string?} version - deprecated version / removed since version
	 * @param {string?} message - some message with additional info
	 *
	 * @returns {function}
	 */
	validators$1.transitional = function transitional(validator, version, message) {
	  function formatMessage(opt, desc) {
	    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
	  }

	  // eslint-disable-next-line func-names
	  return function (value, opt, opts) {
	    if (validator === false) {
	      throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
	    }
	    if (version && !deprecatedWarnings[opt]) {
	      deprecatedWarnings[opt] = true;
	      // eslint-disable-next-line no-console
	      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
	    }
	    return validator ? validator(value, opt, opts) : true;
	  };
	};

	/**
	 * Assert object's properties type
	 *
	 * @param {object} options
	 * @param {object} schema
	 * @param {boolean?} allowUnknown
	 *
	 * @returns {object}
	 */

	function assertOptions(options, schema, allowUnknown) {
	  if (typeof options !== 'object') {
	    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
	  }
	  var keys = Object.keys(options);
	  var i = keys.length;
	  while (i-- > 0) {
	    var opt = keys[i];
	    var validator = schema[opt];
	    if (validator) {
	      var value = options[opt];
	      var result = value === undefined || validator(value, opt, options);
	      if (result !== true) {
	        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
	      }
	      continue;
	    }
	    if (allowUnknown !== true) {
	      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
	    }
	  }
	}
	var validator = {
	  assertOptions: assertOptions,
	  validators: validators$1
	};

	var validators = validator.validators;

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 *
	 * @return {Axios} A new instance of Axios
	 */
	var Axios = /*#__PURE__*/function () {
	  function Axios(instanceConfig) {
	    this.defaults = instanceConfig;
	    this.interceptors = {
	      request: new InterceptorManager(),
	      response: new InterceptorManager()
	    };
	  }

	  /**
	   * Dispatch a request
	   *
	   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
	   * @param {?Object} config
	   *
	   * @returns {Promise} The Promise to be fulfilled
	   */
	  var _proto = Axios.prototype;
	  _proto.request =
	  /*#__PURE__*/
	  function () {
	    var _request2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(configOrUrl, config) {
	      var dummy, stack;
	      return _regeneratorRuntime().wrap(function _callee$(_context) {
	        while (1) switch (_context.prev = _context.next) {
	          case 0:
	            _context.prev = 0;
	            _context.next = 3;
	            return this._request(configOrUrl, config);
	          case 3:
	            return _context.abrupt("return", _context.sent);
	          case 6:
	            _context.prev = 6;
	            _context.t0 = _context["catch"](0);
	            if (_context.t0 instanceof Error) {
	              Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();

	              // slice off the Error: ... line
	              stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
	              try {
	                if (!_context.t0.stack) {
	                  _context.t0.stack = stack;
	                  // match without the 2 top stack lines
	                } else if (stack && !String(_context.t0.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
	                  _context.t0.stack += '\n' + stack;
	                }
	              } catch (e) {
	                // ignore the case where "stack" is an un-writable property
	              }
	            }
	            throw _context.t0;
	          case 10:
	          case "end":
	            return _context.stop();
	        }
	      }, _callee, this, [[0, 6]]);
	    }));
	    function request(_x, _x2) {
	      return _request2.apply(this, arguments);
	    }
	    return request;
	  }();
	  _proto._request = function _request(configOrUrl, config) {
	    /*eslint no-param-reassign:0*/
	    // Allow for axios('example/url'[, config]) a la fetch API
	    if (typeof configOrUrl === 'string') {
	      config = config || {};
	      config.url = configOrUrl;
	    } else {
	      config = configOrUrl || {};
	    }
	    config = mergeConfig(this.defaults, config);
	    var _config = config,
	      transitional = _config.transitional,
	      paramsSerializer = _config.paramsSerializer,
	      headers = _config.headers;
	    if (transitional !== undefined) {
	      validator.assertOptions(transitional, {
	        silentJSONParsing: validators.transitional(validators.boolean),
	        forcedJSONParsing: validators.transitional(validators.boolean),
	        clarifyTimeoutError: validators.transitional(validators.boolean)
	      }, false);
	    }
	    if (paramsSerializer != null) {
	      if (utils$1.isFunction(paramsSerializer)) {
	        config.paramsSerializer = {
	          serialize: paramsSerializer
	        };
	      } else {
	        validator.assertOptions(paramsSerializer, {
	          encode: validators.function,
	          serialize: validators.function
	        }, true);
	      }
	    }

	    // Set config.method
	    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

	    // Flatten headers
	    var contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
	    headers && utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (method) {
	      delete headers[method];
	    });
	    config.headers = AxiosHeaders.concat(contextHeaders, headers);

	    // filter out skipped interceptors
	    var requestInterceptorChain = [];
	    var synchronousRequestInterceptors = true;
	    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
	        return;
	      }
	      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
	      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
	    });
	    var responseInterceptorChain = [];
	    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
	    });
	    var promise;
	    var i = 0;
	    var len;
	    if (!synchronousRequestInterceptors) {
	      var chain = [dispatchRequest.bind(this), undefined];
	      chain.unshift.apply(chain, requestInterceptorChain);
	      chain.push.apply(chain, responseInterceptorChain);
	      len = chain.length;
	      promise = Promise.resolve(config);
	      while (i < len) {
	        promise = promise.then(chain[i++], chain[i++]);
	      }
	      return promise;
	    }
	    len = requestInterceptorChain.length;
	    var newConfig = config;
	    i = 0;
	    while (i < len) {
	      var onFulfilled = requestInterceptorChain[i++];
	      var onRejected = requestInterceptorChain[i++];
	      try {
	        newConfig = onFulfilled(newConfig);
	      } catch (error) {
	        onRejected.call(this, error);
	        break;
	      }
	    }
	    try {
	      promise = dispatchRequest.call(this, newConfig);
	    } catch (error) {
	      return Promise.reject(error);
	    }
	    i = 0;
	    len = responseInterceptorChain.length;
	    while (i < len) {
	      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
	    }
	    return promise;
	  };
	  _proto.getUri = function getUri(config) {
	    config = mergeConfig(this.defaults, config);
	    var fullPath = buildFullPath(config.baseURL, config.url);
	    return buildURL(fullPath, config.params, config.paramsSerializer);
	  };
	  return Axios;
	}(); // Provide aliases for supported request methods
	utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function (url, config) {
	    return this.request(mergeConfig(config || {}, {
	      method: method,
	      url: url,
	      data: (config || {}).data
	    }));
	  };
	});
	utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/

	  function generateHTTPMethod(isForm) {
	    return function httpMethod(url, data, config) {
	      return this.request(mergeConfig(config || {}, {
	        method: method,
	        headers: isForm ? {
	          'Content-Type': 'multipart/form-data'
	        } : {},
	        url: url,
	        data: data
	      }));
	    };
	  }
	  Axios.prototype[method] = generateHTTPMethod();
	  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
	});

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @param {Function} executor The executor function.
	 *
	 * @returns {CancelToken}
	 */
	var CancelToken = /*#__PURE__*/function () {
	  function CancelToken(executor) {
	    if (typeof executor !== 'function') {
	      throw new TypeError('executor must be a function.');
	    }
	    var resolvePromise;
	    this.promise = new Promise(function promiseExecutor(resolve) {
	      resolvePromise = resolve;
	    });
	    var token = this;

	    // eslint-disable-next-line func-names
	    this.promise.then(function (cancel) {
	      if (!token._listeners) return;
	      var i = token._listeners.length;
	      while (i-- > 0) {
	        token._listeners[i](cancel);
	      }
	      token._listeners = null;
	    });

	    // eslint-disable-next-line func-names
	    this.promise.then = function (onfulfilled) {
	      var _resolve;
	      // eslint-disable-next-line func-names
	      var promise = new Promise(function (resolve) {
	        token.subscribe(resolve);
	        _resolve = resolve;
	      }).then(onfulfilled);
	      promise.cancel = function reject() {
	        token.unsubscribe(_resolve);
	      };
	      return promise;
	    };
	    executor(function cancel(message, config, request) {
	      if (token.reason) {
	        // Cancellation has already been requested
	        return;
	      }
	      token.reason = new CanceledError(message, config, request);
	      resolvePromise(token.reason);
	    });
	  }

	  /**
	   * Throws a `CanceledError` if cancellation has been requested.
	   */
	  var _proto = CancelToken.prototype;
	  _proto.throwIfRequested = function throwIfRequested() {
	    if (this.reason) {
	      throw this.reason;
	    }
	  }

	  /**
	   * Subscribe to the cancel signal
	   */;
	  _proto.subscribe = function subscribe(listener) {
	    if (this.reason) {
	      listener(this.reason);
	      return;
	    }
	    if (this._listeners) {
	      this._listeners.push(listener);
	    } else {
	      this._listeners = [listener];
	    }
	  }

	  /**
	   * Unsubscribe from the cancel signal
	   */;
	  _proto.unsubscribe = function unsubscribe(listener) {
	    if (!this._listeners) {
	      return;
	    }
	    var index = this._listeners.indexOf(listener);
	    if (index !== -1) {
	      this._listeners.splice(index, 1);
	    }
	  };
	  _proto.toAbortSignal = function toAbortSignal() {
	    var _this = this;
	    var controller = new AbortController();
	    var abort = function abort(err) {
	      controller.abort(err);
	    };
	    this.subscribe(abort);
	    controller.signal.unsubscribe = function () {
	      return _this.unsubscribe(abort);
	    };
	    return controller.signal;
	  }

	  /**
	   * Returns an object that contains a new `CancelToken` and a function that, when called,
	   * cancels the `CancelToken`.
	   */;
	  CancelToken.source = function source() {
	    var cancel;
	    var token = new CancelToken(function executor(c) {
	      cancel = c;
	    });
	    return {
	      token: token,
	      cancel: cancel
	    };
	  };
	  return CancelToken;
	}();

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 *
	 * @returns {Function}
	 */
	function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	}

	/**
	 * Determines whether the payload is an error thrown by Axios
	 *
	 * @param {*} payload The value to test
	 *
	 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
	 */
	function isAxiosError(payload) {
	  return utils$1.isObject(payload) && payload.isAxiosError === true;
	}

	var HttpStatusCode = {
	  Continue: 100,
	  SwitchingProtocols: 101,
	  Processing: 102,
	  EarlyHints: 103,
	  Ok: 200,
	  Created: 201,
	  Accepted: 202,
	  NonAuthoritativeInformation: 203,
	  NoContent: 204,
	  ResetContent: 205,
	  PartialContent: 206,
	  MultiStatus: 207,
	  AlreadyReported: 208,
	  ImUsed: 226,
	  MultipleChoices: 300,
	  MovedPermanently: 301,
	  Found: 302,
	  SeeOther: 303,
	  NotModified: 304,
	  UseProxy: 305,
	  Unused: 306,
	  TemporaryRedirect: 307,
	  PermanentRedirect: 308,
	  BadRequest: 400,
	  Unauthorized: 401,
	  PaymentRequired: 402,
	  Forbidden: 403,
	  NotFound: 404,
	  MethodNotAllowed: 405,
	  NotAcceptable: 406,
	  ProxyAuthenticationRequired: 407,
	  RequestTimeout: 408,
	  Conflict: 409,
	  Gone: 410,
	  LengthRequired: 411,
	  PreconditionFailed: 412,
	  PayloadTooLarge: 413,
	  UriTooLong: 414,
	  UnsupportedMediaType: 415,
	  RangeNotSatisfiable: 416,
	  ExpectationFailed: 417,
	  ImATeapot: 418,
	  MisdirectedRequest: 421,
	  UnprocessableEntity: 422,
	  Locked: 423,
	  FailedDependency: 424,
	  TooEarly: 425,
	  UpgradeRequired: 426,
	  PreconditionRequired: 428,
	  TooManyRequests: 429,
	  RequestHeaderFieldsTooLarge: 431,
	  UnavailableForLegalReasons: 451,
	  InternalServerError: 500,
	  NotImplemented: 501,
	  BadGateway: 502,
	  ServiceUnavailable: 503,
	  GatewayTimeout: 504,
	  HttpVersionNotSupported: 505,
	  VariantAlsoNegotiates: 506,
	  InsufficientStorage: 507,
	  LoopDetected: 508,
	  NotExtended: 510,
	  NetworkAuthenticationRequired: 511
	};
	Object.entries(HttpStatusCode).forEach(function (_ref) {
	  var _ref2 = _slicedToArray(_ref, 2),
	    key = _ref2[0],
	    value = _ref2[1];
	  HttpStatusCode[value] = key;
	});

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 *
	 * @returns {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils$1.extend(instance, Axios.prototype, context, {
	    allOwnKeys: true
	  });

	  // Copy context to instance
	  utils$1.extend(instance, context, null, {
	    allOwnKeys: true
	  });

	  // Factory for creating new instances
	  instance.create = function create(instanceConfig) {
	    return createInstance(mergeConfig(defaultConfig, instanceConfig));
	  };
	  return instance;
	}

	// Create the default instance to be exported
	var axios = createInstance(defaults);

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;

	// Expose Cancel & CancelToken
	axios.CanceledError = CanceledError;
	axios.CancelToken = CancelToken;
	axios.isCancel = isCancel;
	axios.VERSION = VERSION;
	axios.toFormData = toFormData;

	// Expose AxiosError class
	axios.AxiosError = AxiosError;

	// alias for CanceledError for backward compatibility
	axios.Cancel = axios.CanceledError;

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = spread;

	// Expose isAxiosError
	axios.isAxiosError = isAxiosError;

	// Expose mergeConfig
	axios.mergeConfig = mergeConfig;
	axios.AxiosHeaders = AxiosHeaders;
	axios.formToJSON = function (thing) {
	  return formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
	};
	axios.getAdapter = adapters.getAdapter;
	axios.HttpStatusCode = HttpStatusCode;
	axios.default = axios;

	// This module is intended to unwrap Axios default export as named.
	// Keep top-level export same with static properties
	// so that it can keep same with es module or cjs
	axios.Axios;
	  axios.AxiosError;
	  axios.CanceledError;
	  axios.isCancel;
	  axios.CancelToken;
	  axios.VERSION;
	  axios.all;
	  axios.Cancel;
	  axios.isAxiosError;
	  axios.spread;
	  axios.toFormData;
	  axios.AxiosHeaders;
	  axios.HttpStatusCode;
	  axios.formToJSON;
	  axios.getAdapter;
	  axios.mergeConfig;

	var getInitialConfig = function getInitialConfig() {
	  var _a, _b, _c, _d, _e, _f;
	  var urlParams = new URLSearchParams(window.location.search);
	  return {
	    baseURL: (_a = urlParams.get('tb_api')) !== null && _a !== void 0 ? _a : '',
	    testId: (_b = urlParams.get('tb_test_id')) !== null && _b !== void 0 ? _b : '',
	    testRunId: (_c = urlParams.get('tb_test_run_id')) !== null && _c !== void 0 ? _c : '',
	    playerId: (_d = urlParams.get('tb_player_id')) !== null && _d !== void 0 ? _d : '',
	    ollamaBaseURL: (_e = urlParams.get('tb_ollama_api')) !== null && _e !== void 0 ? _e : '',
	    timestampNoCache: (_f = urlParams.get('tb_timestamp_no_cache')) !== null && _f !== void 0 ? _f : ''
	  };
	};
	var config = getInitialConfig();
	datadogLogs.setGlobalContextProperty('baseURL', config.baseURL);
	datadogLogs.setGlobalContextProperty('testId', config.testId);
	datadogLogs.setGlobalContextProperty('testRunId', config.testRunId);
	datadogLogs.setGlobalContextProperty('playerId', config.playerId);
	datadogLogs.setGlobalContextProperty('ollamaBaseURL', config.ollamaBaseURL);
	datadogLogs.setGlobalContextProperty('timestampNoCache', config.timestampNoCache);
	console.debug('[pb-common] getInitialConfig():', getInitialConfig());
	var axiosInstance = axios.create({
	  baseURL: config.baseURL
	});
	var setConfig = function setConfig(newConfig) {
	  if (newConfig.baseURL) {
	    axiosInstance.defaults.baseURL = newConfig.baseURL;
	    config.baseURL = newConfig.baseURL;
	  }
	  if (newConfig.testId) {
	    config.testId = newConfig.testId;
	  }
	  if (newConfig.testRunId) {
	    config.testRunId = newConfig.testRunId;
	  }
	  if (newConfig.playerId) {
	    config.playerId = newConfig.playerId;
	  }
	  if (newConfig.ollamaBaseURL) {
	    config.ollamaBaseURL = newConfig.ollamaBaseURL;
	  }
	};
	var updateTestRun = /*#__PURE__*/function () {
	  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(update) {
	    return _regeneratorRuntime().wrap(function _callee$(_context) {
	      while (1) switch (_context.prev = _context.next) {
	        case 0:
	          datadogLogs.logger.info('[api/client] Updating test run - ' + update.status, {
	            action: 'update_test_run',
	            testRunId: (update === null || update === void 0 ? void 0 : update.id) || config.testRunId,
	            payload: update
	          });
	          _context.prev = 1;
	          _context.next = 4;
	          return axiosInstance.patch("/api/test_run?id=eq." + ((update === null || update === void 0 ? void 0 : update.id) || config.testRunId), _objectSpread2(_objectSpread2({}, update), {}, {
	            updated_at: new Date()
	          }));
	        case 4:
	          _context.next = 10;
	          break;
	        case 6:
	          _context.prev = 6;
	          _context.t0 = _context["catch"](1);
	          console.error('Error updating test run:', _context.t0);
	          throw _context.t0;
	        case 10:
	        case "end":
	          return _context.stop();
	      }
	    }, _callee, null, [[1, 6]]);
	  }));
	  return function updateTestRun(_x) {
	    return _ref.apply(this, arguments);
	  };
	}();
	var getFileUrl = function getFileUrl(filename) {
	  return config.baseURL + "/api/file/" + filename;
	};
	var pbApi = {
	  setConfig: setConfig,
	  updateTestRun: updateTestRun
	};

	var domain;

	// This constructor is used to store event handlers. Instantiating this is
	// faster than explicitly calling `Object.create(null)` to get a "clean" empty
	// object (tested with v8 v4.9).
	function EventHandlers() {}
	EventHandlers.prototype = Object.create(null);
	function EventEmitter$1() {
	  EventEmitter$1.init.call(this);
	}

	// nodejs oddity
	// require('events') === require('events').EventEmitter
	EventEmitter$1.EventEmitter = EventEmitter$1;
	EventEmitter$1.usingDomains = false;
	EventEmitter$1.prototype.domain = undefined;
	EventEmitter$1.prototype._events = undefined;
	EventEmitter$1.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter$1.defaultMaxListeners = 10;
	EventEmitter$1.init = function () {
	  this.domain = null;
	  if (EventEmitter$1.usingDomains) {
	    // if there is an active domain, then attach to it.
	    if (domain.active) ;
	  }
	  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
	    this._events = new EventHandlers();
	    this._eventsCount = 0;
	  }
	  this._maxListeners = this._maxListeners || undefined;
	};

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter$1.prototype.setMaxListeners = function setMaxListeners(n) {
	  if (typeof n !== 'number' || n < 0 || isNaN(n)) throw new TypeError('"n" argument must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	function $getMaxListeners(that) {
	  if (that._maxListeners === undefined) return EventEmitter$1.defaultMaxListeners;
	  return that._maxListeners;
	}
	EventEmitter$1.prototype.getMaxListeners = function getMaxListeners() {
	  return $getMaxListeners(this);
	};

	// These standalone emit* functions are used to optimize calling of event
	// handlers for fast cases because emit() itself often has a variable number of
	// arguments and can be deoptimized because of that. These functions always have
	// the same number of arguments and thus do not get deoptimized, so the code
	// inside them can execute faster.
	function emitNone(handler, isFn, self) {
	  if (isFn) handler.call(self);else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i) listeners[i].call(self);
	  }
	}
	function emitOne(handler, isFn, self, arg1) {
	  if (isFn) handler.call(self, arg1);else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i) listeners[i].call(self, arg1);
	  }
	}
	function emitTwo(handler, isFn, self, arg1, arg2) {
	  if (isFn) handler.call(self, arg1, arg2);else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i) listeners[i].call(self, arg1, arg2);
	  }
	}
	function emitThree(handler, isFn, self, arg1, arg2, arg3) {
	  if (isFn) handler.call(self, arg1, arg2, arg3);else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i) listeners[i].call(self, arg1, arg2, arg3);
	  }
	}
	function emitMany(handler, isFn, self, args) {
	  if (isFn) handler.apply(self, args);else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i) listeners[i].apply(self, args);
	  }
	}
	EventEmitter$1.prototype.emit = function emit(type) {
	  var er, handler, len, args, i, events, domain;
	  var doError = type === 'error';
	  events = this._events;
	  if (events) doError = doError && events.error == null;else if (!doError) return false;
	  domain = this.domain;

	  // If there is no 'error' event listener then throw.
	  if (doError) {
	    er = arguments[1];
	    if (domain) {
	      if (!er) er = new Error('Uncaught, unspecified "error" event');
	      er.domainEmitter = this;
	      er.domain = domain;
	      er.domainThrown = false;
	      domain.emit('error', er);
	    } else if (er instanceof Error) {
	      throw er; // Unhandled 'error' event
	    } else {
	      // At least give some kind of context to the user
	      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	      err.context = er;
	      throw err;
	    }
	    return false;
	  }
	  handler = events[type];
	  if (!handler) return false;
	  var isFn = typeof handler === 'function';
	  len = arguments.length;
	  switch (len) {
	    // fast cases
	    case 1:
	      emitNone(handler, isFn, this);
	      break;
	    case 2:
	      emitOne(handler, isFn, this, arguments[1]);
	      break;
	    case 3:
	      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
	      break;
	    case 4:
	      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
	      break;
	    // slower
	    default:
	      args = new Array(len - 1);
	      for (i = 1; i < len; i++) args[i - 1] = arguments[i];
	      emitMany(handler, isFn, this, args);
	  }
	  return true;
	};
	function _addListener(target, type, listener, prepend) {
	  var m;
	  var events;
	  var existing;
	  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
	  events = target._events;
	  if (!events) {
	    events = target._events = new EventHandlers();
	    target._eventsCount = 0;
	  } else {
	    // To avoid recursion in the case that type === "newListener"! Before
	    // adding it to the listeners, first emit "newListener".
	    if (events.newListener) {
	      target.emit('newListener', type, listener.listener ? listener.listener : listener);

	      // Re-assign `events` because a newListener handler could have caused the
	      // this._events to be assigned to a new object
	      events = target._events;
	    }
	    existing = events[type];
	  }
	  if (!existing) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    existing = events[type] = listener;
	    ++target._eventsCount;
	  } else {
	    if (typeof existing === 'function') {
	      // Adding the second element, need to change to array.
	      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
	    } else {
	      // If we've already got an array, just append.
	      if (prepend) {
	        existing.unshift(listener);
	      } else {
	        existing.push(listener);
	      }
	    }

	    // Check for listener leak
	    if (!existing.warned) {
	      m = $getMaxListeners(target);
	      if (m && m > 0 && existing.length > m) {
	        existing.warned = true;
	        var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + type + ' listeners added. ' + 'Use emitter.setMaxListeners() to increase limit');
	        w.name = 'MaxListenersExceededWarning';
	        w.emitter = target;
	        w.type = type;
	        w.count = existing.length;
	        emitWarning(w);
	      }
	    }
	  }
	  return target;
	}
	function emitWarning(e) {
	  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
	}
	EventEmitter$1.prototype.addListener = function addListener(type, listener) {
	  return _addListener(this, type, listener, false);
	};
	EventEmitter$1.prototype.on = EventEmitter$1.prototype.addListener;
	EventEmitter$1.prototype.prependListener = function prependListener(type, listener) {
	  return _addListener(this, type, listener, true);
	};
	function _onceWrap(target, type, listener) {
	  var fired = false;
	  function g() {
	    target.removeListener(type, g);
	    if (!fired) {
	      fired = true;
	      listener.apply(target, arguments);
	    }
	  }
	  g.listener = listener;
	  return g;
	}
	EventEmitter$1.prototype.once = function once(type, listener) {
	  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
	  this.on(type, _onceWrap(this, type, listener));
	  return this;
	};
	EventEmitter$1.prototype.prependOnceListener = function prependOnceListener(type, listener) {
	  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
	  this.prependListener(type, _onceWrap(this, type, listener));
	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter$1.prototype.removeListener = function removeListener(type, listener) {
	  var list, events, position, i, originalListener;
	  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
	  events = this._events;
	  if (!events) return this;
	  list = events[type];
	  if (!list) return this;
	  if (list === listener || list.listener && list.listener === listener) {
	    if (--this._eventsCount === 0) this._events = new EventHandlers();else {
	      delete events[type];
	      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
	    }
	  } else if (typeof list !== 'function') {
	    position = -1;
	    for (i = list.length; i-- > 0;) {
	      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
	        originalListener = list[i].listener;
	        position = i;
	        break;
	      }
	    }
	    if (position < 0) return this;
	    if (list.length === 1) {
	      list[0] = undefined;
	      if (--this._eventsCount === 0) {
	        this._events = new EventHandlers();
	        return this;
	      } else {
	        delete events[type];
	      }
	    } else {
	      spliceOne(list, position);
	    }
	    if (events.removeListener) this.emit('removeListener', type, originalListener || listener);
	  }
	  return this;
	};
	EventEmitter$1.prototype.removeAllListeners = function removeAllListeners(type) {
	  var listeners, events;
	  events = this._events;
	  if (!events) return this;

	  // not listening for removeListener, no need to emit
	  if (!events.removeListener) {
	    if (arguments.length === 0) {
	      this._events = new EventHandlers();
	      this._eventsCount = 0;
	    } else if (events[type]) {
	      if (--this._eventsCount === 0) this._events = new EventHandlers();else delete events[type];
	    }
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    var keys = Object.keys(events);
	    for (var i = 0, key; i < keys.length; ++i) {
	      key = keys[i];
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = new EventHandlers();
	    this._eventsCount = 0;
	    return this;
	  }
	  listeners = events[type];
	  if (typeof listeners === 'function') {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    do {
	      this.removeListener(type, listeners[listeners.length - 1]);
	    } while (listeners[0]);
	  }
	  return this;
	};
	EventEmitter$1.prototype.listeners = function listeners(type) {
	  var evlistener;
	  var ret;
	  var events = this._events;
	  if (!events) ret = [];else {
	    evlistener = events[type];
	    if (!evlistener) ret = [];else if (typeof evlistener === 'function') ret = [evlistener.listener || evlistener];else ret = unwrapListeners(evlistener);
	  }
	  return ret;
	};
	EventEmitter$1.listenerCount = function (emitter, type) {
	  if (typeof emitter.listenerCount === 'function') {
	    return emitter.listenerCount(type);
	  } else {
	    return listenerCount.call(emitter, type);
	  }
	};
	EventEmitter$1.prototype.listenerCount = listenerCount;
	function listenerCount(type) {
	  var events = this._events;
	  if (events) {
	    var evlistener = events[type];
	    if (typeof evlistener === 'function') {
	      return 1;
	    } else if (evlistener) {
	      return evlistener.length;
	    }
	  }
	  return 0;
	}
	EventEmitter$1.prototype.eventNames = function eventNames() {
	  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
	};

	// About 1.5x faster than the two-arg version of Array#splice().
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) list[i] = list[k];
	  list.pop();
	}
	function arrayClone(arr, i) {
	  var copy = new Array(i);
	  while (i--) copy[i] = arr[i];
	  return copy;
	}
	function unwrapListeners(arr) {
	  var ret = new Array(arr.length);
	  for (var i = 0; i < ret.length; ++i) {
	    ret[i] = arr[i].listener || arr[i];
	  }
	  return ret;
	}

	var events = /*#__PURE__*/Object.freeze({
		__proto__: null,
		EventEmitter: EventEmitter$1,
		default: EventEmitter$1
	});

	var EventEmitter = events.EventEmitter;
	var now = function now() {
	  return new Date().getTime();
	};
	var DEFAULT_CODEC = {
	  encode: JSON.stringify,
	  decode: JSON.parse
	};

	// -----------------------------------------------------------------------------

	function ExposedInterface(handler, opts) {
	  this._handler = handler;
	  opts = opts || {};
	  this.id = opts.id || 'ExposedInterface_' + now();
	  this._codec = opts.codec || DEFAULT_CODEC;
	  this._window = opts.window || window;
	  this._guard = opts.guard;
	  this._receiveHandler = this._receive.bind(this);
	  this._window.addEventListener('message', this._receiveHandler);
	  this._subscribedListeners = {};
	}
	ExposedInterface.prototype.dispose = function () {
	  this._window.removeEventListener('message', this._receiveHandler);
	  this._subscribedListeners = {};
	};
	ExposedInterface.prototype._receive = function (e) {
	  if (this._guard) {
	    if (!this._guard(e)) {
	      return;
	    }
	  }
	  try {
	    var message = this._codec.decode(e.data);
	  } catch (err) {
	    return;
	  }
	  if (!message) {
	    return;
	  } else if (message.ping) {
	    this._handlePing(message.ping, e);
	  } else if (message.call) {
	    this._handleCall(message.call, e);
	  } else if (message.subscribe) {
	    this._handleSubscribe(message.subscribe, e);
	  } else if (message.unsubscribe) {
	    this._handleUnsubscribe(message.unsubscribe, e);
	  } else if (message.event) {
	    this._handleEvent(message.event);
	  }
	};
	ExposedInterface.prototype._handlePing = function (ping, e) {
	  this._reply({
	    pong: {
	      to: ping.from,
	      from: ping.source,
	      connection: ping.connection
	    }
	  }, e);
	};
	ExposedInterface.prototype._handleCall = function (call, e) {
	  var self = this;
	  try {
	    if (!this._handler || this._handler[call.method] === undefined) {
	      throw new Error('missing api method: ' + call.method);
	    }
	    var result = this._handler[call.method].apply(this._handler, call.args);
	    // check if its a promise or just a value
	    if (result !== undefined && result.then) {
	      result.then(function (value) {
	        self._reply({
	          result: {
	            id: call.id,
	            value: value
	          }
	        }, e);
	      }).catch(function (err) {
	        console.log('call resulted in error', err);
	        self._reply({
	          result: {
	            id: call.id,
	            error: err.toString()
	          }
	        }, e);
	      });
	    } else {
	      // result isnt a promise
	      self._reply({
	        result: {
	          id: call.id,
	          value: result
	        }
	      }, e);
	    }
	  } catch (err) {
	    console.log('call resulted in error', err);
	    self._reply({
	      result: {
	        id: call.id,
	        error: err.toString()
	      }
	    }, e);
	  }
	};
	ExposedInterface.prototype._handleSubscribe = function (eventName, e) {
	  if (this._handler && this._handler.addListener) {
	    var listener = function (data) {
	      this._reply({
	        event: {
	          type: eventName,
	          data: data
	        }
	      }, e);
	    }.bind(this);
	    this._subscribedListeners[listener] = {
	      source: e.source,
	      origin: e.orgin,
	      eventName: eventName
	    };
	    this._handler.addListener(eventName, listener);
	  }
	};
	ExposedInterface.prototype._handleUnsubscribe = function (eventName, e) {
	  var listeners = Object.keys(this._subscribedListeners);
	  var listener;
	  var sub;
	  for (var i = 0; i < listeners.length; i++) {
	    listener = listeners[i];
	    sub = this._subscribedListeners[listener];
	    if (sub.eventName === eventName && sub.source === e.source && sub.origin === e.origin) {
	      // its a match..
	      this._handler.removeListener(eventName, listener);
	      delete this._subscribedListeners[listener];
	      return;
	    }
	  }
	};
	ExposedInterface.prototype._handleEvent = function (event) {
	  if (this._handler && this._handler.emit) {
	    this._handler.emit(event.type, event.data);
	  }
	};
	ExposedInterface.prototype._reply = function (obj, e) {
	  var data = this._codec.encode(obj);
	  e.source.postMessage(data, e.origin || '*');
	};

	// -----------------------------------------------------------------------------

	function RemoteInterface(opts) {
	  opts = opts || {};
	  this.id = opts.id || 'RemoteInterface_' + now();
	  this._codec = opts.codec || DEFAULT_CODEC;
	  this._origin = opts.origin || '*';
	  this._window = opts.window || window;
	  this._guard = opts.guard;
	  // extra stuff for remote interfaces
	  this._timeout = opts.timeout || 5000;
	  this._pingInterval = opts.pingInterval || 100;
	  this._connectTimeout = opts.connectTimeout || 10000;
	  this._calls = 0;
	  this._pendingCalls = {};
	  this._connected = false;
	  this._pendingConnections = {};
	  this._eventEmitter = new EventEmitter();
	}
	RemoteInterface.prototype.dispose = function () {
	  this._window.removeEventListener('message', this._receiveHandler);
	  this._connected = false;
	};
	RemoteInterface.prototype.connect = function (output) {
	  this._output = output;
	  this._receiveHandler = this._receive.bind(this);
	  this._window.addEventListener('message', this._receiveHandler);
	  // REVIEW: extra code for multiple pending connections is no longer needed
	  var self = this;
	  return new Promise(function (resolve, reject) {
	    var connId = self.id + '_conn_' + now();
	    var pendingConnection = {};
	    self._pendingConnections[connId] = pendingConnection;
	    var cleanup = function cleanup() {
	      clearInterval(pendingConnection.pingIntervalRef);
	      clearTimeout(pendingConnection.timeoutRef);
	      delete self._pendingConnections[connId];
	    };
	    pendingConnection.timeoutRef = setTimeout(function () {
	      self.dispose();
	      cleanup();
	      reject(new Error('connect timeout'));
	    }, self._connectTimeout);
	    pendingConnection.connected = function () {
	      cleanup();
	      resolve(self);
	    };
	    pendingConnection.pingIntervalRef = setInterval(function () {
	      return self._ping(connId);
	    }, self._pingInterval);
	    self._ping(connId);
	  });
	};
	RemoteInterface.prototype.call = function (method, args, timeout) {
	  // returns promise, rejects after timeout if no response
	  var id = this._calls++;
	  timeout = timeout || this._timeout;
	  // console.log('got timeout', timeout)
	  var self = this;
	  return new Promise(function (resolve, reject) {
	    self._pendingCalls[id] = {
	      resolve: resolve,
	      reject: reject,
	      ts: now(),
	      timeout: timeout,
	      timeoutRef: setTimeout(function () {
	        // console.log('timeout!', id)
	        var err = new Error('call timeout: ' + method);
	        err.info = {
	          id: id
	        };
	        self._reject(id, err);
	      }, timeout)
	    };
	    self._send({
	      call: {
	        id: id,
	        method: method,
	        args: args
	      }
	    });
	  });
	};
	RemoteInterface.prototype.fire = function (type, data) {
	  // sends event, no response
	  this._send({
	    event: {
	      type: type,
	      data: data
	    }
	  });
	};
	RemoteInterface.prototype.addListener = function (eventName, listener) {
	  var count = this._eventEmitter.listenerCount('eventName');
	  this._eventEmitter.addListener(eventName, listener);
	  if (count === 0) {
	    // go ahead and register it..
	    this._send({
	      subscribe: eventName
	    });
	  }
	};
	RemoteInterface.prototype.removeListener = function (eventName, listener) {
	  this._eventEmitter.removeListener(eventName, listener);
	  var count = this._eventEmitter.listenerCount('eventName');
	  if (count === 0) {
	    // go ahead and register it..
	    this._send({
	      unsubscribe: eventName
	    });
	  }
	};
	RemoteInterface.prototype.on = function (eventName, listener) {
	  return this.addListener(eventName, listener);
	};
	RemoteInterface.prototype.off = function (eventName, listener) {
	  return this.removeListener(eventName, listener);
	};
	RemoteInterface.prototype._receive = function (e) {
	  if (this._guard) {
	    if (!this._guard(e)) {
	      return;
	    }
	  }
	  try {
	    var message = this._codec.decode(e.data);
	  } catch (err) {
	    return;
	  }
	  if (message.pong) {
	    this._handlePong(message.pong);
	  } else if (message.result) {
	    this._handleResult(message.result);
	  } else if (message.event) {
	    this._handleEvent(message.event);
	  }
	};
	RemoteInterface.prototype._ping = function (connection) {
	  this._send({
	    ping: {
	      from: this.id,
	      connection: connection
	    }
	  });
	};
	RemoteInterface.prototype._resolve = function (id, value) {
	  var call = this._pendingCalls[id];
	  if (call) {
	    clearTimeout(call.timeoutRef);
	    call.resolve(value);
	    delete this._pendingCalls[id];
	  }
	};
	RemoteInterface.prototype._reject = function (id, error) {
	  console.log('reject!!!', id, error);
	  var call = this._pendingCalls[id];
	  if (call) {
	    clearTimeout(call.timeoutRef);
	    call.reject(error);
	    delete this._pendingCalls[id];
	  }
	};
	RemoteInterface.prototype._handlePong = function (pong) {
	  if (pong.to !== this.id) {
	    throw new Error('pong to address does not match self');
	  }
	  var pendingConnection = this._pendingConnections[pong.connection];
	  if (pendingConnection) {
	    pendingConnection.connected();
	  }
	};
	RemoteInterface.prototype._handleResult = function (result) {
	  if (result.error) {
	    this._reject(result.id, new Error(result.error));
	  } else {
	    this._resolve(result.id, result.value);
	  }
	};
	RemoteInterface.prototype._handleEvent = function (event) {
	  console.log(event);
	  this._eventEmitter.emit(event.type, event.data);
	};
	RemoteInterface.prototype._send = function (obj) {
	  if (this._output) {
	    var data = this._codec.encode(obj);
	    this._output.postMessage(data, this._origin);
	    return;
	  }
	};

	// -----------------------------------------------------------------------------

	var _interface = {
	  ExposedInterface: ExposedInterface,
	  RemoteInterface: RemoteInterface
	};

	var Interface = _interface;
	if (commonjsGlobal.window) {
	  commonjsGlobal.window.PostMessageInterface = Interface;
	}
	var postmessageInterface = Interface;

	var _a;
	var parentApi = new postmessageInterface.RemoteInterface({
	  connectTimeout: 2000
	});
	parentApi.connect((_a = window.parent) !== null && _a !== void 0 ? _a : window);
	var getDeviceInfo = /*#__PURE__*/function () {
	  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
	    return _regeneratorRuntime().wrap(function _callee$(_context) {
	      while (1) switch (_context.prev = _context.next) {
	        case 0:
	          _context.prev = 0;
	          _context.next = 3;
	          return parentApi.call('getDeviceInfo');
	        case 3:
	          return _context.abrupt("return", _context.sent);
	        case 6:
	          _context.prev = 6;
	          _context.t0 = _context["catch"](0);
	          console.error('Error getting device info:', _context.t0);
	          return _context.abrupt("return", undefined);
	        case 10:
	        case "end":
	          return _context.stop();
	      }
	    }, _callee, null, [[0, 6]]);
	  }));
	  return function getDeviceInfo() {
	    return _ref.apply(this, arguments);
	  };
	}();
	var getScreenshot = /*#__PURE__*/function () {
	  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
	    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
	      while (1) switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.prev = 0;
	          _context2.next = 3;
	          return parentApi.call('getScreenshot');
	        case 3:
	          return _context2.abrupt("return", _context2.sent);
	        case 6:
	          _context2.prev = 6;
	          _context2.t0 = _context2["catch"](0);
	          console.error('Error getting screenshot:', _context2.t0);
	          return _context2.abrupt("return", undefined);
	        case 10:
	        case "end":
	          return _context2.stop();
	      }
	    }, _callee2, null, [[0, 6]]);
	  }));
	  return function getScreenshot() {
	    return _ref2.apply(this, arguments);
	  };
	}();

	function getFPS() {
	  return new Promise(function (resolve) {
	    var frame = 0;
	    var lastTime = performance.now();
	    function countFrames(time) {
	      frame++;
	      if (time - lastTime >= 1000) {
	        var fps = Math.round(frame * 1000 / (time - lastTime));
	        resolve({
	          fps: fps,
	          frames: frame
	        });
	      } else {
	        requestAnimationFrame(countFrames);
	      }
	    }
	    requestAnimationFrame(countFrames);
	  });
	}
	function getVideoPlaybackQualityAsString(quality) {
	  var totalVideoFrames = quality.totalVideoFrames,
	    droppedVideoFrames = quality.droppedVideoFrames,
	    corruptedVideoFrames = quality.corruptedVideoFrames,
	    creationTime = quality.creationTime;
	  return JSON.stringify({
	    totalVideoFrames: totalVideoFrames,
	    droppedVideoFrames: droppedVideoFrames,
	    corruptedVideoFrames: corruptedVideoFrames,
	    creationTime: creationTime,
	    droppedPercentage: totalVideoFrames > 0 ? (droppedVideoFrames / totalVideoFrames * 100).toFixed(2) + '%' : '0%'
	  }, null, 2);
	}
	var FPSRecorder = /*#__PURE__*/function () {
	  function FPSRecorder(interval) {
	    if (interval === void 0) {
	      interval = 1100;
	    }
	    this.totalFrames = 0;
	    this.droppedFrames = 0;
	    this.lastFPS = 0;
	    this.fpsValues = [];
	    this.fpsInterval = null;
	    this.interval = interval;
	  }
	  var _proto = FPSRecorder.prototype;
	  _proto.start = function start() {
	    var _this = this;
	    this.fpsInterval = setInterval(function () {
	      _this.recordFPS();
	    }, this.interval);
	  };
	  _proto.recordFPS = /*#__PURE__*/function () {
	    var _recordFPS = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
	      var _yield$getFPS, fps, frames, expectedFrames, actualFrames, dropped;
	      return _regeneratorRuntime().wrap(function _callee$(_context) {
	        while (1) switch (_context.prev = _context.next) {
	          case 0:
	            _context.next = 2;
	            return getFPS();
	          case 2:
	            _yield$getFPS = _context.sent;
	            fps = _yield$getFPS.fps;
	            frames = _yield$getFPS.frames;
	            this.totalFrames += frames;
	            // Calculate dropped frames if FPS decreased
	            if (this.lastFPS > fps) {
	              // Estimate dropped frames based on FPS difference
	              expectedFrames = this.lastFPS;
	              actualFrames = fps;
	              dropped = expectedFrames - actualFrames;
	              this.droppedFrames += dropped;
	            }
	            this.lastFPS = fps;
	            this.fpsValues.push(fps);
	          case 9:
	          case "end":
	            return _context.stop();
	        }
	      }, _callee, this);
	    }));
	    function recordFPS() {
	      return _recordFPS.apply(this, arguments);
	    }
	    return recordFPS;
	  }();
	  _proto.stop = function stop() {
	    if (this.fpsInterval) {
	      clearInterval(this.fpsInterval);
	      this.fpsInterval = null;
	    }
	  };
	  _proto.getAverageFPS = function getAverageFPS() {
	    return this.fpsValues.reduce(function (a, b) {
	      return a + b;
	    }, 0) / this.fpsValues.length;
	  };
	  _proto.getTotalFrames = function getTotalFrames() {
	    return this.totalFrames;
	  };
	  _proto.getDroppedFrames = function getDroppedFrames() {
	    return this.droppedFrames;
	  };
	  return FPSRecorder;
	}();
	var DropPercentageRecorder = /*#__PURE__*/function () {
	  function DropPercentageRecorder(videoElement) {
	    this.videoPlaybackQualities = [];
	    this.isRecording = false;
	    this.videoElement = videoElement;
	    this.fpsRecorder = new FPSRecorder();
	  }
	  var _proto2 = DropPercentageRecorder.prototype;
	  _proto2.start = function start() {
	    if (this.isRecording) return;
	    console.debug('[pb-common] [DropPercentageRecorder] start');
	    this.videoElement.addEventListener('ended', this.recordDropPercentage.bind(this));
	    this.fpsRecorder.start();
	    this.isRecording = true;
	  };
	  _proto2.recordDropPercentage = /*#__PURE__*/function () {
	    var _recordDropPercentage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
	      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
	        while (1) switch (_context2.prev = _context2.next) {
	          case 0:
	            if (typeof this.videoElement.getVideoPlaybackQuality === 'function') {
	              console.debug('[pb-common] [DropPercentageRecorder] recordDropPercentage', getVideoPlaybackQualityAsString(this.videoElement.getVideoPlaybackQuality() || {}));
	              this.videoPlaybackQualities.push(this.videoElement.getVideoPlaybackQuality() || {});
	            } else {
	              console.debug('[pb-common] [DropPercentageRecorder] getVideoPlaybackQuality not supported, using FPSRecorder');
	            }
	          case 1:
	          case "end":
	            return _context2.stop();
	        }
	      }, _callee2, this);
	    }));
	    function recordDropPercentage() {
	      return _recordDropPercentage.apply(this, arguments);
	    }
	    return recordDropPercentage;
	  }();
	  _proto2.stop = function stop() {
	    if (!this.isRecording) return;
	    this.videoElement.removeEventListener('ended', this.recordDropPercentage.bind(this));
	    this.fpsRecorder.stop();
	    this.isRecording = false;
	  };
	  _proto2.getAverageVideoPlaybackQualityData = function getAverageVideoPlaybackQualityData() {
	    console.debug('[pb-common] [DropPercentageRecorder] getAverageVideoPlaybackQualityData', this.videoPlaybackQualities.map(getVideoPlaybackQualityAsString));
	    // If no video playback quality data is available or getVideoPlaybackQuality is not supported
	    if (this.videoPlaybackQualities.length === 0 || typeof this.videoElement.getVideoPlaybackQuality !== 'function') {
	      var droppedFrames = this.fpsRecorder.getDroppedFrames();
	      var totalFrames = this.fpsRecorder.getTotalFrames();
	      var _droppedPercentage = totalFrames > 0 ? droppedFrames / totalFrames * 100 : 0;
	      return {
	        droppedVideoFrames: droppedFrames,
	        totalVideoFrames: totalFrames,
	        droppedPercentage: _droppedPercentage,
	        count: 1,
	        fallbackToFPSRecorder: true
	      };
	    }
	    var totalQuality = this.videoPlaybackQualities.reduce(function (acc, quality) {
	      return {
	        droppedVideoFrames: acc.droppedVideoFrames + quality.droppedVideoFrames,
	        totalVideoFrames: acc.totalVideoFrames + quality.totalVideoFrames,
	        creationTime: 0 // We don't need to sum this
	      };
	    }, {
	      droppedVideoFrames: 0,
	      totalVideoFrames: 0,
	      creationTime: 0
	    });
	    var droppedPercentage = totalQuality.totalVideoFrames > 0 ? totalQuality.droppedVideoFrames / totalQuality.totalVideoFrames * 100 : 0;
	    return {
	      droppedVideoFrames: totalQuality.droppedVideoFrames,
	      totalVideoFrames: totalQuality.totalVideoFrames,
	      droppedPercentage: droppedPercentage,
	      count: this.videoPlaybackQualities.length,
	      fallbackToFPSRecorder: false
	    };
	  };
	  return DropPercentageRecorder;
	}();
	var withErrorHandling = function withErrorHandling(fn) {
	  try {
	    fn();
	  } catch (error) {
	    pbApi.updateTestRun({
	      status: 'failed',
	      pass: false,
	      score: 0,
	      data: {
	        error: error instanceof Error ? error.message : String(error)
	      }
	    });
	  }
	};
	function getTestRunData(_x) {
	  return _getTestRunData.apply(this, arguments);
	}
	function _getTestRunData() {
	  _getTestRunData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref) {
	    var data, _a, _b, _c, _d, _e, _f, _yield$Promise$all, _yield$Promise$all2, deviceInfo, screenshot;
	    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
	      while (1) switch (_context3.prev = _context3.next) {
	        case 0:
	          data = _ref.data;
	          _context3.next = 3;
	          return Promise.all([getDeviceInfo(), getScreenshot()]);
	        case 3:
	          _yield$Promise$all = _context3.sent;
	          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
	          deviceInfo = _yield$Promise$all2[0];
	          screenshot = _yield$Promise$all2[1];
	          return _context3.abrupt("return", _objectSpread2({
	            viewport: {
	              width: window.innerWidth,
	              height: window.innerHeight
	            },
	            pixelRatio: window.devicePixelRatio,
	            memory: {
	              totalJSHeapSize: (_b = (_a = performance.memory) === null || _a === void 0 ? void 0 : _a.totalJSHeapSize) !== null && _b !== void 0 ? _b : 0,
	              usedJSHeapSize: (_d = (_c = performance.memory) === null || _c === void 0 ? void 0 : _c.usedJSHeapSize) !== null && _d !== void 0 ? _d : 0,
	              jsHeapSizeLimit: (_f = (_e = performance.memory) === null || _e === void 0 ? void 0 : _e.jsHeapSizeLimit) !== null && _f !== void 0 ? _f : 0
	            },
	            videoPlaybackQuality: data === null || data === void 0 ? void 0 : data.videoPlaybackQuality,
	            deviceInfo: deviceInfo,
	            screenshot: screenshot
	          }, data));
	        case 8:
	        case "end":
	          return _context3.stop();
	      }
	    }, _callee3);
	  }));
	  return _getTestRunData.apply(this, arguments);
	}
	var getTestScore = function getTestScore(_ref2) {
	  var fps = _ref2.fps,
	    frameDroppedPercentage = _ref2.frameDroppedPercentage;
	  var frameDroppedScore = frameDroppedPercentage <= 10 ? 100 : Math.max(0, 100 - frameDroppedPercentage * 2);
	  var fpsScore = fps > 30 ? 100 : fps * 100 / 30;
	  return (frameDroppedScore + fpsScore) / 2;
	};

	var helloWorld = function helloWorld() {
	  console.log('[pb-common] Hello World');
	};
	datadog.init();
	console.log("%c\u2728 pb-common v" + ("1.1.1") + " (" + ("4/3/2025, 3:59:34 PM") + ") \u2728", 'color: #00c4ff; font-weight: bold;');

	exports.DropPercentageRecorder = DropPercentageRecorder;
	exports.FPSRecorder = FPSRecorder;
	exports.getDeviceInfo = getDeviceInfo;
	exports.getFPS = getFPS;
	exports.getFileUrl = getFileUrl;
	exports.getScreenshot = getScreenshot;
	exports.getTestRunData = getTestRunData;
	exports.getTestScore = getTestScore;
	exports.getVideoPlaybackQualityAsString = getVideoPlaybackQualityAsString;
	exports.helloWorld = helloWorld;
	exports.pbApi = pbApi;
	exports.setConfig = setConfig;
	exports.withErrorHandling = withErrorHandling;

}));
