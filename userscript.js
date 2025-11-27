// ==UserScript==
// @name         GeoFS Flight Protection
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Asks for confirmation before processing Tab or v keys in GeoFS to prevent accidental reset.
// @author       RYANAIR5719
// @match        https://www.geo-fs.com/geofs.php*
// @match        https://geo-fs.com/geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('keydown', function(e) {

        if (!e.ctrlKey && !e.metaKey && !e.altKey) {

            if (e.code === 'Tab') {
                let userConfirmed = confirm(`Are you sure you want to teleport to the camera location?`);
                if (!userConfirmed) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    console.log(`Blocked ${e.code} press.`);
                } else {
                    console.log(`Confirmed ${e.code} press.`);
                }
            }

            else if (e.code === 'KeyV') {
                let userConfirmed = confirm(`Are you sure you want to open replay mode?`);
                if (!userConfirmed) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    console.log(`Blocked ${e.code} press.`);
                } else {
                    console.log(`Confirmed ${e.code} press.`);
                }
            }
        }
    }, true);
})();