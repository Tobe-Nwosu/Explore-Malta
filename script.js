window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navbar").style.backgroundColor = "#000";
    } else {
        document.querySelector(".navbar").style.backgroundColor = "transparent";
    }
}
