document.addEventListener("DOMContentLoaded", () => {
    const formOpenBtn = document.querySelector("#formOpen");
    const home = document.querySelector(".home");
    const formContainer=document.querySelector(".formContainer")
    const formCloseButton = document.querySelector(".formClose");
    const signupBtn = document.querySelector("#signup");
    const loginBtn = document.querySelector("#signin");
    const pwShowHide = document.querySelectorAll(".pw_hide");
    const forgpass=document.querySelector(".forgetpw");
    const signupForm=document.getElementById("signupForm");
    const loginForm=document.getElementById("login_orm");
    const forgetPass=document.getElementById("forgetpass");

    formOpenBtn.addEventListener("click", () => {
        console.log("Form open button clicked.");
        home.classList.add("show");
    });
    formCloseButton.addEventListener("click", () => {
        console.log("Form close button clicked.");
        home.classList.remove("show");
    });//icon ghe smeya d var passenah mais smenah icon het dak queryselectorall dyal pw_hide ay3tena nodeliste dyal les icones w ha elash lupena westhum b for each  w smena lvar icons
    pwShowHide.forEach((icon) => {
        icon.addEventListener("click", () => {
            let getNewInput=icon.parentElement.querySelector("input");
            if(getNewInput.type=="password")
            {
                getNewInput.type="text";
                icon.classList.replace("uil-eye-slash","uil-eye");
            } 
            else{
                getNewInput.type="password";
                icon.classList.replace("uil-eye","uil-eye-slash");

            } 

        });
        
    });


    

    signupBtn.addEventListener("click", (e) => {
        console.log("Signup button clicked.");
        e.preventDefault();
        formContainer.classList.add("active");
        
    });
    loginBtn.addEventListener("click", (e) => {
        console.log("Signup button clicked.");
        e.preventDefault();
        formContainer.classList.remove("active");
    });
    forgpass.addEventListener("click", (e) => {
        console.log("forgotpass button clicked.");
        e.preventDefault();
        signupForm.style.display="none";
        loginForm.style.display="none";
        forgetPass.classList.add("see");
        
    });

    


});