// ==UserScript==
// @name         关闭B站广告插件提示
// @namespace    muzichangqing
// @version      0.1
// @description  开了AdsBlock插件后，每次进入B站最上方就会有个提示，很讨厌，直接屏蔽掉
// @author       You
// @match        https://*.bilibili.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let divs = document.getElementsByClassName("adblock-tips");
    if (divs.length == 0) {
        return;
    }
    let adblock_tips = divs[0];
    adblock_tips.parentNode.removeChild(adblock_tips);
})();