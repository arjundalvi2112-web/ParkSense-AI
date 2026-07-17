
// =======================
// BOOKING SYSTEM
// =======================


function bookParking(place,slot){


document.getElementById("bookingBox")
.style.display="flex";


document.getElementById("bookingDetails")
.innerHTML=

`
Parking Location:
<b>${place}</b>
<br><br>

Your Slot:
<b>${slot}</b>

<br><br>

Time:
<b>2 Hours</b>

<br><br>

Amount:
<b>₹80</b>

<br><br>

✅ Booking Successful!
`;

}




function closeBooking(){
  // SEARCH DEMO

function searchParking(){

let place =
document.getElementById("searchBox").value;

let result =
document.getElementById("searchResult");

if(place===""){

result.innerHTML="Enter a location.";

return;

}

result.innerHTML=

"✅ Best parking found near <b>"+place+
"</b><br><br>"+
"Available Slots: 18<br>"+
"AI Confidence: 94%<br>"+
"Walking Distance: 120m";

}



// DARK MODE

const darkBtn =
document.getElementById("darkModeBtn");

let dark=false;

darkBtn.onclick=function(){

dark=!dark;

document.body.style.transition=".5s";

if(dark){

document.body.style.background="#111";

document.body.style.color="white";

darkBtn.innerHTML="☀️";

}else{

document.body.style.background="#f4f8ff";

document.body.style.color="#222";

darkBtn.innerHTML="🌙";

}

}

document.getElementById("bookingBox")
.style.display="none";

}
