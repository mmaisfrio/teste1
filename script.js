/*=========================================
EURO.RAM
Magnata Digital
=========================================*/

/* LOADER */

window.addEventListener("load", () => {

    gsap.to("#loader",{
        opacity:0,
        duration:1,
        delay:.5
    });

    setTimeout(()=>{
        document.getElementById("loader").style.display="none";
    },1700);

});

/*=========================================
AOS
=========================================*/

AOS.init({

    duration:1200,
    once:false,
    easing:"ease-in-out"

});

/*=========================================
HEADER
=========================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});

/*=========================================
TEXTO DIGITANDO
=========================================*/

const textos=[

"Pintura Automotiva Premium",

"Funilaria Especializada",

"Martelinho de Ouro",

"Polimento Técnico",

"Ar Condicionado Automotivo"

];

let contador=0;
let letra=0;
let apagando=false;

const typing=document.getElementById("typing");

function escrever(){

    let texto=textos[contador];

    if(!apagando){

        typing.innerHTML=texto.substring(0,letra++);

        if(letra>texto.length){

            apagando=true;

            setTimeout(escrever,1800);

            return;

        }

    }else{

        typing.innerHTML=texto.substring(0,letra--);

        if(letra==0){

            apagando=false;

            contador++;

            if(contador>=textos.length){

                contador=0;

            }

        }

    }

    setTimeout(escrever,90);

}

escrever();

/*=========================================
CONTADORES
=========================================*/

const counters=document.querySelectorAll(".count");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const el=entry.target;

const target=+el.dataset.target;

let atual=0;

const tempo=setInterval(()=>{

atual+=Math.ceil(target/120);

if(atual>=target){

atual=target;

clearInterval(tempo);

}

el.innerHTML=atual+"+";

},18);

observer.unobserve(el);

}

});

});

counters.forEach(c=>observer.observe(c));

/*=========================================
GSAP HERO
=========================================*/

gsap.from(".hero-text",{

x:-120,

opacity:0,

duration:1.5,

ease:"power4.out"

});

gsap.from(".hero-image",{

x:120,

opacity:0,

duration:1.8,

ease:"power4.out"

});

gsap.from("header",{

y:-80,

opacity:0,

duration:1

});

/*=========================================
MENU MOBILE
=========================================*/

const menuBtn = document.querySelector(".menu-mobile");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuBtn.classList.toggle("active");
});

/*=========================================
PARALLAX 3D DA RAM
=========================================*/

const heroImage = document.querySelector(".hero-image img");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    heroImage.style.transform =
        `rotateY(${-x}deg)
         rotateX(${y}deg)
         translate(${x}px,${y}px)
         scale(1.03)`;

});

/*=========================================
BOTÕES MAGNÉTICOS
=========================================*/

document.querySelectorAll(".btn-primary,.btn-secondary,.btn-header")
.forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;
const y=e.clientY-rect.top-rect.height/2;

btn.style.transform=`translate(${x*.15}px,${y*.15}px)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0)";

});

});

/*=========================================
BARRA DE PROGRESSO
=========================================*/

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const altura=document.documentElement.scrollHeight-window.innerHeight;

const progresso=(window.scrollY/altura)*100;

progress.style.width=progresso+"%";

});

/*=========================================
PARTICLES JS
=========================================*/

particlesJS("particles-js",{

particles:{

number:{
value:80
},

color:{
value:["#d4af37","#0066ff"]
},

shape:{
type:"circle"
},

opacity:{
value:.5
},

size:{
value:3
},

move:{
enable:true,
speed:1.5
}

},

interactivity:{

events:{

onhover:{
enable:true,
mode:"grab"
}

},

modes:{

grab:{
distance:180
}

}

}

});

/*=========================================
REVELAÇÃO SUAVE
=========================================*/

gsap.utils.toArray("section").forEach(section=>{

gsap.from(section,{

scrollTrigger:{

trigger:section,

start:"top 80%"

},

opacity:0,

y:100,

duration:1

});

});

/*=========================================
COMPARADOR ANTES x DEPOIS
=========================================*/

const comparador = document.querySelector(".comparador");
const antes = document.querySelector(".comparador .antes");
const slider = document.querySelector(".slider");

if (comparador && antes && slider) {

    let ativo = false;

    slider.addEventListener("mousedown", () => ativo = true);
    window.addEventListener("mouseup", () => ativo = false);

    window.addEventListener("mousemove", (e) => {

        if (!ativo) return;

        const rect = comparador.getBoundingClientRect();

        let x = e.clientX - rect.left;

        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;

        antes.style.width = x + "px";
        slider.style.left = x + "px";

    });

}

/*=========================================
CURSOR GLOW
=========================================*/

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

/*=========================================
TILT 3D DOS CARDS
=========================================*/

document.querySelectorAll(".card,.item,.depoimento").forEach(card => {

    card.addEventListener("mousemove", e => {

        const r = card.getBoundingClientRect();

        const x = e.clientX - r.left;
        const y = e.clientY - r.top;

        const rx = -(y - r.height / 2) / 18;
        const ry = (x - r.width / 2) / 18;

        card.style.transform =
            `perspective(900px)
             rotateX(${rx}deg)
             rotateY(${ry}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";

    });

});

/*=========================================
EFEITO GLOW HERO
=========================================*/

gsap.to(".hero-image img", {

    y: -15,

    duration: 3,

    repeat: -1,

    yoyo: true,

    ease: "power1.inOut"

});

/*=========================================
FECHAR MENU MOBILE
=========================================*/

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

    });

});

/*=========================================
SCROLL TOP
=========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 120) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*=========================================
PRELOAD DAS IMAGENS
=========================================*/

window.addEventListener("load", () => {

    document.querySelectorAll("img").forEach(img => {

        const preload = new Image();
        preload.src = img.src;

    });

});

/*=========================================
FINAL
=========================================*/

console.log("EURO.RAM Premium Site carregado com sucesso.");