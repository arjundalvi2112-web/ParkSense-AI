
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

document.getElementById("bookingBox")
.style.display="none";

}
