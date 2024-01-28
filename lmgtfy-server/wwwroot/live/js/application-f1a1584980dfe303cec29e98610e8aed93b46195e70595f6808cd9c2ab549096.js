var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
} {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    function rand(e) {
        return Math.floor(Math.random() * e)
    }

    function gentlyEncode(e) {
        return encodeURIComponent ? encodeURIComponent(e).replace(/%20(\D)?/g, "+$1").replace(/'/g, escape("'")) : escape(e).replace(/\+/g, "%2B").replace(/%20/g, "+")
    }
    jQuery.cookie = function(e, n, t) {
            if ("undefined" == typeof n) {
                var o = null;
                if (document.cookie && "" != document.cookie)
                    for (var i = document.cookie.split(";"), r = 0; r < i.length; r++) {
                        var a = jQuery.trim(i[r]);
                        if (a.substring(0, e.length + 1) == e + "=") {
                            o = decodeURIComponent(a.substring(e.length + 1));
                            break
                        }
                    }
                return o
            }
            t = t || {}, null === n && (n = "", t = $.extend({}, t), t.expires = -1);
            var s = "";
            if (t.expires && ("number" == typeof t.expires || t.expires.toUTCString)) {
                var c;
                "number" == typeof t.expires ? (c = new Date, c.setTime(c.getTime() + 24 * t.expires * 60 * 60 * 1e3)) : c = t.expires, s = "; expires=" + c.toUTCString()
            }
            var u = t.path ? "; path=" + t.path : "",
                d = t.domain ? "; domain=" + t.domain : "",
                l = t.secure ? "; secure" : "";
            document.cookie = [e, "=", encodeURIComponent(n), s, u, d, l].join("")
        }, $.fn.sponsor = function(e, n) {
            var t = this;
            return $.getJSON(e, function(e) {
                var o = e.slots[rand(e.slots.length)],
                    i = o.id,
                    r = t.find("a");
                r.attr("href", o.url), r.find("img").attr("src", o.image), r.find("p").html(o.message), pageTracker && (pageTracker._trackPageview("/sponsor/" + i), r.unbind("click"), r.click(function() {
                    pageTracker._trackPageview("/outgoing/sponsor/" + i)
                })), n && n.call(t)
            }), t
        }, $.log = $.fn.log = function(e) {
            return console && console.log && console.log("%s: %o", e, this), this
        },
        function() {
            function e() {
                var currentDomain = window.location.hostname;
                var recentUrl = "http://api." + currentDomain + "/recent.json";
                $.getJSON(recentUrl, null, n)
            }

            function n(e) {
                a = e, t()
            }

            function t() {
                if (s > a.length - 1) i(0), e();
                else {
                    var n = a[s].q,
                        r = a[s].url,
                        u = $('<li style="display:none"><a></a></li>');
                    u.find("a").attr("href", r).text(n), c.append(u), u.slideDown(), i(s + 1), o(), setTimeout(t, rand(3e3))
                }
            }

            function o() {
                c.children().length > 100 && (o = function() {
                    c.find("li:first").remove()
                })
            }

            function i(e) {
                $.cookie("streamIndex", e), s = e
            }

            function r() {
                return s || parseInt($.cookie("streamIndex")) || 0
            }
            var a, s, c;
            window.LiveAjax = function() {
                a = [], s = r(), c = $("#stream"), e()
            }
        }(),
        function() {
            function e(e) {
                "WebSocket" in window ? n(e) : d("Your browser doesn't support web sockets.")
            }

            function n(e) {
                var ssl = "https:" == window.location.protocol;
                var currentDomain = window.location.hostname;
                var proto = ssl ? "wss" : "ws";
                var wsUrl = proto + "://live-ws." + currentDomain + "/live_ws";

                var g = new WebSocket(wsUrl);
                g.onopen = t;
                g.onclose = function() {
                    e();
                };
                g.onmessage = o;
            }

            function t() {}

            function o(e) {
                message = u(e.data), i(message)
            }

            function i(e) {
                if ("report" == e.type) return void $("#report").text(e.text);
                var n = p.find("#" + c(e.sessionId));
                n.length > 0 ? "update" == e.type ? n.find(".text").text(e.text) : r(n) : "update" == e.type && s(e)
            }

            function r(e) {
                e.removeClass("active").addClass("done"), anchor = e.find("a"), anchor.attr("href", a(anchor.find(".text").text()))
            }

            function a(e) {
                return "http://lmgtfy2.com?q=" + encodeURIComponent(e)
            }

            function s(e) {
                var n = $("<li>").attr("id", c(e.sessionId)).addClass("active"),
                    t = $("<a>"),
                    o = $("<span>").addClass("text").text(e.text),
                    i = $("<span>").addClass("cursor blink").text("_");
                t.append(o).append(i), n.append(t), l(n)
            }

            function c(e) {
                return e.replace(/#|<|>/g, "").replace(/\./g, "-")
            }

            function u(e) {
                var n = e.split("|", 3);
                return {
                    type: n[0],
                    sessionId: n[1],
                    text: n[2]
                }
            }

            function d(e) {
                var n = $('<li style="display:none"><a></a></li>');
                n.find("a").text(e), l(n)
            }

            function l(e) {
                p.append(e), e.slideDown(), f()
            }

            function f() {
                p.children().length > 100 && (f = function() {
                    p.find("li.done:first").remove()
                })
            }
            var p, g;
            window.LiveWS = function(n) {
                p = $("#stream"), e(n)
            }
        }(), $(function() {
            function e() {
                var e = function() {
                    LiveAjax()
                };
                "WebSocket" in window ? LiveWS(e) : LiveAjax()
            }

            function n() {
                $("#sponsor1,#sponsor2").fadeIn(1e3)
            }

            function t() {
                $("#about").fadeOut(1e3)
            }
            e(), n(), window.setTimeout(t, 1e4)
        });
}