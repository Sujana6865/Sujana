function toggleMenu(){
    let icon = document.querySelector('.hamburger-icon');
    let menu = document.querySelector('.menu-links');
    icon.classList.toggle("open");
    menu.classList.toggle("open");

}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

