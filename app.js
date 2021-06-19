
let input = document.getElementById('input'); 
let buttons = document.getElementById('button');
let list = document.getElementById('list');




function addToDo(toDo){

    const item = 
                `
                <li id="invitelist" >   
                <button class="fas fa-check-circle"></button>         
                <p class="inputs " > ${toDo}</p>
                <button class="fas fa-trash-alt delete"></button>       
                </li> 
                 `;

    const postion  = "beforeend";

    list.insertAdjacentHTML(postion, item);
 
 }

 document.addEventListener("keyup",function(even){
     if(event.keyCode == 13){
         const toDo = input.value;
     if(toDo){
        addToDo(toDo);
     }
     input.value = "";

    }

    buttons.addEventListener('click', function(){
        addToDo(input.value);

    })


    /// remove item 
    list.addEventListener('click', e =>{
        if(e.target.classList.contains('delete)')){
        e.target.addToDo.remove();
        }
    })


    //line-through

    // document.addEventListener('click', function(cross){
    //     if(cross == Check){
    //         addToDo(toDo.style.textDecoration = "line-through");

    //     }
    // })
     
});

