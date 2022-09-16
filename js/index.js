import data from './projectData.js';

const menuBtn = document.getElementById('menu-button');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('nav-items');
const projectContainer = document.getElementById('portfolio');
const popup = document.getElementById('popup');
// const myWorksContainer = document.getElementById('my-works');

menuBtn.addEventListener('click', () => {
  menu.classList.add('menu-shown');
  closeBtn.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  closeBtn.style.display = 'none';
  menu.classList.remove('menu-shown');
});

menu.addEventListener('click', () => {
  closeBtn.style.display = 'none';
  menu.classList.remove('menu-shown');
});


data.forEach((data) => {
  const {
    title, description, lang
  } = data;

  const project = document.createElement('div');
  project.innerHTML += `
  <div class="card-project scale-effect">
    <h1 class="title">${title}</h1>
    <p class="description">
      ${description}
    </p>
    <ul class="tags">
      ${lang.map((lang) => `<li class="tag">${lang}</li>`).join('')}
    </ul>
    <button class="btn-sp" type="button"> See Projects</button>
    </div>`;
  projectContainer.appendChild(project);

  const projectBtn = project.querySelector('.btn-sp');
  projectBtn.addEventListener('click', () => {
    const popWindow = document.createElement('div');
    popup.style.display = 'flex';
    popWindow.innerHTML += `
  <div class="popup-container">
      <!-- popup header -->
      <div class="popup-header">
            <div class="popup-title">
                <h1 class="popup-title">${title}</h1>
                <button class="close-popup-btn" type="button"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <ul class="tags">
                ${lang.map((tech) => `<li class="li">${tech}</li>`).join('')}
            </ul>
      </div>
          
      <!-- popup body -->
      <div class="popup-body">
            <img src="${data.src}" alt="Snapshoot">
      </div>

      <!-- popup footer -->
      <div class="popup-footer">
          <p>${data.description}</p>
          <div>
              <a href="${data.live}" target="_blank" class="popup-button"><button  type="button">See Live<img  src="/img/see-live.png" alt="see live icon"></button></a>
              <a href="${data.source}" target="_blank" class="popup-button"><button  type="button">Source<img src="/img/Icon-GitHub.png" alt="github icon>"></button></a>
          </div>
      </div>
      </div>
</div> `;
    popup.appendChild(popWindow);
    const closePopupBtn = document.querySelector('.close-popup-btn');
    closePopupBtn.addEventListener('click', () => {
      popup.removeChild(popWindow);
      popup.style.display = 'none';
    });
  });
});


    // const myWorks = document.createElement('div');
// myWorks.innerHTML +=`    <div class="my-recent-works-title">
// <h1 class="my-recent-work-title-h1">${myRecentWorkTitle}</h1>
// <hr class="my-recent-work-title-hr">
// </div>
// <div class="my-recent-works">
// <img class="featured-image" src="${featuredImage}" alt="image">
// <div class="multi-post-stories">
//   <h2>${multiPostStoriesTitle}</h2>
//   <p>
//   ${multiPostStoriesDescription}
//   </p>
//   <ul>
//   ${lang2.map((tech) => `<li class="li">${tech}</li>`).join('')}
//   </ul>
//   <button  type="button">See Project</button>
// </div>
// </div>
// ` 
// myWorksContainer.appendChild(myWorks);