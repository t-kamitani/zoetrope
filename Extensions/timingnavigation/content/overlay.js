var TIMINGNAVIGATION = {

    getPerformance: function(){
    	var s=window.content.document.createElement('script');
    	var head=window.content.document.getElementsByTagName('head')[0];
    	var done=false;s.charset='UTF-8';s.language='javascript';
    	s.type='text/javascript';
    	s.src='https://raw.githubusercontent.com/t-kamitani/zoetrope/master/overlay_include.js';
    	head.appendChild(s);    	 
    },
    test2: function(){
    	  var now = new Date().getTime();
    	  var page_load_time = now - performance.timing.navigationStart;
    	  var timing_json = JSON.stringify(performance.timing, null, "  "); 
    	  alert(timing_json);
    },
    test3: function(){
    	var t = window.performance.timing,
        interactive = t.domInteractive - t.domLoading,
        dcl = t.domContentLoadedEventStart - t.domLoading,
        complete = t.domComplete - t.domLoading;
        var stats = document.createElement('p');
          var res = 'interactive: ' + interactive + 'ms, ' +
          'dcl: ' + dcl + 'ms, complete: ' + complete + 'ms';
        alert(res);
    }
};