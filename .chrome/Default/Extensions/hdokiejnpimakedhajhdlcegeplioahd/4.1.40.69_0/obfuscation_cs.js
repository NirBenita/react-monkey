function LP_element_is_MaskedField(a){if(!a)return!1;var b="",c="";try{b=a.ownerDocument.location.href,c=gettldcached(b)}catch(e){return!1}if(!LP_has_textlike_type(a))return!1;var b=a.getAttribute("onblur"),d=a.getAttribute("onfocus");return b&&"string"==typeof b&&0<=b.toLowerCase().indexOf("mask")||d&&"string"==typeof d&&0<=d.toLowerCase().indexOf("unmask")||"undefined"!=typeof a.hasAttribute&&("fidelity.com"==c&&!0===a.hasAttribute("data-unmasked")||a.hasAttribute("data-masklength"))||("citi.com"==
c||"citibank.com"==c)&&(name_is_MaskedField(LP_getname(a))||name_is_MaskedField(LP_getname(a,LP_GETNAME_FAVOR_ID_OVER_NAME)))||"stockplanconnect.com"==c&&"loginUsername"==a.id&&null!==a.ownerDocument.getElementById("unmaskedUsername")||"tdbank.com"==c&&"txtUser"==a.id&&"user"==a.name&&a.form&&"details"==a.form.name&&1==a.ownerDocument.getElementsByName("login").length&&2==a.ownerDocument.getElementsByName("user").length?!0:!1}
function LP_element_in_MaskedState(a){if(!a)return!1;var b=encodeURIComponent(a.value);return b&&"string"==typeof b&&0<b.length&&"password"!=a.type&&(0<=b.indexOf("***")||0<=b.indexOf("%E2%80%A2%E2%80%A2%E2%80%A2"))?!0:!1}function name_is_MaskedField(a){return!a||0>=a.length?!1:a.match(/masked/i)&&!a.match(/unmasked/i)?(g_in_lpframe&&"undefined"!=typeof score_log&&score_log("is masked? "+a+" true"),!0):!1}
function name_is_UnmaskedField(a){if(!a||0>=a.length)return!1;if(a.match(/unmasked/i))return g_in_lpframe&&"undefined"!=typeof score_log&&score_log("is unmasked? "+a+" true"),!0;if(!g_in_lpframe){var b=LP_derive_doc();if(b){var c=LP_getElementByIdOrName(b,a+"Masked");c||(c=LP_getElementByIdOrName(b,a+"masked"));c||(c=LP_getElementByIdOrName(b,a+"_Masked"));c||(c=LP_getElementByIdOrName(b,a+"_masked"));if(c)return!0}}return!1}
function update_preobfuscate_field_value(a){if(!a)return!1;var b=a.ownerDocument;b||(b=LP_derive_doc());if(!b)return!1;var c=LP_pickFieldName(b,a);if(c){var d=a.value;"undefined"==typeof d||null===d||LP_element_in_MaskedState(a)||fieldcacheset(b,c,"fieldval",d)}return!0}
function should_track_field_onkeyup(a){if(!a)return!1;var b=a.ownerDocument;b||(b=LP_derive_doc());if(!b)return!1;var c=LP_pickFieldName(b,a);if(c){var d=fieldcacheget(b,c,"stfu");if(null!=d)return d}var d=a.id,e=a.name;a=a.getAttribute("title");var f=get_doc_location_href(b);if("fidelity.com"==lp_gettld_url(f)&&("temp_id"==d||"temp_id"==a||"ssnt"==d||"ssn"==e||"userId"==d||"userId-input"==d))return c&&fieldcacheset(b,c,"stfu",!0),!0;c&&fieldcacheset(b,c,"stfu",!1);return!1}
function masked_monitor(a){a=LP_getEventTarget(a);var b=a.ownerDocument;if(a&&b&&"string"==typeof a.value)if(LP_element_in_MaskedState(a)){var c=a.value,d=lp_gettld_url(get_doc_location_href(b)),e=a.getAttribute("onblur");if("tdbank.com"==d&&c&&null!==e&&0<=e.toLowerCase().indexOf("mask")&&LP_element_in_MaskedState(a))for(d=formcacheget(b,LP_pickFieldName(b,a),"unmasked-value"),null===d&&(d=""),e=0;e<c.length;e++)"%E2%80%A2"==encodeURIComponent(c.charAt(e))&&(c=c.substr(0,e)+d.charAt(e)+c.substr(e+
1));formcacheset(b,LP_pickFieldName(b,a),"unmasked-value",c)}else formcacheset(b,LP_pickFieldName(b,a),"unmasked-value",a.value)}function LP_element_is_UnmaskedField(a){if(!a)return!1;var b="";try{b=a.ownerDocument.location.href,gettldcached(b)}catch(c){return!1}b=LP_getname(a);a=LP_getname(a,LP_GETNAME_FAVOR_ID_OVER_NAME);return name_is_UnmaskedField(b)||name_is_UnmaskedField(a)?!0:!1}
function track_masked_fields(a){a||(a=LP_derive_doc());if(!a)return!1;a=a.getElementsByTagName("input");for(var b=0;b<a.length&&b<MAX_INPUTS_SOFT;b++)lp_in_array(a[b].type,["text","url","email","tel"])&&(LP_element_is_MaskedField(a[b])||LP_element_is_UnmaskedField(a[b]))&&(LP_addEventHandler(a[b],"input",masked_monitor),LP_addEventHandler(a[b],"focus",masked_monitor),g_do_masked_humanize=!0);return!0};
