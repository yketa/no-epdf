if ( document.querySelector('html').id == "simpleViewer" ) { // id of <html> should be "simpleViewer"
	var newurl = window.location.href
        .replace("/epdf/", "/pdf/")
        .replace("/epub/", "/pdf/");
	if ( confirm("Open " + newurl + "?") ) {
		window.location.href = newurl;
	}
}
