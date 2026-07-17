
// LOGIN POPUP

const loginBtn = document.querySelector(".login-btn");
const popup = document.querySelector(".login-popup");
const closeBtn = document.querySelector(".close");


loginBtn.addEventListener("click",()=>{

popup.style.display="flex";

});



closeBtn.addEventListener("click",()=>{

popup.style.display="none";

});





window.addEventListener("click",(e)=>{

if(e.target===popup){

popup.style.display="none";

}

});








// BACK TO TOP BUTTON


const topBtn=document.querySelector(".top-btn");


topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});







// NAVBAR SCROLL EFFECT


window.addEventListener("scroll",()=>{


const navbar=document.querySelector(".navbar");


if(window.scrollY>50){

navbar.style.background="rgba(0,0,0,0.9)";

}

else{

navbar.style.background="rgba(5,8,22,0.75)";

}


});








// PARKING SEARCH


const searchButton=document.querySelector(".search-input button");

const searchInput=document.querySelector(".search-input input");



searchButton.addEventListener("click",()=>{


if(searchInput.value===""){


alert("Please enter your location");


}

else{


alert(

"🤖 AI found parking spots near "+searchInput.value

);


}



});








// AI CHATBOT


const chatInput=document.querySelector(".chat-input input");

const chatButton=document.querySelector(".chat-input button");

const chatBody=document.querySelector(".chat-body");



chatButton.addEventListener("click",()=>{


let message=chatInput.value;


if(message===""){

return;

}



let userMessage=document.createElement("p");

userMessage.innerHTML="You: "+message;


chatBody.appendChild(userMessage);





setTimeout(()=>{


let botMessage=document.createElement("p");


botMessage.innerHTML=

"AI: I found the best parking options for you 🚗";


chatBody.appendChild(botMessage);



},800);



chatInput.value="";


});









// FEATURE CARD ANIMATION


const cards=document.querySelectorAll(

".feature-card,.parking-card,.service-box,.review-card"

);



const observer=new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}



});


});




cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="0.8s";


observer.observe(card);


});









// BOOK BUTTONS


const bookButtons=document.querySelectorAll(

".parking-card button"

);



bookButtons.forEach(button=>{


button.addEventListener("click",()=>{


alert(

"✅ Parking slot reserved successfully!"

);


});


});









// LIVE AI STATUS ANIMATION


const aiCircle=document.querySelector(".ai-circle h3");


let status=[

"AI",

"SCAN",

"FIND",

"GO"

];


let index=0;



setInterval(()=>{


index++;


if(index>=status.length){

index=0;

}



aiCircle.innerHTML=status[index];


},2000);








// APP DOWNLOAD BUTTON


const downloadBtn=document.querySelector(".download button");


downloadBtn.addEventListener("click",()=>{


alert(

"📱 AI Parking Finder App download will start soon!"

);


});







console.log(

"AI Parking Finder Website Loaded Successfully 🚗🤖"

);
