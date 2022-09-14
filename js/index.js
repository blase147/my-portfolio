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
    title, description, lang,
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
});

const popWindow = document.createElement('div');
popWindow.innerHTML += `
  <div class="popup-container">
  <!-- popup header -->
  <div class="popup-header">
    <div class="popup-title">
    <h1 class="popup-title">Multi Post Stories</h1>
    <button class="close-btn" type="button"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <ul class="tags">
      <li class="li">html</li>
      <li class="li">Bootstrap</li>
      <li class="li">Ruby on Rail</li>
    </ul>
  </div>
  <!-- popup body -->
  <div class="popup-body">
    <img src="/img/Snapshoot Portfolio.jpg" alt="Snapshoot">
  </div>
  <!-- popup footer -->
  <div class="popup-footer">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essent</p>
    <div>
    <div class="popup-button"><button  type="button">See Live<img  src="/img/see-live.png" alt="see live icon"></button></div>
    <div class="popup-button"><button  type="button">Source<img src="/img/Icon-GitHub.png" alt="github icon>"></button></div>
    </div>
  </div>
  </div>
</div> `;
popup.appendChild(popWindow);

const closeProjectBtn = popup.querySelector('.close-btn');
closeProjectBtn.addEventListener('click', () => {
  popup.firstElementChild.remove();
  popup.style.display = 'none';
  projectContainer.style.display = 'grid';
});
