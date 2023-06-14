const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
let editTodo=null;


//function to add to do
const addTodo =()=>{
const inputText = inputBox.value.trim();
if(inputText.length<= 0)
{
    alert("Please enter something to Add");
    return  false;
}
if(addBtn.value=="Edit"){
    editTodo.target.previousElementSibling.innerHTML=inputText;
    addBtn.value="Add";
    inputBox.value="";
}
else{
//creating a tag
const li =document.createElement("li");
const p  =document.createElement("p");
p.innerHTML = inputText;
li.appendChild(p);

//creating edit Button
const editBtn=document.createElement("button");
editBtn.innerText="Edit";
editBtn.classList.add("btn","editBtn");
li.appendChild(editBtn);

//creating delete Btn
const deleteBtn=document.createElement("button");
deleteBtn.innerText="Delete";
deleteBtn.classList.add("btn","deleteBtn");
li.appendChild(deleteBtn);
todoList.appendChild(li);
inputBox.value="";
}
}
//function to update todo
const updateToDo=(e) => {
    if(e.target.innerHTML=="Delete")
    {
        todoList.removeChild(e.target.parentElement);
    }    
   if(e.target.innerHTML=="Edit")
   {
    inputBox.value=e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value="Edit"; 
    editTodo=e; 
   } 


}
addBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',updateToDo);