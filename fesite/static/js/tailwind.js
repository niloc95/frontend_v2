document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Close mobile menu
document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.add('hidden');
});

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var menuIcon = document.getElementById('menu-toggle').querySelector('svg');

    if (window.scrollY > 0) {
        navbar.style.transition = 'background-color 0.9s ease-in-out'; // Add easing to the background color transition
        navbar.style.backgroundColor = '#ffffff'; // change background color to white
        navbar.querySelectorAll('.navlinks-type').forEach(function(link) {
            link.style.transition = 'color 0.9s ease-in-out'; // Add easing to the text color transition
            link.style.color = '#000000'; // change text color to black
        });
        menuIcon.style.transition = 'stroke 0.9s ease-in-out'; // Add easing to the menu icon transition
        menuIcon.style.stroke = '#000000'; // change menu icon color to black
    } else {
        navbar.style.transition = 'background-color 0.9s ease-in-out'; // Add easing to the background color transition
        navbar.style.backgroundColor = 'transparent'; // change background color to transparent
        navbar.querySelectorAll('.navlinks-type').forEach(function(link) {
            link.style.transition = 'color 0.9s ease-in-out'; // Add easing to the text color transition
            link.style.color = '#ffffff'; // change text color to white
        });
        menuIcon.style.transition = 'stroke 0.9s ease-in-out'; // Add easing to the menu icon transition
        menuIcon.style.stroke = '#ffffff'; // change menu icon color to white
    }
});
