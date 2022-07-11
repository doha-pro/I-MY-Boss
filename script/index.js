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

    $.ajax({
        type: "GET",
        url: "../languages/" + lang + ".json",
        success: function(response) {
            pageText = response.homePage;
            document.getElementById("domains").innerHTML = document.getElementById("domainsLabel").innerHTML = pageText.navbar.domains
            document.getElementById("hosting").innerHTML = document.getElementById("hostingLabel").innerHTML = pageText.navbar.hosting;
            document.getElementById("security").innerHTML = document.getElementById("securityLabel").innerHTML = pageText.navbar.security;
            document.getElementById("development").innerHTML = document.getElementById("developmentLabel").innerHTML = pageText.navbar.development;
            document.getElementById("marketing").innerHTML = document.getElementById("marketingLabel").innerHTML = pageText.navbar.marketing;

        }
    })


}