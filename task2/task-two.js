let selectedCount = 0;
let  selectedArray;
let  value;
let  index;
var result;
let array = [];
const checkbox = document.getElementsByClassName('checkedbox')

for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("change", checkedOrNot);
}
  
function checkedOrNot() 
{
    var isChecked = this.checked;
    let value = this.value;
    if (isChecked) 
    { 
        selectedCount++;
        array.push(value);
        selectedArray = document.getElementById('selected_array').value= array;
        console.log(array)
    } else 
    {
        result = arrayRemove(array, value);
        console.log(result)
        selectedCount--;
        selectedArray = document.getElementById('selected_array').value= result;
    }
}


let elements = document.getElementsByClassName('next');

    for(let i = 0; i < elements.length; i++) {
        elements[i].onclick = function ()
        {
            switch(this.id){
                case 'pd_next':
                    value = document.getElementById('pd_form').value;
                    array = localStorage.getItem("selectedArray").split(',');;
                    index  = array.indexOf(value);
                    index = parseInt(index)+1;
                    result = array.slice(index);
                    nextPage(result);
                break;
                case 'ed_next':
                    value = document.getElementById('ed_form').value;
                    array = localStorage.getItem("selectedArray").split(',');
                    index  = array.indexOf(value)+1;
                    result = array.slice(index);
                    nextPage(result);
                break;
                case 'bd_next':
                    value = document.getElementById('bd_form').value;
                    array = localStorage.getItem("selectedArray").split(',');
                    index  = array.indexOf(value)+1;
                    result = array.slice(index);
                    alert(result);
                    nextPage(result);
                break;
                case 'sd_next':
                    value = document.getElementById('sd_form').value;
                    array = localStorage.getItem("selectedArray").split(',');
                    index  = array.indexOf(value)+1;
                    result = array.slice(index);
                    nextPage(result);
                break;
                default :
                selectedArray = document.getElementById('selected_array').value;
                selectedArray = selectedArray.split(',');
                nextPage(selectedArray);
                break;

            };
        }
    }
// document.getElementsByClassName('next').onclick = function() 
// { 
    
//     alert(3434)
//     // selectedArray = document.getElementById('selected_array').value;
//     // nextPage(selectedArray);
// };

function nextPage(selectedArray)
{
    localStorage.setItem("selectedArray",selectedArray);
    window.location.href = selectedArray[0]+".html";
}

function arrayRemove(arr, value) 
{
    return arr.filter(function(ele)
    {
        return ele != value; 
    });
}