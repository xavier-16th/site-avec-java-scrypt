// Toggles dark mode on the webpage
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function showContent(tabId) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Hide all content sections
    document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';
    });

    // Add active class to the clicked tab
    const activeTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
    if (activeTab) activeTab.classList.add('active');

    // Show the selected content
    const activeContent = document.getElementById(tabId);
    if (activeContent) activeContent.style.display = 'block';
}

// Show the content of the "all" tab by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showContent('all');
});

// Show the login modal
function openLoginForm() {
    document.getElementById("loginModal").style.display = "block";
}

// Close the login modal
function closeLoginForm() {
    document.getElementById("loginModal").style.display = "none";
}

// Close the login modal if clicked outside
window.onclick = function(event) {
    if (event.target == document.getElementById("loginModal")) {
        closeLoginForm();
    }
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the page from reloading

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username && password) {
        // Change login button text to "Logged In" and disable it
        var loginButton = document.getElementById("loginBtn");
        loginButton.textContent = "Logged In";
        loginButton.disabled = true; // Disable the login button
        
        // Close the login form modal after success
        closeLoginForm();
    } else {
        alert('Please enter both username and password!');
    }
});
