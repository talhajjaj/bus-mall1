'use strict'

alert('welcome to our site');


let attempts=0;
let maxattempts =25;
let attemptsEl=document.getElementById('attempts');

let proudects=[];
let proudectImgsName=[];
let proudectclicks=[];
let proudectviews=[];
function ProudectImg(proudectName){
    this.proudectName=proudectName.split('.')[0];
    this.source ='images/'+ proudectName
    this.clicks=0;
    this.views=0;
    proudects.push(this);
    proudectImgsName.push(this.proudectName);
    
}

let proudectImgs=['bag.jpg','banana.jpg','bathroom.jpg', 'boots.jpg' ,
'breakfast.jpg' ,'bubblegum.jpg', 'chair.jpg','cthulhu.jpg','dog-duck.jpg',
'dragon.jpg','pen.jpg','petsweep.jpg', 'scissors.jpg', 'shark.jpg'
,'sweep.png','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg']

// function displayImg(){
    //     let image = Math.floor(Math.random() * (proudectImgs.length));
    //     document.canvas.src="images/"+proudectImgs[image];
    // }
    function settingItems(){
        let data =JSON.stringify(proudects);
        localStorage.setItem('proudect', data)
        let data2=JSON.stringify(attempts);
        localStorage.setItem("attempts", data2)
    } 
    // settingItems();
    
    function gettingItems(){
        let stringObj=localStorage.getItem('proudect');
        let normalObj=JSON.parse(stringObj);
        let stringObj2=localStorage.getItem('clicks');
        let normalObj2=JSON.parse(stringObj2);

        if (normalObj !== null) {
            proudects=normalObj
            
        }
        else if(normalObj2!==null){
            proudectclicks =normalObj2
        }
        generateImage();
        renderImg();
    }
    // function handleSubmit(event) {
        //     event.preventDefault();
        //     // console.log(event.target);
        
        
        for(let index=0; index< proudectImgs.length; index++)
        { new ProudectImg(proudectImgs[index]);
            // console.log(proudectImgs[index])
        }
        // console.log(proudects)
        function generateImage(){
            
            return(Math.floor(Math.random() *proudectImgs.length))
            
        }
        // generateImage();
        
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
    settingItems();
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
// settingItems();
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

// attemptsEl.addEventListener('submit', handleSubmit)
gettingItems();