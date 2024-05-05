function include(name){
	 var code = '<title>'+name+" - 西瓜之家"+'</title>\
		<link rel="icon" href="/image/icon.png">\
		<link rel="stylesheet" type="text/css" href="/css/home.css">\
		<link rel="stylesheet" type="text/css" href="/css/text.css">\
		<link rel="stylesheet" type="text/css" href="/css/card.css">\
		<script src="/js/text.js"></script>\
		<script src="/js/download.js"></script>\
		<script src="/js/cookies.js"></script>\
		<script src="/js/browser.js"></script>\
		<script type="text/javascript">frame(get_cookie("theme"))</script>';
	document.write(code);
}
function build(){
	const space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	function _link(link,title,text=undefined){
		if(text == undefined) text = title;
		return '<a href="'+link+'" title="'+title+'">'+text+'</a>';
	}
	var code = '<div class="header" id="header">'+space+
		_link("/","西瓜之家",'<img src="/image/homepage.png" alt="西瓜之家">')+space+
		_link("/index.html","首页")+space+
		_link("/downloadpage.html","下载")+space+
		_link("/activity.html","活动")+space+
		_link("/settings.html","设置")+
		'</div>';
	document.write(code);
	footer();
}
function frame(themeName){
	if(themeName == "") themeName = "default";
	var theme = {
		"default" : ["rgba(255,200,200,0.8)", 'url("/image/BG/default.png")'],
		"blue" : ["rgba(153,217,234,0.8)", 'url("/image/BG/sea.png")'],
		"yellow" : ["rgba(220,204,63,0.8)", 'url("/image/BG/sunflower.png")']
	};
	var code = '<style>\
		.bg{\
			background: linear-gradient('+theme[themeName][0]+', '+theme[themeName][0]+'),\
			'+theme[themeName][1]+' no-repeat;\
			background-size: 100% 100%;\
			background-attachment: fixed;\
		}</style>';
	document.write(code);
}