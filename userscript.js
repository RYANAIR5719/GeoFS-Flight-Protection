// ==UserScript==
// @name         GeoFS Flight Protection
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Asks for confirmation for critical keybinds to prevent accidental flight interference.
// @author       RYANAIR5719
// @match        https://www.geo-fs.com/geofs.php*
// @match        https://geo-fs.com/geofs.php*
// @icon         https://raw.githubusercontent.com/RYANAIR5719/GeoFS-Flight-Protection/refs/heads/main/logo.png
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    window.addEventListener('keydown', function (e) {

        var target = e.target || e.srcElement;
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
            return;
        }

        if (e.code === 'Tab') {
            let userConfirmed = confirm(`Are you sure you want to teleport to the camera location?`);
            if (!userConfirmed) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                console.log(`Blocked [TAB] key press.`);
            } else {
                console.log(`Confirmed [TAB] key press.`);
            }
        }

        else if (e.code === 'KeyV') {
            let userConfirmed = confirm(`Are you sure you want to open replay mode?`);
            if (!userConfirmed) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                console.log(`Blocked [V] key press.`);
            } else {
                console.log(`Confirmed [V] key press.`);
            }
        }
        else if (e.code === 'KeyE' && geofs.aircraft.animations.values.engineOn == true && geofs.aircraft.animations.values.groundContact == false) {
            let userConfirmed = confirm(`Are you sure you want to shut down the engine?`);
            if (!userConfirmed) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                console.log(`Blocked [E] key press.`);
            } else {
                console.log(`Confirmed [E] key press.`);
            }
        }
    }, true);
})();
