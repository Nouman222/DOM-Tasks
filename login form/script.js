let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");

let data = {
    username: "nomi",
    password: "1234"
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // clear previous messages
    div1.querySelectorAll("div").forEach(d => d.remove());
    div2.querySelectorAll("div").forEach(d => d.remove());

    // empty fields check
    if (username.value === "" && password.value === "") {
        alert("please fill the fields");
    }
    else if (username.value !== data.username) {
        let userinvalid = document.createElement("div");
        userinvalid.innerText = "Invalid username";
        userinvalid.style.color = "red";
        div1.appendChild(userinvalid);
    }
    else if (password.value !== data.password) {
        let passinvalid = document.createElement("div");
        passinvalid.innerText = "Invalid password";
        passinvalid.style.color = "red";
        div2.appendChild(passinvalid);
    }
    else {
        alert("you are successfully login");
    }
});
