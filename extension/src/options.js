(function () {

    var inputs = {
        url: document.querySelector('#url')
    };

    chrome.storage.sync.get(function (o) {
        inputs.url.value = o.url || '';
    });

    inputs.url.addEventListener('keyup', function (e) {
        chrome.storage.sync.set({
            url: e.target.value
        });
    });

})();
