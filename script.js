let signupBtn=document.getElementById("signupBtn");
let loginBtn=document.getElementById("loginBtn");
let nameField=document.getElementById("nameField");
let title=document.getElementById("title");

loginBtn.onclick=function() {
    nameField.style.maxHeight="0";
    title.innerHTML="Login";
    signupBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
}
