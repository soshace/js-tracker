(function () {
    "use strict";
    var prefix = "http://localhost:8000/track/?";

    var urlencode = function (obj) {
        var str = [];
        for(var p in obj){
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        }
        return str.join("&");
    };

    var track = function(parameters) {
        var img = new Image();
        img.src = prefix + urlencode(parameters);
    };

    var handleItem = function(item) {
        track({
            title: document.title,
            url: window.location.href,
            appId: item.appId
        });
    };

    for (var i=0; i<window.TrackerQueue.length; i++) {
        handleItem(window.TrackerQueue[i]);
    }
})();
