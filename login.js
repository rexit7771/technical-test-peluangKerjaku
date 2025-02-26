let form = document.getElementById('form')
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorElement = document.getElementById("errorMessage");

    let errorMessage = "";
    if (username === "") {
        errorMessage += "Username is required "
    }

    if (password === "") {
        errorMessage += "Password is required"
    }

    if (errorMessage !== "") {
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

        if (!response.ok) throw
    } catch (error) {
        errorElement.textContent = "Something's wrong";
        return
    }
})