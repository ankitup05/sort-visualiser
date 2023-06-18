let bubble_sort_btn=document.getElementById('bubble_sort_btn');
// let speed=30;
async function bubbleSort(array) {
    let bars=document.getElementsByClassName("bar");
    butt_disable();
    for(let k=0;k<numOfBars;k++)
    {
        // if(k!=i && k!=min_indx)
        bars[k].style.backgroundColor="aqua";
    }
    for(let i=0;i<numOfBars;i++)
    {
        
        for(let j=0;j<numOfBars-i-1;j++)
        {
            await sleep(speed);
            for(let k=0;k<numOfBars-i-1;k++)
                {
                    if(k!=j && k!=j+1)
                    bars[k].style.backgroundColor="aqua";
                }
            bars[j].style.backgroundColor="lightgreen";

            bars[j+1].style.backgroundColor="lightgreen";

            if(array[j]>array[j+1])
            {
                
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;

                bars[j].style.height=array[j]*heightFactor +'px';
                // bars[j].style.backgroundColor="lightgreen";

                bars[j+1].style.height=array[j+1]*heightFactor +'px';
                // bars[j+1].style.backgroundColor="lightgreen";
                await sleep(speed);
            }
            

        }
        await sleep(speed);
        if(numOfBars-i-2>=0)
        bars[numOfBars-i-2].style.backgroundColor="aqua";
        bars[numOfBars-i-1].style.backgroundColor="darkblue";
    }
    for(let k=0;k<numOfBars;k++)
    {
        // if(k!=i && k!=min_indx)
        bars[k].style.backgroundColor="darkblue";
    }
    butt_enable();
    return array;
}

bubble_sort_btn.addEventListener("click", function() {
    let sorted_array=  bubbleSort(unsorted_array);
    console.log(sorted_array);
})