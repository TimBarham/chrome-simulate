chrome.devtools.inspectedWindow.eval('document.location', function (result) {
    document.location = result.origin + "/simulator/index.html";
});
