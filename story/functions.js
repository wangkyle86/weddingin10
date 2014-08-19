/*
 * http://tianji.me/loveme
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	if(seconds<0)
	{
		timeElapse2(date);
	}
	else
	{
		date=new Date(2011, 08, 03, 11, 0, 0);
		timeElapse1(date);
	}
}

function timeElapse1(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "第<span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 时 <span class=\"digit\">" + minutes + "</span> 分 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock-title").html("WangGang & HaiYan 已经相识了");
	$("#clock").html(result);
}

function timeElapse2(date){	
	var ts = (date) - (new Date());//计算剩余的毫秒数  
	var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10);//计算剩余的天数  
	var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数  
	var mm = parseInt(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数  
	var ss = parseInt(ts / 1000 % 60, 10);//计算剩余的秒数
	
	dd = checkTime(dd);
	hh = checkTime(hh);  
	mm = checkTime(mm);  
	ss = checkTime(ss);
	
	var result = "<span class=\"digit\">" + dd + "</span> 天 <span class=\"digit\">" + hh + "</span> 时 <span class=\"digit\">" + mm + "</span> 分 <span class=\"digit\">" + ss + "</span> 秒"; 
	$("#clock-title").html("距离我们的婚礼还有");
	$("#clock").html(result);
}

function checkTime(i)    
{    
	if (i < 10) {    
	   i = "0" + i;    
	}    
	return i;    
}