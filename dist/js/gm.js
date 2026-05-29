var script = document.createElement('script');
script.src = 'https://assets.adobedtm.com/ea8c57fea068/1491e9d4ff4d/launch-9468ef50bc78-development.min.js';
script.async = true;

document.head.appendChild(script);

document.addEventListener('DOMContentLoaded', function () {

  var consentButton = document.getElementById('_evidon-accept-button');

  if (consentButton) {
    consentButton.addEventListener('click', function () {

      // Prevent infinite reload loop
      if (!sessionStorage.getItem('evidonReloaded')) {
        sessionStorage.setItem('evidonReloaded', 'true');

        setTimeout(function () {
          window.location.reload();
        }, 100);
      }

    });
  }

});