
// AI Parking Finder Pro
// Interactive AI Effects


// AI Assistant

const askButton = document.getElementById("ask-ai");

const message = document.getElementById("ai-message");


const aiReplies = [

"🤖 I found 12 parking spaces near you.",

"🚗 Best option: City Mall Parking with 92% availability.",

"📍 Route optimized. Estimated arrival: 5 minutes.",

"⚡ AI prediction completed successfully."

];


let replyIndex = 0;


if(askButton){

askButton.addEventListener("click",()=>{


message.innerHTML = aiReplies[replyIndex];


replyIndex++;


if(replyIndex >= aiReplies.length){

replyIndex = 0;

}


});

}




// Smooth button interaction


const buttons = document.querySelectorAll("button");


buttons.forEach(button=>{


button.addEventListener("click",()=>{


button.style.transform="scale(0.95)";


setTimeout(()=>{

button.style.transform="scale(1)";

},150);


});


});





// Scroll reveal animation


const animatedElements = document.querySelectorAll(

".panel, .feature-card, .stat-card, .review-card"

);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


});



animatedElements.forEach(element=>{


element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="1s";


observer.observe(element);


});





// Fake live parking update


const availability = document.querySelector(".progress span");


let percent = 87;


setInterval(()=>{


percent += Math.floor(Math.random()*3)-1;


if(percent > 98){

percent = 98;

}


if(percent < 70){

percent = 70;

}


if(availability){

availability.style.width = percent+"%";

}


},3000);





// AI online animation


const status = document.querySelector(".ai-status p");


let dots = 0;


setInterval(()=>{


dots++;


if(dots > 3){

dots = 0;

}


if(status){

status.innerHTML =

"🤖 AI System Online" + ".".repeat(dots);

}


},700);
