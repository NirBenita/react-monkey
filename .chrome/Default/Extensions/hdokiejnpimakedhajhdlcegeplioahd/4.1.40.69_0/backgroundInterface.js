Interfaces.BackgroundInterface=function(h){var b=h.TYPE_FUNCTION,d=h.TYPE_SYNC_FUNCTION,g=h.TYPE_STRING,e=h.TYPE_BOOLEAN,f=h.TYPE_OBJECT,c=h.TYPE_NUMBER,a=h.Definition;return{base_url:new a(g),FILENAME_FRAGMENT_BAD_CONTROL_CHARS:new a(g,{include:["vault","note"]}),FILENAME_FRAGMENT_BAD_SHELL_CHARS:new a(g,{include:["vault","note"]}),g_bigicons:new a(f,{include:["vault","vaultItemSelect"],sendIndirect:!1,write:!0}),g_icons:new a(f,{include:["vault","extensionDropdown","vaultItemSelect"]}),g_applications:new a(f,
{include:["vault","extensionDropdown","application"]}),g_emer_sharees:new a(f,{include:"vault"}),g_emer_sharers:new a(f,{include:"vault"}),g_enterpriseuser:new a(c,{sync:!0}),g_teamsenterprisemodel:new a(c,{sync:!0}),g_formfills:new a(f,{include:["vault","extensionDropdown","formFill","chooseProfile","preferences"]}),g_genpws:new a(f,{include:["vault","extensionDropdown"],write:!0}),g_identities:new a(f,{include:["vault","extensionDropdown"]}),g_identity:new a(g,{include:["vault","extensionDropdown"],
sync:!0}),g_iscompanyadmin:new a(e,{sync:!0}),g_local_accts_version:new a(g,{include:"vault",sync:!0}),g_local_key:new a(g),g_pendings:new a(f,{include:"vault"}),g_prefoverrides:new a(f),g_premium_exp:new a(f),g_prompts:new a(f),g_securenotes:new a(f,{include:["vault","extensionDropdown","note","vaultItemSelect"]}),g_shares:new a(f),g_showcredmon:new a(e,{include:"vault",sync:!0}),g_sites:new a(f,{include:"vault extensionDropdown site note formFill contentScriptSite".split(" ")}),g_pending_shares:new a(f,
{include:["vault"]}),g_note_templates:new a(f,{include:["vault","note"]}),g_username:new a(g),g_username_hash:new a(g,{include:"vault"}),g_reminders:new a(f,{include:["vault"],write:!0}),g_one_minute_inbox_importer_dialog_enabled:new a(e,{include:"vault"}),g_one_minute_signup_enabled:new a(e,{include:"vault"}),g_one_minute_signup_menu_enabled:new a(e,{include:"vault"}),g_first_time_login:new a(e,{include:"vault"}),g_onemin_advert_enabled:new a(e,{include:"vault"}),g_nofolder_feature_enabled:new a(f,
{include:"vault preferences extensionDropdown contentScript siteDialog site note formFill contentScriptSite".split(" ")}),g_onemin_advert_app_threshold:new a(c,{include:"vault"}),lp_attaches:new a(f,{include:["vault","note"]}),LPContentScriptFeatures:new a(f,{include:["contentScript","vault"]}),lploggedin:new a(e,{sync:!0}),lpversion:new a(g,{include:"vault"}),rsaprivatekeyhex:new a(g,{include:"vault",write:!0}),siteCats:new a(f,{include:["vault","site"]}),addAttach:new a(b),addeditformfill:new a(b),
addEmptyGroup:new a(b),LPServer:{ajax:new a(b),xmlRequest:new a(b),textRequest:new a(b),jsonRequest:new a(b)},BackgroundServer:{emergencyAccess:{acceptOffer:new a(b),addRecipient:new a(b),declineOffer:new a(b),denyAccess:new a(b),getRecipientInfo:new a(b),getSharerInfo:new a(b),removeRecipient:new a(b),requestAccess:new a(b),unlinkAccount:new a(b),updateRecipient:new a(b)},identities:{add:new a(b),remove:new a(b),update:new a(b)},sharing:{individual:{shareItems:new a(b),unshareItem:new a(b),acceptShare:new a(b),
rejectShare:new a(b),inviteFriends:new a(b),getSentShareData:new a(b),getReceivedShareData:new a(b)},folder:{getFolders:new a(b),getPublicKeys:new a(b),create:new a(b),rename:new a(b),remove:new a(b),accept:new a(b),reject:new a(b),addMembers:new a(b),getMembers:new a(b),removeMember:new a(b),reinviteMember:new a(b),updateMemberPermissions:new a(b),getRestrictions:new a(b),updateRestrictions:new a(b),startDownloading:new a(b),stopDownloading:new a(b),restoreDeleted:new a(b),purgeDeleted:new a(b),
convertToEnterprise:new a(b)}},sitesAndNotes:{saveCustomNoteTemplate:new a(b),deleteCustomNoteTemplate:new a(b)}},changePassword:new a(b),deleteAid:new a(b),deleteformfill:new a(b),deleteGroup:new a(b),editAid:new a(b),fastEncryptAttachments:new a(b),generate_key:new a(b),get_securityChallengeScore:new a(b),gotourl:new a(b),launch:new a(b),launchApp:new a(b),loggedOut:new a(b),loglogin:new a(b),lpReportError:new a(b),make_lp_hash_iterations:new a(b),make_lp_key_hash:new a(b),make_lp_key_iterations:new a(b),
moveIntoSharedFolder:new a(b),moveSelectedToGroup:new a(b),openAllSites:new a(b),openAttach:new a(b),openexport:new a(b),openentconsole:new a(b),openfavorites:new a(b),openimport:new a(b),openseccheck:new a(b),openURL:new a(b),processCS:new a(b),refreshGroupNames:new a(b),refreshsites:new a(b),renameGroup:new a(b),saveFields:new a(b),saveSite:new a(b),sendLpImprove:new a(b),singlefactor_reprompt:new a(b),switch_identity:new a(b),unlock_plug2web:new a(b),exportAttachment:new a(b),install_binary:new a(b),
VaultToggle:{toggleVault3_0:new a(b)},increment_local_accts_version:new a(b),AES:{bin2hex:new a(d),Decrypt:new a(d),Encrypt:new a(d),hex2bin:new a(d),hex2url:new a(d),url2hex:new a(d)},can_copy_to_clipboard:new a(d),canLaunchApplication:new a(d),check_filename_badchars:new a(d),crypto_btoa:new a(d),db_prepend:new a(d),dec:new a(d),enc:new a(d),enccbc:new a(d),encode_private_key:new a(d),encode_public_key:new a(d),fix_username:new a(d),get_last_reprompt_time:new a(d),get_mimetype_from_filename:new a(d),
get_personal_linked:new a(d),get_random_password:new a(d),getbigicon:new a(d),geticonurlfromrecord:new a(d),gs:new a(d),have_binary:new a(d),isOffline:new a(d),localStorage_getItem:new a(d),localStorage_setItem:new a(d),lp_gettld_url:new a(d),lpCreatePass:new a(d),lpdec:new a(d),lpenc:new a(d),lpevent:new a(d),lpmdec:new a(d),lpmenc:new a(d),parse_public_key:new a(d),parse_private_key:new a(d),parsemobile:new a(d),punycode:{URLToASCII:new a(d)},RSAKey:new a(h.TYPE_CONSTRUCTOR),set_last_reprompt_time:new a(d),
SHA256:new a(d),hostof:new a(d),StringUtils:{translate:new a(d)},Preferences:{get:new a(d),set:new a(d,{sendIndirect:!0})},rsa_encrypt_privatekey:new a(d),Provisioning:{provisioning:{checkUserState:new a(b,{include:"provisioning"}),sendApiCalls:new a(b,{include:"provisioning"}),getLocalKey:new a(b,{include:"provisioning"})}},get_method_async:new a(b)}}(Interfaces);
(function(h){var b=Interfaces.TYPE_FUNCTION,d=Interfaces.TYPE_SYNC_FUNCTION,g=Interfaces.TYPE_STRING,e=Interfaces.TYPE_BOOLEAN,f=Interfaces.TYPE_OBJECT,c=Interfaces.Definition,b={countryfromip:new c(g,{include:"vault"}),g_loggedinoffline:new c(g,{include:["vault","site"]}),g_loggedinonline:new c(g,{include:"vault"}),g_badgedata:new c(f,{include:["login","extensionDropdown","vault"]}),g_flags:new c(f,{include:"preferences"}),g_hideappearancebox:new c(e,{include:"preferences"}),g_hidehelptranslate:new c(e,
{include:"preferences"}),g_hidelogoffprefs:new c(e,{include:"preferences"}),g_hidenotes:new c(e,{include:"preferences"}),g_hiderecentlyusedlistsize:new c(e,{include:"preferences"}),g_hidesaedhotkey:new c(e,{include:"preferences"}),g_hidesearch:new c(e,{include:"preferences"}),g_hidevault:new c(e,{include:"preferences"}),g_hideshowvault:new c(e,{include:"preferences"}),g_is_linux:new c(e,{include:"preferences"}),g_is_win:new c(e,{include:["vault","preferences"]}),g_is_mac:new c(e,{include:"preferences"}),
g_issafari:new c(e,{include:"preferences"}),g_langs:new c(f,{include:"preferences"}),g_nofolder_feature_enabled:new c(f,{include:"vault preferences extensionDropdown contentScript siteDialog site note formFill contentScriptSite".split(" ")}),g_manual_login:new c(e,{include:"login",write:!0}),g_master_password_saved:new c(e,{include:"preferences"}),g_nopoll:new c(e,{include:"preferences"}),g_notification_data:new c(f,{include:["login","extensionDropdown","vault"]}),g_notification_type:new c(f,{include:["login",
"extensionDropdown"]}),g_offer_popupfill:new c(e,{include:"preferences"}),g_shownewloginoption:new c(e,{include:"preferences"}),lp_phpsessid:new c(g),lppassusernamehash:new c(e,{include:"preferences"}),remembersignons:new c(e,{include:"login"}),g_userprefs:new c(f,{sync:!0}),g_gblprefs:new c(f,{sync:!0}),clearRecentTime:new c(e,{include:"extensionDropdown",sourceFunction:"getClearRecentTime"}),g_sites_tld:new c(e,{include:"extensionDropdown",sourceFunction:function(){return getmatchingsites(!1,!0,
!1)}}),g_can_clear_clipboard:new c(e,{sourceFunction:"can_clear_clipboard"}),g_can_copy_to_clipboard:new c(e,{sourceFunction:"can_copy_to_clipboard"}),g_is_chrome_portable:new c(e),g_user_debug_enabled:new c(e,{sourceFunction:"is_user_debug_enabled"}),g_have_nplastpass:new c(e,{sourceFunction:"have_nplastpass"}),g_have_native_messaging:new c(e,{sourceFunction:"have_native_messaging"}),g_have_ws:new c(e,{sourceFunction:"have_ws"}),LPContentScriptFeatures:new c(f,{include:["contentScript","vault","preferences"]}),
g_one_minute_inbox_importer_dialog_enabled:new c(e,{include:["vault"]}),lp_iscbc:new c(e),extensionBaseURL:new c(g,{include:"contentScript",sourceFunction:function(){return getchromeurl("",!0)}}),create_account_safe:new c(b),copytoclipboard:new c(b),clear_badge:new c(d,{sendIndirect:!0}),clear_badge_text:new c(b),clearCache:new c(b),clearforms:new c(b),clearrecent:new c(b),createContextMenus:new c(b),DeleteOTP:new c(b),disableallalerts:new c(b),disablepasswordmanager:new c(b),disablesitealert:new c(b),
formfillexport:new c(b),get_saved_logins:new c(b),delete_saved_login:new c(b),get_selected_tab:new c(b),get_selected_tab_data_no_extension:new c(b),loggedOut:new c(b),LP_do_login:new c(b),lpevent:new c(b),LPData:{getData:new c(b),setValue:new c(b)},LPPlatform:{getFavicon:new c(b),openTabDialog:new c(b),openPopoverDialog:new c(b),isMac:new c(d),isWin:new c(d)},openabout:new c(b),opendebugtab:new c(b),openentconsole:new c(b),openexport:new c(b),openfavorites:new c(b),openhelp:new c(b),openimport:new c(b),
openimportchrome:new c(b),openlastpassexport:new c(b),openmyaccount:new c(b),openprefs:new c(b),openprint:new c(b),openseccheck:new c(b),opensessions:new c(b),openURL:new c(b),openvault:new c(b),saveall:new c(b),start_trial:new c(b),unprotect_data:new c(b),wlanexport:new c(b),lpWriteAllPrefs:new c(b),saveSiteFromSubmit:new c(b),get_selected_tab_data:new c(b),fillGeneratedPassword:new c(b),saveAllSite:new c(b),repromptSuccess:new c(b),open_login:new c(b),fillaid:new c(b),fillform:new c(b),setup_hotkeys:new c(b),
IntroTutorial:{getState:new c(b),setState:new c(b),setTemporaryDisable:new c(b),getTemporaryDisable:new c(b)},OmsNotificationPopup:{getState:new c(b),setState:new c(b),startOms:new c(b),cancelNotification:new c(b),postponeNotification:new c(b)},sendLpImprove:new c(b),handleNeverURL:new c(b),can_clear_clipboard:new c(d),fix_username:new c(d),get_lplanguage:new c(d),getClearRecentTime:new c(d,{include:"extensionDropdown"}),getmatchingsites:new c(d),gettaburl:new c(d),gs:new c(d),have_binary:new c(d),
include_language:new c(d),is_chrome_portable:new c(d),is_opera_chromium:new c(d),is_firefox_webext:new c(d),is_user_debug_enabled:new c(d),setcurrenttabid:new c(d),setcurrenturl:new c(d),get_method_async:new c(b),updateFieldsFromSubmit:new c(b,{include:"contentScriptSiteDialog"}),LPIcons:{get:new c(b)},LPTabState:{getSiteNotification:new c(b,{include:"contentScript",appendAdditionalArguments:!0}),processTextSubmit:new c(b,{include:"contentScript",appendAdditionalArguments:!0}),processPasswordSubmit:new c(b,
{include:"contentScript",appendAdditionalArguments:!0}),clear:new c(b,{include:["contentScript","contentScriptSite"],appendAdditionalArguments:!0}),getState:new c(b,{include:"contentScript",appendAdditionalArguments:!0}),setCopiedGeneratedPassword:new c(b,{include:["generatePassword","infieldPopup"]}),getCopiedGeneratedPassword:new c(b,{include:"contentScript"})},SiteLaunchObserver:{startFillTracking:new c(b,{include:"contentScript",appendAdditionalArguments:!0}),isFeatureEnabled:new c(b,{include:"contentScript",
appendAdditionalArguments:!0}),formSubmitted:new c(b,{include:"contentScript",appendAdditionalArguments:!0}),initiateFormExists:new c(b,{include:"contentScript",appendAdditionalArguments:!0}),hasFormWithPassword:new c(b,{include:"contentScript",appendAdditionalArguments:!0})}};Interfaces.extend(h,b)})(Interfaces.BackgroundInterface);
