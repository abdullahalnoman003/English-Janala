
function LoginFunc() {
    const username = document.getElementById("name").value;
    const password = document.getElementById("pass").value;

    if (!username) {
        Swal.fire({
            title: "Oops!",
            text: "Please enter your name to continue.",
            icon: "warning",
            confirmButtonText: "OK",
        });
    } else {
        if (password === "123456") {
            document.getElementById("login-page").classList.add("hidden");
            let elements = document.querySelectorAll(".defaultdiv");
            elements.forEach((element) => {
                element.classList.remove("hidden");
            });

            Swal.fire({
                title: "Login Successful!",
                text: `Welcome, ${username}! 🎉`,
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
            });
        } else {
            Swal.fire({
                title: "Incorrect Login Code!",
                text: "Contact the admin for the correct login code.",
                icon: "error",
                confirmButtonText: "Try Again",
            });
        }
    }
}

function LogoutFunc() {
    let elements = document.querySelectorAll(".defaultdiv");
    elements.forEach((element) => {
        element.classList.add("hidden");
    });
    document.getElementById("login-page").classList.remove("hidden");

    Swal.fire({
        title: "Logged Out!",
        text: "You've successfully logged out.",
        icon: "info",
        timer: 1500,
        showConfirmButton: false,
    });
}
