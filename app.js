const input= document.getElementById("input");
const items= document.querySelector(".items");
const button= document.querySelector("button");
const nameIn = document.querySelector(".name");

input.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        addElement();
    }
  }
);

button.addEventListener("click",function(event){
        addElement();
  }
);

function addElement(){
    if((input.value).trim().length===0){
        alert("enter something");
    }
    else{
        const newDiv= document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML=`<i class="fa-regular fa-square"></i><span class="text">${input.value.trim()}</span>
                    <i class="fa-solid fa-check"></i></i><span class="x">x</span>`;
        items.appendChild(newDiv);
        saveData();
    }
    input.value="";
}

items.addEventListener("click", function (event) {
    if (event.target.classList.contains("x")) { // Check if clicked element is the 'x'
        event.target.parentElement.remove(); // Remove the parent (the item)
    }
    // text|| fa-square opacity
    // else{
    //     event.target.parentElement.classList.toggle("checked");
    // }

    else if (event.target.classList.contains("text") || event.target.classList.contains("fa-square")) {
        event.target.closest(".item").classList.toggle("checked");
    }
    else if(event.target.classList.contains("item")){
        event.target.classList.toggle("checked");
    }
    saveData();
});


function saveData(){
    localStorage.setItem("toDoListData",items.innerHTML);
}

function saveName(){
    localStorage.setItem("Name",nameIn.value);
}

nameIn.addEventListener("keyup", function(event){
    saveName();
});

function showData(){
    items.innerHTML = localStorage.getItem("toDoListData");
    nameIn.value = localStorage.getItem("Name");
}

showData();