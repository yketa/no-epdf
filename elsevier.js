var pdfurl = new URL(document.querySelector("a#save-pdf-icon-button").href); // get download button URL
pdfurl.searchParams.set("download", "false"); // set download option to false
window.location.href = pdfurl.href; // open pdf
