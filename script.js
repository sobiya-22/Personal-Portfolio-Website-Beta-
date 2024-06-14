var words = ["Frontend Designer", "Web Developer", "UI Designer", "Software Engineer"];
var wordIndex = 0;
var letterIndex = 0;
var currentWord = "";
var isAdding = true;

function updateText() {
    var textElement = document.getElementById("text-animation");
    textElement.querySelector("span").innerText = currentWord;
}

function animate() {
    if (isAdding) {
        if (letterIndex < words[wordIndex].length) {
            currentWord += words[wordIndex][letterIndex];
            letterIndex++;
        } else {
            isAdding = false;
            setTimeout(animate, 1000);
            return;
        }
    } else {
        if (letterIndex > 0) {
            currentWord = currentWord.slice(0, -1);
            letterIndex--;
        } else {
            isAdding = true;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(animate, 500);
            return;
        }
    }

    updateText();

    setTimeout(animate, isAdding ? 200 : 100);
}
animate();



let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*="' + id + '"]').classList.add("active")
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}