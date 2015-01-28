(function(){
    window.performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
	var timing = performance.timing || {};
	var navigation = performance.navigation || {};
	var res = '';
	res = getDelta('navigationStart',timing);
	res += getDelta('unloadEventStart',timing);
	res += getDelta('unloadEventEnd',timing);
	res += getDelta('redirectStart',timing);
	res += getDelta('redirectEnd',timing);
	res += getDelta('fetchStart',timing);
	res += getDelta('domainLookupStart',timing);
	res += getDelta('domainLookupEnd',timing);
	res += getDelta('connectStart',timing);
	res += getDelta('connectEnd',timing);
	res += getDelta('requestStart',timing);
	res += getDelta('responseStart',timing);
	res += getDelta('responseEnd',timing);
	res += getDelta('domLoading',timing);
	res += getDelta('domInteractive',timing);
	res += getDelta('domContentLoadedEventStart',timing);
	res += getDelta('domContentLoadedEventEnd',timing);
	res += getDelta('domComplete',timing);
	res += getDelta('loadEventStart',timing);
	res += getDelta('loadEventEnd',timing);
    alert(res);

	function getDelta(endTiming, timing) {
		var begin = timing['navigationStart'];
		var end   = timing[endTiming]; 
		if (!begin || !end) return endTiming + ":" + "n/a\n";
		return endTiming + ":" + (end - begin) + "ms"+"\n";
	}
})();
