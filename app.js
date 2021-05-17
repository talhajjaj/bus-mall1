'use strict'
alert('welcome to our site');

let attempts =0;
let maxattempts =25;
let attemptsEl=document.getElementById('attempts');

let proudects=[];
function ProudectImg(proudectName){
    this.proudectName=proudectName.split('.')[0];
    this.source ='images/'+ proudectName
    this.clicks=0;
    this.views=0;
    proudects.push(this);
}

let proudectImgs=['bag.jpg','banana.jpg','bathroom.jpg', 'boots.jpg' ,
'breakfast.jpg' ,'bubblegum.jpg', 'chair.jpg','cthulhu.jpg','dog-duck.jpg',
'dragon.jpg','pen.jpg','pet-sweep.png', 'scissors.jpg', 'shark.jpg'
,'sweep.jpg','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg']

for(let index=0; index< proudectImgs.length; index++)
{ new ProudectImg(proudectImgs[index]);
console.log(proudectImgs[index])
}
console.log(proudects)
function generateImage(){

    return(Math.floor(Math.random() *proudectImgs.length))

}
generateImage();

let leImgEl =document.getElementById('liftImg');
let leImgEli;
let midImgEl =document.getElementById('middleImg');
let midImgEli;

let riImgEl =document.getElementById('rightImg');
let riImgEli;

// let leImgEli;
// let midImgEli;
// let riImgEli;

function renderImg(){
    leImgEli=generateImage();
    midImgEli=generateImage();
    riImgEli=generateImage();

 while(leImgEli===midImgEli===riImgEli){
     leImgEli= generateImage();
     midImgEli= generateImage();

 }
 renderImg();
leImgEl.setAttribute('src',proudectImgs[leImgEli].source);
proudectImgs[leImgEli].views++;
leImgEl.setAttribute('src',proudectImgs[midImgEli].source);
proudectImgs[midImgEli].views++;
leImgEl.setAttribute('src',proudectImgs[riImgEli].source);
proudectImgs[riImgEli].views++;
attemptsEl. textContent =attempts;
// console.log(leImgEli);
}

// renderImg();

leImgEl.addEventListener('click',handelClicks);
riImgEl.addEventListener('click', handelClicks);

function handelClicks(event)
{
    attempts++;
if (attempts<= maxattempts){
    if (event.target.id==='Left'){
        proudects[leImgEli].clicks++
    } else if (event.target.id==='mid'){
        proudects[midImgEli].clicks++
    } else if (event.target.id==='right'){
        proudects[riImgEli].clicks++
    }

renderImg();
}
else{
let ulEl=document.getElementById('clicks and views');
let liEl;
for (let index=0 ;index <proudects.length;index++){
     liEl=document.createElement('li');
     ulEl.appendChild(liEl);
    liEl.textContent=`${proudects[index].proudectsName} ${proudects[index].views}
    ${proudects[index].clicks}`} 
    leImgEl.removeEventListener('click', handelClicks);
    riImgEl.removeEventListener('click', handelClicks);
}
}