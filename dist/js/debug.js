window.evidon.checkConsentTiming = () =>{
    console.log("%c"+"Consent timing:", "font-size: 1rem");
    if(window.google_tag_data.ics.wasSetLate) console.log("%c"+"\tConsent was set late. Please contact support@crownpeak.com.", "color: #C00");
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
        console.log("\n\t%c"+"Consented Vendors:", "font-size: .85rem");
        const evidonConsentStateVendors = evidon.notice._getConsentedVendors();
        const vendorName = evidon.notice.vendorList;
        for (vendor in evidon.notice._getConsentedVendors()){
            if(evidonConsentStateVendors[vendor]) console.log("\t\t"+vendorName[vendor]+"\n\t\t\tConsent: %c"+evidonConsentStateVendors[vendor],"color: #0C0");
            else console.log("\t\t"+vendorName[vendor]+"\n\t\t\tConsent: %c"+evidonConsentStateVendors[vendor],"color: #C00");
        }

        console.log("\n\t%c"+"Consented Categories:", "font-size: .85rem");
        const evidonConsentStateCategories = evidon.notice._getConsentedCategories();
        for (category in evidonConsentStateCategories){
            if(evidonConsentStateCategories[category]) console.log("\t\t"+category+"\n\t\t\tConsent: %c"+evidonConsentStateCategories[category],"color: #0C0");
            else console.log("\t\t"+category+"\n\t\t\tConsent: %c"+evidonConsentStateCategories[category],"color: #C00");
        }
        
    }, 500)
}