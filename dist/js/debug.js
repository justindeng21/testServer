if(window.google_tag_data.ics.wasSetLate){
    console.log("Consent was set late.");
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
      t = "%c" + "Consent Mode settings:", 
      u = "";
  console.log(t, "font-size: 1rem");
  for (var a in g) {
    i = l(g[a]['default']);
    u = l(g[a]['update']);
    if (i == "" && u == "") continue;
    t = ("\t" + a + ":" +
      (i != "" ? "\n\t\tDefault: %c" + i : "%c")
      + "%c" +
      (u != "" ? "\n\t\tUpdate: %c" + u : "%c"));
    console.log(t, i != "" ? c(i) : "",
    "", u != "" ? c(u) : "", "");
  }
  if (i == "") console.log("No default Consent settings found");
}