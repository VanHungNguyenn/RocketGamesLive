$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('header').addClass('black');
    } else {
        $('header').removeClass('black');
    }
});

var ask = document.getElementsByClassName("ask");
var i;
for (i = 0; i < ask.length; i++) {
    ask[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var anwser = this.nextElementSibling;
        if (anwser.style.display === "block") {
            anwser.style.display = "none";
        } else {
            anwser.style.display = "block";
        }
    })
}