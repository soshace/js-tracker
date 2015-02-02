(function () {
    "use strict";

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
        img.src = window.TrackerPrefix + urlencode(parameters);
    };

    var handleItem = function(item) {
        var params = {
            title: document.title,
            url: window.location.href
        };

        // Update parameters with passed as item
        for (var attname in item) {params[attname] = item [attname];}

        track(params);
    };

    for (var i=0; i<window.TrackerQueue.length; i++) {
        handleItem(window.TrackerQueue[i]);
    }
})();
