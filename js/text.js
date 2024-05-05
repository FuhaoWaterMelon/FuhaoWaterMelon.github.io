function text_symbol(char, size=40, space=3){
	code = '<span style="font-size:'+size+'px;" title=" ">'+char+'</span>';
	while(space--){
		code += "&nbsp;"
	}
	document.write(code);
}