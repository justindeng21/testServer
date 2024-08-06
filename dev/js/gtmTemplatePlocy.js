    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
        
        gtag('policy', 'inject_script', function(containerId, permissionId, data) {
            let url = data.url || '';
            const evidonTagPattern = /.*\.evidon\.com/;
            
            if (evidonTagPattern.test(url)) {
                console.log(url,"has been allowed"); 
                return true;
            } 
            else {
                throw Error(url+"has been blocked");    
            }
    });
        