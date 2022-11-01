const sect = document.querySelector('.sect');
const changetheme = document.querySelector('.change-theme');

changetheme.onclick = function() {
    sect.classList.toggle('dark');
}