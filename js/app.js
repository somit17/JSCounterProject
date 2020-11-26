let num=0;
window.onload= function(){
    let value = document.getElementById("value");
    value.innerHTML = num;
}

function lowerCount(){
    showValue(num--);
}
function addCount(){
    showValue(num++);
}

function showValue(updatedValue){
    value.innerHTML = updatedValue;
}