var panelCreated = false;

function checkCreatePanel() {
    if (panelCreated) {
        return;
    }

    // Determine if the current page contains a Cordova app hosted by cordova-simulate
    chrome.devtools.inspectedWindow.eval('!!window.__TACO_SIMULATE__', function (result, error) {
        if (result) {
            panelCreated = true;
            chrome.devtools.panels.create('Cordova', null, 'panel/cordova.html', null);
        }
    });
}

chrome.devtools.network.onNavigated.addListener(function () {
    checkCreatePanel();
});

checkCreatePanel();
