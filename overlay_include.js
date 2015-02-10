(function(){
    window.performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
    var timing = performance.timing || {};
    var navigation = performance.navigation || {};
    var res = '';

    // 全体表示
    res += "■" + getPerformance('page-loaded', 'navigationStart', 'loadEventEnd',timing) +'</br>';

    // ユーザのブラウザ側の描画を破棄
    res += "・" + getPerformance('unloaded', 'unloadEventStart', 'unloadEventEnd',timing) +'</br>';

    // サーバーサイド側の処理合計
    res += "▼" + getPerformance('networking', 'navigationStart', 'responseEnd',timing) +'</br>';

    // リンクでのアクセスがあった場合
    res += "・" + getPerformance('redirect', 'redirectStart', 'redirectEnd',timing) +'</br>';

    // キャッシュ読み込み時間
    res += "・" + getPerformance('fetch', 'fetchStart', 'domainLookupStart',timing) +'</br>';

    // DNS取得時間
    res += "・" + getPerformance('dns', 'domainLookupStart', 'domainLookupEnd',timing) +'</br>';

    // TCP接続時間
    res += "・" + getPerformance('connect', 'connectStart', 'connectEnd',timing) +'</br>';

    // サーバー側処理時間
    res += "・" + getPerformance('request', 'requestStart', 'responseStart',timing) +'</br>';

    // サーバーからブラウザまでの通信時間
    res += "・" + getPerformance('response', 'responseStart', 'responseEnd',timing) +'</br>';

    // DOM構築全体
    res += "▼" + getPerformance('dom-processing', 'domLoading', 'domComplete',timing) +'</br>';

    // DOM構築内部処理1 HTMLドキュメント自体の読み込みを行っている段階 8KBずつ逐次パースし、DOM Contentを作っていく仕様
    res += "・" + getPerformance('dom-loading', 'domLoading', 'domInteractive',timing) +'</br>';

    // DOM構築内部処理2 DOMContentLoadedイベント実行開始から終了まで
    res += "・" + getPerformance('dom-content', 'domContentLoadedEventStart', 'domContentLoadedEventEnd',timing) +'</br>';

    // DOM構築内部処理3 HTMLドキュメントの読み込みが完了し非同期に取得できる画像などのリソースを読み込んでいる段階
    res += "・" + getPerformance('dom-complete', 'domContentLoadedEventEnd', 'domComplete',timing) +'</br>';

    // ロードイベント開始から終了までの時間
    res += "▼" + getPerformance('loading', 'loadEventStart', 'loadEventEnd',timing) +'</br>';

    // スタイルシートを適用する
    var style = '<link href="https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet">';
    $('head link:last').after(style);

    // ビューを表示
    var view  = '';
    view += '<div class="navbar navbar-inverse navbar-fixed-top" style="width: 216px;">';
    view += '<div class="container"><div class="navbar-header">';
    view += '<a class="navbar-brand" href="'+location.href+'">Timing Navigater API</a>';
    view += '<br/><div style="color: #808080;"></br></br>' + res + '</br></div></div></div></div>';

    var div       = document.createElement('div');
    div.id        = 'navigation-timing';
    div.innerHTML = view;
    document.body.appendChild(div);

    // Navigation Timing APIの測定値から演算をさせる処理
    function getPerformance(label,startTiming,endTiming, timing) {
        var begin = timing[startTiming];
        var end = timing[endTiming];
        if (!begin || !end) return label + ":" + "n/a\n";
        return label + ":" + (end - begin) + "ms"+"\n";
    }
})();
