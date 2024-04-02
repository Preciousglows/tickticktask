const inputField = document.getElementById('input-field');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', function(){
    let inputValue = inputField.value;
    inputField.value = '';
    inputField.focus();
    if(inputValue){
        addToDoList(inputValue);
    }
})

function addToDoList(itemValue){
    let newTask = document.createElement('li');
    newTask.textContent = itemValue;
    newTask.classList.add("tasks");
    let deleteIcon = document.createElement('span');
    deleteIcon.textContent = '🗑';
    taskList.append(newTask);
    newTask.append(deleteIcon);

    deleteIcon.addEventListener('click', function(){
        let modals = document.createElement('div');
        modals.classList.add("modal-style");
        modals.innerHTML = `<span id="confirm-delete">✔</span>
                            <span id="cancel-delete">✖</span>`;
        console.log(modals)
        newTask.append(modals);
        // confirm("Do you want to delete this task?");
        // newTask.remove();

        document.getElementById('cancel-delete').addEventListener('click', function(){
            modals.remove();
        })
        document.getElementById('confirm-delete').addEventListener('click', function(){
            newTask.remove();
        })
    })
 
}