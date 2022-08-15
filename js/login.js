// add eventlistener to login button
document.getElementById('btn-login').addEventListener('click', function(){
    // get email field and their value
    const emailField = document.getElementById('user-email');
    const passField = document.getElementById('user-password');
    const email = emailField.value;
    const password = passField.value;

    // check user data and then send the valid user to deposit page
    if (email === 'baap@bank.com' && password === 'secret') {
        // redirect to deposit page
        window.location.href = 'deposit.html';
    }
    else {
        alert("Please enter valid email and password..");
    }
});