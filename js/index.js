var site_url = 'http://motostash.com';
//var site_url = 'http://pinboard.7';

document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("resume", onDeviceResume, false);


function onDeviceReady() {
    if (navigator.network.connection.type == Connection.NONE) {
      navigator.notification.alert('No network connection', alertDismissed, 'Game Over', 'Done');
    } else {
      window.location.replace(site_url + '/?mob=1');
    }
    //checkConnection();
}

function onDeviceResume() {
    window.location.reload(1);
}

// alert dialog dismissed
function alertDismissed() {
    // do something
}

/*
function checkConnection() {
    var networkState = navigator.network.connection.type;
    
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';
    
    alert('Connection type: ' + states[networkState]);
}
*/

