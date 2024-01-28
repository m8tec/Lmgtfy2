var _____WB$wombat$assign$function_____ = function(name) {
  return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function(obj) {
      this.__WB_source = obj;
      return this;
  }
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.tippy = e()
  }(this, function() {
      "use strict";
      function t(t) {
          return "[object Object]" === {}.toString.call(t)
      }
      function e(t) {
          return [].slice.call(t)
      }
      function n(n) {
          if (n instanceof Element || t(n))
              return [n];
          if (n instanceof NodeList)
              return e(n);
          if (Array.isArray(n))
              return n;
          try {
              return e(document.querySelectorAll(n))
          } catch (r) {
              return []
          }
      }
      function r(t) {
          t.refObj = !0,
          t.attributes = t.attributes || {},
          t.setAttribute = function(e, n) {
              t.attributes[e] = n
          }
          ,
          t.getAttribute = function(e) {
              return t.attributes[e]
          }
          ,
          t.removeAttribute = function(e) {
              delete t.attributes[e]
          }
          ,
          t.hasAttribute = function(e) {
              return e in t.attributes
          }
          ,
          t.addEventListener = function() {}
          ,
          t.removeEventListener = function() {}
          ,
          t.classList = {
              classNames: {},
              add: function(e) {
                  return t.classList.classNames[e] = !0
              },
              remove: function(e) {
                  return delete t.classList.classNames[e],
                  !0
              },
              contains: function(e) {
                  return e in t.classList.classNames
              }
          }
      }
      function i(t) {
          for (var e = ["", "webkit"], n = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < e.length; r++) {
              var i = e[r]
                , o = i ? i + n : t;
              if ("undefined" != typeof document.body.style[o])
                  return o
          }
          return null
      }
      function o() {
          return document.createElement("div")
      }
      function a(t, e, n) {
          var r = o();
          r.setAttribute("class", "tippy-popper"),
          r.setAttribute("role", "tooltip"),
          r.setAttribute("id", "tippy-" + t),
          r.style.zIndex = n.zIndex,
          r.style.maxWidth = n.maxWidth;
          var a = o();
          a.setAttribute("class", "tippy-tooltip"),
          a.setAttribute("data-size", n.size),
          a.setAttribute("data-animation", n.animation),
          a.setAttribute("data-state", "hidden"),
          n.theme.split(" ").forEach(function(t) {
              a.classList.add(t + "-theme")
          });
          var s = o();
          if (s.setAttribute("class", "tippy-content"),
          n.arrow) {
              var u = o();
              u.style[i("transform")] = n.arrowTransform,
              "round" === n.arrowType ? (u.classList.add("tippy-roundarrow"),
              u.innerHTML = '<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>') : u.classList.add("tippy-arrow"),
              a.appendChild(u)
          }
          if (n.animateFill) {
              a.setAttribute("data-animatefill", "");
              var c = o();
              c.classList.add("tippy-backdrop"),
              c.setAttribute("data-state", "hidden"),
              a.appendChild(c)
          }
          n.inertia && a.setAttribute("data-inertia", ""),
          n.interactive && a.setAttribute("data-interactive", "");
          var l = n.html;
          if (l) {
              var f = void 0;
              l instanceof Element ? (s.appendChild(l),
              f = "#" + (l.id || "tippy-html-template")) : (s.innerHTML = document.querySelector(l).innerHTML,
              f = l),
              r.setAttribute("data-html", ""),
              a.setAttribute("data-template-id", f),
              n.interactive && r.setAttribute("tabindex", "-1")
          } else
              s[n.allowTitleHTML ? "innerHTML" : "textContent"] = e;
          return a.appendChild(s),
          r.appendChild(a),
          r
      }
      function s(t, e, n, r) {
          var i = n.onTrigger
            , o = n.onMouseLeave
            , a = n.onBlur
            , s = n.onDelegateShow
            , u = n.onDelegateHide
            , c = [];
          if ("manual" === t)
              return c;
          var l = function(t, n) {
              e.addEventListener(t, n),
              c.push({
                  event: t,
                  handler: n
              })
          };
          return r.target ? (Qt.supportsTouch && r.touchHold && (l("touchstart", s),
          l("touchend", u)),
          "mouseenter" === t && (l("mouseover", s),
          l("mouseout", u)),
          "focus" === t && (l("focusin", s),
          l("focusout", u)),
          "click" === t && l("click", s)) : (l(t, i),
          Qt.supportsTouch && r.touchHold && (l("touchstart", i),
          l("touchend", o)),
          "mouseenter" === t && l("mouseleave", o),
          "focus" === t && l(Jt ? "focusout" : "blur", a)),
          c
      }
      function u(t, e) {
          var n = ee.reduce(function(n, r) {
              var i = t.getAttribute("data-tippy-" + r.toLowerCase()) || e[r];
              return "false" === i && (i = !1),
              "true" === i && (i = !0),
              isFinite(i) && !isNaN(parseFloat(i)) && (i = parseFloat(i)),
              "target" !== r && "string" == typeof i && "[" === i.trim().charAt(0) && (i = JSON.parse(i)),
              n[r] = i,
              n
          }, {});
          return ie({}, e, n)
      }
      function c(t, e) {
          return e.arrow && (e.animateFill = !1),
          e.appendTo && "function" == typeof e.appendTo && (e.appendTo = e.appendTo()),
          "function" == typeof e.html && (e.html = e.html(t)),
          e
      }
      function l(t) {
          var e = function(e) {
              return t.querySelector(e)
          };
          return {
              tooltip: e(Zt.TOOLTIP),
              backdrop: e(Zt.BACKDROP),
              content: e(Zt.CONTENT),
              arrow: e(Zt.ARROW) || e(Zt.ROUND_ARROW)
          }
      }
      function f(t) {
          var e = t.getAttribute("title");
          e && t.setAttribute("data-original-title", e),
          t.removeAttribute("title")
      }
      function p(t) {
          var e = !1;
          return function() {
              e || (e = !0,
              window.Promise.resolve().then(function() {
                  e = !1,
                  t()
              }))
          }
      }
      function d(t) {
          var e = !1;
          return function() {
              e || (e = !0,
              setTimeout(function() {
                  e = !1,
                  t()
              }, se))
          }
      }
      function h(t) {
          var e = {};
          return t && "[object Function]" === e.toString.call(t)
      }
      function m(t, e) {
          if (1 !== t.nodeType)
              return [];
          var n = getComputedStyle(t, null);
          return e ? n[e] : n
      }
      function g(t) {
          return "HTML" === t.nodeName ? t : t.parentNode || t.host
      }
      function v(t) {
          if (!t)
              return document.body;
          switch (t.nodeName) {
          case "HTML":
          case "BODY":
              return t.ownerDocument.body;
          case "#document":
              return t.body
          }
          var e = m(t)
            , n = e.overflow
            , r = e.overflowX
            , i = e.overflowY;
          return /(auto|scroll|overlay)/.test(n + i + r) ? t : v(g(t))
      }
      function y(t) {
          return 11 === t ? fe : 10 === t ? pe : fe || pe
      }
      function b(t) {
          if (!t)
              return document.documentElement;
          for (var e = y(10) ? document.body : null, n = t.offsetParent; n === e && t.nextElementSibling; )
              n = (t = t.nextElementSibling).offsetParent;
          var r = n && n.nodeName;
          return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === m(n, "position") ? b(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
      }
      function $(t) {
          var e = t.nodeName;
          return "BODY" === e ? !1 : "HTML" === e || b(t.firstElementChild) === t
      }
      function w(t) {
          return null !== t.parentNode ? w(t.parentNode) : t
      }
      function S(t, e) {
          if (!(t && t.nodeType && e && e.nodeType))
              return document.documentElement;
          var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING
            , r = n ? t : e
            , i = n ? e : t
            , o = document.createRange();
          o.setStart(r, 0),
          o.setEnd(i, 0);
          var a = o.commonAncestorContainer;
          if (t !== a && e !== a || r.contains(i))
              return $(a) ? a : b(a);
          var s = w(t);
          return s.host ? S(s.host, e) : S(t, w(e).host)
      }
      function T(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top"
            , n = "top" === e ? "scrollTop" : "scrollLeft"
            , r = t.nodeName;
          if ("BODY" === r || "HTML" === r) {
              var i = t.ownerDocument.documentElement
                , o = t.ownerDocument.scrollingElement || i;
              return o[n]
          }
          return t[n]
      }
      function _(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1
            , r = T(e, "top")
            , i = T(e, "left")
            , o = n ? -1 : 1;
          return t.top += r * o,
          t.bottom += r * o,
          t.left += i * o,
          t.right += i * o,
          t
      }
      function k(t, e) {
          var n = "x" === e ? "Left" : "Top"
            , r = "Left" === n ? "Right" : "Bottom";
          return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + r + "Width"], 10)
      }
      function E(t, e, n, r) {
          return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], y(10) ? n["offset" + t] + r["margin" + ("Height" === t ? "Top" : "Left")] + r["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
      }
      function C() {
          var t = document.body
            , e = document.documentElement
            , n = y(10) && getComputedStyle(e);
          return {
              height: E("Height", t, e, n),
              width: E("Width", t, e, n)
          }
      }
      function x(t) {
          return ge({}, t, {
              right: t.left + t.width,
              bottom: t.top + t.height
          })
      }
      function D(t) {
          var e = {};
          try {
              if (y(10)) {
                  e = t.getBoundingClientRect();
                  var n = T(t, "top")
                    , r = T(t, "left");
                  e.top += n,
                  e.left += r,
                  e.bottom += n,
                  e.right += r
              } else
                  e = t.getBoundingClientRect()
          } catch (i) {}
          var o = {
              left: e.left,
              top: e.top,
              width: e.right - e.left,
              height: e.bottom - e.top
          }
            , a = "HTML" === t.nodeName ? C() : {}
            , s = a.width || t.clientWidth || o.right - o.left
            , u = a.height || t.clientHeight || o.bottom - o.top
            , c = t.offsetWidth - s
            , l = t.offsetHeight - u;
          if (c || l) {
              var f = m(t);
              c -= k(f, "x"),
              l -= k(f, "y"),
              o.width -= c,
              o.height -= l
          }
          return x(o)
      }
      function P(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1
            , r = y(10)
            , i = "HTML" === e.nodeName
            , o = D(t)
            , a = D(e)
            , s = v(t)
            , u = m(e)
            , c = parseFloat(u.borderTopWidth, 10)
            , l = parseFloat(u.borderLeftWidth, 10);
          n && "HTML" === e.nodeName && (a.top = Math.max(a.top, 0),
          a.left = Math.max(a.left, 0));
          var f = x({
              top: o.top - a.top - c,
              left: o.left - a.left - l,
              width: o.width,
              height: o.height
          });
          if (f.marginTop = 0,
          f.marginLeft = 0,
          !r && i) {
              var p = parseFloat(u.marginTop, 10)
                , d = parseFloat(u.marginLeft, 10);
              f.top -= c - p,
              f.bottom -= c - p,
              f.left -= l - d,
              f.right -= l - d,
              f.marginTop = p,
              f.marginLeft = d
          }
          return (r && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (f = _(f, e)),
          f
      }
      function A(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1
            , n = t.ownerDocument.documentElement
            , r = P(t, n)
            , i = Math.max(n.clientWidth, window.innerWidth || 0)
            , o = Math.max(n.clientHeight, window.innerHeight || 0)
            , a = e ? 0 : T(n)
            , s = e ? 0 : T(n, "left")
            , u = {
              top: a - r.top + r.marginTop,
              left: s - r.left + r.marginLeft,
              width: i,
              height: o
          };
          return x(u)
      }
      function O(t) {
          var e = t.nodeName;
          return "BODY" === e || "HTML" === e ? !1 : "fixed" === m(t, "position") ? !0 : O(g(t))
      }
      function R(t) {
          if (!t || !t.parentElement || y())
              return document.documentElement;
          for (var e = t.parentElement; e && "none" === m(e, "transform"); )
              e = e.parentElement;
          return e || document.documentElement
      }
      function I(t, e, n, r) {
          var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : !1
            , o = {
              top: 0,
              left: 0
          }
            , a = i ? R(t) : S(t, e);
          if ("viewport" === r)
              o = A(a, i);
          else {
              var s = void 0;
              "scrollParent" === r ? (s = v(g(e)),
              "BODY" === s.nodeName && (s = t.ownerDocument.documentElement)) : s = "window" === r ? t.ownerDocument.documentElement : r;
              var u = P(s, a, i);
              if ("HTML" !== s.nodeName || O(a))
                  o = u;
              else {
                  var c = C()
                    , l = c.height
                    , f = c.width;
                  o.top += u.top - u.marginTop,
                  o.bottom = l + u.top,
                  o.left += u.left - u.marginLeft,
                  o.right = f + u.left
              }
          }
          return o.left += n,
          o.top += n,
          o.right -= n,
          o.bottom -= n,
          o
      }
      function M(t) {
          var e = t.width
            , n = t.height;
          return e * n
      }
      function L(t, e, n, r, i) {
          var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === t.indexOf("auto"))
              return t;
          var a = I(n, r, o, i)
            , s = {
              top: {
                  width: a.width,
                  height: e.top - a.top
              },
              right: {
                  width: a.right - e.right,
                  height: a.height
              },
              bottom: {
                  width: a.width,
                  height: a.bottom - e.bottom
              },
              left: {
                  width: e.left - a.left,
                  height: a.height
              }
          }
            , u = Object.keys(s).map(function(t) {
              return ge({
                  key: t
              }, s[t], {
                  area: M(s[t])
              })
          }).sort(function(t, e) {
              return e.area - t.area
          })
            , c = u.filter(function(t) {
              var e = t.width
                , r = t.height;
              return e >= n.clientWidth && r >= n.clientHeight
          })
            , l = c.length > 0 ? c[0].key : u[0].key
            , f = t.split("-")[1];
          return l + (f ? "-" + f : "")
      }
      function F(t, e, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
            , i = r ? R(e) : S(e, n);
          return P(n, i, r)
      }
      function j(t) {
          var e = getComputedStyle(t)
            , n = parseFloat(e.marginTop) + parseFloat(e.marginBottom)
            , r = parseFloat(e.marginLeft) + parseFloat(e.marginRight)
            , i = {
              width: t.offsetWidth + r,
              height: t.offsetHeight + n
          };
          return i
      }
      function H(t) {
          var e = {
              left: "right",
              right: "left",
              bottom: "top",
              top: "bottom"
          };
          return t.replace(/left|right|bottom|top/g, function(t) {
              return e[t]
          })
      }
      function N(t, e, n) {
          n = n.split("-")[0];
          var r = j(t)
            , i = {
              width: r.width,
              height: r.height
          }
            , o = -1 !== ["right", "left"].indexOf(n)
            , a = o ? "top" : "left"
            , s = o ? "left" : "top"
            , u = o ? "height" : "width"
            , c = o ? "width" : "height";
          return i[a] = e[a] + e[u] / 2 - r[u] / 2,
          n === s ? i[s] = e[s] - r[c] : i[s] = e[H(s)],
          i
      }
      function V(t, e) {
          return Array.prototype.find ? t.find(e) : t.filter(e)[0]
      }
      function U(t, e, n) {
          if (Array.prototype.findIndex)
              return t.findIndex(function(t) {
                  return t[e] === n
              });
          var r = V(t, function(t) {
              return t[e] === n
          });
          return t.indexOf(r)
      }
      function q(t, e, n) {
          var r = void 0 === n ? t : t.slice(0, U(t, "name", n));
          return r.forEach(function(t) {
              t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
              var n = t["function"] || t.fn;
              t.enabled && h(n) && (e.offsets.popper = x(e.offsets.popper),
              e.offsets.reference = x(e.offsets.reference),
              e = n(e, t))
          }),
          e
      }
      function B() {
          if (!this.state.isDestroyed) {
              var t = {
                  instance: this,
                  styles: {},
                  arrowStyles: {},
                  attributes: {},
                  flipped: !1,
                  offsets: {}
              };
              t.offsets.reference = F(this.state, this.popper, this.reference, this.options.positionFixed),
              t.placement = L(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
              t.originalPlacement = t.placement,
              t.positionFixed = this.options.positionFixed,
              t.offsets.popper = N(this.popper, t.offsets.reference, t.placement),
              t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
              t = q(this.modifiers, t),
              this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0,
              this.options.onCreate(t))
          }
      }
      function z(t, e) {
          return t.some(function(t) {
              var n = t.name
                , r = t.enabled;
              return r && n === e
          })
      }
      function W(t) {
          for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < e.length; r++) {
              var i = e[r]
                , o = i ? "" + i + n : t;
              if ("undefined" != typeof document.body.style[o])
                  return o
          }
          return null
      }
      function Y() {
          return this.state.isDestroyed = !0,
          z(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
          this.popper.style.position = "",
          this.popper.style.top = "",
          this.popper.style.left = "",
          this.popper.style.right = "",
          this.popper.style.bottom = "",
          this.popper.style.willChange = "",
          this.popper.style[W("transform")] = ""),
          this.disableEventListeners(),
          this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
          this
      }
      function K(t) {
          var e = t.ownerDocument;
          return e ? e.defaultView : window
      }
      function G(t, e, n, r) {
          var i = "BODY" === t.nodeName
            , o = i ? t.ownerDocument.defaultView : t;
          o.addEventListener(e, n, {
              passive: !0
          }),
          i || G(v(o.parentNode), e, n, r),
          r.push(o)
      }
      function X(t, e, n, r) {
          n.updateBound = r,
          K(t).addEventListener("resize", n.updateBound, {
              passive: !0
          });
          var i = v(t);
          return G(i, "scroll", n.updateBound, n.scrollParents),
          n.scrollElement = i,
          n.eventsEnabled = !0,
          n
      }
      function J() {
          this.state.eventsEnabled || (this.state = X(this.reference, this.options, this.state, this.scheduleUpdate))
      }
      function Q(t, e) {
          return K(t).removeEventListener("resize", e.updateBound),
          e.scrollParents.forEach(function(t) {
              t.removeEventListener("scroll", e.updateBound)
          }),
          e.updateBound = null,
          e.scrollParents = [],
          e.scrollElement = null,
          e.eventsEnabled = !1,
          e
      }
      function Z() {
          this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
          this.state = Q(this.reference, this.state))
      }
      function tt(t) {
          return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
      }
      function et(t, e) {
          Object.keys(e).forEach(function(n) {
              var r = "";
              -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && tt(e[n]) && (r = "px"),
              t.style[n] = e[n] + r
          })
      }
      function nt(t, e) {
          Object.keys(e).forEach(function(n) {
              var r = e[n];
              r !== !1 ? t.setAttribute(n, e[n]) : t.removeAttribute(n)
          })
      }
      function rt(t) {
          return et(t.instance.popper, t.styles),
          nt(t.instance.popper, t.attributes),
          t.arrowElement && Object.keys(t.arrowStyles).length && et(t.arrowElement, t.arrowStyles),
          t
      }
      function it(t, e, n, r, i) {
          var o = F(i, e, t, n.positionFixed)
            , a = L(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
          return e.setAttribute("x-placement", a),
          et(e, {
              position: n.positionFixed ? "fixed" : "absolute"
          }),
          n
      }
      function ot(t, e) {
          var n = e.x
            , r = e.y
            , i = t.offsets.popper
            , o = V(t.instance.modifiers, function(t) {
              return "applyStyle" === t.name
          }).gpuAcceleration;
          void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
          var a = void 0 !== o ? o : e.gpuAcceleration
            , s = b(t.instance.popper)
            , u = D(s)
            , c = {
              position: i.position
          }
            , l = {
              left: Math.floor(i.left),
              top: Math.round(i.top),
              bottom: Math.round(i.bottom),
              right: Math.floor(i.right)
          }
            , f = "bottom" === n ? "top" : "bottom"
            , p = "right" === r ? "left" : "right"
            , d = W("transform")
            , h = void 0
            , m = void 0;
          if (m = "bottom" === f ? -u.height + l.bottom : l.top,
          h = "right" === p ? -u.width + l.right : l.left,
          a && d)
              c[d] = "translate3d(" + h + "px, " + m + "px, 0)",
              c[f] = 0,
              c[p] = 0,
              c.willChange = "transform";
          else {
              var g = "bottom" === f ? -1 : 1
                , v = "right" === p ? -1 : 1;
              c[f] = m * g,
              c[p] = h * v,
              c.willChange = f + ", " + p
          }
          var y = {
              "x-placement": t.placement
          };
          return t.attributes = ge({}, y, t.attributes),
          t.styles = ge({}, c, t.styles),
          t.arrowStyles = ge({}, t.offsets.arrow, t.arrowStyles),
          t
      }
      function at(t, e, n) {
          var r = V(t, function(t) {
              var n = t.name;
              return n === e
          })
            , i = !!r && t.some(function(t) {
              return t.name === n && t.enabled && t.order < r.order
          });
          if (!i) {
              var o = "`" + e + "`"
                , a = "`" + n + "`";
              console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
          }
          return i
      }
      function st(t, e) {
          var n;
          if (!at(t.instance.modifiers, "arrow", "keepTogether"))
              return t;
          var r = e.element;
          if ("string" == typeof r) {
              if (r = t.instance.popper.querySelector(r),
              !r)
                  return t
          } else if (!t.instance.popper.contains(r))
              return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
              t;
          var i = t.placement.split("-")[0]
            , o = t.offsets
            , a = o.popper
            , s = o.reference
            , u = -1 !== ["left", "right"].indexOf(i)
            , c = u ? "height" : "width"
            , l = u ? "Top" : "Left"
            , f = l.toLowerCase()
            , p = u ? "left" : "top"
            , d = u ? "bottom" : "right"
            , h = j(r)[c];
          s[d] - h < a[f] && (t.offsets.popper[f] -= a[f] - (s[d] - h)),
          s[f] + h > a[d] && (t.offsets.popper[f] += s[f] + h - a[d]),
          t.offsets.popper = x(t.offsets.popper);
          var g = s[f] + s[c] / 2 - h / 2
            , v = m(t.instance.popper)
            , y = parseFloat(v["margin" + l], 10)
            , b = parseFloat(v["border" + l + "Width"], 10)
            , $ = g - t.offsets.popper[f] - y - b;
          return $ = Math.max(Math.min(a[c] - h, $), 0),
          t.arrowElement = r,
          t.offsets.arrow = (n = {},
          me(n, f, Math.round($)),
          me(n, p, ""),
          n),
          t
      }
      function ut(t) {
          return "end" === t ? "start" : "start" === t ? "end" : t
      }
      function ct(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1
            , n = ye.indexOf(t)
            , r = ye.slice(n + 1).concat(ye.slice(0, n));
          return e ? r.reverse() : r
      }
      function lt(t, e) {
          if (z(t.instance.modifiers, "inner"))
              return t;
          if (t.flipped && t.placement === t.originalPlacement)
              return t;
          var n = I(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed)
            , r = t.placement.split("-")[0]
            , i = H(r)
            , o = t.placement.split("-")[1] || ""
            , a = [];
          switch (e.behavior) {
          case be.FLIP:
              a = [r, i];
              break;
          case be.CLOCKWISE:
              a = ct(r);
              break;
          case be.COUNTERCLOCKWISE:
              a = ct(r, !0);
              break;
          default:
              a = e.behavior
          }
          return a.forEach(function(s, u) {
              if (r !== s || a.length === u + 1)
                  return t;
              r = t.placement.split("-")[0],
              i = H(r);
              var c = t.offsets.popper
                , l = t.offsets.reference
                , f = Math.floor
                , p = "left" === r && f(c.right) > f(l.left) || "right" === r && f(c.left) < f(l.right) || "top" === r && f(c.bottom) > f(l.top) || "bottom" === r && f(c.top) < f(l.bottom)
                , d = f(c.left) < f(n.left)
                , h = f(c.right) > f(n.right)
                , m = f(c.top) < f(n.top)
                , g = f(c.bottom) > f(n.bottom)
                , v = "left" === r && d || "right" === r && h || "top" === r && m || "bottom" === r && g
                , y = -1 !== ["top", "bottom"].indexOf(r)
                , b = !!e.flipVariations && (y && "start" === o && d || y && "end" === o && h || !y && "start" === o && m || !y && "end" === o && g);
              (p || v || b) && (t.flipped = !0,
              (p || v) && (r = a[u + 1]),
              b && (o = ut(o)),
              t.placement = r + (o ? "-" + o : ""),
              t.offsets.popper = ge({}, t.offsets.popper, N(t.instance.popper, t.offsets.reference, t.placement)),
              t = q(t.instance.modifiers, t, "flip"))
          }),
          t
      }
      function ft(t) {
          var e = t.offsets
            , n = e.popper
            , r = e.reference
            , i = t.placement.split("-")[0]
            , o = Math.floor
            , a = -1 !== ["top", "bottom"].indexOf(i)
            , s = a ? "right" : "bottom"
            , u = a ? "left" : "top"
            , c = a ? "width" : "height";
          return n[s] < o(r[u]) && (t.offsets.popper[u] = o(r[u]) - n[c]),
          n[u] > o(r[s]) && (t.offsets.popper[u] = o(r[s])),
          t
      }
      function pt(t, e, n, r) {
          var i = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
            , o = +i[1]
            , a = i[2];
          if (!o)
              return t;
          if (0 === a.indexOf("%")) {
              var s = void 0;
              switch (a) {
              case "%p":
                  s = n;
                  break;
              case "%":
              case "%r":
              default:
                  s = r
              }
              var u = x(s);
              return u[e] / 100 * o
          }
          if ("vh" === a || "vw" === a) {
              var c = void 0;
              return c = "vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
              c / 100 * o
          }
          return o
      }
      function dt(t, e, n, r) {
          var i = [0, 0]
            , o = -1 !== ["right", "left"].indexOf(r)
            , a = t.split(/(\+|\-)/).map(function(t) {
              return t.trim()
          })
            , s = a.indexOf(V(a, function(t) {
              return -1 !== t.search(/,|\s/)
          }));
          a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
          var u = /\s*,\s*|\s+/
            , c = -1 !== s ? [a.slice(0, s).concat([a[s].split(u)[0]]), [a[s].split(u)[1]].concat(a.slice(s + 1))] : [a];
          return c = c.map(function(t, r) {
              var i = (1 === r ? !o : o) ? "height" : "width"
                , a = !1;
              return t.reduce(function(t, e) {
                  return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e,
                  a = !0,
                  t) : a ? (t[t.length - 1] += e,
                  a = !1,
                  t) : t.concat(e)
              }, []).map(function(t) {
                  return pt(t, i, e, n)
              })
          }),
          c.forEach(function(t, e) {
              t.forEach(function(n, r) {
                  tt(n) && (i[e] += n * ("-" === t[r - 1] ? -1 : 1))
              })
          }),
          i
      }
      function ht(t, e) {
          var n = e.offset
            , r = t.placement
            , i = t.offsets
            , o = i.popper
            , a = i.reference
            , s = r.split("-")[0]
            , u = void 0;
          return u = tt(+n) ? [+n, 0] : dt(n, o, a, s),
          "left" === s ? (o.top += u[0],
          o.left -= u[1]) : "right" === s ? (o.top += u[0],
          o.left += u[1]) : "top" === s ? (o.left += u[0],
          o.top -= u[1]) : "bottom" === s && (o.left += u[0],
          o.top += u[1]),
          t.popper = o,
          t
      }
      function mt(t, e) {
          var n = e.boundariesElement || b(t.instance.popper);
          t.instance.reference === n && (n = b(n));
          var r = W("transform")
            , i = t.instance.popper.style
            , o = i.top
            , a = i.left
            , s = i[r];
          i.top = "",
          i.left = "",
          i[r] = "";
          var u = I(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
          i.top = o,
          i.left = a,
          i[r] = s,
          e.boundaries = u;
          var c = e.priority
            , l = t.offsets.popper
            , f = {
              primary: function(t) {
                  var n = l[t];
                  return l[t] < u[t] && !e.escapeWithReference && (n = Math.max(l[t], u[t])),
                  me({}, t, n)
              },
              secondary: function(t) {
                  var n = "right" === t ? "left" : "top"
                    , r = l[n];
                  return l[t] > u[t] && !e.escapeWithReference && (r = Math.min(l[n], u[t] - ("right" === t ? l.width : l.height))),
                  me({}, n, r)
              }
          };
          return c.forEach(function(t) {
              var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
              l = ge({}, l, f[e](t))
          }),
          t.offsets.popper = l,
          t
      }
      function gt(t) {
          var e = t.placement
            , n = e.split("-")[0]
            , r = e.split("-")[1];
          if (r) {
              var i = t.offsets
                , o = i.reference
                , a = i.popper
                , s = -1 !== ["bottom", "top"].indexOf(n)
                , u = s ? "left" : "top"
                , c = s ? "width" : "height"
                , l = {
                  start: me({}, u, o[u]),
                  end: me({}, u, o[u] + o[c] - a[c])
              };
              t.offsets.popper = ge({}, a, l[r])
          }
          return t
      }
      function vt(t) {
          if (!at(t.instance.modifiers, "hide", "preventOverflow"))
              return t;
          var e = t.offsets.reference
            , n = V(t.instance.modifiers, function(t) {
              return "preventOverflow" === t.name
          }).boundaries;
          if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
              if (t.hide === !0)
                  return t;
              t.hide = !0,
              t.attributes["x-out-of-boundaries"] = ""
          } else {
              if (t.hide === !1)
                  return t;
              t.hide = !1,
              t.attributes["x-out-of-boundaries"] = !1
          }
          return t
      }
      function yt(t) {
          var e = t.placement
            , n = e.split("-")[0]
            , r = t.offsets
            , i = r.popper
            , o = r.reference
            , a = -1 !== ["left", "right"].indexOf(n)
            , s = -1 === ["top", "left"].indexOf(n);
          return i[a ? "left" : "top"] = o[n] - (s ? i[a ? "width" : "height"] : 0),
          t.placement = H(e),
          t.offsets.popper = x(i),
          t
      }
      function bt(t) {
          void t.offsetHeight
      }
      function $t(t, e, n) {
          var r = t.popper
            , i = t.options
            , o = i.onCreate
            , a = i.onUpdate;
          i.onCreate = i.onUpdate = function() {
              bt(r),
              e && e(),
              a(),
              i.onCreate = o,
              i.onUpdate = a
          }
          ,
          n || t.scheduleUpdate()
      }
      function wt(t) {
          return t.getAttribute("x-placement").replace(/-.+/, "")
      }
      function St(t, e, n) {
          if (!e.getAttribute("x-placement"))
              return !0;
          var r = t.clientX
            , i = t.clientY
            , o = n.interactiveBorder
            , a = n.distance
            , s = e.getBoundingClientRect()
            , u = wt(e)
            , c = o + a
            , l = {
              top: s.top - i > o,
              bottom: i - s.bottom > o,
              left: s.left - r > o,
              right: r - s.right > o
          };
          switch (u) {
          case "top":
              l.top = s.top - i > c;
              break;
          case "bottom":
              l.bottom = i - s.bottom > c;
              break;
          case "left":
              l.left = s.left - r > c;
              break;
          case "right":
              l.right = r - s.right > c
          }
          return l.top || l.bottom || l.left || l.right
      }
      function Tt(t, e, n, r) {
          if (!e.length)
              return "";
          var i = {
              scale: function() {
                  return 1 === e.length ? "" + e[0] : n ? e[0] + ", " + e[1] : e[1] + ", " + e[0]
              }(),
              translate: function() {
                  return 1 === e.length ? r ? -e[0] + "px" : e[0] + "px" : n ? r ? e[0] + "px, " + -e[1] + "px" : e[0] + "px, " + e[1] + "px" : r ? -e[1] + "px, " + e[0] + "px" : e[1] + "px, " + e[0] + "px"
              }()
          };
          return i[t]
      }
      function _t(t, e) {
          if (!t)
              return "";
          var n = {
              X: "Y",
              Y: "X"
          };
          return e ? t : n[t]
      }
      function kt(t, e, n) {
          var r = wt(t)
            , o = "top" === r || "bottom" === r
            , a = "right" === r || "bottom" === r
            , s = function(t) {
              var e = n.match(t);
              return e ? e[1] : ""
          }
            , u = function(t) {
              var e = n.match(t);
              return e ? e[1].split(",").map(parseFloat) : []
          }
            , c = {
              translate: /translateX?Y?\(([^)]+)\)/,
              scale: /scaleX?Y?\(([^)]+)\)/
          }
            , l = {
              translate: {
                  axis: s(/translate([XY])/),
                  numbers: u(c.translate)
              },
              scale: {
                  axis: s(/scale([XY])/),
                  numbers: u(c.scale)
              }
          }
            , f = n.replace(c.translate, "translate" + _t(l.translate.axis, o) + "(" + Tt("translate", l.translate.numbers, o, a) + ")").replace(c.scale, "scale" + _t(l.scale.axis, o) + "(" + Tt("scale", l.scale.numbers, o, a) + ")");
          e.style[i("transform")] = f
      }
      function Et(t) {
          return -(t - te.distance) + "px"
      }
      function Ct(t) {
          requestAnimationFrame(function() {
              setTimeout(t, 1)
          })
      }
      function xt(t, e) {
          var n = Element.prototype.closest || function(t) {
              for (var e = this; e; ) {
                  if (ke.call(e, t))
                      return e;
                  e = e.parentElement
              }
          }
          ;
          return n.call(t, e)
      }
      function Dt(t, e) {
          return Array.isArray(t) ? t[e] : t
      }
      function Pt(t, e) {
          t.forEach(function(t) {
              t && t.setAttribute("data-state", e)
          })
      }
      function At(t, e) {
          t.filter(Boolean).forEach(function(t) {
              t.style[i("transitionDuration")] = e + "ms"
          })
      }
      function Ot(t) {
          var e = window.scrollX || window.pageXOffset
            , n = window.scrollY || window.pageYOffset;
          t.focus(),
          scroll(e, n)
      }
      function Rt() {
          var t = this._(Ee).lastTriggerEvent;
          return this.options.followCursor && !Qt.usingTouch && t && "focus" !== t.type
      }
      function It(t) {
          var e = xt(t.target, this.options.target);
          if (e && !e._tippy) {
              var n = e.getAttribute("title") || this.title;
              n && (e.setAttribute("title", n),
              Kt(e, ie({}, this.options, {
                  target: null
              })),
              Mt.call(e._tippy, t))
          }
      }
      function Mt(t) {
          var e = this
            , n = this.options;
          if (Nt.call(this),
          !this.state.visible) {
              if (n.target)
                  return void It.call(this, t);
              if (this._(Ee).isPreparingToShow = !0,
              n.wait)
                  return void n.wait.call(this.popper, this.show.bind(this), t);
              if (Rt.call(this)) {
                  this._(Ee).followCursorListener || Vt.call(this);
                  var r = l(this.popper)
                    , i = r.arrow;
                  i && (i.style.margin = "0"),
                  document.addEventListener("mousemove", this._(Ee).followCursorListener)
              }
              var o = Dt(n.delay, 0);
              o ? this._(Ee).showTimeout = setTimeout(function() {
                  e.show()
              }, o) : this.show()
          }
      }
      function Lt() {
          var t = this;
          if (Nt.call(this),
          this.state.visible) {
              this._(Ee).isPreparingToShow = !1;
              var e = Dt(this.options.delay, 1);
              e ? this._(Ee).hideTimeout = setTimeout(function() {
                  t.state.visible && t.hide()
              }, e) : this.hide()
          }
      }
      function Ft() {
          var t = this
            , e = function(e) {
              if (t.state.enabled) {
                  var n = Qt.supportsTouch && Qt.usingTouch && ["mouseenter", "mouseover", "focus"].indexOf(e.type) > -1;
                  n && t.options.touchHold || (t._(Ee).lastTriggerEvent = e,
                  "click" === e.type && "persistent" !== t.options.hideOnClick && t.state.visible ? Lt.call(t) : Mt.call(t, e),
                  n && Qt.iOS && t.reference.click && t.reference.click())
              }
          }
            , n = function(e) {
              if (!(["mouseleave", "mouseout"].indexOf(e.type) > -1 && Qt.supportsTouch && Qt.usingTouch && t.options.touchHold)) {
                  if (t.options.interactive) {
                      var n = Lt.bind(t)
                        , r = function i(e) {
                          var r = xt(e.target, Zt.REFERENCE)
                            , o = xt(e.target, Zt.POPPER) === t.popper
                            , a = r === t.reference;
                          o || a || St(e, t.popper, t.options) && (document.body.removeEventListener("mouseleave", n),
                          document.removeEventListener("mousemove", i),
                          Lt.call(t, i))
                      };
                      return document.body.addEventListener("mouseleave", n),
                      void document.addEventListener("mousemove", r)
                  }
                  Lt.call(t)
              }
          }
            , r = function(e) {
              if (e.target === t.reference && !Qt.usingTouch) {
                  if (t.options.interactive) {
                      if (!e.relatedTarget)
                          return;
                      if (xt(e.relatedTarget, Zt.POPPER))
                          return
                  }
                  Lt.call(t)
              }
          }
            , i = function(e) {
              xt(e.target, t.options.target) && Mt.call(t, e)
          }
            , o = function(e) {
              xt(e.target, t.options.target) && Lt.call(t)
          };
          return {
              onTrigger: e,
              onMouseLeave: n,
              onBlur: r,
              onDelegateShow: i,
              onDelegateHide: o
          }
      }
      function jt() {
          var t = this
            , e = this.popper
            , n = this.reference
            , r = this.options
            , i = l(e)
            , o = i.tooltip
            , a = r.popperOptions
            , s = "round" === r.arrowType ? Zt.ROUND_ARROW : Zt.ARROW
            , u = o.querySelector(s)
            , c = ie({
              placement: r.placement
          }, a || {}, {
              modifiers: ie({}, a ? a.modifiers : {}, {
                  arrow: ie({
                      element: s
                  }, a && a.modifiers ? a.modifiers.arrow : {}),
                  flip: ie({
                      enabled: r.flip,
                      padding: r.distance + 5,
                      behavior: r.flipBehavior
                  }, a && a.modifiers ? a.modifiers.flip : {}),
                  offset: ie({
                      offset: r.offset
                  }, a && a.modifiers ? a.modifiers.offset : {})
              }),
              onCreate: function() {
                  o.style[wt(e)] = Et(r.distance),
                  u && r.arrowTransform && kt(e, u, r.arrowTransform)
              },
              onUpdate: function() {
                  var t = o.style;
                  t.top = "",
                  t.bottom = "",
                  t.left = "",
                  t.right = "",
                  t[wt(e)] = Et(r.distance),
                  u && r.arrowTransform && kt(e, u, r.arrowTransform)
              }
          });
          return qt.call(this, {
              target: e,
              callback: function() {
                  t.popperInstance.update()
              },
              options: {
                  childList: !0,
                  subtree: !0,
                  characterData: !0
              }
          }),
          new Se(n,e,c)
      }
      function Ht(t) {
          var e = this.options;
          if (this.popperInstance ? (this.popperInstance.scheduleUpdate(),
          e.livePlacement && !Rt.call(this) && this.popperInstance.enableEventListeners()) : (this.popperInstance = jt.call(this),
          e.livePlacement || this.popperInstance.disableEventListeners()),
          !Rt.call(this)) {
              var n = l(this.popper)
                , r = n.arrow;
              r && (r.style.margin = ""),
              this.popperInstance.reference = this.reference
          }
          $t(this.popperInstance, t, !0),
          e.appendTo.contains(this.popper) || e.appendTo.appendChild(this.popper)
      }
      function Nt() {
          var t = this._(Ee)
            , e = t.showTimeout
            , n = t.hideTimeout;
          clearTimeout(e),
          clearTimeout(n)
      }
      function Vt() {
          var t = this;
          this._(Ee).followCursorListener = function(e) {
              var n = t._(Ee).lastMouseMoveEvent = e
                , r = n.clientX
                , i = n.clientY;
              t.popperInstance && (t.popperInstance.reference = {
                  getBoundingClientRect: function() {
                      return {
                          width: 0,
                          height: 0,
                          top: i,
                          left: r,
                          right: r,
                          bottom: i
                      }
                  },
                  clientWidth: 0,
                  clientHeight: 0
              },
              t.popperInstance.scheduleUpdate())
          }
      }
      function Ut() {
          var t = this
            , e = function() {
              t.popper.style[i("transitionDuration")] = t.options.updateDuration + "ms"
          }
            , n = function() {
              t.popper.style[i("transitionDuration")] = ""
          }
            , r = function o() {
              t.popperInstance && t.popperInstance.update(),
              e(),
              t.state.visible ? requestAnimationFrame(o) : n()
          };
          r()
      }
      function qt(t) {
          var e = t.target
            , n = t.callback
            , r = t.options;
          if (window.MutationObserver) {
              var i = new MutationObserver(n);
              i.observe(e, r),
              this._(Ee).mutationObservers.push(i)
          }
      }
      function Bt(t, e) {
          if (!t)
              return e();
          var n = l(this.popper)
            , r = n.tooltip
            , i = function(t, e) {
              e && r[t + "EventListener"]("ontransitionend"in window ? "transitionend" : "webkitTransitionEnd", e)
          }
            , o = function a(t) {
              t.target === r && (i("remove", a),
              e())
          };
          i("remove", this._(Ee).transitionendListener),
          i("add", o),
          this._(Ee).transitionendListener = o
      }
      function zt(t, e) {
          return t.reduce(function(t, n) {
              var r = De
                , i = c(n, e.performance ? e : u(n, e))
                , o = n.getAttribute("title");
              if (!(o || i.target || i.html || i.dynamicTitle))
                  return t;
              n.setAttribute(i.target ? "data-tippy-delegate" : "data-tippy", ""),
              f(n);
              var p = a(r, o, i)
                , d = new xe({
                  id: r,
                  reference: n,
                  popper: p,
                  options: i,
                  title: o,
                  popperInstance: null
              });
              i.createPopperInstanceOnInit && (d.popperInstance = jt.call(d),
              d.popperInstance.disableEventListeners());
              var h = Ft.call(d);
              return d.listeners = i.trigger.trim().split(" ").reduce(function(t, e) {
                  return t.concat(s(e, n, h, i))
              }, []),
              i.dynamicTitle && qt.call(d, {
                  target: n,
                  callback: function() {
                      var t = l(p)
                        , e = t.content
                        , r = n.getAttribute("title");
                      r && (e[i.allowTitleHTML ? "innerHTML" : "textContent"] = d.title = r,
                      f(n))
                  },
                  options: {
                      attributes: !0
                  }
              }),
              n._tippy = d,
              p._tippy = d,
              p._reference = n,
              t.push(d),
              De++,
              t
          }, [])
      }
      function Wt(t) {
          var n = e(document.querySelectorAll(Zt.POPPER));
          n.forEach(function(e) {
              var n = e._tippy;
              if (n) {
                  var r = n.options;
                  !(r.hideOnClick === !0 || r.trigger.indexOf("focus") > -1) || t && e === t.popper || n.hide()
              }
          })
      }
      function Yt() {
          var t = function() {
              Qt.usingTouch || (Qt.usingTouch = !0,
              Qt.iOS && document.body.classList.add("tippy-touch"),
              Qt.dynamicInputDetection && window.performance && document.addEventListener("mousemove", n),
              Qt.onUserInputChange("touch"))
          }
            , n = function() {
              var t = void 0;
              return function() {
                  var e = performance.now();
                  20 > e - t && (Qt.usingTouch = !1,
                  document.removeEventListener("mousemove", n),
                  Qt.iOS || document.body.classList.remove("tippy-touch"),
                  Qt.onUserInputChange("mouse")),
                  t = e
              }
          }()
            , r = function(t) {
              if (!(t.target instanceof Element))
                  return Wt();
              var e = xt(t.target, Zt.REFERENCE)
                , n = xt(t.target, Zt.POPPER);
              if (!(n && n._tippy && n._tippy.options.interactive)) {
                  if (e && e._tippy) {
                      var r = e._tippy.options
                        , i = r.trigger.indexOf("click") > -1
                        , o = r.multiple;
                      if (!o && Qt.usingTouch || !o && i)
                          return Wt(e._tippy);
                      if (r.hideOnClick !== !0 || i)
                          return
                  }
                  Wt()
              }
          }
            , i = function() {
              var t = document
                , e = t.activeElement;
              e && e.blur && ke.call(e, Zt.REFERENCE) && e.blur()
          }
            , o = function() {
              e(document.querySelectorAll(Zt.POPPER)).forEach(function(t) {
                  var e = t._tippy;
                  e && !e.options.livePlacement && e.popperInstance.scheduleUpdate()
              })
          };
          document.addEventListener("click", r),
          document.addEventListener("touchstart", t),
          window.addEventListener("blur", i),
          window.addEventListener("resize", o),
          Qt.supportsTouch || !navigator.maxTouchPoints && !navigator.msMaxTouchPoints || document.addEventListener("pointerdown", t)
      }
      function Kt(e, i, o) {
          Qt.supported && !Pe && (Yt(),
          Pe = !0),
          t(e) && r(e),
          i = ie({}, te, i);
          var a = n(e)
            , s = a[0];
          return {
              selector: e,
              options: i,
              tooltips: Qt.supported ? zt(o && s ? [s] : a, i) : [],
              destroyAll: function() {
                  this.tooltips.forEach(function(t) {
                      return t.destroy()
                  }),
                  this.tooltips = []
              }
          }
      }
      var Gt = "2.5.2"
        , Xt = "undefined" != typeof window
        , Jt = Xt && /MSIE |Trident\//.test(navigator.userAgent)
        , Qt = {};
      Xt && (Qt.supported = "requestAnimationFrame"in window,
      Qt.supportsTouch = "ontouchstart"in window,
      Qt.usingTouch = !1,
      Qt.dynamicInputDetection = !0,
      Qt.iOS = /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream,
      Qt.onUserInputChange = function() {}
      );
      for (var Zt = {
          POPPER: ".tippy-popper",
          TOOLTIP: ".tippy-tooltip",
          CONTENT: ".tippy-content",
          BACKDROP: ".tippy-backdrop",
          ARROW: ".tippy-arrow",
          ROUND_ARROW: ".tippy-roundarrow",
          REFERENCE: "[data-tippy]"
      }, te = {
          placement: "top",
          livePlacement: !0,
          trigger: "mouseenter focus",
          animation: "shift-away",
          html: !1,
          animateFill: !0,
          arrow: !1,
          delay: 0,
          duration: [350, 300],
          interactive: !1,
          interactiveBorder: 2,
          theme: "dark",
          size: "regular",
          distance: 10,
          offset: 0,
          hideOnClick: !0,
          multiple: !1,
          followCursor: !1,
          inertia: !1,
          updateDuration: 350,
          sticky: !1,
          appendTo: function() {
              return document.body
          },
          zIndex: 9999,
          touchHold: !1,
          performance: !1,
          dynamicTitle: !1,
          flip: !0,
          flipBehavior: "flip",
          arrowType: "sharp",
          arrowTransform: "",
          maxWidth: "",
          target: null,
          allowTitleHTML: !0,
          popperOptions: {},
          createPopperInstanceOnInit: !1,
          onShow: function() {},
          onShown: function() {},
          onHide: function() {},
          onHidden: function() {}
      }, ee = Qt.supported && Object.keys(te), ne = function(t, e) {
          if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
      }, re = (function() {
          function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  r.enumerable = r.enumerable || !1,
                  r.configurable = !0,
                  "value"in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r)
              }
          }
          return function(e, n, r) {
              return n && t(e.prototype, n),
              r && t(e, r),
              e
          }
      }()), ie = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
      }
      , oe = "undefined" != typeof window && "undefined" != typeof document, ae = ["Edge", "Trident", "Firefox"], se = 0, ue = 0; ue < ae.length; ue += 1)
          if (oe && navigator.userAgent.indexOf(ae[ue]) >= 0) {
              se = 1;
              break
          }
      var ce = oe && window.Promise
        , le = ce ? p : d
        , fe = oe && !(!window.MSInputMethodContext || !document.documentMode)
        , pe = oe && /MSIE 10/.test(navigator.userAgent)
        , de = function(t, e) {
          if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
      }
        , he = function() {
          function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  r.enumerable = r.enumerable || !1,
                  r.configurable = !0,
                  "value"in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r)
              }
          }
          return function(e, n, r) {
              return n && t(e.prototype, n),
              r && t(e, r),
              e
          }
      }()
        , me = function(t, e, n) {
          return e in t ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : t[e] = n,
          t
      }
        , ge = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
      }
        , ve = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
        , ye = ve.slice(3)
        , be = {
          FLIP: "flip",
          CLOCKWISE: "clockwise",
          COUNTERCLOCKWISE: "counterclockwise"
      }
        , $e = {
          shift: {
              order: 100,
              enabled: !0,
              fn: gt
          },
          offset: {
              order: 200,
              enabled: !0,
              fn: ht,
              offset: 0
          },
          preventOverflow: {
              order: 300,
              enabled: !0,
              fn: mt,
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent"
          },
          keepTogether: {
              order: 400,
              enabled: !0,
              fn: ft
          },
          arrow: {
              order: 500,
              enabled: !0,
              fn: st,
              element: "[x-arrow]"
          },
          flip: {
              order: 600,
              enabled: !0,
              fn: lt,
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport"
          },
          inner: {
              order: 700,
              enabled: !1,
              fn: yt
          },
          hide: {
              order: 800,
              enabled: !0,
              fn: vt
          },
          computeStyle: {
              order: 850,
              enabled: !0,
              fn: ot,
              gpuAcceleration: !0,
              x: "bottom",
              y: "right"
          },
          applyStyle: {
              order: 900,
              enabled: !0,
              fn: rt,
              onLoad: it,
              gpuAcceleration: void 0
          }
      }
        , we = {
          placement: "bottom",
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function() {},
          onUpdate: function() {},
          modifiers: $e
      }
        , Se = function() {
          function t(e, n) {
              var r = this
                , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              de(this, t),
              this.scheduleUpdate = function() {
                  return requestAnimationFrame(r.update)
              }
              ,
              this.update = le(this.update.bind(this)),
              this.options = ge({}, t.Defaults, i),
              this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: []
              },
              this.reference = e && e.jquery ? e[0] : e,
              this.popper = n && n.jquery ? n[0] : n,
              this.options.modifiers = {},
              Object.keys(ge({}, t.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                  r.options.modifiers[e] = ge({}, t.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
              }),
              this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                  return ge({
                      name: t
                  }, r.options.modifiers[t])
              }).sort(function(t, e) {
                  return t.order - e.order
              }),
              this.modifiers.forEach(function(t) {
                  t.enabled && h(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
              }),
              this.update();
              var o = this.options.eventsEnabled;
              o && this.enableEventListeners(),
              this.state.eventsEnabled = o
          }
          return he(t, [{
              key: "update",
              value: function() {
                  return B.call(this)
              }
          }, {
              key: "destroy",
              value: function() {
                  return Y.call(this)
              }
          }, {
              key: "enableEventListeners",
              value: function() {
                  return J.call(this)
              }
          }, {
              key: "disableEventListeners",
              value: function() {
                  return Z.call(this)
              }
          }]),
          t
      }();
      Se.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
      Se.placements = ve,
      Se.Defaults = we;
      var Te = {};
      if (Xt) {
          var _e = Element.prototype;
          Te = _e.matches || _e.matchesSelector || _e.webkitMatchesSelector || _e.mozMatchesSelector || _e.msMatchesSelector || function(t) {
              for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this; )
                  ;
              return n > -1
          }
      }
      var ke = Te
        , Ee = {}
        , Ce = function(t) {
          return function(e) {
              return e === Ee && t
          }
      }
        , xe = function() {
          function t(e) {
              ne(this, t);
              for (var n in e)
                  this[n] = e[n];
              this.state = {
                  destroyed: !1,
                  visible: !1,
                  enabled: !0
              },
              this._ = Ce({
                  mutationObservers: []
              })
          }
          return re(t, [{
              key: "enable",
              value: function() {
                  this.state.enabled = !0
              }
          }, {
              key: "disable",
              value: function() {
                  this.state.enabled = !1
              }
          }, {
              key: "show",
              value: function(t) {
                  var e = this;
                  if (!this.state.destroyed && this.state.enabled) {
                      var n = this.popper
                        , r = this.reference
                        , o = this.options
                        , a = l(n)
                        , s = a.tooltip
                        , u = a.backdrop
                        , c = a.content;
                      if ((!o.dynamicTitle || r.getAttribute("data-original-title")) && !r.hasAttribute("disabled")) {
                          if (!r.refObj && !document.documentElement.contains(r))
                              return void this.destroy();
                          o.onShow.call(n, this),
                          t = Dt(void 0 !== t ? t : o.duration, 0),
                          At([n, s, u], 0),
                          n.style.visibility = "visible",
                          this.state.visible = !0,
                          Ht.call(this, function() {
                              if (e.state.visible) {
                                  if (Rt.call(e) || e.popperInstance.scheduleUpdate(),
                                  Rt.call(e)) {
                                      e.popperInstance.disableEventListeners();
                                      var a = Dt(o.delay, 0)
                                        , l = e._(Ee).lastTriggerEvent;
                                      l && e._(Ee).followCursorListener(a && e._(Ee).lastMouseMoveEvent ? e._(Ee).lastMouseMoveEvent : l)
                                  }
                                  At([s, u, u ? c : null], t),
                                  u && getComputedStyle(u)[i("transform")],
                                  o.interactive && r.classList.add("tippy-active"),
                                  o.sticky && Ut.call(e),
                                  Pt([s, u], "visible"),
                                  Bt.call(e, t, function() {
                                      o.updateDuration || s.classList.add("tippy-notransition"),
                                      o.interactive && Ot(n),
                                      r.setAttribute("aria-describedby", "tippy-" + e.id),
                                      o.onShown.call(n, e)
                                  })
                              }
                          })
                      }
                  }
              }
          }, {
              key: "hide",
              value: function(t) {
                  var e = this;
                  if (!this.state.destroyed && this.state.enabled) {
                      var n = this.popper
                        , r = this.reference
                        , i = this.options
                        , o = l(n)
                        , a = o.tooltip
                        , s = o.backdrop
                        , u = o.content;
                      i.onHide.call(n, this),
                      t = Dt(void 0 !== t ? t : i.duration, 1),
                      i.updateDuration || a.classList.remove("tippy-notransition"),
                      i.interactive && r.classList.remove("tippy-active"),
                      n.style.visibility = "hidden",
                      this.state.visible = !1,
                      At([a, s, s ? u : null], t),
                      Pt([a, s], "hidden"),
                      i.interactive && i.trigger.indexOf("click") > -1 && Ot(r),
                      this.popperInstance.disableEventListeners(),
                      Ct(function() {
                          Bt.call(e, t, function() {
                              !e.state.visible && i.appendTo.contains(n) && (e._(Ee).isPreparingToShow || (document.removeEventListener("mousemove", e._(Ee).followCursorListener),
                              e._(Ee).lastMouseMoveEvent = null),
                              r.removeAttribute("aria-describedby"),
                              i.appendTo.removeChild(n),
                              i.onHidden.call(n, e))
                          })
                      })
                  }
              }
          }, {
              key: "destroy",
              value: function() {
                  var t = this
                    , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !0;
                  if (!this.state.destroyed) {
                      this.state.visible && this.hide(0),
                      this.listeners.forEach(function(e) {
                          t.reference.removeEventListener(e.event, e.handler)
                      }),
                      this.title && this.reference.setAttribute("title", this.title),
                      delete this.reference._tippy;
                      var r = ["data-original-title", "data-tippy", "data-tippy-delegate"];
                      r.forEach(function(e) {
                          t.reference.removeAttribute(e)
                      }),
                      this.options.target && n && e(this.reference.querySelectorAll(this.options.target)).forEach(function(t) {
                          return t._tippy && t._tippy.destroy()
                      }),
                      this.popperInstance && this.popperInstance.destroy(),
                      this._(Ee).mutationObservers.forEach(function(t) {
                          t.disconnect()
                      }),
                      this.state.destroyed = !0
                  }
              }
          }]),
          t
      }()
        , De = 1
        , Pe = !1;
      return Kt.version = Gt,
      Kt.browser = Qt,
      Kt.defaults = te,
      Kt.one = function(t, e) {
          return Kt(t, e, !0).tooltips[0]
      }
      ,
      Kt.disableAnimations = function() {
          te.updateDuration = te.duration = 0,
          te.animateFill = !1
      }
      ,
      Kt
  }),
  function(t, e) {
      "use strict";
      function n(t) {
          return e.lowercase(t.nodeName || t[0] && t[0].nodeName)
      }
      function r(t, n) {
          var r = !1
            , i = !1;
          this.ngClickOverrideEnabled = function(o) {
              return e.isDefined(o) ? (o && !i && (i = !0,
              a.$$moduleName = "ngTouch",
              n.directive("ngClick", a),
              t.decorator("ngClickDirective", ["$delegate", function(t) {
                  if (r)
                      t.shift();
                  else
                      for (var e = t.length - 1; e >= 0; ) {
                          if ("ngTouch" === t[e].$$moduleName) {
                              t.splice(e, 1);
                              break
                          }
                          e--
                      }
                  return t
              }
              ])),
              r = o,
              this) : r
          }
          ,
          this.$get = function() {
              return {
                  ngClickOverrideEnabled: function() {
                      return r
                  }
              }
          }
      }
      function i(t, n, r) {
          o.directive(t, ["$parse", "$swipe", function(i, o) {
              var a = 75
                , s = .3
                , u = 30;
              return function(c, l, f) {
                  function p(t) {
                      if (!d)
                          return !1;
                      var e = Math.abs(t.y - d.y)
                        , r = (t.x - d.x) * n;
                      return h && a > e && r > 0 && r > u && s > e / r
                  }
                  var d, h, m = i(f[t]), g = ["touch"];
                  e.isDefined(f.ngSwipeDisableMouse) || g.push("mouse"),
                  o.bind(l, {
                      start: function(t) {
                          d = t,
                          h = !0
                      },
                      cancel: function() {
                          h = !1
                      },
                      end: function(t, e) {
                          p(t) && c.$apply(function() {
                              l.triggerHandler(r),
                              m(c, {
                                  $event: e
                              })
                          })
                      }
                  }, g)
              }
          }
          ])
      }
      var o = e.module("ngTouch", []);
      o.info({
          angularVersion: "1.6.6"
      }),
      o.provider("$touch", r),
      r.$inject = ["$provide", "$compileProvider"],
      o.factory("$swipe", [function() {
          function t(t) {
              var e = t.originalEvent || t
                , n = e.touches && e.touches.length ? e.touches : [e]
                , r = e.changedTouches && e.changedTouches[0] || n[0];
              return {
                  x: r.clientX,
                  y: r.clientY
              }
          }
          function n(t, n) {
              var r = [];
              return e.forEach(t, function(t) {
                  var e = i[t][n];
                  e && r.push(e)
              }),
              r.join(" ")
          }
          var r = 10
            , i = {
              mouse: {
                  start: "mousedown",
                  move: "mousemove",
                  end: "mouseup"
              },
              touch: {
                  start: "touchstart",
                  move: "touchmove",
                  end: "touchend",
                  cancel: "touchcancel"
              },
              pointer: {
                  start: "pointerdown",
                  move: "pointermove",
                  end: "pointerup",
                  cancel: "pointercancel"
              }
          };
          return {
              bind: function(e, i, o) {
                  var a, s, u, c, l = !1;
                  o = o || ["mouse", "touch", "pointer"],
                  e.on(n(o, "start"), function(e) {
                      u = t(e),
                      l = !0,
                      a = 0,
                      s = 0,
                      c = u,
                      i.start && i.start(u, e)
                  });
                  var f = n(o, "cancel");
                  f && e.on(f, function(t) {
                      l = !1,
                      i.cancel && i.cancel(t)
                  }),
                  e.on(n(o, "move"), function(e) {
                      if (l && u) {
                          var n = t(e);
                          if (a += Math.abs(n.x - c.x),
                          s += Math.abs(n.y - c.y),
                          c = n,
                          !(r > a && r > s))
                              return s > a ? (l = !1,
                              void (i.cancel && i.cancel(e))) : (e.preventDefault(),
                              void (i.move && i.move(n, e)))
                      }
                  }),
                  e.on(n(o, "end"), function(e) {
                      l && (l = !1,
                      i.end && i.end(t(e), e))
                  })
              }
          }
      }
      ]);
      var a = ["$parse", "$timeout", "$rootElement", function(t, r, i) {
          function o(t, e, n, r) {
              return Math.abs(t - n) < g && Math.abs(e - r) < g
          }
          function a(t, e, n) {
              for (var r = 0; r < t.length; r += 2)
                  if (o(t[r], t[r + 1], e, n))
                      return t.splice(r, r + 2),
                      !0;
              return !1
          }
          function s(t) {
              if (!(Date.now() - l > m)) {
                  var e = t.touches && t.touches.length ? t.touches : [t]
                    , r = e[0].clientX
                    , i = e[0].clientY;
                  1 > r && 1 > i || p && p[0] === r && p[1] === i || (p && (p = null),
                  "label" === n(t.target) && (p = [r, i]),
                  a(f, r, i) || (t.stopPropagation(),
                  t.preventDefault(),
                  t.target && t.target.blur && t.target.blur()))
              }
          }
          function u(t) {
              var e = t.touches && t.touches.length ? t.touches : [t]
                , n = e[0].clientX
                , i = e[0].clientY;
              f.push(n, i),
              r(function() {
                  for (var t = 0; t < f.length; t += 2)
                      if (f[t] === n && f[t + 1] === i)
                          return void f.splice(t, t + 2)
              }, m, !1)
          }
          function c(t, e) {
              f || (i[0].addEventListener("click", s, !0),
              i[0].addEventListener("touchstart", u, !0),
              f = []),
              l = Date.now(),
              a(f, t, e)
          }
          var l, f, p, d = 750, h = 12, m = 2500, g = 25, v = "ng-click-active";
          return function(n, r, i) {
              function o() {
                  p = !1,
                  r.removeClass(v)
              }
              var a, s, u, l, f = t(i.ngClick), p = !1;
              r.on("touchstart", function(t) {
                  p = !0,
                  a = t.target ? t.target : t.srcElement,
                  3 === a.nodeType && (a = a.parentNode),
                  r.addClass(v),
                  s = Date.now();
                  var e = t.originalEvent || t
                    , n = e.touches && e.touches.length ? e.touches : [e]
                    , i = n[0];
                  u = i.clientX,
                  l = i.clientY
              }),
              r.on("touchcancel", function() {
                  o()
              }),
              r.on("touchend", function(t) {
                  var n = Date.now() - s
                    , f = t.originalEvent || t
                    , m = f.changedTouches && f.changedTouches.length ? f.changedTouches : f.touches && f.touches.length ? f.touches : [f]
                    , g = m[0]
                    , v = g.clientX
                    , y = g.clientY
                    , b = Math.sqrt(Math.pow(v - u, 2) + Math.pow(y - l, 2));
                  p && d > n && h > b && (c(v, y),
                  a && a.blur(),
                  e.isDefined(i.disabled) && i.disabled !== !1 || r.triggerHandler("click", [t])),
                  o()
              }),
              r.onclick = function() {}
              ,
              r.on("click", function(t, e) {
                  n.$apply(function() {
                      f(n, {
                          $event: e || t
                      })
                  })
              }),
              r.on("mousedown", function() {
                  r.addClass(v)
              }),
              r.on("mousemove mouseup", function() {
                  r.removeClass(v)
              })
          }
      }
      ];
      i("ngSwipeLeft", -1, "swipeleft"),
      i("ngSwipeRight", 1, "swiperight")
  }(window, window.angular),
  function(t, e) {
      "use strict";
      function n(t, e, n) {
          if (!t)
              throw mt("areq", "Argument '{0}' is {1}", e || "?", n || "required");
          return t
      }
      function r(t, e) {
          return t || e ? t ? e ? (G(t) && (t = t.join(" ")),
          G(e) && (e = e.join(" ")),
          t + " " + e) : t : e : ""
      }
      function i(t) {
          var e = {};
          return t && (t.to || t.from) && (e.to = t.to,
          e.from = t.from),
          e
      }
      function o(t, e, n) {
          var r = "";
          return t = G(t) ? t : t && tt(t) && t.length ? t.split(/\s+/) : [],
          K(t, function(t, i) {
              t && t.length > 0 && (r += i > 0 ? " " : "",
              r += n ? e + t : t + e)
          }),
          r
      }
      function a(t, e) {
          var n = t.indexOf(e);
          e >= 0 && t.splice(n, 1)
      }
      function s(t) {
          if (t instanceof nt)
              switch (t.length) {
              case 0:
                  return t;
              case 1:
                  if (t[0].nodeType === F)
                      return t;
                  break;
              default:
                  return nt(u(t))
              }
          return t.nodeType === F ? nt(t) : void 0
      }
      function u(t) {
          if (!t[0])
              return t;
          for (var e = 0; e < t.length; e++) {
              var n = t[e];
              if (n.nodeType === F)
                  return n
          }
      }
      function c(t, e, n) {
          K(e, function(e) {
              t.addClass(e, n)
          })
      }
      function l(t, e, n) {
          K(e, function(e) {
              t.removeClass(e, n)
          })
      }
      function f(t) {
          return function(e, n) {
              n.addClass && (c(t, e, n.addClass),
              n.addClass = null),
              n.removeClass && (l(t, e, n.removeClass),
              n.removeClass = null)
          }
      }
      function p(t) {
          if (t = t || {},
          !t.$$prepared) {
              var e = t.domOperation || rt;
              t.domOperation = function() {
                  t.$$domOperationFired = !0,
                  e(),
                  e = rt
              }
              ,
              t.$$prepared = !0
          }
          return t
      }
      function d(t, e) {
          h(t, e),
          m(t, e)
      }
      function h(t, e) {
          e.from && (t.css(e.from),
          e.from = null)
      }
      function m(t, e) {
          e.to && (t.css(e.to),
          e.to = null)
      }
      function g(t, e, n) {
          var r = e.options || {}
            , i = n.options || {}
            , o = (r.addClass || "") + " " + (i.addClass || "")
            , a = (r.removeClass || "") + " " + (i.removeClass || "")
            , s = v(t.attr("class"), o, a);
          i.preparationClasses && (r.preparationClasses = _(i.preparationClasses, r.preparationClasses),
          delete i.preparationClasses);
          var u = r.domOperation !== rt ? r.domOperation : null;
          return Y(r, i),
          u && (r.domOperation = u),
          s.addClass ? r.addClass = s.addClass : r.addClass = null,
          s.removeClass ? r.removeClass = s.removeClass : r.removeClass = null,
          e.addClass = r.addClass,
          e.removeClass = r.removeClass,
          r
      }
      function v(t, e, n) {
          function r(t) {
              tt(t) && (t = t.split(" "));
              var e = {};
              return K(t, function(t) {
                  t.length && (e[t] = !0)
              }),
              e
          }
          var i = 1
            , o = -1
            , a = {};
          t = r(t),
          e = r(e),
          K(e, function(t, e) {
              a[e] = i
          }),
          n = r(n),
          K(n, function(t, e) {
              a[e] = a[e] === i ? null : o
          });
          var s = {
              addClass: "",
              removeClass: ""
          };
          return K(a, function(e, n) {
              var r, a;
              e === i ? (r = "addClass",
              a = !t[n] || t[n + H]) : e === o && (r = "removeClass",
              a = t[n] || t[n + j]),
              a && (s[r].length && (s[r] += " "),
              s[r] += n)
          }),
          s
      }
      function y(t) {
          return t instanceof nt ? t[0] : t
      }
      function b(t, e, n) {
          var r = "";
          e && (r = o(e, N, !0)),
          n.addClass && (r = _(r, o(n.addClass, j))),
          n.removeClass && (r = _(r, o(n.removeClass, H))),
          r.length && (n.preparationClasses = r,
          t.addClass(r))
      }
      function $(t, e) {
          e.preparationClasses && (t.removeClass(e.preparationClasses),
          e.preparationClasses = null),
          e.activeClasses && (t.removeClass(e.activeClasses),
          e.activeClasses = null)
      }
      function w(t, e) {
          var n = e ? "-" + e + "s" : "";
          return T(t, [dt, n]),
          [dt, n]
      }
      function S(t, e) {
          var n = e ? "paused" : ""
            , r = M + ct;
          return T(t, [r, n]),
          [r, n]
      }
      function T(t, e) {
          var n = e[0]
            , r = e[1];
          t.style[n] = r
      }
      function _(t, e) {
          return t ? e ? t + " " + e : t : e
      }
      function k(t) {
          return [pt, t + "s"]
      }
      function E(t, e) {
          var n = e ? ft : dt;
          return [n, t + "s"]
      }
      function C(t, e, n) {
          var r = Object.create(null)
            , i = t.getComputedStyle(e) || {};
          return K(n, function(t, e) {
              var n = i[t];
              if (n) {
                  var o = n.charAt(0);
                  ("-" === o || "+" === o || o >= 0) && (n = x(n)),
                  0 === n && (n = null),
                  r[e] = n
              }
          }),
          r
      }
      function x(t) {
          var e = 0
            , n = t.split(/\s*,\s*/);
          return K(n, function(t) {
              "s" === t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1)),
              t = parseFloat(t) || 0,
              e = e ? Math.max(t, e) : t
          }),
          e
      }
      function D(t) {
          return 0 === t || null != t
      }
      function P(t, e) {
          var n = R
            , r = t + "s";
          return e ? n += it : r += " linear all",
          [n, r]
      }
      function A() {
          var t = Object.create(null);
          return {
              flush: function() {
                  t = Object.create(null)
              },
              count: function(e) {
                  var n = t[e];
                  return n ? n.total : 0
              },
              get: function(e) {
                  var n = t[e];
                  return n && n.value
              },
              put: function(e, n) {
                  t[e] ? t[e].total++ : t[e] = {
                      total: 1,
                      value: n
                  }
              }
          }
      }
      function O(t, e, n) {
          K(n, function(n) {
              t[n] = X(t[n]) ? t[n] : e.style.getPropertyValue(n)
          })
      }
      var R, I, M, L, F = 1, j = "-add", H = "-remove", N = "ng-", V = "-active", U = "-prepare", q = "ng-animate", B = "$$ngAnimateChildren", z = "";
      void 0 === t.ontransitionend && void 0 !== t.onwebkittransitionend ? (z = "-webkit-",
      R = "WebkitTransition",
      I = "webkitTransitionEnd transitionend") : (R = "transition",
      I = "transitionend"),
      void 0 === t.onanimationend && void 0 !== t.onwebkitanimationend ? (z = "-webkit-",
      M = "WebkitAnimation",
      L = "webkitAnimationEnd animationend") : (M = "animation",
      L = "animationend");
      var W, Y, K, G, X, J, Q, Z, tt, et, nt, rt, it = "Duration", ot = "Property", at = "Delay", st = "TimingFunction", ut = "IterationCount", ct = "PlayState", lt = 9999, ft = M + at, pt = M + it, dt = R + at, ht = R + it, mt = e.$$minErr("ng"), gt = ["$$rAF", function(t) {
          function e(t) {
              r = r.concat(t),
              n()
          }
          function n() {
              if (r.length) {
                  for (var e = r.shift(), o = 0; o < e.length; o++)
                      e[o]();
                  i || t(function() {
                      i || n()
                  })
              }
          }
          var r, i;
          return r = e.queue = [],
          e.waitUntilQuiet = function(e) {
              i && i(),
              i = t(function() {
                  i = null,
                  e(),
                  n()
              })
          }
          ,
          e
      }
      ], vt = ["$interpolate", function(t) {
          return {
              link: function(e, n, r) {
                  function i(t) {
                      t = "on" === t || "true" === t,
                      n.data(B, t)
                  }
                  var o = r.ngAnimateChildren;
                  tt(o) && 0 === o.length ? n.data(B, !0) : (i(t(o)(e)),
                  r.$observe("ngAnimateChildren", i))
              }
          }
      }
      ], yt = "$$animateCss", bt = 1e3, $t = 3, wt = 1.5, St = {
          transitionDuration: ht,
          transitionDelay: dt,
          transitionProperty: R + ot,
          animationDuration: pt,
          animationDelay: ft,
          animationIterationCount: M + ut
      }, Tt = {
          transitionDuration: ht,
          transitionDelay: dt,
          animationDuration: pt,
          animationDelay: ft
      }, _t = ["$animateProvider", function() {
          var t = A()
            , e = A();
          this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function(n, r, s, u, c, l, g, v) {
              function b(t, e) {
                  var n = "$$ngAnimateParentKey"
                    , r = t.parentNode
                    , i = r[n] || (r[n] = ++U);
                  return i + "-" + t.getAttribute("class") + "-" + e
              }
              function $(e, r, i, o) {
                  var a = t.get(i);
                  return a || (a = C(n, e, o),
                  "infinite" === a.animationIterationCount && (a.animationIterationCount = 1)),
                  t.put(i, a),
                  a
              }
              function _(i, a, s, u) {
                  var c;
                  if (t.count(s) > 0 && (c = e.get(s),
                  !c)) {
                      var l = o(a, "-stagger");
                      r.addClass(i, l),
                      c = C(n, i, u),
                      c.animationDuration = Math.max(c.animationDuration, 0),
                      c.transitionDuration = Math.max(c.transitionDuration, 0),
                      r.removeClass(i, l),
                      e.put(s, c)
                  }
                  return c || {}
              }
              function x(n) {
                  q.push(n),
                  g.waitUntilQuiet(function() {
                      t.flush(),
                      e.flush();
                      for (var n = c(), r = 0; r < q.length; r++)
                          q[r](n);
                      q.length = 0
                  })
              }
              function A(t, e, n) {
                  var r = $(t, e, n, St)
                    , i = r.animationDelay
                    , o = r.transitionDelay;
                  return r.maxDelay = i && o ? Math.max(i, o) : i || o,
                  r.maxDuration = Math.max(r.animationDuration * r.animationIterationCount, r.transitionDuration),
                  r
              }
              var F = f(r)
                , U = 0
                , q = [];
              return function(e, n) {
                  function c() {
                      g()
                  }
                  function f() {
                      g(!0)
                  }
                  function g(t) {
                      if (!(X || Q && J)) {
                          X = !0,
                          J = !1,
                          B.$$skipPreparationClasses || r.removeClass(e, St),
                          r.removeClass(e, kt),
                          S(Y, !1),
                          w(Y, !1),
                          K(ct, function(t) {
                              Y.style[t[0]] = ""
                          }),
                          F(e, B),
                          d(e, B),
                          Object.keys(z).length && K(z, function(t, e) {
                              t ? Y.style.setProperty(e, t) : Y.style.removeProperty(e)
                          }),
                          B.onDone && B.onDone(),
                          dt && dt.length && e.off(dt.join(" "), U);
                          var n = e.data(yt);
                          n && (u.cancel(n[0].timer),
                          e.removeData(yt)),
                          Z && Z.complete(!t)
                      }
                  }
                  function $(t) {
                      Ht.blockTransition && w(Y, t),
                      Ht.blockKeyframeAnimation && S(Y, !!t)
                  }
                  function C() {
                      return Z = new s({
                          end: c,
                          cancel: f
                      }),
                      x(rt),
                      g(),
                      {
                          $$willAnimate: !1,
                          start: function() {
                              return Z
                          },
                          end: c
                      }
                  }
                  function U(t) {
                      t.stopPropagation();
                      var e = t.originalEvent || t
                        , n = e.$manualTimeStamp || Date.now()
                        , r = parseFloat(e.elapsedTime.toFixed($t));
                      Math.max(n - ut, 0) >= nt && r >= it && (Q = !0,
                      g())
                  }
                  function q() {
                      function t() {
                          if (!X) {
                              if ($(!1),
                              K(ct, function(t) {
                                  var e = t[0]
                                    , n = t[1];
                                  Y.style[e] = n
                              }),
                              F(e, B),
                              r.addClass(e, kt),
                              Ht.recalculateTimingStyles) {
                                  if (_t = Y.getAttribute("class") + " " + St,
                                  xt = b(Y, _t),
                                  Ft = A(Y, _t, xt),
                                  jt = Ft.maxDelay,
                                  et = Math.max(jt, 0),
                                  it = Ft.maxDuration,
                                  0 === it)
                                      return void g();
                                  Ht.hasTransitions = Ft.transitionDuration > 0,
                                  Ht.hasAnimations = Ft.animationDuration > 0
                              }
                              if (Ht.applyAnimationDelay && (jt = "boolean" != typeof B.delay && D(B.delay) ? parseFloat(B.delay) : jt,
                              et = Math.max(jt, 0),
                              Ft.animationDelay = jt,
                              Nt = E(jt, !0),
                              ct.push(Nt),
                              Y.style[Nt[0]] = Nt[1]),
                              nt = et * bt,
                              at = it * bt,
                              B.easing) {
                                  var t, i = B.easing;
                                  Ht.hasTransitions && (t = R + st,
                                  ct.push([t, i]),
                                  Y.style[t] = i),
                                  Ht.hasAnimations && (t = M + st,
                                  ct.push([t, i]),
                                  Y.style[t] = i)
                              }
                              Ft.transitionDuration && dt.push(I),
                              Ft.animationDuration && dt.push(L),
                              ut = Date.now();
                              var o = nt + wt * at
                                , a = ut + o
                                , s = e.data(yt) || []
                                , c = !0;
                              if (s.length) {
                                  var l = s[0];
                                  c = a > l.expectedEndTime,
                                  c ? u.cancel(l.timer) : s.push(g)
                              }
                              if (c) {
                                  var f = u(n, o, !1);
                                  s[0] = {
                                      timer: f,
                                      expectedEndTime: a
                                  },
                                  s.push(g),
                                  e.data(yt, s)
                              }
                              dt.length && e.on(dt.join(" "), U),
                              B.to && (B.cleanupStyles && O(z, Y, Object.keys(B.to)),
                              m(e, B))
                          }
                      }
                      function n() {
                          var t = e.data(yt);
                          if (t) {
                              for (var n = 1; n < t.length; n++)
                                  t[n]();
                              e.removeData(yt)
                          }
                      }
                      if (!X) {
                          if (!Y.parentNode)
                              return void g();
                          var i = function(t) {
                              if (Q)
                                  J && t && (J = !1,
                                  g());
                              else if (J = !t,
                              Ft.animationDuration) {
                                  var e = S(Y, J);
                                  J ? ct.push(e) : a(ct, e)
                              }
                          }
                            , o = Mt > 0 && (Ft.transitionDuration && 0 === Dt.transitionDuration || Ft.animationDuration && 0 === Dt.animationDuration) && Math.max(Dt.animationDelay, Dt.transitionDelay);
                          o ? u(t, Math.floor(o * Mt * bt), !1) : t(),
                          tt.resume = function() {
                              i(!0)
                          }
                          ,
                          tt.pause = function() {
                              i(!1)
                          }
                      }
                  }
                  var B = n || {};
                  B.$$prepared || (B = p(W(B)));
                  var z = {}
                    , Y = y(e);
                  if (!Y || !Y.parentNode || !v.enabled())
                      return C();
                  var X, J, Q, Z, tt, et, nt, it, at, ut, ct = [], ft = e.attr("class"), pt = i(B), dt = [];
                  if (0 === B.duration || !l.animations && !l.transitions)
                      return C();
                  var ht = B.event && G(B.event) ? B.event.join(" ") : B.event
                    , mt = ht && B.structural
                    , gt = ""
                    , vt = "";
                  mt ? gt = o(ht, N, !0) : ht && (gt = ht),
                  B.addClass && (vt += o(B.addClass, j)),
                  B.removeClass && (vt.length && (vt += " "),
                  vt += o(B.removeClass, H)),
                  B.applyClassesEarly && vt.length && F(e, B);
                  var St = [gt, vt].join(" ").trim()
                    , _t = ft + " " + St
                    , kt = o(St, V)
                    , Et = pt.to && Object.keys(pt.to).length > 0
                    , Ct = (B.keyframeStyle || "").length > 0;
                  if (!Ct && !Et && !St)
                      return C();
                  var xt, Dt;
                  if (B.stagger > 0) {
                      var Pt = parseFloat(B.stagger);
                      Dt = {
                          transitionDelay: Pt,
                          animationDelay: Pt,
                          transitionDuration: 0,
                          animationDuration: 0
                      }
                  } else
                      xt = b(Y, _t),
                      Dt = _(Y, St, xt, Tt);
                  B.$$skipPreparationClasses || r.addClass(e, St);
                  var At;
                  if (B.transitionStyle) {
                      var Ot = [R, B.transitionStyle];
                      T(Y, Ot),
                      ct.push(Ot)
                  }
                  if (B.duration >= 0) {
                      At = Y.style[R].length > 0;
                      var Rt = P(B.duration, At);
                      T(Y, Rt),
                      ct.push(Rt)
                  }
                  if (B.keyframeStyle) {
                      var It = [M, B.keyframeStyle];
                      T(Y, It),
                      ct.push(It)
                  }
                  var Mt = Dt ? B.staggerIndex >= 0 ? B.staggerIndex : t.count(xt) : 0
                    , Lt = 0 === Mt;
                  Lt && !B.skipBlocking && w(Y, lt);
                  var Ft = A(Y, _t, xt)
                    , jt = Ft.maxDelay;
                  et = Math.max(jt, 0),
                  it = Ft.maxDuration;
                  var Ht = {};
                  if (Ht.hasTransitions = Ft.transitionDuration > 0,
                  Ht.hasAnimations = Ft.animationDuration > 0,
                  Ht.hasTransitionAll = Ht.hasTransitions && "all" === Ft.transitionProperty,
                  Ht.applyTransitionDuration = Et && (Ht.hasTransitions && !Ht.hasTransitionAll || Ht.hasAnimations && !Ht.hasTransitions),
                  Ht.applyAnimationDuration = B.duration && Ht.hasAnimations,
                  Ht.applyTransitionDelay = D(B.delay) && (Ht.applyTransitionDuration || Ht.hasTransitions),
                  Ht.applyAnimationDelay = D(B.delay) && Ht.hasAnimations,
                  Ht.recalculateTimingStyles = vt.length > 0,
                  (Ht.applyTransitionDuration || Ht.applyAnimationDuration) && (it = B.duration ? parseFloat(B.duration) : it,
                  Ht.applyTransitionDuration && (Ht.hasTransitions = !0,
                  Ft.transitionDuration = it,
                  At = Y.style[R + ot].length > 0,
                  ct.push(P(it, At))),
                  Ht.applyAnimationDuration && (Ht.hasAnimations = !0,
                  Ft.animationDuration = it,
                  ct.push(k(it)))),
                  0 === it && !Ht.recalculateTimingStyles)
                      return C();
                  if (null != B.delay) {
                      var Nt;
                      "boolean" != typeof B.delay && (Nt = parseFloat(B.delay),
                      et = Math.max(Nt, 0)),
                      Ht.applyTransitionDelay && ct.push(E(Nt)),
                      Ht.applyAnimationDelay && ct.push(E(Nt, !0))
                  }
                  return null == B.duration && Ft.transitionDuration > 0 && (Ht.recalculateTimingStyles = Ht.recalculateTimingStyles || Lt),
                  nt = et * bt,
                  at = it * bt,
                  B.skipBlocking || (Ht.blockTransition = Ft.transitionDuration > 0,
                  Ht.blockKeyframeAnimation = Ft.animationDuration > 0 && Dt.animationDelay > 0 && 0 === Dt.animationDuration),
                  B.from && (B.cleanupStyles && O(z, Y, Object.keys(B.from)),
                  h(e, B)),
                  Ht.blockTransition || Ht.blockKeyframeAnimation ? $(it) : B.skipBlocking || w(Y, !1),
                  {
                      $$willAnimate: !0,
                      end: c,
                      start: function() {
                          return X ? void 0 : (tt = {
                              end: c,
                              cancel: f,
                              resume: null,
                              pause: null
                          },
                          Z = new s(tt),
                          x(q),
                          Z)
                      }
                  }
              }
          }
          ]
      }
      ], kt = ["$$animationProvider", function(t) {
          function e(t) {
              return t.parentNode && 11 === t.parentNode.nodeType
          }
          t.drivers.push("$$animateCssDriver");
          var n = "ng-animate-shim"
            , r = "ng-anchor"
            , i = "ng-anchor-out"
            , o = "ng-anchor-in";
          this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function(t, a, s, u, c, l, f) {
              function p(t) {
                  return t.replace(/\bng-\S+\b/g, "")
              }
              function d(t, e) {
                  return tt(t) && (t = t.split(" ")),
                  tt(e) && (e = e.split(" ")),
                  t.filter(function(t) {
                      return -1 === e.indexOf(t)
                  }).join(" ")
              }
              function h(e, a, u) {
                  function c(t) {
                      var e = {}
                        , n = y(t).getBoundingClientRect();
                      return K(["width", "height", "top", "left"], function(t) {
                          var r = n[t];
                          switch (t) {
                          case "top":
                              r += v.scrollTop;
                              break;
                          case "left":
                              r += v.scrollLeft
                          }
                          e[t] = Math.floor(r) + "px"
                      }),
                      e
                  }
                  function l() {
                      var e = t(g, {
                          addClass: i,
                          delay: !0,
                          from: c(a)
                      });
                      return e.$$willAnimate ? e : null
                  }
                  function f(t) {
                      return t.attr("class") || ""
                  }
                  function h() {
                      var e = p(f(u))
                        , n = d(e, b)
                        , r = d(b, e)
                        , a = t(g, {
                          to: c(u),
                          addClass: o + " " + n,
                          removeClass: i + " " + r,
                          delay: !0
                      });
                      return a.$$willAnimate ? a : null
                  }
                  function m() {
                      g.remove(),
                      a.removeClass(n),
                      u.removeClass(n)
                  }
                  var g = nt(y(a).cloneNode(!0))
                    , b = p(f(g));
                  a.addClass(n),
                  u.addClass(n),
                  g.addClass(r),
                  $.append(g);
                  var w, S = l();
                  if (!S && (w = h(),
                  !w))
                      return m();
                  var T = S || w;
                  return {
                      start: function() {
                          function t() {
                              n && n.end()
                          }
                          var e, n = T.start();
                          return n.done(function() {
                              return n = null,
                              !w && (w = h()) ? (n = w.start(),
                              n.done(function() {
                                  n = null,
                                  m(),
                                  e.complete()
                              }),
                              n) : (m(),
                              void e.complete())
                          }),
                          e = new s({
                              end: t,
                              cancel: t
                          })
                      }
                  }
              }
              function m(t, e, n, r) {
                  var i = g(t, rt)
                    , o = g(e, rt)
                    , a = [];
                  return K(r, function(t) {
                      var e = t.out
                        , r = t["in"]
                        , i = h(n, e, r);
                      i && a.push(i)
                  }),
                  i || o || 0 !== a.length ? {
                      start: function() {
                          function t() {
                              K(e, function(t) {
                                  t.end()
                              })
                          }
                          var e = [];
                          i && e.push(i.start()),
                          o && e.push(o.start()),
                          K(a, function(t) {
                              e.push(t.start())
                          });
                          var n = new s({
                              end: t,
                              cancel: t
                          });
                          return s.all(e, function(t) {
                              n.complete(t)
                          }),
                          n
                      }
                  } : void 0
              }
              function g(e) {
                  var n = e.element
                    , r = e.options || {};
                  e.structural && (r.event = e.event,
                  r.structural = !0,
                  r.applyClassesEarly = !0,
                  "leave" === e.event && (r.onDone = r.domOperation)),
                  r.preparationClasses && (r.event = _(r.event, r.preparationClasses));
                  var i = t(n, r);
                  return i.$$willAnimate ? i : null
              }
              if (!c.animations && !c.transitions)
                  return rt;
              var v = f[0].body
                , b = y(u)
                , $ = nt(e(b) || v.contains(b) ? b : v);
              return function(t) {
                  return t.from && t.to ? m(t.from, t.to, t.classes, t.anchors) : g(t)
              }
          }
          ]
      }
      ], Et = ["$animateProvider", function(t) {
          this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function(e, n, r) {
              function i(n) {
                  n = G(n) ? n : n.split(" ");
                  for (var r = [], i = {}, o = 0; o < n.length; o++) {
                      var a = n[o]
                        , s = t.$$registeredAnimations[a];
                      s && !i[a] && (r.push(e.get(s)),
                      i[a] = !0)
                  }
                  return r
              }
              var o = f(r);
              return function(t, e, r, a) {
                  function s() {
                      a.domOperation(),
                      o(t, a)
                  }
                  function u() {
                      h = !0,
                      s(),
                      d(t, a)
                  }
                  function c(t, e, r, i, o) {
                      var a;
                      switch (r) {
                      case "animate":
                          a = [e, i.from, i.to, o];
                          break;
                      case "setClass":
                          a = [e, v, y, o];
                          break;
                      case "addClass":
                          a = [e, v, o];
                          break;
                      case "removeClass":
                          a = [e, y, o];
                          break;
                      default:
                          a = [e, o]
                      }
                      a.push(i);
                      var s = t.apply(t, a);
                      if (s)
                          if (Q(s.start) && (s = s.start()),
                          s instanceof n)
                              s.done(o);
                          else if (Q(s))
                              return s;
                      return rt
                  }
                  function l(t, e, r, i, o) {
                      var a = [];
                      return K(i, function(i) {
                          var s = i[o];
                          s && a.push(function() {
                              var i, o, a = !1, u = function(t) {
                                  a || (a = !0,
                                  (o || rt)(t),
                                  i.complete(!t))
                              };
                              return i = new n({
                                  end: function() {
                                      u()
                                  },
                                  cancel: function() {
                                      u(!0)
                                  }
                              }),
                              o = c(s, t, e, r, function(t) {
                                  var e = t === !1;
                                  u(e)
                              }),
                              i
                          })
                      }),
                      a
                  }
                  function f(t, e, r, i, o) {
                      var a = l(t, e, r, i, o);
                      if (0 === a.length) {
                          var s, u;
                          "beforeSetClass" === o ? (s = l(t, "removeClass", r, i, "beforeRemoveClass"),
                          u = l(t, "addClass", r, i, "beforeAddClass")) : "setClass" === o && (s = l(t, "removeClass", r, i, "removeClass"),
                          u = l(t, "addClass", r, i, "addClass")),
                          s && (a = a.concat(s)),
                          u && (a = a.concat(u))
                      }
                      if (0 !== a.length)
                          return function(t) {
                              var e = [];
                              return a.length && K(a, function(t) {
                                  e.push(t())
                              }),
                              e.length ? n.all(e, t) : t(),
                              function(t) {
                                  K(e, function(e) {
                                      t ? e.cancel() : e.end()
                                  })
                              }
                          }
                  }
                  var h = !1;
                  3 === arguments.length && Z(r) && (a = r,
                  r = null),
                  a = p(a),
                  r || (r = t.attr("class") || "",
                  a.addClass && (r += " " + a.addClass),
                  a.removeClass && (r += " " + a.removeClass));
                  var m, g, v = a.addClass, y = a.removeClass, b = i(r);
                  if (b.length) {
                      var $, w;
                      "leave" === e ? (w = "leave",
                      $ = "afterLeave") : (w = "before" + e.charAt(0).toUpperCase() + e.substr(1),
                      $ = e),
                      "enter" !== e && "move" !== e && (m = f(t, e, a, b, w)),
                      g = f(t, e, a, b, $)
                  }
                  if (m || g) {
                      var S;
                      return {
                          $$willAnimate: !0,
                          end: function() {
                              return S ? S.end() : (u(),
                              S = new n,
                              S.complete(!0)),
                              S
                          },
                          start: function() {
                              function t(t) {
                                  u(t),
                                  S.complete(t)
                              }
                              function e(e) {
                                  h || ((r || rt)(e),
                                  t(e))
                              }
                              if (S)
                                  return S;
                              S = new n;
                              var r, i = [];
                              return m && i.push(function(t) {
                                  r = m(t)
                              }),
                              i.length ? i.push(function(t) {
                                  s(),
                                  t(!0)
                              }) : s(),
                              g && i.push(function(t) {
                                  r = g(t)
                              }),
                              S.setHost({
                                  end: function() {
                                      e()
                                  },
                                  cancel: function() {
                                      e(!0)
                                  }
                              }),
                              n.chain(i, t),
                              S
                          }
                      }
                  }
              }
          }
          ]
      }
      ], Ct = ["$$animationProvider", function(t) {
          t.drivers.push("$$animateJsDriver"),
          this.$get = ["$$animateJs", "$$AnimateRunner", function(t, e) {
              function n(e) {
                  var n = e.element
                    , r = e.event
                    , i = e.options
                    , o = e.classes;
                  return t(n, r, o, i)
              }
              return function(t) {
                  if (t.from && t.to) {
                      var r = n(t.from)
                        , i = n(t.to);
                      if (!r && !i)
                          return;
                      return {
                          start: function() {
                              function t() {
                                  return function() {
                                      K(o, function(t) {
                                          t.end()
                                      })
                                  }
                              }
                              function n(t) {
                                  a.complete(t)
                              }
                              var o = [];
                              r && o.push(r.start()),
                              i && o.push(i.start()),
                              e.all(o, n);
                              var a = new e({
                                  end: t(),
                                  cancel: t()
                              });
                              return a
                          }
                      }
                  }
                  return n(t)
              }
          }
          ]
      }
      ], xt = "data-ng-animate", Dt = "$ngAnimatePin", Pt = ["$animateProvider", function(e) {
          function r(t) {
              if (!t)
                  return null;
              var e = t.split(h)
                , n = Object.create(null);
              return K(e, function(t) {
                  n[t] = !0
              }),
              n
          }
          function i(t, e) {
              if (t && e) {
                  var n = r(e);
                  return t.split(h).some(function(t) {
                      return n[t]
                  })
              }
          }
          function o(t, e, n) {
              return m[t].some(function(t) {
                  return t(e, n)
              })
          }
          function a(t, e) {
              var n = (t.addClass || "").length > 0
                , r = (t.removeClass || "").length > 0;
              return e ? n && r : n || r
          }
          var c = 1
            , l = 2
            , h = " "
            , m = this.rules = {
              skip: [],
              cancel: [],
              join: []
          };
          m.join.push(function(t) {
              return !t.structural && a(t)
          }),
          m.skip.push(function(t) {
              return !t.structural && !a(t)
          }),
          m.skip.push(function(t, e) {
              return "leave" === e.event && t.structural
          }),
          m.skip.push(function(t, e) {
              return e.structural && e.state === l && !t.structural
          }),
          m.cancel.push(function(t, e) {
              return e.structural && t.structural
          }),
          m.cancel.push(function(t, e) {
              return e.state === l && t.structural
          }),
          m.cancel.push(function(t, e) {
              if (e.structural)
                  return !1;
              var n = t.addClass
                , r = t.removeClass
                , o = e.addClass
                , a = e.removeClass;
              return et(n) && et(r) || et(o) && et(a) ? !1 : i(n, a) || i(r, o)
          }),
          this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$Map", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", "$$isDocumentHidden", function(r, i, h, m, v, w, S, T, _, k, E) {
              function C() {
                  var t = !1;
                  return function(e) {
                      t ? e() : i.$$postDigest(function() {
                          t = !0,
                          e()
                      })
                  }
              }
              function x(t, e) {
                  return g(t, e, {})
              }
              function D(t, e, n) {
                  var r = []
                    , i = U[n];
                  return i && K(i, function(i) {
                      at.call(i.node, e) ? r.push(i.callback) : "leave" === n && at.call(i.node, t) && r.push(i.callback)
                  }),
                  r
              }
              function P(t, e, n) {
                  var r = u(e);
                  return t.filter(function(t) {
                      var e = t.node === r && (!n || t.callback === n);
                      return !e
                  })
              }
              function A(t, e) {
                  "close" !== t || e.parentNode || st.off(e)
              }
              function O(t, e, n) {
                  function u(t, e, n, i) {
                      k(function() {
                          var t = D(T, v, e);
                          t.length ? r(function() {
                              K(t, function(t) {
                                  t(m, n, i)
                              }),
                              A(n, v)
                          }) : A(n, v)
                      }),
                      t.progress(e, n, i)
                  }
                  function f(t) {
                      $(m, h),
                      ot(m, h),
                      d(m, h),
                      h.domOperation(),
                      _.complete(!t)
                  }
                  var h = W(n)
                    , m = s(t)
                    , v = y(m)
                    , T = v && v.parentNode;
                  h = p(h);
                  var _ = new S
                    , k = C();
                  if (G(h.addClass) && (h.addClass = h.addClass.join(" ")),
                  h.addClass && !tt(h.addClass) && (h.addClass = null),
                  G(h.removeClass) && (h.removeClass = h.removeClass.join(" ")),
                  h.removeClass && !tt(h.removeClass) && (h.removeClass = null),
                  h.from && !Z(h.from) && (h.from = null),
                  h.to && !Z(h.to) && (h.to = null),
                  !(N && v && rt(v, e, n) && it(v, h)))
                      return f(),
                      _;
                  var P = ["enter", "move", "leave"].indexOf(e) >= 0
                    , O = E()
                    , F = O || H.get(v)
                    , V = !F && j.get(v) || {}
                    , U = !!V.state;
                  if (F || U && V.state === c || (F = !M(v, T, e)),
                  F)
                      return O && u(_, e, "start"),
                      f(),
                      O && u(_, e, "close"),
                      _;
                  P && R(v);
                  var q = {
                      structural: P,
                      element: m,
                      event: e,
                      addClass: h.addClass,
                      removeClass: h.removeClass,
                      close: f,
                      options: h,
                      runner: _
                  };
                  if (U) {
                      var B = o("skip", q, V);
                      if (B)
                          return V.state === l ? (f(),
                          _) : (g(m, V, q),
                          V.runner);
                      var z = o("cancel", q, V);
                      if (z)
                          if (V.state === l)
                              V.runner.end();
                          else {
                              if (!V.structural)
                                  return g(m, V, q),
                                  V.runner;
                              V.close()
                          }
                      else {
                          var Y = o("join", q, V);
                          if (Y) {
                              if (V.state !== l)
                                  return b(m, P ? e : null, h),
                                  e = q.event = V.event,
                                  h = g(m, V, q),
                                  V.runner;
                              x(m, q)
                          }
                      }
                  } else
                      x(m, q);
                  var X = q.structural;
                  if (X || (X = "animate" === q.event && Object.keys(q.options.to || {}).length > 0 || a(q)),
                  !X)
                      return f(),
                      I(v),
                      _;
                  var J = (V.counter || 0) + 1;
                  return q.counter = J,
                  L(v, c, q),
                  i.$$postDigest(function() {
                      m = s(t);
                      var n = j.get(v)
                        , r = !n;
                      n = n || {};
                      var i = m.parent() || []
                        , o = i.length > 0 && ("animate" === n.event || n.structural || a(n));
                      if (r || n.counter !== J || !o)
                          return r && (ot(m, h),
                          d(m, h)),
                          (r || P && n.event !== e) && (h.domOperation(),
                          _.end()),
                          void (o || I(v));
                      e = !n.structural && a(n, !0) ? "setClass" : n.event,
                      L(v, l);
                      var c = w(m, e, n.options);
                      _.setHost(c),
                      u(_, e, "start", {}),
                      c.done(function(t) {
                          f(!t);
                          var n = j.get(v);
                          n && n.counter === J && I(v),
                          u(_, e, "close", {})
                      })
                  }),
                  _
              }
              function R(t) {
                  var e = t.querySelectorAll("[" + xt + "]");
                  K(e, function(t) {
                      var e = parseInt(t.getAttribute(xt), 10)
                        , n = j.get(t);
                      if (n)
                          switch (e) {
                          case l:
                              n.runner.end();
                          case c:
                              j["delete"](t)
                          }
                  })
              }
              function I(t) {
                  t.removeAttribute(xt),
                  j["delete"](t)
              }
              function M(t, e) {
                  var n, r = m[0].body, i = y(h), o = t === r || "HTML" === t.nodeName, a = t === i, s = !1, u = H.get(t), c = nt.data(t, Dt);
                  for (c && (e = y(c)); e && (a || (a = e === i),
                  e.nodeType === F); ) {
                      var l = j.get(e) || {};
                      if (!s) {
                          var f = H.get(e);
                          if (f === !0 && u !== !1) {
                              u = !0;
                              break
                          }
                          f === !1 && (u = !1),
                          s = l.structural
                      }
                      if (et(n) || n === !0) {
                          var p = nt.data(e, B);
                          X(p) && (n = p)
                      }
                      if (s && n === !1)
                          break;
                      if (o || (o = e === r),
                      o && a)
                          break;
                      e = a || !(c = nt.data(e, Dt)) ? e.parentNode : y(c)
                  }
                  var d = (!s || n) && u !== !0;
                  return d && a && o
              }
              function L(t, e, n) {
                  n = n || {},
                  n.state = e,
                  t.setAttribute(xt, e);
                  var r = j.get(t)
                    , i = r ? Y(r, n) : n;
                  j.set(t, i)
              }
              var j = new v
                , H = new v
                , N = null
                , V = i.$watch(function() {
                  return 0 === T.totalPendingRequests
              }, function(t) {
                  t && (V(),
                  i.$$postDigest(function() {
                      i.$$postDigest(function() {
                          null === N && (N = !0)
                      })
                  }))
              })
                , U = Object.create(null)
                , q = e.customFilter()
                , z = e.classNameFilter()
                , Q = function() {
                  return !0
              }
                , rt = q || Q
                , it = z ? function(t, e) {
                  var n = [t.getAttribute("class"), e.addClass, e.removeClass].join(" ");
                  return z.test(n)
              }
              : Q
                , ot = f(_)
                , at = t.Node.prototype.contains || function(t) {
                  return this === t || !!(16 & this.compareDocumentPosition(t))
              }
                , st = {
                  on: function(t, e, n) {
                      var r = u(e);
                      U[t] = U[t] || [],
                      U[t].push({
                          node: r,
                          callback: n
                      }),
                      nt(e).on("$destroy", function() {
                          var i = j.get(r);
                          i || st.off(t, e, n)
                      })
                  },
                  off: function(t, e, n) {
                      if (1 !== arguments.length || tt(arguments[0])) {
                          var r = U[t];
                          r && (U[t] = 1 === arguments.length ? null : P(r, e, n))
                      } else {
                          e = arguments[0];
                          for (var i in U)
                              U[i] = P(U[i], e)
                      }
                  },
                  pin: function(t, e) {
                      n(J(t), "element", "not an element"),
                      n(J(e), "parentElement", "not an element"),
                      t.data(Dt, e)
                  },
                  push: function(t, e, n, r) {
                      return n = n || {},
                      n.domOperation = r,
                      O(t, e, n)
                  },
                  enabled: function(t, e) {
                      var n = arguments.length;
                      if (0 === n)
                          e = !!N;
                      else {
                          var r = J(t);
                          if (r) {
                              var i = y(t);
                              1 === n ? e = !H.get(i) : H.set(i, !e)
                          } else
                              e = N = !!t
                      }
                      return e
                  }
              };
              return st
          }
          ]
      }
      ], At = ["$animateProvider", function() {
          function t(t, e) {
              t.data(a, e)
          }
          function e(t) {
              t.removeData(a)
          }
          function n(t) {
              return t.data(a)
          }
          var i = "ng-animate-ref"
            , o = this.drivers = []
            , a = "$$animationRunner";
          this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$Map", "$$rAFScheduler", function(a, s, u, c, l, h) {
              function m(t) {
                  function e(t) {
                      if (t.processed)
                          return t;
                      t.processed = !0;
                      var n = t.domNode
                        , r = n.parentNode;
                      o.set(n, t);
                      for (var a; r; ) {
                          if (a = o.get(r)) {
                              a.processed || (a = e(a));
                              break
                          }
                          r = r.parentNode
                      }
                      return (a || i).children.push(t),
                      t
                  }
                  function n(t) {
                      var e, n = [], r = [];
                      for (e = 0; e < t.children.length; e++)
                          r.push(t.children[e]);
                      var i = r.length
                        , o = 0
                        , a = [];
                      for (e = 0; e < r.length; e++) {
                          var s = r[e];
                          0 >= i && (i = o,
                          o = 0,
                          n.push(a),
                          a = []),
                          a.push(s.fn),
                          s.children.forEach(function(t) {
                              o++,
                              r.push(t);
                          }),
                          i--
                      }
                      return a.length && n.push(a),
                      n
                  }
                  var r, i = {
                      children: []
                  }, o = new l;
                  for (r = 0; r < t.length; r++) {
                      var a = t[r];
                      o.set(a.domNode, t[r] = {
                          domNode: a.domNode,
                          fn: a.fn,
                          children: []
                      })
                  }
                  for (r = 0; r < t.length; r++)
                      e(t[r]);
                  return n(i)
              }
              var g = []
                , v = f(a);
              return function(l, f, b) {
                  function $(t) {
                      var e = "[" + i + "]"
                        , n = t.hasAttribute(i) ? [t] : t.querySelectorAll(e)
                        , r = [];
                      return K(n, function(t) {
                          var e = t.getAttribute(i);
                          e && e.length && r.push(t)
                      }),
                      r
                  }
                  function w(t) {
                      var e = []
                        , n = {};
                      K(t, function(t, r) {
                          var o = t.element
                            , a = y(o)
                            , s = t.event
                            , u = ["enter", "move"].indexOf(s) >= 0
                            , c = t.structural ? $(a) : [];
                          if (c.length) {
                              var l = u ? "to" : "from";
                              K(c, function(t) {
                                  var e = t.getAttribute(i);
                                  n[e] = n[e] || {},
                                  n[e][l] = {
                                      animationID: r,
                                      element: nt(t)
                                  }
                              })
                          } else
                              e.push(t)
                      });
                      var r = {}
                        , o = {};
                      return K(n, function(n) {
                          var i = n.from
                            , a = n.to;
                          if (!i || !a) {
                              var s = i ? i.animationID : a.animationID
                                , u = s.toString();
                              return void (r[u] || (r[u] = !0,
                              e.push(t[s])))
                          }
                          var c = t[i.animationID]
                            , l = t[a.animationID]
                            , f = i.animationID.toString();
                          if (!o[f]) {
                              var p = o[f] = {
                                  structural: !0,
                                  beforeStart: function() {
                                      c.beforeStart(),
                                      l.beforeStart()
                                  },
                                  close: function() {
                                      c.close(),
                                      l.close()
                                  },
                                  classes: S(c.classes, l.classes),
                                  from: c,
                                  to: l,
                                  anchors: []
                              };
                              p.classes.length ? e.push(p) : (e.push(c),
                              e.push(l))
                          }
                          o[f].anchors.push({
                              out: i.element,
                              "in": a.element
                          })
                      }),
                      e
                  }
                  function S(t, e) {
                      t = t.split(" "),
                      e = e.split(" ");
                      for (var n = [], r = 0; r < t.length; r++) {
                          var i = t[r];
                          if ("ng-" !== i.substring(0, 3))
                              for (var o = 0; o < e.length; o++)
                                  if (i === e[o]) {
                                      n.push(i);
                                      break
                                  }
                      }
                      return n.join(" ")
                  }
                  function T(t) {
                      for (var e = o.length - 1; e >= 0; e--) {
                          var n = o[e]
                            , r = u.get(n)
                            , i = r(t);
                          if (i)
                              return i
                      }
                  }
                  function _() {
                      l.addClass(q),
                      A && a.addClass(l, A),
                      O && (a.removeClass(l, O),
                      O = null)
                  }
                  function k(t, e) {
                      function r(t) {
                          var r = n(t);
                          r && r.setHost(e)
                      }
                      t.from && t.to ? (r(t.from.element),
                      r(t.to.element)) : r(t.element)
                  }
                  function E() {
                      var t = n(l);
                      !t || "leave" === f && b.$$domOperationFired || t.end()
                  }
                  function C(t) {
                      l.off("$destroy", E),
                      e(l),
                      v(l, b),
                      d(l, b),
                      b.domOperation(),
                      A && a.removeClass(l, A),
                      l.removeClass(q),
                      D.complete(!t)
                  }
                  b = p(b);
                  var x = ["enter", "move", "leave"].indexOf(f) >= 0
                    , D = new c({
                      end: function() {
                          C()
                      },
                      cancel: function() {
                          C(!0)
                      }
                  });
                  if (!o.length)
                      return C(),
                      D;
                  t(l, D);
                  var P = r(l.attr("class"), r(b.addClass, b.removeClass))
                    , A = b.tempClasses;
                  A && (P += " " + A,
                  b.tempClasses = null);
                  var O;
                  return x && (O = "ng-" + f + U,
                  a.addClass(l, O)),
                  g.push({
                      element: l,
                      classes: P,
                      event: f,
                      structural: x,
                      options: b,
                      beforeStart: _,
                      close: C
                  }),
                  l.on("$destroy", E),
                  g.length > 1 ? D : (s.$$postDigest(function() {
                      var t = [];
                      K(g, function(e) {
                          n(e.element) ? t.push(e) : e.close()
                      }),
                      g.length = 0;
                      var e = w(t)
                        , r = [];
                      K(e, function(t) {
                          r.push({
                              domNode: y(t.from ? t.from.element : t.element),
                              fn: function() {
                                  t.beforeStart();
                                  var e, r = t.close, i = t.anchors ? t.from.element || t.to.element : t.element;
                                  if (n(i)) {
                                      var o = T(t);
                                      o && (e = o.start)
                                  }
                                  if (e) {
                                      var a = e();
                                      a.done(function(t) {
                                          r(!t)
                                      }),
                                      k(t, a)
                                  } else
                                      r()
                              }
                          })
                      }),
                      h(m(r))
                  }),
                  D)
              }
          }
          ]
      }
      ], Ot = ["$animate", "$rootScope", function(t) {
          return {
              restrict: "A",
              transclude: "element",
              terminal: !0,
              priority: 600,
              link: function(e, n, r, i, o) {
                  var a, s;
                  e.$watchCollection(r.ngAnimateSwap || r["for"], function(r) {
                      a && t.leave(a),
                      s && (s.$destroy(),
                      s = null),
                      (r || 0 === r) && (s = e.$new(),
                      o(s, function(e) {
                          a = e,
                          t.enter(e, null, n)
                      }))
                  })
              }
          }
      }
      ];
      e.module("ngAnimate", [], function() {
          rt = e.noop,
          W = e.copy,
          Y = e.extend,
          nt = e.element,
          K = e.forEach,
          G = e.isArray,
          tt = e.isString,
          Z = e.isObject,
          et = e.isUndefined,
          X = e.isDefined,
          Q = e.isFunction,
          J = e.isElement
      }).info({
          angularVersion: "1.6.6"
      }).directive("ngAnimateSwap", Ot).directive("ngAnimateChildren", vt).factory("$$rAFScheduler", gt).provider("$$animateQueue", Pt).provider("$$animation", At).provider("$animateCss", _t).provider("$$animateCssDriver", kt).provider("$$animateJs", Et).provider("$$animateJsDriver", Ct)
  }(window, window.angular),
  function(t, e, n) {
      "use strict";
      function r(t, n, r, i, o, a) {
          function s(t, n) {
              return angular.element((n || e).querySelectorAll(t))
          }
          function u(t) {
              return c[t] ? c[t] : c[t] = n.get(t, {
                  cache: a
              }).then(function(t) {
                  return t.data
              })
          }
          this.compile = function(e) {
              e.template && /\.html$/.test(e.template) && (console.warn("Deprecated use of `template` option to pass a file. Please use the `templateUrl` option instead."),
              e.templateUrl = e.template,
              e.template = "");
              var n = e.templateUrl
                , a = e.template || ""
                , c = e.controller
                , l = e.controllerAs
                , f = e.resolve || {}
                , p = e.locals || {}
                , d = e.transformTemplate || angular.identity
                , h = e.bindToController;
              if (angular.forEach(f, function(t, e) {
                  angular.isString(t) ? f[e] = r.get(t) : f[e] = r.invoke(t)
              }),
              angular.extend(f, p),
              a)
                  f.$template = t.when(a);
              else {
                  if (!n)
                      throw new Error("Missing `template` / `templateUrl` option.");
                  f.$template = u(n)
              }
              return e.titleTemplate && (f.$template = t.all([f.$template, u(e.titleTemplate)]).then(function(t) {
                  var e = angular.element(t[0]);
                  return s('[ng-bind="title"]', e[0]).removeAttr("ng-bind").html(t[1]),
                  e[0].outerHTML
              })),
              e.contentTemplate && (f.$template = t.all([f.$template, u(e.contentTemplate)]).then(function(t) {
                  var n = angular.element(t[0])
                    , r = s('[ng-bind="content"]', n[0]).removeAttr("ng-bind").html(t[1]);
                  return e.templateUrl || r.next().remove(),
                  n[0].outerHTML
              })),
              t.all(f).then(function(t) {
                  var n = d(t.$template);
                  e.html && (n = n.replace(/ng-bind="/gi, 'ng-bind-html="'));
                  var r = angular.element("<div>").html(n.trim()).contents()
                    , a = i(r);
                  return {
                      locals: t,
                      element: r,
                      link: function(e) {
                          if (t.$scope = e,
                          c) {
                              var n = o(c, t, !0);
                              h && angular.extend(n.instance, t);
                              var i = angular.isObject(n) ? n : n();
                              r.data("$ngControllerController", i),
                              r.children().data("$ngControllerController", i),
                              l && (e[l] = i)
                          }
                          return a.apply(null, arguments)
                      }
                  }
              })
          }
          ;
          var c = {}
      }
      r.$inject = ["$q", "$http", "$injector", "$compile", "$controller", "$templateCache"],
      angular.module("mgcrea.ngStrap.typeahead", ["mgcrea.ngStrap.tooltip", "mgcrea.ngStrap.helpers.parseOptions"]).provider("$typeahead", function() {
          var t = this.defaults = {
              animation: "am-fade",
              prefixClass: "typeahead",
              prefixEvent: "$typeahead",
              placement: "bottom-left",
              templateUrl: "typeahead/typeahead.tpl.html",
              trigger: "focus",
              container: !1,
              keyboard: !0,
              html: !1,
              delay: 0,
              minLength: 1,
              filter: "bsAsyncFilter",
              limit: 6,
              autoSelect: !1,
              comparator: "",
              trimValue: !0
          };
          this.$get = ["$window", "$rootScope", "$tooltip", "$$rAF", "$timeout", function(e, n, r, i, o) {
              function a(e, n, a) {
                  var u = {}
                    , c = angular.extend({}, t, a);
                  u = r(e, c);
                  var l = a.scope
                    , f = u.$scope;
                  f.$resetMatches = function() {
                      f.$matches = [],
                      f.$activeIndex = c.autoSelect ? 0 : -1
                  }
                  ,
                  f.$resetMatches(),
                  f.$activate = function(t) {
                      f.$$postDigest(function() {
                          u.activate(t)
                      })
                  }
                  ,
                  f.$select = function(t) {
                      f.$$postDigest(function() {
                          u.select(t)
                      })
                  }
                  ,
                  f.$isVisible = function() {
                      return u.$isVisible()
                  }
                  ,
                  u.update = function(t) {
                      f.$matches = t,
                      f.$activeIndex >= t.length && (f.$activeIndex = c.autoSelect ? 0 : -1),
                      s(f),
                      i(u.$applyPlacement)
                  }
                  ,
                  u.activate = function(t) {
                      f.$activeIndex = t
                  }
                  ,
                  u.select = function(t) {
                      if (-1 !== t) {
                          var e = f.$matches[t].value;
                          n.$setViewValue(e),
                          n.$render(),
                          f.$resetMatches(),
                          l && l.$digest(),
                          f.$emit(c.prefixEvent + ".select", e, t, u),
                          angular.isDefined(c.onSelect) && angular.isFunction(c.onSelect) && c.onSelect(e, t, u)
                      }
                  }
                  ,
                  u.$isVisible = function() {
                      return c.minLength && n ? f.$matches.length && angular.isString(n.$viewValue) && n.$viewValue.length >= c.minLength : !!f.$matches.length
                  }
                  ,
                  u.$getIndex = function(t) {
                      var e;
                      for (e = f.$matches.length; e-- && !angular.equals(f.$matches[e].value, t); )
                          ;
                      return e
                  }
                  ,
                  u.$onMouseDown = function(t) {
                      t.preventDefault(),
                      t.stopPropagation()
                  }
                  ,
                  u.$$updateScrollTop = function(t, e) {
                      if (e > -1 && e < t.children.length) {
                          var n = t.children[e]
                            , r = n.offsetTop
                            , i = n.offsetTop + n.clientHeight
                            , o = t.scrollTop
                            , a = t.scrollTop + t.clientHeight;
                          i >= o && o > r ? t.scrollTop = Math.max(0, t.scrollTop - t.clientHeight) : i > a && (t.scrollTop = r)
                      }
                  }
                  ,
                  u.$onKeyDown = function(t) {
                      /(38|40|13)/.test(t.keyCode) && (!u.$isVisible() || 13 === t.keyCode && -1 === f.$activeIndex || (t.preventDefault(),
                      t.stopPropagation()),
                      13 === t.keyCode && f.$matches.length ? u.select(f.$activeIndex) : 38 === t.keyCode && f.$activeIndex > 0 ? f.$activeIndex-- : 40 === t.keyCode && f.$activeIndex < f.$matches.length - 1 ? f.$activeIndex++ : angular.isUndefined(f.$activeIndex) && (f.$activeIndex = 0),
                      u.$$updateScrollTop(u.$element[0], f.$activeIndex),
                      f.$digest())
                  }
                  ;
                  var p = u.show;
                  u.show = function() {
                      p(),
                      o(function() {
                          u.$element && (u.$element.on("mousedown", u.$onMouseDown),
                          c.keyboard && e && e.on("keydown", u.$onKeyDown))
                      }, 0, !1)
                  }
                  ;
                  var d = u.hide;
                  return u.hide = function() {
                      u.$element && u.$element.off("mousedown", u.$onMouseDown),
                      c.keyboard && e && e.off("keydown", u.$onKeyDown),
                      c.autoSelect || u.activate(-1),
                      d()
                  }
                  ,
                  u
              }
              function s(t) {
                  t.$$phase || t.$root && t.$root.$$phase || t.$digest()
              }
              return a.defaults = t,
              a
          }
          ]
      }).filter("bsAsyncFilter", ["$filter", function(t) {
          return function(e, n, r) {
              return e && angular.isFunction(e.then) ? e.then(function(e) {
                  return t("filter")(e, n, r)
              }) : t("filter")(e, n, r)
          }
      }
      ]).directive("bsTypeahead", ["$window", "$parse", "$q", "$typeahead", "$parseOptions", function(t, e, n, r, i) {
          var o = r.defaults;
          return {
              restrict: "EAC",
              require: "ngModel",
              link: function(t, e, n, a) {
                  e.off("change");
                  var s = {
                      scope: t
                  };
                  angular.forEach(["template", "templateUrl", "controller", "controllerAs", "placement", "container", "delay", "trigger", "keyboard", "html", "animation", "filter", "limit", "minLength", "watchOptions", "selectMode", "autoSelect", "comparator", "id", "prefixEvent", "prefixClass"], function(t) {
                      angular.isDefined(n[t]) && (s[t] = n[t])
                  });
                  var u = /^(false|0|)$/i;
                  angular.forEach(["html", "container", "trimValue", "filter"], function(t) {
                      angular.isDefined(n[t]) && u.test(n[t]) && (s[t] = !1)
                  }),
                  angular.forEach(["onBeforeShow", "onShow", "onBeforeHide", "onHide", "onSelect"], function(e) {
                      var r = "bs" + e.charAt(0).toUpperCase() + e.slice(1);
                      angular.isDefined(n[r]) && (s[e] = t.$eval(n[r]))
                  }),
                  e.attr("autocomplete") || e.attr("autocomplete", "off");
                  var c = angular.isDefined(s.filter) ? s.filter : o.filter
                    , l = s.limit || o.limit
                    , f = s.comparator || o.comparator
                    , p = n.bsOptions;
                  c && (p += " | " + c + ":$viewValue",
                  f && (p += ":" + f)),
                  l && (p += " | limitTo:" + l);
                  var d = i(p)
                    , h = r(e, a, s);
                  if (s.watchOptions) {
                      var m = d.$match[7].replace(/\|.+/, "").replace(/\(.*\)/g, "").trim();
                      t.$watchCollection(m, function() {
                          d.valuesFn(t, a).then(function(t) {
                              h.update(t),
                              a.$render()
                          })
                      })
                  }
                  t.$watch(n.ngModel, function(e) {
                      t.$modelValue = e,
                      d.valuesFn(t, a).then(function(t) {
                          return s.selectMode && !t.length && e.length > 0 ? void a.$setViewValue(a.$viewValue.substring(0, a.$viewValue.length - 1)) : (t.length > l && (t = t.slice(0, l)),
                          h.update(t),
                          void a.$render())
                      })
                  }),
                  a.$formatters.push(function(t) {
                      var e = d.displayValue(t);
                      return e ? e : angular.isDefined(t) && "object" != typeof t ? t : ""
                  }),
                  a.$render = function() {
                      if (a.$isEmpty(a.$viewValue))
                          return e.val("");
                      var t = h.$getIndex(a.$modelValue)
                        , n = -1 !== t ? h.$scope.$matches[t].label : a.$viewValue;
                      n = angular.isObject(n) ? d.displayValue(n) : n;
                      var r = n ? n.toString().replace(/<(?:.|\n)*?>/gm, "") : ""
                        , i = e[0].selectionStart
                        , o = e[0].selectionEnd;
                      e.val(s.trimValue === !1 ? r : r.trim()),
                      e[0].setSelectionRange(i, o)
                  }
                  ,
                  t.$on("$destroy", function() {
                      h && h.destroy(),
                      s = null,
                      h = null
                  })
              }
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.tooltip", ["mgcrea.ngStrap.core", "mgcrea.ngStrap.helpers.dimensions"]).provider("$tooltip", function() {
          var t = this.defaults = {
              animation: "am-fade",
              customClass: "",
              prefixClass: "tooltip",
              prefixEvent: "tooltip",
              container: !1,
              target: !1,
              placement: "top",
              templateUrl: "tooltip/tooltip.tpl.html",
              template: "",
              titleTemplate: !1,
              trigger: "hover focus",
              keyboard: !1,
              html: !1,
              show: !1,
              title: "",
              type: "",
              delay: 0,
              autoClose: !1,
              bsEnabled: !0,
              mouseDownPreventDefault: !0,
              mouseDownStopPropagation: !0,
              viewport: {
                  selector: "body",
                  padding: 0
              }
          };
          this.$get = ["$window", "$rootScope", "$bsCompiler", "$q", "$templateCache", "$http", "$animate", "$sce", "dimensions", "$$rAF", "$timeout", function(n, r, i, o, a, s, u, c, l, f, p) {
              function d(o, a) {
                  function s() {
                      I.$emit(O.prefixEvent + ".show", A),
                      angular.isDefined(O.onShow) && angular.isFunction(O.onShow) && O.onShow(A)
                  }
                  function d() {
                      if (I.$emit(O.prefixEvent + ".hide", A),
                      angular.isDefined(O.onHide) && angular.isFunction(O.onHide) && O.onHide(A),
                      N === B) {
                          if (q && "focus" === O.trigger)
                              return o[0].blur();
                          P()
                      }
                  }
                  function g() {
                      var t = O.trigger.split(" ");
                      angular.forEach(t, function(t) {
                          "click" === t || "contextmenu" === t ? o.on(t, A.toggle) : "manual" !== t && (o.on("hover" === t ? "mouseenter" : "focus", A.enter),
                          o.on("hover" === t ? "mouseleave" : "blur", A.leave),
                          "button" === M && "hover" !== t && o.on(v ? "touchstart" : "mousedown", A.$onFocusElementMouseDown))
                      })
                  }
                  function b() {
                      for (var t = O.trigger.split(" "), e = t.length; e--; ) {
                          var n = t[e];
                          "click" === n || "contextmenu" === n ? o.off(n, A.toggle) : "manual" !== n && (o.off("hover" === n ? "mouseenter" : "focus", A.enter),
                          o.off("hover" === n ? "mouseleave" : "blur", A.leave),
                          "button" === M && "hover" !== n && o.off(v ? "touchstart" : "mousedown", A.$onFocusElementMouseDown))
                      }
                  }
                  function $() {
                      "focus" !== O.trigger ? N.on("keyup", A.$onKeyUp) : o.on("keyup", A.$onFocusKeyUp)
                  }
                  function w() {
                      "focus" !== O.trigger ? N.off("keyup", A.$onKeyUp) : o.off("keyup", A.$onFocusKeyUp)
                  }
                  function S() {
                      p(function() {
                          N.on("click", _),
                          y.on("click", A.hide),
                          z = !0
                      }, 0, !1)
                  }
                  function T() {
                      z && (N.off("click", _),
                      y.off("click", A.hide),
                      z = !1)
                  }
                  function _(t) {
                      t.stopPropagation()
                  }
                  function k(t) {
                      t = t || O.target || o;
                      var r = t[0]
                        , i = "BODY" === r.tagName
                        , a = r.getBoundingClientRect()
                        , s = {};
                      for (var u in a)
                          s[u] = a[u];
                      null === s.width && (s = angular.extend({}, s, {
                          width: a.right - a.left,
                          height: a.bottom - a.top
                      }));
                      var c = i ? {
                          top: 0,
                          left: 0
                      } : l.offset(r)
                        , f = {
                          scroll: i ? e.documentElement.scrollTop || e.body.scrollTop : t.prop("scrollTop") || 0
                      }
                        , p = i ? {
                          width: e.documentElement.clientWidth,
                          height: n.innerHeight
                      } : null;
                      return angular.extend({}, s, f, p, c)
                  }
                  function E(t, e, n, r) {
                      var i, o = t.split("-");
                      switch (o[0]) {
                      case "right":
                          i = {
                              top: e.top + e.height / 2 - r / 2,
                              left: e.left + e.width
                          };
                          break;
                      case "bottom":
                          i = {
                              top: e.top + e.height,
                              left: e.left + e.width / 2 - n / 2
                          };
                          break;
                      case "left":
                          i = {
                              top: e.top + e.height / 2 - r / 2,
                              left: e.left - n
                          };
                          break;
                      default:
                          i = {
                              top: e.top - r,
                              left: e.left + e.width / 2 - n / 2
                          }
                      }
                      if (!o[1])
                          return i;
                      if ("top" === o[0] || "bottom" === o[0])
                          switch (o[1]) {
                          case "left":
                              i.left = e.left;
                              break;
                          case "right":
                              i.left = e.left + e.width - n
                          }
                      else if ("left" === o[0] || "right" === o[0])
                          switch (o[1]) {
                          case "top":
                              i.top = e.top - r + e.height;
                              break;
                          case "bottom":
                              i.top = e.top
                          }
                      return i
                  }
                  function C(t, e) {
                      var n = N[0]
                        , r = n.offsetWidth
                        , i = n.offsetHeight
                        , o = parseInt(l.css(n, "margin-top"), 10)
                        , a = parseInt(l.css(n, "margin-left"), 10);
                      isNaN(o) && (o = 0),
                      isNaN(a) && (a = 0),
                      t.top = t.top + o,
                      t.left = t.left + a,
                      l.setOffset(n, angular.extend({
                          using: function(t) {
                              N.css({
                                  top: Math.round(t.top) + "px",
                                  left: Math.round(t.left) + "px",
                                  right: ""
                              })
                          }
                      }, t), 0);
                      var s = n.offsetWidth
                        , u = n.offsetHeight;
                      if ("top" === e && u !== i && (t.top = t.top + i - u),
                      !/top-left|top-right|bottom-left|bottom-right/.test(e)) {
                          var c = x(e, t, s, u);
                          if (c.left ? t.left += c.left : t.top += c.top,
                          l.setOffset(n, t),
                          /top|right|bottom|left/.test(e)) {
                              var f = /top|bottom/.test(e)
                                , p = f ? 2 * c.left - r + s : 2 * c.top - i + u
                                , d = f ? "offsetWidth" : "offsetHeight";
                              D(p, n[d], f)
                          }
                      }
                  }
                  function x(t, e, n, r) {
                      var i = {
                          top: 0,
                          left: 0
                      };
                      if (!A.$viewport)
                          return i;
                      var o = O.viewport && O.viewport.padding || 0
                        , a = k(A.$viewport);
                      if (/right|left/.test(t)) {
                          var s = e.top - o - a.scroll
                            , u = e.top + o - a.scroll + r;
                          s < a.top ? i.top = a.top - s : u > a.top + a.height && (i.top = a.top + a.height - u)
                      } else {
                          var c = e.left - o
                            , l = e.left + o + n;
                          c < a.left ? i.left = a.left - c : l > a.right && (i.left = a.left + a.width - l)
                      }
                      return i
                  }
                  function D(t, e, n) {
                      var r = m(".tooltip-arrow, .arrow", N[0]);
                      r.css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
                  }
                  function P() {
                      clearTimeout(F),
                      A.$isShown && null !== N && (O.autoClose && T(),
                      O.keyboard && w()),
                      U && (U.$destroy(),
                      U = null),
                      N && (N.remove(),
                      N = A.$element = null)
                  }
                  var A = {}
                    , O = A.$options = angular.extend({}, t, a)
                    , R = A.$promise = i.compile(O)
                    , I = A.$scope = O.scope && O.scope.$new() || r.$new()
                    , M = o[0].nodeName.toLowerCase();
                  if (O.delay && angular.isString(O.delay)) {
                      var L = O.delay.split(",").map(parseFloat);
                      O.delay = L.length > 1 ? {
                          show: L[0],
                          hide: L[1]
                      } : L[0]
                  }
                  A.$id = O.id || o.attr("id") || "",
                  O.title && (I.title = c.trustAsHtml(O.title)),
                  I.$setEnabled = function(t) {
                      I.$$postDigest(function() {
                          A.setEnabled(t)
                      })
                  }
                  ,
                  I.$hide = function() {
                      I.$$postDigest(function() {
                          A.hide()
                      })
                  }
                  ,
                  I.$show = function() {
                      I.$$postDigest(function() {
                          A.show()
                      })
                  }
                  ,
                  I.$toggle = function() {
                      I.$$postDigest(function() {
                          A.toggle()
                      })
                  }
                  ,
                  A.$isShown = I.$isShown = !1;
                  var F, j, H, N, V, U;
                  R.then(function(t) {
                      H = t,
                      A.init()
                  }),
                  A.init = function() {
                      O.delay && angular.isNumber(O.delay) && (O.delay = {
                          show: O.delay,
                          hide: O.delay
                      }),
                      "self" === O.container ? V = o : angular.isElement(O.container) ? V = O.container : O.container && (V = m(O.container)),
                      g(),
                      O.target && (O.target = angular.isElement(O.target) ? O.target : m(O.target)),
                      O.show && I.$$postDigest(function() {
                          "focus" === O.trigger ? o[0].focus() : A.show()
                      })
                  }
                  ,
                  A.destroy = function() {
                      b(),
                      P(),
                      I.$destroy()
                  }
                  ,
                  A.enter = function() {
                      return clearTimeout(F),
                      j = "in",
                      O.delay && O.delay.show ? void (F = setTimeout(function() {
                          "in" === j && A.show()
                      }, O.delay.show)) : A.show()
                  }
                  ,
                  A.show = function() {
                      if (O.bsEnabled && !A.$isShown) {
                          I.$emit(O.prefixEvent + ".show.before", A),
                          angular.isDefined(O.onBeforeShow) && angular.isFunction(O.onBeforeShow) && O.onBeforeShow(A);
                          var t, e;
                          O.container ? (t = V,
                          e = V[0].lastChild ? angular.element(V[0].lastChild) : null) : (t = null,
                          e = o),
                          N && P(),
                          U = A.$scope.$new(),
                          N = A.$element = H.link(U, function() {}),
                          N.css({
                              top: "-9999px",
                              left: "-9999px",
                              right: "auto",
                              display: "block",
                              visibility: "hidden"
                          }),
                          O.animation && N.addClass(O.animation),
                          O.type && N.addClass(O.prefixClass + "-" + O.type),
                          O.customClass && N.addClass(O.customClass),
                          e ? e.after(N) : t.prepend(N),
                          A.$isShown = I.$isShown = !0,
                          h(I),
                          A.$applyPlacement(),
                          angular.version.minor <= 2 ? u.enter(N, t, e, s) : u.enter(N, t, e).then(s),
                          h(I),
                          f(function() {
                              N && N.css({
                                  visibility: "visible"
                              }),
                              O.keyboard && ("focus" !== O.trigger && A.focus(),
                              $())
                          }),
                          O.autoClose && S()
                      }
                  }
                  ,
                  A.leave = function() {
                      return clearTimeout(F),
                      j = "out",
                      O.delay && O.delay.hide ? void (F = setTimeout(function() {
                          "out" === j && A.hide()
                      }, O.delay.hide)) : A.hide()
                  }
                  ;
                  var q, B;
                  A.hide = function(t) {
                      A.$isShown && (I.$emit(O.prefixEvent + ".hide.before", A),
                      angular.isDefined(O.onBeforeHide) && angular.isFunction(O.onBeforeHide) && O.onBeforeHide(A),
                      q = t,
                      B = N,
                      null !== N && (angular.version.minor <= 2 ? u.leave(N, d) : u.leave(N).then(d)),
                      A.$isShown = I.$isShown = !1,
                      h(I),
                      O.keyboard && null !== N && w(),
                      O.autoClose && null !== N && T())
                  }
                  ,
                  A.toggle = function(t) {
                      t && t.preventDefault(),
                      A.$isShown ? A.leave() : A.enter()
                  }
                  ,
                  A.focus = function() {
                      N[0].focus()
                  }
                  ,
                  A.setEnabled = function(t) {
                      O.bsEnabled = t
                  }
                  ,
                  A.setViewport = function(t) {
                      O.viewport = t
                  }
                  ,
                  A.$applyPlacement = function() {
                      if (N) {
                          var e = O.placement
                            , n = /\s?auto?\s?/i
                            , r = n.test(e);
                          r && (e = e.replace(n, "") || t.placement),
                          N.addClass(O.placement);
                          var i = k()
                            , o = N.prop("offsetWidth")
                            , a = N.prop("offsetHeight");
                          if (A.$viewport = O.viewport && m(O.viewport.selector || O.viewport),
                          r) {
                              var s = e
                                , u = k(A.$viewport);
                              /bottom/.test(s) && i.bottom + a > u.bottom ? e = s.replace("bottom", "top") : /top/.test(s) && i.top - a < u.top && (e = s.replace("top", "bottom")),
                              /left/.test(s) && i.left - o < u.left ? e = e.replace("left", "right") : /right/.test(s) && i.right + o > u.width && (e = e.replace("right", "left")),
                              N.removeClass(s).addClass(e)
                          }
                          var c = E(e, i, o, a);
                          C(c, e)
                      }
                  }
                  ,
                  A.$onKeyUp = function(t) {
                      27 === t.which && A.$isShown && (A.hide(),
                      t.stopPropagation())
                  }
                  ,
                  A.$onFocusKeyUp = function(t) {
                      27 === t.which && (o[0].blur(),
                      t.stopPropagation())
                  }
                  ,
                  A.$onFocusElementMouseDown = function(t) {
                      O.mouseDownPreventDefault && t.preventDefault(),
                      O.mouseDownStopPropagation && t.stopPropagation(),
                      A.$isShown ? o[0].blur() : o[0].focus()
                  }
                  ;
                  var z = !1;
                  return A
              }
              function h(t) {
                  t.$$phase || t.$root && t.$root.$$phase || t.$digest()
              }
              function m(t, n) {
                  return angular.element((n || e).querySelectorAll(t))
              }
              var g = /(ip[ao]d|iphone|android)/gi.test(n.navigator.userAgent)
                , v = "createTouch"in n.document && g
                , y = angular.element(n.document);
              return d
          }
          ]
      }).directive("bsTooltip", ["$window", "$location", "$sce", "$parse", "$tooltip", "$$rAF", function(t, e, n, r, i, o) {
          return {
              restrict: "EAC",
              scope: !0,
              link: function(t, e, r) {
                  var a, s = {
                      scope: t
                  };
                  angular.forEach(["template", "templateUrl", "controller", "controllerAs", "titleTemplate", "placement", "container", "delay", "trigger", "html", "animation", "backdropAnimation", "type", "customClass", "id"], function(t) {
                      angular.isDefined(r[t]) && (s[t] = r[t])
                  });
                  var u = /^(false|0|)$/i;
                  angular.forEach(["html", "container"], function(t) {
                      angular.isDefined(r[t]) && u.test(r[t]) && (s[t] = !1)
                  }),
                  angular.forEach(["onBeforeShow", "onShow", "onBeforeHide", "onHide"], function(e) {
                      var n = "bs" + e.charAt(0).toUpperCase() + e.slice(1);
                      angular.isDefined(r[n]) && (s[e] = t.$eval(r[n]))
                  });
                  var c = e.attr("data-target");
                  angular.isDefined(c) && (u.test(c) ? s.target = !1 : s.target = c),
                  t.hasOwnProperty("title") || (t.title = ""),
                  r.$observe("title", function(e) {
                      if (angular.isDefined(e) || !t.hasOwnProperty("title")) {
                          var r = t.title;
                          t.title = n.trustAsHtml(e),
                          angular.isDefined(r) && o(function() {
                              a && a.$applyPlacement()
                          })
                      }
                  }),
                  r.$observe("disabled", function(t) {
                      t && a.$isShown && a.hide()
                  }),
                  r.bsTooltip && t.$watch(r.bsTooltip, function(e, n) {
                      angular.isObject(e) ? angular.extend(t, e) : t.title = e,
                      angular.isDefined(n) && o(function() {
                          a && a.$applyPlacement()
                      })
                  }, !0),
                  r.bsShow && t.$watch(r.bsShow, function(t) {
                      a && angular.isDefined(t) && (angular.isString(t) && (t = !!t.match(/true|,?(tooltip),?/i)),
                      t === !0 ? a.show() : a.hide())
                  }),
                  r.bsEnabled && t.$watch(r.bsEnabled, function(t) {
                      a && angular.isDefined(t) && (angular.isString(t) && (t = !!t.match(/true|1|,?(tooltip),?/i)),
                      t === !1 ? a.setEnabled(!1) : a.setEnabled(!0))
                  }),
                  r.viewport && t.$watch(r.viewport, function(t) {
                      a && angular.isDefined(t) && a.setViewport(t)
                  }),
                  a = i(e, s),
                  t.$on("$destroy", function() {
                      a && a.destroy(),
                      s = null,
                      a = null
                  })
              }
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.timepicker", ["mgcrea.ngStrap.helpers.dateParser", "mgcrea.ngStrap.helpers.dateFormatter", "mgcrea.ngStrap.tooltip"]).provider("$timepicker", function() {
          var t = this.defaults = {
              animation: "am-fade",
              defaultDate: "auto",
              prefixClass: "timepicker",
              placement: "bottom-left",
              templateUrl: "timepicker/timepicker.tpl.html",
              trigger: "focus",
              container: !1,
              keyboard: !0,
              html: !1,
              delay: 0,
              useNative: !0,
              timeType: "date",
              timeFormat: "shortTime",
              timezone: null,
              modelTimeFormat: null,
              autoclose: !1,
              minTime: -(1 / 0),
              maxTime: +(1 / 0),
              length: 5,
              hourStep: 1,
              minuteStep: 5,
              secondStep: 5,
              roundDisplay: !1,
              iconUp: "glyphicon glyphicon-chevron-up",
              iconDown: "glyphicon glyphicon-chevron-down",
              arrowBehavior: "pager"
          };
          this.$get = ["$window", "$document", "$rootScope", "$sce", "$dateFormatter", "$tooltip", "$timeout", function(e, n, r, i, o, a, s) {
              function u(e, n, r) {
                  function i(t) {
                      var e = 6e4 * h.minuteStep;
                      return new Date(Math.floor(t.getTime() / e) * e)
                  }
                  function u(t, n) {
                      var r = t + n;
                      if (e[0].createTextRange) {
                          var i = e[0].createTextRange();
                          i.collapse(!0),
                          i.moveStart("character", t),
                          i.moveEnd("character", r),
                          i.select()
                      } else
                          e[0].setSelectionRange ? e[0].setSelectionRange(t, r) : angular.isUndefined(e[0].selectionStart) && (e[0].selectionStart = t,
                          e[0].selectionEnd = r)
                  }
                  function f() {
                      e[0].focus()
                  }
                  var p = a(e, angular.extend({}, t, r))
                    , d = r.scope
                    , h = p.$options
                    , m = p.$scope
                    , g = h.lang
                    , v = function(t, e, n) {
                      return o.formatDate(t, e, g, n)
                  }
                    , y = 0
                    , b = h.roundDisplay ? i(new Date) : new Date
                    , $ = n.$dateValue || b
                    , w = {
                      hour: $.getHours(),
                      meridian: $.getHours() < 12,
                      minute: $.getMinutes(),
                      second: $.getSeconds(),
                      millisecond: $.getMilliseconds()
                  }
                    , S = o.getDatetimeFormat(h.timeFormat, g)
                    , T = o.hoursFormat(S)
                    , _ = o.timeSeparator(S)
                    , k = o.minutesFormat(S)
                    , E = o.secondsFormat(S)
                    , C = o.showSeconds(S)
                    , x = o.showAM(S);
                  m.$iconUp = h.iconUp,
                  m.$iconDown = h.iconDown,
                  m.$select = function(t, e) {
                      p.select(t, e)
                  }
                  ,
                  m.$moveIndex = function(t, e) {
                      p.$moveIndex(t, e)
                  }
                  ,
                  m.$switchMeridian = function(t) {
                      p.switchMeridian(t)
                  }
                  ,
                  p.update = function(t) {
                      angular.isDate(t) && !isNaN(t.getTime()) ? (p.$date = t,
                      angular.extend(w, {
                          hour: t.getHours(),
                          minute: t.getMinutes(),
                          second: t.getSeconds(),
                          millisecond: t.getMilliseconds()
                      }),
                      p.$build()) : p.$isBuilt || p.$build()
                  }
                  ,
                  p.select = function(t, e, r) {
                      n.$dateValue && !isNaN(n.$dateValue.getTime()) || (n.$dateValue = "today" === h.defaultDate ? new Date : new Date(1970,0,1)),
                      angular.isDate(t) || (t = new Date(t)),
                      0 === e ? n.$dateValue.setHours(t.getHours()) : 1 === e ? n.$dateValue.setMinutes(t.getMinutes()) : 2 === e && n.$dateValue.setSeconds(t.getSeconds()),
                      n.$setViewValue(angular.copy(n.$dateValue)),
                      n.$render(),
                      h.autoclose && !r && s(function() {
                          p.hide(!0)
                      })
                  }
                  ,
                  p.switchMeridian = function(t) {
                      if (n.$dateValue && !isNaN(n.$dateValue.getTime())) {
                          var e = (t || n.$dateValue).getHours();
                          n.$dateValue.setHours(12 > e ? e + 12 : e - 12),
                          n.$setViewValue(angular.copy(n.$dateValue)),
                          n.$render()
                      }
                  }
                  ,
                  p.$build = function() {
                      var t, e, n = m.midIndex = parseInt(h.length / 2, 10), r = [];
                      for (t = 0; t < h.length; t++)
                          e = new Date(1970,0,1,w.hour - (n - t) * h.hourStep),
                          r.push({
                              date: e,
                              label: v(e, T),
                              selected: p.$date && p.$isSelected(e, 0),
                              disabled: p.$isDisabled(e, 0)
                          });
                      var i, o = [];
                      for (t = 0; t < h.length; t++)
                          i = new Date(1970,0,1,0,w.minute - (n - t) * h.minuteStep),
                          o.push({
                              date: i,
                              label: v(i, k),
                              selected: p.$date && p.$isSelected(i, 1),
                              disabled: p.$isDisabled(i, 1)
                          });
                      var a, s = [];
                      for (t = 0; t < h.length; t++)
                          a = new Date(1970,0,1,0,0,w.second - (n - t) * h.secondStep),
                          s.push({
                              date: a,
                              label: v(a, E),
                              selected: p.$date && p.$isSelected(a, 2),
                              disabled: p.$isDisabled(a, 2)
                          });
                      var u = [];
                      for (t = 0; t < h.length; t++)
                          C ? u.push([r[t], o[t], s[t]]) : u.push([r[t], o[t]]);
                      m.rows = u,
                      m.showSeconds = C,
                      m.showAM = x,
                      m.isAM = (p.$date || r[n].date).getHours() < 12,
                      m.timeSeparator = _,
                      p.$isBuilt = !0
                  }
                  ,
                  p.$isSelected = function(t, e) {
                      return p.$date ? 0 === e ? t.getHours() === p.$date.getHours() : 1 === e ? t.getMinutes() === p.$date.getMinutes() : 2 === e ? t.getSeconds() === p.$date.getSeconds() : void 0 : !1
                  }
                  ,
                  p.$isDisabled = function(t, e) {
                      var n;
                      return 0 === e ? n = t.getTime() + 6e4 * w.minute + 1e3 * w.second : 1 === e ? n = t.getTime() + 36e5 * w.hour + 1e3 * w.second : 2 === e && (n = t.getTime() + 36e5 * w.hour + 6e4 * w.minute),
                      n < 1 * h.minTime || n > 1 * h.maxTime
                  }
                  ,
                  m.$arrowAction = function(t, e) {
                      "picker" === h.arrowBehavior ? p.$setTimeByStep(t, e) : p.$moveIndex(t, e)
                  }
                  ,
                  p.$setTimeByStep = function(t, e) {
                      var n = new Date(p.$date || $)
                        , r = n.getHours()
                        , i = n.getMinutes()
                        , o = n.getSeconds();
                      0 === e ? n.setHours(r - parseInt(h.hourStep, 10) * t) : 1 === e ? n.setMinutes(i - parseInt(h.minuteStep, 10) * t) : 2 === e && n.setSeconds(o - parseInt(h.secondStep, 10) * t),
                      p.select(n, e, !0)
                  }
                  ,
                  p.$moveIndex = function(t, e) {
                      var n;
                      0 === e ? (n = new Date(1970,0,1,w.hour + t * h.length,w.minute,w.second),
                      angular.extend(w, {
                          hour: n.getHours()
                      })) : 1 === e ? (n = new Date(1970,0,1,w.hour,w.minute + t * h.length * h.minuteStep,w.second),
                      angular.extend(w, {
                          minute: n.getMinutes()
                      })) : 2 === e && (n = new Date(1970,0,1,w.hour,w.minute,w.second + t * h.length * h.secondStep),
                      angular.extend(w, {
                          second: n.getSeconds()
                      })),
                      p.$build()
                  }
                  ,
                  p.$onMouseDown = function(t) {
                      if ("input" !== t.target.nodeName.toLowerCase() && t.preventDefault(),
                      t.stopPropagation(),
                      l) {
                          var e = angular.element(t.target);
                          "button" !== e[0].nodeName.toLowerCase() && (e = e.parent()),
                          e.triggerHandler("click")
                      }
                  }
                  ,
                  p.$onKeyDown = function(t) {
                      if (/(38|37|39|40|13)/.test(t.keyCode) && !t.shiftKey && !t.altKey) {
                          if (t.preventDefault(),
                          t.stopPropagation(),
                          13 === t.keyCode)
                              return void p.hide(!0);
                          var e = new Date(p.$date)
                            , n = e.getHours()
                            , r = v(e, T).length
                            , i = e.getMinutes()
                            , o = v(e, k).length
                            , a = e.getSeconds()
                            , s = v(e, E).length
                            , c = 1
                            , l = /(37|39)/.test(t.keyCode)
                            , f = 2 + 1 * C + 1 * x;
                          l && (37 === t.keyCode ? y = 1 > y ? f - 1 : y - 1 : 39 === t.keyCode && (y = f - 1 > y ? y + 1 : 0));
                          var m = [0, r]
                            , g = 0;
                          38 === t.keyCode && (g = -1),
                          40 === t.keyCode && (g = 1);
                          var b = 2 === y && C
                            , $ = 2 === y && !C || 3 === y && C;
                          0 === y ? (e.setHours(n + g * parseInt(h.hourStep, 10)),
                          r = v(e, T).length,
                          m = [0, r]) : 1 === y ? (e.setMinutes(i + g * parseInt(h.minuteStep, 10)),
                          o = v(e, k).length,
                          m = [r + c, o]) : b ? (e.setSeconds(a + g * parseInt(h.secondStep, 10)),
                          s = v(e, E).length,
                          m = [r + c + o + c, s]) : $ && (l || p.switchMeridian(),
                          m = [r + c + o + c + (s + c) * C, 2]),
                          p.select(e, y, !0),
                          u(m[0], m[1]),
                          d.$digest()
                      }
                  }
                  ;
                  var D = p.init;
                  p.init = function() {
                      return c && h.useNative ? (e.prop("type", "time"),
                      void e.css("-webkit-appearance", "textfield")) : (l && (e.prop("type", "text"),
                      e.attr("readonly", "true"),
                      e.on("click", f)),
                      void D())
                  }
                  ;
                  var P = p.destroy;
                  p.destroy = function() {
                      c && h.useNative && e.off("click", f),
                      P()
                  }
                  ;
                  var A = p.show;
                  p.show = function() {
                      !l && e.attr("readonly") || e.attr("disabled") || (A(),
                      s(function() {
                          p.$element && p.$element.on(l ? "touchstart" : "mousedown", p.$onMouseDown),
                          h.keyboard && e && e.on("keydown", p.$onKeyDown)
                      }, 0, !1))
                  }
                  ;
                  var O = p.hide;
                  return p.hide = function(t) {
                      p.$isShown && (p.$element && p.$element.off(l ? "touchstart" : "mousedown", p.$onMouseDown),
                      h.keyboard && e && e.off("keydown", p.$onKeyDown),
                      O(t))
                  }
                  ,
                  p
              }
              var c = /(ip[ao]d|iphone|android)/gi.test(e.navigator.userAgent)
                , l = "createTouch"in e.document && c;
              return t.lang || (t.lang = o.getDefaultLocale()),
              u.defaults = t,
              u
          }
          ]
      }).directive("bsTimepicker", ["$window", "$parse", "$q", "$dateFormatter", "$dateParser", "$timepicker", function(t, e, r, i, o, a) {
          var s = a.defaults
            , u = /(ip[ao]d|iphone|android)/gi.test(t.navigator.userAgent);
          return {
              restrict: "EAC",
              require: "ngModel",
              link: function(t, e, r, c) {
                  function l(t) {
                      if (angular.isDate(t)) {
                          var e = isNaN(p.minTime) || new Date(t.getTime()).setFullYear(1970, 0, 1) >= p.minTime
                            , n = isNaN(p.maxTime) || new Date(t.getTime()).setFullYear(1970, 0, 1) <= p.maxTime
                            , r = e && n;
                          c.$setValidity("date", r),
                          c.$setValidity("min", e),
                          c.$setValidity("max", n),
                          r && (c.$dateValue = t)
                      }
                  }
                  function f() {
                      return !c.$dateValue || isNaN(c.$dateValue.getTime()) ? "" : g(c.$dateValue, p.timeFormat)
                  }
                  var p = {
                      scope: t
                  };
                  angular.forEach(["template", "templateUrl", "controller", "controllerAs", "placement", "container", "delay", "trigger", "keyboard", "html", "animation", "autoclose", "timeType", "timeFormat", "timezone", "modelTimeFormat", "useNative", "hourStep", "minuteStep", "secondStep", "length", "arrowBehavior", "iconUp", "iconDown", "roundDisplay", "id", "prefixClass", "prefixEvent", "defaultDate"], function(t) {
                      angular.isDefined(r[t]) && (p[t] = r[t])
                  });
                  var d = /^(false|0|)$/i;
                  angular.forEach(["html", "container", "autoclose", "useNative", "roundDisplay"], function(t) {
                      angular.isDefined(r[t]) && d.test(r[t]) && (p[t] = !1)
                  }),
                  angular.forEach(["onBeforeShow", "onShow", "onBeforeHide", "onHide"], function(e) {
                      var n = "bs" + e.charAt(0).toUpperCase() + e.slice(1);
                      angular.isDefined(r[n]) && (p[e] = t.$eval(r[n]))
                  }),
                  u && (p.useNative || s.useNative) && (p.timeFormat = "HH:mm");
                  var h = a(e, c, p);
                  p = h.$options;
                  var m = p.lang
                    , g = function(t, e, n) {
                      return i.formatDate(t, e, m, n)
                  };
                  r.bsShow && t.$watch(r.bsShow, function(t) {
                      h && angular.isDefined(t) && (angular.isString(t) && (t = !!t.match(/true|,?(timepicker),?/i)),
                      t === !0 ? h.show() : h.hide())
                  });
                  var v = o({
                      format: p.timeFormat,
                      lang: m
                  });
                  angular.forEach(["minTime", "maxTime"], function(t) {
                      angular.isDefined(r[t]) && r.$observe(t, function(e) {
                          h.$options[t] = v.getTimeForAttribute(t, e),
                          isNaN(h.$options[t]) || h.$build(),
                          l(c.$dateValue)
                      })
                  }),
                  t.$watch(r.ngModel, function() {
                      h.update(c.$dateValue)
                  }, !0),
                  c.$parsers.unshift(function(t) {
                      var e;
                      if (!t)
                          return c.$setValidity("date", !0),
                          null;
                      var r = angular.isDate(t) ? t : v.parse(t, c.$dateValue);
                      return !r || isNaN(r.getTime()) ? (c.$setValidity("date", !1),
                      n) : (l(r),
                      "string" === p.timeType ? (e = v.timezoneOffsetAdjust(r, p.timezone, !0),
                      g(e, p.modelTimeFormat || p.timeFormat)) : (e = v.timezoneOffsetAdjust(c.$dateValue, p.timezone, !0),
                      "number" === p.timeType ? e.getTime() : "unix" === p.timeType ? e.getTime() / 1e3 : "iso" === p.timeType ? e.toISOString() : new Date(e)))
                  }),
                  c.$formatters.push(function(t) {
                      var e;
                      return e = angular.isUndefined(t) || null === t ? NaN : angular.isDate(t) ? t : "string" === p.timeType ? v.parse(t, null, p.modelTimeFormat) : "unix" === p.timeType ? new Date(1e3 * t) : new Date(t),
                      c.$dateValue = v.timezoneOffsetAdjust(e, p.timezone),
                      f()
                  }),
                  c.$render = function() {
                      e.val(f())
                  }
                  ,
                  t.$on("$destroy", function() {
                      h && h.destroy(),
                      p = null,
                      h = null
                  })
              }
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.tab", []).provider("$tab", function() {
          var t = this.defaults = {
              animation: "am-fade",
              template: "tab/tab.tpl.html",
              navClass: "nav-tabs",
              activeClass: "active"
          }
            , e = this.controller = function(e, n, r) {
              var i = this;
              i.$options = angular.copy(t),
              angular.forEach(["animation", "navClass", "activeClass"], function(t) {
                  angular.isDefined(r[t]) && (i.$options[t] = r[t])
              }),
              e.$navClass = i.$options.navClass,
              e.$activeClass = i.$options.activeClass,
              i.$panes = e.$panes = [],
              i.$activePaneChangeListeners = i.$viewChangeListeners = [],
              i.$push = function(t) {
                  angular.isUndefined(i.$panes.$active) && e.$setActive(t.name || 0),
                  i.$panes.push(t)
              }
              ,
              i.$remove = function(t) {
                  var e, n = i.$panes.indexOf(t), r = i.$panes.$active;
                  e = angular.isString(r) ? i.$panes.map(function(t) {
                      return t.name
                  }).indexOf(r) : i.$panes.$active,
                  i.$panes.splice(n, 1),
                  e > n ? e-- : n === e && e === i.$panes.length && e--,
                  e >= 0 && e < i.$panes.length ? i.$setActive(i.$panes[e].name || e) : i.$setActive()
              }
              ,
              i.$setActive = e.$setActive = function(t) {
                  i.$panes.$active = t,
                  i.$activePaneChangeListeners.forEach(function(t) {
                      t()
                  })
              }
              ,
              i.$isActive = e.$isActive = function(t, e) {
                  return i.$panes.$active === t.name || i.$panes.$active === e
              }
          }
          ;
          this.$get = function() {
              var n = {};
              return n.defaults = t,
              n.controller = e,
              n
          }
      }).directive("bsTabs", ["$window", "$animate", "$tab", "$parse", function(t, e, n, r) {
          var i = n.defaults;
          return {
              require: ["?ngModel", "bsTabs"],
              transclude: !0,
              scope: !0,
              controller: ["$scope", "$element", "$attrs", n.controller],
              templateUrl: function(t, e) {
                  return e.template || i.template
              },
              link: function(t, e, n, i) {
                  var o = i[0]
                    , a = i[1];
                  if (o && (a.$activePaneChangeListeners.push(function() {
                      o.$setViewValue(a.$panes.$active)
                  }),
                  o.$formatters.push(function(t) {
                      return a.$setActive(t),
                      t
                  })),
                  n.bsActivePane) {
                      var s = r(n.bsActivePane);
                      a.$activePaneChangeListeners.push(function() {
                          s.assign(t, a.$panes.$active)
                      }),
                      t.$watch(n.bsActivePane, function(t) {
                          a.$setActive(t)
                      }, !0)
                  }
              }
          }
      }
      ]).directive("bsPane", ["$window", "$animate", "$sce", function(t, e, n) {
          return {
              require: ["^?ngModel", "^bsTabs"],
              scope: !0,
              link: function(t, r, i, o) {
                  function a() {
                      var n = s.$panes.indexOf(t);
                      e[s.$isActive(t, n) ? "addClass" : "removeClass"](r, s.$options.activeClass)
                  }
                  var s = o[1];
                  r.addClass("tab-pane"),
                  i.$observe("title", function(e) {
                      t.title = n.trustAsHtml(e)
                  }),
                  t.name = i.name,
                  s.$options.animation && r.addClass(s.$options.animation),
                  i.$observe("disabled", function(e) {
                      t.disabled = t.$eval(e)
                  }),
                  s.$push(t),
                  t.$on("$destroy", function() {
                      s.$remove(t)
                  }),
                  s.$activePaneChangeListeners.push(function() {
                      a()
                  }),
                  a()
              }
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.select", ["mgcrea.ngStrap.tooltip", "mgcrea.ngStrap.helpers.parseOptions"]).provider("$select", function() {
          var t = this.defaults = {
              animation: "am-fade",
              prefixClass: "select",
              prefixEvent: "$select",
              placement: "bottom-left",
              templateUrl: "select/select.tpl.html",
              trigger: "focus",
              container: !1,
              keyboard: !0,
              html: !1,
              delay: 0,
              multiple: !1,
              allNoneButtons: !1,
              sort: !0,
              caretHtml: '&nbsp;<span class="caret"></span>',
              placeholder: "Choose among the following...",
              allText: "All",
              noneText: "None",
              maxLength: 3,
              maxLengthHtml: "selected",
              iconCheckmark: "glyphicon glyphicon-ok",
              toggle: !1
          };
          this.$get = ["$window", "$document", "$rootScope", "$tooltip", "$timeout", function(e, r, i, o, a) {
              function s(i, s, u) {
                  var l = {}
                    , f = angular.extend({}, t, u);
                  l = o(i, f);
                  var p = l.$scope;
                  p.$matches = [],
                  f.multiple ? p.$activeIndex = [] : p.$activeIndex = -1,
                  p.$isMultiple = f.multiple,
                  p.$showAllNoneButtons = f.allNoneButtons && f.multiple,
                  p.$iconCheckmark = f.iconCheckmark,
                  p.$allText = f.allText,
                  p.$noneText = f.noneText,
                  p.$activate = function(t) {
                      p.$$postDigest(function() {
                          l.activate(t)
                      })
                  }
                  ,
                  p.$select = function(t) {
                      p.$$postDigest(function() {
                          l.select(t)
                      })
                  }
                  ,
                  p.$isVisible = function() {
                      return l.$isVisible()
                  }
                  ,
                  p.$isActive = function(t) {
                      return l.$isActive(t)
                  }
                  ,
                  p.$selectAll = function() {
                      for (var t = 0; t < p.$matches.length; t++)
                          p.$isActive(t) || p.$select(t)
                  }
                  ,
                  p.$selectNone = function() {
                      for (var t = 0; t < p.$matches.length; t++)
                          p.$isActive(t) && p.$select(t)
                  }
                  ,
                  l.update = function(t) {
                      p.$matches = t,
                      l.$updateActiveIndex()
                  }
                  ,
                  l.activate = function(t) {
                      return f.multiple ? (l.$isActive(t) ? p.$activeIndex.splice(p.$activeIndex.indexOf(t), 1) : p.$activeIndex.push(t),
                      f.sort && p.$activeIndex.sort(function(t, e) {
                          return t - e
                      })) : p.$activeIndex = t,
                      p.$activeIndex
                  }
                  ,
                  l.select = function(t) {
                      if (!(angular.isUndefined(t) || 0 > t || t >= p.$matches.length)) {
                          var e = p.$matches[t].value;
                          p.$apply(function() {
                              l.activate(t),
                              f.multiple ? s.$setViewValue(p.$activeIndex.map(function(t) {
                                  return angular.isUndefined(p.$matches[t]) ? null : p.$matches[t].value
                              })) : (f.toggle ? s.$setViewValue(e === s.$modelValue ? n : e) : s.$setViewValue(e),
                              l.hide())
                          }),
                          p.$emit(f.prefixEvent + ".select", e, t, l),
                          angular.isDefined(f.onSelect) && angular.isFunction(f.onSelect) && f.onSelect(e, t, l)
                      }
                  }
                  ,
                  l.$updateActiveIndex = function() {
                      f.multiple ? angular.isArray(s.$modelValue) ? p.$activeIndex = s.$modelValue.map(function(t) {
                          return l.$getIndex(t)
                      }) : p.$activeIndex = [] : angular.isDefined(s.$modelValue) && p.$matches.length ? p.$activeIndex = l.$getIndex(s.$modelValue) : p.$activeIndex = -1
                  }
                  ,
                  l.$isVisible = function() {
                      return f.minLength && s ? p.$matches.length && s.$viewValue.length >= f.minLength : p.$matches.length
                  }
                  ,
                  l.$isActive = function(t) {
                      return f.multiple ? -1 !== p.$activeIndex.indexOf(t) : p.$activeIndex === t
                  }
                  ,
                  l.$getIndex = function(t) {
                      var e;
                      for (e = p.$matches.length; e-- && !angular.equals(p.$matches[e].value, t); )
                          ;
                      return e
                  }
                  ,
                  l.$onMouseDown = function(t) {
                      if (t.preventDefault(),
                      t.stopPropagation(),
                      c) {
                          var e, n = angular.element(t.target);
                          if ("A" !== t.target.nodeName)
                              for (var r = n.parent(); !e && r.length > 0; )
                                  "A" === r[0].nodeName && (e = r),
                                  r = r.parent();
                          e ? angular.element(e).triggerHandler("click") : n.triggerHandler("click")
                      }
                  }
                  ,
                  l.$onKeyDown = function(t) {
                      return /(9|13|38|40)/.test(t.keyCode) ? (9 !== t.keyCode && (t.preventDefault(),
                      t.stopPropagation()),
                      f.multiple && 9 === t.keyCode ? l.hide() : f.multiple || 13 !== t.keyCode && 9 !== t.keyCode ? void (f.multiple || (38 === t.keyCode && p.$activeIndex > 0 ? p.$activeIndex-- : 38 === t.keyCode && p.$activeIndex < 0 ? p.$activeIndex = p.$matches.length - 1 : 40 === t.keyCode && p.$activeIndex < p.$matches.length - 1 ? p.$activeIndex++ : angular.isUndefined(p.$activeIndex) && (p.$activeIndex = 0),
                      p.$digest())) : l.select(p.$activeIndex)) : void 0
                  }
                  ,
                  l.$isIE = function() {
                      var t = e.navigator.userAgent;
                      return t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0
                  }
                  ,
                  l.$selectScrollFix = function(t) {
                      "UL" === r[0].activeElement.tagName && (t.preventDefault(),
                      t.stopImmediatePropagation(),
                      t.target.focus())
                  }
                  ;
                  var d = l.show;
                  l.show = function() {
                      d(),
                      f.multiple && l.$element.addClass("select-multiple"),
                      a(function() {
                          l.$element.on(c ? "touchstart" : "mousedown", l.$onMouseDown),
                          f.keyboard && i.on("keydown", l.$onKeyDown)
                      }, 0, !1)
                  }
                  ;
                  var h = l.hide;
                  return l.hide = function() {
                      !f.multiple && angular.isUndefined(s.$modelValue) && (p.$activeIndex = -1),
                      l.$element.off(c ? "touchstart" : "mousedown", l.$onMouseDown),
                      f.keyboard && i.off("keydown", l.$onKeyDown),
                      h(!0)
                  }
                  ,
                  l
              }
              var u = /(ip[ao]d|iphone|android)/gi.test(e.navigator.userAgent)
                , c = "createTouch"in e.document && u;
              return s.defaults = t,
              s
          }
          ]
      }).directive("bsSelect", ["$window", "$parse", "$q", "$select", "$parseOptions", function(t, e, n, r, i) {
          var o = r.defaults;
          return {
              restrict: "EAC",
              require: "ngModel",
              link: function(t, e, n, a) {
                  var s = {
                      scope: t,
                      placeholder: o.placeholder
                  };
                  angular.forEach(["template", "templateUrl", "controller", "controllerAs", "placement", "container", "delay", "trigger", "keyboard", "html", "animation", "placeholder", "allNoneButtons", "maxLength", "maxLengthHtml", "allText", "noneText", "iconCheckmark", "autoClose", "id", "sort", "caretHtml", "prefixClass", "prefixEvent", "toggle"], function(t) {
                      angular.isDefined(n[t]) && (s[t] = n[t])
                  });
                  var u = /^(false|0|)$/i;
                  angular.forEach(["html", "container", "allNoneButtons", "sort"], function(t) {
                      angular.isDefined(n[t]) && u.test(n[t]) && (s[t] = !1)
                  }),
                  angular.forEach(["onBeforeShow", "onShow", "onBeforeHide", "onHide", "onSelect"], function(e) {
                      var r = "bs" + e.charAt(0).toUpperCase() + e.slice(1);
                      angular.isDefined(n[r]) && (s[e] = t.$eval(n[r]))
                  });
                  var c = e.attr("data-multiple");
                  if (angular.isDefined(c) && (u.test(c) ? s.multiple = !1 : s.multiple = c),
                  "select" === e[0].nodeName.toLowerCase()) {
                      var l = e;
                      l.css("display", "none"),
                      e = angular.element('<button type="button" class="btn btn-default"></button>'),
                      l.after(e)
                  }
                  var f = i(n.bsOptions)
                    , p = r(e, a, s);
                  p.$isIE() && e[0].addEventListener("blur", p.$selectScrollFix);
                  var d = f.$match[7].replace(/\|.+/, "").trim();
                  t.$watch(d, function() {
                      f.valuesFn(t, a).then(function(t) {
                          p.update(t),
                          a.$render()
                      })
                  }, !0),
                  t.$watch(n.ngModel, function() {
                      p.$updateActiveIndex(),
                      a.$render()
                  }, !0),
                  a.$render = function() {
                      var t, n;
                      s.multiple && angular.isArray(a.$modelValue) ? (t = a.$modelValue.map(function(t) {
                          return n = p.$getIndex(t),
                          -1 !== n ? p.$scope.$matches[n].label : !1
                      }).filter(angular.isDefined),
                      t = t.length > (s.maxLength || o.maxLength) ? t.length + " " + (s.maxLengthHtml || o.maxLengthHtml) : t.join(", ")) : (n = p.$getIndex(a.$modelValue),
                      t = -1 !== n ? p.$scope.$matches[n].label : !1),
                      e.html((t || s.placeholder) + (s.caretHtml || o.caretHtml))
                  }
                  ,
                  s.multiple && (a.$isEmpty = function(t) {
                      return !t || 0 === t.length
                  }
                  ),
                  t.$on("$destroy", function() {
                      p && p.destroy(),
                      s = null,
                      p = null
                  })
              }
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.scrollspy", ["mgcrea.ngStrap.helpers.debounce", "mgcrea.ngStrap.helpers.dimensions"]).provider("$scrollspy", function() {
          var t = this.$$spies = {}
            , n = this.defaults = {
              debounce: 150,
              throttle: 100,
              offset: 100
          };
          this.$get = ["$window", "$document", "$rootScope", "dimensions", "debounce", "throttle", function(r, i, o, a, s, u) {
              function c(t, e) {
                  return t[0].nodeName && t[0].nodeName.toLowerCase() === e.toLowerCase()
              }
              function l(i) {
                  var l = angular.extend({}, n, i);
                  l.element || (l.element = d);
                  var h = c(l.element, "body")
                    , m = h ? f : l.element
                    , g = h ? "window" : l.id;
                  if (t[g])
                      return t[g].$$count++,
                      t[g];
                  var v, y, b, $, w, S, T, _, k = {}, E = k.$trackedElements = [], C = [];
                  return k.init = function() {
                      this.$$count = 1,
                      $ = s(this.checkPosition, l.debounce),
                      w = u(this.checkPosition, l.throttle),
                      m.on("click", this.checkPositionWithEventLoop),
                      f.on("resize", $),
                      m.on("scroll", w),
                      S = s(this.checkOffsets, l.debounce),
                      v = o.$on("$viewContentLoaded", S),
                      y = o.$on("$includeContentLoaded", S),
                      S(),
                      g && (t[g] = k)
                  }
                  ,
                  k.destroy = function() {
                      this.$$count--,
                      this.$$count > 0 || (m.off("click", this.checkPositionWithEventLoop),
                      f.off("resize", $),
                      m.off("scroll", w),
                      v(),
                      y(),
                      g && delete t[g])
                  }
                  ,
                  k.checkPosition = function() {
                      if (C.length) {
                          if (_ = (h ? r.pageYOffset : m.prop("scrollTop")) || 0,
                          T = Math.max(r.innerHeight, p.prop("clientHeight")),
                          _ < C[0].offsetTop && b !== C[0].target)
                              return k.$activateElement(C[0]);
                          for (var t = C.length; t--; )
                              if (!angular.isUndefined(C[t].offsetTop) && null !== C[t].offsetTop && b !== C[t].target && !(_ < C[t].offsetTop || C[t + 1] && _ > C[t + 1].offsetTop))
                                  return k.$activateElement(C[t])
                      }
                  }
                  ,
                  k.checkPositionWithEventLoop = function() {
                      setTimeout(k.checkPosition, 1)
                  }
                  ,
                  k.$activateElement = function(t) {
                      if (b) {
                          var e = k.$getTrackedElement(b);
                          e && (e.source.removeClass("active"),
                          c(e.source, "li") && c(e.source.parent().parent(), "li") && e.source.parent().parent().removeClass("active"))
                      }
                      b = t.target,
                      t.source.addClass("active"),
                      c(t.source, "li") && c(t.source.parent().parent(), "li") && t.source.parent().parent().addClass("active")
                  }
                  ,
                  k.$getTrackedElement = function(t) {
                      return E.filter(function(e) {
                          return e.target === t
                      })[0]
                  }
                  ,
                  k.checkOffsets = function() {
                      angular.forEach(E, function(t) {
                          var n = e.querySelector(t.target);
                          t.offsetTop = n ? a.offset(n).top : null,
                          l.offset && null !== t.offsetTop && (t.offsetTop -= 1 * l.offset)
                      }),
                      C = E.filter(function(t) {
                          return null !== t.offsetTop
                      }).sort(function(t, e) {
                          return t.offsetTop - e.offsetTop
                      }),
                      $()
                  }
                  ,
                  k.trackElement = function(t, e) {
                      E.push({
                          target: t,
                          source: e
                      })
                  }
                  ,
                  k.untrackElement = function(t, e) {
                      for (var n, r = E.length; r--; )
                          if (E[r].target === t && E[r].source === e) {
                              n = r;
                              break
                          }
                      E.splice(n, 1)
                  }
                  ,
                  k.activate = function(t) {
                      E[t].addClass("active")
                  }
                  ,
                  k.init(),
                  k
              }
              var f = angular.element(r)
                , p = angular.element(i.prop("documentElement"))
                , d = angular.element(r.document.body);
              return l
          }
          ]
      }).directive("bsScrollspy", ["$rootScope", "debounce", "dimensions", "$scrollspy", function(t, e, n, r) {
          return {
              restrict: "EAC",
              link: function(t, e, n) {
                  var i = {
                      scope: t
                  };
                  angular.forEach(["offset", "target"], function(t) {
                      angular.isDefined(n[t]) && (i[t] = n[t])
                  });
                  var o = r(i);
                  o.trackElement(i.target, e),
                  t.$on("$destroy", function() {
                      o && (o.untrackElement(i.target, e),
                      o.destroy()),
                      i = null,
                      o = null
                  })
              }
          }
      }
      ]).directive("bsScrollspyList", ["$rootScope", "debounce", "dimensions", "$scrollspy", function() {
          return {
              restrict: "A",
              compile: function(t) {
                  var e = t[0].querySelectorAll("li > a[href]");
                  angular.forEach(e, function(t) {
                      var e = angular.element(t);
                      e.parent().attr("bs-scrollspy", "").attr("data-target", e.attr("href"))
                  })
              }
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.popover", ["mgcrea.ngStrap.tooltip"]).provider("$popover", function() {
          var t = this.defaults = {
              animation: "am-fade",
              customClass: "",
              container: !1,
              target: !1,
              placement: "right",
              templateUrl: "popover/popover.tpl.html",
              contentTemplate: !1,
              trigger: "click",
              keyboard: !0,
              html: !1,
              title: "",
              content: "",
              delay: 0,
              autoClose: !1
          };
          this.$get = ["$tooltip", function(e) {
              function n(n, r) {
                  var i = angular.extend({}, t, r)
                    , o = e(n, i);
                  return i.content && (o.$scope.content = i.content),
                  o
              }
              return n
          }
          ]
      }).directive("bsPopover", ["$window", "$sce", "$popover", function(t, e, n) {
          var r = t.requestAnimationFrame || t.setTimeout;
          return {
              restrict: "EAC",
              scope: !0,
              link: function(t, i, o) {
                  var a, s = {
                      scope: t
                  };
                  angular.forEach(["template", "templateUrl", "controller", "controllerAs", "contentTemplate", "placement", "container", "delay", "trigger", "html", "animation", "customClass", "autoClose", "id", "prefixClass", "prefixEvent", "bsEnabled"], function(t) {
                      angular.isDefined(o[t]) && (s[t] = o[t])
                  });
                  var u = /^(false|0|)$/i;
                  angular.forEach(["html", "container", "autoClose"], function(t) {
                      angular.isDefined(o[t]) && u.test(o[t]) && (s[t] = !1)
                  }),
                  angular.forEach(["onBeforeShow", "onShow", "onBeforeHide", "onHide"], function(e) {
                      var n = "bs" + e.charAt(0).toUpperCase() + e.slice(1);
                      angular.isDefined(o[n]) && (s[e] = t.$eval(o[n]))
                  });
                  var c = i.attr("data-target");
                  angular.isDefined(c) && (u.test(c) ? s.target = !1 : s.target = c),
                  angular.forEach(["title", "content"], function(n) {
                      o[n] && o.$observe(n, function(i, o) {
                          t[n] = e.trustAsHtml(i),
                          angular.isDefined(o) && r(function() {
                              a && a.$applyPlacement()
                          })
                      })
                  }),
                  o.bsPopover && t.$watch(o.bsPopover, function(e, n) {
                      angular.isObject(e) ? angular.extend(t, e) : t.content = e,
                      angular.isDefined(n) && r(function() {
                          a && a.$applyPlacement()
                      })
                  }, !0),
                  o.bsShow && t.$watch(o.bsShow, function(t) {
                      a && angular.isDefined(t) && (angular.isString(t) && (t = !!t.match(/true|,?(popover),?/i)),
                      t === !0 ? a.show() : a.hide())
                  }),
                  o.bsEnabled && t.$watch(o.bsEnabled, function(t) {
                      a && angular.isDefined(t) && (angular.isString(t) && (t = !!t.match(/true|1|,?(popover),?/i)),
                      t === !1 ? a.setEnabled(!1) : a.setEnabled(!0))
                  }),
                  o.viewport && t.$watch(o.viewport, function(t) {
                      a && angular.isDefined(t) && a.setViewport(t)
                  }),
                  a = n(i, s),
                  t.$on("$destroy", function() {
                      a && a.destroy(),
                      s = null,
                      a = null
                  })
              }
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.navbar", []).provider("$navbar", function() {
          var t = this.defaults = {
              activeClass: "active",
              routeAttr: "data-match-route",
              strict: !1
          };
          this.$get = function() {
              return {
                  defaults: t
              }
          }
      }).directive("bsNavbar", ["$window", "$location", "$navbar", function(t, e, n) {
          var r = n.defaults;
          return {
              restrict: "A",
              link: function(t, n, i) {
                  var o = angular.copy(r);
                  angular.forEach(Object.keys(r), function(t) {
                      angular.isDefined(i[t]) && (o[t] = i[t])
                  }),
                  t.$watch(function() {
                      return e.path()
                  }, function(t) {
                      var e = n[0].querySelectorAll("li[" + o.routeAttr + "]");
                      angular.forEach(e, function(e) {
                          var n = angular.element(e)
                            , r = n.attr(o.routeAttr).replace("/", "\\/");
                          o.strict && (r = "^" + r + "$");
                          var i = new RegExp(r,"i");
                          i.test(t) ? n.addClass(o.activeClass) : n.removeClass(o.activeClass)
                      })
                  })
              }
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.modal", ["mgcrea.ngStrap.core", "mgcrea.ngStrap.helpers.dimensions"]).provider("$modal", function() {
          var t = this.defaults = {
              animation: "am-fade",
              backdropAnimation: "am-fade",
              customClass: "",
              prefixClass: "modal",
              prefixEvent: "modal",
              placement: "top",
              templateUrl: "modal/modal.tpl.html",
              template: "",
              contentTemplate: !1,
              container: !1,
              element: null,
              backdrop: !0,
              keyboard: !0,
              html: !1,
              show: !0,
              size: null,
              zIndex: null
          };
          this.$get = ["$window", "$rootScope", "$bsCompiler", "$animate", "$timeout", "$sce", "dimensions", function(n, r, i, o, a, s) {
              function u(e) {
                  function n() {
                      C.$emit(k.prefixEvent + ".show", _),
                      angular.isDefined(k.onShow) && angular.isFunction(k.onShow) && k.onShow(_)
                  }
                  function a() {
                      C.$emit(k.prefixEvent + ".hide", _),
                      angular.isDefined(k.onHide) && angular.isFunction(k.onHide) && k.onHide(_),
                      l(".modal").length <= 0 && d.removeClass(k.prefixClass + "-open"),
                      k.animation && d.removeClass(k.prefixClass + "-with-" + k.animation)
                  }
                  function u() {
                      k.backdrop && (D.on("click", w),
                      A.on("click", w),
                      A.on("wheel", S))
                  }
                  function y() {
                      k.backdrop && (D.off("click", w),
                      A.off("click", w),
                      A.off("wheel", S))
                  }
                  function b() {
                      k.keyboard && D.on("keyup", _.$onKeyUp)
                  }
                  function $() {
                      k.keyboard && D.off("keyup", _.$onKeyUp)
                  }
                  function w(t) {
                      t.target === t.currentTarget && ("static" === k.backdrop ? _.focus() : _.hide())
                  }
                  function S(t) {
                      t.preventDefault()
                  }
                  function T() {
                      _.$isShown && null !== D && (y(),
                      $()),
                      P && (P.$destroy(),
                      P = null),
                      D && (D.remove(),
                      D = _.$element = null)
                  }
                  var _ = {}
                    , k = _.$options = angular.extend({}, t, e)
                    , E = _.$promise = i.compile(k)
                    , C = _.$scope = k.scope && k.scope.$new() || r.$new();
                  k.element || k.container || (k.container = "body"),
                  k.zIndex && (m = parseInt(k.zIndex, 10),
                  g = m - 10),
                  _.$id = k.id || k.element && k.element.attr("id") || "",
                  f(["title", "content"], function(t) {
                      k[t] && (C[t] = s.trustAsHtml(k[t]))
                  }),
                  C.$hide = function() {
                      C.$$postDigest(function() {
                          _.hide()
                      })
                  }
                  ,
                  C.$show = function() {
                      C.$$postDigest(function() {
                          _.show()
                      })
                  }
                  ,
                  C.$toggle = function() {
                      C.$$postDigest(function() {
                          _.toggle()
                      })
                  }
                  ,
                  _.$isShown = C.$isShown = !1;
                  var x, D, P, A = angular.element('<div class="' + k.prefixClass + '-backdrop"/>');
                  return A.css({
                      position: "fixed",
                      top: "0px",
                      left: "0px",
                      bottom: "0px",
                      right: "0px"
                  }),
                  E.then(function(t) {
                      x = t,
                      _.init()
                  }),
                  _.init = function() {
                      k.show && C.$$postDigest(function() {
                          _.show()
                      })
                  }
                  ,
                  _.destroy = function() {
                      T(),
                      A && (A.remove(),
                      A = null),
                      C.$destroy()
                  }
                  ,
                  _.show = function() {
                      if (!_.$isShown) {
                          var t, e;
                          if (angular.isElement(k.container) ? (t = k.container,
                          e = k.container[0].lastChild ? angular.element(k.container[0].lastChild) : null) : k.container ? (t = l(k.container),
                          e = t[0] && t[0].lastChild ? angular.element(t[0].lastChild) : null) : (t = null,
                          e = k.element),
                          D && T(),
                          P = _.$scope.$new(),
                          D = _.$element = x.link(P, function() {}),
                          k.backdrop && (D.css({
                              "z-index": m + 20 * h
                          }),
                          A.css({
                              "z-index": g + 20 * h
                          }),
                          h++),
                          !C.$emit(k.prefixEvent + ".show.before", _).defaultPrevented) {
                              angular.isDefined(k.onBeforeShow) && angular.isFunction(k.onBeforeShow) && k.onBeforeShow(_),
                              D.css({
                                  display: "block"
                              }).addClass(k.placement),
                              k.customClass && D.addClass(k.customClass),
                              k.size && v[k.size] && angular.element(l(".modal-dialog", D[0])).addClass(v[k.size]),
                              k.animation && (k.backdrop && A.addClass(k.backdropAnimation),
                              D.addClass(k.animation)),
                              k.backdrop && o.enter(A, d, null),
                              angular.version.minor <= 2 ? o.enter(D, t, e, n) : o.enter(D, t, e).then(n),
                              _.$isShown = C.$isShown = !0,
                              c(C);
                              var r = D[0];
                              p(function() {
                                  r.focus()
                              }),
                              d.addClass(k.prefixClass + "-open"),
                              k.animation && d.addClass(k.prefixClass + "-with-" + k.animation),
                              u(),
                              b()
                          }
                      }
                  }
                  ,
                  _.hide = function() {
                      _.$isShown && (C.$emit(k.prefixEvent + ".hide.before", _).defaultPrevented || (angular.isDefined(k.onBeforeHide) && angular.isFunction(k.onBeforeHide) && k.onBeforeHide(_),
                      angular.version.minor <= 2 ? o.leave(D, a) : o.leave(D).then(a),
                      k.backdrop && (h--,
                      o.leave(A)),
                      _.$isShown = C.$isShown = !1,
                      c(C),
                      y(),
                      $()))
                  }
                  ,
                  _.toggle = function() {
                      _.$isShown ? _.hide() : _.show()
                  }
                  ,
                  _.focus = function() {
                      D[0].focus()
                  }
                  ,
                  _.$onKeyUp = function(t) {
                      27 === t.which && _.$isShown && (_.hide(),
                      t.stopPropagation())
                  }
                  ,
                  _
              }
              function c(t) {
                  t.$$phase || t.$root && t.$root.$$phase || t.$digest()
              }
              function l(t, n) {
                  return angular.element((n || e).querySelectorAll(t))
              }
              var f = angular.forEach
                , p = n.requestAnimationFrame || n.setTimeout
                , d = angular.element(n.document.body)
                , h = 0
                , m = 1050
                , g = 1040
                , v = {
                  lg: "modal-lg",
                  sm: "modal-sm"
              };
              return u
          }
          ]
      }).directive("bsModal", ["$window", "$sce", "$parse", "$modal", function(t, e, n, r) {
          return {
              restrict: "EAC",
              scope: !0,
              link: function(t, n, i) {
                  var o = {
                      scope: t,
                      element: n,
                      show: !1
                  };
                  angular.forEach(["template", "templateUrl", "controller", "controllerAs", "contentTemplate", "placement", "backdrop", "keyboard", "html", "container", "animation", "backdropAnimation", "id", "prefixEvent", "prefixClass", "customClass", "modalClass", "size", "zIndex"], function(t) {
                      angular.isDefined(i[t]) && (o[t] = i[t])
                  }),
                  o.modalClass && (o.customClass = o.modalClass);
                  var a = /^(false|0|)$/i;
                  angular.forEach(["backdrop", "keyboard", "html", "container"], function(t) {
                      angular.isDefined(i[t]) && a.test(i[t]) && (o[t] = !1)
                  }),
                  angular.forEach(["onBeforeShow", "onShow", "onBeforeHide", "onHide"], function(e) {
                      var n = "bs" + e.charAt(0).toUpperCase() + e.slice(1);
                      angular.isDefined(i[n]) && (o[e] = t.$eval(i[n]))
                  }),
                  angular.forEach(["title", "content"], function(n) {
                      i[n] && i.$observe(n, function(r) {
                          t[n] = e.trustAsHtml(r)
                      })
                  }),
                  i.bsModal && t.$watch(i.bsModal, function(e) {
                      angular.isObject(e) ? angular.extend(t, e) : t.content = e
                  }, !0);
                  var s = r(o);
                  n.on(i.trigger || "click", s.toggle),
                  t.$on("$destroy", function() {
                      s && s.destroy(),
                      o = null,
                      s = null
                  })
              }
          }
      }
      ]),
      angular.version.minor < 3 && angular.version.dot < 14 && angular.module("ng").factory("$$rAF", ["$window", "$timeout", function(t, e) {
          var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame
            , r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.webkitCancelRequestAnimationFrame
            , i = !!n
            , o = i ? function(t) {
              var e = n(t);
              return function() {
                  r(e)
              }
          }
          : function(t) {
              var n = e(t, 16.66, !1);
              return function() {
                  e.cancel(n)
              }
          }
          ;
          return o.supported = i,
          o
      }
      ]),
      angular.module("mgcrea.ngStrap.helpers.parseOptions", []).provider("$parseOptions", function() {
          var t = this.defaults = {
              regexp: /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/
          };
          this.$get = ["$parse", "$q", function(e, n) {
              function r(r, i) {
                  function o(t, e) {
                      return t.map(function(t, n) {
                          var r, i, o = {};
                          return o[l] = t,
                          r = c(e, o),
                          i = d(e, o),
                          {
                              label: r,
                              value: i,
                              index: n
                          }
                      })
                  }
                  var a = {}
                    , s = angular.extend({}, t, i);
                  a.$values = [];
                  var u, c, l, f, p, d, h;
                  return a.init = function() {
                      a.$match = u = r.match(s.regexp),
                      c = e(u[2] || u[1]),
                      l = u[4] || u[6],
                      f = u[5],
                      p = e(u[3] || ""),
                      d = e(u[2] ? u[1] : l),
                      h = e(u[7])
                  }
                  ,
                  a.valuesFn = function(t, e) {
                      return n.when(h(t, e)).then(function(e) {
                          return angular.isArray(e) || (e = []),
                          a.$values = e.length ? o(e, t) : [],
                          a.$values
                      })
                  }
                  ,
                  a.displayValue = function(t) {
                      var e = {};
                      return e[l] = t,
                      c(e)
                  }
                  ,
                  a.init(),
                  a
              }
              return r
          }
          ]
      }),
      angular.module("mgcrea.ngStrap.helpers.dimensions", []).factory("dimensions", function() {
          function e(t) {
              var e = t.ownerDocument
                , i = t.offsetParent || e;
              if (r(i, "#document"))
                  return e.documentElement;
              for (; i && !r(i, "html") && "static" === n.css(i, "position"); )
                  i = i.offsetParent;
              return i || e.documentElement
          }
          var n = {}
            , r = n.nodeName = function(t, e) {
              return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
          }
          ;
          return n.css = function(e, n, r) {
              var i;
              return i = e.currentStyle ? e.currentStyle[n] : t.getComputedStyle ? t.getComputedStyle(e)[n] : e.style[n],
              r === !0 ? parseFloat(i) || 0 : i
          }
          ,
          n.offset = function(e) {
              var n = e.getBoundingClientRect()
                , r = e.ownerDocument;
              return {
                  width: n.width || e.offsetWidth,
                  height: n.height || e.offsetHeight,
                  top: n.top + (t.pageYOffset || r.documentElement.scrollTop) - (r.documentElement.clientTop || 0),
                  left: n.left + (t.pageXOffset || r.documentElement.scrollLeft) - (r.documentElement.clientLeft || 0)
              }
          }
          ,
          n.setOffset = function(t, e, r) {
              var i, o, a, s, u, c, l, f = n.css(t, "position"), p = angular.element(t), d = {};
              "static" === f && (t.style.position = "relative"),
              u = n.offset(t),
              a = n.css(t, "top"),
              c = n.css(t, "left"),
              l = ("absolute" === f || "fixed" === f) && (a + c).indexOf("auto") > -1,
              l ? (i = n.position(t),
              s = i.top,
              o = i.left) : (s = parseFloat(a) || 0,
              o = parseFloat(c) || 0),
              angular.isFunction(e) && (e = e.call(t, r, u)),
              null !== e.top && (d.top = e.top - u.top + s),
              null !== e.left && (d.left = e.left - u.left + o),
              "using"in e ? e.using.call(p, d) : p.css({
                  top: d.top + "px",
                  left: d.left + "px"
              })
          }
          ,
          n.position = function(t) {
              var i, o, a = {
                  top: 0,
                  left: 0
              };
              return "fixed" === n.css(t, "position") ? o = t.getBoundingClientRect() : (i = e(t),
              o = n.offset(t),
              r(i, "html") || (a = n.offset(i)),
              a.top += n.css(i, "borderTopWidth", !0),
              a.left += n.css(i, "borderLeftWidth", !0)),
              {
                  width: t.offsetWidth,
                  height: t.offsetHeight,
                  top: o.top - a.top - n.css(t, "marginTop", !0),
                  left: o.left - a.left - n.css(t, "marginLeft", !0)
              }
          }
          ,
          n.height = function(t, e) {
              var r = t.offsetHeight;
              return e ? r += n.css(t, "marginTop", !0) + n.css(t, "marginBottom", !0) : r -= n.css(t, "paddingTop", !0) + n.css(t, "paddingBottom", !0) + n.css(t, "borderTopWidth", !0) + n.css(t, "borderBottomWidth", !0),
              r
          }
          ,
          n.width = function(t, e) {
              var r = t.offsetWidth;
              return e ? r += n.css(t, "marginLeft", !0) + n.css(t, "marginRight", !0) : r -= n.css(t, "paddingLeft", !0) + n.css(t, "paddingRight", !0) + n.css(t, "borderLeftWidth", !0) + n.css(t, "borderRightWidth", !0),
              r
          }
          ,
          n
      }),
      angular.module("mgcrea.ngStrap.helpers.debounce", []).factory("debounce", ["$timeout", function(t) {
          return function(e, n, r) {
              var i = null;
              return function() {
                  var o = this
                    , a = arguments
                    , s = r && !i;
                  return i && t.cancel(i),
                  i = t(function() {
                      i = null,
                      r || e.apply(o, a)
                  }, n, !1),
                  s && e.apply(o, a),
                  i
              }
          }
      }
      ]).factory("throttle", ["$timeout", function(t) {
          return function(e, n, r) {
              var i = null;
              return r || (r = {}),
              function() {
                  var o = this
                    , a = arguments;
                  i || (r.leading !== !1 && e.apply(o, a),
                  i = t(function() {
                      i = null,
                      r.trailing !== !1 && e.apply(o, a)
                  }, n, !1))
              }
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.helpers.dateParser", []).provider("$dateParser", ["$localeProvider", function() {
          function t() {
              this.year = 1970,
              this.month = 0,
              this.day = 1,
              this.hours = 0,
              this.minutes = 0,
              this.seconds = 0,
              this.milliseconds = 0
          }
          function e() {}
          function n(t) {
              return !isNaN(parseFloat(t)) && isFinite(t)
          }
          function r(t, e) {
              for (var n = t.length, r = e.toString().toLowerCase(), i = 0; n > i; i++)
                  if (t[i].toLowerCase() === r)
                      return i;
              return -1
          }
          t.prototype.setMilliseconds = function(t) {
              this.milliseconds = t
          }
          ,
          t.prototype.setSeconds = function(t) {
              this.seconds = t
          }
          ,
          t.prototype.setMinutes = function(t) {
              this.minutes = t
          }
          ,
          t.prototype.setHours = function(t) {
              this.hours = t
          }
          ,
          t.prototype.getHours = function() {
              return this.hours
          }
          ,
          t.prototype.setDate = function(t) {
              this.day = t
          }
          ,
          t.prototype.setMonth = function(t) {
              this.month = t
          }
          ,
          t.prototype.setFullYear = function(t) {
              this.year = t
          }
          ,
          t.prototype.fromDate = function(t) {
              return this.year = t.getFullYear(),
              this.month = t.getMonth(),
              this.day = t.getDate(),
              this.hours = t.getHours(),
              this.minutes = t.getMinutes(),
              this.seconds = t.getSeconds(),
              this.milliseconds = t.getMilliseconds(),
              this
          }
          ,
          t.prototype.toDate = function() {
              return new Date(this.year,this.month,this.day,this.hours,this.minutes,this.seconds,this.milliseconds)
          }
          ;
          var i = t.prototype
            , o = this.defaults = {
              format: "shortDate",
              strict: !1
          };
          this.$get = ["$locale", "dateFilter", function(a, s) {
              var u = function(u) {
                  function c(t) {
                      var e = l(t);
                      return h(e)
                  }
                  function l(t) {
                      var e = f(t)
                        , n = e.replace(/''/g, "\\'")
                        , r = /('(?:\\'|.)*?')/
                        , i = n.split(r)
                        , o = Object.keys(w)
                        , a = [];
                      return angular.forEach(i, function(t) {
                          if (p(t))
                              t = d(t);
                          else
                              for (var e = 0; e < o.length; e++)
                                  t = t.split(o[e]).join("${" + e + "}");
                          a.push(t)
                      }),
                      a.join("")
                  }
                  function f(t) {
                      return t.replace(/\\/g, "[\\\\]").replace(/-/g, "[-]").replace(/\./g, "[.]").replace(/\*/g, "[*]").replace(/\+/g, "[+]").replace(/\?/g, "[?]").replace(/\$/g, "[$]").replace(/\^/g, "[^]").replace(/\//g, "[/]").replace(/\\s/g, "[\\s]")
                  }
                  function p(t) {
                      return /^'.*'$/.test(t)
                  }
                  function d(t) {
                      return t.replace(/^'(.*)'$/, "$1")
                  }
                  function h(t) {
                      for (var e = Object.keys(w), n = t, r = 0; r < e.length; r++)
                          n = n.split("${" + r + "}").join("(" + w[e[r]] + ")");
                      return new RegExp("^" + n + "$",["i"])
                  }
                  function m(t) {
                      var e = l(t);
                      return g(e)
                  }
                  function g(t) {
                      for (var e, n, r, i, o = Object.keys(w), a = new RegExp("\\${(\\d+)}","g"), s = []; null !== (e = a.exec(t)); )
                          n = e[1],
                          r = o[n],
                          i = S[r],
                          s.push(i);
                      return s
                  }
                  var v, y, b = angular.extend({}, o, u), $ = {}, w = {
                      sss: "[0-9]{3}",
                      ss: "[0-5][0-9]",
                      s: b.strict ? "[1-5]?[0-9]" : "[0-9]|[0-5][0-9]",
                      mm: "[0-5][0-9]",
                      m: b.strict ? "[1-5]?[0-9]" : "[0-9]|[0-5][0-9]",
                      HH: "[01][0-9]|2[0-3]",
                      H: b.strict ? "1?[0-9]|2[0-3]" : "[01]?[0-9]|2[0-3]",
                      hh: "[0][1-9]|[1][012]",
                      h: b.strict ? "[1-9]|1[012]" : "0?[1-9]|1[012]",
                      a: "AM|PM",
                      EEEE: a.DATETIME_FORMATS.DAY.join("|"),
                      EEE: a.DATETIME_FORMATS.SHORTDAY.join("|"),
                      dd: "0[1-9]|[12][0-9]|3[01]",
                      d: b.strict ? "[1-9]|[1-2][0-9]|3[01]" : "0?[1-9]|[1-2][0-9]|3[01]",
                      MMMM: a.DATETIME_FORMATS.MONTH.join("|"),
                      MMM: a.DATETIME_FORMATS.SHORTMONTH.join("|"),
                      MM: "0[1-9]|1[012]",
                      M: b.strict ? "[1-9]|1[012]" : "0?[1-9]|1[012]",
                      yyyy: "[1]{1}[0-9]{3}|[2]{1}[0-9]{3}",
                      yy: "[0-9]{2}",
                      y: b.strict ? "-?(0|[1-9][0-9]{0,3})" : "-?0*[0-9]{1,4}"
                  }, S = {
                      sss: i.setMilliseconds,
                      ss: i.setSeconds,
                      s: i.setSeconds,
                      mm: i.setMinutes,
                      m: i.setMinutes,
                      HH: i.setHours,
                      H: i.setHours,
                      hh: i.setHours,
                      h: i.setHours,
                      EEEE: e,
                      EEE: e,
                      dd: i.setDate,
                      d: i.setDate,
                      a: function(t) {
                          var e = this.getHours() % 12;
                          return this.setHours(t.match(/pm/i) ? e + 12 : e)
                      },
                      MMMM: function(t) {
                          return this.setMonth(r(a.DATETIME_FORMATS.MONTH, t))
                      },
                      MMM: function(t) {
                          return this.setMonth(r(a.DATETIME_FORMATS.SHORTMONTH, t))
                      },
                      MM: function(t) {
                          return this.setMonth(1 * t - 1)
                      },
                      M: function(t) {
                          return this.setMonth(1 * t - 1)
                      },
                      yyyy: i.setFullYear,
                      yy: function(t) {
                          return this.setFullYear(2e3 + 1 * t)
                      },
                      y: function(t) {
                          return 50 >= 1 * t && 2 === t.length ? this.setFullYear(2e3 + 1 * t) : this.setFullYear(1 * t)
                      }
                  };
                  return $.init = function() {
                      $.$format = a.DATETIME_FORMATS[b.format] || b.format,
                      v = c($.$format),
                      y = m($.$format)
                  }
                  ,
                  $.isValid = function(t) {
                      return angular.isDate(t) ? !isNaN(t.getTime()) : v.test(t)
                  }
                  ,
                  $.parse = function(e, n, r, i) {
                      r && (r = a.DATETIME_FORMATS[r] || r),
                      angular.isDate(e) && (e = s(e, r || $.$format, i));
                      var o = r ? c(r) : v
                        , u = r ? m(r) : y
                        , l = o.exec(e);
                      if (!l)
                          return !1;
                      for (var f = n && !isNaN(n.getTime()) ? (new t).fromDate(n) : (new t).fromDate(new Date(1970,0,1,0)), p = 0; p < l.length - 1; p++)
                          u[p] && u[p].call(f, l[p + 1]);
                      var d = f.toDate();
                      return parseInt(f.day, 10) !== d.getDate() ? !1 : d
                  }
                  ,
                  $.getDateForAttribute = function(t, e) {
                      var r;
                      if ("today" === e) {
                          var i = new Date;
                          r = new Date(i.getFullYear(),i.getMonth(),i.getDate() + ("maxDate" === t ? 1 : 0),0,0,0,"minDate" === t ? 0 : -1)
                      } else
                          r = angular.isString(e) && e.match(/^".+"$/) ? new Date(e.substr(1, e.length - 2)) : n(e) ? new Date(parseInt(e, 10)) : angular.isString(e) && 0 === e.length ? "minDate" === t ? -(1 / 0) : +(1 / 0) : new Date(e);
                      return r
                  }
                  ,
                  $.getTimeForAttribute = function(t, e) {
                      var r;
                      return r = "now" === e ? (new Date).setFullYear(1970, 0, 1) : angular.isString(e) && e.match(/^".+"$/) ? new Date(e.substr(1, e.length - 2)).setFullYear(1970, 0, 1) : n(e) ? new Date(parseInt(e, 10)).setFullYear(1970, 0, 1) : angular.isString(e) && 0 === e.length ? "minTime" === t ? -(1 / 0) : +(1 / 0) : $.parse(e, new Date(1970,0,1,0))
                  }
                  ,
                  $.daylightSavingAdjust = function(t) {
                      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0),
                      t) : null
                  }
                  ,
                  $.timezoneOffsetAdjust = function(t, e, n) {
                      return t ? (e && "UTC" === e && (t = new Date(t.getTime()),
                      t.setMinutes(t.getMinutes() + (n ? -1 : 1) * t.getTimezoneOffset())),
                      t) : null
                  }
                  ,
                  $.init(),
                  $
              };
              return u
          }
          ]
      }
      ]),
      angular.module("mgcrea.ngStrap.helpers.dateFormatter", []).service("$dateFormatter", ["$locale", "dateFilter", function(t, e) {
          function n(t) {
              return /(h+)([:\.])?(m+)([:\.])?(s*)[ ]?(a?)/i.exec(t).slice(1)
          }
          this.getDefaultLocale = function() {
              return t.id
          }
          ,
          this.getDatetimeFormat = function(e) {
              return t.DATETIME_FORMATS[e] || e
          }
          ,
          this.weekdaysShort = function() {
              return t.DATETIME_FORMATS.SHORTDAY
          }
          ,
          this.hoursFormat = function(t) {
              return n(t)[0]
          }
          ,
          this.minutesFormat = function(t) {
              return n(t)[2]
          }
          ,
          this.secondsFormat = function(t) {
              return n(t)[4]
          }
          ,
          this.timeSeparator = function(t) {
              return n(t)[1]
          }
          ,
          this.showSeconds = function(t) {
              return !!n(t)[4]
          }
          ,
          this.showAM = function(t) {
              return !!n(t)[5]
          }
          ,
          this.formatDate = function(t, n, r, i) {
              return e(t, n, i)
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.core", []).service("$bsCompiler", r),
      angular.module("mgcrea.ngStrap.dropdown", ["mgcrea.ngStrap.tooltip"]).provider("$dropdown", function() {
          var t = this.defaults = {
              animation: "am-fade",
              prefixClass: "dropdown",
              prefixEvent: "dropdown",
              placement: "bottom-left",
              templateUrl: "dropdown/dropdown.tpl.html",
              trigger: "click",
              container: !1,
              keyboard: !0,
              html: !1,
              delay: 0
          };
          this.$get = ["$window", "$rootScope", "$tooltip", "$timeout", function(e, n, r, i) {
              function o(e, o) {
                  function u(t) {
                      return t.target !== e[0] ? t.target !== e[0] && c.hide() : void 0
                  }
                  var c = {}
                    , l = angular.extend({}, t, o);
                  c.$scope = l.scope && l.scope.$new() || n.$new(),
                  c = r(e, l);
                  var f = e.parent();
                  c.$onKeyDown = function(t) {
                      if (/(38|40)/.test(t.keyCode)) {
                          t.preventDefault(),
                          t.stopPropagation();
                          var e = angular.element(c.$element[0].querySelectorAll("li:not(.divider) a"));
                          if (e.length) {
                              var n;
                              angular.forEach(e, function(t, e) {
                                  s && s.call(t, ":focus") && (n = e)
                              }),
                              38 === t.keyCode && n > 0 ? n-- : 40 === t.keyCode && n < e.length - 1 ? n++ : angular.isUndefined(n) && (n = 0),
                              e.eq(n)[0].focus()
                          }
                      }
                  }
                  ;
                  var p = c.show;
                  c.show = function() {
                      p(),
                      i(function() {
                          l.keyboard && c.$element && c.$element.on("keydown", c.$onKeyDown),
                          a.on("click", u)
                      }, 0, !1),
                      f.hasClass("dropdown") && f.addClass("open")
                  }
                  ;
                  var d = c.hide;
                  c.hide = function() {
                      c.$isShown && (l.keyboard && c.$element && c.$element.off("keydown", c.$onKeyDown),
                      a.off("click", u),
                      f.hasClass("dropdown") && f.removeClass("open"),
                      d())
                  }
                  ;
                  var h = c.destroy;
                  return c.destroy = function() {
                      a.off("click", u),
                      h()
                  }
                  ,
                  c
              }
              var a = angular.element(e.document.body)
                , s = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;
              return o
          }
          ]
      }).directive("bsDropdown", ["$window", "$sce", "$dropdown", function(t, e, r) {
          return {
              restrict: "EAC",
              scope: !0,
              compile: function(t, e) {
                  if (!e.bsDropdown) {
                      for (var i = t[0].nextSibling; i && 1 !== i.nodeType; )
                          i = i.nextSibling;
                      i && i.className.split(" ").indexOf("dropdown-menu") >= 0 && (e.template = i.outerHTML,
                      e.templateUrl = n,
                      i.parentNode.removeChild(i))
                  }
                  return function(t, n, i) {
                      var o = {
                          scope: t
                      };
                      angular.forEach(["template", "templateUrl", "controller", "controllerAs", "placement", "container", "delay", "trigger", "keyboard", "html", "animation", "id", "autoClose"], function(t) {
                          angular.isDefined(e[t]) && (o[t] = e[t])
                      });
                      var a = /^(false|0|)$/i;
                      angular.forEach(["html", "container"], function(t) {
                          angular.isDefined(i[t]) && a.test(i[t]) && (o[t] = !1)
                      }),
                      angular.forEach(["onBeforeShow", "onShow", "onBeforeHide", "onHide"], function(e) {
                          var n = "bs" + e.charAt(0).toUpperCase() + e.slice(1);
                          angular.isDefined(i[n]) && (o[e] = t.$eval(i[n]))
                      }),
                      i.bsDropdown && t.$watch(i.bsDropdown, function(e) {
                          t.content = e
                      }, !0);
                      var s = r(n, o);
                      i.bsShow && t.$watch(i.bsShow, function(t) {
                          s && angular.isDefined(t) && (angular.isString(t) && (t = !!t.match(/true|,?(dropdown),?/i)),
                          t === !0 ? s.show() : s.hide())
                      }),
                      t.$on("$destroy", function() {
                          s && s.destroy(),
                          o = null,
                          s = null
                      })
                  }
              }
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.button", []).provider("$button", function() {
          var t = this.defaults = {
              activeClass: "active",
              toggleEvent: "click"
          };
          this.$get = function() {
              return {
                  defaults: t
              }
          }
      }).directive("bsCheckboxGroup", function() {
          return {
              restrict: "A",
              require: "ngModel",
              compile: function(t, e) {
                  t.attr("data-toggle", "buttons"),
                  t.removeAttr("ng-model");
                  var n = t[0].querySelectorAll('input[type="checkbox"]');
                  angular.forEach(n, function(t) {
                      var n = angular.element(t);
                      n.attr("bs-checkbox", ""),
                      n.attr("ng-model", e.ngModel + "." + n.attr("value"))
                  })
              }
          }
      }).directive("bsCheckbox", ["$button", "$$rAF", function(t, e) {
          var n = t.defaults
            , r = /^(true|false|\d+)$/;
          return {
              restrict: "A",
              require: "ngModel",
              link: function(t, i, o, a) {
                  var s = n
                    , u = "INPUT" === i[0].nodeName
                    , c = u ? i.parent() : i
                    , l = angular.isDefined(o.trueValue) ? o.trueValue : !0;
                  r.test(o.trueValue) && (l = t.$eval(o.trueValue));
                  var f = angular.isDefined(o.falseValue) ? o.falseValue : !1;
                  r.test(o.falseValue) && (f = t.$eval(o.falseValue));
                  var p = "boolean" != typeof l || "boolean" != typeof f;
                  p && (a.$parsers.push(function(t) {
                      return t ? l : f
                  }),
                  a.$formatters.push(function(t) {
                      return angular.equals(t, l)
                  })),
                  a.$render = function() {
                      var t = !!a.$viewValue;
                      e(function() {
                          u && (i[0].checked = t),
                          c.toggleClass(s.activeClass, t)
                      })
                  }
                  ,
                  i.bind(s.toggleEvent, function() {
                      t.$apply(function() {
                          u || a.$setViewValue(!c.hasClass("active")),
                          a.$render()
                      })
                  })
              }
          }
      }
      ]).directive("bsRadioGroup", function() {
          return {
              restrict: "A",
              require: "ngModel",
              compile: function(t, e) {
                  t.attr("data-toggle", "buttons"),
                  t.removeAttr("ng-model");
                  var n = t[0].querySelectorAll('input[type="radio"]');
                  angular.forEach(n, function(t) {
                      angular.element(t).attr("bs-radio", ""),
                      angular.element(t).attr("ng-model", e.ngModel)
                  })
              }
          }
      }).directive("bsRadio", ["$button", "$$rAF", function(t, e) {
          var n = t.defaults
            , r = /^(true|false|\d+)$/;
          return {
              restrict: "A",
              require: "ngModel",
              link: function(t, i, o, a) {
                  var s, u = n, c = "INPUT" === i[0].nodeName, l = c ? i.parent() : i;
                  o.$observe("value", function(e) {
                      s = "boolean" != typeof e && r.test(e) ? t.$eval(e) : e,
                      a.$render()
                  }),
                  a.$render = function() {
                      var t = angular.equals(a.$viewValue, s);
                      e(function() {
                          c && (i[0].checked = t),
                          l.toggleClass(u.activeClass, t)
                      })
                  }
                  ,
                  i.bind(u.toggleEvent, function() {
                      t.$apply(function() {
                          a.$setViewValue(s),
                          a.$render()
                      })
                  })
              }
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.datepicker", ["mgcrea.ngStrap.helpers.dateParser", "mgcrea.ngStrap.helpers.dateFormatter", "mgcrea.ngStrap.tooltip"]).provider("$datepicker", function() {
          var t = this.defaults = {
              animation: "am-fade",
              prefixClass: "datepicker",
              placement: "bottom-left",
              templateUrl: "datepicker/datepicker.tpl.html",
              trigger: "focus",
              container: !1,
              keyboard: !0,
              html: !1,
              delay: 0,
              useNative: !1,
              dateType: "date",
              dateFormat: "shortDate",
              timezone: null,
              modelDateFormat: null,
              dayFormat: "dd",
              monthFormat: "MMM",
              yearFormat: "yyyy",
              monthTitleFormat: "MMMM yyyy",
              yearTitleFormat: "yyyy",
              strictFormat: !1,
              autoclose: !1,
              minDate: -(1 / 0),
              maxDate: +(1 / 0),
              startView: 0,
              minView: 0,
              startWeek: 0,
              daysOfWeekDisabled: "",
              hasToday: !1,
              hasClear: !1,
              iconLeft: "glyphicon glyphicon-chevron-left",
              iconRight: "glyphicon glyphicon-chevron-right"
          };
          this.$get = ["$window", "$document", "$rootScope", "$sce", "$dateFormatter", "datepickerViews", "$tooltip", "$timeout", function(e, n, r, i, o, a, s, u) {
              function c(e, n, r) {
                  function i(t) {
                      t.selected = c.$isSelected(t.date)
                  }
                  function o() {
                      e[0].focus()
                  }
                  var c = s(e, angular.extend({}, t, r))
                    , p = r.scope
                    , d = c.$options
                    , h = c.$scope;
                  d.startView && (d.startView -= d.minView);
                  var m = a(c);
                  c.$views = m.views;
                  var g = m.viewDate;
                  h.$mode = d.startView,
                  h.$iconLeft = d.iconLeft,
                  h.$iconRight = d.iconRight,
                  h.$hasToday = d.hasToday,
                  h.$hasClear = d.hasClear;
                  var v = c.$views[h.$mode];
                  h.$select = function(t, e) {
                      e || c.select(t)
                  }
                  ,
                  h.$selectPane = function(t) {
                      c.$selectPane(t)
                  }
                  ,
                  h.$toggleMode = function() {
                      c.setMode((h.$mode + 1) % c.$views.length)
                  }
                  ,
                  h.$setToday = function() {
                      d.autoclose ? (c.setMode(0),
                      c.select(new Date)) : c.select(new Date, !0)
                  }
                  ,
                  h.$clear = function() {
                      d.autoclose ? (c.setMode(0),
                      c.select(null)) : c.select(null, !0)
                  }
                  ,
                  c.update = function(t) {
                      angular.isDate(t) && !isNaN(t.getTime()) && (c.$date = t,
                      v.update.call(v, t)),
                      c.$build(!0)
                  }
                  ,
                  c.updateDisabledDates = function(t) {
                      d.disabledDateRanges = t;
                      for (var e = 0, n = h.rows.length; n > e; e++)
                          angular.forEach(h.rows[e], c.$setDisabledEl)
                  }
                  ,
                  c.select = function(t, e) {
                      angular.isDate(t) ? angular.isDate(n.$dateValue) && !isNaN(n.$dateValue.getTime()) || (n.$dateValue = new Date(t)) : n.$dateValue = null,
                      !h.$mode || e ? (n.$setViewValue(angular.copy(t)),
                      n.$render(),
                      d.autoclose && !e && u(function() {
                          c.hide(!0)
                      })) : (angular.extend(g, {
                          year: t.getFullYear(),
                          month: t.getMonth(),
                          date: t.getDate()
                      }),
                      c.setMode(h.$mode - 1),
                      c.$build())
                  }
                  ,
                  c.setMode = function(t) {
                      h.$mode = t,
                      v = c.$views[h.$mode],
                      c.$build()
                  }
                  ,
                  c.$build = function(t) {
                      t === !0 && v.built || (t !== !1 || v.built) && v.build.call(v)
                  }
                  ,
                  c.$updateSelected = function() {
                      for (var t = 0, e = h.rows.length; e > t; t++)
                          angular.forEach(h.rows[t], i)
                  }
                  ,
                  c.$isSelected = function(t) {
                      return v.isSelected(t)
                  }
                  ,
                  c.$setDisabledEl = function(t) {
                      t.disabled = v.isDisabled(t.date)
                  }
                  ,
                  c.$selectPane = function(t) {
                      var e = v.steps
                        , n = new Date(Date.UTC(g.year + (e.year || 0) * t, g.month + (e.month || 0) * t, 1));
                      angular.extend(g, {
                          year: n.getUTCFullYear(),
                          month: n.getUTCMonth(),
                          date: n.getUTCDate()
                      }),
                      c.$build()
                  }
                  ,
                  c.$onMouseDown = function(t) {
                      if (t.preventDefault(),
                      t.stopPropagation(),
                      f) {
                          var e = angular.element(t.target);
                          "button" !== e[0].nodeName.toLowerCase() && (e = e.parent()),
                          e.triggerHandler("click")
                      }
                  }
                  ,
                  c.$onKeyDown = function(t) {
                      if (/(38|37|39|40|13)/.test(t.keyCode) && !t.shiftKey && !t.altKey) {
                          if (t.preventDefault(),
                          t.stopPropagation(),
                          13 === t.keyCode)
                              return void (h.$mode ? h.$apply(function() {
                                  c.setMode(h.$mode - 1)
                              }) : c.hide(!0));
                          v.onKeyDown(t),
                          p.$digest()
                      }
                  }
                  ;
                  var y = c.init;
                  c.init = function() {
                      return l && d.useNative ? (e.prop("type", "date"),
                      void e.css("-webkit-appearance", "textfield")) : (f && (e.prop("type", "text"),
                      e.attr("readonly", "true"),
                      e.on("click", o)),
                      void y())
                  }
                  ;
                  var b = c.destroy;
                  c.destroy = function() {
                      l && d.useNative && e.off("click", o),
                      b()
                  }
                  ;
                  var $ = c.show;
                  c.show = function() {
                      !f && e.attr("readonly") || e.attr("disabled") || ($(),
                      u(function() {
                          c.$isShown && (c.$element.on(f ? "touchstart" : "mousedown", c.$onMouseDown),
                          d.keyboard && e.on("keydown", c.$onKeyDown))
                      }, 0, !1))
                  }
                  ;
                  var w = c.hide;
                  return c.hide = function(t) {
                      c.$isShown && (c.$element.off(f ? "touchstart" : "mousedown", c.$onMouseDown),
                      d.keyboard && e.off("keydown", c.$onKeyDown),
                      w(t))
                  }
                  ,
                  c
              }
              var l = /(ip[ao]d|iphone|android)/gi.test(e.navigator.userAgent)
                , f = "createTouch"in e.document && l;
              return t.lang || (t.lang = o.getDefaultLocale()),
              c.defaults = t,
              c
          }
          ]
      }).directive("bsDatepicker", ["$window", "$parse", "$q", "$dateFormatter", "$dateParser", "$datepicker", function(t, e, n, r, i, o) {
          var a = /(ip[ao]d|iphone|android)/gi.test(t.navigator.userAgent);
          return {
              restrict: "EAC",
              require: "ngModel",
              link: function(t, e, n, s) {
                  function u(t) {
                      return t && t.length ? t : null
                  }
                  function c(t) {
                      if (angular.isDate(t)) {
                          var e = isNaN(d.$options.minDate) || t.getTime() >= d.$options.minDate
                            , n = isNaN(d.$options.maxDate) || t.getTime() <= d.$options.maxDate
                            , r = e && n;
                          s.$setValidity("date", r),
                          s.$setValidity("min", e),
                          s.$setValidity("max", n),
                          r && (s.$dateValue = t)
                      }
                  }
                  function l() {
                      return !s.$dateValue || isNaN(s.$dateValue.getTime()) ? "" : m(s.$dateValue, f.dateFormat)
                  }
                  var f = {
                      scope: t
                  };
                  angular.forEach(["template", "templateUrl", "controller", "controllerAs", "placement", "container", "delay", "trigger", "html", "animation", "autoclose", "dateType", "dateFormat", "timezone", "modelDateFormat", "dayFormat", "strictFormat", "startWeek", "startDate", "useNative", "lang", "startView", "minView", "iconLeft", "iconRight", "daysOfWeekDisabled", "id", "prefixClass", "prefixEvent", "hasToday", "hasClear"], function(t) {
                      angular.isDefined(n[t]) && (f[t] = n[t])
                  });
                  var p = /^(false|0|)$/i;
                  angular.forEach(["html", "container", "autoclose", "useNative", "hasToday", "hasClear"], function(t) {
                      angular.isDefined(n[t]) && p.test(n[t]) && (f[t] = !1)
                  }),
                  angular.forEach(["onBeforeShow", "onShow", "onBeforeHide", "onHide"], function(e) {
                      var r = "bs" + e.charAt(0).toUpperCase() + e.slice(1);
                      angular.isDefined(n[r]) && (f[e] = t.$eval(n[r]))
                  });
                  var d = o(e, s, f);
                  f = d.$options,
                  a && f.useNative && (f.dateFormat = "yyyy-MM-dd");
                  var h = f.lang
                    , m = function(t, e) {
                      return r.formatDate(t, e, h)
                  }
                    , g = i({
                      format: f.dateFormat,
                      lang: h,
                      strict: f.strictFormat
                  });
                  n.bsShow && t.$watch(n.bsShow, function(t) {
                      d && angular.isDefined(t) && (angular.isString(t) && (t = !!t.match(/true|,?(datepicker),?/i)),
                      t === !0 ? d.show() : d.hide())
                  }),
                  angular.forEach(["minDate", "maxDate"], function(t) {
                      angular.isDefined(n[t]) && n.$observe(t, function(e) {
                          d.$options[t] = g.getDateForAttribute(t, e),
                          isNaN(d.$options[t]) || d.$build(!1),
                          c(s.$dateValue)
                      })
                  }),
                  angular.isDefined(n.dateFormat) && n.$observe("dateFormat", function(t) {
                      d.$options.dateFormat = t
                  }),
                  t.$watch(n.ngModel, function() {
                      d.update(s.$dateValue)
                  }, !0),
                  angular.isDefined(n.disabledDates) && t.$watch(n.disabledDates, function(t, e) {
                      t = u(t),
                      e = u(e),
                      t && d.updateDisabledDates(t)
                  }),
                  s.$parsers.unshift(function(t) {
                      var e;
                      if (!t)
                          return s.$setValidity("date", !0),
                          null;
                      var n = g.parse(t, s.$dateValue);
                      return !n || isNaN(n.getTime()) ? void s.$setValidity("date", !1) : (c(n),
                      "string" === f.dateType ? (e = g.timezoneOffsetAdjust(n, f.timezone, !0),
                      m(e, f.modelDateFormat || f.dateFormat)) : (e = g.timezoneOffsetAdjust(s.$dateValue, f.timezone, !0),
                      "number" === f.dateType ? e.getTime() : "unix" === f.dateType ? e.getTime() / 1e3 : "iso" === f.dateType ? e.toISOString() : new Date(e)))
                  }),
                  s.$formatters.push(function(t) {
                      var e;
                      return e = angular.isUndefined(t) || null === t ? NaN : angular.isDate(t) ? t : "string" === f.dateType ? g.parse(t, null, f.modelDateFormat) : "unix" === f.dateType ? new Date(1e3 * t) : new Date(t),
                      s.$dateValue = g.timezoneOffsetAdjust(e, f.timezone),
                      l()
                  }),
                  s.$render = function() {
                      e.val(l())
                  }
                  ,
                  t.$on("$destroy", function() {
                      d && d.destroy(),
                      f = null,
                      d = null
                  })
              }
          }
      }
      ]).provider("datepickerViews", function() {
          function t(t, e) {
              for (var n = []; t.length > 0; )
                  n.push(t.splice(0, e));
              return n
          }
          function e(t, e) {
              return (t % e + e) % e
          }
          this.$get = ["$dateFormatter", "$dateParser", "$sce", function(n, r, i) {
              return function(o) {
                  var a = o.$scope
                    , s = o.$options
                    , u = s.lang
                    , c = function(t, e) {
                      return n.formatDate(t, e, u)
                  }
                    , l = r({
                      format: s.dateFormat,
                      lang: u,
                      strict: s.strictFormat
                  })
                    , f = n.weekdaysShort(u)
                    , p = f.slice(s.startWeek).concat(f.slice(0, s.startWeek))
                    , d = i.trustAsHtml('<th class="dow text-center">' + p.join('</th><th class="dow text-center">') + "</th>")
                    , h = o.$date || (s.startDate ? l.getDateForAttribute("startDate", s.startDate) : new Date)
                    , m = {
                      year: h.getFullYear(),
                      month: h.getMonth(),
                      date: h.getDate()
                  }
                    , g = [{
                      format: s.dayFormat,
                      split: 7,
                      steps: {
                          month: 1
                      },
                      update: function(t, e) {
                          !this.built || e || t.getFullYear() !== m.year || t.getMonth() !== m.month ? (angular.extend(m, {
                              year: o.$date.getFullYear(),
                              month: o.$date.getMonth(),
                              date: o.$date.getDate()
                          }),
                          o.$build()) : t.getDate() === m.date && 1 !== t.getDate() || (m.date = o.$date.getDate(),
                          o.$updateSelected())
                      },
                      build: function() {
                          var n = new Date(m.year,m.month,1)
                            , r = n.getTimezoneOffset()
                            , i = new Date(+n - 864e5 * e(n.getDay() - s.startWeek, 7))
                            , u = i.getTimezoneOffset()
                            , f = l.timezoneOffsetAdjust(new Date, s.timezone).toDateString();
                          u !== r && (i = new Date(+i + 6e4 * (u - r)));
                          for (var p, h = [], g = 0; 42 > g; g++)
                              p = l.daylightSavingAdjust(new Date(i.getFullYear(),i.getMonth(),i.getDate() + g)),
                              h.push({
                                  date: p,
                                  isToday: p.toDateString() === f,
                                  label: c(p, this.format),
                                  selected: o.$date && this.isSelected(p),
                                  muted: p.getMonth() !== m.month,
                                  disabled: this.isDisabled(p)
                              });
                          a.title = c(n, s.monthTitleFormat),
                          a.showLabels = !0,
                          a.labels = d,
                          a.rows = t(h, this.split),
                          a.isTodayDisabled = this.isDisabled(new Date),
                          this.built = !0
                      },
                      isSelected: function(t) {
                          return o.$date && t.getFullYear() === o.$date.getFullYear() && t.getMonth() === o.$date.getMonth() && t.getDate() === o.$date.getDate()
                      },
                      isDisabled: function(t) {
                          var e = t.getTime();
                          if (e < s.minDate || e > s.maxDate)
                              return !0;
                          if (-1 !== s.daysOfWeekDisabled.indexOf(t.getDay()))
                              return !0;
                          if (s.disabledDateRanges)
                              for (var n = 0; n < s.disabledDateRanges.length; n++)
                                  if (e >= s.disabledDateRanges[n].start && e <= s.disabledDateRanges[n].end)
                                      return !0;
                          return !1
                      },
                      onKeyDown: function(t) {
                          if (o.$date) {
                              var e, n = o.$date.getTime();
                              37 === t.keyCode ? e = new Date(n - 864e5) : 38 === t.keyCode ? e = new Date(n - 6048e5) : 39 === t.keyCode ? e = new Date(n + 864e5) : 40 === t.keyCode && (e = new Date(n + 6048e5)),
                              this.isDisabled(e) || o.select(e, !0)
                          }
                      }
                  }, {
                      name: "month",
                      format: s.monthFormat,
                      split: 4,
                      steps: {
                          year: 1
                      },
                      update: function(t) {
                          this.built && t.getFullYear() === m.year ? t.getMonth() !== m.month && (angular.extend(m, {
                              month: o.$date.getMonth(),
                              date: o.$date.getDate()
                          }),
                          o.$updateSelected()) : (angular.extend(m, {
                              year: o.$date.getFullYear(),
                              month: o.$date.getMonth(),
                              date: o.$date.getDate()
                          }),
                          o.$build())
                      },
                      build: function() {
                          for (var e, n = [], r = 0; 12 > r; r++)
                              e = new Date(m.year,r,1),
                              n.push({
                                  date: e,
                                  label: c(e, this.format),
                                  selected: o.$isSelected(e),
                                  disabled: this.isDisabled(e)
                              });
                          a.title = c(e, s.yearTitleFormat),
                          a.showLabels = !1,
                          a.rows = t(n, this.split),
                          this.built = !0
                      },
                      isSelected: function(t) {
                          return o.$date && t.getFullYear() === o.$date.getFullYear() && t.getMonth() === o.$date.getMonth()
                      },
                      isDisabled: function(t) {
                          var e = +new Date(t.getFullYear(),t.getMonth() + 1,0);
                          return e < s.minDate || t.getTime() > s.maxDate
                      },
                      onKeyDown: function(t) {
                          if (o.$date) {
                              var e = o.$date.getMonth()
                                , n = new Date(o.$date);
                              37 === t.keyCode ? n.setMonth(e - 1) : 38 === t.keyCode ? n.setMonth(e - 4) : 39 === t.keyCode ? n.setMonth(e + 1) : 40 === t.keyCode && n.setMonth(e + 4),
                              this.isDisabled(n) || o.select(n, !0)
                          }
                      }
                  }, {
                      name: "year",
                      format: s.yearFormat,
                      split: 4,
                      steps: {
                          year: 12
                      },
                      update: function(t, e) {
                          !this.built || e || parseInt(t.getFullYear() / 20, 10) !== parseInt(m.year / 20, 10) ? (angular.extend(m, {
                              year: o.$date.getFullYear(),
                              month: o.$date.getMonth(),
                              date: o.$date.getDate()
                          }),
                          o.$build()) : t.getFullYear() !== m.year && (angular.extend(m, {
                              year: o.$date.getFullYear(),
                              month: o.$date.getMonth(),
                              date: o.$date.getDate()
                          }),
                          o.$updateSelected())
                      },
                      build: function() {
                          for (var e, n = m.year - m.year % (3 * this.split), r = [], i = 0; 12 > i; i++)
                              e = new Date(n + i,0,1),
                              r.push({
                                  date: e,
                                  label: c(e, this.format),
                                  selected: o.$isSelected(e),
                                  disabled: this.isDisabled(e)
                              });
                          a.title = r[0].label + "-" + r[r.length - 1].label,
                          a.showLabels = !1,
                          a.rows = t(r, this.split),
                          this.built = !0
                      },
                      isSelected: function(t) {
                          return o.$date && t.getFullYear() === o.$date.getFullYear()
                      },
                      isDisabled: function(t) {
                          var e = +new Date(t.getFullYear() + 1,0,0);
                          return e < s.minDate || t.getTime() > s.maxDate
                      },
                      onKeyDown: function(t) {
                          if (o.$date) {
                              var e = o.$date.getFullYear()
                                , n = new Date(o.$date);
                              37 === t.keyCode ? n.setYear(e - 1) : 38 === t.keyCode ? n.setYear(e - 4) : 39 === t.keyCode ? n.setYear(e + 1) : 40 === t.keyCode && n.setYear(e + 4),
                              this.isDisabled(n) || o.select(n, !0)
                          }
                      }
                  }];
                  return {
                      views: s.minView ? Array.prototype.slice.call(g, s.minView) : g,
                      viewDate: m
                  }
              }
          }
          ]
      }),
      angular.module("mgcrea.ngStrap.collapse", []).provider("$collapse", function() {
          var t = this.defaults = {
              animation: "am-collapse",
              disallowToggle: !1,
              activeClass: "in",
              startCollapsed: !1,
              allowMultiple: !1
          }
            , e = this.controller = function(e, n, r) {
              function i(t) {
                  for (var e = u.$targets.$active, n = 0; n < e.length; n++)
                      t < e[n] && (e[n] = e[n] - 1),
                      e[n] === u.$targets.length && (e[n] = u.$targets.length - 1)
              }
              function o(t) {
                  var e = u.$targets.$active;
                  return -1 !== e.indexOf(t)
              }
              function a(t) {
                  var e = u.$targets.$active.indexOf(t);
                  -1 !== e && u.$targets.$active.splice(e, 1)
              }
              function s(t) {
                  u.$options.allowMultiple || u.$targets.$active.splice(0, 1),
                  -1 === u.$targets.$active.indexOf(t) && u.$targets.$active.push(t)
              }
              var u = this;
              u.$options = angular.copy(t),
              angular.forEach(["animation", "disallowToggle", "activeClass", "startCollapsed", "allowMultiple"], function(t) {
                  angular.isDefined(r[t]) && (u.$options[t] = r[t])
              });
              var c = /^(false|0|)$/i;
              angular.forEach(["disallowToggle", "startCollapsed", "allowMultiple"], function(t) {
                  angular.isDefined(r[t]) && c.test(r[t]) && (u.$options[t] = !1)
              }),
              u.$toggles = [],
              u.$targets = [],
              u.$viewChangeListeners = [],
              u.$registerToggle = function(t) {
                  u.$toggles.push(t)
              }
              ,
              u.$registerTarget = function(t) {
                  u.$targets.push(t)
              }
              ,
              u.$unregisterToggle = function(t) {
                  var e = u.$toggles.indexOf(t);
                  u.$toggles.splice(e, 1)
              }
              ,
              u.$unregisterTarget = function(t) {
                  var e = u.$targets.indexOf(t);
                  u.$targets.splice(e, 1),
                  u.$options.allowMultiple && a(t),
                  i(e),
                  u.$viewChangeListeners.forEach(function(t) {
                      t()
                  })
              }
              ,
              u.$targets.$active = u.$options.startCollapsed ? [] : [0],
              u.$setActive = e.$setActive = function(t) {
                  angular.isArray(t) ? u.$targets.$active = t : !u.$options.disallowToggle && o(t) ? a(t) : s(t),
                  u.$viewChangeListeners.forEach(function(t) {
                      t()
                  })
              }
              ,
              u.$activeIndexes = function() {
                  return u.$options.allowMultiple ? u.$targets.$active : 1 === u.$targets.$active.length ? u.$targets.$active[0] : -1
              }
          }
          ;
          this.$get = function() {
              var n = {};
              return n.defaults = t,
              n.controller = e,
              n
          }
      }).directive("bsCollapse", ["$window", "$animate", "$collapse", function(t, e, n) {
          return {
              require: ["?ngModel", "bsCollapse"],
              controller: ["$scope", "$element", "$attrs", n.controller],
              link: function(t, e, n, r) {
                  var i = r[0]
                    , o = r[1];
                  i && (o.$viewChangeListeners.push(function() {
                      i.$setViewValue(o.$activeIndexes())
                  }),
                  i.$formatters.push(function(t) {
                      if (angular.isArray(t))
                          o.$setActive(t);
                      else {
                          var e = o.$activeIndexes();
                          angular.isArray(e) ? -1 === e.indexOf(1 * t) && o.$setActive(1 * t) : e !== 1 * t && o.$setActive(1 * t)
                      }
                      return t
                  }))
              }
          }
      }
      ]).directive("bsCollapseToggle", function() {
          return {
              require: ["^?ngModel", "^bsCollapse"],
              link: function(t, e, n, r) {
                  var i = r[1];
                  e.attr("data-toggle", "collapse"),
                  i.$registerToggle(e),
                  t.$on("$destroy", function() {
                      i.$unregisterToggle(e)
                  }),
                  e.on("click", function() {
                      if (!n.disabled) {
                          var r = n.bsCollapseToggle && "bs-collapse-toggle" !== n.bsCollapseToggle ? n.bsCollapseToggle : i.$toggles.indexOf(e);
                          i.$setActive(1 * r),
                          t.$apply()
                      }
                  })
              }
          }
      }).directive("bsCollapseTarget", ["$animate", function(t) {
          return {
              require: ["^?ngModel", "^bsCollapse"],
              link: function(e, n, r, i) {
                  function o() {
                      var e = a.$targets.indexOf(n)
                        , r = a.$activeIndexes()
                        , i = "removeClass";
                      angular.isArray(r) ? -1 !== r.indexOf(e) && (i = "addClass") : e === r && (i = "addClass"),
                      t[i](n, a.$options.activeClass)
                  }
                  var a = i[1];
                  n.addClass("collapse"),
                  a.$options.animation && n.addClass(a.$options.animation),
                  a.$registerTarget(n),
                  e.$on("$destroy", function() {
                      a.$unregisterTarget(n)
                  }),
                  a.$viewChangeListeners.push(function() {
                      o()
                  }),
                  o()
              }
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.aside", ["mgcrea.ngStrap.modal"]).provider("$aside", function() {
          var t = this.defaults = {
              animation: "am-fade-and-slide-right",
              prefixClass: "aside",
              prefixEvent: "aside",
              placement: "right",
              templateUrl: "aside/aside.tpl.html",
              contentTemplate: !1,
              container: !1,
              element: null,
              backdrop: !0,
              keyboard: !0,
              html: !1,
              show: !0
          };
          this.$get = ["$modal", function(e) {
              function n(n) {
                  var r = {}
                    , i = angular.extend({}, t, n);
                  return r = e(i)
              }
              return n
          }
          ]
      }).directive("bsAside", ["$window", "$sce", "$aside", function(t, e, n) {
          return {
              restrict: "EAC",
              scope: !0,
              link: function(t, r, i) {
                  var o = {
                      scope: t,
                      element: r,
                      show: !1
                  };
                  angular.forEach(["template", "templateUrl", "controller", "controllerAs", "contentTemplate", "placement", "backdrop", "keyboard", "html", "container", "animation"], function(t) {
                      angular.isDefined(i[t]) && (o[t] = i[t])
                  });
                  var a = /^(false|0|)$/i;
                  angular.forEach(["backdrop", "keyboard", "html", "container"], function(t) {
                      angular.isDefined(i[t]) && a.test(i[t]) && (o[t] = !1)
                  }),
                  angular.forEach(["onBeforeShow", "onShow", "onBeforeHide", "onHide"], function(e) {
                      var n = "bs" + e.charAt(0).toUpperCase() + e.slice(1);
                      angular.isDefined(i[n]) && (o[e] = t.$eval(i[n]))
                  }),
                  angular.forEach(["title", "content"], function(n) {
                      i[n] && i.$observe(n, function(r) {
                          t[n] = e.trustAsHtml(r)
                      })
                  }),
                  i.bsAside && t.$watch(i.bsAside, function(e) {
                      angular.isObject(e) ? angular.extend(t, e) : t.content = e
                  }, !0);
                  var s = n(o);
                  r.on(i.trigger || "click", s.toggle),
                  t.$on("$destroy", function() {
                      s && s.destroy(),
                      o = null,
                      s = null
                  })
              }
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.alert", ["mgcrea.ngStrap.modal"]).provider("$alert", function() {
          var t = this.defaults = {
              animation: "am-fade",
              prefixClass: "alert",
              prefixEvent: "alert",
              placement: null,
              templateUrl: "alert/alert.tpl.html",
              container: !1,
              element: null,
              backdrop: !1,
              keyboard: !0,
              show: !0,
              duration: !1,
              type: !1,
              dismissable: !0
          };
          this.$get = ["$modal", "$timeout", function(e, n) {
              function r(r) {
                  var i = {}
                    , o = angular.extend({}, t, r);
                  i = e(o),
                  i.$scope.dismissable = !!o.dismissable,
                  o.type && (i.$scope.type = o.type);
                  var a = i.show;
                  return o.duration && (i.show = function() {
                      a(),
                      n(function() {
                          i.hide()
                      }, 1e3 * o.duration)
                  }
                  ),
                  i
              }
              return r
          }
          ]
      }).directive("bsAlert", ["$window", "$sce", "$alert", function(t, e, n) {
          return {
              restrict: "EAC",
              scope: !0,
              link: function(t, r, i) {
                  var o = {
                      scope: t,
                      element: r,
                      show: !1
                  };
                  angular.forEach(["template", "templateUrl", "controller", "controllerAs", "placement", "keyboard", "html", "container", "animation", "duration", "dismissable"], function(t) {
                      angular.isDefined(i[t]) && (o[t] = i[t])
                  });
                  var a = /^(false|0|)$/i;
                  angular.forEach(["keyboard", "html", "container", "dismissable"], function(t) {
                      angular.isDefined(i[t]) && a.test(i[t]) && (o[t] = !1)
                  }),
                  angular.forEach(["onBeforeShow", "onShow", "onBeforeHide", "onHide"], function(e) {
                      var n = "bs" + e.charAt(0).toUpperCase() + e.slice(1);
                      angular.isDefined(i[n]) && (o[e] = t.$eval(i[n]))
                  }),
                  t.hasOwnProperty("title") || (t.title = ""),
                  angular.forEach(["title", "content", "type"], function(n) {
                      i[n] && i.$observe(n, function(r) {
                          t[n] = e.trustAsHtml(r)
                      })
                  }),
                  i.bsAlert && t.$watch(i.bsAlert, function(e) {
                      angular.isObject(e) ? angular.extend(t, e) : t.content = e
                  }, !0);
                  var s = n(o);
                  r.on(i.trigger || "click", s.toggle),
                  t.$on("$destroy", function() {
                      s && s.destroy(),
                      o = null,
                      s = null
                  })
              }
          }
      }
      ]),
      angular.module("mgcrea.ngStrap.affix", ["mgcrea.ngStrap.helpers.dimensions", "mgcrea.ngStrap.helpers.debounce"]).provider("$affix", function() {
          var t = this.defaults = {
              offsetTop: "auto",
              inlineStyles: !0,
              setWidth: !0
          };
          this.$get = ["$window", "debounce", "dimensions", function(e, n, r) {
              function i(i, s) {
                  function u(t, e, n) {
                      var r = c()
                        , i = l();
                      return y >= r ? "top" : null !== t ? r + t <= e.top ? "middle" : "bottom" : null !== b && e.top + n + g >= i - b ? "bottom" : "middle"
                  }
                  function c() {
                      return d[0] === e ? e.pageYOffset : d[0].scrollTop
                  }
                  function l() {
                      return d[0] === e ? e.document.body.scrollHeight : d[0].scrollHeight
                  }
                  var f = {}
                    , p = angular.extend({}, t, s)
                    , d = p.target
                    , h = "affix affix-top affix-bottom"
                    , m = !1
                    , g = 0
                    , v = 0
                    , y = 0
                    , b = 0
                    , $ = null
                    , w = null
                    , S = i.parent();
                  if (p.offsetParent)
                      if (p.offsetParent.match(/^\d+$/))
                          for (var T = 0; T < 1 * p.offsetParent - 1; T++)
                              S = S.parent();
                      else
                          S = angular.element(p.offsetParent);
                  return f.init = function() {
                      this.$parseOffsets(),
                      v = r.offset(i[0]).top + g,
                      m = p.setWidth && !i[0].style.width,
                      d.on("scroll", this.checkPosition),
                      d.on("click", this.checkPositionWithEventLoop),
                      a.on("resize", this.$debouncedOnResize),
                      this.checkPosition(),
                      this.checkPositionWithEventLoop()
                  }
                  ,
                  f.destroy = function() {
                      d.off("scroll", this.checkPosition),
                      d.off("click", this.checkPositionWithEventLoop),
                      a.off("resize", this.$debouncedOnResize)
                  }
                  ,
                  f.checkPositionWithEventLoop = function() {
                      setTimeout(f.checkPosition, 1)
                  }
                  ,
                  f.checkPosition = function() {
                      var t = c()
                        , e = r.offset(i[0])
                        , n = r.height(i[0])
                        , a = u(w, e, n);
                      $ !== a && ($ = a,
                      "top" === a ? (w = null,
                      m && i.css("width", ""),
                      p.inlineStyles && (i.css("position", p.offsetParent ? "" : "relative"),
                      i.css("top", ""))) : "bottom" === a ? (w = p.offsetUnpin ? -(1 * p.offsetUnpin) : e.top - t,
                      m && i.css("width", ""),
                      p.inlineStyles && (i.css("position", p.offsetParent ? "" : "relative"),
                      i.css("top", p.offsetParent ? "" : o[0].offsetHeight - b - n - v + "px"))) : (w = null,
                      m && i.css("width", i[0].offsetWidth + "px"),
                      p.inlineStyles && (i.css("position", "fixed"),
                      i.css("top", g + "px"))),
                      i.removeClass(h).addClass("affix" + ("middle" !== a ? "-" + a : "")))
                  }
                  ,
                  f.$onResize = function() {
                      f.$parseOffsets(),
                      f.checkPosition()
                  }
                  ,
                  f.$debouncedOnResize = n(f.$onResize, 50),
                  f.$parseOffsets = function() {
                      var t = i[0].style.position
                        , e = i[0].style.top;
                      p.inlineStyles && (i.css("position", p.offsetParent ? "" : "relative"),
                      i.css("top", "")),
                      p.offsetTop && ("auto" === p.offsetTop && (p.offsetTop = "+0"),
                      p.offsetTop.match(/^[-+]\d+$/) ? (g = 1 * -p.offsetTop,
                      y = p.offsetParent ? r.offset(S[0]).top + 1 * p.offsetTop : r.offset(i[0]).top - r.css(i[0], "marginTop", !0) + 1 * p.offsetTop) : y = 1 * p.offsetTop),
                      p.offsetBottom && (b = p.offsetParent && p.offsetBottom.match(/^[-+]\d+$/) ? l() - (r.offset(S[0]).top + r.height(S[0])) + 1 * p.offsetBottom + 1 : 1 * p.offsetBottom),
                      p.inlineStyles && (i.css("position", t),
                      i.css("top", e))
                  }
                  ,
                  f.init(),
                  f
              }
              var o = angular.element(e.document.body)
                , a = angular.element(e);
              return i
          }
          ]
      }).directive("bsAffix", ["$affix", "$window", "$timeout", function(t, e, n) {
          return {
              restrict: "EAC",
              require: "^?bsAffixTarget",
              link: function(r, i, o, a) {
                  var s = {
                      scope: r,
                      target: a ? a.$element : angular.element(e)
                  };
                  angular.forEach(["offsetTop", "offsetBottom", "offsetParent", "offsetUnpin", "inlineStyles", "setWidth"], function(t) {
                      if (angular.isDefined(o[t])) {
                          var e = o[t];
                          /true/i.test(e) && (e = !0),
                          /false/i.test(e) && (e = !1),
                          s[t] = e
                      }
                  });
                  var u;
                  n(function() {
                      u = t(i, s)
                  }),
                  r.$on("$destroy", function() {
                      u && u.destroy(),
                      s = null,
                      u = null
                  })
              }
          }
      }
      ]).directive("bsAffixTarget", function() {
          return {
              controller: ["$element", function(t) {
                  this.$element = t
              }
              ]
          }
      }),
      angular.module("mgcrea.ngStrap", ["mgcrea.ngStrap.modal", "mgcrea.ngStrap.aside", "mgcrea.ngStrap.alert", "mgcrea.ngStrap.button", "mgcrea.ngStrap.select", "mgcrea.ngStrap.datepicker", "mgcrea.ngStrap.timepicker", "mgcrea.ngStrap.navbar", "mgcrea.ngStrap.tooltip", "mgcrea.ngStrap.popover", "mgcrea.ngStrap.dropdown", "mgcrea.ngStrap.typeahead", "mgcrea.ngStrap.scrollspy", "mgcrea.ngStrap.affix", "mgcrea.ngStrap.tab", "mgcrea.ngStrap.collapse"])
  }(window, document),
  function() {
      "use strict";
      angular.module("mgcrea.ngStrap.alert").run(["$templateCache", function(t) {
          t.put("alert/alert.tpl.html", '<div class="alert" ng-class="[type ? \'alert-\' + type : null]"><button type="button" class="close" ng-if="dismissable" ng-click="$hide()">&times;</button> <span ng-if="title"><strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span> </span><span ng-if="!title" ng-bind-html="content"></span></div>')
      }
      ]),
      angular.module("mgcrea.ngStrap.aside").run(["$templateCache", function(t) {
          t.put("aside/aside.tpl.html", '<div class="aside" tabindex="-1" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind="title"></h4></div><div class="aside-body" ng-bind="content"></div><div class="aside-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>')
      }
      ]),
      angular.module("mgcrea.ngStrap.datepicker").run(["$templateCache", function(t) {
          t.put("datepicker/datepicker.tpl.html", '<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px"><table style="table-layout: fixed; height: 100%; width: 100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)"><i class="{{$iconLeft}}"></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="-1" type="button" class="btn btn-default btn-block text-strong" ng-click="$toggleMode()"><strong style="text-transform: capitalize" ng-bind="title"></strong></button></th><th><button tabindex="-1" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)"><i class="{{$iconRight}}"></i></button></th></tr><tr ng-if="showLabels" ng-bind-html="labels"></tr></thead><tbody><tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td class="text-center" ng-repeat="(j, el) in row"><button tabindex="-1" type="button" class="btn btn-default" style="width: 100%" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}" ng-click="$select(el.date, el.disabled)" ng-disabled="el.disabled"><span ng-class="{\'text-muted\': el.muted}" ng-bind="el.label"></span></button></td></tr></tbody><tfoot><tr><td colspan="{{ rows[0].length }}"><div class="btn-group btn-group-justified" role="group"><div class="btn-group" role="group" ng-if="$hasToday"><button type="button" class="btn btn-default today" ng-click="$setToday()" ng-disabled="isTodayDisabled"><strong style="text-transform: capitalize">Today</strong></button></div><div class="btn-group" role="group" ng-if="$hasClear"><button type="button" class="btn btn-default clear" ng-click="$clear()"><strong style="text-transform: capitalize">Clear</strong></button></div></div></td></tr></tfoot></table></div>')
      }
      ]),
      angular.module("mgcrea.ngStrap.dropdown").run(["$templateCache", function(t) {
          t.put("dropdown/dropdown.tpl.html", '<ul tabindex="-1" class="dropdown-menu" role="menu" ng-show="content && content.length"><li role="presentation" ng-class="{divider: item.divider, active: item.active}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind="item.text"></a> <a role="menuitem" tabindex="-1" href="javascript:void(0)" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>')
      }
      ]),
      angular.module("mgcrea.ngStrap.modal").run(["$templateCache", function(t) {
          t.put("modal/modal.tpl.html", '<div class="modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" aria-label="Close" ng-click="$hide()"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>')
      }
      ]),
      angular.module("mgcrea.ngStrap.popover").run(["$templateCache", function(t) {
          t.put("popover/popover.tpl.html", '<div class="popover" tabindex="-1"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div>')
      }
      ]),
      angular.module("mgcrea.ngStrap.select").run(["$templateCache", function(t) {
          t.put("select/select.tpl.html", '<ul tabindex="-1" class="select dropdown-menu" ng-show="$isVisible()" role="select"><li ng-if="$showAllNoneButtons"><div class="btn-group" style="margin-bottom: 5px; margin-left: 5px"><button type="button" class="btn btn-default btn-xs" ng-click="$selectAll()">{{$allText}}</button> <button type="button" class="btn btn-default btn-xs" ng-click="$selectNone()">{{$noneText}}</button></div></li><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default" role="menuitem" tabindex="-1" ng-click="$select($index, $event)"><i class="{{$iconCheckmark}} pull-right" ng-if="$isMultiple && $isActive($index)"></i> <span ng-bind="match.label"></span></a></li></ul>')
      }
      ]),
      angular.module("mgcrea.ngStrap.tab").run(["$templateCache", function(t) {
          t.put("tab/tab.tpl.html", '<ul class="nav" ng-class="$navClass" role="tablist"><li role="presentation" ng-repeat="$pane in $panes track by $index" ng-class="[ $isActive($pane, $index) ? $activeClass : \'\', $pane.disabled ? \'disabled\' : \'\' ]"><a role="tab" data-toggle="tab" ng-click="!$pane.disabled && $setActive($pane.name || $index)" data-index="{{ $index }}" ng-bind-html="$pane.title" aria-controls="$pane.title" href=""></a></li></ul><div ng-transclude class="tab-content"></div>')
      }
      ]),
      angular.module("mgcrea.ngStrap.timepicker").run(["$templateCache", function(t) {
          t.put("timepicker/timepicker.tpl.html", '<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto"><table height="100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 0)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 1)"><i class="{{ $iconUp }}"></i></button></th><th ng-if="showSeconds">&nbsp;</th><th ng-if="showSeconds"><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 2)"><i class="{{ $iconUp }}"></i></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class="text-center"><button tabindex="-1" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled"><span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled"><span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span></button></td><td ng-if="showSeconds"><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td ng-if="showSeconds" class="text-center"><button tabindex="-1" ng-if="row[2].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[2].selected}" ng-click="$select(row[2].date, 2)" ng-disabled="row[2].disabled"><span ng-class="{\'text-muted\': row[2].muted}" ng-bind="row[2].label"></span></button></td><td ng-if="showAM">&nbsp;</td><td ng-if="showAM"><button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button> <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button></td></tr></tbody><tfoot><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 0)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 1)"><i class="{{ $iconDown }}"></i></button></th><th ng-if="showSeconds">&nbsp;</th><th ng-if="showSeconds"><button ng-if="showSeconds" tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 2)"><i class="{{ $iconDown }}"></i></button></th></tr></tfoot></table></div>')
      }
      ]),
      angular.module("mgcrea.ngStrap.tooltip").run(["$templateCache", function(t) {
          t.put("tooltip/tooltip.tpl.html", '<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>')
      }
      ]),
      angular.module("mgcrea.ngStrap.typeahead").run(["$templateCache", function(t) {
          t.put("typeahead/typeahead.tpl.html", '<ul tabindex="-1" class="typeahead dropdown-menu" ng-show="$isVisible()" role="select"><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $index == $activeIndex}"><a role="menuitem" tabindex="-1" ng-click="$select($index, $event)" ng-bind="match.label"></a></li></ul>')
      }
      ])
  }(window, document),
  function(t, e) {
      var n = e.isDefined
        , r = e.isUndefined
        , i = e.isNumber
        , o = e.isObject
        , a = e.isArray
        , s = e.isString
        , u = e.extend
        , c = e.toJson;
      e.module("LocalStorageModule", []).provider("localStorageService", function() {
          this.prefix = "ls",
          this.storageType = "localStorage",
          this.cookie = {
              expiry: 30,
              path: "/",
              secure: !1
          },
          this.defaultToCookie = !0,
          this.notify = {
              setItem: !0,
              removeItem: !1
          },
          this.setPrefix = function(t) {
              return this.prefix = t,
              this
          }
          ,
          this.setStorageType = function(t) {
              return this.storageType = t,
              this
          }
          ,
          this.setDefaultToCookie = function(t) {
              return this.defaultToCookie = !!t,
              this
          }
          ,
          this.setStorageCookie = function(t, e, n) {
              return this.cookie.expiry = t,
              this.cookie.path = e,
              this.cookie.secure = n,
              this
          }
          ,
          this.setStorageCookieDomain = function(t) {
              return this.cookie.domain = t,
              this
          }
          ,
          this.setNotify = function(t, e) {
              return this.notify = {
                  setItem: t,
                  removeItem: e
              },
              this
          }
          ,
          this.$get = ["$rootScope", "$window", "$document", "$parse", "$timeout", function(t, e, l, f, p) {
              function d(n) {
                  if (n || (n = e.event),
                  y.setItem && s(n.key) && S(n.key)) {
                      var r = w(n.key);
                      p(function() {
                          t.$broadcast("LocalStorageModule.notification.changed", {
                              key: r,
                              newvalue: n.newValue,
                              storageType: m.storageType
                          })
                      })
                  }
              }
              var h, m = this, g = m.prefix, v = m.cookie, y = m.notify, b = m.storageType;
              l ? l[0] && (l = l[0]) : l = document,
              "." !== g.substr(-1) && (g = g ? g + "." : "");
              var $ = function(t) {
                  return g + t
              }
                , w = function(t) {
                  return t.replace(new RegExp("^" + g,"g"), "")
              }
                , S = function(t) {
                  return 0 === t.indexOf(g)
              }
                , T = function() {
                  try {
                      var n = b in e && null !== e[b]
                        , r = $("__" + Math.round(1e7 * Math.random()));
                      return n && (h = e[b],
                      h.setItem(r, ""),
                      h.removeItem(r)),
                      n
                  } catch (i) {
                      return m.defaultToCookie && (b = "cookie"),
                      t.$broadcast("LocalStorageModule.notification.error", i.message),
                      !1
                  }
              }
                , _ = T()
                , k = function(e, n, i) {
                  var o = M();
                  try {
                      if (L(i),
                      n = r(n) ? null : c(n),
                      !_ && m.defaultToCookie || "cookie" === m.storageType)
                          return _ || t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"),
                          y.setItem && t.$broadcast("LocalStorageModule.notification.setitem", {
                              key: e,
                              newvalue: n,
                              storageType: "cookie"
                          }),
                          A(e, n);
                      try {
                          h && h.setItem($(e), n),
                          y.setItem && t.$broadcast("LocalStorageModule.notification.setitem", {
                              key: e,
                              newvalue: n,
                              storageType: m.storageType
                          })
                      } catch (a) {
                          return t.$broadcast("LocalStorageModule.notification.error", a.message),
                          A(e, n)
                      }
                      return !0
                  } finally {
                      L(o)
                  }
              }
                , E = function(e, n) {
                  var r = M();
                  try {
                      if (L(n),
                      !_ && m.defaultToCookie || "cookie" === m.storageType)
                          return _ || t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"),
                          O(e);
                      var i = h ? h.getItem($(e)) : null;
                      if (!i || "null" === i)
                          return null;
                      try {
                          return JSON.parse(i)
                      } catch (o) {
                          return i
                      }
                  } finally {
                      L(r)
                  }
              }
                , C = function() {
                  var e = M();
                  try {
                      var n = 0;
                      arguments.length >= 1 && ("localStorage" === arguments[arguments.length - 1] || "sessionStorage" === arguments[arguments.length - 1]) && (n = 1,
                      L(arguments[arguments.length - 1]));
                      var r, i;
                      for (r = 0; r < arguments.length - n; r++)
                          if (i = arguments[r],
                          !_ && m.defaultToCookie || "cookie" === m.storageType)
                              _ || t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"),
                              y.removeItem && t.$broadcast("LocalStorageModule.notification.removeitem", {
                                  key: i,
                                  storageType: "cookie"
                              }),
                              R(i);
                          else
                              try {
                                  h.removeItem($(i)),
                                  y.removeItem && t.$broadcast("LocalStorageModule.notification.removeitem", {
                                      key: i,
                                      storageType: m.storageType
                                  })
                              } catch (o) {
                                  t.$broadcast("LocalStorageModule.notification.error", o.message),
                                  R(i)
                              }
                  } finally {
                      L(e)
                  }
              }
                , x = function(e) {
                  var n = M();
                  try {
                      if (L(e),
                      !_)
                          return t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"),
                          [];
                      var r = g.length
                        , i = [];
                      for (var o in h)
                          if (o.substr(0, r) === g)
                              try {
                                  i.push(o.substr(r))
                              } catch (a) {
                                  return t.$broadcast("LocalStorageModule.notification.error", a.Description),
                                  []
                              }
                      return i
                  } finally {
                      L(n)
                  }
              }
                , D = function(e, n) {
                  var r = M();
                  try {
                      L(n);
                      var i = g ? new RegExp("^" + g) : new RegExp
                        , o = e ? new RegExp(e) : new RegExp;
                      if (!_ && m.defaultToCookie || "cookie" === m.storageType)
                          return _ || t.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"),
                          I();
                      if (!_ && !m.defaultToCookie)
                          return !1;
                      var a = g.length;
                      for (var s in h)
                          if (i.test(s) && o.test(s.substr(a)))
                              try {
                                  C(s.substr(a))
                              } catch (u) {
                                  return t.$broadcast("LocalStorageModule.notification.error", u.message),
                                  I()
                              }
                      return !0
                  } finally {
                      L(r)
                  }
              }
                , P = function() {
                  try {
                      return e.navigator.cookieEnabled || "cookie"in l && (l.cookie.length > 0 || (l.cookie = "test").indexOf.call(l.cookie, "test") > -1)
                  } catch (n) {
                      return t.$broadcast("LocalStorageModule.notification.error", n.message),
                      !1
                  }
              }()
                , A = function(e, n, s, u) {
                  if (r(n))
                      return !1;
                  if ((a(n) || o(n)) && (n = c(n)),
                  !P)
                      return t.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"),
                      !1;
                  try {
                      var f = ""
                        , p = new Date
                        , d = "";
                      if (null === n ? (p.setTime(p.getTime() + -864e5),
                      f = "; expires=" + p.toGMTString(),
                      n = "") : i(s) && 0 !== s ? (p.setTime(p.getTime() + 24 * s * 60 * 60 * 1e3),
                      f = "; expires=" + p.toGMTString()) : 0 !== v.expiry && (p.setTime(p.getTime() + 24 * v.expiry * 60 * 60 * 1e3),
                      f = "; expires=" + p.toGMTString()),
                      e) {
                          var h = "; path=" + v.path;
                          v.domain && (d = "; domain=" + v.domain),
                          "boolean" == typeof u ? u === !0 && (d += "; secure") : v.secure === !0 && (d += "; secure"),
                          l.cookie = $(e) + "=" + encodeURIComponent(n) + f + h + d
                      }
                  } catch (m) {
                      return t.$broadcast("LocalStorageModule.notification.error", m.message),
                      !1
                  }
                  return !0
              }
                , O = function(e) {
                  if (!P)
                      return t.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"),
                      !1;
                  for (var n = l.cookie && l.cookie.split(";") || [], r = 0; r < n.length; r++) {
                      for (var i = n[r]; " " === i.charAt(0); )
                          i = i.substring(1, i.length);
                      if (0 === i.indexOf($(e) + "=")) {
                          var o = decodeURIComponent(i.substring(g.length + e.length + 1, i.length));
                          try {
                              var a = JSON.parse(o);
                              return "number" == typeof a ? o : a
                          } catch (s) {
                              return o
                          }
                      }
                  }
                  return null
              }
                , R = function(t) {
                  A(t, null)
              }
                , I = function() {
                  for (var t = null, e = g.length, n = l.cookie.split(";"), r = 0; r < n.length; r++) {
                      for (t = n[r]; " " === t.charAt(0); )
                          t = t.substring(1, t.length);
                      var i = t.substring(e, t.indexOf("="));
                      R(i)
                  }
              }
                , M = function() {
                  return b
              }
                , L = function(t) {
                  return t && b !== t && (b = t,
                  _ = T()),
                  _
              }
                , F = function(t, e, r, i, a) {
                  i = i || e;
                  var s = E(i, a);
                  return null === s && n(r) ? s = r : o(s) && o(r) && (s = u(s, r)),
                  f(e).assign(t, s),
                  t.$watch(e, function(t) {
                      k(i, t, a)
                  }, o(t[e]))
              };
              _ && (e.addEventListener ? (e.addEventListener("storage", d, !1),
              t.$on("$destroy", function() {
                  e.removeEventListener("storage", d)
              })) : e.attachEvent && (e.attachEvent("onstorage", d),
              t.$on("$destroy", function() {
                  e.detachEvent("onstorage", d)
              })));
              var j = function(t) {
                  var n = M();
                  try {
                      L(t);
                      for (var r = 0, i = e[b], o = 0; o < i.length; o++)
                          0 === i.key(o).indexOf(g) && r++;
                      return r
                  } finally {
                      L(n)
                  }
              }
                , H = function(t) {
                  g = t
              };
              return {
                  isSupported: _,
                  getStorageType: M,
                  setStorageType: L,
                  setPrefix: H,
                  set: k,
                  add: k,
                  get: E,
                  keys: x,
                  remove: C,
                  clearAll: D,
                  bind: F,
                  deriveKey: $,
                  underiveKey: w,
                  length: j,
                  defaultToCookie: this.defaultToCookie,
                  cookie: {
                      isSupported: P,
                      set: A,
                      add: A,
                      get: O,
                      remove: R,
                      clearAll: I
                  }
              }
          }
          ]
      })
  }(window, window.angular),
  this.createjs = this.createjs || {},
  createjs.extend = function(t, e) {
      "use strict";
      function n() {
          this.constructor = t
      }
      return n.prototype = e.prototype,
      t.prototype = new n
  }
  ,
  this.createjs = this.createjs || {},
  createjs.promote = function(t, e) {
      "use strict";
      var n = t.prototype
        , r = Object.getPrototypeOf && Object.getPrototypeOf(n) || n.__proto__;
      if (r) {
          n[(e += "_") + "constructor"] = r.constructor;
          for (var i in r)
              n.hasOwnProperty(i) && "function" == typeof r[i] && (n[e + i] = r[i])
      }
      return t
  }
  ,
  this.createjs = this.createjs || {},
  createjs.deprecate = function(t, e) {
      "use strict";
      return function() {
          var n = "Deprecated property or method '" + e + "'. See docs for info.";
          return console && (console.warn ? console.warn(n) : console.log(n)),
          t && t.apply(this, arguments)
      }
  }
  ,
  this.createjs = this.createjs || {},
  function() {
      "use strict";
      function t(t, e, n) {
          this.type = t,
          this.target = null,
          this.currentTarget = null,
          this.eventPhase = 0,
          this.bubbles = !!e,
          this.cancelable = !!n,
          this.timeStamp = (new Date).getTime(),
          this.defaultPrevented = !1,
          this.propagationStopped = !1,
          this.immediatePropagationStopped = !1,
          this.removed = !1
      }
      var e = t.prototype;
      e.preventDefault = function() {
          this.defaultPrevented = this.cancelable && !0
      }
      ,
      e.stopPropagation = function() {
          this.propagationStopped = !0
      }
      ,
      e.stopImmediatePropagation = function() {
          this.immediatePropagationStopped = this.propagationStopped = !0
      }
      ,
      e.remove = function() {
          this.removed = !0
      }
      ,
      e.clone = function() {
          return new t(this.type,this.bubbles,this.cancelable)
      }
      ,
      e.set = function(t) {
          for (var e in t)
              this[e] = t[e];
          return this
      }
      ,
      e.toString = function() {
          return "[Event (type=" + this.type + ")]"
      }
      ,
      createjs.Event = t
  }(),
  this.createjs = this.createjs || {},
  function() {
      "use strict";
      function t() {
          this._listeners = null,
          this._captureListeners = null
      }
      var e = t.prototype;
      t.initialize = function(t) {
          t.addEventListener = e.addEventListener,
          t.on = e.on,
          t.removeEventListener = t.off = e.removeEventListener,
          t.removeAllEventListeners = e.removeAllEventListeners,
          t.hasEventListener = e.hasEventListener,
          t.dispatchEvent = e.dispatchEvent,
          t._dispatchEvent = e._dispatchEvent,
          t.willTrigger = e.willTrigger
      }
      ,
      e.addEventListener = function(t, e, n) {
          var r;
          r = n ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
          var i = r[t];
          return i && this.removeEventListener(t, e, n),
          i = r[t],
          i ? i.push(e) : r[t] = [e],
          e
      }
      ,
      e.on = function(t, e, n, r, i, o) {
          return e.handleEvent && (n = n || e,
          e = e.handleEvent),
          n = n || this,
          this.addEventListener(t, function(t) {
              e.call(n, t, i),
              r && t.remove()
          }, o)
      }
      ,
      e.removeEventListener = function(t, e, n) {
          var r = n ? this._captureListeners : this._listeners;
          if (r) {
              var i = r[t];
              if (i)
                  for (var o = 0, a = i.length; a > o; o++)
                      if (i[o] == e) {
                          1 == a ? delete r[t] : i.splice(o, 1);
                          break
                      }
          }
      }
      ,
      e.off = e.removeEventListener,
      e.removeAllEventListeners = function(t) {
          t ? (this._listeners && delete this._listeners[t],
          this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null
      }
      ,
      e.dispatchEvent = function(t, e, n) {
          if ("string" == typeof t) {
              var r = this._listeners;
              if (!(e || r && r[t]))
                  return !0;
              t = new createjs.Event(t,e,n)
          } else
              t.target && t.clone && (t = t.clone());
          try {
              t.target = this
          } catch (i) {}
          if (t.bubbles && this.parent) {
              for (var o = this, a = [o]; o.parent; )
                  a.push(o = o.parent);
              var s, u = a.length;
              for (s = u - 1; s >= 0 && !t.propagationStopped; s--)
                  a[s]._dispatchEvent(t, 1 + (0 == s));
              for (s = 1; u > s && !t.propagationStopped; s++)
                  a[s]._dispatchEvent(t, 3)
          } else
              this._dispatchEvent(t, 2);
          return !t.defaultPrevented
      }
      ,
      e.hasEventListener = function(t) {
          var e = this._listeners
            , n = this._captureListeners;
          return !!(e && e[t] || n && n[t])
      }
      ,
      e.willTrigger = function(t) {
          for (var e = this; e; ) {
              if (e.hasEventListener(t))
                  return !0;
              e = e.parent
          }
          return !1
      }
      ,
      e.toString = function() {
          return "[EventDispatcher]"
      }
      ,
      e._dispatchEvent = function(t, e) {
          var n, r, i = 2 >= e ? this._captureListeners : this._listeners;
          if (t && i && (r = i[t.type]) && (n = r.length)) {
              try {
                  t.currentTarget = this
              } catch (o) {}
              try {
                  t.eventPhase = 0 | e
              } catch (o) {}
              t.removed = !1,
              r = r.slice();
              for (var a = 0; n > a && !t.immediatePropagationStopped; a++) {
                  var s = r[a];
                  s.handleEvent ? s.handleEvent(t) : s(t),
                  t.removed && (this.off(t.type, s, 1 == e),
                  t.removed = !1)
              }
          }
          2 === e && this._dispatchEvent(t, 2.1)
      }
      ,
      createjs.EventDispatcher = t
  }(),
  this.createjs = this.createjs || {},
  function() {
      "use strict";
      function t() {
          throw "Ticker cannot be instantiated."
      }
      t.RAF_SYNCHED = "synched",
      t.RAF = "raf",
      t.TIMEOUT = "timeout",
      t.timingMode = null,
      t.maxDelta = 0,
      t.paused = !1,
      t.removeEventListener = null,
      t.removeAllEventListeners = null,
      t.dispatchEvent = null,
      t.hasEventListener = null,
      t._listeners = null,
      createjs.EventDispatcher.initialize(t),
      t._addEventListener = t.addEventListener,
      t.addEventListener = function() {
          return !t._inited && t.init(),
          t._addEventListener.apply(t, arguments)
      }
      ,
      t._inited = !1,
      t._startTime = 0,
      t._pausedTime = 0,
      t._ticks = 0,
      t._pausedTicks = 0,
      t._interval = 50,
      t._lastTime = 0,
      t._times = null,
      t._tickTimes = null,
      t._timerId = null,
      t._raf = !0,
      t._setInterval = function(e) {
          t._interval = e,
          t._inited && t._setupTick()
      }
      ,
      t.setInterval = createjs.deprecate(t._setInterval, "Ticker.setInterval"),
      t._getInterval = function() {
          return t._interval
      }
      ,
      t.getInterval = createjs.deprecate(t._getInterval, "Ticker.getInterval"),
      t._setFPS = function(e) {
          t._setInterval(1e3 / e)
      }
      ,
      t.setFPS = createjs.deprecate(t._setFPS, "Ticker.setFPS"),
      t._getFPS = function() {
          return 1e3 / t._interval
      }
      ,
      t.getFPS = createjs.deprecate(t._getFPS, "Ticker.getFPS");
      try {
          Object.defineProperties(t, {
              interval: {
                  get: t._getInterval,
                  set: t._setInterval
              },
              framerate: {
                  get: t._getFPS,
                  set: t._setFPS
              }
          })
      } catch (e) {
          console.log(e)
      }
      t.init = function() {
          t._inited || (t._inited = !0,
          t._times = [],
          t._tickTimes = [],
          t._startTime = t._getTime(),
          t._times.push(t._lastTime = 0),
          t.interval = t._interval)
      }
      ,
      t.reset = function() {
          if (t._raf) {
              var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
              e && e(t._timerId)
          } else
              clearTimeout(t._timerId);
          t.removeAllEventListeners("tick"),
          t._timerId = t._times = t._tickTimes = null,
          t._startTime = t._lastTime = t._ticks = t._pausedTime = 0,
          t._inited = !1
      }
      ,
      t.getMeasuredTickTime = function(e) {
          var n = 0
            , r = t._tickTimes;
          if (!r || r.length < 1)
              return -1;
          e = Math.min(r.length, e || 0 | t._getFPS());
          for (var i = 0; e > i; i++)
              n += r[i];
          return n / e
      }
      ,
      t.getMeasuredFPS = function(e) {
          var n = t._times;
          return !n || n.length < 2 ? -1 : (e = Math.min(n.length - 1, e || 0 | t._getFPS()),
          1e3 / ((n[0] - n[e]) / e))
      }
      ,
      t.getTime = function(e) {
          return t._startTime ? t._getTime() - (e ? t._pausedTime : 0) : -1
      }
      ,
      t.getEventTime = function(e) {
          return t._startTime ? (t._lastTime || t._startTime) - (e ? t._pausedTime : 0) : -1
      }
      ,
      t.getTicks = function(e) {
          return t._ticks - (e ? t._pausedTicks : 0)
      }
      ,
      t._handleSynch = function() {
          t._timerId = null,
          t._setupTick(),
          t._getTime() - t._lastTime >= .97 * (t._interval - 1) && t._tick()
      }
      ,
      t._handleRAF = function() {
          t._timerId = null,
          t._setupTick(),
          t._tick()
      }
      ,
      t._handleTimeout = function() {
          t._timerId = null,
          t._setupTick(),
          t._tick()
      }
      ,
      t._setupTick = function() {
          if (null == t._timerId) {
              var e = t.timingMode;
              if (e == t.RAF_SYNCHED || e == t.RAF) {
                  var n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                  if (n)
                      return t._timerId = n(e == t.RAF ? t._handleRAF : t._handleSynch),
                      void (t._raf = !0)
              }
              t._raf = !1,
              t._timerId = setTimeout(t._handleTimeout, t._interval)
          }
      }
      ,
      t._tick = function() {
          var e = t.paused
            , n = t._getTime()
            , r = n - t._lastTime;
          if (t._lastTime = n,
          t._ticks++,
          e && (t._pausedTicks++,
          t._pausedTime += r),
          t.hasEventListener("tick")) {
              var i = new createjs.Event("tick")
                , o = t.maxDelta;
              i.delta = o && r > o ? o : r,
              i.paused = e,
              i.time = n,
              i.runTime = n - t._pausedTime,
              t.dispatchEvent(i)
          }
          for (t._tickTimes.unshift(t._getTime() - n); t._tickTimes.length > 100; )
              t._tickTimes.pop();
          for (t._times.unshift(n); t._times.length > 100; )
              t._times.pop()
      }
      ;
      var n = window
        , r = n.performance.now || n.performance.mozNow || n.performance.msNow || n.performance.oNow || n.performance.webkitNow;
      t._getTime = function() {
          return (r && r.call(n.performance) || (new Date).getTime()) - t._startTime
      }
      ,
      createjs.Ticker = t
  }(),
  this.createjs = this.createjs || {},
  function() {
      "use strict";
      function t(t) {
          this.EventDispatcher_constructor(),
          this.ignoreGlobalPause = !1,
          this.loop = 0,
          this.useTicks = !1,
          this.reversed = !1,
          this.bounce = !1,
          this.timeScale = 1,
          this.duration = 0,
          this.position = 0,
          this.rawPosition = -1,
          this._paused = !0,
          this._next = null,
          this._prev = null,
          this._parent = null,
          this._labels = null,
          this._labelList = null,
          t && (this.useTicks = !!t.useTicks,
          this.ignoreGlobalPause = !!t.ignoreGlobalPause,
          this.loop = t.loop === !0 ? -1 : t.loop || 0,
          this.reversed = !!t.reversed,
          this.bounce = !!t.bounce,
          this.timeScale = t.timeScale || 1,
          t.onChange && this.addEventListener("change", t.onChange),
          t.onComplete && this.addEventListener("complete", t.onComplete))
      }
      var e = createjs.extend(t, createjs.EventDispatcher);
      e._setPaused = function(t) {
          return createjs.Tween._register(this, t),
          this
      }
      ,
      e.setPaused = createjs.deprecate(e._setPaused, "AbstractTween.setPaused"),
      e._getPaused = function() {
          return this._paused
      }
      ,
      e.getPaused = createjs.deprecate(e._getPaused, "AbstactTween.getPaused"),
      e._getCurrentLabel = function(t) {
          var e = this.getLabels();
          null == t && (t = this.position);
          for (var n = 0, r = e.length; r > n && !(t < e[n].position); n++)
              ;
          return 0 === n ? null : e[n - 1].label
      }
      ,
      e.getCurrentLabel = createjs.deprecate(e._getCurrentLabel, "AbstractTween.getCurrentLabel");
      try {
          Object.defineProperties(e, {
              paused: {
                  set: e._setPaused,
                  get: e._getPaused
              },
              currentLabel: {
                  get: e._getCurrentLabel
              }
          })
      } catch (n) {}
      e.advance = function(t, e) {
          this.setPosition(this.rawPosition + t * this.timeScale, e)
      }
      ,
      e.setPosition = function(t, e, n, r) {
          var i = this.duration
            , o = this.loop
            , a = this.rawPosition
            , s = 0
            , u = 0
            , c = !1;
          if (0 > t && (t = 0),
          0 === i) {
              if (c = !0,
              -1 !== a)
                  return c
          } else {
              if (s = t / i | 0,
              u = t - s * i,
              c = -1 !== o && t >= o * i + i,
              c && (t = (u = i) * (s = o) + i),
              t === a)
                  return c;
              var l = !this.reversed != !(this.bounce && s % 2);
              l && (u = i - u)
          }
          this.position = u,
          this.rawPosition = t,
          this._updatePosition(n, c),
          c && (this.paused = !0),
          r && r(this),
          e || this._runActions(a, t, n, !n && -1 === a),
          this.dispatchEvent("change"),
          c && this.dispatchEvent("complete")
      }
      ,
      e.calculatePosition = function(t) {
          var e = this.duration
            , n = this.loop
            , r = 0
            , i = 0;
          if (0 === e)
              return 0;
          -1 !== n && t >= n * e + e ? (i = e,
          r = n) : 0 > t ? i = 0 : (r = t / e | 0,
          i = t - r * e);
          var o = !this.reversed != !(this.bounce && r % 2);
          return o ? e - i : i
      }
      ,
      e.getLabels = function() {
          var t = this._labelList;
          if (!t) {
              t = this._labelList = [];
              var e = this._labels;
              for (var n in e)
                  t.push({
                      label: n,
                      position: e[n]
                  });
              t.sort(function(t, e) {
                  return t.position - e.position
              })
          }
          return t
      }
      ,
      e.setLabels = function(t) {
          this._labels = t,
          this._labelList = null
      }
      ,
      e.addLabel = function(t, e) {
          this._labels || (this._labels = {}),
          this._labels[t] = e;
          var n = this._labelList;
          if (n) {
              for (var r = 0, i = n.length; i > r && !(e < n[r].position); r++)
                  ;
              n.splice(r, 0, {
                  label: t,
                  position: e
              })
          }
      }
      ,
      e.gotoAndPlay = function(t) {
          this.paused = !1,
          this._goto(t)
      }
      ,
      e.gotoAndStop = function(t) {
          this.paused = !0,
          this._goto(t)
      }
      ,
      e.resolve = function(t) {
          var e = Number(t);
          return isNaN(e) && (e = this._labels && this._labels[t]),
          e
      }
      ,
      e.toString = function() {
          return "[AbstractTween]"
      }
      ,
      e.clone = function() {
          throw "AbstractTween can not be cloned."
      }
      ,
      e._init = function(t) {
          t && t.paused || (this.paused = !1),
          t && null != t.position && this.setPosition(t.position)
      }
      ,
      e._updatePosition = function() {}
      ,
      e._goto = function(t) {
          var e = this.resolve(t);
          null != e && this.setPosition(e, !1, !0)
      }
      ,
      e._runActions = function(t, e, n, r) {
          if (this._actionHead || this.tweens) {
              var i, o, a, s, u = this.duration, c = this.reversed, l = this.bounce, f = this.loop;
              if (0 === u ? (i = o = a = s = 0,
              c = l = !1) : (i = t / u | 0,
              o = e / u | 0,
              a = t - i * u,
              s = e - o * u),
              -1 !== f && (o > f && (s = u,
              o = f),
              i > f && (a = u,
              i = f)),
              n)
                  return this._runActionsRange(s, s, n, r);
              if (i !== o || a !== s || n || r) {
                  -1 === i && (i = a = 0);
                  var p = e >= t
                    , d = i;
                  do {
                      var h = !c != !(l && d % 2)
                        , m = d === i ? a : p ? 0 : u
                        , g = d === o ? s : p ? u : 0;
                      if (h && (m = u - m,
                      g = u - g),
                      l && d !== i && m === g)
                          ;
                      else if (this._runActionsRange(m, g, n, r || d !== i && !l))
                          return !0;
                      r = !1
                  } while (p && ++d <= o || !p && --d >= o)
              }
          }
      }
      ,
      e._runActionsRange = function() {}
      ,
      createjs.AbstractTween = createjs.promote(t, "EventDispatcher")
  }(),
  this.createjs = this.createjs || {},
  function() {
      "use strict";
      function t(n, r) {
          this.AbstractTween_constructor(r),
          this.pluginData = null,
          this.target = n,
          this.passive = !1,
          this._stepHead = new e(null,0,0,{},null,!0),
          this._stepTail = this._stepHead,
          this._stepPosition = 0,
          this._actionHead = null,
          this._actionTail = null,
          this._plugins = null,
          this._pluginIds = null,
          this._injected = null,
          r && (this.pluginData = r.pluginData,
          r.override && t.removeTweens(n)),
          this.pluginData || (this.pluginData = {}),
          this._init(r)
      }
      function e(t, e, n, r, i, o) {
          this.next = null,
          this.prev = t,
          this.t = e,
          this.d = n,
          this.props = r,
          this.ease = i,
          this.passive = o,
          this.index = t ? t.index + 1 : 0
      }
      function n(t, e, n, r, i) {
          this.next = null,
          this.prev = t,
          this.t = e,
          this.d = 0,
          this.scope = n,
          this.funct = r,
          this.params = i
      }
      var r = createjs.extend(t, createjs.AbstractTween);
      t.IGNORE = {},
      t._tweens = [],
      t._plugins = null,
      t._tweenHead = null,
      t._tweenTail = null,
      t.get = function(e, n) {
          return new t(e,n)
      }
      ,
      t.tick = function(e, n) {
          for (var r = t._tweenHead; r; ) {
              var i = r._next;
              n && !r.ignoreGlobalPause || r._paused || r.advance(r.useTicks ? 1 : e),
              r = i
          }
      }
      ,
      t.handleEvent = function(t) {
          "tick" === t.type && this.tick(t.delta, t.paused)
      }
      ,
      t.removeTweens = function(e) {
          if (e.tweenjs_count) {
              for (var n = t._tweenHead; n; ) {
                  var r = n._next;
                  n.target === e && t._register(n, !0),
                  n = r
              }
              e.tweenjs_count = 0
          }
      }
      ,
      t.removeAllTweens = function() {
          for (var e = t._tweenHead; e; ) {
              var n = e._next;
              e._paused = !0,
              e.target && (e.target.tweenjs_count = 0),
              e._next = e._prev = null,
              e = n
          }
          t._tweenHead = t._tweenTail = null
      }
      ,
      t.hasActiveTweens = function(e) {
          return e ? !!e.tweenjs_count : !!t._tweenHead
      }
      ,
      t._installPlugin = function(e) {
          for (var n = e.priority = e.priority || 0, r = t._plugins = t._plugins || [], i = 0, o = r.length; o > i && !(n < r[i].priority); i++)
              ;
          r.splice(i, 0, e)
      }
      ,
      t._register = function(e, n) {
          var r = e.target;
          if (!n && e._paused) {
              r && (r.tweenjs_count = r.tweenjs_count ? r.tweenjs_count + 1 : 1);
              var i = t._tweenTail;
              i ? (t._tweenTail = i._next = e,
              e._prev = i) : t._tweenHead = t._tweenTail = e,
              !t._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", t),
              t._inited = !0)
          } else if (n && !e._paused) {
              r && r.tweenjs_count--;
              var o = e._next
                , a = e._prev;
              o ? o._prev = a : t._tweenTail = a,
              a ? a._next = o : t._tweenHead = o,
              e._next = e._prev = null
          }
          e._paused = n
      }
      ,
      r.wait = function(t, e) {
          return t > 0 && this._addStep(+t, this._stepTail.props, null, e),
          this
      }
      ,
      r.to = function(t, e, n) {
          (null == e || 0 > e) && (e = 0);
          var r = this._addStep(+e, null, n);
          return this._appendProps(t, r),
          this
      }
      ,
      r.label = function(t) {
          return this.addLabel(t, this.duration),
          this
      }
      ,
      r.call = function(t, e, n) {
          return this._addAction(n || this.target, t, e || [this])
      }
      ,
      r.set = function(t, e) {
          return this._addAction(e || this.target, this._set, [t])
      }
      ,
      r.play = function(t) {
          return this._addAction(t || this, this._set, [{
              paused: !1
          }])
      }
      ,
      r.pause = function(t) {
          return this._addAction(t || this, this._set, [{
              paused: !0
          }])
      }
      ,
      r.w = r.wait,
      r.t = r.to,
      r.c = r.call,
      r.s = r.set,
      r.toString = function() {
          return "[Tween]"
      }
      ,
      r.clone = function() {
          throw "Tween can not be cloned."
      }
      ,
      r._addPlugin = function(t) {
          var e = this._pluginIds || (this._pluginIds = {})
            , n = t.ID;
          if (n && !e[n]) {
              e[n] = !0;
              for (var r = this._plugins || (this._plugins = []), i = t.priority || 0, o = 0, a = r.length; a > o; o++)
                  if (i < r[o].priority)
                      return void r.splice(o, 0, t);
              r.push(t)
          }
      }
      ,
      r._updatePosition = function(t, e) {
          var n = this._stepHead.next
            , r = this.position
            , i = this.duration;
          if (this.target && n) {
              for (var o = n.next; o && o.t <= r; )
                  n = n.next,
                  o = n.next;
              var a = e ? 0 === i ? 1 : r / i : (r - n.t) / n.d;
              this._updateTargetProps(n, a, e)
          }
          this._stepPosition = n ? r - n.t : 0
      }
      ,
      r._updateTargetProps = function(e, n, r) {
          if (!(this.passive = !!e.passive)) {
              var i, o, a, s, u = e.prev.props, c = e.props;
              (s = e.ease) && (n = s(n, 0, 1, 1));
              var l = this._plugins;
              t: for (var f in u) {
                  if (o = u[f],
                  a = c[f],
                  i = o !== a && "number" == typeof o ? o + (a - o) * n : n >= 1 ? a : o,
                  l)
                      for (var p = 0, d = l.length; d > p; p++) {
                          var h = l[p].change(this, e, f, i, n, r);
                          if (h === t.IGNORE)
                              continue t;
                          void 0 !== h && (i = h)
                      }
                  this.target[f] = i
              }
          }
      }
      ,
      r._runActionsRange = function(t, e, n, r) {
          var i = t > e
            , o = i ? this._actionTail : this._actionHead
            , a = e
            , s = t;
          i && (a = t,
          s = e);
          for (var u = this.position; o; ) {
              var c = o.t;
              if ((c === e || c > s && a > c || r && c === t) && (o.funct.apply(o.scope, o.params),
              u !== this.position))
                  return !0;
              o = i ? o.prev : o.next
          }
      }
      ,
      r._appendProps = function(e, n, r) {
          var i, o, a, s, u, c = this._stepHead.props, l = this.target, f = t._plugins, p = n.prev, d = p.props, h = n.props || (n.props = this._cloneProps(d)), m = {};
          for (i in e)
              if (e.hasOwnProperty(i) && (m[i] = h[i] = e[i],
              void 0 === c[i])) {
                  if (s = void 0,
                  f)
                      for (o = f.length - 1; o >= 0; o--)
                          if (a = f[o].init(this, i, s),
                          void 0 !== a && (s = a),
                          s === t.IGNORE) {
                              delete h[i],
                              delete m[i];
                              break
                          }
                  s !== t.IGNORE && (void 0 === s && (s = l[i]),
                  d[i] = void 0 === s ? null : s)
              }
          for (i in m) {
              a = e[i];
              for (var g, v = p; (g = v) && (v = g.prev); )
                  if (v.props !== g.props) {
                      if (void 0 !== v.props[i])
                          break;
                      v.props[i] = d[i]
                  }
          }
          if (r !== !1 && (f = this._plugins))
              for (o = f.length - 1; o >= 0; o--)
                  f[o].step(this, n, m);
          (u = this._injected) && (this._injected = null,
          this._appendProps(u, n, !1))
      }
      ,
      r._injectProp = function(t, e) {
          var n = this._injected || (this._injected = {});
          n[t] = e
      }
      ,
      r._addStep = function(t, n, r, i) {
          var o = new e(this._stepTail,this.duration,t,n,r,i || !1);
          return this.duration += t,
          this._stepTail = this._stepTail.next = o
      }
      ,
      r._addAction = function(t, e, r) {
          var i = new n(this._actionTail,this.duration,t,e,r);
          return this._actionTail ? this._actionTail.next = i : this._actionHead = i,
          this._actionTail = i,
          this
      }
      ,
      r._set = function(t) {
          for (var e in t)
              this[e] = t[e]
      }
      ,
      r._cloneProps = function(t) {
          var e = {};
          for (var n in t)
              e[n] = t[n];
          return e
      }
      ,
      createjs.Tween = createjs.promote(t, "AbstractTween")
  }(),
  this.createjs = this.createjs || {},
  function() {
      "use strict";
      function t(t) {
          var e, n;
          t instanceof Array || null == t && arguments.length > 1 ? (e = t,
          n = arguments[1],
          t = arguments[2]) : t && (e = t.tweens,
          n = t.labels),
          this.AbstractTween_constructor(t),
          this.tweens = [],
          e && this.addTween.apply(this, e),
          this.setLabels(n),
          this._init(t)
      }
      var e = createjs.extend(t, createjs.AbstractTween);
      e.addTween = function(t) {
          t._parent && t._parent.removeTween(t);
          var e = arguments.length;
          if (e > 1) {
              for (var n = 0; e > n; n++)
                  this.addTween(arguments[n]);
              return arguments[e - 1]
          }
          if (0 === e)
              return null;
          this.tweens.push(t),
          t._parent = this,
          t.paused = !0;
          var r = t.duration;
          return t.loop > 0 && (r *= t.loop + 1),
          r > this.duration && (this.duration = r),
          this.rawPosition >= 0 && t.setPosition(this.rawPosition),
          t
      }
      ,
      e.removeTween = function(t) {
          var e = arguments.length;
          if (e > 1) {
              for (var n = !0, r = 0; e > r; r++)
                  n = n && this.removeTween(arguments[r]);
              return n
          }
          if (0 === e)
              return !0;
          for (var i = this.tweens, r = i.length; r--; )
              if (i[r] === t)
                  return i.splice(r, 1),
                  t._parent = null,
                  t.duration >= this.duration && this.updateDuration(),
                  !0;
          return !1
      }
      ,
      e.updateDuration = function() {
          this.duration = 0;
          for (var t = 0, e = this.tweens.length; e > t; t++) {
              var n = this.tweens[t]
                , r = n.duration;
              n.loop > 0 && (r *= n.loop + 1),
              r > this.duration && (this.duration = r)
          }
      }
      ,
      e.toString = function() {
          return "[Timeline]"
      }
      ,
      e.clone = function() {
          throw "Timeline can not be cloned."
      }
      ,
      e._updatePosition = function(t) {
          for (var e = this.position, n = 0, r = this.tweens.length; r > n; n++)
              this.tweens[n].setPosition(e, !0, t)
      }
      ,
      e._runActionsRange = function(t, e, n, r) {
          for (var i = this.position, o = 0, a = this.tweens.length; a > o; o++)
              if (this.tweens[o]._runActions(t, e, n, r),
              i !== this.position)
                  return !0
      }
      ,
      createjs.Timeline = createjs.promote(t, "AbstractTween")
  }(),
  this.createjs = this.createjs || {},
  function() {
      "use strict";
      function t() {
          throw "Ease cannot be instantiated."
      }
      t.linear = function(t) {
          return t
      }
      ,
      t.none = t.linear,
      t.get = function(t) {
          return -1 > t ? t = -1 : t > 1 && (t = 1),
          function(e) {
              return 0 == t ? e : 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
          }
      }
      ,
      t.getPowIn = function(t) {
          return function(e) {
              return Math.pow(e, t)
          }
      }
      ,
      t.getPowOut = function(t) {
          return function(e) {
              return 1 - Math.pow(1 - e, t)
          }
      }
      ,
      t.getPowInOut = function(t) {
          return function(e) {
              return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t))
          }
      }
      ,
      t.quadIn = t.getPowIn(2),
      t.quadOut = t.getPowOut(2),
      t.quadInOut = t.getPowInOut(2),
      t.cubicIn = t.getPowIn(3),
      t.cubicOut = t.getPowOut(3),
      t.cubicInOut = t.getPowInOut(3),
      t.quartIn = t.getPowIn(4),
      t.quartOut = t.getPowOut(4),
      t.quartInOut = t.getPowInOut(4),
      t.quintIn = t.getPowIn(5),
      t.quintOut = t.getPowOut(5),
      t.quintInOut = t.getPowInOut(5),
      t.sineIn = function(t) {
          return 1 - Math.cos(t * Math.PI / 2)
      }
      ,
      t.sineOut = function(t) {
          return Math.sin(t * Math.PI / 2)
      }
      ,
      t.sineInOut = function(t) {
          return -.5 * (Math.cos(Math.PI * t) - 1)
      }
      ,
      t.getBackIn = function(t) {
          return function(e) {
              return e * e * ((t + 1) * e - t)
          }
      }
      ,
      t.backIn = t.getBackIn(1.7),
      t.getBackOut = function(t) {
          return function(e) {
              return --e * e * ((t + 1) * e + t) + 1
          }
      }
      ,
      t.backOut = t.getBackOut(1.7),
      t.getBackInOut = function(t) {
          return t *= 1.525,
          function(e) {
              return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
          }
      }
      ,
      t.backInOut = t.getBackInOut(1.7),
      t.circIn = function(t) {
          return -(Math.sqrt(1 - t * t) - 1)
      }
      ,
      t.circOut = function(t) {
          return Math.sqrt(1 - --t * t)
      }
      ,
      t.circInOut = function(t) {
          return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
      }
      ,
      t.bounceIn = function(e) {
          return 1 - t.bounceOut(1 - e)
      }
      ,
      t.bounceOut = function(t) {
          return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
      }
      ,
      t.bounceInOut = function(e) {
          return .5 > e ? .5 * t.bounceIn(2 * e) : .5 * t.bounceOut(2 * e - 1) + .5
      }
      ,
      t.getElasticIn = function(t, e) {
          var n = 2 * Math.PI;
          return function(r) {
              if (0 == r || 1 == r)
                  return r;
              var i = e / n * Math.asin(1 / t);
              return -(t * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - i) * n / e))
          }
      }
      ,
      t.elasticIn = t.getElasticIn(1, .3),
      t.getElasticOut = function(t, e) {
          var n = 2 * Math.PI;
          return function(r) {
              if (0 == r || 1 == r)
                  return r;
              var i = e / n * Math.asin(1 / t);
              return t * Math.pow(2, -10 * r) * Math.sin((r - i) * n / e) + 1
          }
      }
      ,
      t.elasticOut = t.getElasticOut(1, .3),
      t.getElasticInOut = function(t, e) {
          var n = 2 * Math.PI;
          return function(r) {
              var i = e / n * Math.asin(1 / t);
              return (r *= 2) < 1 ? -.5 * (t * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - i) * n / e)) : t * Math.pow(2, -10 * (r -= 1)) * Math.sin((r - i) * n / e) * .5 + 1
          }
      }
      ,
      t.elasticInOut = t.getElasticInOut(1, .3 * 1.5),
      createjs.Ease = t
  }(),
  this.createjs = this.createjs || {},
  function() {
      "use strict";
      function t() {
          throw "MotionGuidePlugin cannot be instantiated."
      }
      var e = t;
      e.priority = 0,
      e.ID = "MotionGuide",
      e.install = function() {
          return createjs.Tween._installPlugin(t),
          createjs.Tween.IGNORE
      }
      ,
      e.init = function(t, n) {
          "guide" == n && t._addPlugin(e)
      }
      ,
      e.step = function(t, n, r) {
          for (var i in r)
              if ("guide" === i) {
                  var o = n.props.guide
                    , a = e._solveGuideData(r.guide, o);
                  o.valid = !a;
                  var s = o.endData;
                  if (t._injectProp("x", s.x),
                  t._injectProp("y", s.y),
                  a || !o.orient)
                      break;
                  var u = void 0 === n.prev.props.rotation ? t.target.rotation || 0 : n.prev.props.rotation;
                  if (o.startOffsetRot = u - o.startData.rotation,
                  "fixed" == o.orient)
                      o.endAbsRot = s.rotation + o.startOffsetRot,
                      o.deltaRotation = 0;
                  else {
                      var c = void 0 === r.rotation ? t.target.rotation || 0 : r.rotation
                        , l = c - o.endData.rotation - o.startOffsetRot
                        , f = l % 360;
                      switch (o.endAbsRot = c,
                      o.orient) {
                      case "auto":
                          o.deltaRotation = l;
                          break;
                      case "cw":
                          o.deltaRotation = (f + 360) % 360 + 360 * Math.abs(l / 360 | 0);
                          break;
                      case "ccw":
                          o.deltaRotation = (f - 360) % 360 + -360 * Math.abs(l / 360 | 0)
                      }
                  }
                  t._injectProp("rotation", o.endAbsRot)
              }
      }
      ,
      e.change = function(t, n, r, i, o) {
          var a = n.props.guide;
          if (a && n.props !== n.prev.props && a !== n.prev.props.guide)
              return "guide" === r && !a.valid || "x" == r || "y" == r || "rotation" === r && a.orient ? createjs.Tween.IGNORE : void e._ratioToPositionData(o, a, t.target)
      }
      ,
      e.debug = function(t, n, r) {
          t = t.guide || t;
          var i = e._findPathProblems(t);
          if (i && console.error("MotionGuidePlugin Error found: \n" + i),
          !n)
              return i;
          var o, a = t.path, s = a.length, u = 3, c = 9;
          for (n.save(),
          n.lineCap = "round",
          n.lineJoin = "miter",
          n.beginPath(),
          n.moveTo(a[0], a[1]),
          o = 2; s > o; o += 4)
              n.quadraticCurveTo(a[o], a[o + 1], a[o + 2], a[o + 3]);
          n.strokeStyle = "black",
          n.lineWidth = 1.5 * u,
          n.stroke(),
          n.strokeStyle = "white",
          n.lineWidth = u,
          n.stroke(),
          n.closePath();
          var l = r.length;
          if (r && l) {
              var f = {}
                , p = {};
              e._solveGuideData(t, f);
              for (var o = 0; l > o; o++)
                  f.orient = "fixed",
                  e._ratioToPositionData(r[o], f, p),
                  n.beginPath(),
                  n.moveTo(p.x, p.y),
                  n.lineTo(p.x + Math.cos(.0174533 * p.rotation) * c, p.y + Math.sin(.0174533 * p.rotation) * c),
                  n.strokeStyle = "black",
                  n.lineWidth = 1.5 * u,
                  n.stroke(),
                  n.strokeStyle = "red",
                  n.lineWidth = u,
                  n.stroke(),
                  n.closePath()
          }
          return n.restore(),
          i
      }
      ,
      e._solveGuideData = function(t, n) {
          var r = void 0;
          if (r = e.debug(t))
              return r;
          var i = n.path = t.path;
          n.orient = t.orient;
          n.subLines = [],
          n.totalLength = 0,
          n.startOffsetRot = 0,
          n.deltaRotation = 0,
          n.startData = {
              ratio: 0
          },
          n.endData = {
              ratio: 1
          },
          n.animSpan = 1;
          var o, a, s, u, c, l, f, p, d, h = i.length, m = 10, g = {};
          for (o = i[0],
          a = i[1],
          f = 2; h > f; f += 4) {
              s = i[f],
              u = i[f + 1],
              c = i[f + 2],
              l = i[f + 3];
              var v = {
                  weightings: [],
                  estLength: 0,
                  portion: 0
              }
                , y = o
                , b = a;
              for (p = 1; m >= p; p++) {
                  e._getParamsForCurve(o, a, s, u, c, l, p / m, !1, g);
                  var $ = g.x - y
                    , w = g.y - b;
                  d = Math.sqrt($ * $ + w * w),
                  v.weightings.push(d),
                  v.estLength += d,
                  y = g.x,
                  b = g.y
              }
              for (n.totalLength += v.estLength,
              p = 0; m > p; p++)
                  d = v.estLength,
                  v.weightings[p] = v.weightings[p] / d;
              n.subLines.push(v),
              o = c,
              a = l
          }
          d = n.totalLength;
          var S = n.subLines.length;
          for (f = 0; S > f; f++)
              n.subLines[f].portion = n.subLines[f].estLength / d;
          var T = isNaN(t.start) ? 0 : t.start
            , _ = isNaN(t.end) ? 1 : t.end;
          e._ratioToPositionData(T, n, n.startData),
          e._ratioToPositionData(_, n, n.endData),
          n.startData.ratio = T,
          n.endData.ratio = _,
          n.animSpan = n.endData.ratio - n.startData.ratio
      }
      ,
      e._ratioToPositionData = function(t, n, r) {
          var i, o, a, s, u, c = n.subLines, l = 0, f = 10, p = t * n.animSpan + n.startData.ratio;
          for (o = c.length,
          i = 0; o > i; i++) {
              if (s = c[i].portion,
              l + s >= p) {
                  u = i;
                  break
              }
              l += s
          }
          void 0 === u && (u = o - 1,
          l -= s);
          var d = c[u].weightings
            , h = s;
          for (o = d.length,
          i = 0; o > i && (s = d[i] * h,
          !(l + s >= p)); i++)
              l += s;
          u = 4 * u + 2,
          a = i / f + (p - l) / s * (1 / f);
          var m = n.path;
          return e._getParamsForCurve(m[u - 2], m[u - 1], m[u], m[u + 1], m[u + 2], m[u + 3], a, n.orient, r),
          n.orient && (t >= .99999 && 1.00001 >= t && void 0 !== n.endAbsRot ? r.rotation = n.endAbsRot : r.rotation += n.startOffsetRot + t * n.deltaRotation),
          r
      }
      ,
      e._getParamsForCurve = function(t, e, n, r, i, o, a, s, u) {
          var c = 1 - a;
          u.x = c * c * t + 2 * c * a * n + a * a * i,
          u.y = c * c * e + 2 * c * a * r + a * a * o,
          s && (u.rotation = 57.2957795 * Math.atan2((r - e) * c + (o - r) * a, (n - t) * c + (i - n) * a))
      }
      ,
      e._findPathProblems = function(t) {
          var e = t.path
            , n = e && e.length || 0;
          if (6 > n || (n - 2) % 4) {
              var r = "	Cannot parse 'path' array due to invalid number of entries in path. ";
              return r += "There should be an odd number of points, at least 3 points, and 2 entries per point (x & y). ",
              r += "See 'CanvasRenderingContext2D.quadraticCurveTo' for details as 'path' models a quadratic bezier.\n\n",
              r += "Only [ " + n + " ] values found. Expected: " + Math.max(4 * Math.ceil((n - 2) / 4) + 2, 6)
          }
          for (var i = 0; n > i; i++)
              if (isNaN(e[i]))
                  return "All data in path array must be numeric";
          var o = t.start;
          if (isNaN(o) && void 0 !== o)
              return "'start' out of bounds. Expected 0 to 1, got: " + o;
          var a = t.end;
          if (isNaN(a) && void 0 !== a)
              return "'end' out of bounds. Expected 0 to 1, got: " + a;
          var s = t.orient;
          return s && "fixed" != s && "auto" != s && "cw" != s && "ccw" != s ? 'Invalid orientation value. Expected ["fixed", "auto", "cw", "ccw", undefined], got: ' + s : void 0
      }
      ,
      createjs.MotionGuidePlugin = t
  }(),
  this.createjs = this.createjs || {},
  function() {
      "use strict";
      var t = createjs.TweenJS = createjs.TweenJS || {};
      t.version = "1.0.0",
      t.buildDate = "Thu, 14 Sep 2017 19:47:47 GMT"
  }(),
  function() {
      "use strict";
      function t(e, r) {
          function i(t, e) {
              return function() {
                  return t.apply(e, arguments)
              }
          }
          var o;
          if (r = r || {},
          this.trackingClick = !1,
          this.trackingClickStart = 0,
          this.targetElement = null,
          this.touchStartX = 0,
          this.touchStartY = 0,
          this.lastTouchIdentifier = 0,
          this.touchBoundary = r.touchBoundary || 10,
          this.layer = e,
          this.tapDelay = r.tapDelay || 200,
          this.tapTimeout = r.tapTimeout || 700,
          !t.notNeeded(e)) {
              for (var a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], s = this, u = 0, c = a.length; c > u; u++)
                  s[a[u]] = i(s[a[u]], s);
              n && (e.addEventListener("mouseover", this.onMouse, !0),
              e.addEventListener("mousedown", this.onMouse, !0),
              e.addEventListener("mouseup", this.onMouse, !0)),
              e.addEventListener("click", this.onClick, !0),
              e.addEventListener("touchstart", this.onTouchStart, !1),
              e.addEventListener("touchmove", this.onTouchMove, !1),
              e.addEventListener("touchend", this.onTouchEnd, !1),
              e.addEventListener("touchcancel", this.onTouchCancel, !1),
              Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, r) {
                  var i = Node.prototype.removeEventListener;
                  "click" === t ? i.call(e, t, n.hijacked || n, r) : i.call(e, t, n, r)
              }
              ,
              e.addEventListener = function(t, n, r) {
                  var i = Node.prototype.addEventListener;
                  "click" === t ? i.call(e, t, n.hijacked || (n.hijacked = function(t) {
                      t.propagationStopped || n(t)
                  }
                  ), r) : i.call(e, t, n, r)
              }
              ),
              "function" == typeof e.onclick && (o = e.onclick,
              e.addEventListener("click", function(t) {
                  o(t)
              }, !1),
              e.onclick = null)
          }
      }
      var e = navigator.userAgent.indexOf("Windows Phone") >= 0
        , n = navigator.userAgent.indexOf("Android") > 0 && !e
        , r = /iP(ad|hone|od)/.test(navigator.userAgent) && !e
        , i = r && /OS 4_\d(_\d)?/.test(navigator.userAgent)
        , o = r && /OS [6-7]_\d/.test(navigator.userAgent)
        , a = navigator.userAgent.indexOf("BB10") > 0;
      t.prototype.needsClick = function(t) {
          switch (t.nodeName.toLowerCase()) {
          case "button":
          case "select":
          case "textarea":
              if (t.disabled)
                  return !0;
              break;
          case "input":
              if (r && "file" === t.type || t.disabled)
                  return !0;
              break;
          case "label":
          case "iframe":
          case "video":
              return !0
          }
          return /\bneedsclick\b/.test(t.className)
      }
      ,
      t.prototype.needsFocus = function(t) {
          switch (t.nodeName.toLowerCase()) {
          case "textarea":
              return !0;
          case "select":
              return !n;
          case "input":
              switch (t.type) {
              case "button":
              case "checkbox":
              case "file":
              case "image":
              case "radio":
              case "submit":
                  return !1
              }
              return !t.disabled && !t.readOnly;
          default:
              return /\bneedsfocus\b/.test(t.className)
          }
      }
      ,
      t.prototype.sendClick = function(t, e) {
          var n, r;
          document.activeElement && document.activeElement !== t && document.activeElement.blur(),
          r = e.changedTouches[0],
          n = document.createEvent("MouseEvents"),
          n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null),
          n.forwardedTouchEvent = !0,
          t.dispatchEvent(n)
      }
      ,
      t.prototype.determineEventType = function(t) {
          return n && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
      }
      ,
      t.prototype.focus = function(t) {
          var e;
          r && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length,
          t.setSelectionRange(e, e)) : t.focus()
      }
      ,
      t.prototype.updateScrollParent = function(t) {
          var e, n;
          if (e = t.fastClickScrollParent,
          !e || !e.contains(t)) {
              n = t;
              do {
                  if (n.scrollHeight > n.offsetHeight) {
                      e = n,
                      t.fastClickScrollParent = n;
                      break
                  }
                  n = n.parentElement
              } while (n)
          }
          e && (e.fastClickLastScrollTop = e.scrollTop)
      }
      ,
      t.prototype.getTargetElementFromEventTarget = function(t) {
          return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
      }
      ,
      t.prototype.onTouchStart = function(t) {
          var e, n, o;
          if (t.targetTouches.length > 1)
              return !0;
          if (e = this.getTargetElementFromEventTarget(t.target),
          n = t.targetTouches[0],
          r) {
              if (o = window.getSelection(),
              o.rangeCount && !o.isCollapsed)
                  return !0;
              if (!i) {
                  if (n.identifier && n.identifier === this.lastTouchIdentifier)
                      return t.preventDefault(),
                      !1;
                  this.lastTouchIdentifier = n.identifier,
                  this.updateScrollParent(e);
              }
          }
          return this.trackingClick = !0,
          this.trackingClickStart = t.timeStamp,
          this.targetElement = e,
          this.touchStartX = n.pageX,
          this.touchStartY = n.pageY,
          t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(),
          !0
      }
      ,
      t.prototype.touchHasMoved = function(t) {
          var e = t.changedTouches[0]
            , n = this.touchBoundary;
          return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
      }
      ,
      t.prototype.onTouchMove = function(t) {
          return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1,
          this.targetElement = null),
          !0) : !0
      }
      ,
      t.prototype.findControl = function(t) {
          return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
      }
      ,
      t.prototype.onTouchEnd = function(t) {
          var e, a, s, u, c, l = this.targetElement;
          if (!this.trackingClick)
              return !0;
          if (t.timeStamp - this.lastClickTime < this.tapDelay)
              return this.cancelNextClick = !0,
              !0;
          if (t.timeStamp - this.trackingClickStart > this.tapTimeout)
              return !0;
          if (this.cancelNextClick = !1,
          this.lastClickTime = t.timeStamp,
          a = this.trackingClickStart,
          this.trackingClick = !1,
          this.trackingClickStart = 0,
          o && (c = t.changedTouches[0],
          l = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || l,
          l.fastClickScrollParent = this.targetElement.fastClickScrollParent),
          s = l.tagName.toLowerCase(),
          "label" === s) {
              if (e = this.findControl(l)) {
                  if (this.focus(l),
                  n)
                      return !1;
                  l = e
              }
          } else if (this.needsFocus(l))
              return t.timeStamp - a > 100 || r && window.top !== window && "input" === s ? (this.targetElement = null,
              !1) : (this.focus(l),
              this.sendClick(l, t),
              r && "select" === s || (this.targetElement = null,
              t.preventDefault()),
              !1);
          return r && !i && (u = l.fastClickScrollParent,
          u && u.fastClickLastScrollTop !== u.scrollTop) ? !0 : (this.needsClick(l) || (t.preventDefault(),
          this.sendClick(l, t)),
          !1)
      }
      ,
      t.prototype.onTouchCancel = function() {
          this.trackingClick = !1,
          this.targetElement = null
      }
      ,
      t.prototype.onMouse = function(t) {
          return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0,
          t.stopPropagation(),
          t.preventDefault(),
          !1) : !0 : !0
      }
      ,
      t.prototype.onClick = function(t) {
          var e;
          return this.trackingClick ? (this.targetElement = null,
          this.trackingClick = !1,
          !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t),
          e || (this.targetElement = null),
          e)
      }
      ,
      t.prototype.destroy = function() {
          var t = this.layer;
          n && (t.removeEventListener("mouseover", this.onMouse, !0),
          t.removeEventListener("mousedown", this.onMouse, !0),
          t.removeEventListener("mouseup", this.onMouse, !0)),
          t.removeEventListener("click", this.onClick, !0),
          t.removeEventListener("touchstart", this.onTouchStart, !1),
          t.removeEventListener("touchmove", this.onTouchMove, !1),
          t.removeEventListener("touchend", this.onTouchEnd, !1),
          t.removeEventListener("touchcancel", this.onTouchCancel, !1)
      }
      ,
      t.notNeeded = function(t) {
          var e, r, i, o;
          if ("undefined" == typeof window.ontouchstart)
              return !0;
          if (r = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
              if (!n)
                  return !0;
              if (e = document.querySelector("meta[name=viewport]")) {
                  if (-1 !== e.content.indexOf("user-scalable=no"))
                      return !0;
                  if (r > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                      return !0
              }
          }
          if (a && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),
          i[1] >= 10 && i[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
              if (-1 !== e.content.indexOf("user-scalable=no"))
                  return !0;
              if (document.documentElement.scrollWidth <= window.outerWidth)
                  return !0
          }
          return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1],
          o >= 27 && (e = document.querySelector("meta[name=viewport]"),
          e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction)
      }
      ,
      t.attach = function(e, n) {
          return new t(e,n)
      }
      ,
      "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
          return t
      }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach,
      module.exports.FastClick = t) : window.FastClick = t
  }(),
  function() {
      var t;
      t = angular.module("lmgtfy", ["ngTouch", "ngAnimate", "mgcrea.ngStrap.select", "mgcrea.ngStrap.dropdown", "lmgtfy.gaEvent", "lmgtfy.navDropdown"]),
      t.config(["$httpProvider", function(t) {
          var e;
          return e = document.querySelector("meta[name=csrf-token]"),
          null != e ? t.defaults.headers.common["X-CSRF-Token"] = e.content : void 0
      }
      ]),
      t.config(["localStorageServiceProvider", function(t) {
          return t.setPrefix("lmgtfy")
      }
      ])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.fixedCenterBlock", []),
      t.directive("fixedCenterBlockContent", function() {
          return {
              restrict: "C",
              link: function(t, e) {
                  return e.css({
                      position: "fixed",
                      left: 0,
                      right: 0,
                      top: "50%",
                      marginTop: e[0].offsetHeight / -2 + "px"
                  })
              }
          }
      })
  }
  .call(this),
  function() {
      var t, e, n;
      n = angular.module("lmgtfy.student.searchIllustrations", []),
      e = function() {
          return window.innerWidth > 768 ? "desktop" : window.innerWidth > 425 ? "tablet" : "mobile"
      }
      ,
      t = function() {
          function t(t) {
              angular.extend(this, t)
          }
          return t.prototype.stepInstructions = function() {
              return []
          }
          ,
          t.prototype.scenes = {
              desktop: [],
              tablet: [],
              mobile: []
          },
          t.prototype.instructionForStep = function(t) {
              return this.stepInstructions()[t]
          }
          ,
          t.prototype.sceneForStep = function(t) {
              var n;
              return n = this.scenes[e()],
              t >= n.length ? n[n.length - 1] : n[t]
          }
          ,
          t
      }(),
      n.service("searchIllustrations", ["$injector", function(e) {
          return {
              find: function(n, r) {
                  var i, o, a;
                  return o = e.get(n),
                  i = o.base,
                  a = o[r],
                  null != i && angular.extend(a, i),
                  new t(a)
              }
          }
      }
      ])
  }
  .call(this),
  function() {
      angular.module("lmgtfy.student", ["lmgtfy", "lmgtfy.fixedCenterBlock", "lmgtfy.imagePreloader", "lmgtfy.student.mainController", "lmgtfy.student.searchIllustrator", "lmgtfy.student.searchInstructions"])
  }
  .call(this),
  function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? e(exports, require("angular")) : "function" == typeof define && define.amd ? define(["exports", "angular"], e) : e(t["@uirouter/angularjs"] = {}, t.angular)
  }(this, function(t, e) {
      "use strict";
      function n(t) {
          function e(n) {
              return n.length >= r ? t.apply(null, n) : function() {
                  return e(n.concat([].slice.apply(arguments)))
              }
          }
          var n = [].slice.apply(arguments, [1])
            , r = t.length;
          return e(n)
      }
      function r() {
          var t = arguments
            , e = t.length - 1;
          return function() {
              for (var n = e, r = t[e].apply(this, arguments); n--; )
                  r = t[n].call(this, r);
              return r
          }
      }
      function i() {
          for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
          return r.apply(null, [].slice.call(arguments).reverse())
      }
      function o(t, e) {
          return function() {
              for (var n = [], r = 0; r < arguments.length; r++)
                  n[r] = arguments[r];
              return t.apply(null, n) && e.apply(null, n)
          }
      }
      function a(t, e) {
          return function() {
              for (var n = [], r = 0; r < arguments.length; r++)
                  n[r] = arguments[r];
              return t.apply(null, n) || e.apply(null, n)
          }
      }
      function s(t, e) {
          return function(n) {
              return n[t].apply(n, e)
          }
      }
      function u(t) {
          return function(e) {
              for (var n = 0; n < t.length; n++)
                  if (t[n][0](e))
                      return t[n][1](e)
          }
      }
      function c(t) {
          if (re(t) && t.length) {
              var e = t.slice(0, -1)
                , n = t.slice(-1);
              return !(e.filter(Ht(ee)).length || n.filter(Ht(Zt)).length)
          }
          return Zt(t)
      }
      function l(t) {
          return t
      }
      function f() {}
      function p(t, e, n, r, i) {
          void 0 === i && (i = !1);
          var o = function(e) {
              return t()[e].bind(n())
          }
            , a = function(t) {
              return function() {
                  return e[t] = o(t),
                  e[t].apply(null, arguments)
              }
          };
          return r = r || Object.keys(t()),
          r.reduce(function(t, e) {
              return t[e] = i ? a(e) : o(e),
              t
          }, e)
      }
      function d(t, e) {
          return -1 !== t.indexOf(e)
      }
      function h(t, e) {
          var n = t.indexOf(e);
          return n >= 0 && t.splice(n, 1),
          t
      }
      function m(t, e) {
          return t.push(e),
          e
      }
      function g(t) {
          for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
          var r = e.concat({}).reverse()
            , i = me.apply(null, r);
          return me({}, i, y(t || {}, Object.keys(i)))
      }
      function v(t, e) {
          var n = [];
          for (var r in t.path) {
              if (t.path[r] !== e.path[r])
                  break;
              n.push(t.path[r])
          }
          return n
      }
      function y(t, e) {
          var n = {};
          for (var r in t)
              -1 !== e.indexOf(r) && (n[r] = t[r]);
          return n
      }
      function b(t, e) {
          return Object.keys(t).filter(Ht(ye(e))).reduce(function(e, n) {
              return e[n] = t[n],
              e
          }, {})
      }
      function $(t, e) {
          return T(t, Lt(e))
      }
      function w(t, e) {
          var n = re(t)
            , r = n ? [] : {}
            , i = n ? function(t) {
              return r.push(t)
          }
          : function(t, e) {
              return r[e] = t
          }
          ;
          return he(t, function(t, n) {
              e(t, n) && i(t, n)
          }),
          r
      }
      function S(t, e) {
          var n;
          return he(t, function(t, r) {
              n || e(t, r) && (n = t)
          }),
          n
      }
      function T(t, e) {
          var n = re(t) ? [] : {};
          return he(t, function(t, r) {
              return n[r] = e(t, r)
          }),
          n
      }
      function _(t, e) {
          return t.push(e),
          t
      }
      function k(t, e) {
          return void 0 === e && (e = "assert failure"),
          function(n) {
              var r = t(n);
              if (!r)
                  throw new Error(Zt(e) ? e(n) : e);
              return r
          }
      }
      function E() {
          for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
          if (0 === t.length)
              return [];
          var n, r = t.reduce(function(t, e) {
              return Math.min(e.length, t)
          }, 9007199254740991), i = [];
          for (n = 0; r > n; n++)
              switch (t.length) {
              case 1:
                  i.push([t[0][n]]);
                  break;
              case 2:
                  i.push([t[0][n], t[1][n]]);
                  break;
              case 3:
                  i.push([t[0][n], t[1][n], t[2][n]]);
                  break;
              case 4:
                  i.push([t[0][n], t[1][n], t[2][n], t[3][n]]);
                  break;
              default:
                  i.push(t.map(function(t) {
                      return t[n]
                  }))
              }
          return i
      }
      function C(t, e) {
          var n, r;
          if (re(e) && (n = e[0],
          r = e[1]),
          !ee(n))
              throw new Error("invalid parameters to applyPairs");
          return t[n] = r,
          t
      }
      function x(t) {
          return t.length && t[t.length - 1] || void 0
      }
      function D(t, e) {
          return e && Object.keys(e).forEach(function(t) {
              return delete e[t]
          }),
          e || (e = {}),
          me(e, t)
      }
      function P(t, e, n) {
          return re(t) ? t.forEach(e, n) : void Object.keys(t).forEach(function(n) {
              return e(t[n], n)
          })
      }
      function A(t) {
          for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              if (n)
                  for (var r = Object.keys(n), i = 0; i < r.length; i++)
                      t[r[i]] = n[r[i]]
          }
          return t
      }
      function O(t, e) {
          if (t === e)
              return !0;
          if (null === t || null === e)
              return !1;
          if (t !== t && e !== e)
              return !0;
          var n = typeof t
            , r = typeof e;
          if (n !== r || "object" !== n)
              return !1;
          var i = [t, e];
          if (Nt(re)(i))
              return R(t, e);
          if (Nt(ie)(i))
              return t.getTime() === e.getTime();
          if (Nt(oe)(i))
              return t.toString() === e.toString();
          if (Nt(Zt)(i))
              return !0;
          var o = [Zt, re, ie, oe];
          if (o.map(Vt).reduce(function(t, e) {
              return t || !!e(i)
          }, !1))
              return !1;
          var a, s = {};
          for (a in t) {
              if (!O(t[a], e[a]))
                  return !1;
              s[a] = !0
          }
          for (a in e)
              if (!s[a])
                  return !1;
          return !0
      }
      function R(t, e) {
          return t.length !== e.length ? !1 : E(t, e).reduce(function(t, e) {
              return t && O(e[0], e[1])
          }, !0)
      }
      function I(t) {
          if (!t)
              return "ui-view (defunct)";
          var e = t.creationContext ? t.creationContext.name || "(root)" : "(none)";
          return "[ui-view#" + t.id + " " + t.$type + ":" + t.fqn + " (" + t.name + "@" + e + ")]"
      }
      function M(e) {
          return te(e) ? t.Category[e] : t.Category[t.Category[e]]
      }
      function L(t, e) {
          function n(t) {
              for (var e = r, n = 0; n < e.length; n++) {
                  var i = new zt(e[n]);
                  if (i && i.matches(t.name) || !i && e[n] === t.name)
                      return !0
              }
              return !1
          }
          var r = ee(e) ? [e] : e
            , i = Zt(r) ? r : n;
          return !!i(t)
      }
      function F(t, e, n) {
          function r(t, r, i) {
              void 0 === i && (i = {});
              var s = new Je(e,n,r,t,a,i);
              return o.push(s),
              s.deregister.bind(s)
          }
          var i = t._registeredHooks = t._registeredHooks || {}
            , o = i[n.name] = []
            , a = be(o);
          return t[n.name] = r,
          r
      }
      function j(t) {
          return void 0 === t && (t = !1),
          function(e, n) {
              var r = t ? -1 : 1
                , i = (e.node.state.path.length - n.node.state.path.length) * r;
              return 0 !== i ? i : n.hook.priority - e.hook.priority
          }
      }
      function H(t, e) {
          function n(t) {
              return re(t) ? t : Xt(t) ? [t] : []
          }
          function r(t) {
              switch (t.length) {
              case 0:
                  return;
              case 1:
                  return "auto" === e ? t[0] : t;
              default:
                  return t
              }
          }
          function i(t, e) {
              return function(i) {
                  if (re(i) && 0 === i.length)
                      return i;
                  var o = n(i)
                    , a = T(o, t);
                  return e === !0 ? 0 === w(a, function(t) {
                      return !t
                  }).length : r(a)
              }
          }
          function o(t) {
              return function(e, r) {
                  var i = n(e)
                    , o = n(r);
                  if (i.length !== o.length)
                      return !1;
                  for (var a = 0; a < i.length; a++)
                      if (!t(i[a], o[a]))
                          return !1;
                  return !0
              }
          }
          var a = this;
          ["encode", "decode", "equals", "$normalize"].forEach(function(e) {
              var n = t[e].bind(t)
                , r = "equals" === e ? o : i;
              a[e] = r(n)
          }),
          me(this, {
              dynamic: t.dynamic,
              name: t.name,
              pattern: t.pattern,
              inherit: t.inherit,
              is: i(t.is.bind(t), !0),
              $arrayMode: e
          })
      }
      function N(t) {
          function e() {
              return t.value
          }
          return t = en(t) && {
              value: t
          } || t,
          e.__cacheable = !0,
          me(t, {
              $$fn: c(t.value) ? t.value : e
          })
      }
      function V(e, n, r, i, o) {
          if (e.type && n && "string" !== n.name)
              throw new Error("Param '" + i + "' has two type configurations.");
          if (e.type && n && "string" === n.name && o.type(e.type))
              return o.type(e.type);
          if (n)
              return n;
          if (!e.type) {
              var a = r === t.DefType.CONFIG ? "any" : r === t.DefType.PATH ? "path" : r === t.DefType.SEARCH ? "query" : "string";
              return o.type(a)
          }
          return e.type instanceof Ze ? e.type : o.type(e.type)
      }
      function U(t, e, n) {
          var r = t.squash;
          if (!e || r === !1)
              return !1;
          if (!Xt(r) || null == r)
              return n;
          if (r === !0 || ee(r))
              return r;
          throw new Error("Invalid squash policy: '" + r + "'. Valid policies: false, true, or arbitrary string")
      }
      function q(t, e, n, r) {
          var i, o, a = [{
              from: "",
              to: n || e ? void 0 : ""
          }, {
              from: null,
              to: n || e ? void 0 : ""
          }];
          return i = re(t.replace) ? t.replace : [],
          ee(r) && i.push({
              from: r,
              to: void 0
          }),
          o = T(i, Lt("from")),
          w(a, function(t) {
              return -1 === o.indexOf(t.from)
          }).concat(i)
      }
      function B(t, e) {
          return e.length <= t ? e : e.substr(0, t - 3) + "..."
      }
      function z(t, e) {
          for (; e.length < t; )
              e += " ";
          return e
      }
      function W(t) {
          return t.replace(/^([A-Z])/, function(t) {
              return t.toLowerCase()
          }).replace(/([A-Z])/g, function(t) {
              return "-" + t.toLowerCase()
          })
      }
      function Y(t) {
          var e = K(t)
            , n = e.match(/^(function [^ ]+\([^)]*\))/)
            , r = n ? n[1] : e
            , i = t.name || "";
          return i && r.match(/function \(/) ? "function " + i + r.substr(9) : r
      }
      function K(t) {
          var e = re(t) ? t.slice(-1)[0] : t;
          return e && e.toString() || "undefined"
      }
      function G(t) {
          function e(t) {
              if (ne(t)) {
                  if (-1 !== n.indexOf(t))
                      return "[circular ref]";
                  n.push(t)
              }
              return yn(t)
          }
          var n = [];
          return JSON.stringify(t, function(t, n) {
              return e(n)
          }).replace(/\\"/g, '"')
      }
      function X(t) {
          var e = new RegExp("(" + t + ")","g");
          return function(t) {
              return t.split(e).filter(l)
          }
      }
      function J(t, e) {
          return ee(x(t)) && ee(e) ? t.slice(0, -1).concat(x(t) + e) : _(t, e)
      }
      function Q() {
          var t = function(t) {
              var e = function(t) {
                  return null != t ? t.toString() : t
              }
                , n = {
                  encode: e,
                  decode: e,
                  is: Ut(String),
                  pattern: /.*/,
                  equals: function(t, e) {
                      return t == e
                  }
              };
              return me({}, n, t)
          };
          me(En.prototype, {
              string: t({}),
              path: t({
                  pattern: /[^\/]*/
              }),
              query: t({}),
              hash: t({
                  inherit: !1
              }),
              "int": t({
                  decode: function(t) {
                      return parseInt(t, 10)
                  },
                  is: function(t) {
                      return !Qt(t) && this.decode(t.toString()) === t
                  },
                  pattern: /-?\d+/
              }),
              bool: t({
                  encode: function(t) {
                      return t && 1 || 0
                  },
                  decode: function(t) {
                      return 0 !== parseInt(t, 10)
                  },
                  is: Ut(Boolean),
                  pattern: /0|1/
              }),
              date: t({
                  encode: function(t) {
                      return this.is(t) ? [t.getFullYear(), ("0" + (t.getMonth() + 1)).slice(-2), ("0" + t.getDate()).slice(-2)].join("-") : void 0
                  },
                  decode: function(t) {
                      if (this.is(t))
                          return t;
                      var e = this.capture.exec(t);
                      return e ? new Date(e[1],e[2] - 1,e[3]) : void 0
                  },
                  is: function(t) {
                      return t instanceof Date && !isNaN(t.valueOf())
                  },
                  equals: function(t, e) {
                      return ["getFullYear", "getMonth", "getDate"].reduce(function(n, r) {
                          return n && t[r]() === e[r]()
                      }, !0)
                  },
                  pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                  capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
              }),
              json: t({
                  encode: de,
                  decode: pe,
                  is: Ut(Object),
                  equals: ge,
                  pattern: /[^\/]*/
              }),
              any: t({
                  encode: l,
                  decode: l,
                  is: function() {
                      return !0
                  },
                  equals: ge
              })
          })
      }
      function Z(t) {
          return t.name
      }
      function tt(t) {
          return t.self.$$state = function() {
              return t
          }
          ,
          t.self
      }
      function et(t) {
          return t.parent && t.parent.data && (t.data = t.self.data = ve(t.parent.data, t.data)),
          t.data
      }
      function nt(t) {
          return t.parent ? t.parent.path.concat(t) : [t]
      }
      function rt(t) {
          var e = t.parent ? me({}, t.parent.includes) : {};
          return e[t.name] = !0,
          e
      }
      function it(t) {
          var e = function(t, e) {
              return Object.keys(t || {}).map(function(n) {
                  return {
                      token: n,
                      val: t[n],
                      deps: void 0,
                      policy: e[n]
                  }
              })
          }
            , n = function(t) {
              var e = ce.$injector;
              return t.$inject || e && e.annotate(t, e.strictDi) || "deferred"
          }
            , r = function(t) {
              return !(!t.token || !t.resolveFn)
          }
            , o = function(t) {
              return !(!t.provide && !t.token || !(t.useValue || t.useFactory || t.useExisting || t.useClass))
          }
            , a = function(t) {
              return !!(t && t.val && (ee(t.val) || re(t.val) || Zt(t.val)))
          }
            , s = function(t) {
              return t.provide || t.token
          }
            , c = u([[Lt("resolveFn"), function(t) {
              return new sn(s(t),t.resolveFn,t.deps,t.policy)
          }
          ], [Lt("useFactory"), function(t) {
              return new sn(s(t),t.useFactory,t.deps || t.dependencies,t.policy)
          }
          ], [Lt("useClass"), function(t) {
              return new sn(s(t),function() {
                  return new t.useClass
              }
              ,[],t.policy)
          }
          ], [Lt("useValue"), function(t) {
              return new sn(s(t),function() {
                  return t.useValue
              }
              ,[],t.policy,t.useValue)
          }
          ], [Lt("useExisting"), function(t) {
              return new sn(s(t),l,[t.useExisting],t.policy)
          }
          ]])
            , f = u([[i(Lt("val"), ee), function(t) {
              return new sn(t.token,l,[t.val],t.policy)
          }
          ], [i(Lt("val"), re), function(t) {
              return new sn(t.token,x(t.val),t.val.slice(0, -1),t.policy)
          }
          ], [i(Lt("val"), Zt), function(t) {
              return new sn(t.token,t.val,n(t.val),t.policy)
          }
          ]])
            , p = u([[Ut(sn), function(t) {
              return t
          }
          ], [r, c], [o, c], [a, f], [Bt(!0), function(t) {
              throw new Error("Invalid resolve value: " + G(t))
          }
          ]])
            , d = t.resolve
            , h = re(d) ? d : e(d, t.resolvePolicy || {});
          return h.map(p)
      }
      function ot(t, e) {
          var n = ["", ""]
            , r = t.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
          if (!e)
              return r;
          switch (e.squash) {
          case !1:
              n = ["(", ")" + (e.isOptional ? "?" : "")];
              break;
          case !0:
              r = r.replace(/\/$/, ""),
              n = ["(?:/(", ")|/)?"];
              break;
          default:
              n = ["(" + e.squash + "|", ")?"]
          }
          return r + n[0] + e.type.pattern.source + n[1]
      }
      function at(t, e, n, r) {
          return "/" === r ? t : e ? wn(r) + t : n ? r.slice(1) + t : t
      }
      function st(t) {
          if (!(Zt(t) || ee(t) || Ut(Ke)(t) || Ke.isDef(t)))
              throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");
          return Zt(t) ? t : Bt(t)
      }
      function ut(t) {
          t.addResolvable({
              token: ir,
              deps: [],
              resolveFn: function() {
                  return t.router
              },
              data: t.router
          }, ""),
          t.addResolvable({
              token: gn,
              deps: [],
              resolveFn: function() {
                  return t
              },
              data: t
          }, ""),
          t.addResolvable({
              token: "$transition$",
              deps: [],
              resolveFn: function() {
                  return t
              },
              data: t
          }, ""),
          t.addResolvable({
              token: "$stateParams",
              deps: [],
              resolveFn: function() {
                  return t.params()
              },
              data: t.params()
          }, ""),
          t.entering().forEach(function(e) {
              t.addResolvable({
                  token: "$state$",
                  deps: [],
                  resolveFn: function() {
                      return e
                  },
                  data: e
              }, e)
          })
      }
      function ct(t) {
          return function(e, n) {
              var r = n.$$state()
                , i = r[t];
              return i(e, n)
          }
      }
      function lt(t, e) {
          function n(e) {
              return e && Array.isArray(e.states) && e.states.forEach(function(e) {
                  return t.router.stateRegistry.register(e)
              }),
              e
          }
          var r = e.$$state().lazyLoad
            , i = r._promise;
          if (!i) {
              var o = function(t) {
                  return delete e.lazyLoad,
                  delete e.$$state().lazyLoad,
                  delete r._promise,
                  t
              }
                , a = function(t) {
                  return delete r._promise,
                  ce.$q.reject(t)
              };
              i = r._promise = ce.$q.when(r(t, e)).then(n).then(o, a)
          }
          return i
      }
      function ft(t) {
          var e = t._ignoredReason();
          if (e) {
              Ye.traceTransitionIgnored(t);
              var n = t.router.globals.transition;
              return "SameAsCurrent" === e && n && n.abort(),
              He.ignored().toPromise()
          }
      }
      function pt(t) {
          if (!t.valid())
              throw new Error(t.error())
      }
      function dt(t) {
          var e = function(t) {
              return t || ""
          }
            , n = Sn(t).map(e)
            , r = n[0]
            , i = n[1]
            , o = Tn(r).map(e)
            , a = o[0]
            , s = o[1];
          return {
              path: a,
              search: s,
              hash: i,
              url: t
          }
      }
      function ht(t, e, n, r) {
          return function(i) {
              function o(t) {
                  t.dispose(a),
                  t.dispose(s)
              }
              var a = i.locationService = new n(i)
                , s = i.locationConfig = new r(i,e);
              return {
                  name: t,
                  service: a,
                  configuration: s,
                  dispose: o
              }
          }
      }
      function mt() {
          return ce.$injector = jr,
          ce.$q = Ir,
          {
              name: "vanilla.services",
              $q: Ir,
              $injector: jr,
              dispose: function() {
                  return null
              }
          }
      }
      function gt() {
          var t = null;
          return function(e, n) {
              return t = t || ce.$injector.get("$templateFactory"),
              [new ii(e,n,t)]
          }
      }
      function vt(t) {
          if (!t.parent)
              return {};
          var e = ["templateProvider", "templateUrl", "template", "notify", "async"]
            , n = ["controller", "controllerProvider", "controllerAs", "resolveAs"]
            , r = ["component", "bindings", "componentProvider"]
            , i = e.concat(n)
            , o = r.concat(i);
          if (Xt(t.views) && ni(o, t))
              throw new Error("State '" + t.name + "' has a 'views' object. It cannot also have \"view properties\" at the state level.  Move the following properties into a view (in the 'views' object):  " + o.filter(function(e) {
                  return Xt(t[e])
              }).join(", "));
          var a = {}
            , s = t.views || {
              $default: y(t, o)
          };
          return he(s, function(e, n) {
              if (n = n || "$default",
              ee(e) && (e = {
                  component: e
              }),
              e = me({}, e),
              ni(r, e) && ni(i, e))
                  throw new Error("Cannot combine: " + r.join("|") + " with: " + i.join("|") + " in stateview: '" + n + "@" + t.name + "'");
              e.resolveAs = e.resolveAs || "$resolve",
              e.$type = "ng1",
              e.$context = t,
              e.$name = n;
              var o = Kn.normalizeUIViewTarget(e.$context, e.$name);
              e.$uiViewName = o.uiViewName,
              e.$uiViewContextAnchor = o.uiViewContextAnchor,
              a[n] = e
          }),
          a
      }
      function yt(t) {
          var e = ce.$injector.get(t + "Directive");
          if (!e || !e.length)
              throw new Error("Unable to find component named '" + t + "'");
          return e.map(ai).reduce(Ce, [])
      }
      function bt(t) {
          function e(t, e, r, i) {
              return n._runtimeServices(i, t, r, e),
              delete vi.router,
              delete vi.$get,
              vi
          }
          vi = this.router = new ir,
          vi.stateProvider = new ui(vi.stateRegistry,vi.stateService),
          vi.stateRegistry.decorator("views", vt),
          vi.stateRegistry.decorator("onExit", ci("onExit")),
          vi.stateRegistry.decorator("onRetain", ci("onRetain")),
          vi.stateRegistry.decorator("onEnter", ci("onEnter")),
          vi.viewService._pluginapi._viewConfigFactory("ng1", gt());
          var n = vi.locationService = vi.locationConfig = new li(t);
          return li.monkeyPatchPathParameterType(vi),
          vi.router = vi,
          vi.$get = e,
          e.$inject = ["$location", "$browser", "$sniffer", "$rootScope", "$http", "$templateCache"],
          vi
      }
      function $t(t, e, n) {
          ce.$injector = t,
          ce.$q = e,
          n.stateRegistry.get().map(function(t) {
              return t.$$state().resolvables
          }).reduce(Ce, []).filter(function(t) {
              return "deferred" === t.deps
          }).forEach(function(e) {
              return e.deps = t.annotate(e.resolveFn, t.strictDi)
          })
      }
      function wt(t) {
          t.$watch(function() {
              Ye.approximateDigests++
          })
      }
      function St(t) {
          var e, n = t.match(/^\s*({[^}]*})\s*$/);
          if (n && (t = "(" + n[1] + ")"),
          e = t.replace(/\n/g, " ").match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/),
          !e || 4 !== e.length)
              throw new Error("Invalid state ref '" + t + "'");
          return {
              state: e[1] || null,
              paramExpr: e[3] || null
          }
      }
      function Tt(t) {
          var e = t.parent().inheritedData("$uiView")
            , n = jt("$cfg.path")(e);
          return n ? x(n).state.name : void 0
      }
      function _t(t, e, n) {
          var r = n.uiState || t.current.name
            , i = me(Ct(e, t), n.uiStateOpts || {})
            , o = t.href(r, n.uiStateParams, i);
          return {
              uiState: r,
              uiStateParams: n.uiStateParams,
              uiStateOpts: i,
              href: o
          }
      }
      function kt(t) {
          var e = "[object SVGAnimatedString]" === Object.prototype.toString.call(t.prop("href"))
            , n = "FORM" === t[0].nodeName;
          return {
              attr: n ? "action" : e ? "xlink:href" : "href",
              isAnchor: "A" === t.prop("tagName").toUpperCase(),
              clickable: !n
          }
      }
      function Et(t, e, n, r, i) {
          return function(o) {
              var a = o.which || o.button
                , s = i();
              if (!(a > 1 || o.ctrlKey || o.metaKey || o.shiftKey || t.attr("target"))) {
                  var u = n(function() {
                      e.go(s.uiState, s.uiStateParams, s.uiStateOpts)
                  });
                  o.preventDefault();
                  var c = r.isAnchor && !s.href ? 1 : 0;
                  o.preventDefault = function() {
                      c-- <= 0 && n.cancel(u)
                  }
              }
          }
      }
      function Ct(t, e) {
          return {
              relative: Tt(t) || e.$current,
              inherit: !0,
              source: "sref"
          }
      }
      function xt(t, e, n, r) {
          var i;
          r && (i = r.events),
          re(i) || (i = ["click"]);
          for (var o = t.on ? "on" : "bind", a = 0, s = i; a < s.length; a++) {
              var u = s[a];
              t[o](u, n)
          }
          e.$on("$destroy", function() {
              for (var e = t.off ? "off" : "unbind", r = 0, o = i; r < o.length; r++) {
                  var a = o[r];
                  t[e](a, n)
              }
          })
      }
      function Dt(t) {
          var e = function(e, n, r) {
              return t.is(e, n, r)
          };
          return e.$stateful = !0,
          e
      }
      function Pt(t) {
          var e = function(e, n, r) {
              return t.includes(e, n, r)
          };
          return e.$stateful = !0,
          e
      }
      function At(t, n, r, i, o) {
          var a = jt("viewDecl.controllerAs")
            , s = jt("viewDecl.resolveAs");
          return {
              restrict: "ECA",
              priority: -400,
              compile: function(i) {
                  var u = i.html();
                  return i.empty(),
                  function(i, c) {
                      var l = c.data("$uiView");
                      if (!l)
                          return c.html(u),
                          void t(c.contents())(i);
                      var f = l.$cfg || {
                          viewDecl: {},
                          getTemplate: e.noop
                      }
                        , p = f.path && new dn(f.path);
                      c.html(f.getTemplate(c, p) || u),
                      Ye.traceUIViewFill(l.$uiView, c.html());
                      var d = t(c.contents())
                        , h = f.controller
                        , m = a(f)
                        , g = s(f)
                        , v = p && Si(p);
                      if (i[g] = v,
                      h) {
                          var y = n(h, me({}, v, {
                              $scope: i,
                              $element: c
                          }));
                          m && (i[m] = y,
                          i[m][g] = v),
                          c.data("$ngControllerController", y),
                          c.children().data("$ngControllerController", y),
                          Ot(o, r, y, i, f)
                      }
                      if (ee(f.viewDecl.component))
                          var b = f.viewDecl.component
                            , $ = W(b)
                            , w = new RegExp("^(x-|data-)?" + $ + "$","i")
                            , S = function() {
                              var t = [].slice.call(c[0].children).filter(function(t) {
                                  return t && t.tagName && w.exec(t.tagName)
                              });
                              return t && Mt.element(t).data("$" + b + "Controller")
                          }
                            , T = i.$watch(S, function(t) {
                              t && (Ot(o, r, t, i, f),
                              T())
                          });
                      d(i)
                  }
              }
          }
      }
      function Ot(t, e, n, r, i) {
          !Zt(n.$onInit) || i.viewDecl.component && Ei || n.$onInit();
          var o = x(i.path).state.self
            , a = {
              bind: n
          };
          if (Zt(n.uiOnParamsChanged)) {
              var s = new dn(i.path)
                , u = s.getResolvable("$transition$").data
                , c = function(t) {
                  if (t !== u && -1 === t.exiting().indexOf(o)) {
                      var e = t.params("to")
                        , r = t.params("from")
                        , i = t.treeChanges().to.map(function(t) {
                          return t.paramSchema
                      }).reduce(Ce, [])
                        , a = t.treeChanges().from.map(function(t) {
                          return t.paramSchema
                      }).reduce(Ce, [])
                        , s = i.filter(function(t) {
                          var n = a.indexOf(t);
                          return -1 === n || !a[n].type.equals(e[t.id], r[t.id])
                      });
                      if (s.length) {
                          var c = s.map(function(t) {
                              return t.id
                          })
                            , l = w(e, function(t, e) {
                              return -1 !== c.indexOf(e)
                          });
                          n.uiOnParamsChanged(l, t)
                      }
                  }
              };
              r.$on("$destroy", e.onSuccess({}, c, a))
          }
          if (Zt(n.uiCanExit)) {
              var l = Ci++
                , f = "_uiCanExitIds"
                , p = function(t) {
                  return !!t && (t[f] && t[f][l] === !0 || p(t.redirectedFrom()))
              }
                , d = function(e) {
                  var r, i = e[f] = e[f] || {};
                  return p(e) || (r = t.when(n.uiCanExit(e)),
                  r.then(function(t) {
                      return i[l] = t !== !1
                  })),
                  r
              }
                , h = {
                  exiting: o.name
              };
              r.$on("$destroy", e.onBefore(h, d, a))
          }
      }
      function Rt() {
          var t = !1;
          this.useAnchorScroll = function() {
              t = !0
          }
          ,
          this.$get = ["$anchorScroll", "$timeout", function(e, n) {
              return t ? e : function(t) {
                  return n(function() {
                      t[0].scrollIntoView()
                  }, 0, !1)
              }
          }
          ]
      }
      var It = angular
        , Mt = e && e.module ? e : It
        , Lt = function(t) {
          return function(e) {
              return e && e[t]
          }
      }
        , Ft = n(function(t, e, n) {
          return n && n[t] === e
      })
        , jt = function(t) {
          return i.apply(null, t.split(".").map(Lt))
      }
        , Ht = function(t) {
          return function() {
              for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
              return !t.apply(null, e)
          }
      }
        , Nt = function(t) {
          return function(e) {
              return e.reduce(function(e, n) {
                  return e && !!t(n)
              }, !0)
          }
      }
        , Vt = function(t) {
          return function(e) {
              return e.reduce(function(e, n) {
                  return e || !!t(n)
              }, !1)
          }
      }
        , Ut = function(t) {
          return function(e) {
              return null != e && e.constructor === t || e instanceof t
          }
      }
        , qt = function(t) {
          return function(e) {
              return t === e
          }
      }
        , Bt = function(t) {
          return function() {
              return t
          }
      }
        , zt = function() {
          function t(t) {
              this.text = t,
              this.glob = t.split(".");
              var e = this.text.split(".").map(function(t) {
                  return "**" === t ? "(?:|(?:\\.[^.]*)*)" : "*" === t ? "\\.[^.]*" : "\\." + t
              }).join("");
              this.regexp = new RegExp("^" + e + "$")
          }
          return t.prototype.matches = function(t) {
              return this.regexp.test("." + t)
          }
          ,
          t.is = function(t) {
              return !!/[!,*]+/.exec(t)
          }
          ,
          t.fromString = function(e) {
              return t.is(e) ? new t(e) : null
          }
          ,
          t
      }()
        , Wt = function() {
          function t(e) {
              return t.create(e || {})
          }
          return t.create = function(e) {
              e = t.isStateClass(e) ? new e : e;
              var n = ve(ve(e, t.prototype));
              return e.$$state = function() {
                  return n
              }
              ,
              n.self = e,
              n.__stateObjectCache = {
                  nameGlob: zt.fromString(n.name)
              },
              n
          }
          ,
          t.prototype.is = function(t) {
              return this === t || this.self === t || this.fqn() === t
          }
          ,
          t.prototype.fqn = function() {
              if (!(this.parent && this.parent instanceof this.constructor))
                  return this.name;
              var t = this.parent.fqn();
              return t ? t + "." + this.name : this.name
          }
          ,
          t.prototype.root = function() {
              return this.parent && this.parent.root() || this
          }
          ,
          t.prototype.parameters = function(t) {
              t = g(t, {
                  inherit: !0,
                  matchingKeys: null
              });
              var e = t.inherit && this.parent && this.parent.parameters() || [];
              return e.concat(_e(this.params)).filter(function(e) {
                  return !t.matchingKeys || t.matchingKeys.hasOwnProperty(e.id)
              })
          }
          ,
          t.prototype.parameter = function(t, e) {
              return void 0 === e && (e = {}),
              this.url && this.url.parameter(t, e) || S(_e(this.params), Ft("id", t)) || e.inherit && this.parent && this.parent.parameter(t)
          }
          ,
          t.prototype.toString = function() {
              return this.fqn()
          }
          ,
          t.isStateClass = function(t) {
              return Zt(t) && t.__uiRouterState === !0
          }
          ,
          t.isState = function(t) {
              return ne(t.__stateObjectCache)
          }
          ,
          t
      }()
        , Yt = Object.prototype.toString
        , Kt = function(t) {
          return function(e) {
              return typeof e === t
          }
      }
        , Gt = Kt("undefined")
        , Xt = Ht(Gt)
        , Jt = function(t) {
          return null === t
      }
        , Qt = a(Jt, Gt)
        , Zt = Kt("function")
        , te = Kt("number")
        , ee = Kt("string")
        , ne = function(t) {
          return null !== t && "object" == typeof t
      }
        , re = Array.isArray
        , ie = function(t) {
          return "[object Date]" === Yt.call(t)
      }
        , oe = function(t) {
          return "[object RegExp]" === Yt.call(t)
      }
        , ae = Wt.isState
        , se = o(ne, i(Lt("then"), Zt))
        , ue = function(t) {
          return function() {
              throw new Error(t + "(): No coreservices implementation for UI-Router is loaded.")
          }
      }
        , ce = {
          $q: void 0,
          $injector: void 0
      }
        , le = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || void 0
        , fe = le.angular || {}
        , pe = fe.fromJson || JSON.parse.bind(JSON)
        , de = fe.toJson || JSON.stringify.bind(JSON)
        , he = fe.forEach || P
        , me = Object.assign || A
        , ge = fe.equals || O
        , ve = function(t, e) {
          return me(Object.create(t), e)
      }
        , ye = n(d)
        , be = n(h)
        , $e = n(m)
        , we = function(t) {
          return t.slice().forEach(function(e) {
              "function" == typeof e && e(),
              be(t, e)
          })
      }
        , Se = function(t, e) {
          return me(t, e)
      }
        , Te = T
        , _e = function(t) {
          return Object.keys(t).map(function(e) {
              return t[e]
          })
      }
        , ke = function(t, e) {
          return t && e
      }
        , Ee = function(t, e) {
          return t || e
      }
        , Ce = function(t, e) {
          return t.concat(e)
      }
        , xe = function(t, e) {
          return re(e) ? t.concat(e.reduce(xe, [])) : _(t, e)
      }
        , De = function(t, e) {
          return ye(t, e) ? t : _(t, e)
      }
        , Pe = function(t) {
          return t.reduce(Ce, [])
      }
        , Ae = function(t) {
          return t.reduce(xe, [])
      }
        , Oe = k
        , Re = k
        , Ie = function(t) {
          return Object.keys(t).map(function(e) {
              return [e, t[e]]
          })
      }
        , Me = function(t) {
          return t["catch"](function() {
              return 0
          }) && t
      }
        , Le = function(t) {
          return Me(ce.$q.reject(t))
      }
        , Fe = function() {
          function t(t, e) {
              void 0 === t && (t = []),
              void 0 === e && (e = null),
              this._items = t,
              this._limit = e
          }
          return t.prototype.enqueue = function(t) {
              var e = this._items;
              return e.push(t),
              this._limit && e.length > this._limit && e.shift(),
              t
          }
          ,
          t.prototype.dequeue = function() {
              return this.size() ? this._items.splice(0, 1)[0] : void 0
          }
          ,
          t.prototype.clear = function() {
              var t = this._items;
              return this._items = [],
              t
          }
          ,
          t.prototype.size = function() {
              return this._items.length
          }
          ,
          t.prototype.remove = function(t) {
              var e = this._items.indexOf(t);
              return e > -1 && this._items.splice(e, 1)[0]
          }
          ,
          t.prototype.peekTail = function() {
              return this._items[this._items.length - 1]
          }
          ,
          t.prototype.peekHead = function() {
              return this.size() ? this._items[0] : void 0
          }
          ,
          t
      }();
      !function(t) {
          t[t.SUPERSEDED = 2] = "SUPERSEDED",
          t[t.ABORTED = 3] = "ABORTED",
          t[t.INVALID = 4] = "INVALID",
          t[t.IGNORED = 5] = "IGNORED",
          t[t.ERROR = 6] = "ERROR"
      }(t.RejectType || (t.RejectType = {}));
      var je = 0
        , He = function() {
          function e(t, e, n) {
              this.$id = je++,
              this.type = t,
              this.message = e,
              this.detail = n
          }
          return e.prototype.toString = function() {
              var t = function(t) {
                  return t && t.toString !== Object.prototype.toString ? t.toString() : G(t)
              }
                , e = t(this.detail)
                , n = this
                , r = n.$id
                , i = n.type
                , o = n.message;
              return "Transition Rejection($id: " + r + " type: " + i + ", message: " + o + ", detail: " + e + ")"
          }
          ,
          e.prototype.toPromise = function() {
              return me(Le(this), {
                  _transitionRejection: this
              })
          }
          ,
          e.isRejectionPromise = function(t) {
              return t && "function" == typeof t.then && Ut(e)(t._transitionRejection)
          }
          ,
          e.superseded = function(n, r) {
              var i = "The transition has been superseded by a different transition"
                , o = new e(t.RejectType.SUPERSEDED,i,n);
              return r && r.redirected && (o.redirected = !0),
              o
          }
          ,
          e.redirected = function(t) {
              return e.superseded(t, {
                  redirected: !0
              })
          }
          ,
          e.invalid = function(n) {
              var r = "This transition is invalid";
              return new e(t.RejectType.INVALID,r,n)
          }
          ,
          e.ignored = function(n) {
              var r = "The transition was ignored";
              return new e(t.RejectType.IGNORED,r,n)
          }
          ,
          e.aborted = function(n) {
              var r = "The transition has been aborted";
              return new e(t.RejectType.ABORTED,r,n)
          }
          ,
          e.errored = function(n) {
              var r = "The transition errored";
              return new e(t.RejectType.ERROR,r,n)
          }
          ,
          e.normalize = function(t) {
              return Ut(e)(t) ? t : e.errored(t)
          }
          ,
          e
      }()
        , Ne = function(t) {
          var e = t.viewDecl
            , n = e.$context.name || "(root)";
          return "[View#" + t.$id + " from '" + n + "' state]: target ui-view: '" + e.$uiViewName + "@" + e.$uiViewContextAnchor + "'"
      }
        , Ve = Function.prototype.bind.call(console.log, console)
        , Ue = Zt(console.table) ? console.table.bind(console) : Ve.bind(console);
      !function(t) {
          t[t.RESOLVE = 0] = "RESOLVE",
          t[t.TRANSITION = 1] = "TRANSITION",
          t[t.HOOK = 2] = "HOOK",
          t[t.UIVIEW = 3] = "UIVIEW",
          t[t.VIEWCONFIG = 4] = "VIEWCONFIG"
      }(t.Category || (t.Category = {}));
      var qe = jt("$id")
        , Be = jt("router.$id")
        , ze = function(t) {
          return "Transition #" + qe(t) + "-" + Be(t)
      }
        , We = function() {
          function e() {
              this._enabled = {},
              this.approximateDigests = 0
          }
          return e.prototype._set = function(e, n) {
              var r = this;
              n.length || (n = Object.keys(t.Category).map(function(t) {
                  return parseInt(t, 10)
              }).filter(function(t) {
                  return !isNaN(t)
              }).map(function(e) {
                  return t.Category[e]
              })),
              n.map(M).forEach(function(t) {
                  return r._enabled[t] = e
              })
          }
          ,
          e.prototype.enable = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
              this._set(!0, t)
          }
          ,
          e.prototype.disable = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
              this._set(!1, t)
          }
          ,
          e.prototype.enabled = function(t) {
              return !!this._enabled[M(t)]
          }
          ,
          e.prototype.traceTransitionStart = function(e) {
              this.enabled(t.Category.TRANSITION) && console.log(ze(e) + ": Started  -> " + G(e))
          }
          ,
          e.prototype.traceTransitionIgnored = function(e) {
              this.enabled(t.Category.TRANSITION) && console.log(ze(e) + ": Ignored  <> " + G(e))
          }
          ,
          e.prototype.traceHookInvocation = function(e, n, r) {
              if (this.enabled(t.Category.HOOK)) {
                  var i = jt("traceData.hookType")(r) || "internal"
                    , o = jt("traceData.context.state.name")(r) || jt("traceData.context")(r) || "unknown"
                    , a = Y(e.registeredHook.callback);
                  console.log(ze(n) + ":   Hook -> " + i + " context: " + o + ", " + B(200, a))
              }
          }
          ,
          e.prototype.traceHookResult = function(e, n) {
              this.enabled(t.Category.HOOK) && console.log(ze(n) + ":   <- Hook returned: " + B(200, G(e)))
          }
          ,
          e.prototype.traceResolvePath = function(e, n, r) {
              this.enabled(t.Category.RESOLVE) && console.log(ze(r) + ":         Resolving " + e + " (" + n + ")")
          }
          ,
          e.prototype.traceResolvableResolved = function(e, n) {
              this.enabled(t.Category.RESOLVE) && console.log(ze(n) + ":               <- Resolved  " + e + " to: " + B(200, G(e.data)))
          }
          ,
          e.prototype.traceError = function(e, n) {
              this.enabled(t.Category.TRANSITION) && console.log(ze(n) + ": <- Rejected " + G(n) + ", reason: " + e)
          }
          ,
          e.prototype.traceSuccess = function(e, n) {
              this.enabled(t.Category.TRANSITION) && console.log(ze(n) + ": <- Success  " + G(n) + ", final state: " + e.name)
          }
          ,
          e.prototype.traceUIViewEvent = function(e, n, r) {
              void 0 === r && (r = ""),
              this.enabled(t.Category.UIVIEW) && console.log("ui-view: " + z(30, e) + " " + I(n) + r)
          }
          ,
          e.prototype.traceUIViewConfigUpdated = function(e, n) {
              this.enabled(t.Category.UIVIEW) && this.traceUIViewEvent("Updating", e, " with ViewConfig from context='" + n + "'")
          }
          ,
          e.prototype.traceUIViewFill = function(e, n) {
              this.enabled(t.Category.UIVIEW) && this.traceUIViewEvent("Fill", e, " with: " + B(200, n));
          }
          ,
          e.prototype.traceViewSync = function(e) {
              if (this.enabled(t.Category.VIEWCONFIG)) {
                  var n = e.map(function(t) {
                      var e = t[0]
                        , n = t[1]
                        , r = e.$type + ":" + e.fqn
                        , i = n && n.viewDecl.$context.name + ": " + n.viewDecl.$name + " (" + n.viewDecl.$type + ")";
                      return {
                          "ui-view fqn": r,
                          "state: view name": i
                      }
                  }).sort(function(t, e) {
                      return t["ui-view fqn"].localeCompare(e["ui-view fqn"])
                  });
                  Ue(n)
              }
          }
          ,
          e.prototype.traceViewServiceEvent = function(e, n) {
              this.enabled(t.Category.VIEWCONFIG) && console.log("VIEWCONFIG: " + e + " " + Ne(n))
          }
          ,
          e.prototype.traceViewServiceUIViewEvent = function(e, n) {
              this.enabled(t.Category.VIEWCONFIG) && console.log("VIEWCONFIG: " + e + " " + I(n))
          }
          ,
          e
      }()
        , Ye = new We;
      !function(t) {
          t[t.CREATE = 0] = "CREATE",
          t[t.BEFORE = 1] = "BEFORE",
          t[t.RUN = 2] = "RUN",
          t[t.SUCCESS = 3] = "SUCCESS",
          t[t.ERROR = 4] = "ERROR"
      }(t.TransitionHookPhase || (t.TransitionHookPhase = {})),
      function(t) {
          t[t.TRANSITION = 0] = "TRANSITION",
          t[t.STATE = 1] = "STATE"
      }(t.TransitionHookScope || (t.TransitionHookScope = {}));
      var Ke = function() {
          function t(t, e, n, r) {
              this._stateRegistry = t,
              this._identifier = e,
              this._identifier = e,
              this._params = me({}, n || {}),
              this._options = me({}, r || {}),
              this._definition = t.matcher.find(e, this._options.relative)
          }
          return t.prototype.name = function() {
              return this._definition && this._definition.name || this._identifier
          }
          ,
          t.prototype.identifier = function() {
              return this._identifier
          }
          ,
          t.prototype.params = function() {
              return this._params
          }
          ,
          t.prototype.$state = function() {
              return this._definition
          }
          ,
          t.prototype.state = function() {
              return this._definition && this._definition.self
          }
          ,
          t.prototype.options = function() {
              return this._options
          }
          ,
          t.prototype.exists = function() {
              return !(!this._definition || !this._definition.self)
          }
          ,
          t.prototype.valid = function() {
              return !this.error()
          }
          ,
          t.prototype.error = function() {
              var t = this.options().relative;
              if (!this._definition && t) {
                  var e = t.name ? t.name : t;
                  return "Could not resolve '" + this.name() + "' from state '" + e + "'"
              }
              return this._definition ? this._definition.self ? void 0 : "State '" + this.name() + "' has an invalid definition" : "No such state '" + this.name() + "'"
          }
          ,
          t.prototype.toString = function() {
              return "'" + this.name() + "'" + G(this.params())
          }
          ,
          t.prototype.withState = function(e) {
              return new t(this._stateRegistry,e,this._params,this._options)
          }
          ,
          t.prototype.withParams = function(e, n) {
              void 0 === n && (n = !1);
              var r = n ? e : me({}, this._params, e);
              return new t(this._stateRegistry,this._identifier,r,this._options)
          }
          ,
          t.prototype.withOptions = function(e, n) {
              void 0 === n && (n = !1);
              var r = n ? e : me({}, this._options, e);
              return new t(this._stateRegistry,this._identifier,this._params,r)
          }
          ,
          t.isDef = function(t) {
              return t && t.state && (ee(t.state) || ee(t.state.name))
          }
          ,
          t
      }()
        , Ge = {
          current: f,
          transition: null,
          traceData: {},
          bind: null
      }
        , Xe = function() {
          function e(e, n, r, i) {
              var o = this;
              this.transition = e,
              this.stateContext = n,
              this.registeredHook = r,
              this.options = i,
              this.isSuperseded = function() {
                  return o.type.hookPhase === t.TransitionHookPhase.RUN && !o.options.transition.isActive()
              }
              ,
              this.options = g(i, Ge),
              this.type = r.eventType
          }
          return e.prototype.logError = function(t) {
              this.transition.router.stateService.defaultErrorHandler()(t)
          }
          ,
          e.prototype.invokeHook = function() {
              var t = this
                , e = this.registeredHook;
              if (!e._deregistered) {
                  var n = this.getNotCurrentRejection();
                  if (n)
                      return n;
                  var r = this.options;
                  Ye.traceHookInvocation(this, this.transition, r);
                  var i = function() {
                      return e.callback.call(r.bind, t.transition, t.stateContext)
                  }
                    , o = function(t) {
                      return He.normalize(t).toPromise()
                  }
                    , a = function(n) {
                      return e.eventType.getErrorHandler(t)(n)
                  }
                    , s = function(n) {
                      return e.eventType.getResultHandler(t)(n)
                  };
                  try {
                      var u = i();
                      return !this.type.synchronous && se(u) ? u["catch"](o).then(s, a) : s(u)
                  } catch (c) {
                      return a(He.normalize(c))
                  } finally {
                      e.invokeLimit && ++e.invokeCount >= e.invokeLimit && e.deregister()
                  }
              }
          }
          ,
          e.prototype.handleHookResult = function(t) {
              var e = this
                , n = this.getNotCurrentRejection();
              if (n)
                  return n;
              if (se(t))
                  return t.then(function(t) {
                      return e.handleHookResult(t)
                  });
              if (Ye.traceHookResult(t, this.transition, this.options),
              t === !1)
                  return He.aborted("Hook aborted transition").toPromise();
              var r = Ut(Ke);
              return r(t) ? He.redirected(t).toPromise() : void 0
          }
          ,
          e.prototype.getNotCurrentRejection = function() {
              var t = this.transition.router;
              return t._disposed ? He.aborted("UIRouter instance #" + t.$id + " has been stopped (disposed)").toPromise() : this.transition._aborted ? He.aborted().toPromise() : this.isSuperseded() ? He.superseded(this.options.current()).toPromise() : void 0
          }
          ,
          e.prototype.toString = function() {
              var t = this
                , e = t.options
                , n = t.registeredHook
                , r = jt("traceData.hookType")(e) || "internal"
                , i = jt("traceData.context.state.name")(e) || jt("traceData.context")(e) || "unknown"
                , o = K(n.callback);
              return r + " context: " + i + ", " + B(200, o)
          }
          ,
          e.chain = function(t, e) {
              var n = function(t, e) {
                  return t.then(function() {
                      return e.invokeHook()
                  })
              };
              return t.reduce(n, e || ce.$q.when())
          }
          ,
          e.invokeHooks = function(t, n) {
              for (var r = 0; r < t.length; r++) {
                  var i = t[r].invokeHook();
                  if (se(i)) {
                      var o = t.slice(r + 1);
                      return e.chain(o, i).then(n)
                  }
              }
              return n()
          }
          ,
          e.runAllHooks = function(t) {
              t.forEach(function(t) {
                  return t.invokeHook()
              })
          }
          ,
          e.HANDLE_RESULT = function(t) {
              return function(e) {
                  return t.handleHookResult(e)
              }
          }
          ,
          e.LOG_REJECTED_RESULT = function(t) {
              return function(e) {
                  se(e) && e["catch"](function(e) {
                      return t.logError(He.normalize(e))
                  })
              }
          }
          ,
          e.LOG_ERROR = function(t) {
              return function(e) {
                  return t.logError(e)
              }
          }
          ,
          e.REJECT_ERROR = function() {
              return function(t) {
                  return Le(t)
              }
          }
          ,
          e.THROW_ERROR = function() {
              return function(t) {
                  throw t
              }
          }
          ,
          e
      }()
        , Je = function() {
          function e(t, e, n, r, i, o) {
              void 0 === o && (o = {}),
              this.tranSvc = t,
              this.eventType = e,
              this.callback = n,
              this.matchCriteria = r,
              this.removeHookFromRegistry = i,
              this.invokeCount = 0,
              this._deregistered = !1,
              this.priority = o.priority || 0,
              this.bind = o.bind || null,
              this.invokeLimit = o.invokeLimit
          }
          return e.prototype._matchingNodes = function(t, e) {
              if (e === !0)
                  return t;
              var n = t.filter(function(t) {
                  return L(t.state, e)
              });
              return n.length ? n : null
          }
          ,
          e.prototype._getDefaultMatchCriteria = function() {
              return T(this.tranSvc._pluginapi._getPathTypes(), function() {
                  return !0
              })
          }
          ,
          e.prototype._getMatchingNodes = function(e) {
              var n = this
                , r = me(this._getDefaultMatchCriteria(), this.matchCriteria)
                , i = _e(this.tranSvc._pluginapi._getPathTypes());
              return i.reduce(function(i, o) {
                  var a = o.scope === t.TransitionHookScope.STATE
                    , s = e[o.name] || []
                    , u = a ? s : [x(s)];
                  return i[o.name] = n._matchingNodes(u, r[o.name]),
                  i
              }, {})
          }
          ,
          e.prototype.matches = function(t) {
              var e = this._getMatchingNodes(t)
                , n = _e(e).every(l);
              return n ? e : null
          }
          ,
          e.prototype.deregister = function() {
              this.removeHookFromRegistry(this),
              this._deregistered = !0
          }
          ,
          e
      }()
        , Qe = function() {
          function e(t) {
              this.transition = t
          }
          return e.prototype.buildHooksForPhase = function(t) {
              var e = this
                , n = this.transition.router.transitionService;
              return n._pluginapi._getEvents(t).map(function(t) {
                  return e.buildHooks(t)
              }).reduce(Ce, []).filter(l)
          }
          ,
          e.prototype.buildHooks = function(e) {
              var n = this.transition
                , r = n.treeChanges()
                , i = this.getMatchingHooks(e, r);
              if (!i)
                  return [];
              var o = {
                  transition: n,
                  current: n.options().current
              }
                , a = function(i) {
                  var a = i.matches(r)
                    , s = a[e.criteriaMatchPath.name];
                  return s.map(function(r) {
                      var a = me({
                          bind: i.bind,
                          traceData: {
                              hookType: e.name,
                              context: r
                          }
                      }, o)
                        , s = e.criteriaMatchPath.scope === t.TransitionHookScope.STATE ? r.state.self : null
                        , u = new Xe(n,s,i,a);
                      return {
                          hook: i,
                          node: r,
                          transitionHook: u
                      }
                  })
              };
              return i.map(a).reduce(Ce, []).sort(j(e.reverseSort)).map(function(t) {
                  return t.transitionHook
              })
          }
          ,
          e.prototype.getMatchingHooks = function(e, n) {
              var r = e.hookPhase === t.TransitionHookPhase.CREATE
                , i = this.transition.router.transitionService
                , o = r ? [i] : [this.transition, i];
              return o.map(function(t) {
                  return t.getHooks(e.name)
              }).filter(Oe(re, "broken event named: " + e.name)).reduce(Ce, []).filter(function(t) {
                  return t.matches(n)
              })
          }
          ,
          e
      }()
        , Ze = function() {
          function t(t) {
              this.pattern = /.*/,
              this.inherit = !0,
              me(this, t)
          }
          return t.prototype.is = function() {
              return !0
          }
          ,
          t.prototype.encode = function(t) {
              return t
          }
          ,
          t.prototype.decode = function(t) {
              return t
          }
          ,
          t.prototype.equals = function(t, e) {
              return t == e
          }
          ,
          t.prototype.$subPattern = function() {
              var t = this.pattern.toString();
              return t.substr(1, t.length - 2)
          }
          ,
          t.prototype.toString = function() {
              return "{ParamType:" + this.name + "}"
          }
          ,
          t.prototype.$normalize = function(t) {
              return this.is(t) ? t : this.decode(t)
          }
          ,
          t.prototype.$asArray = function(t, e) {
              if (!t)
                  return this;
              if ("auto" === t && !e)
                  throw new Error("'auto' array mode is for query parameters only");
              return new H(this,t)
          }
          ,
          t
      }()
        , tn = Object.prototype.hasOwnProperty
        , en = function(t) {
          return 0 === ["value", "type", "squash", "array", "dynamic"].filter(tn.bind(t || {})).length
      };
      !function(t) {
          t[t.PATH = 0] = "PATH",
          t[t.SEARCH = 1] = "SEARCH",
          t[t.CONFIG = 2] = "CONFIG"
      }(t.DefType || (t.DefType = {}));
      var nn = function() {
          function e(e, n, r, i, o) {
              function a() {
                  var n = {
                      array: i === t.DefType.SEARCH ? "auto" : !1
                  }
                    , o = e.match(/\[\]$/) ? {
                      array: !0
                  } : {};
                  return me(n, o, r).array
              }
              r = N(r),
              n = V(r, n, i, e, o.paramTypes);
              var s = a();
              n = s ? n.$asArray(s, i === t.DefType.SEARCH) : n;
              var u = void 0 !== r.value || i === t.DefType.SEARCH
                , c = Xt(r.dynamic) ? !!r.dynamic : !!n.dynamic
                , l = Xt(r.raw) ? !!r.raw : !!n.raw
                , f = U(r, u, o.defaultSquashPolicy())
                , p = q(r, s, u, f)
                , d = Xt(r.inherit) ? !!r.inherit : !!n.inherit;
              me(this, {
                  id: e,
                  type: n,
                  location: i,
                  isOptional: u,
                  dynamic: c,
                  raw: l,
                  squash: f,
                  replace: p,
                  inherit: d,
                  array: s,
                  config: r
              })
          }
          return e.prototype.isDefaultValue = function(t) {
              return this.isOptional && this.type.equals(this.value(), t)
          }
          ,
          e.prototype.value = function(t) {
              var e = this
                , n = function() {
                  if (e._defaultValueCache)
                      return e._defaultValueCache.defaultValue;
                  if (!ce.$injector)
                      throw new Error("Injectable functions cannot be called at configuration time");
                  var t = ce.$injector.invoke(e.config.$$fn);
                  if (null !== t && void 0 !== t && !e.type.is(t))
                      throw new Error("Default value (" + t + ") for parameter '" + e.id + "' is not an instance of ParamType (" + e.type.name + ")");
                  return e.config.$$fn.__cacheable && (e._defaultValueCache = {
                      defaultValue: t
                  }),
                  t
              }
                , r = function(t) {
                  for (var n = 0, r = e.replace; n < r.length; n++) {
                      var i = r[n];
                      if (i.from === t)
                          return i.to
                  }
                  return t
              };
              return t = r(t),
              Gt(t) ? n() : this.type.$normalize(t)
          }
          ,
          e.prototype.isSearch = function() {
              return this.location === t.DefType.SEARCH
          }
          ,
          e.prototype.validates = function(t) {
              if ((Gt(t) || null === t) && this.isOptional)
                  return !0;
              var e = this.type.$normalize(t);
              if (!this.type.is(e))
                  return !1;
              var n = this.type.encode(e);
              return !(ee(n) && !this.type.pattern.exec(n))
          }
          ,
          e.prototype.toString = function() {
              return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}"
          }
          ,
          e.values = function(t, e) {
              void 0 === e && (e = {});
              for (var n = {}, r = 0, i = t; r < i.length; r++) {
                  var o = i[r];
                  n[o.id] = o.value(e[o.id])
              }
              return n
          }
          ,
          e.changed = function(t, e, n) {
              return void 0 === e && (e = {}),
              void 0 === n && (n = {}),
              t.filter(function(t) {
                  return !t.type.equals(e[t.id], n[t.id])
              })
          }
          ,
          e.equals = function(t, n, r) {
              return void 0 === n && (n = {}),
              void 0 === r && (r = {}),
              0 === e.changed(t, n, r).length
          }
          ,
          e.validates = function(t, e) {
              return void 0 === e && (e = {}),
              t.map(function(t) {
                  return t.validates(e[t.id])
              }).reduce(ke, !0)
          }
          ,
          e
      }()
        , rn = function() {
          function t(e) {
              if (e instanceof t) {
                  var n = e;
                  this.state = n.state,
                  this.paramSchema = n.paramSchema.slice(),
                  this.paramValues = me({}, n.paramValues),
                  this.resolvables = n.resolvables.slice(),
                  this.views = n.views && n.views.slice()
              } else {
                  var r = e;
                  this.state = r,
                  this.paramSchema = r.parameters({
                      inherit: !1
                  }),
                  this.paramValues = {},
                  this.resolvables = r.resolvables.map(function(t) {
                      return t.clone()
                  })
              }
          }
          return t.prototype.applyRawParams = function(t) {
              var e = function(e) {
                  return [e.id, e.value(t[e.id])]
              };
              return this.paramValues = this.paramSchema.reduce(function(t, n) {
                  return C(t, e(n))
              }, {}),
              this
          }
          ,
          t.prototype.parameter = function(t) {
              return S(this.paramSchema, Ft("id", t))
          }
          ,
          t.prototype.equals = function(t, e) {
              var n = this.diff(t, e);
              return n && 0 === n.length
          }
          ,
          t.prototype.diff = function(t, e) {
              if (this.state !== t.state)
                  return !1;
              var n = e ? e(this) : this.paramSchema;
              return nn.changed(n, this.paramValues, t.paramValues)
          }
          ,
          t.clone = function(e) {
              return new t(e)
          }
          ,
          t
      }()
        , on = function() {
          function t() {}
          return t.makeTargetState = function(t, e) {
              var n = x(e).state;
              return new Ke(t,n,e.map(Lt("paramValues")).reduce(Se, {}),{})
          }
          ,
          t.buildPath = function(t) {
              var e = t.params();
              return t.$state().path.map(function(t) {
                  return new rn(t).applyRawParams(e)
              })
          }
          ,
          t.buildToPath = function(e, n) {
              var r = t.buildPath(n);
              return n.options().inherit ? t.inheritParams(e, r, Object.keys(n.params())) : r
          }
          ,
          t.applyViewConfigs = function(e, n, r) {
              n.filter(function(t) {
                  return ye(r, t.state)
              }).forEach(function(r) {
                  var i = _e(r.state.views || {})
                    , o = t.subPath(n, function(t) {
                      return t === r
                  })
                    , a = i.map(function(t) {
                      return e.createViewConfig(o, t)
                  });
                  r.views = a.reduce(Ce, [])
              })
          }
          ,
          t.inheritParams = function(t, e, n) {
              function r(t, e) {
                  var n = S(t, Ft("state", e));
                  return me({}, n && n.paramValues)
              }
              function i(e) {
                  var i = me({}, e && e.paramValues)
                    , a = y(i, n);
                  i = b(i, n);
                  var s = b(r(t, e.state) || {}, o)
                    , u = me(i, s, a);
                  return new rn(e.state).applyRawParams(u)
              }
              void 0 === n && (n = []);
              var o = t.map(function(t) {
                  return t.paramSchema
              }).reduce(Ce, []).filter(function(t) {
                  return !t.inherit
              }).map(Lt("id"));
              return e.map(i)
          }
          ,
          t.treeChanges = function(e, n, r) {
              function i(t, e) {
                  var r = rn.clone(t);
                  return r.paramValues = n[e].paramValues,
                  r
              }
              for (var o = 0, a = Math.min(e.length, n.length), s = function(e, n) {
                  return e.equals(n, t.nonDynamicParams)
              }; a > o && e[o].state !== r && s(e[o], n[o]); )
                  o++;
              var u, c, l, f, p;
              u = e,
              c = u.slice(0, o),
              l = u.slice(o);
              var d = c.map(i);
              return f = n.slice(o),
              p = d.concat(f),
              {
                  from: u,
                  to: p,
                  retained: c,
                  exiting: l,
                  entering: f
              }
          }
          ,
          t.matching = function(t, e, n) {
              var r = !1
                , i = E(t, e);
              return i.reduce(function(t, e) {
                  var i = e[0]
                    , o = e[1];
                  return r = r || !i.equals(o, n),
                  r ? t : t.concat(i)
              }, [])
          }
          ,
          t.equals = function(e, n, r) {
              return e.length === n.length && t.matching(e, n, r).length === e.length
          }
          ,
          t.subPath = function(t, e) {
              var n = S(t, e)
                , r = t.indexOf(n);
              return -1 === r ? void 0 : t.slice(0, r + 1)
          }
          ,
          t.nonDynamicParams = function(t) {
              return t.state.parameters({
                  inherit: !1
              }).filter(function(t) {
                  return !t.dynamic
              })
          }
          ,
          t.paramValues = function(t) {
              return t.reduce(function(t, e) {
                  return me(t, e.paramValues)
              }, {})
          }
          ,
          t
      }()
        , an = {
          when: "LAZY",
          async: "WAIT"
      }
        , sn = function() {
          function t(e, n, r, i, o) {
              if (this.resolved = !1,
              this.promise = void 0,
              e instanceof t)
                  me(this, e);
              else if (Zt(n)) {
                  if (Qt(e))
                      throw new Error("new Resolvable(): token argument is required");
                  if (!Zt(n))
                      throw new Error("new Resolvable(): resolveFn argument must be a function");
                  this.token = e,
                  this.policy = i,
                  this.resolveFn = n,
                  this.deps = r || [],
                  this.data = o,
                  this.resolved = void 0 !== o,
                  this.promise = this.resolved ? ce.$q.when(this.data) : void 0
              } else if (ne(e) && e.token && Zt(e.resolveFn)) {
                  var a = e;
                  return new t(a.token,a.resolveFn,a.deps,a.policy,a.data)
              }
          }
          return t.prototype.getPolicy = function(t) {
              var e = this.policy || {}
                , n = t && t.resolvePolicy || {};
              return {
                  when: e.when || n.when || an.when,
                  async: e.async || n.async || an.async
              }
          }
          ,
          t.prototype.resolve = function(t, e) {
              var n = this
                , r = ce.$q
                , i = function() {
                  return r.all(t.getDependencies(n).map(function(n) {
                      return n.get(t, e)
                  }))
              }
                , o = function(t) {
                  return n.resolveFn.apply(null, t)
              }
                , a = function(t) {
                  var e = t.cache(1);
                  return e.take(1).toPromise().then(function() {
                      return e
                  })
              }
                , s = t.findNode(this)
                , u = s && s.state
                , c = "RXWAIT" === this.getPolicy(u).async ? a : l
                , f = function(t) {
                  return n.data = t,
                  n.resolved = !0,
                  Ye.traceResolvableResolved(n, e),
                  n.data
              };
              return this.promise = r.when().then(i).then(o).then(c).then(f)
          }
          ,
          t.prototype.get = function(t, e) {
              return this.promise || this.resolve(t, e)
          }
          ,
          t.prototype.toString = function() {
              return "Resolvable(token: " + G(this.token) + ", requires: [" + this.deps.map(G) + "])"
          }
          ,
          t.prototype.clone = function() {
              return new t(this)
          }
          ,
          t.fromData = function(e, n) {
              return new t(e,function() {
                  return n
              }
              ,null,null,n)
          }
          ,
          t
      }()
        , un = {
          when: {
              LAZY: "LAZY",
              EAGER: "EAGER"
          },
          async: {
              WAIT: "WAIT",
              NOWAIT: "NOWAIT",
              RXWAIT: "RXWAIT"
          }
      }
        , cn = un.when
        , ln = [cn.EAGER, cn.LAZY]
        , fn = [cn.EAGER]
        , pn = "Native Injector"
        , dn = function() {
          function t(t) {
              this._path = t
          }
          return t.prototype.getTokens = function() {
              return this._path.reduce(function(t, e) {
                  return t.concat(e.resolvables.map(function(t) {
                      return t.token
                  }))
              }, []).reduce(De, [])
          }
          ,
          t.prototype.getResolvable = function(t) {
              var e = this._path.map(function(t) {
                  return t.resolvables
              }).reduce(Ce, []).filter(function(e) {
                  return e.token === t
              });
              return x(e)
          }
          ,
          t.prototype.getPolicy = function(t) {
              var e = this.findNode(t);
              return t.getPolicy(e.state)
          }
          ,
          t.prototype.subContext = function(e) {
              return new t(on.subPath(this._path, function(t) {
                  return t.state === e
              }))
          }
          ,
          t.prototype.addResolvables = function(t, e) {
              var n = S(this._path, Ft("state", e))
                , r = t.map(function(t) {
                  return t.token
              });
              n.resolvables = n.resolvables.filter(function(t) {
                  return -1 === r.indexOf(t.token)
              }).concat(t)
          }
          ,
          t.prototype.resolvePath = function(t, e) {
              var n = this;
              void 0 === t && (t = "LAZY");
              var r = ye(ln, t) ? t : "LAZY"
                , i = r === un.when.EAGER ? fn : ln;
              Ye.traceResolvePath(this._path, t, e);
              var o = function(t, e) {
                  return function(r) {
                      return ye(t, n.getPolicy(r)[e])
                  }
              }
                , a = this._path.reduce(function(t, r) {
                  var a = r.resolvables.filter(o(i, "when"))
                    , s = a.filter(o(["NOWAIT"], "async"))
                    , u = a.filter(Ht(o(["NOWAIT"], "async")))
                    , c = n.subContext(r.state)
                    , l = function(t) {
                      return t.get(c, e).then(function(e) {
                          return {
                              token: t.token,
                              value: e
                          }
                      })
                  };
                  return s.forEach(l),
                  t.concat(u.map(l))
              }, []);
              return ce.$q.all(a)
          }
          ,
          t.prototype.injector = function() {
              return this._injector || (this._injector = new hn(this))
          }
          ,
          t.prototype.findNode = function(t) {
              return S(this._path, function(e) {
                  return ye(e.resolvables, t)
              })
          }
          ,
          t.prototype.getDependencies = function(t) {
              var e = this
                , n = this.findNode(t)
                , r = on.subPath(this._path, function(t) {
                  return t === n
              }) || this._path
                , i = r.reduce(function(t, e) {
                  return t.concat(e.resolvables)
              }, []).filter(function(e) {
                  return e !== t
              })
                , o = function(t) {
                  var n = i.filter(function(e) {
                      return e.token === t
                  });
                  if (n.length)
                      return x(n);
                  var r = e.injector().getNative(t);
                  if (Gt(r))
                      throw new Error("Could not find Dependency Injection token: " + G(t));
                  return new sn(t,function() {
                      return r
                  }
                  ,[],r)
              };
              return t.deps.map(o)
          }
          ,
          t
      }()
        , hn = function() {
          function t(t) {
              this.context = t,
              this["native"] = this.get(pn) || ce.$injector
          }
          return t.prototype.get = function(t) {
              var e = this.context.getResolvable(t);
              if (e) {
                  if ("NOWAIT" === this.context.getPolicy(e).async)
                      return e.get(this.context);
                  if (!e.resolved)
                      throw new Error("Resolvable async .get() not complete:" + G(e.token));
                  return e.data
              }
              return this.getNative(t)
          }
          ,
          t.prototype.getAsync = function(t) {
              var e = this.context.getResolvable(t);
              return e ? e.get(this.context) : ce.$q.when(this["native"].get(t))
          }
          ,
          t.prototype.getNative = function(t) {
              return this["native"] && this["native"].get(t)
          }
          ,
          t
      }()
        , mn = Lt("self")
        , gn = function() {
          function e(e, n, r) {
              var i = this;
              if (this._deferred = ce.$q.defer(),
              this.promise = this._deferred.promise,
              this._registeredHooks = {},
              this._hookBuilder = new Qe(this),
              this.isActive = function() {
                  return i.router.globals.transition === i
              }
              ,
              this.router = r,
              this._targetState = n,
              !n.valid())
                  throw new Error(n.error());
              this._options = me({
                  current: Bt(this)
              }, n.options()),
              this.$id = r.transitionService._transitionCount++;
              var o = on.buildToPath(e, n);
              this._treeChanges = on.treeChanges(e, o, this._options.reloadState),
              this.createTransitionHookRegFns();
              var a = this._hookBuilder.buildHooksForPhase(t.TransitionHookPhase.CREATE);
              Xe.invokeHooks(a, function() {
                  return null
              }),
              this.applyViewConfigs(r)
          }
          return e.prototype.onBefore = function() {}
          ,
          e.prototype.onStart = function() {}
          ,
          e.prototype.onExit = function() {}
          ,
          e.prototype.onRetain = function() {}
          ,
          e.prototype.onEnter = function() {}
          ,
          e.prototype.onFinish = function() {}
          ,
          e.prototype.onSuccess = function() {}
          ,
          e.prototype.onError = function() {}
          ,
          e.prototype.createTransitionHookRegFns = function() {
              var e = this;
              this.router.transitionService._pluginapi._getEvents().filter(function(e) {
                  return e.hookPhase !== t.TransitionHookPhase.CREATE
              }).forEach(function(t) {
                  return F(e, e.router.transitionService, t)
              })
          }
          ,
          e.prototype.getHooks = function(t) {
              return this._registeredHooks[t]
          }
          ,
          e.prototype.applyViewConfigs = function(t) {
              var e = this._treeChanges.entering.map(function(t) {
                  return t.state
              });
              on.applyViewConfigs(t.transitionService.$view, this._treeChanges.to, e)
          }
          ,
          e.prototype.$from = function() {
              return x(this._treeChanges.from).state
          }
          ,
          e.prototype.$to = function() {
              return x(this._treeChanges.to).state
          }
          ,
          e.prototype.from = function() {
              return this.$from().self
          }
          ,
          e.prototype.to = function() {
              return this.$to().self
          }
          ,
          e.prototype.targetState = function() {
              return this._targetState
          }
          ,
          e.prototype.is = function(t) {
              return t instanceof e ? this.is({
                  to: t.$to().name,
                  from: t.$from().name
              }) : !(t.to && !L(this.$to(), t.to) || t.from && !L(this.$from(), t.from))
          }
          ,
          e.prototype.params = function(t) {
              return void 0 === t && (t = "to"),
              Object.freeze(this._treeChanges[t].map(Lt("paramValues")).reduce(Se, {}))
          }
          ,
          e.prototype.injector = function(t, e) {
              void 0 === e && (e = "to");
              var n = this._treeChanges[e];
              return t && (n = on.subPath(n, function(e) {
                  return e.state === t || e.state.name === t
              })),
              new dn(n).injector()
          }
          ,
          e.prototype.getResolveTokens = function(t) {
              return void 0 === t && (t = "to"),
              new dn(this._treeChanges[t]).getTokens()
          }
          ,
          e.prototype.addResolvable = function(t, e) {
              void 0 === e && (e = ""),
              t = Ut(sn)(t) ? t : new sn(t);
              var n = "string" == typeof e ? e : e.name
                , r = this._treeChanges.to
                , i = S(r, function(t) {
                  return t.state.name === n
              })
                , o = new dn(r);
              o.addResolvables([t], i.state)
          }
          ,
          e.prototype.redirectedFrom = function() {
              return this._options.redirectedFrom || null
          }
          ,
          e.prototype.originalTransition = function() {
              var t = this.redirectedFrom();
              return t && t.originalTransition() || this
          }
          ,
          e.prototype.options = function() {
              return this._options
          }
          ,
          e.prototype.entering = function() {
              return T(this._treeChanges.entering, Lt("state")).map(mn)
          }
          ,
          e.prototype.exiting = function() {
              return T(this._treeChanges.exiting, Lt("state")).map(mn).reverse()
          }
          ,
          e.prototype.retained = function() {
              return T(this._treeChanges.retained, Lt("state")).map(mn)
          }
          ,
          e.prototype.views = function(t, e) {
              void 0 === t && (t = "entering");
              var n = this._treeChanges[t];
              return n = e ? n.filter(Ft("state", e)) : n,
              n.map(Lt("views")).filter(l).reduce(Ce, [])
          }
          ,
          e.prototype.treeChanges = function(t) {
              return t ? this._treeChanges[t] : this._treeChanges
          }
          ,
          e.prototype.redirect = function(t) {
              for (var e = 1, n = this; null != (n = n.redirectedFrom()); )
                  if (++e > 20)
                      throw new Error("Too many consecutive Transition redirects (20+)");
              var r = {
                  redirectedFrom: this,
                  source: "redirect"
              };
              "url" === this.options().source && t.options().location !== !1 && (r.location = "replace");
              var i = me({}, this.options(), t.options(), r);
              t = t.withOptions(i, !0);
              var o = this.router.transitionService.create(this._treeChanges.from, t)
                , a = this._treeChanges.entering
                , s = o._treeChanges.entering
                , u = function(t) {
                  return function(e) {
                      return t && e.state.includes[t.name]
                  }
              }
                , c = on.matching(s, a, on.nonDynamicParams).filter(Ht(u(t.options().reloadState)));
              return c.forEach(function(t, e) {
                  t.resolvables = a[e].resolvables
              }),
              o
          }
          ,
          e.prototype._changedParams = function() {
              var t = this._treeChanges;
              if (!this._options.reload && !t.exiting.length && !t.entering.length && t.to.length === t.from.length) {
                  var e = E(t.to, t.from).map(function(t) {
                      return t[0].state !== t[1].state
                  }).reduce(Ee, !1);
                  if (!e) {
                      var n = t.to.map(function(t) {
                          return t.paramSchema
                      })
                        , r = [t.to, t.from].map(function(t) {
                          return t.map(function(t) {
                              return t.paramValues
                          })
                      })
                        , i = r[0]
                        , o = r[1]
                        , a = E(n, i, o);
                      return a.map(function(t) {
                          var e = t[0]
                            , n = t[1]
                            , r = t[2];
                          return nn.changed(e, n, r)
                      }).reduce(Ce, [])
                  }
              }
          }
          ,
          e.prototype.dynamic = function() {
              var t = this._changedParams();
              return t ? t.map(function(t) {
                  return t.dynamic
              }).reduce(Ee, !1) : !1
          }
          ,
          e.prototype.ignored = function() {
              return !!this._ignoredReason()
          }
          ,
          e.prototype._ignoredReason = function() {
              var t = this.router.globals.transition
                , e = this._options.reloadState
                , n = function(t, n) {
                  if (t.length !== n.length)
                      return !1;
                  var r = on.matching(t, n);
                  return t.length === r.filter(function(t) {
                      return !e || !t.state.includes[e.name]
                  }).length
              }
                , r = this.treeChanges()
                , i = t && t.treeChanges();
              return i && n(i.to, r.to) && n(i.exiting, r.exiting) ? "SameAsPending" : 0 === r.exiting.length && 0 === r.entering.length && n(r.from, r.to) ? "SameAsCurrent" : void 0
          }
          ,
          e.prototype.run = function() {
              var e = this
                , n = Xe.runAllHooks
                , r = function(t) {
                  return e._hookBuilder.buildHooksForPhase(t)
              }
                , i = function() {
                  Ye.traceSuccess(e.$to(), e),
                  e.success = !0,
                  e._deferred.resolve(e.to()),
                  n(r(t.TransitionHookPhase.SUCCESS))
              }
                , o = function(i) {
                  Ye.traceError(i, e),
                  e.success = !1,
                  e._deferred.reject(i),
                  e._error = i,
                  n(r(t.TransitionHookPhase.ERROR))
              }
                , a = function() {
                  var e = r(t.TransitionHookPhase.RUN)
                    , n = function() {
                      return ce.$q.when(void 0)
                  };
                  return Xe.invokeHooks(e, n)
              }
                , s = function() {
                  var t = e.router.globals;
                  return t.lastStartedTransitionId = e.$id,
                  t.transition = e,
                  t.transitionHistory.enqueue(e),
                  Ye.traceTransitionStart(e),
                  ce.$q.when(void 0)
              }
                , u = r(t.TransitionHookPhase.BEFORE);
              return Xe.invokeHooks(u, s).then(a).then(i, o),
              this.promise
          }
          ,
          e.prototype.valid = function() {
              return !this.error() || void 0 !== this.success
          }
          ,
          e.prototype.abort = function() {
              Gt(this.success) && (this._aborted = !0)
          }
          ,
          e.prototype.error = function() {
              var t = this.$to();
              if (t.self["abstract"])
                  return "Cannot transition to abstract state '" + t.name + "'";
              var e = t.parameters()
                , n = this.params()
                , r = e.filter(function(t) {
                  return !t.validates(n[t.id])
              });
              return r.length ? "Param values not valid for state '" + t.name + "'. Invalid params: [ " + r.map(function(t) {
                  return t.id
              }).join(", ") + " ]" : this.success === !1 ? this._error : void 0
          }
          ,
          e.prototype.toString = function() {
              var t = this.from()
                , e = this.to()
                , n = function(t) {
                  return null !== t["#"] && void 0 !== t["#"] ? t : b(t, ["#"])
              }
                , r = this.$id
                , i = ne(t) ? t.name : t
                , o = G(n(this._treeChanges.from.map(Lt("paramValues")).reduce(Se, {})))
                , a = this.valid() ? "" : "(X) "
                , s = ne(e) ? e.name : e
                , u = G(n(this.params()));
              return "Transition#" + r + "( '" + i + "'" + o + " -> " + a + "'" + s + "'" + u + " )"
          }
          ,
          e.diToken = e,
          e
      }()
        , vn = null
        , yn = function(t) {
          var e = He.isRejectionPromise;
          return (vn = vn || u([[Ht(Xt), Bt("undefined")], [Jt, Bt("null")], [se, Bt("[Promise]")], [e, function(t) {
              return t._transitionRejection.toString()
          }
          ], [Ut(He), s("toString")], [Ut(gn), s("toString")], [Ut(sn), s("toString")], [c, Y], [Bt(!0), l]]))(t)
      }
        , bn = function(t) {
          return function(e) {
              if (!e)
                  return ["", ""];
              var n = e.indexOf(t);
              return -1 === n ? [e, ""] : [e.substr(0, n), e.substr(n + 1)]
          }
      }
        , $n = new RegExp("^(?:[a-z]+:)?//[^/]+/")
        , wn = function(t) {
          return t.replace(/\/[^\/]*$/, "")
      }
        , Sn = bn("#")
        , Tn = bn("?")
        , _n = bn("=")
        , kn = function(t) {
          return t ? t.replace(/^#/, "") : ""
      }
        , En = function() {
          function t() {
              this.enqueue = !0,
              this.typeQueue = [],
              this.defaultTypes = y(t.prototype, ["hash", "string", "query", "path", "int", "bool", "date", "json", "any"]);
              var e = function(t, e) {
                  return new Ze(me({
                      name: e
                  }, t))
              };
              this.types = ve(T(this.defaultTypes, e), {})
          }
          return t.prototype.dispose = function() {
              this.types = {}
          }
          ,
          t.prototype.type = function(t, e, n) {
              if (!Xt(e))
                  return this.types[t];
              if (this.types.hasOwnProperty(t))
                  throw new Error("A type named '" + t + "' has already been defined.");
              return this.types[t] = new Ze(me({
                  name: t
              }, e)),
              n && (this.typeQueue.push({
                  name: t,
                  def: n
              }),
              this.enqueue || this._flushTypeQueue()),
              this
          }
          ,
          t.prototype._flushTypeQueue = function() {
              for (; this.typeQueue.length; ) {
                  var t = this.typeQueue.shift();
                  if (t.pattern)
                      throw new Error("You cannot override a type's .pattern at runtime.");
                  me(this.types[t.name], ce.$injector.invoke(t.def))
              }
          }
          ,
          t
      }();
      Q();
      var Cn, xn = function() {
          function t(t) {
              void 0 === t && (t = {}),
              me(this, t)
          }
          return t.prototype.$inherit = function(t, e, n) {
              var r, i = v(e, n), o = {}, a = [];
              for (var s in i)
                  if (i[s] && i[s].params && (r = Object.keys(i[s].params),
                  r.length))
                      for (var u in r)
                          a.indexOf(r[u]) >= 0 || (a.push(r[u]),
                          o[r[u]] = this[r[u]]);
              return me({}, o, t)
          }
          ,
          t
      }(), Dn = function(t) {
          if (!ee(t))
              return !1;
          var e = "^" === t.charAt(0);
          return {
              val: e ? t.substring(1) : t,
              root: e
          }
      }, Pn = function(t, e) {
          return function(n) {
              var r = n;
              r && r.url && r.name && r.name.match(/\.\*\*$/) && (r.url += "{remainder:any}");
              var i = Dn(r.url)
                , o = n.parent
                , a = i ? t.compile(i.val, {
                  params: n.params || {},
                  paramMap: function(t, e) {
                      return r.reloadOnSearch === !1 && e && (t = me(t || {}, {
                          dynamic: !0
                      })),
                      t
                  }
              }) : r.url;
              if (!a)
                  return null;
              if (!t.isMatcher(a))
                  throw new Error("Invalid url '" + a + "' in state '" + n + "'");
              return i && i.root ? a : (o && o.navigable || e()).url.append(a)
          }
      }, An = function(t) {
          return function(e) {
              return !t(e) && e.url ? e : e.parent ? e.parent.navigable : null
          }
      }, On = function(t) {
          return function(e) {
              var n = function(e, n) {
                  return t.fromConfig(n, null, e)
              }
                , r = e.url && e.url.parameters({
                  inherit: !1
              }) || []
                , i = _e(Te(b(e.params || {}, r.map(Lt("id"))), n));
              return r.concat(i).map(function(t) {
                  return [t.id, t]
              }).reduce(C, {})
          }
      }, Rn = function() {
          function t(t, e) {
              function n(e) {
                  return o(e) ? null : t.find(r.parentName(e)) || i()
              }
              this.matcher = t;
              var r = this
                , i = function() {
                  return t.find("")
              }
                , o = function(t) {
                  return "" === t.name
              };
              this.builders = {
                  name: [Z],
                  self: [tt],
                  parent: [n],
                  data: [et],
                  url: [Pn(e, i)],
                  navigable: [An(o)],
                  params: [On(e.paramFactory)],
                  views: [],
                  path: [nt],
                  includes: [rt],
                  resolvables: [it]
              }
          }
          return t.prototype.builder = function(t, e) {
              var n = this.builders
                , r = n[t] || [];
              return ee(t) && !Xt(e) ? r.length > 1 ? r : r[0] : ee(t) && Zt(e) ? (n[t] = r,
              n[t].push(e),
              function() {
                  return n[t].splice(n[t].indexOf(e, 1)) && null
              }
              ) : void 0
          }
          ,
          t.prototype.build = function(t) {
              var e = this
                , n = e.matcher
                , r = e.builders
                , i = this.parentName(t);
              if (i && !n.find(i, void 0, !1))
                  return null;
              for (var o in r)
                  if (r.hasOwnProperty(o)) {
                      var a = r[o].reduce(function(t, e) {
                          return function(n) {
                              return e(n, t)
                          }
                      }, f);
                      t[o] = a(t)
                  }
              return t
          }
          ,
          t.prototype.parentName = function(t) {
              var e = t.name || ""
                , n = e.split(".")
                , r = n.pop();
              if ("**" === r && n.pop(),
              n.length) {
                  if (t.parent)
                      throw new Error("States that specify the 'parent:' property should not have a '.' in their name (" + e + ")");
                  return n.join(".")
              }
              return t.parent ? ee(t.parent) ? t.parent : t.parent.name : ""
          }
          ,
          t.prototype.name = function(t) {
              var e = t.name;
              if (-1 !== e.indexOf(".") || !t.parent)
                  return e;
              var n = ee(t.parent) ? t.parent : t.parent.name;
              return n ? n + "." + e : e
          }
          ,
          t
      }(), In = function() {
          function t(t) {
              this._states = t
          }
          return t.prototype.isRelative = function(t) {
              return t = t || "",
              0 === t.indexOf(".") || 0 === t.indexOf("^")
          }
          ,
          t.prototype.find = function(t, e, n) {
              if (void 0 === n && (n = !0),
              t || "" === t) {
                  var r = ee(t)
                    , i = r ? t : t.name;
                  this.isRelative(i) && (i = this.resolvePath(i, e));
                  var o = this._states[i];
                  if (o && (r || !(r || o !== t && o.self !== t)))
                      return o;
                  if (r && n) {
                      var a = _e(this._states)
                        , s = a.filter(function(t) {
                          return t.__stateObjectCache.nameGlob && t.__stateObjectCache.nameGlob.matches(i)
                      });
                      return s.length > 1 && console.log("stateMatcher.find: Found multiple matches for " + i + " using glob: ", s.map(function(t) {
                          return t.name
                      })),
                      s[0]
                  }
              }
          }
          ,
          t.prototype.resolvePath = function(t, e) {
              if (!e)
                  throw new Error("No reference point given for path '" + t + "'");
              for (var n = this.find(e), r = t.split("."), i = 0, o = r.length, a = n; o > i; i++)
                  if ("" !== r[i] || 0 !== i) {
                      if ("^" !== r[i])
                          break;
                      if (!a.parent)
                          throw new Error("Path '" + t + "' not valid for state '" + n.name + "'");
                      a = a.parent
                  } else
                      a = n;
              var s = r.slice(i).join(".");
              return a.name + (a.name && s ? "." : "") + s
          }
          ,
          t
      }(), Mn = function() {
          function t(t, e, n, r, i) {
              this.$registry = t,
              this.$urlRouter = e,
              this.states = n,
              this.builder = r,
              this.listeners = i,
              this.queue = [],
              this.matcher = t.matcher
          }
          return t.prototype.dispose = function() {
              this.queue = []
          }
          ,
          t.prototype.register = function(t) {
              var e = this.queue
                , n = Wt.create(t)
                , r = n.name;
              if (!ee(r))
                  throw new Error("State must have a valid name");
              if (this.states.hasOwnProperty(r) || ye(e.map(Lt("name")), r))
                  throw new Error("State '" + r + "' is already defined");
              return e.push(n),
              this.flush(),
              n
          }
          ,
          t.prototype.flush = function() {
              for (var t = this, e = this, n = e.queue, r = e.states, i = e.builder, o = [], a = [], s = {}, u = function(e) {
                  return t.states.hasOwnProperty(e) && t.states[e]
              }; n.length > 0; ) {
                  var c = n.shift()
                    , l = c.name
                    , f = i.build(c)
                    , p = a.indexOf(c);
                  if (f) {
                      var d = u(l);
                      if (d && d.name === l)
                          throw new Error("State '" + l + "' is already defined");
                      var h = u(l + ".**");
                      h && this.$registry.deregister(h),
                      r[l] = c,
                      this.attachRoute(c),
                      p >= 0 && a.splice(p, 1),
                      o.push(c)
                  } else {
                      var m = s[l];
                      if (s[l] = n.length,
                      p >= 0 && m === n.length)
                          return n.push(c),
                          r;
                      0 > p && a.push(c),
                      n.push(c)
                  }
              }
              return o.length && this.listeners.forEach(function(t) {
                  return t("registered", o.map(function(t) {
                      return t.self
                  }))
              }),
              r
          }
          ,
          t.prototype.attachRoute = function(t) {
              !t["abstract"] && t.url && this.$urlRouter.rule(this.$urlRouter.urlRuleFactory.create(t))
          }
          ,
          t
      }(), Ln = function() {
          function t(t) {
              this._router = t,
              this.states = {},
              this.listeners = [],
              this.matcher = new In(this.states),
              this.builder = new Rn(this.matcher,t.urlMatcherFactory),
              this.stateQueue = new Mn(this,t.urlRouter,this.states,this.builder,this.listeners),
              this._registerRoot()
          }
          return t.prototype._registerRoot = function() {
              var t = {
                  name: "",
                  url: "^",
                  views: null,
                  params: {
                      "#": {
                          value: null,
                          type: "hash",
                          dynamic: !0
                      }
                  },
                  "abstract": !0
              }
                , e = this._root = this.stateQueue.register(t);
              e.navigable = null
          }
          ,
          t.prototype.dispose = function() {
              var t = this;
              this.stateQueue.dispose(),
              this.listeners = [],
              this.get().forEach(function(e) {
                  return t.get(e) && t.deregister(e)
              })
          }
          ,
          t.prototype.onStatesChanged = function(t) {
              return this.listeners.push(t),
              function() {
                  be(this.listeners)(t)
              }
              .bind(this)
          }
          ,
          t.prototype.root = function() {
              return this._root
          }
          ,
          t.prototype.register = function(t) {
              return this.stateQueue.register(t)
          }
          ,
          t.prototype._deregisterTree = function(t) {
              var e = this
                , n = this.get().map(function(t) {
                  return t.$$state()
              })
                , r = function(t) {
                  var e = n.filter(function(e) {
                      return -1 !== t.indexOf(e.parent)
                  });
                  return 0 === e.length ? e : e.concat(r(e))
              }
                , i = r([t])
                , o = [t].concat(i).reverse();
              return o.forEach(function(t) {
                  var n = e._router.urlRouter;
                  n.rules().filter(Ft("state", t)).forEach(n.removeRule.bind(n)),
                  delete e.states[t.name]
              }),
              o
          }
          ,
          t.prototype.deregister = function(t) {
              var e = this.get(t);
              if (!e)
                  throw new Error("Can't deregister state; not found: " + t);
              var n = this._deregisterTree(e.$$state());
              return this.listeners.forEach(function(t) {
                  return t("deregistered", n.map(function(t) {
                      return t.self
                  }))
              }),
              n
          }
          ,
          t.prototype.get = function(t, e) {
              var n = this;
              if (0 === arguments.length)
                  return Object.keys(this.states).map(function(t) {
                      return n.states[t].self
                  });
              var r = this.matcher.find(t, e);
              return r && r.self || null
          }
          ,
          t.prototype.decorator = function(t, e) {
              return this.builder.builder(t, e)
          }
          ,
          t
      }(), Fn = function(t, e, n) {
          return t[e] = t[e] || n()
      }, jn = X("/"), Hn = function() {
          function e(t, n, r, i) {
              var o = this;
              this.config = i,
              this._cache = {
                  path: [this]
              },
              this._children = [],
              this._params = [],
              this._segments = [],
              this._compiled = [],
              this.pattern = t,
              this.config = g(this.config, {
                  params: {},
                  strict: !0,
                  caseInsensitive: !1,
                  paramMap: l
              });
              for (var a, s, u, c = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, f = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, p = 0, d = [], h = function(n) {
                  if (!e.nameValidator.test(n))
                      throw new Error("Invalid parameter name '" + n + "' in pattern '" + t + "'");
                  if (S(o._params, Ft("id", n)))
                      throw new Error("Duplicate parameter name '" + n + "' in pattern '" + t + "'")
              }, m = function(e, r) {
                  var i = e[2] || e[3]
                    , a = r ? e[4] : e[4] || ("*" === e[1] ? "[\\s\\S]*" : null)
                    , s = function(t) {
                      return ve(n.type(r ? "query" : "path"), {
                          pattern: new RegExp(t,o.config.caseInsensitive ? "i" : void 0)
                      })
                  };
                  return {
                      id: i,
                      regexp: a,
                      cfg: o.config.params[i],
                      segment: t.substring(p, e.index),
                      type: a ? n.type(a) || s(a) : null
                  }
              }; (a = c.exec(t)) && (s = m(a, !1),
              !(s.segment.indexOf("?") >= 0)); )
                  h(s.id),
                  this._params.push(r.fromPath(s.id, s.type, this.config.paramMap(s.cfg, !1))),
                  this._segments.push(s.segment),
                  d.push([s.segment, x(this._params)]),
                  p = c.lastIndex;
              u = t.substring(p);
              var v = u.indexOf("?");
              if (v >= 0) {
                  var y = u.substring(v);
                  if (u = u.substring(0, v),
                  y.length > 0)
                      for (p = 0; a = f.exec(y); )
                          s = m(a, !0),
                          h(s.id),
                          this._params.push(r.fromSearch(s.id, s.type, this.config.paramMap(s.cfg, !0))),
                          p = c.lastIndex
              }
              this._segments.push(u),
              this._compiled = d.map(function(t) {
                  return ot.apply(null, t)
              }).concat(ot(u))
          }
          return e.prototype.append = function(t) {
              return this._children.push(t),
              t._cache = {
                  path: this._cache.path.concat(t),
                  parent: this,
                  pattern: null
              },
              t
          }
          ,
          e.prototype.isRoot = function() {
              return this._cache.path[0] === this
          }
          ,
          e.prototype.toString = function() {
              return this.pattern
          }
          ,
          e.prototype.exec = function(t, e, n, r) {
              function i(t) {
                  var e = function(t) {
                      return t.split("").reverse().join("")
                  }
                    , n = function(t) {
                      return t.replace(/\\-/g, "-")
                  }
                    , r = e(t).split(/-(?!\\)/)
                    , i = T(r, e);
                  return T(i, n).reverse()
              }
              var o = this;
              void 0 === e && (e = {}),
              void 0 === r && (r = {});
              var a = Fn(this._cache, "pattern", function() {
                  return new RegExp(["^", Pe(o._cache.path.map(Lt("_compiled"))).join(""), o.config.strict === !1 ? "/?" : "", "$"].join(""),o.config.caseInsensitive ? "i" : void 0)
              }).exec(t);
              if (!a)
                  return null;
              var s = this.parameters()
                , u = s.filter(function(t) {
                  return !t.isSearch()
              })
                , c = s.filter(function(t) {
                  return t.isSearch()
              })
                , l = this._cache.path.map(function(t) {
                  return t._segments.length - 1
              }).reduce(function(t, e) {
                  return t + e
              })
                , f = {};
              if (l !== a.length - 1)
                  throw new Error("Unbalanced capture group in route '" + this.pattern + "'");
              for (var p = 0; l > p; p++) {
                  for (var d = u[p], h = a[p + 1], m = 0; m < d.replace.length; m++)
                      d.replace[m].from === h && (h = d.replace[m].to);
                  h && d.array === !0 && (h = i(h)),
                  Xt(h) && (h = d.type.decode(h)),
                  f[d.id] = d.value(h)
              }
              return c.forEach(function(t) {
                  for (var n = e[t.id], r = 0; r < t.replace.length; r++)
                      t.replace[r].from === n && (n = t.replace[r].to);
                  Xt(n) && (n = t.type.decode(n)),
                  f[t.id] = t.value(n)
              }),
              n && (f["#"] = n),
              f
          }
          ,
          e.prototype.parameters = function(t) {
              return void 0 === t && (t = {}),
              t.inherit === !1 ? this._params : Pe(this._cache.path.map(function(t) {
                  return t._params
              }))
          }
          ,
          e.prototype.parameter = function(t, e) {
              var n = this;
              void 0 === e && (e = {});
              var r = function() {
                  for (var e = 0, r = n._params; e < r.length; e++) {
                      var i = r[e];
                      if (i.id === t)
                          return i
                  }
              }
                , i = this._cache.parent;
              return r() || e.inherit !== !1 && i && i.parameter(t, e) || null
          }
          ,
          e.prototype.validates = function(t) {
              var e = function(t, e) {
                  return !t || t.validates(e)
              };
              t = t || {};
              var n = this.parameters().filter(function(e) {
                  return t.hasOwnProperty(e.id)
              });
              return n.map(function(n) {
                  return e(n, t[n.id])
              }).reduce(ke, !0)
          }
          ,
          e.prototype.format = function(t) {
              function n(e) {
                  var n = e.value(t[e.id])
                    , r = e.validates(n)
                    , i = e.isDefaultValue(n)
                    , o = i ? e.squash : !1
                    , a = e.type.encode(n);
                  return {
                      param: e,
                      value: n,
                      isValid: r,
                      isDefaultValue: i,
                      squash: o,
                      encoded: a
                  }
              }
              void 0 === t && (t = {});
              var r = this._cache.path
                , i = r.map(e.pathSegmentsAndParams).reduce(Ce, []).map(function(t) {
                  return ee(t) ? t : n(t)
              })
                , o = r.map(e.queryParams).reduce(Ce, []).map(n)
                , a = function(t) {
                  return t.isValid === !1
              };
              if (i.concat(o).filter(a).length)
                  return null;
              var s = i.reduce(function(t, n) {
                  if (ee(n))
                      return t + n;
                  var r = n.squash
                    , i = n.encoded
                    , o = n.param;
                  return r === !0 ? t.match(/\/$/) ? t.slice(0, -1) : t : ee(r) ? t + r : r !== !1 ? t : null == i ? t : re(i) ? t + T(i, e.encodeDashes).join("-") : o.raw ? t + i : t + encodeURIComponent(i)
              }, "")
                , u = o.map(function(t) {
                  var e = t.param
                    , n = t.squash
                    , r = t.encoded
                    , i = t.isDefaultValue;
                  if (!(null == r || i && n !== !1) && (re(r) || (r = [r]),
                  0 !== r.length))
                      return e.raw || (r = T(r, encodeURIComponent)),
                      r.map(function(t) {
                          return e.id + "=" + t
                      })
              }).filter(l).reduce(Ce, []).join("&");
              return s + (u ? "?" + u : "") + (t["#"] ? "#" + t["#"] : "")
          }
          ,
          e.encodeDashes = function(t) {
              return encodeURIComponent(t).replace(/-/g, function(t) {
                  return "%5C%" + t.charCodeAt(0).toString(16).toUpperCase()
              })
          }
          ,
          e.pathSegmentsAndParams = function(e) {
              var n = e._segments
                , r = e._params.filter(function(e) {
                  return e.location === t.DefType.PATH
              });
              return E(n, r.concat(void 0)).reduce(Ce, []).filter(function(t) {
                  return "" !== t && Xt(t)
              })
          }
          ,
          e.queryParams = function(e) {
              return e._params.filter(function(e) {
                  return e.location === t.DefType.SEARCH
              })
          }
          ,
          e.compare = function(t, n) {
              var r = function(t) {
                  return t._cache.segments = t._cache.segments || t._cache.path.map(e.pathSegmentsAndParams).reduce(Ce, []).reduce(J, []).map(function(t) {
                      return ee(t) ? jn(t) : t
                  }).reduce(Ce, [])
              }
                , i = function(t) {
                  return t._cache.weights = t._cache.weights || r(t).map(function(t) {
                      return "/" === t ? 1 : ee(t) ? 2 : t instanceof nn ? 3 : void 0
                  })
              }
                , o = function(t, e, n) {
                  for (var r = Math.max(t.length, e.length); t.length < r; )
                      t.push(n);
                  for (; e.length < r; )
                      e.push(n)
              }
                , a = i(t)
                , s = i(n);
              o(a, s, 0);
              var u, c, l = E(a, s);
              for (c = 0; c < l.length; c++)
                  if (u = l[c][0] - l[c][1],
                  0 !== u)
                      return u;
              return 0
          }
          ,
          e.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/,
          e
      }(), Nn = function() {
          function e() {
              var e = this;
              this.paramTypes = new En,
              this._isCaseInsensitive = !1,
              this._isStrictMode = !0,
              this._defaultSquashPolicy = !1,
              this._getConfig = function(t) {
                  return me({
                      strict: e._isStrictMode,
                      caseInsensitive: e._isCaseInsensitive
                  }, t)
              }
              ,
              this.paramFactory = {
                  fromConfig: function(n, r, i) {
                      return new nn(n,r,i,t.DefType.CONFIG,e)
                  },
                  fromPath: function(n, r, i) {
                      return new nn(n,r,i,t.DefType.PATH,e)
                  },
                  fromSearch: function(n, r, i) {
                      return new nn(n,r,i,t.DefType.SEARCH,e)
                  }
              },
              me(this, {
                  UrlMatcher: Hn,
                  Param: nn
              })
          }
          return e.prototype.caseInsensitive = function(t) {
              return this._isCaseInsensitive = Xt(t) ? t : this._isCaseInsensitive
          }
          ,
          e.prototype.strictMode = function(t) {
              return this._isStrictMode = Xt(t) ? t : this._isStrictMode
          }
          ,
          e.prototype.defaultSquashPolicy = function(t) {
              if (Xt(t) && t !== !0 && t !== !1 && !ee(t))
                  throw new Error("Invalid squash policy: " + t + ". Valid policies: false, true, arbitrary-string");
              return this._defaultSquashPolicy = Xt(t) ? t : this._defaultSquashPolicy
          }
          ,
          e.prototype.compile = function(t, e) {
              return new Hn(t,this.paramTypes,this.paramFactory,this._getConfig(e))
          }
          ,
          e.prototype.isMatcher = function(t) {
              if (!ne(t))
                  return !1;
              var e = !0;
              return he(Hn.prototype, function(n, r) {
                  Zt(n) && (e = e && Xt(t[r]) && Zt(t[r]))
              }),
              e
          }
          ,
          e.prototype.type = function(t, e, n) {
              var r = this.paramTypes.type(t, e, n);
              return Xt(e) ? this : r
          }
          ,
          e.prototype.$get = function() {
              return this.paramTypes.enqueue = !1,
              this.paramTypes._flushTypeQueue(),
              this
          }
          ,
          e.prototype.dispose = function() {
              this.paramTypes.dispose()
          }
          ,
          e
      }(), Vn = function() {
          function t(t) {
              this.router = t
          }
          return t.prototype.compile = function(t) {
              return this.router.urlMatcherFactory.compile(t)
          }
          ,
          t.prototype.create = function(t, e) {
              var n = this
                , r = u([[ee, function(t) {
                  return r(n.compile(t))
              }
              ], [Ut(Hn), function(t) {
                  return n.fromUrlMatcher(t, e)
              }
              ], [ae, function(t) {
                  return n.fromState(t, n.router)
              }
              ], [Ut(RegExp), function(t) {
                  return n.fromRegExp(t, e)
              }
              ], [Zt, function(t) {
                  return new Un(t,e)
              }
              ]])
                , i = r(t);
              if (!i)
                  throw new Error("invalid 'what' in when()");
              return i
          }
          ,
          t.prototype.fromUrlMatcher = function(t, e) {
              function n(e) {
                  var n = t.exec(e.path, e.search, e.hash);
                  return t.validates(n) && n
              }
              function r(e) {
                  var n = t.parameters().filter(function(t) {
                      return t.isOptional
                  });
                  if (!n.length)
                      return 1e-6;
                  var r = n.filter(function(t) {
                      return e[t.id]
                  });
                  return r.length / n.length
              }
              var i = e;
              ee(e) && (e = this.router.urlMatcherFactory.compile(e)),
              Ut(Hn)(e) && (i = function(t) {
                  return e.format(t)
              }
              );
              var o = {
                  urlMatcher: t,
                  matchPriority: r,
                  type: "URLMATCHER"
              };
              return me(new Un(n,i), o)
          }
          ,
          t.prototype.fromState = function(t, e) {
              var n = function(n) {
                  var r = e.stateService
                    , i = e.globals;
                  r.href(t, n) !== r.href(i.current, i.params) && r.transitionTo(t, n, {
                      inherit: !0,
                      source: "url"
                  })
              }
                , r = {
                  state: t,
                  type: "STATE"
              };
              return me(this.fromUrlMatcher(t.url, n), r)
          }
          ,
          t.prototype.fromRegExp = function(t, e) {
              if (t.global || t.sticky)
                  throw new Error("Rule RegExp must not be global or sticky");
              var n = function(t) {
                  return e.replace(/\$(\$|\d{1,2})/, function(e, n) {
                      return t["$" === n ? 0 : Number(n)]
                  })
              }
                , r = ee(e) ? n : e
                , i = function(e) {
                  return t.exec(e.path)
              }
                , o = {
                  regexp: t,
                  type: "REGEXP"
              };
              return me(new Un(i,r), o)
          }
          ,
          t.isUrlRule = function(t) {
              return t && ["type", "match", "handler"].every(function(e) {
                  return Xt(t[e])
              })
          }
          ,
          t
      }(), Un = function() {
          function t(t, e) {
              var n = this;
              this.match = t,
              this.type = "RAW",
              this.matchPriority = function() {
                  return 0 - n.$id
              }
              ,
              this.handler = e || l
          }
          return t
      }(), qn = function(t, e) {
          return (e.priority || 0) - (t.priority || 0)
      }, Bn = function(t, e) {
          var n = {
              STATE: 4,
              URLMATCHER: 4,
              REGEXP: 3,
              RAW: 2,
              OTHER: 1
          };
          return (n[t.type] || 0) - (n[e.type] || 0)
      }, zn = function(t, e) {
          return t.urlMatcher && e.urlMatcher ? Hn.compare(t.urlMatcher, e.urlMatcher) : 0
      }, Wn = function(t, e) {
          var n = {
              STATE: !0,
              URLMATCHER: !0
          }
            , r = n[t.type] && n[e.type];
          return r ? 0 : (t.$id || 0) - (e.$id || 0)
      };
      Cn = function(t, e) {
          var n = qn(t, e);
          return 0 !== n ? n : (n = Bn(t, e),
          0 !== n ? n : (n = zn(t, e),
          0 !== n ? n : Wn(t, e)))
      }
      ;
      var Yn = function() {
          function t(e) {
              this._sortFn = Cn,
              this._rules = [],
              this.interceptDeferred = !1,
              this._id = 0,
              this._sorted = !1,
              this._router = e,
              this.urlRuleFactory = new Vn(e),
              p(Bt(t.prototype), this, Bt(this))
          }
          return t.prototype.dispose = function() {
              this.listen(!1),
              this._rules = [],
              delete this._otherwiseFn
          }
          ,
          t.prototype.sort = function(t) {
              this._rules = this.stableSort(this._rules, this._sortFn = t || this._sortFn),
              this._sorted = !0
          }
          ,
          t.prototype.ensureSorted = function() {
              this._sorted || this.sort()
          }
          ,
          t.prototype.stableSort = function(t, e) {
              var n = t.map(function(t, e) {
                  return {
                      elem: t,
                      idx: e
                  }
              });
              return n.sort(function(t, n) {
                  var r = e(t.elem, n.elem);
                  return 0 === r ? t.idx - n.idx : r
              }),
              n.map(function(t) {
                  return t.elem
              })
          }
          ,
          t.prototype.match = function(t) {
              var e = this;
              this.ensureSorted(),
              t = me({
                  path: "",
                  search: {},
                  hash: ""
              }, t);
              var n = this.rules();
              this._otherwiseFn && n.push(this._otherwiseFn);
              for (var r, i = function(n) {
                  var r = n.match(t, e._router);
                  return r && {
                      match: r,
                      rule: n,
                      weight: n.matchPriority(r)
                  }
              }, o = 0; o < n.length && (!r || 0 === this._sortFn(n[o], r.rule)); o++) {
                  var a = i(n[o]);
                  r = !r || a && a.weight > r.weight ? a : r
              }
              return r
          }
          ,
          t.prototype.sync = function(t) {
              if (!t || !t.defaultPrevented) {
                  var e = this._router
                    , n = e.urlService
                    , r = e.stateService
                    , i = {
                      path: n.path(),
                      search: n.search(),
                      hash: n.hash()
                  }
                    , o = this.match(i)
                    , a = u([[ee, function(t) {
                      return n.url(t, !0)
                  }
                  ], [Ke.isDef, function(t) {
                      return r.go(t.state, t.params, t.options)
                  }
                  ], [Ut(Ke), function(t) {
                      return r.go(t.state(), t.params(), t.options())
                  }
                  ]]);
                  a(o && o.rule.handler(o.match, i, e))
              }
          }
          ,
          t.prototype.listen = function(t) {
              var e = this;
              return t !== !1 ? this._stopFn = this._stopFn || this._router.urlService.onChange(function(t) {
                  return e.sync(t)
              }) : (this._stopFn && this._stopFn(),
              void delete this._stopFn)
          }
          ,
          t.prototype.update = function(t) {
              var e = this._router.locationService;
              return t ? void (this.location = e.path()) : void (e.path() !== this.location && e.url(this.location, !0))
          }
          ,
          t.prototype.push = function(t, e, n) {
              var r = n && !!n.replace;
              this._router.urlService.url(t.format(e || {}), r)
          }
          ,
          t.prototype.href = function(t, e, n) {
              var r = t.format(e);
              if (null == r)
                  return null;
              n = n || {
                  absolute: !1
              };
              var i = this._router.urlService.config
                , o = i.html5Mode();
              if (o || null === r || (r = "#" + i.hashPrefix() + r),
              r = at(r, o, n.absolute, i.baseHref()),
              !n.absolute || !r)
                  return r;
              var a = !o && r ? "/" : ""
                , s = i.port();
              return s = 80 === s || 443 === s ? "" : ":" + s,
              [i.protocol(), "://", i.host(), s, a, r].join("")
          }
          ,
          t.prototype.rule = function(t) {
              var e = this;
              if (!Vn.isUrlRule(t))
                  throw new Error("invalid rule");
              return t.$id = this._id++,
              t.priority = t.priority || 0,
              this._rules.push(t),
              this._sorted = !1,
              function() {
                  return e.removeRule(t)
              }
          }
          ,
          t.prototype.removeRule = function(t) {
              be(this._rules, t)
          }
          ,
          t.prototype.rules = function() {
              return this.ensureSorted(),
              this._rules.slice()
          }
          ,
          t.prototype.otherwise = function(t) {
              var e = st(t);
              this._otherwiseFn = this.urlRuleFactory.create(Bt(!0), e),
              this._sorted = !1
          }
          ,
          t.prototype.initial = function(t) {
              var e = st(t)
                , n = function(t, e) {
                  return 0 === e.globals.transitionHistory.size() && !!/^\/?$/.exec(t.path)
              };
              this.rule(this.urlRuleFactory.create(n, e))
          }
          ,
          t.prototype.when = function(t, e, n) {
              var r = this.urlRuleFactory.create(t, e);
              return Xt(n && n.priority) && (r.priority = n.priority),
              this.rule(r),
              r
          }
          ,
          t.prototype.deferIntercept = function(t) {
              void 0 === t && (t = !0),
              this.interceptDeferred = t
          }
          ,
          t
      }()
        , Kn = function() {
          function t() {
              var t = this;
              this._uiViews = [],
              this._viewConfigs = [],
              this._viewConfigFactories = {},
              this._pluginapi = {
                  _rootViewContext: this._rootViewContext.bind(this),
                  _viewConfigFactory: this._viewConfigFactory.bind(this),
                  _registeredUIViews: function() {
                      return t._uiViews
                  },
                  _activeViewConfigs: function() {
                      return t._viewConfigs
                  }
              }
          }
          return t.prototype._rootViewContext = function(t) {
              return this._rootContext = t || this._rootContext
          }
          ,
          t.prototype._viewConfigFactory = function(t, e) {
              this._viewConfigFactories[t] = e
          }
          ,
          t.prototype.createViewConfig = function(t, e) {
              var n = this._viewConfigFactories[e.$type];
              if (!n)
                  throw new Error("ViewService: No view config factory registered for type " + e.$type);
              var r = n(t, e);
              return re(r) ? r : [r]
          }
          ,
          t.prototype.deactivateViewConfig = function(t) {
              Ye.traceViewServiceEvent("<- Removing", t),
              be(this._viewConfigs, t)
          }
          ,
          t.prototype.activateViewConfig = function(t) {
              Ye.traceViewServiceEvent("-> Registering", t),
              this._viewConfigs.push(t)
          }
          ,
          t.prototype.sync = function() {
              function e(t) {
                  var e = function(t) {
                      return t && t.parent ? e(t.parent) + 1 : 1
                  };
                  return 1e4 * t.fqn.split(".").length + e(t.creationContext)
              }
              function r(t) {
                  for (var e = t.viewDecl.$context, n = 0; ++n && e.parent; )
                      e = e.parent;
                  return n
              }
              var i = this
                , o = this._uiViews.map(function(t) {
                  return [t.fqn, t]
              }).reduce(C, {})
                , a = n(function(t, e, n, r) {
                  return e * (t(n) - t(r))
              })
                , s = function(e) {
                  var n = i._viewConfigs.filter(t.matches(o, e));
                  return n.length > 1 && n.sort(a(r, -1)),
                  [e, n[0]]
              }
                , u = function(t) {
                  var e = t[0]
                    , n = t[1];
                  -1 !== i._uiViews.indexOf(e) && e.configUpdated(n)
              }
                , c = this._uiViews.sort(a(e, 1)).map(s);
              Ye.traceViewSync(c),
              c.forEach(u)
          }
          ,
          t.prototype.registerUIView = function(t) {
              Ye.traceViewServiceUIViewEvent("-> Registering", t);
              var e = this._uiViews
                , n = function(e) {
                  return e.fqn === t.fqn && e.$type === t.$type
              };
              return e.filter(n).length && Ye.traceViewServiceUIViewEvent("!!!! duplicate uiView named:", t),
              e.push(t),
              this.sync(),
              function() {
                  var n = e.indexOf(t);
                  return -1 === n ? void Ye.traceViewServiceUIViewEvent("Tried removing non-registered uiView", t) : (Ye.traceViewServiceUIViewEvent("<- Deregistering", t),
                  void be(e)(t))
              }
          }
          ,
          t.prototype.available = function() {
              return this._uiViews.map(Lt("fqn"))
          }
          ,
          t.prototype.active = function() {
              return this._uiViews.filter(Lt("$config")).map(Lt("name"))
          }
          ,
          t.normalizeUIViewTarget = function(t, e) {
              void 0 === e && (e = "");
              var n = e.split("@")
                , r = n[0] || "$default"
                , i = ee(n[1]) ? n[1] : "^"
                , o = /^(\^(?:\.\^)*)\.(.*$)/.exec(r);
              o && (i = o[1],
              r = o[2]),
              "!" === r.charAt(0) && (r = r.substr(1),
              i = "");
              var a = /^(\^(?:\.\^)*)$/;
              if (a.exec(i)) {
                  var s = i.split(".").reduce(function(t) {
                      return t.parent
                  }, t);
                  i = s.name
              } else
                  "." === i && (i = t.name);
              return {
                  uiViewName: r,
                  uiViewContextAnchor: i
              }
          }
          ,
          t.matches = function(t, e) {
              return function(n) {
                  if (e.$type !== n.viewDecl.$type)
                      return !1;
                  var r = n.viewDecl
                    , i = r.$uiViewName.split(".")
                    , o = e.fqn.split(".");
                  if (!ge(i, o.slice(0 - i.length)))
                      return !1;
                  var a = 1 - i.length || void 0
                    , s = o.slice(0, a).join(".")
                    , u = t[s].creationContext;
                  return r.$uiViewContextAnchor === (u && u.name)
              }
          }
          ,
          t
      }()
        , Gn = function() {
          function t() {
              this.params = new xn,
              this.lastStartedTransitionId = -1,
              this.transitionHistory = new Fe([],1),
              this.successfulTransitions = new Fe([],1)
          }
          return t.prototype.dispose = function() {
              this.transitionHistory.clear(),
              this.successfulTransitions.clear(),
              this.transition = null
          }
          ,
          t
      }()
        , Xn = function(t) {
          return t.reduce(function(t, e) {
              return t[e] = ue(e),
              t
          }, {
              dispose: f
          })
      }
        , Jn = ["url", "path", "search", "hash", "onChange"]
        , Qn = ["port", "protocol", "host", "baseHref", "html5Mode", "hashPrefix"]
        , Zn = ["type", "caseInsensitive", "strictMode", "defaultSquashPolicy"]
        , tr = ["sort", "when", "initial", "otherwise", "rules", "rule", "removeRule"]
        , er = ["deferIntercept", "listen", "sync", "match"]
        , nr = function() {
          function t(t, e) {
              void 0 === e && (e = !0),
              this.router = t,
              this.rules = {},
              this.config = {};
              var n = function() {
                  return t.locationService
              };
              p(n, this, n, Jn, e);
              var r = function() {
                  return t.locationConfig
              };
              p(r, this.config, r, Qn, e);
              var i = function() {
                  return t.urlMatcherFactory
              };
              p(i, this.config, i, Zn);
              var o = function() {
                  return t.urlRouter
              };
              p(o, this.rules, o, tr),
              p(o, this, o, er)
          }
          return t.prototype.url = function() {}
          ,
          t.prototype.path = function() {}
          ,
          t.prototype.search = function() {}
          ,
          t.prototype.hash = function() {}
          ,
          t.prototype.onChange = function() {}
          ,
          t.prototype.parts = function() {
              return {
                  path: this.path(),
                  search: this.search(),
                  hash: this.hash()
              }
          }
          ,
          t.prototype.dispose = function() {}
          ,
          t.prototype.sync = function() {}
          ,
          t.prototype.listen = function() {}
          ,
          t.prototype.deferIntercept = function() {}
          ,
          t.prototype.match = function() {}
          ,
          t.locationServiceStub = Xn(Jn),
          t.locationConfigStub = Xn(Qn),
          t
      }()
        , rr = 0
        , ir = function() {
          function t(t, e) {
              void 0 === t && (t = nr.locationServiceStub),
              void 0 === e && (e = nr.locationConfigStub),
              this.locationService = t,
              this.locationConfig = e,
              this.$id = rr++,
              this._disposed = !1,
              this._disposables = [],
              this.trace = Ye,
              this.viewService = new Kn,
              this.transitionService = new Or(this),
              this.globals = new Gn,
              this.urlMatcherFactory = new Nn,
              this.urlRouter = new Yn(this),
              this.stateRegistry = new Ln(this),
              this.stateService = new Rr(this),
              this.urlService = new nr(this),
              this._plugins = {},
              this.viewService._pluginapi._rootViewContext(this.stateRegistry.root()),
              this.globals.$current = this.stateRegistry.root(),
              this.globals.current = this.globals.$current.self,
              this.disposable(this.globals),
              this.disposable(this.stateService),
              this.disposable(this.stateRegistry),
              this.disposable(this.transitionService),
              this.disposable(this.urlRouter),
              this.disposable(t),
              this.disposable(e)
          }
          return t.prototype.disposable = function(t) {
              this._disposables.push(t)
          }
          ,
          t.prototype.dispose = function(t) {
              var e = this;
              return t && Zt(t.dispose) ? void t.dispose(this) : (this._disposed = !0,
              void this._disposables.slice().forEach(function(t) {
                  try {
                      "function" == typeof t.dispose && t.dispose(e),
                      be(e._disposables, t)
                  } catch (n) {}
              }))
          }
          ,
          t.prototype.plugin = function(t, e) {
              void 0 === e && (e = {});
              var n = new t(this,e);
              if (!n.name)
                  throw new Error("Required property `name` missing on plugin: " + n);
              return this._disposables.push(n),
              this._plugins[n.name] = n
          }
          ,
          t.prototype.getPlugin = function(t) {
              return t ? this._plugins[t] : _e(this._plugins)
          }
          ,
          t
      }()
        , or = function(t) {
          return t.onCreate({}, ut)
      }
        , ar = function(t) {
          function e(e) {
              return e ? e instanceof Ke ? e : ee(e) ? r.target(e, t.params(), t.options()) : e.state || e.params ? r.target(e.state || t.to(), e.params || t.params(), t.options()) : void 0 : void 0
          }
          var n = t.to().redirectTo;
          if (n) {
              var r = t.router.stateService;
              return Zt(n) ? ce.$q.when(n(t)).then(e) : e(n)
          }
      }
        , sr = function(t) {
          return t.onStart({
              to: function(t) {
                  return !!t.redirectTo
              }
          }, ar)
      }
        , ur = ct("onExit")
        , cr = function(t) {
          return t.onExit({
              exiting: function(t) {
                  return !!t.onExit
              }
          }, ur)
      }
        , lr = ct("onRetain")
        , fr = function(t) {
          return t.onRetain({
              retained: function(t) {
                  return !!t.onRetain
              }
          }, lr)
      }
        , pr = ct("onEnter")
        , dr = function(t) {
          return t.onEnter({
              entering: function(t) {
                  return !!t.onEnter
              }
          }, pr)
      }
        , hr = function(t) {
          return new dn(t.treeChanges().to).resolvePath("EAGER", t).then(f)
      }
        , mr = function(t) {
          return t.onStart({}, hr, {
              priority: 1e3
          })
      }
        , gr = function(t, e) {
          return new dn(t.treeChanges().to).subContext(e.$$state()).resolvePath("LAZY", t).then(f)
      }
        , vr = function(t) {
          return t.onEnter({
              entering: Bt(!0)
          }, gr, {
              priority: 1e3
          })
      }
        , yr = function(t) {
          var e = ce.$q
            , n = t.views("entering");
          return n.length ? e.all(n.map(function(t) {
              return e.when(t.load())
          })).then(f) : void 0
      }
        , br = function(t) {
          return t.onFinish({}, yr)
      }
        , $r = function(t) {
          var e = t.views("entering")
            , n = t.views("exiting");
          if (e.length || n.length) {
              var r = t.router.viewService;
              n.forEach(function(t) {
                  return r.deactivateViewConfig(t)
              }),
              e.forEach(function(t) {
                  return r.activateViewConfig(t)
              }),
              r.sync()
          }
      }
        , wr = function(t) {
          return t.onSuccess({}, $r)
      }
        , Sr = function(t) {
          var e = t.router.globals
            , n = function() {
              e.successfulTransitions.enqueue(t),
              e.$current = t.$to(),
              e.current = e.$current.self,
              D(t.params(), e.params)
          }
            , r = function() {
              e.transition === t && (e.transition = null)
          };
          t.onSuccess({}, n, {
              priority: 1e4
          }),
          t.promise.then(r, r)
      }
        , Tr = function(t) {
          return t.onCreate({}, Sr)
      }
        , _r = function(t) {
          var e = t.options()
            , n = t.router.stateService
            , r = t.router.urlRouter;
          if ("url" !== e.source && e.location && n.$current.navigable) {
              var i = {
                  replace: "replace" === e.location
              };
              r.push(n.$current.navigable.url, n.params, i)
          }
          r.update(!0)
      }
        , kr = function(t) {
          return t.onSuccess({}, _r, {
              priority: 9999
          })
      }
        , Er = function(t) {
          function e() {
              if ("url" !== t.originalTransition().options().source) {
                  var e = t.targetState();
                  return n.stateService.target(e.identifier(), e.params(), e.options())
              }
              var r = n.urlService
                , i = r.match(r.parts())
                , o = i && i.rule;
              if (o && "STATE" === o.type) {
                  var a = o.state
                    , s = i.match;
                  return n.stateService.target(a, s, t.options())
              }
              n.urlService.sync()
          }
          var n = t.router
            , r = t.entering().filter(function(t) {
              return !!t.$$state().lazyLoad
          }).map(function(e) {
              return lt(t, e)
          });
          return ce.$q.all(r).then(e)
      }
        , Cr = function(t) {
          return t.onBefore({
              entering: function(t) {
                  return !!t.lazyLoad
              }
          }, Er)
      }
        , xr = function() {
          function t(t, e, n, r, i, o, a, s) {
              void 0 === i && (i = !1),
              void 0 === o && (o = Xe.HANDLE_RESULT),
              void 0 === a && (a = Xe.REJECT_ERROR),
              void 0 === s && (s = !1),
              this.name = t,
              this.hookPhase = e,
              this.hookOrder = n,
              this.criteriaMatchPath = r,
              this.reverseSort = i,
              this.getResultHandler = o,
              this.getErrorHandler = a,
              this.synchronous = s
          }
          return t
      }()
        , Dr = function(t) {
          return t.onBefore({}, ft, {
              priority: -9999
          })
      }
        , Pr = function(t) {
          return t.onBefore({}, pt, {
              priority: -1e4
          })
      }
        , Ar = {
          location: !0,
          relative: null,
          inherit: !1,
          notify: !0,
          reload: !1,
          custom: {},
          current: function() {
              return null
          },
          source: "unknown"
      }
        , Or = function() {
          function e(t) {
              this._transitionCount = 0,
              this._eventTypes = [],
              this._registeredHooks = {},
              this._criteriaPaths = {},
              this._router = t,
              this.$view = t.viewService,
              this._deregisterHookFns = {},
              this._pluginapi = p(Bt(this), {}, Bt(this), ["_definePathType", "_defineEvent", "_getPathTypes", "_getEvents", "getHooks"]),
              this._defineCorePaths(),
              this._defineCoreEvents(),
              this._registerCoreTransitionHooks()
          }
          return e.prototype.onCreate = function() {}
          ,
          e.prototype.onBefore = function() {}
          ,
          e.prototype.onStart = function() {}
          ,
          e.prototype.onExit = function() {}
          ,
          e.prototype.onRetain = function() {}
          ,
          e.prototype.onEnter = function() {}
          ,
          e.prototype.onFinish = function() {}
          ,
          e.prototype.onSuccess = function() {}
          ,
          e.prototype.onError = function() {}
          ,
          e.prototype.dispose = function() {
              _e(this._registeredHooks).forEach(function(t) {
                  return t.forEach(function(e) {
                      e._deregistered = !0,
                      be(t, e)
                  })
              })
          }
          ,
          e.prototype.create = function(t, e) {
              return new gn(t,e,this._router)
          }
          ,
          e.prototype._defineCoreEvents = function() {
              var e = t.TransitionHookPhase
                , n = Xe
                , r = this._criteriaPaths
                , i = !1
                , o = !0
                , a = !0;
              this._defineEvent("onCreate", e.CREATE, 0, r.to, i, n.LOG_REJECTED_RESULT, n.THROW_ERROR, a),
              this._defineEvent("onBefore", e.BEFORE, 0, r.to),
              this._defineEvent("onStart", e.RUN, 0, r.to),
              this._defineEvent("onExit", e.RUN, 100, r.exiting, o),
              this._defineEvent("onRetain", e.RUN, 200, r.retained),
              this._defineEvent("onEnter", e.RUN, 300, r.entering),
              this._defineEvent("onFinish", e.RUN, 400, r.to),
              this._defineEvent("onSuccess", e.SUCCESS, 0, r.to, i, n.LOG_REJECTED_RESULT, n.LOG_ERROR, a),
              this._defineEvent("onError", e.ERROR, 0, r.to, i, n.LOG_REJECTED_RESULT, n.LOG_ERROR, a)
          }
          ,
          e.prototype._defineCorePaths = function() {
              var e = t.TransitionHookScope.STATE
                , n = t.TransitionHookScope.TRANSITION;
              this._definePathType("to", n),
              this._definePathType("from", n),
              this._definePathType("exiting", e),
              this._definePathType("retained", e),
              this._definePathType("entering", e)
          }
          ,
          e.prototype._defineEvent = function(t, e, n, r, i, o, a, s) {
              void 0 === i && (i = !1),
              void 0 === o && (o = Xe.HANDLE_RESULT),
              void 0 === a && (a = Xe.REJECT_ERROR),
              void 0 === s && (s = !1);
              var u = new xr(t,e,n,r,i,o,a,s);
              this._eventTypes.push(u),
              F(this, this, u)
          }
          ,
          e.prototype._getEvents = function(t) {
              var e = Xt(t) ? this._eventTypes.filter(function(e) {
                  return e.hookPhase === t
              }) : this._eventTypes.slice();
              return e.sort(function(t, e) {
                  var n = t.hookPhase - e.hookPhase;
                  return 0 === n ? t.hookOrder - e.hookOrder : n
              })
          }
          ,
          e.prototype._definePathType = function(t, e) {
              this._criteriaPaths[t] = {
                  name: t,
                  scope: e
              }
          }
          ,
          e.prototype._getPathTypes = function() {
              return this._criteriaPaths
          }
          ,
          e.prototype.getHooks = function(t) {
              return this._registeredHooks[t]
          }
          ,
          e.prototype._registerCoreTransitionHooks = function() {
              var t = this._deregisterHookFns;
              t.addCoreResolves = or(this),
              t.ignored = Dr(this),
              t.invalid = Pr(this),
              t.redirectTo = sr(this),
              t.onExit = cr(this),
              t.onRetain = fr(this),
              t.onEnter = dr(this),
              t.eagerResolve = mr(this),
              t.lazyResolve = vr(this),
              t.loadViews = br(this),
              t.activateViews = wr(this),
              t.updateGlobals = Tr(this),
              t.updateUrl = kr(this),
              t.lazyLoad = Cr(this)
          }
          ,
          e
      }()
        , Rr = function() {
          function e(t) {
              this.router = t,
              this.invalidCallbacks = [],
              this._defaultErrorHandler = function(t) {
                  t instanceof Error && t.stack ? (console.error(t),
                  console.error(t.stack)) : t instanceof He ? (console.error(t.toString()),
                  t.detail && t.detail.stack && console.error(t.detail.stack)) : console.error(t)
              }
              ;
              var n = ["current", "$current", "params", "transition"]
                , r = Object.keys(e.prototype).filter(Ht(ye(n)));
              p(Bt(e.prototype), this, Bt(this), r)
          }
          return Object.defineProperty(e.prototype, "transition", {
              get: function() {
                  return this.router.globals.transition
              },
              enumerable: !0,
              configurable: !0
          }),
          Object.defineProperty(e.prototype, "params", {
              get: function() {
                  return this.router.globals.params
              },
              enumerable: !0,
              configurable: !0
          }),
          Object.defineProperty(e.prototype, "current", {
              get: function() {
                  return this.router.globals.current
              },
              enumerable: !0,
              configurable: !0
          }),
          Object.defineProperty(e.prototype, "$current", {
              get: function() {
                  return this.router.globals.$current
              },
              enumerable: !0,
              configurable: !0
          }),
          e.prototype.dispose = function() {
              this.defaultErrorHandler(f),
              this.invalidCallbacks = []
          }
          ,
          e.prototype._handleInvalidTargetState = function(t, e) {
              function n() {
                  var t = u.dequeue();
                  if (void 0 === t)
                      return He.invalid(e.error()).toPromise();
                  var r = ce.$q.when(t(e, i, c));
                  return r.then(l).then(function(t) {
                      return t || n()
                  })
              }
              var r = this
                , i = on.makeTargetState(this.router.stateRegistry, t)
                , o = this.router.globals
                , a = function() {
                  return o.transitionHistory.peekTail()
              }
                , s = a()
                , u = new Fe(this.invalidCallbacks.slice())
                , c = new dn(t).injector()
                , l = function(t) {
                  if (t instanceof Ke) {
                      var e = t;
                      return e = r.target(e.identifier(), e.params(), e.options()),
                      e.valid() ? a() !== s ? He.superseded().toPromise() : r.transitionTo(e.identifier(), e.params(), e.options()) : He.invalid(e.error()).toPromise()
                  }
              };
              return n()
          }
          ,
          e.prototype.onInvalid = function(t) {
              return this.invalidCallbacks.push(t),
              function() {
                  be(this.invalidCallbacks)(t)
              }
              .bind(this)
          }
          ,
          e.prototype.reload = function(t) {
              return this.transitionTo(this.current, this.params, {
                  reload: Xt(t) ? t : !0,
                  inherit: !1,
                  notify: !1
              })
          }
          ,
          e.prototype.go = function(t, e, n) {
              var r = {
                  relative: this.$current,
                  inherit: !0
              }
                , i = g(n, r, Ar);
              return this.transitionTo(t, e, i)
          }
          ,
          e.prototype.target = function(t, e, n) {
              if (void 0 === n && (n = {}),
              ne(n.reload) && !n.reload.name)
                  throw new Error("Invalid reload state object");
              var r = this.router.stateRegistry;
              if (n.reloadState = n.reload === !0 ? r.root() : r.matcher.find(n.reload, n.relative),
              n.reload && !n.reloadState)
                  throw new Error("No such reload state '" + (ee(n.reload) ? n.reload : n.reload.name) + "'");
              return new Ke(this.router.stateRegistry,t,e,n)
          }
          ,
          e.prototype.getCurrentPath = function() {
              var t = this
                , e = this.router.globals
                , n = e.successfulTransitions.peekTail()
                , r = function() {
                  return [new rn(t.router.stateRegistry.root())]
              };
              return n ? n.treeChanges().to : r()
          }
          ,
          e.prototype.transitionTo = function(e, n, r) {
              var i = this;
              void 0 === n && (n = {}),
              void 0 === r && (r = {});
              var o = this.router
                , a = o.globals;
              r = g(r, Ar);
              var s = function() {
                  return a.transition
              };
              r = me(r, {
                  current: s
              });
              var u = this.target(e, n, r)
                , c = this.getCurrentPath();
              if (!u.exists())
                  return this._handleInvalidTargetState(c, u);
              if (!u.valid())
                  return Le(u.error());
              var l = function(e) {
                  return function(n) {
                      if (n instanceof He) {
                          var r = o.globals.lastStartedTransitionId === e.$id;
                          if (n.type === t.RejectType.IGNORED)
                              return r && o.urlRouter.update(),
                              ce.$q.when(a.current);
                          var s = n.detail;
                          if (n.type === t.RejectType.SUPERSEDED && n.redirected && s instanceof Ke) {
                              var u = e.redirect(s);
                              return u.run()["catch"](l(u))
                          }
                          if (n.type === t.RejectType.ABORTED)
                              return r && o.urlRouter.update(),
                              ce.$q.reject(n)
                      }
                      var c = i.defaultErrorHandler();
                      return c(n),
                      ce.$q.reject(n)
                  }
              }
                , f = this.router.transitionService.create(c, u)
                , p = f.run()["catch"](l(f));
              return Me(p),
              me(p, {
                  transition: f
              })
          }
          ,
          e.prototype.is = function(t, e, n) {
              n = g(n, {
                  relative: this.$current
              });
              var r = this.router.stateRegistry.matcher.find(t, n.relative);
              if (Xt(r)) {
                  if (this.$current !== r)
                      return !1;
                  if (!e)
                      return !0;
                  var i = r.parameters({
                      inherit: !0,
                      matchingKeys: e
                  });
                  return nn.equals(i, nn.values(i, e), this.params)
              }
          }
          ,
          e.prototype.includes = function(t, e, n) {
              n = g(n, {
                  relative: this.$current
              });
              var r = ee(t) && zt.fromString(t);
              if (r) {
                  if (!r.matches(this.$current.name))
                      return !1;
                  t = this.$current.name
              }
              var i = this.router.stateRegistry.matcher.find(t, n.relative)
                , o = this.$current.includes;
              if (Xt(i)) {
                  if (!Xt(o[i.name]))
                      return !1;
                  if (!e)
                      return !0;
                  var a = i.parameters({
                      inherit: !0,
                      matchingKeys: e
                  });
                  return nn.equals(a, nn.values(a, e), this.params)
              }
          }
          ,
          e.prototype.href = function(t, e, n) {
              var r = {
                  lossy: !0,
                  inherit: !0,
                  absolute: !1,
                  relative: this.$current
              };
              n = g(n, r),
              e = e || {};
              var i = this.router.stateRegistry.matcher.find(t, n.relative);
              if (!Xt(i))
                  return null;
              n.inherit && (e = this.params.$inherit(e, this.$current, i));
              var o = i && n.lossy ? i.navigable : i;
              return o && void 0 !== o.url && null !== o.url ? this.router.urlRouter.href(o.url, e, {
                  absolute: n.absolute
              }) : null
          }
          ,
          e.prototype.defaultErrorHandler = function(t) {
              return this._defaultErrorHandler = t || this._defaultErrorHandler
          }
          ,
          e.prototype.get = function(t, e) {
              var n = this.router.stateRegistry;
              return 0 === arguments.length ? n.get() : n.get(t, e || this.$current)
          }
          ,
          e.prototype.lazyLoad = function(t, e) {
              var n = this.get(t);
              if (!n || !n.lazyLoad)
                  throw new Error("Can not lazy load " + t);
              var r = this.getCurrentPath()
                , i = on.makeTargetState(this.router.stateRegistry, r);
              return e = e || this.router.transitionService.create(r, i),
              lt(e, n)
          }
          ,
          e
      }()
        , Ir = {
          when: function(t) {
              return new Promise(function(e) {
                  return e(t)
              }
              )
          },
          reject: function(t) {
              return new Promise(function(e, n) {
                  n(t)
              }
              )
          },
          defer: function() {
              var t = {};
              return t.promise = new Promise(function(e, n) {
                  t.resolve = e,
                  t.reject = n
              }
              ),
              t
          },
          all: function(t) {
              if (re(t))
                  return Promise.all(t);
              if (ne(t)) {
                  var e = Object.keys(t).map(function(e) {
                      return t[e].then(function(t) {
                          return {
                              key: e,
                              val: t
                          }
                      })
                  });
                  return Ir.all(e).then(function(t) {
                      return t.reduce(function(t, e) {
                          return t[e.key] = e.val,
                          t
                      }, {})
                  })
              }
          }
      }
        , Mr = {}
        , Lr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm
        , Fr = /([^\s,]+)/g
        , jr = {
          get: function(t) {
              return Mr[t]
          },
          has: function(t) {
              return null != jr.get(t)
          },
          invoke: function(t, e, n) {
              var r = me({}, Mr, n || {})
                , i = jr.annotate(t)
                , o = Oe(function(t) {
                  return r.hasOwnProperty(t)
              }, function(t) {
                  return "DI can't find injectable: '" + t + "'"
              })
                , a = i.filter(o).map(function(t) {
                  return r[t]
              });
              return Zt(t) ? t.apply(e, a) : t.slice(-1)[0].apply(e, a)
          },
          annotate: function(t) {
              if (!c(t))
                  throw new Error("Not an injectable function: " + t);
              if (t && t.$inject)
                  return t.$inject;
              if (re(t))
                  return t.slice(0, -1);
              var e = t.toString().replace(Lr, "")
                , n = e.slice(e.indexOf("(") + 1, e.indexOf(")")).match(Fr);
              return n || []
          }
      }
        , Hr = function(t, e) {
          var n = e[0]
            , r = e[1];
          return t.hasOwnProperty(n) ? re(t[n]) ? t[n].push(r) : t[n] = [t[n], r] : t[n] = r,
          t
      }
        , Nr = function(t) {
          return t.split("&").filter(l).map(_n).reduce(Hr, {})
      }
        , Vr = function(t) {
          var e = t.path()
            , n = t.search()
            , r = t.hash()
            , i = Object.keys(n).map(function(t) {
              var e = n[t]
                , r = re(e) ? e : [e];
              return r.map(function(e) {
                  return t + "=" + e
              })
          }).reduce(Ce, []).join("&");
          return e + (i ? "?" + i : "") + (r ? "#" + r : "")
      }
        , Ur = function() {
          function t(t, e) {
              var n = this;
              this.fireAfterUpdate = e,
              this._listener = function(t) {
                  return n._listeners.forEach(function(e) {
                      return e(t)
                  })
              }
              ,
              this._listeners = [],
              this.hash = function() {
                  return dt(n._get()).hash
              }
              ,
              this.path = function() {
                  return dt(n._get()).path
              }
              ,
              this.search = function() {
                  return Nr(dt(n._get()).search)
              }
              ,
              this._location = le.location,
              this._history = le.history
          }
          return t.prototype.url = function(t, e) {
              return void 0 === e && (e = !0),
              Xt(t) && t !== this._get() && (this._set(null, null, t, e),
              this.fireAfterUpdate && this._listeners.forEach(function(e) {
                  return e({
                      url: t
                  })
              })),
              Vr(this)
          }
          ,
          t.prototype.onChange = function(t) {
              var e = this;
              return this._listeners.push(t),
              function() {
                  return be(e._listeners, t)
              }
          }
          ,
          t.prototype.dispose = function() {
              we(this._listeners)
          }
          ,
          t
      }()
        , qr = function() {
          var t = Object.setPrototypeOf || {
              __proto__: []
          }instanceof Array && function(t, e) {
              t.__proto__ = e
          }
          || function(t, e) {
              for (var n in e)
                  e.hasOwnProperty(n) && (t[n] = e[n])
          }
          ;
          return function(e, n) {
              function r() {
                  this.constructor = e
              }
              t(e, n),
              e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
              new r)
          }
      }()
        , Br = function(t) {
          function e(e) {
              var n = t.call(this, e, !1) || this;
              return le.addEventListener("hashchange", n._listener, !1),
              n
          }
          return qr(e, t),
          e.prototype._get = function() {
              return kn(this._location.hash)
          }
          ,
          e.prototype._set = function(t, e, n) {
              this._location.hash = n
          }
          ,
          e.prototype.dispose = function(e) {
              t.prototype.dispose.call(this, e),
              le.removeEventListener("hashchange", this._listener)
          }
          ,
          e
      }(Ur)
        , zr = function() {
          var t = Object.setPrototypeOf || {
              __proto__: []
          }instanceof Array && function(t, e) {
              t.__proto__ = e
          }
          || function(t, e) {
              for (var n in e)
                  e.hasOwnProperty(n) && (t[n] = e[n])
          }
          ;
          return function(e, n) {
              function r() {
                  this.constructor = e
              }
              t(e, n),
              e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
              new r)
          }
      }()
        , Wr = function(t) {
          function e(e) {
              return t.call(this, e, !0) || this
          }
          return zr(e, t),
          e.prototype._get = function() {
              return this._url
          }
          ,
          e.prototype._set = function(t, e, n) {
              this._url = n
          }
          ,
          e
      }(Ur)
        , Yr = function() {
          var t = Object.setPrototypeOf || {
              __proto__: []
          }instanceof Array && function(t, e) {
              t.__proto__ = e
          }
          || function(t, e) {
              for (var n in e)
                  e.hasOwnProperty(n) && (t[n] = e[n])
          }
          ;
          return function(e, n) {
              function r() {
                  this.constructor = e
              }
              t(e, n),
              e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
              new r)
          }
      }()
        , Kr = function(t) {
          function e(e) {
              var n = t.call(this, e, !0) || this;
              return n._config = e.urlService.config,
              le.addEventListener("popstate", n._listener, !1),
              n
          }
          return Yr(e, t),
          e.prototype._getBasePrefix = function() {
              return wn(this._config.baseHref())
          }
          ,
          e.prototype._get = function() {
              var t = this._location
                , e = t.pathname
                , n = t.hash
                , r = t.search;
              r = Tn(r)[1],
              n = Sn(n)[1];
              var i = this._getBasePrefix()
                , o = e === this._config.baseHref()
                , a = e.startsWith(i);
              return e = o ? "/" : a ? e.substring(i.length) : e,
              e + (r ? "?" + r : "") + (n ? "#" + n : "")
          }
          ,
          e.prototype._set = function(t, e, n, r) {
              var i = this._getBasePrefix() + n;
              r ? this._history.replaceState(t, e, i) : this._history.pushState(t, e, i)
          }
          ,
          e.prototype.dispose = function(e) {
              t.prototype.dispose.call(this, e),
              le.removeEventListener("popstate", this._listener)
          }
          ,
          e
      }(Ur)
        , Gr = function() {
          function t() {
              var t = this;
              this._baseHref = "",
              this._port = 80,
              this._protocol = "http",
              this._host = "localhost",
              this._hashPrefix = "",
              this.port = function() {
                  return t._port
              }
              ,
              this.protocol = function() {
                  return t._protocol
              }
              ,
              this.host = function() {
                  return t._host
              }
              ,
              this.baseHref = function() {
                  return t._baseHref
              }
              ,
              this.html5Mode = function() {
                  return !1
              }
              ,
              this.hashPrefix = function(e) {
                  return Xt(e) ? t._hashPrefix = e : t._hashPrefix
              }
              ,
              this.dispose = f
          }
          return t
      }()
        , Xr = function() {
          function t(t, e) {
              void 0 === e && (e = !1),
              this._isHtml5 = e,
              this._baseHref = void 0,
              this._hashPrefix = ""
          }
          return t.prototype.port = function() {
              return location.port ? Number(location.port) : "https" === this.protocol() ? 443 : 80
          }
          ,
          t.prototype.protocol = function() {
              return location.protocol.replace(/:/g, "")
          }
          ,
          t.prototype.host = function() {
              return location.hostname
          }
          ,
          t.prototype.html5Mode = function() {
              return this._isHtml5
          }
          ,
          t.prototype.hashPrefix = function(t) {
              return Xt(t) ? this._hashPrefix = t : this._hashPrefix
          }
          ,
          t.prototype.baseHref = function(t) {
              return Xt(t) ? this._baseHref = t : Xt(this._baseHref) ? this._baseHref : this.applyDocumentBaseHref()
          }
          ,
          t.prototype.applyDocumentBaseHref = function() {
              var t = document.getElementsByTagName("base")[0];
              return this._baseHref = t ? t.href.substr(location.origin.length) : ""
          }
          ,
          t.prototype.dispose = function() {}
          ,
          t
      }()
        , Jr = ht("vanilla.hashBangLocation", !1, Br, Xr)
        , Qr = ht("vanilla.pushStateLocation", !0, Kr, Xr)
        , Zr = ht("vanilla.memoryLocation", !1, Wr, Gr)
        , ti = function() {
          function t() {}
          return t.prototype.dispose = function() {}
          ,
          t
      }()
        , ei = Object.freeze({
          root: le,
          fromJson: pe,
          toJson: de,
          forEach: he,
          extend: me,
          equals: ge,
          identity: l,
          noop: f,
          createProxyFunctions: p,
          inherit: ve,
          inArray: ye,
          _inArray: d,
          removeFrom: be,
          _removeFrom: h,
          pushTo: $e,
          _pushTo: m,
          deregAll: we,
          defaults: g,
          mergeR: Se,
          ancestors: v,
          pick: y,
          omit: b,
          pluck: $,
          filter: w,
          find: S,
          mapObj: Te,
          map: T,
          values: _e,
          allTrueR: ke,
          anyTrueR: Ee,
          unnestR: Ce,
          flattenR: xe,
          pushR: _,
          uniqR: De,
          unnest: Pe,
          flatten: Ae,
          assertPredicate: Oe,
          assertMap: Re,
          assertFn: k,
          pairs: Ie,
          arrayTuples: E,
          applyPairs: C,
          tail: x,
          copy: D,
          _extend: A,
          silenceUncaughtInPromise: Me,
          silentRejection: Le,
          notImplemented: ue,
          services: ce,
          Glob: zt,
          curry: n,
          compose: r,
          pipe: i,
          prop: Lt,
          propEq: Ft,
          parse: jt,
          not: Ht,
          and: o,
          or: a,
          all: Nt,
          any: Vt,
          is: Ut,
          eq: qt,
          val: Bt,
          invoke: s,
          pattern: u,
          isUndefined: Gt,
          isDefined: Xt,
          isNull: Jt,
          isNullOrUndefined: Qt,
          isFunction: Zt,
          isNumber: te,
          isString: ee,
          isObject: ne,
          isArray: re,
          isDate: ie,
          isRegExp: oe,
          isState: ae,
          isInjectable: c,
          isPromise: se,
          Queue: Fe,
          maxLength: B,
          padString: z,
          kebobString: W,
          functionToString: Y,
          fnToString: K,
          stringify: G,
          beforeAfterSubstr: bn,
          hostRegex: $n,
          stripFile: wn,
          splitHash: Sn,
          splitQuery: Tn,
          splitEqual: _n,
          trimHashVal: kn,
          splitOnDelim: X,
          joinNeighborsR: J,
          get Category() {
              return t.Category
          },
          Trace: We,
          trace: Ye,
          get DefType() {
              return t.DefType
          },
          Param: nn,
          ParamTypes: En,
          StateParams: xn,
          ParamType: Ze,
          PathNode: rn,
          PathUtils: on,
          resolvePolicies: un,
          defaultResolvePolicy: an,
          Resolvable: sn,
          NATIVE_INJECTOR_TOKEN: pn,
          ResolveContext: dn,
          resolvablesBuilder: it,
          StateBuilder: Rn,
          StateObject: Wt,
          StateMatcher: In,
          StateQueueManager: Mn,
          StateRegistry: Ln,
          StateService: Rr,
          TargetState: Ke,
          get TransitionHookPhase() {
              return t.TransitionHookPhase
          },
          get TransitionHookScope() {
              return t.TransitionHookScope
          },
          HookBuilder: Qe,
          matchState: L,
          RegisteredHook: Je,
          makeEvent: F,
          get RejectType() {
              return t.RejectType
          },
          Rejection: He,
          Transition: gn,
          TransitionHook: Xe,
          TransitionEventType: xr,
          defaultTransOpts: Ar,
          TransitionService: Or,
          UrlMatcher: Hn,
          UrlMatcherFactory: Nn,
          UrlRouter: Yn,
          UrlRuleFactory: Vn,
          BaseUrlRule: Un,
          UrlService: nr,
          ViewService: Kn,
          UIRouterGlobals: Gn,
          UIRouter: ir,
          $q: Ir,
          $injector: jr,
          BaseLocationServices: Ur,
          HashLocationService: Br,
          MemoryLocationService: Wr,
          PushStateLocationService: Kr,
          MemoryLocationConfig: Gr,
          BrowserLocationConfig: Xr,
          keyValsToObjectR: Hr,
          getParams: Nr,
          parseUrl: dt,
          buildUrl: Vr,
          locationPluginFactory: ht,
          servicesPlugin: mt,
          hashLocationPlugin: Jr,
          pushStateLocationPlugin: Qr,
          memoryLocationPlugin: Zr,
          UIRouterPluginBase: ti
      })
        , ni = function(t, e) {
          return t.reduce(function(t, n) {
              return t || Xt(e[n])
          }, !1)
      }
        , ri = 0
        , ii = function() {
          function t(t, e, n) {
              var r = this;
              this.path = t,
              this.viewDecl = e,
              this.factory = n,
              this.$id = ri++,
              this.loaded = !1,
              this.getTemplate = function(t, e) {
                  return r.component ? r.factory.makeComponentTemplate(t, e, r.component, r.viewDecl.bindings) : r.template
              }
          }
          return t.prototype.load = function() {
              var t = this
                , e = ce.$q
                , n = new dn(this.path)
                , r = this.path.reduce(function(t, e) {
                  return me(t, e.paramValues)
              }, {})
                , i = {
                  template: e.when(this.factory.fromConfig(this.viewDecl, r, n)),
                  controller: e.when(this.getController(n))
              };
              return e.all(i).then(function(e) {
                  return Ye.traceViewServiceEvent("Loaded", t),
                  t.controller = e.controller,
                  me(t, e.template),
                  t
              })
          }
          ,
          t.prototype.getController = function(t) {
              var e = this.viewDecl.controllerProvider;
              if (!c(e))
                  return this.viewDecl.controller;
              var n = ce.$injector.annotate(e)
                , r = re(e) ? x(e) : e
                , i = new sn("",r,n);
              return i.get(t)
          }
          ,
          t
      }()
        , oi = function() {
          function t() {
              var t = this;
              this._useHttp = Mt.version.minor < 3,
              this.$get = ["$http", "$templateCache", "$injector", function(e, n, r) {
                  return t.$templateRequest = r.has && r.has("$templateRequest") && r.get("$templateRequest"),
                  t.$http = e,
                  t.$templateCache = n,
                  t
              }
              ]
          }
          return t.prototype.useHttpService = function(t) {
              this._useHttp = t
          }
          ,
          t.prototype.fromConfig = function(t, e, n) {
              var r = "<ui-view></ui-view>"
                , i = function(t) {
                  return ce.$q.when(t).then(function(t) {
                      return {
                          template: t
                      }
                  })
              }
                , o = function(t) {
                  return ce.$q.when(t).then(function(t) {
                      return {
                          component: t
                      }
                  })
              };
              return Xt(t.template) ? i(this.fromString(t.template, e)) : Xt(t.templateUrl) ? i(this.fromUrl(t.templateUrl, e)) : Xt(t.templateProvider) ? i(this.fromProvider(t.templateProvider, e, n)) : Xt(t.component) ? o(t.component) : Xt(t.componentProvider) ? o(this.fromComponentProvider(t.componentProvider, e, n)) : i(r)
          }
          ,
          t.prototype.fromString = function(t, e) {
              return Zt(t) ? t(e) : t
          }
          ,
          t.prototype.fromUrl = function(t, e) {
              return Zt(t) && (t = t(e)),
              null == t ? null : this._useHttp ? this.$http.get(t, {
                  cache: this.$templateCache,
                  headers: {
                      Accept: "text/html"
                  }
              }).then(function(t) {
                  return t.data
              }) : this.$templateRequest(t)
          }
          ,
          t.prototype.fromProvider = function(t, e, n) {
              var r = ce.$injector.annotate(t)
                , i = re(t) ? x(t) : t
                , o = new sn("",i,r);
              return o.get(n)
          }
          ,
          t.prototype.fromComponentProvider = function(t, e, n) {
              var r = ce.$injector.annotate(t)
                , i = re(t) ? x(t) : t
                , o = new sn("",i,r);
              return o.get(n)
          }
          ,
          t.prototype.makeComponentTemplate = function(t, e, n, r) {
              r = r || {};
              var i = Mt.version.minor >= 3 ? "::" : ""
                , o = function(t) {
                  var e = W(t);
                  return /^(x|data)-/.exec(e) ? "x-" + e : e
              }
                , a = function(n) {
                  var a = n.name
                    , s = n.type
                    , u = o(a);
                  if (t.attr(u) && !r[a])
                      return u + "='" + t.attr(u) + "'";
                  var c = r[a] || a;
                  if ("@" === s)
                      return u + "='{{" + i + "$resolve." + c + "}}'";
                  if ("&" === s) {
                      var l = e.getResolvable(c)
                        , f = l && l.data
                        , p = f && ce.$injector.annotate(f) || []
                        , d = re(f) ? "[" + (f.length - 1) + "]" : "";
                      return u + "='$resolve." + c + d + "(" + p.join(",") + ")'"
                  }
                  return u + "='" + i + "$resolve." + c + "'"
              }
                , s = yt(n).map(a).join(" ")
                , u = o(n);
              return "<" + u + " " + s + "></" + u + ">"
          }
          ,
          t
      }()
        , ai = function(t) {
          return si(ne(t.bindToController) ? t.bindToController : t.scope)
      }
        , si = function(t) {
          return Object.keys(t || {}).map(function(e) {
              return [e, /^([=<@&])[?]?(.*)/.exec(t[e])]
          }).filter(function(t) {
              return Xt(t) && re(t[1])
          }).map(function(t) {
              return {
                  name: t[1][2] || t[0],
                  type: t[1][1]
              }
          })
      }
        , ui = function() {
          function t(e, n) {
              this.stateRegistry = e,
              this.stateService = n,
              p(Bt(t.prototype), this, Bt(this))
          }
          return t.prototype.decorator = function(t, e) {
              return this.stateRegistry.decorator(t, e) || this
          }
          ,
          t.prototype.state = function(t, e) {
              return ne(t) ? e = t : e.name = t,
              this.stateRegistry.register(e),
              this
          }
          ,
          t.prototype.onInvalid = function(t) {
              return this.stateService.onInvalid(t)
          }
          ,
          t
      }()
        , ci = function(t) {
          return function(e) {
              function n(t, e) {
                  var n = new dn(t.treeChanges(i))
                    , o = me(Si(n), {
                      $state$: e,
                      $transition$: t
                  });
                  return ce.$injector.invoke(r, this, o)
              }
              var r = e[t]
                , i = "onExit" === t ? "from" : "to";
              return r ? n : void 0
          }
      }
        , li = function() {
          function t(t) {
              this._urlListeners = [],
              this.$locationProvider = t;
              var e = Bt(t);
              p(e, this, e, ["hashPrefix"])
          }
          return t.prototype.dispose = function() {}
          ,
          t.prototype.onChange = function(t) {
              var e = this;
              return this._urlListeners.push(t),
              function() {
                  return be(e._urlListeners)(t)
              }
          }
          ,
          t.prototype.html5Mode = function() {
              var t = this.$locationProvider.html5Mode();
              return t = ne(t) ? t.enabled : t,
              t && this.$sniffer.history
          }
          ,
          t.prototype.url = function(t, e, n) {
              return void 0 === e && (e = !1),
              t && this.$location.url(t),
              e && this.$location.replace(),
              n && this.$location.state(n),
              this.$location.url()
          }
          ,
          t.prototype._runtimeServices = function(t, e, n, r) {
              var i = this;
              this.$location = e,
              this.$sniffer = n,
              t.$on("$locationChangeSuccess", function(t) {
                  return i._urlListeners.forEach(function(e) {
                      return e(t)
                  })
              });
              var o = Bt(e)
                , a = Bt(r);
              p(o, this, o, ["replace", "path", "search", "hash"]),
              p(o, this, o, ["port", "protocol", "host"]),
              p(a, this, a, ["baseHref"])
          }
          ,
          t.monkeyPatchPathParameterType = function(t) {
              var e = t.urlMatcherFactory.type("path");
              e.encode = function(t) {
                  return null != t ? t.toString().replace(/(~|\/)/g, function(t) {
                      return {
                          "~": "~~",
                          "/": "~2F"
                      }[t]
                  }) : t
              }
              ,
              e.decode = function(t) {
                  return null != t ? t.toString().replace(/(~~|~2F)/g, function(t) {
                      return {
                          "~~": "~",
                          "~2F": "/"
                      }[t]
                  }) : t
              }
          }
          ,
          t
      }()
        , fi = function() {
          function t(t) {
              this._router = t,
              this._urlRouter = t.urlRouter
          }
          return t.prototype.$get = function() {
              var t = this._urlRouter;
              return t.update(!0),
              t.interceptDeferred || t.listen(),
              t
          }
          ,
          t.prototype.rule = function(t) {
              var e = this;
              if (!Zt(t))
                  throw new Error("'rule' must be a function");
              var n = function() {
                  return t(ce.$injector, e._router.locationService)
              }
                , r = new Un(n,l);
              return this._urlRouter.rule(r),
              this
          }
          ,
          t.prototype.otherwise = function(t) {
              var e = this
                , n = this._urlRouter;
              if (ee(t))
                  n.otherwise(t);
              else {
                  if (!Zt(t))
                      throw new Error("'rule' must be a string or function");
                  n.otherwise(function() {
                      return t(ce.$injector, e._router.locationService)
                  })
              }
              return this
          }
          ,
          t.prototype.when = function(e, n) {
              return (re(n) || Zt(n)) && (n = t.injectableHandler(this._router, n)),
              this._urlRouter.when(e, n),
              this
          }
          ,
          t.injectableHandler = function(t, e) {
              return function(n) {
                  return ce.$injector.invoke(e, null, {
                      $match: n,
                      $stateParams: t.globals.params
                  })
              }
          }
          ,
          t.prototype.deferIntercept = function(t) {
              this._urlRouter.deferIntercept(t)
          }
          ,
          t
      }();
      Mt.module("ui.router.angular1", []);
      var pi = Mt.module("ui.router.init", [])
        , di = Mt.module("ui.router.util", ["ng", "ui.router.init"])
        , hi = Mt.module("ui.router.router", ["ui.router.util"])
        , mi = Mt.module("ui.router.state", ["ui.router.router", "ui.router.util", "ui.router.angular1"])
        , gi = Mt.module("ui.router", ["ui.router.init", "ui.router.state", "ui.router.angular1"])
        , vi = (Mt.module("ui.router.compat", ["ui.router"]),
      null);
      bt.$inject = ["$locationProvider"];
      var yi = function(t) {
          return ["$uiRouterProvider", function(e) {
              var n = e.router[t];
              return n.$get = function() {
                  return n
              }
              ,
              n
          }
          ]
      };
      $t.$inject = ["$injector", "$q", "$uiRouter"];
      var bi = function(t) {
          return t.urlRouterProvider = new fi(t)
      }
        , $i = function() {
          return me(vi.stateProvider, {
              $get: function() {
                  return vi.stateService
              }
          })
      };
      wt.$inject = ["$rootScope"],
      pi.provider("$uiRouter", bt),
      hi.provider("$urlRouter", ["$uiRouterProvider", bi]),
      di.provider("$urlService", yi("urlService")),
      di.provider("$urlMatcherFactory", ["$uiRouterProvider", function() {
          return vi.urlMatcherFactory
      }
      ]),
      di.provider("$templateFactory", function() {
          return new oi
      }),
      mi.provider("$stateRegistry", yi("stateRegistry")),
      mi.provider("$uiRouterGlobals", yi("globals")),
      mi.provider("$transitions", yi("transitionService")),
      mi.provider("$state", ["$uiRouterProvider", $i]),
      mi.factory("$stateParams", ["$uiRouter", function(t) {
          return t.globals.params
      }
      ]),
      gi.factory("$view", function() {
          return vi.viewService
      }),
      gi.service("$trace", function() {
          return Ye
      }),
      gi.run(wt),
      di.run(["$urlMatcherFactory", function() {}
      ]),
      mi.run(["$state", function() {}
      ]),
      hi.run(["$urlRouter", function() {}
      ]),
      pi.run($t);
      var wi, Si = function(t) {
          var e = t.getTokens().filter(ee)
            , n = e.map(function(e) {
              var n = t.getResolvable(e)
                , r = t.getPolicy(n).async;
              return [e, "NOWAIT" === r ? n.promise : n.data]
          });
          return n.reduce(C, {})
      };
      wi = ["$uiRouter", "$timeout", function(t, e) {
          var n = t.stateService;
          return {
              restrict: "A",
              require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
              link: function(r, i, o, a) {
                  function s() {
                      var t = d();
                      f && f(),
                      l && (f = l.$$addStateInfo(t.uiState, t.uiStateParams)),
                      null != t.href && o.$set(c.attr, t.href)
                  }
                  var u, c = kt(i), l = a[1] || a[0], f = null, p = {}, d = function() {
                      return _t(n, i, p)
                  }, h = St(o.uiSref);
                  p.uiState = h.state,
                  p.uiStateOpts = o.uiSrefOpts ? r.$eval(o.uiSrefOpts) : {},
                  h.paramExpr && (r.$watch(h.paramExpr, function(t) {
                      p.uiStateParams = me({}, t),
                      s()
                  }, !0),
                  p.uiStateParams = me({}, r.$eval(h.paramExpr))),
                  s(),
                  r.$on("$destroy", t.stateRegistry.onStatesChanged(s)),
                  r.$on("$destroy", t.transitionService.onSuccess({}, s)),
                  c.clickable && (u = Et(i, n, e, c, d),
                  xt(i, r, u, p.uiStateOpts))
              }
          }
      }
      ];
      var Ti;
      Ti = ["$uiRouter", "$timeout", function(t, e) {
          var n = t.stateService;
          return {
              restrict: "A",
              require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
              link: function(r, i, o, a) {
                  function s() {
                      var t = h();
                      p && p(),
                      l && (p = l.$$addStateInfo(t.uiState, t.uiStateParams)),
                      null != t.href && o.$set(c.attr, t.href)
                  }
                  var u, c = kt(i), l = a[1] || a[0], p = null, d = {}, h = function() {
                      return _t(n, i, d)
                  }, m = ["uiState", "uiStateParams", "uiStateOpts"], g = m.reduce(function(t, e) {
                      return t[e] = f,
                      t
                  }, {});
                  m.forEach(function(t) {
                      d[t] = o[t] ? r.$eval(o[t]) : null,
                      o.$observe(t, function(e) {
                          g[t](),
                          g[t] = r.$watch(e, function(e) {
                              d[t] = e,
                              s()
                          }, !0)
                      })
                  }),
                  s(),
                  r.$on("$destroy", t.stateRegistry.onStatesChanged(s)),
                  r.$on("$destroy", t.transitionService.onSuccess({}, s)),
                  c.clickable && (u = Et(i, n, e, c, h),
                  xt(i, r, u, d.uiStateOpts))
              }
          }
      }
      ];
      var _i;
      _i = ["$state", "$stateParams", "$interpolate", "$uiRouter", function(t, e, n, r) {
          return {
              restrict: "A",
              controller: ["$scope", "$element", "$attrs", function(e, i, o) {
                  function a(t) {
                      t.promise.then(u, f)
                  }
                  function s(e, n, r) {
                      var o = t.get(e, Tt(i))
                        , a = {
                          state: o || {
                              name: e
                          },
                          params: n,
                          activeClass: r
                      };
                      return d.push(a),
                      function() {
                          be(d)(a)
                      }
                  }
                  function u() {
                      var n = function(t) {
                          return t.split(/\s/).filter(l)
                      }
                        , r = function(t) {
                          return t.map(function(t) {
                              return t.activeClass
                          }).map(n).reduce(Ce, [])
                      }
                        , o = r(d).concat(n(c)).reduce(De, [])
                        , a = r(d.filter(function(e) {
                          return t.includes(e.state.name, e.params)
                      }))
                        , s = !!d.filter(function(e) {
                          return t.is(e.state.name, e.params)
                      }).length
                        , u = s ? n(c) : []
                        , f = a.concat(u).reduce(De, [])
                        , p = o.filter(function(t) {
                          return !ye(f, t)
                      });
                      e.$evalAsync(function() {
                          f.forEach(function(t) {
                              return i.addClass(t)
                          }),
                          p.forEach(function(t) {
                              return i.removeClass(t)
                          })
                      })
                  }
                  var c, p, d = [];
                  c = n(o.uiSrefActiveEq || "", !1)(e);
                  try {
                      p = e.$eval(o.uiSrefActive)
                  } catch (h) {}
                  p = p || n(o.uiSrefActive || "", !1)(e),
                  ne(p) && he(p, function(t, n) {
                      if (ee(t)) {
                          var r = St(t);
                          s(r.state, e.$eval(r.paramExpr), n)
                      }
                  }),
                  this.$$addStateInfo = function(t, e) {
                      if (!(ne(p) && d.length > 0)) {
                          var n = s(t, e, p);
                          return u(),
                          n
                      }
                  }
                  ,
                  e.$on("$stateChangeSuccess", u),
                  e.$on("$destroy", r.transitionService.onStart({}, a)),
                  r.globals.transition && a(r.globals.transition),
                  u()
              }
              ]
          }
      }
      ],
      Mt.module("ui.router.state").directive("uiSref", wi).directive("uiSrefActive", _i).directive("uiSrefActiveEq", _i).directive("uiState", Ti),
      Dt.$inject = ["$state"],
      Pt.$inject = ["$state"],
      Mt.module("ui.router.state").filter("isState", Dt).filter("includedByState", Pt);
      var ki;
      ki = ["$view", "$animate", "$uiViewScroll", "$interpolate", "$q", function(t, e, n, r, i) {
          function o() {
              return {
                  enter: function(t, n, r) {
                      Mt.version.minor > 2 ? e.enter(t, null, n).then(r) : e.enter(t, null, n, r)
                  },
                  leave: function(t, n) {
                      Mt.version.minor > 2 ? e.leave(t).then(n) : e.leave(t, n)
                  }
              }
          }
          function a(t, e) {
              return t === e
          }
          var s = {
              $cfg: {
                  viewDecl: {
                      $context: t._pluginapi._rootViewContext()
                  }
              },
              $uiView: {}
          }
            , u = {
              count: 0,
              restrict: "ECA",
              terminal: !0,
              priority: 400,
              transclude: "element",
              compile: function(e, c, l) {
                  return function(e, c, f) {
                      function p(t) {
                          (!t || t instanceof ii) && (a(S, t) || (Ye.traceUIViewConfigUpdated(k, t && t.viewDecl && t.viewDecl.$context),
                          S = t,
                          h(t)))
                      }
                      function d() {
                          if (m && (Ye.traceUIViewEvent("Removing (previous) el", m.data("$uiView")),
                          m.remove(),
                          m = null),
                          v && (Ye.traceUIViewEvent("Destroying scope", k),
                          v.$destroy(),
                          v = null),
                          g) {
                              var t = g.data("$uiViewAnim");
                              Ye.traceUIViewEvent("Animate out", t),
                              w.leave(g, function() {
                                  t.$$animLeave.resolve(),
                                  m = null
                              }),
                              m = g,
                              g = null
                          }
                      }
                      function h(t) {
                          var r = e.$new()
                            , o = i.defer()
                            , a = i.defer()
                            , s = {
                              $cfg: t,
                              $uiView: k
                          }
                            , u = {
                              $animEnter: o.promise,
                              $animLeave: a.promise,
                              $$animLeave: a
                          };
                          r.$emit("$viewContentLoading", _);
                          var f = l(r, function(t) {
                              t.data("$uiViewAnim", u),
                              t.data("$uiView", s),
                              w.enter(t, c, function() {
                                  o.resolve(),
                                  v && v.$emit("$viewContentAnimationEnded"),
                                  (Xt($) && !$ || e.$eval($)) && n(t)
                              }),
                              d()
                          });
                          g = f,
                          v = r,
                          v.$emit("$viewContentLoaded", t || S),
                          v.$eval(b)
                      }
                      var m, g, v, y, b = f.onload || "", $ = f.autoscroll, w = o(f, e), S = void 0, T = c.inheritedData("$uiView") || s, _ = r(f.uiView || f.name || "")(e) || "$default", k = {
                          $type: "ng1",
                          id: u.count++,
                          name: _,
                          fqn: T.$uiView.fqn ? T.$uiView.fqn + "." + _ : _,
                          config: null,
                          configUpdated: p,
                          get creationContext() {
                              var t = jt("$cfg.viewDecl.$context")(T)
                                , e = jt("$uiView.creationContext")(T);
                              return t || e
                          }
                      };
                      Ye.traceUIViewEvent("Linking", k),
                      c.data("$uiView", {
                          $uiView: k
                      }),
                      h(),
                      y = t.registerUIView(k),
                      e.$on("$destroy", function() {
                          Ye.traceUIViewEvent("Destroying/Unregistering", k),
                          y()
                      })
                  }
              }
          };
          return u
      }
      ],
      At.$inject = ["$compile", "$controller", "$transitions", "$view", "$q", "$timeout"];
      var Ei = "function" == typeof Mt.module("ui.router").component
        , Ci = 0;
      Mt.module("ui.router.state").directive("uiView", ki),
      Mt.module("ui.router.state").directive("uiView", At),
      Mt.module("ui.router.state").provider("$uiViewScroll", Rt);
      var xi = "ui.router";
      t["default"] = xi,
      t.core = ei,
      t.watchDigests = wt,
      t.getLocals = Si,
      t.getNg1ViewConfigFactory = gt,
      t.ng1ViewsBuilder = vt,
      t.Ng1ViewConfig = ii,
      t.StateProvider = ui,
      t.UrlRouterProvider = fi,
      t.root = le,
      t.fromJson = pe,
      t.toJson = de,
      t.forEach = he,
      t.extend = me,
      t.equals = ge,
      t.identity = l,
      t.noop = f,
      t.createProxyFunctions = p,
      t.inherit = ve,
      t.inArray = ye,
      t._inArray = d,
      t.removeFrom = be,
      t._removeFrom = h,
      t.pushTo = $e,
      t._pushTo = m,
      t.deregAll = we,
      t.defaults = g,
      t.mergeR = Se,
      t.ancestors = v,
      t.pick = y,
      t.omit = b,
      t.pluck = $,
      t.filter = w,
      t.find = S,
      t.mapObj = Te,
      t.map = T,
      t.values = _e,
      t.allTrueR = ke,
      t.anyTrueR = Ee,
      t.unnestR = Ce,
      t.flattenR = xe,
      t.pushR = _,
      t.uniqR = De,
      t.unnest = Pe,
      t.flatten = Ae,
      t.assertPredicate = Oe,
      t.assertMap = Re,
      t.assertFn = k,
      t.pairs = Ie,
      t.arrayTuples = E,
      t.applyPairs = C,
      t.tail = x,
      t.copy = D,
      t._extend = A,
      t.silenceUncaughtInPromise = Me,
      t.silentRejection = Le,
      t.notImplemented = ue,
      t.services = ce,
      t.Glob = zt,
      t.curry = n,
      t.compose = r,
      t.pipe = i,
      t.prop = Lt,
      t.propEq = Ft,
      t.parse = jt,
      t.not = Ht,
      t.and = o,
      t.or = a,
      t.all = Nt,
      t.any = Vt,
      t.is = Ut,
      t.eq = qt,
      t.val = Bt,
      t.invoke = s,
      t.pattern = u,
      t.isUndefined = Gt,
      t.isDefined = Xt,
      t.isNull = Jt,
      t.isNullOrUndefined = Qt,
      t.isFunction = Zt,
      t.isNumber = te,
      t.isString = ee,
      t.isObject = ne,
      t.isArray = re,
      t.isDate = ie,
      t.isRegExp = oe,
      t.isState = ae,
      t.isInjectable = c,
      t.isPromise = se,
      t.Queue = Fe,
      t.maxLength = B,
      t.padString = z,
      t.kebobString = W,
      t.functionToString = Y,
      t.fnToString = K,
      t.stringify = G,
      t.beforeAfterSubstr = bn,
      t.hostRegex = $n,
      t.stripFile = wn,
      t.splitHash = Sn,
      t.splitQuery = Tn,
      t.splitEqual = _n,
      t.trimHashVal = kn,
      t.splitOnDelim = X,
      t.joinNeighborsR = J,
      t.Trace = We,
      t.trace = Ye,
      t.Param = nn,
      t.ParamTypes = En,
      t.StateParams = xn,
      t.ParamType = Ze,
      t.PathNode = rn,
      t.PathUtils = on,
      t.resolvePolicies = un,
      t.defaultResolvePolicy = an,
      t.Resolvable = sn,
      t.NATIVE_INJECTOR_TOKEN = pn,
      t.ResolveContext = dn,
      t.resolvablesBuilder = it,
      t.StateBuilder = Rn,
      t.StateObject = Wt,
      t.StateMatcher = In,
      t.StateQueueManager = Mn,
      t.StateRegistry = Ln,
      t.StateService = Rr,
      t.TargetState = Ke,
      t.HookBuilder = Qe,
      t.matchState = L,
      t.RegisteredHook = Je,
      t.makeEvent = F,
      t.Rejection = He,
      t.Transition = gn,
      t.TransitionHook = Xe,
      t.TransitionEventType = xr,
      t.defaultTransOpts = Ar,
      t.TransitionService = Or,
      t.UrlMatcher = Hn,
      t.UrlMatcherFactory = Nn,
      t.UrlRouter = Yn,
      t.UrlRuleFactory = Vn,
      t.BaseUrlRule = Un,
      t.UrlService = nr,
      t.ViewService = Kn,
      t.UIRouterGlobals = Gn,
      t.UIRouter = ir,
      t.$q = Ir,
      t.$injector = jr,
      t.BaseLocationServices = Ur,
      t.HashLocationService = Br,
      t.MemoryLocationService = Wr,
      t.PushStateLocationService = Kr,
      t.MemoryLocationConfig = Gr,
      t.BrowserLocationConfig = Xr,
      t.keyValsToObjectR = Hr,
      t.getParams = Nr,
      t.parseUrl = dt,
      t.buildUrl = Vr,
      t.locationPluginFactory = ht,
      t.servicesPlugin = mt,
      t.hashLocationPlugin = Jr,
      t.pushStateLocationPlugin = Qr,
      t.memoryLocationPlugin = Zr,
      t.UIRouterPluginBase = ti,
      Object.defineProperty(t, "__esModule", {
          value: !0
      })
  }),
  function() {
      null != document.addEventListener && document.addEventListener("DOMContentLoaded", function() {
          return FastClick.attach(document.body)
      }, !1)
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.gaEvent", []),
      t.service("gaEvent", function() {
          var t, e;
          return t = function(t) {
              var e;
              return e = t.split(":"),
              {
                  hitType: "event",
                  eventCategory: e[0],
                  eventAction: e[1],
                  eventLabel: e[2]
              }
          }
          ,
          e = function(e, n) {
              var r;
              return r = t(e),
              null != n && (r.hitCallback = n),
              r
          }
          ,
          {
              send: function(t, n) {
                  return "undefined" != typeof ga && null !== ga ? ga("send", e(t, n)) : void 0
              }
          }
      }),
      t.directive("gaEventOnSubmit", ["gaEvent", function(t) {
          return {
              restrict: "A",
              scope: {
                  encodedEventInfo: "@gaEventOnSubmit"
              },
              link: function(e, n) {
                  return n.bind("submit", function(r) {
                      return r.preventDefault(),
                      t.send(e.encodedEventInfo, function() {
                          return n[0].submit()
                      })
                  })
              }
          }
      }
      ]),
      t.directive("gaEventOnClick", ["gaEvent", "$window", function(t, e) {
          return {
              restrict: "A",
              scope: {
                  encodedEventInfo: "@gaEventOnClick"
              },
              link: function(n, r) {
                  return r.bind("click", function(r) {
                      return r.preventDefault(),
                      t.send(n.encodedEventInfo, function() {
                          return e.location.assign($eleme[0].href)
                      })
                  })
              }
          }
      }
      ])
  }
  .call(this),
  function() {
      var t, e, n;
      e = angular.module("lmgtfy.languageSelector", ["serverValue"]),
      n = '<button\n  bs-options="lang.code as lang.presentation for lang in languages"\n  bs-select=""\n  ng-change="goToLanguage()"\n  class="btn btn-default btn-sm"\n  ng-model="selectedLanguage"\n  type="button"></button>',
      t = '<select\n  ng-model="selectedLanguage"\n  ng-change="goToLanguage()"\n  ng-options="lang.code as lang.presentation for lang in languages" >\n</select>',
      e.directive("languageSelector", ["deviceCheck", "languages", "currentLocale", "$window", function(e, r, i, o) {
          return {
              restrict: "C",
              scope: {
                  label: "@"
              },
              template: '<label ng-bind="label"></label>\n<div class="h-spacer-half"></div>',
              compile: function(a) {
                  return e.isMobileOrTablet() ? a.append(t) : a.append(n),
                  function(t) {
                      return t.languages = r,
                      t.selectedLanguage = i,
                      t.goToLanguage = function() {
                          var e, n;
                          return n = o.location.host.split("."),
                          e = [n[n.length - 2], n[n.length - 1]],
                          "en" !== t.selectedLanguage && e.unshift(t.selectedLanguage),
                          o.location = o.location.protocol + "//" + e.join(".")
                      }
                  }
              }
          }
      }
      ])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.navDropdown", ["LocalStorageModule"]),
      t.directive("appendNavDropdown", ["$compile", "$http", "localStorageService", function(t, e, n) {
          return {
              restrict: "A",
              scope: {},
              link: function(r, i) {
                  var o, a;
                  return o = function(e) {
                      return i.append(t(e)(r))
                  }
                  ,
                  n.cookie.get("nav_menu") ? (a = n.get("navMenu"),
                  null != a ? o(a) : e.get("/my_account/nav_menu.html").then(function(t) {
                      return n.set("navMenu", t.data),
                      o(t.data)
                  })) : n.remove("navMenu")
              }
          }
      }
      ])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.selectOnClick", []),
      t.directive("selectOnClick", function() {
          return {
              restrict: "C",
              link: function(t, e) {
                  return e.bind("click", function() {
                      return e[0].select()
                  })
              }
          }
      })
  }
  .call(this),
  function() {
      var mod;
      mod = angular.module("lmgtfy.stickerPopover", ["LocalStorageModule", "lmgtfy.gaEvent"]),
      mod.directive("stickerPopover", ["$sce", function($sce) {
          return {
              restrict: "C",
              scope: !0,
              link: function($scope, $element, $attrs) {
                  var variants;
                  return variants = eval($attrs.variants),
                  $scope.variant = variants[Math.floor(Math.random() * variants.length)],
                  angular.forEach($scope.variant, function(t, e) {
                      return "id" !== e ? $scope.variant[e] = $sce.trustAsHtml(t) : void 0
                  })
              },
              controller: ["$scope", "stickerPopoverUXManager", "gaEvent", function(t, e, n) {
                  return t.show = function() {
                      return n.send("stickerPopover:show:" + t.variant.id),
                      t.active = !0
                  }
                  ,
                  t.hide = function() {
                      return n.send("stickerPopover:hide:" + t.variant.id),
                      t.active = !1
                  }
                  ,
                  t.$on("stickerPopover:show", t.show),
                  t.$on("stickerPopover:hide", t.hide),
                  t.dismiss = function() {
                      return e.userDismiss()
                  }
                  ,
                  t.undismiss = function() {
                      return e.userUndismiss()
                  }
              }
              ]
          }
      }
      ]),
      mod.service("stickerPopoverAPI", ["$rootScope", function(t) {
          return {
              show: function() {
                  return t.$broadcast("stickerPopover:show")
              },
              hide: function() {
                  return t.$broadcast("stickerPopover:hide")
              }
          }
      }
      ]),
      mod.service("stickerPopoverUXManager", ["$rootScope", "stickerPopoverAPI", "localStorageService", function(t, e, n) {
          return {
              popoverInterval: 4,
              managedShow: function() {
                  var t;
                  return t = n.get("deferPopover"),
                  null == t || 0 >= t ? e.show() : null != t && t > 0 ? (n.set("deferPopover", t - 1),
                  e.hide()) : void 0
              },
              userDismiss: function() {
                  return n.set("deferPopover", this.popoverInterval),
                  e.hide()
              },
              userUndismiss: function() {
                  return n.set("deferPopover", 0),
                  e.show()
              }
          }
      }
      ])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.adSense", []),
      t.service("adSense", ["$timeout", function() {
          return {
              showAds: function() {
                  var t, e;
                  window.adsbygoogle || (window.adsbygoogle = []);
                  try {
                      return window.adsbygoogle.push({})
                  } catch (e) {
                      return t = e,
                      console.log(t)
                  }
              }
          }
      }
      ])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.devMode", ["lmgtfy.queryParams"]),
      t.service("devMode", ["queryParams", "$window", function(t, e) {
          return {
              isActive: function() {
                  return null != t.fetch("devMode") && /localhost|\.test$/.test(e.location.hostname)
              },
              step: function() {
                  return t.fetch("devMode")
              }
          }
      }
      ])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.deviceCheck", []),
      t.service("deviceCheck", function() {
          return {
              determination: null,
              isMobileOrTablet: function() {
                  var t;
                  return null != this.determination ? this.determination : (t = navigator.userAgent || navigator.vendor || window.opera,
                  this.determination = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)))
              }
          }
      })
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.gentleEncoding", []),
      t.service("gentleEncoding", function() {
          return {
              encode: function(t) {
                  return "undefined" != typeof encodeURIComponent && null !== encodeURIComponent ? encodeURIComponent(t).replace(/%20(\D)?/g, "+$1").replace(/'/g, escape("'")) : escape(t).replace(/\+/g, "%2B").replace(/%20/g, "+")
              },
              decode: function(t) {
                  return t = t.replace(/\+/g, " "),
                  "undefined" != typeof decodeURIComponent && null !== decodeURIComponent ? decodeURIComponent(t) : unescape(t)
              }
          }
      })
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.imagePreloader", []),
      t.service("imagePreloader", function() {
          return {
              preload: function(t) {
                  var e;
                  return e = new Image,
                  e.src = t
              }
          }
      })
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.queryParams", []),
      t.service("queryParams", ["$window", function(t) {
          return {
              parseQueryParams: function() {
                  var e, n, r, i, o, a, s, u;
                  for (o = {},
                  a = t.location.search.substr(1).split("&"),
                  e = 0,
                  r = a.length; r > e; e++)
                      i = a[e],
                      s = i.split("="),
                      n = s[0],
                      u = s[1],
                      o[n] = u;
                  return o
              },
              all: function() {
                  return this._queryParams || (this._queryParams = this.parseQueryParams())
              },
              fetch: function(t) {
                  return this.all()[t]
              }
          }
      }
      ])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.services", []),
      t.value("services", [])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.translationWizard", []),
      t.component("translationWizard", {
          bindings: {
              languageCode: "<",
              steps: "<",
              currentStepSlug: "&",
              currentContextSlug: "&",
              afterWizard: "<",
              translations: "<",
              translationProposals: "<",
              nativeLanguage: "<"
          },
          templateUrl: "translationWizard.html",
          controller: function() {
              return this.currentStep = function(t) {
                  return function() {
                      return t.steps.filter(function(e) {
                          return e.slug === t.currentStepSlug()
                      })[0]
                  }
              }(this),
              this.currentContext = function(t) {
                  return function() {
                      return t.currentStep().contexts.filter(function(e) {
                          return e.slug === t.currentContextSlug()
                      })[0]
                  }
              }(this),
              this.nextContext = function() {
                  var t, e, n;
                  return e = this.currentContext(),
                  t = this.currentStep().contexts,
                  n = t.indexOf(e),
                  t[n + 1]
              }
              ,
              this.isFinalContext = function() {
                  return null == this.nextContext()
              }
              ,
              this.nextStep = function() {
                  var t, e;
                  return t = this.currentStep(),
                  e = this.steps.indexOf(t),
                  this.steps[e + 1]
              }
              ,
              this.stepParamCache = {},
              this.nextStepParams = function() {
                  var t, e, n;
                  return (t = this.stepParamCache)[e = this.languageCode + "/" + this.currentContext().slug] || (t[e] = this.isFinalContext() ? (n = this.nextStep(),
                  n ? {
                      languageCode: this.languageCode,
                      step: n.slug,
                      context: n.contexts[0].slug
                  } : null) : {
                      languageCode: this.languageCode,
                      step: this.currentStep().slug,
                      context: this.nextContext().slug
                  })
              }
              ,
              this.getPropPath = function(t, e) {
                  var n, r, i, o;
                  for (o = e.split("."),
                  n = 0,
                  i = o.length; i > n; n++)
                      r = o[n],
                      t = null != t ? t[r] : void 0;
                  return t
              }
              ,
              this.setPropPath = function(t, e, n) {
                  var r, i, o, a, s;
                  for (s = e.split("."),
                  r = s.pop(),
                  i = 0,
                  a = s.length; a > i; i++)
                      o = s[i],
                      void 0 === t[o] && (t[o] = {}),
                      t = t[o];
                  return t[r] = n
              }
              ,
              this.translationsSetterGetter = function(t, e) {
                  return function(n) {
                      return function(r) {
                          return null != r ? n.setPropPath(t, e, r) : n.getPropPath(t, e)
                      }
                  }(this)
              }
              ,
              this.proposalChangesTranslation = function(t) {
                  var e, n;
                  return n = this.getPropPath(this.translations, t),
                  e = this.translationProposals[t],
                  n !== e
              }
              ,
              this
          }
      })
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.wizardStep", ["lmgtfy.translationWizardSteps", "ui.router"]),
      t.component("wizardStep", {
          bindings: {
              nativeLanguage: "<",
              translations: "<",
              translationProposals: "<"
          },
          templateUrl: "wizardStep.html",
          controller: ["translationWizardSteps", "$state", "$rootScope", function(t, e, n) {
              return this.$onInit = function(t) {
                  return function() {
                      return n.translations = t.translations,
                      n.translationProposals = t.translationProposals
                  }
              }(this),
              this.translationWizardSteps = t,
              this.currentStepSlug = function() {
                  return e.params.step
              }
              ,
              this.currentContextSlug = function() {
                  return e.params.context
              }
              ,
              this
          }
          ]
      })
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.translationSubmissionReviewWizard", ["lmgtfy", "lmgtfy.translationService", "lmgtfy.wizardStep", "lmgtfy.translationWizard", "serverValue", "ui.router"]),
      t.config(["$stateProvider", "$urlRouterProvider", function(t, e) {
          return e.otherwise("/init"),
          t.state({
              "abstract": !0,
              name: "base",
              template: "<ui-view/>",
              controller: ["$scope", "$state", function() {}
              ]
          }),
          t.state({
              parent: "base",
              name: "init",
              url: "/init",
              controller: ["$state", "translationSubmissionId", "translationWizardSteps", function(t, e, n) {
                  return t.go("wizard", {
                      step: n[0].slug,
                      context: n[0].contexts[0].slug,
                      translationSubmissionId: e
                  })
              }
              ]
          }),
          t.state({
              parent: "base",
              name: "wizard",
              url: "/review/{step}/{context}",
              component: "wizardStep",
              resolve: {
                  nativeLanguage: ["TranslationService", function(t) {
                      return this.nativeLanguage || (this.nativeLanguage = t.loadTranslation("en"))
                  }
                  ],
                  translations: ["TranslationService", "translationProposals", function(t, e) {
                      return this.translations || (this.translations = t.loadTranslation(e.locale))
                  }
                  ],
                  translationProposals: ["TranslationService", "translationSubmissionId", function(t, e) {
                      return this.translationProposals || (this.translationProposals = t.loadTranslationProposals(e))
                  }
                  ]
              }
          }),
          t.state({
              name: "finalize",
              url: "/review/finalize",
              component: "finalizeStep"
          })
      }
      ]),
      t.component("finalizeStep", {
          templateUrl: "finalizeStep.html",
          scope: !0,
          controller: ["translationSubmissionId", "$http", "$window", function(t, e, n) {
              return this.reject = function() {
                  return this.submitting = !0,
                  e.put("/admin/translation_submissions/" + t + "/reject").then(function(t) {
                      return n.location = t.data
                  })
              }
              ,
              this.acceptAndApply = function() {
                  return this.submitting = !0,
                  e.put("/admin/translation_submissions/" + t + "/accept_and_apply").then(function(t) {
                      return n.location = t.data
                  })
              }
              ,
              this
          }
          ]
      })
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.translationSubmissionsWizard", ["lmgtfy", "lmgtfy.translationService", "lmgtfy.wizardStep", "lmgtfy.translationWizard", "serverValue", "ui.router"]),
      t.config(["$stateProvider", "$urlRouterProvider", function(t, e) {
          return e.otherwise("/new"),
          t.state({
              "abstract": !0,
              name: "base",
              template: "<ui-view/>",
              controller: ["$scope", "$state", "languages", function(t, e, n) {
                  return t.language = function() {
                      return n.filter(function(t) {
                          return t.code === e.params.languageCode
                      })[0]
                  }
              }
              ]
          }),
          t.state({
              parent: "base",
              name: "new",
              url: "/new",
              component: "newChooseLangStep"
          }),
          t.state({
              parent: "base",
              name: "explanation",
              url: "/new/{languageCode}/explanation",
              component: "explanationStep"
          }),
          t.state({
              parent: "base",
              name: "wizard",
              url: "/new/{languageCode}/{step}/{context}",
              component: "wizardStep",
              resolve: {
                  nativeLanguage: ["TranslationService", function(t) {
                      return this.nativeLanguage || (this.nativeLanguage = t.loadTranslation("en"))
                  }
                  ],
                  translations: ["TranslationService", "$state", "$transition$", function(t, e, n) {
                      return this.translations || (this.translations = n.isActive() ? t.loadTranslation(n._targetState._params.languageCode) : t.loadTranslation(e.params.languageCode))
                  }
                  ]
              }
          }),
          t.state({
              name: "finalize",
              url: "/new/{languageCode}/finalize",
              component: "finalizeStep"
          })
      }
      ]),
      t.component("newChooseLangStep", {
          templateUrl: "newChooseLangStep.html",
          controller: ["$scope", "languages", function(t, e) {
              return t.languages = e
          }
          ]
      }),
      t.component("explanationStep", {
          templateUrl: "explanationStep.html"
      }),
      t.component("finalizeStep", {
          templateUrl: "finalizeStep.html",
          scope: !0,
          controller: ["$rootScope", "$http", "$state", "$window", function(t, e, n, r) {
              return this.translations = t.translations,
              this.submit = function() {
                  var t, i;
                  return this.submitting = !0,
                  i = function(t) {
                      return function(e) {
                          var n;
                          return t.submitting = !1,
                          n = e.data.id,
                          r.location = "/translation_submissions/" + n + ".html"
                      }
                  }(this),
                  t = function(t) {
                      return function(e) {
                          return console.log("Reason: %o", e.data),
                          alert("Failed to save."),
                          t.submitting = !1
                      }
                  }(this),
                  e.post("/translation_submissions", {
                      translation_submission: angular.extend({
                          locale: n.params.languageCode
                      }, this.translations)
                  }).then(i, t)
              }
              ,
              this
          }
          ]
      })
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.translationService", []),
      t.service("TranslationService", ["$http", function(t) {
          return {
              loadTranslation: function(e) {
                  return t.get("/locales/" + e + ".json").then(function(t) {
                      return t.data
                  })
              },
              loadTranslationProposals: function(e) {
                  return t.get("/admin/translation_submissions/" + e + ".json").then(function(t) {
                      var e, n, r, i, o;
                      for (r = {
                          locale: t.data.locale
                      },
                      o = t.data.proposed_translations,
                      e = 0,
                      n = o.length; n > e; e++)
                          i = o[e],
                          r[i.key] = i.value;
                      return r
                  })
              }
          }
      }
      ])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.translationWizardSteps", []),
      t.service("translationWizardSteps", function() {
          return [{
              slug: "nav",
              title: "Navigation",
              contexts: [{
                  slug: "menu",
                  translationKeys: ["layouts.navbar.logged_in_as", "layouts.navbar.my_account", "layouts.navbar.logout"]
              }]
          }, {
              slug: "making-a-link",
              title: "Making an LMGTFY Link",
              contexts: [{
                  slug: "main",
                  translationKeys: ["links.new.search_type", "links.teacher.search_term_input.search_placeholder", "links.new.get_link", "links.new.preview", "links.new.include_internet_explainer"]
              }, {
                  slug: "search-types",
                  translationKeys: ["search_types.web", "search_types.books", "search_types.finance", "search_types.images", "search_types.maps", "search_types.news", "search_types.shopping", "search_types.scholar", "search_types.videos", "search_types.rumors", "search_types.encyclopedia"]
              }]
          }, {
              slug: "sharing-a-link",
              title: "Sharing an LMGTFY Link",
              contexts: [{
                  slug: "main",
                  translationKeys: ["links.new.share_the_link_below", "links.new.shorten_link", "links.new.change_search"]
              }]
          }, {
              slug: "internet-explainer",
              title: "The Internet Explainer",
              contexts: [{
                  slug: "internet",
                  translationKeys: ["links.show.this_for_is_the_internet", "links.show.is_the_internet"]
              }, {
                  slug: "search",
                  translationKeys: ["links.show.these", "links.show.let_your_search_it", "links.show.theres_more"]
              }, {
                  slug: "recommend",
                  translationKeys: ["links.show.next_time_you_have_a_question", "links.show.i_recommend", "links.show.using"]
              }, {
                  slug: "works",
                  translationKeys: ["links.show.it_works_like", "links.show.this_for_it_works_like"]
              }]
          }, {
              slug: "search-illustration",
              title: "Search Illustration",
              contexts: [{
                  slug: "step",
                  translationKeys: ["search_illustration.step", "search_illustration.user_click_prompt"]
              }, {
                  slug: "instructions",
                  translationKeys: ["search_illustration.visit", "search_illustration.type_your_question", "search_illustration.click_the_button", "search_illustration.thats_it"]
              }, {
                  slug: "g-buttons",
                  translationKeys: ["search_illustration.google_search", "search_illustration.feeling_lucky"]
              }, {
                  slug: "a-buttons",
                  translationKeys: ["search_illustration.primary_action"]
              }, {
                  slug: "k-buttons",
                  translationKeys: ["search_illustration.find_answers"]
              }]
          }, {
              slug: "footer",
              title: "Page Footer",
              contexts: [{
                  slug: "main",
                  translationKeys: ["layouts.footer.about", "layouts.footer.privacy", "layouts.footer.contact", "layouts.footer.language", "layouts.footer.buy_stickers", "layouts.footer.live_stream"]
              }]
          }, {
              slug: "disclaimers",
              title: "Disclaimers",
              contexts: [{
                  slug: "main",
                  translationKeys: ["google_disclaimer", "google_illustration_disclaimer"]
              }]
          }, {
              slug: "sticker-promo",
              title: "Sticker Promotions",
              contexts: [{
                  slug: "basic",
                  translationKeys: ["sticker_popover.basic.title", "sticker_popover.basic.pre", "sticker_popover.basic.button"]
              }, {
                  slug: "survey",
                  translationKeys: ["sticker_popover.survey.title", "sticker_popover.survey.post", "sticker_popover.survey.buttonA", "sticker_popover.survey.buttonB"]
              }]
          }, {
              slug: "stickers-page",
              title: "Stickers Page",
              contexts: [{
                  slug: "title-and-sharing",
                  translationKeys: ["static.stickers.head.title", "static.stickers.head.og_description"]
              }, {
                  slug: "jumbotron",
                  translationKeys: ["static.stickers.jumbotron.primary", "static.stickers.jumbotron.secondary"]
              }, {
                  slug: "price",
                  translationKeys: ["static.stickers.price.per_sticker", "static.stickers.price.s_and_h", "static.stickers.price.processed_by"]
              }, {
                  slug: "order-form",
                  translationKeys: ["static.order_stripe_form.title", "static.order_stripe_form.quantity_other", "static.order_stripe_form.button_pay_with", "static.order_stripe_form.button_processing", "static.order_stripe_form.worldwide"]
              }, {
                  slug: "payment-error",
                  translationKeys: ["static.stickers.payment_error.alert", "static.stickers.payment_error.try_again"]
              }, {
                  slug: "size",
                  translationKeys: ["static.stickers.size.sharing", "static.stickers.size.dimensions", "static.stickers.size.ideas"]
              }, {
                  slug: "durability",
                  translationKeys: ["static.stickers.durability.made_to_last", "static.stickers.durability.made_from"]
              }, {
                  slug: "craftsmanship",
                  translationKeys: ["static.stickers.craftsmanship.title", "static.stickers.craftsmanship.pre_link", "static.stickers.craftsmanship.post_link"]
              }, {
                  slug: "sase",
                  translationKeys: ["static.stickers.sase.title", "static.stickers.sase.instructions", "static.stickers.sase.dollars_only"]
              }, {
                  slug: "sightings",
                  translationKeys: ["static.stickers.sightings.old_sticker_sightings", "static.stickers.sightings.old_upload_instructions"]
              }]
          }]
      })
  }
  .call(this),
  function() {}
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.student.mainController", ["lmgtfy.services", "lmgtfy.student.lessonPlanner", "lmgtfy.student.searchIllustratorDriver", "lmgtfy.imagePreloader", "lmgtfy.devMode"]),
      t.controller("mainController", ["$scope", "$http", "$timeout", "$q", "lessonPlanner", "searchIllustratorDriver", "devMode", "services", "imagePreloader", function(t, e, n, r, i, o, a, s, u) {
          var c, l;
          return t.services = s,
          t.selectedService = i.service(),
          t.delayBeforeDone = .5,
          o.setService(t.selectedService),
          o.setSearchType(i.searchType()),
          o.setSearchTerms(i.searchTerms()),
          o.setPopUrl(i.popUrl()),
          t.sponsoredByLine = i.sponsoredByLine(),
          t.showAds = !1,
          i.shouldShowAds() && e.get("/itc", {
              params: {
                  q: i.searchTerms()
              }
          }).then(function(e) {
              return t.showAds = !e.data
          }),
          angular.forEach(s, function(t) {
              return u.preload(t.logoSrc)
          }),
          a.isActive() ? t.currentSlide = a.step() : i.shouldIncludeInternetExplainer() ? (t.currentSlide = 1,
          c = function() {
              return t.currentSlide += 1
          }
          ,
          l = function(t) {
              var e;
              return e = r.defer(),
              n(function() {
                  return c(),
                  e.resolve()
              }, 1e3 * t),
              e.promise
          }
          ,
          l(2.5).then(function() {
              return l(3.5).then(function() {
                  return l(3).then(function() {
                      return l(2.5)
                  })
              })
          })) : t.currentSlide = 5
      }
      ])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.student.browserFrame", []),
      t.directive("browserFrame", function() {
          return {
              restrict: "E",
              scope: {
                  url: "="
              },
              transclude: !0,
              template: '<div class="browser-frame">\n  <div class="browser-frame-top">\n    <div class="browser-frame-top-row">\n      <div class="browser-frame-top-left"></div>\n      <div class="browser-frame-top-input">\n        <div class="browser-frame-top-input-left"></div>\n        <span class="browser-frame-top-input-url" ng-bind="url"></span>\n        <div class="browser-frame-top-input-right"></div>\n      </div>\n      <div class="browser-frame-top-right"></div>\n    </div>\n  </div>\n  <div class="browser-frame-content">\n    <ng-transclude></ng-transclude>\n  </div>\n</div>'
          }
      })
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.student.searchIllustrator", ["lmgtfy.student.searchIllustratorDriver", "lmgtfy.student.browserFrame", "lmgtfy.devMode"]),
      t.directive("searchIllustrator", ["searchIllustratorDriver", "$window", "$timeout", "$q", "$sce", "devMode", function(t, e, n, r, i) {
          return {
              restrict: "A",
              scope: {
                  finalTimingDelay: "=",
                  userClickPrompt: "@"
              },
              template: '<div>\n  <browser-frame url="startingUrlTyping">\n\n    <div\n      class="\n        search-illustrator-scene-pointer\n        search-illustrator-scene-step-{{ currentSceneStep }}"\n      ng-class="{ invisible: currentlyTyping || allScenesDone }"\n      ng-style="{ top: pointerTop, left: pointerLeft, transition: pointerTransition }"\n      >\n    </div>\n\n    <div\n      class="\n        search-illustrator-scene\n        search-illustrator-scene-service-{{ serviceIdentifier }}\n        search-illustrator-scene-search-type-{{ searchTypeIdentifier }}\n        search-illustrator-scene-step-{{ currentSceneStep }}">\n      <div class="search-illustrator-scene-header"></div>\n      <div class="search-illustrator-scene-content">\n        <div class="search-illustrator-scene-logo"></div>\n        <div class="search-illustrator-scene-input-and-button-wrapper">\n          <div class="search-illustrator-scene-input" ng-class="{ focused: simulatedFocus == \'searchInput\' }">\n            <span ng-bind="searchTermsTyping"></span><span class="search-illustrator-scene-input-cursor blink"></span>\n          </div>\n          <div class="search-illustrator-scene-button-wrapper">\n            <div class="search-illustrator-scene-primary-button btn" ng-class="{ focused: simulatedFocus == \'primaryActionButton\' }" ng-bind="primaryActionText" title="{{ userClickPrompt }}"></div>\n            <div class="search-illustrator-scene-secondary-button btn" ng-bind="secondaryActionText" ng-if="secondaryActionText"></div>\n          </div>\n        </div>\n      </div>\n      <div class="search-illustrator-scene-footer"></div>\n\n    </div>\n\n  </browser-frame>\n  <div class="search-illustrator-disclaimer" ng-bind-html="disclaimer">\n  </div>\n</div>',
              link: function(o) {
                  var a, s, u, c, l, f, p, d, h, m, g, v, y, b, $;
                  return o.startingUrl = t.startingUrl(),
                  o.serviceIdentifier = t.service.identifier,
                  o.searchTypeIdentifier = t.searchType.identifier,
                  o.searchTerms = t.searchTerms,
                  o.disclaimer = i.trustAsHtml(t.disclaimer()),
                  v = function(t) {
                      var e;
                      return e = r.defer(),
                      n(e.resolve, 1e3 * t),
                      e.promise
                  }
                  ,
                  b = function(e) {
                      return null == e && (e = 1),
                      o.primaryActionText = t.primaryActionText(),
                      o.secondaryActionText = t.secondaryActionText(),
                      o.currentScene = t.currentScene,
                      o.currentSceneStep = t.currentSceneStep,
                      v(e)
                  }
                  ,
                  f = function(e) {
                      return null == e && (e = 1),
                      "pre" === o.currentSceneStep ? t.play() : t.next(),
                      b(e)
                  }
                  ,
                  y = function(t, e, i) {
                      var a;
                      return null == e && (e = 0),
                      null == i && (i = r.defer()),
                      o.currentlyTyping = !0,
                      a = o[t].substr(0, e + 1),
                      o[t + "Typing"] = a,
                      e < o[t].length ? n(function() {
                          return y(t, e + 1, i)
                      }, 240 * Math.random()) : (o.currentlyTyping = !1,
                      i.resolve()),
                      i.promise
                  }
                  ,
                  s = function(t) {
                      return o.simulatedFocus = t
                  }
                  ,
                  c = function(t, e, n) {
                      var r;
                      return null == n && (n = 1),
                      o.pointerTop = t,
                      o.pointerLeft = e,
                      r = Math.max(n - .2, 0),
                      o.pointerTransition = "top " + n + "s, left " + r + "s",
                      v(n)
                  }
                  ,
                  l = function(t, n, r) {
                      var i, o;
                      return null == n && (n = 2),
                      null == r && (r = 1),
                      o = e.document.querySelector($(t)),
                      i = o.getBoundingClientRect(),
                      c(i.top + i.height / n + "px", i.left + i.width / n + "px", r)
                  }
                  ,
                  u = function(t, e, n) {
                      return null == e && (e = 2),
                      null == n && (n = 1),
                      l(d(t), e, n)
                  }
                  ,
                  $ = function(t) {
                      return ".search-illustrator-wrapper " + t
                  }
                  ,
                  d = function(t) {
                      return ".search-illustrator-scene-" + t
                  }
                  ,
                  p = function() {
                      return o.currentSceneStep = "pre",
                      v(0)
                  }
                  ,
                  a = function() {
                      var t;
                      return null != (t = this._singletonTippy) ? t.destroy() : void 0
                  }
                  ,
                  m = function(t, e, n, r) {
                      return null == r && (r = ""),
                      a(),
                      t.title = n,
                      this._singletonTippy = tippy.one(t, {
                          theme: "dark " + r,
                          trigger: "manual",
                          placement: e,
                          animation: "shift-toward",
                          inertia: !0,
                          size: "large",
                          arrow: !0,
                          distance: 7,
                          hideOnClick: "persistent"
                      }),
                      this._singletonTippy.show()
                  }
                  ,
                  g = function(n, r, i) {
                      var o, a;
                      return null == i && (i = "bottom"),
                      o = e.document.querySelector(n),
                      a = t.instructionForStep(r),
                      m(o, i, a, "step-instructions")
                  }
                  ,
                  h = function(t, n) {
                      var r;
                      return r = e.document.querySelector(t),
                      m(r, "bottom", n, "floating-vertical")
                  }
                  ,
                  p().then(function() {
                      return l(".browser-frame-content", 2, 0),
                      f().then(function() {
                          return g($(".browser-frame-top-input"), 0),
                          l(".browser-frame-top-input").then(function() {
                              return y("startingUrl").then(function() {
                                  return f(.5).then(function() {
                                      return g(d("input"), 1, "top"),
                                      u("input", 3, 1.5).then(function() {
                                          return s("searchInput"),
                                          y("searchTerms").then(function() {
                                              return g(d("primary-button"), 2),
                                              f(.5).then(function() {
                                                  return u("primary-button", 2, 1.5).then(function() {
                                                      return s("primaryActionButton"),
                                                      f(o.finalTimingDelay).then(function() {
                                                          return h(d("primary-button"), o.userClickPrompt),
                                                          t.done(),
                                                          o.allScenesDone = !0
                                                      })
                                                  })
                                              })
                                          })
                                      })
                                  })
                              })
                          })
                      })
                  })
              }
          }
      }
      ])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.student.searchInstructions", ["lmgtfy.student.searchIllustratorDriver"]),
      t.directive("searchInstructions", ["searchIllustratorDriver", function(t) {
          return {
              restrict: "A",
              scope: {
                  stepTranslation: "@"
              },
              template: '<ul class="search-instructions">\n  <li\n    class="search-instruction am-fade-and-slide-top floating"\n    ng-class="{ \'current-step\': $index == currentStep, \'search-instruction-final-step\': $index == 3 }"\n    ng-repeat="instruction in instructions">\n    <span class="search-instruction-step-number" ng-if="$index != 3">{{stepTranslation}} {{ $index + 1 }}</span>\n    <span>{{ instruction }}</span>\n  </li>\n</ul>',
              link: function(e) {
                  return e.instructions = [],
                  e.$watch(function() {
                      return t.currentSceneStep
                  }, function(n, r) {
                      return n !== r ? (e.instructions.push(t.instructionForStep(n)),
                      e.currentStep = n) : void 0
                  })
              }
          }
      }
      ])
  }
  .call(this),
  function() {
      var t, e;
      e = angular.module("lmgtfy.student.searchIllustratorDriver", ["lmgtfy.student.searchIllustrations", "lmgtfy.gentleEncoding", "lmgtfy.adSense"]),
      t = function() {
          function t(t, e) {
              this.instruction = t,
              this.bgImage = e
          }
          return t
      }(),
      e.service("searchIllustratorDriver", ["searchIllustrations", "gentleEncoding", "$window", "$document", "adSense", function(e, n, r, i, o) {
          return {
              setService: function(t) {
                  this.service = t
              },
              setSearchType: function(t) {
                  this.searchType = t
              },
              setSearchTerms: function(t) {
                  this.searchTerms = t
              },
              setPopUrl: function(t) {
                  this.popUrl = t
              },
              searchIllustration: function() {
                  return this._searchIllustration || (this._searchIllustration = e.find(this.service.identifier, this.searchType.identifier))
              },
              sceneForStep: function(t) {
                  return this.searchIllustration().sceneForStep(t)
              },
              instructionForStep: function(t) {
                  return this.searchIllustration().instructionForStep(t)
              },
              startingUrl: function() {
                  return this.searchIllustration().startingUrl
              },
              primaryActionText: function() {
                  return this.searchIllustration().primaryActionText
              },
              secondaryActionText: function() {
                  return this.searchIllustration().secondaryActionText
              },
              disclaimer: function() {
                  return this.searchIllustration().disclaimer
              },
              play: function() {
                  return o.showAds(),
                  this.goScene(0)
              },
              next: function() {
                  return this.goScene(this.currentSceneStep + 1)
              },
              done: function() {
                  return this.bindUserClick()
              },
              bindUserClick: function() {
                  return angular.element(this.primaryButtonEl()).on("click", function(t) {
                      return function() {
                          return null != t.popUrl ? (t.openNewWindow(t.searchUrl()),
                          t.redirectTo(t.popUrl)) : t.redirectTo(t.searchUrl())
                      }
                  }(this))
              },
              primaryButtonEl: function() {
                  return r.document.querySelector(".search-illustrator-scene-primary-button")
              },
              searchUrl: function() {
                  return "" + this.searchType.urlBase + n.encode(this.searchTerms)
              },
              redirectTo: function(t) {
                  return r.location = t
              },
              openNewWindow: function(t) {
                  try {
                      return r.open(t, "_blank")
                  } catch (e) {}
              },
              goScene: function(e) {
                  return this.currentSceneStep = e,
                  this.currentScene = new t(this.instructionForStep(e),this.sceneForStep(e))
              }
          }
      }
      ])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.student.lessonPlanner", ["lmgtfy.services", "lmgtfy.gentleEncoding", "serverValue"]),
      t.service("lessonPlanner", ["queryParams", "services", "gentleEncoding", "$injector", function(t, e, n, r) {
          var i, o, a;
          return i = function(t, e) {
              var n, r, i, o;
              for (n = null,
              i = 0,
              o = e.length; o > i; i++)
                  r = e[i],
                  r.identifier === t && (n = r);
              return n
          }
          ,
          o = {
              serviceIdentifier: function() {
                  return t.fetch("s") || "g"
              },
              searchTypeIdentifier: function() {
                  return t.fetch("t") || "w"
              },
              service: function() {
                  return i(this.serviceIdentifier(), e)
              },
              searchType: function() {
                  return i(this.searchTypeIdentifier(), this.service().searchTypes)
              },
              searchTerms: function() {
                  return n.decode(t.fetch("q"))
              },
              shouldIncludeInternetExplainer: function() {
                  return "1" === t.fetch("iie")
              },
              shouldShowAds: function() {
                  return !0
              },
              sponsoredByLine: function() {
                  return null
              },
              popUrl: function() {
                  return null
              }
          },
          a = {
              customExperience: function() {
                  return this._customExperience || (this._customExperience = r.get("customExperience"))
              },
              serviceIdentifier: function() {
                  return this.customExperience().search_service_identifier
              },
              searchTypeIdentifier: function() {
                  return this.customExperience().search_type_identifier
              },
              service: function() {
                  return i(this.serviceIdentifier(), e)
              },
              searchType: function() {
                  return i(this.searchTypeIdentifier(), this.service().searchTypes)
              },
              searchTerms: function() {
                  return this.customExperience().search_term
              },
              shouldIncludeInternetExplainer: function() {
                  return this.customExperience().include_internet_explainer
              },
              shouldShowAds: function() {
                  return this.customExperience().show_ads
              },
              sponsoredByLine: function() {
                  return this.customExperience().sponsored_by_line
              },
              popUrl: function() {
                  return this.customExperience().pop_url
              }
          },
          t.fetch("cx") ? a : o
      }
      ])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.teacher.mainController", ["lmgtfy.services", "lmgtfy.teacher.linkBuilder", "lmgtfy.teacher.liveWS", "lmgtfy.adSense"]),
      t.controller("mainController", ["$scope", "$window", "$http", "$timeout", "services", "linkBuilder", "liveWS", "stickerPopoverUXManager", "adSense", function(t, e, n, r, i, o, a, s, u) {
          var c;
          return t.link = {},
          t.services = i,
          t.setServiceIdentifier = function(e) {
              var n, r, i, o, a;
              for (t.clearLink(),
              t.serviceIdentifier = e,
              i = t.services,
              o = [],
              n = 0,
              r = i.length; r > n; n++)
                  a = i[n],
                  a.identifier === e ? (t.selectedService = a,
                  o.push(t.link.selectedSearchType = a.searchTypes[0])) : o.push(void 0);
              return o
          }
          ,
          c = function() {
              return o.build(t.selectedService, t.link.selectedSearchType, t.link.searchTerms, t.link.includeExplainer)
          }
          ,
          t.clearLink = function() {
              return t.link.url = null
          }
          ,
          t.getLink = function() {
              return t.link.url = c()
          }
          ,
          t.doPreview = function(t) {
              return e.open(t || c()),
              !0
          }
          ,
          t.shortenLink = function() {
              return n.post("appli.m8tec.com/short_urlsapp", {
                  short_url: {
                      url: t.link.url
                  }
              }).then(function(e) {
                  return t.link.url = e.data.short_url
              })
          }
          ,
          t.$watch("link.searchTerms", function(t) {
              return a.sendUpdate(t)
          }),
          u.showAds(),
          t.setServiceIdentifier(i[0].identifier),
          r(function() {
              return s.managedShow()
          }, 2e3)
      }
      ])
  }
  .call(this),
  function() {
      var t, e, n;
      e = angular.module("lmgtfy.teacher.searchTypeSelector", ["lmgtfy.deviceCheck"]),
      n = '<button\n  bs-options="searchType as searchType.presentation for searchType in selectedService.searchTypes"\n  bs-select=""\n  class="btn btn-default btn-lg"\n  ng-disabled="!selectedService"\n  ng-model="link.selectedSearchType"\n  placeholder="..."\n  type="button"></button>',
      t = '<select\n  ng-disabled="!selectedService"\n  ng-model="link.selectedSearchType"\n  ng-options="searchType as searchType.presentation for searchType in selectedService.searchTypes"\n  placeholder="...">\n    <option disabled="disabled" value="">...</option>\n</select>',
      e.directive("searchTypeSelector", ["deviceCheck", function(e) {
          return {
              restrict: "C",
              scope: !0,
              template: '<label ng-bind="label"></label>\n<div class="h-spacer-half"></div>',
              compile: function(r) {
                  return e.isMobileOrTablet() ? r.append(t) : r.append(n),
                  function(t, e, n) {
                      return t.label = n.label
                  }
              }
          }
      }
      ])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.teacher.serviceSelector", []),
      t.directive("serviceSelector", function() {
          return {
              restrict: "C",
              scope: {
                  callback: "&",
                  selectedServiceIdentifier: "="
              },
              controllerAs: "serviceSelector",
              controller: ["$scope", "$element", function(t) {
                  var e;
                  return e = {
                      step: 160,
                      scrollableElement: null,
                      setScrollableElement: function(t) {
                          return this.scrollableElement = t,
                          this.scrollableElement.scrollLeft = 0
                      },
                      scroll: function(t) {
                          return createjs.Tween.get(this.scrollableElement, {
                              override: !0
                          }).to({
                              scrollLeft: this.scrollableElement.scrollLeft + t
                          }, 200, createjs.Ease.elasticOut)
                      },
                      scrollLeft: function() {
                          return this.scroll(-1 * this.step)
                      },
                      scrollRight: function() {
                          return this.scroll(this.step)
                      },
                      selectService: function(e) {
                          return this.selectedService = e,
                          t.callback()
                      }
                  },
                  t.$watch("selectedServiceIdentifier", function(t) {
                      return e.selectedService = t
                  }),
                  e
              }
              ]
          }
      }),
      t.directive("serviceSelectorItemWrapper", function() {
          return {
              restrict: "C",
              require: "^serviceSelector",
              link: function(t, e, n, r) {
                  return t.serviceSelector = r,
                  r.setScrollableElement(e[0])
              }
          }
      }),
      t.directive("serviceSelectorItem", function() {
          return {
              restrict: "C",
              scope: {
                  serviceIdentifier: "@"
              },
              require: "^serviceSelector",
              link: function(t, e, n, r) {
                  var i;
                  return i = function() {
                      return r.selectedService === t.serviceIdentifier
                  }
                  ,
                  e.bind("click", function() {
                      return t.$apply(function() {
                          return r.selectService(t.serviceIdentifier)
                      })
                  }),
                  t.$watch(function() {
                      return r.selectedService
                  }, function() {
                      return e.toggleClass("selected", null != r.selectedService && i())
                  })
              }
          }
      })
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.teacher", ["lmgtfy", "lmgtfy.deviceCheck", "lmgtfy.gentleEncoding", "lmgtfy.selectOnClick", "lmgtfy.languageSelector", "lmgtfy.stickerPopover", "lmgtfy.teacher.serviceSelector", "lmgtfy.teacher.searchTypeSelector", "lmgtfy.teacher.mainController"])
  }
  .call(this),
  function() {
      var t;
      t = angular.module("lmgtfy.teacher.linkBuilder", ["lmgtfy.gentleEncoding"]),
      t.service("linkBuilder", ["gentleEncoding", "$window", function(t, e) {
          var n, r;
          return n = function() {
              var t, n;
              return n = e.location,
              t = "http://" + n.hostname,
              "80" !== n.port && "" !== n.port && (t += ":" + n.port),
              t += n.pathname
          }
          ,
          r = function(e, n, r, i) {
              var o;
              return o = [],
              "g" !== e.identifier && o.push("s=" + e.identifier),
              "w" !== n.identifier && o.push("t=" + n.identifier),
              i && o.push("iie=1"),
              o.push("q=" + t.encode(r)),
              o.join("&")
          }
          ,
          {
              build: function(t, e, i, o) {
                  return n() + "?" + r(t, e, i, o)
              }
          }
      }
      ])
  }
  .call(this),
  function() {
      var t, e;
      e = angular.module("lmgtfy.teacher.liveWS", []),
      t = function() {
          function t(t) {
              var e, n, r;
              this.wsUrl = t,
              n = "https:" === window.location.protocol,
              e = n ? "wss" : "ws",
              r = e + "://live-ws.m8tec.com/lmgtfy_ws",
              this.wsUrl || (this.wsUrl = r),
              null != window.WebSocket && this.connect()
          }
          return t.prototype.connect = function() {
              return this.websocket = new WebSocket(this.wsUrl)
          }
          ,
          t.prototype.sendUpdate = function(t) {
              var e;
              return (null != (e = this.websocket) ? e.readyState : void 0) === this.websocket.OPEN ? this.websocket.send(t) : void 0
          }
          ,
          t
      }(),
      e.service("liveWS", function() {
          return new t
      })
  }
  .call(this);

}
