let sort_btn=document.getElementById('bubble_sort_btn');

async function bubbleSort(array) {
    let bars=document.getElementsByClassName("bar");

    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<array.length-i-1;j++)
        {
            if(array[j]>array[j+1])
            {
                for(let k=0;k<array.length;k++)
                {
                    if(k!=j && k!=j+1)
                    bars[k].style.backgroundColor="aqua";
                }
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;

                bars[j].style.height=array[j]*heightFactor +'px';
                bars[j].style.backgroundColor="lightgreen";
                // bars[j].innerText=array[j];

                bars[j+1].style.height=array[j+1]*heightFactor +'px';
                bars[j+1].style.backgroundColor="lightgreen";
                // bars[j+1].innerText=array[j+1];
                await sleep(30);
            }
        }
        await sleep(30);
        for(let k=0;k<array.length;k++)
        {
            // if(k!=i && k!=min_indx)
            bars[k].style.backgroundColor="darkblue";
        }
    }
    return array;
}

sort_btn.addEventListener("click", function() {
    let sorted_array=  bubbleSort(unsorted_array);
    console.log(sorted_array);
})