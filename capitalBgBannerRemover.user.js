// ==UserScript==
// @name         capitalBgBannerRemover
// @version      0.1
// @description  Remove banner requesting installations of add-on for capital.bg site.
// @author       Georgi Naumov
// @run-at document-start
// @include        http://www.capital.bg*
// @include        http://www.capital.bg/*
// @grant        none
// ==/UserScript==

////////////////////////////////////////////////
// There is a function with name showToolbar 
// in capital.bg site. The function constructs
// a banner that asks Chrome users to install 
// an add-on. We just replace the function. 
/////////////////////////////////////////////////
(function killToolbar() {
    if(typeof showToolbar == 'undefined') {
         setTimeout(killToolbar,0);
    } else {
         showToolbar = function() {};   
    }
})();
