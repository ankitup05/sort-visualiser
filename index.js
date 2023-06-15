let randomize_array=document.getElementById('randomize_array_btn');
// let sort_btn=document.getElementById('sort_btn');
let bars_container=document.getElementById('bars_container');
let minRange=1;
let maxRange=40;
let numOfBars=40;
let heightFactor=6;

let unsorted_array=new Array(numOfBars);

function randomNum(min,max){
    return Math.floor(Math.random() * (max-min+1))+min;
};

function createRandomArray() {
    for( let i=0;i<numOfBars ;i++) {
        unsorted_array[i]=randomNum(minRange,maxRange);
    }
};

document.addEventListener("DOMContentLoaded",function() {
    createRandomArray();
    renderBars(unsorted_array);
});

function renderBars(array) {
    for(let i=0;i<array.length;i++)
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
}

