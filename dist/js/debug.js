window.evidon.checkConsentTiming = () =>{
    console.log("%c"+"Consent timing:", "font-size: 1rem");
    if(window.google_tag_data.ics.wasSetLate) console.log("%c"+"\tConsent was set late", "color: #C00");
    else console.log("%c"+"\tConsent was not set late", "color: #0C0")
}

window.evidon.logConsent = () => {
    const consentTypes = google_tag_data.ics.entries;
    console.log("%c"+"Consent Default:", "font-size: 1rem");
    for(let consentType in consentTypes){
        if(consentTypes[consentType]['default'])
            console.log('\t'+consentType+ '\n\t\tDefault: %cgranted', 'color: #0C0')
        else 
            console.log('\t'+consentType+ '\n\t\tDefault: %cdenied', 'color: #C00')
    }
}

window.evidon.logConsentUpdate = () => {
    setTimeout(()=>{
        const consentTypes = google_tag_data.ics.entries;
        console.log("%c"+"Consent Update:", "font-size: 1rem");
        for(let consentType in consentTypes){
            if(consentTypes[consentType]['update'])
                console.log('\t'+consentType+ '\n\t\tUpdate: %cgranted', 'color: #0C0')
            else 
                console.log('\t'+consentType+ '\n\t\tUpdate: %cdenied', 'color: #C00')
        }
        console.log("%c"+"Consented Vendors:", "font-size: .75rem");
        const evidonConsentState = evidon.notice._getConsentedVendors();
        const vendorName = evidon.notice.vendorList;
        for (vendor in evidon.notice._getConsentedVendors()){
            if(evidonConsentState[vendor]) console.log("\n\t"+vendorName[vendor]+"\n\t\t\t%c"+evidonConsentState[vendor],"color: #0C0");
            else console.log("\n\t\t"+vendorName[vendor]+"\n\t\t\t%c"+evidonConsentState[vendor],"color: #C00");
        }
    }, 500)
}