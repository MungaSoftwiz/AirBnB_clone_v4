$(document).ready(function() {
    const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';
    $.get(url, function (response) {
        if (response.status === 'OK') {
            $('div#api_status').addClass('available');
        } else {
            $('div#api_status').removeClass('available');
        }
    });

});
