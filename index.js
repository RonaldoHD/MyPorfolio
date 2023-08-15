

const serviceID = 'service_uqdmiqg'
    const templateID = 'template_ajzmnf9'
    console.log("test")

function sendMail(){

    var params={
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value,
    };

 
   emailjs.send(serviceID,templateID,params)
    .then((res)=>{
        document.getElementById('name').value='';
        document.getElementById('email').value='';
        document.getElementById('message').value='';
        console.log(res);
        alert("your message was sent succesfully")
        console.log("sentttttttttttt")
    }
)
.catch((err)=>console.log(err));
}


function initMap() {
    var map = L.map('map').setView([33.899427, 35.607840], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([33.899427, 35.607840]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
  }

  window.onload = function() {
    initMap();
  };

