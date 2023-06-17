let randomize_array=document.getElementById('randomize_array_btn');
// let sort_btn=document.getElementById('sort_btn');
let bars_container=document.getElementById('bars_container');
const inputSlider=document.getElementById('a_size');
const array_size=document.getElementById('array_size');
// initially
let minRange=10;
let maxRange=80;
let numOfBars=40;
array_size.innerText=numOfBars;

handleSlider();

let heightFactor=4;

let unsorted_array=[];
// createRandomArray();
function createRandomArray() {
    for( let i=0;i<numOfBars ;i++) {
        unsorted_array[i]=randomNum(minRange,maxRange);
    }
};

function handleSlider() {
    inputSlider.value = numOfBars;
    // createRandomArray();
    // function createRandomArray() {
    //     for( let i=0;i<numOfBars ;i++) {
    //         unsorted_array[i]=randomNum(minRange,maxRange);
    //     }
    // };
    // renderBars(unsorted_array);

}

inputSlider.addEventListener("input", (e) => {
    numOfBars = e.target.value;
    array_size.innerText=numOfBars;
    console.log(numOfBars);
    createRandomArray();
    renderBars(unsorted_array);
    handleSlider();
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
}

