// let default1 = document.getElementById("default");
// let dark = document.getElementById("dark");
// let light = document.getElementById("light");
// let ocean = document.getElementById("ocean");
// let sunset = document.getElementById("sunset");
// let forest = document.getElementById("forest");
// let midnight = document.getElementById("midnight");
// let candy = document.getElementById("candy");
// let arctic = document.getElementById("arctic");
// let lava = document.getElementById("lava");
// let mint = document.getElementById("mint");
// let royal = document.getElementById("royal");
// let peach = document.getElementById("peach");
// let neon = document.getElementById("neon");
// let autumn = document.getElementById("autumn");
// let galaxy = document.getElementById("galaxy");
// let levender = document.getElementById("levender");

function setTheme(theme) {

    const title = document.getElementById("currentTheme");

    if (theme === "Default") {
        document.body.style.background = "linear-gradient(135deg, #e0e0e0, #ffffff)";
        document.body.style.color = "#222";
    }

    else if (theme === "Ocean") {
        document.body.style.background = "linear-gradient(135deg, #2193b0, #6dd5ed)";
        document.body.style.color = "#fff";
    }

    else if (theme === "Sunset") {
        document.body.style.background = "linear-gradient(135deg, #db8d10, #d00404)";
        document.body.style.color = "#fff";
    }

    else if (theme === "Forest") {
        document.body.style.background = "linear-gradient(135deg, #134e5e, #71b280)";
        document.body.style.color = "#fff";
    }

    else if (theme === "Midnight") {
        document.body.style.background = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
        document.body.style.color = "#fff";
    }

    else if (theme === "Candy") {
        document.body.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
        document.body.style.color = "#222";
    }

    else if (theme === "Arctic") {
        document.body.style.background = "linear-gradient(135deg, #83a4d4, #b6fbff)";
        document.body.style.color = "#222";
    }

    else if (theme === "Lava") {
        document.body.style.background = "linear-gradient(135deg, #cb2d3e, #ef473a)";
        document.body.style.color = "#fff";
    }

    else if (theme === "Mint") {
        document.body.style.background = "linear-gradient(135deg, #76b852, #8dc26f)";
        document.body.style.color = "#fff";
    }

    else if (theme === "Royal") {
        document.body.style.background = "linear-gradient(135deg, #141e30, #243b55)";
        document.body.style.color = "#fff";
    }

    else if (theme === "Peach") {
        document.body.style.background = "linear-gradient(135deg, #ed4264, #ffedbc)";
        document.body.style.color = "#222";
    }

    else if (theme === "Neon") {
        document.body.style.background = "linear-gradient(135deg, #00f260, #0575e6)";
        document.body.style.color = "#fff";
    }

    else if (theme === "Autumn") {
        document.body.style.background = "linear-gradient(135deg, #d38312, #a83279)";
        document.body.style.color = "#fff";
    }

    else if (theme === "Galaxy") {
        document.body.style.background = "linear-gradient(135deg, #2b5876, #4e4376)";
        document.body.style.color = "#fff";
    }

    else if (theme === "Levender") {
        document.body.style.background = "linear-gradient(135deg, #b993d6, #8ca6db)";
        document.body.style.color = "#222";
    }

    else if (theme === "Light") {
        document.body.style.background = "#ffffff";
        document.body.style.color = "#000";
    }

    else if (theme === "Dark") {
        document.body.style.background = "#121212";
        document.body.style.color = "#ffffff";
    }

    title.innerText = "Current Theme: " + theme;
}


