window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('policy', 'inject_script', function(containerId, permissionId, data) {

    let url = data.url || '';

    console.log(url);
});