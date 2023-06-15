let selection_sort_btn=document.getElementById('selection_sort_btn');


async function selection(array){
    // const ele=document.querySelectorAll('.sort');
    let bars=document.getElementsByClassName("bar");

    for(let i=0; i<array.length-1; i++)
    {
        let min_indx=i;
        // ele[i].style.background='red';
        for(let j=i+1; j<array.length; j++)
        {

            if(array[j]<array[min_indx])
            {
                for(let k=0;k<array.length;k++)
                {
                    if(k!=i && k!=min_indx)
                    bars[k].style.backgroundColor="aqua";
                }
                min_indx=j;
            }
        }
        await sleep(100);
        if(min_indx!=i)
        {
            let temp=array[min_indx];
            array[min_indx]=array[i];
            array[i]=temp;
            
            bars[i].style.height=array[i]*heightFactor +'px';
            bars[i].style.backgroundColor="red";

            bars[min_indx].style.height=array[min_indx]*heightFactor +'px';
            bars[min_indx].style.backgroundColor="red";
        }
        await sleep(100);
        
    }
    for(let k=0;k<array.length;k++)
        {
            // if(k!=i && k!=min_indx)
            bars[k].style.backgroundColor="darkblue";
        }
    return array;
}

selection_sort_btn.addEventListener("click", function() {
    let sorted_array=  selection(unsorted_array);
    console.log(sorted_array);
})