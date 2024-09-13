let defaultConsentIndex = -1;

for(let i in dataLayer){
    if(dataLayer[i].value !== undefined) 
        if (dataLayer[i].value.event === 'evidonDefaultConsent'){
            defaultConsentKey = i
        } 
}


