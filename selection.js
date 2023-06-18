let selection_sort_btn=document.getElementById('selection_sort_btn');

// let speed=50;
async function selection(array){
    let bars=document.getElementsByClassName("bar");
    butt_disable();

    for(let k=0;k<numOfBars;k++)
    {
        bars[k].style.backgroundColor="aqua";
    }

    for(let i=0; i<numOfBars-1; i++)
    {
        let min_indx=i;
        await sleep(speed);
        for(let k=i;k<numOfBars;k++)
        {
            bars[k].style.backgroundColor="aqua";
        }
        
        bars[min_indx].style.backgroundColor="green";

        for(let j=i+1; j<numOfBars; j++)
        {
            
            bars[j].style.backgroundColor="red";
            if(array[j]<array[min_indx])
            {
                if(min_indx!=i)
                bars[min_indx].style.backgroundColor="aqua";

                min_indx=j;
            }
            await sleep(speed);
            bars[j].style.backgroundColor="aqua";
            if(min_indx!=i)
            bars[min_indx].style.backgroundColor="yellow";

        }
        await sleep(speed);
        if(min_indx!=i)
        {
            let temp=array[min_indx];
            array[min_indx]=array[i];
            array[i]=temp;
            
            bars[i].style.height=array[i]*heightFactor +'px';

            bars[min_indx].style.height=array[min_indx]*heightFactor +'px';
        }
        await sleep(speed);
        bars[i].style.backgroundColor="darkblue";
    }
    bars[numOfBars-1].style.backgroundColor="darkblue";
    butt_enable();
    return array;
}

selection_sort_btn.addEventListener("click", function() {
    let sorted_array=  selection(unsorted_array);
    console.log(sorted_array);
})