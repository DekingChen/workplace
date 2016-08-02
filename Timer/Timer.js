;(function($){
	$.fn.Timer = function(options){
		var defaults = {
				endDate : 0,
				interval : 1000,
				days : '#days',
				hours : '#hours',
				minutes : '#minutes',
				seconds: '#seconds'
		};
		var opts = $.extend(defaults,options);
		var stop = null;//Ïû³ý¶¨Ê±Æ÷
		var c = this;
		var endDate = new Date(opts.endDate).getTime();
		function init(){
			var interval = endDate - new Date().getTime();
			var len = [86400000,3600000,60000,1000];
			if(interval >0){
				var days = Math.floor(interval/len[0]);
				interval-=days*len[0];
				var hours = Math.floor(interval/len[1]);
				interval-=hours*len[1];
				var minutes = Math.floor(interval/len[2]);
				interval-=minutes*len[2];
				var seconds = Math.floor(interval/len[3]);
				days = days<10?"0"+days:days;
				hours = hours<10?"0"+hours:hours;
				minutes = minutes<10?"0"+minutes:minutes;
				seconds = seconds<10?"0"+seconds:seconds;
			}else{
				clearInterval(stop);
			}
			$(opts.days,c).text(days);
			$(opts.hours,c).text(hours);
			$(opts.minutes,c).text(minutes);
			$(opts.seconds,c).text(seconds);
		}
		interval = setInterval(init,opts.interval);
	};
})(jQuery);