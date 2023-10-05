function include(name){
	code = '<meta charset="UTF-8">\
		<title>'+name+" - 西瓜之家"+'</title>\
		<link rel="icon" href="/pic/icon.png">\
		<link rel="stylesheet" type="text/css" href="/css/home.css">\
		<link rel="stylesheet" type="text/css" href="/css/text.css">\
		<link rel="stylesheet" type="text/css" href="/css/card.css">\
		<script src="/js/text.js"></script>';
	document.write(code);
}
function build(){
	space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	function _link(link,title,text=undefined){
		if(text == undefined) text = title;
		return '<a href="'+link+'" title="'+title+'">'+text+'</a>';
	}
	code = '<div class="header" id="header">'+space+
		_link("/index.html","西瓜之家",'<img src="/image/homepage.png"')+space+
		_link("/downloadpage.html","下载")+
		'</div>';
	document.write(code);
}
