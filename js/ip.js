fetch('https://ipapi.co/json/')
    .then(function (response) {
        response.json().then(jsonData => {
            var statusDiv = document.getElementById('user-status');
            var locationDiv = document.getElementById('user-location');
            var ipDiv = document.getElementById('user-ip');
            var hostnameDiv = document.getElementById('user-hostname');

            if (jsonData.country_name != 'Russia') {
                statusDiv.innerHTML = 'Защищено';
            } else {
                statusDiv.innerHTML = 'Не защищено';
            }

            locationDiv.innerHTML = jsonData.country_code + ', ' + jsonData.city;
            ipDiv.innerHTML = jsonData.ip;
            hostnameDiv.innerHTML = jsonData.org;

            console.log(jsonData);
        });
    })
    .catch(function (error) {
        console.log(error)
    });
