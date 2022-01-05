!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.DailyIframe = t())
    : (e.DailyIframe = t());
})(this, function () {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var i = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            r.d(
              n,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 65))
    );
  })([
    function (e, t, r) {
      e.exports = r(72);
    },
    function (e, t) {
      function r(e, t, r, n, i, a, o) {
        try {
          var s = e[a](o),
            c = s.value;
        } catch (e) {
          return void r(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      (e.exports = function (e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, a) {
            var o = e.apply(t, n);
            function s(e) {
              r(o, i, a, s, c, "next", e);
            }
            function c(e) {
              r(o, i, a, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, r) {
      "use strict";
      function n() {
        return !i() &&
          "undefined" != typeof window &&
          window.navigator &&
          window.navigator.userAgent
          ? window.navigator.userAgent
          : "";
      }
      function i() {
        return (
          "undefined" != typeof navigator &&
          navigator.product &&
          "ReactNative" === navigator.product
        );
      }
      function a() {
        return (
          navigator &&
          navigator.mediaDevices &&
          navigator.mediaDevices.getUserMedia
        );
      }
      function o() {
        return (
          !!(
            navigator &&
            navigator.mediaDevices &&
            navigator.mediaDevices.getDisplayMedia
          ) &&
          (function (e, t) {
            if (!e || !t) return !1;
            switch (e) {
              case "Chrome":
                return t.major >= 75;
              case "Safari":
                return (
                  RTCRtpTransceiver.prototype.hasOwnProperty(
                    "currentDirection"
                  ) && !(13 === t.major && 0 === t.minor && 0 === t.point)
                );
              case "Firefox":
                return t.major >= 67;
            }
            return !1;
          })(
            d(),
            (function () {
              switch (d()) {
                case "Chrome":
                  return f();
                case "Safari":
                  return h();
                case "Firefox":
                  return v();
                case "Edge":
                  return (function () {
                    var e = 0,
                      t = 0;
                    if ("undefined" != typeof window) {
                      var r = n().match(/Edge\/(\d+).(\d+)/);
                      if (r)
                        try {
                          (e = parseInt(r[1])), (t = parseInt(r[2]));
                        } catch (e) {}
                    }
                    return { major: e, minor: t };
                  })();
              }
            })()
          )
        );
      }
      r.d(t, "b", function () {
        return n;
      }),
        r.d(t, "c", function () {
          return i;
        }),
        r.d(t, "d", function () {
          return o;
        }),
        r.d(t, "f", function () {
          return c;
        }),
        r.d(t, "e", function () {
          return u;
        }),
        r.d(t, "a", function () {
          return l;
        });
      var s = ["Chrome", "Firefox"];
      function c() {
        return (
          !i() &&
          !(function () {
            var e = n();
            if (e.match(/Mobi/) || e.match(/Android/)) return !0;
            if (n().match(/DailyAnd\//)) return !0;
          })() &&
          s.includes(d())
        );
      }
      function u() {
        return !!i() || l();
      }
      function l() {
        return (
          a() &&
          !(function () {
            var e,
              t = d();
            if (!n()) return !0;
            switch (t) {
              case "Chrome":
                return (e = f()).major && e.major > 0 && e.major < 61;
              case "Firefox":
                return (e = v()).major < 78;
              case "Safari":
                return (e = h()).major < 12;
              default:
                return !0;
            }
          })()
        );
      }
      function d() {
        if ("undefined" != typeof window) {
          var e = n();
          return p()
            ? "Safari"
            : e.indexOf("Edge") > -1
            ? "Edge"
            : e.match(/Chrome\//)
            ? "Chrome"
            : e.indexOf("Safari") > -1
            ? "Safari"
            : e.indexOf("Firefox") > -1
            ? "Firefox"
            : e.indexOf("MSIE") > -1 || e.indexOf(".NET") > -1
            ? "IE"
            : "Unknown Browser";
        }
      }
      function f() {
        var e = 0,
          t = 0,
          r = 0,
          i = 0,
          a = !1;
        if ("undefined" != typeof window) {
          var o = n(),
            s = o.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
          if (s)
            try {
              (e = parseInt(s[1])),
                (t = parseInt(s[2])),
                (r = parseInt(s[3])),
                (i = parseInt(s[4])),
                (a = o.indexOf("OPR/") > -1);
            } catch (e) {}
        }
        return { major: e, minor: t, build: r, patch: i, opera: a };
      }
      function p() {
        return !!n().match(/iPad|iPhone|iPod/i) && a();
      }
      function h() {
        var e = 0,
          t = 0,
          r = 0;
        if ("undefined" != typeof window) {
          var i = n().match(/Version\/(\d+).(\d+)(.(\d+))?/);
          if (i)
            try {
              (e = parseInt(i[1])), (t = parseInt(i[2])), (r = parseInt(i[4]));
            } catch (e) {}
          else p() && ((e = 14), (t = 0), (r = 3));
        }
        return { major: e, minor: t, point: r };
      }
      function v() {
        var e = 0,
          t = 0;
        if ("undefined" != typeof window) {
          var r = n().match(/Firefox\/(\d+).(\d+)/);
          if (r)
            try {
              (e = parseInt(r[1])), (t = parseInt(r[2]));
            } catch (e) {}
        }
        return { major: e, minor: t };
      }
    },
    function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return i;
      }),
        r.d(t, "b", function () {
          return a;
        }),
        r.d(t, "a", function () {
          return o;
        });
      var n = r(2);
      function i() {
        return Date.now() + Math.random().toString();
      }
      function a() {
        throw new Error("Method must be implemented in subclass");
      }
      function o(e) {
        var t = e ? new URL(e).origin : null;
        return !t || t.match(/https:\/\/[^.]+\.daily\.co/)
          ? Object(n.e)()
            ? "https://c.daily.co/static/call-machine-object-bundle.js"
            : "https://c.daily.co/static/call-machine-object-nosfu-bundle.js"
          : (t ||
              (console.warn(
                "No baseUrl provided for call object bundle. Defaulting to production CDN..."
              ),
              (t = "https://c.daily.co")),
            Object(n.e)()
              ? "".concat(t, "/static/call-machine-object-bundle.js")
              : "".concat(t, "/static/call-machine-object-nosfu-bundle.js"));
      }
    },
    function (e, t) {
      function r(t) {
        return (
          (e.exports = r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          r(t)
        );
      }
      (e.exports = r),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t) {
      (e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t) {
      function r(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      (e.exports = function (e, t, n) {
        return (
          t && r(e.prototype, t),
          n && r(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t) {
      function r(t) {
        return (
          (e.exports = r =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          r(t)
        );
      }
      (e.exports = r),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t) {
      var r = Array.isArray;
      e.exports = r;
    },
    function (e, t, r) {
      var n = r(42),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = n || i || Function("return this")();
      e.exports = a;
    },
    function (e, t, r) {
      var n = r(27);
      (e.exports = function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && n(e, t);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, r) {
      var n = r(4).default,
        i = r(17);
      (e.exports = function (e, t) {
        if (t && ("object" === n(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return i(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, r) {
      "use strict";
      var n,
        i = "object" == typeof Reflect ? Reflect : null,
        a =
          i && "function" == typeof i.apply
            ? i.apply
            : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      n =
        i && "function" == typeof i.ownKeys
          ? i.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var o =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function s() {
        s.init.call(this);
      }
      (e.exports = s),
        (e.exports.once = function (e, t) {
          return new Promise(function (r, n) {
            function i(r) {
              e.removeListener(t, a), n(r);
            }
            function a() {
              "function" == typeof e.removeListener &&
                e.removeListener("error", i),
                r([].slice.call(arguments));
            }
            g(e, t, a, { once: !0 }),
              "error" !== t &&
                (function (e, t, r) {
                  "function" == typeof e.on && g(e, "error", t, r);
                })(e, i, { once: !0 });
          });
        }),
        (s.EventEmitter = s),
        (s.prototype._events = void 0),
        (s.prototype._eventsCount = 0),
        (s.prototype._maxListeners = void 0);
      var c = 10;
      function u(e) {
        if ("function" != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function l(e) {
        return void 0 === e._maxListeners
          ? s.defaultMaxListeners
          : e._maxListeners;
      }
      function d(e, t, r, n) {
        var i, a, o, s;
        if (
          (u(r),
          void 0 === (a = e._events)
            ? ((a = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== a.newListener &&
                (e.emit("newListener", t, r.listener ? r.listener : r),
                (a = e._events)),
              (o = a[t])),
          void 0 === o)
        )
          (o = a[t] = r), ++e._eventsCount;
        else if (
          ("function" == typeof o
            ? (o = a[t] = n ? [r, o] : [o, r])
            : n
            ? o.unshift(r)
            : o.push(r),
          (i = l(e)) > 0 && o.length > i && !o.warned)
        ) {
          o.warned = !0;
          var c = new Error(
            "Possible EventEmitter memory leak detected. " +
              o.length +
              " " +
              String(t) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (c.name = "MaxListenersExceededWarning"),
            (c.emitter = e),
            (c.type = t),
            (c.count = o.length),
            (s = c),
            console && console.warn && console.warn(s);
        }
        return e;
      }
      function f() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function p(e, t, r) {
        var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          i = f.bind(n);
        return (i.listener = r), (n.wrapFn = i), i;
      }
      function h(e, t, r) {
        var n = e._events;
        if (void 0 === n) return [];
        var i = n[t];
        return void 0 === i
          ? []
          : "function" == typeof i
          ? r
            ? [i.listener || i]
            : [i]
          : r
          ? (function (e) {
              for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(i)
          : m(i, i.length);
      }
      function v(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ("function" == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function m(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r;
      }
      function g(e, t, r, n) {
        if ("function" == typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
        else {
          if ("function" != typeof e.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof e
            );
          e.addEventListener(t, function i(a) {
            n.once && e.removeEventListener(t, i), r(a);
          });
        }
      }
      Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return c;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || o(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          c = e;
        },
      }),
        (s.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (s.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || o(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (s.prototype.getMaxListeners = function () {
          return l(this);
        }),
        (s.prototype.emit = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
          var n = "error" === e,
            i = this._events;
          if (void 0 !== i) n = n && void 0 === i.error;
          else if (!n) return !1;
          if (n) {
            var o;
            if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
            var s = new Error(
              "Unhandled error." + (o ? " (" + o.message + ")" : "")
            );
            throw ((s.context = o), s);
          }
          var c = i[e];
          if (void 0 === c) return !1;
          if ("function" == typeof c) a(c, this, t);
          else {
            var u = c.length,
              l = m(c, u);
            for (r = 0; r < u; ++r) a(l[r], this, t);
          }
          return !0;
        }),
        (s.prototype.addListener = function (e, t) {
          return d(this, e, t, !1);
        }),
        (s.prototype.on = s.prototype.addListener),
        (s.prototype.prependListener = function (e, t) {
          return d(this, e, t, !0);
        }),
        (s.prototype.once = function (e, t) {
          return u(t), this.on(e, p(this, e, t)), this;
        }),
        (s.prototype.prependOnceListener = function (e, t) {
          return u(t), this.prependListener(e, p(this, e, t)), this;
        }),
        (s.prototype.removeListener = function (e, t) {
          var r, n, i, a, o;
          if ((u(t), void 0 === (n = this._events))) return this;
          if (void 0 === (r = n[e])) return this;
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[e],
                n.removeListener &&
                  this.emit("removeListener", e, r.listener || t));
          else if ("function" != typeof r) {
            for (i = -1, a = r.length - 1; a >= 0; a--)
              if (r[a] === t || r[a].listener === t) {
                (o = r[a].listener), (i = a);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? r.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, i),
              1 === r.length && (n[e] = r[0]),
              void 0 !== n.removeListener &&
                this.emit("removeListener", e, o || t);
          }
          return this;
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.removeAllListeners = function (e) {
          var t, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[e]),
              this
            );
          if (0 === arguments.length) {
            var i,
              a = Object.keys(r);
            for (n = 0; n < a.length; ++n)
              "removeListener" !== (i = a[n]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
          return this;
        }),
        (s.prototype.listeners = function (e) {
          return h(this, e, !0);
        }),
        (s.prototype.rawListeners = function (e) {
          return h(this, e, !1);
        }),
        (s.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : v.call(e, t);
        }),
        (s.prototype.listenerCount = v),
        (s.prototype.eventNames = function () {
          return this._eventsCount > 0 ? n(this._events) : [];
        });
    },
    function (e, t, r) {
      var n = r(105),
        i = r(108);
      e.exports = function (e, t) {
        var r = i(e, t);
        return n(r) ? r : void 0;
      };
    },
    function (e, t) {
      (e.exports = function (e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, r) {
      var n = r(19),
        i = r(83),
        a = r(84),
        o = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : o && o in Object(e)
          ? i(e)
          : a(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    function (e, t) {
      (e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        var t = "function" == typeof Map,
          r = "function" == typeof Set,
          n = "function" == typeof WeakSet,
          i = Object.keys,
          a = function (e, t) {
            return e && "object" == typeof e && t.add(e);
          },
          o = function (e, t, r, n) {
            for (var i, a = 0; a < e.length; a++)
              if (r((i = e[a])[0], t[0], n) && r(i[1], t[1], n)) return !0;
            return !1;
          },
          s = function (e, t, r, n) {
            for (var i = 0; i < e.length; i++) if (r(e[i], t, n)) return !0;
            return !1;
          },
          c = function (e, t) {
            return e === t || (e != e && t != t);
          },
          u = function (e) {
            return e.constructor === Object;
          },
          l = function (e) {
            return "function" == typeof e.then;
          },
          d = function (e) {
            return !(!e.$$typeof || !e._store);
          },
          f = function (e) {
            return function (t) {
              var r = e || t;
              return function (e, t, i) {
                void 0 === i &&
                  (i = n
                    ? new WeakSet()
                    : Object.create({
                        _values: [],
                        add: function (e) {
                          this._values.push(e);
                        },
                        has: function (e) {
                          return !!~this._values.indexOf(e);
                        },
                      }));
                var o = i.has(e),
                  s = i.has(t);
                return o || s ? o && s : (a(e, i), a(t, i), r(e, t, i));
              };
            };
          },
          p = function (e) {
            var t = [];
            return (
              e.forEach(function (e, r) {
                return t.push([r, e]);
              }),
              t
            );
          },
          h = function (e) {
            var t = [];
            return (
              e.forEach(function (e) {
                return t.push(e);
              }),
              t
            );
          },
          v = function (e, t, r, n) {
            var a,
              o = i(e),
              u = i(t);
            if (o.length !== u.length) return !1;
            for (var l = 0; l < o.length; l++) {
              if (((a = o[l]), !s(u, a, c))) return !1;
              if (!(("_owner" === a && d(e) && d(t)) || r(e[a], t[a], n)))
                return !1;
            }
            return !0;
          },
          m = Array.isArray,
          g = function (e) {
            var n = "function" == typeof e ? e(i) : i;
            function i(e, i, a) {
              if (c(e, i)) return !0;
              var d = typeof e;
              if (d !== typeof i || "object" !== d || !e || !i) return !1;
              if (u(e) && u(i)) return v(e, i, n, a);
              var f = m(e),
                g = m(i);
              if (f || g)
                return (
                  f === g &&
                  (function (e, t, r, n) {
                    if (e.length !== t.length) return !1;
                    for (var i = 0; i < e.length; i++)
                      if (!r(e[i], t[i], n)) return !1;
                    return !0;
                  })(e, i, n, a)
                );
              var y = e instanceof Date,
                b = i instanceof Date;
              if (y || b) return y === b && c(e.getTime(), i.getTime());
              var _,
                w,
                k = e instanceof RegExp,
                M = i instanceof RegExp;
              if (k || M)
                return (
                  k === M &&
                  ((w = i),
                  (_ = e).source === w.source &&
                    _.global === w.global &&
                    _.ignoreCase === w.ignoreCase &&
                    _.multiline === w.multiline &&
                    _.unicode === w.unicode &&
                    _.sticky === w.sticky &&
                    _.lastIndex === w.lastIndex)
                );
              if (l(e) || l(i)) return e === i;
              if (t) {
                var S = e instanceof Map,
                  E = i instanceof Map;
                if (S || E)
                  return (
                    S === E &&
                    (function (e, t, r, n) {
                      if (e.size !== t.size) return !1;
                      for (var i = p(e), a = p(t), s = 0; s < i.length; s++)
                        if (!o(a, i[s], r, n) || !o(i, a[s], r, n)) return !1;
                      return !0;
                    })(e, i, n, a)
                  );
              }
              if (r) {
                var T = e instanceof Set,
                  A = i instanceof Set;
                if (T || A)
                  return (
                    T === A &&
                    (function (e, t, r, n) {
                      if (e.size !== t.size) return !1;
                      for (var i = h(e), a = h(t), o = 0; o < i.length; o++)
                        if (!s(a, i[o], r, n) || !s(i, a[o], r, n)) return !1;
                      return !0;
                    })(e, i, n, a)
                  );
              }
              return v(e, i, n, a);
            }
            return i;
          },
          y = g(f()),
          b = g(f(c)),
          _ = g(),
          w = g(function () {
            return c;
          }),
          k = {
            circularDeep: y,
            circularShallow: b,
            createCustom: g,
            deep: _,
            sameValueZero: c,
            shallow: w,
          };
        (e.circularDeepEqual = y),
          (e.circularShallowEqual = b),
          (e.createCustomEqual = g),
          (e.deepEqual = _),
          (e.default = k),
          (e.sameValueZeroEqual = c),
          (e.shallowEqual = w),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t);
    },
    function (e, t, r) {
      var n = r(9).Symbol;
      e.exports = n;
    },
    function (e, t, r) {
      var n = r(95),
        i = r(96),
        a = r(97),
        o = r(98),
        s = r(99);
      function c(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = i),
        (c.prototype.get = a),
        (c.prototype.has = o),
        (c.prototype.set = s),
        (e.exports = c);
    },
    function (e, t, r) {
      var n = r(51);
      e.exports = function (e, t) {
        for (var r = e.length; r--; ) if (n(e[r][0], t)) return r;
        return -1;
      };
    },
    function (e, t, r) {
      var n = r(13)(Object, "create");
      e.exports = n;
    },
    function (e, t, r) {
      var n = r(117);
      e.exports = function (e, t) {
        var r = e.__data__;
        return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
      };
    },
    function (e, t, r) {
      var n = r(15),
        i = r(16);
      e.exports = function (e) {
        return "symbol" == typeof e || (i(e) && "[object Symbol]" == n(e));
      };
    },
    function (e, t, r) {
      var n = r(24);
      e.exports = function (e) {
        if ("string" == typeof e || n(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
      };
    },
    function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return c;
      });
      var n = r(5),
        i = r.n(n),
        a = r(6),
        o = r.n(a),
        s = r(3),
        c = (function () {
          function e() {
            i()(this, e);
          }
          return (
            o()(e, [
              {
                key: "addListenerForMessagesFromCallMachine",
                value: function (e, t, r) {
                  Object(s.b)();
                },
              },
              {
                key: "addListenerForMessagesFromDailyJs",
                value: function (e, t, r) {
                  Object(s.b)();
                },
              },
              {
                key: "sendMessageToCallMachine",
                value: function (e, t, r, n) {
                  Object(s.b)();
                },
              },
              {
                key: "sendMessageToDailyJs",
                value: function (e, t, r) {
                  Object(s.b)();
                },
              },
              {
                key: "removeListener",
                value: function (e) {
                  Object(s.b)();
                },
              },
            ]),
            e
          );
        })();
    },
    function (e, t) {
      function r(t, n) {
        return (
          (e.exports = r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          r(t, n)
        );
      }
      (e.exports = r),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, r) {
      var n = r(80),
        i = r(88),
        a = r(30);
      e.exports = function (e) {
        return a(e) ? n(e) : i(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    function (e, t, r) {
      var n = r(48),
        i = r(29);
      e.exports = function (e) {
        return null != e && i(e.length) && !n(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    function (e, t, r) {
      var n = r(13)(r(9), "Map");
      e.exports = n;
    },
    function (e, t, r) {
      var n = r(109),
        i = r(116),
        a = r(118),
        o = r(119),
        s = r(120);
      function c(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = i),
        (c.prototype.get = a),
        (c.prototype.has = o),
        (c.prototype.set = s),
        (e.exports = c);
    },
    function (e, t, r) {
      var n = r(57),
        i = r(25);
      e.exports = function (e, t) {
        for (var r = 0, a = (t = n(t, e)).length; null != e && r < a; )
          e = e[i(t[r++])];
        return r && r == a ? e : void 0;
      };
    },
    function (e, t, r) {
      var n = r(8),
        i = r(24),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        o = /^\w*$/;
      e.exports = function (e, t) {
        if (n(e)) return !1;
        var r = typeof e;
        return (
          !(
            "number" != r &&
            "symbol" != r &&
            "boolean" != r &&
            null != e &&
            !i(e)
          ) ||
          o.test(e) ||
          !a.test(e) ||
          (null != t && e in Object(t))
        );
      };
    },
    function (e, t, r) {
      var n = r(39),
        i = r(76),
        a = r(49),
        o = r(8);
      e.exports = function (e, t) {
        return (o(e) ? n : i)(e, a(t, 3));
      };
    },
    function (e, t, r) {
      var n = r(156),
        i = r(8);
      e.exports = function (e, t, r, a) {
        return null == e
          ? []
          : (i(t) || (t = null == t ? [] : [t]),
            i((r = a ? void 0 : r)) || (r = null == r ? [] : [r]),
            n(e, t, r));
      };
    },
    function (e, t) {
      var r;
      r = (function () {
        return this;
      })();
      try {
        r = r || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (r = window);
      }
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (
          var r = -1, n = null == e ? 0 : e.length, i = 0, a = [];
          ++r < n;

        ) {
          var o = e[r];
          t(o, r, e) && (a[i++] = o);
        }
        return a;
      };
    },
    function (e, t, r) {
      var n = r(77),
        i = r(92)(n);
      e.exports = i;
    },
    function (e, t, r) {
      var n = r(82),
        i = r(16),
        a = Object.prototype,
        o = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        c = n(
          (function () {
            return arguments;
          })()
        )
          ? n
          : function (e) {
              return i(e) && o.call(e, "callee") && !s.call(e, "callee");
            };
      e.exports = c;
    },
    function (e, t, r) {
      (function (t) {
        var r = "object" == typeof t && t && t.Object === Object && t;
        e.exports = r;
      }.call(this, r(38)));
    },
    function (e, t, r) {
      (function (e) {
        var n = r(9),
          i = r(85),
          a = t && !t.nodeType && t,
          o = a && "object" == typeof e && e && !e.nodeType && e,
          s = o && o.exports === a ? n.Buffer : void 0,
          c = (s ? s.isBuffer : void 0) || i;
        e.exports = c;
      }.call(this, r(44)(e)));
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function (e, t) {
      var r = /^(?:0|[1-9]\d*)$/;
      e.exports = function (e, t) {
        var n = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == n || ("symbol" != n && r.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
    },
    function (e, t, r) {
      var n = r(86),
        i = r(47),
        a = r(87),
        o = a && a.isTypedArray,
        s = o ? i(o) : n;
      e.exports = s;
    },
    function (e, t) {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    function (e, t, r) {
      var n = r(15),
        i = r(31);
      e.exports = function (e) {
        if (!i(e)) return !1;
        var t = n(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    function (e, t, r) {
      var n = r(93),
        i = r(143),
        a = r(59),
        o = r(8),
        s = r(153);
      e.exports = function (e) {
        return "function" == typeof e
          ? e
          : null == e
          ? a
          : "object" == typeof e
          ? o(e)
            ? i(e[0], e[1])
            : n(e)
          : s(e);
      };
    },
    function (e, t, r) {
      var n = r(20),
        i = r(100),
        a = r(101),
        o = r(102),
        s = r(103),
        c = r(104);
      function u(e) {
        var t = (this.__data__ = new n(e));
        this.size = t.size;
      }
      (u.prototype.clear = i),
        (u.prototype.delete = a),
        (u.prototype.get = o),
        (u.prototype.has = s),
        (u.prototype.set = c),
        (e.exports = u);
    },
    function (e, t) {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    function (e, t) {
      var r = Function.prototype.toString;
      e.exports = function (e) {
        if (null != e) {
          try {
            return r.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      };
    },
    function (e, t, r) {
      var n = r(121),
        i = r(16);
      e.exports = function e(t, r, a, o, s) {
        return (
          t === r ||
          (null == t || null == r || (!i(t) && !i(r))
            ? t != t && r != r
            : n(t, r, a, o, e, s))
        );
      };
    },
    function (e, t, r) {
      var n = r(122),
        i = r(125),
        a = r(126);
      e.exports = function (e, t, r, o, s, c) {
        var u = 1 & r,
          l = e.length,
          d = t.length;
        if (l != d && !(u && d > l)) return !1;
        var f = c.get(e),
          p = c.get(t);
        if (f && p) return f == t && p == e;
        var h = -1,
          v = !0,
          m = 2 & r ? new n() : void 0;
        for (c.set(e, t), c.set(t, e); ++h < l; ) {
          var g = e[h],
            y = t[h];
          if (o) var b = u ? o(y, g, h, t, e, c) : o(g, y, h, e, t, c);
          if (void 0 !== b) {
            if (b) continue;
            v = !1;
            break;
          }
          if (m) {
            if (
              !i(t, function (e, t) {
                if (!a(m, t) && (g === e || s(g, e, r, o, c))) return m.push(t);
              })
            ) {
              v = !1;
              break;
            }
          } else if (g !== y && !s(g, y, r, o, c)) {
            v = !1;
            break;
          }
        }
        return c.delete(e), c.delete(t), v;
      };
    },
    function (e, t, r) {
      var n = r(31);
      e.exports = function (e) {
        return e == e && !n(e);
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        return function (r) {
          return null != r && r[e] === t && (void 0 !== t || e in Object(r));
        };
      };
    },
    function (e, t, r) {
      var n = r(8),
        i = r(35),
        a = r(145),
        o = r(148);
      e.exports = function (e, t) {
        return n(e) ? e : i(e, t) ? [e] : a(o(e));
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n; )
          i[r] = t(e[r], r, e);
        return i;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return e;
      };
    },
    function (e, t, r) {
      var n = r(66),
        i = r(67),
        a = r(68),
        o = r(70);
      (e.exports = function (e, t) {
        return n(e) || i(e, t) || a(e, t) || o();
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, r) {
      var n = r(71);
      (e.exports = function (e, t) {
        if (null == e) return {};
        var r,
          i,
          a = n(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (r = o[i]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, r) {
      e.exports = (function (e) {
        var t = {};
        function r(n) {
          if (t[n]) return t[n].exports;
          var i = (t[n] = { i: n, l: !1, exports: {} });
          return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
        }
        return (
          (r.m = e),
          (r.c = t),
          (r.d = function (e, t, n) {
            r.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: n });
          }),
          (r.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
              (r.r(n),
              Object.defineProperty(n, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var i in e)
                r.d(
                  n,
                  i,
                  function (t) {
                    return e[t];
                  }.bind(null, i)
                );
            return n;
          }),
          (r.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return r.d(t, "a", t), t;
          }),
          (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (r.p = ""),
          r((r.s = 90))
        );
      })({
        17: function (e, t, r) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var n = r(18),
            i = (function () {
              function e() {}
              return (
                (e.getFirstMatch = function (e, t) {
                  var r = t.match(e);
                  return (r && r.length > 0 && r[1]) || "";
                }),
                (e.getSecondMatch = function (e, t) {
                  var r = t.match(e);
                  return (r && r.length > 1 && r[2]) || "";
                }),
                (e.matchAndReturnConst = function (e, t, r) {
                  if (e.test(t)) return r;
                }),
                (e.getWindowsVersionName = function (e) {
                  switch (e) {
                    case "NT":
                      return "NT";
                    case "XP":
                      return "XP";
                    case "NT 5.0":
                      return "2000";
                    case "NT 5.1":
                      return "XP";
                    case "NT 5.2":
                      return "2003";
                    case "NT 6.0":
                      return "Vista";
                    case "NT 6.1":
                      return "7";
                    case "NT 6.2":
                      return "8";
                    case "NT 6.3":
                      return "8.1";
                    case "NT 10.0":
                      return "10";
                    default:
                      return;
                  }
                }),
                (e.getMacOSVersionName = function (e) {
                  var t = e
                    .split(".")
                    .splice(0, 2)
                    .map(function (e) {
                      return parseInt(e, 10) || 0;
                    });
                  if ((t.push(0), 10 === t[0]))
                    switch (t[1]) {
                      case 5:
                        return "Leopard";
                      case 6:
                        return "Snow Leopard";
                      case 7:
                        return "Lion";
                      case 8:
                        return "Mountain Lion";
                      case 9:
                        return "Mavericks";
                      case 10:
                        return "Yosemite";
                      case 11:
                        return "El Capitan";
                      case 12:
                        return "Sierra";
                      case 13:
                        return "High Sierra";
                      case 14:
                        return "Mojave";
                      case 15:
                        return "Catalina";
                      default:
                        return;
                    }
                }),
                (e.getAndroidVersionName = function (e) {
                  var t = e
                    .split(".")
                    .splice(0, 2)
                    .map(function (e) {
                      return parseInt(e, 10) || 0;
                    });
                  if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                    return 1 === t[0] && t[1] < 6
                      ? "Cupcake"
                      : 1 === t[0] && t[1] >= 6
                      ? "Donut"
                      : 2 === t[0] && t[1] < 2
                      ? "Eclair"
                      : 2 === t[0] && 2 === t[1]
                      ? "Froyo"
                      : 2 === t[0] && t[1] > 2
                      ? "Gingerbread"
                      : 3 === t[0]
                      ? "Honeycomb"
                      : 4 === t[0] && t[1] < 1
                      ? "Ice Cream Sandwich"
                      : 4 === t[0] && t[1] < 4
                      ? "Jelly Bean"
                      : 4 === t[0] && t[1] >= 4
                      ? "KitKat"
                      : 5 === t[0]
                      ? "Lollipop"
                      : 6 === t[0]
                      ? "Marshmallow"
                      : 7 === t[0]
                      ? "Nougat"
                      : 8 === t[0]
                      ? "Oreo"
                      : 9 === t[0]
                      ? "Pie"
                      : void 0;
                }),
                (e.getVersionPrecision = function (e) {
                  return e.split(".").length;
                }),
                (e.compareVersions = function (t, r, n) {
                  void 0 === n && (n = !1);
                  var i = e.getVersionPrecision(t),
                    a = e.getVersionPrecision(r),
                    o = Math.max(i, a),
                    s = 0,
                    c = e.map([t, r], function (t) {
                      var r = o - e.getVersionPrecision(t),
                        n = t + new Array(r + 1).join(".0");
                      return e
                        .map(n.split("."), function (e) {
                          return new Array(20 - e.length).join("0") + e;
                        })
                        .reverse();
                    });
                  for (n && (s = o - Math.min(i, a)), o -= 1; o >= s; ) {
                    if (c[0][o] > c[1][o]) return 1;
                    if (c[0][o] === c[1][o]) {
                      if (o === s) return 0;
                      o -= 1;
                    } else if (c[0][o] < c[1][o]) return -1;
                  }
                }),
                (e.map = function (e, t) {
                  var r,
                    n = [];
                  if (Array.prototype.map)
                    return Array.prototype.map.call(e, t);
                  for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                  return n;
                }),
                (e.find = function (e, t) {
                  var r, n;
                  if (Array.prototype.find)
                    return Array.prototype.find.call(e, t);
                  for (r = 0, n = e.length; r < n; r += 1) {
                    var i = e[r];
                    if (t(i, r)) return i;
                  }
                }),
                (e.assign = function (e) {
                  for (
                    var t,
                      r,
                      n = e,
                      i = arguments.length,
                      a = new Array(i > 1 ? i - 1 : 0),
                      o = 1;
                    o < i;
                    o++
                  )
                    a[o - 1] = arguments[o];
                  if (Object.assign)
                    return Object.assign.apply(Object, [e].concat(a));
                  var s = function () {
                    var e = a[t];
                    "object" == typeof e &&
                      null !== e &&
                      Object.keys(e).forEach(function (t) {
                        n[t] = e[t];
                      });
                  };
                  for (t = 0, r = a.length; t < r; t += 1) s();
                  return e;
                }),
                (e.getBrowserAlias = function (e) {
                  return n.BROWSER_ALIASES_MAP[e];
                }),
                (e.getBrowserTypeByAlias = function (e) {
                  return n.BROWSER_MAP[e] || "";
                }),
                e
              );
            })();
          (t.default = i), (e.exports = t.default);
        },
        18: function (e, t, r) {
          "use strict";
          (t.__esModule = !0),
            (t.ENGINE_MAP =
              t.OS_MAP =
              t.PLATFORMS_MAP =
              t.BROWSER_MAP =
              t.BROWSER_ALIASES_MAP =
                void 0),
            (t.BROWSER_ALIASES_MAP = {
              "Amazon Silk": "amazon_silk",
              "Android Browser": "android",
              Bada: "bada",
              BlackBerry: "blackberry",
              Chrome: "chrome",
              Chromium: "chromium",
              Electron: "electron",
              Epiphany: "epiphany",
              Firefox: "firefox",
              Focus: "focus",
              Generic: "generic",
              "Google Search": "google_search",
              Googlebot: "googlebot",
              "Internet Explorer": "ie",
              "K-Meleon": "k_meleon",
              Maxthon: "maxthon",
              "Microsoft Edge": "edge",
              "MZ Browser": "mz",
              "NAVER Whale Browser": "naver",
              Opera: "opera",
              "Opera Coast": "opera_coast",
              PhantomJS: "phantomjs",
              Puffin: "puffin",
              QupZilla: "qupzilla",
              QQ: "qq",
              QQLite: "qqlite",
              Safari: "safari",
              Sailfish: "sailfish",
              "Samsung Internet for Android": "samsung_internet",
              SeaMonkey: "seamonkey",
              Sleipnir: "sleipnir",
              Swing: "swing",
              Tizen: "tizen",
              "UC Browser": "uc",
              Vivaldi: "vivaldi",
              "WebOS Browser": "webos",
              WeChat: "wechat",
              "Yandex Browser": "yandex",
              Roku: "roku",
            }),
            (t.BROWSER_MAP = {
              amazon_silk: "Amazon Silk",
              android: "Android Browser",
              bada: "Bada",
              blackberry: "BlackBerry",
              chrome: "Chrome",
              chromium: "Chromium",
              electron: "Electron",
              epiphany: "Epiphany",
              firefox: "Firefox",
              focus: "Focus",
              generic: "Generic",
              googlebot: "Googlebot",
              google_search: "Google Search",
              ie: "Internet Explorer",
              k_meleon: "K-Meleon",
              maxthon: "Maxthon",
              edge: "Microsoft Edge",
              mz: "MZ Browser",
              naver: "NAVER Whale Browser",
              opera: "Opera",
              opera_coast: "Opera Coast",
              phantomjs: "PhantomJS",
              puffin: "Puffin",
              qupzilla: "QupZilla",
              qq: "QQ Browser",
              qqlite: "QQ Browser Lite",
              safari: "Safari",
              sailfish: "Sailfish",
              samsung_internet: "Samsung Internet for Android",
              seamonkey: "SeaMonkey",
              sleipnir: "Sleipnir",
              swing: "Swing",
              tizen: "Tizen",
              uc: "UC Browser",
              vivaldi: "Vivaldi",
              webos: "WebOS Browser",
              wechat: "WeChat",
              yandex: "Yandex Browser",
            }),
            (t.PLATFORMS_MAP = {
              tablet: "tablet",
              mobile: "mobile",
              desktop: "desktop",
              tv: "tv",
            }),
            (t.OS_MAP = {
              WindowsPhone: "Windows Phone",
              Windows: "Windows",
              MacOS: "macOS",
              iOS: "iOS",
              Android: "Android",
              WebOS: "WebOS",
              BlackBerry: "BlackBerry",
              Bada: "Bada",
              Tizen: "Tizen",
              Linux: "Linux",
              ChromeOS: "Chrome OS",
              PlayStation4: "PlayStation 4",
              Roku: "Roku",
            }),
            (t.ENGINE_MAP = {
              EdgeHTML: "EdgeHTML",
              Blink: "Blink",
              Trident: "Trident",
              Presto: "Presto",
              Gecko: "Gecko",
              WebKit: "WebKit",
            });
        },
        90: function (e, t, r) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var n,
            i = (n = r(91)) && n.__esModule ? n : { default: n },
            a = r(18);
          function o(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          var s = (function () {
            function e() {}
            var t, r;
            return (
              (e.getParser = function (e, t) {
                if ((void 0 === t && (t = !1), "string" != typeof e))
                  throw new Error("UserAgent should be a string");
                return new i.default(e, t);
              }),
              (e.parse = function (e) {
                return new i.default(e).getResult();
              }),
              (t = e),
              (r = [
                {
                  key: "BROWSER_MAP",
                  get: function () {
                    return a.BROWSER_MAP;
                  },
                },
                {
                  key: "ENGINE_MAP",
                  get: function () {
                    return a.ENGINE_MAP;
                  },
                },
                {
                  key: "OS_MAP",
                  get: function () {
                    return a.OS_MAP;
                  },
                },
                {
                  key: "PLATFORMS_MAP",
                  get: function () {
                    return a.PLATFORMS_MAP;
                  },
                },
              ]) && o(t, r),
              e
            );
          })();
          (t.default = s), (e.exports = t.default);
        },
        91: function (e, t, r) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var n = c(r(92)),
            i = c(r(93)),
            a = c(r(94)),
            o = c(r(95)),
            s = c(r(17));
          function c(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var u = (function () {
            function e(e, t) {
              if ((void 0 === t && (t = !1), null == e || "" === e))
                throw new Error("UserAgent parameter can't be empty");
              (this._ua = e),
                (this.parsedResult = {}),
                !0 !== t && this.parse();
            }
            var t = e.prototype;
            return (
              (t.getUA = function () {
                return this._ua;
              }),
              (t.test = function (e) {
                return e.test(this._ua);
              }),
              (t.parseBrowser = function () {
                var e = this;
                this.parsedResult.browser = {};
                var t = s.default.find(n.default, function (t) {
                  if ("function" == typeof t.test) return t.test(e);
                  if (t.test instanceof Array)
                    return t.test.some(function (t) {
                      return e.test(t);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return (
                  t && (this.parsedResult.browser = t.describe(this.getUA())),
                  this.parsedResult.browser
                );
              }),
              (t.getBrowser = function () {
                return this.parsedResult.browser
                  ? this.parsedResult.browser
                  : this.parseBrowser();
              }),
              (t.getBrowserName = function (e) {
                return e
                  ? String(this.getBrowser().name).toLowerCase() || ""
                  : this.getBrowser().name || "";
              }),
              (t.getBrowserVersion = function () {
                return this.getBrowser().version;
              }),
              (t.getOS = function () {
                return this.parsedResult.os
                  ? this.parsedResult.os
                  : this.parseOS();
              }),
              (t.parseOS = function () {
                var e = this;
                this.parsedResult.os = {};
                var t = s.default.find(i.default, function (t) {
                  if ("function" == typeof t.test) return t.test(e);
                  if (t.test instanceof Array)
                    return t.test.some(function (t) {
                      return e.test(t);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return (
                  t && (this.parsedResult.os = t.describe(this.getUA())),
                  this.parsedResult.os
                );
              }),
              (t.getOSName = function (e) {
                var t = this.getOS().name;
                return e ? String(t).toLowerCase() || "" : t || "";
              }),
              (t.getOSVersion = function () {
                return this.getOS().version;
              }),
              (t.getPlatform = function () {
                return this.parsedResult.platform
                  ? this.parsedResult.platform
                  : this.parsePlatform();
              }),
              (t.getPlatformType = function (e) {
                void 0 === e && (e = !1);
                var t = this.getPlatform().type;
                return e ? String(t).toLowerCase() || "" : t || "";
              }),
              (t.parsePlatform = function () {
                var e = this;
                this.parsedResult.platform = {};
                var t = s.default.find(a.default, function (t) {
                  if ("function" == typeof t.test) return t.test(e);
                  if (t.test instanceof Array)
                    return t.test.some(function (t) {
                      return e.test(t);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return (
                  t && (this.parsedResult.platform = t.describe(this.getUA())),
                  this.parsedResult.platform
                );
              }),
              (t.getEngine = function () {
                return this.parsedResult.engine
                  ? this.parsedResult.engine
                  : this.parseEngine();
              }),
              (t.getEngineName = function (e) {
                return e
                  ? String(this.getEngine().name).toLowerCase() || ""
                  : this.getEngine().name || "";
              }),
              (t.parseEngine = function () {
                var e = this;
                this.parsedResult.engine = {};
                var t = s.default.find(o.default, function (t) {
                  if ("function" == typeof t.test) return t.test(e);
                  if (t.test instanceof Array)
                    return t.test.some(function (t) {
                      return e.test(t);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return (
                  t && (this.parsedResult.engine = t.describe(this.getUA())),
                  this.parsedResult.engine
                );
              }),
              (t.parse = function () {
                return (
                  this.parseBrowser(),
                  this.parseOS(),
                  this.parsePlatform(),
                  this.parseEngine(),
                  this
                );
              }),
              (t.getResult = function () {
                return s.default.assign({}, this.parsedResult);
              }),
              (t.satisfies = function (e) {
                var t = this,
                  r = {},
                  n = 0,
                  i = {},
                  a = 0;
                if (
                  (Object.keys(e).forEach(function (t) {
                    var o = e[t];
                    "string" == typeof o
                      ? ((i[t] = o), (a += 1))
                      : "object" == typeof o && ((r[t] = o), (n += 1));
                  }),
                  n > 0)
                ) {
                  var o = Object.keys(r),
                    c = s.default.find(o, function (e) {
                      return t.isOS(e);
                    });
                  if (c) {
                    var u = this.satisfies(r[c]);
                    if (void 0 !== u) return u;
                  }
                  var l = s.default.find(o, function (e) {
                    return t.isPlatform(e);
                  });
                  if (l) {
                    var d = this.satisfies(r[l]);
                    if (void 0 !== d) return d;
                  }
                }
                if (a > 0) {
                  var f = Object.keys(i),
                    p = s.default.find(f, function (e) {
                      return t.isBrowser(e, !0);
                    });
                  if (void 0 !== p) return this.compareVersion(i[p]);
                }
              }),
              (t.isBrowser = function (e, t) {
                void 0 === t && (t = !1);
                var r = this.getBrowserName().toLowerCase(),
                  n = e.toLowerCase(),
                  i = s.default.getBrowserTypeByAlias(n);
                return t && i && (n = i.toLowerCase()), n === r;
              }),
              (t.compareVersion = function (e) {
                var t = [0],
                  r = e,
                  n = !1,
                  i = this.getBrowserVersion();
                if ("string" == typeof i)
                  return (
                    ">" === e[0] || "<" === e[0]
                      ? ((r = e.substr(1)),
                        "=" === e[1] ? ((n = !0), (r = e.substr(2))) : (t = []),
                        ">" === e[0] ? t.push(1) : t.push(-1))
                      : "=" === e[0]
                      ? (r = e.substr(1))
                      : "~" === e[0] && ((n = !0), (r = e.substr(1))),
                    t.indexOf(s.default.compareVersions(i, r, n)) > -1
                  );
              }),
              (t.isOS = function (e) {
                return this.getOSName(!0) === String(e).toLowerCase();
              }),
              (t.isPlatform = function (e) {
                return this.getPlatformType(!0) === String(e).toLowerCase();
              }),
              (t.isEngine = function (e) {
                return this.getEngineName(!0) === String(e).toLowerCase();
              }),
              (t.is = function (e, t) {
                return (
                  void 0 === t && (t = !1),
                  this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                );
              }),
              (t.some = function (e) {
                var t = this;
                return (
                  void 0 === e && (e = []),
                  e.some(function (e) {
                    return t.is(e);
                  })
                );
              }),
              e
            );
          })();
          (t.default = u), (e.exports = t.default);
        },
        92: function (e, t, r) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var n,
            i = (n = r(17)) && n.__esModule ? n : { default: n },
            a = /version\/(\d+(\.?_?\d+)+)/i,
            o = [
              {
                test: [/googlebot/i],
                describe: function (e) {
                  var t = { name: "Googlebot" },
                    r =
                      i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) ||
                      i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/opera/i],
                describe: function (e) {
                  var t = { name: "Opera" },
                    r =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:opera)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/opr\/|opios/i],
                describe: function (e) {
                  var t = { name: "Opera" },
                    r =
                      i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) ||
                      i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/SamsungBrowser/i],
                describe: function (e) {
                  var t = { name: "Samsung Internet for Android" },
                    r =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/Whale/i],
                describe: function (e) {
                  var t = { name: "NAVER Whale Browser" },
                    r =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:whale)[\s/](\d+(?:\.\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/MZBrowser/i],
                describe: function (e) {
                  var t = { name: "MZ Browser" },
                    r =
                      i.default.getFirstMatch(
                        /(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/focus/i],
                describe: function (e) {
                  var t = { name: "Focus" },
                    r =
                      i.default.getFirstMatch(
                        /(?:focus)[\s/](\d+(?:\.\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/swing/i],
                describe: function (e) {
                  var t = { name: "Swing" },
                    r =
                      i.default.getFirstMatch(
                        /(?:swing)[\s/](\d+(?:\.\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/coast/i],
                describe: function (e) {
                  var t = { name: "Opera Coast" },
                    r =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:coast)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/opt\/\d+(?:.?_?\d+)+/i],
                describe: function (e) {
                  var t = { name: "Opera Touch" },
                    r =
                      i.default.getFirstMatch(
                        /(?:opt)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/yabrowser/i],
                describe: function (e) {
                  var t = { name: "Yandex Browser" },
                    r =
                      i.default.getFirstMatch(
                        /(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/ucbrowser/i],
                describe: function (e) {
                  var t = { name: "UC Browser" },
                    r =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/Maxthon|mxios/i],
                describe: function (e) {
                  var t = { name: "Maxthon" },
                    r =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/epiphany/i],
                describe: function (e) {
                  var t = { name: "Epiphany" },
                    r =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/puffin/i],
                describe: function (e) {
                  var t = { name: "Puffin" },
                    r =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/sleipnir/i],
                describe: function (e) {
                  var t = { name: "Sleipnir" },
                    r =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/k-meleon/i],
                describe: function (e) {
                  var t = { name: "K-Meleon" },
                    r =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/micromessenger/i],
                describe: function (e) {
                  var t = { name: "WeChat" },
                    r =
                      i.default.getFirstMatch(
                        /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/qqbrowser/i],
                describe: function (e) {
                  var t = {
                      name: /qqbrowserlite/i.test(e)
                        ? "QQ Browser Lite"
                        : "QQ Browser",
                    },
                    r =
                      i.default.getFirstMatch(
                        /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/msie|trident/i],
                describe: function (e) {
                  var t = { name: "Internet Explorer" },
                    r = i.default.getFirstMatch(
                      /(?:msie |rv:)(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/\sedg\//i],
                describe: function (e) {
                  var t = { name: "Microsoft Edge" },
                    r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/edg([ea]|ios)/i],
                describe: function (e) {
                  var t = { name: "Microsoft Edge" },
                    r = i.default.getSecondMatch(
                      /edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/vivaldi/i],
                describe: function (e) {
                  var t = { name: "Vivaldi" },
                    r = i.default.getFirstMatch(
                      /vivaldi\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/seamonkey/i],
                describe: function (e) {
                  var t = { name: "SeaMonkey" },
                    r = i.default.getFirstMatch(
                      /seamonkey\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/sailfish/i],
                describe: function (e) {
                  var t = { name: "Sailfish" },
                    r = i.default.getFirstMatch(
                      /sailfish\s?browser\/(\d+(\.\d+)?)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/silk/i],
                describe: function (e) {
                  var t = { name: "Amazon Silk" },
                    r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/phantom/i],
                describe: function (e) {
                  var t = { name: "PhantomJS" },
                    r = i.default.getFirstMatch(
                      /phantomjs\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/slimerjs/i],
                describe: function (e) {
                  var t = { name: "SlimerJS" },
                    r = i.default.getFirstMatch(
                      /slimerjs\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                describe: function (e) {
                  var t = { name: "BlackBerry" },
                    r =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/(web|hpw)[o0]s/i],
                describe: function (e) {
                  var t = { name: "WebOS Browser" },
                    r =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/bada/i],
                describe: function (e) {
                  var t = { name: "Bada" },
                    r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/tizen/i],
                describe: function (e) {
                  var t = { name: "Tizen" },
                    r =
                      i.default.getFirstMatch(
                        /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/qupzilla/i],
                describe: function (e) {
                  var t = { name: "QupZilla" },
                    r =
                      i.default.getFirstMatch(
                        /(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/firefox|iceweasel|fxios/i],
                describe: function (e) {
                  var t = { name: "Firefox" },
                    r = i.default.getFirstMatch(
                      /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/electron/i],
                describe: function (e) {
                  var t = { name: "Electron" },
                    r = i.default.getFirstMatch(
                      /(?:electron)\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/MiuiBrowser/i],
                describe: function (e) {
                  var t = { name: "Miui" },
                    r = i.default.getFirstMatch(
                      /(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/chromium/i],
                describe: function (e) {
                  var t = { name: "Chromium" },
                    r =
                      i.default.getFirstMatch(
                        /(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/chrome|crios|crmo/i],
                describe: function (e) {
                  var t = { name: "Chrome" },
                    r = i.default.getFirstMatch(
                      /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/GSA/i],
                describe: function (e) {
                  var t = { name: "Google Search" },
                    r = i.default.getFirstMatch(
                      /(?:GSA)\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: function (e) {
                  var t = !e.test(/like android/i),
                    r = e.test(/android/i);
                  return t && r;
                },
                describe: function (e) {
                  var t = { name: "Android Browser" },
                    r = i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/playstation 4/i],
                describe: function (e) {
                  var t = { name: "PlayStation 4" },
                    r = i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/safari|applewebkit/i],
                describe: function (e) {
                  var t = { name: "Safari" },
                    r = i.default.getFirstMatch(a, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/.*/i],
                describe: function (e) {
                  var t =
                    -1 !== e.search("\\(")
                      ? /^(.*)\/(.*)[ \t]\((.*)/
                      : /^(.*)\/(.*) /;
                  return {
                    name: i.default.getFirstMatch(t, e),
                    version: i.default.getSecondMatch(t, e),
                  };
                },
              },
            ];
          (t.default = o), (e.exports = t.default);
        },
        93: function (e, t, r) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var n,
            i = (n = r(17)) && n.__esModule ? n : { default: n },
            a = r(18),
            o = [
              {
                test: [/Roku\/DVP/],
                describe: function (e) {
                  var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                  return { name: a.OS_MAP.Roku, version: t };
                },
              },
              {
                test: [/windows phone/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                    /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                    e
                  );
                  return { name: a.OS_MAP.WindowsPhone, version: t };
                },
              },
              {
                test: [/windows /i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                      /Windows ((NT|XP)( \d\d?.\d)?)/i,
                      e
                    ),
                    r = i.default.getWindowsVersionName(t);
                  return { name: a.OS_MAP.Windows, version: t, versionName: r };
                },
              },
              {
                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                describe: function (e) {
                  var t = { name: a.OS_MAP.iOS },
                    r = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/macintosh/i],
                describe: function (e) {
                  var t = i.default
                      .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e)
                      .replace(/[_\s]/g, "."),
                    r = i.default.getMacOSVersionName(t),
                    n = { name: a.OS_MAP.MacOS, version: t };
                  return r && (n.versionName = r), n;
                },
              },
              {
                test: [/(ipod|iphone|ipad)/i],
                describe: function (e) {
                  var t = i.default
                    .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e)
                    .replace(/[_\s]/g, ".");
                  return { name: a.OS_MAP.iOS, version: t };
                },
              },
              {
                test: function (e) {
                  var t = !e.test(/like android/i),
                    r = e.test(/android/i);
                  return t && r;
                },
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                      /android[\s/-](\d+(\.\d+)*)/i,
                      e
                    ),
                    r = i.default.getAndroidVersionName(t),
                    n = { name: a.OS_MAP.Android, version: t };
                  return r && (n.versionName = r), n;
                },
              },
              {
                test: [/(web|hpw)[o0]s/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                      /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,
                      e
                    ),
                    r = { name: a.OS_MAP.WebOS };
                  return t && t.length && (r.version = t), r;
                },
              },
              {
                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                describe: function (e) {
                  var t =
                    i.default.getFirstMatch(
                      /rim\stablet\sos\s(\d+(\.\d+)*)/i,
                      e
                    ) ||
                    i.default.getFirstMatch(
                      /blackberry\d+\/(\d+([_\s]\d+)*)/i,
                      e
                    ) ||
                    i.default.getFirstMatch(/\bbb(\d+)/i, e);
                  return { name: a.OS_MAP.BlackBerry, version: t };
                },
              },
              {
                test: [/bada/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                  return { name: a.OS_MAP.Bada, version: t };
                },
              },
              {
                test: [/tizen/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                    /tizen[/\s](\d+(\.\d+)*)/i,
                    e
                  );
                  return { name: a.OS_MAP.Tizen, version: t };
                },
              },
              {
                test: [/linux/i],
                describe: function () {
                  return { name: a.OS_MAP.Linux };
                },
              },
              {
                test: [/CrOS/],
                describe: function () {
                  return { name: a.OS_MAP.ChromeOS };
                },
              },
              {
                test: [/PlayStation 4/],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                    /PlayStation 4[/\s](\d+(\.\d+)*)/i,
                    e
                  );
                  return { name: a.OS_MAP.PlayStation4, version: t };
                },
              },
            ];
          (t.default = o), (e.exports = t.default);
        },
        94: function (e, t, r) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var n,
            i = (n = r(17)) && n.__esModule ? n : { default: n },
            a = r(18),
            o = [
              {
                test: [/googlebot/i],
                describe: function () {
                  return { type: "bot", vendor: "Google" };
                },
              },
              {
                test: [/huawei/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                    r = { type: a.PLATFORMS_MAP.mobile, vendor: "Huawei" };
                  return t && (r.model = t), r;
                },
              },
              {
                test: [/nexus\s*(?:7|8|9|10).*/i],
                describe: function () {
                  return { type: a.PLATFORMS_MAP.tablet, vendor: "Nexus" };
                },
              },
              {
                test: [/ipad/i],
                describe: function () {
                  return {
                    type: a.PLATFORMS_MAP.tablet,
                    vendor: "Apple",
                    model: "iPad",
                  };
                },
              },
              {
                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                describe: function () {
                  return {
                    type: a.PLATFORMS_MAP.tablet,
                    vendor: "Apple",
                    model: "iPad",
                  };
                },
              },
              {
                test: [/kftt build/i],
                describe: function () {
                  return {
                    type: a.PLATFORMS_MAP.tablet,
                    vendor: "Amazon",
                    model: "Kindle Fire HD 7",
                  };
                },
              },
              {
                test: [/silk/i],
                describe: function () {
                  return { type: a.PLATFORMS_MAP.tablet, vendor: "Amazon" };
                },
              },
              {
                test: [/tablet(?! pc)/i],
                describe: function () {
                  return { type: a.PLATFORMS_MAP.tablet };
                },
              },
              {
                test: function (e) {
                  var t = e.test(/ipod|iphone/i),
                    r = e.test(/like (ipod|iphone)/i);
                  return t && !r;
                },
                describe: function (e) {
                  var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                  return {
                    type: a.PLATFORMS_MAP.mobile,
                    vendor: "Apple",
                    model: t,
                  };
                },
              },
              {
                test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                describe: function () {
                  return { type: a.PLATFORMS_MAP.mobile, vendor: "Nexus" };
                },
              },
              {
                test: [/[^-]mobi/i],
                describe: function () {
                  return { type: a.PLATFORMS_MAP.mobile };
                },
              },
              {
                test: function (e) {
                  return "blackberry" === e.getBrowserName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
                },
              },
              {
                test: function (e) {
                  return "bada" === e.getBrowserName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.mobile };
                },
              },
              {
                test: function (e) {
                  return "windows phone" === e.getBrowserName();
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
                },
              },
              {
                test: function (e) {
                  var t = Number(String(e.getOSVersion()).split(".")[0]);
                  return "android" === e.getOSName(!0) && t >= 3;
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.tablet };
                },
              },
              {
                test: function (e) {
                  return "android" === e.getOSName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.mobile };
                },
              },
              {
                test: function (e) {
                  return "macos" === e.getOSName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.desktop, vendor: "Apple" };
                },
              },
              {
                test: function (e) {
                  return "windows" === e.getOSName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.desktop };
                },
              },
              {
                test: function (e) {
                  return "linux" === e.getOSName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.desktop };
                },
              },
              {
                test: function (e) {
                  return "playstation 4" === e.getOSName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.tv };
                },
              },
              {
                test: function (e) {
                  return "roku" === e.getOSName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.tv };
                },
              },
            ];
          (t.default = o), (e.exports = t.default);
        },
        95: function (e, t, r) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var n,
            i = (n = r(17)) && n.__esModule ? n : { default: n },
            a = r(18),
            o = [
              {
                test: function (e) {
                  return "microsoft edge" === e.getBrowserName(!0);
                },
                describe: function (e) {
                  if (/\sedg\//i.test(e)) return { name: a.ENGINE_MAP.Blink };
                  var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                  return { name: a.ENGINE_MAP.EdgeHTML, version: t };
                },
              },
              {
                test: [/trident/i],
                describe: function (e) {
                  var t = { name: a.ENGINE_MAP.Trident },
                    r = i.default.getFirstMatch(
                      /trident\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return r && (t.version = r), t;
                },
              },
              {
                test: function (e) {
                  return e.test(/presto/i);
                },
                describe: function (e) {
                  var t = { name: a.ENGINE_MAP.Presto },
                    r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: function (e) {
                  var t = e.test(/gecko/i),
                    r = e.test(/like gecko/i);
                  return t && !r;
                },
                describe: function (e) {
                  var t = { name: a.ENGINE_MAP.Gecko },
                    r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
                },
              },
              {
                test: [/(apple)?webkit\/537\.36/i],
                describe: function () {
                  return { name: a.ENGINE_MAP.Blink };
                },
              },
              {
                test: [/(apple)?webkit/i],
                describe: function (e) {
                  var t = { name: a.ENGINE_MAP.WebKit },
                    r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
                },
              },
            ];
          (t.default = o), (e.exports = t.default);
        },
      });
    },
    function (e, t, r) {
      "use strict";
      (function (e) {
        r.d(t, "a", function () {
          return g;
        });
        var n = r(5),
          i = r.n(n),
          a = r(6),
          o = r.n(a),
          s = r(10),
          c = r.n(s),
          u = r(11),
          l = r.n(u),
          d = r(7),
          f = r.n(d),
          p = r(26),
          h = r(12),
          v = r(3);
        function m(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var r,
              n = f()(e);
            if (t) {
              var i = f()(this).constructor;
              r = Reflect.construct(n, arguments, i);
            } else r = n.apply(this, arguments);
            return l()(this, r);
          };
        }
        (e.callMachineToDailyJsEmitter =
          e.callMachineToDailyJsEmitter || new h.EventEmitter()),
          (e.dailyJsToCallMachineEmitter =
            e.dailyJsToCallMachineEmitter || new h.EventEmitter());
        var g = (function (t) {
          c()(n, t);
          var r = m(n);
          function n() {
            var e;
            return (
              i()(this, n),
              ((e = r.call(this))._wrappedListeners = {}),
              (e._messageCallbacks = {}),
              e
            );
          }
          return (
            o()(n, [
              {
                key: "addListenerForMessagesFromCallMachine",
                value: function (t, r, n) {
                  this._addListener(
                    t,
                    e.callMachineToDailyJsEmitter,
                    n,
                    "received call machine message"
                  );
                },
              },
              {
                key: "addListenerForMessagesFromDailyJs",
                value: function (t, r, n) {
                  this._addListener(
                    t,
                    e.dailyJsToCallMachineEmitter,
                    n,
                    "received daily-js message"
                  );
                },
              },
              {
                key: "sendMessageToCallMachine",
                value: function (t, r) {
                  this._sendMessage(
                    t,
                    e.dailyJsToCallMachineEmitter,
                    "sending message to call machine",
                    r
                  );
                },
              },
              {
                key: "sendMessageToDailyJs",
                value: function (t) {
                  this._sendMessage(
                    t,
                    e.callMachineToDailyJsEmitter,
                    "sending message to daily-js"
                  );
                },
              },
              {
                key: "removeListener",
                value: function (t) {
                  var r = this._wrappedListeners[t];
                  r &&
                    (e.callMachineToDailyJsEmitter.removeListener("message", r),
                    e.dailyJsToCallMachineEmitter.removeListener("message", r),
                    delete this._wrappedListeners[t]);
                },
              },
              {
                key: "_addListener",
                value: function (e, t, r, n) {
                  var i = this,
                    a = function (t) {
                      if (
                        t.callbackStamp &&
                        i._messageCallbacks[t.callbackStamp]
                      ) {
                        var n = t.callbackStamp;
                        i._messageCallbacks[n].call(r, t),
                          delete i._messageCallbacks[n];
                      }
                      e.call(r, t);
                    };
                  (this._wrappedListeners[e] = a), t.addListener("message", a);
                },
              },
              {
                key: "_sendMessage",
                value: function (e, t, r, n) {
                  if (n) {
                    var i = Object(v.c)();
                    (this._messageCallbacks[i] = n), (e.callbackStamp = i);
                  }
                  t.emit("message", e);
                },
              },
            ]),
            n
          );
        })(p.a);
      }.call(this, r(38)));
    },
    function (e, t, r) {
      var n = r(7),
        i = r(27),
        a = r(73),
        o = r(74);
      function s(t) {
        var r = "function" == typeof Map ? new Map() : void 0;
        return (
          (e.exports = s =
            function (e) {
              if (null === e || !a(e)) return e;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== r) {
                if (r.has(e)) return r.get(e);
                r.set(e, t);
              }
              function t() {
                return o(e, arguments, n(this).constructor);
              }
              return (
                (t.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(t, e)
              );
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          s(t)
        );
      }
      (e.exports = s),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, r) {
      var n = r(161);
      e.exports = n.default;
    },
    function (e, t) {
      (e.exports = function (e) {
        if (Array.isArray(e)) return e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t) {
      (e.exports = function (e, t) {
        var r =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != r) {
          var n,
            i,
            a = [],
            o = !0,
            s = !1;
          try {
            for (
              r = r.call(e);
              !(o = (n = r.next()).done) &&
              (a.push(n.value), !t || a.length !== t);
              o = !0
            );
          } catch (e) {
            (s = !0), (i = e);
          } finally {
            try {
              o || null == r.return || r.return();
            } finally {
              if (s) throw i;
            }
          }
          return a;
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, r) {
      var n = r(69);
      (e.exports = function (e, t) {
        if (e) {
          if ("string" == typeof e) return n(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
              : void 0
          );
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t) {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t) {
      (e.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t) {
      (e.exports = function (e, t) {
        if (null == e) return {};
        var r,
          n,
          i = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, r) {
      var n = (function (e) {
        "use strict";
        var t = Object.prototype,
          r = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          i = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          o = n.toStringTag || "@@toStringTag";
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (e) {
          s = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function c(e, t, r, n) {
          var i = t && t.prototype instanceof d ? t : d,
            a = Object.create(i.prototype),
            o = new M(n || []);
          return (
            (a._invoke = (function (e, t, r) {
              var n = "suspendedStart";
              return function (i, a) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === i) throw a;
                  return E();
                }
                for (r.method = i, r.arg = a; ; ) {
                  var o = r.delegate;
                  if (o) {
                    var s = _(o, r);
                    if (s) {
                      if (s === l) continue;
                      return s;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var c = u(e, t, r);
                  if ("normal" === c.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      c.arg === l)
                    )
                      continue;
                    return { value: c.arg, done: r.done };
                  }
                  "throw" === c.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = c.arg));
                }
              };
            })(e, r, o)),
            a
          );
        }
        function u(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = c;
        var l = {};
        function d() {}
        function f() {}
        function p() {}
        var h = {};
        s(h, i, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          m = v && v(v(S([])));
        m && m !== t && r.call(m, i) && (h = m);
        var g = (p.prototype = d.prototype = Object.create(h));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var n;
          this._invoke = function (i, a) {
            function o() {
              return new t(function (n, o) {
                !(function n(i, a, o, s) {
                  var c = u(e[i], e, a);
                  if ("throw" !== c.type) {
                    var l = c.arg,
                      d = l.value;
                    return d && "object" == typeof d && r.call(d, "__await")
                      ? t.resolve(d.__await).then(
                          function (e) {
                            n("next", e, o, s);
                          },
                          function (e) {
                            n("throw", e, o, s);
                          }
                        )
                      : t.resolve(d).then(
                          function (e) {
                            (l.value = e), o(l);
                          },
                          function (e) {
                            return n("throw", e, o, s);
                          }
                        );
                  }
                  s(c.arg);
                })(i, a, n, o);
              });
            }
            return (n = n ? n.then(o, o) : o());
          };
        }
        function _(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)
              )
                return l;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var n = u(r, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), l
            );
          var i = n.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              l);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function k(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function M(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = p),
          s(g, "constructor", p),
          s(p, "constructor", f),
          (f.displayName = s(p, o, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s(e, o, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(b.prototype),
          s(b.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, i, a) {
            void 0 === a && (a = Promise);
            var o = new b(c(t, r, n, i), a);
            return e.isGeneratorFunction(r)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          y(g),
          s(g, o, "Generator"),
          s(g, i, function () {
            return this;
          }),
          s(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = S),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  o = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var s = r.call(a, "catchLoc"),
                    c = r.call(a, "finallyLoc");
                  if (s && c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var a = i;
                  break;
                }
              }
              a &&
                ("break" === e || "continue" === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var o = a ? a.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), l)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                l
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), k(r), l;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    k(r);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          e
        );
      })(e.exports);
      try {
        regeneratorRuntime = n;
      } catch (e) {
        "object" == typeof globalThis
          ? (globalThis.regeneratorRuntime = n)
          : Function("r", "regeneratorRuntime = r")(n);
      }
    },
    function (e, t) {
      (e.exports = function (e) {
        return -1 !== Function.toString.call(e).indexOf("[native code]");
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, r) {
      var n = r(27),
        i = r(75);
      function a(t, r, o) {
        return (
          i()
            ? ((e.exports = a = Reflect.construct),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports))
            : ((e.exports = a =
                function (e, t, r) {
                  var i = [null];
                  i.push.apply(i, t);
                  var a = new (Function.bind.apply(e, i))();
                  return r && n(a, r.prototype), a;
                }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports)),
          a.apply(null, arguments)
        );
      }
      (e.exports = a),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t) {
      (e.exports = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, r) {
      var n = r(40);
      e.exports = function (e, t) {
        var r = [];
        return (
          n(e, function (e, n, i) {
            t(e, n, i) && r.push(e);
          }),
          r
        );
      };
    },
    function (e, t, r) {
      var n = r(78),
        i = r(28);
      e.exports = function (e, t) {
        return e && n(e, t, i);
      };
    },
    function (e, t, r) {
      var n = r(79)();
      e.exports = n;
    },
    function (e, t) {
      e.exports = function (e) {
        return function (t, r, n) {
          for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
            var c = o[e ? s : ++i];
            if (!1 === r(a[c], c, a)) break;
          }
          return t;
        };
      };
    },
    function (e, t, r) {
      var n = r(81),
        i = r(41),
        a = r(8),
        o = r(43),
        s = r(45),
        c = r(46),
        u = Object.prototype.hasOwnProperty;
      e.exports = function (e, t) {
        var r = a(e),
          l = !r && i(e),
          d = !r && !l && o(e),
          f = !r && !l && !d && c(e),
          p = r || l || d || f,
          h = p ? n(e.length, String) : [],
          v = h.length;
        for (var m in e)
          (!t && !u.call(e, m)) ||
            (p &&
              ("length" == m ||
                (d && ("offset" == m || "parent" == m)) ||
                (f &&
                  ("buffer" == m || "byteLength" == m || "byteOffset" == m)) ||
                s(m, v))) ||
            h.push(m);
        return h;
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
      };
    },
    function (e, t, r) {
      var n = r(15),
        i = r(16);
      e.exports = function (e) {
        return i(e) && "[object Arguments]" == n(e);
      };
    },
    function (e, t, r) {
      var n = r(19),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.toString,
        s = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        var t = a.call(e, s),
          r = e[s];
        try {
          e[s] = void 0;
          var n = !0;
        } catch (e) {}
        var i = o.call(e);
        return n && (t ? (e[s] = r) : delete e[s]), i;
      };
    },
    function (e, t) {
      var r = Object.prototype.toString;
      e.exports = function (e) {
        return r.call(e);
      };
    },
    function (e, t) {
      e.exports = function () {
        return !1;
      };
    },
    function (e, t, r) {
      var n = r(15),
        i = r(29),
        a = r(16),
        o = {};
      (o["[object Float32Array]"] =
        o["[object Float64Array]"] =
        o["[object Int8Array]"] =
        o["[object Int16Array]"] =
        o["[object Int32Array]"] =
        o["[object Uint8Array]"] =
        o["[object Uint8ClampedArray]"] =
        o["[object Uint16Array]"] =
        o["[object Uint32Array]"] =
          !0),
        (o["[object Arguments]"] =
          o["[object Array]"] =
          o["[object ArrayBuffer]"] =
          o["[object Boolean]"] =
          o["[object DataView]"] =
          o["[object Date]"] =
          o["[object Error]"] =
          o["[object Function]"] =
          o["[object Map]"] =
          o["[object Number]"] =
          o["[object Object]"] =
          o["[object RegExp]"] =
          o["[object Set]"] =
          o["[object String]"] =
          o["[object WeakMap]"] =
            !1),
        (e.exports = function (e) {
          return a(e) && i(e.length) && !!o[n(e)];
        });
    },
    function (e, t, r) {
      (function (e) {
        var n = r(42),
          i = t && !t.nodeType && t,
          a = i && "object" == typeof e && e && !e.nodeType && e,
          o = a && a.exports === i && n.process,
          s = (function () {
            try {
              var e = a && a.require && a.require("util").types;
              return e || (o && o.binding && o.binding("util"));
            } catch (e) {}
          })();
        e.exports = s;
      }.call(this, r(44)(e)));
    },
    function (e, t, r) {
      var n = r(89),
        i = r(90),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!n(e)) return i(e);
        var t = [];
        for (var r in Object(e))
          a.call(e, r) && "constructor" != r && t.push(r);
        return t;
      };
    },
    function (e, t) {
      var r = Object.prototype;
      e.exports = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || r);
      };
    },
    function (e, t, r) {
      var n = r(91)(Object.keys, Object);
      e.exports = n;
    },
    function (e, t) {
      e.exports = function (e, t) {
        return function (r) {
          return e(t(r));
        };
      };
    },
    function (e, t, r) {
      var n = r(30);
      e.exports = function (e, t) {
        return function (r, i) {
          if (null == r) return r;
          if (!n(r)) return e(r, i);
          for (
            var a = r.length, o = t ? a : -1, s = Object(r);
            (t ? o-- : ++o < a) && !1 !== i(s[o], o, s);

          );
          return r;
        };
      };
    },
    function (e, t, r) {
      var n = r(94),
        i = r(142),
        a = r(56);
      e.exports = function (e) {
        var t = i(e);
        return 1 == t.length && t[0][2]
          ? a(t[0][0], t[0][1])
          : function (r) {
              return r === e || n(r, e, t);
            };
      };
    },
    function (e, t, r) {
      var n = r(50),
        i = r(53);
      e.exports = function (e, t, r, a) {
        var o = r.length,
          s = o,
          c = !a;
        if (null == e) return !s;
        for (e = Object(e); o--; ) {
          var u = r[o];
          if (c && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
        }
        for (; ++o < s; ) {
          var l = (u = r[o])[0],
            d = e[l],
            f = u[1];
          if (c && u[2]) {
            if (void 0 === d && !(l in e)) return !1;
          } else {
            var p = new n();
            if (a) var h = a(d, f, l, e, t, p);
            if (!(void 0 === h ? i(f, d, 3, a, p) : h)) return !1;
          }
        }
        return !0;
      };
    },
    function (e, t) {
      e.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    function (e, t, r) {
      var n = r(21),
        i = Array.prototype.splice;
      e.exports = function (e) {
        var t = this.__data__,
          r = n(t, e);
        return (
          !(r < 0) &&
          (r == t.length - 1 ? t.pop() : i.call(t, r, 1), --this.size, !0)
        );
      };
    },
    function (e, t, r) {
      var n = r(21);
      e.exports = function (e) {
        var t = this.__data__,
          r = n(t, e);
        return r < 0 ? void 0 : t[r][1];
      };
    },
    function (e, t, r) {
      var n = r(21);
      e.exports = function (e) {
        return n(this.__data__, e) > -1;
      };
    },
    function (e, t, r) {
      var n = r(21);
      e.exports = function (e, t) {
        var r = this.__data__,
          i = n(r, e);
        return i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this;
      };
    },
    function (e, t, r) {
      var n = r(20);
      e.exports = function () {
        (this.__data__ = new n()), (this.size = 0);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = this.__data__,
          r = t.delete(e);
        return (this.size = t.size), r;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.get(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    function (e, t, r) {
      var n = r(20),
        i = r(32),
        a = r(33);
      e.exports = function (e, t) {
        var r = this.__data__;
        if (r instanceof n) {
          var o = r.__data__;
          if (!i || o.length < 199)
            return o.push([e, t]), (this.size = ++r.size), this;
          r = this.__data__ = new a(o);
        }
        return r.set(e, t), (this.size = r.size), this;
      };
    },
    function (e, t, r) {
      var n = r(48),
        i = r(106),
        a = r(31),
        o = r(52),
        s = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        u = Object.prototype,
        l = c.toString,
        d = u.hasOwnProperty,
        f = RegExp(
          "^" +
            l
              .call(d)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      e.exports = function (e) {
        return !(!a(e) || i(e)) && (n(e) ? f : s).test(o(e));
      };
    },
    function (e, t, r) {
      var n,
        i = r(107),
        a = (n = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + n
          : "";
      e.exports = function (e) {
        return !!a && a in e;
      };
    },
    function (e, t, r) {
      var n = r(9)["__core-js_shared__"];
      e.exports = n;
    },
    function (e, t) {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    function (e, t, r) {
      var n = r(110),
        i = r(20),
        a = r(32);
      e.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new n(),
            map: new (a || i)(),
            string: new n(),
          });
      };
    },
    function (e, t, r) {
      var n = r(111),
        i = r(112),
        a = r(113),
        o = r(114),
        s = r(115);
      function c(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = i),
        (c.prototype.get = a),
        (c.prototype.has = o),
        (c.prototype.set = s),
        (e.exports = c);
    },
    function (e, t, r) {
      var n = r(22);
      e.exports = function () {
        (this.__data__ = n ? n(null) : {}), (this.size = 0);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    function (e, t, r) {
      var n = r(22),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        if (n) {
          var r = t[e];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return i.call(t, e) ? t[e] : void 0;
      };
    },
    function (e, t, r) {
      var n = r(22),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        return n ? void 0 !== t[e] : i.call(t, e);
      };
    },
    function (e, t, r) {
      var n = r(22);
      e.exports = function (e, t) {
        var r = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t),
          this
        );
      };
    },
    function (e, t, r) {
      var n = r(23);
      e.exports = function (e) {
        var t = n(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
    },
    function (e, t, r) {
      var n = r(23);
      e.exports = function (e) {
        return n(this, e).get(e);
      };
    },
    function (e, t, r) {
      var n = r(23);
      e.exports = function (e) {
        return n(this, e).has(e);
      };
    },
    function (e, t, r) {
      var n = r(23);
      e.exports = function (e, t) {
        var r = n(this, e),
          i = r.size;
        return r.set(e, t), (this.size += r.size == i ? 0 : 1), this;
      };
    },
    function (e, t, r) {
      var n = r(50),
        i = r(54),
        a = r(127),
        o = r(131),
        s = r(137),
        c = r(8),
        u = r(43),
        l = r(46),
        d = "[object Object]",
        f = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, r, p, h, v) {
        var m = c(e),
          g = c(t),
          y = m ? "[object Array]" : s(e),
          b = g ? "[object Array]" : s(t),
          _ = (y = "[object Arguments]" == y ? d : y) == d,
          w = (b = "[object Arguments]" == b ? d : b) == d,
          k = y == b;
        if (k && u(e)) {
          if (!u(t)) return !1;
          (m = !0), (_ = !1);
        }
        if (k && !_)
          return (
            v || (v = new n()),
            m || l(e) ? i(e, t, r, p, h, v) : a(e, t, y, r, p, h, v)
          );
        if (!(1 & r)) {
          var M = _ && f.call(e, "__wrapped__"),
            S = w && f.call(t, "__wrapped__");
          if (M || S) {
            var E = M ? e.value() : e,
              T = S ? t.value() : t;
            return v || (v = new n()), h(E, T, r, p, v);
          }
        }
        return !!k && (v || (v = new n()), o(e, t, r, p, h, v));
      };
    },
    function (e, t, r) {
      var n = r(33),
        i = r(123),
        a = r(124);
      function o(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new n(); ++t < r; ) this.add(e[t]);
      }
      (o.prototype.add = o.prototype.push = i),
        (o.prototype.has = a),
        (e.exports = o);
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e)) return !0;
        return !1;
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        return e.has(t);
      };
    },
    function (e, t, r) {
      var n = r(19),
        i = r(128),
        a = r(51),
        o = r(54),
        s = r(129),
        c = r(130),
        u = n ? n.prototype : void 0,
        l = u ? u.valueOf : void 0;
      e.exports = function (e, t, r, n, u, d, f) {
        switch (r) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !d(new i(e), new i(t)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return a(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var p = s;
          case "[object Set]":
            var h = 1 & n;
            if ((p || (p = c), e.size != t.size && !h)) return !1;
            var v = f.get(e);
            if (v) return v == t;
            (n |= 2), f.set(e, t);
            var m = o(p(e), p(t), n, u, d, f);
            return f.delete(e), m;
          case "[object Symbol]":
            if (l) return l.call(e) == l.call(t);
        }
        return !1;
      };
    },
    function (e, t, r) {
      var n = r(9).Uint8Array;
      e.exports = n;
    },
    function (e, t) {
      e.exports = function (e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e, n) {
            r[++t] = [n, e];
          }),
          r
        );
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e) {
            r[++t] = e;
          }),
          r
        );
      };
    },
    function (e, t, r) {
      var n = r(132),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, r, a, o, s) {
        var c = 1 & r,
          u = n(e),
          l = u.length;
        if (l != n(t).length && !c) return !1;
        for (var d = l; d--; ) {
          var f = u[d];
          if (!(c ? f in t : i.call(t, f))) return !1;
        }
        var p = s.get(e),
          h = s.get(t);
        if (p && h) return p == t && h == e;
        var v = !0;
        s.set(e, t), s.set(t, e);
        for (var m = c; ++d < l; ) {
          var g = e[(f = u[d])],
            y = t[f];
          if (a) var b = c ? a(y, g, f, t, e, s) : a(g, y, f, e, t, s);
          if (!(void 0 === b ? g === y || o(g, y, r, a, s) : b)) {
            v = !1;
            break;
          }
          m || (m = "constructor" == f);
        }
        if (v && !m) {
          var _ = e.constructor,
            w = t.constructor;
          _ == w ||
            !("constructor" in e) ||
            !("constructor" in t) ||
            ("function" == typeof _ &&
              _ instanceof _ &&
              "function" == typeof w &&
              w instanceof w) ||
            (v = !1);
        }
        return s.delete(e), s.delete(t), v;
      };
    },
    function (e, t, r) {
      var n = r(133),
        i = r(135),
        a = r(28);
      e.exports = function (e) {
        return n(e, a, i);
      };
    },
    function (e, t, r) {
      var n = r(134),
        i = r(8);
      e.exports = function (e, t, r) {
        var a = t(e);
        return i(e) ? a : n(a, r(e));
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
        return e;
      };
    },
    function (e, t, r) {
      var n = r(39),
        i = r(136),
        a = Object.prototype.propertyIsEnumerable,
        o = Object.getOwnPropertySymbols,
        s = o
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  n(o(e), function (t) {
                    return a.call(e, t);
                  }));
            }
          : i;
      e.exports = s;
    },
    function (e, t) {
      e.exports = function () {
        return [];
      };
    },
    function (e, t, r) {
      var n = r(138),
        i = r(32),
        a = r(139),
        o = r(140),
        s = r(141),
        c = r(15),
        u = r(52),
        l = u(n),
        d = u(i),
        f = u(a),
        p = u(o),
        h = u(s),
        v = c;
      ((n && "[object DataView]" != v(new n(new ArrayBuffer(1)))) ||
        (i && "[object Map]" != v(new i())) ||
        (a && "[object Promise]" != v(a.resolve())) ||
        (o && "[object Set]" != v(new o())) ||
        (s && "[object WeakMap]" != v(new s()))) &&
        (v = function (e) {
          var t = c(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? u(r) : "";
          if (n)
            switch (n) {
              case l:
                return "[object DataView]";
              case d:
                return "[object Map]";
              case f:
                return "[object Promise]";
              case p:
                return "[object Set]";
              case h:
                return "[object WeakMap]";
            }
          return t;
        }),
        (e.exports = v);
    },
    function (e, t, r) {
      var n = r(13)(r(9), "DataView");
      e.exports = n;
    },
    function (e, t, r) {
      var n = r(13)(r(9), "Promise");
      e.exports = n;
    },
    function (e, t, r) {
      var n = r(13)(r(9), "Set");
      e.exports = n;
    },
    function (e, t, r) {
      var n = r(13)(r(9), "WeakMap");
      e.exports = n;
    },
    function (e, t, r) {
      var n = r(55),
        i = r(28);
      e.exports = function (e) {
        for (var t = i(e), r = t.length; r--; ) {
          var a = t[r],
            o = e[a];
          t[r] = [a, o, n(o)];
        }
        return t;
      };
    },
    function (e, t, r) {
      var n = r(53),
        i = r(144),
        a = r(150),
        o = r(35),
        s = r(55),
        c = r(56),
        u = r(25);
      e.exports = function (e, t) {
        return o(e) && s(t)
          ? c(u(e), t)
          : function (r) {
              var o = i(r, e);
              return void 0 === o && o === t ? a(r, e) : n(t, o, 3);
            };
      };
    },
    function (e, t, r) {
      var n = r(34);
      e.exports = function (e, t, r) {
        var i = null == e ? void 0 : n(e, t);
        return void 0 === i ? r : i;
      };
    },
    function (e, t, r) {
      var n = r(146),
        i =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        o = n(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(i, function (e, r, n, i) {
              t.push(n ? i.replace(a, "$1") : r || e);
            }),
            t
          );
        });
      e.exports = o;
    },
    function (e, t, r) {
      var n = r(147);
      e.exports = function (e) {
        var t = n(e, function (e) {
            return 500 === r.size && r.clear(), e;
          }),
          r = t.cache;
        return t;
      };
    },
    function (e, t, r) {
      var n = r(33);
      function i(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var r = function () {
          var n = arguments,
            i = t ? t.apply(this, n) : n[0],
            a = r.cache;
          if (a.has(i)) return a.get(i);
          var o = e.apply(this, n);
          return (r.cache = a.set(i, o) || a), o;
        };
        return (r.cache = new (i.Cache || n)()), r;
      }
      (i.Cache = n), (e.exports = i);
    },
    function (e, t, r) {
      var n = r(149);
      e.exports = function (e) {
        return null == e ? "" : n(e);
      };
    },
    function (e, t, r) {
      var n = r(19),
        i = r(58),
        a = r(8),
        o = r(24),
        s = n ? n.prototype : void 0,
        c = s ? s.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (a(t)) return i(t, e) + "";
        if (o(t)) return c ? c.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -1 / 0 ? "-0" : r;
      };
    },
    function (e, t, r) {
      var n = r(151),
        i = r(152);
      e.exports = function (e, t) {
        return null != e && i(e, t, n);
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        return null != e && t in Object(e);
      };
    },
    function (e, t, r) {
      var n = r(57),
        i = r(41),
        a = r(8),
        o = r(45),
        s = r(29),
        c = r(25);
      e.exports = function (e, t, r) {
        for (var u = -1, l = (t = n(t, e)).length, d = !1; ++u < l; ) {
          var f = c(t[u]);
          if (!(d = null != e && r(e, f))) break;
          e = e[f];
        }
        return d || ++u != l
          ? d
          : !!(l = null == e ? 0 : e.length) &&
              s(l) &&
              o(f, l) &&
              (a(e) || i(e));
      };
    },
    function (e, t, r) {
      var n = r(154),
        i = r(155),
        a = r(35),
        o = r(25);
      e.exports = function (e) {
        return a(e) ? n(o(e)) : i(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      };
    },
    function (e, t, r) {
      var n = r(34);
      e.exports = function (e) {
        return function (t) {
          return n(t, e);
        };
      };
    },
    function (e, t, r) {
      var n = r(58),
        i = r(34),
        a = r(49),
        o = r(157),
        s = r(158),
        c = r(47),
        u = r(159),
        l = r(59),
        d = r(8);
      e.exports = function (e, t, r) {
        t = t.length
          ? n(t, function (e) {
              return d(e)
                ? function (t) {
                    return i(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [l];
        var f = -1;
        t = n(t, c(a));
        var p = o(e, function (e, r, i) {
          return {
            criteria: n(t, function (t) {
              return t(e);
            }),
            index: ++f,
            value: e,
          };
        });
        return s(p, function (e, t) {
          return u(e, t, r);
        });
      };
    },
    function (e, t, r) {
      var n = r(40),
        i = r(30);
      e.exports = function (e, t) {
        var r = -1,
          a = i(e) ? Array(e.length) : [];
        return (
          n(e, function (e, n, i) {
            a[++r] = t(e, n, i);
          }),
          a
        );
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        var r = e.length;
        for (e.sort(t); r--; ) e[r] = e[r].value;
        return e;
      };
    },
    function (e, t, r) {
      var n = r(160);
      e.exports = function (e, t, r) {
        for (
          var i = -1,
            a = e.criteria,
            o = t.criteria,
            s = a.length,
            c = r.length;
          ++i < s;

        ) {
          var u = n(a[i], o[i]);
          if (u) return i >= c ? u : u * ("desc" == r[i] ? -1 : 1);
        }
        return e.index - t.index;
      };
    },
    function (e, t, r) {
      var n = r(24);
      e.exports = function (e, t) {
        if (e !== t) {
          var r = void 0 !== e,
            i = null === e,
            a = e == e,
            o = n(e),
            s = void 0 !== t,
            c = null === t,
            u = t == t,
            l = n(t);
          if (
            (!c && !l && !o && e > t) ||
            (o && s && u && !c && !l) ||
            (i && s && u) ||
            (!r && u) ||
            !a
          )
            return 1;
          if (
            (!i && !o && !l && e < t) ||
            (l && r && a && !i && !o) ||
            (c && r && a) ||
            (!s && a) ||
            !u
          )
            return -1;
        }
        return 0;
      };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "DAILY_STATE_NEW", function () {
          return C;
        }),
        r.d(t, "DAILY_STATE_JOINING", function () {
          return I;
        }),
        r.d(t, "DAILY_STATE_JOINED", function () {
          return N;
        }),
        r.d(t, "DAILY_STATE_LEFT", function () {
          return R;
        }),
        r.d(t, "DAILY_STATE_ERROR", function () {
          return F;
        }),
        r.d(t, "DAILY_TRACK_STATE_BLOCKED", function () {
          return D;
        }),
        r.d(t, "DAILY_TRACK_STATE_OFF", function () {
          return B;
        }),
        r.d(t, "DAILY_TRACK_STATE_SENDABLE", function () {
          return V;
        }),
        r.d(t, "DAILY_TRACK_STATE_LOADING", function () {
          return Y;
        }),
        r.d(t, "DAILY_TRACK_STATE_INTERRUPTED", function () {
          return U;
        }),
        r.d(t, "DAILY_TRACK_STATE_PLAYABLE", function () {
          return G;
        }),
        r.d(t, "DAILY_ACCESS_UNKNOWN", function () {
          return q;
        }),
        r.d(t, "DAILY_ACCESS_LEVEL_FULL", function () {
          return W;
        }),
        r.d(t, "DAILY_ACCESS_LEVEL_LOBBY", function () {
          return z;
        }),
        r.d(t, "DAILY_ACCESS_LEVEL_NONE", function () {
          return J;
        }),
        r.d(t, "DAILY_RECEIVE_SETTINGS_BASE_KEY", function () {
          return K;
        }),
        r.d(t, "DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY", function () {
          return H;
        }),
        r.d(t, "DAILY_FATAL_ERROR_EJECTED", function () {
          return Q;
        }),
        r.d(t, "DAILY_FATAL_ERROR_NBF_ROOM", function () {
          return $;
        }),
        r.d(t, "DAILY_FATAL_ERROR_NBF_TOKEN", function () {
          return Z;
        }),
        r.d(t, "DAILY_FATAL_ERROR_EXP_ROOM", function () {
          return X;
        }),
        r.d(t, "DAILY_FATAL_ERROR_EXP_TOKEN", function () {
          return ee;
        }),
        r.d(t, "DAILY_CAMERA_ERROR_CAM_IN_USE", function () {
          return te;
        }),
        r.d(t, "DAILY_CAMERA_ERROR_MIC_IN_USE", function () {
          return re;
        }),
        r.d(t, "DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE", function () {
          return ne;
        }),
        r.d(t, "DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG", function () {
          return ie;
        }),
        r.d(t, "DAILY_EVENT_IFRAME_LAUNCH_CONFIG", function () {
          return ae;
        }),
        r.d(t, "DAILY_EVENT_THEME_UPDATED", function () {
          return oe;
        }),
        r.d(t, "DAILY_EVENT_LOADING", function () {
          return se;
        }),
        r.d(t, "DAILY_EVENT_LOADED", function () {
          return ue;
        }),
        r.d(t, "DAILY_EVENT_LOAD_ATTEMPT_FAILED", function () {
          return ce;
        }),
        r.d(t, "DAILY_EVENT_STARTED_CAMERA", function () {
          return le;
        }),
        r.d(t, "DAILY_EVENT_CAMERA_ERROR", function () {
          return de;
        }),
        r.d(t, "DAILY_EVENT_JOINING_MEETING", function () {
          return fe;
        }),
        r.d(t, "DAILY_EVENT_JOINED_MEETING", function () {
          return pe;
        }),
        r.d(t, "DAILY_EVENT_LEFT_MEETING", function () {
          return he;
        }),
        r.d(t, "DAILY_EVENT_PARTICIPANT_JOINED", function () {
          return ve;
        }),
        r.d(t, "DAILY_EVENT_PARTICIPANT_UPDATED", function () {
          return me;
        }),
        r.d(t, "DAILY_EVENT_PARTICIPANT_LEFT", function () {
          return ge;
        }),
        r.d(t, "DAILY_EVENT_TRACK_STARTED", function () {
          return Me;
        }),
        r.d(t, "DAILY_EVENT_TRACK_STOPPED", function () {
          return Se;
        }),
        r.d(t, "DAILY_EVENT_RECORDING_STARTED", function () {
          return xe;
        }),
        r.d(t, "DAILY_EVENT_RECORDING_STOPPED", function () {
          return Oe;
        }),
        r.d(t, "DAILY_EVENT_RECORDING_STATS", function () {
          return Pe;
        }),
        r.d(t, "DAILY_EVENT_RECORDING_ERROR", function () {
          return je;
        }),
        r.d(t, "DAILY_EVENT_RECORDING_UPLOAD_COMPLETED", function () {
          return Ce;
        }),
        r.d(t, "DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED", function () {
          return Re;
        }),
        r.d(t, "DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED", function () {
          return Fe;
        }),
        r.d(t, "DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED", function () {
          return De;
        }),
        r.d(t, "DAILY_EVENT_TRANSCRIPTION_STARTED", function () {
          return Ee;
        }),
        r.d(t, "DAILY_EVENT_TRANSCRIPTION_STOPPED", function () {
          return Te;
        }),
        r.d(t, "DAILY_EVENT_TRANSCRIPTION_ERROR", function () {
          return Ae;
        }),
        r.d(t, "DAILY_EVENT_ERROR", function () {
          return et;
        }),
        r.d(t, "DAILY_EVENT_APP_MSG", function () {
          return Ie;
        }),
        r.d(t, "DAILY_EVENT_INPUT_EVENT", function () {
          return Ne;
        }),
        r.d(t, "DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED", function () {
          return Be;
        }),
        r.d(t, "DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED", function () {
          return Ve;
        }),
        r.d(t, "DAILY_EVENT_NETWORK_QUALITY_CHANGE", function () {
          return Ge;
        }),
        r.d(t, "DAILY_EVENT_ACTIVE_SPEAKER_CHANGE", function () {
          return Ye;
        }),
        r.d(t, "DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE", function () {
          return Ue;
        }),
        r.d(t, "DAILY_EVENT_FULLSCREEN", function () {
          return We;
        }),
        r.d(t, "DAILY_EVENT_EXIT_FULLSCREEN", function () {
          return ze;
        }),
        r.d(t, "DAILY_EVENT_NETWORK_CONNECTION", function () {
          return qe;
        }),
        r.d(t, "DAILY_EVENT_RECORDING_DATA", function () {
          return Le;
        }),
        r.d(t, "DAILY_EVENT_LIVE_STREAMING_STARTED", function () {
          return Je;
        }),
        r.d(t, "DAILY_EVENT_LIVE_STREAMING_STOPPED", function () {
          return Ke;
        }),
        r.d(t, "DAILY_EVENT_LIVE_STREAMING_ERROR", function () {
          return He;
        }),
        r.d(t, "DAILY_EVENT_LANG_UPDATED", function () {
          return Qe;
        }),
        r.d(t, "DAILY_EVENT_ACCESS_STATE_UPDATED", function () {
          return ye;
        }),
        r.d(t, "DAILY_EVENT_MEETING_SESSION_UPDATED", function () {
          return be;
        }),
        r.d(t, "DAILY_EVENT_WAITING_PARTICIPANT_ADDED", function () {
          return _e;
        }),
        r.d(t, "DAILY_EVENT_WAITING_PARTICIPANT_REMOVED", function () {
          return ke;
        }),
        r.d(t, "DAILY_EVENT_WAITING_PARTICIPANT_UPDATED", function () {
          return we;
        }),
        r.d(t, "DAILY_EVENT_RECEIVE_SETTINGS_UPDATED", function () {
          return $e;
        }),
        r.d(t, "DAILY_EVENT_INPUT_SETTINGS_UPDATED", function () {
          return Ze;
        }),
        r.d(t, "DAILY_EVENT_NONFATAL_ERROR", function () {
          return Xe;
        }),
        r.d(t, "default", function () {
          return qt;
        });
      var n = r(60),
        i = r.n(n),
        a = r(61),
        o = r.n(a),
        s = r(1),
        c = r.n(s),
        u = r(5),
        l = r.n(u),
        d = r(6),
        f = r.n(d),
        p = r(17),
        h = r.n(p),
        v = r(10),
        m = r.n(v),
        g = r(11),
        y = r.n(g),
        b = r(7),
        _ = r.n(b),
        w = r(14),
        k = r.n(w),
        M = r(4),
        S = r.n(M),
        E = r(0),
        T = r.n(E),
        A = r(12),
        x = r.n(A),
        O = r(18),
        P = r(62),
        j = r.n(P),
        C = "new",
        L = "loading",
        I = "joining-meeting",
        N = "joined-meeting",
        R = "left-meeting",
        F = "error",
        D = "blocked",
        B = "off",
        V = "sendable",
        Y = "loading",
        U = "interrupted",
        G = "playable",
        q = "unknown",
        W = "full",
        z = "lobby",
        J = "none",
        K = "base",
        H = "*",
        Q = "ejected",
        $ = "nbf-room",
        Z = "nbf-token",
        X = "exp-room",
        ee = "exp-token",
        te = "cam-in-use",
        re = "mic-in-use",
        ne = "cam-mic-in-use",
        ie = "iframe-ready-for-launch-config",
        ae = "iframe-launch-config",
        oe = "theme-updated",
        se = "loading",
        ce = "load-attempt-failed",
        ue = "loaded",
        le = "started-camera",
        de = "camera-error",
        fe = "joining-meeting",
        pe = "joined-meeting",
        he = "left-meeting",
        ve = "participant-joined",
        me = "participant-updated",
        ge = "participant-left",
        ye = "access-state-updated",
        be = "meeting-session-updated",
        _e = "waiting-participant-added",
        we = "waiting-participant-updated",
        ke = "waiting-participant-removed",
        Me = "track-started",
        Se = "track-stopped",
        Ee = "transcription-started",
        Te = "transcription-stopped",
        Ae = "transcription-error",
        xe = "recording-started",
        Oe = "recording-stopped",
        Pe = "recording-stats",
        je = "recording-error",
        Ce = "recording-upload-completed",
        Le = "recording-data",
        Ie = "app-message",
        Ne = "input-event",
        Re = "remote-media-player-started",
        Fe = "remote-media-player-updated",
        De = "remote-media-player-stopped",
        Be = "local-screen-share-started",
        Ve = "local-screen-share-stopped",
        Ye = "active-speaker-change",
        Ue = "active-speaker-mode-change",
        Ge = "network-quality-change",
        qe = "network-connection",
        We = "fullscreen",
        ze = "exited-fullscreen",
        Je = "live-streaming-started",
        Ke = "live-streaming-stopped",
        He = "live-streaming-error",
        Qe = "lang-updated",
        $e = "receive-settings-updated",
        Ze = "input-settings-updated",
        Xe = "nonfatal-error",
        et = "error",
        tt = { NONE: "none", BGBLUR: "background-blur" },
        rt = { PLAY: "play", PAUSE: "pause" },
        nt = "playing",
        it = "paused",
        at = r(2),
        ot = r(26),
        st = r(3);
      function ct(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ut(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ct(Object(r), !0).forEach(function (t) {
                k()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ct(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function lt(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = _()(e);
          if (t) {
            var i = _()(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return y()(this, r);
        };
      }
      var dt = (function (e) {
          m()(r, e);
          var t = lt(r);
          function r() {
            var e;
            return (
              l()(this, r),
              ((e = t.call(this))._wrappedListeners = {}),
              (e._messageCallbacks = {}),
              e
            );
          }
          return (
            f()(r, [
              {
                key: "addListenerForMessagesFromCallMachine",
                value: function (e, t, r) {
                  var n = this,
                    i = function (i) {
                      if (
                        i.data &&
                        "iframe-call-message" === i.data.what &&
                        (!i.data.callFrameId || i.data.callFrameId === t) &&
                        (!i.data.from || "module" !== i.data.from)
                      ) {
                        var a = ut({}, i.data);
                        if (
                          (delete a.from,
                          a.callbackStamp &&
                            n._messageCallbacks[a.callbackStamp])
                        ) {
                          var o = a.callbackStamp;
                          n._messageCallbacks[o].call(r, a),
                            delete n._messageCallbacks[o];
                        }
                        delete a.what, delete a.callbackStamp, e.call(r, a);
                      }
                    };
                  (this._wrappedListeners[e] = i),
                    window.addEventListener("message", i);
                },
              },
              {
                key: "addListenerForMessagesFromDailyJs",
                value: function (e, t, r) {
                  var n = function (n) {
                    if (
                      !(
                        !n.data ||
                        "iframe-call-message" !== n.data.what ||
                        !n.data.action ||
                        (n.data.from && "module" !== n.data.from) ||
                        (n.data.callFrameId && t && n.data.callFrameId !== t)
                      )
                    ) {
                      var i = n.data;
                      e.call(r, i);
                    }
                  };
                  (this._wrappedListeners[e] = n),
                    window.addEventListener("message", n);
                },
              },
              {
                key: "sendMessageToCallMachine",
                value: function (e, t, r, n) {
                  var i = ut({}, e);
                  if (
                    ((i.what = "iframe-call-message"),
                    (i.from = "module"),
                    (i.callFrameId = n),
                    t)
                  ) {
                    var a = Object(st.c)();
                    (this._messageCallbacks[a] = t), (i.callbackStamp = a);
                  }
                  (r ? r.contentWindow : window).postMessage(i, "*");
                },
              },
              {
                key: "sendMessageToDailyJs",
                value: function (e, t, r) {
                  (e.what = "iframe-call-message"),
                    (e.callFrameId = r),
                    (e.from = "embedded"),
                    (t ? window : window.parent).postMessage(e, "*");
                },
              },
              {
                key: "removeListener",
                value: function (e) {
                  var t = this._wrappedListeners[e];
                  t &&
                    (window.removeEventListener("message", t),
                    delete this._wrappedListeners[e]);
                },
              },
              {
                key: "forwardPackagedMessageToCallMachine",
                value: function (e, t, r) {
                  var n = ut({}, e);
                  (n.callFrameId = r),
                    (t ? t.contentWindow : window).postMessage(n, "*");
                },
              },
              {
                key: "addListenerForPackagedMessagesFromCallMachine",
                value: function (e, t) {
                  var r = function (r) {
                    if (
                      r.data &&
                      "iframe-call-message" === r.data.what &&
                      (!r.data.callFrameId || r.data.callFrameId === t) &&
                      (!r.data.from || "module" !== r.data.from)
                    ) {
                      var n = r.data;
                      e(n);
                    }
                  };
                  return (
                    (this._wrappedListeners[e] = r),
                    window.addEventListener("message", r),
                    e
                  );
                },
              },
              {
                key: "removeListenerForPackagedMessagesFromCallMachine",
                value: function (e) {
                  var t = this._wrappedListeners[e];
                  t &&
                    (window.removeEventListener("message", t),
                    delete this._wrappedListeners[e]);
                },
              },
            ]),
            r
          );
        })(ot.a),
        ft = r(63),
        pt = r(64),
        ht = r.n(pt);
      function vt(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = _()(e);
          if (t) {
            var i = _()(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return y()(this, r);
        };
      }
      var mt = (function () {
          function e() {
            l()(this, e), (this._currentLoad = null);
          }
          return (
            f()(e, [
              {
                key: "load",
                value: function (e, t, r, n) {
                  if (this.loaded)
                    return window._dailyCallObjectSetup(t), void r(!0);
                  !(function (e) {
                    window._dailyConfig || (window._dailyConfig = {}),
                      (window._dailyConfig.callFrameId = e);
                  })(t),
                    this._currentLoad && this._currentLoad.cancel(),
                    (this._currentLoad = new gt(
                      e,
                      t,
                      function () {
                        r(!1);
                      },
                      n
                    )),
                    this._currentLoad.start();
                },
              },
              {
                key: "cancel",
                value: function () {
                  this._currentLoad && this._currentLoad.cancel();
                },
              },
              {
                key: "loaded",
                get: function () {
                  return this._currentLoad && this._currentLoad.succeeded;
                },
              },
            ]),
            e
          );
        })(),
        gt = (function () {
          function e(t, r, n, i) {
            l()(this, e),
              (this._attemptsRemaining = 3),
              (this._currentAttempt = null),
              (this._meetingOrBaseUrl = t),
              (this._callFrameId = r),
              (this._successCallback = n),
              (this._failureCallback = i);
          }
          return (
            f()(e, [
              {
                key: "start",
                value: function () {
                  var e = this;
                  if (!this._currentAttempt) {
                    (this._currentAttempt = new bt(
                      this._meetingOrBaseUrl,
                      this._callFrameId,
                      this._successCallback,
                      function t(r) {
                        e._currentAttempt.cancelled ||
                          (e._attemptsRemaining--,
                          e._failureCallback(r, e._attemptsRemaining > 0),
                          e._attemptsRemaining <= 0 ||
                            setTimeout(function () {
                              e._currentAttempt.cancelled ||
                                ((e._currentAttempt = new bt(
                                  e._meetingOrBaseUrl,
                                  e._callFrameId,
                                  e._successCallback,
                                  t
                                )),
                                e._currentAttempt.start());
                            }, 3e3));
                      }
                    )),
                      this._currentAttempt.start();
                  }
                },
              },
              {
                key: "cancel",
                value: function () {
                  this._currentAttempt && this._currentAttempt.cancel();
                },
              },
              {
                key: "cancelled",
                get: function () {
                  return this._currentAttempt && this._currentAttempt.cancelled;
                },
              },
              {
                key: "succeeded",
                get: function () {
                  return this._currentAttempt && this._currentAttempt.succeeded;
                },
              },
            ]),
            e
          );
        })(),
        yt = (function (e) {
          m()(r, e);
          var t = vt(r);
          function r() {
            return l()(this, r), t.apply(this, arguments);
          }
          return f()(r);
        })(ht()(Error)),
        bt = (function () {
          function e(t, r, n, i) {
            l()(this, e),
              (this.cancelled = !1),
              (this.succeeded = !1),
              (this._networkTimedOut = !1),
              (this._networkTimeout = null),
              (this._iosCache =
                "undefined" != typeof iOSCallObjectBundleCache &&
                iOSCallObjectBundleCache),
              (this._refetchHeaders = null),
              (this._meetingOrBaseUrl = t),
              (this._callFrameId = r),
              (this._successCallback = n),
              (this._failureCallback = i);
          }
          var t, r, n, i;
          return (
            f()(e, [
              {
                key: "start",
                value:
                  ((i = c()(
                    T.a.mark(function e() {
                      var t;
                      return T.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (e.prev = 0),
                                  (t = Object(st.a)(this._meetingOrBaseUrl)),
                                  (e.next = 8);
                                break;
                              case 4:
                                return (
                                  (e.prev = 4),
                                  (e.t0 = e.catch(0)),
                                  this._failureCallback(
                                    "Failed to get call object bundle URL "
                                      .concat(t, ": ")
                                      .concat(e.t0)
                                  ),
                                  e.abrupt("return")
                                );
                              case 8:
                                return (
                                  (e.next = 10), this._tryLoadFromIOSCache(t)
                                );
                              case 10:
                                !e.sent && this._loadFromNetwork(t);
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 4]]
                      );
                    })
                  )),
                  function () {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: "cancel",
                value: function () {
                  clearTimeout(this._networkTimeout), (this.cancelled = !0);
                },
              },
              {
                key: "_tryLoadFromIOSCache",
                value:
                  ((n = c()(
                    T.a.mark(function e(t) {
                      var r;
                      return T.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._iosCache) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return", !1);
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  this._iosCache.get(t)
                                );
                              case 5:
                                if (((r = e.sent), !this.cancelled)) {
                                  e.next = 8;
                                  break;
                                }
                                return e.abrupt("return", !0);
                              case 8:
                                if (r) {
                                  e.next = 10;
                                  break;
                                }
                                return e.abrupt("return", !1);
                              case 10:
                                if (r.code) {
                                  e.next = 13;
                                  break;
                                }
                                return (
                                  (this._refetchHeaders = r.refetchHeaders),
                                  e.abrupt("return", !1)
                                );
                              case 13:
                                return (
                                  Function('"use strict";' + r.code)(),
                                  (this.succeeded = !0),
                                  this._successCallback(),
                                  e.abrupt("return", !0)
                                );
                              case 19:
                                return (
                                  (e.prev = 19),
                                  (e.t0 = e.catch(2)),
                                  e.abrupt("return", !1)
                                );
                              case 22:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 19]]
                      );
                    })
                  )),
                  function (e) {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "_loadFromNetwork",
                value:
                  ((r = c()(
                    T.a.mark(function e(t) {
                      var r,
                        n,
                        i,
                        a = this;
                      return T.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._networkTimeout = setTimeout(
                                    function () {
                                      (a._networkTimedOut = !0),
                                        a._failureCallback(
                                          "Timed out (>"
                                            .concat(
                                              2e4,
                                              " ms) when loading call object bundle "
                                            )
                                            .concat(t)
                                        );
                                    },
                                    2e4
                                  )),
                                  (e.prev = 1),
                                  (r = this._refetchHeaders
                                    ? { headers: this._refetchHeaders }
                                    : {}),
                                  (e.next = 5),
                                  fetch(t, r)
                                );
                              case 5:
                                if (
                                  ((n = e.sent),
                                  clearTimeout(this._networkTimeout),
                                  !this.cancelled && !this._networkTimedOut)
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                throw new yt();
                              case 9:
                                return (
                                  (e.next = 11),
                                  this._getBundleCodeFromResponse(t, n)
                                );
                              case 11:
                                if (((i = e.sent), !this.cancelled)) {
                                  e.next = 14;
                                  break;
                                }
                                throw new yt();
                              case 14:
                                Function('"use strict";' + i)(),
                                  this._iosCache &&
                                    this._iosCache.set(t, i, n.headers),
                                  (this.succeeded = !0),
                                  this._successCallback(),
                                  (e.next = 26);
                                break;
                              case 20:
                                if (
                                  ((e.prev = 20),
                                  (e.t0 = e.catch(1)),
                                  clearTimeout(this._networkTimeout),
                                  !(
                                    e.t0 instanceof yt ||
                                    this.cancelled ||
                                    this._networkTimedOut
                                  ))
                                ) {
                                  e.next = 25;
                                  break;
                                }
                                return e.abrupt("return");
                              case 25:
                                this._failureCallback(
                                  "Failed to load call object bundle "
                                    .concat(t, ": ")
                                    .concat(e.t0)
                                );
                              case 26:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 20]]
                      );
                    })
                  )),
                  function (e) {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: "_getBundleCodeFromResponse",
                value:
                  ((t = c()(
                    T.a.mark(function e(t, r) {
                      var n;
                      return T.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!r.ok) {
                                  e.next = 4;
                                  break;
                                }
                                return (e.next = 3), r.text();
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 4:
                                if (!this._iosCache || 304 !== r.status) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (e.next = 7),
                                  this._iosCache.renew(t, r.headers)
                                );
                              case 7:
                                return (n = e.sent), e.abrupt("return", n.code);
                              case 9:
                                throw new Error(
                                  "Received ".concat(r.status, " response")
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function (e, r) {
                    return t.apply(this, arguments);
                  }),
              },
            ]),
            e
          );
        })(),
        _t = r(36),
        wt = r.n(_t),
        kt = r(37),
        Mt = r.n(kt),
        St = function (e, t, r) {
          return !0 === At(e.local, t, r);
        },
        Et = function (e, t, r) {
          return (
            e.local.streams &&
            e.local.streams[t] &&
            e.local.streams[t].stream &&
            e.local.streams[t].stream[
              "get".concat("video" === r ? "Video" : "Audio", "Tracks")
            ]()[0]
          );
        },
        Tt = function (e, t, r, n) {
          var i = xt(e, t, r, n);
          return i && i.pendingTrack;
        },
        At = function (e, t, r) {
          if (!e) return !1;
          var n = function (e) {
              switch (e) {
                case "avatar":
                  return !0;
                case "staged":
                  return e;
                default:
                  return !!e;
              }
            },
            i = e.public.subscribedTracks;
          return i && i[t] ? n(i[t][r]) : !i || n(i.ALL);
        },
        xt = function (e, t, r, n) {
          var i = Mt()(
            wt()(e.streams, function (e) {
              return (
                e.participantId === t &&
                e.type === r &&
                e.pendingTrack &&
                e.pendingTrack.kind === n
              );
            }),
            "starttime",
            "desc"
          );
          return i && i[0];
        },
        Ot = function (e, t) {
          var r = e.local.public.customTracks;
          if (r && r[t]) return r[t].track;
        },
        Pt = function (e, t, r, n) {
          var i = "soup-" + r,
            a = Mt()(
              wt()(e.streams, function (e) {
                return (
                  e.participantId === t &&
                  e.streamId === i &&
                  e.pendingTrack &&
                  e.pendingTrack.kind === n
                );
              }),
              "starttime",
              "desc"
            );
          return a && a[0] && a[0].pendingTrack;
        };
      function jt(e) {
        for (
          var t = store.getState(), r = 0, n = ["cam", "screen"];
          r < n.length;
          r++
        )
          for (var i = n[r], a = 0, o = ["video", "audio"]; a < o.length; a++) {
            var s = o[a],
              c =
                "cam" === i
                  ? s
                  : "screen".concat(s.charAt(0).toUpperCase() + s.slice(1)),
              u = e.tracks[c];
            if (u) {
              var l = e.local ? Et(t, i, s) : Tt(t, e.session_id, i, s);
              "playable" === u.state && (u.track = l), (u.persistentTrack = l);
            }
          }
      }
      function Ct(e) {
        try {
          var t = store.getState();
          for (var r in e.tracks)
            if (!Lt(r)) {
              var n = e.tracks[r].kind;
              if (n) {
                var i = e.tracks[r];
                if (i) {
                  var a = e.local ? Ot(t, r) : Pt(t, e.session_id, r, n);
                  "playable" === i.state && (e.tracks[r].track = a),
                    (i.persistentTrack = a);
                }
              } else console.error("unknown type for custom track");
            }
        } catch (e) {
          console.error(e);
        }
      }
      function Lt(e) {
        return ["video", "audio", "screenVideo", "screenAudio"].includes(e);
      }
      function It(e, t) {
        var r = store.getState();
        if (e.local) {
          if (e.audio)
            try {
              (e.audioTrack = r.local.streams.cam.stream.getAudioTracks()[0]),
                e.audioTrack || (e.audio = !1);
            } catch (e) {}
          if (e.video)
            try {
              (e.videoTrack = r.local.streams.cam.stream.getVideoTracks()[0]),
                e.videoTrack || (e.video = !1);
            } catch (e) {}
          if (e.screen)
            try {
              (e.screenVideoTrack =
                r.local.streams.screen.stream.getVideoTracks()[0]),
                (e.screenAudioTrack =
                  r.local.streams.screen.stream.getAudioTracks()[0]),
                e.screenVideoTrack || e.screenAudioTrack || (e.screen = !1);
            } catch (e) {}
        } else {
          var n = !0;
          try {
            var i = r.participants[e.session_id];
            i &&
              i.public &&
              i.public.rtcType &&
              "peer-to-peer" === i.public.rtcType.impl &&
              i.private &&
              !["connected", "completed"].includes(i.private.peeringState) &&
              (n = !1);
          } catch (e) {
            console.error(e);
          }
          if (!n)
            return (
              (e.audio = !1),
              (e.audioTrack = !1),
              (e.video = !1),
              (e.videoTrack = !1),
              (e.screen = !1),
              void (e.screenTrack = !1)
            );
          try {
            r.streams;
            if (e.audio && St(r, e.session_id, "cam-audio")) {
              var a = Tt(r, e.session_id, "cam", "audio");
              a &&
                (t && t.audioTrack && t.audioTrack.id === a.id
                  ? (e.audioTrack = a)
                  : a.muted || (e.audioTrack = a)),
                e.audioTrack || (e.audio = !1);
            }
            if (e.video && St(r, e.session_id, "cam-video")) {
              var o = Tt(r, e.session_id, "cam", "video");
              o &&
                (t && t.videoTrack && t.videoTrack.id === o.id
                  ? (e.videoTrack = o)
                  : o.muted || (e.videoTrack = o)),
                e.videoTrack || (e.video = !1);
            }
            if (e.screen && St(r, e.session_id, "screen-audio")) {
              var s = Tt(r, e.session_id, "screen", "audio");
              s &&
                (t && t.screenAudioTrack && t.screenAudioTrack.id === s.id
                  ? (e.screenAudioTrack = s)
                  : s.muted || (e.screenAudioTrack = s));
            }
            if (e.screen && St(r, e.session_id, "screen-video")) {
              var c = Tt(r, e.session_id, "screen", "video");
              c &&
                (t && t.screenVideoTrack && t.screenVideoTrack.id === c.id
                  ? (e.screenVideoTrack = c)
                  : c.muted || (e.screenVideoTrack = c));
            }
            e.screenVideoTrack || e.screenAudioTrack || (e.screen = !1);
          } catch (e) {
            console.error("unexpected error matching up tracks", e);
          }
        }
      }
      var Nt = ["preserveIframe"];
      function Rt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Rt(Object(r), !0).forEach(function (t) {
                k()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Rt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function Dt(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = _()(e);
          if (t) {
            var i = _()(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return y()(this, r);
        };
      }
      var Bt = "video",
        Vt = "voice",
        Yt = {
          androidInCallNotification: {
            title: "string",
            subtitle: "string",
            iconName: "string",
            disableForCustomOverride: "boolean",
          },
          disableAutoDeviceManagement: { audio: "boolean", video: "boolean" },
        },
        Ut = {
          url: {
            validate: function (e) {
              return "string" == typeof e;
            },
            help: "url should be a string",
          },
          baseUrl: {
            validate: function (e) {
              return "string" == typeof e;
            },
            help: "baseUrl should be a string",
          },
          token: {
            validate: function (e) {
              return "string" == typeof e;
            },
            help: "token should be a string",
            queryString: "t",
          },
          dailyConfig: {
            validate: function (e) {
              return (
                window._dailyConfig || (window._dailyConfig = {}),
                (window._dailyConfig.experimentalGetUserMediaConstraintsModify =
                  e.experimentalGetUserMediaConstraintsModify),
                delete e.experimentalGetUserMediaConstraintsModify,
                !0
              );
            },
          },
          reactNativeConfig: {
            validate: function (e) {
              return (function e(t, r) {
                if (void 0 === r) return !1;
                switch (S()(r)) {
                  case "string":
                    return S()(t) === r;
                  case "object":
                    if ("object" !== S()(t)) return !1;
                    for (var n in t) if (!e(t[n], r[n])) return !1;
                    return !0;
                  default:
                    return !1;
                }
              })(e, Yt);
            },
            help: "reactNativeConfig should look like ".concat(
              JSON.stringify(Yt),
              ", all fields optional"
            ),
          },
          lang: {
            validate: function (e) {
              return [
                "de",
                "en-us",
                "en",
                "es",
                "fi",
                "fr",
                "it",
                "jp",
                "ka",
                "nl",
                "no",
                "pl",
                "pt",
                "ru",
                "sv",
                "tr",
                "user",
              ].includes(e);
            },
            help: "language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, ru, sv, tr, user",
          },
          userName: !0,
          activeSpeakerMode: !0,
          showLeaveButton: !0,
          showLocalVideo: !0,
          showParticipantsBar: !0,
          showFullscreenButton: !0,
          iframeStyle: !0,
          customLayout: !0,
          cssFile: !0,
          cssText: !0,
          bodyClass: !0,
          videoSource: {
            validate: function (e, t) {
              return (t._preloadCache.videoDeviceId = e), !0;
            },
          },
          audioSource: {
            validate: function (e, t) {
              return (t._preloadCache.audioDeviceId = e), !0;
            },
          },
          subscribeToTracksAutomatically: {
            validate: function (e, t) {
              return (t._preloadCache.subscribeToTracksAutomatically = e), !0;
            },
          },
          theme: {
            validate: function (e) {
              var t = [
                  "accent",
                  "accentText",
                  "background",
                  "backgroundAccent",
                  "baseText",
                  "border",
                  "mainAreaBg",
                  "mainAreaBgAccent",
                  "mainAreaText",
                  "supportiveText",
                ],
                r = function (e) {
                  for (var r = 0, n = Object.keys(e); r < n.length; r++) {
                    var i = n[r];
                    if (!t.includes(i))
                      return (
                        console.error(
                          'unsupported color "'
                            .concat(i, '". Valid colors: ')
                            .concat(t.join(", "))
                        ),
                        !1
                      );
                    if (!e[i].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i))
                      return (
                        console.error(
                          ""
                            .concat(
                              i,
                              ' theme color should be provided in valid hex color format. Received: "'
                            )
                            .concat(e[i], '"')
                        ),
                        !1
                      );
                  }
                  return !0;
                };
              return "object" === S()(e) &&
                (("light" in e && "dark" in e) || "colors" in e)
                ? "light" in e && "dark" in e
                  ? "colors" in e.light
                    ? "colors" in e.dark
                      ? r(e.light.colors) && r(e.dark.colors)
                      : (console.error(
                          'Dark theme is missing "colors" property.',
                          e
                        ),
                        !1)
                    : (console.error(
                        'Light theme is missing "colors" property.',
                        e
                      ),
                      !1)
                  : r(e.colors)
                : (console.error(
                    'Theme must contain either both "light" and "dark" properties, or "colors".',
                    e
                  ),
                  !1);
            },
            help: "unsupported theme configuration. Check error logs for detailed info.",
          },
          layoutConfig: {
            validate: function (e) {
              if ("grid" in e) {
                var t = e.grid;
                if ("maxTilesPerPage" in t) {
                  if (!Number.isInteger(t.maxTilesPerPage))
                    return (
                      console.error(
                        "grid.maxTilesPerPage should be an integer. You passed ".concat(
                          t.maxTilesPerPage,
                          "."
                        )
                      ),
                      !1
                    );
                  if (t.maxTilesPerPage > 49)
                    return (
                      console.error(
                        "grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."
                      ),
                      !1
                    );
                }
                if ("minTilesPerPage" in t) {
                  if (!Number.isInteger(t.minTilesPerPage))
                    return (
                      console.error(
                        "grid.minTilesPerPage should be an integer. You passed ".concat(
                          t.minTilesPerPage,
                          "."
                        )
                      ),
                      !1
                    );
                  if (t.minTilesPerPage < 1)
                    return (
                      console.error(
                        "grid.minTilesPerPage can't be lower than 1."
                      ),
                      !1
                    );
                  if (
                    "maxTilesPerPage" in t &&
                    t.minTilesPerPage > t.maxTilesPerPage
                  )
                    return (
                      console.error(
                        "grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."
                      ),
                      !1
                    );
                }
              }
              return !0;
            },
            help: "unsupported layoutConfig. Check error logs for detailed info.",
          },
          receiveSettings: {
            validate: function (e) {
              return Kt(e, { allowAllParticipantsKey: !1 });
            },
            help: $t({ allowAllParticipantsKey: !1 }),
          },
          inputSettings: {
            validate: function (e) {
              return Ht(e);
            },
            help: Qt(),
          },
          layout: {
            validate: function (e) {
              return "custom-v1" === e || "browser" === e || "none" === e;
            },
            help: 'layout may only be set to "custom-v1"',
            queryString: "layout",
          },
          emb: { queryString: "emb" },
          embHref: { queryString: "embHref" },
          dailyJsVersion: { queryString: "dailyJsVersion" },
        },
        Gt = {
          styles: {
            validate: function (e) {
              for (var t in e) if ("cam" !== t && "screen" !== t) return !1;
              if (e.cam)
                for (var t in e.cam)
                  if ("div" !== t && "video" !== t) return !1;
              if (e.screen)
                for (var t in e.screen)
                  if ("div" !== t && "video" !== t) return !1;
              return !0;
            },
            help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }",
          },
          setSubscribedTracks: {
            validate: function (e, t, r) {
              if (t._preloadCache.subscribeToTracksAutomatically) return !1;
              var n = [!0, !1, "staged"];
              if (n.includes(e) || (!Object(at.c)() && "avatar" === e))
                return !0;
              for (var i in e)
                if (
                  ![
                    "audio",
                    "video",
                    "screenAudio",
                    "screenVideo",
                    "rmpAudio",
                    "rmpVideo",
                  ].includes(i) ||
                  !n.includes(e[i])
                )
                  return !1;
              return !0;
            },
            help:
              "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " +
              "true".concat(
                Object(at.c)() ? "" : " | 'avatar'",
                " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }"
              ),
          },
          setAudio: !0,
          setVideo: !0,
          eject: !0,
        },
        qt = (function (e) {
          m()(G, e);
          var t,
            r,
            n,
            i,
            a,
            s,
            u,
            d,
            p,
            v,
            g,
            y,
            b,
            _,
            w,
            M,
            E,
            A,
            P,
            D,
            B,
            V,
            Y,
            U = Dt(G);
          function G(e) {
            var t,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            if (
              (l()(this, G),
              (t = U.call(this)),
              k()(h()(t), "handleNativeAppActiveStateChange", function (e) {
                t.disableReactNativeAutoDeviceManagement("video") ||
                  (e
                    ? t.camUnmutedBeforeLosingNativeActiveState &&
                      t.setLocalVideo(!0)
                    : ((t.camUnmutedBeforeLosingNativeActiveState =
                        t.localVideo()),
                      t.camUnmutedBeforeLosingNativeActiveState &&
                        t.setLocalVideo(!1)));
              }),
              k()(h()(t), "handleNativeAudioFocusChange", function (e) {
                t.disableReactNativeAutoDeviceManagement("audio") ||
                  ((t._hasNativeAudioFocus = e),
                  t.toggleParticipantAudioBasedOnNativeAudioFocus(),
                  t._hasNativeAudioFocus
                    ? t.micUnmutedBeforeLosingNativeAudioFocus &&
                      t.setLocalAudio(!0)
                    : ((t.micUnmutedBeforeLosingNativeAudioFocus =
                        t.localAudio()),
                      t.setLocalAudio(!1)));
              }),
              (r.dailyJsVersion = "0.21.0"),
              (t._iframe = e),
              (t._callObjectMode = "none" === r.layout && !t._iframe),
              (t._preloadCache = {
                subscribeToTracksAutomatically: !0,
                audioDeviceId: null,
                videoDeviceId: null,
                outputDeviceId: null,
              }),
              t._callObjectMode &&
                (window._dailyPreloadCache = t._preloadCache),
              void 0 !== r.showLocalVideo
                ? t._callObjectMode
                  ? console.error(
                      "showLocalVideo is not available in call object mode"
                    )
                  : (t._showLocalVideo = !!r.showLocalVideo)
                : (t._showLocalVideo = !0),
              void 0 !== r.showParticipantsBar
                ? t._callObjectMode
                  ? console.error(
                      "showParticipantsBar is not available in call object mode"
                    )
                  : (t._showParticipantsBar = !!r.showParticipantsBar)
                : (t._showParticipantsBar = !0),
              void 0 !== r.activeSpeakerMode
                ? t._callObjectMode
                  ? console.error(
                      "activeSpeakerMode is not available in call object mode"
                    )
                  : (t._activeSpeakerMode = !!r.activeSpeakerMode)
                : (t._activeSpeakerMode = !1),
              r.receiveSettings
                ? t._callObjectMode
                  ? (t._receiveSettings = r.receiveSettings)
                  : console.error(
                      "receiveSettings is only available in call object mode"
                    )
                : (t._receiveSettings = {}),
              (t._inputSettings = {}),
              r.inputSettings && (t._inputSettings = r.inputSettings),
              t.validateProperties(r),
              (t.properties = Ft({}, r)),
              (t._callObjectLoader = t._callObjectMode ? new mt() : null),
              (t._meetingState = C),
              (t._isPreparingToJoin = !1),
              (t._accessState = { access: q }),
              (t._nativeInCallAudioMode = Bt),
              (t._participants = {}),
              (t._rmpPlayerState = {}),
              (t._waitingParticipants = {}),
              (t._inputEventsOn = {}),
              (t._network = { threshold: "good", quality: 100 }),
              (t._activeSpeaker = {}),
              (t._callFrameId = Object(st.c)()),
              (t._messageChannel = Object(at.c)() ? new ft.a() : new dt()),
              t._iframe &&
                (t._iframe.requestFullscreen
                  ? t._iframe.addEventListener(
                      "fullscreenchange",
                      function (e) {
                        document.fullscreenElement === t._iframe
                          ? (t.emit(We, { action: We }),
                            t.sendMessageToCallMachine({ action: We }))
                          : (t.emit(ze, { action: ze }),
                            t.sendMessageToCallMachine({ action: ze }));
                      }
                    )
                  : t._iframe.webkitRequestFullscreen &&
                    t._iframe.addEventListener(
                      "webkitfullscreenchange",
                      function (e) {
                        document.webkitFullscreenElement === t._iframe
                          ? (t.emit(We, { action: We }),
                            t.sendMessageToCallMachine({ action: We }))
                          : (t.emit(ze, { action: ze }),
                            t.sendMessageToCallMachine({ action: ze }));
                      }
                    )),
              Object(at.c)())
            ) {
              var n = t.nativeUtils();
              (n.addAudioFocusChangeListener &&
                n.removeAudioFocusChangeListener &&
                n.addAppActiveStateChangeListener &&
                n.removeAppActiveStateChangeListener) ||
                console.warn(
                  "expected (add|remove)(AudioFocus|AppActiveState)ChangeListener to be available in React Native"
                ),
                (t._hasNativeAudioFocus = !0),
                n.addAudioFocusChangeListener(t.handleNativeAudioFocusChange),
                n.addAppActiveStateChangeListener(
                  t.handleNativeAppActiveStateChange
                );
            }
            return (
              t._messageChannel.addListenerForMessagesFromCallMachine(
                t.handleMessageFromCallMachine,
                t._callFrameId,
                h()(t)
              ),
              t
            );
          }
          return (
            f()(
              G,
              [
                {
                  key: "destroy",
                  value:
                    ((Y = c()(
                      T.a.mark(function e() {
                        var t, r, n;
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((e.prev = 0),
                                    ![N, L].includes(this._meetingState))
                                  ) {
                                    e.next = 4;
                                    break;
                                  }
                                  return (e.next = 4), this.leave();
                                case 4:
                                  e.next = 8;
                                  break;
                                case 6:
                                  (e.prev = 6), (e.t0 = e.catch(0));
                                case 8:
                                  (t = this._iframe) &&
                                    (r = t.parentElement) &&
                                    r.removeChild(t),
                                    this._messageChannel.removeListener(
                                      this.handleMessageFromCallMachine
                                    ),
                                    Object(at.c)() &&
                                      ((n =
                                        this.nativeUtils()).removeAudioFocusChangeListener(
                                        this.handleNativeAudioFocusChange
                                      ),
                                      n.removeAppActiveStateChangeListener(
                                        this.handleNativeAppActiveStateChange
                                      )),
                                    this.resetMeetingDependentVars();
                                case 13:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 6]]
                        );
                      })
                    )),
                    function () {
                      return Y.apply(this, arguments);
                    }),
                },
                {
                  key: "loadCss",
                  value: function (e) {
                    var t = e.bodyClass,
                      r = e.cssFile,
                      n = e.cssText;
                    return (
                      zt(),
                      this.sendMessageToCallMachine({
                        action: "load-css",
                        cssFile: this.absoluteUrl(r),
                        bodyClass: t,
                        cssText: n,
                      }),
                      this
                    );
                  },
                },
                {
                  key: "iframe",
                  value: function () {
                    return zt(), this._iframe;
                  },
                },
                {
                  key: "meetingState",
                  value: function () {
                    return this._meetingState;
                  },
                },
                {
                  key: "accessState",
                  value: function () {
                    if (!this._callObjectMode)
                      throw new Error(
                        "accessState() currently only supported in call object mode"
                      );
                    return this._accessState;
                  },
                },
                {
                  key: "participants",
                  value: function () {
                    return this._participants;
                  },
                },
                {
                  key: "waitingParticipants",
                  value: function () {
                    if (!this._callObjectMode)
                      throw new Error(
                        "waitingParticipants() currently only supported in call object mode"
                      );
                    return this._waitingParticipants;
                  },
                },
                {
                  key: "validateParticipantProperties",
                  value: function (e, t) {
                    for (var r in t) {
                      if (!Gt[r])
                        throw new Error(
                          "unrecognized updateParticipant property ".concat(r)
                        );
                      if (
                        Gt[r].validate &&
                        !Gt[r].validate(t[r], this, this._participants[e])
                      )
                        throw new Error(Gt[r].help);
                    }
                  },
                },
                {
                  key: "updateParticipant",
                  value: function (e, t) {
                    return (
                      this._participants.local &&
                        this._participants.local.session_id === e &&
                        (e = "local"),
                      e &&
                        t &&
                        this._participants[e] &&
                        (this.validateParticipantProperties(e, t),
                        this.sendMessageToCallMachine({
                          action: "update-participant",
                          id: e,
                          properties: t,
                        })),
                      this
                    );
                  },
                },
                {
                  key: "updateParticipants",
                  value: function (e) {
                    var t =
                      this._participants.local &&
                      this._participants.local.session_id;
                    for (var r in e)
                      r === t && (r = "local"),
                        r && e[r] && (this._participants[r] || "*" === r)
                          ? this.validateParticipantProperties(r, e[r])
                          : (console.warn(
                              "unrecognized participant in updateParticipants: ".concat(
                                r
                              )
                            ),
                            delete e[r]);
                    return (
                      this.sendMessageToCallMachine({
                        action: "update-participants",
                        participants: e,
                      }),
                      this
                    );
                  },
                },
                {
                  key: "updateWaitingParticipant",
                  value:
                    ((V = c()(
                      T.a.mark(function e() {
                        var t,
                          r,
                          n = this,
                          i = arguments;
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t =
                                      i.length > 0 && void 0 !== i[0]
                                        ? i[0]
                                        : ""),
                                    (r =
                                      i.length > 1 && void 0 !== i[1]
                                        ? i[1]
                                        : {}),
                                    this._callObjectMode)
                                  ) {
                                    e.next = 4;
                                    break;
                                  }
                                  throw new Error(
                                    "updateWaitingParticipant() currently only supported in call object mode"
                                  );
                                case 4:
                                  if (this._meetingState === N) {
                                    e.next = 6;
                                    break;
                                  }
                                  throw new Error(
                                    "updateWaitingParticipant() only supported for joined meetings"
                                  );
                                case 6:
                                  if (
                                    "string" == typeof t &&
                                    "object" === S()(r)
                                  ) {
                                    e.next = 8;
                                    break;
                                  }
                                  throw new Error(
                                    "updateWaitingParticipant() must take an id string and a updates object"
                                  );
                                case 8:
                                  return e.abrupt(
                                    "return",
                                    new Promise(function (e, i) {
                                      n.sendMessageToCallMachine(
                                        {
                                          action:
                                            "daily-method-update-waiting-participant",
                                          id: t,
                                          updates: r,
                                        },
                                        function (t) {
                                          t.error && i(t.error),
                                            t.id ||
                                              i(
                                                new Error(
                                                  "unknown error in updateWaitingParticipant()"
                                                )
                                              ),
                                            e({ id: t.id });
                                        }
                                      );
                                    })
                                  );
                                case 9:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function () {
                      return V.apply(this, arguments);
                    }),
                },
                {
                  key: "updateWaitingParticipants",
                  value:
                    ((B = c()(
                      T.a.mark(function e() {
                        var t,
                          r = this,
                          n = arguments;
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t =
                                      n.length > 0 && void 0 !== n[0]
                                        ? n[0]
                                        : {}),
                                    this._callObjectMode)
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  throw new Error(
                                    "updateWaitingParticipants() currently only supported in call object mode"
                                  );
                                case 3:
                                  if (this._meetingState === N) {
                                    e.next = 5;
                                    break;
                                  }
                                  throw new Error(
                                    "updateWaitingParticipants() only supported for joined meetings"
                                  );
                                case 5:
                                  if ("object" === S()(t)) {
                                    e.next = 7;
                                    break;
                                  }
                                  throw new Error(
                                    "updateWaitingParticipants() must take a mapping between ids and update objects"
                                  );
                                case 7:
                                  return e.abrupt(
                                    "return",
                                    new Promise(function (e, n) {
                                      r.sendMessageToCallMachine(
                                        {
                                          action:
                                            "daily-method-update-waiting-participants",
                                          updatesById: t,
                                        },
                                        function (t) {
                                          t.error && n(t.error),
                                            t.ids ||
                                              n(
                                                new Error(
                                                  "unknown error in updateWaitingParticipants()"
                                                )
                                              ),
                                            e({ ids: t.ids });
                                        }
                                      );
                                    })
                                  );
                                case 8:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function () {
                      return B.apply(this, arguments);
                    }),
                },
                {
                  key: "requestAccess",
                  value:
                    ((D = c()(
                      T.a.mark(function e() {
                        var t,
                          r,
                          n,
                          i,
                          a,
                          o = this,
                          s = arguments;
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t =
                                      s.length > 0 && void 0 !== s[0]
                                        ? s[0]
                                        : {}),
                                    (r = t.access),
                                    (n = void 0 === r ? { level: W } : r),
                                    (i = t.name),
                                    (a = void 0 === i ? "" : i),
                                    this._callObjectMode)
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  throw new Error(
                                    "requestAccess() currently only supported in call object mode"
                                  );
                                case 3:
                                  if (this._meetingState === N) {
                                    e.next = 5;
                                    break;
                                  }
                                  throw new Error(
                                    "requestAccess() only supported for joined meetings"
                                  );
                                case 5:
                                  return e.abrupt(
                                    "return",
                                    new Promise(function (e, t) {
                                      o.sendMessageToCallMachine(
                                        {
                                          action: "daily-method-request-access",
                                          access: n,
                                          name: a,
                                        },
                                        function (r) {
                                          r.error && t(r.error),
                                            r.access ||
                                              t(
                                                new Error(
                                                  "unknown error in requestAccess()"
                                                )
                                              ),
                                            e({
                                              access: r.access,
                                              granted: r.granted,
                                            });
                                        }
                                      );
                                    })
                                  );
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function () {
                      return D.apply(this, arguments);
                    }),
                },
                {
                  key: "localAudio",
                  value: function () {
                    return this._participants.local
                      ? this._participants.local.audio
                      : null;
                  },
                },
                {
                  key: "localVideo",
                  value: function () {
                    return this._participants.local
                      ? this._participants.local.video
                      : null;
                  },
                },
                {
                  key: "setLocalAudio",
                  value: function (e) {
                    return (
                      this.sendMessageToCallMachine({
                        action: "local-audio",
                        state: e,
                      }),
                      this
                    );
                  },
                },
                {
                  key: "setLocalVideo",
                  value: function (e) {
                    return (
                      this.sendMessageToCallMachine({
                        action: "local-video",
                        state: e,
                      }),
                      this
                    );
                  },
                },
                {
                  key: "getReceiveSettings",
                  value:
                    ((P = c()(
                      T.a.mark(function e(t) {
                        var r,
                          n,
                          i,
                          a = this,
                          o = arguments;
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((r =
                                      o.length > 1 && void 0 !== o[1]
                                        ? o[1]
                                        : {}),
                                    (n = r.showInheritedValues),
                                    (i = void 0 !== n && n),
                                    this._callObjectMode)
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  throw new Error(
                                    "getReceiveSettings() only supported in call object mode"
                                  );
                                case 3:
                                  (e.t0 = S()(t)),
                                    (e.next =
                                      "string" === e.t0
                                        ? 6
                                        : "undefined" === e.t0
                                        ? 7
                                        : 8);
                                  break;
                                case 6:
                                  return e.abrupt(
                                    "return",
                                    new Promise(function (e) {
                                      a.sendMessageToCallMachine(
                                        {
                                          action:
                                            "get-single-participant-receive-settings",
                                          id: t,
                                          showInheritedValues: i,
                                        },
                                        function (t) {
                                          e(t.receiveSettings);
                                        }
                                      );
                                    })
                                  );
                                case 7:
                                  return e.abrupt(
                                    "return",
                                    this._receiveSettings
                                  );
                                case 8:
                                  throw new Error(
                                    'first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments'
                                  );
                                case 9:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function (e) {
                      return P.apply(this, arguments);
                    }),
                },
                {
                  key: "updateReceiveSettings",
                  value:
                    ((A = c()(
                      T.a.mark(function e(t) {
                        var r = this;
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this._callObjectMode) {
                                    e.next = 2;
                                    break;
                                  }
                                  throw new Error(
                                    "updateReceiveSettings() only supported in call object mode"
                                  );
                                case 2:
                                  if (Kt(t, { allowAllParticipantsKey: !0 })) {
                                    e.next = 4;
                                    break;
                                  }
                                  throw new Error(
                                    $t({ allowAllParticipantsKey: !0 })
                                  );
                                case 4:
                                  if (this._meetingState === N) {
                                    e.next = 6;
                                    break;
                                  }
                                  throw new Error(
                                    "updateReceiveSettings() is only allowed when joined. To specify receive settings earlier, use the receiveSettings config property."
                                  );
                                case 6:
                                  return e.abrupt(
                                    "return",
                                    new Promise(function (e) {
                                      r.sendMessageToCallMachine(
                                        {
                                          action: "update-receive-settings",
                                          receiveSettings: t,
                                        },
                                        function (t) {
                                          e({
                                            receiveSettings: t.receiveSettings,
                                          });
                                        }
                                      );
                                    })
                                  );
                                case 7:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function (e) {
                      return A.apply(this, arguments);
                    }),
                },
                {
                  key: "getInputSettings",
                  value: function () {
                    return this._inputSettings;
                  },
                },
                {
                  key: "updateInputSettings",
                  value:
                    ((E = c()(
                      T.a.mark(function e(t) {
                        var r = this;
                        return T.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (Ht(t)) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Error(Qt());
                              case 2:
                                return e.abrupt(
                                  "return",
                                  new Promise(function (e) {
                                    r.sendMessageToCallMachine(
                                      {
                                        action: "update-input-settings",
                                        inputSettings: t,
                                      },
                                      function (t) {
                                        e({ inputSettings: t.inputSettings });
                                      }
                                    );
                                  })
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    function (e) {
                      return E.apply(this, arguments);
                    }),
                },
                {
                  key: "setBandwidth",
                  value: function (e) {
                    var t = e.kbs,
                      r = e.trackConstraints;
                    return (
                      zt(),
                      this.sendMessageToCallMachine({
                        action: "set-bandwidth",
                        kbs: t,
                        trackConstraints: r,
                      }),
                      this
                    );
                  },
                },
                {
                  key: "getDailyLang",
                  value: function () {
                    var e = this;
                    return (
                      zt(),
                      new Promise(
                        (function () {
                          var t = c()(
                            T.a.mark(function t(r) {
                              var n;
                              return T.a.wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      (n = function (e) {
                                        delete e.action,
                                          delete e.callbackStamp,
                                          r(e);
                                      }),
                                        e.sendMessageToCallMachine(
                                          { action: "get-daily-lang" },
                                          n
                                        );
                                    case 2:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })()
                      )
                    );
                  },
                },
                {
                  key: "setDailyLang",
                  value: function (e) {
                    return (
                      zt(),
                      this.sendMessageToCallMachine({
                        action: "set-daily-lang",
                        lang: e,
                      }),
                      this
                    );
                  },
                },
                {
                  key: "getMeetingSession",
                  value:
                    ((M = c()(
                      T.a.mark(function e() {
                        var t = this;
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this._meetingState === N) {
                                    e.next = 2;
                                    break;
                                  }
                                  throw new Error(
                                    "getMeetingSession() is only allowed when joined"
                                  );
                                case 2:
                                  return e.abrupt(
                                    "return",
                                    new Promise(
                                      (function () {
                                        var e = c()(
                                          T.a.mark(function e(r) {
                                            var n;
                                            return T.a.wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    (n = function (e) {
                                                      delete e.action,
                                                        delete e.callbackStamp,
                                                        delete e.callFrameId,
                                                        r(e);
                                                    }),
                                                      t.sendMessageToCallMachine(
                                                        {
                                                          action:
                                                            "get-meeting-session",
                                                        },
                                                        n
                                                      );
                                                  case 2:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                          })
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    )
                                  );
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function () {
                      return M.apply(this, arguments);
                    }),
                },
                {
                  key: "setUserName",
                  value: function (e, t) {
                    var r = this;
                    return (
                      (this.properties.userName = e),
                      new Promise(
                        (function () {
                          var n = c()(
                            T.a.mark(function n(i) {
                              var a;
                              return T.a.wrap(function (n) {
                                for (;;)
                                  switch ((n.prev = n.next)) {
                                    case 0:
                                      (a = function (e) {
                                        delete e.action,
                                          delete e.callbackStamp,
                                          i(e);
                                      }),
                                        r.sendMessageToCallMachine(
                                          {
                                            action: "set-user-name",
                                            name: null != e ? e : "",
                                            thisMeetingOnly:
                                              Object(at.c)() ||
                                              (!!t && !!t.thisMeetingOnly),
                                          },
                                          a
                                        );
                                    case 2:
                                    case "end":
                                      return n.stop();
                                  }
                              }, n);
                            })
                          );
                          return function (e) {
                            return n.apply(this, arguments);
                          };
                        })()
                      )
                    );
                  },
                },
                {
                  key: "startCamera",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                    return new Promise(
                      (function () {
                        var r = c()(
                          T.a.mark(function r(n, i) {
                            var a;
                            return T.a.wrap(
                              function (r) {
                                for (;;)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      if (
                                        ((a = function (e) {
                                          delete e.action,
                                            delete e.callbackStamp,
                                            n(e);
                                        }),
                                        !e.needsLoad())
                                      ) {
                                        r.next = 10;
                                        break;
                                      }
                                      return (
                                        (r.prev = 2), (r.next = 5), e.load(t)
                                      );
                                    case 5:
                                      r.next = 10;
                                      break;
                                    case 7:
                                      (r.prev = 7),
                                        (r.t0 = r.catch(2)),
                                        i(r.t0);
                                    case 10:
                                      e.sendMessageToCallMachine(
                                        {
                                          action: "start-camera",
                                          properties: Wt(e.properties),
                                          preloadCache: Wt(e._preloadCache),
                                        },
                                        a
                                      );
                                    case 11:
                                    case "end":
                                      return r.stop();
                                  }
                              },
                              r,
                              null,
                              [[2, 7]]
                            );
                          })
                        );
                        return function (e, t) {
                          return r.apply(this, arguments);
                        };
                      })()
                    );
                  },
                },
                {
                  key: "cycleCamera",
                  value: function () {
                    var e = this;
                    return new Promise(function (t, r) {
                      e.sendMessageToCallMachine(
                        { action: "cycle-camera" },
                        function (e) {
                          t({ device: e.device });
                        }
                      );
                    });
                  },
                },
                {
                  key: "cycleMic",
                  value: function () {
                    var e = this;
                    return (
                      zt(),
                      new Promise(function (t, r) {
                        e.sendMessageToCallMachine(
                          { action: "cycle-mic" },
                          function (e) {
                            t({ device: e.device });
                          }
                        );
                      })
                    );
                  },
                },
                {
                  key: "getCameraFacingMode",
                  value: function () {
                    var e = this;
                    return (
                      Jt(),
                      new Promise(function (t, r) {
                        e.sendMessageToCallMachine(
                          { action: "get-camera-facing-mode" },
                          function (e) {
                            t(e.facingMode);
                          }
                        );
                      })
                    );
                  },
                },
                {
                  key: "setInputDevices",
                  value: function (e) {
                    var t = e.audioDeviceId,
                      r = e.videoDeviceId,
                      n = e.audioSource,
                      i = e.videoSource;
                    return (
                      console.warn(
                        "setInputDevices() is deprecated: instead use setInputDevicesAsync(), which returns a Promise"
                      ),
                      this.setInputDevicesAsync({
                        audioDeviceId: t,
                        videoDeviceId: r,
                        audioSource: n,
                        videoSource: i,
                      }),
                      this
                    );
                  },
                },
                {
                  key: "setInputDevicesAsync",
                  value:
                    ((w = c()(
                      T.a.mark(function e(t) {
                        var r,
                          n,
                          i,
                          a,
                          o = this;
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((r = t.audioDeviceId),
                                    (n = t.videoDeviceId),
                                    (i = t.audioSource),
                                    (a = t.videoSource),
                                    zt(),
                                    void 0 !== i && (r = i),
                                    void 0 !== a && (n = a),
                                    r && (this._preloadCache.audioDeviceId = r),
                                    n && (this._preloadCache.videoDeviceId = n),
                                    !this._callObjectMode || !this.needsLoad())
                                  ) {
                                    e.next = 8;
                                    break;
                                  }
                                  return e.abrupt("return", {
                                    camera: {
                                      deviceId:
                                        this._preloadCache.videoDeviceId,
                                    },
                                    mic: {
                                      deviceId:
                                        this._preloadCache.audioDeviceId,
                                    },
                                    speaker: {
                                      deviceId:
                                        this._preloadCache.outputDeviceId,
                                    },
                                  });
                                case 8:
                                  return (
                                    r instanceof MediaStreamTrack &&
                                      (r = "daily-custom-track"),
                                    n instanceof MediaStreamTrack &&
                                      (n = "daily-custom-track"),
                                    e.abrupt(
                                      "return",
                                      new Promise(function (e) {
                                        o.sendMessageToCallMachine(
                                          {
                                            action: "set-input-devices",
                                            audioDeviceId: r,
                                            videoDeviceId: n,
                                          },
                                          function (t) {
                                            delete t.action,
                                              delete t.callbackStamp,
                                              t.returnPreloadCache
                                                ? e({
                                                    camera: {
                                                      deviceId:
                                                        o._preloadCache
                                                          .videoDeviceId,
                                                    },
                                                    mic: {
                                                      deviceId:
                                                        o._preloadCache
                                                          .audioDeviceId,
                                                    },
                                                    speaker: {
                                                      deviceId:
                                                        o._preloadCache
                                                          .outputDeviceId,
                                                    },
                                                  })
                                                : e(t);
                                          }
                                        );
                                      })
                                    )
                                  );
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function (e) {
                      return w.apply(this, arguments);
                    }),
                },
                {
                  key: "setOutputDevice",
                  value: function (e) {
                    var t = e.outputDeviceId;
                    return (
                      zt(),
                      t && (this._preloadCache.outputDeviceId = t),
                      this._callObjectMode &&
                      this._meetingState !== N &&
                      !this._didPreAuth
                        ? (console.warn(
                            "setOutputDevice() not supported before preAuth() or join()"
                          ),
                          this)
                        : (this.sendMessageToCallMachine({
                            action: "set-output-device",
                            outputDeviceId: t,
                          }),
                          this)
                    );
                  },
                },
                {
                  key: "getInputDevices",
                  value:
                    ((_ = c()(
                      T.a.mark(function e() {
                        var t = this;
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (zt(),
                                    !this._callObjectMode || !this.needsLoad())
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  return e.abrupt("return", {
                                    camera: {
                                      deviceId:
                                        this._preloadCache.videoDeviceId,
                                    },
                                    mic: {
                                      deviceId:
                                        this._preloadCache.audioDeviceId,
                                    },
                                    speaker: {
                                      deviceId:
                                        this._preloadCache.outputDeviceId,
                                    },
                                  });
                                case 3:
                                  return e.abrupt(
                                    "return",
                                    new Promise(function (e, r) {
                                      t.sendMessageToCallMachine(
                                        { action: "get-input-devices" },
                                        function (r) {
                                          delete r.action,
                                            delete r.callbackStamp,
                                            r.returnPreloadCache
                                              ? e({
                                                  camera: {
                                                    deviceId:
                                                      t._preloadCache
                                                        .videoDeviceId,
                                                  },
                                                  mic: {
                                                    deviceId:
                                                      t._preloadCache
                                                        .audioDeviceId,
                                                  },
                                                  speaker: {
                                                    deviceId:
                                                      t._preloadCache
                                                        .outputDeviceId,
                                                  },
                                                })
                                              : e(r);
                                        }
                                      );
                                    })
                                  );
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function () {
                      return _.apply(this, arguments);
                    }),
                },
                {
                  key: "nativeInCallAudioMode",
                  value: function () {
                    return Jt(), this._nativeInCallAudioMode;
                  },
                },
                {
                  key: "setNativeInCallAudioMode",
                  value: function (e) {
                    if ((Jt(), [Bt, Vt].includes(e))) {
                      if (e !== this._nativeInCallAudioMode)
                        return (
                          (this._nativeInCallAudioMode = e),
                          !this.disableReactNativeAutoDeviceManagement(
                            "audio"
                          ) &&
                            this.isMeetingPendingOrOngoing(
                              this._meetingState,
                              this._isPreparingToJoin
                            ) &&
                            this.nativeUtils().setAudioMode(
                              this._nativeInCallAudioMode
                            ),
                          this
                        );
                    } else
                      console.error(
                        "invalid in-call audio mode specified: ",
                        e
                      );
                  },
                },
                {
                  key: "preAuth",
                  value:
                    ((b = c()(
                      T.a.mark(function e() {
                        var t,
                          r,
                          n,
                          i = this,
                          a = arguments;
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t =
                                      a.length > 0 && void 0 !== a[0]
                                        ? a[0]
                                        : {}),
                                    this._callObjectMode)
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  throw new Error(
                                    "preAuth() currently only supported in call object mode"
                                  );
                                case 3:
                                  if (![I, N].includes(this._meetingState)) {
                                    e.next = 5;
                                    break;
                                  }
                                  throw new Error(
                                    "preAuth() not supported after joining a meeting"
                                  );
                                case 5:
                                  if (!this.needsLoad()) {
                                    e.next = 8;
                                    break;
                                  }
                                  return (e.next = 8), this.load(t);
                                case 8:
                                  if (t.url) {
                                    e.next = 10;
                                    break;
                                  }
                                  throw new Error(
                                    "preAuth() requires at least a url to be provided"
                                  );
                                case 10:
                                  if (
                                    ((r = Object(st.a)(t.url)),
                                    (n = Object(st.a)(
                                      this.properties.url ||
                                        this.properties.baseUrl
                                    )),
                                    r === n)
                                  ) {
                                    e.next = 14;
                                    break;
                                  }
                                  throw new Error(
                                    "url in preAuth() has a different bundle url than the one loaded ("
                                      .concat(n, " -> ")
                                      .concat(r, ")")
                                  );
                                case 14:
                                  return (
                                    this.validateProperties(t),
                                    (this.properties = Ft(
                                      Ft({}, this.properties),
                                      t
                                    )),
                                    e.abrupt(
                                      "return",
                                      new Promise(function (e, t) {
                                        i.sendMessageToCallMachine(
                                          {
                                            action: "daily-method-preauth",
                                            properties: Wt(i.properties),
                                          },
                                          function (r) {
                                            return r.error
                                              ? t(r.error)
                                              : r.access
                                              ? ((i._didPreAuth = !0),
                                                void e({ access: r.access }))
                                              : t(
                                                  new Error(
                                                    "unknown error in preAuth()"
                                                  )
                                                );
                                          }
                                        );
                                      })
                                    )
                                  );
                                case 17:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function () {
                      return b.apply(this, arguments);
                    }),
                },
                {
                  key: "load",
                  value:
                    ((y = c()(
                      T.a.mark(function e(t) {
                        var r = this;
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.needsLoad()) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  if (
                                    (t &&
                                      (this.validateProperties(t),
                                      (this.properties = Ft(
                                        Ft({}, this.properties),
                                        t
                                      ))),
                                    this._callObjectMode || this.properties.url)
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  throw new Error(
                                    "can't load iframe meeting because url property isn't set"
                                  );
                                case 5:
                                  this.updateMeetingState(L);
                                  try {
                                    this.emit(se, { action: se });
                                  } catch (e) {
                                    console.log("could not emit 'loading'", e);
                                  }
                                  if (!this._callObjectMode) {
                                    e.next = 11;
                                    break;
                                  }
                                  return e.abrupt(
                                    "return",
                                    new Promise(function (e, t) {
                                      r._callObjectLoader.cancel(),
                                        r._callObjectLoader.load(
                                          r.properties.url ||
                                            r.properties.baseUrl,
                                          r._callFrameId,
                                          function (t) {
                                            r.updateMeetingState("loaded"),
                                              t && r.emit(ue, { action: ue }),
                                              e();
                                          },
                                          function (e, n) {
                                            r.emit(ce, {
                                              action: ce,
                                              errorMsg: e,
                                            }),
                                              n ||
                                                (r.updateMeetingState(F),
                                                r.resetMeetingDependentVars(),
                                                r.emit(et, {
                                                  action: et,
                                                  errorMsg: e,
                                                }),
                                                t(e));
                                          }
                                        );
                                    })
                                  );
                                case 11:
                                  return (
                                    (this._iframe.src =
                                      this.assembleMeetingUrl()),
                                    e.abrupt(
                                      "return",
                                      new Promise(function (e, t) {
                                        r._loadedCallback = function (n) {
                                          if (r._meetingState !== F) {
                                            for (var i in (r.updateMeetingState(
                                              "loaded"
                                            ),
                                            (r.properties.cssFile ||
                                              r.properties.cssText) &&
                                              r.loadCss(r.properties),
                                            r._inputEventsOn))
                                              r.sendMessageToCallMachine({
                                                action:
                                                  "register-input-handler",
                                                on: i,
                                              });
                                            e();
                                          } else t(n);
                                        };
                                      })
                                    )
                                  );
                                case 13:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function (e) {
                      return y.apply(this, arguments);
                    }),
                },
                {
                  key: "join",
                  value:
                    ((g = c()(
                      T.a.mark(function e() {
                        var t,
                          r,
                          n,
                          i,
                          a = this,
                          o = arguments;
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t =
                                      o.length > 0 && void 0 !== o[0]
                                        ? o[0]
                                        : {}),
                                    (r = !1),
                                    !this.needsLoad())
                                  ) {
                                    e.next = 15;
                                    break;
                                  }
                                  return (
                                    this.updateIsPreparingToJoin(!0),
                                    (e.prev = 4),
                                    (e.next = 7),
                                    this.load(t)
                                  );
                                case 7:
                                  e.next = 13;
                                  break;
                                case 9:
                                  return (
                                    (e.prev = 9),
                                    (e.t0 = e.catch(4)),
                                    this.updateIsPreparingToJoin(!1),
                                    e.abrupt("return", Promise.reject(e.t0))
                                  );
                                case 13:
                                  e.next = 42;
                                  break;
                                case 15:
                                  if (
                                    ((r = !(
                                      !this.properties.cssFile &&
                                      !this.properties.cssText
                                    )),
                                    !this._didPreAuth)
                                  ) {
                                    e.next = 25;
                                    break;
                                  }
                                  if (!t.url || t.url === this.properties.url) {
                                    e.next = 21;
                                    break;
                                  }
                                  return (
                                    console.error(
                                      "url in join() is different than the one used in preAuth()"
                                    ),
                                    this.updateIsPreparingToJoin(!1),
                                    e.abrupt("return", Promise.reject())
                                  );
                                case 21:
                                  if (
                                    !t.token ||
                                    t.token === this.properties.token
                                  ) {
                                    e.next = 25;
                                    break;
                                  }
                                  return (
                                    console.error(
                                      "token in join() is different than the one used in preAuth()"
                                    ),
                                    this.updateIsPreparingToJoin(!1),
                                    e.abrupt("return", Promise.reject())
                                  );
                                case 25:
                                  if (!t.url) {
                                    e.next = 40;
                                    break;
                                  }
                                  if (!this._callObjectMode) {
                                    e.next = 36;
                                    break;
                                  }
                                  if (
                                    ((n = Object(st.a)(t.url)),
                                    (i = Object(st.a)(
                                      this.properties.url ||
                                        this.properties.baseUrl
                                    )),
                                    n === i)
                                  ) {
                                    e.next = 33;
                                    break;
                                  }
                                  return (
                                    console.error(
                                      "url in join() has a different bundle url than the one loaded ("
                                        .concat(i, " -> ")
                                        .concat(n, ")")
                                    ),
                                    this.updateIsPreparingToJoin(!1),
                                    e.abrupt("return", Promise.reject())
                                  );
                                case 33:
                                  (this.properties.url = t.url), (e.next = 40);
                                  break;
                                case 36:
                                  if (!t.url || t.url === this.properties.url) {
                                    e.next = 40;
                                    break;
                                  }
                                  return (
                                    console.error(
                                      "url in join() is different than the one used in load() ("
                                        .concat(this.properties.url, " -> ")
                                        .concat(t.url, ")")
                                    ),
                                    this.updateIsPreparingToJoin(!1),
                                    e.abrupt("return", Promise.reject())
                                  );
                                case 40:
                                  this.validateProperties(t),
                                    (this.properties = Ft(
                                      Ft({}, this.properties),
                                      t
                                    ));
                                case 42:
                                  if (
                                    (void 0 !== t.showLocalVideo &&
                                      (this._callObjectMode
                                        ? console.error(
                                            "showLocalVideo is not available in callObject mode"
                                          )
                                        : (this._showLocalVideo =
                                            !!t.showLocalVideo)),
                                    void 0 !== t.showParticipantsBar &&
                                      (this._callObjectMode
                                        ? console.error(
                                            "showParticipantsBar is not available in callObject mode"
                                          )
                                        : (this._showParticipantsBar =
                                            !!t.showParticipantsBar)),
                                    this._meetingState !== N &&
                                      this._meetingState !== I)
                                  ) {
                                    e.next = 48;
                                    break;
                                  }
                                  return (
                                    console.warn(
                                      "already joined meeting, call leave() before joining again"
                                    ),
                                    this.updateIsPreparingToJoin(!1),
                                    e.abrupt("return")
                                  );
                                case 48:
                                  this.updateMeetingState(I, !1);
                                  try {
                                    this.emit(fe, { action: fe });
                                  } catch (e) {
                                    console.log(
                                      "could not emit 'joining-meeting'",
                                      e
                                    );
                                  }
                                  return (
                                    this.sendMessageToCallMachine({
                                      action: "join-meeting",
                                      properties: Wt(this.properties),
                                      preloadCache: Wt(this._preloadCache),
                                    }),
                                    e.abrupt(
                                      "return",
                                      new Promise(function (e, t) {
                                        a._joinedCallback = function (n, i) {
                                          if (a._meetingState !== F) {
                                            if ((a.updateMeetingState(N), n))
                                              for (var o in n)
                                                a._callObjectMode &&
                                                  (jt(n[o]),
                                                  Ct(n[o]),
                                                  It(n[o], a._participants[o])),
                                                  (a._participants[o] = Ft(
                                                    {},
                                                    n[o]
                                                  )),
                                                  a.toggleParticipantAudioBasedOnNativeAudioFocus();
                                            r && a.loadCss(a.properties), e(n);
                                          } else t(i);
                                        };
                                      })
                                    )
                                  );
                                case 52:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[4, 9]]
                        );
                      })
                    )),
                    function () {
                      return g.apply(this, arguments);
                    }),
                },
                {
                  key: "leave",
                  value:
                    ((v = c()(
                      T.a.mark(function e() {
                        var t = this;
                        return T.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  new Promise(function (e, r) {
                                    if (
                                      t._callObjectLoader &&
                                      !t._callObjectLoader.loaded
                                    ) {
                                      t._callObjectLoader.cancel(),
                                        t.updateMeetingState(R),
                                        t.resetMeetingDependentVars();
                                      try {
                                        t.emit(R, { action: R });
                                      } catch (e) {
                                        console.log(
                                          "could not emit 'left-meeting'",
                                          e
                                        );
                                      }
                                      e();
                                    } else
                                      t._meetingState === R ||
                                      t._meetingState === F
                                        ? e()
                                        : t.sendMessageToCallMachine(
                                            { action: "leave-meeting" },
                                            function () {
                                              e();
                                            }
                                          );
                                  })
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    function () {
                      return v.apply(this, arguments);
                    }),
                },
                {
                  key: "startScreenShare",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    zt(),
                      e.mediaStream &&
                        ((this._preloadCache.screenMediaStream = e.mediaStream),
                        (e.mediaStream = "daily-custom-track")),
                      this.sendMessageToCallMachine({
                        action: "local-screen-start",
                        captureOptions: e,
                      });
                  },
                },
                {
                  key: "stopScreenShare",
                  value: function () {
                    zt(),
                      this.sendMessageToCallMachine({
                        action: "local-screen-stop",
                      });
                  },
                },
                {
                  key: "startRecording",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    zt(),
                      this.sendMessageToCallMachine(
                        Ft({ action: "local-recording-start" }, e)
                      );
                  },
                },
                {
                  key: "updateRecording",
                  value: function (e) {
                    var t = e.layout,
                      r = void 0 === t ? { preset: "default" } : t;
                    this.sendMessageToCallMachine({
                      action: "daily-method-update-recording",
                      layout: r,
                    });
                  },
                },
                {
                  key: "stopRecording",
                  value: function () {
                    zt(),
                      this.sendMessageToCallMachine({
                        action: "local-recording-stop",
                      });
                  },
                },
                {
                  key: "startLiveStreaming",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    this.sendMessageToCallMachine(
                      Ft({ action: "daily-method-start-live-streaming" }, e)
                    );
                  },
                },
                {
                  key: "updateLiveStreaming",
                  value: function (e) {
                    var t = e.layout,
                      r = void 0 === t ? { preset: "default" } : t;
                    this.sendMessageToCallMachine({
                      action: "daily-method-update-live-streaming",
                      layout: r,
                    });
                  },
                },
                {
                  key: "stopLiveStreaming",
                  value: function () {
                    this.sendMessageToCallMachine({
                      action: "daily-method-stop-live-streaming",
                    });
                  },
                },
                {
                  key: "startRemoteMediaPlayer",
                  value:
                    ((p = c()(
                      T.a.mark(function e(t) {
                        var r,
                          n = this,
                          i = arguments;
                        return T.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r =
                                    i.length > 1 && void 0 !== i[1]
                                      ? i[1]
                                      : { state: rt.PLAY }),
                                  Zt(t))
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                throw new Error(
                                  'startRemoteMediaPlayer arguments must be of the form: { url: "playback url", remoteMediaPlayerSettings?: {state: "play"|"pause"} }'
                                );
                              case 3:
                                if (Xt(r)) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  'startRemoteMediaPlayer arguments must be of the form: { url: "playback url", remoteMediaPlayerSettings?: {state: "play"|"pause"} }'
                                );
                              case 5:
                                return e.abrupt(
                                  "return",
                                  new Promise(
                                    (function () {
                                      var e = c()(
                                        T.a.mark(function e(i, a) {
                                          var o;
                                          return T.a.wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  (o = function (e) {
                                                    e.error
                                                      ? a({
                                                          error: e.error,
                                                          errorMsg: e.errorMsg,
                                                        })
                                                      : i({
                                                          session_id:
                                                            e.session_id,
                                                          state: e.state,
                                                          settings: e.settings,
                                                        });
                                                  }),
                                                    n.sendMessageToCallMachine(
                                                      {
                                                        action:
                                                          "daily-method-start-remote-media-player",
                                                        url: t,
                                                        settings: r,
                                                      },
                                                      o
                                                    );
                                                case 2:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t, r) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    function (e) {
                      return p.apply(this, arguments);
                    }),
                },
                {
                  key: "stopRemoteMediaPlayer",
                  value:
                    ((d = c()(
                      T.a.mark(function e(t) {
                        var r = this;
                        return T.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ("string" == typeof t) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Error(
                                  " remotePlayerID must be of type string"
                                );
                              case 2:
                                return e.abrupt(
                                  "return",
                                  new Promise(
                                    (function () {
                                      var e = c()(
                                        T.a.mark(function e(n, i) {
                                          var a;
                                          return T.a.wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  (a = function (e) {
                                                    e.error
                                                      ? i({
                                                          error: e.error,
                                                          errorMsg: e.errorMsg,
                                                        })
                                                      : n();
                                                  }),
                                                    r.sendMessageToCallMachine(
                                                      {
                                                        action:
                                                          "daily-method-stop-remote-media-player",
                                                        session_id: t,
                                                      },
                                                      a
                                                    );
                                                case 2:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t, r) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    function (e) {
                      return d.apply(this, arguments);
                    }),
                },
                {
                  key: "updateRemoteMediaPlayer",
                  value:
                    ((u = c()(
                      T.a.mark(function e(t, r) {
                        var n = this;
                        return T.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (Xt(r)) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Error(
                                  'startRemoteMediaPlayer arguments must be of the form: { url: "playback url", remoteMediaPlayerSettings?: {state: "play"|"pause"} }'
                                );
                              case 2:
                                return e.abrupt(
                                  "return",
                                  new Promise(
                                    (function () {
                                      var e = c()(
                                        T.a.mark(function e(i, a) {
                                          var o;
                                          return T.a.wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  (o = function (e) {
                                                    e.error
                                                      ? a({
                                                          error: e.error,
                                                          errorMsg: e.errorMsg,
                                                        })
                                                      : i({
                                                          session_id:
                                                            e.session_id,
                                                          state: e.state,
                                                          settings: e.settings,
                                                        });
                                                  }),
                                                    n.sendMessageToCallMachine(
                                                      {
                                                        action:
                                                          "daily-method-update-remote-media-player",
                                                        session_id: t,
                                                        settings: r,
                                                      },
                                                      o
                                                    );
                                                case 2:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t, r) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    function (e, t) {
                      return u.apply(this, arguments);
                    }),
                },
                {
                  key: "startTranscription",
                  value: function () {
                    this.sendMessageToCallMachine({
                      action: "daily-method-start-transcription",
                    });
                  },
                },
                {
                  key: "stopTranscription",
                  value: function () {
                    this.sendMessageToCallMachine({
                      action: "daily-method-stop-transcription",
                    });
                  },
                },
                {
                  key: "getNetworkStats",
                  value: function () {
                    var e = this;
                    if (this._meetingState !== N) {
                      return { stats: { latest: {} } };
                    }
                    return new Promise(function (t, r) {
                      e.sendMessageToCallMachine(
                        { action: "get-calc-stats" },
                        function (r) {
                          t(Ft({ stats: r.stats }, e._network));
                        }
                      );
                    });
                  },
                },
                {
                  key: "getActiveSpeaker",
                  value: function () {
                    return zt(), this._activeSpeaker;
                  },
                },
                {
                  key: "setActiveSpeakerMode",
                  value: function (e) {
                    return (
                      zt(),
                      this.sendMessageToCallMachine({
                        action: "set-active-speaker-mode",
                        enabled: e,
                      }),
                      this
                    );
                  },
                },
                {
                  key: "activeSpeakerMode",
                  value: function () {
                    return zt(), this._activeSpeakerMode;
                  },
                },
                {
                  key: "subscribeToTracksAutomatically",
                  value: function () {
                    return this._preloadCache.subscribeToTracksAutomatically;
                  },
                },
                {
                  key: "setSubscribeToTracksAutomatically",
                  value: function (e) {
                    if (this._meetingState !== N)
                      throw new Error(
                        "setSubscribeToTracksAutomatically() is only allowed when joined"
                      );
                    return (
                      (this._preloadCache.subscribeToTracksAutomatically = e),
                      this.sendMessageToCallMachine({
                        action:
                          "daily-method-subscribe-to-tracks-automatically",
                        enabled: e,
                      }),
                      this
                    );
                  },
                },
                {
                  key: "enumerateDevices",
                  value:
                    ((s = c()(
                      T.a.mark(function e() {
                        var t,
                          r = this;
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ((zt(), !this._callObjectMode)) {
                                    e.next = 6;
                                    break;
                                  }
                                  return (
                                    (e.next = 4),
                                    navigator.mediaDevices.enumerateDevices()
                                  );
                                case 4:
                                  return (
                                    (t = e.sent),
                                    e.abrupt("return", {
                                      devices: t.map(function (e) {
                                        return JSON.parse(JSON.stringify(e));
                                      }),
                                    })
                                  );
                                case 6:
                                  return e.abrupt(
                                    "return",
                                    new Promise(function (e, t) {
                                      r.sendMessageToCallMachine(
                                        { action: "enumerate-devices" },
                                        function (t) {
                                          e({ devices: t.devices });
                                        }
                                      );
                                    })
                                  );
                                case 7:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function () {
                      return s.apply(this, arguments);
                    }),
                },
                {
                  key: "sendAppMessage",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "*";
                    if (JSON.stringify(e).length > 4096)
                      throw new Error(
                        "Message data too large. Max size is 4096"
                      );
                    return (
                      this.sendMessageToCallMachine({
                        action: "app-msg",
                        data: e,
                        to: t,
                      }),
                      this
                    );
                  },
                },
                {
                  key: "addFakeParticipant",
                  value: function (e) {
                    return (
                      zt(),
                      this.sendMessageToCallMachine(
                        Ft({ action: "add-fake-participant" }, e)
                      ),
                      this
                    );
                  },
                },
                {
                  key: "setShowNamesMode",
                  value: function (e) {
                    return (
                      zt(),
                      e && "always" !== e && "never" !== e
                        ? (console.error(
                            'setShowNamesMode argument should be "always", "never", or false'
                          ),
                          this)
                        : (this.sendMessageToCallMachine({
                            action: "set-show-names",
                            mode: e,
                          }),
                          this)
                    );
                  },
                },
                {
                  key: "setShowLocalVideo",
                  value: function () {
                    var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                    return (
                      zt(),
                      "boolean" != typeof e
                        ? (console.error(
                            "setShowLocalVideo only accepts a boolean value"
                          ),
                          this)
                        : this._callObjectMode
                        ? (console.error(
                            "setShowLocalVideo is not available in callObject mode"
                          ),
                          this)
                        : this._meetingState !== N
                        ? (console.error(
                            "the meeting must be joined before calling setShowLocalVideo"
                          ),
                          this)
                        : (this.sendMessageToCallMachine({
                            action: "set-show-local-video",
                            show: e,
                          }),
                          (this._showLocalVideo = e),
                          this)
                    );
                  },
                },
                {
                  key: "showLocalVideo",
                  value: function () {
                    return (
                      zt(),
                      this._callObjectMode
                        ? (console.error(
                            "showLocalVideo is not available in callObject mode"
                          ),
                          this)
                        : this._showLocalVideo
                    );
                  },
                },
                {
                  key: "setShowParticipantsBar",
                  value: function () {
                    var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                    return (
                      zt(),
                      "boolean" != typeof e
                        ? (console.error(
                            "setShowParticipantsBar only accepts a boolean value"
                          ),
                          this)
                        : this._callObjectMode
                        ? (console.error(
                            "setShowParticipantsBar is not available in callObject mode"
                          ),
                          this)
                        : this._meetingState !== N
                        ? (console.error(
                            "the meeting must be joined before calling setShowParticipantsBar"
                          ),
                          this)
                        : (this.sendMessageToCallMachine({
                            action: "set-show-participants-bar",
                            show: e,
                          }),
                          (this._showParticipantsBar = e),
                          this)
                    );
                  },
                },
                {
                  key: "showParticipantsBar",
                  value: function () {
                    return (
                      zt(),
                      this._callObjectMode
                        ? (console.error(
                            "showParticipantsBar is not available in callObject mode"
                          ),
                          this)
                        : this._showParticipantsBar
                    );
                  },
                },
                {
                  key: "theme",
                  value: function () {
                    return this._callObjectMode
                      ? (console.error(
                          "theme is not available in callObject mode"
                        ),
                        this)
                      : this.properties.theme;
                  },
                },
                {
                  key: "setTheme",
                  value: function (e) {
                    var t = this;
                    return new Promise(function (r, n) {
                      if (t._callObjectMode)
                        n("setTheme is not available in callObject mode");
                      else
                        try {
                          t.validateProperties({ theme: e }),
                            (t.properties.theme = Ft({}, e)),
                            t.sendMessageToCallMachine({
                              action: "set-theme",
                              theme: t.properties.theme,
                            });
                          try {
                            t.emit(oe, {
                              action: oe,
                              theme: t.properties.theme,
                            });
                          } catch (e) {
                            console.log("could not emit 'theme-updated'", e);
                          }
                          r(t.properties.theme);
                        } catch (e) {
                          n(e);
                        }
                    });
                  },
                },
                {
                  key: "detectAllFaces",
                  value: function () {
                    var e = this;
                    return (
                      zt(),
                      new Promise(function (t, r) {
                        e.sendMessageToCallMachine(
                          { action: "detect-all-faces" },
                          function (e) {
                            delete e.action, delete e.callbackStamp, t(e);
                          }
                        );
                      })
                    );
                  },
                },
                {
                  key: "requestFullscreen",
                  value:
                    ((a = c()(
                      T.a.mark(function e() {
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (zt(),
                                    this._iframe && !document.fullscreenElement)
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 3:
                                  return (
                                    (e.prev = 3),
                                    (e.next = 6),
                                    this._iframe.requestFullscreen
                                  );
                                case 6:
                                  if (!e.sent) {
                                    e.next = 10;
                                    break;
                                  }
                                  this._iframe.requestFullscreen(),
                                    (e.next = 11);
                                  break;
                                case 10:
                                  this._iframe.webkitRequestFullscreen();
                                case 11:
                                  e.next = 16;
                                  break;
                                case 13:
                                  (e.prev = 13),
                                    (e.t0 = e.catch(3)),
                                    console.log(
                                      "could not make video call fullscreen",
                                      e.t0
                                    );
                                case 16:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[3, 13]]
                        );
                      })
                    )),
                    function () {
                      return a.apply(this, arguments);
                    }),
                },
                {
                  key: "exitFullscreen",
                  value: function () {
                    zt(),
                      document.fullscreenElement
                        ? document.exitFullscreen()
                        : document.webkitFullscreenElement &&
                          document.webkitExitFullscreen();
                  },
                },
                {
                  key: "room",
                  value:
                    ((i = c()(
                      T.a.mark(function e() {
                        var t,
                          r,
                          n,
                          i = this,
                          a = arguments;
                        return T.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t =
                                      a.length > 0 && void 0 !== a[0]
                                        ? a[0]
                                        : {}),
                                    (r = t.includeRoomConfigDefaults),
                                    (n = void 0 === r || r),
                                    this._meetingState !== N &&
                                      !this._didPreAuth)
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  return e.abrupt(
                                    "return",
                                    new Promise(function (e, t) {
                                      i.sendMessageToCallMachine(
                                        {
                                          action: "lib-room-info",
                                          includeRoomConfigDefaults: n,
                                        },
                                        function (t) {
                                          delete t.action,
                                            delete t.callbackStamp,
                                            e(t);
                                        }
                                      );
                                    })
                                  );
                                case 5:
                                  if (!this.properties.url) {
                                    e.next = 7;
                                    break;
                                  }
                                  return e.abrupt("return", {
                                    roomUrlPendingJoin: this.properties.url,
                                  });
                                case 7:
                                  return e.abrupt("return", null);
                                case 8:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function () {
                      return i.apply(this, arguments);
                    }),
                },
                {
                  key: "geo",
                  value:
                    ((n = c()(
                      T.a.mark(function e() {
                        return T.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  new Promise(
                                    (function () {
                                      var e = c()(
                                        T.a.mark(function e(t, r) {
                                          var n, i;
                                          return T.a.wrap(
                                            function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.prev = 0),
                                                      (e.next = 4),
                                                      fetch(
                                                        "https://gs.daily.co/_ks_/x-swsl/:"
                                                      )
                                                    );
                                                  case 4:
                                                    return (
                                                      (n = e.sent),
                                                      (e.next = 7),
                                                      n.json()
                                                    );
                                                  case 7:
                                                    (i = e.sent),
                                                      t({ current: i.geo }),
                                                      (e.next = 15);
                                                    break;
                                                  case 11:
                                                    (e.prev = 11),
                                                      (e.t0 = e.catch(0)),
                                                      console.error(
                                                        "geo lookup failed",
                                                        e.t0
                                                      ),
                                                      t({ current: "" });
                                                  case 15:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            e,
                                            null,
                                            [[0, 11]]
                                          );
                                        })
                                      );
                                      return function (t, r) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    function () {
                      return n.apply(this, arguments);
                    }),
                },
                {
                  key: "setNetworkTopology",
                  value:
                    ((r = c()(
                      T.a.mark(function e(t) {
                        var r = this;
                        return T.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  zt(),
                                  e.abrupt(
                                    "return",
                                    new Promise(
                                      (function () {
                                        var e = c()(
                                          T.a.mark(function e(n, i) {
                                            var a;
                                            return T.a.wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    (a = function (e) {
                                                      e.error
                                                        ? i({ error: e.error })
                                                        : n({
                                                            workerId:
                                                              e.workerId,
                                                          });
                                                    }),
                                                      r.sendMessageToCallMachine(
                                                        {
                                                          action:
                                                            "set-network-topology",
                                                          opts: t,
                                                        },
                                                        a
                                                      );
                                                  case 2:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                          })
                                        );
                                        return function (t, r) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    )
                                  )
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    function (e) {
                      return r.apply(this, arguments);
                    }),
                },
                {
                  key: "getNetworkTopology",
                  value:
                    ((t = c()(
                      T.a.mark(function e() {
                        var t = this;
                        return T.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  new Promise(
                                    (function () {
                                      var e = c()(
                                        T.a.mark(function e(r, n) {
                                          var i;
                                          return T.a.wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  (i = function (e) {
                                                    e.error
                                                      ? n({ error: e.error })
                                                      : r({
                                                          topology: e.topology,
                                                        });
                                                  }),
                                                    t.sendMessageToCallMachine(
                                                      {
                                                        action:
                                                          "get-network-topology",
                                                      },
                                                      i
                                                    );
                                                case 2:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t, r) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    function () {
                      return t.apply(this, arguments);
                    }),
                },
                {
                  key: "setPlayNewParticipantSound",
                  value: function (e) {
                    if ((zt(), "number" != typeof e && !0 !== e && !1 !== e))
                      throw new Error(
                        "argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(
                          e
                        )
                      );
                    this.sendMessageToCallMachine({
                      action: "daily-method-set-play-ding",
                      arg: e,
                    });
                  },
                },
                {
                  key: "on",
                  value: function (e, t) {
                    return (
                      (this._inputEventsOn[e] = {}),
                      this.sendMessageToCallMachine({
                        action: "register-input-handler",
                        on: e,
                      }),
                      x.a.prototype.on.call(this, e, t)
                    );
                  },
                },
                {
                  key: "once",
                  value: function (e, t) {
                    return (
                      (this._inputEventsOn[e] = {}),
                      this.sendMessageToCallMachine({
                        action: "register-input-handler",
                        on: e,
                      }),
                      x.a.prototype.once.call(this, e, t)
                    );
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    return (
                      delete this._inputEventsOn[e],
                      this.sendMessageToCallMachine({
                        action: "register-input-handler",
                        off: e,
                      }),
                      x.a.prototype.off.call(this, e, t)
                    );
                  },
                },
                {
                  key: "validateProperties",
                  value: function (e) {
                    for (var t in e) {
                      if (!Ut[t])
                        throw new Error(
                          "unrecognized property '".concat(t, "'")
                        );
                      if (Ut[t].validate && !Ut[t].validate(e[t], this))
                        throw new Error(
                          "property '".concat(t, "': ").concat(Ut[t].help)
                        );
                    }
                  },
                },
                {
                  key: "assembleMeetingUrl",
                  value: function () {
                    var e = Ft(
                        Ft({}, this.properties),
                        {},
                        {
                          emb: this._callFrameId,
                          embHref: encodeURIComponent(window.location.href),
                        }
                      ),
                      t = e.url.match(/\?/) ? "&" : "?";
                    return (
                      e.url +
                      t +
                      Object.keys(Ut)
                        .filter(function (t) {
                          return Ut[t].queryString && void 0 !== e[t];
                        })
                        .map(function (t) {
                          return "".concat(Ut[t].queryString, "=").concat(e[t]);
                        })
                        .join("&")
                    );
                  },
                },
                {
                  key: "needsLoad",
                  value: function () {
                    return [C, L, R, F].includes(this._meetingState);
                  },
                },
                {
                  key: "sendMessageToCallMachine",
                  value: function (e, t) {
                    this._messageChannel.sendMessageToCallMachine(
                      e,
                      t,
                      this._iframe,
                      this._callFrameId
                    );
                  },
                },
                {
                  key: "forwardPackagedMessageToCallMachine",
                  value: function (e) {
                    this._messageChannel.forwardPackagedMessageToCallMachine(
                      e,
                      this._iframe,
                      this._callFrameId
                    );
                  },
                },
                {
                  key: "addListenerForPackagedMessagesFromCallMachine",
                  value: function (e) {
                    return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(
                      e,
                      this._callFrameId
                    );
                  },
                },
                {
                  key: "removeListenerForPackagedMessagesFromCallMachine",
                  value: function (e) {
                    this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(
                      e
                    );
                  },
                },
                {
                  key: "handleMessageFromCallMachine",
                  value: function (e) {
                    switch (e.action) {
                      case ie:
                        this.sendMessageToCallMachine(
                          Ft({ action: ae }, this.properties)
                        );
                        break;
                      case ue:
                        this._loadedCallback &&
                          (this._loadedCallback(),
                          (this._loadedCallback = null));
                        try {
                          this.emit(e.action, e);
                        } catch (t) {
                          console.log("could not emit", e, t);
                        }
                        break;
                      case pe:
                        this._joinedCallback &&
                          (this._joinedCallback(e.participants),
                          (this._joinedCallback = null));
                        try {
                          this.emit(e.action, e);
                        } catch (t) {
                          console.log("could not emit", e, t);
                        }
                        break;
                      case ve:
                      case me:
                        if (this._meetingState === R) return;
                        if (e.participant && e.participant.session_id) {
                          var t = e.participant.local
                            ? "local"
                            : e.participant.session_id;
                          this._callObjectMode &&
                            (jt(e.participant),
                            Ct(e.participant),
                            It(e.participant, this._participants[t]));
                          try {
                            this.maybeEventTrackStopped(
                              this._participants[t],
                              e.participant,
                              "audioTrack"
                            ),
                              this.maybeEventTrackStopped(
                                this._participants[t],
                                e.participant,
                                "videoTrack"
                              ),
                              this.maybeEventTrackStopped(
                                this._participants[t],
                                e.participant,
                                "screenVideoTrack"
                              ),
                              this.maybeEventTrackStopped(
                                this._participants[t],
                                e.participant,
                                "screenAudioTrack"
                              ),
                              this.maybeEventTrackStarted(
                                this._participants[t],
                                e.participant,
                                "audioTrack"
                              ),
                              this.maybeEventTrackStarted(
                                this._participants[t],
                                e.participant,
                                "videoTrack"
                              ),
                              this.maybeEventTrackStarted(
                                this._participants[t],
                                e.participant,
                                "screenVideoTrack"
                              ),
                              this.maybeEventTrackStarted(
                                this._participants[t],
                                e.participant,
                                "screenAudioTrack"
                              ),
                              this.maybeEventTrackStoppedForCustomTracks(
                                this._participants[t],
                                e.participant
                              ),
                              this.maybeEventTrackStartedForCustomTracks(
                                this._participants[t],
                                e.participant
                              ),
                              this.maybeEventRecordingStopped(
                                this._participants[t],
                                e.participant
                              ),
                              this.maybeEventRecordingStarted(
                                this._participants[t],
                                e.participant
                              );
                          } catch (e) {
                            console.error("track events error", e);
                          }
                          if (
                            !this.compareEqualForParticipantUpdateEvent(
                              e.participant,
                              this._participants[t]
                            )
                          ) {
                            (this._participants[t] = Ft({}, e.participant)),
                              this.toggleParticipantAudioBasedOnNativeAudioFocus();
                            try {
                              this.emit(e.action, e);
                            } catch (t) {
                              console.log("could not emit", e, t);
                            }
                          }
                        }
                        break;
                      case ge:
                        if (e.participant && e.participant.session_id) {
                          var r = this._participants[e.participant.session_id];
                          r &&
                            (this.maybeEventTrackStopped(r, null, "audioTrack"),
                            this.maybeEventTrackStopped(r, null, "videoTrack"),
                            this.maybeEventTrackStopped(
                              r,
                              null,
                              "screenVideoTrack"
                            ),
                            this.maybeEventTrackStopped(
                              r,
                              null,
                              "screenAudioTrack"
                            ),
                            this.maybeEventTrackStoppedForCustomTracks(
                              r,
                              null
                            )),
                            delete this._participants[e.participant.session_id];
                          try {
                            this.emit(e.action, e);
                          } catch (t) {
                            console.log("could not emit", e, t);
                          }
                        }
                        break;
                      case ye:
                        var n = { access: e.access };
                        if (
                          (e.awaitingAccess &&
                            (n.awaitingAccess = e.awaitingAccess),
                          !Object(O.deepEqual)(this._accessState, n))
                        ) {
                          this._accessState = n;
                          try {
                            this.emit(e.action, e);
                          } catch (t) {
                            console.log("could not emit", e, t);
                          }
                        }
                        break;
                      case be:
                        if (e.meetingSession)
                          try {
                            delete e.callFrameId, this.emit(e.action, e);
                          } catch (t) {
                            console.log("could not emit", e, t);
                          }
                        break;
                      case et:
                        this._iframe &&
                          !e.preserveIframe &&
                          (this._iframe.src = ""),
                          this.updateMeetingState(F),
                          this.resetMeetingDependentVars(),
                          this._loadedCallback &&
                            (this._loadedCallback(e.errorMsg),
                            (this._loadedCallback = null)),
                          this._joinedCallback &&
                            (this._joinedCallback(null, e.errorMsg),
                            (this._joinedCallback = null));
                        try {
                          e.preserveIframe;
                          var i = o()(e, Nt);
                          this.emit(e.action, i);
                        } catch (t) {
                          console.log("could not emit", e, t);
                        }
                        break;
                      case he:
                        this._meetingState !== F && this.updateMeetingState(R),
                          this.resetMeetingDependentVars();
                        try {
                          this.emit(e.action, e);
                        } catch (t) {
                          console.log("could not emit", e, t);
                        }
                        break;
                      case Ne:
                        var a = this._participants[e.session_id];
                        a ||
                          (a =
                            e.session_id === this._participants.local.session_id
                              ? this._participants.local
                              : {});
                        try {
                          this.emit(e.event.type, {
                            action: e.event.type,
                            event: e.event,
                            participant: Ft({}, a),
                          });
                        } catch (t) {
                          console.log("could not emit", e, t);
                        }
                        break;
                      case Ge:
                        var s = e.threshold,
                          c = e.quality;
                        if (
                          s !== this._network.threshold ||
                          c !== this._network.quality
                        ) {
                          (this._network.quality = c),
                            (this._network.threshold = s);
                          try {
                            this.emit(e.action, e);
                          } catch (t) {
                            console.log("could not emit", e, t);
                          }
                        }
                        break;
                      case Ye:
                        var u = e.activeSpeaker;
                        if (this._activeSpeaker.peerId !== u.peerId) {
                          this._activeSpeaker.peerId = u.peerId;
                          try {
                            this.emit(e.action, {
                              action: e.action,
                              activeSpeaker: this._activeSpeaker,
                            });
                          } catch (t) {
                            console.log("could not emit", e, t);
                          }
                        }
                        break;
                      case "show-local-video-changed":
                        if (this._callObjectMode) return;
                        var l = e.show;
                        this._showLocalVideo = l;
                        try {
                          this.emit(e.action, { action: e.action, show: l });
                        } catch (t) {
                          console.log("could not emit", e, t);
                        }
                        break;
                      case Ue:
                        var d = e.enabled;
                        if (this._activeSpeakerMode !== d) {
                          this._activeSpeakerMode = d;
                          try {
                            this.emit(e.action, {
                              action: e.action,
                              enabled: this._activeSpeakerMode,
                            });
                          } catch (t) {
                            console.log("could not emit", e, t);
                          }
                        }
                        break;
                      case _e:
                      case we:
                      case ke:
                        this._waitingParticipants = e.allWaitingParticipants;
                        try {
                          this.emit(e.action, {
                            action: e.action,
                            participant: e.participant,
                          });
                        } catch (t) {
                          console.log("could not emit", e, t);
                        }
                        break;
                      case $e:
                        if (
                          !Object(O.deepEqual)(
                            this._receiveSettings,
                            e.receiveSettings
                          )
                        ) {
                          this._receiveSettings = e.receiveSettings;
                          try {
                            this.emit(e.action, {
                              action: e.action,
                              receiveSettings: e.receiveSettings,
                            });
                          } catch (t) {
                            console.log("could not emit", e, t);
                          }
                        }
                        break;
                      case Ze:
                        if (
                          !Object(O.deepEqual)(
                            this._inputSettings,
                            e.inputSettings
                          )
                        ) {
                          this._inputSettings = e.inputSettings;
                          try {
                            this.emit(e.action, {
                              action: e.action,
                              inputSettings: e.inputSettings,
                            });
                          } catch (t) {
                            console.log("could not emit", e, t);
                          }
                        }
                        break;
                      case Re:
                        var f = e.playerState.session_id;
                        (this._rmpPlayerState[f] = e.playerState),
                          this.emitDailyJSEvent(e);
                        break;
                      case De:
                        delete this._rmpPlayerState[e.session_id],
                          this.emitDailyJSEvent(e);
                        break;
                      case Fe:
                        var p = e.playerState.session_id,
                          h = this._rmpPlayerState[p];
                        (h &&
                          this.compareEqualForRMPUpdateEvent(
                            h,
                            e.playerState
                          )) ||
                          ((this._rmpPlayerState[p] = e.playerState),
                          this.emitDailyJSEvent(e));
                        break;
                      case xe:
                      case Oe:
                      case Pe:
                      case je:
                      case Ce:
                      case Ee:
                      case Te:
                      case Ae:
                      case le:
                      case de:
                      case Ie:
                      case Be:
                      case Ve:
                      case qe:
                      case Le:
                      case Je:
                      case Ke:
                      case He:
                      case Xe:
                      case Qe:
                        try {
                          this.emit(e.action, e);
                        } catch (t) {
                          console.log("could not emit", e, t);
                        }
                        break;
                      case "request-fullscreen":
                        this.requestFullscreen();
                        break;
                      case "request-exit-fullscreen":
                        this.exitFullscreen();
                    }
                  },
                },
                {
                  key: "maybeEventRecordingStopped",
                  value: function (e, t) {
                    var r = "record";
                    if (e && !t.local && !1 === t[r] && e[r] !== t[r])
                      try {
                        this.emit(Oe, { action: Oe });
                      } catch (e) {
                        console.log("could not emit", e);
                      }
                  },
                },
                {
                  key: "maybeEventRecordingStarted",
                  value: function (e, t) {
                    var r = "record";
                    if (e && !t.local && !0 === t[r] && e[r] !== t[r])
                      try {
                        this.emit(xe, { action: xe });
                      } catch (e) {
                        console.log("could not emit", e);
                      }
                  },
                },
                {
                  key: "maybeEventTrackStopped",
                  value: function (e, t, r) {
                    if (
                      e &&
                      ((e[r] && "ended" === e[r].readyState) ||
                        (e[r] && (!t || !t[r])) ||
                        (e[r] && e[r].id !== t[r].id))
                    )
                      try {
                        this.emit(Se, {
                          action: Se,
                          track: e[r],
                          participant: t,
                        });
                      } catch (e) {
                        console.log("could not emit", e);
                      }
                  },
                },
                {
                  key: "maybeEventCustomTrackStopped",
                  value: function (e, t, r, n) {
                    if (
                      e &&
                      (!n ||
                        !n.remoteMediaPlayerState ||
                        (n.remoteMediaPlayerState.state != nt &&
                          n.remoteMediaPlayerState.state != it)) &&
                      ((e && "ended" === e.readyState) ||
                        (e && !t) ||
                        (e && e.id !== t.id))
                    )
                      try {
                        this.emit(Se, { action: Se, track: e, participant: r });
                      } catch (e) {
                        console.log(
                          "maybeEventCustomTrackStopped: could not emit",
                          e
                        );
                      }
                  },
                },
                {
                  key: "maybeEventCustomTrackStarted",
                  value: function (e, t, r) {
                    if (
                      (t && !e) ||
                      (t && "ended" === e.readyState) ||
                      (t && t.id !== e.id)
                    )
                      try {
                        this.emit(Me, { action: Me, track: t, participant: r });
                      } catch (e) {
                        console.log(
                          "maybeEventCustomTrackStarted: could not emit",
                          e
                        );
                      }
                  },
                },
                {
                  key: "maybeEventTrackStarted",
                  value: function (e, t, r) {
                    if (
                      (t[r] && (!e || !e[r])) ||
                      (t[r] && "ended" === e[r].readyState) ||
                      (t[r] && t[r].id !== e[r].id)
                    )
                      try {
                        this.emit(Me, {
                          action: Me,
                          track: t[r],
                          participant: t,
                        });
                      } catch (e) {
                        console.log("could not emit", e);
                      }
                  },
                },
                {
                  key: "maybeEventTrackStoppedForCustomTracks",
                  value: function (e, t) {
                    if (e)
                      for (var r in e.tracks)
                        Lt(r) ||
                          this.maybeEventCustomTrackStopped(
                            e.tracks[r].track,
                            t ? t.tracks[r].track : null,
                            e,
                            t
                          );
                  },
                },
                {
                  key: "maybeEventTrackStartedForCustomTracks",
                  value: function (e, t) {
                    if (t)
                      for (var r in t.tracks)
                        Lt(r) ||
                          this.maybeEventCustomTrackStarted(
                            e ? e.tracks[r].track : null,
                            t.tracks[r].track,
                            t
                          );
                  },
                },
                {
                  key: "compareEqualForRMPUpdateEvent",
                  value: function (e, t) {
                    return e.state === t.state;
                  },
                },
                {
                  key: "emitDailyJSEvent",
                  value: function (e) {
                    try {
                      this.emit(e.action, e);
                    } catch (t) {
                      console.log("could not emit", e, t);
                    }
                  },
                },
                {
                  key: "compareEqualForParticipantUpdateEvent",
                  value: function (e, t) {
                    return (
                      !!Object(O.deepEqual)(e, t) &&
                      (!e.videoTrack ||
                        !t.videoTrack ||
                        (e.videoTrack.id === t.videoTrack.id &&
                          e.videoTrack.muted === t.videoTrack.muted &&
                          e.videoTrack.enabled === t.videoTrack.enabled)) &&
                      (!e.audioTrack ||
                        !t.audioTrack ||
                        (e.audioTrack.id === t.audioTrack.id &&
                          e.audioTrack.muted === t.audioTrack.muted &&
                          e.audioTrack.enabled === t.audioTrack.enabled))
                    );
                  },
                },
                {
                  key: "nativeUtils",
                  value: function () {
                    return Object(at.c)()
                      ? "undefined" == typeof DailyNativeUtils
                        ? (console.warn(
                            "in React Native, DailyNativeUtils is expected to be available"
                          ),
                          null)
                        : DailyNativeUtils
                      : null;
                  },
                },
                {
                  key: "updateIsPreparingToJoin",
                  value: function (e) {
                    this.updateMeetingState(this._meetingState, e);
                  },
                },
                {
                  key: "updateMeetingState",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this._isPreparingToJoin;
                    if (
                      e !== this._meetingState ||
                      t !== this._isPreparingToJoin
                    ) {
                      var r = this._meetingState,
                        n = this._isPreparingToJoin;
                      (this._meetingState = e), (this._isPreparingToJoin = t);
                      var i = this.isMeetingPendingOrOngoing(r, n),
                        a = this.isMeetingPendingOrOngoing(
                          this._meetingState,
                          this._isPreparingToJoin
                        );
                      i !== a &&
                        (this.updateKeepDeviceAwake(a),
                        this.updateDeviceAudioMode(a),
                        this.updateShowAndroidOngoingMeetingNotification(a),
                        this.updateNoOpRecordingEnsuringBackgroundContinuity(
                          a
                        ));
                    }
                  },
                },
                {
                  key: "resetMeetingDependentVars",
                  value: function () {
                    (this._participants = {}),
                      (this._waitingParticipants = {}),
                      (this._activeSpeaker = {}),
                      (this._activeSpeakerMode = !1),
                      (this._didPreAuth = !1),
                      (this._accessState = { access: q }),
                      (this._receiveSettings = {}),
                      (this._inputSettings = {}),
                      this._preloadCache;
                  },
                },
                {
                  key: "updateKeepDeviceAwake",
                  value: function (e) {
                    Object(at.c)() &&
                      this.nativeUtils().setKeepDeviceAwake(
                        e,
                        this._callFrameId
                      );
                  },
                },
                {
                  key: "updateDeviceAudioMode",
                  value: function (e) {
                    if (
                      Object(at.c)() &&
                      !this.disableReactNativeAutoDeviceManagement("audio")
                    ) {
                      var t = e ? this._nativeInCallAudioMode : "idle";
                      this.nativeUtils().setAudioMode(t);
                    }
                  },
                },
                {
                  key: "updateShowAndroidOngoingMeetingNotification",
                  value: function (e) {
                    if (
                      Object(at.c)() &&
                      this.nativeUtils().setShowOngoingMeetingNotification
                    ) {
                      var t, r, n, i;
                      if (
                        this.properties.reactNativeConfig &&
                        this.properties.reactNativeConfig
                          .androidInCallNotification
                      ) {
                        var a =
                          this.properties.reactNativeConfig
                            .androidInCallNotification;
                        (t = a.title),
                          (r = a.subtitle),
                          (n = a.iconName),
                          (i = a.disableForCustomOverride);
                      }
                      i && (e = !1),
                        this.nativeUtils().setShowOngoingMeetingNotification(
                          e,
                          t,
                          r,
                          n,
                          this._callFrameId
                        );
                    }
                  },
                },
                {
                  key: "updateNoOpRecordingEnsuringBackgroundContinuity",
                  value: function (e) {
                    Object(at.c)() &&
                      this.nativeUtils()
                        .enableNoOpRecordingEnsuringBackgroundContinuity &&
                      this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(
                        e
                      );
                  },
                },
                {
                  key: "isMeetingPendingOrOngoing",
                  value: function (e, t) {
                    return [I, N].includes(e) || t;
                  },
                },
                {
                  key: "toggleParticipantAudioBasedOnNativeAudioFocus",
                  value: function () {
                    if (Object(at.c)()) {
                      var e = store.getState();
                      for (var t in e.streams) {
                        var r = e.streams[t];
                        r &&
                          r.pendingTrack &&
                          "audio" === r.pendingTrack.kind &&
                          (r.pendingTrack.enabled = this._hasNativeAudioFocus);
                      }
                    }
                  },
                },
                {
                  key: "disableReactNativeAutoDeviceManagement",
                  value: function (e) {
                    return (
                      this.properties.reactNativeConfig &&
                      this.properties.reactNativeConfig
                        .disableAutoDeviceManagement &&
                      this.properties.reactNativeConfig
                        .disableAutoDeviceManagement[e]
                    );
                  },
                },
                {
                  key: "absoluteUrl",
                  value: function (e) {
                    if (void 0 !== e) {
                      var t = document.createElement("a");
                      return (t.href = e), t.href;
                    }
                  },
                },
                {
                  key: "sayHello",
                  value: function () {
                    var e = "hello, world.";
                    return console.log(e), e;
                  },
                },
              ],
              [
                {
                  key: "supportedBrowser",
                  value: function () {
                    if (Object(at.c)())
                      return {
                        supported: !0,
                        mobile: !0,
                        name: "React Native",
                        version: null,
                        supportsScreenShare: !1,
                        supportsSfu: !0,
                        supportsVideoProcessing: !1,
                      };
                    var e = j.a.getParser(Object(at.b)());
                    return {
                      supported: !!Object(at.a)(),
                      mobile: "mobile" === e.getPlatformType(),
                      name: e.getBrowserName(),
                      version: e.getBrowserVersion(),
                      supportsScreenShare: !!Object(at.d)(),
                      supportsSfu: !!Object(at.e)(),
                      supportsVideoProcessing: Object(at.f)(),
                    };
                  },
                },
                {
                  key: "version",
                  value: function () {
                    return "0.21.0";
                  },
                },
                {
                  key: "createCallObject",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return (e.layout = "none"), new G(null, e);
                  },
                },
                {
                  key: "wrap",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    if (
                      (zt(), !e || !e.contentWindow || "string" != typeof e.src)
                    )
                      throw new Error(
                        "DailyIframe::Wrap needs an iframe-like first argument"
                      );
                    return (
                      t.layout ||
                        (t.customLayout
                          ? (t.layout = "custom-v1")
                          : (t.layout = "browser")),
                      new G(e, t)
                    );
                  },
                },
                {
                  key: "createFrame",
                  value: function (e, t) {
                    var r, n;
                    zt(),
                      e && t
                        ? ((r = e), (n = t))
                        : e && e.append
                        ? ((r = e), (n = {}))
                        : ((r = document.body), (n = e || {}));
                    var i = n.iframeStyle;
                    i ||
                      (i =
                        r === document.body
                          ? {
                              position: "fixed",
                              border: "1px solid black",
                              backgroundColor: "white",
                              width: "375px",
                              height: "450px",
                              right: "1em",
                              bottom: "1em",
                            }
                          : { border: 0, width: "100%", height: "100%" });
                    var a = document.createElement("iframe");
                    window.navigator &&
                    window.navigator.userAgent.match(/Chrome\/61\./)
                      ? (a.allow = "microphone, camera")
                      : (a.allow =
                          "microphone; camera; autoplay; display-capture"),
                      (a.style.visibility = "hidden"),
                      r.appendChild(a),
                      (a.style.visibility = null),
                      Object.keys(i).forEach(function (e) {
                        return (a.style[e] = i[e]);
                      }),
                      n.layout ||
                        (n.customLayout
                          ? (n.layout = "custom-v1")
                          : (n.layout = "browser"));
                    try {
                      return new G(a, n);
                    } catch (e) {
                      throw (r.removeChild(a), e);
                    }
                  },
                },
                {
                  key: "createTransparentFrame",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    zt();
                    var t = document.createElement("iframe");
                    return (
                      (t.allow = "microphone; camera; autoplay"),
                      (t.style.cssText =
                        "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      border: 0;\n      pointer-events: none;\n    "),
                      document.body.appendChild(t),
                      e.layout || (e.layout = "custom-v1"),
                      G.wrap(t, e)
                    );
                  },
                },
              ]
            ),
            G
          );
        })(x.a);
      function Wt(e) {
        var t = {};
        for (var r in e)
          e[r] instanceof MediaStreamTrack
            ? (t[r] = "daily-custom-track")
            : "dailyConfig" === r
            ? (e[r].modifyLocalSdpHook &&
                (window._dailyConfig &&
                  (window._dailyConfig.modifyLocalSdpHook =
                    e[r].modifyLocalSdpHook),
                delete e[r].modifyLocalSdpHook),
              e[r].modifyRemoteSdpHook &&
                (window._dailyConfig &&
                  (window._dailyConfig.modifyRemoteSdpHook =
                    e[r].modifyRemoteSdpHook),
                delete e[r].modifyRemoteSdpHook),
              (t[r] = e[r]))
            : (t[r] = e[r]);
        return t;
      }
      function zt() {
        if (Object(at.c)())
          throw new Error(
            "This daily-js method is not currently supported in React Native"
          );
      }
      function Jt() {
        if (!Object(at.c)())
          throw new Error(
            "This daily-js method is only supported in React Native"
          );
      }
      function Kt(e, t) {
        for (
          var r = t.allowAllParticipantsKey,
            n = function (e) {
              var t = ["local"];
              return r || t.push("*"), e && !t.includes(e);
            },
            a = function (e) {
              return !!(
                void 0 === e.layer ||
                (Number.isInteger(e.layer) && e.layer >= 0) ||
                "inherit" === e.layer
              );
            },
            o = function (e) {
              return (
                !!e &&
                !(e.video && !a(e.video)) &&
                !(e.screenVideo && !a(e.screenVideo))
              );
            },
            s = 0,
            c = Object.entries(e);
          s < c.length;
          s++
        ) {
          var u = i()(c[s], 2),
            l = u[0],
            d = u[1];
          if (!n(l) || !o(d)) return !1;
        }
        return !0;
      }
      function Ht(e) {
        return (
          "object" === S()(e) &&
          !(!e.video || "object" !== S()(e.video)) &&
          !!(function (e) {
            if (!e) return !1;
            if ("object" !== S()(e)) return !1;
            if (0 === Object.keys(e).length) return !1;
            if (
              e.type &&
              ((t = e.type),
              "string" != typeof t || !Object.values(tt).includes(t))
            )
              return !1;
            var t;
            if (void 0 !== e.publish && "boolean" != typeof e.publish)
              return !1;
            if (e.config) {
              if ("object" !== S()(e.config)) return !1;
              if (
                !(function (e, t) {
                  var r = Object.keys(t);
                  if (0 === r.length) return !0;
                  var n =
                    "invalid object in inputSettings -> video -> processor -> config";
                  switch (e) {
                    case tt.BGBLUR:
                      if (r.length > 1 || "strength" !== r[0])
                        throw new Error(n);
                      if (
                        "number" != typeof t.strength ||
                        t.strength <= 0 ||
                        t.strength > 1 ||
                        isNaN(t.strength)
                      )
                        throw new Error(
                          ""
                            .concat(n, "; expected: {0 < strength <= 1}, got: ")
                            .concat(t.strength)
                        );
                    default:
                      return !0;
                  }
                })(e.type, e.config)
              )
                return !1;
            }
            return !0;
          })(e.video.processor)
        );
      }
      function Qt() {
        var e = Object.values(tt).join(" | ");
        return "inputSettings must be of the form: { video: { processor: [ ".concat(
          e,
          " ] }, publish?: boolean, config?: {} }"
        );
      }
      function $t(e) {
        var t = e.allowAllParticipantsKey;
        return (
          "receiveSettings must be of the form { [<remote participant id> | "
            .concat(K)
            .concat(t ? ' | "'.concat(H, '"') : "", "]: ") +
          '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}'
        );
      }
      function Zt(e) {
        return "string" == typeof e;
      }
      function Xt(e) {
        return "object" === S()(e) && Object.values(rt).includes(e.state);
      }
    },
  ]);
});
