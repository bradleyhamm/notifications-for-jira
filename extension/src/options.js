/* globals chrome */
/* jshint esversion: 6 */

(function () {
    'use strict';

    let inputs = {
        url: document.querySelector('#url'),
        poll_frequency: document.querySelector('#poll_frequency')
    };

    function save (e) {
        let o = {};
        o[e.target.id] = e.target.value;
        chrome.storage.sync.set(o);
    }

    chrome.storage.sync.get(o => {
        inputs.url.value = o.url || '';
        inputs.poll_frequency.value = o.poll_frequency || '';
    });

    inputs.url.addEventListener('keyup', save);
    inputs.poll_frequency.addEventListener('change', save);

})();
