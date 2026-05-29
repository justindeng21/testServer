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