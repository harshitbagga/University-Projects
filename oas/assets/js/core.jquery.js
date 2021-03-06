
function getZipLocation(t) {}

function zoomItemMarker(t) {
    var e = AllMarkers;
    jQuery(e).each(function(e, i) {
        i.id == t + "_item" && (map.setZoom(8), map.panTo(i.position), setTimeout(function() {
            google.maps.event.trigger(i, "click")
        }, 1e3))
    })
}
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            s = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var n = function() {
            i || t(s).trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.alert");
            n || i.data("bs.alert", n = new s(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        s = function(e) {
            t(e).on("click", i, this.close)
        };
    s.VERSION = "3.3.5", s.TRANSITION_DURATION = 150, s.prototype.close = function(e) {
        function i() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var n = t(this),
            o = n.attr("data-target");
        o || (o = n.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(o);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(s.TRANSITION_DURATION) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = s, t.fn.alert.noConflict = function() {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", i, s.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.button"),
                o = "object" == typeof e && e;
            n || s.data("bs.button", n = new i(this, o)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }
    var i = function(e, s) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, s), this.isLoading = !1
    };
    i.VERSION = "3.3.5", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            s = this.$element,
            n = s.is("input") ? "val" : "html",
            o = s.data();
        e += "Text", null == o.resetText && s.data("resetText", s[n]()), setTimeout(t.proxy(function() {
            s[n](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, s.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, s.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var s = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = s, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var s = t(i.target);
        s.hasClass("btn") || (s = s.closest(".btn")), e.call(s, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.carousel"),
                o = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : o.slide;
            n || s.data("bs.carousel", n = new i(this, o)), "number" == typeof e ? n.to(e) : a ? n[a]() : o.interval && n.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            s = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (s && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1,
            o = (i + n) % this.$items.length;
        return this.$items.eq(o)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, s) {
        var n = this.$element.find(".item.active"),
            o = s || this.getItemForDirection(e, n),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var d = o[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: d,
                direction: r
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(o)]);
                h && h.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: d,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, n.addClass(r), o.addClass(r), n.one("bsTransitionEnd", function() {
                o.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
        }
    };
    var s = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = s, this
    };
    var n = function(i) {
        var s, n = t(this),
            o = t(n.attr("data-target") || (s = n.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var a = t.extend({}, o.data(), n.data()),
                r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(o, a), r && o.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, s = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(s)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.collapse"),
                o = t.extend({}, s.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && o.toggle && /show|hide/.test(e) && (o.toggle = !1), n || i.data("bs.collapse", n = new s(this, o)), "string" == typeof e && n[e]()
        })
    }
    var s = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    s.VERSION = "3.3.5", s.TRANSITION_DURATION = 350, s.DEFAULTS = {
        toggle: !0
    }, s.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, s.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(s.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, s.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, s.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, s.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, s) {
            var n = t(s);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, s.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(s) {
        var n = t(this);
        n.attr("data-target") || s.preventDefault();
        var o = e(n),
            a = o.data("bs.collapse"),
            r = a ? "toggle" : n.data();
        i.call(o, r)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var s = i && t(i);
        return s && s.length ? s : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(n).remove(), t(o).each(function() {
            var s = t(this),
                n = e(s),
                o = {
                    relatedTarget: this
                };
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", o)), i.isDefaultPrevented() || (s.attr("aria-expanded", "false"), n.removeClass("open").trigger("hidden.bs.dropdown", o))))
        }))
    }

    function s(e) {
        return this.each(function() {
            var i = t(this),
                s = i.data("bs.dropdown");
            s || i.data("bs.dropdown", s = new a(this)), "string" == typeof e && s[e].call(i)
        })
    }
    var n = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        a = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.5", a.prototype.toggle = function(s) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var o = e(n),
                a = o.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {
                    relatedTarget: this
                };
                if (o.trigger(s = t.Event("show.bs.dropdown", r)), s.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", r)
            }
            return !1
        }
    }, a.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var s = t(this);
            if (i.preventDefault(), i.stopPropagation(), !s.is(".disabled, :disabled")) {
                var n = e(s),
                    a = n.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(o).trigger("focus"), s.trigger("click");
                var r = " li:not(.disabled):visible a",
                    l = n.find(".dropdown-menu" + r);
                if (l.length) {
                    var d = l.index(i.target);
                    38 == i.which && d > 0 && d--, 40 == i.which && d < l.length - 1 && d++, ~d || (d = 0), l.eq(d).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = s, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, s) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.modal"),
                a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            o || n.data("bs.modal", o = new i(this, a)), "string" == typeof e ? o[e](s) : a.show && o.show(s)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var s = this,
            n = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            s.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(s.$element) && (s.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var n = t.support.transition && s.$element.hasClass("fade");
            s.$element.parent().length || s.$element.appendTo(s.$body), s.$element.show().scrollTop(0), s.adjustDialog(), n && s.$element[0].offsetWidth, s.$element.addClass("in"), s.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? s.$dialog.one("bsTransitionEnd", function() {
                s.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : s.$element.trigger("focus").trigger(o)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var s = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                s.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var s = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = s, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var s = t(this),
            n = s.attr("href"),
            o = t(s.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, o.data(), s.data());
        s.is("a") && i.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                s.is(":visible") && s.trigger("focus")
            })
        }), e.call(o, a, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.tooltip"),
                o = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || s.data("bs.tooltip", n = new i(this, o)), "string" == typeof e && n[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, s) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(s), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), o = n.length; o--;) {
            var a = n[o];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, s) {
            i[t] != s && (e[t] = s)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var s = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !s) return;
            var n = this,
                o = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                d = l.test(r);
            d && (r = r.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                h = o[0].offsetWidth,
                p = o[0].offsetHeight;
            if (d) {
                var u = r,
                    f = this.getPosition(this.$viewport);
                r = "bottom" == r && c.bottom + p > f.bottom ? "top" : "top" == r && c.top - p < f.top ? "bottom" : "right" == r && c.right + h > f.width ? "left" : "left" == r && c.left - h < f.left ? "right" : r, o.removeClass(u).addClass(r)
            }
            var m = this.getCalculatedOffset(r, c, h, p);
            this.applyPlacement(m, r);
            var g = function() {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var s = this.tip(),
            n = s[0].offsetWidth,
            o = s[0].offsetHeight,
            a = parseInt(s.css("margin-top"), 10),
            r = parseInt(s.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(s[0], t.extend({
            using: function(t) {
                s.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), s.addClass("in");
        var l = s[0].offsetWidth,
            d = s[0].offsetHeight;
        "top" == i && d != o && (e.top = e.top + o - d);
        var c = this.getViewportAdjustedDelta(i, e, l, d);
        c.left ? e.left += c.left : e.top += c.top;
        var h = /top|bottom/.test(i),
            p = h ? 2 * c.left - n + l : 2 * c.top - o + d,
            u = h ? "offsetWidth" : "offsetHeight";
        s.offset(e), this.replaceArrow(p, s[0][u], h)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function s() {
            "in" != n.hoverState && o.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }
        var n = this,
            o = t(this.$tip),
            a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            s = "BODY" == i.tagName,
            n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var o = s ? {
                top: 0,
                left: 0
            } : e.offset(),
            a = {
                scroll: s ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            r = s ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, n, a, r, o)
    }, i.prototype.getCalculatedOffset = function(t, e, i, s) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - s,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - s / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - s / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, s) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - o - a.scroll,
                l = e.top + o - a.scroll + s;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var d = e.left - o,
                c = e.left + o + i;
            d < a.left ? n.left = a.left - d : c > a.right && (n.left = a.left + a.width - c)
        }
        return n
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var s = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = s, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.popover"),
                o = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || s.data("bs.popover", n = new i(this, o)), "string" == typeof e && n[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.5", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var s = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = s, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(i, s) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, s), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.scrollspy"),
                o = "object" == typeof i && i;
            n || s.data("bs.scrollspy", n = new e(this, o)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            s = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", s = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                n = e.data("target") || e.attr("href"),
                o = /^#./.test(n) && t(n);
            return o && o.length && o.is(":visible") && [
                [o[i]().top + s, n]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            s = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            o = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= s) return a != (t = o[o.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != o[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            s = t(i).parents("li").addClass("active");
        s.parent(".dropdown-menu").length && (s = s.closest("li.dropdown").addClass("active")), s.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var s = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = s, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.tab");
            n || s.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            s = e.data("target");
        if (s || (s = e.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"),
                o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var r = t(s);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, s, n) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        var a = s.find("> .active"),
            r = n && t.support.transition && (a.length && a.hasClass("fade") || !!s.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var s = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = s, this
    };
    var n = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.affix"),
                o = "object" == typeof e && e;
            n || s.data("bs.affix", n = new i(this, o)), "string" == typeof e && n[e]()
        })
    }
    var i = function(e, s) {
        this.options = t.extend({}, i.DEFAULTS, s), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, s) {
        var n = this.$target.scrollTop(),
            o = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? n + this.unpin <= o.top ? !1 : "bottom" : t - s >= n + a ? !1 : "bottom";
        var r = null == this.affixed,
            l = r ? n : o.top,
            d = r ? a : e;
        return null != i && i >= n ? "top" : null != s && l + d >= t - s ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                s = this.options.offset,
                n = s.top,
                o = s.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof s && (o = n = s), "function" == typeof n && (n = s.top(this.$element)), "function" == typeof o && (o = s.bottom(this.$element));
            var r = this.getState(a, e, n, o);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""),
                    d = t.Event(l + ".bs.affix");
                if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: a - e - o
            })
        }
    };
    var s = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = s, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                s = i.data();
            s.offset = s.offset || {}, null != s.offsetBottom && (s.offset.bottom = s.offsetBottom), null != s.offsetTop && (s.offset.top = s.offsetTop), e.call(i, s)
        })
    })
}(jQuery), ! function(t, e, i) {
    function s(t) {
        var e = {},
            s = /^jQuery\d+$/;
        return i.each(t.attributes, function(t, i) {
            i.specified && !s.test(i.name) && (e[i.name] = i.value)
        }), e
    }

    function n(t, s) {
        var n = this,
            o = i(n);
        if (n.value == o.attr("placeholder") && o.hasClass("placeholder"))
            if (o.data("placeholder-password")) {
                if (o = o.hide().next().show().attr("id", o.removeAttr("id").data("placeholder-id")), t === !0) return o[0].value = s;
                o.focus()
            } else n.value = "", o.removeClass("placeholder"), n == e.activeElement && n.select()
    }

    function o() {
        var t, e = this,
            o = i(e),
            a = this.id;
        if ("" == e.value) {
            if ("password" == e.type) {
                if (!o.data("placeholder-textinput")) {
                    try {
                        t = o.clone().attr({
                            type: "text"
                        })
                    } catch (r) {
                        t = i("<input>").attr(i.extend(s(this), {
                            type: "text"
                        }))
                    }
                    t.removeAttr("name").data({
                        "placeholder-password": o,
                        "placeholder-id": a
                    }).bind("focus.placeholder", n), o.data({
                        "placeholder-textinput": t,
                        "placeholder-id": a
                    }).before(t)
                }
                o = o.removeAttr("id").hide().prev().attr("id", a).show()
            }
            o.addClass("placeholder"), o[0].value = o.attr("placeholder")
        } else o.removeClass("placeholder")
    }
    var a, r, l = "placeholder" in e.createElement("input"),
        d = "placeholder" in e.createElement("textarea"),
        c = i.fn,
        h = i.valHooks,
        p = i.propHooks;
    l && d ? (r = c.placeholder = function() {
        return this
    }, r.input = r.textarea = !0) : (r = c.placeholder = function() {
        var t = this;
        return t.filter((l ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": n,
            "blur.placeholder": o
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), t
    }, r.input = l, r.textarea = d, a = {
        get: function(t) {
            var e = i(t),
                s = e.data("placeholder-password");
            return s ? s[0].value : e.data("placeholder-enabled") && e.hasClass("placeholder") ? "" : t.value
        },
        set: function(t, s) {
            var a = i(t),
                r = a.data("placeholder-password");
            return r ? r[0].value = s : a.data("placeholder-enabled") ? ("" == s ? (t.value = s, t != e.activeElement && o.call(t)) : a.hasClass("placeholder") ? n.call(t, !0, s) || (t.value = s) : t.value = s, a) : t.value = s
        }
    }, l || (h.input = a, p.value = a), d || (h.textarea = a, p.value = a), i(function() {
        i(e).delegate("form", "submit.placeholder", function() {
            var t = i(".placeholder", this).each(n);
            setTimeout(function() {
                t.each(o)
            }, 10)
        })
    }), i(t).bind("beforeunload.placeholder", function() {
        i(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery), ! function(t) {
    var e = {
        init: function(i) {
            return this.each(function() {
                e.destroy.call(this), this.opt = t.extend(!0, {}, t.fn.raty.defaults, i);
                var s = t(this),
                    n = ["number", "readOnly", "score", "scoreName"];
                e._callback.call(this, n), this.opt.precision && e._adjustPrecision.call(this), this.opt.number = e._between(this.opt.number, 0, this.opt.numberMax), this.opt.path = this.opt.path || "", this.opt.path && "/" !== this.opt.path.slice(this.opt.path.length - 1, this.opt.path.length) && (this.opt.path += "/"), this.stars = e._createStars.call(this), this.score = e._createScore.call(this), e._apply.call(this, this.opt.score);
                var o = this.opt.space ? 4 : 0,
                    a = this.opt.width || this.opt.number * this.opt.size + this.opt.number * o;
                this.opt.cancel && (this.cancel = e._createCancel.call(this), a += this.opt.size + o), this.opt.readOnly ? e._lock.call(this) : (s.css("cursor", "pointer"), e._binds.call(this)), this.opt.width !== !1, e._target.call(this, this.opt.score), s.data({
                    settings: this.opt,
                    raty: !0
                })
            })
        },
        _adjustPrecision: function() {
            this.opt.targetType = "score", this.opt.half = !0
        },
        _apply: function(t) {
            t && t > 0 && (t = e._between(t, 0, this.opt.number), this.score.val(t)), e._fill.call(this, t), t && e._roundStars.call(this, t)
        },
        _between: function(t, e, i) {
            return Math.min(Math.max(parseFloat(t), e), i)
        },
        _binds: function() {
            this.cancel && e._bindCancel.call(this), e._bindClick.call(this), e._bindOut.call(this), e._bindOver.call(this)
        },
        _bindCancel: function() {
            e._bindClickCancel.call(this), e._bindOutCancel.call(this), e._bindOverCancel.call(this)
        },
        _bindClick: function() {
            var e = this,
                i = t(e);
            e.stars.on("click.raty", function(s) {
                e.score.val(e.opt.half || e.opt.precision ? i.data("score") : t(this).attr("data-score")), e.opt.click && e.opt.click.call(e, parseFloat(e.score.val()), s)
            })
        },
        _bindClickCancel: function() {
            var t = this;
            t.cancel.on("click.raty", function(e) {
                t.score.removeAttr("value"), t.opt.click && t.opt.click.call(t, null, e)
            })
        },
        _bindOut: function() {
            var i = this;
            t(this).on("mouseleave.raty", function(t) {
                var s = parseFloat(i.score.val()) || void 0;
                e._apply.call(i, s), e._target.call(i, s, t), i.opt.mouseout && i.opt.mouseout.call(i, s, t)
            })
        },
        _bindOutCancel: function() {
            var e = this;
            e.cancel.on("mouseleave.raty", function(i) {
                t(this).attr("src", e.opt.path + e.opt.cancelOff), e.opt.mouseout && e.opt.mouseout.call(e, e.score.val() || null, i)
            })
        },
        _bindOverCancel: function() {
            var i = this;
            i.cancel.on("mouseover.raty", function(s) {
                t(this).attr("src", i.opt.path + i.opt.cancelOn), i.stars.attr("src", i.opt.path + i.opt.starOff), e._target.call(i, null, s), i.opt.mouseover && i.opt.mouseover.call(i, null)
            })
        },
        _bindOver: function() {
            var i = this,
                s = t(i),
                n = i.opt.half ? "mousemove.raty" : "mouseover.raty";
            i.stars.on(n, function(n) {
                var o = parseInt(this.alt, 10);
                if (i.opt.half) {
                    var a = parseFloat((n.pageX - t(this).offset().left) / i.opt.size),
                        r = a > .5 ? 1 : .5;
                    o = o - 1 + r, e._fill.call(i, o), i.opt.precision && (o = o - r + a), e._roundStars.call(i, o), s.data("score", o)
                } else e._fill.call(i, o);
                e._target.call(i, o, n), i.opt.mouseover && i.opt.mouseover.call(i, o, n)
            })
        },
        _callback: function(t) {
            for (i in t) "function" == typeof this.opt[t[i]] && (this.opt[t[i]] = this.opt[t[i]].call(this))
        },
        _createCancel: function() {
            var e = t(this),
                i = this.opt.path + this.opt.cancelOff,
                s = t("<img />", {
                    src: i,
                    alt: "x",
                    title: this.opt.cancelHint,
                    "class": "raty-cancel"
                });
            return "left" == this.opt.cancelPlace ? e.prepend("&#160;").prepend(s) : e.append("&#160;").append(s), s
        },
        _createScore: function() {
            return "off" == this.opt.scoreName ? t('<div style="display:none;" />', {
                name: this.opt.scoreName
            }).appendTo(this) : t("<input />", {
                type: "hidden",
                name: this.opt.scoreName
            }).appendTo(this)
        },
        _createStars: function() {
            for (var i = t(this), s = 1; s <= this.opt.number; s++) {
                var n = e._getHint.call(this, s),
                    o = this.opt.score && this.opt.score >= s ? "starOn" : "starOff";
                o = this.opt[o], t("<span />", {
                    "class": o + " size" + this.opt.size + " readonly" + this.opt.readOnly,
                    "data-score": s,
                    title: n
                }).appendTo(this), this.opt.space && i.append((s < this.opt.number, ""))
            }
            return i.children("span")
        },
        _error: function(e) {
            t(this).html(e), t.error(e)
        },
        _fill: function(t) {
            for (var e = this, i = 0, s = 1; s <= e.stars.length; s++) {
                var n = e.stars.eq(s - 1),
                    o = e.opt.single ? s == t : t >= s;
                if (e.opt.iconRange && e.opt.iconRange.length > i) {
                    var a = e.opt.iconRange[i],
                        r = a.on || e.opt.starOn,
                        l = a.off || e.opt.starOff,
                        d = o ? r : l;
                    s <= a.range && n.attr("class", d + " size" + this.opt.size + " readonly" + this.opt.readOnly), s == a.range && i++
                } else {
                    var d = o ? "starOn" : "starOff";
                    n.attr("class", this.opt[d] + " size" + this.opt.size + " readonly" + this.opt.readOnly)
                }
            }
        },
        _getHint: function(t) {
            var e = this.opt.hints[t - 1];
            return "" === e ? "" : e || t
        },
        _lock: function() {
            var i = parseInt(this.score.val(), 10),
                s = i ? e._getHint.call(this, i) : this.opt.noRatedMsg;
            t(this).data("readonly", !0).css("cursor", "").attr("title", s), this.score.attr("readonly", "readonly"), this.stars.attr("title", s), this.cancel && this.cancel.hide()
        },
        _roundStars: function(t) {
            var e = (t - Math.floor(t)).toFixed(2);
            if (e > this.opt.round.down) {
                var i = "starOn";
                this.opt.halfShow && e < this.opt.round.up ? i = "starHalf" : e < this.opt.round.full && (i = "starOff"), this.stars.eq(Math.ceil(t) - 1).attr("src", this.opt.path + this.opt[i])
            }
        },
        _target: function(i, s) {
            if (this.opt.target) {
                var n = t(this.opt.target);
                0 === n.length && e._error.call(this, "Target selector invalid or missing!"), this.opt.targetFormat.indexOf("{score}") < 0 && e._error.call(this, 'Template "{score}" missing!');
                var o = s && "mouseover" == s.type;
                void 0 === i ? i = this.opt.targetText : null === i ? i = o ? this.opt.cancelHint : this.opt.targetText : ("hint" == this.opt.targetType ? i = e._getHint.call(this, Math.ceil(i)) : this.opt.precision && (i = parseFloat(i).toFixed(1)), o || this.opt.targetKeep || (i = this.opt.targetText)), i && (i = this.opt.targetFormat.toString().replace("{score}", i)), n.is(":input") ? n.val(i) : n.html(i)
            }
        },
        _unlock: function() {
            t(this).data("readonly", !1).css("cursor", "pointer").removeAttr("title"), this.score.removeAttr("readonly", "readonly");
            for (var i = 0; i < this.opt.number; i++) this.stars.eq(i).attr("title", e._getHint.call(this, i + 1));
            this.cancel && this.cancel.css("display", "")
        },
        cancel: function(i) {
            return this.each(function() {
                t(this).data("readonly") !== !0 && (e[i ? "click" : "score"].call(this, null), this.score.removeAttr("value"))
            })
        },
        click: function(i) {
            return t(this).each(function() {
                t(this).data("readonly") !== !0 && (e._apply.call(this, i), this.opt.click || e._error.call(this, 'You must add the "click: function(score, evt) { }" callback.'), this.opt.click.call(this, i, {
                    type: "click"
                }), e._target.call(this, i))
            })
        },
        destroy: function() {
            return t(this).each(function() {
                var e = t(this),
                    i = e.data("raw");
                i ? e.off(".raty").empty().css({
                    cursor: i.style.cursor,
                    width: i.style.width
                }).removeData("readonly") : e.data("raw", e.clone()[0])
            })
        },
        getScore: function() {
            var e, i = [];
            return t(this).each(function() {
                e = this.score.val(), i.push(e ? parseFloat(e) : void 0)
            }), i.length > 1 ? i : i[0]
        },
        readOnly: function(i) {
            return this.each(function() {
                var s = t(this);
                s.data("readonly") !== i && (i ? (s.off(".raty").children("img").off(".raty"), e._lock.call(this)) : (e._binds.call(this), e._unlock.call(this)), s.data("readonly", i))
            })
        },
        reload: function() {
            return e.set.call(this, {})
        },
        score: function() {
            return arguments.length ? e.setScore.apply(this, arguments) : e.getScore.call(this)
        },
        set: function(e) {
            return this.each(function() {
                var i = t(this),
                    s = i.data("settings"),
                    n = t.extend({}, s, e);
                i.raty(n)
            })
        },
        setScore: function(i) {
            return t(this).each(function() {
                t(this).data("readonly") !== !0 && (e._apply.call(this, i), e._target.call(this, i))
            })
        }
    };
    t.fn.raty = function(i) {
        return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist!") : e.init.apply(this, arguments)
    }, t.fn.raty.defaults = {
        cancel: !1,
        cancelHint: "Cancel this rating!",
        cancelOff: "cancel-off.png",
        cancelOn: "cancel-on.png",
        cancelPlace: "left",
        click: void 0,
        half: !1,
        halfShow: !0,
        hints: ["bad", "poor", "regular", "good", "very good"],
        iconRange: void 0,
        mouseout: void 0,
        mouseover: void 0,
        noRatedMsg: "Not rated yet!",
        number: 5,
        numberMax: 20,
        path: "",
        precision: !1,
        readOnly: !1,
        round: {
            down: .25,
            full: .6,
            up: .76
        },
        score: void 0,
        scoreName: "score",
        single: !1,
        size: 16,
        space: !0,
        starHalf: "fa fa-star-half",
        starOff: "fa fa-star-o",
        starOn: "fa fa-star",
        target: void 0,
        targetFormat: "{score}",
        targetKeep: !1,
        targetText: "",
        targetType: "hint",
        width: void 0
    }
}(jQuery),
function(t, e, i) {
    var s = t();
    t.fn.dropdownHover = function(i) {
        return "ontouchstart" in document ? this : (s = s.add(this.parent()), this.each(function() {
            var n, o = t(this),
                a = o.parent(),
                r = {
                    delay: 500,
                    instantlyCloseOthers: !0
                },
                l = {
                    delay: t(this).data("delay"),
                    instantlyCloseOthers: t(this).data("close-others")
                },
                d = "show.bs.dropdown",
                c = "hide.bs.dropdown",
                h = t.extend(!0, {}, r, i, l);
            a.hover(function(t) {
                return a.hasClass("open") || o.is(t.target) ? (h.instantlyCloseOthers === !0 && s.removeClass("open"), e.clearTimeout(n), a.addClass("open"), void o.trigger(d)) : !0
            }, function() {
                n = e.setTimeout(function() {
                    a.removeClass("open"), o.trigger(c)
                }, h.delay)
            }), o.hover(function() {
                h.instantlyCloseOthers === !0 && s.removeClass("open"), e.clearTimeout(n), a.addClass("open"), o.trigger(d)
            }), a.find(".dropdown-submenu").each(function() {
                var i, s = t(this);
                s.hover(function() {
                    e.clearTimeout(i), s.children(".dropdown-menu").show(), s.siblings().children(".dropdown-menu").hide()
                }, function() {
                    var t = s.children(".dropdown-menu");
                    i = e.setTimeout(function() {
                        t.hide()
                    }, h.delay)
                })
            })
        }))
    }, t(document).ready(function() {
        t('[data-hover="dropdown"]').dropdownHover()
    })
}(jQuery, this),
function(t, e) {
    "use strict";

    function i(t) {
        x[x.length] = t
    }

    function s(t) {
        var e = new RegExp(" ?\\b" + t + "\\b");
        C.className = C.className.replace(e, "")
    }

    function n(t, e) {
        for (var i = 0, s = t.length; s > i; i++) e.call(t, t[i], i)
    }

    function o() {
        var e, s, o, a;
        C.className = C.className.replace(/ (w-|eq-|gt-|gte-|lt-|lte-|portrait|no-portrait|landscape|no-landscape)\d+/g, ""), e = t.innerWidth || C.clientWidth, s = t.outerWidth || t.screen.width, l.screen.innerWidth = e, l.screen.outerWidth = s, i("w-" + e), n(S.screens, function(t) {
            e > t ? (S.screensCss.gt && i("gt-" + t), S.screensCss.gte && i("gte-" + t)) : t > e ? (S.screensCss.lt && i("lt-" + t), S.screensCss.lte && i("lte-" + t)) : e === t && (S.screensCss.lte && i("lte-" + t), S.screensCss.eq && i("e-q" + t), S.screensCss.gte && i("gte-" + t))
        }), o = t.innerHeight || C.clientHeight, a = t.outerHeight || t.screen.height, l.screen.innerHeight = o, l.screen.outerHeight = a, l.feature("portrait", o > e), l.feature("landscape", e > o)
    }

    function a() {
        t.clearTimeout(y), y = t.setTimeout(o, 50)
    }
    var r, l, d, c, h, p, u, f, m, g, v, _, y, w = t.document,
        b = t.navigator,
        T = t.location,
        C = w.documentElement,
        x = [],
        S = {
            screens: [240, 320, 480, 640, 768, 800, 1024, 1280, 1440, 1680, 1920],
            screensCss: {
                gt: !0,
                gte: !1,
                lt: !0,
                lte: !1,
                eq: !1
            },
            browsers: [{
                ie: {
                    min: 6,
                    max: 11
                }
            }],
            browserCss: {
                gt: !0,
                gte: !1,
                lt: !0,
                lte: !1,
                eq: !0
            },
            html5: !0,
            page: "-page",
            section: "-section",
            head: "head"
        };
    if (t.head_conf)
        for (r in t.head_conf) t.head_conf[r] !== e && (S[r] = t.head_conf[r]);
    switch (l = t[S.head] = function() {
        l.ready.apply(null, arguments)
    }, l.feature = function(t, e, n) {
        return t ? ("[object Function]" === Object.prototype.toString.call(e) && (e = e.call()), i((e ? "" : "no-") + t), l[t] = !!e, n || (s("no-" + t), s(t), l.feature()), l) : (C.className += " " + x.join(" "), x = [], l)
    }, l.feature("js", !0), d = b.userAgent.toLowerCase(), c = /mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/.test(d), l.feature("mobile", c, !0), l.feature("desktop", !c, !0), d = /(chrome|firefox)[ \/]([\w.]+)/.exec(d) || /(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(d) || /(android)(?:.*version)?[ \/]([\w.]+)/.exec(d) || /(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(d) || /(msie) ([\w.]+)/.exec(d) || /(trident).+rv:(\w.)+/.exec(d) || [], h = d[1], p = parseFloat(d[2]), h) {
        case "msie":
        case "trident":
            h = "ie", p = w.documentMode || p;
            break;
        case "firefox":
            h = "ff";
            break;
        case "ipod":
        case "ipad":
        case "iphone":
            h = "ios";
            break;
        case "webkit":
            h = "safari"
    }
    for (l.browser = {
            name: h,
            version: p
        }, l.browser[h] = !0, u = 0, f = S.browsers.length; f > u; u++)
        for (m in S.browsers[u])
            if (h === m)
                for (i(m), g = S.browsers[u][m].min, v = S.browsers[u][m].max, _ = g; v >= _; _++) p > _ ? (S.browserCss.gt && i("gt-" + m + _), S.browserCss.gte && i("gte-" + m + _)) : _ > p ? (S.browserCss.lt && i("lt-" + m + _), S.browserCss.lte && i("lte-" + m + _)) : p === _ && (S.browserCss.lte && i("lte-" + m + _), S.browserCss.eq && i("eq-" + m + _), S.browserCss.gte && i("gte-" + m + _));
            else i("no-" + m);
    i(h), i(h + parseInt(p, 10)), S.html5 && "ie" === h && 9 > p && n("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|progress|section|summary|time|video".split("|"), function(t) {
        w.createElement(t)
    }), n(T.pathname.split("/"), function(t, s) {
        if (this.length > 2 && this[s + 1] !== e) s && i(this.slice(s, s + 1).join("-").toLowerCase() + S.section);
        else {
            var n = t || "index",
                o = n.indexOf(".");
            o > 0 && (n = n.substring(0, o)), C.id = n.toLowerCase() + S.page, s || i("root" + S.section)
        }
    }), l.screen = {
        height: t.screen.height,
        width: t.screen.width
    }, o(), y = 0, t.addEventListener ? t.addEventListener("resize", a, !1) : t.attachEvent("onresize", a)
}(window),
function(t, e) {
    "use strict";

    function i(t) {
        for (var i in t)
            if (a[t[i]] !== e) return !0;
        return !1
    }

    function s(t) {
        var e = t.charAt(0).toUpperCase() + t.substr(1),
            s = (t + " " + l.join(e + " ") + e).split(" ");
        return !!i(s)
    }
    var n = t.document,
        o = n.createElement("i"),
        a = o.style,
        r = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
        l = "Webkit Moz O ms Khtml".split(" "),
        d = t.head_conf && t.head_conf.head || "head",
        c = t[d],
        h = {
            gradient: function() {
                var t = "background-image:";
                return a.cssText = (t + r.join("gradient(linear,left top,right bottom,from(#9f9),to(#fff));" + t) + r.join("linear-gradient(left top,#eee,#fff);" + t)).slice(0, -t.length), !!a.backgroundImage
            },
            rgba: function() {
                return a.cssText = "background-color:rgba(0,0,0,0.5)", !!a.backgroundColor
            },
            opacity: function() {
                return "" === o.style.opacity
            },
            textshadow: function() {
                return "" === a.textShadow
            },
            multiplebgs: function() {
                a.cssText = "background:url(https://),url(https://),red url(https://)";
                var t = (a.background || "").match(/url/g);
                return "[object Array]" === Object.prototype.toString.call(t) && 3 === t.length
            },
            boxshadow: function() {
                return s("boxShadow")
            },
            borderimage: function() {
                return s("borderImage")
            },
            borderradius: function() {
                return s("borderRadius")
            },
            cssreflections: function() {
                return s("boxReflect")
            },
            csstransforms: function() {
                return s("transform")
            },
            csstransitions: function() {
                return s("transition")
            },
            touch: function() {
                return "ontouchstart" in t
            },
            retina: function() {
                return t.devicePixelRatio > 1
            },
            fontface: function() {
                var t = c.browser.name,
                    e = c.browser.version;
                switch (t) {
                    case "ie":
                        return e >= 9;
                    case "chrome":
                        return e >= 13;
                    case "ff":
                        return e >= 6;
                    case "ios":
                        return e >= 5;
                    case "android":
                        return !1;
                    case "webkit":
                        return e >= 5.1;
                    case "opera":
                        return e >= 10;
                    default:
                        return !1
                }
            }
        };
    for (var p in h) h[p] && c.feature(p, h[p].call(), !0);
    c.feature()
}(window),
function(t, e) {
    "use strict";

    function i() {}

    function s(t, e) {
        if (t) {
            "object" == typeof t && (t = [].slice.call(t));
            for (var i = 0, s = t.length; s > i; i++) e.call(t, t[i], i)
        }
    }

    function n(t, i) {
        var s = Object.prototype.toString.call(i).slice(8, -1);
        return i !== e && null !== i && s === t
    }

    function o(t) {
        return n("Function", t)
    }

    function a(t) {
        return n("Array", t)
    }

    function r(t) {
        var e = t.split("/"),
            i = e[e.length - 1],
            s = i.indexOf("?");
        return -1 !== s ? i.substring(0, s) : i
    }

    function l(t) {
        t = t || i, t._done || (t(), t._done = 1)
    }

    function d(t, e, s, n) {
        var o = "object" == typeof t ? t : {
                test: t,
                success: e ? a(e) ? e : [e] : !1,
                failure: s ? a(s) ? s : [s] : !1,
                callback: n || i
            },
            r = !!o.test;
        return r && o.success ? (o.success.push(o.callback), E.load.apply(null, o.success)) : r || !o.failure ? n() : (o.failure.push(o.callback), E.load.apply(null, o.failure)), E
    }

    function c(t) {
        var e, i, s = {};
        if ("object" == typeof t)
            for (e in t) !t[e] || (s = {
                name: e,
                url: t[e]
            });
        else s = {
            name: r(t),
            url: t
        };
        return i = $[s.name], i && i.url === s.url ? i : ($[s.name] = s, s)
    }

    function h(t) {
        t = t || $;
        for (var e in t)
            if (t.hasOwnProperty(e) && t[e].state !== N) return !1;
        return !0
    }

    function p(t) {
        t.state = M, s(t.onpreload, function(t) {
            t.call()
        })
    }

    function u(t) {
        t.state === e && (t.state = D, t.onpreload = [], _({
            url: t.url,
            type: "cache"
        }, function() {
            p(t)
        }))
    }

    function f() {
        var t = arguments,
            e = t[t.length - 1],
            i = [].slice.call(t, 1),
            n = i[0];
        return o(e) || (e = null), a(t[0]) ? (t[0].push(e), E.load.apply(null, t[0]), E) : (n ? (s(i, function(t) {
            o(t) || !t || u(c(t))
        }), g(c(t[0]), o(n) ? n : function() {
            E.load.apply(null, i)
        })) : g(c(t[0])), E)
    }

    function m() {
        var t = arguments,
            e = t[t.length - 1],
            i = {};
        return o(e) || (e = null), a(t[0]) ? (t[0].push(e), E.load.apply(null, t[0]), E) : (s(t, function(t) {
            t !== e && (t = c(t), i[t.name] = t)
        }), s(t, function(t) {
            t !== e && (t = c(t), g(t, function() {
                h(i) && l(e)
            }))
        }), E)
    }

    function g(t, e) {
        return e = e || i, t.state === N ? void e() : t.state === O ? void E.ready(t.name, e) : t.state === D ? void t.onpreload.push(function() {
            g(t, e)
        }) : (t.state = O, void _(t, function() {
            t.state = N, e(), s(I[t.name], function(t) {
                l(t)
            }), C && h() && s(I.ALL, function(t) {
                l(t)
            })
        }))
    }

    function v(t) {
        t = t || "";
        var e = t.split("?")[0].split(".");
        return e[e.length - 1].toLowerCase()
    }

    function _(e, s) {
        function n(e) {
            e = e || t.event, r.onload = r.onreadystatechange = r.onerror = null, s()
        }

        function o(i) {
            i = i || t.event, ("load" === i.type || /loaded|complete/.test(r.readyState) && (!S.documentMode || S.documentMode < 9)) && (t.clearTimeout(e.errorTimeout), t.clearTimeout(e.cssTimeout), r.onload = r.onreadystatechange = r.onerror = null, s())
        }

        function a() {
            if (e.state !== N && e.cssRetries <= 20) {
                for (var i = 0, s = S.styleSheets.length; s > i; i++)
                    if (S.styleSheets[i].href === r.href) return void o({
                        type: "load"
                    });
                e.cssRetries++, e.cssTimeout = t.setTimeout(a, 250)
            }
        }
        var r, l, d;
        s = s || i, l = v(e.url), "css" === l ? (r = S.createElement("link"), r.type = "text/" + (e.type || "css"), r.rel = "stylesheet", r.href = e.url, e.cssRetries = 0, e.cssTimeout = t.setTimeout(a, 500)) : (r = S.createElement("script"), r.type = "text/" + (e.type || "javascript"), r.src = e.url), r.onload = r.onreadystatechange = o, r.onerror = n, r.async = !1, r.defer = !1, e.errorTimeout = t.setTimeout(function() {
            n({
                type: "timeout"
            })
        }, 7e3), d = S.head || S.getElementsByTagName("head")[0], d.insertBefore(r, d.lastChild)
    }

    function y() {
        for (var t, e = S.getElementsByTagName("script"), i = 0, s = e.length; s > i; i++)
            if (t = e[i].getAttribute("data-headjs-load"), !!t) return void E.load(t)
    }

    function w(t, e) {
        var i, n, r;
        return t === S ? (C ? l(e) : k.push(e), E) : (o(t) && (e = t, t = "ALL"), a(t) ? (i = {}, s(t, function(t) {
            i[t] = $[t], E.ready(t, function() {
                h(i) && l(e)
            })
        }), E) : "string" == typeof t && o(e) ? (n = $[t], n && n.state === N || "ALL" === t && h() && C ? (l(e), E) : (r = I[t], r ? r.push(e) : r = I[t] = [e], E)) : E)
    }

    function b() {
        return S.body ? void(C || (C = !0, y(), s(k, function(t) {
            l(t)
        }))) : (t.clearTimeout(E.readyTimeout), void(E.readyTimeout = t.setTimeout(b, 50)))
    }

    function T() {
        S.addEventListener ? (S.removeEventListener("DOMContentLoaded", T, !1), b()) : "complete" === S.readyState && (S.detachEvent("onreadystatechange", T), b())
    }
    var C, x, S = t.document,
        k = [],
        I = {},
        $ = {},
        P = "async" in S.createElement("script") || "MozAppearance" in S.documentElement.style || t.opera,
        A = t.head_conf && t.head_conf.head || "head",
        E = t[A] = t[A] || function() {
            E.ready.apply(null, arguments)
        },
        D = 1,
        M = 2,
        O = 3,
        N = 4;
    if ("complete" === S.readyState) b();
    else if (S.addEventListener) S.addEventListener("DOMContentLoaded", T, !1), t.addEventListener("load", b, !1);
    else {
        S.attachEvent("onreadystatechange", T), t.attachEvent("onload", b), x = !1;
        try {
            x = !t.frameElement && S.documentElement
        } catch (L) {}
        x && x.doScroll && function j() {
            if (!C) {
                try {
                    x.doScroll("left")
                } catch (e) {
                    return t.clearTimeout(E.readyTimeout), void(E.readyTimeout = t.setTimeout(j, 50))
                }
                b()
            }
        }()
    }
    E.load = E.js = P ? m : f, E.test = d, E.ready = w, E.ready(S, function() {
        h() && s(I.ALL, function(t) {
            l(t)
        }), E.feature && E.feature("domloaded", !0)
    })
}(window),
function(t) {
    t.expander = {
        version: "1.4.8",
        defaults: {
            slicePoint: 100,
            preserveWords: !0,
            widow: 4,
            expandText: "read more",
            expandPrefix: "&hellip; ",
            expandAfterSummary: !1,
            summaryClass: "summary",
            detailClass: "details",
            moreClass: "read-more",
            lessClass: "read-less",
            moreLinkClass: "more-link",
            lessLinkClass: "less-link",
            collapseTimer: 0,
            expandEffect: "slideDown",
            expandSpeed: 250,
            collapseEffect: "slideUp",
            collapseSpeed: 200,
            userCollapse: !0,
            userCollapseText: "read less",
            userCollapsePrefix: " ",
            onSlice: null,
            beforeExpand: null,
            afterExpand: null,
            onCollapse: null,
            afterCollapse: null
        }
    }, t.fn.expander = function(e) {
        function i(t, e) {
            var i = "span",
                s = t.summary;
            return e ? (i = "div", m.test(s) && !t.expandAfterSummary ? s = s.replace(m, t.moreLabel + "$1") : s += t.moreLabel, s = '<div class="' + t.summaryClass + '">' + s + "</div>") : s += t.moreLabel, [s, " <", i + ' class="' + t.detailClass + '"', ">", t.details, "</" + i + ">"].join("")
        }

        function s(t) {
            var e = '<span class="' + t.moreClass + '">' + t.expandPrefix;
            return e += '<a href="#" class="' + t.moreLinkClass + '">' + t.expandText + "</a></span>"
        }

        function n(e, i) {
            return e.lastIndexOf("<") > e.lastIndexOf(">") && (e = e.slice(0, e.lastIndexOf("<"))), i && (e = e.replace(h, "")), t.trim(e)
        }

        function o(t, e) {
            e.stop(!0, !0)[t.collapseEffect](t.collapseSpeed, function() {
                var i = e.prev("span." + t.moreClass).show();
                i.length || e.parent().children("div." + t.summaryClass).show().find("span." + t.moreClass).show(), t.afterCollapse && t.afterCollapse.call(e)
            })
        }

        function a(e, i, s) {
            e.collapseTimer && (l = setTimeout(function() {
                o(e, i), t.isFunction(e.onCollapse) && e.onCollapse.call(s, !1)
            }, e.collapseTimer))
        }
        var r = "init";
        "string" == typeof e && (r = e, e = {});
        var l, d = t.extend({}, t.expander.defaults, e),
            c = /^<(?:area|br|col|embed|hr|img|input|link|meta|param).*>$/i,
            h = d.wordEnd || /(&(?:[^;]+;)?|[a-zA-Z\u00C0-\u0100]+)$/,
            p = /<\/?(\w+)[^>]*>/g,
            u = /<(\w+)[^>]*>/g,
            f = /<\/(\w+)>/g,
            m = /(<\/[^>]+>)\s*$/,
            g = /^(<[^>]+>)+.?/,
            v = /\s\s+/g,
            _ = function(e) {
                return t.trim(e || "").replace(v, " ")
            },
            y = {
                init: function() {
                    this.each(function() {
                        var e, r, h, m, v, y, w, b, T, C, x, S, k, I, $ = [],
                            P = [],
                            A = {},
                            E = this,
                            D = t(this),
                            M = t([]),
                            O = t.extend({}, d, D.data("expander") || t.meta && D.data() || {}),
                            N = !!D.find("." + O.detailClass).length,
                            L = !!D.find("*").filter(function() {
                                var e = t(this).css("display");
                                return /^block|table|list/.test(e)
                            }).length,
                            j = L ? "div" : "span",
                            H = j + "." + O.detailClass,
                            z = O.moreClass + "",
                            U = O.lessClass + "",
                            R = (O.moreLinkClass + "", O.lessLinkClass + "", O.expandSpeed || 0),
                            F = _(D.html()),
                            q = (_(D.text()), F.slice(0, O.slicePoint));
                        if (O.moreSelector = "span." + z.split(" ").join("."), O.lessSelector = "span." + U.split(" ").join("."), !t.data(this, "expanderInit")) {
                            for (t.data(this, "expanderInit", !0), t.data(this, "expander", O), t.each(["onSlice", "beforeExpand", "afterExpand", "onCollapse", "afterCollapse"], function(e, i) {
                                    A[i] = t.isFunction(O[i])
                                }), q = n(q), v = q.replace(p, "").length; O.slicePoint > v;) m = F.charAt(q.length), "<" === m && (m = F.slice(q.length).match(g)[0]), q += m, v++;
                            for (q = n(q, O.preserveWords), y = q.match(u) || [], w = q.match(f) || [], h = [], t.each(y, function(t, e) {
                                    c.test(e) || h.push(e)
                                }), y = h, r = w.length, e = 0; r > e; e++) w[e] = w[e].replace(f, "$1");
                            if (t.each(y, function(e, i) {
                                    var s = i.replace(u, "$1"),
                                        n = t.inArray(s, w); - 1 === n ? ($.push(i), P.push("</" + s + ">")) : w.splice(n, 1)
                                }), P.reverse(), N) T = D.find(H).remove().html(), q = D.html(), F = q + T, b = "";
                            else {
                                if (T = F.slice(q.length), C = t.trim(T.replace(p, "")), "" === C || C.split(/\s+/).length < O.widow) return;
                                b = P.pop() || "", q += P.join(""), T = $.join("") + T
                            }
                            O.moreLabel = D.find(O.moreSelector).length ? "" : s(O), L && (T = F), q += b, O.summary = q, O.details = T, O.lastCloseTag = b, A.onSlice && (h = O.onSlice.call(E, O), O = h && h.details ? h : O), x = i(O, L), D.html(x), k = D.find(H), I = D.find(O.moreSelector), "slideUp" === O.collapseEffect && "slideDown" !== O.expandEffect || D.is(":hidden") ? k.css({
                                display: "none"
                            }) : k[O.collapseEffect](0), M = D.find("div." + O.summaryClass), S = function(t) {
                                t.preventDefault(), I.hide(), M.hide(), A.beforeExpand && O.beforeExpand.call(E), k.stop(!1, !0)[O.expandEffect](R, function() {
                                    k.css({
                                        zoom: ""
                                    }), A.afterExpand && O.afterExpand.call(E), a(O, k, E)
                                })
                            }, I.find("a").unbind("click.expander").bind("click.expander", S), O.userCollapse && !D.find(O.lessSelector).length && D.find(H).append('<span class="' + O.lessClass + '">' + O.userCollapsePrefix + '<a href="#" class="' + O.lessLinkClass + '">' + O.userCollapseText + "</a></span>"), D.find(O.lessSelector + " a").unbind("click.expander").bind("click.expander", function(e) {
                                e.preventDefault(), clearTimeout(l);
                                var i = t(this).closest(H);
                                o(O, i), A.onCollapse && O.onCollapse.call(E, !0)
                            })
                        }
                    })
                },
                destroy: function() {
                    this.each(function() {
                        var e, i, s = t(this);
                        s.data("expanderInit") && (e = t.extend({}, s.data("expander") || {}, d), i = s.find("." + e.detailClass).contents(), s.removeData("expanderInit"), s.removeData("expander"), s.find(e.moreSelector).remove(), s.find("." + e.summaryClass).remove(), s.find("." + e.detailClass).after(i).remove(), s.find(e.lessSelector).remove())
                    })
                }
            };
        return y[r] && y[r].call(this), this
    }, t.fn.expander.defaults = t.expander.defaults
}(jQuery),
function(t) {
    function e(e, i) {
        var s, n = this,
            o = window.navigator,
            a = o.userAgent.toLowerCase();
        n.uid = t.rsModules.uid++, n.ns = ".rs" + n.uid;
        var r, l = document.createElement("div").style,
            d = ["webkit", "Moz", "ms", "O"],
            c = "",
            h = 0;
        for (s = 0; s < d.length; s++) r = d[s], !c && r + "Transform" in l && (c = r), r = r.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[r + "RequestAnimationFrame"], window.cancelAnimationFrame = window[r + "CancelAnimationFrame"] || window[r + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
            var i = (new Date).getTime(),
                s = Math.max(0, 16 - (i - h)),
                n = window.setTimeout(function() {
                    t(i + s)
                }, s);
            return h = i + s, n
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        }), n.isIPAD = a.match(/(ipad)/), n.isIOS = n.isIPAD || a.match(/(iphone|ipod)/), s = function(t) {
            return t = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [], {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }(a), d = {}, s.browser && (d[s.browser] = !0, d.version = s.version), d.chrome && (d.webkit = !0), n._a = d, n.isAndroid = -1 < a.indexOf("android"), n.slider = t(e), n.ev = t(n), n._b = t(document), n.st = t.extend({}, t.fn.royalSlider.defaults, i), n._c = n.st.transitionSpeed, n._d = 0, !n.st.allowCSS3 || d.webkit && !n.st.allowCSS3OnWebkit || (s = c + (c ? "T" : "t"), n._e = s + "ransform" in l && s + "ransition" in l, n._e && (n._f = c + (c ? "P" : "p") + "erspective" in l)), c = c.toLowerCase(), n._g = "-" + c + "-", n._h = "vertical" === n.st.slidesOrientation ? !1 : !0, n._i = n._h ? "left" : "top", n._j = n._h ? "width" : "height", n._k = -1, n._l = "fade" === n.st.transitionType ? !1 : !0, n._l || (n.st.sliderDrag = !1, n._m = 10), n._n = "z-index:0; display:none; opacity:0;", n._o = 0, n._p = 0, n._q = 0, t.each(t.rsModules, function(t, e) {
            "uid" !== t && e.call(n)
        }), n.slides = [], n._r = 0, (n.st.slides ? t(n.st.slides) : n.slider.children().detach()).each(function() {
            n._s(this, !0)
        }), n.st.randomizeSlides && n.slides.sort(function() {
            return .5 - Math.random()
        }), n.numSlides = n.slides.length, n._t(), n.st.startSlideId ? n.st.startSlideId > n.numSlides - 1 && (n.st.startSlideId = n.numSlides - 1) : n.st.startSlideId = 0, n._o = n.staticSlideId = n.currSlideId = n._u = n.st.startSlideId, n.currSlide = n.slides[n.currSlideId], n._v = 0, n.pointerMultitouch = !1, n.slider.addClass((n._h ? "rsHor" : "rsVer") + (n._l ? "" : " rsFade")), l = '<div class="rsOverflow"><div class="rsContainer">', n.slidesSpacing = n.st.slidesSpacing, n._w = (n._h ? n.slider.width() : n.slider.height()) + n.st.slidesSpacing, n._x = Boolean(0 < n._y), 1 >= n.numSlides && (n._z = !1), n._a1 = n._z && n._l ? 2 === n.numSlides ? 1 : 2 : 0, n._b1 = 6 > n.numSlides ? n.numSlides : 6, n._c1 = 0, n._d1 = 0, n.slidesJQ = [];
        for (s = 0; s < n.numSlides; s++) n.slidesJQ.push(t('<div style="' + (n._l ? "" : s !== n.currSlideId ? n._n : "z-index:0;") + '" class="rsSlide "></div>'));
        n._e1 = l = t(l + "</div></div>");
        var p = n.ns,
            c = function(t, e, i, s, o) {
                n._j1 = t + e + p, n._k1 = t + i + p, n._l1 = t + s + p, o && (n._m1 = t + o + p)
            };
        s = o.pointerEnabled, n.pointerEnabled = s || o.msPointerEnabled, n.pointerEnabled ? (n.hasTouch = !1, n._n1 = .2, n.pointerMultitouch = Boolean(1 < o[(s ? "m" : "msM") + "axTouchPoints"]), s ? c("pointer", "down", "move", "up", "cancel") : c("MSPointer", "Down", "Move", "Up", "Cancel")) : (n.isIOS ? n._j1 = n._k1 = n._l1 = n._m1 = "" : c("mouse", "down", "move", "up"), "ontouchstart" in window || "createTouch" in document ? (n.hasTouch = !0, n._j1 += " touchstart" + p, n._k1 += " touchmove" + p, n._l1 += " touchend" + p, n._m1 += " touchcancel" + p, n._n1 = .5, n.st.sliderTouch && (n._f1 = !0)) : (n.hasTouch = !1, n._n1 = .2)), n.st.sliderDrag && (n._f1 = !0, d.msie || d.opera ? n._g1 = n._h1 = "move" : d.mozilla ? (n._g1 = "-moz-grab", n._h1 = "-moz-grabbing") : d.webkit && -1 != o.platform.indexOf("Mac") && (n._g1 = "-webkit-grab", n._h1 = "-webkit-grabbing"), n._i1()), n.slider.html(l), n._o1 = n.st.controlsInside ? n._e1 : n.slider, n._p1 = n._e1.children(".rsContainer"), n.pointerEnabled && n._p1.css((s ? "" : "-ms-") + "touch-action", n._h ? "pan-y" : "pan-x"), n._q1 = t('<div class="rsPreloader"></div>'), o = n._p1.children(".rsSlide"), n._r1 = n.slidesJQ[n.currSlideId], n._s1 = 0, n._e ? (n._t1 = "transition-property", n._u1 = "transition-duration", n._v1 = "transition-timing-function", n._w1 = n._x1 = n._g + "transform", n._f ? (d.webkit && !d.chrome && n.slider.addClass("rsWebkit3d"), n._y1 = "translate3d(", n._z1 = "px, ", n._a2 = "px, 0px)") : (n._y1 = "translate(", n._z1 = "px, ", n._a2 = "px)"), n._l ? n._p1[n._g + n._t1] = n._g + "transform" : (d = {}, d[n._g + n._t1] = "opacity", d[n._g + n._u1] = n.st.transitionSpeed + "ms", d[n._g + n._v1] = n.st.css3easeInOut, o.css(d))) : (n._x1 = "left", n._w1 = "top");
        var u;
        t(window).on("resize" + n.ns, function() {
            u && clearTimeout(u), u = setTimeout(function() {
                n.updateSliderSize()
            }, 50)
        }), n.ev.trigger("rsAfterPropsSetup"), n.updateSliderSize(), n.st.keyboardNavEnabled && n._b2(), n.st.arrowsNavHideOnTouch && (n.hasTouch || n.pointerMultitouch) && (n.st.arrowsNav = !1), n.st.arrowsNav && (o = n._o1, t('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(o), n._c2 = o.children(".rsArrowLeft").click(function(t) {
            t.preventDefault(), n.prev()
        }), n._d2 = o.children(".rsArrowRight").click(function(t) {
            t.preventDefault(), n.next()
        }), n.st.arrowsNavAutoHide && !n.hasTouch && (n._c2.addClass("rsHidden"), n._d2.addClass("rsHidden"), o.one("mousemove.arrowshover", function() {
            n._c2.removeClass("rsHidden"), n._d2.removeClass("rsHidden")
        }), o.hover(function() {
            n._e2 || (n._c2.removeClass("rsHidden"), n._d2.removeClass("rsHidden"))
        }, function() {
            n._e2 || (n._c2.addClass("rsHidden"), n._d2.addClass("rsHidden"))
        })), n.ev.on("rsOnUpdateNav", function() {
            n._f2()
        }), n._f2()), n._f1 ? n._p1.on(n._j1, function(t) {
            n._g2(t)
        }) : n.dragSuccess = !1;
        var f = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
        n._p1.click(function(e) {
            if (!n.dragSuccess) {
                var i = t(e.target).attr("class");
                if (-1 !== t.inArray(i, f) && n.toggleVideo()) return !1;
                if (n.st.navigateByClick && !n._h2) {
                    if (t(e.target).closest(".rsNoDrag", n._r1).length) return !0;
                    n._i2(e)
                }
                n.ev.trigger("rsSlideClick", e)
            }
        }).on("click.rs", "a", function(t) {
            return n.dragSuccess ? !1 : (n._h2 = !0, void setTimeout(function() {
                n._h2 = !1
            }, 3))
        }), n.ev.trigger("rsAfterInit")
    }
    t.rsModules || (t.rsModules = {
        uid: 0
    }), e.prototype = {
        constructor: e,
        _i2: function(t) {
            t = t[this._h ? "pageX" : "pageY"] - this._j2, t >= this._q ? this.next() : 0 > t && this.prev()
        },
        _t: function() {
            var t;
            t = this.st.numImagesToPreload, (this._z = this.st.loop) && (2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1)), this._z && t > 0 && (4 >= this.numSlides ? t = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (t = Math.floor((this.numSlides - 1) / 2))), this._y = t
        },
        _s: function(e, i) {
            function s(t, e) {
                if (e ? r.images.push(t.attr(e)) : r.images.push(t.text()), l) {
                    l = !1, r.caption = "src" === e ? t.attr("alt") : t.contents(), r.image = r.images[0], r.videoURL = t.attr("data-rsVideo");
                    var i = t.attr("data-rsw"),
                        s = t.attr("data-rsh");
                    "undefined" != typeof i && !1 !== i && "undefined" != typeof s && !1 !== s ? (r.iW = parseInt(i, 10), r.iH = parseInt(s, 10)) : a.st.imgWidth && a.st.imgHeight && (r.iW = a.st.imgWidth, r.iH = a.st.imgHeight)
                }
            }
            var n, o, a = this,
                r = {},
                l = !0;
            return e = t(e), a._k2 = e, a.ev.trigger("rsBeforeParseNode", [e, r]), r.stopParsing ? void 0 : (e = a._k2, r.id = a._r, r.contentAdded = !1, a._r++, r.images = [], r.isBig = !1, r.hasCover || (e.hasClass("rsImg") ? (o = e, n = !0) : (o = e.find(".rsImg"), o.length && (n = !0)), n ? (r.bigImage = o.eq(0).attr("data-rsBigImg"), o.each(function() {
                var e = t(this);
                e.is("a") ? s(e, "href") : e.is("img") ? s(e, "src") : s(e)
            })) : e.is("img") && (e.addClass("rsImg rsMainSlideImage"), s(e, "src"))), o = e.find(".rsCaption"), o.length && (r.caption = o.remove()), r.content = e, a.ev.trigger("rsAfterParseNode", [e, r]), i && a.slides.push(r), 0 === r.images.length && (r.isLoaded = !0, r.isRendered = !1, r.isLoading = !1, r.images = null), r)
        },
        _b2: function() {
            var t, e, i = this,
                s = function(t) {
                    37 === t ? i.prev() : 39 === t && i.next()
                };
            i._b.on("keydown" + i.ns, function(n) {
                i._l2 || (e = n.keyCode, 37 !== e && 39 !== e || t || (s(e), t = setInterval(function() {
                    s(e)
                }, 700)))
            }).on("keyup" + i.ns, function(e) {
                t && (clearInterval(t), t = null)
            })
        },
        goTo: function(t, e) {
            t !== this.currSlideId && this._m2(t, this.st.transitionSpeed, !0, !e)
        },
        destroy: function(e) {
            this.ev.trigger("rsBeforeDestroy"), this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1), this._p1.off(this._j1 + " click"), this.slider.data("royalSlider", null), t.removeData(this.slider, "royalSlider"), t(window).off("resize" + this.ns), this.loadingTimeout && clearTimeout(this.loadingTimeout), e && this.slider.remove(), this.ev = this.slider = this.slides = null
        },
        _n2: function(e, i) {
            function s(i, s, a) {
                i.isAdded ? (n(s, i), o(s, i)) : (a || (a = d.slidesJQ[s]), i.holder ? a = i.holder : (a = d.slidesJQ[s] = t(a), i.holder = a), i.appendOnLoaded = !1, o(s, i, a), n(s, i), d._p2(i, a, e), i.isAdded = !0)
            }

            function n(t, i) {
                i.contentAdded || (d.setItemHtml(i, e), e || (i.contentAdded = !0))
            }

            function o(t, e, i) {
                d._l && (i || (i = d.slidesJQ[t]), i.css(d._i, (t + d._d1 + p) * d._w))
            }

            function a(t) {
                if (c) {
                    if (t > h - 1) return a(t - h);
                    if (0 > t) return a(h + t)
                }
                return t
            }
            var r, l, d = this,
                c = d._z,
                h = d.numSlides;
            if (!isNaN(i)) return a(i);
            var p, u, f = d.currSlideId,
                m = e ? Math.abs(d._o2 - d.currSlideId) >= d.numSlides - 1 ? 0 : 1 : d._y,
                g = Math.min(2, m),
                v = !1,
                _ = !1;
            for (l = f; f + 1 + g > l; l++)
                if (u = a(l), (r = d.slides[u]) && (!r.isAdded || !r.positionSet)) {
                    v = !0;
                    break
                }
            for (l = f - 1; l > f - 1 - g; l--)
                if (u = a(l), (r = d.slides[u]) && (!r.isAdded || !r.positionSet)) {
                    _ = !0;
                    break
                }
            if (v)
                for (l = f; f + m + 1 > l; l++) u = a(l), p = Math.floor((d._u - (f - l)) / d.numSlides) * d.numSlides, (r = d.slides[u]) && s(r, u);
            if (_)
                for (l = f - 1; l > f - 1 - m; l--) u = a(l), p = Math.floor((d._u - (f - l)) / h) * h, (r = d.slides[u]) && s(r, u);
            if (!e)
                for (g = a(f - m), f = a(f + m), m = g > f ? 0 : g, l = 0; h > l; l++) g > f && l > g - 1 || !(m > l || l > f) || (r = d.slides[l]) && r.holder && (r.holder.detach(), r.isAdded = !1)
        },
        setItemHtml: function(e, i) {
            var s = this,
                n = function() {
                    if (e.images) {
                        if (!e.isLoading) {
                            var i, n;
                            if (e.content.hasClass("rsImg") ? (i = e.content, n = !0) : i = e.content.find(".rsImg:not(img)"), i && !i.is("img") && i.each(function() {
                                    var i = t(this),
                                        s = '<img class="rsImg" src="' + (i.is("a") ? i.attr("href") : i.text()) + '" />';
                                    n ? e.content = t(s) : i.replaceWith(s)
                                }), i = n ? e.content : e.content.find("img.rsImg"), d(), i.eq(0).addClass("rsMainSlideImage"), e.iW && e.iH && (e.isLoaded || s._q2(e), r()), e.isLoading = !0, e.isBig) t("<img />").on("load.rs error.rs", function(e) {
                                t(this).off("load.rs error.rs"), o([this], !0)
                            }).attr("src", e.image);
                            else {
                                e.loaded = [], e.numStartedLoad = 0, i = function(i) {
                                    t(this).off("load.rs error.rs"), e.loaded.push(this), e.loaded.length === e.numStartedLoad && o(e.loaded, !1)
                                };
                                for (var a = 0; a < e.images.length; a++) {
                                    var l = t("<img />");
                                    e.numStartedLoad++, l.on("load.rs error.rs", i).attr("src", e.images[a])
                                }
                            }
                        }
                    } else e.isRendered = !0, e.isLoaded = !0, e.isLoading = !1, r(!0)
                },
                o = function(t, i) {
                    if (t.length) {
                        var s = t[0];
                        if (i !== e.isBig)(s = e.holder.children()) && 1 < s.length && c();
                        else if (e.iW && e.iH) a();
                        else if (e.iW = s.width, e.iH = s.height, e.iW && e.iH) a();
                        else {
                            var n = new Image;
                            n.onload = function() {
                                n.width ? (e.iW = n.width, e.iH = n.height, a()) : setTimeout(function() {
                                    n.width && (e.iW = n.width, e.iH = n.height), a()
                                }, 1e3)
                            }, n.src = s.src
                        }
                    } else a()
                },
                a = function() {
                    e.isLoaded = !0, e.isLoading = !1, r(), c(), l()
                },
                r = function() {
                    if (!e.isAppended && s.ev) {
                        var t = s.st.visibleNearby,
                            n = e.id - s._o;
                        i || e.appendOnLoaded || !s.st.fadeinLoadedSlide || 0 !== n && (!(t || s._r2 || s._l2) || -1 !== n && 1 !== n) || (t = {
                            visibility: "visible",
                            opacity: 0
                        }, t[s._g + "transition"] = "opacity 400ms ease-in-out", e.content.css(t), setTimeout(function() {
                            e.content.css("opacity", 1)
                        }, 16)), e.holder.find(".rsPreloader").length ? e.holder.append(e.content) : e.holder.html(e.content), e.isAppended = !0, e.isLoaded && (s._q2(e), l()), e.sizeReady || (e.sizeReady = !0, setTimeout(function() {
                            s.ev.trigger("rsMaybeSizeReady", e)
                        }, 100))
                    }
                },
                l = function() {
                    !e.loadedTriggered && s.ev && (e.isLoaded = e.loadedTriggered = !0, e.holder.trigger("rsAfterContentSet"), s.ev.trigger("rsAfterContentSet", e))
                },
                d = function() {
                    s.st.usePreloader && e.holder.html(s._q1.clone())
                },
                c = function(t) {
                    s.st.usePreloader && (t = e.holder.find(".rsPreloader"), t.length && t.remove())
                };
            e.isLoaded ? r() : i ? !s._l && e.images && e.iW && e.iH ? n() : (e.holder.isWaiting = !0, d(), e.holder.slideId = -99) : n()
        },
        _p2: function(t, e, i) {
            this._p1.append(t.holder), t.appendOnLoaded = !1
        },
        _g2: function(e, i) {
            var s, n = this,
                o = "touchstart" === e.type;
            if (n._s2 = o, n.ev.trigger("rsDragStart"), t(e.target).closest(".rsNoDrag", n._r1).length) return n.dragSuccess = !1, !0;
            if (!i && n._r2 && (n._t2 = !0, n._u2()), n.dragSuccess = !1, n._l2) o && (n._v2 = !0);
            else {
                if (o && (n._v2 = !1), n._w2(), o) {
                    var a = e.originalEvent.touches;
                    if (!(a && 0 < a.length)) return;
                    s = a[0], 1 < a.length && (n._v2 = !0)
                } else e.preventDefault(), s = e, n.pointerEnabled && (s = s.originalEvent);
                n._l2 = !0, n._b.on(n._k1, function(t) {
                    n._x2(t, i)
                }).on(n._l1, function(t) {
                    n._y2(t, i)
                }), n._z2 = "", n._a3 = !1, n._b3 = s.pageX, n._c3 = s.pageY, n._d3 = n._v = (i ? n._e3 : n._h) ? s.pageX : s.pageY, n._f3 = 0, n._g3 = 0, n._h3 = i ? n._i3 : n._p, n._j3 = (new Date).getTime(), o && n._e1.on(n._m1, function(t) {
                    n._y2(t, i)
                })
            }
        },
        _k3: function(t, e) {
            if (this._l3) {
                var i = this._m3,
                    s = t.pageX - this._b3,
                    n = t.pageY - this._c3,
                    o = this._h3 + s,
                    a = this._h3 + n,
                    r = e ? this._e3 : this._h,
                    o = r ? o : a,
                    a = this._z2;
                this._a3 = !0, this._b3 = t.pageX, this._c3 = t.pageY, "x" === a && 0 !== s ? this._f3 = s > 0 ? 1 : -1 : "y" === a && 0 !== n && (this._g3 = n > 0 ? 1 : -1), a = r ? this._b3 : this._c3, s = r ? s : n, e ? o > this._n3 ? o = this._h3 + s * this._n1 : o < this._o3 && (o = this._h3 + s * this._n1) : this._z || (0 >= this.currSlideId && 0 < a - this._d3 && (o = this._h3 + s * this._n1), this.currSlideId >= this.numSlides - 1 && 0 > a - this._d3 && (o = this._h3 + s * this._n1)), this._h3 = o, 200 < i - this._j3 && (this._j3 = i, this._v = a), e ? this._q3(this._h3) : this._l && this._p3(this._h3)
            }
        },
        _x2: function(t, e) {
            var i, s = this,
                n = "touchmove" === t.type;
            if (!s._s2 || n) {
                if (n) {
                    if (s._r3) return;
                    var o = t.originalEvent.touches;
                    if (!o) return;
                    if (1 < o.length) return;
                    i = o[0]
                } else i = t, s.pointerEnabled && (i = i.originalEvent);
                if (s._a3 || (s._e && (e ? s._s3 : s._p1).css(s._g + s._u1, "0s"), function a() {
                        s._l2 && (s._t3 = requestAnimationFrame(a), s._u3 && s._k3(s._u3, e))
                    }()), s._l3) t.preventDefault(), s._m3 = (new Date).getTime(), s._u3 = i;
                else if (o = e ? s._e3 : s._h, i = Math.abs(i.pageX - s._b3) - Math.abs(i.pageY - s._c3) - (o ? -7 : 7), i > 7) {
                    if (o) t.preventDefault(), s._z2 = "x";
                    else if (n) return void s._v3(t);
                    s._l3 = !0
                } else if (-7 > i) {
                    if (o) {
                        if (n) return void s._v3(t)
                    } else t.preventDefault(), s._z2 = "y";
                    s._l3 = !0
                }
            }
        },
        _v3: function(t, e) {
            this._r3 = !0, this._a3 = this._l2 = !1, this._y2(t)
        },
        _y2: function(e, i) {
            function s(t) {
                return 100 > t ? 100 : t > 500 ? 500 : t
            }

            function n(t, e) {
                (d._l || i) && (r = (-d._u - d._d1) * d._w, l = Math.abs(d._p - r), d._c = l / e, t && (d._c += 250), d._c = s(d._c), d._x3(r, !1))
            }
            var o, a, r, l, d = this;
            if (o = -1 < e.type.indexOf("touch"), !d._s2 || o)
                if (d._s2 = !1, d.ev.trigger("rsDragRelease"), d._u3 = null, d._l2 = !1, d._r3 = !1, d._l3 = !1, d._m3 = 0, cancelAnimationFrame(d._t3), d._a3 && (i ? d._q3(d._h3) : d._l && d._p3(d._h3)), d._b.off(d._k1).off(d._l1), o && d._e1.off(d._m1), d._i1(), !d._a3 && !d._v2 && i && d._w3) {
                    var c = t(e.target).closest(".rsNavItem");
                    c.length && d.goTo(c.index())
                } else {
                    if (a = i ? d._e3 : d._h, !d._a3 || "y" === d._z2 && a || "x" === d._z2 && !a) {
                        if (i || !d._t2) return d._t2 = !1, void(d.dragSuccess = !1);
                        if (d._t2 = !1, d.st.navigateByClick) return d._i2(d.pointerEnabled ? e.originalEvent : e), void(d.dragSuccess = !0);
                        d.dragSuccess = !0
                    } else d.dragSuccess = !0;
                    d._t2 = !1, d._z2 = "";
                    var h = d.st.minSlideOffset;
                    o = o ? e.originalEvent.changedTouches[0] : d.pointerEnabled ? e.originalEvent : e;
                    var p = a ? o.pageX : o.pageY,
                        u = d._d3;
                    o = d._v;
                    var f = d.currSlideId,
                        m = d.numSlides,
                        g = a ? d._f3 : d._g3,
                        v = d._z;
                    if (Math.abs(p - u), o = p - o, a = (new Date).getTime() - d._j3, a = Math.abs(o) / a, 0 === g || 1 >= m) n(!0, a);
                    else {
                        if (!v && !i)
                            if (0 >= f) {
                                if (g > 0) return void n(!0, a)
                            } else if (f >= m - 1 && 0 > g) return void n(!0, a);
                        if (i) {
                            if (r = d._i3, r > d._n3) r = d._n3;
                            else if (r < d._o3) r = d._o3;
                            else {
                                if (p = a * a / .006, c = -d._i3, u = d._y3 - d._z3 + d._i3, o > 0 && p > c ? (c += d._z3 / (15 / (p / a * .003)), a = a * c / p, p = c) : 0 > o && p > u && (u += d._z3 / (15 / (p / a * .003)), a = a * u / p, p = u), c = Math.max(Math.round(a / .003), 50), r += p * (0 > o ? -1 : 1), r > d._n3) return void d._a4(r, c, !0, d._n3, 200);
                                if (r < d._o3) return void d._a4(r, c, !0, d._o3, 200)
                            }
                            d._a4(r, c, !0)
                        } else c = function(t) {
                            var e = Math.floor(t / d._w);
                            return t - e * d._w > h && e++, e
                        }, p > u + h ? 0 > g ? n(!1, a) : (c = c(p - u), d._m2(d.currSlideId - c, s(Math.abs(d._p - (-d._u - d._d1 + c) * d._w) / a), !1, !0, !0)) : u - h > p ? g > 0 ? n(!1, a) : (c = c(u - p), d._m2(d.currSlideId + c, s(Math.abs(d._p - (-d._u - d._d1 - c) * d._w) / a), !1, !0, !0)) : n(!1, a)
                    }
                }
        },
        _p3: function(t) {
            t = this._p = t, this._e ? this._p1.css(this._x1, this._y1 + (this._h ? t + this._z1 + 0 : 0 + this._z1 + t) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, t)
        },
        updateSliderSize: function(t) {
            var e, i;
            if (this.st.autoScaleSlider) {
                var s = this.st.autoScaleSliderWidth,
                    n = this.st.autoScaleSliderHeight;
                this.st.autoScaleHeight ? (e = this.slider.width(), e != this.width && (this.slider.css("height", n / s * e), e = this.slider.width()), i = this.slider.height()) : (i = this.slider.height(), i != this.height && (this.slider.css("width", s / n * i), i = this.slider.height()), e = this.slider.width())
            } else e = this.slider.width(), i = this.slider.height();
            if (t || e != this.width || i != this.height) {
                for (this.width = e, this.height = i, this._b4 = e, this._c4 = i, this.ev.trigger("rsBeforeSizeSet"), this.ev.trigger("rsAfterSizePropSet"), this._e1.css({
                        width: this._b4,
                        height: this._c4
                    }), this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing, this._d4 = this.st.imageScalePadding, e = 0; e < this.slides.length; e++) t = this.slides[e], t.positionSet = !1, t && t.images && t.isLoaded && (t.isRendered = !1, this._q2(t));
                if (this._e4)
                    for (e = 0; e < this._e4.length; e++) t = this._e4[e], t.holder.css(this._i, (t.id + this._d1) * this._w);
                this._n2(), this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w)), this.ev.trigger("rsOnUpdateNav")
            }
            this._j2 = this._e1.offset(), this._j2 = this._j2[this._i]
        },
        appendSlide: function(e, i) {
            var s = this._s(e);
            (isNaN(i) || i > this.numSlides) && (i = this.numSlides), this.slides.splice(i, 0, s), this.slidesJQ.splice(i, 0, t('<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>')), i < this.currSlideId && this.currSlideId++, this.ev.trigger("rsOnAppendSlide", [s, i]), this._f4(i), i === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
        },
        removeSlide: function(t) {
            var e = this.slides[t];
            e && (e.holder && e.holder.remove(), t < this.currSlideId && this.currSlideId--, this.slides.splice(t, 1), this.slidesJQ.splice(t, 1), this.ev.trigger("rsOnRemoveSlide", [t]), this._f4(t), t === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
        },
        _f4: function(t) {
            var e = this;
            for (t = e.numSlides, t = 0 >= e._u ? 0 : Math.floor(e._u / t), e.numSlides = e.slides.length, 0 === e.numSlides ? (e.currSlideId = e._d1 = e._u = 0, e.currSlide = e._g4 = null) : e._u = t * e.numSlides + e.currSlideId, t = 0; t < e.numSlides; t++) e.slides[t].id = t;
            e.currSlide = e.slides[e.currSlideId], e._r1 = e.slidesJQ[e.currSlideId], e.currSlideId >= e.numSlides ? e.goTo(e.numSlides - 1) : 0 > e.currSlideId && e.goTo(0), e._t(), e._l && e._z && e._p1.css(e._g + e._u1, "0ms"), e._h4 && clearTimeout(e._h4), e._h4 = setTimeout(function() {
                e._l && e._p3((-e._u - e._d1) * e._w), e._n2(), e._l || e._r1.css({
                    display: "block",
                    opacity: 1
                })
            }, 14), e.ev.trigger("rsOnUpdateNav")
        },
        _i1: function() {
            this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
        },
        _w2: function() {
            this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) : (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
        },
        next: function(t) {
            this._m2("next", this.st.transitionSpeed, !0, !t)
        },
        prev: function(t) {
            this._m2("prev", this.st.transitionSpeed, !0, !t)
        },
        _m2: function(t, e, i, s, n) {
            var o, a, r, l = this;
            if (l.ev.trigger("rsBeforeMove", [t, s]), r = "next" === t ? l.currSlideId + 1 : "prev" === t ? l.currSlideId - 1 : t = parseInt(t, 10), !l._z) {
                if (0 > r) return void l._i4("left", !s);
                if (r >= l.numSlides) return void l._i4("right", !s)
            }
            l._r2 && (l._u2(!0), i = !1), a = r - l.currSlideId, r = l._o2 = l.currSlideId;
            var d = l.currSlideId + a;
            s = l._u;
            var c;
            l._z ? (d = l._n2(!1, d), s += a) : s = d, l._o = d, l._g4 = l.slidesJQ[l.currSlideId], l._u = s, l.currSlideId = l._o, l.currSlide = l.slides[l.currSlideId], l._r1 = l.slidesJQ[l.currSlideId];
            var d = l.st.slidesDiff,
                h = Boolean(a > 0);
            a = Math.abs(a);
            var p = Math.floor(r / l._y),
                u = Math.floor((r + (h ? d : -d)) / l._y),
                p = (h ? Math.max(p, u) : Math.min(p, u)) * l._y + (h ? l._y - 1 : 0);
            if (p > l.numSlides - 1 ? p = l.numSlides - 1 : 0 > p && (p = 0), r = h ? p - r : r - p, r > l._y && (r = l._y), a > r + d)
                for (l._d1 += (a - (r + d)) * (h ? -1 : 1), e *= 1.4, r = 0; r < l.numSlides; r++) l.slides[r].positionSet = !1;
            l._c = e, l._n2(!0), n || (c = !0), o = (-s - l._d1) * l._w, c ? setTimeout(function() {
                l._j4 = !1, l._x3(o, t, !1, i), l.ev.trigger("rsOnUpdateNav")
            }, 0) : (l._x3(o, t, !1, i), l.ev.trigger("rsOnUpdateNav"))
        },
        _f2: function() {
            this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z || this.st.loopRewind || (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId === this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))))
        },
        _x3: function(e, i, s, n, o) {
            function a() {
                var t;
                r && (t = r.data("rsTimeout")) && (r !== l && r.css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                }), clearTimeout(t), r.data("rsTimeout", "")), (t = l.data("rsTimeout")) && (clearTimeout(t), l.data("rsTimeout", ""))
            }
            var r, l, d = this,
                c = {};
            isNaN(d._c) && (d._c = 400), d._p = d._h3 = e, d.ev.trigger("rsBeforeAnimStart"), d._e ? d._l ? (d._c = parseInt(d._c, 10), s = d._g + d._v1, c[d._g + d._u1] = d._c + "ms", c[s] = n ? t.rsCSS3Easing[d.st.easeInOut] : t.rsCSS3Easing[d.st.easeOut], d._p1.css(c), n || !d.hasTouch ? setTimeout(function() {
                d._p3(e)
            }, 5) : d._p3(e)) : (d._c = d.st.transitionSpeed, r = d._g4, l = d._r1, l.data("rsTimeout") && l.css("opacity", 0), a(), r && r.data("rsTimeout", setTimeout(function() {
                c[d._g + d._u1] = "0ms", c.zIndex = 0, c.display = "none", r.data("rsTimeout", ""), r.css(c), setTimeout(function() {
                    r.css("opacity", 0)
                }, 16)
            }, d._c + 60)), c.display = "block", c.zIndex = d._m, c.opacity = 0, c[d._g + d._u1] = "0ms", c[d._g + d._v1] = t.rsCSS3Easing[d.st.easeInOut], l.css(c), l.data("rsTimeout", setTimeout(function() {
                l.css(d._g + d._u1, d._c + "ms"), l.data("rsTimeout", setTimeout(function() {
                    l.css("opacity", 1), l.data("rsTimeout", "")
                }, 20))
            }, 20))) : d._l ? (c[d._h ? d._x1 : d._w1] = e + "px", d._p1.animate(c, d._c, n ? d.st.easeInOut : d.st.easeOut)) : (r = d._g4, l = d._r1, l.stop(!0, !0).css({
                opacity: 0,
                display: "block",
                zIndex: d._m
            }), d._c = d.st.transitionSpeed, l.animate({
                opacity: 1
            }, d._c, d.st.easeInOut), a(), r && r.data("rsTimeout", setTimeout(function() {
                r.stop(!0, !0).css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                })
            }, d._c + 60))), d._r2 = !0, d.loadingTimeout && clearTimeout(d.loadingTimeout), d.loadingTimeout = o ? setTimeout(function() {
                d.loadingTimeout = null, o.call()
            }, d._c + 60) : setTimeout(function() {
                d.loadingTimeout = null, d._k4(i)
            }, d._c + 60)
        },
        _u2: function(t) {
            if (this._r2 = !1, clearTimeout(this.loadingTimeout), this._l)
                if (this._e) {
                    if (!t) {
                        t = this._p;
                        var e = this._h3 = this._l4();
                        this._p1.css(this._g + this._u1, "0ms"), t !== e && this._p3(e)
                    }
                } else this._p1.stop(!0), this._p = parseInt(this._p1.css(this._x1), 10);
            else 20 < this._m ? this._m = 10 : this._m++
        },
        _l4: function() {
            var t = window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g),
                e = 0 === t[0].indexOf("matrix3d");
            return parseInt(t[this._h ? e ? 12 : 4 : e ? 13 : 5], 10)
        },
        _m4: function(t, e) {
            return this._e ? this._y1 + (e ? t + this._z1 + 0 : 0 + this._z1 + t) + this._a2 : t
        },
        _k4: function(t) {
            this._l || (this._r1.css("z-index", 0), this._m = 10), this._r2 = !1, this.staticSlideId = this.currSlideId, this._n2(), this._n4 = !1, this.ev.trigger("rsAfterSlideChange")
        },
        _i4: function(t, e) {
            var i = this,
                s = (-i._u - i._d1) * i._w;
            if (0 !== i.numSlides && !i._r2)
                if (i.st.loopRewind) i.goTo("left" === t ? i.numSlides - 1 : 0, e);
                else if (i._l) {
                i._c = 200;
                var n = function() {
                    i._r2 = !1
                };
                i._x3(s + ("left" === t ? 30 : -30), "", !1, !0, function() {
                    i._r2 = !1, i._x3(s, "", !1, !0, n)
                })
            }
        },
        _q2: function(t, e) {
            if (!t.isRendered) {
                var i, s, n = t.content,
                    o = "rsMainSlideImage",
                    a = this.st.imageAlignCenter,
                    r = this.st.imageScaleMode;
                if (t.videoURL && (o = "rsVideoContainer", "fill" !== r ? i = !0 : (s = n, s.hasClass(o) || (s = s.find("." + o)), s.css({
                        width: "100%",
                        height: "100%"
                    }), o = "rsMainSlideImage")), n.hasClass(o) || (n = n.find("." + o)), n) {
                    var l = t.iW,
                        d = t.iH;
                    if (t.isRendered = !0, "none" !== r || a) {
                        o = "fill" !== r ? this._d4 : 0, s = this._b4 - 2 * o;
                        var c, h, p = this._c4 - 2 * o,
                            u = {};
                        "fit-if-smaller" === r && (l > s || d > p) && (r = "fit"), ("fill" === r || "fit" === r) && (c = s / l, h = p / d, c = "fill" == r ? c > h ? c : h : "fit" == r ? h > c ? c : h : 1, l = Math.ceil(l * c, 10), d = Math.ceil(d * c, 10)), "none" !== r && (u.width = l, u.height = d, i && n.find(".rsImg").css({
                            width: "100%",
                            height: "100%"
                        })), a && (u.marginLeft = Math.floor((s - l) / 2) + o, u.marginTop = Math.floor((p - d) / 2) + o), n.css(u)
                    }
                }
            }
        }
    }, t.rsProto = e.prototype, t.fn.royalSlider = function(i) {
        var s = arguments;
        return this.each(function() {
            var n = t(this);
            if ("object" != typeof i && i) {
                if ((n = n.data("royalSlider")) && n[i]) return n[i].apply(n, Array.prototype.slice.call(s, 1))
            } else n.data("royalSlider") || n.data("royalSlider", new e(n, i))
        })
    }, t.fn.royalSlider.defaults = {
        slidesSpacing: 8,
        startSlideId: 0,
        loop: !1,
        loopRewind: !1,
        numImagesToPreload: 4,
        fadeinLoadedSlide: !0,
        slidesOrientation: "horizontal",
        transitionType: "move",
        transitionSpeed: 600,
        controlNavigation: "bullets",
        controlsInside: !0,
        arrowsNav: !0,
        arrowsNavAutoHide: !0,
        navigateByClick: !0,
        randomizeSlides: !1,
        sliderDrag: !0,
        sliderTouch: !0,
        keyboardNavEnabled: !1,
        fadeInAfterLoaded: !0,
        allowCSS3: !0,
        allowCSS3OnWebkit: !0,
        addActiveClass: !1,
        autoHeight: !1,
        easeOut: "easeOutSine",
        easeInOut: "easeInOutSine",
        minSlideOffset: 10,
        imageScaleMode: "fit-if-smaller",
        imageAlignCenter: !0,
        imageScalePadding: 4,
        usePreloader: !0,
        autoScaleSlider: !1,
        autoScaleSliderWidth: 800,
        autoScaleSliderHeight: 400,
        autoScaleHeight: !0,
        arrowsNavHideOnTouch: !1,
        globalCaption: !1,
        slidesDiff: 2
    }, t.rsCSS3Easing = {
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
    }, t.extend(jQuery.easing, {
        easeInOutSine: function(t, e, i, s, n) {
            return -s / 2 * (Math.cos(Math.PI * e / n) - 1) + i
        },
        easeOutSine: function(t, e, i, s, n) {
            return s * Math.sin(e / n * (Math.PI / 2)) + i
        },
        easeOutCubic: function(t, e, i, s, n) {
            return s * ((e = e / n - 1) * e * e + 1) + i
        }
    })
}(jQuery, window),
function(t) {
    t.extend(t.rsProto, {
        _i5: function() {
            var e = this;
            "bullets" === e.st.controlNavigation && (e.ev.one("rsAfterPropsSetup", function() {
                e._j5 = !0, e.slider.addClass("rsWithBullets");
                for (var i = '<div class="rsNav rsBullets">', s = 0; s < e.numSlides; s++) i += '<div class="rsNavItem rsBullet"><span></span></div>';
                e._k5 = i = t(i + "</div>"), e._l5 = i.appendTo(e.slider).children(), e._k5.on("click.rs", ".rsNavItem", function(i) {
                    e._m5 || e.goTo(t(this).index())
                })
            }), e.ev.on("rsOnAppendSlide", function(t, i, s) {
                s >= e.numSlides ? e._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') : e._l5.eq(s).before('<div class="rsNavItem rsBullet"><span></span></div>'), e._l5 = e._k5.children()
            }), e.ev.on("rsOnRemoveSlide", function(t, i) {
                var s = e._l5.eq(i);
                s && s.length && (s.remove(), e._l5 = e._k5.children())
            }), e.ev.on("rsOnUpdateNav", function() {
                var t = e.currSlideId;
                e._n5 && e._n5.removeClass("rsNavSelected"), t = e._l5.eq(t), t.addClass("rsNavSelected"), e._n5 = t
            }))
        }
    }), t.rsModules.bullets = t.rsProto._i5
}(jQuery),
function(t) {
    t.extend(t.rsProto, {
        _h6: function() {
            var e = this;
            "thumbnails" === e.st.controlNavigation && (e._i6 = {
                drag: !0,
                touch: !0,
                orientation: "horizontal",
                navigation: !0,
                arrows: !0,
                arrowLeft: null,
                arrowRight: null,
                spacing: 4,
                arrowsAutoHide: !1,
                appendSpan: !1,
                transitionSpeed: 600,
                autoCenter: !0,
                fitInViewport: !0,
                firstMargin: !0,
                paddingTop: 0,
                paddingBottom: 0
            }, e.st.thumbs = t.extend({}, e._i6, e.st.thumbs), e._j6 = !0, !1 === e.st.thumbs.firstMargin ? e.st.thumbs.firstMargin = 0 : !0 === e.st.thumbs.firstMargin && (e.st.thumbs.firstMargin = e.st.thumbs.spacing), e.ev.on("rsBeforeParseNode", function(e, i, s) {
                i = t(i), s.thumbnail = i.find(".rsTmb").remove(), s.thumbnail.length ? s.thumbnail = t(document.createElement("div")).append(s.thumbnail).html() : (s.thumbnail = i.attr("data-rsTmb"), s.thumbnail || (s.thumbnail = i.find(".rsImg").attr("data-rsTmb")), s.thumbnail = s.thumbnail ? '<img src="' + s.thumbnail + '"/>' : "")
            }), e.ev.one("rsAfterPropsSetup", function() {
                e._k6()
            }), e._n5 = null, e.ev.on("rsOnUpdateNav", function() {
                var i = t(e._l5[e.currSlideId]);
                i !== e._n5 && (e._n5 && (e._n5.removeClass("rsNavSelected"), e._n5 = null), e._l6 && e._m6(e.currSlideId), e._n5 = i.addClass("rsNavSelected"))
            }), e.ev.on("rsOnAppendSlide", function(t, i, s) {
                t = "<div" + e._n6 + ' class="rsNavItem rsThumb">' + e._o6 + i.thumbnail + "</div>", s >= e.numSlides ? e._s3.append(t) : e._l5.eq(s).before(t), e._l5 = e._s3.children(), e.updateThumbsSize()
            }), e.ev.on("rsOnRemoveSlide", function(t, i) {
                var s = e._l5.eq(i);
                s && (s.remove(), e._l5 = e._s3.children(), e.updateThumbsSize())
            }))
        },
        _k6: function() {
            var e, i, s = this,
                n = "rsThumbs",
                o = s.st.thumbs,
                a = "",
                r = o.spacing;
            s._j5 = !0, s._e3 = "vertical" === o.orientation ? !1 : !0, s._n6 = e = r ? ' style="margin-' + (s._e3 ? "right" : "bottom") + ":" + r + 'px;"' : "", s._i3 = 0, s._p6 = !1, s._m5 = !1, s._l6 = !1, s._q6 = o.arrows && o.navigation, i = s._e3 ? "Hor" : "Ver", s.slider.addClass("rsWithThumbs rsWithThumbs" + i), a += '<div class="rsNav rsThumbs rsThumbs' + i + '"><div class="' + n + 'Container">', s._o6 = o.appendSpan ? '<span class="thumbIco"></span>' : "";
            for (var l = 0; l < s.numSlides; l++) i = s.slides[l], a += "<div" + e + ' class="rsNavItem rsThumb">' + i.thumbnail + s._o6 + "</div>";
            a = t(a + "</div></div>"), e = {}, o.paddingTop && (e[s._e3 ? "paddingTop" : "paddingLeft"] = o.paddingTop), o.paddingBottom && (e[s._e3 ? "paddingBottom" : "paddingRight"] = o.paddingBottom), a.css(e), s._s3 = t(a).find("." + n + "Container"), s._q6 && (n += "Arrow", o.arrowLeft ? s._r6 = o.arrowLeft : (s._r6 = t('<div class="' + n + " " + n + 'Left"><div class="' + n + 'Icn"></div></div>'), a.append(s._r6)), o.arrowRight ? s._s6 = o.arrowRight : (s._s6 = t('<div class="' + n + " " + n + 'Right"><div class="' + n + 'Icn"></div></div>'), a.append(s._s6)), s._r6.click(function() {
                    var t = (Math.floor(s._i3 / s._t6) + s._u6) * s._t6 + s._v6;
                    s._a4(t > s._n3 ? s._n3 : t)
                }), s._s6.click(function() {
                    var t = (Math.floor(s._i3 / s._t6) - s._u6) * s._t6 + s._v6;
                    s._a4(t < s._o3 ? s._o3 : t)
                }), o.arrowsAutoHide && !s.hasTouch && (s._r6.css("opacity", 0), s._s6.css("opacity", 0), a.one("mousemove.rsarrowshover", function() {
                    s._l6 && (s._r6.css("opacity", 1), s._s6.css("opacity", 1))
                }), a.hover(function() {
                    s._l6 && (s._r6.css("opacity", 1), s._s6.css("opacity", 1))
                }, function() {
                    s._l6 && (s._r6.css("opacity", 0), s._s6.css("opacity", 0))
                }))), s._k5 = a, s._l5 = s._s3.children(), s.msEnabled && s.st.thumbs.navigation && s._s3.css("-ms-touch-action", s._e3 ? "pan-y" : "pan-x"), s.slider.append(a), s._w3 = !0, s._v6 = r, o.navigation && s._e && s._s3.css(s._g + "transition-property", s._g + "transform"),
                s._k5.on("click.rs", ".rsNavItem", function(e) {
                    s._m5 || s.goTo(t(this).index())
                }), s.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs", function() {
                    s._w6 = s._e3 ? s._c4 : s._b4, s.updateThumbsSize(!0)
                }), s.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs", function(t, e) {
                    s.updateThumbsSize(!0, e)
                })
        },
        updateThumbsSize: function(t, e) {
            var i = this,
                s = i._l5.first(),
                n = {},
                o = i._l5.length;
            i._t6 = (i._e3 ? s.outerWidth() : s.outerHeight()) + i._v6, i._y3 = o * i._t6 - i._v6, n[i._e3 ? "width" : "height"] = i._y3 + i._v6, i._z3 = i._e3 ? i._k5.width() : void 0 !== e ? e : i._k5.height(), i._w3 && (i.isFullscreen || i.st.thumbs.fitInViewport) && (i._e3 ? i._c4 = i._w6 - i._k5.outerHeight() : i._b4 = i._w6 - i._k5.outerWidth()), i._z3 && (i._o3 = -(i._y3 - i._z3) - i.st.thumbs.firstMargin, i._n3 = i.st.thumbs.firstMargin, i._u6 = Math.floor(i._z3 / i._t6), i._y3 < i._z3 ? (i.st.thumbs.autoCenter && i._q3((i._z3 - i._y3) / 2), i.st.thumbs.arrows && i._r6 && (i._r6.addClass("rsThumbsArrowDisabled"), i._s6.addClass("rsThumbsArrowDisabled")), i._l6 = !1, i._m5 = !1, i._k5.off(i._j1)) : i.st.thumbs.navigation && !i._l6 && (i._l6 = !0, !i.hasTouch && i.st.thumbs.drag || i.hasTouch && i.st.thumbs.touch) && (i._m5 = !0, i._k5.on(i._j1, function(t) {
                i._g2(t, !0)
            })), i._s3.css(n), t && e && i._m6(i.currSlideId), i._e && (n[i._g + "transition-duration"] = "0ms"))
        },
        setThumbsOrientation: function(t, e) {
            this._w3 && (this.st.thumbs.orientation = t, this._k5.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._k6(), this._k5.off(this._j1), e || this.updateSliderSize(!0))
        },
        _q3: function(t) {
            this._i3 = t, this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? t + this._z1 + 0 : 0 + this._z1 + t) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, t)
        },
        _a4: function(e, i, s, n, o) {
            var a = this;
            if (a._l6) {
                i || (i = a.st.thumbs.transitionSpeed), a._i3 = e, a._x6 && clearTimeout(a._x6), a._p6 && (a._e || a._s3.stop(), s = !0);
                var r = {};
                a._p6 = !0, a._e ? (r[a._g + "transition-duration"] = i + "ms", r[a._g + "transition-timing-function"] = s ? t.rsCSS3Easing[a.st.easeOut] : t.rsCSS3Easing[a.st.easeInOut], a._s3.css(r), a._q3(e)) : (r[a._e3 ? a._x1 : a._w1] = e + "px", a._s3.animate(r, i, s ? "easeOutCubic" : a.st.easeInOut)), n && (a._i3 = n), a._y6(), a._x6 = setTimeout(function() {
                    a._p6 = !1, o && (a._a4(n, o, !0), o = null)
                }, i)
            }
        },
        _y6: function() {
            this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") : this._r6.removeClass("rsThumbsArrowDisabled"), this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled"))
        },
        _m6: function(t, e) {
            var i, s = 0,
                n = t * this._t6 + 2 * this._t6 - this._v6 + this._n3,
                o = Math.floor(this._i3 / this._t6);
            this._l6 && (this._j6 && (e = !0, this._j6 = !1), n + this._i3 > this._z3 ? (t === this.numSlides - 1 && (s = 1), o = -t + this._u6 - 2 + s, i = o * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== t ? (t - 1) * this._t6 <= -this._i3 + this._n3 && t - 1 <= this.numSlides - this._u6 && (i = (-t + 1) * this._t6 + this._n3) : i = this._n3, i !== this._i3 && (s = void 0 === i ? this._i3 : i, s > this._n3 ? this._q3(this._n3) : s < this._o3 ? this._q3(this._o3) : void 0 !== i && (e ? this._q3(i) : this._a4(i))), this._y6())
        }
    }), t.rsModules.thumbnails = t.rsProto._h6
}(jQuery),
function(t) {
    t.extend(t.rsProto, {
        _f6: function() {
            var e = this;
            "tabs" === e.st.controlNavigation && (e.ev.on("rsBeforeParseNode", function(e, i, s) {
                i = t(i), s.thumbnail = i.find(".rsTmb").remove(), s.thumbnail.length ? s.thumbnail = t(document.createElement("div")).append(s.thumbnail).html() : (s.thumbnail = i.attr("data-rsTmb"), s.thumbnail || (s.thumbnail = i.find(".rsImg").attr("data-rsTmb")), s.thumbnail = s.thumbnail ? '<img src="' + s.thumbnail + '"/>' : "")
            }), e.ev.one("rsAfterPropsSetup", function() {
                e._g6()
            }), e.ev.on("rsOnAppendSlide", function(t, i, s) {
                s >= e.numSlides ? e._k5.append('<div class="rsNavItem rsTab">' + i.thumbnail + "</div>") : e._l5.eq(s).before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>"), e._l5 = e._k5.children()
            }), e.ev.on("rsOnRemoveSlide", function(t, i) {
                var s = e._l5.eq(i);
                s && (s.remove(), e._l5 = e._k5.children())
            }), e.ev.on("rsOnUpdateNav", function() {
                var t = e.currSlideId;
                e._n5 && e._n5.removeClass("rsNavSelected"), t = e._l5.eq(t), t.addClass("rsNavSelected"), e._n5 = t
            }))
        },
        _g6: function() {
            var e, i = this;
            i._j5 = !0, e = '<div class="rsNav rsTabs">';
            for (var s = 0; s < i.numSlides; s++) e += '<div class="rsNavItem rsTab">' + i.slides[s].thumbnail + "</div>";
            e = t(e + "</div>"), i._k5 = e, i._l5 = e.children(".rsNavItem"), i.slider.append(e), i._k5.click(function(e) {
                e = t(e.target).closest(".rsNavItem"), e.length && i.goTo(e.index())
            })
        }
    }), t.rsModules.tabs = t.rsProto._f6
}(jQuery),
function(t) {
    t.extend(t.rsProto, {
        _q5: function() {
            var e = this;
            e._r5 = {
                enabled: !1,
                keyboardNav: !0,
                buttonFS: !0,
                nativeFS: !1,
                doubleTap: !0
            }, e.st.fullscreen = t.extend({}, e._r5, e.st.fullscreen), e.st.fullscreen.enabled && e.ev.one("rsBeforeSizeSet", function() {
                e._s5()
            })
        },
        _s5: function() {
            var e = this;
            if (e._t5 = !e.st.keyboardNavEnabled && e.st.fullscreen.keyboardNav, e.st.fullscreen.nativeFS) {
                e._u5 = {
                    supportsFullScreen: !1,
                    isFullScreen: function() {
                        return !1
                    },
                    requestFullScreen: function() {},
                    cancelFullScreen: function() {},
                    fullScreenEventName: "",
                    prefix: ""
                };
                var i = ["webkit", "moz", "o", "ms", "khtml"];
                if (!e.isAndroid)
                    if ("undefined" != typeof document.cancelFullScreen) e._u5.supportsFullScreen = !0;
                    else
                        for (var s = 0; s < i.length; s++)
                            if (e._u5.prefix = i[s], "undefined" != typeof document[e._u5.prefix + "CancelFullScreen"]) {
                                e._u5.supportsFullScreen = !0;
                                break
                            }
                e._u5.supportsFullScreen ? (e.nativeFS = !0, e._u5.fullScreenEventName = e._u5.prefix + "fullscreenchange" + e.ns, e._u5.isFullScreen = function() {
                    switch (this.prefix) {
                        case "":
                            return document.fullScreen;
                        case "webkit":
                            return document.webkitIsFullScreen;
                        default:
                            return document[this.prefix + "FullScreen"]
                    }
                }, e._u5.requestFullScreen = function(t) {
                    return "" === this.prefix ? t.requestFullScreen() : t[this.prefix + "RequestFullScreen"]()
                }, e._u5.cancelFullScreen = function(t) {
                    return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
                }) : e._u5 = !1
            }
            e.st.fullscreen.buttonFS && (e._v5 = t('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(e._o1).on("click.rs", function() {
                e.isFullscreen ? e.exitFullscreen() : e.enterFullscreen()
            }))
        },
        enterFullscreen: function(e) {
            var i = this;
            if (i._u5) {
                if (!e) return i._b.on(i._u5.fullScreenEventName, function(t) {
                    i._u5.isFullScreen() ? i.enterFullscreen(!0) : i.exitFullscreen(!0)
                }), void i._u5.requestFullScreen(t("html")[0]);
                i._u5.requestFullScreen(t("html")[0])
            }
            if (!i._w5) {
                i._w5 = !0, i._b.on("keyup" + i.ns + "fullscreen", function(t) {
                    27 === t.keyCode && i.exitFullscreen()
                }), i._t5 && i._b2(), e = t(window), i._x5 = e.scrollTop(), i._y5 = e.scrollLeft(), i._z5 = t("html").attr("style"), i._a6 = t("body").attr("style"), i._b6 = i.slider.attr("style"), t("body, html").css({
                    overflow: "hidden",
                    height: "100%",
                    width: "100%",
                    margin: "0",
                    padding: "0"
                }), i.slider.addClass("rsFullscreen");
                var s;
                for (s = 0; s < i.numSlides; s++) e = i.slides[s], e.isRendered = !1, e.bigImage && (e.isBig = !0, e.isMedLoaded = e.isLoaded, e.isMedLoading = e.isLoading, e.medImage = e.image, e.medIW = e.iW, e.medIH = e.iH, e.slideId = -99, e.bigImage !== e.medImage && (e.sizeType = "big"), e.isLoaded = e.isBigLoaded, e.isLoading = !1, e.image = e.bigImage, e.images[0] = e.bigImage, e.iW = e.bigIW, e.iH = e.bigIH, e.isAppended = e.contentAdded = !1, i._c6(e));
                i.isFullscreen = !0, i._w5 = !1, i.updateSliderSize(), i.ev.trigger("rsEnterFullscreen")
            }
        },
        exitFullscreen: function(e) {
            var i = this;
            if (i._u5) {
                if (!e) return void i._u5.cancelFullScreen(t("html")[0]);
                i._b.off(i._u5.fullScreenEventName)
            }
            if (!i._w5) {
                i._w5 = !0, i._b.off("keyup" + i.ns + "fullscreen"), i._t5 && i._b.off("keydown" + i.ns), t("html").attr("style", i._z5 || ""), t("body").attr("style", i._a6 || "");
                var s;
                for (s = 0; s < i.numSlides; s++) e = i.slides[s], e.isRendered = !1, e.bigImage && (e.isBig = !1, e.slideId = -99, e.isBigLoaded = e.isLoaded, e.isBigLoading = e.isLoading, e.bigImage = e.image, e.bigIW = e.iW, e.bigIH = e.iH, e.isLoaded = e.isMedLoaded, e.isLoading = !1, e.image = e.medImage, e.images[0] = e.medImage, e.iW = e.medIW, e.iH = e.medIH, e.isAppended = e.contentAdded = !1, i._c6(e, !0), e.bigImage !== e.medImage && (e.sizeType = "med"));
                i.isFullscreen = !1, e = t(window), e.scrollTop(i._x5), e.scrollLeft(i._y5), i._w5 = !1, i.slider.removeClass("rsFullscreen"), i.updateSliderSize(), setTimeout(function() {
                    i.updateSliderSize()
                }, 1), i.ev.trigger("rsExitFullscreen")
            }
        },
        _c6: function(e, i) {
            var s = e.isLoaded || e.isLoading ? '<img class="rsImg rsMainSlideImage" src="' + e.image + '"/>' : '<a class="rsImg rsMainSlideImage" href="' + e.image + '"></a>';
            e.content.hasClass("rsImg") ? e.content = t(s) : e.content.find(".rsImg").eq(0).replaceWith(s), e.isLoaded || e.isLoading || !e.holder || e.holder.html(e.content)
        }
    }), t.rsModules.fullscreen = t.rsProto._q5
}(jQuery),
function(t) {
    t.extend(t.rsProto, {
        _x4: function() {
            var e, i = this;
            i._y4 = {
                enabled: !1,
                stopAtAction: !0,
                pauseOnHover: !0,
                delay: 2e3
            }, !i.st.autoPlay && i.st.autoplay && (i.st.autoPlay = i.st.autoplay), i.st.autoPlay = t.extend({}, i._y4, i.st.autoPlay), i.st.autoPlay.enabled && (i.ev.on("rsBeforeParseNode", function(i, s, n) {
                s = t(s), (e = s.attr("data-rsDelay")) && (n.customDelay = parseInt(e, 10))
            }), i.ev.one("rsAfterInit", function() {
                i._z4()
            }), i.ev.on("rsBeforeDestroy", function() {
                i.stopAutoPlay(), i.slider.off("mouseenter mouseleave"), t(window).off("blur" + i.ns + " focus" + i.ns)
            }))
        },
        _z4: function() {
            var e = this;
            e.startAutoPlay(), e.ev.on("rsAfterContentSet", function(t, i) {
                e._l2 || e._r2 || !e._a5 || i !== e.currSlide || e._b5()
            }), e.ev.on("rsDragRelease", function() {
                e._a5 && e._c5 && (e._c5 = !1, e._b5())
            }), e.ev.on("rsAfterSlideChange", function() {
                e._a5 && e._c5 && (e._c5 = !1, e.currSlide.isLoaded && e._b5())
            }), e.ev.on("rsDragStart", function() {
                e._a5 && (e.st.autoPlay.stopAtAction ? e.stopAutoPlay() : (e._c5 = !0, e._d5()))
            }), e.ev.on("rsBeforeMove", function(t, i, s) {
                e._a5 && (s && e.st.autoPlay.stopAtAction ? e.stopAutoPlay() : (e._c5 = !0, e._d5()))
            }), e._e5 = !1, e.ev.on("rsVideoStop", function() {
                e._a5 && (e._e5 = !1, e._b5())
            }), e.ev.on("rsVideoPlay", function() {
                e._a5 && (e._c5 = !1, e._d5(), e._e5 = !0)
            }), t(window).on("blur" + e.ns, function() {
                e._a5 && (e._c5 = !0, e._d5())
            }).on("focus" + e.ns, function() {
                e._a5 && e._c5 && (e._c5 = !1, e._b5())
            }), e.st.autoPlay.pauseOnHover && (e._f5 = !1, e.slider.hover(function() {
                e._a5 && (e._c5 = !1, e._d5(), e._f5 = !0)
            }, function() {
                e._a5 && (e._f5 = !1, e._b5())
            }))
        },
        toggleAutoPlay: function() {
            this._a5 ? this.stopAutoPlay() : this.startAutoPlay()
        },
        startAutoPlay: function() {
            this._a5 = !0, this.currSlide.isLoaded && this._b5()
        },
        stopAutoPlay: function() {
            this._e5 = this._f5 = this._c5 = this._a5 = !1, this._d5()
        },
        _b5: function() {
            var t = this;
            t._f5 || t._e5 || (t._g5 = !0, t._h5 && clearTimeout(t._h5), t._h5 = setTimeout(function() {
                var e;
                t._z || t.st.loopRewind || (e = !0, t.st.loopRewind = !0), t.next(!0), e && (t.st.loopRewind = !1)
            }, t.currSlide.customDelay ? t.currSlide.customDelay : t.st.autoPlay.delay))
        },
        _d5: function() {
            this._f5 || this._e5 || (this._g5 = !1, this._h5 && (clearTimeout(this._h5), this._h5 = null))
        }
    }), t.rsModules.autoplay = t.rsProto._x4
}(jQuery),
function(t) {
    t.extend(t.rsProto, {
        _z6: function() {
            var e = this;
            e._a7 = {
                autoHideArrows: !0,
                autoHideControlNav: !1,
                autoHideBlocks: !1,
                autoHideCaption: !1,
                disableCSS3inFF: !0,
                youTubeCode: '<iframe src="http://www.youtube.com/embed/%id%?showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',
                vimeoCode: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            }, e.st.video = t.extend({}, e._a7, e.st.video), e.ev.on("rsBeforeSizeSet", function() {
                e._b7 && setTimeout(function() {
                    var t = e._r1,
                        t = t.hasClass("rsVideoContainer") ? t : t.find(".rsVideoContainer");
                    e._c7 && e._c7.css({
                        width: t.width(),
                        height: t.height()
                    })
                }, 32)
            });
            var i = e._a.mozilla;
            e.ev.on("rsAfterParseNode", function(s, n, o) {
                if (s = t(n), o.videoURL) {
                    e.st.video.disableCSS3inFF && i && (e._e = e._f = !1), n = t('<div class="rsVideoContainer"></div>');
                    var a = t('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
                    s.hasClass("rsImg") ? o.content = n.append(s).append(a) : o.content.find(".rsImg").wrap(n).after(a)
                }
            }), e.ev.on("rsAfterSlideChange", function() {
                e.stopVideo()
            })
        },
        toggleVideo: function() {
            return this._b7 ? this.stopVideo() : this.playVideo()
        },
        playVideo: function() {
            var e = this;
            if (!e._b7) {
                var i = e.currSlide;
                if (!i.videoURL) return !1;
                e._d7 = i;
                var s, n, o = e._e7 = i.content,
                    i = i.videoURL;
                return i.match(/youtu\.be/i) || i.match(/youtube\.com/i) ? (n = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (n = i.match(n)) && 11 == n[7].length && (s = n[7]), void 0 !== s && (e._c7 = e.st.video.youTubeCode.replace("%id%", s))) : i.match(/vimeo\.com/i) && (n = /(www\.)?vimeo.com\/(\d+)($|\/)/, (n = i.match(n)) && (s = n[2]), void 0 !== s && (e._c7 = e.st.video.vimeoCode.replace("%id%", s))), e.videoObj = t(e._c7), e.ev.trigger("rsOnCreateVideoElement", [i]), e.videoObj.length && (e._c7 = t('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), e._c7.find(".rsPreloader").after(e.videoObj), o = o.hasClass("rsVideoContainer") ? o : o.find(".rsVideoContainer"), e._c7.css({
                    width: o.width(),
                    height: o.height()
                }).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function(t) {
                    return e.stopVideo(), t.preventDefault(), t.stopPropagation(), !1
                }), o.append(e._c7), e.isIPAD && o.addClass("rsIOSVideo"), e._f7(!1), setTimeout(function() {
                    e._c7.addClass("rsVideoActive")
                }, 10), e.ev.trigger("rsVideoPlay"), e._b7 = !0), !0
            }
            return !1
        },
        stopVideo: function() {
            var t = this;
            return t._b7 ? (t.isIPAD && t.slider.find(".rsCloseVideoBtn").remove(), t._f7(!0), setTimeout(function() {
                t.ev.trigger("rsOnDestroyVideoElement", [t.videoObj]);
                var e = t._c7.find("iframe");
                if (e.length) try {
                    e.attr("src", "")
                } catch (i) {}
                t._c7.remove(), t._c7 = null
            }, 16), t.ev.trigger("rsVideoStop"), t._b7 = !1, !0) : !1
        },
        _f7: function(t, e) {
            var i = [],
                s = this.st.video;
            if (s.autoHideArrows && (this._c2 && (i.push(this._c2, this._d2), this._e2 = !t), this._v5 && i.push(this._v5)), s.autoHideControlNav && this._k5 && i.push(this._k5), s.autoHideBlocks && this._d7.animBlocks && i.push(this._d7.animBlocks), s.autoHideCaption && this.globalCaption && i.push(this.globalCaption), this.slider[t ? "removeClass" : "addClass"]("rsVideoPlaying"), i.length)
                for (s = 0; s < i.length; s++) t ? i[s].removeClass("rsHidden") : i[s].addClass("rsHidden")
        }
    }), t.rsModules.video = t.rsProto._z6
}(jQuery),
function(t) {
    t.extend(t.rsProto, {
        _p4: function() {
            function e() {
                var t = s.currSlide;
                if (s.currSlide && s.currSlide.isLoaded && s._t4 !== t) {
                    if (0 < s._s4.length) {
                        for (i = 0; i < s._s4.length; i++) clearTimeout(s._s4[i]);
                        s._s4 = []
                    }
                    if (0 < s._r4.length) {
                        var e;
                        for (i = 0; i < s._r4.length; i++)(e = s._r4[i]) && (s._e ? (e.block.css(s._g + s._u1, "0s"), e.block.css(e.css)) : e.block.stop(!0).css(e.css), s._t4 = null, t.animBlocksDisplayed = !1);
                        s._r4 = []
                    }
                    t.animBlocks && (t.animBlocksDisplayed = !0, s._t4 = t, s._u4(t.animBlocks))
                }
            }
            var i, s = this;
            s._q4 = {
                fadeEffect: !0,
                moveEffect: "top",
                moveOffset: 20,
                speed: 400,
                easing: "easeOutSine",
                delay: 200
            }, s.st.block = t.extend({}, s._q4, s.st.block), s._r4 = [], s._s4 = [], s.ev.on("rsAfterInit", function() {
                e()
            }), s.ev.on("rsBeforeParseNode", function(e, i, s) {
                i = t(i), s.animBlocks = i.find(".rsABlock").css("display", "none"), s.animBlocks.length || (i.hasClass("rsABlock") ? s.animBlocks = i.css("display", "none") : s.animBlocks = !1)
            }), s.ev.on("rsAfterContentSet", function(t, i) {
                i.id === s.slides[s.currSlideId].id && setTimeout(function() {
                    e()
                }, s.st.fadeinLoadedSlide ? 300 : 0)
            }), s.ev.on("rsAfterSlideChange", function() {
                e()
            })
        },
        _v4: function(t, e) {
            setTimeout(function() {
                t.css(e)
            }, 6)
        },
        _u4: function(e) {
            var i, s, n, o, a, r, l, d = this;
            d._s4 = [], e.each(function(e) {
                i = t(this), s = {}, n = {}, o = null;
                var c = i.attr("data-move-offset"),
                    c = c ? parseInt(c, 10) : d.st.block.moveOffset;
                if (c > 0 && ((r = i.data("move-effect")) ? (r = r.toLowerCase(), "none" === r ? r = !1 : "left" !== r && "top" !== r && "bottom" !== r && "right" !== r && (r = d.st.block.moveEffect, "none" === r && (r = !1))) : r = d.st.block.moveEffect, r && "none" !== r)) {
                    var h;
                    h = "right" === r || "left" === r ? !0 : !1;
                    var p;
                    l = !1, d._e ? (p = 0, a = d._x1) : (h ? isNaN(parseInt(i.css("right"), 10)) ? a = "left" : (a = "right", l = !0) : isNaN(parseInt(i.css("bottom"), 10)) ? a = "top" : (a = "bottom", l = !0), a = "margin-" + a, l && (c = -c), d._e ? p = parseInt(i.css(a), 10) : (p = i.data("rs-start-move-prop"), void 0 === p && (p = parseInt(i.css(a), 10), isNaN(p) && (p = 0), i.data("rs-start-move-prop", p)))), n[a] = d._m4("top" === r || "left" === r ? p - c : p + c, h), s[a] = d._m4(p, h)
                }
                c = i.attr("data-fade-effect"), c ? ("none" === c.toLowerCase() || "false" === c.toLowerCase()) && (c = !1) : c = d.st.block.fadeEffect, c && (n.opacity = 0, s.opacity = 1), (c || r) && (o = {}, o.hasFade = Boolean(c), Boolean(r) && (o.moveProp = a, o.hasMove = !0), o.speed = i.data("speed"), isNaN(o.speed) && (o.speed = d.st.block.speed), o.easing = i.data("easing"), o.easing || (o.easing = d.st.block.easing), o.css3Easing = t.rsCSS3Easing[o.easing], o.delay = i.data("delay"), isNaN(o.delay) && (o.delay = d.st.block.delay * e)), c = {}, d._e && (c[d._g + d._u1] = "0ms"), c.moveProp = s.moveProp, c.opacity = s.opacity, c.display = "none", d._r4.push({
                    block: i,
                    css: c
                }), d._v4(i, n), d._s4.push(setTimeout(function(t, e, i, s) {
                    return function() {
                        if (t.css("display", "block"), i) {
                            var n = {};
                            if (d._e) {
                                var o = "";
                                i.hasMove && (o += i.moveProp), i.hasFade && (i.hasMove && (o += ", "), o += "opacity"), n[d._g + d._t1] = o, n[d._g + d._u1] = i.speed + "ms", n[d._g + d._v1] = i.css3Easing, t.css(n), setTimeout(function() {
                                    t.css(e)
                                }, 24)
                            } else setTimeout(function() {
                                t.animate(e, i.speed, i.easing)
                            }, 16)
                        }
                        delete d._s4[s]
                    }
                }(i, s, o, e), 6 >= o.delay ? 12 : o.delay))
            })
        }
    }), t.rsModules.animatedBlocks = t.rsProto._p4
}(jQuery),
function(t) {
    t.extend(t.rsProto, {
        _w4: function() {
            var t = this;
            if (t.st.autoHeight) {
                var e, i, s, n = !0,
                    o = function(o) {
                        s = t.slides[t.currSlideId], (e = s.holder) && (i = e.height()) && void 0 !== i && i > (t.st.minAutoHeight || 30) && (t._c4 = i, t._e || !o ? t._e1.css("height", i) : t._e1.stop(!0, !0).animate({
                            height: i
                        }, t.st.transitionSpeed), t.ev.trigger("rsAutoHeightChange", i), n && (t._e && setTimeout(function() {
                            t._e1.css(t._g + "transition", "height " + t.st.transitionSpeed + "ms ease-in-out")
                        }, 16), n = !1))
                    };
                t.ev.on("rsMaybeSizeReady.rsAutoHeight", function(t, e) {
                    s === e && o()
                }), t.ev.on("rsAfterContentSet.rsAutoHeight", function(t, e) {
                    s === e && o()
                }), t.slider.addClass("rsAutoHeight"), t.ev.one("rsAfterInit", function() {
                    setTimeout(function() {
                        o(!1), setTimeout(function() {
                            t.slider.append('<div style="clear:both; float: none;"></div>')
                        }, 16)
                    }, 16)
                }), t.ev.on("rsBeforeAnimStart", function() {
                    o(!0)
                }), t.ev.on("rsBeforeSizeSet", function() {
                    setTimeout(function() {
                        o(!1)
                    }, 16)
                })
            }
        }
    }), t.rsModules.autoHeight = t.rsProto._w4
}(jQuery),
function(t) {
    t.extend(t.rsProto, {
        _d6: function() {
            var e = this;
            e.st.globalCaption && (e.ev.on("rsAfterInit", function() {
                e.globalCaption = t('<div class="rsGCaption"></div>').appendTo(e.st.globalCaptionInside ? e._e1 : e.slider), e.globalCaption.html(e.currSlide.caption)
            }), e.ev.on("rsBeforeAnimStart", function() {
                e.globalCaption.html(e.currSlide.caption)
            }))
        }
    }), t.rsModules.globalCaption = t.rsProto._d6
}(jQuery),
function(t) {
    t.rsProto._o4 = function() {
        var t, e = this;
        e.st.addActiveClass && e.ev.on("rsOnUpdateNav", function() {
            t && clearTimeout(t), t = setTimeout(function() {
                e._g4 && e._g4.removeClass("rsActiveSlide"), e._r1 && e._r1.addClass("rsActiveSlide"), t = null
            }, 50)
        })
    }, t.rsModules.activeClass = t.rsProto._o4
}(jQuery),
function(t) {
    t.extend(t.rsProto, {
        _o5: function() {
            var e, i, s, n = this;
            if (n._p5 = {
                    enabled: !1,
                    change: !1,
                    prefix: ""
                }, n.st.deeplinking = t.extend({}, n._p5, n.st.deeplinking), n.st.deeplinking.enabled) {
                var o = n.st.deeplinking.change,
                    a = n.st.deeplinking.prefix,
                    r = "#" + a,
                    l = function() {
                        var t = window.location.hash;
                        return t && 0 < t.indexOf(a) && (t = parseInt(t.substring(r.length), 10), t >= 0) ? t - 1 : -1
                    },
                    d = l(); - 1 !== d && (n.st.startSlideId = d), o && (t(window).on("hashchange" + n.ns, function(t) {
                    e || (t = l(), 0 > t || (t > n.numSlides - 1 && (t = n.numSlides - 1), n.goTo(t)))
                }), n.ev.on("rsBeforeAnimStart", function() {
                    i && clearTimeout(i), s && clearTimeout(s)
                }), n.ev.on("rsAfterSlideChange", function() {
                    i && clearTimeout(i), s && clearTimeout(s), s = setTimeout(function() {
                        e = !0, window.location.replace(("" + window.location).split("#")[0] + r + (n.currSlideId + 1)), i = setTimeout(function() {
                            e = !1, i = null
                        }, 60)
                    }, 400)
                })), n.ev.on("rsBeforeDestroy", function() {
                    i = s = null, o && t(window).off("hashchange" + n.ns)
                })
            }
        }
    }), t.rsModules.deeplinking = t.rsProto._o5
}(jQuery),
function(t, e, i) {
    function s(t) {
        return t = t || location.href, "#" + t.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var n, o = "hashchange",
        a = document,
        r = t.event.special,
        l = a.documentMode,
        d = "on" + o in e && (l === i || l > 7);
    t.fn[o] = function(t) {
        return t ? this.bind(o, t) : this.trigger(o)
    }, t.fn[o].delay = 50, r[o] = t.extend(r[o], {
        setup: function() {
            return d ? !1 : void t(n.start)
        },
        teardown: function() {
            return d ? !1 : void t(n.stop)
        }
    }), n = function() {
        function n() {
            var i = s(),
                a = u(c);
            i !== c ? (p(c = i, a), t(e).trigger(o)) : a !== c && (location.href = location.href.replace(/#.*/, "") + a), r = setTimeout(n, t.fn[o].delay)
        }
        var r, l = {},
            c = s(),
            h = function(t) {
                return t
            },
            p = h,
            u = h;
        return l.start = function() {
            r || n()
        }, l.stop = function() {
            r && clearTimeout(r), r = i
        }, e.attachEvent && !e.addEventListener && !d && function() {
            var e, i;
            l.start = function() {
                e || (i = (i = t.fn[o].src) && i + s(), e = t('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                    i || p(s()), n()
                }).attr("src", i || "javascript:0").insertAfter("body")[0].contentWindow, a.onpropertychange = function() {
                    try {
                        "title" === event.propertyName && (e.document.title = a.title)
                    } catch (t) {}
                })
            }, l.stop = h, u = function() {
                return s(e.location.href)
            }, p = function(i, s) {
                var n = e.document,
                    r = t.fn[o].domain;
                i !== s && (n.title = a.title, n.open(), r && n.write('<script>document.domain="' + r + '"</script>'), n.close(), e.location.hash = i)
            }
        }(), l
    }()
}(jQuery, this),
function(t) {
    t.rsProto._g7 = function() {
        var e = this;
        e.st.visibleNearby && e.st.visibleNearby.enabled && (e._h7 = {
            enabled: !0,
            centerArea: .6,
            center: !0,
            breakpoint: 0,
            breakpointCenterArea: .8,
            hiddenOverflow: !0,
            navigateByCenterClick: !1
        }, e.st.visibleNearby = t.extend({}, e._h7, e.st.visibleNearby), e.ev.one("rsAfterPropsSetup", function() {
            e._i7 = e._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent(), e.st.visibleNearby.hiddenOverflow || e._i7.css("overflow", "visible"), e._o1 = e.st.controlsInside ? e._i7 : e.slider
        }), e.ev.on("rsAfterSizePropSet", function() {
            var t, i = e.st.visibleNearby;
            t = i.breakpoint && e.width < i.breakpoint ? i.breakpointCenterArea : i.centerArea, e._h ? (e._b4 *= t, e._i7.css({
                height: e._c4,
                width: e._b4 / t
            }), e._d = e._b4 * (1 - t) / 2 / t) : (e._c4 *= t, e._i7.css({
                height: e._c4 / t,
                width: e._b4
            }), e._d = e._c4 * (1 - t) / 2 / t), i.navigateByCenterClick || (e._q = e._h ? e._b4 : e._c4), i.center && e._e1.css("margin-" + (e._h ? "left" : "top"), e._d)
        }))
    }, t.rsModules.visibleNearby = t.rsProto._g7
}(jQuery),
function(t) {
    t.fn.shorten = function(e) {
        "use strict";
        var i = {
            showChars: 100,
            ellipsesText: "...",
            moreText: "more",
            lessText: "less",
            errMsg: null,
            force: !1
        };
        return e && t.extend(i, e), t(this).data("jquery.shorten") && !i.force ? !1 : (t(this).data("jquery.shorten", !0), t(document).off("click", ".morelink"), t(document).on({
            click: function() {
                var e = t(this);
                return e.hasClass("less") ? (e.removeClass("less"), e.html(i.moreText), e.parent().prev().prev().show(), e.parent().prev().hide()) : (e.addClass("less"), e.html(i.lessText), e.parent().prev().prev().hide(), e.parent().prev().show()), !1
            }
        }, ".morelink"), this.each(function() {
            var e = t(this),
                s = e.html(),
                n = e.text().length;
            if (n > i.showChars) {
                var o = s.substr(0, i.showChars);
                if (o.indexOf("<") >= 0) {
                    for (var a = !1, r = "", l = 0, d = [], c = null, h = 0, p = 0; p <= i.showChars; h++)
                        if ("<" != s[h] || a || (a = !0, c = s.substring(h + 1, s.indexOf(">", h)), "/" == c[0] ? c != "/" + d[0] ? i.errMsg = "ERROR en HTML: the top of the stack should be the tag that closes" : d.shift() : "br" != c.toLowerCase() && d.unshift(c)), a && ">" == s[h] && (a = !1), a) r += s.charAt(h);
                        else if (p++, l <= i.showChars) r += s.charAt(h), l++;
                    else if (d.length > 0) {
                        for (j = 0; j < d.length; j++) r += "</" + d[j] + ">";
                        break
                    }
                    o = t("<div/>").html(r + '<span class="ellip">' + i.ellipsesText + "</span>").html()
                } else o += i.ellipsesText;
                var u = '<div class="shortcontent">' + o + '</div><div class="allcontent">' + s + '</div><span><a href="javascript://nop/" class="morelink">' + i.moreText + "</a></span>";
                e.html(u), e.find(".allcontent").hide(), t(".shortcontent p:last", e).css("margin-bottom", 0)
            }
        }))
    }
}(jQuery),
function(t) {
    var e = {
            inEffect: {
                opacity: "show"
            },
            inEffectDuration: 600,
            stayTime: 3e3,
            text: "",
            sticky: !1,
            type: "notice",
            position: "top-right",
            closeText: "",
            close: null
        },
        i = {
            init: function(i) {
                i && t.extend(e, i)
            },
            showToast: function(i) {
                var s = {};
                t.extend(s, e, i);
                var n, o, a, r, l;
                return n = t(".toast-container").length ? t(".toast-container") : t("<div></div>").addClass("toast-container").addClass("toast-position-" + s.position).appendTo("body"), o = t("<div></div>").addClass("toast-item-wrapper"), a = t("<div></div>").hide().addClass("toast-item toast-type-" + s.type).appendTo(n).html(t("<p>").append(s.text)).animate(s.inEffect, s.inEffectDuration).wrap(o), r = t("<div></div>").addClass("toast-item-close").prependTo(a).html(s.closeText).click(function() {
                    t().toastmessage("removeToast", a, s)
                }), l = t("<div></div>").addClass("toast-item-image").addClass("toast-item-image-" + s.type).prependTo(a), navigator.userAgent.match(/MSIE 6/i) && n.css({
                    top: document.documentElement.scrollTop
                }), s.sticky || setTimeout(function() {
                    t().toastmessage("removeToast", a, s)
                }, s.stayTime), a
            },
            showNoticeToast: function(e) {
                var i = {
                    text: e,
                    type: "notice"
                };
                return t().toastmessage("showToast", i)
            },
            showSuccessToast: function(e) {
                var i = {
                    text: e,
                    type: "success"
                };
                return t().toastmessage("showToast", i)
            },
            showErrorToast: function(e) {
                var i = {
                    text: e,
                    type: "error"
                };
                return t().toastmessage("showToast", i)
            },
            showWarningToast: function(e) {
                var i = {
                    text: e,
                    type: "warning"
                };
                return t().toastmessage("showToast", i)
            },
            removeToast: function(t, e) {
                t.animate({
                    opacity: "0"
                }, 600, function() {
                    t.parent().animate({
                        height: "0px"
                    }, 300, function() {
                        t.parent().remove()
                    })
                }), e && null !== e.close && e.close()
            }
        };
    t.fn.toastmessage = function(e) {
        return i[e] ? i[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.toastmessage") : i.init.apply(this, arguments)
    }
}(jQuery), jQuery(document).ready(function() {
    var t = !1;
    jQuery("#back-top").hide(), jQuery(function() {
        jQuery(window).scroll(function() {
            t ? jQuery(this).scrollTop() > 100 ? jQuery("#back-top").show() : jQuery("#back-top").hide() : jQuery(this).scrollTop() > 100 ? jQuery("#back-top").fadeIn() : jQuery("#back-top").fadeOut()
        }), jQuery("#back-top a").click(function() {
            return jQuery("body,html").animate({
                scrollTop: 0
            }, 800), !1
        })
    })
}), jQuery(document).ready(function() {
    jQuery('[data-toggle="tooltip"]').tooltip()
});
var InfoBox, map, MapTriggered, AllMarkers = [];
jQuery("body").bind("gmap_loaded", function() {
        var t = wlt_map_options[0];
        if (jQuery("#wlt_google_map_wrapper").show(), "undefined" != typeof t.color && jQuery("#wlt_google_map_wrapper").addClass(t.color), "yes" != MapTriggered) {
            var e = document.createElement("script");
            e.src = t.path + "/framework/js/core.map.js", document.getElementsByTagName("head")[0].appendChild(e), setTimeout(function() {
                var e = {
                    center: new google.maps.LatLng(t["long"], t.lat),
                    zoom: t.zoom,
                    panControl: !1,
                    zoomControl: !0,
                    scaleControl: !1,
                    mapTypeIds: [google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.TERRAIN],
                    disableDefaultUI: !0
                };
                map = new google.maps.Map(document.getElementById(t.id), e);
                var i = (new google.maps.MarkerImage(t.icon), []);
                if ("undefined" != typeof wlt_map_options[0].single && jQuery(".wlt_map1_controls").hide(), "undefined" != typeof t.color) {
                    if ("blue" == t.color) {
                        var s = [{
                            featureType: "administrative",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#444444"
                            }]
                        }, {
                            featureType: "landscape",
                            elementType: "all",
                            stylers: [{
                                color: "#f2f2f2"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "all",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "all",
                            stylers: [{
                                saturation: -100
                            }, {
                                lightness: 45
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "all",
                            stylers: [{
                                visibility: "simplified"
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "labels.icon",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "transit",
                            elementType: "all",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "water",
                            elementType: "all",
                            stylers: [{
                                color: "#46bcec"
                            }, {
                                visibility: "on"
                            }]
                        }];
                        map.setOptions({
                            styles: s
                        })
                    }
                    if ("grey" == t.color) {
                        var s = [{
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [{
                                color: "#e9e9e9"
                            }, {
                                lightness: 17
                            }]
                        }, {
                            featureType: "landscape",
                            elementType: "geometry",
                            stylers: [{
                                color: "#f5f5f5"
                            }, {
                                lightness: 20
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#ffffff"
                            }, {
                                lightness: 17
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.stroke",
                            stylers: [{
                                color: "#ffffff"
                            }, {
                                lightness: 29
                            }, {
                                weight: .2
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "geometry",
                            stylers: [{
                                color: "#ffffff"
                            }, {
                                lightness: 18
                            }]
                        }, {
                            featureType: "road.local",
                            elementType: "geometry",
                            stylers: [{
                                color: "#ffffff"
                            }, {
                                lightness: 16
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "geometry",
                            stylers: [{
                                color: "#f5f5f5"
                            }, {
                                lightness: 21
                            }]
                        }, {
                            featureType: "poi.park",
                            elementType: "geometry",
                            stylers: [{
                                color: "#dedede"
                            }, {
                                lightness: 21
                            }]
                        }, {
                            elementType: "labels.text.stroke",
                            stylers: [{
                                visibility: "on"
                            }, {
                                color: "#ffffff"
                            }, {
                                lightness: 16
                            }]
                        }, {
                            elementType: "labels.text.fill",
                            stylers: [{
                                saturation: 36
                            }, {
                                color: "#333333"
                            }, {
                                lightness: 40
                            }]
                        }, {
                            elementType: "labels.icon",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "transit",
                            elementType: "geometry",
                            stylers: [{
                                color: "#f2f2f2"
                            }, {
                                lightness: 19
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#fefefe"
                            }, {
                                lightness: 20
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry.stroke",
                            stylers: [{
                                color: "#fefefe"
                            }, {
                                lightness: 17
                            }, {
                                weight: 1.2
                            }]
                        }];
                        map.setOptions({
                            styles: s
                        })
                    }
                    if ("green" == t.color) {
                        var s = [{
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [{
                                visibility: "on"
                            }, {
                                color: "#aee2e0"
                            }]
                        }, {
                            featureType: "landscape",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#abce83"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#769E72"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#7B8758"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "labels.text.stroke",
                            stylers: [{
                                color: "#EBF4A4"
                            }]
                        }, {
                            featureType: "poi.park",
                            elementType: "geometry",
                            stylers: [{
                                visibility: "simplified"
                            }, {
                                color: "#8dab68"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "geometry.fill",
                            stylers: [{
                                visibility: "simplified"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#5B5B3F"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "labels.text.stroke",
                            stylers: [{
                                color: "#ABCE83"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "labels.icon",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "road.local",
                            elementType: "geometry",
                            stylers: [{
                                color: "#A4C67D"
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "geometry",
                            stylers: [{
                                color: "#9BBF72"
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry",
                            stylers: [{
                                color: "#EBF4A4"
                            }]
                        }, {
                            featureType: "transit",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry.stroke",
                            stylers: [{
                                visibility: "on"
                            }, {
                                color: "#87ae79"
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#7f2200"
                            }, {
                                visibility: "off"
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "labels.text.stroke",
                            stylers: [{
                                color: "#ffffff"
                            }, {
                                visibility: "on"
                            }, {
                                weight: 4.1
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#495421"
                            }]
                        }, {
                            featureType: "administrative.neighborhood",
                            elementType: "labels",
                            stylers: [{
                                visibility: "off"
                            }]
                        }];
                        map.setOptions({
                            styles: s
                        })
                    }
                }
                var n = new google.maps.places.SearchBox(document.getElementById("form_map_location"));
                "" == t.data ? GetMapData() : MapPlotData(t.data), google.maps.event.addListenerOnce(map, "idle", function() {
                    "undefined" == typeof wlt_map_options[0].single && (MapCreateCats(), jQuery("#wlt_map_toolbox").draggable({
                        containment: "#wlt_google_map",
                        scroll: !1
                    }), "undefined" != typeof wlt_map_options[0].radius && MapRadius()), 1 == t.data.length && map.setZoom(10)
                }), google.maps.event.addListener(n, "places_changed", function() {
                    var t = n.getPlaces();
                    if (0 != t.length) {
                        for (var e, s = 0; e = i[s]; s++) e.setMap(null);
                        for (var o, a = new google.maps.LatLngBounds, s = 0; o = t[s]; s++) {
                            ({
                                url: o.icon,
                                size: new google.maps.Size(71, 71),
                                origin: new google.maps.Point(0, 0),
                                anchor: new google.maps.Point(17, 34),
                                scaledSize: new google.maps.Size(25, 25)
                            });
                            e = new google.maps.Marker({
                                position: o.geometry.location,
                                map: map,
                                animation: google.maps.Animation.DROP
                            }), e.setPosition(o.geometry.location), map.setCenter(o.geometry.location), a.extend(o.geometry.location)
                        }
                        map.fitBounds(a)
                    }
                }), google.maps.event.addListener(map, "bounds_changed", function() {
                    var t = map.getBounds();
                    n.setBounds(t)
                })
            }, 2e3)
        }
    }),
    function(t) {
        function e() {
            var t = location.href;
            return hashtag = -1 !== t.indexOf("#prettyPhoto") ? decodeURI(t.substring(t.indexOf("#prettyPhoto") + 1, t.length)) : !1, hashtag
        }

        function i() {
            "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
        }

        function s() {
            -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
        }

        function n(t, e) {
            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var i = "[\\?&]" + t + "=([^&#]*)",
                s = new RegExp(i),
                n = s.exec(e);
            return null == n ? "" : n[1]
        }
        t.prettyPhoto = {
            version: "3.1.5"
        }, t.fn.prettyPhoto = function(o) {
            function a() {
                t(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (k / 2 - v.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                    height: v.contentHeight,
                    width: v.contentWidth
                }, settings.animation_speed), $pp_pic_holder.animate({
                    top: projectedTop,
                    left: I / 2 - v.containerWidth / 2 < 0 ? 0 : I / 2 - v.containerWidth / 2,
                    width: v.containerWidth
                }, settings.animation_speed, function() {
                    $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(v.height).width(v.width),
                        $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (v.resized ? t("a.pp_expand,a.pp_contract").show() : t("a.pp_expand").hide()), !settings.autoplay_slideshow || C || _ || t.prettyPhoto.startSlideshow(), settings.changepicturecallback(), _ = !0
                }), m(), o.ajaxcallback()
            }

            function r(e) {
                $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                    t(".pp_loaderIcon").show(), e()
                })
            }

            function l(e) {
                e > 1 ? t(".pp_nav").show() : t(".pp_nav").hide()
            }

            function d(t, e) {
                if (resized = !1, c(t, e), imageWidth = t, imageHeight = e, (T > I || b > k) && doresize && settings.allow_resize && !S) {
                    for (resized = !0, fitting = !1; !fitting;) T > I ? (imageWidth = I - 200, imageHeight = e / t * imageWidth) : b > k ? (imageHeight = k - 200, imageWidth = t / e * imageHeight) : fitting = !0, b = imageHeight, T = imageWidth;
                    (T > I || b > k) && d(T, b), c(imageWidth, imageHeight)
                }
                return {
                    width: Math.floor(imageWidth),
                    height: Math.floor(imageHeight),
                    containerHeight: Math.floor(b),
                    containerWidth: Math.floor(T) + 2 * settings.horizontal_padding,
                    contentHeight: Math.floor(y),
                    contentWidth: Math.floor(w),
                    resized: resized
                }
            }

            function c(e, i) {
                e = parseFloat(e), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(e), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(e).appendTo(t("body")).css({
                    position: "absolute",
                    top: -1e4
                }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(e), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(t("body")).css({
                    position: "absolute",
                    top: -1e4
                }), titleHeight += $pp_title.height(), $pp_title.remove(), y = i + detailsHeight, w = e, b = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), T = e
            }

            function h(t) {
                return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i) ? "youtube" : t.match(/vimeo\.com/i) ? "vimeo" : t.match(/\b.mov\b/i) ? "quicktime" : t.match(/\b.swf\b/i) ? "flash" : t.match(/\biframe=true\b/i) ? "iframe" : t.match(/\bajax=true\b/i) ? "ajax" : t.match(/\bcustom=true\b/i) ? "custom" : "#" == t.substr(0, 1) ? "inline" : "image"
            }

            function p() {
                if (doresize && "undefined" != typeof $pp_pic_holder) {
                    if (scroll_pos = u(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = k / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > k) return;
                    $pp_pic_holder.css({
                        top: projectedTop,
                        left: I / 2 + scroll_pos.scrollLeft - contentwidth / 2
                    })
                }
            }

            function u() {
                return self.pageYOffset ? {
                    scrollTop: self.pageYOffset,
                    scrollLeft: self.pageXOffset
                } : document.documentElement && document.documentElement.scrollTop ? {
                    scrollTop: document.documentElement.scrollTop,
                    scrollLeft: document.documentElement.scrollLeft
                } : document.body ? {
                    scrollTop: document.body.scrollTop,
                    scrollLeft: document.body.scrollLeft
                } : void 0
            }

            function f() {
                k = t(window).height(), I = t(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(t(document).height()).width(I)
            }

            function m() {
                isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((v.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, t.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
            }

            function g(e) {
                if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), t("body").append(settings.markup), $pp_pic_holder = t(".pp_pic_holder"), $ppt = t(".ppt"), $pp_overlay = t("div.pp_overlay"), isSet && settings.overlay_gallery) {
                    currentGalleryPage = 0, toInject = "";
                    for (var i = 0; i < pp_images.length; i++) pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[i]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                    toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = t(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                        return t.prettyPhoto.changeGalleryPage("next"), t.prettyPhoto.stopSlideshow(), !1
                    }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                        return t.prettyPhoto.changeGalleryPage("previous"), t.prettyPhoto.stopSlideshow(), !1
                    }), $pp_pic_holder.find(".pp_content").hover(function() {
                        $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                    }, function() {
                        $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                    }), itemWidth = 57, $pp_gallery_li.each(function(e) {
                        t(this).find("a").click(function() {
                            return t.prettyPhoto.changePage(e), t.prettyPhoto.stopSlideshow(), !1
                        })
                    })
                }
                settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                    return t.prettyPhoto.startSlideshow(), !1
                })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                    opacity: 0,
                    height: t(document).height(),
                    width: t(window).width()
                }).bind("click", function() {
                    settings.modal || t.prettyPhoto.close()
                }), t("a.pp_close").bind("click", function() {
                    return t.prettyPhoto.close(), !1
                }), settings.allow_expand && t("a.pp_expand").bind("click", function(e) {
                    return t(this).hasClass("pp_expand") ? (t(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (t(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), r(function() {
                        t.prettyPhoto.open()
                    }), !1
                }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                    return t.prettyPhoto.changePage("previous"), t.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                    return t.prettyPhoto.changePage("next"), t.prettyPhoto.stopSlideshow(), !1
                }), p()
            }
            o = jQuery.extend({
                hook: "data-gal",
                animation_speed: "fast",
                ajaxcallback: function() {},
                slideshow: 5e3,
                autoplay_slideshow: !1,
                opacity: .8,
                show_title: !0,
                allow_resize: !0,
                allow_expand: !0,
                default_width: 500,
                default_height: 344,
                counter_separator_label: "/",
                theme: "pp_default",
                horizontal_padding: 20,
                hideflash: !1,
                wmode: "opaque",
                autoplay: !0,
                modal: !1,
                deeplinking: !0,
                overlay_gallery: !0,
                overlay_gallery_max: 30,
                keyboard_shortcuts: !0,
                changepicturecallback: function() {},
                callback: function() {},
                ie6_fallback: !0,
                markup: '<div class="pp_pic_holder"> 						<div class="ppt">?</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
                gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
                image_markup: '<img id="fullResImage" src="{path}" />',
                flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
                quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
                iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
                inline_markup: '<div class="pp_inline">{content}</div>',
                custom_markup: "",
                social_tools: ""
            }, o);
            var v, _, y, w, b, T, C, x = this,
                S = !1,
                k = t(window).height(),
                I = t(window).width();
            return doresize = !0, scroll_pos = u(), t(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
                p(), f()
            }), o.keyboard_shortcuts && t(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(e) {
                if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (e.keyCode) {
                    case 37:
                        t.prettyPhoto.changePage("previous"), e.preventDefault();
                        break;
                    case 39:
                        t.prettyPhoto.changePage("next"), e.preventDefault();
                        break;
                    case 27:
                        settings.modal || t.prettyPhoto.close(), e.preventDefault()
                }
            }), t.prettyPhoto.initialize = function() {
                return settings = o, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = t(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(x, function(e, i) {
                    return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).attr("href") : void 0
                }) : t.makeArray(t(this).attr("href")), pp_titles = isSet ? jQuery.map(x, function(e, i) {
                    return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).find("img").attr("alt") ? t(e).find("img").attr("alt") : "" : void 0
                }) : t.makeArray(t(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(x, function(e, i) {
                    return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).attr("title") ? t(e).attr("title") : "" : void 0
                }) : t.makeArray(t(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(t(this).attr("href"), pp_images), rel_index = isSet ? set_position : t("a[" + settings.hook + "^='" + theRel + "']").index(t(this)), g(this), settings.allow_resize && t(window).bind("scroll.prettyphoto", function() {
                    p()
                }), t.prettyPhoto.open(), !1
            }, t.prettyPhoto.open = function(e) {
                return "undefined" == typeof settings && (settings = o, pp_images = t.makeArray(arguments[0]), pp_titles = arguments[1] ? t.makeArray(arguments[1]) : t.makeArray(""), pp_descriptions = arguments[2] ? t.makeArray(arguments[2]) : t.makeArray(""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, g(e.target)), settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), l(t(pp_images).size()), t(".pp_loaderIcon").show(), settings.deeplinking && i(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + t(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(n("width", pp_images[set_position])) ? n("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(n("height", pp_images[set_position])) ? n("height", pp_images[set_position]) : settings.default_height.toString(), S = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(t(window).height() * parseFloat(movie_height) / 100 - 150), S = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(t(window).width() * parseFloat(movie_width) / 100 - 150), S = !0), $pp_pic_holder.fadeIn(function() {
                    switch (settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("?"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
                        case "image":
                            imgPreloader = new Image, nextImage = new Image, isSet && set_position < t(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                                v = d(imgPreloader.width, imgPreloader.height), a()
                            }, imgPreloader.onerror = function() {
                                alert("Image cannot be loaded. Make sure the path is correct and image exist."), t.prettyPhoto.close()
                            }, imgPreloader.src = pp_images[set_position];
                            break;
                        case "youtube":
                            v = d(movie_width, movie_height), movie_id = n("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, n("rel", pp_images[set_position]) ? movie += "?rel=" + n("rel", pp_images[set_position]) : movie += "", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                            break;
                        case "vimeo":
                            v = d(movie_width, movie_height), movie_id = pp_images[set_position];
                            var e = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                                i = movie_id.match(e);
                            movie = "http://player.vimeo.com/video/" + i[3] + "?title=0&byline=0&portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = v.width + "/embed/?moog_width=" + v.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, v.height).replace(/{path}/g, movie);
                            break;
                        case "quicktime":
                            v = d(movie_width, movie_height), v.height += 15, v.contentHeight += 15, v.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                            break;
                        case "flash":
                            v = d(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                            break;
                        case "iframe":
                            v = d(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{path}/g, frame_url);
                            break;
                        case "ajax":
                            doresize = !1, v = d(movie_width, movie_height), doresize = !0, skipInjection = !0, t.get(pp_images[set_position], function(t) {
                                toInject = settings.inline_markup.replace(/{content}/g, t), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, a()
                            });
                            break;
                        case "custom":
                            v = d(movie_width, movie_height), toInject = settings.custom_markup;
                            break;
                        case "inline":
                            myClone = t(pp_images[set_position]).clone().append('<br clear="all" />').css({
                                width: settings.default_width
                            }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(t("body")).show(), doresize = !1, v = d(t(myClone).width(), t(myClone).height()), doresize = !0, t(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, t(pp_images[set_position]).html())
                    }
                    imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, a())
                }), !1
            }, t.prettyPhoto.changePage = function(e) {
                currentGalleryPage = 0, "previous" == e ? (set_position--, set_position < 0 && (set_position = t(pp_images).size() - 1)) : "next" == e ? (set_position++, set_position > t(pp_images).size() - 1 && (set_position = 0)) : set_position = e, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && t(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), r(function() {
                    t.prettyPhoto.open()
                })
            }, t.prettyPhoto.changeGalleryPage = function(t) {
                "next" == t ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == t ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = t, slide_speed = "next" == t || "previous" == t ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({
                    left: -slide_to
                }, slide_speed)
            }, t.prettyPhoto.startSlideshow = function() {
                "undefined" == typeof C ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                    return t.prettyPhoto.stopSlideshow(), !1
                }), C = setInterval(t.prettyPhoto.startSlideshow, settings.slideshow)) : t.prettyPhoto.changePage("next")
            }, t.prettyPhoto.stopSlideshow = function() {
                $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                    return t.prettyPhoto.startSlideshow(), !1
                }), clearInterval(C), C = void 0
            }, t.prettyPhoto.close = function() {
                $pp_overlay.is(":animated") || (t.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                    t(this).remove()
                }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                    settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), t(this).remove(), t(window).unbind("scroll.prettyphoto"), s(), settings.callback(), doresize = !0, _ = !1, delete settings
                }))
            }, !pp_alreadyInitialized && e() && (pp_alreadyInitialized = !0, hashIndex = e(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
                t("a[" + o.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
            }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", t.prettyPhoto.initialize)
        }
    }(jQuery);
var pp_alreadyInitialized = !1;
jQuery(window).load(function() {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
            animation_speed: "normal",
            autoplay_slideshow: !1,
            slideshow: 3e3
        })
    }), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, i) {
        var s = {
            init: function(e, i) {
                this.$elem = t(i), this.options = t.extend({}, t.fn.owlCarousel.options, this.$elem.data(), e), this.userOptions = e, this.loadContent()
            },
            loadContent: function() {
                function e(t) {
                    var e, i = "";
                    if ("function" == typeof s.options.jsonSuccess) s.options.jsonSuccess.apply(this, [t]);
                    else {
                        for (e in t.owl) t.owl.hasOwnProperty(e) && (i += t.owl[e].item);
                        s.$elem.html(i)
                    }
                    s.logIn()
                }
                var i, s = this;
                "function" == typeof s.options.beforeInit && s.options.beforeInit.apply(this, [s.$elem]), "string" == typeof s.options.jsonPath ? (i = s.options.jsonPath, t.getJSON(i, e)) : s.logIn()
            },
            logIn: function() {
                this.$elem.data("owl-originalStyles", this.$elem.attr("style")), this.$elem.data("owl-originalClasses", this.$elem.attr("class")), this.$elem.css({
                    opacity: 0
                }), this.orignalItems = this.options.items, this.checkBrowser(), this.wrapperWidth = 0, this.checkVisible = null, this.setVars()
            },
            setVars: function() {
                return 0 === this.$elem.children().length ? !1 : (this.baseClass(), this.eventTypes(), this.$userItems = this.$elem.children(), this.itemsAmount = this.$userItems.length, this.wrapItems(), this.$owlItems = this.$elem.find(".owl-item"), this.$owlWrapper = this.$elem.find(".owl-wrapper"), this.playDirection = "next", this.prevItem = 0, this.prevArr = [0], this.currentItem = 0, this.customEvents(), void this.onStartup())
            },
            onStartup: function() {
                this.updateItems(), this.calculateAll(), this.buildControls(), this.updateControls(), this.response(), this.moveEvents(), this.stopOnHover(), this.owlStatus(), !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle), !0 === this.options.autoPlay && (this.options.autoPlay = 5e3), this.play(), this.$elem.find(".owl-wrapper").css("display", "block"), this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility(), this.onstartup = !1, this.eachMoveUpdate(), "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
            },
            eachMoveUpdate: function() {
                !0 === this.options.lazyLoad && this.lazyLoad(), !0 === this.options.autoHeight && this.autoHeight(), this.onVisibleItems(), "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
            },
            updateVars: function() {
                "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]), this.watchVisibility(), this.updateItems(), this.calculateAll(), this.updatePosition(), this.updateControls(), this.eachMoveUpdate(), "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
            },
            reload: function() {
                var t = this;
                e.setTimeout(function() {
                    t.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var t = this;
                return !1 !== t.$elem.is(":visible") ? !1 : (t.$elem.css({
                    opacity: 0
                }), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), void(t.checkVisible = e.setInterval(function() {
                    t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
                        opacity: 1
                    }, 200), e.clearInterval(t.checkVisible))
                }, 500)))
            },
            wrapItems: function() {
                this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), this.wrapperOuter = this.$elem.find(".owl-wrapper-outer"), this.$elem.css("display", "block")
            },
            baseClass: function() {
                var t = this.$elem.hasClass(this.options.baseClass),
                    e = this.$elem.hasClass(this.options.theme);
                t || this.$elem.addClass(this.options.baseClass), e || this.$elem.addClass(this.options.theme)
            },
            updateItems: function() {
                var e, i;
                if (!1 === this.options.responsive) return !1;
                if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
                if (e = t(this.options.responsiveBaseWidth).width(), e > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom)
                    for (this.options.itemsCustom.sort(function(t, e) {
                            return t[0] - e[0]
                        }), i = 0; i < this.options.itemsCustom.length; i += 1) this.options.itemsCustom[i][0] <= e && (this.options.items = this.options.itemsCustom[i][1]);
                else e <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), e <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), e <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), e <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), e <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
                this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
            },
            response: function() {
                var i, s, n = this;
                return !0 !== n.options.responsive ? !1 : (s = t(e).width(), n.resizer = function() {
                    t(e).width() !== s && (!1 !== n.options.autoPlay && e.clearInterval(n.autoPlayInterval), e.clearTimeout(i), i = e.setTimeout(function() {
                        s = t(e).width(), n.updateVars()
                    }, n.options.responsiveRefreshRate))
                }, void t(e).resize(n.resizer))
            },
            updatePosition: function() {
                this.jumpTo(this.currentItem), !1 !== this.options.autoPlay && this.checkAp()
            },
            appendItemsSizes: function() {
                var e = this,
                    i = 0,
                    s = e.itemsAmount - e.options.items;
                e.$owlItems.each(function(n) {
                    var o = t(this);
                    o.css({
                        width: e.itemWidth
                    }).data("owl-item", Number(n)), (0 === n % e.options.items || n === s) && (n > s || (i += 1)), o.data("owl-roundPages", i)
                })
            },
            appendWrapperSizes: function() {
                this.$owlWrapper.css({
                    width: this.$owlItems.length * this.itemWidth * 2,
                    left: 0
                }), this.appendItemsSizes()
            },
            calculateAll: function() {
                this.calculateWidth(), this.appendWrapperSizes(), this.loops(), this.max()
            },
            calculateWidth: function() {
                this.itemWidth = Math.round(this.$elem.width() / this.options.items)
            },
            max: function() {
                var t = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
                return this.options.items > this.itemsAmount ? this.maximumPixels = t = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = t), t
            },
            min: function() {
                return 0
            },
            loops: function() {
                var e, i, s = 0,
                    n = 0;
                for (this.positionsInArray = [0], this.pagesInArray = [], e = 0; e < this.itemsAmount; e += 1) n += this.itemWidth, this.positionsInArray.push(-n), !0 === this.options.scrollPerPage && (i = t(this.$owlItems[e]), i = i.data("owl-roundPages"), i !== s && (this.pagesInArray[s] = this.positionsInArray[e], s = i))
            },
            buildControls: function() {
                (!0 === this.options.navigation || !0 === this.options.pagination) && (this.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)), !0 === this.options.pagination && this.buildPagination(), !0 === this.options.navigation && this.buildButtons()
            },
            buildButtons: function() {
                var e = this,
                    i = t('<div class="owl-buttons"/>');
                e.owlControls.append(i), e.buttonPrev = t("<div/>", {
                    "class": "owl-prev",
                    html: e.options.navigationText[0] || ""
                }), e.buttonNext = t("<div/>", {
                    "class": "owl-next",
                    html: e.options.navigationText[1] || ""
                }), i.append(e.buttonPrev).append(e.buttonNext), i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) {
                    t.preventDefault()
                }), i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(i) {
                    i.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
                })
            },
            buildPagination: function() {
                var e = this;
                e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(i) {
                    i.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var e, i, s, n, o, a;
                if (!1 === this.options.pagination) return !1;
                for (this.paginationWrapper.html(""), e = 0, i = this.itemsAmount - this.itemsAmount % this.options.items, n = 0; n < this.itemsAmount; n += 1) 0 === n % this.options.items && (e += 1, i === n && (s = this.itemsAmount - this.options.items), o = t("<div/>", {
                    "class": "owl-page"
                }), a = t("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? e : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), o.append(a), o.data("owl-page", i === n ? s : n), o.data("owl-roundPages", e), this.paginationWrapper.append(o));
                this.checkPagination()
            },
            checkPagination: function() {
                var e = this;
                return !1 === e.options.pagination ? !1 : void e.paginationWrapper.find(".owl-page").each(function() {
                    t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                return !1 === this.options.navigation ? !1 : void(!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled"))))
            },
            updateControls: function() {
                this.updatePagination(), this.checkNavigation(), this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
            },
            destroyControls: function() {
                this.owlControls && this.owlControls.remove()
            },
            next: function(t) {
                if (this.isTransition) return !1;
                if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
                    if (!0 !== this.options.rewindNav) return this.currentItem = this.maximumItem, !1;
                    this.currentItem = 0, t = "rewind"
                }
                this.goTo(this.currentItem, t)
            },
            prev: function(t) {
                if (this.isTransition) return !1;
                if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem) {
                    if (!0 !== this.options.rewindNav) return this.currentItem = 0, !1;
                    this.currentItem = this.maximumItem, t = "rewind"
                }
                this.goTo(this.currentItem, t)
            },
            goTo: function(t, i, s) {
                var n = this;
                return n.isTransition ? !1 : ("function" == typeof n.options.beforeMove && n.options.beforeMove.apply(this, [n.$elem]), t >= n.maximumItem ? t = n.maximumItem : 0 >= t && (t = 0), n.currentItem = n.owl.currentItem = t, !1 !== n.options.transitionStyle && "drag" !== s && 1 === n.options.items && !0 === n.browser.support3d ? (n.swapSpeed(0), !0 === n.browser.support3d ? n.transition3d(n.positionsInArray[t]) : n.css2slide(n.positionsInArray[t], 1), n.afterGo(), n.singleItemTransition(), !1) : (t = n.positionsInArray[t], !0 === n.browser.support3d ? (n.isCss3Finish = !1, !0 === i ? (n.swapSpeed("paginationSpeed"), e.setTimeout(function() {
                    n.isCss3Finish = !0
                }, n.options.paginationSpeed)) : "rewind" === i ? (n.swapSpeed(n.options.rewindSpeed), e.setTimeout(function() {
                    n.isCss3Finish = !0
                }, n.options.rewindSpeed)) : (n.swapSpeed("slideSpeed"), e.setTimeout(function() {
                    n.isCss3Finish = !0
                }, n.options.slideSpeed)), n.transition3d(t)) : !0 === i ? n.css2slide(t, n.options.paginationSpeed) : "rewind" === i ? n.css2slide(t, n.options.rewindSpeed) : n.css2slide(t, n.options.slideSpeed), void n.afterGo()))
            },
            jumpTo: function(t) {
                "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]), t >= this.maximumItem || -1 === t ? t = this.maximumItem : 0 >= t && (t = 0), this.swapSpeed(0), !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[t]) : this.css2slide(this.positionsInArray[t], 1), this.currentItem = this.owl.currentItem = t, this.afterGo()
            },
            afterGo: function() {
                this.prevArr.push(this.currentItem), this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2], this.prevArr.shift(0), this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp()), "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
            },
            stop: function() {
                this.apStatus = "stop", e.clearInterval(this.autoPlayInterval)
            },
            checkAp: function() {
                "stop" !== this.apStatus && this.play()
            },
            play: function() {
                var t = this;
                return t.apStatus = "play", !1 === t.options.autoPlay ? !1 : (e.clearInterval(t.autoPlayInterval), void(t.autoPlayInterval = e.setInterval(function() {
                    t.next(!0)
                }, t.options.autoPlay)))
            },
            swapSpeed: function(t) {
                "slideSpeed" === t ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === t ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof t && this.$owlWrapper.css(this.addCssSpeed(t))
            },
            addCssSpeed: function(t) {
                return {
                    "-webkit-transition": "all " + t + "ms ease",
                    "-moz-transition": "all " + t + "ms ease",
                    "-o-transition": "all " + t + "ms ease",
                    transition: "all " + t + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(t) {
                return {
                    "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                    transform: "translate3d(" + t + "px, 0px,0px)"
                }
            },
            transition3d: function(t) {
                this.$owlWrapper.css(this.doTranslate(t))
            },
            css2move: function(t) {
                this.$owlWrapper.css({
                    left: t
                })
            },
            css2slide: function(t, e) {
                var i = this;
                i.isCssFinish = !1, i.$owlWrapper.stop(!0, !0).animate({
                    left: t
                }, {
                    duration: e || i.options.slideSpeed,
                    complete: function() {
                        i.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var t = i.createElement("div");
                t.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)", t = t.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g), this.browser = {
                    support3d: null !== t && 1 === t.length,
                    isTouch: "ontouchstart" in e || e.navigator.msMaxTouchPoints
                }
            },
            moveEvents: function() {
                (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) && (this.gestures(), this.disabledEvents())
            },
            eventTypes: function() {
                var t = ["s", "e", "x"];
                this.ev_types = {}, !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), this.ev_types.start = t[0], this.ev_types.move = t[1], this.ev_types.end = t[2]
            },
            disabledEvents: function() {
                this.$elem.on("dragstart.owl", function(t) {
                    t.preventDefault()
                }), this.$elem.on("mousedown.disableTextSelect", function(e) {
                    return t(e.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function s(t) {
                    if (void 0 !== t.touches) return {
                        x: t.touches[0].pageX,
                        y: t.touches[0].pageY
                    };
                    if (void 0 === t.touches) {
                        if (void 0 !== t.pageX) return {
                            x: t.pageX,
                            y: t.pageY
                        };
                        if (void 0 === t.pageX) return {
                            x: t.clientX,
                            y: t.clientY
                        }
                    }
                }

                function n(e) {
                    "on" === e ? (t(i).on(r.ev_types.move, o), t(i).on(r.ev_types.end, a)) : "off" === e && (t(i).off(r.ev_types.move), t(i).off(r.ev_types.end))
                }

                function o(n) {
                    n = n.originalEvent || n || e.event, r.newPosX = s(n).x - l.offsetX, r.newPosY = s(n).y - l.offsetY, r.newRelativeX = r.newPosX - l.relativePos, "function" == typeof r.options.startDragging && !0 !== l.dragging && 0 !== r.newRelativeX && (l.dragging = !0, r.options.startDragging.apply(r, [r.$elem])), (8 < r.newRelativeX || -8 > r.newRelativeX) && !0 === r.browser.isTouch && (void 0 !== n.preventDefault ? n.preventDefault() : n.returnValue = !1, l.sliding = !0), (10 < r.newPosY || -10 > r.newPosY) && !1 === l.sliding && t(i).off("touchmove.owl"), r.newPosX = Math.max(Math.min(r.newPosX, r.newRelativeX / 5), r.maximumPixels + r.newRelativeX / 5), !0 === r.browser.support3d ? r.transition3d(r.newPosX) : r.css2move(r.newPosX)
                }

                function a(i) {
                    i = i.originalEvent || i || e.event;
                    var s;
                    i.target = i.target || i.srcElement, l.dragging = !1, !0 !== r.browser.isTouch && r.$owlWrapper.removeClass("grabbing"), r.dragDirection = 0 > r.newRelativeX ? r.owl.dragDirection = "left" : r.owl.dragDirection = "right", 0 !== r.newRelativeX && (s = r.getNewPosition(), r.goTo(s, !1, "drag"), l.targetElement === i.target && !0 !== r.browser.isTouch && (t(i.target).on("click.disable", function(e) {
                        e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable")
                    }), i = t._data(i.target, "events").click, s = i.pop(), i.splice(0, 0, s))), n("off")
                }
                var r = this,
                    l = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                r.isCssFinish = !0, r.$elem.on(r.ev_types.start, ".owl-wrapper", function(i) {
                    i = i.originalEvent || i || e.event;
                    var o;
                    if (3 === i.which) return !1;
                    if (!(r.itemsAmount <= r.options.items)) {
                        if (!1 === r.isCssFinish && !r.options.dragBeforeAnimFinish || !1 === r.isCss3Finish && !r.options.dragBeforeAnimFinish) return !1;
                        !1 !== r.options.autoPlay && e.clearInterval(r.autoPlayInterval), !0 === r.browser.isTouch || r.$owlWrapper.hasClass("grabbing") || r.$owlWrapper.addClass("grabbing"), r.newPosX = 0, r.newRelativeX = 0, t(this).css(r.removeTransition()), o = t(this).position(), l.relativePos = o.left, l.offsetX = s(i).x - o.left, l.offsetY = s(i).y - o.top, n("on"), l.sliding = !1, l.targetElement = i.target || i.srcElement
                    }
                })
            },
            getNewPosition: function() {
                var t = this.closestItem();
                return t > this.maximumItem ? t = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = t = 0), t
            },
            closestItem: function() {
                var e = this,
                    i = !0 === e.options.scrollPerPage ? e.pagesInArray : e.positionsInArray,
                    s = e.newPosX,
                    n = null;
                return t.each(i, function(o, a) {
                    s - e.itemWidth / 20 > i[o + 1] && s - e.itemWidth / 20 < a && "left" === e.moveDirection() ? (n = a, e.currentItem = !0 === e.options.scrollPerPage ? t.inArray(n, e.positionsInArray) : o) : s + e.itemWidth / 20 < a && s + e.itemWidth / 20 > (i[o + 1] || i[o] - e.itemWidth) && "right" === e.moveDirection() && (!0 === e.options.scrollPerPage ? (n = i[o + 1] || i[i.length - 1], e.currentItem = t.inArray(n, e.positionsInArray)) : (n = i[o + 1], e.currentItem = o + 1))
                }), e.currentItem
            },
            moveDirection: function() {
                var t;
                return 0 > this.newRelativeX ? (t = "right", this.playDirection = "next") : (t = "left", this.playDirection = "prev"), t
            },
            customEvents: function() {
                var t = this;
                t.$elem.on("owl.next", function() {
                    t.next()
                }), t.$elem.on("owl.prev", function() {
                    t.prev()
                }), t.$elem.on("owl.play", function(e, i) {
                    t.options.autoPlay = i, t.play(), t.hoverStatus = "play"
                }), t.$elem.on("owl.stop", function() {
                    t.stop(), t.hoverStatus = "stop"
                }), t.$elem.on("owl.goTo", function(e, i) {
                    t.goTo(i)
                }), t.$elem.on("owl.jumpTo", function(e, i) {
                    t.jumpTo(i)
                })
            },
            stopOnHover: function() {
                var t = this;
                !0 === t.options.stopOnHover && !0 !== t.browser.isTouch && !1 !== t.options.autoPlay && (t.$elem.on("mouseover", function() {
                    t.stop()
                }), t.$elem.on("mouseout", function() {
                    "stop" !== t.hoverStatus && t.play()
                }))
            },
            lazyLoad: function() {
                var e, i, s, n, o;
                if (!1 === this.options.lazyLoad) return !1;
                for (e = 0; e < this.itemsAmount; e += 1) i = t(this.$owlItems[e]), "loaded" !== i.data("owl-loaded") && (s = i.data("owl-item"), n = i.find(".lazyOwl"), "string" != typeof n.data("src") ? i.data("owl-loaded", "loaded") : (void 0 === i.data("owl-loaded") && (n.hide(), i.addClass("loading").data("owl-loaded", "checked")), (o = !0 === this.options.lazyFollow ? s >= this.currentItem : !0) && s < this.currentItem + this.options.items && n.length && this.lazyPreload(i, n)))
            },
            lazyPreload: function(t, i) {
                function s() {
                    t.data("owl-loaded", "loaded").removeClass("loading"), i.removeAttr("data-src"), "fade" === a.options.lazyEffect ? i.fadeIn(400) : i.show(), "function" == typeof a.options.afterLazyLoad && a.options.afterLazyLoad.apply(this, [a.$elem])
                }

                function n() {
                    r += 1, a.completeImg(i.get(0)) || !0 === o ? s() : 100 >= r ? e.setTimeout(n, 100) : s()
                }
                var o, a = this,
                    r = 0;
                "DIV" === i.prop("tagName") ? (i.css("background-image", "url(" + i.data("src") + ")"), o = !0) : i[0].src = i.data("src"), n()
            },
            autoHeight: function() {
                function i() {
                    var i = t(o.$owlItems[o.currentItem]).height();
                    o.wrapperOuter.css("height", i + "px"), o.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function() {
                        o.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function s() {
                    n += 1, o.completeImg(a.get(0)) ? i() : 100 >= n ? e.setTimeout(s, 100) : o.wrapperOuter.css("height", "")
                }
                var n, o = this,
                    a = t(o.$owlItems[o.currentItem]).find("img");
                void 0 !== a.get(0) ? (n = 0, s()) : i()
            },
            completeImg: function(t) {
                return !t.complete || "undefined" != typeof t.naturalWidth && 0 === t.naturalWidth ? !1 : !0
            },
            onVisibleItems: function() {
                var e;
                for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], e = this.currentItem; e < this.currentItem + this.options.items; e += 1) this.visibleItems.push(e), !0 === this.options.addClassActive && t(this.$owlItems[e]).addClass("active");
                this.owl.visibleItems = this.visibleItems
            },
            transitionTypes: function(t) {
                this.outClass = "owl-" + t + "-out", this.inClass = "owl-" + t + "-in"
            },
            singleItemTransition: function() {
                var t = this,
                    e = t.outClass,
                    i = t.inClass,
                    s = t.$owlItems.eq(t.currentItem),
                    n = t.$owlItems.eq(t.prevItem),
                    o = Math.abs(t.positionsInArray[t.currentItem]) + t.positionsInArray[t.prevItem],
                    a = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2;
                t.isTransition = !0, t.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": a + "px",
                    "-moz-perspective-origin": a + "px",
                    "perspective-origin": a + "px"
                }), n.css({
                    position: "relative",
                    left: o + "px"
                }).addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                    t.endPrev = !0, n.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), t.clearTransStyle(n, e)
                }), s.addClass(i).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                    t.endCurrent = !0, s.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), t.clearTransStyle(s, i)
                })
            },
            clearTransStyle: function(t, e) {
                t.css({
                    position: "",
                    left: ""
                }).removeClass(e), this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
            },
            owlStatus: function() {
                this.owl = {
                    userOptions: this.userOptions,
                    baseElement: this.$elem,
                    userItems: this.$userItems,
                    owlItems: this.$owlItems,
                    currentItem: this.currentItem,
                    prevItem: this.prevItem,
                    visibleItems: this.visibleItems,
                    isTouch: this.browser.isTouch,
                    browser: this.browser,
                    dragDirection: this.dragDirection
                }
            },
            clearEvents: function() {
                this.$elem.off(".owl owl mousedown.disableTextSelect"), t(i).off(".owl owl"), t(e).off("resize", this.resizer)
            },
            unWrap: function() {
                0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove()), this.clearEvents(), this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                this.stop(), e.clearInterval(this.checkVisible), this.unWrap(), this.$elem.removeData()
            },
            reinit: function(e) {
                e = t.extend({}, this.userOptions, e), this.unWrap(), this.init(e, this.$elem)
            },
            addItem: function(t, e) {
                var i;
                return t ? 0 === this.$elem.children().length ? (this.$elem.append(t), this.setVars(), !1) : (this.unWrap(), i = void 0 === e || -1 === e ? -1 : e, i >= this.$userItems.length || -1 === i ? this.$userItems.eq(-1).after(t) : this.$userItems.eq(i).before(t), void this.setVars()) : !1
            },
            removeItem: function(t) {
                return 0 === this.$elem.children().length ? !1 : (t = void 0 === t || -1 === t ? -1 : t, this.unWrap(), this.$userItems.eq(t).remove(), void this.setVars())
            }
        };
        t.fn.owlCarousel = function(e) {
            return this.each(function() {
                if (!0 === t(this).data("owl-init")) return !1;
                t(this).data("owl-init", !0);
                var i = Object.create(s);
                i.init(e, this), t.data(this, "owlCarousel", i)
            })
        }, t.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: e,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
    }(function(t) {
        var e = function() {
                if (t && t.fn && t.fn.select2 && t.fn.select2.amd) var e = t.fn.select2.amd;
                var e;
                return function() {
                    if (!e || !e.requirejs) {
                        e ? i = e : e = {};
                        var t, i, s;
                        ! function(e) {
                            function n(t, e) {
                                return w.call(t, e)
                            }

                            function o(t, e) {
                                var i, s, n, o, a, r, l, d, c, h, p, u = e && e.split("/"),
                                    f = _.map,
                                    m = f && f["*"] || {};
                                if (t && "." === t.charAt(0))
                                    if (e) {
                                        for (t = t.split("/"), a = t.length - 1, _.nodeIdCompat && T.test(t[a]) && (t[a] = t[a].replace(T, "")), t = u.slice(0, u.length - 1).concat(t), c = 0; c < t.length; c += 1)
                                            if (p = t[c], "." === p) t.splice(c, 1), c -= 1;
                                            else if (".." === p) {
                                            if (1 === c && (".." === t[2] || ".." === t[0])) break;
                                            c > 0 && (t.splice(c - 1, 2), c -= 2)
                                        }
                                        t = t.join("/")
                                    } else 0 === t.indexOf("./") && (t = t.substring(2));
                                if ((u || m) && f) {
                                    for (i = t.split("/"), c = i.length; c > 0; c -= 1) {
                                        if (s = i.slice(0, c).join("/"), u)
                                            for (h = u.length; h > 0; h -= 1)
                                                if (n = f[u.slice(0, h).join("/")], n && (n = n[s])) {
                                                    o = n, r = c;
                                                    break
                                                }
                                        if (o) break;
                                        !l && m && m[s] && (l = m[s], d = c)
                                    }!o && l && (o = l, r = d), o && (i.splice(0, r, o), t = i.join("/"))
                                }
                                return t
                            }

                            function a(t, i) {
                                return function() {
                                    var s = b.call(arguments, 0);
                                    return "string" != typeof s[0] && 1 === s.length && s.push(null), u.apply(e, s.concat([t, i]))
                                }
                            }

                            function r(t) {
                                return function(e) {
                                    return o(e, t)
                                }
                            }

                            function l(t) {
                                return function(e) {
                                    g[t] = e
                                }
                            }

                            function d(t) {
                                if (n(v, t)) {
                                    var i = v[t];
                                    delete v[t], y[t] = !0, p.apply(e, i)
                                }
                                if (!n(g, t) && !n(y, t)) throw new Error("No " + t);
                                return g[t]
                            }

                            function c(t) {
                                var e, i = t ? t.indexOf("!") : -1;
                                return i > -1 && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [e, t]
                            }

                            function h(t) {
                                return function() {
                                    return _ && _.config && _.config[t] || {}
                                }
                            }
                            var p, u, f, m, g = {},
                                v = {},
                                _ = {},
                                y = {},
                                w = Object.prototype.hasOwnProperty,
                                b = [].slice,
                                T = /\.js$/;
                            f = function(t, e) {
                                var i, s = c(t),
                                    n = s[0];
                                return t = s[1], n && (n = o(n, e), i = d(n)), n ? t = i && i.normalize ? i.normalize(t, r(e)) : o(t, e) : (t = o(t, e), s = c(t), n = s[0], t = s[1], n && (i = d(n))), {
                                    f: n ? n + "!" + t : t,
                                    n: t,
                                    pr: n,
                                    p: i
                                }
                            }, m = {
                                require: function(t) {
                                    return a(t)
                                },
                                exports: function(t) {
                                    var e = g[t];
                                    return "undefined" != typeof e ? e : g[t] = {}
                                },
                                module: function(t) {
                                    return {
                                        id: t,
                                        uri: "",
                                        exports: g[t],
                                        config: h(t)
                                    }
                                }
                            }, p = function(t, i, s, o) {
                                var r, c, h, p, u, _, w = [],
                                    b = typeof s;
                                if (o = o || t, "undefined" === b || "function" === b) {
                                    for (i = !i.length && s.length ? ["require", "exports", "module"] : i, u = 0; u < i.length; u += 1)
                                        if (p = f(i[u], o), c = p.f, "require" === c) w[u] = m.require(t);
                                        else if ("exports" === c) w[u] = m.exports(t), _ = !0;
                                    else if ("module" === c) r = w[u] = m.module(t);
                                    else if (n(g, c) || n(v, c) || n(y, c)) w[u] = d(c);
                                    else {
                                        if (!p.p) throw new Error(t + " missing " + c);
                                        p.p.load(p.n, a(o, !0), l(c), {}), w[u] = g[c]
                                    }
                                    h = s ? s.apply(g[t], w) : void 0, t && (r && r.exports !== e && r.exports !== g[t] ? g[t] = r.exports : h === e && _ || (g[t] = h))
                                } else t && (g[t] = s)
                            }, t = i = u = function(t, i, s, n, o) {
                                if ("string" == typeof t) return m[t] ? m[t](i) : d(f(t, i).f);
                                if (!t.splice) {
                                    if (_ = t, _.deps && u(_.deps, _.callback), !i) return;
                                    i.splice ? (t = i, i = s, s = null) : t = e
                                }
                                return i = i || function() {}, "function" == typeof s && (s = n, n = o), n ? p(e, t, i, s) : setTimeout(function() {
                                    p(e, t, i, s)
                                }, 4), u
                            }, u.config = function(t) {
                                return u(t)
                            }, t._defined = g, s = function(t, e, i) {
                                if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                                e.splice || (i = e, e = []), n(g, t) || n(v, t) || (v[t] = [t, e, i])
                            }, s.amd = {
                                jQuery: !0
                            }
                        }(), e.requirejs = t, e.require = i, e.define = s
                    }
                }(), e.define("almond", function() {}), e.define("jquery", [], function() {
                    var e = t || $;
                    return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
                }), e.define("select2/utils", ["jquery"], function(t) {
                    function e(t) {
                        var e = t.prototype,
                            i = [];
                        for (var s in e) {
                            var n = e[s];
                            "function" == typeof n && "constructor" !== s && i.push(s)
                        }
                        return i
                    }
                    var i = {};
                    i.Extend = function(t, e) {
                        function i() {
                            this.constructor = t
                        }
                        var s = {}.hasOwnProperty;
                        for (var n in e) s.call(e, n) && (t[n] = e[n]);
                        return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
                    }, i.Decorate = function(t, i) {
                        function s() {
                            var e = Array.prototype.unshift,
                                s = i.prototype.constructor.length,
                                n = t.prototype.constructor;
                            s > 0 && (e.call(arguments, t.prototype.constructor), n = i.prototype.constructor), n.apply(this, arguments)
                        }

                        function n() {
                            this.constructor = s
                        }
                        var o = e(i),
                            a = e(t);
                        i.displayName = t.displayName, s.prototype = new n;
                        for (var r = 0; r < a.length; r++) {
                            var l = a[r];
                            s.prototype[l] = t.prototype[l]
                        }
                        for (var d = (function(t) {
                                var e = function() {};
                                t in s.prototype && (e = s.prototype[t]);
                                var n = i.prototype[t];
                                return function() {
                                    var t = Array.prototype.unshift;
                                    return t.call(arguments, e), n.apply(this, arguments)
                                }
                            }), c = 0; c < o.length; c++) {
                            var h = o[c];
                            s.prototype[h] = d(h)
                        }
                        return s
                    };
                    var s = function() {
                        this.listeners = {}
                    };
                    return s.prototype.on = function(t, e) {
                        this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
                    }, s.prototype.trigger = function(t) {
                        var e = Array.prototype.slice,
                            i = e.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == i && (i = []), 0 === i.length && i.push({}), i[0]._type = t, t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, s.prototype.invoke = function(t, e) {
                        for (var i = 0, s = t.length; s > i; i++) t[i].apply(this, e)
                    }, i.Observable = s, i.generateChars = function(t) {
                        for (var e = "", i = 0; t > i; i++) {
                            var s = Math.floor(36 * Math.random());
                            e += s.toString(36)
                        }
                        return e
                    }, i.bind = function(t, e) {
                        return function() {
                            t.apply(e, arguments)
                        }
                    }, i._convertData = function(t) {
                        for (var e in t) {
                            var i = e.split("-"),
                                s = t;
                            if (1 !== i.length) {
                                for (var n = 0; n < i.length; n++) {
                                    var o = i[n];
                                    o = o.substring(0, 1).toLowerCase() + o.substring(1), o in s || (s[o] = {}), n == i.length - 1 && (s[o] = t[e]), s = s[o]
                                }
                                delete t[e]
                            }
                        }
                        return t
                    }, i.hasScroll = function(e, i) {
                        var s = t(i),
                            n = i.style.overflowX,
                            o = i.style.overflowY;
                        return n !== o || "hidden" !== o && "visible" !== o ? "scroll" === n || "scroll" === o ? !0 : s.innerHeight() < i.scrollHeight || s.innerWidth() < i.scrollWidth : !1
                    }, i.escapeMarkup = function(t) {
                        var e = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function(t) {
                            return e[t]
                        })
                    }, i.appendMany = function(e, i) {
                        if ("1.7" === t.fn.jquery.substr(0, 3)) {
                            var s = t();
                            t.map(i, function(t) {
                                s = s.add(t)
                            }), i = s
                        }
                        e.append(i)
                    }, i
                }), e.define("select2/results", ["jquery", "./utils"], function(t, e) {
                    function i(t, e, s) {
                        this.$element = t, this.data = s, this.options = e, i.__super__.constructor.call(this)
                    }
                    return e.Extend(i, e.Observable), i.prototype.render = function() {
                        var e = t('<ul class="select2-results__options" role="tree"></ul>');
                        return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e, e
                    }, i.prototype.clear = function() {
                        this.$results.empty()
                    }, i.prototype.displayMessage = function(e) {
                        var i = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var s = t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            n = this.options.get("translations").get(e.message);
                        s.append(i(n(e.args))), s[0].className += " select2-results__message", this.$results.append(s)
                    }, i.prototype.hideMessages = function() {
                        this.$results.find(".select2-results__message").remove()
                    }, i.prototype.append = function(t) {
                        this.hideLoading();
                        var e = [];
                        if (null == t.results || 0 === t.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                            message: "noResults"
                        }));
                        t.results = this.sort(t.results);
                        for (var i = 0; i < t.results.length; i++) {
                            var s = t.results[i],
                                n = this.option(s);
                            e.push(n)
                        }
                        this.$results.append(e)
                    }, i.prototype.position = function(t, e) {
                        var i = e.find(".select2-results");
                        i.append(t)
                    }, i.prototype.sort = function(t) {
                        var e = this.options.get("sorter");
                        return e(t)
                    }, i.prototype.highlightFirstItem = function() {
                        var t = this.$results.find(".select2-results__option[aria-selected]"),
                            e = t.filter("[aria-selected=true]");
                        e.length > 0 ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible()
                    }, i.prototype.setClasses = function() {
                        var e = this;
                        this.data.current(function(i) {
                            var s = t.map(i, function(t) {
                                    return t.id.toString()
                                }),
                                n = e.$results.find(".select2-results__option[aria-selected]");
                            n.each(function() {
                                var e = t(this),
                                    i = t.data(this, "data"),
                                    n = "" + i.id;
                                null != i.element && i.element.selected || null == i.element && t.inArray(n, s) > -1 ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                            })
                        })
                    }, i.prototype.showLoading = function(t) {
                        this.hideLoading();
                        var e = this.options.get("translations").get("searching"),
                            i = {
                                disabled: !0,
                                loading: !0,
                                text: e(t)
                            },
                            s = this.option(i);
                        s.className += " loading-results", this.$results.prepend(s)
                    }, i.prototype.hideLoading = function() {
                        this.$results.find(".loading-results").remove()
                    }, i.prototype.option = function(e) {
                        var i = document.createElement("li");
                        i.className = "select2-results__option";
                        var s = {
                            role: "treeitem",
                            "aria-selected": "false"
                        };
                        e.disabled && (delete s["aria-selected"], s["aria-disabled"] = "true"), null == e.id && delete s["aria-selected"], null != e._resultId && (i.id = e._resultId), e.title && (i.title = e.title), e.children && (s.role = "group", s["aria-label"] = e.text, delete s["aria-selected"]);
                        for (var n in s) {
                            var o = s[n];
                            i.setAttribute(n, o)
                        }
                        if (e.children) {
                            var a = t(i),
                                r = document.createElement("strong");
                            r.className = "select2-results__group", t(r), this.template(e, r);
                            for (var l = [], d = 0; d < e.children.length; d++) {
                                var c = e.children[d],
                                    h = this.option(c);
                                l.push(h)
                            }
                            var p = t("<ul></ul>", {
                                "class": "select2-results__options select2-results__options--nested"
                            });
                            p.append(l), a.append(r), a.append(p)
                        } else this.template(e, i);
                        return t.data(i, "data", e), i
                    }, i.prototype.bind = function(e, i) {
                        var s = this,
                            n = e.id + "-results";
                        this.$results.attr("id", n), e.on("results:all", function(t) {
                            s.clear(), s.append(t.data), e.isOpen() && (s.setClasses(), s.highlightFirstItem())
                        }), e.on("results:append", function(t) {
                            s.append(t.data), e.isOpen() && s.setClasses()
                        }), e.on("query", function(t) {
                            s.hideMessages(), s.showLoading(t)
                        }), e.on("select", function() {
                            e.isOpen() && (s.setClasses(), s.highlightFirstItem())
                        }), e.on("unselect", function() {
                            e.isOpen() && (s.setClasses(), s.highlightFirstItem())
                        }), e.on("open", function() {
                            s.$results.attr("aria-expanded", "true"), s.$results.attr("aria-hidden", "false"), s.setClasses(), s.ensureHighlightVisible()
                        }), e.on("close", function() {
                            s.$results.attr("aria-expanded", "false"), s.$results.attr("aria-hidden", "true"), s.$results.removeAttr("aria-activedescendant")
                        }), e.on("results:toggle", function() {
                            var t = s.getHighlightedResults();
                            0 !== t.length && t.trigger("mouseup")
                        }), e.on("results:select", function() {
                            var t = s.getHighlightedResults();
                            if (0 !== t.length) {
                                var e = t.data("data");
                                "true" == t.attr("aria-selected") ? s.trigger("close", {}) : s.trigger("select", {
                                    data: e
                                })
                            }
                        }), e.on("results:previous", function() {
                            var t = s.getHighlightedResults(),
                                e = s.$results.find("[aria-selected]"),
                                i = e.index(t);
                            if (0 !== i) {
                                var n = i - 1;
                                0 === t.length && (n = 0);
                                var o = e.eq(n);
                                o.trigger("mouseenter");
                                var a = s.$results.offset().top,
                                    r = o.offset().top,
                                    l = s.$results.scrollTop() + (r - a);
                                0 === n ? s.$results.scrollTop(0) : 0 > r - a && s.$results.scrollTop(l)
                            }
                        }), e.on("results:next", function() {
                            var t = s.getHighlightedResults(),
                                e = s.$results.find("[aria-selected]"),
                                i = e.index(t),
                                n = i + 1;
                            if (!(n >= e.length)) {
                                var o = e.eq(n);
                                o.trigger("mouseenter");
                                var a = s.$results.offset().top + s.$results.outerHeight(!1),
                                    r = o.offset().top + o.outerHeight(!1),
                                    l = s.$results.scrollTop() + r - a;
                                0 === n ? s.$results.scrollTop(0) : r > a && s.$results.scrollTop(l)
                            }
                        }), e.on("results:focus", function(t) {
                            t.element.addClass("select2-results__option--highlighted")
                        }), e.on("results:message", function(t) {
                            s.displayMessage(t)
                        }), t.fn.mousewheel && this.$results.on("mousewheel", function(t) {
                            var e = s.$results.scrollTop(),
                                i = s.$results.get(0).scrollHeight - e + t.deltaY,
                                n = t.deltaY > 0 && e - t.deltaY <= 0,
                                o = t.deltaY < 0 && i <= s.$results.height();
                            n ? (s.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : o && (s.$results.scrollTop(s.$results.get(0).scrollHeight - s.$results.height()), t.preventDefault(), t.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(e) {
                            var i = t(this),
                                n = i.data("data");
                            return "true" === i.attr("aria-selected") ? void(s.options.get("multiple") ? s.trigger("unselect", {
                                originalEvent: e,
                                data: n
                            }) : s.trigger("close", {})) : void s.trigger("select", {
                                originalEvent: e,
                                data: n
                            })
                        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(e) {
                            var i = t(this).data("data");
                            s.getHighlightedResults().removeClass("select2-results__option--highlighted"), s.trigger("results:focus", {
                                data: i,
                                element: t(this)
                            })
                        })
                    }, i.prototype.getHighlightedResults = function() {
                        var t = this.$results.find(".select2-results__option--highlighted");
                        return t
                    }, i.prototype.destroy = function() {
                        this.$results.remove()
                    }, i.prototype.ensureHighlightVisible = function() {
                        var t = this.getHighlightedResults();
                        if (0 !== t.length) {
                            var e = this.$results.find("[aria-selected]"),
                                i = e.index(t),
                                s = this.$results.offset().top,
                                n = t.offset().top,
                                o = this.$results.scrollTop() + (n - s),
                                a = n - s;
                            o -= 2 * t.outerHeight(!1), 2 >= i ? this.$results.scrollTop(0) : (a > this.$results.outerHeight() || 0 > a) && this.$results.scrollTop(o)
                        }
                    }, i.prototype.template = function(e, i) {
                        var s = this.options.get("templateResult"),
                            n = this.options.get("escapeMarkup"),
                            o = s(e, i);
                        null == o ? i.style.display = "none" : "string" == typeof o ? i.innerHTML = n(o) : t(i).append(o)
                    }, i
                }), e.define("select2/keys", [], function() {
                    var t = {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    };
                    return t
                }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(t, e, i) {
                    function s(t, e) {
                        this.$element = t, this.options = e, s.__super__.constructor.call(this)
                    }
                    return e.Extend(s, e.Observable), s.prototype.render = function() {
                        var e = t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e, e
                    }, s.prototype.bind = function(t, e) {
                        var s = this,
                            n = (t.id + "-container", t.id + "-results");
                        this.container = t, this.$selection.on("focus", function(t) {
                            s.trigger("focus", t)
                        }), this.$selection.on("blur", function(t) {
                            s._handleBlur(t)
                        }), this.$selection.on("keydown", function(t) {
                            s.trigger("keypress", t), t.which === i.SPACE && t.preventDefault()
                        }), t.on("results:focus", function(t) {
                            s.$selection.attr("aria-activedescendant", t.data._resultId)
                        }), t.on("selection:update", function(t) {
                            s.update(t.data)
                        }), t.on("open", function() {
                            s.$selection.attr("aria-expanded", "true"), s.$selection.attr("aria-owns", n), s._attachCloseHandler(t)
                        }), t.on("close", function() {
                            s.$selection.attr("aria-expanded", "false"), s.$selection.removeAttr("aria-activedescendant"), s.$selection.removeAttr("aria-owns"), s.$selection.focus(), s._detachCloseHandler(t)
                        }), t.on("enable", function() {
                            s.$selection.attr("tabindex", s._tabindex)
                        }), t.on("disable", function() {
                            s.$selection.attr("tabindex", "-1")
                        })
                    }, s.prototype._handleBlur = function(e) {
                        var i = this;
                        window.setTimeout(function() {
                            document.activeElement == i.$selection[0] || t.contains(i.$selection[0], document.activeElement) || i.trigger("blur", e)
                        }, 1)
                    }, s.prototype._attachCloseHandler = function(e) {
                        t(document.body).on("mousedown.select2." + e.id, function(e) {
                            var i = t(e.target),
                                s = i.closest(".select2"),
                                n = t(".select2.select2-container--open");
                            n.each(function() {
                                var e = t(this);
                                if (this != s[0]) {
                                    var i = e.data("element");
                                    i.select2("close")
                                }
                            })
                        })
                    }, s.prototype._detachCloseHandler = function(e) {
                        t(document.body).off("mousedown.select2." + e.id)
                    }, s.prototype.position = function(t, e) {
                        var i = e.find(".selection");
                        i.append(t)
                    }, s.prototype.destroy = function() {
                        this._detachCloseHandler(this.container)
                    }, s.prototype.update = function(t) {
                        throw new Error("The `update` method must be defined in child classes.")
                    }, s
                }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(t, e, i, s) {
                    function n() {
                        n.__super__.constructor.apply(this, arguments)
                    }
                    return i.Extend(n, e), n.prototype.render = function() {
                        var t = n.__super__.render.call(this);
                        return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
                    }, n.prototype.bind = function(t, e) {
                        var i = this;
                        n.__super__.bind.apply(this, arguments);
                        var s = t.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", s), this.$selection.attr("aria-labelledby", s), this.$selection.on("mousedown", function(t) {
                            1 === t.which && i.trigger("toggle", {
                                originalEvent: t
                            })
                        }), this.$selection.on("focus", function(t) {}), this.$selection.on("blur", function(t) {}), t.on("focus", function(e) {
                            t.isOpen() || i.$selection.focus()
                        }), t.on("selection:update", function(t) {
                            i.update(t.data)
                        })
                    }, n.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, n.prototype.display = function(t, e) {
                        var i = this.options.get("templateSelection"),
                            s = this.options.get("escapeMarkup");
                        return s(i(t, e))
                    }, n.prototype.selectionContainer = function() {
                        return t("<span></span>")
                    }, n.prototype.update = function(t) {
                        if (0 === t.length) return void this.clear();
                        var e = t[0],
                            i = this.$selection.find(".select2-selection__rendered"),
                            s = this.display(e, i);
                        i.empty().append(s), i.prop("title", e.title || e.text)
                    }, n
                }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(t, e, i) {
                    function s(t, e) {
                        s.__super__.constructor.apply(this, arguments)
                    }
                    return i.Extend(s, e), s.prototype.render = function() {
                        var t = s.__super__.render.call(this);
                        return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
                    }, s.prototype.bind = function(e, i) {
                        var n = this;
                        s.__super__.bind.apply(this, arguments), this.$selection.on("click", function(t) {
                            n.trigger("toggle", {
                                originalEvent: t
                            })
                        }), this.$selection.on("click", ".select2-selection__choice__remove", function(e) {
                            if (!n.options.get("disabled")) {
                                var i = t(this),
                                    s = i.parent(),
                                    o = s.data("data");
                                n.trigger("unselect", {
                                    originalEvent: e,
                                    data: o
                                })
                            }
                        })
                    }, s.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, s.prototype.display = function(t, e) {
                        var i = this.options.get("templateSelection"),
                            s = this.options.get("escapeMarkup");
                        return s(i(t, e))
                    }, s.prototype.selectionContainer = function() {
                        var e = t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                        return e
                    }, s.prototype.update = function(t) {
                        if (this.clear(), 0 !== t.length) {
                            for (var e = [], s = 0; s < t.length; s++) {
                                var n = t[s],
                                    o = this.selectionContainer(),
                                    a = this.display(n, o);
                                o.append(a), o.prop("title", n.title || n.text), o.data("data", n), e.push(o)
                            }
                            var r = this.$selection.find(".select2-selection__rendered");
                            i.appendMany(r, e)
                        }
                    }, s
                }), e.define("select2/selection/placeholder", ["../utils"], function(t) {
                    function e(t, e, i) {
                        this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i)
                    }
                    return e.prototype.normalizePlaceholder = function(t, e) {
                        return "string" == typeof e && (e = {
                            id: "",
                            text: e
                        }), e
                    }, e.prototype.createPlaceholder = function(t, e) {
                        var i = this.selectionContainer();
                        return i.html(this.display(e)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i
                    }, e.prototype.update = function(t, e) {
                        var i = 1 == e.length && e[0].id != this.placeholder.id,
                            s = e.length > 1;
                        if (s || i) return t.call(this, e);
                        this.clear();
                        var n = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(n)
                    }, e
                }), e.define("select2/selection/allowClear", ["jquery", "../keys"], function(t, e) {
                    function i() {}
                    return i.prototype.bind = function(t, e, i) {
                        var s = this;
                        t.call(this, e, i), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(t) {
                            s._handleClear(t)
                        }), e.on("keypress", function(t) {
                            s._handleKeyboardClear(t, e)
                        })
                    }, i.prototype._handleClear = function(t, e) {
                        if (!this.options.get("disabled")) {
                            var i = this.$selection.find(".select2-selection__clear");
                            if (0 !== i.length) {
                                e.stopPropagation();
                                for (var s = i.data("data"), n = 0; n < s.length; n++) {
                                    var o = {
                                        data: s[n]
                                    };
                                    if (this.trigger("unselect", o), o.prevented) return
                                }
                                this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, i.prototype._handleKeyboardClear = function(t, i, s) {
                        s.isOpen() || (i.which == e.DELETE || i.which == e.BACKSPACE) && this._handleClear(i)
                    }, i.prototype.update = function(e, i) {
                        if (e.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                            var s = t('<span class="select2-selection__clear">&times;</span>');
                            s.data("data", i), this.$selection.find(".select2-selection__rendered").prepend(s)
                        }
                    }, i
                }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(t, e, i) {
                    function s(t, e, i) {
                        t.call(this, e, i)
                    }
                    return s.prototype.render = function(e) {
                        var i = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = i, this.$search = i.find("input");
                        var s = e.call(this);
                        return this._transferTabIndex(), s
                    }, s.prototype.bind = function(t, e, s) {
                        var n = this;
                        t.call(this, e, s), e.on("open", function() {
                            n.$search.trigger("focus")
                        }), e.on("close", function() {
                            n.$search.val(""), n.$search.removeAttr("aria-activedescendant"), n.$search.trigger("focus")
                        }), e.on("enable", function() {
                            n.$search.prop("disabled", !1), n._transferTabIndex()
                        }), e.on("disable", function() {
                            n.$search.prop("disabled", !0)
                        }), e.on("focus", function(t) {
                            n.$search.trigger("focus")
                        }), e.on("results:focus", function(t) {
                            n.$search.attr("aria-activedescendant", t.id)
                        }), this.$selection.on("focusin", ".select2-search--inline", function(t) {
                            n.trigger("focus", t)
                        }), this.$selection.on("focusout", ".select2-search--inline", function(t) {
                            n._handleBlur(t)
                        }), this.$selection.on("keydown", ".select2-search--inline", function(t) {
                            t.stopPropagation(), n.trigger("keypress", t), n._keyUpPrevented = t.isDefaultPrevented();
                            var e = t.which;
                            if (e === i.BACKSPACE && "" === n.$search.val()) {
                                var s = n.$searchContainer.prev(".select2-selection__choice");
                                if (s.length > 0) {
                                    var o = s.data("data");
                                    n.searchRemoveChoice(o), t.preventDefault()
                                }
                            }
                        });
                        var o = document.documentMode,
                            a = o && 11 >= o;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function(t) {
                            return a ? void n.$selection.off("input.search input.searchcheck") : void n.$selection.off("keyup.search")
                        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(t) {
                            if (a && "input" === t.type) return void n.$selection.off("input.search input.searchcheck");
                            var e = t.which;
                            e != i.SHIFT && e != i.CTRL && e != i.ALT && e != i.TAB && n.handleSearch(t)
                        })
                    }, s.prototype._transferTabIndex = function(t) {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                    }, s.prototype.createPlaceholder = function(t, e) {
                        this.$search.attr("placeholder", e.text)
                    }, s.prototype.update = function(t, e) {
                        var i = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), i && this.$search.focus()
                    }, s.prototype.handleSearch = function() {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var t = this.$search.val();
                            this.trigger("query", {
                                term: t
                            })
                        }
                        this._keyUpPrevented = !1
                    }, s.prototype.searchRemoveChoice = function(t, e) {
                        this.trigger("unselect", {
                            data: e
                        }), this.$search.val(e.text), this.handleSearch()
                    }, s.prototype.resizeSearch = function() {
                        this.$search.css("width", "25px");
                        var t = "";
                        if ("" !== this.$search.attr("placeholder")) t = this.$selection.find(".select2-selection__rendered").innerWidth();
                        else {
                            var e = this.$search.val().length + 1;
                            t = .75 * e + "em"
                        }
                        this.$search.css("width", t)
                    }, s
                }), e.define("select2/selection/eventRelay", ["jquery"], function(t) {
                    function e() {}
                    return e.prototype.bind = function(e, i, s) {
                        var n = this,
                            o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            a = ["opening", "closing", "selecting", "unselecting"];
                        e.call(this, i, s), i.on("*", function(e, i) {
                            if (-1 !== t.inArray(e, o)) {
                                i = i || {};
                                var s = t.Event("select2:" + e, {
                                    params: i
                                });
                                n.$element.trigger(s), -1 !== t.inArray(e, a) && (i.prevented = s.isDefaultPrevented())
                            }
                        })
                    }, e
                }), e.define("select2/translation", ["jquery", "require"], function(t, e) {
                    function i(t) {
                        this.dict = t || {}
                    }
                    return i.prototype.all = function() {
                        return this.dict
                    }, i.prototype.get = function(t) {
                        return this.dict[t]
                    }, i.prototype.extend = function(e) {
                        this.dict = t.extend({}, e.all(), this.dict)
                    }, i._cache = {}, i.loadPath = function(t) {
                        if (!(t in i._cache)) {
                            var s = e(t);
                            i._cache[t] = s
                        }
                        return new i(i._cache[t])
                    }, i
                }), e.define("select2/diacritics", [], function() {
                    var t = {
                        "?": "A",
                        A: "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        A: "A",
                        A: "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        A: "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        A: "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        "?": "A",
                        A: "A",
                        "?": "A",
                        "?": "A",
                        "?": "AA",
                        "?": "AE",
                        "?": "AE",
                        "?": "AE",
                        "?": "AO",
                        "?": "AU",
                        "?": "AV",
                        "?": "AV",
                        "?": "AY",
                        "?": "B",
                        B: "B",
                        "?": "B",
                        "?": "B",
                        "?": "B",
                        "?": "B",
                        "?": "B",
                        "?": "B",
                        "?": "C",
                        C: "C",
                        C: "C",
                        C: "C",
                        C: "C",
                        C: "C",
                        "?": "C",
                        "?": "C",
                        "?": "C",
                        "?": "C",
                        "?": "C",
                        "?": "D",
                        D: "D",
                        "?": "D",
                        D: "D",
                        "?": "D",
                        "?": "D",
                        "?": "D",
                        "?": "D",
                        "?": "D",
                        "?": "D",
                        "?": "D",
                        "?": "D",
                        "?": "D",
                        "?": "DZ",
                        "?": "DZ",
                        "?": "Dz",
                        "?": "Dz",
                        "?": "E",
                        E: "E",
                        "?": "E",
                        "?": "E",
                        "?": "E",
                        "?": "E",
                        "?": "E",
                        "?": "E",
                        "?": "E",
                        "?": "E",
                        E: "E",
                        "?": "E",
                        "?": "E",
                        E: "E",
                        E: "E",
                        "?": "E",
                        "?": "E",
                        E: "E",
                        "?": "E",
                        "?": "E",
                        "?": "E",
                        "?": "E",
                        "?": "E",
                        "?": "E",
                        E: "E",
                        "?": "E",
                        "?": "E",
                        "?": "E",
                        "?": "E",
                        "?": "F",
                        F: "F",
                        "?": "F",
                        "?": "F",
                        "?": "F",
                        "?": "G",
                        G: "G",
                        "?": "G",
                        G: "G",
                        "?": "G",
                        G: "G",
                        G: "G",
                        G: "G",
                        G: "G",
                        G: "G",
                        "?": "G",
                        "?": "G",
                        "?": "G",
                        "?": "G",
                        "?": "H",
                        H: "H",
                        H: "H",
                        "?": "H",
                        "?": "H",
                        "?": "H",
                        "?": "H",
                        "?": "H",
                        "?": "H",
                        H: "H",
                        "?": "H",
                        "?": "H",
                        "?": "H",
                        "?": "I",
                        I: "I",
                        "?": "I",
                        "?": "I",
                        "?": "I",
                        I: "I",
                        I: "I",
                        I: "I",
                        I: "I",
                        "?": "I",
                        "?": "I",
                        "?": "I",
                        I: "I",
                        "?": "I",
                        "?": "I",
                        "?": "I",
                        I: "I",
                        "?": "I",
                        I: "I",
                        "?": "J",
                        J: "J",
                        J: "J",
                        "?": "J",
                        "?": "K",
                        K: "K",
                        "?": "K",
                        K: "K",
                        "?": "K",
                        K: "K",
                        "?": "K",
                        "?": "K",
                        "?": "K",
                        "?": "K",
                        "?": "K",
                        "?": "K",
                        "?": "K",
                        "?": "L",
                        L: "L",
                        "?": "L",
                        L: "L",
                        L: "L",
                        "?": "L",
                        "?": "L",
                        L: "L",
                        "?": "L",
                        "?": "L",
                        L: "L",
                        "?": "L",
                        "?": "L",
                        "?": "L",
                        "?": "L",
                        "?": "L",
                        "?": "L",
                        "?": "LJ",
                        "?": "Lj",
                        "?": "M",
                        M: "M",
                        "?": "M",
                        "?": "M",
                        "?": "M",
                        "?": "M",
                        "?": "M",
                        "?": "N",
                        N: "N",
                        "?": "N",
                        N: "N",
                        "?": "N",
                        "?": "N",
                        N: "N",
                        "?": "N",
                        N: "N",
                        "?": "N",
                        "?": "N",
                        "?": "N",
                        "?": "N",
                        "?": "N",
                        "?": "N",
                        "?": "NJ",
                        "?": "Nj",
                        "?": "O",
                        O: "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        O: "O",
                        "?": "O",
                        "?": "O",
                        O: "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        O: "O",
                        O: "O",
                        "?": "O",
                        "?": "O",
                        O: "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        O: "O",
                        O: "O",
                        "?": "O",
                        "?": "O",
                        "?": "O",
                        O: "O",
                        "?": "O",
                        "?": "O",
                        "?": "OI",
                        "?": "OO",
                        "?": "OU",
                        "?": "P",
                        P: "P",
                        "?": "P",
                        "?": "P",
                        "?": "P",
                        "?": "P",
                        "?": "P",
                        "?": "P",
                        "?": "P",
                        "?": "Q",
                        Q: "Q",
                        "?": "Q",
                        "?": "Q",
                        "?": "Q",
                        "?": "R",
                        R: "R",
                        R: "R",
                        "?": "R",
                        R: "R",
                        "?": "R",
                        "?": "R",
                        "?": "R",
                        "?": "R",
                        R: "R",
                        "?": "R",
                        "?": "R",
                        "?": "R",
                        "?": "R",
                        "?": "R",
                        "?": "R",
                        "?": "S",
                        S: "S",
                        "?": "S",
                        S: "S",
                        "?": "S",
                        S: "S",
                        "?": "S",
                        "?": "S",
                        "?": "S",
                        "?": "S",
                        "?": "S",
                        "?": "S",
                        S: "S",
                        "?": "S",
                        "?": "S",
                        "?": "S",
                        "?": "T",
                        T: "T",
                        "?": "T",
                        T: "T",
                        "?": "T",
                        "?": "T",
                        T: "T",
                        "?": "T",
                        "?": "T",
                        T: "T",
                        "?": "T",
                        T: "T",
                        "?": "T",
                        "?": "T",
                        "?": "TZ",
                        "?": "U",
                        U: "U",
                        "?": "U",
                        "?": "U",
                        "?": "U",
                        U: "U",
                        "?": "U",
                        U: "U",
                        "?": "U",
                        U: "U",
                        "?": "U",
                        U: "U",
                        U: "U",
                        U: "U",
                        U: "U",
                        "?": "U",
                        U: "U",
                        U: "U",
                        U: "U",
                        "?": "U",
                        "?": "U",
                        U: "U",
                        "?": "U",
                        "?": "U",
                        "?": "U",
                        "?": "U",
                        "?": "U",
                        "?": "U",
                        "?": "U",
                        U: "U",
                        "?": "U",
                        "?": "U",
                        "?": "U",
                        "?": "V",
                        V: "V",
                        "?": "V",
                        "?": "V",
                        "?": "V",
                        "?": "V",
                        "?": "V",
                        "?": "VY",
                        "?": "W",
                        W: "W",
                        "?": "W",
                        "?": "W",
                        W: "W",
                        "?": "W",
                        "?": "W",
                        "?": "W",
                        "?": "W",
                        "?": "X",
                        X: "X",
                        "?": "X",
                        "?": "X",
                        "?": "Y",
                        Y: "Y",
                        "?": "Y",
                        "?": "Y",
                        Y: "Y",
                        "?": "Y",
                        "?": "Y",
                        "?": "Y",
                        "?": "Y",
                        "?": "Y",
                        "?": "Y",
                        "?": "Y",
                        "?": "Y",
                        "?": "Y",
                        "?": "Z",
                        Z: "Z",
                        Z: "Z",
                        "?": "Z",
                        Z: "Z",
                        "?": "Z",
                        "?": "Z",
                        "?": "Z",
                        "?": "Z",
                        "?": "Z",
                        "?": "Z",
                        "?": "Z",
                        "?": "Z",
                        "?": "a",
                        a: "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        a: "a",
                        a: "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        a: "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        a: "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        "?": "a",
                        a: "a",
                        "?": "a",
                        "?": "a",
                        "?": "aa",
                        "?": "ae",
                        "?": "ae",
                        "?": "ae",
                        "?": "ao",
                        "?": "au",
                        "?": "av",
                        "?": "av",
                        "?": "ay",
                        "?": "b",
                        b: "b",
                        "?": "b",
                        "?": "b",
                        "?": "b",
                        b: "b",
                        "?": "b",
                        "?": "b",
                        "?": "c",
                        c: "c",
                        c: "c",
                        c: "c",
                        c: "c",
                        c: "c",
                        "?": "c",
                        "?": "c",
                        "?": "c",
                        "?": "c",
                        "?": "c",
                        "?": "c",
                        "?": "d",
                        d: "d",
                        "?": "d",
                        d: "d",
                        "?": "d",
                        "?": "d",
                        "?": "d",
                        "?": "d",
                        d: "d",
                        "?": "d",
                        "?": "d",
                        "?": "d",
                        "?": "d",
                        "?": "dz",
                        "?": "dz",
                        "?": "e",
                        e: "e",
                        "?": "e",
                        "?": "e",
                        "?": "e",
                        "?": "e",
                        "?": "e",
                        "?": "e",
                        "?": "e",
                        "?": "e",
                        e: "e",
                        "?": "e",
                        "?": "e",
                        e: "e",
                        e: "e",
                        "?": "e",
                        "?": "e",
                        e: "e",
                        "?": "e",
                        "?": "e",
                        "?": "e",
                        "?": "e",
                        "?": "e",
                        "?": "e",
                        e: "e",
                        "?": "e",
                        "?": "e",
                        "?": "e",
                        "?": "e",
                        "?": "e",
                        "?": "f",
                        f: "f",
                        "?": "f",
                        "?": "f",
                        "?": "f",
                        "?": "g",
                        g: "g",
                        "?": "g",
                        g: "g",
                        "?": "g",
                        g: "g",
                        g: "g",
                        g: "g",
                        g: "g",
                        g: "g",
                        "?": "g",
                        "?": "g",
                        "?": "g",
                        "?": "g",
                        "?": "h",
                        h: "h",
                        h: "h",
                        "?": "h",
                        "?": "h",
                        "?": "h",
                        "?": "h",
                        "?": "h",
                        "?": "h",
                        "?": "h",
                        h: "h",
                        "?": "h",
                        "?": "h",
                        "?": "h",
                        "?": "hv",
                        "?": "i",
                        i: "i",
                        "?": "i",
                        "?": "i",
                        "?": "i",
                        i: "i",
                        i: "i",
                        i: "i",
                        "?": "i",
                        "?": "i",
                        "?": "i",
                        i: "i",
                        "?": "i",
                        "?": "i",
                        "?": "i",
                        i: "i",
                        "?": "i",
                        "?": "i",
                        i: "i",
                        "?": "j",
                        j: "j",
                        j: "j",
                        j: "j",
                        "?": "j",
                        "?": "k",
                        k: "k",
                        "?": "k",
                        k: "k",
                        "?": "k",
                        k: "k",
                        "?": "k",
                        "?": "k",
                        "?": "k",
                        "?": "k",
                        "?": "k",
                        "?": "k",
                        "?": "k",
                        "?": "l",
                        l: "l",
                        "?": "l",
                        l: "l",
                        l: "l",
                        "?": "l",
                        "?": "l",
                        l: "l",
                        "?": "l",
                        "?": "l",
                        "?": "l",
                        l: "l",
                        l: "l",
                        "?": "l",
                        "?": "l",
                        "?": "l",
                        "?": "l",
                        "?": "l",
                        "?": "lj",
                        "?": "m",
                        m: "m",
                        "?": "m",
                        "?": "m",
                        "?": "m",
                        "?": "m",
                        "?": "m",
                        "?": "n",
                        n: "n",
                        "?": "n",
                        n: "n",
                        "?": "n",
                        "?": "n",
                        n: "n",
                        "?": "n",
                        n: "n",
                        "?": "n",
                        "?": "n",
                        "?": "n",
                        "?": "n",
                        "?": "n",
                        "?": "n",
                        "?": "n",
                        "?": "nj",
                        "?": "o",
                        o: "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        o: "o",
                        "?": "o",
                        "?": "o",
                        o: "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        o: "o",
                        o: "o",
                        "?": "o",
                        "?": "o",
                        o: "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        o: "o",
                        o: "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "o",
                        "?": "oi",
                        "?": "ou",
                        "?": "oo",
                        "?": "p",
                        p: "p",
                        "?": "p",
                        "?": "p",
                        "?": "p",
                        "?": "p",
                        "?": "p",
                        "?": "p",
                        "?": "p",
                        "?": "q",
                        q: "q",
                        "?": "q",
                        "?": "q",
                        "?": "q",
                        "?": "r",
                        r: "r",
                        r: "r",
                        "?": "r",
                        r: "r",
                        "?": "r",
                        "?": "r",
                        "?": "r",
                        "?": "r",
                        r: "r",
                        "?": "r",
                        "?": "r",
                        "?": "r",
                        "?": "r",
                        "?": "r",
                        "?": "r",
                        "?": "s",
                        s: "s",
                        "?": "s",
                        s: "s",
                        "?": "s",
                        s: "s",
                        "?": "s",
                        "?": "s",
                        "?": "s",
                        "?": "s",
                        "?": "s",
                        "?": "s",
                        s: "s",
                        "?": "s",
                        "?": "s",
                        "?": "s",
                        "?": "s",
                        "?": "t",
                        t: "t",
                        "?": "t",
                        "?": "t",
                        t: "t",
                        "?": "t",
                        "?": "t",
                        t: "t",
                        "?": "t",
                        "?": "t",
                        t: "t",
                        "?": "t",
                        "?": "t",
                        "?": "t",
                        "?": "t",
                        "?": "tz",
                        "?": "u",
                        u: "u",
                        "?": "u",
                        "?": "u",
                        "?": "u",
                        u: "u",
                        "?": "u",
                        u: "u",
                        "?": "u",
                        u: "u",
                        "?": "u",
                        u: "u",
                        u: "u",
                        u: "u",
                        u: "u",
                        "?": "u",
                        u: "u",
                        u: "u",
                        u: "u",
                        "?": "u",
                        "?": "u",
                        u: "u",
                        "?": "u",
                        "?": "u",
                        "?": "u",
                        "?": "u",
                        "?": "u",
                        "?": "u",
                        "?": "u",
                        u: "u",
                        "?": "u",
                        "?": "u",
                        "?": "u",
                        "?": "v",
                        v: "v",
                        "?": "v",
                        "?": "v",
                        "?": "v",
                        "?": "v",
                        "?": "v",
                        "?": "vy",
                        "?": "w",
                        w: "w",
                        "?": "w",
                        "?": "w",
                        w: "w",
                        "?": "w",
                        "?": "w",
                        "?": "w",
                        "?": "w",
                        "?": "w",
                        "?": "x",
                        x: "x",
                        "?": "x",
                        "?": "x",
                        "?": "y",
                        y: "y",
                        "?": "y",
                        "?": "y",
                        y: "y",
                        "?": "y",
                        "?": "y",
                        "?": "y",
                        "?": "y",
                        "?": "y",
                        "?": "y",
                        "?": "y",
                        "?": "y",
                        "?": "y",
                        "?": "y",
                        "?": "z",
                        z: "z",
                        z: "z",
                        "?": "z",
                        z: "z",
                        "?": "z",
                        "?": "z",
                        "?": "z",
                        z: "z",
                        "?": "z",
                        "?": "z",
                        "?": "z",
                        "?": "z",
                        "?": "?",
                        "?": "?",
                        "?": "?",
                        "?": "?",
                        "?": "?",
                        "?": "?",
                        "?": "?",
                        "?": "?",
                        "?": "O",
                        "?": "a",
                        "?": "e",
                        "?": "?",
                        "?": "?",
                        "?": "?",
                        "?": "?",
                        "?": "?",
                        "?": "?",
                        "?": "?",
                        "?": "?",
                        "?": "?",
                        "?": "s"
                    };
                    return t
                }), e.define("select2/data/base", ["../utils"], function(t) {
                    function e(t, i) {
                        e.__super__.constructor.call(this)
                    }
                    return t.Extend(e, t.Observable), e.prototype.current = function(t) {
                        throw new Error("The `current` method must be defined in child classes.")
                    }, e.prototype.query = function(t, e) {
                        throw new Error("The `query` method must be defined in child classes.")
                    }, e.prototype.bind = function(t, e) {}, e.prototype.destroy = function() {}, e.prototype.generateResultId = function(e, i) {
                        var s = e.id + "-result-";
                        return s += t.generateChars(4), s += null != i.id ? "-" + i.id.toString() : "-" + t.generateChars(4)
                    }, e
                }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function(t, e, i) {
                    function s(t, e) {
                        this.$element = t, this.options = e, s.__super__.constructor.call(this)
                    }
                    return e.Extend(s, t), s.prototype.current = function(t) {
                        var e = [],
                            s = this;
                        this.$element.find(":selected").each(function() {
                            var t = i(this),
                                n = s.item(t);
                            e.push(n)
                        }), t(e)
                    }, s.prototype.select = function(t) {
                        var e = this;
                        if (t.selected = !0, i(t.element).is("option")) return t.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function(s) {
                            var n = [];
                            t = [t], t.push.apply(t, s);
                            for (var o = 0; o < t.length; o++) {
                                var a = t[o].id; - 1 === i.inArray(a, n) && n.push(a)
                            }
                            e.$element.val(n), e.$element.trigger("change")
                        });
                        else {
                            var s = t.id;
                            this.$element.val(s), this.$element.trigger("change")
                        }
                    }, s.prototype.unselect = function(t) {
                        var e = this;
                        return this.$element.prop("multiple") ? (t.selected = !1, i(t.element).is("option") ? (t.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(s) {
                            for (var n = [], o = 0; o < s.length; o++) {
                                var a = s[o].id;
                                a !== t.id && -1 === i.inArray(a, n) && n.push(a)
                            }
                            e.$element.val(n), e.$element.trigger("change")
                        })) : void 0
                    }, s.prototype.bind = function(t, e) {
                        var i = this;
                        this.container = t, t.on("select", function(t) {
                            i.select(t.data)
                        }), t.on("unselect", function(t) {
                            i.unselect(t.data)
                        })
                    }, s.prototype.destroy = function() {
                        this.$element.find("*").each(function() {
                            i.removeData(this, "data")
                        })
                    }, s.prototype.query = function(t, e) {
                        var s = [],
                            n = this,
                            o = this.$element.children();
                        o.each(function() {
                            var e = i(this);
                            if (e.is("option") || e.is("optgroup")) {
                                var o = n.item(e),
                                    a = n.matches(t, o);
                                null !== a && s.push(a)
                            }
                        }), e({
                            results: s
                        })
                    }, s.prototype.addOptions = function(t) {
                        e.appendMany(this.$element, t)
                    }, s.prototype.option = function(t) {
                        var e;
                        t.children ? (e = document.createElement("optgroup"), e.label = t.text) : (e = document.createElement("option"), void 0 !== e.textContent ? e.textContent = t.text : e.innerText = t.text), t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title);
                        var s = i(e),
                            n = this._normalizeItem(t);
                        return n.element = e, i.data(e, "data", n), s
                    }, s.prototype.item = function(t) {
                        var e = {};
                        if (e = i.data(t[0], "data"), null != e) return e;
                        if (t.is("option")) e = {
                            id: t.val(),
                            text: t.text(),
                            disabled: t.prop("disabled"),
                            selected: t.prop("selected"),
                            title: t.prop("title")
                        };
                        else if (t.is("optgroup")) {
                            e = {
                                text: t.prop("label"),
                                children: [],
                                title: t.prop("title")
                            };
                            for (var s = t.children("option"), n = [], o = 0; o < s.length; o++) {
                                var a = i(s[o]),
                                    r = this.item(a);
                                n.push(r)
                            }
                            e.children = n
                        }
                        return e = this._normalizeItem(e), e.element = t[0], i.data(t[0], "data", e), e
                    }, s.prototype._normalizeItem = function(t) {
                        i.isPlainObject(t) || (t = {
                            id: t,
                            text: t
                        }), t = i.extend({}, {
                            text: ""
                        }, t);
                        var e = {
                            selected: !1,
                            disabled: !1
                        };
                        return null != t.id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), i.extend({}, e, t)
                    }, s.prototype.matches = function(t, e) {
                        var i = this.options.get("matcher");
                        return i(t, e)
                    }, s
                }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function(t, e, i) {
                    function s(t, e) {
                        var i = e.get("data") || [];
                        s.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(i))
                    }
                    return e.Extend(s, t), s.prototype.select = function(t) {
                        var e = this.$element.find("option").filter(function(e, i) {
                            return i.value == t.id.toString()
                        });
                        0 === e.length && (e = this.option(t), this.addOptions(e)), s.__super__.select.call(this, t)
                    }, s.prototype.convertToOptions = function(t) {
                        function s(t) {
                            return function() {
                                return i(this).val() == t.id
                            }
                        }
                        for (var n = this, o = this.$element.find("option"), a = o.map(function() {
                                return n.item(i(this)).id
                            }).get(), r = [], l = 0; l < t.length; l++) {
                            var d = this._normalizeItem(t[l]);
                            if (i.inArray(d.id, a) >= 0) {
                                var c = o.filter(s(d)),
                                    h = this.item(c),
                                    p = i.extend(!0, {}, d, h),
                                    u = this.option(p);
                                c.replaceWith(u)
                            } else {
                                var f = this.option(d);
                                if (d.children) {
                                    var m = this.convertToOptions(d.children);
                                    e.appendMany(f, m)
                                }
                                r.push(f)
                            }
                        }
                        return r
                    }, s
                }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(t, e, i) {
                    function s(t, e) {
                        this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), s.__super__.constructor.call(this, t, e)
                    }
                    return e.Extend(s, t), s.prototype._applyDefaults = function(t) {
                        var e = {
                            data: function(t) {
                                return i.extend({}, t, {
                                    q: t.term
                                })
                            },
                            transport: function(t, e, s) {
                                var n = i.ajax(t);
                                return n.then(e), n.fail(s), n
                            }
                        };
                        return i.extend({}, e, t, !0)
                    }, s.prototype.processResults = function(t) {
                        return t
                    }, s.prototype.query = function(t, e) {
                        function s() {
                            var s = o.transport(o, function(s) {
                                var o = n.processResults(s, t);
                                n.options.get("debug") && window.console && console.error && (o && o.results && i.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), e(o)
                            }, function() {
                                s.status && "0" === s.status || n.trigger("results:message", {
                                    message: "errorLoading"
                                })
                            });
                            n._request = s
                        }
                        var n = this;
                        null != this._request && (i.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var o = i.extend({
                            type: "GET"
                        }, this.ajaxOptions);
                        "function" == typeof o.url && (o.url = o.url.call(this.$element, t)), "function" == typeof o.data && (o.data = o.data.call(this.$element, t)), this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(s, this.ajaxOptions.delay)) : s()
                    }, s
                }), e.define("select2/data/tags", ["jquery"], function(t) {
                    function e(e, i, s) {
                        var n = s.get("tags"),
                            o = s.get("createTag");
                        void 0 !== o && (this.createTag = o);
                        var a = s.get("insertTag");
                        if (void 0 !== a && (this.insertTag = a), e.call(this, i, s), t.isArray(n))
                            for (var r = 0; r < n.length; r++) {
                                var l = n[r],
                                    d = this._normalizeItem(l),
                                    c = this.option(d);
                                this.$element.append(c)
                            }
                    }
                    return e.prototype.query = function(t, e, i) {
                        function s(t, o) {
                            for (var a = t.results, r = 0; r < a.length; r++) {
                                var l = a[r],
                                    d = null != l.children && !s({
                                        results: l.children
                                    }, !0),
                                    c = l.text === e.term;
                                if (c || d) return o ? !1 : (t.data = a, void i(t))
                            }
                            if (o) return !0;
                            var h = n.createTag(e);
                            if (null != h) {
                                var p = n.option(h);
                                p.attr("data-select2-tag", !0), n.addOptions([p]), n.insertTag(a, h)
                            }
                            t.results = a, i(t)
                        }
                        var n = this;
                        return this._removeOldTags(), null == e.term || null != e.page ? void t.call(this, e, i) : void t.call(this, e, s)
                    }, e.prototype.createTag = function(e, i) {
                        var s = t.trim(i.term);
                        return "" === s ? null : {
                            id: s,
                            text: s
                        }
                    }, e.prototype.insertTag = function(t, e, i) {
                        e.unshift(i)
                    }, e.prototype._removeOldTags = function(e) {
                        var i = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                        i.each(function() {
                            this.selected || t(this).remove()
                        })
                    }, e
                }), e.define("select2/data/tokenizer", ["jquery"], function(t) {
                    function e(t, e, i) {
                        var s = i.get("tokenizer");
                        void 0 !== s && (this.tokenizer = s), t.call(this, e, i)
                    }
                    return e.prototype.bind = function(t, e, i) {
                        t.call(this, e, i), this.$search = e.dropdown.$search || e.selection.$search || i.find(".select2-search__field")
                    }, e.prototype.query = function(e, i, s) {
                        function n(e) {
                            var i = a._normalizeItem(e),
                                s = a.$element.find("option").filter(function() {
                                    return t(this).val() === i.id
                                });
                            if (!s.length) {
                                var n = a.option(i);
                                n.attr("data-select2-tag", !0), a._removeOldTags(), a.addOptions([n])
                            }
                            o(i)
                        }

                        function o(t) {
                            a.trigger("select", {
                                data: t
                            })
                        }
                        var a = this;
                        i.term = i.term || "";
                        var r = this.tokenizer(i, this.options, n);
                        r.term !== i.term && (this.$search.length && (this.$search.val(r.term), this.$search.focus()), i.term = r.term), e.call(this, i, s)
                    }, e.prototype.tokenizer = function(e, i, s, n) {
                        for (var o = s.get("tokenSeparators") || [], a = i.term, r = 0, l = this.createTag || function(t) {
                                return {
                                    id: t.term,
                                    text: t.term
                                }
                            }; r < a.length;) {
                            var d = a[r];
                            if (-1 !== t.inArray(d, o)) {
                                var c = a.substr(0, r),
                                    h = t.extend({}, i, {
                                        term: c
                                    }),
                                    p = l(h);
                                null != p ? (n(p), a = a.substr(r + 1) || "", r = 0) : r++
                            } else r++
                        }
                        return {
                            term: a
                        }
                    }, e
                }), e.define("select2/data/minimumInputLength", [], function() {
                    function t(t, e, i) {
                        this.minimumInputLength = i.get("minimumInputLength"), t.call(this, e, i)
                    }
                    return t.prototype.query = function(t, e, i) {
                        return e.term = e.term || "", e.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: e.term,
                                params: e
                            }
                        }) : void t.call(this, e, i)
                    }, t
                }), e.define("select2/data/maximumInputLength", [], function() {
                    function t(t, e, i) {
                        this.maximumInputLength = i.get("maximumInputLength"), t.call(this, e, i)
                    }
                    return t.prototype.query = function(t, e, i) {
                        return e.term = e.term || "", this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: e.term,
                                params: e
                            }
                        }) : void t.call(this, e, i)
                    }, t
                }), e.define("select2/data/maximumSelectionLength", [], function() {
                    function t(t, e, i) {
                        this.maximumSelectionLength = i.get("maximumSelectionLength"), t.call(this, e, i)
                    }
                    return t.prototype.query = function(t, e, i) {
                        var s = this;
                        this.current(function(n) {
                            var o = null != n ? n.length : 0;
                            return s.maximumSelectionLength > 0 && o >= s.maximumSelectionLength ? void s.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: s.maximumSelectionLength
                                }
                            }) : void t.call(s, e, i)
                        })
                    }, t
                }), e.define("select2/dropdown", ["jquery", "./utils"], function(t, e) {
                    function i(t, e) {
                        this.$element = t, this.options = e, i.__super__.constructor.call(this)
                    }
                    return e.Extend(i, e.Observable), i.prototype.render = function() {
                        var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return e.attr("dir", this.options.get("dir")), this.$dropdown = e, e
                    }, i.prototype.bind = function() {}, i.prototype.position = function(t, e) {}, i.prototype.destroy = function() {
                        this.$dropdown.remove()
                    }, i
                }), e.define("select2/dropdown/search", ["jquery", "../utils"], function(t, e) {
                    function i() {}
                    return i.prototype.render = function(e) {
                        var i = e.call(this),
                            s = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                        return this.$searchContainer = s, this.$search = s.find("input"), i.prepend(s), i
                    }, i.prototype.bind = function(e, i, s) {
                        var n = this;
                        e.call(this, i, s), this.$search.on("keydown", function(t) {
                            n.trigger("keypress", t), n._keyUpPrevented = t.isDefaultPrevented()
                        }), this.$search.on("input", function(e) {
                            t(this).off("keyup")
                        }), this.$search.on("keyup input", function(t) {
                            n.handleSearch(t)
                        }), i.on("open", function() {
                            n.$search.attr("tabindex", 0), n.$search.focus(), window.setTimeout(function() {
                                n.$search.focus()
                            }, 0)
                        }), i.on("close", function() {
                            n.$search.attr("tabindex", -1), n.$search.val("")
                        }), i.on("focus", function() {
                            i.isOpen() && n.$search.focus()
                        }), i.on("results:all", function(t) {
                            if (null == t.query.term || "" === t.query.term) {
                                var e = n.showSearch(t);
                                e ? n.$searchContainer.removeClass("select2-search--hide") : n.$searchContainer.addClass("select2-search--hide")
                            }
                        })
                    }, i.prototype.handleSearch = function(t) {
                        if (!this._keyUpPrevented) {
                            var e = this.$search.val();
                            this.trigger("query", {
                                term: e
                            })
                        }
                        this._keyUpPrevented = !1
                    }, i.prototype.showSearch = function(t, e) {
                        return !0
                    }, i
                }), e.define("select2/dropdown/hidePlaceholder", [], function() {
                    function t(t, e, i, s) {
                        this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i, s)
                    }
                    return t.prototype.append = function(t, e) {
                        e.results = this.removePlaceholder(e.results), t.call(this, e)
                    }, t.prototype.normalizePlaceholder = function(t, e) {
                        return "string" == typeof e && (e = {
                            id: "",
                            text: e
                        }), e
                    }, t.prototype.removePlaceholder = function(t, e) {
                        for (var i = e.slice(0), s = e.length - 1; s >= 0; s--) {
                            var n = e[s];
                            this.placeholder.id === n.id && i.splice(s, 1)
                        }
                        return i
                    }, t
                }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function(t) {
                    function e(t, e, i, s) {
                        this.lastParams = {}, t.call(this, e, i, s), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                    }
                    return e.prototype.append = function(t, e) {
                        this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore)
                    }, e.prototype.bind = function(e, i, s) {
                        var n = this;
                        e.call(this, i, s), i.on("query", function(t) {
                            n.lastParams = t, n.loading = !0
                        }), i.on("query:append", function(t) {
                            n.lastParams = t, n.loading = !0
                        }), this.$results.on("scroll", function() {
                            var e = t.contains(document.documentElement, n.$loadingMore[0]);
                            if (!n.loading && e) {
                                var i = n.$results.offset().top + n.$results.outerHeight(!1),
                                    s = n.$loadingMore.offset().top + n.$loadingMore.outerHeight(!1);
                                i + 50 >= s && n.loadMore()
                            }
                        })
                    }, e.prototype.loadMore = function() {
                        this.loading = !0;
                        var e = t.extend({}, {
                            page: 1
                        }, this.lastParams);
                        e.page++, this.trigger("query:append", e)
                    }, e.prototype.showLoadingMore = function(t, e) {
                        return e.pagination && e.pagination.more
                    }, e.prototype.createLoadingMore = function() {
                        var e = t('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            i = this.options.get("translations").get("loadingMore");
                        return e.html(i(this.lastParams)), e
                    }, e
                }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(t, e) {
                    function i(e, i, s) {
                        this.$dropdownParent = s.get("dropdownParent") || t(document.body), e.call(this, i, s)
                    }
                    return i.prototype.bind = function(t, e, i) {
                        var s = this,
                            n = !1;
                        t.call(this, e, i), e.on("open", function() {
                            s._showDropdown(), s._attachPositioningHandler(e), n || (n = !0, e.on("results:all", function() {
                                s._positionDropdown(), s._resizeDropdown()
                            }), e.on("results:append", function() {
                                s._positionDropdown(), s._resizeDropdown()
                            }))
                        }), e.on("close", function() {
                            s._hideDropdown(), s._detachPositioningHandler(e)
                        }), this.$dropdownContainer.on("mousedown", function(t) {
                            t.stopPropagation()
                        })
                    }, i.prototype.destroy = function(t) {
                        t.call(this), this.$dropdownContainer.remove()
                    }, i.prototype.position = function(t, e, i) {
                        e.attr("class", i.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
                            position: "absolute",
                            top: -999999
                        }), this.$container = i
                    }, i.prototype.render = function(e) {
                        var i = t("<span></span>"),
                            s = e.call(this);
                        return i.append(s), this.$dropdownContainer = i, i
                    }, i.prototype._hideDropdown = function(t) {
                        this.$dropdownContainer.detach()
                    }, i.prototype._attachPositioningHandler = function(i, s) {
                        var n = this,
                            o = "scroll.select2." + s.id,
                            a = "resize.select2." + s.id,
                            r = "orientationchange.select2." + s.id,
                            l = this.$container.parents().filter(e.hasScroll);
                        l.each(function() {
                            t(this).data("select2-scroll-position", {
                                x: t(this).scrollLeft(),
                                y: t(this).scrollTop()
                            })
                        }), l.on(o, function(e) {
                            var i = t(this).data("select2-scroll-position");
                            t(this).scrollTop(i.y)
                        }), t(window).on(o + " " + a + " " + r, function(t) {
                            n._positionDropdown(), n._resizeDropdown()
                        })
                    }, i.prototype._detachPositioningHandler = function(i, s) {
                        var n = "scroll.select2." + s.id,
                            o = "resize.select2." + s.id,
                            a = "orientationchange.select2." + s.id,
                            r = this.$container.parents().filter(e.hasScroll);
                        r.off(n), t(window).off(n + " " + o + " " + a)
                    }, i.prototype._positionDropdown = function() {
                        var e = t(window),
                            i = this.$dropdown.hasClass("select2-dropdown--above"),
                            s = this.$dropdown.hasClass("select2-dropdown--below"),
                            n = null,
                            o = this.$container.offset();
                        o.bottom = o.top + this.$container.outerHeight(!1);
                        var a = {
                            height: this.$container.outerHeight(!1)
                        };
                        a.top = o.top, a.bottom = o.top + a.height;
                        var r = {
                                height: this.$dropdown.outerHeight(!1)
                            },
                            l = {
                                top: e.scrollTop(),
                                bottom: e.scrollTop() + e.height()
                            },
                            d = l.top < o.top - r.height,
                            c = l.bottom > o.bottom + r.height,
                            h = {
                                left: o.left,
                                top: a.bottom
                            },
                            p = this.$dropdownParent;
                        "static" === p.css("position") && (p = p.offsetParent());
                        var u = p.offset();
                        h.top -= u.top, h.left -= u.left, i || s || (n = "below"), c || !d || i ? !d && c && i && (n = "below") : n = "above", ("above" == n || i && "below" !== n) && (h.top = a.top - u.top - r.height), null != n && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + n), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + n)), this.$dropdownContainer.css(h)
                    }, i.prototype._resizeDropdown = function() {
                        var t = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t)
                    }, i.prototype._showDropdown = function(t) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                    }, i
                }), e.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function t(e) {
                        for (var i = 0, s = 0; s < e.length; s++) {
                            var n = e[s];
                            n.children ? i += t(n.children) : i++
                        }
                        return i
                    }

                    function e(t, e, i, s) {
                        this.minimumResultsForSearch = i.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, i, s)
                    }
                    return e.prototype.showSearch = function(e, i) {
                        return t(i.data.results) < this.minimumResultsForSearch ? !1 : e.call(this, i)
                    }, e
                }), e.define("select2/dropdown/selectOnClose", [], function() {
                    function t() {}
                    return t.prototype.bind = function(t, e, i) {
                        var s = this;
                        t.call(this, e, i), e.on("close", function(t) {
                            s._handleSelectOnClose(t)
                        })
                    }, t.prototype._handleSelectOnClose = function(t, e) {
                        if (e && null != e.originalSelect2Event) {
                            var i = e.originalSelect2Event;
                            if ("select" === i._type || "unselect" === i._type) return
                        }
                        var s = this.getHighlightedResults();
                        if (!(s.length < 1)) {
                            var n = s.data("data");
                            null != n.element && n.element.selected || null == n.element && n.selected || this.trigger("select", {
                                data: n
                            })
                        }
                    }, t
                }), e.define("select2/dropdown/closeOnSelect", [], function() {
                    function t() {}
                    return t.prototype.bind = function(t, e, i) {
                        var s = this;
                        t.call(this, e, i), e.on("select", function(t) {
                            s._selectTriggered(t)
                        }), e.on("unselect", function(t) {
                            s._selectTriggered(t)
                        })
                    }, t.prototype._selectTriggered = function(t, e) {
                        var i = e.originalEvent;
                        i && i.ctrlKey || this.trigger("close", {
                            originalEvent: i,
                            originalSelect2Event: e
                        })
                    }, t
                }), e.define("select2/i18n/en", [], function() {
                    return {
                        errorLoading: function() {
                            return "The results could not be loaded."
                        },
                        inputTooLong: function(t) {
                            var e = t.input.length - t.maximum,
                                i = "Please delete " + e + " character";
                            return 1 != e && (i += "s"), i
                        },
                        inputTooShort: function(t) {
                            var e = t.minimum - t.input.length,
                                i = "Please enter " + e + " or more characters";
                            return i
                        },
                        loadingMore: function() {
                            return "Loading more results?"
                        },
                        maximumSelected: function(t) {
                            var e = "You can only select " + t.maximum + " item";
                            return 1 != t.maximum && (e += "s"), e
                        },
                        noResults: function() {
                            return "No results found"
                        },
                        searching: function() {
                            return "Searching?"
                        }
                    }
                }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(t, e, i, s, n, o, a, r, l, d, c, h, p, u, f, m, g, v, _, y, w, b, T, C, x, S, k, I, $) {
                    function P() {
                        this.reset()
                    }
                    P.prototype.apply = function(h) {
                        if (h = t.extend(!0, {}, this.defaults, h), null == h.dataAdapter) {
                            if (null != h.ajax ? h.dataAdapter = f : null != h.data ? h.dataAdapter = u : h.dataAdapter = p, h.minimumInputLength > 0 && (h.dataAdapter = d.Decorate(h.dataAdapter, v)), h.maximumInputLength > 0 && (h.dataAdapter = d.Decorate(h.dataAdapter, _)), h.maximumSelectionLength > 0 && (h.dataAdapter = d.Decorate(h.dataAdapter, y)), h.tags && (h.dataAdapter = d.Decorate(h.dataAdapter, m)), (null != h.tokenSeparators || null != h.tokenizer) && (h.dataAdapter = d.Decorate(h.dataAdapter, g)), null != h.query) {
                                var $ = e(h.amdBase + "compat/query");
                                h.dataAdapter = d.Decorate(h.dataAdapter, $)
                            }
                            if (null != h.initSelection) {
                                var P = e(h.amdBase + "compat/initSelection");
                                h.dataAdapter = d.Decorate(h.dataAdapter, P)
                            }
                        }
                        if (null == h.resultsAdapter && (h.resultsAdapter = i, null != h.ajax && (h.resultsAdapter = d.Decorate(h.resultsAdapter, C)), null != h.placeholder && (h.resultsAdapter = d.Decorate(h.resultsAdapter, T)), h.selectOnClose && (h.resultsAdapter = d.Decorate(h.resultsAdapter, k))), null == h.dropdownAdapter) {
                            if (h.multiple) h.dropdownAdapter = w;
                            else {
                                var A = d.Decorate(w, b);
                                h.dropdownAdapter = A
                            }
                            if (0 !== h.minimumResultsForSearch && (h.dropdownAdapter = d.Decorate(h.dropdownAdapter, S)), h.closeOnSelect && (h.dropdownAdapter = d.Decorate(h.dropdownAdapter, I)), null != h.dropdownCssClass || null != h.dropdownCss || null != h.adaptDropdownCssClass) {
                                var E = e(h.amdBase + "compat/dropdownCss");
                                h.dropdownAdapter = d.Decorate(h.dropdownAdapter, E)
                            }
                            h.dropdownAdapter = d.Decorate(h.dropdownAdapter, x)
                        }
                        if (null == h.selectionAdapter) {
                            if (h.multiple ? h.selectionAdapter = n : h.selectionAdapter = s, null != h.placeholder && (h.selectionAdapter = d.Decorate(h.selectionAdapter, o)), h.allowClear && (h.selectionAdapter = d.Decorate(h.selectionAdapter, a)), h.multiple && (h.selectionAdapter = d.Decorate(h.selectionAdapter, r)), null != h.containerCssClass || null != h.containerCss || null != h.adaptContainerCssClass) {
                                var D = e(h.amdBase + "compat/containerCss");
                                h.selectionAdapter = d.Decorate(h.selectionAdapter, D)
                            }
                            h.selectionAdapter = d.Decorate(h.selectionAdapter, l)
                        }
                        if ("string" == typeof h.language)
                            if (h.language.indexOf("-") > 0) {
                                var M = h.language.split("-"),
                                    O = M[0];
                                h.language = [h.language, O]
                            } else h.language = [h.language];
                        if (t.isArray(h.language)) {
                            var N = new c;
                            h.language.push("en");
                            for (var L = h.language, j = 0; j < L.length; j++) {
                                var H = L[j],
                                    z = {};
                                try {
                                    z = c.loadPath(H)
                                } catch (U) {
                                    try {
                                        H = this.defaults.amdLanguageBase + H, z = c.loadPath(H)
                                    } catch (R) {
                                        h.debug && window.console && console.warn && console.warn('Select2: The language file for "' + H + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                N.extend(z)
                            }
                            h.translations = N
                        } else {
                            var F = c.loadPath(this.defaults.amdLanguageBase + "en"),
                                q = new c(h.language);
                            q.extend(F), h.translations = q
                        }
                        return h
                    }, P.prototype.reset = function() {
                        function e(t) {
                            function e(t) {
                                return h[t] || t
                            }
                            return t.replace(/[^\u0000-\u007E]/g, e)
                        }

                        function i(s, n) {
                            if ("" === t.trim(s.term)) return n;
                            if (n.children && n.children.length > 0) {
                                for (var o = t.extend(!0, {}, n), a = n.children.length - 1; a >= 0; a--) {
                                    var r = n.children[a],
                                        l = i(s, r);
                                    null == l && o.children.splice(a, 1)
                                }
                                return o.children.length > 0 ? o : i(s, o)
                            }
                            var d = e(n.text).toUpperCase(),
                                c = e(s.term).toUpperCase();
                            return d.indexOf(c) > -1 ? n : null
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: d.escapeMarkup,
                            language: $,
                            matcher: i,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function(t) {
                                return t
                            },
                            templateResult: function(t) {
                                return t.text
                            },
                            templateSelection: function(t) {
                                return t.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, P.prototype.set = function(e, i) {
                        var s = t.camelCase(e),
                            n = {};
                        n[s] = i;
                        var o = d._convertData(n);
                        t.extend(this.defaults, o)
                    };
                    var A = new P;
                    return A
                }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(t, e, i, s) {
                    function n(e, n) {
                        if (this.options = e, null != n && this.fromElement(n), this.options = i.apply(this.options), n && n.is("input")) {
                            var o = t(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = s.Decorate(this.options.dataAdapter, o)
                        }
                    }
                    return n.prototype.fromElement = function(t) {
                        var i = ["select2"];
                        null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), t.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), t.data("data", t.data("select2Tags")), t.data("tags", !0)), t.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", t.data("ajaxUrl")), t.data("ajax--url", t.data("ajaxUrl")));
                        var n = {};
                        n = e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset ? e.extend(!0, {}, t[0].dataset, t.data()) : t.data();
                        var o = e.extend(!0, {}, n);
                        o = s._convertData(o);
                        for (var a in o) e.inArray(a, i) > -1 || (e.isPlainObject(this.options[a]) ? e.extend(this.options[a], o[a]) : this.options[a] = o[a]);
                        return this
                    }, n.prototype.get = function(t) {
                        return this.options[t]
                    }, n.prototype.set = function(t, e) {
                        this.options[t] = e
                    }, n
                }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(t, e, i, s) {
                    var n = function(t, i) {
                        null != t.data("select2") && t.data("select2").destroy(), this.$element = t, this.id = this._generateId(t), i = i || {}, this.options = new e(i, t), n.__super__.constructor.call(this);
                        var s = t.attr("tabindex") || 0;
                        t.data("old-tabindex", s), t.attr("tabindex", "-1");
                        var o = this.options.get("dataAdapter");
                        this.dataAdapter = new o(t, this.options);
                        var a = this.render();
                        this._placeContainer(a);
                        var r = this.options.get("selectionAdapter");
                        this.selection = new r(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, a);
                        var l = this.options.get("dropdownAdapter");
                        this.dropdown = new l(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, a);
                        var d = this.options.get("resultsAdapter");
                        this.results = new d(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var c = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(t) {
                            c.trigger("selection:update", {
                                data: t
                            })
                        }), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), t.data("select2", this)
                    };
                    return i.Extend(n, i.Observable), n.prototype._generateId = function(t) {
                        var e = "";
                        return e = null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + i.generateChars(2) : i.generateChars(4), e = e.replace(/(:|\.|\[|\]|,)/g, ""), e = "select2-" + e
                    }, n.prototype._placeContainer = function(t) {
                        t.insertAfter(this.$element);
                        var e = this._resolveWidth(this.$element, this.options.get("width"));
                        null != e && t.css("width", e)
                    }, n.prototype._resolveWidth = function(t, e) {
                        var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == e) {
                            var s = this._resolveWidth(t, "style");
                            return null != s ? s : this._resolveWidth(t, "element")
                        }
                        if ("element" == e) {
                            var n = t.outerWidth(!1);
                            return 0 >= n ? "auto" : n + "px"
                        }
                        if ("style" == e) {
                            var o = t.attr("style");
                            if ("string" != typeof o) return null;
                            for (var a = o.split(";"), r = 0, l = a.length; l > r; r += 1) {
                                var d = a[r].replace(/\s/g, ""),
                                    c = d.match(i);
                                if (null !== c && c.length >= 1) return c[1]
                            }
                            return null
                        }
                        return e
                    }, n.prototype._bindAdapters = function() {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                    }, n.prototype._registerDomEvents = function() {
                        var e = this;
                        this.$element.on("change.select2", function() {
                            e.dataAdapter.current(function(t) {
                                e.trigger("selection:update", {
                                    data: t
                                })
                            })
                        }), this.$element.on("focus.select2", function(t) {
                            e.trigger("focus", t)
                        }), this._syncA = i.bind(this._syncAttributes, this), this._syncS = i.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var s = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != s ? (this._observer = new s(function(i) {
                            t.each(i, e._syncA), t.each(i, e._syncS)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            childList: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
                    }, n.prototype._registerDataEvents = function() {
                        var t = this;
                        this.dataAdapter.on("*", function(e, i) {
                            t.trigger(e, i)
                        })
                    }, n.prototype._registerSelectionEvents = function() {
                        var e = this,
                            i = ["toggle", "focus"];
                        this.selection.on("toggle", function() {
                            e.toggleDropdown()
                        }), this.selection.on("focus", function(t) {
                            e.focus(t)
                        }), this.selection.on("*", function(s, n) {
                            -1 === t.inArray(s, i) && e.trigger(s, n)
                        })
                    }, n.prototype._registerDropdownEvents = function() {
                        var t = this;
                        this.dropdown.on("*", function(e, i) {
                            t.trigger(e, i)
                        })
                    }, n.prototype._registerResultsEvents = function() {
                        var t = this;
                        this.results.on("*", function(e, i) {
                            t.trigger(e, i)
                        })
                    }, n.prototype._registerEvents = function() {
                        var t = this;
                        this.on("open", function() {
                            t.$container.addClass("select2-container--open")
                        }), this.on("close", function() {
                            t.$container.removeClass("select2-container--open")
                        }), this.on("enable", function() {
                            t.$container.removeClass("select2-container--disabled")
                        }), this.on("disable", function() {
                            t.$container.addClass("select2-container--disabled")
                        }), this.on("blur", function() {
                            t.$container.removeClass("select2-container--focus")
                        }), this.on("query", function(e) {
                            t.isOpen() || t.trigger("open", {}), this.dataAdapter.query(e, function(i) {
                                t.trigger("results:all", {
                                    data: i,
                                    query: e
                                })
                            })
                        }), this.on("query:append", function(e) {
                            this.dataAdapter.query(e, function(i) {
                                t.trigger("results:append", {
                                    data: i,
                                    query: e
                                })
                            })
                        }), this.on("keypress", function(e) {
                            var i = e.which;
                            t.isOpen() ? i === s.ESC || i === s.TAB || i === s.UP && e.altKey ? (t.close(), e.preventDefault()) : i === s.ENTER ? (t.trigger("results:select", {}), e.preventDefault()) : i === s.SPACE && e.ctrlKey ? (t.trigger("results:toggle", {}), e.preventDefault()) : i === s.UP ? (t.trigger("results:previous", {}), e.preventDefault()) : i === s.DOWN && (t.trigger("results:next", {}), e.preventDefault()) : (i === s.ENTER || i === s.SPACE || i === s.DOWN && e.altKey) && (t.open(), e.preventDefault())
                        })
                    }, n.prototype._syncAttributes = function() {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, n.prototype._syncSubtree = function(t, e) {
                        var i = !1,
                            s = this;
                        if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                            if (e)
                                if (e.addedNodes && e.addedNodes.length > 0)
                                    for (var n = 0; n < e.addedNodes.length; n++) {
                                        var o = e.addedNodes[n];
                                        o.selected && (i = !0)
                                    } else e.removedNodes && e.removedNodes.length > 0 && (i = !0);
                                else i = !0;
                            i && this.dataAdapter.current(function(t) {
                                s.trigger("selection:update", {
                                    data: t
                                })
                            })
                        }
                    }, n.prototype.trigger = function(t, e) {
                        var i = n.__super__.trigger,
                            s = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting"
                            };
                        if (void 0 === e && (e = {}), t in s) {
                            var o = s[t],
                                a = {
                                    prevented: !1,
                                    name: t,
                                    args: e
                                };
                            if (i.call(this, o, a), a.prevented) return void(e.prevented = !0)
                        }
                        i.call(this, t, e)
                    }, n.prototype.toggleDropdown = function() {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, n.prototype.open = function() {
                        this.isOpen() || this.trigger("query", {})
                    }, n.prototype.close = function() {
                        this.isOpen() && this.trigger("close", {})
                    }, n.prototype.isOpen = function() {
                        return this.$container.hasClass("select2-container--open")
                    }, n.prototype.hasFocus = function() {
                        return this.$container.hasClass("select2-container--focus")
                    }, n.prototype.focus = function(t) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, n.prototype.enable = function(t) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == t || 0 === t.length) && (t = [!0]);
                        var e = !t[0];
                        this.$element.prop("disabled", e)
                    }, n.prototype.data = function() {
                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var t = [];
                        return this.dataAdapter.current(function(e) {
                            t = e
                        }), t
                    }, n.prototype.val = function(e) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                        var i = e[0];
                        t.isArray(i) && (i = t.map(i, function(t) {
                            return t.toString()
                        })), this.$element.val(i).trigger("change")
                    }, n.prototype.destroy = function() {
                        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                    }, n.prototype.render = function() {
                        var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
                    }, n
                }), e.define("jquery-mousewheel", ["jquery"], function(t) {
                    return t
                }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(t, e, i, s) {
                    if (null == t.fn.select2) {
                        var n = ["open", "close", "destroy"];
                        t.fn.select2 = function(e) {
                            if (e = e || {}, "object" == typeof e) return this.each(function() {
                                var s = t.extend(!0, {}, e);
                                new i(t(this), s)
                            }), this;
                            if ("string" == typeof e) {
                                var s, o = Array.prototype.slice.call(arguments, 1);
                                return this.each(function() {
                                    var i = t(this).data("select2");
                                    null == i && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), s = i[e].apply(i, o)
                                }), t.inArray(e, n) > -1 ? this : s
                            }
                            throw new Error("Invalid arguments for Select2: " + e)
                        }
                    }
                    return null == t.fn.select2.defaults && (t.fn.select2.defaults = s), i
                }), {
                    define: e.define,
                    require: e.require
                }
            }(),
            i = e.require("jquery.select2");
        return t.fn.select2.amd = e, i
    }), ! function(t) {
        t.flexslider = function(e, i) {
            var s = t(e);
            s.vars = t.extend({}, t.flexslider.defaults, i);
            var n, o = s.vars.namespace,
                a = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                r = ("ontouchstart" in window || a || window.DocumentTouch && document instanceof DocumentTouch) && s.vars.touch,
                l = "click touchend MSPointerUp keyup",
                d = "",
                c = "vertical" === s.vars.direction,
                h = s.vars.reverse,
                p = s.vars.itemWidth > 0,
                u = "fade" === s.vars.animation,
                f = "" !== s.vars.asNavFor,
                m = {},
                g = !0;
            t.data(e, "flexslider", s), m = {
                init: function() {
                    s.animating = !1, s.currentSlide = parseInt(s.vars.startAt ? s.vars.startAt : 0, 10), isNaN(s.currentSlide) && (s.currentSlide = 0), s.animatingTo = s.currentSlide, s.atEnd = 0 === s.currentSlide || s.currentSlide === s.last, s.containerSelector = s.vars.selector.substr(0, s.vars.selector.search(" ")), s.slides = t(s.vars.selector, s), s.container = t(s.containerSelector, s), s.count = s.slides.length, s.syncExists = t(s.vars.sync).length > 0, "slide" === s.vars.animation && (s.vars.animation = "swing"), s.prop = c ? "top" : "marginLeft", s.args = {}, s.manualPause = !1, s.stopped = !1, s.started = !1, s.startTimeout = null, s.transitions = !s.vars.video && !u && s.vars.useCSS && function() {
                        var t = document.createElement("div"),
                            e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var i in e)
                            if (void 0 !== t.style[e[i]]) return s.pfx = e[i].replace("Perspective", "").toLowerCase(), s.prop = "-" + s.pfx + "-transform", !0;
                        return !1
                    }(), s.ensureAnimationEnd = "", "" !== s.vars.controlsContainer && (s.controlsContainer = t(s.vars.controlsContainer).length > 0 && t(s.vars.controlsContainer)), "" !== s.vars.manualControls && (s.manualControls = t(s.vars.manualControls).length > 0 && t(s.vars.manualControls)), s.vars.randomize && (s.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), s.container.empty().append(s.slides)), s.doMath(), s.setup("init"), s.vars.controlNav && m.controlNav.setup(), s.vars.directionNav && m.directionNav.setup(), s.vars.keyboard && (1 === t(s.containerSelector).length || s.vars.multipleKeyboard) && t(document).bind("keyup", function(t) {
                        var e = t.keyCode;
                        if (!s.animating && (39 === e || 37 === e)) {
                            var i = 39 === e ? s.getTarget("next") : 37 === e ? s.getTarget("prev") : !1;
                            s.flexAnimate(i, s.vars.pauseOnAction)
                        }
                    }), s.vars.mousewheel && s.bind("mousewheel", function(t, e) {
                        t.preventDefault();
                        var i = s.getTarget(0 > e ? "next" : "prev");
                        s.flexAnimate(i, s.vars.pauseOnAction)
                    }), s.vars.pausePlay && m.pausePlay.setup(), s.vars.slideshow && s.vars.pauseInvisible && m.pauseInvisible.init(), s.vars.slideshow && (s.vars.pauseOnHover && s.hover(function() {
                        s.manualPlay || s.manualPause || s.pause()
                    }, function() {
                        s.manualPause || s.manualPlay || s.stopped || s.play()
                    }), s.vars.pauseInvisible && m.pauseInvisible.isHidden() || (s.vars.initDelay > 0 ? s.startTimeout = setTimeout(s.play, s.vars.initDelay) : s.play())), f && m.asNav.setup(), r && s.vars.touch && m.touch(), (!u || u && s.vars.smoothHeight) && t(window).bind("resize orientationchange focus", m.resize), s.find("img").attr("draggable", "false"), setTimeout(function() {
                        s.vars.start(s)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        s.asNav = !0, s.animatingTo = Math.floor(s.currentSlide / s.move), s.currentItem = s.currentSlide, s.slides.removeClass(o + "active-slide").eq(s.currentItem).addClass(o + "active-slide"), a ? (e._slider = s, s.slides.each(function() {
                            var e = this;
                            e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(t) {
                                t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                            }, !1), e.addEventListener("MSGestureTap", function(e) {
                                e.preventDefault();
                                var i = t(this),
                                    n = i.index();
                                t(s.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (s.direction = s.currentItem < n ? "next" : "prev", s.flexAnimate(n, s.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : s.slides.on(l, function(e) {
                            e.preventDefault();
                            var i = t(this),
                                n = i.index(),
                                a = i.offset().left - t(s).scrollLeft();
                            0 >= a && i.hasClass(o + "active-slide") ? s.flexAnimate(s.getTarget("prev"), !0) : t(s.vars.asNavFor).data("flexslider").animating || i.hasClass(o + "active-slide") || (s.direction = s.currentItem < n ? "next" : "prev", s.flexAnimate(n, s.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        s.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var e, i, n = "thumbnails" === s.vars.controlNav ? "control-thumbs" : "control-paging",
                            a = 1;
                        if (s.controlNavScaffold = t('<ol class="' + o + "control-nav " + o + n + '"></ol>'), s.pagingCount > 1)
                            for (var r = 0; r < s.pagingCount; r++) {
                                if (i = s.slides.eq(r), e = "thumbnails" === s.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"/>' : "<a>" + a + "</a>", "thumbnails" === s.vars.controlNav && !0 === s.vars.thumbCaptions) {
                                    var c = i.attr("data-thumbcaption");
                                    "" != c && void 0 != c && (e += '<span class="' + o + 'caption">' + c + "</span>")
                                }
                                s.controlNavScaffold.append("<li>" + e + "</li>"), a++
                            }
                        s.controlsContainer ? t(s.controlsContainer).append(s.controlNavScaffold) : s.append(s.controlNavScaffold), m.controlNav.set(), m.controlNav.active(), s.controlNavScaffold.delegate("a, img", l, function(e) {
                            if (e.preventDefault(), "" === d || d === e.type) {
                                var i = t(this),
                                    n = s.controlNav.index(i);
                                i.hasClass(o + "active") || (s.direction = n > s.currentSlide ? "next" : "prev", s.flexAnimate(n, s.vars.pauseOnAction))
                            }
                            "" === d && (d = e.type), m.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function() {
                        s.controlNav = s.manualControls, m.controlNav.active(), s.controlNav.bind(l, function(e) {
                            if (e.preventDefault(), "" === d || d === e.type) {
                                var i = t(this),
                                    n = s.controlNav.index(i);
                                i.hasClass(o + "active") || (s.direction = n > s.currentSlide ? "next" : "prev", s.flexAnimate(n, s.vars.pauseOnAction))
                            }
                            "" === d && (d = e.type), m.setToClearWatchedEvent()
                        })
                    },
                    set: function() {
                        var e = "thumbnails" === s.vars.controlNav ? "img" : "a";
                        s.controlNav = t("." + o + "control-nav li " + e, s.controlsContainer ? s.controlsContainer : s)
                    },
                    active: function() {
                        s.controlNav.removeClass(o + "active").eq(s.animatingTo).addClass(o + "active")
                    },
                    update: function(e, i) {
                        s.pagingCount > 1 && "add" === e ? s.controlNavScaffold.append(t("<li><a>" + s.count + "</a></li>")) : 1 === s.pagingCount ? s.controlNavScaffold.find("li").remove() : s.controlNav.eq(i).closest("li").remove(), m.controlNav.set(), s.pagingCount > 1 && s.pagingCount !== s.controlNav.length ? s.update(i, e) : m.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        var e = t('<ul class="' + o + 'direction-nav"><li><a class="' + o + 'prev" href="#">' + s.vars.prevText + '</a></li><li><a class="' + o + 'next" href="#">' + s.vars.nextText + "</a></li></ul>");
                        s.controlsContainer ? (t(s.controlsContainer).append(e), s.directionNav = t("." + o + "direction-nav li a", s.controlsContainer)) : (s.append(e), s.directionNav = t("." + o + "direction-nav li a", s)), m.directionNav.update(), s.directionNav.bind(l, function(e) {
                            e.preventDefault();
                            var i;
                            ("" === d || d === e.type) && (i = s.getTarget(t(this).hasClass(o + "next") ? "next" : "prev"), s.flexAnimate(i, s.vars.pauseOnAction)), "" === d && (d = e.type), m.setToClearWatchedEvent()
                        })
                    },
                    update: function() {
                        var t = o + "disabled";
                        1 === s.pagingCount ? s.directionNav.addClass(t).attr("tabindex", "-1") : s.vars.animationLoop ? s.directionNav.removeClass(t).removeAttr("tabindex") : 0 === s.animatingTo ? s.directionNav.removeClass(t).filter("." + o + "prev").addClass(t).attr("tabindex", "-1") : s.animatingTo === s.last ? s.directionNav.removeClass(t).filter("." + o + "next").addClass(t).attr("tabindex", "-1") : s.directionNav.removeClass(t).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function() {
                        var e = t('<div class="' + o + 'pauseplay"><a></a></div>');
                        s.controlsContainer ? (s.controlsContainer.append(e), s.pausePlay = t("." + o + "pauseplay a", s.controlsContainer)) : (s.append(e), s.pausePlay = t("." + o + "pauseplay a", s)), m.pausePlay.update(s.vars.slideshow ? o + "pause" : o + "play"), s.pausePlay.bind(l, function(e) {
                            e.preventDefault(), ("" === d || d === e.type) && (t(this).hasClass(o + "pause") ? (s.manualPause = !0, s.manualPlay = !1, s.pause()) : (s.manualPause = !1, s.manualPlay = !0, s.play())), "" === d && (d = e.type), m.setToClearWatchedEvent()
                        })
                    },
                    update: function(t) {
                        "play" === t ? s.pausePlay.removeClass(o + "pause").addClass(o + "play").html(s.vars.playText) : s.pausePlay.removeClass(o + "play").addClass(o + "pause").html(s.vars.pauseText)
                    }
                },
                touch: function() {
                    function t(t) {
                        s.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (s.pause(), g = c ? s.h : s.w, _ = Number(new Date), w = t.touches[0].pageX, b = t.touches[0].pageY, m = p && h && s.animatingTo === s.last ? 0 : p && h ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : p && s.currentSlide === s.last ? s.limit : p ? (s.itemW + s.vars.itemMargin) * s.move * s.currentSlide : h ? (s.last - s.currentSlide + s.cloneOffset) * g : (s.currentSlide + s.cloneOffset) * g, d = c ? b : w, f = c ? w : b, e.addEventListener("touchmove", i, !1), e.addEventListener("touchend", n, !1))
                    }

                    function i(t) {
                        w = t.touches[0].pageX, b = t.touches[0].pageY, v = c ? d - b : d - w, y = c ? Math.abs(v) < Math.abs(w - f) : Math.abs(v) < Math.abs(b - f);
                        var e = 500;
                        (!y || Number(new Date) - _ > e) && (t.preventDefault(), !u && s.transitions && (s.vars.animationLoop || (v /= 0 === s.currentSlide && 0 > v || s.currentSlide === s.last && v > 0 ? Math.abs(v) / g + 2 : 1), s.setProps(m + v, "setTouch")))
                    }

                    function n() {
                        if (e.removeEventListener("touchmove", i, !1), s.animatingTo === s.currentSlide && !y && null !== v) {
                            var t = h ? -v : v,
                                o = s.getTarget(t > 0 ? "next" : "prev");
                            s.canAdvance(o) && (Number(new Date) - _ < 550 && Math.abs(t) > 50 || Math.abs(t) > g / 2) ? s.flexAnimate(o, s.vars.pauseOnAction) : u || s.flexAnimate(s.currentSlide, s.vars.pauseOnAction, !0)
                        }
                        e.removeEventListener("touchend", n, !1), d = null, f = null, v = null, m = null
                    }

                    function o(t) {
                        t.stopPropagation(), s.animating ? t.preventDefault() : (s.pause(), e._gesture.addPointer(t.pointerId), T = 0, g = c ? s.h : s.w, _ = Number(new Date), m = p && h && s.animatingTo === s.last ? 0 : p && h ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : p && s.currentSlide === s.last ? s.limit : p ? (s.itemW + s.vars.itemMargin) * s.move * s.currentSlide : h ? (s.last - s.currentSlide + s.cloneOffset) * g : (s.currentSlide + s.cloneOffset) * g)
                    }

                    function r(t) {
                        t.stopPropagation();
                        var i = t.target._slider;
                        if (i) {
                            var s = -t.translationX,
                                n = -t.translationY;
                            return T += c ? n : s, v = T, y = c ? Math.abs(T) < Math.abs(-s) : Math.abs(T) < Math.abs(-n), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                e._gesture.stop()
                            }) : void((!y || Number(new Date) - _ > 500) && (t.preventDefault(), !u && i.transitions && (i.vars.animationLoop || (v = T / (0 === i.currentSlide && 0 > T || i.currentSlide === i.last && T > 0 ? Math.abs(T) / g + 2 : 1)), i.setProps(m + v, "setTouch"))))
                        }
                    }

                    function l(t) {
                        t.stopPropagation();
                        var e = t.target._slider;
                        if (e) {
                            if (e.animatingTo === e.currentSlide && !y && null !== v) {
                                var i = h ? -v : v,
                                    s = e.getTarget(i > 0 ? "next" : "prev");
                                e.canAdvance(s) && (Number(new Date) - _ < 550 && Math.abs(i) > 50 || Math.abs(i) > g / 2) ? e.flexAnimate(s, e.vars.pauseOnAction) : u || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                            }
                            d = null, f = null, v = null, m = null, T = 0
                        }
                    }
                    var d, f, m, g, v, _, y = !1,
                        w = 0,
                        b = 0,
                        T = 0;
                    a ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", o, !1), e._slider = s, e.addEventListener("MSGestureChange", r, !1), e.addEventListener("MSGestureEnd", l, !1)) : e.addEventListener("touchstart", t, !1)
                },
                resize: function() {
                    !s.animating && s.is(":visible") && (p || s.doMath(), u ? m.smoothHeight() : p ? (s.slides.width(s.computedW), s.update(s.pagingCount), s.setProps()) : c ? (s.viewport.height(s.h), s.setProps(s.h, "setTotal")) : (s.vars.smoothHeight && m.smoothHeight(), s.newSlides.width(s.computedW), s.setProps(s.computedW, "setTotal")))
                },
                smoothHeight: function(t) {
                    if (!c || u) {
                        var e = u ? s : s.viewport;
                        t ? e.animate({
                            height: s.slides.eq(s.animatingTo).height()
                        }, t) : e.height(s.slides.eq(s.animatingTo).height())
                    }
                },
                sync: function(e) {
                    var i = t(s.vars.sync).data("flexslider"),
                        n = s.animatingTo;
                    switch (e) {
                        case "animate":
                            i.flexAnimate(n, s.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            i.playing || i.asNav || i.play();
                            break;
                        case "pause":
                            i.pause()
                    }
                },
                uniqueID: function(e) {
                    return e.filter("[id]").add(e.find("[id]")).each(function() {
                        var e = t(this);
                        e.attr("id", e.attr("id") + "_clone")
                    }), e
                },
                pauseInvisible: {
                    visProp: null,
                    init: function() {
                        var t = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var e = 0; e < t.length; e++) t[e] + "Hidden" in document && (m.pauseInvisible.visProp = t[e] + "Hidden");
                        if (m.pauseInvisible.visProp) {
                            var i = m.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                            document.addEventListener(i, function() {
                                m.pauseInvisible.isHidden() ? s.startTimeout ? clearTimeout(s.startTimeout) : s.pause() : s.started ? s.play() : s.vars.initDelay > 0 ? setTimeout(s.play, s.vars.initDelay) : s.play()
                            })
                        }
                    },
                    isHidden: function() {
                        return document[m.pauseInvisible.visProp] || !1
                    }
                },
                setToClearWatchedEvent: function() {
                    clearTimeout(n), n = setTimeout(function() {
                        d = ""
                    }, 3e3)
                }
            }, s.flexAnimate = function(e, i, n, a, l) {
                if (s.vars.animationLoop || e === s.currentSlide || (s.direction = e > s.currentSlide ? "next" : "prev"), f && 1 === s.pagingCount && (s.direction = s.currentItem < e ? "next" : "prev"), !s.animating && (s.canAdvance(e, l) || n) && s.is(":visible")) {
                    if (f && a) {
                        var d = t(s.vars.asNavFor).data("flexslider");
                        if (s.atEnd = 0 === e || e === s.count - 1, d.flexAnimate(e, !0, !1, !0, l), s.direction = s.currentItem < e ? "next" : "prev", d.direction = s.direction, Math.ceil((e + 1) / s.visible) - 1 === s.currentSlide || 0 === e) return s.currentItem = e, s.slides.removeClass(o + "active-slide").eq(e).addClass(o + "active-slide"), !1;
                        s.currentItem = e, s.slides.removeClass(o + "active-slide").eq(e).addClass(o + "active-slide"), e = Math.floor(e / s.visible)
                    }
                    if (s.animating = !0, s.animatingTo = e, i && s.pause(), s.vars.before(s), s.syncExists && !l && m.sync("animate"), s.vars.controlNav && m.controlNav.active(), p || s.slides.removeClass(o + "active-slide").eq(e).addClass(o + "active-slide"), s.atEnd = 0 === e || e === s.last, s.vars.directionNav && m.directionNav.update(), e === s.last && (s.vars.end(s), s.vars.animationLoop || s.pause()), u) r ? (s.slides.eq(s.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), s.slides.eq(e).css({
                        opacity: 1,
                        zIndex: 2
                    }), s.wrapup(y)) : (s.slides.eq(s.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, s.vars.animationSpeed, s.vars.easing), s.slides.eq(e).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, s.vars.animationSpeed, s.vars.easing, s.wrapup));
                    else {
                        var g, v, _, y = c ? s.slides.filter(":first").height() : s.computedW;
                        p ? (g = s.vars.itemMargin, _ = (s.itemW + g) * s.move * s.animatingTo, v = _ > s.limit && 1 !== s.visible ? s.limit : _) : v = 0 === s.currentSlide && e === s.count - 1 && s.vars.animationLoop && "next" !== s.direction ? h ? (s.count + s.cloneOffset) * y : 0 : s.currentSlide === s.last && 0 === e && s.vars.animationLoop && "prev" !== s.direction ? h ? 0 : (s.count + 1) * y : h ? (s.count - 1 - e + s.cloneOffset) * y : (e + s.cloneOffset) * y, s.setProps(v, "", s.vars.animationSpeed), s.transitions ? (s.vars.animationLoop && s.atEnd || (s.animating = !1, s.currentSlide = s.animatingTo), s.container.unbind("webkitTransitionEnd transitionend"), s.container.bind("webkitTransitionEnd transitionend", function() {
                            clearTimeout(s.ensureAnimationEnd), s.wrapup(y)
                        }), clearTimeout(s.ensureAnimationEnd), s.ensureAnimationEnd = setTimeout(function() {
                            s.wrapup(y)
                        }, s.vars.animationSpeed + 100)) : s.container.animate(s.args, s.vars.animationSpeed, s.vars.easing, function() {
                            s.wrapup(y)
                        })
                    }
                    s.vars.smoothHeight && m.smoothHeight(s.vars.animationSpeed)
                }
            }, s.wrapup = function(t) {
                u || p || (0 === s.currentSlide && s.animatingTo === s.last && s.vars.animationLoop ? s.setProps(t, "jumpEnd") : s.currentSlide === s.last && 0 === s.animatingTo && s.vars.animationLoop && s.setProps(t, "jumpStart")), s.animating = !1, s.currentSlide = s.animatingTo, s.vars.after(s)
            }, s.animateSlides = function() {
                !s.animating && g && s.flexAnimate(s.getTarget("next"))
            }, s.pause = function() {
                clearInterval(s.animatedSlides), s.animatedSlides = null, s.playing = !1, s.vars.pausePlay && m.pausePlay.update("play"), s.syncExists && m.sync("pause")
            }, s.play = function() {
                s.playing && clearInterval(s.animatedSlides), s.animatedSlides = s.animatedSlides || setInterval(s.animateSlides, s.vars.slideshowSpeed), s.started = s.playing = !0, s.vars.pausePlay && m.pausePlay.update("pause"), s.syncExists && m.sync("play")
            }, s.stop = function() {
                s.pause(), s.stopped = !0
            }, s.canAdvance = function(t, e) {
                var i = f ? s.pagingCount - 1 : s.last;
                return e ? !0 : f && s.currentItem === s.count - 1 && 0 === t && "prev" === s.direction ? !0 : f && 0 === s.currentItem && t === s.pagingCount - 1 && "next" !== s.direction ? !1 : t !== s.currentSlide || f ? s.vars.animationLoop ? !0 : s.atEnd && 0 === s.currentSlide && t === i && "next" !== s.direction ? !1 : s.atEnd && s.currentSlide === i && 0 === t && "next" === s.direction ? !1 : !0 : !1
            }, s.getTarget = function(t) {
                return s.direction = t, "next" === t ? s.currentSlide === s.last ? 0 : s.currentSlide + 1 : 0 === s.currentSlide ? s.last : s.currentSlide - 1
            }, s.setProps = function(t, e, i) {
                var n = function() {
                    var i = t ? t : (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo,
                        n = function() {
                            if (p) return "setTouch" === e ? t : h && s.animatingTo === s.last ? 0 : h ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : s.animatingTo === s.last ? s.limit : i;
                            switch (e) {
                                case "setTotal":
                                    return h ? (s.count - 1 - s.currentSlide + s.cloneOffset) * t : (s.currentSlide + s.cloneOffset) * t;
                                case "setTouch":
                                    return h ? t : t;
                                case "jumpEnd":
                                    return h ? t : s.count * t;
                                case "jumpStart":
                                    return h ? s.count * t : t;
                                default:
                                    return t
                            }
                        }();
                    return -1 * n + "px"
                }();
                s.transitions && (n = c ? "translate3d(0," + n + ",0)" : "translate3d(" + n + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", s.container.css("-" + s.pfx + "-transition-duration", i), s.container.css("transition-duration", i)), s.args[s.prop] = n, (s.transitions || void 0 === i) && s.container.css(s.args), s.container.css("transform", n)
            }, s.setup = function(e) {
                if (u) s.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === e && (r ? s.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + s.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(s.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == s.vars.fadeFirstSlide ? s.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(s.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : s.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(s.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, s.vars.animationSpeed, s.vars.easing)), s.vars.smoothHeight && m.smoothHeight();
                else {
                    var i, n;
                    "init" === e && (s.viewport = t('<div class="' + o + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(s).append(s.container), s.cloneCount = 0, s.cloneOffset = 0, h && (n = t.makeArray(s.slides).reverse(), s.slides = t(n), s.container.empty().append(s.slides))), s.vars.animationLoop && !p && (s.cloneCount = 2, s.cloneOffset = 1, "init" !== e && s.container.find(".clone").remove(), s.container.append(m.uniqueID(s.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(s.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), s.newSlides = t(s.vars.selector, s), i = h ? s.count - 1 - s.currentSlide + s.cloneOffset : s.currentSlide + s.cloneOffset, c && !p ? (s.container.height(200 * (s.count + s.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                        s.newSlides.css({
                            display: "block"
                        }), s.doMath(), s.viewport.height(s.h), s.setProps(i * s.h, "init")
                    }, "init" === e ? 100 : 0)) : (s.container.width(200 * (s.count + s.cloneCount) + "%"), s.setProps(i * s.computedW, "init"), setTimeout(function() {
                        s.doMath(), s.newSlides.css({
                            width: s.computedW,
                            "float": "left",
                            display: "block"
                        }), s.vars.smoothHeight && m.smoothHeight()
                    }, "init" === e ? 100 : 0))
                }
                p || s.slides.removeClass(o + "active-slide").eq(s.currentSlide).addClass(o + "active-slide"), s.vars.init(s)
            }, s.doMath = function() {
                var t = s.slides.first(),
                    e = s.vars.itemMargin,
                    i = s.vars.minItems,
                    n = s.vars.maxItems;
                s.w = void 0 === s.viewport ? s.width() : s.viewport.width(), s.h = t.height(), s.boxPadding = t.outerWidth() - t.width(), p ? (s.itemT = s.vars.itemWidth + e, s.minW = i ? i * s.itemT : s.w, s.maxW = n ? n * s.itemT - e : s.w, s.itemW = s.minW > s.w ? (s.w - e * (i - 1)) / i : s.maxW < s.w ? (s.w - e * (n - 1)) / n : s.vars.itemWidth > s.w ? s.w : s.vars.itemWidth, s.visible = Math.floor(s.w / s.itemW), s.move = s.vars.move > 0 && s.vars.move < s.visible ? s.vars.move : s.visible, s.pagingCount = Math.ceil((s.count - s.visible) / s.move + 1), s.last = s.pagingCount - 1, s.limit = 1 === s.pagingCount ? 0 : s.vars.itemWidth > s.w ? s.itemW * (s.count - 1) + e * (s.count - 1) : (s.itemW + e) * s.count - s.w - e) : (s.itemW = s.w, s.pagingCount = s.count, s.last = s.count - 1), s.computedW = s.itemW - s.boxPadding
            }, s.update = function(t, e) {
                s.doMath(), p || (t < s.currentSlide ? s.currentSlide += 1 : t <= s.currentSlide && 0 !== t && (s.currentSlide -= 1), s.animatingTo = s.currentSlide), s.vars.controlNav && !s.manualControls && ("add" === e && !p || s.pagingCount > s.controlNav.length ? m.controlNav.update("add") : ("remove" === e && !p || s.pagingCount < s.controlNav.length) && (p && s.currentSlide > s.last && (s.currentSlide -= 1, s.animatingTo -= 1), m.controlNav.update("remove", s.last))), s.vars.directionNav && m.directionNav.update()
            }, s.addSlide = function(e, i) {
                var n = t(e);
                s.count += 1, s.last = s.count - 1, c && h ? void 0 !== i ? s.slides.eq(s.count - i).after(n) : s.container.prepend(n) : void 0 !== i ? s.slides.eq(i).before(n) : s.container.append(n), s.update(i, "add"), s.slides = t(s.vars.selector + ":not(.clone)", s),
                    s.setup(), s.vars.added(s)
            }, s.removeSlide = function(e) {
                var i = isNaN(e) ? s.slides.index(t(e)) : e;
                s.count -= 1, s.last = s.count - 1, isNaN(e) ? t(e, s.slides).remove() : c && h ? s.slides.eq(s.last).remove() : s.slides.eq(e).remove(), s.doMath(), s.update(i, "remove"), s.slides = t(s.vars.selector + ":not(.clone)", s), s.setup(), s.vars.removed(s)
            }, m.init()
        }, t(window).blur(function() {
            focused = !1
        }).focus(function() {
            focused = !0
        }), t.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {},
            init: function() {}
        }, t.fn.flexslider = function(e) {
            if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
                var i = t(this),
                    s = e.selector ? e.selector : ".slides > li",
                    n = i.find(s);
                1 === n.length && e.allowOneSlide === !0 || 0 === n.length ? (n.fadeIn(400), e.start && e.start(i)) : void 0 === i.data("flexslider") && new t.flexslider(this, e)
            });
            var i = t(this).data("flexslider");
            switch (e) {
                case "play":
                    i.play();
                    break;
                case "pause":
                    i.pause();
                    break;
                case "stop":
                    i.stop();
                    break;
                case "next":
                    i.flexAnimate(i.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    i.flexAnimate(i.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof e && i.flexAnimate(e, !0)
            }
        }
    }(jQuery),
    function(t) {
        function e() {
            function e(t) {
                var a = 1e12 > t ? s ? performance.now() + performance.timing.navigationStart : i() : t || i();
                a - o >= 1e3 && (h._updateTargets(), o = a), n(e)
            }
            this.regional = [], this.regional[""] = {
                labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                compactLabels: ["y", "m", "w", "d"],
                whichLabels: null,
                digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                timeSeparator: ":",
                isRTL: !1
            }, this._defaults = {
                until: null,
                since: null,
                timezone: null,
                serverSync: null,
                format: "dHMS",
                layout: "",
                compact: !1,
                significant: 0,
                description: "",
                expiryUrl: "",
                expiryText: "",
                alwaysExpire: !1,
                onExpiry: null,
                onTick: null,
                tickInterval: 1
            }, t.extend(this._defaults, this.regional[""]), this._serverSyncs = [];
            var i = "function" == typeof Date.now ? Date.now : function() {
                    return (new Date).getTime()
                },
                s = window.performance && "function" == typeof window.performance.now,
                n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                o = 0;
            !n || t.noRequestAnimationFrame ? (t.noRequestAnimationFrame = null, setInterval(function() {
                h._updateTargets()
            }, 980)) : (o = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || i(), n(e))
        }

        function i(e, i) {
            return "option" == e && (0 == i.length || 1 == i.length && "string" == typeof i[0]) ? !0 : t.inArray(e, c) > -1
        }
        var s = 0,
            n = 1,
            o = 2,
            a = 3,
            r = 4,
            l = 5,
            d = 6;
        t.extend(e.prototype, {
            markerClassName: "hasCountdown",
            propertyName: "countdown",
            _rtlClass: "countdown_rtl",
            _sectionClass: "countdown_section",
            _amountClass: "countdown_amount",
            _rowClass: "countdown_row",
            _holdingClass: "countdown_holding",
            _showClass: "countdown_show",
            _descrClass: "countdown_descr",
            _timerTargets: [],
            setDefaults: function(e) {
                this._resetExtraLabels(this._defaults, e), t.extend(this._defaults, e || {})
            },
            UTCDate: function(t, e, i, s, n, o, a, r) {
                "object" == typeof e && e.constructor == Date && (r = e.getMilliseconds(), a = e.getSeconds(), o = e.getMinutes(), n = e.getHours(), s = e.getDate(), i = e.getMonth(), e = e.getFullYear());
                var l = new Date;
                return l.setUTCFullYear(e), l.setUTCDate(1), l.setUTCMonth(i || 0), l.setUTCDate(s || 1), l.setUTCHours(n || 0), l.setUTCMinutes((o || 0) - (Math.abs(t) < 30 ? 60 * t : t)), l.setUTCSeconds(a || 0), l.setUTCMilliseconds(r || 0), l
            },
            periodsToSeconds: function(t) {
                return 31557600 * t[0] + 2629800 * t[1] + 604800 * t[2] + 86400 * t[3] + 3600 * t[4] + 60 * t[5] + t[6]
            },
            _attachPlugin: function(e, i) {
                if (e = t(e), !e.hasClass(this.markerClassName)) {
                    var s = {
                        options: t.extend({}, this._defaults),
                        _periods: [0, 0, 0, 0, 0, 0, 0]
                    };
                    e.addClass(this.markerClassName).data(this.propertyName, s), this._optionPlugin(e, i)
                }
            },
            _addTarget: function(t) {
                this._hasTarget(t) || this._timerTargets.push(t)
            },
            _hasTarget: function(e) {
                return t.inArray(e, this._timerTargets) > -1
            },
            _removeTarget: function(e) {
                this._timerTargets = t.map(this._timerTargets, function(t) {
                    return t == e ? null : t
                })
            },
            _updateTargets: function() {
                for (var t = this._timerTargets.length - 1; t >= 0; t--) this._updateCountdown(this._timerTargets[t])
            },
            _optionPlugin: function(e, i, s) {
                e = t(e);
                var n = e.data(this.propertyName);
                if (!i || "string" == typeof i && null == s) {
                    var o = i;
                    return i = (n || {}).options, i && o ? i[o] : i
                }
                if (e.hasClass(this.markerClassName)) {
                    if (i = i || {}, "string" == typeof i) {
                        var o = i;
                        i = {}, i[o] = s
                    }
                    i.layout && (i.layout = i.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(n.options, i);
                    var a = n.options.timezone != i.timezone;
                    t.extend(n.options, i), this._adjustSettings(e, n, null != i.until || null != i.since || a);
                    var r = new Date;
                    (n._since && n._since < r || n._until && n._until > r) && this._addTarget(e[0]), this._updateCountdown(e, n)
                }
            },
            _updateCountdown: function(e, i) {
                var s = t(e);
                if (i = i || s.data(this.propertyName)) {
                    if (s.html(this._generateHTML(i)).toggleClass(this._rtlClass, i.options.isRTL), t.isFunction(i.options.onTick)) {
                        var n = "lap" != i._hold ? i._periods : this._calculatePeriods(i, i._show, i.options.significant, new Date);
                        (1 == i.options.tickInterval || this.periodsToSeconds(n) % i.options.tickInterval == 0) && i.options.onTick.apply(e, [n])
                    }
                    var o = "pause" != i._hold && (i._since ? i._now.getTime() < i._since.getTime() : i._now.getTime() >= i._until.getTime());
                    if (o && !i._expiring) {
                        if (i._expiring = !0, this._hasTarget(e) || i.options.alwaysExpire) {
                            if (this._removeTarget(e), t.isFunction(i.options.onExpiry) && i.options.onExpiry.apply(e, []), i.options.expiryText) {
                                var a = i.options.layout;
                                i.options.layout = i.options.expiryText, this._updateCountdown(e, i), i.options.layout = a
                            }
                            i.options.expiryUrl && (window.location = i.options.expiryUrl)
                        }
                        i._expiring = !1
                    } else "pause" == i._hold && this._removeTarget(e);
                    s.data(this.propertyName, i)
                }
            },
            _resetExtraLabels: function(t, e) {
                var i = !1;
                for (var s in e)
                    if ("whichLabels" != s && s.match(/[Ll]abels/)) {
                        i = !0;
                        break
                    }
                if (i)
                    for (var s in t) s.match(/[Ll]abels[02-9]|compactLabels1/) && (t[s] = null)
            },
            _adjustSettings: function(e, i, s) {
                for (var n, o = 0, a = null, r = 0; r < this._serverSyncs.length; r++)
                    if (this._serverSyncs[r][0] == i.options.serverSync) {
                        a = this._serverSyncs[r][1];
                        break
                    }
                if (null != a) o = i.options.serverSync ? a : 0, n = new Date;
                else {
                    var l = t.isFunction(i.options.serverSync) ? i.options.serverSync.apply(e, []) : null;
                    n = new Date, o = l ? n.getTime() - l.getTime() : 0, this._serverSyncs.push([i.options.serverSync, o])
                }
                var d = i.options.timezone;
                d = null == d ? -n.getTimezoneOffset() : d, (s || !s && null == i._until && null == i._since) && (i._since = i.options.since, null != i._since && (i._since = this.UTCDate(d, this._determineTime(i._since, null)), i._since && o && i._since.setMilliseconds(i._since.getMilliseconds() + o)), i._until = this.UTCDate(d, this._determineTime(i.options.until, n)), o && i._until.setMilliseconds(i._until.getMilliseconds() + o)), i._show = this._determineShow(i)
            },
            _destroyPlugin: function(e) {
                e = t(e), e.hasClass(this.markerClassName) && (this._removeTarget(e[0]), e.removeClass(this.markerClassName).empty().removeData(this.propertyName))
            },
            _pausePlugin: function(t) {
                this._hold(t, "pause")
            },
            _lapPlugin: function(t) {
                this._hold(t, "lap")
            },
            _resumePlugin: function(t) {
                this._hold(t, null)
            },
            _hold: function(e, i) {
                var s = t.data(e, this.propertyName);
                if (s) {
                    if ("pause" == s._hold && !i) {
                        s._periods = s._savePeriods;
                        var n = s._since ? "-" : "+";
                        s[s._since ? "_since" : "_until"] = this._determineTime(n + s._periods[0] + "y" + n + s._periods[1] + "o" + n + s._periods[2] + "w" + n + s._periods[3] + "d" + n + s._periods[4] + "h" + n + s._periods[5] + "m" + n + s._periods[6] + "s"), this._addTarget(e)
                    }
                    s._hold = i, s._savePeriods = "pause" == i ? s._periods : null, t.data(e, this.propertyName, s), this._updateCountdown(e, s)
                }
            },
            _getTimesPlugin: function(e) {
                var i = t.data(e, this.propertyName);
                return i ? "pause" == i._hold ? i._savePeriods : i._hold ? this._calculatePeriods(i, i._show, i.options.significant, new Date) : i._periods : null
            },
            _determineTime: function(t, e) {
                var i = function(t) {
                        var e = new Date;
                        return e.setTime(e.getTime() + 1e3 * t), e
                    },
                    s = function(t) {
                        t = t.toLowerCase();
                        for (var e = new Date, i = e.getFullYear(), s = e.getMonth(), n = e.getDate(), o = e.getHours(), a = e.getMinutes(), r = e.getSeconds(), l = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, d = l.exec(t); d;) {
                            switch (d[2] || "s") {
                                case "s":
                                    r += parseInt(d[1], 10);
                                    break;
                                case "m":
                                    a += parseInt(d[1], 10);
                                    break;
                                case "h":
                                    o += parseInt(d[1], 10);
                                    break;
                                case "d":
                                    n += parseInt(d[1], 10);
                                    break;
                                case "w":
                                    n += 7 * parseInt(d[1], 10);
                                    break;
                                case "o":
                                    s += parseInt(d[1], 10), n = Math.min(n, h._getDaysInMonth(i, s));
                                    break;
                                case "y":
                                    i += parseInt(d[1], 10), n = Math.min(n, h._getDaysInMonth(i, s))
                            }
                            d = l.exec(t)
                        }
                        return new Date(i, s, n, o, a, r, 0)
                    },
                    n = null == t ? e : "string" == typeof t ? s(t) : "number" == typeof t ? i(t) : t;
                return n && n.setMilliseconds(0), n
            },
            _getDaysInMonth: function(t, e) {
                return 32 - new Date(t, e, 32).getDate()
            },
            _normalLabels: function(t) {
                return t
            },
            _generateHTML: function(e) {
                var i = this;
                e._periods = e._hold ? e._periods : this._calculatePeriods(e, e._show, e.options.significant, new Date);
                for (var c = !1, p = 0, u = e.options.significant, f = t.extend({}, e._show), m = s; d >= m; m++) c |= "?" == e._show[m] && e._periods[m] > 0, f[m] = "?" != e._show[m] || c ? e._show[m] : null, p += f[m] ? 1 : 0, u -= e._periods[m] > 0 ? 1 : 0;
                for (var g = [!1, !1, !1, !1, !1, !1, !1], m = d; m >= s; m--) e._show[m] && (e._periods[m] ? g[m] = !0 : (g[m] = u > 0, u--));
                var v = e.options.compact ? e.options.compactLabels : e.options.labels,
                    _ = e.options.whichLabels || this._normalLabels,
                    y = function(t) {
                        var s = e.options["compactLabels" + _(e._periods[t])];
                        return f[t] ? i._translateDigits(e, e._periods[t]) + (s ? s[t] : v[t]) + " " : ""
                    },
                    w = function(t) {
                        var s = e.options["labels" + _(e._periods[t])];
                        return !e.options.significant && f[t] || e.options.significant && g[t] ? '<span class="' + h._sectionClass + '"><span class="' + h._amountClass + '">' + i._translateDigits(e, e._periods[t]) + "</span><br/>" + (s ? s[t] : v[t]) + "</span>" : ""
                    };
                return e.options.layout ? this._buildLayout(e, f, e.options.layout, e.options.compact, e.options.significant, g) : (e.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (e._hold ? " " + this._holdingClass : "") + '">' + y(s) + y(n) + y(o) + y(a) + (f[r] ? this._minDigits(e, e._periods[r], 2) : "") + (f[l] ? (f[r] ? e.options.timeSeparator : "") + this._minDigits(e, e._periods[l], 2) : "") + (f[d] ? (f[r] || f[l] ? e.options.timeSeparator : "") + this._minDigits(e, e._periods[d], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (e.options.significant || p) + (e._hold ? " " + this._holdingClass : "") + '">' + w(s) + w(n) + w(o) + w(a) + w(r) + w(l) + w(d)) + "</span>" + (e.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + e.options.description + "</span>" : "")
            },
            _buildLayout: function(e, i, c, h, p, u) {
                for (var f = e.options[h ? "compactLabels" : "labels"], m = e.options.whichLabels || this._normalLabels, g = function(t) {
                        return (e.options[(h ? "compactLabels" : "labels") + m(e._periods[t])] || f)[t]
                    }, v = function(t, i) {
                        return e.options.digits[Math.floor(t / i) % 10]
                    }, _ = {
                        desc: e.options.description,
                        sep: e.options.timeSeparator,
                        yl: g(s),
                        yn: this._minDigits(e, e._periods[s], 1),
                        ynn: this._minDigits(e, e._periods[s], 2),
                        ynnn: this._minDigits(e, e._periods[s], 3),
                        y1: v(e._periods[s], 1),
                        y10: v(e._periods[s], 10),
                        y100: v(e._periods[s], 100),
                        y1000: v(e._periods[s], 1e3),
                        ol: g(n),
                        on: this._minDigits(e, e._periods[n], 1),
                        onn: this._minDigits(e, e._periods[n], 2),
                        onnn: this._minDigits(e, e._periods[n], 3),
                        o1: v(e._periods[n], 1),
                        o10: v(e._periods[n], 10),
                        o100: v(e._periods[n], 100),
                        o1000: v(e._periods[n], 1e3),
                        wl: g(o),
                        wn: this._minDigits(e, e._periods[o], 1),
                        wnn: this._minDigits(e, e._periods[o], 2),
                        wnnn: this._minDigits(e, e._periods[o], 3),
                        w1: v(e._periods[o], 1),
                        w10: v(e._periods[o], 10),
                        w100: v(e._periods[o], 100),
                        w1000: v(e._periods[o], 1e3),
                        dl: g(a),
                        dn: this._minDigits(e, e._periods[a], 1),
                        dnn: this._minDigits(e, e._periods[a], 2),
                        dnnn: this._minDigits(e, e._periods[a], 3),
                        d1: v(e._periods[a], 1),
                        d10: v(e._periods[a], 10),
                        d100: v(e._periods[a], 100),
                        d1000: v(e._periods[a], 1e3),
                        hl: g(r),
                        hn: this._minDigits(e, e._periods[r], 1),
                        hnn: this._minDigits(e, e._periods[r], 2),
                        hnnn: this._minDigits(e, e._periods[r], 3),
                        h1: v(e._periods[r], 1),
                        h10: v(e._periods[r], 10),
                        h100: v(e._periods[r], 100),
                        h1000: v(e._periods[r], 1e3),
                        ml: g(l),
                        mn: this._minDigits(e, e._periods[l], 1),
                        mnn: this._minDigits(e, e._periods[l], 2),
                        mnnn: this._minDigits(e, e._periods[l], 3),
                        m1: v(e._periods[l], 1),
                        m10: v(e._periods[l], 10),
                        m100: v(e._periods[l], 100),
                        m1000: v(e._periods[l], 1e3),
                        sl: g(d),
                        sn: this._minDigits(e, e._periods[d], 1),
                        snn: this._minDigits(e, e._periods[d], 2),
                        snnn: this._minDigits(e, e._periods[d], 3),
                        s1: v(e._periods[d], 1),
                        s10: v(e._periods[d], 10),
                        s100: v(e._periods[d], 100),
                        s1000: v(e._periods[d], 1e3)
                    }, y = c, w = s; d >= w; w++) {
                    var b = "yowdhms".charAt(w),
                        T = new RegExp("\\{" + b + "<\\}([\\s\\S]*)\\{" + b + ">\\}", "g");
                    y = y.replace(T, !p && i[w] || p && u[w] ? "$1" : "")
                }
                return t.each(_, function(t, e) {
                    var i = new RegExp("\\{" + t + "\\}", "g");
                    y = y.replace(i, e)
                }), y
            },
            _minDigits: function(t, e, i) {
                return e = "" + e, e.length >= i ? this._translateDigits(t, e) : (e = "0000000000" + e, this._translateDigits(t, e.substr(e.length - i)))
            },
            _translateDigits: function(t, e) {
                return ("" + e).replace(/[0-9]/g, function(e) {
                    return t.options.digits[e]
                })
            },
            _determineShow: function(t) {
                var e = t.options.format,
                    i = [];
                return i[s] = e.match("y") ? "?" : e.match("Y") ? "!" : null, i[n] = e.match("o") ? "?" : e.match("O") ? "!" : null, i[o] = e.match("w") ? "?" : e.match("W") ? "!" : null, i[a] = e.match("d") ? "?" : e.match("D") ? "!" : null, i[r] = e.match("h") ? "?" : e.match("H") ? "!" : null, i[l] = e.match("m") ? "?" : e.match("M") ? "!" : null, i[d] = e.match("s") ? "?" : e.match("S") ? "!" : null, i
            },
            _calculatePeriods: function(t, e, i, c) {
                t._now = c, t._now.setMilliseconds(0);
                var p = new Date(t._now.getTime());
                t._since ? c.getTime() < t._since.getTime() ? t._now = c = p : c = t._since : (p.setTime(t._until.getTime()), c.getTime() > t._until.getTime() && (t._now = c = p));
                var u = [0, 0, 0, 0, 0, 0, 0];
                if (e[s] || e[n]) {
                    var f = h._getDaysInMonth(c.getFullYear(), c.getMonth()),
                        m = h._getDaysInMonth(p.getFullYear(), p.getMonth()),
                        g = p.getDate() == c.getDate() || p.getDate() >= Math.min(f, m) && c.getDate() >= Math.min(f, m),
                        v = function(t) {
                            return 60 * (60 * t.getHours() + t.getMinutes()) + t.getSeconds()
                        },
                        _ = Math.max(0, 12 * (p.getFullYear() - c.getFullYear()) + p.getMonth() - c.getMonth() + (p.getDate() < c.getDate() && !g || g && v(p) < v(c) ? -1 : 0));
                    u[s] = e[s] ? Math.floor(_ / 12) : 0, u[n] = e[n] ? _ - 12 * u[s] : 0, c = new Date(c.getTime());
                    var y = c.getDate() == f,
                        w = h._getDaysInMonth(c.getFullYear() + u[s], c.getMonth() + u[n]);
                    c.getDate() > w && c.setDate(w), c.setFullYear(c.getFullYear() + u[s]), c.setMonth(c.getMonth() + u[n]), y && c.setDate(w)
                }
                var b = Math.floor((p.getTime() - c.getTime()) / 1e3),
                    T = function(t, i) {
                        u[t] = e[t] ? Math.floor(b / i) : 0, b -= u[t] * i
                    };
                if (T(o, 604800), T(a, 86400), T(r, 3600), T(l, 60), T(d, 1), b > 0 && !t._since)
                    for (var C = [1, 12, 4.3482, 7, 24, 60, 60], x = d, S = 1, k = d; k >= s; k--) e[k] && (u[x] >= S && (u[x] = 0, b = 1), b > 0 && (u[k]++, b = 0, x = k, S = 1)), S *= C[k];
                if (i)
                    for (var k = s; d >= k; k++) i && u[k] ? i-- : i || (u[k] = 0);
                return u
            }
        });
        var c = ["getTimes"];
        t.fn.countdown = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return i(t, e) ? h["_" + t + "Plugin"].apply(h, [this[0]].concat(e)) : this.each(function() {
                if ("string" == typeof t) {
                    if (!h["_" + t + "Plugin"]) throw "Unknown command: " + t;
                    h["_" + t + "Plugin"].apply(h, [this].concat(e))
                } else h._attachPlugin(this, t || {})
            })
        };
        var h = t.countdown = new e
    }(jQuery), ! function(t, e) {
        if ("function" == typeof define && define.amd) define(["jquery"], e);
        else if ("object" == typeof module && module.exports) {
            var i;
            try {
                i = require("jquery")
            } catch (s) {
                i = null
            }
            module.exports = e(i)
        } else t.Slider = e(t.jQuery)
    }(this, function(t) {
        var e;
        return function(t) {
                "use strict";

                function e() {}

                function i(t) {
                    function i(e) {
                        e.prototype.option || (e.prototype.option = function(e) {
                            t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                        })
                    }

                    function n(e, i) {
                        t.fn[e] = function(n) {
                            if ("string" == typeof n) {
                                for (var a = s.call(arguments, 1), r = 0, l = this.length; l > r; r++) {
                                    var d = this[r],
                                        c = t.data(d, e);
                                    if (c)
                                        if (t.isFunction(c[n]) && "_" !== n.charAt(0)) {
                                            var h = c[n].apply(c, a);
                                            if (void 0 !== h && h !== c) return h
                                        } else o("no such method '" + n + "' for " + e + " instance");
                                    else o("cannot call methods on " + e + " prior to initialization; attempted to call '" + n + "'")
                                }
                                return this
                            }
                            var p = this.map(function() {
                                var s = t.data(this, e);
                                return s ? (s.option(n), s._init()) : (s = new i(this, n), t.data(this, e, s)), t(this)
                            });
                            return !p || p.length > 1 ? p : p[0]
                        }
                    }
                    if (t) {
                        var o = "undefined" == typeof console ? e : function(t) {
                            console.error(t)
                        };
                        return t.bridget = function(t, e) {
                            i(e), n(t, e)
                        }, t.bridget
                    }
                }
                var s = Array.prototype.slice;
                i(t)
            }(t),
            function(t) {
                function i(e, i) {
                    function s(t, e) {
                        var i = "data-slider-" + e.replace(/_/g, "-"),
                            s = t.getAttribute(i);
                        try {
                            return JSON.parse(s)
                        } catch (n) {
                            return s
                        }
                    }
                    "string" == typeof e ? this.element = document.querySelector(e) : e instanceof HTMLElement && (this.element = e), i = i ? i : {};
                    for (var o = Object.keys(this.defaultOptions), a = 0; a < o.length; a++) {
                        var r = o[a],
                            l = i[r];
                        l = "undefined" != typeof l ? l : s(this.element, r), l = null !== l ? l : this.defaultOptions[r], this.options || (this.options = {}), this.options[r] = l
                    }
                    var d, c, h, p, u, f = this.element.style.width,
                        m = !1,
                        g = this.element.parentNode;
                    if (this.sliderElem) m = !0;
                    else {
                        this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
                        var v = document.createElement("div");
                        if (v.className = "slider-track", c = document.createElement("div"), c.className = "slider-track-low", d = document.createElement("div"), d.className = "slider-selection", h = document.createElement("div"), h.className = "slider-track-high", p = document.createElement("div"), p.className = "slider-handle min-slider-handle", u = document.createElement("div"), u.className = "slider-handle max-slider-handle", v.appendChild(c), v.appendChild(d), v.appendChild(h), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                            for (a = 0; a < this.options.ticks.length; a++) {
                                var _ = document.createElement("div");
                                _.className = "slider-tick", this.ticks.push(_), v.appendChild(_)
                            }
                            d.className += " tick-slider-selection"
                        }
                        if (v.appendChild(p), v.appendChild(u), this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
                            for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", a = 0; a < this.options.ticks_labels.length; a++) {
                                var y = document.createElement("div");
                                y.className = "slider-tick-label", y.innerHTML = this.options.ticks_labels[a], this.tickLabels.push(y), this.tickLabelContainer.appendChild(y)
                            }
                        var w = function(t) {
                                var e = document.createElement("div");
                                e.className = "tooltip-arrow";
                                var i = document.createElement("div");
                                i.className = "tooltip-inner", t.appendChild(e), t.appendChild(i)
                            },
                            b = document.createElement("div");
                        b.className = "tooltip tooltip-main", w(b);
                        var T = document.createElement("div");
                        T.className = "tooltip tooltip-min", w(T);
                        var C = document.createElement("div");
                        C.className = "tooltip tooltip-max", w(C), this.sliderElem.appendChild(v), this.sliderElem.appendChild(b), this.sliderElem.appendChild(T), this.sliderElem.appendChild(C), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), g.insertBefore(this.sliderElem, this.element), this.element.style.display = "none"
                    }
                    if (t && (this.$element = t(this.element), this.$sliderElem = t(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), n[this.options.scale] && (this.options.scale = n[this.options.scale]), m === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "top", "width", "height"].forEach(function(t) {
                            this._removeProperty(this.trackLow, t), this._removeProperty(this.trackSelection, t), this._removeProperty(this.trackHigh, t)
                        }, this), [this.handle1, this.handle2].forEach(function(t) {
                            this._removeProperty(t, "left"), this._removeProperty(t, "top")
                        }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(t) {
                            this._removeProperty(t, "left"), this._removeProperty(t, "top"), this._removeProperty(t, "margin-left"), this._removeProperty(t, "margin-top"), this._removeClass(t, "right"), this._removeClass(t, "top")
                        }, this)), "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight", this._addClass(this.tooltip, "right"), this.tooltip.style.left = "100%", this._addClass(this.tooltip_min, "right"), this.tooltip_min.style.left = "100%", this._addClass(this.tooltip_max, "right"), this.tooltip_max.style.left = "100%") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = f, this.options.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth", this._addClass(this.tooltip, "top"), this.tooltip.style.top = -this.tooltip.outerHeight - 14 + "px", this._addClass(this.tooltip_min, "top"), this.tooltip_min.style.top = -this.tooltip_min.outerHeight - 14 + "px", this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = -this.tooltip_max.outerHeight - 14 + "px"), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (this.options.max = Math.max.apply(Math, this.options.ticks), this.options.min = Math.min.apply(Math, this.options.ticks)), Array.isArray(this.options.value) ? this.options.range = !0 : this.options.range && (this.options.value = [this.options.value, this.options.max]), this.trackLow = c || this.trackLow, this.trackSelection = d || this.trackSelection, this.trackHigh = h || this.trackHigh, "none" === this.options.selection && (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")), this.handle1 = p || this.handle1, this.handle2 = u || this.handle2, m === !0)
                        for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), a = 0; a < this.ticks.length; a++) this._removeClass(this.ticks[a], "round triangle hide");
                    var x = ["round", "triangle", "custom"],
                        S = -1 !== x.indexOf(this.options.handle);
                    if (S)
                        for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), a = 0; a < this.ticks.length; a++) this._addClass(this.ticks[a], this.options.handle);
                    this.offset = this._offset(this.sliderElem), this.size = this.sliderElem[this.sizePos], this.setValue(this.options.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchCapable && this.sliderElem.addEventListener("touchstart", this.mousedown, !1), this.sliderElem.addEventListener("mousedown", this.mousedown, !1), "hide" === this.options.tooltip ? (this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide")) : "always" === this.options.tooltip ? (this._showTooltip(), this._alwaysShowTooltip = !0) : (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1)), this.options.enabled ? this.enable() : this.disable()
                }
                var s = {
                        formatInvalidInputErrorMsg: function(t) {
                            return "Invalid input value '" + t + "' passed in"
                        },
                        callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
                    },
                    n = {
                        linear: {
                            toValue: function(t) {
                                var e = t / 100 * (this.options.max - this.options.min),
                                    i = this.options.min + Math.round(e / this.options.step) * this.options.step;
                                return i < this.options.min ? this.options.min : i > this.options.max ? this.options.max : i
                            },
                            toPercentage: function(t) {
                                return this.options.max === this.options.min ? 0 : 100 * (t - this.options.min) / (this.options.max - this.options.min)
                            }
                        },
                        logarithmic: {
                            toValue: function(t) {
                                var e = 0 === this.options.min ? 0 : Math.log(this.options.min),
                                    i = Math.log(this.options.max);
                                return Math.exp(e + (i - e) * t / 100)
                            },
                            toPercentage: function(t) {
                                if (this.options.max === this.options.min) return 0;
                                var e = Math.log(this.options.max),
                                    i = 0 === this.options.min ? 0 : Math.log(this.options.min),
                                    s = 0 === t ? 0 : Math.log(t);
                                return 100 * (s - i) / (e - i)
                            }
                        }
                    };
                if (e = function(t, e) {
                        return i.call(this, t, e), this
                    }, e.prototype = {
                        _init: function() {},
                        constructor: e,
                        defaultOptions: {
                            id: "",
                            min: 0,
                            max: 10,
                            step: 1,
                            precision: 0,
                            orientation: "horizontal",
                            value: 5,
                            range: !1,
                            selection: "before",
                            tooltip: "show",
                            tooltip_split: !1,
                            handle: "round",
                            reversed: !1,
                            enabled: !0,
                            formatter: function(t) {
                                return Array.isArray(t) ? t[0] + " : " + t[1] : t
                            },
                            natural_arrow_keys: !1,
                            ticks: [],
                            ticks_labels: [],
                            ticks_snap_bounds: 0,
                            scale: "linear",
                            focus: !1
                        },
                        over: !1,
                        inDrag: !1,
                        getValue: function() {
                            return this.options.range ? this.options.value : this.options.value[0]
                        },
                        setValue: function(t, e, i) {
                            t || (t = 0);
                            var s = this.getValue();
                            this.options.value = this._validateInputValue(t);
                            var n = this._applyPrecision.bind(this);
                            this.options.range ? (this.options.value[0] = n(this.options.value[0]), this.options.value[1] = n(this.options.value[1]), this.options.value[0] = Math.max(this.options.min, Math.min(this.options.max, this.options.value[0])), this.options.value[1] = Math.max(this.options.min, Math.min(this.options.max, this.options.value[1]))) : (this.options.value = n(this.options.value), this.options.value = [Math.max(this.options.min, Math.min(this.options.max, this.options.value))], this._addClass(this.handle2, "hide"), this.options.value[1] = "after" === this.options.selection ? this.options.max : this.options.min), this.percentage = this.options.max > this.options.min ? [this._toPercentage(this.options.value[0]), this._toPercentage(this.options.value[1]), 100 * this.options.step / (this.options.max - this.options.min)] : [0, 0, 100], this._layout();
                            var o = this.options.range ? this.options.value : this.options.value[0];
                            return e === !0 && this._trigger("slide", o), s !== o && i === !0 && this._trigger("change", {
                                oldValue: s,
                                newValue: o
                            }), this._setDataVal(o), this
                        },
                        destroy: function() {
                            this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), t && (this._unbindJQueryEventHandlers(), this.$element.removeData("slider"))
                        },
                        disable: function() {
                            return this.options.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this
                        },
                        enable: function() {
                            return this.options.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this
                        },
                        toggle: function() {
                            return this.options.enabled ? this.disable() : this.enable(), this
                        },
                        isEnabled: function() {
                            return this.options.enabled
                        },
                        on: function(t, e) {
                            return this._bindNonQueryEventHandler(t, e), this
                        },
                        getAttribute: function(t) {
                            return t ? this.options[t] : this.options
                        },
                        setAttribute: function(t, e) {
                            return this.options[t] = e, this
                        },
                        refresh: function() {
                            return this._removeSliderEventHandlers(), i.call(this, this.element, this.options), t && t.data(this.element, "slider", this), this
                        },
                        relayout: function() {
                            return this._layout(), this
                        },
                        _removeSliderEventHandlers: function() {
                            this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle1.removeEventListener("focus", this.showTooltip, !1), this.handle1.removeEventListener("blur", this.hideTooltip, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.handle2.removeEventListener("focus", this.handle2Keydown, !1), this.handle2.removeEventListener("blur", this.handle2Keydown, !1), this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.mousedown, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1)
                        },
                        _bindNonQueryEventHandler: function(t, e) {
                            void 0 === this.eventToCallbackMap[t] && (this.eventToCallbackMap[t] = []), this.eventToCallbackMap[t].push(e)
                        },
                        _cleanUpEventCallbacksMap: function() {
                            for (var t = Object.keys(this.eventToCallbackMap), e = 0; e < t.length; e++) {
                                var i = t[e];
                                this.eventToCallbackMap[i] = null
                            }
                        },
                        _showTooltip: function() {
                            this.options.tooltip_split === !1 ? this._addClass(this.tooltip, "in") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in")), this.over = !0
                        },
                        _hideTooltip: function() {
                            this.inDrag === !1 && this.alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in")), this.over = !1
                        },
                        _layout: function() {
                            var t;
                            if (t = this.options.reversed ? [100 - this.percentage[0], this.percentage[1]] : [this.percentage[0], this.percentage[1]], this.handle1.style[this.stylePos] = t[0] + "%", this.handle2.style[this.stylePos] = t[1] + "%", Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                                var e = Math.max.apply(Math, this.options.ticks),
                                    i = Math.min.apply(Math, this.options.ticks),
                                    s = "vertical" === this.options.orientation ? "height" : "width",
                                    n = "vertical" === this.options.orientation ? "marginTop" : "marginLeft",
                                    o = this.size / (this.options.ticks.length - 1);
                                if (this.tickLabelContainer && (this.tickLabelContainer.style[n] = -o / 2 + "px", "horizontal" === this.options.orientation)) {
                                    var a = this.tickLabelContainer.offsetHeight - this.sliderElem.offsetHeight;
                                    this.sliderElem.style.marginBottom = a + "px"
                                }
                                for (var r = 0; r < this.options.ticks.length; r++) {
                                    var l = 100 * (this.options.ticks[r] - i) / (e - i);
                                    this.ticks[r].style[this.stylePos] = l + "%", this._removeClass(this.ticks[r], "in-selection"), l <= t[0] && !this.options.range ? this._addClass(this.ticks[r], "in-selection") : l >= t[0] && l <= t[1] && this._addClass(this.ticks[r], "in-selection"), this.tickLabels[r] && (this.tickLabels[r].style[s] = o + "px")
                                }
                            }
                            if ("vertical" === this.options.orientation) this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(t[0], t[1]) + "%", this.trackSelection.style.top = Math.min(t[0], t[1]) + "%", this.trackSelection.style.height = Math.abs(t[0] - t[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(t[0], t[1]) - Math.abs(t[0] - t[1]) + "%";
                            else {
                                this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(t[0], t[1]) + "%", this.trackSelection.style.left = Math.min(t[0], t[1]) + "%", this.trackSelection.style.width = Math.abs(t[0] - t[1]) + "%", this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(t[0], t[1]) - Math.abs(t[0] - t[1]) + "%";
                                var d = this.tooltip_min.getBoundingClientRect(),
                                    c = this.tooltip_max.getBoundingClientRect();
                                d.right > c.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = this.tooltip_min.style.top)
                            }
                            var h;
                            if (this.options.range) {
                                h = this.options.formatter(this.options.value), this._setText(this.tooltipInner, h), this.tooltip.style[this.stylePos] = (t[1] + t[0]) / 2 + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px"), "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px");
                                var p = this.options.formatter(this.options.value[0]);
                                this._setText(this.tooltipInner_min, p);
                                var u = this.options.formatter(this.options.value[1]);
                                this._setText(this.tooltipInner_max, u), this.tooltip_min.style[this.stylePos] = t[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_min, "margin-top", -this.tooltip_min.offsetHeight / 2 + "px") : this._css(this.tooltip_min, "margin-left", -this.tooltip_min.offsetWidth / 2 + "px"),
                                    this.tooltip_max.style[this.stylePos] = t[1] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_max, "margin-top", -this.tooltip_max.offsetHeight / 2 + "px") : this._css(this.tooltip_max, "margin-left", -this.tooltip_max.offsetWidth / 2 + "px")
                            } else h = this.options.formatter(this.options.value[0]), this._setText(this.tooltipInner, h), this.tooltip.style[this.stylePos] = t[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px")
                        },
                        _removeProperty: function(t, e) {
                            t.style.removeProperty ? t.style.removeProperty(e) : t.style.removeAttribute(e)
                        },
                        _mousedown: function(t) {
                            if (!this.options.enabled) return !1;
                            this.offset = this._offset(this.sliderElem), this.size = this.sliderElem[this.sizePos];
                            var e = this._getPercentage(t);
                            if (this.options.range) {
                                var i = Math.abs(this.percentage[0] - e),
                                    s = Math.abs(this.percentage[1] - e);
                                this.dragged = s > i ? 0 : 1
                            } else this.dragged = 0;
                            this.percentage[this.dragged] = this.options.reversed ? 100 - e : e, this._layout(), this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this.inDrag = !0;
                            var n = this._calculateValue();
                            return this._trigger("slideStart", n), this._setDataVal(n), this.setValue(n, !1, !0), this._pauseEvent(t), this.options.focus && this._triggerFocusOnHandle(this.dragged), !0
                        },
                        _triggerFocusOnHandle: function(t) {
                            0 === t && this.handle1.focus(), 1 === t && this.handle2.focus()
                        },
                        _keydown: function(t, e) {
                            if (!this.options.enabled) return !1;
                            var i;
                            switch (e.keyCode) {
                                case 37:
                                case 40:
                                    i = -1;
                                    break;
                                case 39:
                                case 38:
                                    i = 1
                            }
                            if (i) {
                                if (this.options.natural_arrow_keys) {
                                    var s = "vertical" === this.options.orientation && !this.options.reversed,
                                        n = "horizontal" === this.options.orientation && this.options.reversed;
                                    (s || n) && (i = -i)
                                }
                                var o = this.options.value[t] + i * this.options.step;
                                return this.options.range && (o = [t ? this.options.value[0] : o, t ? o : this.options.value[1]]), this._trigger("slideStart", o), this._setDataVal(o), this.setValue(o, !0, !0), this._trigger("slideStop", o), this._setDataVal(o), this._layout(), this._pauseEvent(e), !1
                            }
                        },
                        _pauseEvent: function(t) {
                            t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), t.cancelBubble = !0, t.returnValue = !1
                        },
                        _mousemove: function(t) {
                            if (!this.options.enabled) return !1;
                            var e = this._getPercentage(t);
                            this._adjustPercentageForRangeSliders(e), this.percentage[this.dragged] = this.options.reversed ? 100 - e : e, this._layout();
                            var i = this._calculateValue(!0);
                            return this.setValue(i, !0, !0), !1
                        },
                        _adjustPercentageForRangeSliders: function(t) {
                            this.options.range && (0 === this.dragged && this.percentage[1] < t ? (this.percentage[0] = this.percentage[1], this.dragged = 1) : 1 === this.dragged && this.percentage[0] > t && (this.percentage[1] = this.percentage[0], this.dragged = 0))
                        },
                        _mouseup: function() {
                            if (!this.options.enabled) return !1;
                            this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this.inDrag = !1, this.over === !1 && this._hideTooltip();
                            var t = this._calculateValue(!0);
                            return this._layout(), this._trigger("slideStop", t), this._setDataVal(t), !1
                        },
                        _calculateValue: function(t) {
                            var e;
                            if (this.options.range ? (e = [this.options.min, this.options.max], 0 !== this.percentage[0] && (e[0] = this._toValue(this.percentage[0]), e[0] = this._applyPrecision(e[0])), 100 !== this.percentage[1] && (e[1] = this._toValue(this.percentage[1]), e[1] = this._applyPrecision(e[1]))) : (e = this._toValue(this.percentage[0]), e = parseFloat(e), e = this._applyPrecision(e)), t) {
                                for (var i = [e, 1 / 0], s = 0; s < this.options.ticks.length; s++) {
                                    var n = Math.abs(this.options.ticks[s] - e);
                                    n <= i[1] && (i = [this.options.ticks[s], n])
                                }
                                if (i[1] <= this.options.ticks_snap_bounds) return i[0]
                            }
                            return e
                        },
                        _applyPrecision: function(t) {
                            var e = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
                            return this._applyToFixedAndParseFloat(t, e)
                        },
                        _getNumDigitsAfterDecimalPlace: function(t) {
                            var e = ("" + t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                            return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0
                        },
                        _applyToFixedAndParseFloat: function(t, e) {
                            var i = t.toFixed(e);
                            return parseFloat(i)
                        },
                        _getPercentage: function(t) {
                            !this.touchCapable || "touchstart" !== t.type && "touchmove" !== t.type || (t = t.touches[0]);
                            var e = t[this.mousePos],
                                i = this.offset[this.stylePos],
                                s = e - i,
                                n = s / this.size * 100;
                            return n = Math.round(n / this.percentage[2]) * this.percentage[2], Math.max(0, Math.min(100, n))
                        },
                        _validateInputValue: function(t) {
                            if ("number" == typeof t) return t;
                            if (Array.isArray(t)) return this._validateArray(t), t;
                            throw new Error(s.formatInvalidInputErrorMsg(t))
                        },
                        _validateArray: function(t) {
                            for (var e = 0; e < t.length; e++) {
                                var i = t[e];
                                if ("number" != typeof i) throw new Error(s.formatInvalidInputErrorMsg(i))
                            }
                        },
                        _setDataVal: function(t) {
                            var e = "value: '" + t + "'";
                            this.element.setAttribute("data", e), this.element.setAttribute("value", t), this.element.value = t
                        },
                        _trigger: function(e, i) {
                            i = i || 0 === i ? i : void 0;
                            var s = this.eventToCallbackMap[e];
                            if (s && s.length)
                                for (var n = 0; n < s.length; n++) {
                                    var o = s[n];
                                    o(i)
                                }
                            t && this._triggerJQueryEvent(e, i)
                        },
                        _triggerJQueryEvent: function(t, e) {
                            var i = {
                                type: t,
                                value: e
                            };
                            this.$element.trigger(i), this.$sliderElem.trigger(i)
                        },
                        _unbindJQueryEventHandlers: function() {
                            this.$element.off(), this.$sliderElem.off()
                        },
                        _setText: function(t, e) {
                            "undefined" != typeof t.innerText ? t.innerText = e : "undefined" != typeof t.textContent && (t.textContent = e)
                        },
                        _removeClass: function(t, e) {
                            for (var i = e.split(" "), s = t.className, n = 0; n < i.length; n++) {
                                var o = i[n],
                                    a = new RegExp("(?:\\s|^)" + o + "(?:\\s|$)");
                                s = s.replace(a, " ")
                            }
                            t.className = s.trim()
                        },
                        _addClass: function(t, e) {
                            for (var i = e.split(" "), s = t.className, n = 0; n < i.length; n++) {
                                var o = i[n],
                                    a = new RegExp("(?:\\s|^)" + o + "(?:\\s|$)"),
                                    r = a.test(s);
                                r || (s += " " + o)
                            }
                            t.className = s.trim()
                        },
                        _offset: function(t) {
                            if ("vertical" === this.options.orientation) return {
                                left: t.offsetLeft,
                                top: t.offsetTop
                            };
                            var e = t.getBoundingClientRect(),
                                i = e.left,
                                s = e.top;
                            return {
                                left: i,
                                top: s
                            }
                        },
                        _css: function(e, i, s) {
                            if (t) t.style(e, i, s);
                            else {
                                var n = i.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(t, e) {
                                    return e.toUpperCase()
                                });
                                e.style[n] = s
                            }
                        },
                        _toValue: function(t) {
                            return this.options.scale.toValue.apply(this, [t])
                        },
                        _toPercentage: function(t) {
                            return this.options.scale.toPercentage.apply(this, [t])
                        }
                    }, t) {
                    var o = t.fn.slider ? "bootstrapSlider" : "slider";
                    t.bridget(o, e)
                }
            }(t), e
    }),
    function(t) {
        function e(t) {
            return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }

        function i(t, e, i) {
            return e < t.length ? t : Array(e - t.length + 1).join(i || " ") + t
        }

        function s(t, e, i, s, n, o) {
            return e && i ? '<div class="bootstrap-datetimepicker-widget dropdown-menu"><ul><li' + (o ? ' class="collapse in"' : "") + '><div class="datepicker">' + u.template + '</div></li><li class="picker-switch accordion-toggle"><a><i class="' + t + '"></i></a></li><li' + (o ? ' class="collapse"' : "") + '><div class="timepicker">' + f.getTemplate(s, n) + "</div></li></ul></div>" : i ? '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="timepicker">' + f.getTemplate(s, n) + "</div></div>" : '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="datepicker">' + u.template + "</div></div>"
        }

        function n() {
            return new Date(Date.UTC.apply(Date, arguments))
        }
        var o = (void 0 != window.orientation, function(t, e) {
            this.id = a++, this.init(t, e)
        });
        o.prototype = {
            constructor: o,
            init: function(e, i) {
                var n;
                if (!i.pickTime && !i.pickDate) throw new Error("Must choose at least one picker");
                if (this.options = i, this.$element = t(e), this.language = i.language in r ? i.language : "en", this.pickDate = i.pickDate, this.pickTime = i.pickTime, this.isInput = this.$element.is("input"), this.component = !1, (this.$element.find(".input-append") || this.$element.find(".input-prepend")) && (this.component = this.$element.find(".add-on")), this.format = i.format, this.format || (this.isInput ? this.format = this.$element.data("format") : this.format = this.$element.find("input").data("format"), this.format || (this.format = "MM/dd/yyyy")), this._compileFormat(), this.component && (n = this.component.find("i")), this.pickTime && (n && n.length && (this.timeIcon = n.data("time-icon")), this.timeIcon || (this.timeIcon = "glyphicon glyphicon-time icon-time"), n.addClass(this.timeIcon)), this.pickDate && (n && n.length && (this.dateIcon = n.data("date-icon")), this.dateIcon || (this.dateIcon = "glyphicon glyphicon-calendar icon-calendar"), n.removeClass(this.timeIcon), n.addClass(this.dateIcon)), this.widget = t(s(this.timeIcon, i.pickDate, i.pickTime, i.pick12HourFormat, i.pickSeconds, i.collapse)).appendTo("body"), this.minViewMode = i.minViewMode || this.$element.data("date-minviewmode") || 0, "string" == typeof this.minViewMode) switch (this.minViewMode) {
                    case "months":
                        this.minViewMode = 1;
                        break;
                    case "years":
                        this.minViewMode = 2;
                        break;
                    default:
                        this.minViewMode = 0
                }
                if (this.viewMode = i.viewMode || this.$element.data("date-viewmode") || 0, "string" == typeof this.viewMode) switch (this.viewMode) {
                    case "months":
                        this.viewMode = 1;
                        break;
                    case "years":
                        this.viewMode = 2;
                        break;
                    default:
                        this.viewMode = 0
                }
                this.startViewMode = this.viewMode, this.weekStart = i.weekStart || this.$element.data("date-weekstart") || 0, this.weekEnd = 0 === this.weekStart ? 6 : this.weekStart - 1, this.setStartDate(i.startDate || this.$element.data("date-startdate")), this.setEndDate(i.endDate || this.$element.data("date-enddate")), this.fillDow(), this.fillMonths(), this.fillHours(), this.fillMinutes(), this.fillSeconds(), this.update(), this.showMode(), this._attachDatePickerEvents()
            },
            show: function(t) {
                this.widget.show(), this.height = this.component ? this.component.outerHeight() : this.$element.outerHeight(), this.place(), this.$element.trigger({
                    type: "show",
                    date: this._date
                }), this._attachDatePickerGlobalEvents(), t && (t.stopPropagation(), t.preventDefault())
            },
            disable: function() {
                this.$element.find("input").prop("disabled", !0), this._detachDatePickerEvents()
            },
            enable: function() {
                this.$element.find("input").prop("disabled", !1), this._attachDatePickerEvents()
            },
            hide: function() {
                for (var t = this.widget.find(".collapse"), e = 0; e < t.length; e++) {
                    var i = t.eq(e).data("collapse");
                    if (i && i.transitioning) return
                }
                this.widget.hide(), this.viewMode = this.startViewMode, this.showMode(), this.set(), this.$element.trigger({
                    type: "hide",
                    date: this._date
                }), this._detachDatePickerGlobalEvents()
            },
            set: function() {
                var t = "";
                if (this._unset || (t = this.formatDate(this._date)), this.isInput) this.$element.val(t), this._resetMaskPos(this.$element);
                else {
                    if (this.component) {
                        var e = this.$element.find("input");
                        e.val(t), this._resetMaskPos(e)
                    }
                    this.$element.data("date", t)
                }
            },
            setValue: function(t) {
                t ? this._unset = !1 : this._unset = !0, "string" == typeof t ? this._date = this.parseDate(t) : t && (this._date = new Date(t)), this.set(), this.viewDate = n(this._date.getUTCFullYear(), this._date.getUTCMonth(), 1, 0, 0, 0, 0), this.fillDate(), this.fillTime()
            },
            getDate: function() {
                return this._unset ? null : new Date(this._date.valueOf())
            },
            setDate: function(t) {
                t ? this.setValue(t.valueOf()) : this.setValue(null)
            },
            setStartDate: function(t) {
                t instanceof Date ? this.startDate = t : "string" == typeof t ? (this.startDate = new n(t), this.startDate.getUTCFullYear() || (this.startDate = -(1 / 0))) : this.startDate = -(1 / 0), this.viewDate && this.update()
            },
            setEndDate: function(t) {
                t instanceof Date ? this.endDate = t : "string" == typeof t ? (this.endDate = new n(t), this.endDate.getUTCFullYear() || (this.endDate = 1 / 0)) : this.endDate = 1 / 0, this.viewDate && this.update()
            },
            getLocalDate: function() {
                if (this._unset) return null;
                var t = this._date;
                return new Date(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds())
            },
            setLocalDate: function(t) {
                t ? this.setValue(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds())) : this.setValue(null)
            },
            place: function() {
                var e = "absolute",
                    i = this.component ? this.component.offset() : this.$element.offset();
                this.width = this.component ? this.component.outerWidth() : this.$element.outerWidth(), i.top = i.top + this.height;
                var s = t(window);
                void 0 != this.options.width && this.widget.width(this.options.width), "left" == this.options.orientation && (this.widget.addClass("left-oriented"), i.left = i.left - this.widget.width() + 20), this._isInFixed() && (e = "fixed", i.top -= s.scrollTop(), i.left -= s.scrollLeft()), s.width() < i.left + this.widget.outerWidth() ? (i.right = s.width() - i.left - this.width, i.left = "auto", this.widget.addClass("pull-right")) : (i.right = "auto", this.widget.removeClass("pull-right")), this.widget.css({
                    position: e,
                    top: i.top,
                    left: i.left,
                    right: i.right
                })
            },
            notifyChange: function() {
                this.$element.trigger({
                    type: "changeDate",
                    date: this.getDate(),
                    localDate: this.getLocalDate()
                })
            },
            update: function(t) {
                var e = t;
                if (!e && (e = this.isInput ? this.$element.val() : this.$element.find("input").val(), e && (this._date = this.parseDate(e)), !this._date)) {
                    var i = new Date;
                    this._date = n(i.getFullYear(), i.getMonth(), i.getDate(), i.getHours(), i.getMinutes(), i.getSeconds(), i.getMilliseconds())
                }
                this.viewDate = n(this._date.getUTCFullYear(), this._date.getUTCMonth(), 1, 0, 0, 0, 0), this.fillDate(), this.fillTime()
            },
            fillDow: function() {
                for (var e = this.weekStart, i = t("<tr>"); e < this.weekStart + 7;) i.append('<th class="dow">' + r[this.language].daysMin[e++ % 7] + "</th>");
                this.widget.find(".datepicker-days thead").append(i)
            },
            fillMonths: function() {
                for (var t = "", e = 0; 12 > e;) t += '<span class="month">' + r[this.language].monthsShort[e++] + "</span>";
                this.widget.find(".datepicker-months td").append(t)
            },
            fillDate: function() {
                var e = this.viewDate.getUTCFullYear(),
                    i = this.viewDate.getUTCMonth(),
                    s = n(this._date.getUTCFullYear(), this._date.getUTCMonth(), this._date.getUTCDate(), 0, 0, 0, 0),
                    o = "object" == typeof this.startDate ? this.startDate.getUTCFullYear() : -(1 / 0),
                    a = "object" == typeof this.startDate ? this.startDate.getUTCMonth() : -1,
                    l = "object" == typeof this.endDate ? this.endDate.getUTCFullYear() : 1 / 0,
                    d = "object" == typeof this.endDate ? this.endDate.getUTCMonth() : 12;
                this.widget.find(".datepicker-days").find(".disabled").removeClass("disabled"), this.widget.find(".datepicker-months").find(".disabled").removeClass("disabled"), this.widget.find(".datepicker-years").find(".disabled").removeClass("disabled"), this.widget.find(".datepicker-days th:eq(1)").text(r[this.language].months[i] + " " + e);
                var c = n(e, i - 1, 28, 0, 0, 0, 0),
                    h = u.getDaysInMonth(c.getUTCFullYear(), c.getUTCMonth());
                c.setUTCDate(h), c.setUTCDate(h - (c.getUTCDay() - this.weekStart + 7) % 7), (e == o && a >= i || o > e) && this.widget.find(".datepicker-days th:eq(0)").addClass("disabled"), (e == l && i >= d || e > l) && this.widget.find(".datepicker-days th:eq(2)").addClass("disabled");
                var p = new Date(c.valueOf());
                p.setUTCDate(p.getUTCDate() + 42), p = p.valueOf();
                for (var f, m, g = []; c.valueOf() < p;) c.getUTCDay() === this.weekStart && (f = t("<tr>"), g.push(f)), m = "", c.getUTCFullYear() < e || c.getUTCFullYear() == e && c.getUTCMonth() < i ? m += " old" : (c.getUTCFullYear() > e || c.getUTCFullYear() == e && c.getUTCMonth() > i) && (m += " new"), c.valueOf() === s.valueOf() && (m += " active"), c.valueOf() + 864e5 <= this.startDate && (m += " disabled"), c.valueOf() > this.endDate && (m += " disabled"), f.append('<td class="day' + m + '">' + c.getUTCDate() + "</td>"), c.setUTCDate(c.getUTCDate() + 1);
                this.widget.find(".datepicker-days tbody").empty().append(g);
                var v = this._date.getUTCFullYear(),
                    _ = this.widget.find(".datepicker-months").find("th:eq(1)").text(e).end().find("span").removeClass("active");
                v === e && _.eq(this._date.getUTCMonth()).addClass("active"), o > v - 1 && this.widget.find(".datepicker-months th:eq(0)").addClass("disabled"), v + 1 > l && this.widget.find(".datepicker-months th:eq(2)").addClass("disabled");
                for (var y = 0; 12 > y; y++) e == o && a > y || o > e ? t(_[y]).addClass("disabled") : (e == l && y > d || e > l) && t(_[y]).addClass("disabled");
                g = "", e = 10 * parseInt(e / 10, 10);
                var w = this.widget.find(".datepicker-years").find("th:eq(1)").text(e + "-" + (e + 9)).end().find("td");
                this.widget.find(".datepicker-years").find("th").removeClass("disabled"), o > e && this.widget.find(".datepicker-years").find("th:eq(0)").addClass("disabled"), e + 9 > l && this.widget.find(".datepicker-years").find("th:eq(2)").addClass("disabled"), e -= 1;
                for (var y = -1; 11 > y; y++) g += '<span class="year' + (-1 === y || 10 === y ? " old" : "") + (v === e ? " active" : "") + (o > e || e > l ? " disabled" : "") + '">' + e + "</span>", e += 1;
                w.html(g)
            },
            fillHours: function() {
                var t = this.widget.find(".timepicker .timepicker-hours table");
                t.parent().hide();
                var e = "";
                if (this.options.pick12HourFormat)
                    for (var s = 1, n = 0; 3 > n; n += 1) {
                        e += "<tr>";
                        for (var o = 0; 4 > o; o += 1) {
                            var a = s.toString();
                            e += '<td class="hour">' + i(a, 2, "0") + "</td>", s++
                        }
                        e += "</tr>"
                    } else
                        for (var s = 0, n = 0; 6 > n; n += 1) {
                            e += "<tr>";
                            for (var o = 0; 4 > o; o += 1) {
                                var a = s.toString();
                                e += '<td class="hour">' + i(a, 2, "0") + "</td>", s++
                            }
                            e += "</tr>"
                        }
                t.html(e)
            },
            fillMinutes: function() {
                var t = this.widget.find(".timepicker .timepicker-minutes table");
                t.parent().hide();
                for (var e = "", s = 0, n = 0; 5 > n; n++) {
                    e += "<tr>";
                    for (var o = 0; 4 > o; o += 1) {
                        var a = s.toString();
                        e += '<td class="minute">' + i(a, 2, "0") + "</td>", s += 3
                    }
                    e += "</tr>"
                }
                t.html(e)
            },
            fillSeconds: function() {
                var t = this.widget.find(".timepicker .timepicker-seconds table");
                t.parent().hide();
                for (var e = "", s = 0, n = 0; 5 > n; n++) {
                    e += "<tr>";
                    for (var o = 0; 4 > o; o += 1) {
                        var a = s.toString();
                        e += '<td class="second">' + i(a, 2, "0") + "</td>", s += 3
                    }
                    e += "</tr>"
                }
                t.html(e)
            },
            fillTime: function() {
                if (this._date) {
                    var t = this.widget.find(".timepicker span[data-time-component]"),
                        e = (t.closest("table"), this.options.pick12HourFormat),
                        s = this._date.getUTCHours(),
                        n = "AM";
                    e && (s >= 12 && (n = "PM"), 0 === s ? s = 12 : 12 != s && (s %= 12), this.widget.find(".timepicker [data-action=togglePeriod]").text(n)), s = i(s.toString(), 2, "0");
                    var o = i(this._date.getUTCMinutes().toString(), 2, "0"),
                        a = i(this._date.getUTCSeconds().toString(), 2, "0");
                    t.filter("[data-time-component=hours]").text(s), t.filter("[data-time-component=minutes]").text(o), t.filter("[data-time-component=seconds]").text(a)
                }
            },
            click: function(e) {
                e.stopPropagation(), e.preventDefault(), this._unset = !1;
                var i = t(e.target).closest("span, td, th");
                if (1 === i.length && !i.is(".disabled")) switch (i[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (i[0].className) {
                            case "switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                var s = this.viewDate,
                                    o = u.modes[this.viewMode].navFnc,
                                    a = u.modes[this.viewMode].navStep;
                                "prev" === i[0].className && (a = -1 * a), s["set" + o](s["get" + o]() + a), this.fillDate(), this.set()
                        }
                        break;
                    case "span":
                        if (i.is(".month")) {
                            var r = i.parent().find("span").index(i);
                            this.viewDate.setUTCMonth(r)
                        } else {
                            var l = parseInt(i.text(), 10) || 0;
                            this.viewDate.setUTCFullYear(l)
                        }
                        0 !== this.viewMode && (this._date = n(this.viewDate.getUTCFullYear(), this.viewDate.getUTCMonth(), this.viewDate.getUTCDate(), this._date.getUTCHours(), this._date.getUTCMinutes(), this._date.getUTCSeconds(), this._date.getUTCMilliseconds()), this.notifyChange()), this.showMode(-1), this.fillDate(), this.set();
                        break;
                    case "td":
                        if (i.is(".day")) {
                            var d = parseInt(i.text(), 10) || 1,
                                r = this.viewDate.getUTCMonth(),
                                l = this.viewDate.getUTCFullYear();
                            i.is(".old") ? 0 === r ? (r = 11, l -= 1) : r -= 1 : i.is(".new") && (11 == r ? (r = 0, l += 1) : r += 1), this._date = n(l, r, d, this._date.getUTCHours(), this._date.getUTCMinutes(), this._date.getUTCSeconds(), this._date.getUTCMilliseconds()), this.viewDate = n(l, r, Math.min(28, d), 0, 0, 0, 0), this.fillDate(), this.set(), this.notifyChange()
                        }
                }
            },
            actions: {
                incrementHours: function(t) {
                    this._date.setUTCHours(this._date.getUTCHours() + 1)
                },
                incrementMinutes: function(t) {
                    this._date.setUTCMinutes(this._date.getUTCMinutes() + 1)
                },
                incrementSeconds: function(t) {
                    this._date.setUTCSeconds(this._date.getUTCSeconds() + 1)
                },
                decrementHours: function(t) {
                    this._date.setUTCHours(this._date.getUTCHours() - 1)
                },
                decrementMinutes: function(t) {
                    this._date.setUTCMinutes(this._date.getUTCMinutes() - 1)
                },
                decrementSeconds: function(t) {
                    this._date.setUTCSeconds(this._date.getUTCSeconds() - 1)
                },
                togglePeriod: function(t) {
                    var e = this._date.getUTCHours();
                    e >= 12 ? e -= 12 : e += 12, this._date.setUTCHours(e)
                },
                showPicker: function() {
                    this.widget.find(".timepicker > div:not(.timepicker-picker)").hide(), this.widget.find(".timepicker .timepicker-picker").show()
                },
                showHours: function() {
                    this.widget.find(".timepicker .timepicker-picker").hide(), this.widget.find(".timepicker .timepicker-hours").show()
                },
                showMinutes: function() {
                    this.widget.find(".timepicker .timepicker-picker").hide(), this.widget.find(".timepicker .timepicker-minutes").show()
                },
                showSeconds: function() {
                    this.widget.find(".timepicker .timepicker-picker").hide(), this.widget.find(".timepicker .timepicker-seconds").show()
                },
                selectHour: function(e) {
                    var i = t(e.target),
                        s = parseInt(i.text(), 10);
                    if (this.options.pick12HourFormat) {
                        var n = this._date.getUTCHours();
                        n >= 12 ? 12 != s && (s = (s + 12) % 24) : 12 === s ? s = 0 : s %= 12
                    }
                    this._date.setUTCHours(s), this.actions.showPicker.call(this)
                },
                selectMinute: function(e) {
                    var i = t(e.target),
                        s = parseInt(i.text(), 10);
                    this._date.setUTCMinutes(s), this.actions.showPicker.call(this)
                },
                selectSecond: function(e) {
                    var i = t(e.target),
                        s = parseInt(i.text(), 10);
                    this._date.setUTCSeconds(s), this.actions.showPicker.call(this)
                }
            },
            doAction: function(e) {
                e.stopPropagation(), e.preventDefault(), this._date || (this._date = n(1970, 0, 0, 0, 0, 0, 0));
                var i = t(e.currentTarget).data("action"),
                    s = this.actions[i].apply(this, arguments);
                return this.set(), this.fillTime(), this.notifyChange(), s
            },
            stopEvent: function(t) {
                t.stopPropagation(), t.preventDefault()
            },
            keydown: function(e) {
                var i = this,
                    s = e.which,
                    n = t(e.target);
                (8 == s || 46 == s) && setTimeout(function() {
                    i._resetMaskPos(n)
                })
            },
            keypress: function(e) {
                var i = e.which;
                if (8 != i && 46 != i) {
                    var s = t(e.target),
                        n = String.fromCharCode(i),
                        o = s.val() || "";
                    o += n;
                    var a = this._mask[this._maskPos];
                    if (!a) return !1;
                    if (a.end == o.length) {
                        if (!a.pattern.test(o.slice(a.start))) {
                            for (o = o.slice(0, o.length - 1);
                                (a = this._mask[this._maskPos]) && a.character;) o += a.character, this._maskPos++;
                            return o += n, a.end != o.length ? (s.val(o), !1) : a.pattern.test(o.slice(a.start)) ? (s.val(o), this._maskPos++, !1) : (s.val(o.slice(0, a.start)), !1)
                        }
                        this._maskPos++
                    }
                }
            },
            change: function(e) {
                var i = t(e.target),
                    s = i.val();
                this._formatPattern.test(s) ? (this.update(), this.setValue(this._date.getTime()), this.notifyChange(), this.set()) : s && s.trim() ? (this.setValue(this._date.getTime()), this._date ? this.set() : i.val("")) : this._date && (this.setValue(null), this.notifyChange(), this._unset = !0), this._resetMaskPos(i)
            },
            showMode: function(t) {
                t && (this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + t))), this.widget.find(".datepicker > div").hide().filter(".datepicker-" + u.modes[this.viewMode].clsName).show()
            },
            destroy: function() {
                this._detachDatePickerEvents(), this._detachDatePickerGlobalEvents(), this.widget.remove(), this.$element.removeData("datetimepicker"), this.component.removeData("datetimepicker")
            },
            formatDate: function(t) {
                return this.format.replace(p, function(e) {
                    var s, n, o, a = e.length;
                    if ("ms" === e && (a = 1), n = l[e].property, "Hours12" === n) o = t.getUTCHours(), 0 === o ? o = 12 : 12 !== o && (o %= 12);
                    else {
                        if ("Period12" === n) return t.getUTCHours() >= 12 ? "PM" : "AM";
                        s = "get" + n, o = t[s]()
                    }
                    return "getUTCMonth" === s && (o += 1), "getUTCYear" === s && (o = o + 1900 - 2e3), i(o.toString(), a, "0")
                })
            },
            parseDate: function(t) {
                var e, i, s, n, o = {};
                if (!(e = this._formatPattern.exec(t))) return null;
                for (i = 1; i < e.length; i++) s = this._propertiesByIndex[i], s && (n = e[i], /^\d+$/.test(n) && (n = parseInt(n, 10)), o[s] = n);
                return this._finishParsingDate(o)
            },
            _resetMaskPos: function(t) {
                for (var e = t.val(), i = 0; i < this._mask.length; i++) {
                    if (this._mask[i].end > e.length) {
                        this._maskPos = i;
                        break
                    }
                    if (this._mask[i].end === e.length) {
                        this._maskPos = i + 1;
                        break
                    }
                }
            },
            _finishParsingDate: function(t) {
                var e, i, s, o, a, r, l;
                return e = t.UTCFullYear, t.UTCYear && (e = 2e3 + t.UTCYear), e || (e = 1970), i = t.UTCMonth ? t.UTCMonth - 1 : 0, s = t.UTCDate || 1, o = t.UTCHours || 0, a = t.UTCMinutes || 0, r = t.UTCSeconds || 0, l = t.UTCMilliseconds || 0, t.Hours12 && (o = t.Hours12), t.Period12 && (/pm/i.test(t.Period12) ? 12 != o && (o = (o + 12) % 24) : o %= 12), n(e, i, s, o, a, r, l)
            },
            _compileFormat: function() {
                for (var t, i, s = [], n = [], o = this.format, a = {}, r = 0, d = 0; t = h.exec(o);) i = t[0], i in l ? (r++, a[r] = l[i].property, s.push("\\s*" + l[i].getPattern(this) + "\\s*"), n.push({
                    pattern: new RegExp(l[i].getPattern(this)),
                    property: l[i].property,
                    start: d,
                    end: d += i.length
                })) : (s.push(e(i)), n.push({
                    pattern: new RegExp(e(i)),
                    character: i,
                    start: d,
                    end: ++d
                })), o = o.slice(i.length);
                this._mask = n, this._maskPos = 0, this._formatPattern = new RegExp("^\\s*" + s.join("") + "\\s*$"), this._propertiesByIndex = a
            },
            _attachDatePickerEvents: function() {
                var e = this;
                this.widget.on("click", ".datepicker *", t.proxy(this.click, this)), this.widget.on("click", "[data-action]", t.proxy(this.doAction, this)), this.widget.on("mousedown", t.proxy(this.stopEvent, this)), this.pickDate && this.pickTime && this.widget.on("click.togglePicker", ".accordion-toggle", function(i) {
                    i.stopPropagation();
                    var s = t(this),
                        n = s.closest("ul"),
                        o = n.find(".collapse.in"),
                        a = n.find(".collapse:not(.in)");
                    if (o && o.length) {
                        var r = o.data("collapse");
                        if (r && r.transitioning) return;
                        o.collapse("hide"), a.collapse("show"), s.find("i").toggleClass(e.timeIcon + " " + e.dateIcon), e.$element.find(".add-on i").toggleClass(e.timeIcon + " " + e.dateIcon)
                    }
                }), this.isInput ? (this.$element.on({
                    focus: t.proxy(this.show, this),
                    change: t.proxy(this.change, this)
                }), this.options.maskInput && this.$element.on({
                    keydown: t.proxy(this.keydown, this),
                    keypress: t.proxy(this.keypress, this)
                })) : (this.$element.on({
                    change: t.proxy(this.change, this)
                }, "input"), this.options.maskInput && this.$element.on({
                    keydown: t.proxy(this.keydown, this),
                    keypress: t.proxy(this.keypress, this)
                }, "input"), this.component ? this.component.on("click", t.proxy(this.show, this)) : this.$element.on("click", t.proxy(this.show, this)))
            },
            _attachDatePickerGlobalEvents: function() {
                t(window).on("resize.datetimepicker" + this.id, t.proxy(this.place, this)), this.isInput || t(document).on("mousedown.datetimepicker" + this.id, t.proxy(this.hide, this))
            },
            _detachDatePickerEvents: function() {
                this.widget.off("click", ".datepicker *", this.click), this.widget.off("click", "[data-action]"), this.widget.off("mousedown", this.stopEvent), this.pickDate && this.pickTime && this.widget.off("click.togglePicker"), this.isInput ? (this.$element.off({
                    focus: this.show,
                    change: this.change
                }), this.options.maskInput && this.$element.off({
                    keydown: this.keydown,
                    keypress: this.keypress
                })) : (this.$element.off({
                    change: this.change
                }, "input"), this.options.maskInput && this.$element.off({
                    keydown: this.keydown,
                    keypress: this.keypress
                }, "input"), this.component ? this.component.off("click", this.show) : this.$element.off("click", this.show))
            },
            _detachDatePickerGlobalEvents: function() {
                t(window).off("resize.datetimepicker" + this.id), this.isInput || t(document).off("mousedown.datetimepicker" + this.id)
            },
            _isInFixed: function() {
                if (this.$element) {
                    for (var e = this.$element.parents(), i = !1, s = 0; s < e.length; s++)
                        if ("fixed" == t(e[s]).css("position")) {
                            i = !0;
                            break
                        }
                    return i
                }
                return !1
            }
        }, t.fn.datetimepicker = function(e, i) {
            return this.each(function() {
                var s = t(this),
                    n = s.data("datetimepicker"),
                    a = "object" == typeof e && e;
                n || s.data("datetimepicker", n = new o(this, t.extend({}, t.fn.datetimepicker.defaults, a))), "string" == typeof e && n[e](i)
            })
        }, t.fn.datetimepicker.defaults = {
            maskInput: !1,
            pickDate: !0,
            pickTime: !0,
            pick12HourFormat: !1,
            pickSeconds: !0,
            startDate: -(1 / 0),
            endDate: 1 / 0,
            collapse: !0
        }, t.fn.datetimepicker.Constructor = o;
        var a = 0,
            r = t.fn.datetimepicker.dates = {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                }
            },
            l = {
                dd: {
                    property: "UTCDate",
                    getPattern: function() {
                        return "(0?[1-9]|[1-2][0-9]|3[0-1])\\b"
                    }
                },
                MM: {
                    property: "UTCMonth",
                    getPattern: function() {
                        return "(0?[1-9]|1[0-2])\\b"
                    }
                },
                yy: {
                    property: "UTCYear",
                    getPattern: function() {
                        return "(\\d{2})\\b"
                    }
                },
                yyyy: {
                    property: "UTCFullYear",
                    getPattern: function() {
                        return "(\\d{4})\\b"
                    }
                },
                hh: {
                    property: "UTCHours",
                    getPattern: function() {
                        return "(0?[0-9]|1[0-9]|2[0-3])\\b"
                    }
                },
                mm: {
                    property: "UTCMinutes",
                    getPattern: function() {
                        return "(0?[0-9]|[1-5][0-9])\\b"
                    }
                },
                ss: {
                    property: "UTCSeconds",
                    getPattern: function() {
                        return "(0?[0-9]|[1-5][0-9])\\b"
                    }
                },
                ms: {
                    property: "UTCMilliseconds",
                    getPattern: function() {
                        return "([0-9]{1,3})\\b"
                    }
                },
                HH: {
                    property: "Hours12",
                    getPattern: function() {
                        return "(0?[1-9]|1[0-2])\\b"
                    }
                },
                PP: {
                    property: "Period12",
                    getPattern: function() {
                        return "(AM|PM|am|pm|Am|aM|Pm|pM)\\b"
                    }
                }
            },
            d = [];
        for (var c in l) d.push(c);
        d[d.length - 1] += "\\b", d.push(".");
        var h = new RegExp(d.join("\\b|"));
        d.pop();
        var p = new RegExp(d.join("\\b|"), "g"),
            u = {
                modes: [{
                    clsName: "days",
                    navFnc: "UTCMonth",
                    navStep: 1
                }, {
                    clsName: "months",
                    navFnc: "UTCFullYear",
                    navStep: 1
                }, {
                    clsName: "years",
                    navFnc: "UTCFullYear",
                    navStep: 10
                }],
                isLeapYear: function(t) {
                    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
                },
                getDaysInMonth: function(t, e) {
                    return [31, u.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
                },
                headTemplate: '<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
            };
        u.template = '<div class="datepicker-days"><table class="table-condensed">' + u.headTemplate + '<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">' + u.headTemplate + u.contTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + u.headTemplate + u.contTemplate + "</table></div>";
        var f = {
            hourTemplate: '<span data-action="showHours" data-time-component="hours" class="timepicker-hour"></span>',
            minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',
            secondTemplate: '<span data-action="showSeconds" data-time-component="seconds" class="timepicker-second"></span>'
        };
        f.getTemplate = function(t, e) {
            return '<div class="timepicker-picker"><table class="table-condensed"' + (t ? ' data-hour-format="12"' : "") + '><tr><td><a href="#" class="btn" data-action="incrementHours"><i class="glyphicon glyphicon-chevron-up icon-chevron-up"></i></a></td><td class="separator"></td><td><a href="#" class="btn" data-action="incrementMinutes"><i class="glyphicon glyphicon-chevron-up icon-chevron-up"></i></a></td>' + (e ? '<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><i class="glyphicon glyphicon-chevron-up icon-chevron-up"></i></a></td>' : "") + (t ? '<td class="separator"></td>' : "") + "</tr><tr><td>" + f.hourTemplate + '</td> <td class="separator">:</td><td>' + f.minuteTemplate + "</td> " + (e ? '<td class="separator">:</td><td>' + f.secondTemplate + "</td>" : "") + (t ? '<td class="separator"></td><td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>' : "") + '</tr><tr><td><a href="#" class="btn" data-action="decrementHours"><i class="glyphicon glyphicon-chevron-down icon-chevron-down"></i></a></td><td class="separator"></td><td><a href="#" class="btn" data-action="decrementMinutes"><i class="glyphicon glyphicon-chevron-down icon-chevron-down"></i></a></td>' + (e ? '<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><i class="glyphicon glyphicon-chevron-down icon-chevron-down"></i></a></td>' : "") + (t ? '<td class="separator"></td>' : "") + '</tr></table></div><div class="timepicker-hours" data-action="selectHour"><table class="table-condensed"></table></div><div class="timepicker-minutes" data-action="selectMinute"><table class="table-condensed"></table></div>' + (e ? '<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>' : "")
        }
    }(window.jQuery), jQuery(document).ready(function() {
        jQuery(".wlt_tooltip").tooltip({
            html: !0
        }), jQuery(".wlt_popover").popover({
            html: !0
        })
    });