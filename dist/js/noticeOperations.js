"use strict";
console.log('Hi Justin');
class NoticeOperations {
    /*

        Paramerters: noticeId - int
        Returns: Promise
        Algorithm: Makes an HTTP request to the UCP api to fetch a specific notice's settings given a notice ID.

    */
    static getNotice(noticeId) {
        return fetch('https://privacy.evidon.com/v3/sitenotice/api/v3/sitenotice/' + String(noticeId), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    /*

        Paramerters: payload - object
        Returns: Promise
        Algorithm: Makes an HTTP request to the UCP api to save/create a notice given a payload

    */
    static saveNotice(payload) {
        return fetch('https://privacy.evidon.com/v3/sitenotice/api/v3/sitenotice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    }
    /*

        Paramerters: none
        Returns: Promise
        Algorithm: Makes an HTTP request to the UCP api to fetch all notices and their settings

    */
    static getAllDomains() {
        return fetch('https://privacy.evidon.com/v3/sitenotice/api/v3/sitenotice/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    /*

        Paramerters: newDomain - String, noticeId - int
        Returns: none
        Algorithm:
            1. The method fetches all notices on the account to validate the notice Id and new domain name. The notice ID must already exist, and the domain must not already exist.
            2. Once validated, the notice settings specified, is fetched from Evidon servers.
            3. The notice domains and ID are modified. Please note that the ID is set to zero; this lets Evidon servers know that a new notice needs to be created.
            4. The new notices settings are then sent in a POST request to the Evidon severs to create the new notice.

    */
    static copyNotice(newDomain, noticeId) {
        NoticeOperations.getNotice(noticeId)
            .then((response) => response.text())
            .then((body) => {
            console.log('Notice settings fetched');
            let noticeSettings = JSON.parse(body);
            noticeSettings.domain = newDomain;
            noticeSettings.id = 0;
            NoticeOperations.saveNotice(noticeSettings)
                .then(() => {
                console.log('Request to save notice made');
            });
        });
    }
}
;
class TemplateOperations {
    /*

        Paramerters: templateId - int
        Returns: Promise
        Algorithm: Makes an HTTP request to the UCP api to fetch a specific templates's settings given a template ID.
        
    */
    static getTemplate(templateId) {
        return fetch('https://privacy.evidon.com/v3/sitenotice/api/sntemplate/' + String(templateId), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    /*

        Paramerters: payload - object
        Returns: Promise
        Algorithm: Makes an HTTP request to the UCP api to save/create a template given a payload

    */
    static saveTemplate(payload) {
        return fetch('https://privacy.evidon.com/v3/sitenotice/api/sntemplate/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    }
    /*

        Paramerters: none
        Returns: Promise
        Algorithm: Makes an HTTP request to the UCP api to fetch all templates and their settings

    */
    static getAllTemplates() {
        return fetch('https://privacy.evidon.com/v3/sitenotice/api/sntemplate', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    /*

        Paramerters: newDomain - String, noticeId - int
        Returns: none
        Algorithm:
            1. The method fetches all templates on the account to validate the template ID. The template ID must already exist.
            2. Once validated, the template settings specified, is fetched from Evidon servers.
            3. The template ID is modified. Please note that the ID is set to zero; this lets Evidon servers know that a new template needs to be created.
            4. The new template settings are then sent in a POST request to the Evidon severs to create the new template.

    */
    static copyTemplate(templateId) {
        TemplateOperations.getTemplate(templateId)
            .then((response) => response.text())
            .then((body) => {
            console.log('Template settings fetched');
            let templateSettings = JSON.parse(body);
            templateSettings.name = 'copy' + templateSettings.name;
            templateSettings.id = 0;
            TemplateOperations.saveTemplate(templateSettings)
                .then(() => {
                console.log('Request to save template made');
            });
        });
    }
}
