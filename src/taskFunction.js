/**This module simply contains Task factory function and exports it
 * Author:Ruchik Chaudhari
 * Date: 8/17/2020
*/

/**
 * Task simply creates task objects from task name, 
 * due date, type of task (personal or work) and 
 * priority of the given task.
 */


function Task(task, date, priority, type) {
    // Private variables 
    let _task = task;
    let _date = date;
    let _priority = priority;
    let _type = type;
  
    
    return {

      // Getter Methods
      getTask() {
        return _task;
      },
      getDate() {
        return _date;
      },
      getPriority() {
        return _priority;
      },
      getType() {
        return _type;
      }
    };
  }

  function hello(){
    alert('hello from task');
  }

export {Task,hello};