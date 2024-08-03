aI.prototype.showPreferencesDialog = function (aO, aP) {
    var aN = this;
    if (!window.evidon.preferencesDialog) {
        this.appendScript(aH + ax, function () {
            aN.showPreferencesDialog(aO, aP)
        });
        window.evidon.events.subscribe("l2closed", function () {
            aN._showConsentAccess()
        }, 1)
    } else {
        if (window.evidon.preferencesDialog.isDisplayed && window.evidon.preferencesDialog.isDisplayed()) {
            return
        }
        if (aO === undefined) {
            window.evidon.preferencesDialog.TAB_ID = aO;
            window.evidon.preferencesDialog.TAB_SECONDARY_ID = aP;
            if (this.isUSOptOutRegulation() && !this._isConsentGiven() && this.dnsRightsType !== 0) {
                if (this.dnsEnabled) {
                    aO = this.PREFDIAG_TABS.DONOTSELL
                }
            }
            if (this.iabEnabled && this.iabVersion === 2 && window.evidon.cmpv2) {
                window.evidon.cmpv2.consentUIShown()
            }
        }
        if (aO) {
            window.evidon.preferencesDialog.TAB_ID = aO
        }
        if (aP) {
            window.evidon.preferencesDialog.TAB_SECONDARY_ID = aP
        }
        window.evidon.preferencesDialog.init();
        this.dropPixel(U);
        if (typeof window.evidon.banner !== "undefined" && window.evidon.banner) {
            window.evidon.banner.hideForOptions()
        }
        if (typeof window.evidon.barrier !== "undefined" && window.evidon.barrier) {
            window.evidon.barrier.hideForOptions()
        }
    }
};