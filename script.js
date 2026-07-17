/* =========================
   AI PARKING FINDER
   JAVASCRIPT
   PART 3
========================= */


// Smooth scrolling for navigation

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        let target =
        document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});





// Button Animation

const button =
document.querySelector(".hero-text button");


button.addEventListener("click",()=>{


    alert(
    "🚗 Searching for the nearest available parking space..."
    );


});





// Feature cards reveal animation


const cards =
document.querySelectorAll(".feature-card");


const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


});



cards.forEach(card=>{


card.style.opacity="0";

card.style.transform=
"translateY(50px)";


card.style.transition=
"0.8s";


observer.observe(card);


});





// AI Loading Simulation


function startAI(){

console.log(
"AI Parking System Activated..."
);


let messages=[

"Scanning nearby parking areas...",

"Analyzing traffic conditions...",

"Predicting parking availability...",

"Best parking location found!"

];


let i=0;


let interval=setInterval(()=>{


console.log(messages[i]);


i++;


if(i>=messages.length){

clearInterval(interval);

}


},1000);


}


startAI();





// Dynamic year in footer (for future)

let year =
new Date().getFullYear();


console.log(
"AI Parking Finder © "+year
);





// Mouse movement glow effect


document.addEventListener(
"mousemove",
(e)=>{


let x=e.clientX;

let y=e.clientY;


document.body.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(0,102,255,0.08),
#f4f8ff 300px)`;


});
