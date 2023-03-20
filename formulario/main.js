const btnLogin = document.getElementById("btn-1");
const passwordRegex = /^[A-Za-z0-9]\w{8,}$/;
const passwordInput = document.getElementById("senha");
const emailInput = document.getElementById("email");
const emailRegex =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

btnLogin.addEventListener("click" , (e) => {
    e.preventDefault(); 

    if(passwordRegex.test(passwordInput.value) && emailRegex.test(emailInput.value)){
        alert("logado")
    }
    else if(passwordRegex.test(passwordInput.value) == false && emailRegex.test(emailInput.value) == false) {
        emailInput.style.border = "2px solid red";
        passwordInput.style.border = "2px solid red";
    }
    else if(emailRegex.test(emailInput.value) == false){
        emailInput.style.border = "2px solid red";
    }
    else if(passwordRegex.test(passwordInput.value) == false) {
        passwordInput.style.border = "2px solid red";
    }
    console.log(emailRegex.test(emailInput.value));
    console.log(passwordRegex.test(passwordInput.value));
});

emailInput.addEventListener("click", () => {
    emailInput.style.border = "none"
});

passwordInput.addEventListener("click", () => {
    passwordInput.style.border = "none"
});

