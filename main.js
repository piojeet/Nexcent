const menuBtn = document.querySelector(".menubtn");
const closeBtn = document.querySelector(".closebtn");
const navItems = document.querySelector(".navitems");

menuBtn.addEventListener("click", function() {
    navItems.classList.add("active");
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener("click", function() {
    navItems.classList.remove("active");
    document.body.style.overflow = 'auto'
});