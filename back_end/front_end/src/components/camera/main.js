/*
 * This is a helper javascript file that containts helper method to handle the stream from the webrtc server.
 * The startPlay() and stopPlay() perform the functions of starting and stopping the stream from the webrtc server 
 * which is running on localhost:8888. The functions are inturned called by the camera.html file which consumes the
 * stream and displays it on the page as video.
 */

(function () {

    var signalObj = null;

    function startPlay() {
        if (signalObj)
            return;

        var hostname = location.hostname;
        var address = hostname + ':' + (location.port || (location.protocol === 'https:' ? 443 : 80)) + '/webrtc';
        var protocol = location.protocol === "https:" ? "wss:" : "ws:";
        var wsurl = protocol + '//' + address;

        var video = document.getElementById('v');

        signalObj = new signal(wsurl,
            function (stream) {
                console.log('websocket opened');
                video.srcObject = stream;
                video.play();
            },
            function (error) {
                alert(error);
                signalObj = null;
            },
            function () {
                console.log('websocket closed');
                video.srcObject = null;
                signalObj = null;
            },
            function (message) {
                alert(message);
            }
        );
    }

    function stopPlay() {
        if (signalObj) {
            signalObj.hangup();
            signalObj = null;
        }
    }

    window.addEventListener('DOMContentLoaded', function () {
	console.log("DOM Content Loaded");
	startPlay();
        var start = document.getElementById('start');
        if (start) {
            start.addEventListener('click', function (e) {
                startPlay();
            }, false);
        }
        else {
            // auto play if there is no stop button
            startPlay();
        }

        var stop = document.getElementById('stop');
        if (stop) {
            stop.addEventListener('click', function (e) {
                stopPlay();
		window.history.back();
            }, false);
        }

        // App will call viewPause/viewResume for view status change
        window.viewPause = stopPlay;
        window.viewResume = startPlay;
    });
})();

