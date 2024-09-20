const checkConsentTiming = () =>{
    console.log("%c"+"Consent timing:", "font-size: 1rem");
    if(window.google_tag_data.ics.wasSetLate) console.log("%c"+"\tConsent was set late", "color: #C00");
    else console.log("%c"+"\tConsent was not set late", "color: #0C0")
}

const logConsent = () => {
  l = s => s == undefined ? "" : s ? "granted" : "denied";
  c = s => s == "granted" ? "color: #0C0": "color: #C00";
  if (!window["google_tag_data"]) {
    console.warn("No Consent Mode data found");
    return;
  }
  var g = "ics" in google_tag_data ? google_tag_data.ics.entries : null, 
      i = "",
      t = "%c" + "Consent Mode settings:";
  console.log(t, "font-size: 1rem");
  for (var a in g) {
    i = l(g[a]['default']);
    if (i == "" ) continue;
    t = ("\t" + a + ":" + (i != "" ? "\n\t\tDefault: %c" + i : "%c"));
    console.log(t, i != "" ? c(i) : "", "");
  }
  if (i == "") console.log("No default Consent settings found");
}


const logConsentUpdate = () => {
  l = s => s == undefined ? "" : s ? "granted" : "denied";
  c = s => s == "granted" ? "color: #0C0": "color: #C00";
  if (!window["google_tag_data"]) {
    console.warn("No Consent Mode data found");
    return;
  }
  var g = "ics" in google_tag_data ? google_tag_data.ics.entries : null, 
      t = "%c" + "Consent Mode settings:", 
      u = "";
  console.log(t, "font-size: 1rem");
  for (var a in g) {
    u = l(g[a]['update']);
    if (u == "") continue;
    t = ("\t" + a + ":" + (u != "" ? "\n\t\tUpdate: %c" + u : "%c"));
    console.log(t, u != "" ? c(u) : "", "");
  }
}       
logConsentUpdate()
checkConsentTiming();
logConsent();