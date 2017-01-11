// var Handlebars = require('handlebars');

// ------ !!!!!! REPLACE ME !!!!!!! --------- //
var myurl = 'https://docs.google.com/spreadsheets/d/18CY89mk23JefG3rqmqBaZxSaKV0f4X-PPzEGtJaWSB4/pubhtml?gid=0&single=true';
// ------ !!!!!! REPLACE ME !!!!!!! --------- //


function init() {
    Tabletop.init({
        key: myurl,
        callback: showInfo,
        simpleSheet: true
    })
}

function showInfo(data, tabletop) {
    data.forEach(function(d){
    	d.img = "/" + d.img + "";
    })

    var theData = {items: data};
    var theTemplateScript = $('#mainContent').html();
    var theTemplate = Handlebars.compile(theTemplateScript);
    var theCompiledHtml = theTemplate(theData);
    $(document.body).append(theCompiledHtml);

    // toggle the form
    $("button").click(function(){
    	$('#myform').toggle();
    })
}

$(document).ready(function() {
	// call everything
    init();

})
