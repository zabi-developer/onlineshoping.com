function openForm() {
    document.getElementById('orderForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('orderForm').style.display = 'none';
}
function submitOrder(){
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    if (name && address) {
        alert('Order placed successfully!');
        closeForm();
    } else {
        alert('Enter details');
    }
}
//for login account
function openLoginForm() {
    document.getElementById("loginForm").style.display = "block";
}
function closeLoginForm() {
    document.getElementById("loginForm").style.display = "none";
}
function submitLogin() {
    alert("You fixxed wrong password!!!");
}



function submitLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    // Dummy user data (replace this with a real database in backend)
    let users = [
        { email: "user@example.com", password: "123456" },
        { email: "admin@example.com", password: "admin123" }
    ];

    // Check if user exists
    let userFound = users.find(user => user.email === email && user.password === password);

    if (userFound) {
        alert("Login Successful!");
        localStorage.setItem("loggedInUser", email);
        window.location.href = "dashboard.html"; // Redirect after login
    } else {
        alert("Invalid email or password.");
    }
}

function checkLogin() {
    let loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        alert("You are already logged in as " + loggedInUser);
        window.location.href = "dashboard.html";
    }
}

// Call this function on page load
window.onload = checkLogin;

