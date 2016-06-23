chrome.app.runtime.onLaunched.addListener(function() {
 var options = {
   'id': "Matt's Todo App",
    bounds: { width: 620, height: 500 }
 };
 chrome.app.window.create('application.html', (options));
});
