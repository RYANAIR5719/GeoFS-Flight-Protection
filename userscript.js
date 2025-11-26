// ==UserScript==
// @name         GeoFS Replay Double-Tap Fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Requires the user to double-tap the "V" key to open the Replay window.
// @author       LJF6565
// @match        https://*.geo-fs.com/geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener("keydown", function(e) {

        if (document.activeElement.tagName.toLowerCase() === "input" ||
            document.activeElement.tagName.toLowerCase() === "textarea") {
            return;
        }

        if (e.keyCode === 9) {
           alert("Are you sure you want to teleport to the camera location?");
        }
    }, true);
