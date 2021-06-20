
let input = document.getElementById('input'); 
let buttons = document.getElementById('button');
let list = document.getElementById('list');


// add button function 

buttons.addEventListener('click', function(){

 
    // 
    const todoText = document.createTextNode(input.value);
    const li = document.createElement('li');
    li.appendChild(todoText);
    //
    const checkButton = document.createElement("button");
    checkButton.className = "far fa-check-square check";
    li.appendChild(checkButton);
    const deletButton = document.createElement("button");
    deletButton.className = "fas fa-trash-alt delete";
    li.appendChild(deletButton);
   
    list.appendChild(li);
    input.value = "";


})

  // prevent text from double click
document.addEventListener('mousedown', function(event){
    if (event.detail > 1){
        event.preventDefault();
    }
}, false);

// delete 

list.addEventListener('click', function (e) {
    if(e.target.classList.contains("delete")) {  
    e.target.parentElement.remove(); 
}
})


// line- throught 
list.addEventListener('click', function (e) {
    if(e.target.classList.contains("check")){
        e.target.parentElement.style.textDecoration = "line-through";
    }
})