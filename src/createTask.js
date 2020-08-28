/** */

import{Task} from './taskFunction';
//import{modal} from './index.js';


let allTasks = [];
let personalTasks = [];
let workTasks = [];
//get the input from the modal
function createTask(){

    let taskName = document.getElementById('task').value;
    let dueDate = document.getElementById('duedate').value;
    let rawPriority = document.getElementById('priority').value;
    let type = document.getElementById('type').value;
    
    let priorityArr = rawPriority.split(" ");
    let priority = priorityArr[0];
    const newTask = Task(taskName, dueDate, priority, type);

    //updateArrays(newTask);
    //taskCreated = createTask(taskName, dueDate, priority, type);
    return newTask;
}


//add it to the specific array
function updateArrays(newTask){

    allTasks.push(newTask);

    if(newTask.type == 'Personal'){
        personalTasks.push(newTask);
    }

    else{
        workTasks.push(newTask);
    }
}

export{createTask, personalTasks, workTasks,allTasks};


