let language;
let cookie = document.cookie;
let pageText;

function setCookie(cName, cValue) {
    document.cookie = cName + "=" + cValue
}

if (!cookie.language) {
    setLanguage('en');
    setCookie("language", "en")
}
language = cookie.language;
setPage(language)

function setLanguage(lang) {
    setCookie("language", lang)
    setPage(lang)

}


function setPage(lang) {
    let domainsSubMenu;
    let hostingSubMenu;
    $.ajax({
        type: "GET",
        url: "../languages/" + lang + ".json",
        success: function(response) {
            pageText = response.homePage;
            domainsSubMenu = response.homePage.navbar.domainsMenu;
            hostingSubMenu = response.homePage.navbar.hostingMenu;
            console.log("domainsMenu= " + domainsSubMenu)
            getEle("domains").innerHTML = getEle("domainsLabel").innerHTML = pageText.navbar.domains
            getEle("hosting").innerHTML = getEle("hostingLabel").innerHTML = pageText.navbar.hosting;
            getEle("security").innerHTML = getEle("securityLabel").innerHTML = pageText.navbar.security;
            getEle("development").innerHTML = getEle("developmentLabel").innerHTML = pageText.navbar.development;
            getEle("marketing").innerHTML = getEle("marketingLabel").innerHTML = pageText.navbar.marketing;
            getEle("domianRegisterationSubMenu").innerHTML = domainsSubMenu.domianRegisteration.title;
            getEle("transferOfDomainsSubMenu").innerHTML = domainsSubMenu.transferOfDomains.title;
            getEle("serachWhoIsSubMenu").innerHTML = domainsSubMenu.serachWhoIs.title;
            getEle("domianPolicySubMenu").innerHTML = domainsSubMenu.domianPolicy.title;
            // // Hosting sub Menu
            getEle("wordPressHostingSubMenu").innerHTML = hostingSubMenu.wordPressHosting.title;
            getEle("sharedHostingSubMenu").innerHTML = hostingSubMenu.sharedWebHosting.title;
            getEle("businessWebHostingSubMenu").innerHTML = hostingSubMenu.businessWebHosting.title;
            getEle("emailHostingSubMenu").innerHTML = hostingSubMenu.emailHosting.title;
            getEle("domianSearchHeader").innerHTML = response.homePage.domainSearchBar.header
        }
    })


}

function getEle(id) {
    let ele = document.getElementById(id);
    return ele
}

/**
 * 
// Development menu



// Conception Web

Conception Web
Recevez un devis sous 48 h!

    DEMANDER UN DEVIS

Développement Web
Recevez un devis sous 48 h!

    DEMANDER UN DEVIS


Développement d 'API
Recevez un devis sous 48 h!

    DEMANDER UN DEVIS





// 

SEO
Plans Start at $4 .50 per month!

    LEARN MORE


SEA
Plans Start at $7 .50 per month!

    LEARN MORE


SMM
Plans Start at $9 .50 per month!

    LEARN MORE


// Content Writing
Rédaction de Contenu
Plans Start at $11 .50 per month!

    LEARN MORE
 */