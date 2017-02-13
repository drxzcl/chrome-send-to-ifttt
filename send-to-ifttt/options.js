// Saves options to chrome.storage
function save_options() {
    var key = document.getElementById('key').value;
    var event = document.getElementById('event').value;
    console.log(key + event);
    chrome.storage.sync.set({
        key: key,
        event: event
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        key: '(enter key here)',
        event: 'got_interesting_url'
    }, function (items) {
        document.getElementById('key').value = items.key;
        document.getElementById('event').value = items.event;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);