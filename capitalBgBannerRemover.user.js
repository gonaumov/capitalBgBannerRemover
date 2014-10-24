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
(function killToolbar() {
    if(typeof showToolbar == 'undefined') {
         setTimeout(killToolbar,0);
    } else {
         window.showToolbar = function() {};   
    }
})();
