"use strict";
fetch('https://privacy.evidon.com/v3/sitenotice/api/v3/sitenotice', {
    method: 'get',
    headers: {
        'content-type': 'application/json'
    }
}).then((response) => response.text()).then(async (body) => {
    let res = JSON.parse(body);
    for (let i = 0; i <= res.length - 1; i++) {
        var response = new Promise((resolve, reject) => {
            fetch('https://privacy.evidon.com/v3/sitenotice/api/v3/sitenotice/' + res[i].id.toString(), {
                method: 'get'
            })
                .then((response) => response.text()).then((body) => {
                let res = JSON.parse(body);
                console.log(res);
                fetch('http://localhost:3400/download', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(res)
                });
                resolve('Backup Done');
            });
        });
        await response;
    }
});
