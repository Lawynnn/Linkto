this.window.onscroll = () => {
    let nav = document.getElementById("nav");
    if(!nav) return;

    if(window.pageYOffset >= nav.offsetTop) {
        nav.classList.add("nav-scrolled");
    }
    else {
        nav.classList.remove("nav-scrolled");
    }
}