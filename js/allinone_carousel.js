(function(c) {
    function F(a, b) {
        b.responsive && (newCss = "",
        -1 != a.css("font-size").lastIndexOf("px") ? (fontSize = a.css("font-size").substr(0, a.css("font-size").lastIndexOf("px")),
        newCss += "font-size:" + fontSize / (b.origWidth / b.width) + "px;") : -1 != a.css("font-size").lastIndexOf("em") && (fontSize = a.css("font-size").substr(0, a.css("font-size").lastIndexOf("em")),
        newCss += "font-size:" + fontSize / (b.origWidth / b.width) + "em;"),
        -1 != a.css("line-height").lastIndexOf("px") ? (lineHeight = a.css("line-height").substr(0, a.css("line-height").lastIndexOf("px")),
        newCss += "line-height:" + lineHeight / (b.origWidth / b.width) + "px;") : -1 != a.css("line-height").lastIndexOf("em") && (lineHeight = a.css("line-height").substr(0, a.css("line-height").lastIndexOf("em")),
        newCss += "line-height:" + lineHeight / (b.origWidth / b.width) + "em;"),
        a.wrapInner('<div class="newFS" style="' + newCss + '" />'))
    }
    function D(a, b) {
        nowx = (new Date).getTime();
        !a.mouseOverBanner && (!a.effectIsRunning && b.showCircleTimer) && (a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height),
        a.ctx.beginPath(),
        a.ctx.globalAlpha = b.behindCircleAlpha / 100,
        a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1),
        a.ctx.lineWidth = b.circleLineWidth + 2,
        a.ctx.strokeStyle = b.behindCircleColor,
        a.ctx.stroke(),
        a.ctx.beginPath(),
        a.ctx.globalAlpha = b.circleAlpha / 100,
        a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * ((a.timeElapsed + nowx - a.arcInitialTime) / 1E3) / b.autoPlay * Math.PI, !1),
        a.ctx.lineWidth = b.circleLineWidth,
        a.ctx.strokeStyle = b.circleColor,
        a.ctx.stroke())
    }
    function x(a, b, h, k, g, j, n, s, f) {
        b.showCircleTimer && c(".mycanvas", j).css({
            display: "none"
        });
        var d, i, l, o;
        "true" == c(g[h.current_img_no]).attr("data-video") && (c("#contentHolderUnit_" + h.current_img_no, j).html(c(g[h.current_img_no]).html()),
        b.responsive && b.width != b.origWidth && C(c("#contentHolderUnit_" + h.current_img_no, j), 0, b, h));
        c(k[h.current_img_no]).removeClass("bottomNavButtonON");
        h.current_img_no = z(h.current_img_no, a, n);
        "true" != c(g[h.current_img_no]).attr("data-video") && s.css("display", "none");
        c(k[h.current_img_no]).addClass("bottomNavButtonON");
        h.currentZ_index = 100;
        h.currentImg = c("#contentHolderUnit_" + h.current_img_no, j);
        d = b.contentHolderUnitOrigWidth / (b.origWidth / b.width);
        i = b.contentHolderUnitOrigHeight / (b.origWidth / b.width);
        l = parseInt((b.width - b.contentHolderUnitOrigWidth / (b.origWidth / b.width)) / 2, 10);
        o = parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) - b.verticalAdjustment / (b.origWidth / b.width);
        A(h.currentImg, l, o, d, i, 1, !1, a, h, b, f, g, n, s, k, j);
        t = h.current_img_no;
        for (m = 1; m <= Math.floor(b.numberOfVisibleItems / 2); m++)
            h.currentZ_index--,
            t = z(t, -1, n),
            h.currentImg = c("#contentHolderUnit_" + t, j),
            h.currentImg.css("z-index", h.currentZ_index),
            m == Math.floor(b.numberOfVisibleItems / 2) && (1 === a ? (last_aux_img_no = z(t, -1, n),
            last_currentImg = c("#contentHolderUnit_" + last_aux_img_no, j),
            i = b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width),
            d = parseInt(i * h.aspectOrig, 10),
            l = parseInt((b.width - b.contentHolderUnitOrigWidth / (b.origWidth / b.width)) / 2, 10) - (m + 1) * b.elementsHorizontalSpacing / (b.origWidth / b.width),
            o = parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) - b.verticalAdjustment / (b.origWidth / b.width) + (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width),
            A(last_currentImg, l, o, d, i, 0, !1, a, h, b, f, g, n, s, k, j)) : (i = b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width),
            parseInt(i * h.aspectOrig, 10),
            C(h.currentImg, m + 1, b, h),
            l = parseInt((b.width - b.contentHolderUnitOrigWidth / (b.origWidth / b.width)) / 2, 10) - (m + 1) * b.elementsHorizontalSpacing / (b.origWidth / b.width),
            o = parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) - b.verticalAdjustment / (b.origWidth / b.width) + (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width),
            h.currentImg.css({
                left: l + "px",
                top: o + "px",
                opacity: 0
            }))),
            h.currentImg.css("display", "block"),
            i = b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * m * b.elementsVerticalSpacing / (b.origWidth / b.width),
            d = parseInt(i * h.aspectOrig, 10),
            l = parseInt((b.width - b.contentHolderUnitOrigWidth / (b.origWidth / b.width)) / 2, 10) - m * b.elementsHorizontalSpacing / (b.origWidth / b.width),
            o = parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) - b.verticalAdjustment / (b.origWidth / b.width) + m * b.elementsVerticalSpacing / (b.origWidth / b.width),
            A(h.currentImg, l, o, d, i, 1, !1, a, h, b, f, g, n, s, k, j);
        var t = h.current_img_no;
        for (m = 1; m <= Math.floor(b.numberOfVisibleItems / 2); m++)
            h.currentZ_index--,
            t = z(t, 1, n),
            h.currentImg = c("#contentHolderUnit_" + t, j),
            h.currentImg.css("z-index", h.currentZ_index),
            m == Math.floor(b.numberOfVisibleItems / 2) && (1 === a ? (C(h.currentImg, m + 1, b, h),
            h.currentImg.css({
                left: parseInt((b.width - b.contentHolderUnitOrigWidth / (b.origWidth / b.width)) / 2, 10) + (b.contentHolderUnitOrigWidth / (b.origWidth / b.width) + (m + 1) * b.elementsHorizontalSpacing / (b.origWidth / b.width) - h.currentImg.width()) + "px",
                top: parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) - b.verticalAdjustment / (b.origWidth / b.width) + (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width) + "px",
                opacity: 0
            })) : (last_aux_img_no = z(t, 1, n),
            last_currentImg = c("#contentHolderUnit_" + last_aux_img_no, j),
            i = b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width),
            d = parseInt(i * h.aspectOrig, 10),
            l = parseInt((b.width - b.contentHolderUnitOrigWidth / (b.origWidth / b.width)) / 2, 10) + (b.contentHolderUnitOrigWidth / (b.origWidth / b.width) + (m + 1) * b.elementsHorizontalSpacing / (b.origWidth / b.width) - d),
            o = parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) - b.verticalAdjustment / (b.origWidth / b.width) + (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width),
            A(last_currentImg, l, o, d, i, 0, !1, a, h, b, f, g, n, s, k, j))),
            h.currentImg.css("display", "block"),
            i = b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * m * b.elementsVerticalSpacing / (b.origWidth / b.width),
            d = parseInt(i * h.aspectOrig, 10),
            l = parseInt((b.width - b.contentHolderUnitOrigWidth / (b.origWidth / b.width)) / 2, 10) + (b.contentHolderUnitOrigWidth / (b.origWidth / b.width) + m * b.elementsHorizontalSpacing / (b.origWidth / b.width) - d),
            o = parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) - b.verticalAdjustment / (b.origWidth / b.width) + m * b.elementsVerticalSpacing / (b.origWidth / b.width),
            m == Math.floor(b.numberOfVisibleItems / 2) ? A(h.currentImg, l, o, d, i, 1, !0, a, h, b, f, g, n, s, k, j) : A(h.currentImg, l, o, d, i, 1, !1, a, h, b, f, g, n, s, k, j)
    }
    function C(a, b, c, k) {
        b = c.contentHolderUnitOrigHeight / (c.origWidth / c.width) - 2 * b * (c.elementsVerticalSpacing / (c.origWidth / c.width));
        k = parseInt(b * k.aspectOrig, 10);
        a.css({
            height: b + "px",
            width: k + "px"
        });
        c.resizeImages && (imgInside = a.find("img:first"),
        imgInside.is("img") && imgInside.css({
            height: b + "px",
            width: k + "px"
        }))
    }
    function A(a, b, h, k, g, j, n, s, f, d, i, l, o, t, v, p) {
        f.slideIsRunning = !0;
        i.html(c(l[f.current_img_no]).attr("data-title"));
        d.responsive && F(i, d);
        0 === j ? a.css("z-index", f.currentZ_index - 1) : a.css("z-index", f.currentZ_index);
        a.css("display", "block");
        a.animate({
            left: b + "px",
            top: h + "px",
            width: k + "px",
            height: g + "px",
            opacity: j
        }, 1E3 * d.animationTime, d.easing, function() {
            if (n) {
                f.slideIsRunning = !1;
                f.arcInitialTime = (new Date).getTime();
                f.timeElapsed = 0;
                d.showCircleTimer && (clearInterval(f.intervalID),
                f.ctx.clearRect(0, 0, f.canvas.width, f.canvas.height),
                f.ctx.beginPath(),
                f.ctx.globalAlpha = d.behindCircleAlpha / 100,
                f.ctx.arc(d.circleRadius + 2 * d.circleLineWidth, d.circleRadius + 2 * d.circleLineWidth, d.circleRadius, 0, 2 * Math.PI, !1),
                f.ctx.lineWidth = d.circleLineWidth + 2,
                f.ctx.strokeStyle = d.behindCircleColor,
                f.ctx.stroke(),
                f.ctx.beginPath(),
                f.ctx.globalAlpha = d.circleAlpha / 100,
                f.ctx.arc(d.circleRadius + 2 * d.circleLineWidth, d.circleRadius + 2 * d.circleLineWidth, d.circleRadius, 0, 0, !1),
                f.ctx.lineWidth = d.circleLineWidth,
                f.ctx.strokeStyle = d.circleColor,
                f.ctx.stroke(),
                f.intervalID = setInterval(function() {
                    D(f, d)
                }, 125),
                cLeftPos = c("#contentHolderUnit_" + f.current_img_no, p).css("left"),
                cTopPos = c("#contentHolderUnit_" + f.current_img_no, p).css("top"),
                c(".mycanvas", p).css({
                    display: "block",
                    left: parseInt(cLeftPos.substr(0, cLeftPos.lastIndexOf("px")), 10) + parseInt(d.circleLeftPositionCorrection / (d.origWidth / d.width), 10) + "px",
                    top: parseInt(cTopPos.substr(0, cTopPos.lastIndexOf("px")), 10) + parseInt(d.circleTopPositionCorrection / (d.origWidth / d.width), 10) + "px"
                }));
                "true" == c(l[f.current_img_no]).attr("data-video") && t.css("display", "block");
                if (0 < d.autoPlay && 1 < o && !f.mouseOverBanner && !f.fastForwardRunning || f.current_img_no != f.img_no_where_to_stop && f.fastForwardRunning)
                    clearTimeout(f.timeoutID),
                    f.timeoutID = setTimeout(function() {
                        x(s, d, f, v, l, p, o, t, i)
                    }, 1E3 * d.autoPlay);
                f.current_img_no == f.img_no_where_to_stop && f.fastForwardRunning && (f.fastForwardRunning = !1,
                d.animationTime = f.animationTimeOrig,
                d.autoPlay = f.autoPlayOrig)
            }
        });
        d.resizeImages && (imgInside = a.find("img:first"),
        imgInside.is("img") && imgInside.animate({
            width: k + "px",
            height: g + "px"
        }, 1E3 * d.animationTime, d.easing, function() {}))
    }
    function z(a, b, c) {
        return a + b >= c ? 0 : 0 > a + b ? c - 1 : a + b
    }
    function G(a, b, c, k, g, j, n, s, f) {
        -1 === c.current_img_no - a ? x(1, b, c, k, g, j, n, s, f) : 1 === c.current_img_no - a ? x(-1, b, c, k, g, j, n, s, f) : (c.fastForwardRunning = !0,
        b.animationTime = 0.4,
        b.autoPlay = 0.1,
        c.img_no_where_to_stop = a,
        c.current_img_no < a ? a - c.current_img_no < n - a + c.current_img_no ? x(1, b, c, k, g, j, n, s, f) : x(-1, b, c, k, g, j, n, s, f) : c.current_img_no > a && (c.current_img_no - a < n - c.current_img_no + a ? x(-1, b, c, k, g, j, n, s, f) : x(1, b, c, k, g, j, n, s, f)))
    }
    var B = !1;
    c.fn.allinone_carousel = function(a) {
        a = c.extend({}, c.fn.allinone_carousel.defaults, a);
        return this.each(function() {
            var b = c(this);
            responsiveWidth = b.parent().width();
            responsiveHeight = b.parent().height();
            a.responsiveRelativeToBrowser && (responsiveWidth = c(window).width(),
            responsiveHeight = c(window).height());
            a.origWidth = a.width;
            a.width100Proc && (a.width = responsiveWidth);
            a.origHeight = a.height;
            a.height100Proc && (a.height = responsiveHeight);
            if (a.responsive && (a.origWidth != responsiveWidth || a.width100Proc))
                a.width = a.origWidth > responsiveWidth || a.width100Proc ? responsiveWidth : a.origWidth,
                a.height100Proc || (a.height = a.width / (a.origWidth / a.origHeight));
            a.width = parseInt(a.width, 10);
            a.height = parseInt(a.height, 10);
            a.enableTouchScreen && a.responsive && (a.width -= 1);
            var h = c("<div></div>").addClass("allinone_carousel").addClass(a.skin)
              , k = c('<div class="bannerControls"> <div class="leftNav"></div> <div class="rightNav"></div> </div> <div class="contentHolder"></div> <div class="elementTitle"></div>\t<div class="playOver"></div> <canvas class="mycanvas"></canvas>');
            b.wrap(h);
            b.after(k);
            var g = b.parent(".allinone_carousel")
              , k = c(".bannerControls", g)
              , j = c(".contentHolder", g)
              , h = c('<div class="bottomNavLeft"></div>')
              , n = c('<div class="bottomNav"></div>')
              , s = c('<div class="bottomNavRight"></div>');
            b.after(h);
            b.after(n);
            b.after(s);
            a.showAllControllers || k.css("display", "none");
            var f = c(".leftNav", g)
              , d = c(".rightNav", g);
            f.css("display", "none");
            d.css("display", "none");
            a.showNavArrows && a.showOnInitNavArrows && (f.css("display", "block"),
            d.css("display", "block"));
            var i = c(".bottomNav", g), l = c(".bottomNavLeft", g), o = c(".bottomNavRight", g), t;
            i.css("display", "block");
            l.css("display", "block");
            o.css("display", "block");
            i.css({
                bottom: a.bottomNavMarginBottom + "px",
                top: "auto"
            });
            l.css({
                bottom: a.bottomNavMarginBottom + "px",
                top: "auto"
            });
            o.css({
                bottom: a.bottomNavMarginBottom + "px",
                top: "auto"
            });
            a.showBottomNav || (i.css("display", "none"),
            l.css("display", "none"),
            o.css("display", "none"));
            a.showOnInitBottomNav || (i.css("left", "-5000px"),
            l.css("left", "-5000px"),
            o.css("left", "-5000px"));
            var v = c(".elementTitle", g);
            a.showElementTitle || v.css("display", "none");
            a.elementOrigTop = parseInt(v.css("top").substr(0, v.css("top").lastIndexOf("px")), 10);
            v.css("top", parseInt(a.elementOrigTop / (a.origWidth / a.width), 10));
            var p = c(".playOver", g), q = 0, e = {
                current_img_no: 0,
                currentImg: 0,
                currentZ_index: 101,
                slideIsRunning: !1,
                mouseOverBanner: !1,
                fastForwardRunning: !1,
                isVideoPlaying: !1,
                img_no_where_to_stop: 0,
                aspectOrig: 0,
                timeoutID: "",
                animationTimeOrig: a.animationTime,
                autoPlayOrig: a.autoPlay,
                timeoutID: "",
                intervalID: "",
                arcInitialTime: (new Date).getTime(),
                timeElapsed: 0,
                windowWidth: 0,
                canvas: "",
                ctx: "",
                bannerRatio: a.origWidth / a.origHeight
            }, A;
            e.canvas = c(".mycanvas", g)[0];
            e.canvas.width = 2 * a.circleRadius + 4 * a.circleLineWidth;
            e.canvas.height = 2 * a.circleRadius + 4 * a.circleLineWidth;
            a.showCircleTimer && (c.browser.msie && 9 > parseInt(c.browser.version, 10) && (e.canvas = G_vmlCanvasManager.initElement(e.canvas),
            !a.showCircleTimerIE8IE7 && a.showCircleTimer && (a.showCircleTimer = !1)),
            e.ctx = e.canvas.getContext("2d"));
            g.width(a.width);
            g.height(a.height);
            j.width(a.width);
            j.height(a.height);
            k.css("margin-top", parseInt((a.height - f.height()) / 2, 10) + a.nextPrevMarginTop / (a.origWidth / a.width) + "px");
            var r = b.find("ul:first").children();
            a.numberOfVisibleItems > b.find("ul:first li").length && (a.numberOfVisibleItems = b.find("ul:first li").length);
            a.numberOfVisibleItems % 2 || a.numberOfVisibleItems--;
            var u, y, z = 0, H = 0;
            r.each(function() {
                e.currentImg = c(this);
                if (!e.currentImg.is("li"))
                    e.currentImg = e.currentImg.find("li:first");
                if (e.currentImg.is("li")) {
                    q++;
                    u = c('<div class="contentHolderUnit" rel="' + (q - 1) + '" id="contentHolderUnit_' + (q - 1) + '">' + e.currentImg.html() + "</div>");
                    j.append(u);
                    u.css("display", "none");
                    if (a.contentHolderUnitOrigWidth === 0) {
                        a.contentHolderUnitOrigWidth = u.width();
                        a.contentHolderUnitOrigHeight = u.height();
                        e.aspectOrig = a.contentHolderUnitOrigWidth / a.contentHolderUnitOrigHeight
                    }
                    C(u, 0, a, e);
                    u.css({
                        left: parseInt((a.width - u.width()) / 2, 10) + "px",
                        top: parseInt(a.height - u.height(), 10) - a.verticalAdjustment / (a.origWidth / a.width) + "px"
                    });
                    if (q == 1) {
                        u.css({
                            left: parseInt((a.width - u.width()) / 2, 10) + "px",
                            top: parseInt(a.height - u.height(), 10) - a.verticalAdjustment / (a.origWidth / a.width) + "px",
                            "z-index": e.currentZ_index,
                            display: "block"
                        });
                        c(r[e.current_img_no]).attr("data-video") == "true" && p.css("display", "block")
                    } else if (q <= Math.ceil(a.numberOfVisibleItems / 2)) {
                        e.currentZ_index--;
                        C(u, q - 1, a, e);
                        u.css({
                            left: parseInt((a.width - a.contentHolderUnitOrigWidth / (a.origWidth / a.width)) / 2, 10) + (a.contentHolderUnitOrigWidth / (a.origWidth / a.width) + (q - 1) * a.elementsHorizontalSpacing / (a.origWidth / a.width) - u.width()) + "px",
                            top: parseInt(a.height - a.contentHolderUnitOrigHeight / (a.origWidth / a.width), 10) - a.verticalAdjustment / (a.origWidth / a.width) + (q - 1) * a.elementsVerticalSpacing / (a.origWidth / a.width) + "px",
                            "z-index": e.currentZ_index,
                            display: "block"
                        })
                    }
                    y = c('<div class="bottomNavButtonOFF" rel="' + (q - 1) + '"></div>');
                    i.append(y);
                    z = z + (parseInt(y.css("padding-left").substring(0, y.css("padding-left").length - 2), 10) + y.width());
                    H = parseInt((i.height() - parseInt(y.css("height").substring(0, y.css("height").length - 2))) / 2, 10);
                    y.css("margin-top", H + "px")
                }
            });
            p.css({
                left: parseInt((a.width - p.width()) / 2, 10) + "px",
                top: parseInt(a.height - a.contentHolderUnitOrigHeight / (a.origWidth / a.width), 10) + parseInt((a.contentHolderUnitOrigHeight / (a.origWidth / a.width) - p.height()) / 2, 10) - parseInt(a.verticalAdjustment / (a.origWidth / a.width), 10) + "px",
                "margin-top": a.playMovieMarginTop / (a.origWidth / a.width)
            });
            a.showCircleTimer && (cLeftPos = c("#contentHolderUnit_" + e.current_img_no, g).css("left"),
            cTopPos = c("#contentHolderUnit_" + e.current_img_no, g).css("top"),
            c(".mycanvas", g).css({
                left: parseInt(cLeftPos.substr(0, cLeftPos.lastIndexOf("px")), 10) + parseInt(a.circleLeftPositionCorrection / (a.origWidth / a.width), 10) + "px",
                top: parseInt(cTopPos.substr(0, cTopPos.lastIndexOf("px")), 10) + parseInt(a.circleTopPositionCorrection / (a.origWidth / a.width), 10) + "px"
            }));
            e.currentZ_index = 100;
            for (m = 1; m <= Math.floor(a.numberOfVisibleItems / 2); m++)
                e.currentZ_index--,
                C(c("#contentHolderUnit_" + (q - m), g), m, a, e),
                c("#contentHolderUnit_" + (q - m), g).css({
                    left: parseInt((a.width - a.contentHolderUnitOrigWidth / (a.origWidth / a.width)) / 2, 10) - m * a.elementsHorizontalSpacing / (a.origWidth / a.width) + "px",
                    top: parseInt(a.height - a.contentHolderUnitOrigHeight / (a.origWidth / a.width), 10) - a.verticalAdjustment / (a.origWidth / a.width) + m * a.elementsVerticalSpacing / (a.origWidth / a.width) + "px",
                    "z-index": e.currentZ_index,
                    display: "block"
                });
            v.html(c(r[0]).attr("data-title"));
            a.responsive && F(v, a);
            i.width(z);
            a.showOnInitBottomNav && (i.css("left", parseInt((g.width() - z) / 2, 10) + "px"),
            l.css("left", parseInt(i.css("left").substring(0, i.css("left").length - 2), 10) - l.width() + "px"),
            o.css("left", parseInt(i.css("left").substring(0, i.css("left").length - 2), 10) + i.width() + parseInt(y.css("padding-left").substring(0, y.css("padding-left").length - 2), 10) + "px"));
            c("iframe").each(function() {
                var a = c(this).attr("src");
                c(this).attr("src", a + "?wmode=transparent")
            });
            e.current_img_no = 0;
            e.currentImg = c(r[e.current_img_no]);
            g.mouseenter(function() {
                e.mouseOverBanner = true;
                clearTimeout(e.timeoutID);
                nowx = (new Date).getTime();
                e.timeElapsed = e.timeElapsed + (nowx - e.arcInitialTime);
                if (a.autoHideNavArrows && a.showNavArrows) {
                    f.css("display", "block");
                    d.css("display", "block")
                }
                if (a.autoHideBottomNav && a.showBottomNav) {
                    i.css({
                        display: "block",
                        left: parseInt((g.width() - z) / 2, 10) + "px"
                    });
                    l.css({
                        display: "block",
                        left: parseInt(i.css("left").substring(0, i.css("left").length - 2), 10) - l.width() + "px"
                    });
                    o.css({
                        display: "block",
                        left: parseInt(i.css("left").substring(0, i.css("left").length - 2), 10) + i.width() + parseInt(y.css("padding-left").substring(0, y.css("padding-left").length - 2), 10) + "px"
                    })
                }
            });
            g.mouseleave(function() {
                e.mouseOverBanner = false;
                nowx = (new Date).getTime();
                if (a.autoHideNavArrows && a.showNavArrows) {
                    f.css("display", "none");
                    d.css("display", "none")
                }
                if (a.autoHideBottomNav && a.showBottomNav) {
                    i.css("display", "none");
                    l.css("display", "none");
                    o.css("display", "none")
                }
                if (a.autoPlay > 0 && q > 1 && !e.fastForwardRunning && !e.isVideoPlaying) {
                    clearTimeout(e.timeoutID);
                    e.arcInitialTime = (new Date).getTime();
                    var b = parseInt(a.autoPlay * 1E3 - (e.timeElapsed + nowx - e.arcInitialTime), 10);
                    e.timeoutID = setTimeout(function() {
                        x(1, a, e, w, r, g, q, p, v)
                    }, b)
                }
            });
            u = c(".contentHolderUnit", g);
            u.click(function() {
                if (!e.slideIsRunning && !e.fastForwardRunning) {
                    var b = c(this).attr("rel");
                    if (b != e.current_img_no) {
                        e.isVideoPlaying = false;
                        c(w[e.current_img_no]).removeClass("bottomNavButtonON");
                        G(parseInt(b, 10), a, e, w, r, g, q, p, v)
                    } else if (c(r[e.current_img_no]).attr("data-video") == "true") {
                        p.css("display", "none");
                        A = c(this).find("img:first");
                        A.css("display", "none");
                        e.isVideoPlaying = true
                    } else if (c(r[e.current_img_no]).attr("data-link") != void 0 && c(r[e.current_img_no]).attr("data-link") != "" && !e.effectIsRunning && !B) {
                        b = a.target;
                        c(r[e.current_img_no]).attr("data-target") != void 0 && c(r[e.current_img_no]).attr("data-target") != "" && (b = c(r[e.current_img_no]).attr("data-target"));
                        b == "_blank" ? window.open(c(r[e.current_img_no]).attr("data-link")) : window.location = c(r[e.current_img_no]).attr("data-link")
                    }
                }
            });
            p.click(function() {
                a.showCircleTimer && c(".mycanvas", g).css({
                    display: "none"
                });
                p.css("display", "none");
                A = c("#contentHolderUnit_" + e.current_img_no, g).find("img:first");
                A.css("display", "none");
                e.isVideoPlaying = true
            });
            f.mousedown(function() {
                B = true;
                if (!e.slideIsRunning && !e.fastForwardRunning) {
                    e.isVideoPlaying = false;
                    clearTimeout(e.timeoutID);
                    x(-1, a, e, w, r, g, q, p, v)
                }
            });
            f.mouseup(function() {
                B = false
            });
            d.mousedown(function() {
                B = true;
                if (!e.slideIsRunning && !e.fastForwardRunning) {
                    e.isVideoPlaying = false;
                    clearTimeout(e.timeoutID);
                    x(1, a, e, w, r, g, q, p, v)
                }
            });
            d.mouseup(function() {
                B = false
            });
            var w = c(".bottomNavButtonOFF", g);
            w.mousedown(function() {
                B = true;
                if (!e.slideIsRunning && !e.fastForwardRunning) {
                    var b = c(this).attr("rel");
                    if (b != e.current_img_no) {
                        e.isVideoPlaying = false;
                        c(w[e.current_img_no]).removeClass("bottomNavButtonON");
                        G(parseInt(b, 10), a, e, w, r, g, q, p, v)
                    }
                }
            });
            w.mouseup(function() {
                B = false
            });
            w.mouseenter(function() {
                var b = c(this)
                  , e = b.attr("rel");
                if (a.showPreviewThumbs) {
                    t = c('<div class="bottomOverThumb"></div>');
                    b.append(t);
                    e = c(r[e]).attr("data-bottom-thumb");
                    t.html('<img src="' + e + '">')
                }
                b.addClass("bottomNavButtonON")
            });
            w.mouseleave(function() {
                var b = c(this)
                  , f = b.attr("rel");
                a.showPreviewThumbs && t.remove();
                e.current_img_no != f && b.removeClass("bottomNavButtonON")
            });
            a.enableTouchScreen && (h = Math.floor(1E5 * Math.random()),
            g.wrap('<div id="carouselParent_' + h + '" style="position:relative;" />'),
            c("#carouselParent_" + h).width(a.width + 1),
            c("#carouselParent_" + h).height(a.height),
            g.css({
                cursor: "url(" + a.absUrl + "skins/hand.cur),url(" + a.absUrl + "skins/hand.cur),move",
                left: "0px",
                position: "absolute"
            }),
            rightVal = parseInt(d.css("right").substring(0, d.css("right").length - 2), 10),
            g.mousedown(function() {
                rightVal = parseInt(d.css("right").substring(0, d.css("right").length - 2), 10);
                if (rightVal < 0 && !B) {
                    d.css({
                        visibility: "hidden",
                        right: "0"
                    });
                    f.css("visibility", "hidden")
                }
            }),
            g.mouseup(function() {
                B = false;
                if (rightVal < 0) {
                    d.css({
                        right: rightVal + "px",
                        visibility: "visible"
                    });
                    f.css("visibility", "visible")
                }
            }),
            g.draggable({
                axis: "x",
                containment: "parent",
                distance: 10,
                start: function() {
                    origLeft = c(this).css("left")
                },
                stop: function() {
                    if (!e.effectIsRunning) {
                        finalLeft = c(this).css("left");
                        direction = 1;
                        origLeft < finalLeft && (direction = -1);
                        x(direction, a, e, w, r, g, q, p, v)
                    }
                    if (rightVal < 0) {
                        d.css({
                            right: rightVal + "px",
                            visibility: "visible"
                        });
                        f.css("visibility", "visible")
                    }
                    c(this).css("left", "0px")
                }
            }));
            var E = !1;
            c(window).resize(function() {
                doResizeNow = true;
                if (navigator.userAgent.indexOf("Android") != -1) {
                    if (a.windowOrientationScreenSize0 == 0 && window.orientation == 0)
                        a.windowOrientationScreenSize0 = c(window).width();
                    if (a.windowOrientationScreenSize90 == 0 && window.orientation == 90)
                        a.windowOrientationScreenSize90 = c(window).height();
                    if (a.windowOrientationScreenSize_90 == 0 && window.orientation == -90)
                        a.windowOrientationScreenSize_90 = c(window).height();
                    a.windowOrientationScreenSize0 && (window.orientation == 0 && c(window).width() > a.windowOrientationScreenSize0) && (doResizeNow = false);
                    a.windowOrientationScreenSize90 && (window.orientation == 90 && c(window).height() > a.windowOrientationScreenSize90) && (doResizeNow = false);
                    a.windowOrientationScreenSize_90 && (window.orientation == -90 && c(window).height() > a.windowOrientationScreenSize_90) && (doResizeNow = false);
                    if (e.windowWidth == 0) {
                        doResizeNow = false;
                        e.windowWidth = c(window).width()
                    }
                }
                c.browser.msie && (parseInt(c.browser.version, 10) == 9 && e.windowWidth == 0) && (doResizeNow = false);
                if (e.windowWidth == c(window).width()) {
                    doResizeNow = false;
                    if (a.windowCurOrientation != window.orientation && navigator.userAgent.indexOf("Android") != -1) {
                        a.windowCurOrientation = window.orientation;
                        doResizeNow = true
                    }
                } else
                    e.windowWidth = c(window).width();
                if (a.responsive && doResizeNow) {
                    E !== false && clearTimeout(E);
                    E = setTimeout(function() {
                        var d = a
                          , h = q
                          , n = k
                          , s = y
                          , t = w
                          , u = c("body").css("overflow");
                        c("body").css("overflow", "hidden");
                        p.css("display", "none");
                        if (d.enableTouchScreen) {
                            responsiveWidth = b.parent().parent().parent().width();
                            responsiveHeight = b.parent().parent().parent().height()
                        } else {
                            responsiveWidth = b.parent().parent().width();
                            responsiveHeight = b.parent().parent().height()
                        }
                        if (d.responsiveRelativeToBrowser) {
                            responsiveWidth = c(window).width();
                            responsiveHeight = c(window).height()
                        }
                        if (d.width100Proc)
                            d.width = responsiveWidth;
                        if (d.height100Proc)
                            d.height = responsiveHeight;
                        if (d.origWidth != responsiveWidth || d.width100Proc) {
                            if (d.origWidth > responsiveWidth || d.width100Proc)
                                d.width = responsiveWidth;
                            else if (!d.width100Proc)
                                d.width = d.origWidth;
                            if (!d.height100Proc)
                                d.height = d.width / e.bannerRatio;
                            d.width = parseInt(d.width, 10);
                            d.height = parseInt(d.height, 10);
                            if (d.enableTouchScreen && d.responsive)
                                d.width = d.width - 1;
                            g.width(d.width);
                            g.height(d.height);
                            j.width(d.width);
                            j.height(d.height);
                            if (d.enableTouchScreen) {
                                g.parent().width(d.width + 1);
                                g.parent().height(d.height)
                            }
                            n.css("margin-top", parseInt((d.height - f.height()) / 2, 10) + d.nextPrevMarginTop / (d.origWidth / d.width) + "px");
                            i.css("left", parseInt((g.width() - i.width()) / 2, 10) + "px");
                            l.css("left", parseInt(i.css("left").substring(0, i.css("left").length - 2), 10) - l.width() + "px");
                            o.css("left", parseInt(i.css("left").substring(0, i.css("left").length - 2), 10) + i.width() + parseInt(s.css("padding-left").substring(0, s.css("padding-left").length - 2), 10) + "px");
                            p.css({
                                left: parseInt((d.width - p.width()) / 2, 10) + "px",
                                top: parseInt(d.height - d.contentHolderUnitOrigHeight / (d.origWidth / d.width), 10) + parseInt((d.contentHolderUnitOrigHeight / (d.origWidth / d.width) - p.height()) / 2, 10) - parseInt(d.verticalAdjustment / (d.origWidth / d.width), 10) + "px",
                                "margin-top": d.playMovieMarginTop / (d.origWidth / d.width)
                            });
                            v.css("top", parseInt(d.elementOrigTop / (d.origWidth / d.width), 10));
                            clearTimeout(e.timeoutID);
                            clearInterval(e.intervalID);
                            e.timeoutID = setTimeout(function() {
                                x(1, d, e, t, r, g, h, p, v)
                            }, 0.1)
                        }
                        c("body").css("overflow", u)
                    }, 300)
                }
            });
            c(w[e.current_img_no]).addClass("bottomNavButtonON");
            h = g.find("img:first");
            h[0].complete ? (c(".myloader", g).css("display", "none"),
            0 < a.autoPlay && 1 < q && (a.showCircleTimer && (e.arcInitialTime = (new Date).getTime(),
            e.timeElapsed = 0,
            e.intervalID = setInterval(function() {
                D(e, a)
            }, 125)),
            e.timeoutID = setTimeout(function() {
                x(1, a, e, w, r, g, q, p, v)
            }, 1E3 * a.autoPlay))) : h.load(function() {
                c(".myloader", g).css("display", "none");
                if (a.autoPlay > 0 && q > 1) {
                    if (a.showCircleTimer) {
                        e.arcInitialTime = (new Date).getTime();
                        e.timeElapsed = 0;
                        e.intervalID = setInterval(function() {
                            D(e, a)
                        }, 125)
                    }
                    e.timeoutID = setTimeout(function() {
                        x(1, a, e, w, r, g, q, p, v)
                    }, a.autoPlay * 1E3)
                }
            })
        })
    }
    ;
    c.fn.allinone_carousel.defaults = {
        skin: "attractive",
        width: 960,
        height: 384,
        width100Proc: !1,
        height100Proc: !1,
        autoPlay: 4,
        numberOfVisibleItems: 7,
        elementsHorizontalSpacing: 120,
        elementsVerticalSpacing: 20,
        verticalAdjustment: 0,
        animationTime: 0.8,
        easing: "easeOutQuad",
        resizeImages: !0,
        target: "_blank",
        showElementTitle: !0,
        showAllControllers: !0,
        showNavArrows: !0,
        showOnInitNavArrows: !0,
        autoHideNavArrows: !0,
        showBottomNav: !0,
        showOnInitBottomNav: !0,
        autoHideBottomNav: !0,
        showPreviewThumbs: !0,
        nextPrevMarginTop: 0,
        playMovieMarginTop: 0,
        enableTouchScreen: !0,
        absUrl: "",
        showCircleTimer: !0,
        showCircleTimerIE8IE7: !1,
        circleRadius: 10,
        circleLineWidth: 4,
        circleColor: "#FF0000",
        circleAlpha: 100,
        behindCircleColor: "#000000",
        behindCircleAlpha: 50,
        circleLeftPositionCorrection: 3,
        circleTopPositionCorrection: 3,
        responsive: !1,
        responsiveRelativeToBrowser: !0,
        bottomNavMarginBottom: 0,
        origWidth: 0,
        origHeight: 0,
        contentHolderUnitOrigWidth: 0,
        contentHolderUnitOrigHeight: 0,
        elementOrigTop: 0,
        origthumbsHolder_MarginTop: 0,
        windowOrientationScreenSize0: 0,
        windowOrientationScreenSize90: 0,
        windowOrientationScreenSize_90: 0,
        windowCurOrientation: 0
    }
})(jQuery);
