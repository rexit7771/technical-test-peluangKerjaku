let form = document.getElementById('form')
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorMessage = "";
    if (username === "") {
        errorMessage += "Username is required "
    }

    if (password === "") {
        errorMessage += "Password is required"
    }

    if (errorMessage !== "") {
        let errorElement = document.getElementById("errorMessage");
        errorElement.textContent = errorMessage;
        return
    }


    try {

        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

    } catch (error) {

    }
})