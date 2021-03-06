/* jshint esversion: 6 */
/* globals chrome */

(function () {
    'use strict';

    let url;
    let cookie;

    chrome.storage.sync.get(function (o) {
        url = o.url;

        if (url) {
            chrome.cookies.get({
                url: url,
                name: 'cloud.session.token'
            }, function (cookie) {
                cookie = cookie.value;
                chrome.notifications.create({
                    type: 'basic',
                    iconUrl: 'icon.png',
                    title: 'Got your cookie!',
                    message: cookie.substring(0, 5) + '...'
                });
            });
        }
    });

})();