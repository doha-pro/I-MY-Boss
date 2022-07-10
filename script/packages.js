document.getElementById("webHostingPill").clicked;

function packageNavbar(navId) {

    let webHostingPill = document.getElementById("webHostingPill");
    let webHostingPillText = document.getElementById("webHostingPillText");
    let webSecurityPill = document.getElementById("webSecurityPill")
    let webSecurityPillText = document.getElementById("webSecurityPillText")
    let webDevelopmentPill = document.getElementById("webDevelopmentPill")
    let webDevelopmentPillText = document.getElementById("webDevelopmentPillText");
    let primaryColor = "#61CE71"
    let whiteColor = "#ffffff";
    switch (navId) {


        case "webHostingPill":
            webHostingPill.style.display = "flex";

            webSecurityPill.style.display = "none";
            webDevelopmentPill.style.display = "none";

            webHostingPillText.style.backgroundColor = primaryColor;

            webSecurityPillText.style.backgroundColor = whiteColor



            webDevelopmentPillText.style.backgroundColor = whiteColor;

            break;
        case "webSecurityPill":
            webSecurityPill.style.display = "flex";
            webHostingPill.style.display = "none";
            webDevelopmentPill.style.display = "none";

            webHostingPillText.style.backgroundColor = whiteColor;

            webSecurityPillText.style.backgroundColor = primaryColor



            webDevelopmentPillText.style.backgroundColor = whiteColor;


            break;
        case "webDevelopmentPill":
            webDevelopmentPill.style.display = "flex";
            webHostingPill.style.display = "none";
            webSecurityPill.style.display = "none";

            webHostingPillText.style.backgroundColor = whiteColor;

            webSecurityPillText.style.backgroundColor = whiteColor



            webDevelopmentPillText.style.backgroundColor = primaryColor;

            break;

    }


}