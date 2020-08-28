
import{Task} from './createTask';


let homeTab = document.getElementById('home');
let personalTab = document.getElementById('personal');
let workTab = document.getElementById('work');

function displayTask(task){

    //create a div element and it's sub elements which hold the tasks
    let count = 2; //start at 2 because we have two tasks for showcase purposes
    let taskContent = document.createElement('div');
    taskContent.setAttribute('id','taskContent');

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox');
    checkBox.setAttribute('name','checkbox');

    let spanTask = document.createElement('span');
    spanTask.style.borderBottom = '4px solid';

    let spanDate = document.createElement('span');

    let deleteBtn = document.createElement('span');
    deleteBtn.setAttribute('type','button');
    deleteBtn.classList.add('deleteIcon');
    deleteBtn.innerHTML = '<img src="images/deleteIcon.png">';

    //give the elements the appropriate values from the task object
    spanTask.innerHTML=task.getTask();
    spanDate.innerHTML = "Due: " + formateDate(task.getDate());
    let type = task.getType();
    let priority = task.getPriority();

    spanDate.style.cssText = "color: #0c548e; font-style: italic; font-size: .9rem;";

    //underline the task according to it's priority
    setPriority(priority, spanTask);

    //add everything to the taskContent div
    taskContent.appendChild(checkBox);
    taskContent.appendChild(spanTask);
    taskContent.appendChild(spanDate);
    taskContent.appendChild(deleteBtn);
    
    //add task to the appropriate tab
    addTaskToTab(taskContent, type);

   //all tasks get added to the home tab
   homeTab.appendChild(taskContent);
   count++;
}


function setPriority(priority, spanTask){
    if (priority == 'high'){
        spanTask.style.borderBottomColor = 'red';
    }
    else if(priority == 'medium'){
        spanTask.style.borderBottomColor = 'orange';
    }
    else{
        spanTask.style.borderBottomColor = 'green';
    }
}

function addTaskToTab(taskContent, type){

    //Each task will always be added to two tabs

    //make a clone for of the task in order to add it at 
    //two different places
    let cloneTask = taskContent.cloneNode(true);
    cloneTask.setAttribute('id','ctaskContent1');
    //add it to either personal or workTab
    if (type == 'personal'){
        personalTab.appendChild(cloneTask);
    }
    else{
        workTab.appendChild(cloneTask);
    }
}

function crossOut(event){
    let divId = event.target.parentNode.id;
    performCrossOut(divId);

    if (divId.charAt(0)!='c'){
        performCrossOut('c'+divId)
        event.target.checked=true;
    }
    else{
        let newDiv = divId.slice(1,divId.length);
        performCrossOut(newDiv);
        event.target.checked=true;
    }

    // let childElement = div.childNodes;
    // console.log(childElement[1]);
    // console.log("--------------");
    // console.log("-------------");
    // console.log(childElement[4]);
    
    // childElement[1].style.textDecoration = "line-through";
    // childElement[0].checked = true;

    

}

function performCrossOut(divId){
    let task = document.getElementById(divId);
    console.log(task);

    let childElements = task.childNodes;
    console.log(childElements[2]);
    console.log(childElements[3]);

   
    childElements[1].style.textDecoration = "line-through";
    childElements[2].style.textDecoration = "line-through";
}

function formateDate(date){
    let year = date.slice(0,4);
    let month = date.slice(5,7);
    let day = date.slice(8,10);
    return month +'/'+day+'/'+year;
}


export{displayTask, crossOut};