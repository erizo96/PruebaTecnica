$(document).ready(function(){
    var url= window.location.href;
    var getPostoken = url.indexOf("=");
    var token = url.substring(getPostoken+1, url.length);
    console.log(token);
});