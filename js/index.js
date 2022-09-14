import data from './projectData.js';

const menuBtn = document.getElementById('menu-button');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('nav-items');
const projectContainer = document.getElementById('portfolio');
const popup = document.getElementById('popup');
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
    src, title, description, lang, 
  } = data;

  const project = document.createElement('div');
  project.innerHTML += `<div class="projectCard">
                           <div class="project-image">
                              <img src="${src}">
                          </div>
                              <h1>${title}</h1> 
                          <div class="description">
                              <p>${description}</p>
                          </div>
                              <ul class="tags">
                              ${lang.map((tech) => `<li class="li">${tech}</li>`).join('')}
                              </ul>
                          <div>
                              <button type = "button">See Project</button>
                          </div>`;
  projectContainer.appendChild(project);
  popup.style.display = 'none';
  const projectBtn = project.querySelector('.project-btn');
  projectBtn.addEventListener('click', () => {
    document.getElementById('popup').scrollIntoView();
    projectContainer.style.display = 'none';
    popup.style.display = 'flex';
    const y = popup.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth',
    });
    popup.innerHTML += `<div class="popup-project-container">
    <div class="popup-project-header">
    <div class="popup-project-image"><img src="${
  data.src
}" class="popup-img" alt="projectimage"></div>
    <button class="popup-close-button">
    <i class="fa-solid fa-xmark"></i>
    </button>
        <h2 class="popup-project-title">${data.title}</h2>
        <ul>
        ${lang.map((tech) => `<li>${tech}</li>`).join('')}
        </ul>
        </div>
        <div class="popup-project-description">${data.description}</div>
        <div class="popup-project-buttons">
        <a href="${
  data.live
}" target="_blank"><button class="popup-project-btn">
        See Live<i class="fa-solid fa-globe"></i>
        </button></a>
        <a href="${
  data.source
}" target="_blank"><button class="popup-project-btn">
        See Source<i class="fa-brands fa-github"></i>
        </button></a>
        </div>
        </div>`;
    const closeProjectBtn = popup.querySelector('.popup-close-button');
    closeProjectBtn.addEventListener('click', () => {
      popup.firstElementChild.remove();
      popup.style.display = 'none';
      projectContainer.style.display = 'grid';
    });
  });
});
