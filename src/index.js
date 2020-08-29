alert("This project is not fully complete. I still have to work on it");

import {displayTask, crossOut} from './userInterface';
import{createTask} from './createTask';
const addBtn = document.querySelector('#addbtn');
const cancelBtn = document.querySelector('#cancelbtn');
const addTaskBtn = document.querySelector('#addTaskbtn');
const modal = document.querySelector('#modal');
let checkBox = document.querySelectorAll('input[name=checkbox]');

hideModal();

console.log(checkBox);

addBtn.addEventListener('click',showModal);
cancelBtn.addEventListener('click',hideModal);


addTaskBtn.addEventListener('click',()=>{
    const task = createTask();
    hideModal();
    clearModalValues();
    displayTask(task);
    updateCheckBox();
   // console.log(checkBox);
});


function updateCheckBox(){
    checkBox = document.querySelectorAll('input[name=checkbox]');
    checkBox.forEach((checkedTask) => {
        checkedTask.addEventListener('change', (event) => {crossOut(event)});
    });
}

function hideModal(){
    modal.style.display = 'none';
}
function showModal(){
    modal.style.display = 'block';
}

function clearModalValues(){
    document.getElementById('myForm').reset();

}
