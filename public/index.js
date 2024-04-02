const inputField = document.getElementById('input-field');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
let taskCounter = 0;

addBtn.addEventListener('click', function(){
    let inputValue = inputField.value;
    inputField.value = '';
    if(inputValue){
        addToDoList(inputValue);
    }
})

function addToDoList(itemValue){
    let newTask = document.createElement('li');
    newTask.textContent = itemValue;
    newTask.classList.add("tasks");
    newTask.tabIndex = 0;
    taskList.appendChild(newTask);
    taskCounter++;

    newTask.addEventListener('click', function(){
        if (window.confirm("Do you want to delete this task?")){
           newTask.remove();
        }
    })
 
}