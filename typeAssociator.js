const path = require('path');

//mime types that can to be matched to a url 
const mimeTypes = {
    '.html' : "text/html",
    '.css'  : "text/css",
    '.js'   : "text/javascript",
    '.png'  : "image/png",
    '.jpg'  : "image/jpg"
  };

var typeAssociator = {
    associateType : function(url){
        var contentType = "";
        //Retrieve the extension of the url
        var extname = String(path.extname(url)).toLowerCase();
        contentType = mimeTypes[extname] || contentType;
        //return's the value of the content type 
        return contentType;
    }
}

module.exports = typeAssociator;