(function(){
	
	window.performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
	var timing = performance.timing || {};
	var navigation = performance.navigation || {};

	function getDelta(endTiming) {
		var begin = Timing('navigationStart');
		var end   = Timing(endTiming);
		if (!begin || !end) return "n/a";
		return endTiming ":" + (end - begin) + "ms¥n";
	}
	
	var res = '';
	res = getDelta('navigationStart');
	res + getDelta('unloadEventStart');
	res + getDelta('unloadEventEnd');
	res + getDelta('redirectStart');
	res + getDelta('redirectEnd');
	res + getDelta('fetchStart');
	res + getDelta('domainLookupStart');
	res + getDelta('domainLookupEnd');
	res + getDelta('connectStart');
	res + getDelta('connectEnd');
	res + getDelta('requestStart');
	res + getDelta('responseStart');
	res + getDelta('responseEnd');
	res + getDelta('domLoading');
	res + getDelta('domInteractive');
	res + getDelta('domContentLoadedEventStart');
	res + getDelta('domContentLoadedEventEnd');
	res + getDelta('domComplete');
	res + getDelta('loadEventStart');
	res + getDelta('loadEventEnd');
  alert(res);
})();
