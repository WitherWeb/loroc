(() => {
  var e = {
      711: function (e) {
        e.exports = (function (e) {
          function t(s) {
            if (i[s]) return i[s].exports;
            var n = (i[s] = { exports: {}, id: s, loaded: !1 });
            return (
              e[s].call(n.exports, n, n.exports, t), (n.loaded = !0), n.exports
            );
          }
          var i = {};
          return (t.m = e), (t.c = i), (t.p = "dist/"), t(0);
        })([
          function (e, t, i) {
            "use strict";
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var n =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i)
                      Object.prototype.hasOwnProperty.call(i, s) &&
                        (e[s] = i[s]);
                  }
                  return e;
                },
              r = (s(i(1)), i(6)),
              a = s(r),
              o = s(i(7)),
              l = s(i(8)),
              d = s(i(9)),
              c = s(i(10)),
              u = s(i(11)),
              p = s(i(14)),
              f = [],
              h = !1,
              m = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1,
              },
              g = function () {
                if (
                  (arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0] &&
                    (h = !0),
                  h)
                )
                  return (
                    (f = (0, u.default)(f, m)), (0, c.default)(f, m.once), f
                  );
              },
              v = function () {
                (f = (0, p.default)()), g();
              };
            e.exports = {
              init: function (e) {
                (m = n(m, e)), (f = (0, p.default)());
                var t = document.all && !window.atob;
                return (function (e) {
                  return (
                    !0 === e ||
                    ("mobile" === e && d.default.mobile()) ||
                    ("phone" === e && d.default.phone()) ||
                    ("tablet" === e && d.default.tablet()) ||
                    ("function" == typeof e && !0 === e())
                  );
                })(m.disable) || t
                  ? void f.forEach(function (e, t) {
                      e.node.removeAttribute("data-aos"),
                        e.node.removeAttribute("data-aos-easing"),
                        e.node.removeAttribute("data-aos-duration"),
                        e.node.removeAttribute("data-aos-delay");
                    })
                  : (m.disableMutationObserver ||
                      l.default.isSupported() ||
                      (console.info(
                        '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                      ),
                      (m.disableMutationObserver = !0)),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-easing", m.easing),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-duration", m.duration),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-delay", m.delay),
                    "DOMContentLoaded" === m.startEvent &&
                    ["complete", "interactive"].indexOf(document.readyState) >
                      -1
                      ? g(!0)
                      : "load" === m.startEvent
                      ? window.addEventListener(m.startEvent, function () {
                          g(!0);
                        })
                      : document.addEventListener(m.startEvent, function () {
                          g(!0);
                        }),
                    window.addEventListener(
                      "resize",
                      (0, o.default)(g, m.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "orientationchange",
                      (0, o.default)(g, m.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "scroll",
                      (0, a.default)(function () {
                        (0, c.default)(f, m.once);
                      }, m.throttleDelay)
                    ),
                    m.disableMutationObserver ||
                      l.default.ready("[data-aos]", v),
                    f);
              },
              refresh: g,
              refreshHard: v,
            };
          },
          function (e, t) {},
          ,
          ,
          ,
          ,
          function (e, t) {
            (function (t) {
              "use strict";
              function i(e, t, i) {
                function n(t) {
                  var i = p,
                    s = f;
                  return (p = f = void 0), (b = t), (m = e.apply(s, i));
                }
                function a(e) {
                  return (b = e), (g = setTimeout(d, t)), T ? n(e) : m;
                }
                function l(e) {
                  var i = e - v;
                  return void 0 === v || i >= t || i < 0 || (S && e - b >= h);
                }
                function d() {
                  var e = C();
                  return l(e)
                    ? c(e)
                    : void (g = setTimeout(
                        d,
                        (function (e) {
                          var i = t - (e - v);
                          return S ? y(i, h - (e - b)) : i;
                        })(e)
                      ));
                }
                function c(e) {
                  return (g = void 0), E && p ? n(e) : ((p = f = void 0), m);
                }
                function u() {
                  var e = C(),
                    i = l(e);
                  if (((p = arguments), (f = this), (v = e), i)) {
                    if (void 0 === g) return a(v);
                    if (S) return (g = setTimeout(d, t)), n(v);
                  }
                  return void 0 === g && (g = setTimeout(d, t)), m;
                }
                var p,
                  f,
                  h,
                  m,
                  g,
                  v,
                  b = 0,
                  T = !1,
                  S = !1,
                  E = !0;
                if ("function" != typeof e) throw new TypeError(o);
                return (
                  (t = r(t) || 0),
                  s(i) &&
                    ((T = !!i.leading),
                    (h = (S = "maxWait" in i) ? w(r(i.maxWait) || 0, t) : h),
                    (E = "trailing" in i ? !!i.trailing : E)),
                  (u.cancel = function () {
                    void 0 !== g && clearTimeout(g),
                      (b = 0),
                      (p = v = f = g = void 0);
                  }),
                  (u.flush = function () {
                    return void 0 === g ? m : c(C());
                  }),
                  u
                );
              }
              function s(e) {
                var t = void 0 === e ? "undefined" : a(e);
                return !!e && ("object" == t || "function" == t);
              }
              function n(e) {
                return (
                  "symbol" == (void 0 === e ? "undefined" : a(e)) ||
                  ((function (e) {
                    return (
                      !!e && "object" == (void 0 === e ? "undefined" : a(e))
                    );
                  })(e) &&
                    b.call(e) == d)
                );
              }
              function r(e) {
                if ("number" == typeof e) return e;
                if (n(e)) return l;
                if (s(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = s(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(c, "");
                var i = p.test(e);
                return i || f.test(e)
                  ? h(e.slice(2), i ? 2 : 8)
                  : u.test(e)
                  ? l
                  : +e;
              }
              var a =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
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
                      },
                o = "Expected a function",
                l = NaN,
                d = "[object Symbol]",
                c = /^\s+|\s+$/g,
                u = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i,
                f = /^0o[0-7]+$/i,
                h = parseInt,
                m =
                  "object" == (void 0 === t ? "undefined" : a(t)) &&
                  t &&
                  t.Object === Object &&
                  t,
                g =
                  "object" ==
                    ("undefined" == typeof self ? "undefined" : a(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                v = m || g || Function("return this")(),
                b = Object.prototype.toString,
                w = Math.max,
                y = Math.min,
                C = function () {
                  return v.Date.now();
                };
              e.exports = function (e, t, n) {
                var r = !0,
                  a = !0;
                if ("function" != typeof e) throw new TypeError(o);
                return (
                  s(n) &&
                    ((r = "leading" in n ? !!n.leading : r),
                    (a = "trailing" in n ? !!n.trailing : a)),
                  i(e, t, { leading: r, maxWait: t, trailing: a })
                );
              };
            }).call(
              t,
              (function () {
                return this;
              })()
            );
          },
          function (e, t) {
            (function (t) {
              "use strict";
              function i(e) {
                var t = void 0 === e ? "undefined" : r(e);
                return !!e && ("object" == t || "function" == t);
              }
              function s(e) {
                return (
                  "symbol" == (void 0 === e ? "undefined" : r(e)) ||
                  ((function (e) {
                    return (
                      !!e && "object" == (void 0 === e ? "undefined" : r(e))
                    );
                  })(e) &&
                    v.call(e) == l)
                );
              }
              function n(e) {
                if ("number" == typeof e) return e;
                if (s(e)) return o;
                if (i(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = i(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(d, "");
                var n = u.test(e);
                return n || p.test(e)
                  ? f(e.slice(2), n ? 2 : 8)
                  : c.test(e)
                  ? o
                  : +e;
              }
              var r =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
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
                      },
                a = "Expected a function",
                o = NaN,
                l = "[object Symbol]",
                d = /^\s+|\s+$/g,
                c = /^[-+]0x[0-9a-f]+$/i,
                u = /^0b[01]+$/i,
                p = /^0o[0-7]+$/i,
                f = parseInt,
                h =
                  "object" == (void 0 === t ? "undefined" : r(t)) &&
                  t &&
                  t.Object === Object &&
                  t,
                m =
                  "object" ==
                    ("undefined" == typeof self ? "undefined" : r(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                g = h || m || Function("return this")(),
                v = Object.prototype.toString,
                b = Math.max,
                w = Math.min,
                y = function () {
                  return g.Date.now();
                };
              e.exports = function (e, t, s) {
                function r(t) {
                  var i = p,
                    s = f;
                  return (p = f = void 0), (C = t), (m = e.apply(s, i));
                }
                function o(e) {
                  return (C = e), (g = setTimeout(d, t)), T ? r(e) : m;
                }
                function l(e) {
                  var i = e - v;
                  return void 0 === v || i >= t || i < 0 || (S && e - C >= h);
                }
                function d() {
                  var e = y();
                  return l(e)
                    ? c(e)
                    : void (g = setTimeout(
                        d,
                        (function (e) {
                          var i = t - (e - v);
                          return S ? w(i, h - (e - C)) : i;
                        })(e)
                      ));
                }
                function c(e) {
                  return (g = void 0), E && p ? r(e) : ((p = f = void 0), m);
                }
                function u() {
                  var e = y(),
                    i = l(e);
                  if (((p = arguments), (f = this), (v = e), i)) {
                    if (void 0 === g) return o(v);
                    if (S) return (g = setTimeout(d, t)), r(v);
                  }
                  return void 0 === g && (g = setTimeout(d, t)), m;
                }
                var p,
                  f,
                  h,
                  m,
                  g,
                  v,
                  C = 0,
                  T = !1,
                  S = !1,
                  E = !0;
                if ("function" != typeof e) throw new TypeError(a);
                return (
                  (t = n(t) || 0),
                  i(s) &&
                    ((T = !!s.leading),
                    (h = (S = "maxWait" in s) ? b(n(s.maxWait) || 0, t) : h),
                    (E = "trailing" in s ? !!s.trailing : E)),
                  (u.cancel = function () {
                    void 0 !== g && clearTimeout(g),
                      (C = 0),
                      (p = v = f = g = void 0);
                  }),
                  (u.flush = function () {
                    return void 0 === g ? m : c(y());
                  }),
                  u
                );
              };
            }).call(
              t,
              (function () {
                return this;
              })()
            );
          },
          function (e, t) {
            "use strict";
            function i(e) {
              var t = void 0,
                s = void 0;
              for (t = 0; t < e.length; t += 1) {
                if ((s = e[t]).dataset && s.dataset.aos) return !0;
                if (s.children && i(s.children)) return !0;
              }
              return !1;
            }
            function s() {
              return (
                window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver
              );
            }
            function n(e) {
              e &&
                e.forEach(function (e) {
                  var t = Array.prototype.slice.call(e.addedNodes),
                    s = Array.prototype.slice.call(e.removedNodes);
                  if (i(t.concat(s))) return r();
                });
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = function () {};
            t.default = {
              isSupported: function () {
                return !!s();
              },
              ready: function (e, t) {
                var i = window.document,
                  a = new (s())(n);
                (r = t),
                  a.observe(i.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0,
                  });
              },
            };
          },
          function (e, t) {
            "use strict";
            function i() {
              return (
                navigator.userAgent || navigator.vendor || window.opera || ""
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = (function () {
                function e(e, t) {
                  for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    (s.enumerable = s.enumerable || !1),
                      (s.configurable = !0),
                      "value" in s && (s.writable = !0),
                      Object.defineProperty(e, s.key, s);
                  }
                }
                return function (t, i, s) {
                  return i && e(t.prototype, i), s && e(t, s), t;
                };
              })(),
              n =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
              r =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              a =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
              o =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              l = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                }
                return (
                  s(e, [
                    {
                      key: "phone",
                      value: function () {
                        var e = i();
                        return !(!n.test(e) && !r.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: "mobile",
                      value: function () {
                        var e = i();
                        return !(!a.test(e) && !o.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: "tablet",
                      value: function () {
                        return this.mobile() && !this.phone();
                      },
                    },
                  ]),
                  e
                );
              })();
            t.default = new l();
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.default = function (e, t) {
              var i = window.pageYOffset,
                s = window.innerHeight;
              e.forEach(function (e, n) {
                !(function (e, t, i) {
                  var s = e.node.getAttribute("data-aos-once");
                  t > e.position
                    ? e.node.classList.add("aos-animate")
                    : void 0 !== s &&
                      ("false" === s || (!i && "true" !== s)) &&
                      e.node.classList.remove("aos-animate");
                })(e, s + i, t);
              });
            };
          },
          function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(i(12));
            t.default = function (e, t) {
              return (
                e.forEach(function (e, i) {
                  e.node.classList.add("aos-init"),
                    (e.position = (0, s.default)(e.node, t.offset));
                }),
                e
              );
            };
          },
          function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(i(13));
            t.default = function (e, t) {
              var i = 0,
                n = 0,
                r = window.innerHeight,
                a = {
                  offset: e.getAttribute("data-aos-offset"),
                  anchor: e.getAttribute("data-aos-anchor"),
                  anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
                };
              switch (
                (a.offset && !isNaN(a.offset) && (n = parseInt(a.offset)),
                a.anchor &&
                  document.querySelectorAll(a.anchor) &&
                  (e = document.querySelectorAll(a.anchor)[0]),
                (i = (0, s.default)(e).top),
                a.anchorPlacement)
              ) {
                case "top-bottom":
                  break;
                case "center-bottom":
                  i += e.offsetHeight / 2;
                  break;
                case "bottom-bottom":
                  i += e.offsetHeight;
                  break;
                case "top-center":
                  i += r / 2;
                  break;
                case "bottom-center":
                  i += r / 2 + e.offsetHeight;
                  break;
                case "center-center":
                  i += r / 2 + e.offsetHeight / 2;
                  break;
                case "top-top":
                  i += r;
                  break;
                case "bottom-top":
                  i += e.offsetHeight + r;
                  break;
                case "center-top":
                  i += e.offsetHeight / 2 + r;
              }
              return (
                a.anchorPlacement || a.offset || isNaN(t) || (n = t), i + n
              );
            };
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.default = function (e) {
              for (
                var t = 0, i = 0;
                e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

              )
                (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                  (i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                  (e = e.offsetParent);
              return { top: i, left: t };
            };
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.default = function (e) {
              return (
                (e = e || document.querySelectorAll("[data-aos]")),
                Array.prototype.map.call(e, function (e) {
                  return { node: e };
                })
              );
            };
          },
        ]);
      },
    },
    t = {};
  function i(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var r = (t[s] = { exports: {} });
    return e[s].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return i.d(t, { a: t }), t;
  }),
    (i.d = (e, t) => {
      for (var s in t)
        i.o(t, s) &&
          !i.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      const e = {
          windowEl: window,
          documentEl: document,
          htmlEl: document.documentElement,
          bodyEl: document.body,
        },
        t = () => {
          var t;
          const i =
              null === (t = document) || void 0 === t
                ? void 0
                : t.querySelectorAll(".fixed-block"),
            s = (document.body, parseInt(e.bodyEl.dataset.position, 10));
          i.forEach((e) => {
            e.style.paddingRight = "0px";
          }),
            (e.bodyEl.style.paddingRight = "0px"),
            (e.bodyEl.style.top = "auto"),
            e.bodyEl.classList.remove("dis-scroll"),
            window.scroll({ top: s, left: 0 }),
            e.bodyEl.removeAttribute("data-position"),
            (e.htmlEl.style.scrollBehavior = "smooth");
        };
      function s(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function n(e = {}, t = {}) {
        Object.keys(t).forEach((i) => {
          void 0 === e[i]
            ? (e[i] = t[i])
            : s(t[i]) &&
              s(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              n(e[i], t[i]);
        });
      }
      !(function () {
        var i, s, n, r;
        const a =
            null === (i = document) || void 0 === i
              ? void 0
              : i.querySelector("[data-burger]"),
          o =
            null === (s = document) || void 0 === s
              ? void 0
              : s.querySelector("[data-menu]"),
          l =
            null === (n = document) || void 0 === n
              ? void 0
              : n.querySelectorAll("[data-menu-item]"),
          d =
            null === (r = document) || void 0 === r
              ? void 0
              : r.querySelector("[data-menu-overlay]");
        null == a ||
          a.addEventListener("click", (i) => {
            null == a || a.classList.toggle("burger--active"),
              null == o || o.classList.toggle("menu--active"),
              null != o && o.classList.contains("menu--active")
                ? (null == a || a.setAttribute("aria-expanded", "true"),
                  null == a || a.setAttribute("aria-label", "Закрыть меню"),
                  (() => {
                    var t;
                    const i =
                        null === (t = document) || void 0 === t
                          ? void 0
                          : t.querySelectorAll(".fixed-block"),
                      s = window.scrollY,
                      n = window.innerWidth - e.bodyEl.offsetWidth + "px";
                    (e.htmlEl.style.scrollBehavior = "none"),
                      i.forEach((e) => {
                        e.style.paddingRight = n;
                      }),
                      (e.bodyEl.style.paddingRight = n),
                      e.bodyEl.classList.add("dis-scroll"),
                      (e.bodyEl.dataset.position = s),
                      (e.bodyEl.style.top = `-${s}px`);
                  })())
                : (null == a || a.setAttribute("aria-expanded", "false"),
                  null == a || a.setAttribute("aria-label", "Открыть меню"),
                  t());
          }),
          null == d ||
            d.addEventListener("click", () => {
              null == a || a.setAttribute("aria-expanded", "false"),
                null == a || a.setAttribute("aria-label", "Открыть меню"),
                a.classList.remove("burger--active"),
                o.classList.remove("menu--active"),
                t();
            }),
          null == l ||
            l.forEach((e) => {
              e.addEventListener("click", () => {
                null == a || a.setAttribute("aria-expanded", "false"),
                  null == a || a.setAttribute("aria-label", "Открыть меню"),
                  a.classList.remove("burger--active"),
                  o.classList.remove("menu--active"),
                  t();
              });
            });
      })();
      const r = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function a() {
        const e = "undefined" != typeof document ? document : {};
        return n(e, r), e;
      }
      const o = {
        document: r,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function l() {
        const e = "undefined" != typeof window ? window : {};
        return n(e, o), e;
      }
      class d extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function c(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...c(e)) : t.push(e);
          }),
          t
        );
      }
      function u(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function p(e, t) {
        const i = l(),
          s = a();
        let n = [];
        if (!t && e instanceof d) return e;
        if (!e) return new d(n);
        if ("string" == typeof e) {
          const i = e.trim();
          if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
            let e = "div";
            0 === i.indexOf("<li") && (e = "ul"),
              0 === i.indexOf("<tr") && (e = "tbody"),
              (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
              0 === i.indexOf("<tbody") && (e = "table"),
              0 === i.indexOf("<option") && (e = "select");
            const t = s.createElement(e);
            t.innerHTML = i;
            for (let e = 0; e < t.childNodes.length; e += 1)
              n.push(t.childNodes[e]);
          } else
            n = (function (e, t) {
              if ("string" != typeof e) return [e];
              const i = [],
                s = t.querySelectorAll(e);
              for (let e = 0; e < s.length; e += 1) i.push(s[e]);
              return i;
            })(e.trim(), t || s);
        } else if (e.nodeType || e === i || e === s) n.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof d) return e;
          n = e;
        }
        return new d(
          (function (e) {
            const t = [];
            for (let i = 0; i < e.length; i += 1)
              -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t;
          })(n)
        );
      }
      p.fn = d.prototype;
      const f = "resize scroll".split(" ");
      function h(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              f.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : p(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      h("click"),
        h("blur"),
        h("focus"),
        h("focusin"),
        h("focusout"),
        h("keyup"),
        h("keydown"),
        h("keypress"),
        h("submit"),
        h("change"),
        h("mousedown"),
        h("mousemove"),
        h("mouseup"),
        h("mouseenter"),
        h("mouseleave"),
        h("mouseout"),
        h("mouseover"),
        h("touchstart"),
        h("touchend"),
        h("touchmove"),
        h("resize"),
        h("scroll");
      const m = {
        addClass: function (...e) {
          const t = c(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = c(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = c(e.map((e) => e.split(" ")));
          return (
            u(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = c(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let i = 0; i < this.length; i += 1)
            if (2 === arguments.length) this[i].setAttribute(e, t);
            else
              for (const t in e)
                (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, i, s, n] = e;
          function r(e) {
            const t = e.target;
            if (!t) return;
            const n = e.target.dom7EventData || [];
            if ((n.indexOf(e) < 0 && n.unshift(e), p(t).is(i))) s.apply(t, n);
            else {
              const e = p(t).parents();
              for (let t = 0; t < e.length; t += 1)
                p(e[t]).is(i) && s.apply(e[t], n);
            }
          }
          function a(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
          }
          "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
            n || (n = !1);
          const o = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (i)
              for (l = 0; l < o.length; l += 1) {
                const e = o[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: s,
                    proxyListener: r,
                  }),
                  t.addEventListener(e, r, n);
              }
            else
              for (l = 0; l < o.length; l += 1) {
                const e = o[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: s, proxyListener: a }),
                  t.addEventListener(e, a, n);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, i, s, n] = e;
          "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
            n || (n = !1);
          const r = t.split(" ");
          for (let e = 0; e < r.length; e += 1) {
            const t = r[e];
            for (let e = 0; e < this.length; e += 1) {
              const r = this[e];
              let a;
              if (
                (!i && r.dom7Listeners
                  ? (a = r.dom7Listeners[t])
                  : i && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]),
                a && a.length)
              )
                for (let e = a.length - 1; e >= 0; e -= 1) {
                  const i = a[e];
                  (s && i.listener === s) ||
                  (s &&
                    i.listener &&
                    i.listener.dom7proxy &&
                    i.listener.dom7proxy === s)
                    ? (r.removeEventListener(t, i.proxyListener, n),
                      a.splice(e, 1))
                    : s ||
                      (r.removeEventListener(t, i.proxyListener, n),
                      a.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = l(),
            i = e[0].split(" "),
            s = e[1];
          for (let n = 0; n < i.length; n += 1) {
            const r = i[n];
            for (let i = 0; i < this.length; i += 1) {
              const n = this[i];
              if (t.CustomEvent) {
                const i = new t.CustomEvent(r, {
                  detail: s,
                  bubbles: !0,
                  cancelable: !0,
                });
                (n.dom7EventData = e.filter((e, t) => t > 0)),
                  n.dispatchEvent(i),
                  (n.dom7EventData = []),
                  delete n.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function i(s) {
                s.target === this &&
                  (e.call(this, s), t.off("transitionend", i));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = l();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = l(),
              t = a(),
              i = this[0],
              s = i.getBoundingClientRect(),
              n = t.body,
              r = i.clientTop || n.clientTop || 0,
              o = i.clientLeft || n.clientLeft || 0,
              d = i === e ? e.scrollY : i.scrollTop,
              c = i === e ? e.scrollX : i.scrollLeft;
            return { top: s.top + d - r, left: s.left + c - o };
          }
          return null;
        },
        css: function (e, t) {
          const i = l();
          let s;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (s = 0; s < this.length; s += 1)
                for (const t in e) this[s].style[t] = e[t];
              return this;
            }
            if (this[0])
              return i.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, i) => {
                e.apply(t, [t, i]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = l(),
            i = a(),
            s = this[0];
          let n, r;
          if (!s || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (s.matches) return s.matches(e);
            if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
            if (s.msMatchesSelector) return s.msMatchesSelector(e);
            for (n = p(e), r = 0; r < n.length; r += 1)
              if (n[r] === s) return !0;
            return !1;
          }
          if (e === i) return s === i;
          if (e === t) return s === t;
          if (e.nodeType || e instanceof d) {
            for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
              if (n[r] === s) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return p([]);
          if (e < 0) {
            const i = t + e;
            return p(i < 0 ? [] : [this[i]]);
          }
          return p([this[e]]);
        },
        append: function (...e) {
          let t;
          const i = a();
          for (let s = 0; s < e.length; s += 1) {
            t = e[s];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const s = i.createElement("div");
                for (s.innerHTML = t; s.firstChild; )
                  this[e].appendChild(s.firstChild);
              } else if (t instanceof d)
                for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = a();
          let i, s;
          for (i = 0; i < this.length; i += 1)
            if ("string" == typeof e) {
              const n = t.createElement("div");
              for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1)
                this[i].insertBefore(n.childNodes[s], this[i].childNodes[0]);
            } else if (e instanceof d)
              for (s = 0; s < e.length; s += 1)
                this[i].insertBefore(e[s], this[i].childNodes[0]);
            else this[i].insertBefore(e, this[i].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                p(this[0].nextElementSibling).is(e)
                ? p([this[0].nextElementSibling])
                : p([])
              : this[0].nextElementSibling
              ? p([this[0].nextElementSibling])
              : p([])
            : p([]);
        },
        nextAll: function (e) {
          const t = [];
          let i = this[0];
          if (!i) return p([]);
          for (; i.nextElementSibling; ) {
            const s = i.nextElementSibling;
            e ? p(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return p(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && p(t.previousElementSibling).is(e)
                ? p([t.previousElementSibling])
                : p([])
              : t.previousElementSibling
              ? p([t.previousElementSibling])
              : p([]);
          }
          return p([]);
        },
        prevAll: function (e) {
          const t = [];
          let i = this[0];
          if (!i) return p([]);
          for (; i.previousElementSibling; ) {
            const s = i.previousElementSibling;
            e ? p(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return p(t);
        },
        parent: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1)
            null !== this[i].parentNode &&
              (e
                ? p(this[i].parentNode).is(e) && t.push(this[i].parentNode)
                : t.push(this[i].parentNode));
          return p(t);
        },
        parents: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            let s = this[i].parentNode;
            for (; s; )
              e ? p(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
          }
          return p(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? p([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i].querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) t.push(s[e]);
          }
          return p(t);
        },
        children: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i].children;
            for (let i = 0; i < s.length; i += 1)
              (e && !p(s[i]).is(e)) || t.push(s[i]);
          }
          return p(t);
        },
        filter: function (e) {
          return p(u(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(m).forEach((e) => {
        Object.defineProperty(p.fn, e, { value: m[e], writable: !0 });
      });
      const g = p;
      function v(e, t = 0) {
        return setTimeout(e, t);
      }
      function b() {
        return Date.now();
      }
      function w(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function y(...e) {
        const t = Object(e[0]),
          i = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < e.length; n += 1) {
          const r = e[n];
          if (
            null != r &&
            ((s = r),
            !("undefined" != typeof window && void 0 !== window.HTMLElement
              ? s instanceof HTMLElement
              : s && (1 === s.nodeType || 11 === s.nodeType)))
          ) {
            const e = Object.keys(Object(r)).filter((e) => i.indexOf(e) < 0);
            for (let i = 0, s = e.length; i < s; i += 1) {
              const s = e[i],
                n = Object.getOwnPropertyDescriptor(r, s);
              void 0 !== n &&
                n.enumerable &&
                (w(t[s]) && w(r[s])
                  ? r[s].__swiper__
                    ? (t[s] = r[s])
                    : y(t[s], r[s])
                  : !w(t[s]) && w(r[s])
                  ? ((t[s] = {}),
                    r[s].__swiper__ ? (t[s] = r[s]) : y(t[s], r[s]))
                  : (t[s] = r[s]));
            }
          }
        }
        var s;
        return t;
      }
      function C(e, t, i) {
        e.style.setProperty(t, i);
      }
      function T({ swiper: e, targetPosition: t, side: i }) {
        const s = l(),
          n = -e.translate;
        let r,
          a = null;
        const o = e.params.speed;
        (e.wrapperEl.style.scrollSnapType = "none"),
          s.cancelAnimationFrame(e.cssModeFrameID);
        const d = t > n ? "next" : "prev",
          c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
          u = () => {
            (r = new Date().getTime()), null === a && (a = r);
            const l = Math.max(Math.min((r - a) / o, 1), 0),
              d = 0.5 - Math.cos(l * Math.PI) / 2;
            let p = n + d * (t - n);
            if ((c(p, t) && (p = t), e.wrapperEl.scrollTo({ [i]: p }), c(p, t)))
              return (
                (e.wrapperEl.style.overflow = "hidden"),
                (e.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (e.wrapperEl.style.overflow = ""),
                    e.wrapperEl.scrollTo({ [i]: p });
                }),
                void s.cancelAnimationFrame(e.cssModeFrameID)
              );
            e.cssModeFrameID = s.requestAnimationFrame(u);
          };
        u();
      }
      let S, E, x;
      function k() {
        return (
          S ||
            (S = (function () {
              const e = l(),
                t = a();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const i = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, i);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          S
        );
      }
      const M = {
          on(e, t, i) {
            const s = this;
            if ("function" != typeof t) return s;
            const n = i ? "unshift" : "push";
            return (
              e.split(" ").forEach((e) => {
                s.eventsListeners[e] || (s.eventsListeners[e] = []),
                  s.eventsListeners[e][n](t);
              }),
              s
            );
          },
          once(e, t, i) {
            const s = this;
            if ("function" != typeof t) return s;
            function n(...i) {
              s.off(e, n),
                n.__emitterProxy && delete n.__emitterProxy,
                t.apply(s, i);
            }
            return (n.__emitterProxy = t), s.on(e, n, i);
          },
          onAny(e, t) {
            const i = this;
            if ("function" != typeof e) return i;
            const s = t ? "unshift" : "push";
            return (
              i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e),
              i
            );
          },
          offAny(e) {
            const t = this;
            if (!t.eventsAnyListeners) return t;
            const i = t.eventsAnyListeners.indexOf(e);
            return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
          },
          off(e, t) {
            const i = this;
            return i.eventsListeners
              ? (e.split(" ").forEach((e) => {
                  void 0 === t
                    ? (i.eventsListeners[e] = [])
                    : i.eventsListeners[e] &&
                      i.eventsListeners[e].forEach((s, n) => {
                        (s === t ||
                          (s.__emitterProxy && s.__emitterProxy === t)) &&
                          i.eventsListeners[e].splice(n, 1);
                      });
                }),
                i)
              : i;
          },
          emit(...e) {
            const t = this;
            if (!t.eventsListeners) return t;
            let i, s, n;
            return (
              "string" == typeof e[0] || Array.isArray(e[0])
                ? ((i = e[0]), (s = e.slice(1, e.length)), (n = t))
                : ((i = e[0].events), (s = e[0].data), (n = e[0].context || t)),
              s.unshift(n),
              (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
                t.eventsAnyListeners &&
                  t.eventsAnyListeners.length &&
                  t.eventsAnyListeners.forEach((t) => {
                    t.apply(n, [e, ...s]);
                  }),
                  t.eventsListeners &&
                    t.eventsListeners[e] &&
                    t.eventsListeners[e].forEach((e) => {
                      e.apply(n, s);
                    });
              }),
              t
            );
          },
        },
        O = {
          updateSize: function () {
            const e = this;
            let t, i;
            const s = e.$el;
            (t =
              void 0 !== e.params.width && null !== e.params.width
                ? e.params.width
                : s[0].clientWidth),
              (i =
                void 0 !== e.params.height && null !== e.params.height
                  ? e.params.height
                  : s[0].clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === i && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(s.css("padding-left") || 0, 10) -
                  parseInt(s.css("padding-right") || 0, 10)),
                (i =
                  i -
                  parseInt(s.css("padding-top") || 0, 10) -
                  parseInt(s.css("padding-bottom") || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(i) && (i = 0),
                Object.assign(e, {
                  width: t,
                  height: i,
                  size: e.isHorizontal() ? t : i,
                }));
          },
          updateSlides: function () {
            const e = this;
            function t(t) {
              return e.isHorizontal()
                ? t
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[t];
            }
            function i(e, i) {
              return parseFloat(e.getPropertyValue(t(i)) || 0);
            }
            const s = e.params,
              { $wrapperEl: n, size: r, rtlTranslate: a, wrongRTL: o } = e,
              l = e.virtual && s.virtual.enabled,
              d = l ? e.virtual.slides.length : e.slides.length,
              c = n.children(`.${e.params.slideClass}`),
              u = l ? e.virtual.slides.length : c.length;
            let p = [];
            const f = [],
              h = [];
            let m = s.slidesOffsetBefore;
            "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
            let g = s.slidesOffsetAfter;
            "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
            const v = e.snapGrid.length,
              b = e.slidesGrid.length;
            let w = s.spaceBetween,
              y = -m,
              T = 0,
              S = 0;
            if (void 0 === r) return;
            "string" == typeof w &&
              w.indexOf("%") >= 0 &&
              (w = (parseFloat(w.replace("%", "")) / 100) * r),
              (e.virtualSize = -w),
              a
                ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              s.centeredSlides &&
                s.cssMode &&
                (C(e.wrapperEl, "--swiper-centered-offset-before", ""),
                C(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const E = s.grid && s.grid.rows > 1 && e.grid;
            let x;
            E && e.grid.initSlides(u);
            const k =
              "auto" === s.slidesPerView &&
              s.breakpoints &&
              Object.keys(s.breakpoints).filter(
                (e) => void 0 !== s.breakpoints[e].slidesPerView
              ).length > 0;
            for (let n = 0; n < u; n += 1) {
              x = 0;
              const a = c.eq(n);
              if (
                (E && e.grid.updateSlide(n, a, u, t),
                "none" !== a.css("display"))
              ) {
                if ("auto" === s.slidesPerView) {
                  k && (c[n].style[t("width")] = "");
                  const r = getComputedStyle(a[0]),
                    o = a[0].style.transform,
                    l = a[0].style.webkitTransform;
                  if (
                    (o && (a[0].style.transform = "none"),
                    l && (a[0].style.webkitTransform = "none"),
                    s.roundLengths)
                  )
                    x = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                  else {
                    const e = i(r, "width"),
                      t = i(r, "padding-left"),
                      s = i(r, "padding-right"),
                      n = i(r, "margin-left"),
                      o = i(r, "margin-right"),
                      l = r.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) x = e + n + o;
                    else {
                      const { clientWidth: i, offsetWidth: r } = a[0];
                      x = e + t + s + n + o + (r - i);
                    }
                  }
                  o && (a[0].style.transform = o),
                    l && (a[0].style.webkitTransform = l),
                    s.roundLengths && (x = Math.floor(x));
                } else
                  (x = (r - (s.slidesPerView - 1) * w) / s.slidesPerView),
                    s.roundLengths && (x = Math.floor(x)),
                    c[n] && (c[n].style[t("width")] = `${x}px`);
                c[n] && (c[n].swiperSlideSize = x),
                  h.push(x),
                  s.centeredSlides
                    ? ((y = y + x / 2 + T / 2 + w),
                      0 === T && 0 !== n && (y = y - r / 2 - w),
                      0 === n && (y = y - r / 2 - w),
                      Math.abs(y) < 0.001 && (y = 0),
                      s.roundLengths && (y = Math.floor(y)),
                      S % s.slidesPerGroup == 0 && p.push(y),
                      f.push(y))
                    : (s.roundLengths && (y = Math.floor(y)),
                      (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                        e.params.slidesPerGroup ==
                        0 && p.push(y),
                      f.push(y),
                      (y = y + x + w)),
                  (e.virtualSize += x + w),
                  (T = x),
                  (S += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, r) + g),
              a &&
                o &&
                ("slide" === s.effect || "coverflow" === s.effect) &&
                n.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
              s.setWrapperSize &&
                n.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
              E && e.grid.updateWrapperSize(x, p, t),
              !s.centeredSlides)
            ) {
              const t = [];
              for (let i = 0; i < p.length; i += 1) {
                let n = p[i];
                s.roundLengths && (n = Math.floor(n)),
                  p[i] <= e.virtualSize - r && t.push(n);
              }
              (p = t),
                Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) >
                  1 && p.push(e.virtualSize - r);
            }
            if ((0 === p.length && (p = [0]), 0 !== s.spaceBetween)) {
              const i = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
              c.filter((e, t) => !s.cssMode || t !== c.length - 1).css({
                [i]: `${w}px`,
              });
            }
            if (s.centeredSlides && s.centeredSlidesBounds) {
              let e = 0;
              h.forEach((t) => {
                e += t + (s.spaceBetween ? s.spaceBetween : 0);
              }),
                (e -= s.spaceBetween);
              const t = e - r;
              p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
            }
            if (s.centerInsufficientSlides) {
              let e = 0;
              if (
                (h.forEach((t) => {
                  e += t + (s.spaceBetween ? s.spaceBetween : 0);
                }),
                (e -= s.spaceBetween),
                e < r)
              ) {
                const t = (r - e) / 2;
                p.forEach((e, i) => {
                  p[i] = e - t;
                }),
                  f.forEach((e, i) => {
                    f[i] = e + t;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: c,
                snapGrid: p,
                slidesGrid: f,
                slidesSizesGrid: h,
              }),
              s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
            ) {
              C(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
                C(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  e.size / 2 - h[h.length - 1] / 2 + "px"
                );
              const t = -e.snapGrid[0],
                i = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map((e) => e + t)),
                (e.slidesGrid = e.slidesGrid.map((e) => e + i));
            }
            u !== d && e.emit("slidesLengthChange"),
              p.length !== v &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              f.length !== b && e.emit("slidesGridLengthChange"),
              s.watchSlidesProgress && e.updateSlidesOffset();
          },
          updateAutoHeight: function (e) {
            const t = this,
              i = [],
              s = t.virtual && t.params.virtual.enabled;
            let n,
              r = 0;
            "number" == typeof e
              ? t.setTransition(e)
              : !0 === e && t.setTransition(t.params.speed);
            const a = (e) =>
              s
                ? t.slides.filter(
                    (t) =>
                      parseInt(
                        t.getAttribute("data-swiper-slide-index"),
                        10
                      ) === e
                  )[0]
                : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)
                t.visibleSlides.each((e) => {
                  i.push(e);
                });
              else
                for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                  const e = t.activeIndex + n;
                  if (e > t.slides.length && !s) break;
                  i.push(a(e));
                }
            else i.push(a(t.activeIndex));
            for (n = 0; n < i.length; n += 1)
              if (void 0 !== i[n]) {
                const e = i[n].offsetHeight;
                r = e > r ? e : r;
              }
            (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
          },
          updateSlidesOffset: function () {
            const e = this,
              t = e.slides;
            for (let i = 0; i < t.length; i += 1)
              t[i].swiperSlideOffset = e.isHorizontal()
                ? t[i].offsetLeft
                : t[i].offsetTop;
          },
          updateSlidesProgress: function (e = (this && this.translate) || 0) {
            const t = this,
              i = t.params,
              { slides: s, rtlTranslate: n, snapGrid: r } = t;
            if (0 === s.length) return;
            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
            let a = -e;
            n && (a = e),
              s.removeClass(i.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (let e = 0; e < s.length; e += 1) {
              const o = s[e];
              let l = o.swiperSlideOffset;
              i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
              const d =
                  (a + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                  (o.swiperSlideSize + i.spaceBetween),
                c =
                  (a - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                  (o.swiperSlideSize + i.spaceBetween),
                u = -(a - l),
                p = u + t.slidesSizesGrid[e];
              ((u >= 0 && u < t.size - 1) ||
                (p > 1 && p <= t.size) ||
                (u <= 0 && p >= t.size)) &&
                (t.visibleSlides.push(o),
                t.visibleSlidesIndexes.push(e),
                s.eq(e).addClass(i.slideVisibleClass)),
                (o.progress = n ? -d : d),
                (o.originalProgress = n ? -c : c);
            }
            t.visibleSlides = g(t.visibleSlides);
          },
          updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
              const i = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * i) || 0;
            }
            const i = t.params,
              s = t.maxTranslate() - t.minTranslate();
            let { progress: n, isBeginning: r, isEnd: a } = t;
            const o = r,
              l = a;
            0 === s
              ? ((n = 0), (r = !0), (a = !0))
              : ((n = (e - t.minTranslate()) / s), (r = n <= 0), (a = n >= 1)),
              Object.assign(t, { progress: n, isBeginning: r, isEnd: a }),
              (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
                t.updateSlidesProgress(e),
              r && !o && t.emit("reachBeginning toEdge"),
              a && !l && t.emit("reachEnd toEdge"),
              ((o && !r) || (l && !a)) && t.emit("fromEdge"),
              t.emit("progress", n);
          },
          updateSlidesClasses: function () {
            const e = this,
              {
                slides: t,
                params: i,
                $wrapperEl: s,
                activeIndex: n,
                realIndex: r,
              } = e,
              a = e.virtual && i.virtual.enabled;
            let o;
            t.removeClass(
              `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
            ),
              (o = a
                ? e.$wrapperEl.find(
                    `.${i.slideClass}[data-swiper-slide-index="${n}"]`
                  )
                : t.eq(n)),
              o.addClass(i.slideActiveClass),
              i.loop &&
                (o.hasClass(i.slideDuplicateClass)
                  ? s
                      .children(
                        `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                      )
                      .addClass(i.slideDuplicateActiveClass)
                  : s
                      .children(
                        `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                      )
                      .addClass(i.slideDuplicateActiveClass));
            let l = o
              .nextAll(`.${i.slideClass}`)
              .eq(0)
              .addClass(i.slideNextClass);
            i.loop &&
              0 === l.length &&
              ((l = t.eq(0)), l.addClass(i.slideNextClass));
            let d = o
              .prevAll(`.${i.slideClass}`)
              .eq(0)
              .addClass(i.slidePrevClass);
            i.loop &&
              0 === d.length &&
              ((d = t.eq(-1)), d.addClass(i.slidePrevClass)),
              i.loop &&
                (l.hasClass(i.slideDuplicateClass)
                  ? s
                      .children(
                        `.${i.slideClass}:not(.${
                          i.slideDuplicateClass
                        })[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(i.slideDuplicateNextClass)
                  : s
                      .children(
                        `.${i.slideClass}.${
                          i.slideDuplicateClass
                        }[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(i.slideDuplicateNextClass),
                d.hasClass(i.slideDuplicateClass)
                  ? s
                      .children(
                        `.${i.slideClass}:not(.${
                          i.slideDuplicateClass
                        })[data-swiper-slide-index="${d.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(i.slideDuplicatePrevClass)
                  : s
                      .children(
                        `.${i.slideClass}.${
                          i.slideDuplicateClass
                        }[data-swiper-slide-index="${d.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(i.slideDuplicatePrevClass)),
              e.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            const t = this,
              i = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: s,
                snapGrid: n,
                params: r,
                activeIndex: a,
                realIndex: o,
                snapIndex: l,
              } = t;
            let d,
              c = e;
            if (void 0 === c) {
              for (let e = 0; e < s.length; e += 1)
                void 0 !== s[e + 1]
                  ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
                    ? (c = e)
                    : i >= s[e] && i < s[e + 1] && (c = e + 1)
                  : i >= s[e] && (c = e);
              r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (n.indexOf(i) >= 0) d = n.indexOf(i);
            else {
              const e = Math.min(r.slidesPerGroupSkip, c);
              d = e + Math.floor((c - e) / r.slidesPerGroup);
            }
            if ((d >= n.length && (d = n.length - 1), c === a))
              return void (
                d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
              );
            const u = parseInt(
              t.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            Object.assign(t, {
              snapIndex: d,
              realIndex: u,
              previousIndex: a,
              activeIndex: c,
            }),
              t.emit("activeIndexChange"),
              t.emit("snapIndexChange"),
              o !== u && t.emit("realIndexChange"),
              (t.initialized || t.params.runCallbacksOnInit) &&
                t.emit("slideChange");
          },
          updateClickedSlide: function (e) {
            const t = this,
              i = t.params,
              s = g(e).closest(`.${i.slideClass}`)[0];
            let n,
              r = !1;
            if (s)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === s) {
                  (r = !0), (n = e);
                  break;
                }
            if (!s || !r)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = s),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                    g(s).attr("data-swiper-slide-index"),
                    10
                  ))
                : (t.clickedIndex = n),
              i.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        };
      function $({ swiper: e, runCallbacks: t, direction: i, step: s }) {
        const { activeIndex: n, previousIndex: r } = e;
        let a = i;
        if (
          (a || (a = n > r ? "next" : n < r ? "prev" : "reset"),
          e.emit(`transition${s}`),
          t && n !== r)
        ) {
          if ("reset" === a) return void e.emit(`slideResetTransition${s}`);
          e.emit(`slideChangeTransition${s}`),
            "next" === a
              ? e.emit(`slideNextTransition${s}`)
              : e.emit(`slidePrevTransition${s}`);
        }
      }
      const L = {
          slideTo: function (e = 0, t = this.params.speed, i = !0, s, n) {
            if ("number" != typeof e && "string" != typeof e)
              throw new Error(
                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
              );
            if ("string" == typeof e) {
              const t = parseInt(e, 10);
              if (!isFinite(t))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                );
              e = t;
            }
            const r = this;
            let a = e;
            a < 0 && (a = 0);
            const {
              params: o,
              snapGrid: l,
              slidesGrid: d,
              previousIndex: c,
              activeIndex: u,
              rtlTranslate: p,
              wrapperEl: f,
              enabled: h,
            } = r;
            if (
              (r.animating && o.preventInteractionOnTransition) ||
              (!h && !s && !n)
            )
              return !1;
            const m = Math.min(r.params.slidesPerGroupSkip, a);
            let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
            g >= l.length && (g = l.length - 1),
              (u || o.initialSlide || 0) === (c || 0) &&
                i &&
                r.emit("beforeSlideChangeStart");
            const v = -l[g];
            if ((r.updateProgress(v), o.normalizeSlideIndex))
              for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * v),
                  i = Math.floor(100 * d[e]),
                  s = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1]
                  ? t >= i && t < s - (s - i) / 2
                    ? (a = e)
                    : t >= i && t < s && (a = e + 1)
                  : t >= i && (a = e);
              }
            if (r.initialized && a !== u) {
              if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
                return !1;
              if (
                !r.allowSlidePrev &&
                v > r.translate &&
                v > r.maxTranslate() &&
                (u || 0) !== a
              )
                return !1;
            }
            let b;
            if (
              ((b = a > u ? "next" : a < u ? "prev" : "reset"),
              (p && -v === r.translate) || (!p && v === r.translate))
            )
              return (
                r.updateActiveIndex(a),
                o.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== o.effect && r.setTranslate(v),
                "reset" !== b &&
                  (r.transitionStart(i, b), r.transitionEnd(i, b)),
                !1
              );
            if (o.cssMode) {
              const e = r.isHorizontal(),
                i = p ? v : -v;
              if (0 === t) {
                const t = r.virtual && r.params.virtual.enabled;
                t &&
                  ((r.wrapperEl.style.scrollSnapType = "none"),
                  (r._immediateVirtual = !0)),
                  (f[e ? "scrollLeft" : "scrollTop"] = i),
                  t &&
                    requestAnimationFrame(() => {
                      (r.wrapperEl.style.scrollSnapType = ""),
                        (r._swiperImmediateVirtual = !1);
                    });
              } else {
                if (!r.support.smoothScroll)
                  return (
                    T({
                      swiper: r,
                      targetPosition: i,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                f.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
              }
              return !0;
            }
            return (
              r.setTransition(t),
              r.setTranslate(v),
              r.updateActiveIndex(a),
              r.updateSlidesClasses(),
              r.emit("beforeTransitionStart", t, s),
              r.transitionStart(i, b),
              0 === t
                ? r.transitionEnd(i, b)
                : r.animating ||
                  ((r.animating = !0),
                  r.onSlideToWrapperTransitionEnd ||
                    (r.onSlideToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        (r.onSlideToWrapperTransitionEnd = null),
                        delete r.onSlideToWrapperTransitionEnd,
                        r.transitionEnd(i, b));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  )),
              !0
            );
          },
          slideToLoop: function (e = 0, t = this.params.speed, i = !0, s) {
            const n = this;
            let r = e;
            return (
              n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, i, s)
            );
          },
          slideNext: function (e = this.params.speed, t = !0, i) {
            const s = this,
              { animating: n, enabled: r, params: a } = s;
            if (!r) return s;
            let o = a.slidesPerGroup;
            "auto" === a.slidesPerView &&
              1 === a.slidesPerGroup &&
              a.slidesPerGroupAuto &&
              (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
            const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : o;
            if (a.loop) {
              if (n && a.loopPreventsSlide) return !1;
              s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
            }
            return a.rewind && s.isEnd
              ? s.slideTo(0, e, t, i)
              : s.slideTo(s.activeIndex + l, e, t, i);
          },
          slidePrev: function (e = this.params.speed, t = !0, i) {
            const s = this,
              {
                params: n,
                animating: r,
                snapGrid: a,
                slidesGrid: o,
                rtlTranslate: l,
                enabled: d,
              } = s;
            if (!d) return s;
            if (n.loop) {
              if (r && n.loopPreventsSlide) return !1;
              s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
            }
            function c(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const u = c(l ? s.translate : -s.translate),
              p = a.map((e) => c(e));
            let f = a[p.indexOf(u) - 1];
            if (void 0 === f && n.cssMode) {
              let e;
              a.forEach((t, i) => {
                u >= t && (e = i);
              }),
                void 0 !== e && (f = a[e > 0 ? e - 1 : e]);
            }
            let h = 0;
            return (
              void 0 !== f &&
                ((h = o.indexOf(f)),
                h < 0 && (h = s.activeIndex - 1),
                "auto" === n.slidesPerView &&
                  1 === n.slidesPerGroup &&
                  n.slidesPerGroupAuto &&
                  ((h = h - s.slidesPerViewDynamic("previous", !0) + 1),
                  (h = Math.max(h, 0)))),
              n.rewind && s.isBeginning
                ? s.slideTo(s.slides.length - 1, e, t, i)
                : s.slideTo(h, e, t, i)
            );
          },
          slideReset: function (e = this.params.speed, t = !0, i) {
            return this.slideTo(this.activeIndex, e, t, i);
          },
          slideToClosest: function (e = this.params.speed, t = !0, i, s = 0.5) {
            const n = this;
            let r = n.activeIndex;
            const a = Math.min(n.params.slidesPerGroupSkip, r),
              o = a + Math.floor((r - a) / n.params.slidesPerGroup),
              l = n.rtlTranslate ? n.translate : -n.translate;
            if (l >= n.snapGrid[o]) {
              const e = n.snapGrid[o];
              l - e > (n.snapGrid[o + 1] - e) * s &&
                (r += n.params.slidesPerGroup);
            } else {
              const e = n.snapGrid[o - 1];
              l - e <= (n.snapGrid[o] - e) * s &&
                (r -= n.params.slidesPerGroup);
            }
            return (
              (r = Math.max(r, 0)),
              (r = Math.min(r, n.slidesGrid.length - 1)),
              n.slideTo(r, e, t, i)
            );
          },
          slideToClickedSlide: function () {
            const e = this,
              { params: t, $wrapperEl: i } = e,
              s =
                "auto" === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView;
            let n,
              r = e.clickedIndex;
            if (t.loop) {
              if (e.animating) return;
              (n = parseInt(
                g(e.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
                t.centeredSlides
                  ? r < e.loopedSlides - s / 2 ||
                    r > e.slides.length - e.loopedSlides + s / 2
                    ? (e.loopFix(),
                      (r = i
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      v(() => {
                        e.slideTo(r);
                      }))
                    : e.slideTo(r)
                  : r > e.slides.length - s
                  ? (e.loopFix(),
                    (r = i
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    v(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r);
            } else e.slideTo(r);
          },
        },
        P = {
          loopCreate: function () {
            const e = this,
              t = a(),
              { params: i, $wrapperEl: s } = e,
              n = s.children().length > 0 ? g(s.children()[0].parentNode) : s;
            n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
            let r = n.children(`.${i.slideClass}`);
            if (i.loopFillGroupWithBlank) {
              const e = i.slidesPerGroup - (r.length % i.slidesPerGroup);
              if (e !== i.slidesPerGroup) {
                for (let s = 0; s < e; s += 1) {
                  const e = g(t.createElement("div")).addClass(
                    `${i.slideClass} ${i.slideBlankClass}`
                  );
                  n.append(e);
                }
                r = n.children(`.${i.slideClass}`);
              }
            }
            "auto" !== i.slidesPerView ||
              i.loopedSlides ||
              (i.loopedSlides = r.length),
              (e.loopedSlides = Math.ceil(
                parseFloat(i.loopedSlides || i.slidesPerView, 10)
              )),
              (e.loopedSlides += i.loopAdditionalSlides),
              e.loopedSlides > r.length && (e.loopedSlides = r.length);
            const o = [],
              l = [];
            r.each((t, i) => {
              const s = g(t);
              i < e.loopedSlides && l.push(t),
                i < r.length && i >= r.length - e.loopedSlides && o.push(t),
                s.attr("data-swiper-slide-index", i);
            });
            for (let e = 0; e < l.length; e += 1)
              n.append(g(l[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (let e = o.length - 1; e >= 0; e -= 1)
              n.prepend(g(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
          },
          loopFix: function () {
            const e = this;
            e.emit("beforeLoopFix");
            const {
              activeIndex: t,
              slides: i,
              loopedSlides: s,
              allowSlidePrev: n,
              allowSlideNext: r,
              snapGrid: a,
              rtlTranslate: o,
            } = e;
            let l;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            const d = -a[t] - e.getTranslate();
            t < s
              ? ((l = i.length - 3 * s + t),
                (l += s),
                e.slideTo(l, 0, !1, !0) &&
                  0 !== d &&
                  e.setTranslate((o ? -e.translate : e.translate) - d))
              : t >= i.length - s &&
                ((l = -i.length + t + s),
                (l += s),
                e.slideTo(l, 0, !1, !0) &&
                  0 !== d &&
                  e.setTranslate((o ? -e.translate : e.translate) - d)),
              (e.allowSlidePrev = n),
              (e.allowSlideNext = r),
              e.emit("loopFix");
          },
          loopDestroy: function () {
            const { $wrapperEl: e, params: t, slides: i } = this;
            e
              .children(
                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
              )
              .remove(),
              i.removeAttr("data-swiper-slide-index");
          },
        };
      function A(e) {
        const t = this,
          i = a(),
          s = l(),
          n = t.touchEventsData,
          { params: r, touches: o, enabled: d } = t;
        if (!d) return;
        if (t.animating && r.preventInteractionOnTransition) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let c = e;
        c.originalEvent && (c = c.originalEvent);
        let u = g(c.target);
        if ("wrapper" === r.touchEventsTarget && !u.closest(t.wrapperEl).length)
          return;
        if (
          ((n.isTouchEvent = "touchstart" === c.type),
          !n.isTouchEvent && "which" in c && 3 === c.which)
        )
          return;
        if (!n.isTouchEvent && "button" in c && c.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        r.noSwipingClass &&
          "" !== r.noSwipingClass &&
          c.target &&
          c.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (u = g(e.path[0]));
        const p = r.noSwipingSelector
            ? r.noSwipingSelector
            : `.${r.noSwipingClass}`,
          f = !(!c.target || !c.target.shadowRoot);
        if (
          r.noSwiping &&
          (f
            ? (function (e, t = this) {
                return (function t(i) {
                  return i && i !== a() && i !== l()
                    ? (i.assignedSlot && (i = i.assignedSlot),
                      i.closest(e) || t(i.getRootNode().host))
                    : null;
                })(t);
              })(p, c.target)
            : u.closest(p)[0])
        )
          return void (t.allowClick = !0);
        if (r.swipeHandler && !u.closest(r.swipeHandler)[0]) return;
        (o.currentX =
          "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX),
          (o.currentY =
            "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY);
        const h = o.currentX,
          m = o.currentY,
          v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          w = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (v && (h <= w || h >= s.innerWidth - w)) {
          if ("prevent" !== v) return;
          e.preventDefault();
        }
        if (
          (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (o.startX = h),
          (o.startY = m),
          (n.touchStartTime = b()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          r.threshold > 0 && (n.allowThresholdMove = !1),
          "touchstart" !== c.type)
        ) {
          let e = !0;
          u.is(n.focusableElements) && (e = !1),
            i.activeElement &&
              g(i.activeElement).is(n.focusableElements) &&
              i.activeElement !== u[0] &&
              i.activeElement.blur();
          const s = e && t.allowTouchMove && r.touchStartPreventDefault;
          (!r.touchStartForcePreventDefault && !s) ||
            u[0].isContentEditable ||
            c.preventDefault();
        }
        t.emit("touchStart", c);
      }
      function z(e) {
        const t = a(),
          i = this,
          s = i.touchEventsData,
          { params: n, touches: r, rtlTranslate: o, enabled: l } = i;
        if (!l) return;
        let d = e;
        if ((d.originalEvent && (d = d.originalEvent), !s.isTouched))
          return void (
            s.startMoving &&
            s.isScrolling &&
            i.emit("touchMoveOpposite", d)
          );
        if (s.isTouchEvent && "touchmove" !== d.type) return;
        const c =
            "touchmove" === d.type &&
            d.targetTouches &&
            (d.targetTouches[0] || d.changedTouches[0]),
          u = "touchmove" === d.type ? c.pageX : d.pageX,
          p = "touchmove" === d.type ? c.pageY : d.pageY;
        if (d.preventedByNestedSwiper)
          return (r.startX = u), void (r.startY = p);
        if (!i.allowTouchMove)
          return (
            (i.allowClick = !1),
            void (
              s.isTouched &&
              (Object.assign(r, {
                startX: u,
                startY: p,
                currentX: u,
                currentY: p,
              }),
              (s.touchStartTime = b()))
            )
          );
        if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
          if (i.isVertical()) {
            if (
              (p < r.startY && i.translate <= i.maxTranslate()) ||
              (p > r.startY && i.translate >= i.minTranslate())
            )
              return (s.isTouched = !1), void (s.isMoved = !1);
          } else if (
            (u < r.startX && i.translate <= i.maxTranslate()) ||
            (u > r.startX && i.translate >= i.minTranslate())
          )
            return;
        if (
          s.isTouchEvent &&
          t.activeElement &&
          d.target === t.activeElement &&
          g(d.target).is(s.focusableElements)
        )
          return (s.isMoved = !0), void (i.allowClick = !1);
        if (
          (s.allowTouchCallbacks && i.emit("touchMove", d),
          d.targetTouches && d.targetTouches.length > 1)
        )
          return;
        (r.currentX = u), (r.currentY = p);
        const f = r.currentX - r.startX,
          h = r.currentY - r.startY;
        if (
          i.params.threshold &&
          Math.sqrt(f ** 2 + h ** 2) < i.params.threshold
        )
          return;
        if (void 0 === s.isScrolling) {
          let e;
          (i.isHorizontal() && r.currentY === r.startY) ||
          (i.isVertical() && r.currentX === r.startX)
            ? (s.isScrolling = !1)
            : f * f + h * h >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
              (s.isScrolling = i.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (s.isScrolling && i.emit("touchMoveOpposite", d),
          void 0 === s.startMoving &&
            ((r.currentX === r.startX && r.currentY === r.startY) ||
              (s.startMoving = !0)),
          s.isScrolling)
        )
          return void (s.isTouched = !1);
        if (!s.startMoving) return;
        (i.allowClick = !1),
          !n.cssMode && d.cancelable && d.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && d.stopPropagation(),
          s.isMoved ||
            (n.loop && !n.cssMode && i.loopFix(),
            (s.startTranslate = i.getTranslate()),
            i.setTransition(0),
            i.animating &&
              i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (s.allowMomentumBounce = !1),
            !n.grabCursor ||
              (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
              i.setGrabCursor(!0),
            i.emit("sliderFirstMove", d)),
          i.emit("sliderMove", d),
          (s.isMoved = !0);
        let m = i.isHorizontal() ? f : h;
        (r.diff = m),
          (m *= n.touchRatio),
          o && (m = -m),
          (i.swipeDirection = m > 0 ? "prev" : "next"),
          (s.currentTranslate = m + s.startTranslate);
        let v = !0,
          w = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (w = 0),
          m > 0 && s.currentTranslate > i.minTranslate()
            ? ((v = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.minTranslate() -
                  1 +
                  (-i.minTranslate() + s.startTranslate + m) ** w))
            : m < 0 &&
              s.currentTranslate < i.maxTranslate() &&
              ((v = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.maxTranslate() +
                  1 -
                  (i.maxTranslate() - s.startTranslate - m) ** w)),
          v && (d.preventedByNestedSwiper = !0),
          !i.allowSlideNext &&
            "next" === i.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !i.allowSlidePrev &&
            "prev" === i.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          i.allowSlidePrev ||
            i.allowSlideNext ||
            (s.currentTranslate = s.startTranslate),
          n.threshold > 0)
        ) {
          if (!(Math.abs(m) > n.threshold || s.allowThresholdMove))
            return void (s.currentTranslate = s.startTranslate);
          if (!s.allowThresholdMove)
            return (
              (s.allowThresholdMove = !0),
              (r.startX = r.currentX),
              (r.startY = r.currentY),
              (s.currentTranslate = s.startTranslate),
              void (r.diff = i.isHorizontal()
                ? r.currentX - r.startX
                : r.currentY - r.startY)
            );
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
            n.watchSlidesProgress) &&
            (i.updateActiveIndex(), i.updateSlidesClasses()),
          i.params.freeMode &&
            n.freeMode.enabled &&
            i.freeMode &&
            i.freeMode.onTouchMove(),
          i.updateProgress(s.currentTranslate),
          i.setTranslate(s.currentTranslate));
      }
      function I(e) {
        const t = this,
          i = t.touchEventsData,
          {
            params: s,
            touches: n,
            rtlTranslate: r,
            slidesGrid: a,
            enabled: o,
          } = t;
        if (!o) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          i.allowTouchCallbacks && t.emit("touchEnd", l),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        )
          return (
            i.isMoved && s.grabCursor && t.setGrabCursor(!1),
            (i.isMoved = !1),
            void (i.startMoving = !1)
          );
        s.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const d = b(),
          c = d - i.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            c < 300 &&
              d - i.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((i.lastClickTime = b()),
          v(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !i.isTouched ||
            !i.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            i.currentTranslate === i.startTranslate)
        )
          return (
            (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
          );
        let u;
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (u = s.followFinger
            ? r
              ? t.translate
              : -t.translate
            : -i.currentTranslate),
          s.cssMode)
        )
          return;
        if (t.params.freeMode && s.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: u });
        let p = 0,
          f = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < a.length;
          e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
        ) {
          const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== a[e + t]
            ? u >= a[e] && u < a[e + t] && ((p = e), (f = a[e + t] - a[e]))
            : u >= a[e] && ((p = e), (f = a[a.length - 1] - a[a.length - 2]));
        }
        const h = (u - a[p]) / f,
          m = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (c > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (h >= s.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p)),
            "prev" === t.swipeDirection &&
              (h > 1 - s.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p));
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation ||
          (l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl)
            ? ("next" === t.swipeDirection && t.slideTo(p + m),
              "prev" === t.swipeDirection && t.slideTo(p))
            : l.target === t.navigation.nextEl
            ? t.slideTo(p + m)
            : t.slideTo(p);
        }
      }
      function D() {
        const e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = n),
          (e.allowSlideNext = s),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
      function B(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function _() {
        const e = this,
          { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
        if (!s) return;
        let n;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
          n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let N = !1;
      function j() {}
      const G = (e, t) => {
          const i = a(),
            {
              params: s,
              touchEvents: n,
              el: r,
              wrapperEl: o,
              device: l,
              support: d,
            } = e,
            c = !!s.nested,
            u = "on" === t ? "addEventListener" : "removeEventListener",
            p = t;
          if (d.touch) {
            const t = !(
              "touchstart" !== n.start ||
              !d.passiveListener ||
              !s.passiveListeners
            ) && { passive: !0, capture: !1 };
            r[u](n.start, e.onTouchStart, t),
              r[u](
                n.move,
                e.onTouchMove,
                d.passiveListener ? { passive: !1, capture: c } : c
              ),
              r[u](n.end, e.onTouchEnd, t),
              n.cancel && r[u](n.cancel, e.onTouchEnd, t);
          } else
            r[u](n.start, e.onTouchStart, !1),
              i[u](n.move, e.onTouchMove, c),
              i[u](n.end, e.onTouchEnd, !1);
          (s.preventClicks || s.preventClicksPropagation) &&
            r[u]("click", e.onClick, !0),
            s.cssMode && o[u]("scroll", e.onScroll),
            s.updateOnWindowResize
              ? e[p](
                  l.ios || l.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  D,
                  !0
                )
              : e[p]("observerUpdate", D, !0);
        },
        H = {
          attachEvents: function () {
            const e = this,
              t = a(),
              { params: i, support: s } = e;
            (e.onTouchStart = A.bind(e)),
              (e.onTouchMove = z.bind(e)),
              (e.onTouchEnd = I.bind(e)),
              i.cssMode && (e.onScroll = _.bind(e)),
              (e.onClick = B.bind(e)),
              s.touch && !N && (t.addEventListener("touchstart", j), (N = !0)),
              G(e, "on");
          },
          detachEvents: function () {
            G(this, "off");
          },
        },
        q = (e, t) => e.grid && t.grid && t.grid.rows > 1,
        F = {
          addClasses: function () {
            const e = this,
              {
                classNames: t,
                params: i,
                rtl: s,
                $el: n,
                device: r,
                support: a,
              } = e,
              o = (function (e, t) {
                const i = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((s) => {
                          e[s] && i.push(t + s);
                        })
                      : "string" == typeof e && i.push(t + e);
                  }),
                  i
                );
              })(
                [
                  "initialized",
                  i.direction,
                  { "pointer-events": !a.touch },
                  { "free-mode": e.params.freeMode && i.freeMode.enabled },
                  { autoheight: i.autoHeight },
                  { rtl: s },
                  { grid: i.grid && i.grid.rows > 1 },
                  {
                    "grid-column":
                      i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": i.cssMode },
                  { centered: i.cssMode && i.centeredSlides },
                ],
                i.containerModifierClass
              );
            t.push(...o),
              n.addClass([...t].join(" ")),
              e.emitContainerClasses();
          },
          removeClasses: function () {
            const { $el: e, classNames: t } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses();
          },
        },
        W = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          enabled: !0,
          focusableElements:
            "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
      function V(e, t) {
        return function (i = {}) {
          const s = Object.keys(i)[0],
            n = i[s];
          "object" == typeof n && null !== n
            ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
                !0 === e[s] &&
                (e[s] = { auto: !0 }),
              s in e && "enabled" in n
                ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                  "object" != typeof e[s] ||
                    "enabled" in e[s] ||
                    (e[s].enabled = !0),
                  e[s] || (e[s] = { enabled: !1 }),
                  y(t, i))
                : y(t, i))
            : y(t, i);
        };
      }
      const R = {
          eventsEmitter: M,
          update: O,
          translate: {
            getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
              const {
                params: t,
                rtlTranslate: i,
                translate: s,
                $wrapperEl: n,
              } = this;
              if (t.virtualTranslate) return i ? -s : s;
              if (t.cssMode) return s;
              let r = (function (e, t = "x") {
                const i = l();
                let s, n, r;
                const a = (function (e) {
                  const t = l();
                  let i;
                  return (
                    t.getComputedStyle && (i = t.getComputedStyle(e, null)),
                    !i && e.currentStyle && (i = e.currentStyle),
                    i || (i = e.style),
                    i
                  );
                })(e);
                return (
                  i.WebKitCSSMatrix
                    ? ((n = a.transform || a.webkitTransform),
                      n.split(",").length > 6 &&
                        (n = n
                          .split(", ")
                          .map((e) => e.replace(",", "."))
                          .join(", ")),
                      (r = new i.WebKitCSSMatrix("none" === n ? "" : n)))
                    : ((r =
                        a.MozTransform ||
                        a.OTransform ||
                        a.MsTransform ||
                        a.msTransform ||
                        a.transform ||
                        a
                          .getPropertyValue("transform")
                          .replace("translate(", "matrix(1, 0, 0, 1,")),
                      (s = r.toString().split(","))),
                  "x" === t &&
                    (n = i.WebKitCSSMatrix
                      ? r.m41
                      : 16 === s.length
                      ? parseFloat(s[12])
                      : parseFloat(s[4])),
                  "y" === t &&
                    (n = i.WebKitCSSMatrix
                      ? r.m42
                      : 16 === s.length
                      ? parseFloat(s[13])
                      : parseFloat(s[5])),
                  n || 0
                );
              })(n[0], e);
              return i && (r = -r), r || 0;
            },
            setTranslate: function (e, t) {
              const i = this,
                {
                  rtlTranslate: s,
                  params: n,
                  $wrapperEl: r,
                  wrapperEl: a,
                  progress: o,
                } = i;
              let l,
                d = 0,
                c = 0;
              i.isHorizontal() ? (d = s ? -e : e) : (c = e),
                n.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
                n.cssMode
                  ? (a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      i.isHorizontal() ? -d : -c)
                  : n.virtualTranslate ||
                    r.transform(`translate3d(${d}px, ${c}px, 0px)`),
                (i.previousTranslate = i.translate),
                (i.translate = i.isHorizontal() ? d : c);
              const u = i.maxTranslate() - i.minTranslate();
              (l = 0 === u ? 0 : (e - i.minTranslate()) / u),
                l !== o && i.updateProgress(e),
                i.emit("setTranslate", i.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (
              e = 0,
              t = this.params.speed,
              i = !0,
              s = !0,
              n
            ) {
              const r = this,
                { params: a, wrapperEl: o } = r;
              if (r.animating && a.preventInteractionOnTransition) return !1;
              const l = r.minTranslate(),
                d = r.maxTranslate();
              let c;
              if (
                ((c = s && e > l ? l : s && e < d ? d : e),
                r.updateProgress(c),
                a.cssMode)
              ) {
                const e = r.isHorizontal();
                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                  if (!r.support.smoothScroll)
                    return (
                      T({
                        swiper: r,
                        targetPosition: -c,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (r.setTransition(0),
                    r.setTranslate(c),
                    i &&
                      (r.emit("beforeTransitionStart", t, n),
                      r.emit("transitionEnd")))
                  : (r.setTransition(t),
                    r.setTranslate(c),
                    i &&
                      (r.emit("beforeTransitionStart", t, n),
                      r.emit("transitionStart")),
                    r.animating ||
                      ((r.animating = !0),
                      r.onTranslateToWrapperTransitionEnd ||
                        (r.onTranslateToWrapperTransitionEnd = function (e) {
                          r &&
                            !r.destroyed &&
                            e.target === this &&
                            (r.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            r.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            (r.onTranslateToWrapperTransitionEnd = null),
                            delete r.onTranslateToWrapperTransitionEnd,
                            i && r.emit("transitionEnd"));
                        }),
                      r.$wrapperEl[0].addEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              const i = this;
              i.params.cssMode || i.$wrapperEl.transition(e),
                i.emit("setTransition", e, t);
            },
            transitionStart: function (e = !0, t) {
              const i = this,
                { params: s } = i;
              s.cssMode ||
                (s.autoHeight && i.updateAutoHeight(),
                $({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e = !0, t) {
              const i = this,
                { params: s } = i;
              (i.animating = !1),
                s.cssMode ||
                  (i.setTransition(0),
                  $({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: L,
          loop: P,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (i.style.cursor = "move"),
                (i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (i.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (i.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: H,
          breakpoints: {
            setBreakpoint: function () {
              const e = this,
                {
                  activeIndex: t,
                  initialized: i,
                  loopedSlides: s = 0,
                  params: n,
                  $el: r,
                } = e,
                a = n.breakpoints;
              if (!a || (a && 0 === Object.keys(a).length)) return;
              const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
              if (!o || e.currentBreakpoint === o) return;
              const l = (o in a ? a[o] : void 0) || e.originalParams,
                d = q(e, n),
                c = q(e, l),
                u = n.enabled;
              d && !c
                ? (r.removeClass(
                    `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !d &&
                  c &&
                  (r.addClass(`${n.containerModifierClass}grid`),
                  ((l.grid.fill && "column" === l.grid.fill) ||
                    (!l.grid.fill && "column" === n.grid.fill)) &&
                    r.addClass(`${n.containerModifierClass}grid-column`),
                  e.emitContainerClasses());
              const p = l.direction && l.direction !== n.direction,
                f = n.loop && (l.slidesPerView !== n.slidesPerView || p);
              p && i && e.changeDirection(), y(e.params, l);
              const h = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                u && !h ? e.disable() : !u && h && e.enable(),
                (e.currentBreakpoint = o),
                e.emit("_beforeBreakpoint", l),
                f &&
                  i &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - s + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", l);
            },
            getBreakpoint: function (e, t = "window", i) {
              if (!e || ("container" === t && !i)) return;
              let s = !1;
              const n = l(),
                r = "window" === t ? n.innerHeight : i.clientHeight,
                a = Object.keys(e).map((e) => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return { value: r * t, point: e };
                  }
                  return { value: e, point: e };
                });
              a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < a.length; e += 1) {
                const { point: r, value: o } = a[e];
                "window" === t
                  ? n.matchMedia(`(min-width: ${o}px)`).matches && (s = r)
                  : o <= i.clientWidth && (s = r);
              }
              return s || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: i } = e,
                { slidesOffsetBefore: s } = i;
              if (s) {
                const t = e.slides.length - 1,
                  i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                e.isLocked = e.size > i;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: F,
          images: {
            loadImage: function (e, t, i, s, n, r) {
              const a = l();
              let o;
              function d() {
                r && r();
              }
              g(e).parent("picture")[0] || (e.complete && n)
                ? d()
                : t
                ? ((o = new a.Image()),
                  (o.onload = d),
                  (o.onerror = d),
                  s && (o.sizes = s),
                  i && (o.srcset = i),
                  t && (o.src = t))
                : d();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                const s = e.imagesToLoad[i];
                e.loadImage(
                  s,
                  s.currentSrc || s.getAttribute("src"),
                  s.srcset || s.getAttribute("srcset"),
                  s.sizes || s.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        Y = {};
      class X {
        constructor(...e) {
          let t, i;
          if (
            (1 === e.length &&
            e[0].constructor &&
            "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
              ? (i = e[0])
              : ([t, i] = e),
            i || (i = {}),
            (i = y({}, i)),
            t && !i.el && (i.el = t),
            i.el && g(i.el).length > 1)
          ) {
            const e = [];
            return (
              g(i.el).each((t) => {
                const s = y({}, i, { el: t });
                e.push(new X(s));
              }),
              e
            );
          }
          const s = this;
          (s.__swiper__ = !0),
            (s.support = k()),
            (s.device = (function (e = {}) {
              return (
                E ||
                  (E = (function ({ userAgent: e } = {}) {
                    const t = k(),
                      i = l(),
                      s = i.navigator.platform,
                      n = e || i.navigator.userAgent,
                      r = { ios: !1, android: !1 },
                      a = i.screen.width,
                      o = i.screen.height,
                      d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let c = n.match(/(iPad).*OS\s([\d_]+)/);
                    const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                      p = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                      f = "Win32" === s;
                    let h = "MacIntel" === s;
                    return (
                      !c &&
                        h &&
                        t.touch &&
                        [
                          "1024x1366",
                          "1366x1024",
                          "834x1194",
                          "1194x834",
                          "834x1112",
                          "1112x834",
                          "768x1024",
                          "1024x768",
                          "820x1180",
                          "1180x820",
                          "810x1080",
                          "1080x810",
                        ].indexOf(`${a}x${o}`) >= 0 &&
                        ((c = n.match(/(Version)\/([\d.]+)/)),
                        c || (c = [0, 1, "13_0_0"]),
                        (h = !1)),
                      d && !f && ((r.os = "android"), (r.android = !0)),
                      (c || p || u) && ((r.os = "ios"), (r.ios = !0)),
                      r
                    );
                  })(e)),
                E
              );
            })({ userAgent: i.userAgent })),
            (s.browser =
              (x ||
                (x = (function () {
                  const e = l();
                  return {
                    isSafari: (function () {
                      const t = e.navigator.userAgent.toLowerCase();
                      return (
                        t.indexOf("safari") >= 0 &&
                        t.indexOf("chrome") < 0 &&
                        t.indexOf("android") < 0
                      );
                    })(),
                    isWebView:
                      /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                        e.navigator.userAgent
                      ),
                  };
                })()),
              x)),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = [...s.__modules__]),
            i.modules &&
              Array.isArray(i.modules) &&
              s.modules.push(...i.modules);
          const n = {};
          s.modules.forEach((e) => {
            e({
              swiper: s,
              extendParams: V(i, n),
              on: s.on.bind(s),
              once: s.once.bind(s),
              off: s.off.bind(s),
              emit: s.emit.bind(s),
            });
          });
          const r = y({}, W, n);
          return (
            (s.params = y({}, r, Y, i)),
            (s.originalParams = y({}, s.params)),
            (s.passedParams = y({}, i)),
            s.params &&
              s.params.on &&
              Object.keys(s.params.on).forEach((e) => {
                s.on(e, s.params.on[e]);
              }),
            s.params && s.params.onAny && s.onAny(s.params.onAny),
            (s.$ = g),
            Object.assign(s, {
              enabled: s.params.enabled,
              el: t,
              classNames: [],
              slides: g(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === s.params.direction,
              isVertical: () => "vertical" === s.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: s.params.allowSlideNext,
              allowSlidePrev: s.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (s.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (s.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  s.support.touch || !s.params.simulateTouch
                    ? s.touchEventsTouch
                    : s.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: s.params.focusableElements,
                lastClickTime: b(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: s.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            s.emit("_swiper"),
            s.params.init && s.init(),
            s
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const i = this;
          e = Math.min(Math.max(e, 0), 1);
          const s = i.minTranslate(),
            n = (i.maxTranslate() - s) * e + s;
          i.translateTo(n, void 0 === t ? 0 : t),
            i.updateActiveIndex(),
            i.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((i) => {
            const s = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e = "current", t = !1) {
          const {
            params: i,
            slides: s,
            slidesGrid: n,
            slidesSizesGrid: r,
            size: a,
            activeIndex: o,
          } = this;
          let l = 1;
          if (i.centeredSlides) {
            let e,
              t = s[o].swiperSlideSize;
            for (let i = o + 1; i < s.length; i += 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (l += 1), t > a && (e = !0));
            for (let i = o - 1; i >= 0; i -= 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (l += 1), t > a && (e = !0));
          } else if ("current" === e)
            for (let e = o + 1; e < s.length; e += 1)
              (t ? n[e] + r[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
          else for (let e = o - 1; e >= 0; e -= 1) n[o] - n[e] < a && (l += 1);
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: i } = e;
          function s() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let n;
          i.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (s(), e.params.autoHeight && e.updateAutoHeight())
              : ((n =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                n || s()),
            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t = !0) {
          const i = this,
            s = i.params.direction;
          return (
            e || (e = "horizontal" === s ? "vertical" : "horizontal"),
            e === s ||
              ("horizontal" !== e && "vertical" !== e) ||
              (i.$el
                .removeClass(`${i.params.containerModifierClass}${s}`)
                .addClass(`${i.params.containerModifierClass}${e}`),
              i.emitContainerClasses(),
              (i.params.direction = e),
              i.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              i.emit("changeDirection"),
              t && i.update()),
            i
          );
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const i = g(e || t.params.el);
          if (!(e = i[0])) return !1;
          e.swiper = t;
          const s = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let n = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = g(e.shadowRoot.querySelector(s()));
              return (t.children = (e) => i.children(e)), t;
            }
            return i.children(s());
          })();
          if (0 === n.length && t.params.createElements) {
            const e = a().createElement("div");
            (n = g(e)),
              (e.className = t.params.wrapperClass),
              i.append(e),
              i.children(`.${t.params.slideClass}`).each((e) => {
                n.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: i,
              el: e,
              $wrapperEl: n,
              wrapperEl: n[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
              wrongRTL: "-webkit-box" === n.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          return (
            t.initialized ||
              !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e = !0, t = !0) {
          const i = this,
            { params: s, $el: n, $wrapperEl: r, slides: a } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                n.removeAttr("style"),
                r.removeAttr("style"),
                a &&
                  a.length &&
                  a
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          y(Y, e);
        }
        static get extendedDefaults() {
          return Y;
        }
        static get defaults() {
          return W;
        }
        static installModule(e) {
          X.prototype.__modules__ || (X.prototype.__modules__ = []);
          const t = X.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => X.installModule(e)), X)
            : (X.installModule(e), X);
        }
      }
      Object.keys(R).forEach((e) => {
        Object.keys(R[e]).forEach((t) => {
          X.prototype[t] = R[e][t];
        });
      }),
        X.use([
          function ({ swiper: e, on: t, emit: i }) {
            const s = l();
            let n = null;
            const r = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              a = () => {
                e && !e.destroyed && e.initialized && i("orientationchange");
              };
            t("init", () => {
              e.params.resizeObserver && void 0 !== s.ResizeObserver
                ? e &&
                  !e.destroyed &&
                  e.initialized &&
                  ((n = new ResizeObserver((t) => {
                    const { width: i, height: s } = e;
                    let n = i,
                      a = s;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: i, target: s }) => {
                        (s && s !== e.el) ||
                          ((n = i ? i.width : (t[0] || t).inlineSize),
                          (a = i ? i.height : (t[0] || t).blockSize));
                      }
                    ),
                      (n === i && a === s) || r();
                  })),
                  n.observe(e.el))
                : (s.addEventListener("resize", r),
                  s.addEventListener("orientationchange", a));
            }),
              t("destroy", () => {
                n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                  s.removeEventListener("resize", r),
                  s.removeEventListener("orientationchange", a);
              });
          },
          function ({ swiper: e, extendParams: t, on: i, emit: s }) {
            const n = [],
              r = l(),
              a = (e, t = {}) => {
                const i = new (r.MutationObserver || r.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void s("observerUpdate", e[0]);
                    const t = function () {
                      s("observerUpdate", e[0]);
                    };
                    r.requestAnimationFrame
                      ? r.requestAnimationFrame(t)
                      : r.setTimeout(t, 0);
                  }
                );
                i.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  n.push(i);
              };
            t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (e.params.observer) {
                  if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) a(t[e]);
                  }
                  a(e.$el[0], { childList: e.params.observeSlideChildren }),
                    a(e.$wrapperEl[0], { attributes: !1 });
                }
              }),
              i("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      const U = X;
      function K(e, t, i, s) {
        const n = a();
        return (
          e.params.createElements &&
            Object.keys(s).forEach((r) => {
              if (!i[r] && !0 === i.auto) {
                let a = e.$el.children(`.${s[r]}`)[0];
                a ||
                  ((a = n.createElement("div")),
                  (a.className = s[r]),
                  e.$el.append(a)),
                  (i[r] = a),
                  (t[r] = a);
              }
            }),
          i
        );
      }
      function J(e = "") {
        return `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`;
      }
      var Q = i(711),
        Z = i.n(Q);
      if (
        (console.log("start"),
        document.addEventListener("DOMContentLoaded", () => {
          const e = document.getElementById("search-bar"),
            t = document.getElementById("search-icon"),
            i = document.getElementById("close-search"),
            s =
              (document.getElementById("content"),
              document.querySelectorAll(".hide-on-search")),
            n = (e, t) => {
              e.forEach((e) => {
                e.classList[t]("hidden");
              });
            };
          t.addEventListener("click", () => {
            e.classList.remove("hidden"), n(s, "add");
          }),
            i.addEventListener("click", () => {
              e.classList.add("hidden"), n(s, "remove");
            });
        }),
        U.use([
          function ({ swiper: e, extendParams: t, on: i, emit: s }) {
            function n(t) {
              let i;
              return (
                t &&
                  ((i = g(t)),
                  e.params.uniqueNavElements &&
                    "string" == typeof t &&
                    i.length > 1 &&
                    1 === e.$el.find(t).length &&
                    (i = e.$el.find(t))),
                i
              );
            }
            function r(t, i) {
              const s = e.params.navigation;
              t &&
                t.length > 0 &&
                (t[i ? "addClass" : "removeClass"](s.disabledClass),
                t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i),
                e.params.watchOverflow &&
                  e.enabled &&
                  t[e.isLocked ? "addClass" : "removeClass"](s.lockClass));
            }
            function a() {
              if (e.params.loop) return;
              const { $nextEl: t, $prevEl: i } = e.navigation;
              r(i, e.isBeginning && !e.params.rewind),
                r(t, e.isEnd && !e.params.rewind);
            }
            function o(t) {
              t.preventDefault(),
                (!e.isBeginning || e.params.loop || e.params.rewind) &&
                  e.slidePrev();
            }
            function l(t) {
              t.preventDefault(),
                (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
            }
            function d() {
              const t = e.params.navigation;
              if (
                ((e.params.navigation = K(
                  e,
                  e.originalParams.navigation,
                  e.params.navigation,
                  { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
                )),
                !t.nextEl && !t.prevEl)
              )
                return;
              const i = n(t.nextEl),
                s = n(t.prevEl);
              i && i.length > 0 && i.on("click", l),
                s && s.length > 0 && s.on("click", o),
                Object.assign(e.navigation, {
                  $nextEl: i,
                  nextEl: i && i[0],
                  $prevEl: s,
                  prevEl: s && s[0],
                }),
                e.enabled ||
                  (i && i.addClass(t.lockClass), s && s.addClass(t.lockClass));
            }
            function c() {
              const { $nextEl: t, $prevEl: i } = e.navigation;
              t &&
                t.length &&
                (t.off("click", l),
                t.removeClass(e.params.navigation.disabledClass)),
                i &&
                  i.length &&
                  (i.off("click", o),
                  i.removeClass(e.params.navigation.disabledClass));
            }
            t({
              navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
              },
            }),
              (e.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null,
              }),
              i("init", () => {
                d(), a();
              }),
              i("toEdge fromEdge lock unlock", () => {
                a();
              }),
              i("destroy", () => {
                c();
              }),
              i("enable disable", () => {
                const { $nextEl: t, $prevEl: i } = e.navigation;
                t &&
                  t[e.enabled ? "removeClass" : "addClass"](
                    e.params.navigation.lockClass
                  ),
                  i &&
                    i[e.enabled ? "removeClass" : "addClass"](
                      e.params.navigation.lockClass
                    );
              }),
              i("click", (t, i) => {
                const { $nextEl: n, $prevEl: r } = e.navigation,
                  a = i.target;
                if (
                  e.params.navigation.hideOnClick &&
                  !g(a).is(r) &&
                  !g(a).is(n)
                ) {
                  if (
                    e.pagination &&
                    e.params.pagination &&
                    e.params.pagination.clickable &&
                    (e.pagination.el === a || e.pagination.el.contains(a))
                  )
                    return;
                  let t;
                  n
                    ? (t = n.hasClass(e.params.navigation.hiddenClass))
                    : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                    s(!0 === t ? "navigationShow" : "navigationHide"),
                    n && n.toggleClass(e.params.navigation.hiddenClass),
                    r && r.toggleClass(e.params.navigation.hiddenClass);
                }
              }),
              Object.assign(e.navigation, { update: a, init: d, destroy: c });
          },
          function ({ swiper: e, extendParams: t, on: i, emit: s }) {
            const n = "swiper-pagination";
            let r;
            t({
              pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: (e) => e,
                formatFractionTotal: (e) => e,
                bulletClass: `${n}-bullet`,
                bulletActiveClass: `${n}-bullet-active`,
                modifierClass: `${n}-`,
                currentClass: `${n}-current`,
                totalClass: `${n}-total`,
                hiddenClass: `${n}-hidden`,
                progressbarFillClass: `${n}-progressbar-fill`,
                progressbarOppositeClass: `${n}-progressbar-opposite`,
                clickableClass: `${n}-clickable`,
                lockClass: `${n}-lock`,
                horizontalClass: `${n}-horizontal`,
                verticalClass: `${n}-vertical`,
              },
            }),
              (e.pagination = { el: null, $el: null, bullets: [] });
            let a = 0;
            function o() {
              return (
                !e.params.pagination.el ||
                !e.pagination.el ||
                !e.pagination.$el ||
                0 === e.pagination.$el.length
              );
            }
            function l(t, i) {
              const { bulletActiveClass: s } = e.params.pagination;
              t[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`);
            }
            function d() {
              const t = e.rtl,
                i = e.params.pagination;
              if (o()) return;
              const n =
                  e.virtual && e.params.virtual.enabled
                    ? e.virtual.slides.length
                    : e.slides.length,
                d = e.pagination.$el;
              let c;
              const u = e.params.loop
                ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                : e.snapGrid.length;
              if (
                (e.params.loop
                  ? ((c = Math.ceil(
                      (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                    )),
                    c > n - 1 - 2 * e.loopedSlides &&
                      (c -= n - 2 * e.loopedSlides),
                    c > u - 1 && (c -= u),
                    c < 0 &&
                      "bullets" !== e.params.paginationType &&
                      (c = u + c))
                  : (c =
                      void 0 !== e.snapIndex
                        ? e.snapIndex
                        : e.activeIndex || 0),
                "bullets" === i.type &&
                  e.pagination.bullets &&
                  e.pagination.bullets.length > 0)
              ) {
                const s = e.pagination.bullets;
                let n, o, u;
                if (
                  (i.dynamicBullets &&
                    ((r = s
                      .eq(0)
                      [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                    d.css(
                      e.isHorizontal() ? "width" : "height",
                      r * (i.dynamicMainBullets + 4) + "px"
                    ),
                    i.dynamicMainBullets > 1 &&
                      void 0 !== e.previousIndex &&
                      ((a += c - (e.previousIndex - e.loopedSlides || 0)),
                      a > i.dynamicMainBullets - 1
                        ? (a = i.dynamicMainBullets - 1)
                        : a < 0 && (a = 0)),
                    (n = Math.max(c - a, 0)),
                    (o = n + (Math.min(s.length, i.dynamicMainBullets) - 1)),
                    (u = (o + n) / 2)),
                  s.removeClass(
                    ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                      .map((e) => `${i.bulletActiveClass}${e}`)
                      .join(" ")
                  ),
                  d.length > 1)
                )
                  s.each((e) => {
                    const t = g(e),
                      s = t.index();
                    s === c && t.addClass(i.bulletActiveClass),
                      i.dynamicBullets &&
                        (s >= n &&
                          s <= o &&
                          t.addClass(`${i.bulletActiveClass}-main`),
                        s === n && l(t, "prev"),
                        s === o && l(t, "next"));
                  });
                else {
                  const t = s.eq(c),
                    r = t.index();
                  if ((t.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                    const t = s.eq(n),
                      a = s.eq(o);
                    for (let e = n; e <= o; e += 1)
                      s.eq(e).addClass(`${i.bulletActiveClass}-main`);
                    if (e.params.loop)
                      if (r >= s.length) {
                        for (let e = i.dynamicMainBullets; e >= 0; e -= 1)
                          s.eq(s.length - e).addClass(
                            `${i.bulletActiveClass}-main`
                          );
                        s.eq(s.length - i.dynamicMainBullets - 1).addClass(
                          `${i.bulletActiveClass}-prev`
                        );
                      } else l(t, "prev"), l(a, "next");
                    else l(t, "prev"), l(a, "next");
                  }
                }
                if (i.dynamicBullets) {
                  const n = Math.min(s.length, i.dynamicMainBullets + 4),
                    a = (r * n - r) / 2 - u * r,
                    o = t ? "right" : "left";
                  s.css(e.isHorizontal() ? o : "top", `${a}px`);
                }
              }
              if (
                ("fraction" === i.type &&
                  (d
                    .find(J(i.currentClass))
                    .text(i.formatFractionCurrent(c + 1)),
                  d.find(J(i.totalClass)).text(i.formatFractionTotal(u))),
                "progressbar" === i.type)
              ) {
                let t;
                t = i.progressbarOpposite
                  ? e.isHorizontal()
                    ? "vertical"
                    : "horizontal"
                  : e.isHorizontal()
                  ? "horizontal"
                  : "vertical";
                const s = (c + 1) / u;
                let n = 1,
                  r = 1;
                "horizontal" === t ? (n = s) : (r = s),
                  d
                    .find(J(i.progressbarFillClass))
                    .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`)
                    .transition(e.params.speed);
              }
              "custom" === i.type && i.renderCustom
                ? (d.html(i.renderCustom(e, c + 1, u)),
                  s("paginationRender", d[0]))
                : s("paginationUpdate", d[0]),
                e.params.watchOverflow &&
                  e.enabled &&
                  d[e.isLocked ? "addClass" : "removeClass"](i.lockClass);
            }
            function c() {
              const t = e.params.pagination;
              if (o()) return;
              const i =
                  e.virtual && e.params.virtual.enabled
                    ? e.virtual.slides.length
                    : e.slides.length,
                n = e.pagination.$el;
              let r = "";
              if ("bullets" === t.type) {
                let s = e.params.loop
                  ? Math.ceil(
                      (i - 2 * e.loopedSlides) / e.params.slidesPerGroup
                    )
                  : e.snapGrid.length;
                e.params.freeMode &&
                  e.params.freeMode.enabled &&
                  !e.params.loop &&
                  s > i &&
                  (s = i);
                for (let i = 0; i < s; i += 1)
                  t.renderBullet
                    ? (r += t.renderBullet.call(e, i, t.bulletClass))
                    : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
                n.html(r), (e.pagination.bullets = n.find(J(t.bulletClass)));
              }
              "fraction" === t.type &&
                ((r = t.renderFraction
                  ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                  : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
                n.html(r)),
                "progressbar" === t.type &&
                  ((r = t.renderProgressbar
                    ? t.renderProgressbar.call(e, t.progressbarFillClass)
                    : `<span class="${t.progressbarFillClass}"></span>`),
                  n.html(r)),
                "custom" !== t.type &&
                  s("paginationRender", e.pagination.$el[0]);
            }
            function u() {
              e.params.pagination = K(
                e,
                e.originalParams.pagination,
                e.params.pagination,
                { el: "swiper-pagination" }
              );
              const t = e.params.pagination;
              if (!t.el) return;
              let i = g(t.el);
              0 !== i.length &&
                (e.params.uniqueNavElements &&
                  "string" == typeof t.el &&
                  i.length > 1 &&
                  ((i = e.$el.find(t.el)),
                  i.length > 1 &&
                    (i = i.filter((t) => g(t).parents(".swiper")[0] === e.el))),
                "bullets" === t.type &&
                  t.clickable &&
                  i.addClass(t.clickableClass),
                i.addClass(t.modifierClass + t.type),
                i.addClass(t.modifierClass + e.params.direction),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
                  (a = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  i.addClass(t.progressbarOppositeClass),
                t.clickable &&
                  i.on("click", J(t.bulletClass), function (t) {
                    t.preventDefault();
                    let i = g(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                  }),
                Object.assign(e.pagination, { $el: i, el: i[0] }),
                e.enabled || i.addClass(t.lockClass));
            }
            function p() {
              const t = e.params.pagination;
              if (o()) return;
              const i = e.pagination.$el;
              i.removeClass(t.hiddenClass),
                i.removeClass(t.modifierClass + t.type),
                i.removeClass(t.modifierClass + e.params.direction),
                e.pagination.bullets &&
                  e.pagination.bullets.removeClass &&
                  e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && i.off("click", J(t.bulletClass));
            }
            i("init", () => {
              u(), c(), d();
            }),
              i("activeIndexChange", () => {
                (e.params.loop || void 0 === e.snapIndex) && d();
              }),
              i("snapIndexChange", () => {
                e.params.loop || d();
              }),
              i("slidesLengthChange", () => {
                e.params.loop && (c(), d());
              }),
              i("snapGridLengthChange", () => {
                e.params.loop || (c(), d());
              }),
              i("destroy", () => {
                p();
              }),
              i("enable disable", () => {
                const { $el: t } = e.pagination;
                t &&
                  t[e.enabled ? "removeClass" : "addClass"](
                    e.params.pagination.lockClass
                  );
              }),
              i("lock unlock", () => {
                d();
              }),
              i("click", (t, i) => {
                const n = i.target,
                  { $el: r } = e.pagination;
                if (
                  e.params.pagination.el &&
                  e.params.pagination.hideOnClick &&
                  r.length > 0 &&
                  !g(n).hasClass(e.params.pagination.bulletClass)
                ) {
                  if (
                    e.navigation &&
                    ((e.navigation.nextEl && n === e.navigation.nextEl) ||
                      (e.navigation.prevEl && n === e.navigation.prevEl))
                  )
                    return;
                  const t = r.hasClass(e.params.pagination.hiddenClass);
                  s(!0 === t ? "paginationShow" : "paginationHide"),
                    r.toggleClass(e.params.pagination.hiddenClass);
                }
              }),
              Object.assign(e.pagination, {
                render: c,
                update: d,
                init: u,
                destroy: p,
              });
          },
          function ({ swiper: e, extendParams: t, on: i, emit: s }) {
            let n;
            function r() {
              const t = e.slides.eq(e.activeIndex);
              let i = e.params.autoplay.delay;
              t.attr("data-swiper-autoplay") &&
                (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                clearTimeout(n),
                (n = v(() => {
                  let t;
                  e.params.autoplay.reverseDirection
                    ? e.params.loop
                      ? (e.loopFix(),
                        (t = e.slidePrev(e.params.speed, !0, !0)),
                        s("autoplay"))
                      : e.isBeginning
                      ? e.params.autoplay.stopOnLastSlide
                        ? l()
                        : ((t = e.slideTo(
                            e.slides.length - 1,
                            e.params.speed,
                            !0,
                            !0
                          )),
                          s("autoplay"))
                      : ((t = e.slidePrev(e.params.speed, !0, !0)),
                        s("autoplay"))
                    : e.params.loop
                    ? (e.loopFix(),
                      (t = e.slideNext(e.params.speed, !0, !0)),
                      s("autoplay"))
                    : e.isEnd
                    ? e.params.autoplay.stopOnLastSlide
                      ? l()
                      : ((t = e.slideTo(0, e.params.speed, !0, !0)),
                        s("autoplay"))
                    : ((t = e.slideNext(e.params.speed, !0, !0)),
                      s("autoplay")),
                    ((e.params.cssMode && e.autoplay.running) || !1 === t) &&
                      r();
                }, i));
            }
            function o() {
              return (
                void 0 === n &&
                !e.autoplay.running &&
                ((e.autoplay.running = !0), s("autoplayStart"), r(), !0)
              );
            }
            function l() {
              return (
                !!e.autoplay.running &&
                void 0 !== n &&
                (n && (clearTimeout(n), (n = void 0)),
                (e.autoplay.running = !1),
                s("autoplayStop"),
                !0)
              );
            }
            function d(t) {
              e.autoplay.running &&
                (e.autoplay.paused ||
                  (n && clearTimeout(n),
                  (e.autoplay.paused = !0),
                  0 !== t && e.params.autoplay.waitForTransition
                    ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                        e.$wrapperEl[0].addEventListener(t, u);
                      })
                    : ((e.autoplay.paused = !1), r())));
            }
            function c() {
              const t = a();
              "hidden" === t.visibilityState && e.autoplay.running && d(),
                "visible" === t.visibilityState &&
                  e.autoplay.paused &&
                  (r(), (e.autoplay.paused = !1));
            }
            function u(t) {
              e &&
                !e.destroyed &&
                e.$wrapperEl &&
                t.target === e.$wrapperEl[0] &&
                (["transitionend", "webkitTransitionEnd"].forEach((t) => {
                  e.$wrapperEl[0].removeEventListener(t, u);
                }),
                (e.autoplay.paused = !1),
                e.autoplay.running ? r() : l());
            }
            function p() {
              e.params.autoplay.disableOnInteraction ? l() : d(),
                ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                  e.$wrapperEl[0].removeEventListener(t, u);
                });
            }
            function f() {
              e.params.autoplay.disableOnInteraction ||
                ((e.autoplay.paused = !1), r());
            }
            (e.autoplay = { running: !1, paused: !1 }),
              t({
                autoplay: {
                  enabled: !1,
                  delay: 3e3,
                  waitForTransition: !0,
                  disableOnInteraction: !0,
                  stopOnLastSlide: !1,
                  reverseDirection: !1,
                  pauseOnMouseEnter: !1,
                },
              }),
              i("init", () => {
                e.params.autoplay.enabled &&
                  (o(),
                  a().addEventListener("visibilitychange", c),
                  e.params.autoplay.pauseOnMouseEnter &&
                    (e.$el.on("mouseenter", p), e.$el.on("mouseleave", f)));
              }),
              i("beforeTransitionStart", (t, i, s) => {
                e.autoplay.running &&
                  (s || !e.params.autoplay.disableOnInteraction
                    ? e.autoplay.pause(i)
                    : l());
              }),
              i("sliderFirstMove", () => {
                e.autoplay.running &&
                  (e.params.autoplay.disableOnInteraction ? l() : d());
              }),
              i("touchEnd", () => {
                e.params.cssMode &&
                  e.autoplay.paused &&
                  !e.params.autoplay.disableOnInteraction &&
                  r();
              }),
              i("destroy", () => {
                e.$el.off("mouseenter", p),
                  e.$el.off("mouseleave", f),
                  e.autoplay.running && l(),
                  a().removeEventListener("visibilitychange", c);
              }),
              Object.assign(e.autoplay, {
                pause: d,
                run: r,
                start: o,
                stop: l,
              });
          },
        ]),
        new U(".hero__swiper", {
          autoplay: { delay: 5000 },
          loop: !0,
          spaceBetween: 120,
          centeredSlides: !0,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: { el: ".swiper-pagination", type: "bullets" },
        }),
        document.getElementsByClassName("accordion"))
      ) {
        let e,
          t = document.getElementsByClassName("accordion");
        for (e = 0; e < t.length; e++)
          t[e].addEventListener("click", function () {
            this.classList.toggle("active");
            let e = this.nextElementSibling;
            e.style.maxHeight
              ? (e.style.maxHeight = null)
              : (e.style.maxHeight = e.scrollHeight + "px");
          });
      }
      if (document.querySelector(".header")) {
        let e = document.querySelector(".header"),
          t = document.querySelector(".site-container");
        e.classList.add("fixed"), (t.style.marginTop = e.offsetHeight + "px");
      }
      (document.getElementById("openPopup").onclick = function () {
        document.getElementById("videoPopup").style.display = "block";
      }),
        (document.getElementsByClassName("close")[0].onclick = function () {
          document.getElementById("video").pause(),
            (document.getElementById("videoPopup").style.display = "none");
        }),
        (window.onclick = function (e) {
          var t = document.getElementById("videoPopup");
          e.target == t &&
            (document.getElementById("video").pause(),
            (t.style.display = "none"));
        }),
        Z().init({ offset: 100 });
    })();
})();
