let sort_btn=document.getElementById('bubble_sort_btn');

async function bubbleSort(array) {
    let bars=document.getElementsByClassName("bar");
    for(let k=0;k<numOfBars;k++)
    {
        // if(k!=i && k!=min_indx)
        bars[k].style.backgroundColor="aqua";
    }
    for(let i=0;i<numOfBars;i++)
    {
        
        for(let j=0;j<numOfBars-i-1;j++)
        {
            await sleep(30);
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
                await sleep(30);
            }
            

        }
        await sleep(30);
        if(numOfBars-i-2>=0)
        bars[numOfBars-i-2].style.backgroundColor="aqua";
        bars[numOfBars-i-1].style.backgroundColor="darkblue";
    }
    for(let k=0;k<numOfBars;k++)
    {
        // if(k!=i && k!=min_indx)
        bars[k].style.backgroundColor="darkblue";
    }
    return array;
}

sort_btn.addEventListener("click", function() {
    let sorted_array=  bubbleSort(unsorted_array);
    console.log(sorted_array);
})