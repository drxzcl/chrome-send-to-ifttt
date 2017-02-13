chrome.browserAction.onClicked.addListener(function (tab) {
    /*
     Trigger an event on the the IFTTT Maker channel
     event: as configured. Defaults to "got_interesting_url"
     key: as configured. There is no valid default.

     The URL will be passed in value1 and the title of the page in value2
     */
    chrome.storage.sync.get({
        key: 'NO_VALID_KEY_CONFIGURED',
        event: 'got_interesting_url'
    }, function (items) {
        var endpoint = "https://maker.ifttt.com/trigger/";
        key = items.key;
        event = items.event;
        var endpoint_url = endpoint + event + "/with/key/" + key;
        title = tab.title;
        url = tab.url;
        console.log(endpoint_url);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", endpoint_url);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({value1: url, value2: title}));
    });
});

