(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1661], {
        6292: function() {},
        88357: function(e, t, o) {
            "use strict";
            o.d(t, {
                w_: function() {
                    return a
                }
            });
            var n = o(67294),
                r = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                l = n.createContext && n.createContext(r),
                i = function() {
                    return i = Object.assign || function(e) {
                        for (var t, o = 1, n = arguments.length; o < n; o++)
                            for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }, i.apply(this, arguments)
                },
                c = function(e, t) {
                    var o = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (o[n[r]] = e[n[r]])
                    }
                    return o
                };

            function s(e) {
                return e && e.map((function(e, t) {
                    return n.createElement(e.tag, i({
                        key: t
                    }, e.attr), s(e.child))
                }))
            }

            function a(e) {
                return function(t) {
                    return n.createElement(u, i({
                        attr: i({}, e.attr)
                    }, t), s(e.child))
                }
            }

            function u(e) {
                var t = function(t) {
                    var o, r = e.attr,
                        l = e.size,
                        s = e.title,
                        a = c(e, ["attr", "size", "title"]),
                        u = l || t.size || "1em";
                    return t.className && (o = t.className), e.className && (o = (o ? o + " " : "") + e.className), n.createElement("svg", i({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, r, a, {
                        className: o,
                        style: i(i({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: u,
                        width: u,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), s && n.createElement("title", null, s), e.children)
                };
                return void 0 !== l ? n.createElement(l.Consumer, null, (function(e) {
                    return t(e)
                })) : t(r)
            }
        },
        20684: function(e, t, o) {
            "use strict";
            o.d(t, {
                u: function() {
                    return Ae
                }
            });
            var n = o(67294);
            const r = Math.min,
                l = Math.max,
                i = Math.round,
                c = Math.floor,
                s = e => ({
                    x: e,
                    y: e
                }),
                a = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                u = {
                    start: "end",
                    end: "start"
                };

            function d(e, t, o) {
                return l(e, r(t, o))
            }

            function f(e, t) {
                return "function" === typeof e ? e(t) : e
            }

            function p(e) {
                return e.split("-")[0]
            }

            function m(e) {
                return e.split("-")[1]
            }

            function y(e) {
                return "x" === e ? "y" : "x"
            }

            function v(e) {
                return "y" === e ? "height" : "width"
            }

            function h(e) {
                return ["top", "bottom"].includes(p(e)) ? "y" : "x"
            }

            function w(e) {
                return y(h(e))
            }

            function g(e) {
                return e.replace(/start|end/g, (e => u[e]))
            }

            function b(e) {
                return e.replace(/left|right|bottom|top/g, (e => a[e]))
            }

            function x(e) {
                return "number" !== typeof e ? function(e) {
                    return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...e
                    }
                }(e) : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function E(e) {
                return { ...e,
                    top: e.y,
                    left: e.x,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                }
            }

            function _(e, t, o) {
                let {
                    reference: n,
                    floating: r
                } = e;
                const l = h(t),
                    i = w(t),
                    c = v(i),
                    s = p(t),
                    a = "y" === l,
                    u = n.x + n.width / 2 - r.width / 2,
                    d = n.y + n.height / 2 - r.height / 2,
                    f = n[c] / 2 - r[c] / 2;
                let y;
                switch (s) {
                    case "top":
                        y = {
                            x: u,
                            y: n.y - r.height
                        };
                        break;
                    case "bottom":
                        y = {
                            x: u,
                            y: n.y + n.height
                        };
                        break;
                    case "right":
                        y = {
                            x: n.x + n.width,
                            y: d
                        };
                        break;
                    case "left":
                        y = {
                            x: n.x - r.width,
                            y: d
                        };
                        break;
                    default:
                        y = {
                            x: n.x,
                            y: n.y
                        }
                }
                switch (m(t)) {
                    case "start":
                        y[i] -= f * (o && a ? -1 : 1);
                        break;
                    case "end":
                        y[i] += f * (o && a ? -1 : 1)
                }
                return y
            }
            async function S(e, t) {
                var o;
                void 0 === t && (t = {});
                const {
                    x: n,
                    y: r,
                    platform: l,
                    rects: i,
                    elements: c,
                    strategy: s
                } = e, {
                    boundary: a = "clippingAncestors",
                    rootBoundary: u = "viewport",
                    elementContext: d = "floating",
                    altBoundary: p = !1,
                    padding: m = 0
                } = f(t, e), y = x(m), v = c[p ? "floating" === d ? "reference" : "floating" : d], h = E(await l.getClippingRect({
                    element: null == (o = await (null == l.isElement ? void 0 : l.isElement(v))) || o ? v : v.contextElement || await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(c.floating)),
                    boundary: a,
                    rootBoundary: u,
                    strategy: s
                })), w = "floating" === d ? { ...i.floating,
                    x: n,
                    y: r
                } : i.reference, g = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(c.floating)), b = await (null == l.isElement ? void 0 : l.isElement(g)) && await (null == l.getScale ? void 0 : l.getScale(g)) || {
                    x: 1,
                    y: 1
                }, _ = E(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: w,
                    offsetParent: g,
                    strategy: s
                }) : w);
                return {
                    top: (h.top - _.top + y.top) / b.y,
                    bottom: (_.bottom - h.bottom + y.bottom) / b.y,
                    left: (h.left - _.left + y.left) / b.x,
                    right: (_.right - h.right + y.right) / b.x
                }
            }
            const T = function(e) {
                return void 0 === e && (e = 0), {
                    name: "offset",
                    options: e,
                    async fn(t) {
                        var o, n;
                        const {
                            x: r,
                            y: l,
                            placement: i,
                            middlewareData: c
                        } = t, s = await async function(e, t) {
                            const {
                                placement: o,
                                platform: n,
                                elements: r
                            } = e, l = await (null == n.isRTL ? void 0 : n.isRTL(r.floating)), i = p(o), c = m(o), s = "y" === h(o), a = ["left", "top"].includes(i) ? -1 : 1, u = l && s ? -1 : 1, d = f(t, e);
                            let {
                                mainAxis: y,
                                crossAxis: v,
                                alignmentAxis: w
                            } = "number" === typeof d ? {
                                mainAxis: d,
                                crossAxis: 0,
                                alignmentAxis: null
                            } : {
                                mainAxis: 0,
                                crossAxis: 0,
                                alignmentAxis: null,
                                ...d
                            };
                            return c && "number" === typeof w && (v = "end" === c ? -1 * w : w), s ? {
                                x: v * u,
                                y: y * a
                            } : {
                                x: y * a,
                                y: v * u
                            }
                        }(t, e);
                        return i === (null == (o = c.offset) ? void 0 : o.placement) && null != (n = c.arrow) && n.alignmentOffset ? {} : {
                            x: r + s.x,
                            y: l + s.y,
                            data: { ...s,
                                placement: i
                            }
                        }
                    }
                }
            };

            function O(e) {
                return k(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function A(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function R(e) {
                var t;
                return null == (t = (k(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function k(e) {
                return e instanceof Node || e instanceof A(e).Node
            }

            function L(e) {
                return e instanceof Element || e instanceof A(e).Element
            }

            function C(e) {
                return e instanceof HTMLElement || e instanceof A(e).HTMLElement
            }

            function N(e) {
                return "undefined" !== typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof A(e).ShadowRoot)
            }

            function D(e) {
                const {
                    overflow: t,
                    overflowX: o,
                    overflowY: n,
                    display: r
                } = B(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !["inline", "contents"].includes(r)
            }

            function j(e) {
                return ["table", "td", "th"].includes(O(e))
            }

            function $(e) {
                const t = P(),
                    o = B(e);
                return "none" !== o.transform || "none" !== o.perspective || !!o.containerType && "normal" !== o.containerType || !t && !!o.backdropFilter && "none" !== o.backdropFilter || !t && !!o.filter && "none" !== o.filter || ["transform", "perspective", "filter"].some((e => (o.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (o.contain || "").includes(e)))
            }

            function P() {
                return !("undefined" === typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function z(e) {
                return ["html", "body", "#document"].includes(O(e))
            }

            function B(e) {
                return A(e).getComputedStyle(e)
            }

            function H(e) {
                return L(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function W(e) {
                if ("html" === O(e)) return e;
                const t = e.assignedSlot || e.parentNode || N(e) && e.host || R(e);
                return N(t) ? t.host : t
            }

            function I(e) {
                const t = W(e);
                return z(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : C(t) && D(t) ? t : I(t)
            }

            function F(e, t, o) {
                var n;
                void 0 === t && (t = []), void 0 === o && (o = !0);
                const r = I(e),
                    l = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = A(r);
                return l ? t.concat(i, i.visualViewport || [], D(r) ? r : [], i.frameElement && o ? F(i.frameElement) : []) : t.concat(r, F(r, [], o))
            }

            function M(e) {
                const t = B(e);
                let o = parseFloat(t.width) || 0,
                    n = parseFloat(t.height) || 0;
                const r = C(e),
                    l = r ? e.offsetWidth : o,
                    c = r ? e.offsetHeight : n,
                    s = i(o) !== l || i(n) !== c;
                return s && (o = l, n = c), {
                    width: o,
                    height: n,
                    $: s
                }
            }

            function q(e) {
                return L(e) ? e : e.contextElement
            }

            function V(e) {
                const t = q(e);
                if (!C(t)) return s(1);
                const o = t.getBoundingClientRect(),
                    {
                        width: n,
                        height: r,
                        $: l
                    } = M(t);
                let c = (l ? i(o.width) : o.width) / n,
                    a = (l ? i(o.height) : o.height) / r;
                return c && Number.isFinite(c) || (c = 1), a && Number.isFinite(a) || (a = 1), {
                    x: c,
                    y: a
                }
            }
            const K = s(0);

            function X(e) {
                const t = A(e);
                return P() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : K
            }

            function Y(e, t, o, n) {
                void 0 === t && (t = !1), void 0 === o && (o = !1);
                const r = e.getBoundingClientRect(),
                    l = q(e);
                let i = s(1);
                t && (n ? L(n) && (i = V(n)) : i = V(e));
                const c = function(e, t, o) {
                    return void 0 === t && (t = !1), !(!o || t && o !== A(e)) && t
                }(l, o, n) ? X(l) : s(0);
                let a = (r.left + c.x) / i.x,
                    u = (r.top + c.y) / i.y,
                    d = r.width / i.x,
                    f = r.height / i.y;
                if (l) {
                    const e = A(l),
                        t = n && L(n) ? A(n) : n;
                    let o = e.frameElement;
                    for (; o && n && t !== e;) {
                        const e = V(o),
                            t = o.getBoundingClientRect(),
                            n = B(o),
                            r = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
                            l = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
                        a *= e.x, u *= e.y, d *= e.x, f *= e.y, a += r, u += l, o = A(o).frameElement
                    }
                }
                return E({
                    width: d,
                    height: f,
                    x: a,
                    y: u
                })
            }

            function Z(e) {
                return Y(R(e)).left + H(e).scrollLeft
            }

            function G(e, t, o) {
                let n;
                if ("viewport" === t) n = function(e, t) {
                    const o = A(e),
                        n = R(e),
                        r = o.visualViewport;
                    let l = n.clientWidth,
                        i = n.clientHeight,
                        c = 0,
                        s = 0;
                    if (r) {
                        l = r.width, i = r.height;
                        const e = P();
                        (!e || e && "fixed" === t) && (c = r.offsetLeft, s = r.offsetTop)
                    }
                    return {
                        width: l,
                        height: i,
                        x: c,
                        y: s
                    }
                }(e, o);
                else if ("document" === t) n = function(e) {
                    const t = R(e),
                        o = H(e),
                        n = e.ownerDocument.body,
                        r = l(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
                        i = l(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
                    let c = -o.scrollLeft + Z(e);
                    const s = -o.scrollTop;
                    return "rtl" === B(n).direction && (c += l(t.clientWidth, n.clientWidth) - r), {
                        width: r,
                        height: i,
                        x: c,
                        y: s
                    }
                }(R(e));
                else if (L(t)) n = function(e, t) {
                    const o = Y(e, !0, "fixed" === t),
                        n = o.top + e.clientTop,
                        r = o.left + e.clientLeft,
                        l = C(e) ? V(e) : s(1);
                    return {
                        width: e.clientWidth * l.x,
                        height: e.clientHeight * l.y,
                        x: r * l.x,
                        y: n * l.y
                    }
                }(t, o);
                else {
                    const o = X(e);
                    n = { ...t,
                        x: t.x - o.x,
                        y: t.y - o.y
                    }
                }
                return E(n)
            }

            function U(e, t) {
                const o = W(e);
                return !(o === t || !L(o) || z(o)) && ("fixed" === B(o).position || U(o, t))
            }

            function J(e, t, o) {
                const n = C(t),
                    r = R(t),
                    l = "fixed" === o,
                    i = Y(e, !0, l, t);
                let c = {
                    scrollLeft: 0,
                    scrollTop: 0
                };
                const a = s(0);
                if (n || !n && !l)
                    if (("body" !== O(t) || D(r)) && (c = H(t)), n) {
                        const e = Y(t, !0, l, t);
                        a.x = e.x + t.clientLeft, a.y = e.y + t.clientTop
                    } else r && (a.x = Z(r));
                return {
                    x: i.left + c.scrollLeft - a.x,
                    y: i.top + c.scrollTop - a.y,
                    width: i.width,
                    height: i.height
                }
            }

            function Q(e, t) {
                return C(e) && "fixed" !== B(e).position ? t ? t(e) : e.offsetParent : null
            }

            function ee(e, t) {
                const o = A(e);
                if (!C(e)) return o;
                let n = Q(e, t);
                for (; n && j(n) && "static" === B(n).position;) n = Q(n, t);
                return n && ("html" === O(n) || "body" === O(n) && "static" === B(n).position && !$(n)) ? o : n || function(e) {
                    let t = W(e);
                    for (; C(t) && !z(t);) {
                        if ($(t)) return t;
                        t = W(t)
                    }
                    return null
                }(e) || o
            }
            const te = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                    let {
                        rect: t,
                        offsetParent: o,
                        strategy: n
                    } = e;
                    const r = C(o),
                        l = R(o);
                    if (o === l) return t;
                    let i = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        c = s(1);
                    const a = s(0);
                    if ((r || !r && "fixed" !== n) && (("body" !== O(o) || D(l)) && (i = H(o)), C(o))) {
                        const e = Y(o);
                        c = V(o), a.x = e.x + o.clientLeft, a.y = e.y + o.clientTop
                    }
                    return {
                        width: t.width * c.x,
                        height: t.height * c.y,
                        x: t.x * c.x - i.scrollLeft * c.x + a.x,
                        y: t.y * c.y - i.scrollTop * c.y + a.y
                    }
                },
                getDocumentElement: R,
                getClippingRect: function(e) {
                    let {
                        element: t,
                        boundary: o,
                        rootBoundary: n,
                        strategy: i
                    } = e;
                    const c = "clippingAncestors" === o ? function(e, t) {
                            const o = t.get(e);
                            if (o) return o;
                            let n = F(e, [], !1).filter((e => L(e) && "body" !== O(e))),
                                r = null;
                            const l = "fixed" === B(e).position;
                            let i = l ? W(e) : e;
                            for (; L(i) && !z(i);) {
                                const t = B(i),
                                    o = $(i);
                                o || "fixed" !== t.position || (r = null), (l ? !o && !r : !o && "static" === t.position && r && ["absolute", "fixed"].includes(r.position) || D(i) && !o && U(e, i)) ? n = n.filter((e => e !== i)) : r = t, i = W(i)
                            }
                            return t.set(e, n), n
                        }(t, this._c) : [].concat(o),
                        s = [...c, n],
                        a = s[0],
                        u = s.reduce(((e, o) => {
                            const n = G(t, o, i);
                            return e.top = l(n.top, e.top), e.right = r(n.right, e.right), e.bottom = r(n.bottom, e.bottom), e.left = l(n.left, e.left), e
                        }), G(t, a, i));
                    return {
                        width: u.right - u.left,
                        height: u.bottom - u.top,
                        x: u.left,
                        y: u.top
                    }
                },
                getOffsetParent: ee,
                getElementRects: async function(e) {
                    let {
                        reference: t,
                        floating: o,
                        strategy: n
                    } = e;
                    const r = this.getOffsetParent || ee,
                        l = this.getDimensions;
                    return {
                        reference: J(t, await r(o), n),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await l(o)
                        }
                    }
                },
                getClientRects: function(e) {
                    return Array.from(e.getClientRects())
                },
                getDimensions: function(e) {
                    const {
                        width: t,
                        height: o
                    } = M(e);
                    return {
                        width: t,
                        height: o
                    }
                },
                getScale: V,
                isElement: L,
                isRTL: function(e) {
                    return "rtl" === B(e).direction
                }
            };

            function oe(e, t, o, n) {
                void 0 === n && (n = {});
                const {
                    ancestorScroll: i = !0,
                    ancestorResize: s = !0,
                    elementResize: a = "function" === typeof ResizeObserver,
                    layoutShift: u = "function" === typeof IntersectionObserver,
                    animationFrame: d = !1
                } = n, f = q(e), p = i || s ? [...f ? F(f) : [], ...F(t)] : [];
                p.forEach((e => {
                    i && e.addEventListener("scroll", o, {
                        passive: !0
                    }), s && e.addEventListener("resize", o)
                }));
                const m = f && u ? function(e, t) {
                    let o, n = null;
                    const i = R(e);

                    function s() {
                        clearTimeout(o), n && n.disconnect(), n = null
                    }
                    return function a(u, d) {
                        void 0 === u && (u = !1), void 0 === d && (d = 1), s();
                        const {
                            left: f,
                            top: p,
                            width: m,
                            height: y
                        } = e.getBoundingClientRect();
                        if (u || t(), !m || !y) return;
                        const v = {
                            rootMargin: -c(p) + "px " + -c(i.clientWidth - (f + m)) + "px " + -c(i.clientHeight - (p + y)) + "px " + -c(f) + "px",
                            threshold: l(0, r(1, d)) || 1
                        };
                        let h = !0;

                        function w(e) {
                            const t = e[0].intersectionRatio;
                            if (t !== d) {
                                if (!h) return a();
                                t ? a(!1, t) : o = setTimeout((() => {
                                    a(!1, 1e-7)
                                }), 100)
                            }
                            h = !1
                        }
                        try {
                            n = new IntersectionObserver(w, { ...v,
                                root: i.ownerDocument
                            })
                        } catch (g) {
                            n = new IntersectionObserver(w, v)
                        }
                        n.observe(e)
                    }(!0), s
                }(f, o) : null;
                let y, v = -1,
                    h = null;
                a && (h = new ResizeObserver((e => {
                    let [n] = e;
                    n && n.target === f && h && (h.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame((() => {
                        h && h.observe(t)
                    }))), o()
                })), f && !d && h.observe(f), h.observe(t));
                let w = d ? Y(e) : null;
                return d && function t() {
                    const n = Y(e);
                    !w || n.x === w.x && n.y === w.y && n.width === w.width && n.height === w.height || o();
                    w = n, y = requestAnimationFrame(t)
                }(), o(), () => {
                    p.forEach((e => {
                        i && e.removeEventListener("scroll", o), s && e.removeEventListener("resize", o)
                    })), m && m(), h && h.disconnect(), h = null, d && cancelAnimationFrame(y)
                }
            }
            const ne = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "shift",
                        options: e,
                        async fn(t) {
                            const {
                                x: o,
                                y: n,
                                placement: r
                            } = t, {
                                mainAxis: l = !0,
                                crossAxis: i = !1,
                                limiter: c = {
                                    fn: e => {
                                        let {
                                            x: t,
                                            y: o
                                        } = e;
                                        return {
                                            x: t,
                                            y: o
                                        }
                                    }
                                },
                                ...s
                            } = f(e, t), a = {
                                x: o,
                                y: n
                            }, u = await S(t, s), m = h(p(r)), v = y(m);
                            let w = a[v],
                                g = a[m];
                            if (l) {
                                const e = "y" === v ? "bottom" : "right";
                                w = d(w + u["y" === v ? "top" : "left"], w, w - u[e])
                            }
                            if (i) {
                                const e = "y" === m ? "bottom" : "right";
                                g = d(g + u["y" === m ? "top" : "left"], g, g - u[e])
                            }
                            const b = c.fn({ ...t,
                                [v]: w,
                                [m]: g
                            });
                            return { ...b,
                                data: {
                                    x: b.x - o,
                                    y: b.y - n
                                }
                            }
                        }
                    }
                },
                re = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "flip",
                        options: e,
                        async fn(t) {
                            var o, n;
                            const {
                                placement: r,
                                middlewareData: l,
                                rects: i,
                                initialPlacement: c,
                                platform: s,
                                elements: a
                            } = t, {
                                mainAxis: u = !0,
                                crossAxis: d = !0,
                                fallbackPlacements: y,
                                fallbackStrategy: h = "bestFit",
                                fallbackAxisSideDirection: x = "none",
                                flipAlignment: E = !0,
                                ..._
                            } = f(e, t);
                            if (null != (o = l.arrow) && o.alignmentOffset) return {};
                            const T = p(r),
                                O = p(c) === c,
                                A = await (null == s.isRTL ? void 0 : s.isRTL(a.floating)),
                                R = y || (O || !E ? [b(c)] : function(e) {
                                    const t = b(e);
                                    return [g(e), t, g(t)]
                                }(c));
                            y || "none" === x || R.push(... function(e, t, o, n) {
                                const r = m(e);
                                let l = function(e, t, o) {
                                    const n = ["left", "right"],
                                        r = ["right", "left"],
                                        l = ["top", "bottom"],
                                        i = ["bottom", "top"];
                                    switch (e) {
                                        case "top":
                                        case "bottom":
                                            return o ? t ? r : n : t ? n : r;
                                        case "left":
                                        case "right":
                                            return t ? l : i;
                                        default:
                                            return []
                                    }
                                }(p(e), "start" === o, n);
                                return r && (l = l.map((e => e + "-" + r)), t && (l = l.concat(l.map(g)))), l
                            }(c, E, x, A));
                            const k = [c, ...R],
                                L = await S(t, _),
                                C = [];
                            let N = (null == (n = l.flip) ? void 0 : n.overflows) || [];
                            if (u && C.push(L[T]), d) {
                                const e = function(e, t, o) {
                                    void 0 === o && (o = !1);
                                    const n = m(e),
                                        r = w(e),
                                        l = v(r);
                                    let i = "x" === r ? n === (o ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                                    return t.reference[l] > t.floating[l] && (i = b(i)), [i, b(i)]
                                }(r, i, A);
                                C.push(L[e[0]], L[e[1]])
                            }
                            if (N = [...N, {
                                    placement: r,
                                    overflows: C
                                }], !C.every((e => e <= 0))) {
                                var D, j;
                                const e = ((null == (D = l.flip) ? void 0 : D.index) || 0) + 1,
                                    t = k[e];
                                if (t) return {
                                    data: {
                                        index: e,
                                        overflows: N
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                                let o = null == (j = N.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : j.placement;
                                if (!o) switch (h) {
                                    case "bestFit":
                                        {
                                            var $;
                                            const e = null == ($ = N.map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : $[0];e && (o = e);
                                            break
                                        }
                                    case "initialPlacement":
                                        o = c
                                }
                                if (r !== o) return {
                                    reset: {
                                        placement: o
                                    }
                                }
                            }
                            return {}
                        }
                    }
                },
                le = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        const {
                            x: o,
                            y: n,
                            placement: l,
                            rects: i,
                            platform: c,
                            elements: s,
                            middlewareData: a
                        } = t, {
                            element: u,
                            padding: p = 0
                        } = f(e, t) || {};
                        if (null == u) return {};
                        const y = x(p),
                            h = {
                                x: o,
                                y: n
                            },
                            g = w(l),
                            b = v(g),
                            E = await c.getDimensions(u),
                            _ = "y" === g,
                            S = _ ? "top" : "left",
                            T = _ ? "bottom" : "right",
                            O = _ ? "clientHeight" : "clientWidth",
                            A = i.reference[b] + i.reference[g] - h[g] - i.floating[b],
                            R = h[g] - i.reference[g],
                            k = await (null == c.getOffsetParent ? void 0 : c.getOffsetParent(u));
                        let L = k ? k[O] : 0;
                        L && await (null == c.isElement ? void 0 : c.isElement(k)) || (L = s.floating[O] || i.floating[b]);
                        const C = A / 2 - R / 2,
                            N = L / 2 - E[b] / 2 - 1,
                            D = r(y[S], N),
                            j = r(y[T], N),
                            $ = D,
                            P = L - E[b] - j,
                            z = L / 2 - E[b] / 2 + C,
                            B = d($, z, P),
                            H = !a.arrow && null != m(l) && z != B && i.reference[b] / 2 - (z < $ ? D : j) - E[b] / 2 < 0,
                            W = H ? z < $ ? z - $ : z - P : 0;
                        return {
                            [g]: h[g] + W,
                            data: {
                                [g]: B,
                                centerOffset: z - B - W,
                                ...H && {
                                    alignmentOffset: W
                                }
                            },
                            reset: H
                        }
                    }
                }),
                ie = (e, t, o) => {
                    const n = new Map,
                        r = {
                            platform: te,
                            ...o
                        },
                        l = { ...r.platform,
                            _c: n
                        };
                    return (async (e, t, o) => {
                        const {
                            placement: n = "bottom",
                            strategy: r = "absolute",
                            middleware: l = [],
                            platform: i
                        } = o, c = l.filter(Boolean), s = await (null == i.isRTL ? void 0 : i.isRTL(t));
                        let a = await i.getElementRects({
                                reference: e,
                                floating: t,
                                strategy: r
                            }),
                            {
                                x: u,
                                y: d
                            } = _(a, n, s),
                            f = n,
                            p = {},
                            m = 0;
                        for (let y = 0; y < c.length; y++) {
                            const {
                                name: o,
                                fn: l
                            } = c[y], {
                                x: v,
                                y: h,
                                data: w,
                                reset: g
                            } = await l({
                                x: u,
                                y: d,
                                initialPlacement: n,
                                placement: f,
                                strategy: r,
                                middlewareData: p,
                                rects: a,
                                platform: i,
                                elements: {
                                    reference: e,
                                    floating: t
                                }
                            });
                            u = null != v ? v : u, d = null != h ? h : d, p = { ...p,
                                [o]: { ...p[o],
                                    ...w
                                }
                            }, g && m <= 50 && (m++, "object" === typeof g && (g.placement && (f = g.placement), g.rects && (a = !0 === g.rects ? await i.getElementRects({
                                reference: e,
                                floating: t,
                                strategy: r
                            }) : g.rects), ({
                                x: u,
                                y: d
                            } = _(a, f, s))), y = -1)
                        }
                        return {
                            x: u,
                            y: d,
                            placement: f,
                            strategy: r,
                            middlewareData: p
                        }
                    })(e, t, { ...r,
                        platform: l
                    })
                };
            var ce = o(93967),
                se = o(34155);
            const ae = "react-tooltip-core-styles",
                ue = "react-tooltip-base-styles",
                de = {
                    core: !1,
                    base: !1
                };

            function fe({
                css: e,
                id: t = ue,
                type: o = "base",
                ref: n
            }) {
                var r, l;
                if (!e || "undefined" == typeof document || de[o]) return;
                if ("core" === o && "undefined" != typeof se && (null === (r = null === se || void 0 === se ? void 0 : se.env) || void 0 === r ? void 0 : r.REACT_TOOLTIP_DISABLE_CORE_STYLES)) return;
                if ("base" !== o && "undefined" != typeof se && (null === (l = null === se || void 0 === se ? void 0 : se.env) || void 0 === l ? void 0 : l.REACT_TOOLTIP_DISABLE_BASE_STYLES)) return;
                "core" === o && (t = ae), n || (n = {});
                const {
                    insertAt: i
                } = n;
                if (document.getElementById(t)) return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);
                const c = document.head || document.getElementsByTagName("head")[0],
                    s = document.createElement("style");
                s.id = t, s.type = "text/css", "top" === i && c.firstChild ? c.insertBefore(s, c.firstChild) : c.appendChild(s), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e)), de[o] = !0
            }
            const pe = (e, t, o) => {
                    let n = null;
                    const r = function(...r) {
                        const l = () => {
                            n = null, o || e.apply(this, r)
                        };
                        o && !n && (e.apply(this, r), n = setTimeout(l, t)), o || (n && clearTimeout(n), n = setTimeout(l, t))
                    };
                    return r.cancel = () => {
                        n && (clearTimeout(n), n = null)
                    }, r
                },
                me = "DEFAULT_TOOLTIP_ID",
                ye = {
                    anchorRefs: new Set,
                    activeAnchor: {
                        current: null
                    },
                    attach: () => {},
                    detach: () => {},
                    setActiveAnchor: () => {}
                },
                ve = (0, n.createContext)({
                    getTooltipData: () => ye
                });

            function he(e = me) {
                return (0, n.useContext)(ve).getTooltipData(e)
            }
            const we = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
                ge = e => {
                    if (!(e instanceof HTMLElement || e instanceof SVGElement)) return !1;
                    const t = getComputedStyle(e);
                    return ["overflow", "overflow-x", "overflow-y"].some((e => {
                        const o = t.getPropertyValue(e);
                        return "auto" === o || "scroll" === o
                    }))
                },
                be = e => {
                    if (!e) return null;
                    let t = e.parentElement;
                    for (; t;) {
                        if (ge(t)) return t;
                        t = t.parentElement
                    }
                    return document.scrollingElement || document.documentElement
                },
                xe = async ({
                    elementReference: e = null,
                    tooltipReference: t = null,
                    tooltipArrowReference: o = null,
                    place: n = "top",
                    offset: r = 10,
                    strategy: l = "absolute",
                    middlewares: i = [T(Number(r)), re({
                        fallbackAxisSideDirection: "start"
                    }), ne({
                        padding: 5
                    })],
                    border: c
                }) => {
                    if (!e) return {
                        tooltipStyles: {},
                        tooltipArrowStyles: {},
                        place: n
                    };
                    if (null === t) return {
                        tooltipStyles: {},
                        tooltipArrowStyles: {},
                        place: n
                    };
                    const s = i;
                    return o ? (s.push(le({
                        element: o,
                        padding: 5
                    })), ie(e, t, {
                        placement: n,
                        strategy: l,
                        middleware: s
                    }).then((({
                        x: e,
                        y: t,
                        placement: o,
                        middlewareData: n
                    }) => {
                        var r, l;
                        const i = {
                                left: `${e}px`,
                                top: `${t}px`,
                                border: c
                            },
                            {
                                x: s,
                                y: a
                            } = null !== (r = n.arrow) && void 0 !== r ? r : {
                                x: 0,
                                y: 0
                            },
                            u = null !== (l = {
                                top: "bottom",
                                right: "left",
                                bottom: "top",
                                left: "right"
                            }[o.split("-")[0]]) && void 0 !== l ? l : "bottom",
                            d = c && {
                                borderBottom: c,
                                borderRight: c
                            };
                        let f = 0;
                        if (c) {
                            const e = `${c}`.match(/(\d+)px/);
                            f = (null == e ? void 0 : e[1]) ? Number(e[1]) : 1
                        }
                        return {
                            tooltipStyles: i,
                            tooltipArrowStyles: {
                                left: null != s ? `${s}px` : "",
                                top: null != a ? `${a}px` : "",
                                right: "",
                                bottom: "",
                                ...d,
                                [u]: `-${4+f}px`
                            },
                            place: o
                        }
                    }))) : ie(e, t, {
                        placement: "bottom",
                        strategy: l,
                        middleware: s
                    }).then((({
                        x: e,
                        y: t,
                        placement: o
                    }) => ({
                        tooltipStyles: {
                            left: `${e}px`,
                            top: `${t}px`
                        },
                        tooltipArrowStyles: {},
                        place: o
                    })))
                };
            var Ee = {
                    tooltip: "core-styles-module_tooltip__3vRRp",
                    fixed: "core-styles-module_fixed__pcSol",
                    arrow: "core-styles-module_arrow__cvMwQ",
                    noArrow: "core-styles-module_noArrow__xock6",
                    clickable: "core-styles-module_clickable__ZuTTB",
                    show: "core-styles-module_show__Nt9eE",
                    closing: "core-styles-module_closing__sGnxF"
                },
                _e = {
                    tooltip: "styles-module_tooltip__mnnfp",
                    arrow: "styles-module_arrow__K0L3T",
                    dark: "styles-module_dark__xNqje",
                    light: "styles-module_light__Z6W-X",
                    success: "styles-module_success__A2AKt",
                    warning: "styles-module_warning__SCK0X",
                    error: "styles-module_error__JvumD",
                    info: "styles-module_info__BWdHW"
                };
            const Se = ({
                    forwardRef: e,
                    id: t,
                    className: o,
                    classNameArrow: r,
                    variant: l = "dark",
                    anchorId: i,
                    anchorSelect: c,
                    place: s = "top",
                    offset: a = 10,
                    events: u = ["hover"],
                    openOnClick: d = !1,
                    positionStrategy: f = "absolute",
                    middlewares: p,
                    wrapper: m,
                    delayShow: y = 0,
                    delayHide: v = 0,
                    float: h = !1,
                    hidden: w = !1,
                    noArrow: g = !1,
                    clickable: b = !1,
                    closeOnEsc: x = !1,
                    closeOnScroll: E = !1,
                    closeOnResize: _ = !1,
                    openEvents: S,
                    closeEvents: T,
                    globalCloseEvents: O,
                    imperativeModeOnly: A,
                    style: R,
                    position: k,
                    afterShow: L,
                    afterHide: C,
                    content: N,
                    contentWrapperRef: D,
                    isOpen: j,
                    setIsOpen: $,
                    activeAnchor: P,
                    setActiveAnchor: z,
                    border: B,
                    opacity: H,
                    arrowColor: W,
                    role: I = "tooltip"
                }) => {
                    var F;
                    const M = (0, n.useRef)(null),
                        q = (0, n.useRef)(null),
                        V = (0, n.useRef)(null),
                        K = (0, n.useRef)(null),
                        X = (0, n.useRef)(null),
                        [Y, Z] = (0, n.useState)(s),
                        [G, U] = (0, n.useState)({}),
                        [J, Q] = (0, n.useState)({}),
                        [ee, te] = (0, n.useState)(!1),
                        [ne, re] = (0, n.useState)(!1),
                        [le, ie] = (0, n.useState)(null),
                        se = (0, n.useRef)(!1),
                        ae = (0, n.useRef)(null),
                        {
                            anchorRefs: ue,
                            setActiveAnchor: de
                        } = he(t),
                        fe = (0, n.useRef)(!1),
                        [me, ye] = (0, n.useState)([]),
                        ve = (0, n.useRef)(!1),
                        ge = d || u.includes("click"),
                        Se = ge || (null == S ? void 0 : S.click) || (null == S ? void 0 : S.dblclick) || (null == S ? void 0 : S.mousedown),
                        Te = S ? { ...S
                        } : {
                            mouseenter: !0,
                            focus: !0,
                            click: !1,
                            dblclick: !1,
                            mousedown: !1
                        };
                    !S && ge && Object.assign(Te, {
                        mouseenter: !1,
                        focus: !1,
                        click: !0
                    });
                    const Oe = T ? { ...T
                    } : {
                        mouseleave: !0,
                        blur: !0,
                        click: !1,
                        dblclick: !1,
                        mouseup: !1
                    };
                    !T && ge && Object.assign(Oe, {
                        mouseleave: !1,
                        blur: !1
                    });
                    const Ae = O ? { ...O
                    } : {
                        escape: x || !1,
                        scroll: E || !1,
                        resize: _ || !1,
                        clickOutsideAnchor: Se || !1
                    };
                    A && (Object.assign(Te, {
                        mouseenter: !1,
                        focus: !1,
                        click: !1,
                        dblclick: !1,
                        mousedown: !1
                    }), Object.assign(Oe, {
                        mouseleave: !1,
                        blur: !1,
                        click: !1,
                        dblclick: !1,
                        mouseup: !1
                    }), Object.assign(Ae, {
                        escape: !1,
                        scroll: !1,
                        resize: !1,
                        clickOutsideAnchor: !1
                    })), we((() => (ve.current = !0, () => {
                        ve.current = !1
                    })), []);
                    const Re = e => {
                        ve.current && (e && re(!0), setTimeout((() => {
                            ve.current && (null == $ || $(e), void 0 === j && te(e))
                        }), 10))
                    };
                    (0, n.useEffect)((() => {
                        if (void 0 === j) return () => null;
                        j && re(!0);
                        const e = setTimeout((() => {
                            te(j)
                        }), 10);
                        return () => {
                            clearTimeout(e)
                        }
                    }), [j]), (0, n.useEffect)((() => {
                        if (ee !== se.current)
                            if (X.current && clearTimeout(X.current), se.current = ee, ee) null == L || L();
                            else {
                                const e = (e => {
                                    const t = getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay").match(/^([\d.]+)(m?s?)$/);
                                    if (!t) return 0;
                                    const [, o, n] = t;
                                    return "s" !== n && "ms" !== n ? 0 : Number(o) * ("ms" === n ? 1 : 1e3)
                                })();
                                X.current = setTimeout((() => {
                                    re(!1), ie(null), null == C || C()
                                }), e + 25)
                            }
                    }), [ee]);
                    const ke = (e = y) => {
                            V.current && clearTimeout(V.current), V.current = setTimeout((() => {
                                Re(!0)
                            }), e)
                        },
                        Le = (e = v) => {
                            K.current && clearTimeout(K.current), K.current = setTimeout((() => {
                                fe.current || Re(!1)
                            }), e)
                        },
                        Ce = e => {
                            var t;
                            if (!e) return;
                            const o = null !== (t = e.currentTarget) && void 0 !== t ? t : e.target;
                            if (!(null == o ? void 0 : o.isConnected)) return z(null), void de({
                                current: null
                            });
                            y ? ke() : Re(!0), z(o), de({
                                current: o
                            }), K.current && clearTimeout(K.current)
                        },
                        Ne = () => {
                            b ? Le(v || 100) : v ? Le() : Re(!1), V.current && clearTimeout(V.current)
                        },
                        De = ({
                            x: e,
                            y: t
                        }) => {
                            var o;
                            const n = {
                                getBoundingClientRect: () => ({
                                    x: e,
                                    y: t,
                                    width: 0,
                                    height: 0,
                                    top: t,
                                    left: e,
                                    right: e,
                                    bottom: t
                                })
                            };
                            xe({
                                place: null !== (o = null == le ? void 0 : le.place) && void 0 !== o ? o : s,
                                offset: a,
                                elementReference: n,
                                tooltipReference: M.current,
                                tooltipArrowReference: q.current,
                                strategy: f,
                                middlewares: p,
                                border: B
                            }).then((e => {
                                Object.keys(e.tooltipStyles).length && U(e.tooltipStyles), Object.keys(e.tooltipArrowStyles).length && Q(e.tooltipArrowStyles), Z(e.place)
                            }))
                        },
                        je = e => {
                            if (!e) return;
                            const t = e,
                                o = {
                                    x: t.clientX,
                                    y: t.clientY
                                };
                            De(o), ae.current = o
                        },
                        $e = e => {
                            var t;
                            if (!ee) return;
                            const o = e.target;
                            (null === (t = M.current) || void 0 === t ? void 0 : t.contains(o)) || [document.querySelector(`[id='${i}']`), ...me].some((e => null == e ? void 0 : e.contains(o))) || (Re(!1), V.current && clearTimeout(V.current))
                        },
                        Pe = pe(Ce, 50, !0),
                        ze = pe(Ne, 50, !0),
                        Be = e => {
                            ze.cancel(), Pe(e)
                        },
                        He = () => {
                            Pe.cancel(), ze()
                        },
                        We = (0, n.useCallback)((() => {
                            var e, t;
                            const o = null !== (e = null == le ? void 0 : le.position) && void 0 !== e ? e : k;
                            o ? De(o) : h ? ae.current && De(ae.current) : (null == P ? void 0 : P.isConnected) && xe({
                                place: null !== (t = null == le ? void 0 : le.place) && void 0 !== t ? t : s,
                                offset: a,
                                elementReference: P,
                                tooltipReference: M.current,
                                tooltipArrowReference: q.current,
                                strategy: f,
                                middlewares: p,
                                border: B
                            }).then((e => {
                                ve.current && (Object.keys(e.tooltipStyles).length && U(e.tooltipStyles), Object.keys(e.tooltipArrowStyles).length && Q(e.tooltipArrowStyles), Z(e.place))
                            }))
                        }), [ee, P, N, R, s, null == le ? void 0 : le.place, a, f, k, null == le ? void 0 : le.position, h]);
                    (0, n.useEffect)((() => {
                        var e, t;
                        const o = new Set(ue);
                        me.forEach((e => {
                            o.add({
                                current: e
                            })
                        }));
                        const n = document.querySelector(`[id='${i}']`);
                        n && o.add({
                            current: n
                        });
                        const r = () => {
                                Re(!1)
                            },
                            l = be(P),
                            c = be(M.current);
                        Ae.scroll && (window.addEventListener("scroll", r), null == l || l.addEventListener("scroll", r), null == c || c.addEventListener("scroll", r));
                        let s = null;
                        Ae.resize ? window.addEventListener("resize", r) : P && M.current && (s = oe(P, M.current, We, {
                            ancestorResize: !0,
                            elementResize: !0,
                            layoutShift: !0
                        }));
                        const a = e => {
                            "Escape" === e.key && Re(!1)
                        };
                        Ae.escape && window.addEventListener("keydown", a), Ae.clickOutsideAnchor && window.addEventListener("click", $e);
                        const u = [],
                            d = e => {
                                ee && (null == e ? void 0 : e.target) === P || Ce(e)
                            },
                            f = e => {
                                ee && (null == e ? void 0 : e.target) === P && Ne()
                            },
                            p = ["mouseenter", "mouseleave", "focus", "blur"],
                            m = ["click", "dblclick", "mousedown", "mouseup"];
                        Object.entries(Te).forEach((([e, t]) => {
                            t && (p.includes(e) ? u.push({
                                event: e,
                                listener: Be
                            }) : m.includes(e) && u.push({
                                event: e,
                                listener: d
                            }))
                        })), Object.entries(Oe).forEach((([e, t]) => {
                            t && (p.includes(e) ? u.push({
                                event: e,
                                listener: He
                            }) : m.includes(e) && u.push({
                                event: e,
                                listener: f
                            }))
                        })), h && u.push({
                            event: "pointermove",
                            listener: je
                        });
                        const y = () => {
                                fe.current = !0
                            },
                            v = () => {
                                fe.current = !1, Ne()
                            };
                        return b && !Se && (null === (e = M.current) || void 0 === e || e.addEventListener("mouseenter", y), null === (t = M.current) || void 0 === t || t.addEventListener("mouseleave", v)), u.forEach((({
                            event: e,
                            listener: t
                        }) => {
                            o.forEach((o => {
                                var n;
                                null === (n = o.current) || void 0 === n || n.addEventListener(e, t)
                            }))
                        })), () => {
                            var e, t;
                            Ae.scroll && (window.removeEventListener("scroll", r), null == l || l.removeEventListener("scroll", r), null == c || c.removeEventListener("scroll", r)), Ae.resize ? window.removeEventListener("resize", r) : null == s || s(), Ae.clickOutsideAnchor && window.removeEventListener("click", $e), Ae.escape && window.removeEventListener("keydown", a), b && !Se && (null === (e = M.current) || void 0 === e || e.removeEventListener("mouseenter", y), null === (t = M.current) || void 0 === t || t.removeEventListener("mouseleave", v)), u.forEach((({
                                event: e,
                                listener: t
                            }) => {
                                o.forEach((o => {
                                    var n;
                                    null === (n = o.current) || void 0 === n || n.removeEventListener(e, t)
                                }))
                            }))
                        }
                    }), [P, We, ne, ue, me, S, T, O, ge]), (0, n.useEffect)((() => {
                        var e, o;
                        let n = null !== (o = null !== (e = null == le ? void 0 : le.anchorSelect) && void 0 !== e ? e : c) && void 0 !== o ? o : "";
                        !n && t && (n = `[data-tooltip-id='${t}']`);
                        const r = new MutationObserver((e => {
                            const o = [],
                                r = [];
                            e.forEach((e => {
                                if ("attributes" === e.type && "data-tooltip-id" === e.attributeName && e.target.getAttribute("data-tooltip-id") === t && o.push(e.target), "childList" === e.type) {
                                    if (P) {
                                        const t = [...e.removedNodes].filter((e => 1 === e.nodeType));
                                        if (n) try {
                                            r.push(...t.filter((e => e.matches(n)))), r.push(...t.flatMap((e => [...e.querySelectorAll(n)])))
                                        } catch (e) {}
                                        t.some((e => {
                                            var t;
                                            return !!(null === (t = null == e ? void 0 : e.contains) || void 0 === t ? void 0 : t.call(e, P)) && (re(!1), Re(!1), z(null), V.current && clearTimeout(V.current), K.current && clearTimeout(K.current), !0)
                                        }))
                                    }
                                    if (n) try {
                                        const t = [...e.addedNodes].filter((e => 1 === e.nodeType));
                                        o.push(...t.filter((e => e.matches(n)))), o.push(...t.flatMap((e => [...e.querySelectorAll(n)])))
                                    } catch (e) {}
                                }
                            })), (o.length || r.length) && ye((e => [...e.filter((e => !r.includes(e))), ...o]))
                        }));
                        return r.observe(document.body, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0,
                            attributeFilter: ["data-tooltip-id"]
                        }), () => {
                            r.disconnect()
                        }
                    }), [t, c, null == le ? void 0 : le.anchorSelect, P]), (0, n.useEffect)((() => {
                        We()
                    }), [We]), (0, n.useEffect)((() => {
                        if (!(null == D ? void 0 : D.current)) return () => null;
                        const e = new ResizeObserver((() => {
                            setTimeout((() => We()))
                        }));
                        return e.observe(D.current), () => {
                            e.disconnect()
                        }
                    }), [N, null == D ? void 0 : D.current]), (0, n.useEffect)((() => {
                        var e;
                        const t = document.querySelector(`[id='${i}']`),
                            o = [...me, t];
                        P && o.includes(P) || z(null !== (e = me[0]) && void 0 !== e ? e : t)
                    }), [i, me, P]), (0, n.useEffect)((() => () => {
                        V.current && clearTimeout(V.current), K.current && clearTimeout(K.current)
                    }), []), (0, n.useEffect)((() => {
                        var e;
                        let o = null !== (e = null == le ? void 0 : le.anchorSelect) && void 0 !== e ? e : c;
                        if (!o && t && (o = `[data-tooltip-id='${t}']`), o) try {
                            const e = Array.from(document.querySelectorAll(o));
                            ye(e)
                        } catch (e) {
                            ye([])
                        }
                    }), [t, c, null == le ? void 0 : le.anchorSelect]);
                    const Ie = null !== (F = null == le ? void 0 : le.content) && void 0 !== F ? F : N,
                        Fe = ee && Object.keys(G).length > 0;
                    return (0, n.useImperativeHandle)(e, (() => ({
                        open: t => {
                            if (null == t ? void 0 : t.anchorSelect) try {
                                document.querySelector(t.anchorSelect)
                            } catch (e) {
                                return void console.warn(`[react-tooltip] "${t.anchorSelect}" is not a valid CSS selector`)
                            }
                            ie(null != t ? t : null), (null == t ? void 0 : t.delay) ? ke(t.delay) : Re(!0)
                        },
                        close: e => {
                            (null == e ? void 0 : e.delay) ? Le(e.delay): Re(!1)
                        },
                        activeAnchor: P,
                        place: Y,
                        isOpen: Boolean(ne && !w && Ie && Fe)
                    }))), ne && !w && Ie ? n.createElement(m, {
                        id: t,
                        role: I,
                        className: ce("react-tooltip", Ee.tooltip, _e.tooltip, _e[l], o, `react-tooltip__place-${Y}`, Ee[Fe ? "show" : "closing"], Fe ? "react-tooltip__show" : "react-tooltip__closing", "fixed" === f && Ee.fixed, b && Ee.clickable),
                        onTransitionEnd: e => {
                            X.current && clearTimeout(X.current), ee || "opacity" !== e.propertyName || (re(!1), ie(null), null == C || C())
                        },
                        style: { ...R,
                            ...G,
                            opacity: void 0 !== H && Fe ? H : void 0
                        },
                        ref: M
                    }, Ie, n.createElement(m, {
                        className: ce("react-tooltip-arrow", Ee.arrow, _e.arrow, r, g && Ee.noArrow),
                        style: { ...J,
                            background: W ? `linear-gradient(to right bottom, transparent 50%, ${W} 50%)` : void 0
                        },
                        ref: q
                    })) : null
                },
                Te = ({
                    content: e
                }) => n.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                }),
                Oe = (e, t) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(e, t),
                Ae = n.forwardRef((({
                    id: e,
                    anchorId: t,
                    anchorSelect: o,
                    content: r,
                    html: l,
                    render: i,
                    className: c,
                    classNameArrow: s,
                    variant: a = "dark",
                    place: u = "top",
                    offset: d = 10,
                    wrapper: f = "div",
                    children: p = null,
                    events: m = ["hover"],
                    openOnClick: y = !1,
                    positionStrategy: v = "absolute",
                    middlewares: h,
                    delayShow: w = 0,
                    delayHide: g = 0,
                    float: b = !1,
                    hidden: x = !1,
                    noArrow: E = !1,
                    clickable: _ = !1,
                    closeOnEsc: S = !1,
                    closeOnScroll: T = !1,
                    closeOnResize: O = !1,
                    openEvents: A,
                    closeEvents: R,
                    globalCloseEvents: k,
                    imperativeModeOnly: L = !1,
                    style: C,
                    position: N,
                    isOpen: D,
                    disableStyleInjection: j = !1,
                    border: $,
                    opacity: P,
                    arrowColor: z,
                    setIsOpen: B,
                    afterShow: H,
                    afterHide: W,
                    role: I = "tooltip"
                }, F) => {
                    const [M, q] = (0, n.useState)(r), [V, K] = (0, n.useState)(l), [X, Y] = (0, n.useState)(u), [Z, G] = (0, n.useState)(a), [U, J] = (0, n.useState)(d), [Q, ee] = (0, n.useState)(w), [te, oe] = (0, n.useState)(g), [ne, re] = (0, n.useState)(b), [le, ie] = (0, n.useState)(x), [se, ae] = (0, n.useState)(f), [ue, de] = (0, n.useState)(m), [fe, pe] = (0, n.useState)(v), [me, ye] = (0, n.useState)(null), [ve, we] = (0, n.useState)(null), ge = (0, n.useRef)(j), {
                        anchorRefs: be,
                        activeAnchor: xe
                    } = he(e), Ee = e => null == e ? void 0 : e.getAttributeNames().reduce(((t, o) => {
                        var n;
                        return o.startsWith("data-tooltip-") && (t[o.replace(/^data-tooltip-/, "")] = null !== (n = null == e ? void 0 : e.getAttribute(o)) && void 0 !== n ? n : null), t
                    }), {}), _e = e => {
                        const t = {
                            place: e => {
                                var t;
                                Y(null !== (t = e) && void 0 !== t ? t : u)
                            },
                            content: e => {
                                q(null != e ? e : r)
                            },
                            html: e => {
                                K(null != e ? e : l)
                            },
                            variant: e => {
                                var t;
                                G(null !== (t = e) && void 0 !== t ? t : a)
                            },
                            offset: e => {
                                J(null === e ? d : Number(e))
                            },
                            wrapper: e => {
                                var t;
                                ae(null !== (t = e) && void 0 !== t ? t : f)
                            },
                            events: e => {
                                const t = null == e ? void 0 : e.split(" ");
                                de(null != t ? t : m)
                            },
                            "position-strategy": e => {
                                var t;
                                pe(null !== (t = e) && void 0 !== t ? t : v)
                            },
                            "delay-show": e => {
                                ee(null === e ? w : Number(e))
                            },
                            "delay-hide": e => {
                                oe(null === e ? g : Number(e))
                            },
                            float: e => {
                                re(null === e ? b : "true" === e)
                            },
                            hidden: e => {
                                ie(null === e ? x : "true" === e)
                            },
                            "class-name": e => {
                                ye(e)
                            }
                        };
                        Object.values(t).forEach((e => e(null))), Object.entries(e).forEach((([e, o]) => {
                            var n;
                            null === (n = t[e]) || void 0 === n || n.call(t, o)
                        }))
                    };
                    (0, n.useEffect)((() => {
                        q(r)
                    }), [r]), (0, n.useEffect)((() => {
                        K(l)
                    }), [l]), (0, n.useEffect)((() => {
                        Y(u)
                    }), [u]), (0, n.useEffect)((() => {
                        G(a)
                    }), [a]), (0, n.useEffect)((() => {
                        J(d)
                    }), [d]), (0, n.useEffect)((() => {
                        ee(w)
                    }), [w]), (0, n.useEffect)((() => {
                        oe(g)
                    }), [g]), (0, n.useEffect)((() => {
                        re(b)
                    }), [b]), (0, n.useEffect)((() => {
                        ie(x)
                    }), [x]), (0, n.useEffect)((() => {
                        pe(v)
                    }), [v]), (0, n.useEffect)((() => {
                        ge.current !== j && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")
                    }), [j]), (0, n.useEffect)((() => {
                        "undefined" != typeof window && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", {
                            detail: {
                                disableCore: "core" === j,
                                disableBase: j
                            }
                        }))
                    }), []), (0, n.useEffect)((() => {
                        var n;
                        const r = new Set(be);
                        let l = o;
                        if (!l && e && (l = `[data-tooltip-id='${e}']`), l) try {
                            document.querySelectorAll(l).forEach((e => {
                                r.add({
                                    current: e
                                })
                            }))
                        } catch (n) {
                            console.warn(`[react-tooltip] "${l}" is not a valid CSS selector`)
                        }
                        const i = document.querySelector(`[id='${t}']`);
                        if (i && r.add({
                                current: i
                            }), !r.size) return () => null;
                        const c = null !== (n = null != ve ? ve : i) && void 0 !== n ? n : xe.current,
                            s = new MutationObserver((e => {
                                e.forEach((e => {
                                    var t;
                                    if (!c || "attributes" !== e.type || !(null === (t = e.attributeName) || void 0 === t ? void 0 : t.startsWith("data-tooltip-"))) return;
                                    const o = Ee(c);
                                    _e(o)
                                }))
                            })),
                            a = {
                                attributes: !0,
                                childList: !1,
                                subtree: !1
                            };
                        if (c) {
                            const e = Ee(c);
                            _e(e), s.observe(c, a)
                        }
                        return () => {
                            s.disconnect()
                        }
                    }), [be, xe, ve, t, o]), (0, n.useEffect)((() => {
                        (null == C ? void 0 : C.border) && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), $ && !Oe("border", `${$}`) && console.warn(`[react-tooltip] "${$}" is not a valid \`border\`.`), (null == C ? void 0 : C.opacity) && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), P && !Oe("opacity", `${P}`) && console.warn(`[react-tooltip] "${P}" is not a valid \`opacity\`.`)
                    }), []);
                    let Ae = p;
                    const Re = (0, n.useRef)(null);
                    if (i) {
                        const e = i({
                            content: null != M ? M : null,
                            activeAnchor: ve
                        });
                        Ae = e ? n.createElement("div", {
                            ref: Re,
                            className: "react-tooltip-content-wrapper"
                        }, e) : null
                    } else M && (Ae = M);
                    V && (Ae = n.createElement(Te, {
                        content: V
                    }));
                    const ke = {
                        forwardRef: F,
                        id: e,
                        anchorId: t,
                        anchorSelect: o,
                        className: ce(c, me),
                        classNameArrow: s,
                        content: Ae,
                        contentWrapperRef: Re,
                        place: X,
                        variant: Z,
                        offset: U,
                        wrapper: se,
                        events: ue,
                        openOnClick: y,
                        positionStrategy: fe,
                        middlewares: h,
                        delayShow: Q,
                        delayHide: te,
                        float: ne,
                        hidden: le,
                        noArrow: E,
                        clickable: _,
                        closeOnEsc: S,
                        closeOnScroll: T,
                        closeOnResize: O,
                        openEvents: A,
                        closeEvents: R,
                        globalCloseEvents: k,
                        imperativeModeOnly: L,
                        style: C,
                        position: N,
                        isOpen: D,
                        border: $,
                        opacity: P,
                        arrowColor: z,
                        setIsOpen: B,
                        afterShow: H,
                        afterHide: W,
                        activeAnchor: ve,
                        setActiveAnchor: e => we(e),
                        role: I
                    };
                    return n.createElement(Se, { ...ke
                    })
                }));
            "undefined" != typeof window && window.addEventListener("react-tooltip-inject-styles", (e => {
                e.detail.disableCore || fe({
                    css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",
                    type: "core"
                }), e.detail.disableBase || fe({
                    css: "\n.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}",
                    type: "base"
                })
            }))
        }
    }
]);