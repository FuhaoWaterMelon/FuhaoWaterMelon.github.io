function is_acce(search){
	var a = search.substr(1).split('&');
	for(let i in a){
		let tmp = a[i].split('=');
		if(tmp[0]=='acce') return parseInt(tmp[1]);
	}return 0;
}
function download_link(link, name, acce){
	var href;
	if(acce == 0) href = link;
	else if(acce == 1) href = 'https://github.com/FuhaoWaterMelon/FuhaoWaterMelon.github.io/blob/main'+link+'?raw=true';
	else if(acce == 2) href = 'https://github.moeyy.xyz/\
		github.com/FuhaoWaterMelon/FuhaoWaterMelon.github.io/blob/main'+link;
	var code = '<a href="'+href+'" style="text-decoration: underline">'+name+'</a>';
	document.write(code);
}
function source(search, doc){
	var acce = is_acce(search);
	var ele;
	switch(acce){
	case 0:
		ele = doc.getElementById("acce0");
		break;
	case 1:
		ele = doc.getElementById("acce1");
		break;
	default:
		ele = doc.getElementById("acce2");
	}ele.style["display"] = "initial";
	const warning_list = {2:0};
	if(acce in warning_list) alert("注意: 在该下载源下载的文件可能被报告为不安全，但文件本身没有危险，请放心使用。")
}