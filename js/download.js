function download_link(link, name, acce=false){
	var code;
	if(acce) code = '<a href="https://github.moeyy.xyz/\
		https://github.com/FuhaoWaterMelon/FuhaoWaterMelon.github.io/blob/main/\
		'+link+'" download style="text-decoration: underline">\
		'+name+'</a>';
	else code = '<a href="'+link+'" download style="text-decoration: underline">'+name+'</a>';
	document.write(code);
}
