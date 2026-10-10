//code adapted from https://www.cssscript.com/cookie-consent-popup-purecookie/
//MIT licence
var purecookieTitle="This website is a student project.";
var purecookieDesc="Visit the real website: ";
var purecookieLink='<a href="https://leedsfoodaidnetwork.co.uk/" target="_blank">Leeds Food Aid Network</a>';
var purecookieButton="Understood";

function pureFadeIn(elem, display){
    var el = document.getElementById(elem);
    el.style.opacity=0;
    el.style.display=display||"block";(function fade(){var val=parseFloat(el.style.opacity);if(!((val+=.02)>1)){el.style.opacity=val;requestAnimationFrame(fade);}})();
};

function pureFadeOut(elem){
    var el=document.getElementById(elem);
    el.style.opacity=1;(function fade(){if((el.style.opacity-=.02)<0){el.style.display="none";}else{requestAnimationFrame(fade);}})();
};

function setCookie(name,value,days){
    var expires="";if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toUTCString();}
document.cookie=name+"="+(value||"")+expires+"; path=/";
}

function cookieConsent(){
    if(!document.cookie.includes('leedsPopupSeen=1')){
    document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>'+purecookieTitle+'</a></div><div class="cookieDesc"><p>'+purecookieDesc+' '+purecookieLink+'</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">'+purecookieButton+'</a></div></div>';
    pureFadeIn("cookieConsentContainer");
}
}



function eraseCookie(name){
    document.cookie=name+'=; Max-Age=-99999999;';
}

function purecookieDismiss(){
    setCookie('leedsPopupSeen','1',0);
    pureFadeOut("cookieConsentContainer");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cookieConsent);
} else {
    cookieConsent();
}