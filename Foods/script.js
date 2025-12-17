document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change');
    });
});

// Close menu when a navbar link is clicked
document.querySelectorAll('.navbar-link').forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.target').forEach((item) => {
            item.classList.remove('change');
        });
    });
});

const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;
setInterval(() => {
    i++;
    const icon = document.querySelector('.section-1-icons i.change');
    icon.classList.remove('change');
    if (i > icons.length) {
        icons[0].classList.add('change');
        i = 1;
    } else {
        icon.nextElementSibling.classList.add('change');
    }
}, 4000);