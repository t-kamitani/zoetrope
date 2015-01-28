(function(){
    window.performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
	var timing = performance.timing || {};
	var navigation = performance.navigation || {};
	var res = '';
	
	// 全体表示
	res += getDelta('page-loaded', 'navigationStart', 'loadEventEnd',timing);
	
	// サーバー再度
	res = getDelta('networking', 'navigationStart', 'responseEnd', , ,timing);
    res += getDelta('redirect', 'redirectStart', 'redirectEnd',timing);
	res += getDelta('fetch', 'fetchStart', 'domainLookupStart',timing);
	res += getDelta('dns', 'domainLookupStart', 'domainLookupEnd',timing);
	res += getDelta('connect', 'connectStart', 'connectEnd',timing);
	res += getDelta('request', 'requestStart', 'responseStart',timing);
	res += getDelta('response', 'responseStart', 'responseEnd',timing);
	res += getDelta('unloaded', 'unloadEventStart', 'unloadEventEnd',timing);
	
	// DOM構築全体
	res += getDelta('dom-processing', 'domLoading', 'domComplete',timing);
	// DOM構築内部処理1
	res += getDelta('dom-loading', 'domLoading', 'domInteractive',timing);
	// DOM構築内部処理2
	res += getDelta('dom-content', 'domContentLoadedEventStart', 'domContentLoadedEventEnd',timing);
	// DOM構築内部処理3
	res += getDelta('dom-complete', 'domContentLoadedEventEnd', 'domComplete',timing);
	
	// ロードイベント開始
	res += getDelta('loading', 'loadEventStart', 'loadEventEnd',timing);

    alert(res);
	function getDelta(label,startTiming,endTiming, timing) {
		var begin = timing[startTiming];
		var end   = timing[endTiming]; 
		if (!begin || !end) return label + ":" + "n/a\n";
		return label + ":" + (end - begin) + "ms"+"\n";
	}
})();
