function get_cookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0 ; i<ca.length ; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}
function set_theme(theme){
	document.cookie="theme="+theme+"; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
	location.reload();
}