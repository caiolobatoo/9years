// Header ao rolar

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 100){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
});

// Animação dos cards

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

cards.forEach(card => observer.observe(card));

// Botão topo

const topo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    topo.style.display =
    window.scrollY > 300 ? "block" : "none";

});

topo.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Contador

const inicio = new Date("2017-03-25");
const hoje = new Date();

const anos =
hoje.getFullYear() - inicio.getFullYear();

document.getElementById("contador").innerHTML =
`❤️ Juntos há ${anos} anos ❤️`;