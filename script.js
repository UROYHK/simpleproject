// Sign up function
function signup() {
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
  
    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Sign up successful! You can now login.");
      window.location.href = "login.html";
    } else {
      alert("Please fill out all fields.");
    }
  }
  
  // Login function
  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
  
    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "main.html";
    } else {
      alert("Invalid username or password.");
    }
  }
  
  // Check if user is logged in
  function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
      window.location.href = "login.html";
    }
  }
  
  // Logout function
  function logout() {
    localStorage.setItem("loggedIn", "false");
    window.location.href = "login.html";
  }
  
  // Load profile data
  function loadProfile() {
    const username = localStorage.getItem("username");
    if (username) {
      document.getElementById("profileUsername").textContent = username;
    }
  }
  