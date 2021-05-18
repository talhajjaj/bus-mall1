'use strict'

alert('welcome to our site');


let attempts= 0;
let maxattempts =25;
let attemptsEl=document.getElementById('attempts');

let proudects=[];

let proudectImgsName=[];
let proudectclicks=[];
let proudectviews=[];
function ProudectImg(proudectName){
    this.proudectName=proudectName.split('.')[0];
    this.source ='images'+ proudectName
    this.clicks=0;
    this.views=0;
    proudects.push(this);
    proudectImgsName.push(this.proudectName);
    
}

let proudectImgs=['bag.jpg','banana.jpg','bathroom.jpg', 'boots.jpg' ,
'breakfast.jpg' ,'bubblegum.jpg', 'chair.jpg','cthulhu.jpg','dog-duck.jpg',
'dragon.jpg','pen.jpg','pet-sweep.jpg', 'scissors.jpg', 'shark.jpg'
,'sweep.png','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg']

// function displayImg(){
//     let image = Math.floor(Math.random() * (proudectImgs.length));
//     document.canvas.src="images/"+proudectImgs[image];
// }


for(let index=0; index< proudectImgs.length; index++)
{ new ProudectImg(proudectImgs[index]);
// console.log(proudectImgs[index])
}
// console.log(proudects)
function generateImage(){

    return(Math.floor(Math.random() *proudectImgs.length))

}
// generateImage();
// let images = document.getElementById('images')
let leImgEl =document.getElementById('liftImg');
let leImgEli;
let midImgEl =document.getElementById('middleImg');
let midImgEli;

let riImgEl =document.getElementById('rightImg');
let riImgEli;

// let leImgEli;
// let midImgEli;
// let riImgEli;
let doublicateImg=[]
function renderImg(){
    leImgEli=generateImage();
    midImgEli=generateImage();
    riImgEli=generateImage();

 while(leImgEli===midImgEli||riImgEli===midImgEli|| leImgEli===riImgEli || doublicateImg.includes(leImgEli)|| doublicateImg.includes(riImgEli)|| doublicateImg.includes(midImgEli)) 
 {
     leImgEli= generateImage();
     midImgEli= generateImage();
     riImgEli=generateImage();


//      let Images = ['bag.jpg','banana.jpg','bathroom.jpg', 'boots.jpg' ,
//      'breakfast.jpg' ,'bubblegum.jpg', 'chair.jpg','cthulhu.jpg','dog-duck.jpg',
//      'dragon.jpg','pen.jpg','pet-sweep.jpg', 'scissors.jpg', 'shark.jpg'
//      ,'sweep.png','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg'];
//     //  const img= document.createElement(img);

//      let a =Images.includes('bag.jpg','banana.jpg','bathroom.jpg', 'boots.jpg' ,
//    'breakfast.jpg' ,'bubblegum.jpg',3)
//    let s= Images.includes( 'chair.jpg','cthulhu.jpg','dog-duck.jpg',
//    'dragon.jpg','pen.jpg','pet-sweep.jpg', 'scissors.jpg', 'shark.jpg'
//    ,'sweep.png',3)
   
 }
 doublicateImg=[]
 doublicateImg.push(leImgEli);
 doublicateImg.push(riImgEli);
 doublicateImg.push(midImgEli)
 

//  renderImg();
leImgEl.setAttribute('src',proudects[leImgEli].source);
proudects[leImgEli].views++;
midImgEl.setAttribute('src',proudects[midImgEli].source);
proudects[midImgEli].views++;
riImgEl.setAttribute('src',proudects[riImgEli].source);
proudects[riImgEli].views++;
attemptsEl. textContent =attempts;
// console.log(leImgEli);

// function displayImage () {
//     let Imgs = Math.floor(Math.random());
//     document.getElementById(images[Imgs]);

// let randomImg = Math.floor(Math.random() *proudectImgs.length);
// document.getElementById("images") = proudectImgs[randomImg];

// function displayImage() {
//     let Imgs = Math.floor(Math.random());
//     document.getElementById(images[Imgs]);
//   }

// 
// while(randomImg1 == randomImg2) {
//     randomImg2 = Math.floor(Math.random() * proudectImgs.length);
//     let proudectImgs=['bag.jpg','banana.jpg','bathroom.jpg', 'boots.jpg' ,
//     'breakfast.jpg' ,'bubblegum.jpg', 'chair.jpg','cthulhu.jpg','dog-duck.jpg',
//     'dragon.jpg','pen.jpg','pet-sweep.jpg', 'scissors.jpg', 'shark.jpg'
//     ,'sweep.png','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg']
// let Images = [].concat(images); 
// function getRandomImage() {
        
//         let randomImg1 = Math.floor(Math.random() * proudectImgs.length);
//         let randomImg2 = Math.floor(Math.random() * proudectImgs.length);
//         while(randomImg1 == randomImg2) {
//             randomImg2 = Math.floor(Math.random() * proudectImgs.length);
//         }
//         document.getElementById("firstPic").src = proudectImgs[randomImg1];
//         document.getElementById("secondPic").src = proudectImgs[randomImg2];

        
//        if(proudectImgs.length < 2){
//            proudectImgs = [].concat(images);
           
//        }
       
//     } getRandomImage();
// }

}

renderImg();

leImgEl.addEventListener('click',handelClicks);
midImgEl.addEventListener('click', handelClicks);
riImgEl.addEventListener('click', handelClicks);

function handelClicks(event)
{
    attempts++;
if (attempts<= maxattempts){
    if (event.target.id==='liftImg'){
        proudects[leImgEli].clicks++
    } else if (event.target.id==='middleImg'){
        proudects[midImgEli].clicks++
    } else if (event.target.id==='rightImg'){
        proudects[riImgEli].clicks++
    }

renderImg();
}
else{
let ulEl=document.getElementById('result');
let liEl;
for (let index=0 ;index <proudects.length;index++){
    liEl=document.createElement('li');
    ulEl.appendChild(liEl);

    liEl.textContent=` the name of the proudect is ${proudects[index].proudectName} view times  ${proudects[index].views}
    your clicks${proudects[index].clicks}`; 
    proudectclicks.push(proudects[index].clicks);
    proudectviews.push(proudects[index].views);}
    leImgEl.removeEventListener('click', handelClicks);
    midImgEl.removeEventListener('click', handelClicks);
    riImgEl.removeEventListener('click', handelClicks);
    chartRender();
}
}

function chartRender(){
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: proudectImgsName,
        datasets: [{
            label: '# of clicks',
            data: proudectclicks,
            backgroundColor: [
                
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                
                'rgba(153, 102, 255, 1)',
              
            ],
            borderWidth: 6
        }, {
        
        
                label: '# of views',
                data:proudectviews,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                   
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                
                ],
                borderWidth: 6
            }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}
