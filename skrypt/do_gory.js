let pscroll = document.getElementById("scroll-to-top");
let glowny = document.documentElement;

function do_gory(){
    glowny.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
pscroll.addEventListener("click", do_gory);
console.log("asdas")