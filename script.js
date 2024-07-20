document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-btn').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('login-modal').style.display = 'block';
    });

    document.getElementById('register-btn').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('register-modal').style.display = 'block';
    });

    document.querySelectorAll('.close').forEach(function(element) {
        element.addEventListener('click', function() {
            element.parentElement.parentElement.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});
