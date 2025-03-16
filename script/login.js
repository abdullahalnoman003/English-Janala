
function LoginFunc() {
    const username = document.getElementById("name").value;
    const password = document.getElementById("pass").value;
    if (!username) {
        alert("Please Enter Your Name to Continue.");
    } else {
        if (password === "123456") {
            document.getElementById("login-page").classList.add("hidden");
            let elements = document.querySelectorAll('.defaultdiv');
            elements.forEach(element => {
                element.classList.remove('hidden');
            },
                alert(`Login Successfull. Welcome ${username}..........`)
            );

        } else {
            alert("Incorrect Login Code. Contact to Admin for Login Code!");
        }
    }

}
function LogoutFunc() {
    let elements = document.querySelectorAll('.defaultdiv');
    elements.forEach(element => {
        element.classList.add('hidden');
    });
    document.getElementById("login-page").classList.remove("hidden");
    alert("Logout Successfull!")
}