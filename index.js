

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


function loadProjects() {
    const projectList = document.querySelector('.project-list');
    if (!projectList) return;

    const render = (projects) => {
        projectList.innerHTML = projects.map(project => `
            <li class="project-item active" data-filter-item data-category="web development" data-aos="flip-up">
                <a href="${project.link}">
                    <figure class="project-img skeleton">
                        <img src="${project.image}" alt="${project.alt || project.title}" loading="lazy" onload="this.parentElement.classList.remove('skeleton')">
                    </figure>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-category">${project.category}</p>
                </a>
            </li>
        `).join('');

        if (window.AOS) {
            window.AOS.refresh();
        }
    };

    if (typeof portfolioProjects !== 'undefined') {
        render(portfolioProjects);
    } else {
        fetch('./projects.json')
            .then(response => response.json())
            .then(projects => render(projects))
            .catch(error => console.error('Error loading projects:', error));
    }
}
function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

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
    loadProjects();
  };

