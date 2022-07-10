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
    let navColor = "#7E7E7E";

    switch (navId) {





        case "webHostingPill":

            webHostingPill.style.display = "flex";

            webSecurityPill.style.display = "none";
            webDevelopmentPill.style.display = "none";

            webHostingPillText.style.backgroundColor = primaryColor;
            webHostingPillText.style.color = whiteColor;

            webSecurityPillText.style.backgroundColor = whiteColor
            webSecurityPillText.style.color = navColor



            webDevelopmentPillText.style.backgroundColor = whiteColor;
            webDevelopmentPillText.style.color = navColor;

            break;
        case "webSecurityPill":
            webSecurityPill.style.display = "flex";
            webHostingPill.style.display = "none";
            webDevelopmentPill.style.display = "none";

            webHostingPillText.style.backgroundColor = whiteColor;
            webHostingPillText.style.color = navColor;

            webSecurityPillText.style.backgroundColor = primaryColor
            webSecurityPillText.style.color = whiteColor



            webDevelopmentPillText.style.backgroundColor = whiteColor;
            webDevelopmentPillText.style.color = navColor;


            break;
        case "webDevelopmentPill":
            webDevelopmentPill.style.display = "flex";
            webHostingPill.style.display = "none";
            webSecurityPill.style.display = "none";

            webHostingPillText.style.backgroundColor = whiteColor;
            webHostingPillText.style.color = navColor;

            webSecurityPillText.style.backgroundColor = whiteColor
            webSecurityPillText.style.color = navColor



            webDevelopmentPillText.style.backgroundColor = primaryColor;
            webDevelopmentPillText.style.color = whiteColor;

            break;

    }


}