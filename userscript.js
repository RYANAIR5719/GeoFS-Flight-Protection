// ==UserScript==
// @name         GeoFS Flight Protection
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Asks for confirmation before processing Tab or v keys in GeoFS to prevent accidental reset.
// @author       RYANAIR5719
// @match        https://www.geo-fs.com/geofs.php*
// @match        https://geo-fs.com/geofs.php*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('keydown', function(e) {

        if (e.code === 'Tab') {
            let userConfirmed = confirm(`Are you sure you want to teleport to the camera location?`);
            if (!userConfirmed) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                console.log(`Blocked ${e.key} press.`);
            } else {
                console.log(`Confirmed ${e.key} press.`);
            }
        }
        else if (e.code === 'KeyV') {
            let userConfirmed = confirm(`Are you sure you want to open replay mode?`);
            if (!userConfirmed) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                console.log(`Blocked ${e.key} press.`);
            } else {
                console.log(`Confirmed ${e.key} press.`);
            }
        }
    }, true); 
})();