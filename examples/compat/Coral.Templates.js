window["Coral"] = window["Coral"] || {};
window["Coral"]["templates"] = window["Coral"]["templates"] || {};
window["Coral"]["templates"]["Element"] = window["Coral"]["templates"]["Element"] || {};
window["Coral"]["templates"]["Element"]["base"] = (function anonymous(data_0
                                                                     /**/) {
  var frag = document.createDocumentFragment();
  var data = data_0;
  var el0 = this["slider"] = document.createElement("div");
  el0.setAttribute("handle", "slider");
  el0.className += " coral3-Drawer-slider";
  var el1 = document.createTextNode("\n  ");
  el0.appendChild(el1);
  var el2 = this["contentWrapper"] = document.createElement("div");
  el2.setAttribute("handle", "contentWrapper");
  el2.className += " coral3-Drawer-content";
  el0.appendChild(el2);
  var el3 = document.createTextNode("\n");
  el0.appendChild(el3);
  frag.appendChild(el0);
  var el4 = document.createTextNode("\n");
  frag.appendChild(el4);
  var el5 = document.createElement("div");
  el5.className += " coral3-Drawer-toggle";
  var el6 = document.createTextNode("\n  ");
  el5.appendChild(el6);
  var el7 = this["toggle"] = document.createElement("button","coral-button");
  el7.className += " coral3-Drawer-toggleButton";
  el7.setAttribute("type", "button");
  el7.setAttribute("handle", "toggle");
  el7.setAttribute("is", "coral-button");
  el7.setAttribute("variant", "minimal");
  el7.setAttribute("icon", "chevronDown");
  el7.setAttribute("iconSize", "XS");
  el7.setAttribute("aria-label", "coral-element");
  el5.appendChild(el7);
  var el8 = document.createTextNode("\n");
  el5.appendChild(el8);
  frag.appendChild(el5);
  return frag;
});
