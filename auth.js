document.addEventListener('DOMContentLoaded', () => {

    const loginBox = document.querySelector('.login-form');
    const signupBox = document.querySelector('.signup-form');
    const loginInfo = document.getElementById('login-info');
    const signupInfo = document.getElementById('signup-info');

    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    /* ===============================
       فتح Signup لو جاي من Register
    =============================== */
    if (window.location.hash === "#signup") {
        showSignup();
    }

    /* ===============================
       التنقل بين Login و Signup
    =============================== */
    document.getElementById('go-to-signup').addEventListener('click', (e) => {
        e.preventDefault();
        showSignup();
    });

    document.getElementById('go-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        showLogin();
    });

    function showSignup() {
        loginBox.classList.add('d-none');
        signupBox.classList.remove('d-none');
        loginInfo.classList.add('d-none');
        signupInfo.classList.remove('d-none');
    }

    function showLogin() {
        signupBox.classList.add('d-none');
        loginBox.classList.remove('d-none');
        signupInfo.classList.add('d-none');
        loginInfo.classList.remove('d-none');
    }

    /* ===============================
       Sign Up (إنشاء حساب)
    =============================== */
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;

        if (password.length < 8) {
            alert("Password must be at least 8 characters long!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const exists = users.some(user => user.email === email);
        if (exists) {
            alert("User already exists!");
            return;
        }

        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));

        // تسجيل دخول تلقائي
        localStorage.setItem("currentUser", email);

        alert("Account created successfully!");
        window.location.href = "index.html";
    });

    /* ===============================
       Login (تسجيل دخول)
    =============================== */
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            u => u.email === email && u.password === password
        );

        if (!user) {
            alert("Invalid email or password!");
            return;
        }

        localStorage.setItem("currentUser", email);
        alert("Welcome back!");
        window.location.href = "index.html";
    });

});
