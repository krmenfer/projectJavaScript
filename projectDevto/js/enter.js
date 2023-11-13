const login = () =>{
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if (username && password) {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjM3LCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjIsImF2YXRhciI6InNvbWUgdXJsIn0.8QCJeN7GXddZduC4b-cOfSRSOpualiTQwNk-VmhD_gU";
    localStorage.setItem("token", token);
    window.open('/projectDevto/views/signin.html','_self');

    } else  
        window.alert("No es un dato valido, intentalo nuevamente");
}


let loginButton= document.getElementById("login-button");
loginButton.addEventListener("click", login);

