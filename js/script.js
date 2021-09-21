// WEB303 Assignment 2
// Yuxuan Liu 0752597



$(document).ready(function(){

    $("#vprospect").click(function(){
        $('div#solution').load("prospect.html").hide().slideDown(3000);
    });
    
    $("#vconvert").click(function(){
        $('div#solution').load("convert.html").hide().slideDown(3000);
    });
    
    $("#vretain").click(function(){
        $('div#solution').load("retain.html").hide().slideDown(3000);
    });

});




