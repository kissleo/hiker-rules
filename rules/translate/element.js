(function() {
    var gtConstEvalStartTime = new Date();
    function d(b) {
        var a = document.getElementsByTagName("head")[0];
        a || (a = document.body.parentNode.appendChild(document.createElement("head")));
        a.appendChild(b)
    }
    function _loadJs(b) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.charset = "UTF-8";
        a.src = b;
        d(a)
    }
    function _loadCss(b) {
        var a = document.createElement("link");
        a.type = "text/css";
        a.rel = "stylesheet";
        a.charset = "UTF-8";
        a.href = b;
        d(a)
    }
    function _isNS(b) {
        b = b.split(".");
        for (var a = window,
        c = 0; c < b.length; ++c) if (! (a = a[b[c]])) return ! 1;
        return ! 0
    }
    function _setupNS(b) {
        b = b.split(".");
        for (var a = window,
        c = 0; c < b.length; ++c) a.hasOwnProperty ? a.hasOwnProperty(b[c]) ? a = a[b[c]] : a = a[b[c]] = {}: a = a[b[c]] || (a[b[c]] = {});
        return a
    }
    window.addEventListener && "undefined" == typeof document.readyState && window.addEventListener("DOMContentLoaded",
    function() {
        document.readyState = "complete"
    },
    !1);
    if (_isNS('google.translate.Element')) {
        return
    } (function() {
        var c = _setupNS('google.translate._const');
        c._cest = gtConstEvalStartTime;
        gtConstEvalStartTime = undefined;
        c._cl = 'zh-CN';
        c._cuc = 'googleTranslateElementInit';
        c._cac = '';
        c._cam = '';
        c._ctkk = '432824.2057614349';
        var h = 'translate.googleapis.com';
        var s = (true ? 'https': window.location.protocol == 'https:' ? 'https': 'http') + '://';
        var b = s + h;
        c._pah = h;
        c._pas = s;
        c._pbi = b + '/translate_static/img/te_bk.gif';
        c._pci = b + '/translate_static/img/te_ctrl3.gif';
        c._pli = b + '/translate_static/img/loading.gif';
        c._plla = h + '/translate_a/l';
        c._pmi = b + '/translate_static/img/mini_google.png';
        c._ps =  'https://news.yujianweb.cn/js/translate/translateelement.css';
        c._puh = 'translate.google.com';
        _loadCss(c._ps);
        _loadJs('https://cdn.jsdelivr.net/gh/qiusunshine/hiker-rules/rules/translate/main_zh-CN.js');
    })();
})();
