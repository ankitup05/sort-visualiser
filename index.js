let randomize_array=document.getElementById('randomize_array_btn');
// let sort_btn=document.getElementById('sort_btn');
let bars_container=document.getElementById('bars_container');
const size_slider=document.getElementById('a_size');
const array_size=document.getElementById('array_size');
const speed_slider=document.getElementById('a_speed');
const speed_show=document.getElementById('speed');
// initially
let minRange=10;
let maxRange=80;
let numOfBars=40;
let speed=30;
array_size.innerText=numOfBars;
speed_show.innerText=speed;
handleSizeSlider();
handleSpeedSlider();
let heightFactor=4;

let unsorted_array=[];
// createRandomArray();
function createRandomArray() {
    for( let i=0;i<numOfBars ;i++) {
        unsorted_array[i]=randomNum(minRange,maxRange);
    }
};

function handleSizeSlider() {
    size_slider.value = numOfBars;

}
function handleSpeedSlider() {
    speed_slider.value=speed;
speed_show.innerText=speed;

}

size_slider.addEventListener("input", (e) => {
    numOfBars = e.target.value;
    array_size.innerText=numOfBars;
    console.log(numOfBars);
    createRandomArray();
    renderBars(unsorted_array);
    handleSizeSlider();
})
speed_slider.addEventListener("input", (e)=> {
    speed=e.target.value;
    handleSpeedSlider();
})

function randomNum(min,max){
    return Math.floor(Math.random() * (max-min+1))+min;
};



document.addEventListener("DOMContentLoaded",function() {
    createRandomArray();
    renderBars(unsorted_array);
});

function renderBars(array) {
    bars_container.innerHTML="";
    for(let i=0;i<numOfBars;i++)
    {
        let bar=document.createElement('div');
        bar.classList.add('bar');
        bar.style.height=array[i]* heightFactor + 'px';
        bars_container.appendChild(bar); 
    }
}

randomize_array.addEventListener("click",function() {
    createRandomArray();
    console.log(unsorted_array);
    bars_container.innerHTML="";
    renderBars(unsorted_array);
});

function sleep(ms)
{
    return new Promise((resolve) => setTimeout(resolve,ms));
};

function butt_disable(){
    size_slider.disabled=true;
    bubble_sort_btn.disabled=true;
    selection_sort_btn.disabled=true;
    randomize_array.disabled=true;

}
function butt_enable(){
    size_slider.disabled=false;
    bubble_sort_btn.disabled=false;
    selection_sort_btn.disabled=false;
    randomize_array.disabled=false;
    
}