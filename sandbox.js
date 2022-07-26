let btn = document.querySelector('.btn');
let showImage = false;
let images = document.querySelectorAll('.pokemon');
let span = document.querySelector('span');
let wartortle = document.querySelector('#war');
let cloyster = document.querySelector('#cloy');
let gyarados = document.querySelector('#gyar')

const toggleImg = () => {showImage = !showImage};


btn.addEventListener('click', (e) => {
  e.preventDefault();

  images.forEach(image => image.classList.toggle('active'));

  toggleImg();
  showImage ? span.textContent = "Hide " : span.textContent = "Show ";

  if(showImage === false){
    
    document.querySelector('.wartortle').classList.remove('active');
    document.querySelector('.cloyster').classList.remove('active');
    document.querySelector('.gyarados').classList.remove('active');

    //change img back to default 
    wartortle.src = './images/154-1542005_wartortle-pokemon-character-vector-art-pokemon-wartortle - Copy.png'
    cloyster.src = './images/PqaIWGIVE0QUivxgddPT0rW7DcVr5QviwVD-CltqhDI (1).jpg'
    gyarados.src = './images/gyarados.jpg'
  }

})



wartortle.addEventListener('click', () => {
  
  //selected
  document.querySelector('.wartortle').classList.toggle('active');

  wartortle.src = './images/wartortle attack.jpg'


  //not selected
  document.querySelector('.cloyster').classList.remove('active');
  document.querySelector('.gyarados').classList.remove('active');

  //change img back to default 
  cloyster.src = './images/PqaIWGIVE0QUivxgddPT0rW7DcVr5QviwVD-CltqhDI (1).jpg'
  gyarados.src = './images/gyarados.jpg'

})

cloyster.addEventListener('click', () => {

  //selected
  document.querySelector('.cloyster').classList.toggle('active');

  cloyster.src = './images/cloyster attack.jpg'


  //not selected
  document.querySelector('.wartortle').classList.remove('active');
  document.querySelector('.gyarados').classList.remove('active');


  //change img back to default 
  wartortle.src = './images/154-1542005_wartortle-pokemon-character-vector-art-pokemon-wartortle - Copy.png'
  gyarados.src = './images/gyarados.jpg'


})

gyarados.addEventListener('click', () => {

  //selected
  document.querySelector('.gyarados').classList.toggle('active');

  gyarados.src = './images/gyarados attack.png'


  //not selected
  document.querySelector('.wartortle').classList.remove('active');
  document.querySelector('.cloyster').classList.remove('active');


  //change img back to default 
  wartortle.src = './images/154-1542005_wartortle-pokemon-character-vector-art-pokemon-wartortle - Copy.png'
  cloyster.src = './images/PqaIWGIVE0QUivxgddPT0rW7DcVr5QviwVD-CltqhDI (1).jpg'


})


