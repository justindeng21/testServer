window.evidon.checkConsentTiming = () =>{
    console.log("%c"+"Consent timing:", "font-size: 1rem");
    if(window.google_tag_data.ics.wasSetLate) console.log("%c"+"\tConsent was set late", "color: #C00");
    else console.log("%c"+"\tConsent was not set late", "color: #0C0")
}

window.evidon.logConsent = () => {
    const consentTypes = google_tag_data.ics.entries;

    for(let consentType in consentTypes){
        if(consentTypes[consentType]['default'])
            console.log('\t'+consentType+ '\n\t\tUpdate: %cgranted', 'color: #0C0')
        else 
            console.log('\t'+consentType+ '\n\t\tUpdate: %cdenied', 'color: #C00')
    }
}

window.evidon.logConsentUpdate = () => {

    const consentTypes = google_tag_data.ics.entries;

    for(let consentType in consentTypes){
        if(consentTypes[consentType]['update'])
            console.log('\t'+consentType+ '\n\t\tUpdate: %cgranted', 'color: #0C0')
        else 
            console.log('\t'+consentType+ '\n\t\tUpdate: %cdenied', 'color: #C00')
    }
}       

window.evidon.logConsentUpdate();