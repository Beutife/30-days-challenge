document.getElementById('taskForm').addEventListener('submit', function(event){
    event.preventDefault();
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
   
    addTask(taskName, dueDate);  
})

function addTask(taskName, dueDate){

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('div');
    taskItem.className='task';
    taskItem.innerHTML =`<strong>${taskName}</strong> - Due: ${dueDate}
    <button class ='editBtn'>Edit</button>
    <button class='delBtn'>Delete</button>`;

    taskList.appendChild(taskItem);
}

function addTask(taskName, dueDate){
    const task =getTaskFromLocalStorage();

    const newTask = {id:Date.now(), name:taskName, dueDate: dueDate};
    task.push(newTask);

    saveToLocalStorage(task);
    renderTask(newTask);
}

function addTask(taskName, dueDate) {
    const tasks = getTasksFromLocalStorage();
    
    const newTask = { id: Date.now(), name: taskName, dueDate: dueDate };
    tasks.push(newTask);
    
    saveTasksToLocalStorage(tasks);
    renderTask(newTask);
  }
  

function saveToLocalStorage(taskArray){
    localStorage.setItem('task', JSON.stringify(taskArray));
}

function getTaskFromLocalStorage(){
    const storedTask = localStorage.getItem('task');
    return storedTask ? JSON.parse(storedTask) : [];
}

  function renderTask(task) {
    const taskList = document.getElementById('taskList');
    
    const taskItem = document.createElement('div');
    taskItem.innerHTML = `
      <strong>${task.name}</strong> - Due: ${task.dueDate}
      <button class="editBtn">Edit</button>
      <button class="deleteBtn">Delete</button>
    `;
    taskList.appendChild(taskItem);
  }

  //retrieve task from local storage
  window.addEventListener('DOMContentLoaded', function () {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => renderTask(task)); // Render each task to the DOM
  });

  document.getElementById('taskList').addEventListener('click', function (event) {
    if (event.target.classList.contains('editBtn')) {
      const taskItem = event.target.parentElement;
      const taskName = taskItem.querySelector('strong').textContent;
      
      // Prefill the form with task data
      document.getElementById('taskName').value = taskName;
      // Add logic to save the updated task to localStorage after editing
    }
  });

  document.getElementById('taskList').addEventListener('click', function (event) {
    if (event.target.classList.contains('deleteBtn')) {
      const taskItem = event.target.parentElement;
      taskItem.remove(); // Remove from DOM
  
      // Remove the corresponding task from localStorage
      const taskId = taskItem.getAttribute('data-id');
      let tasks = getTasksFromLocalStorage();
      tasks = tasks.filter(task => task.id !== parseInt(taskId));
      saveTasksToLocalStorage(tasks);
    }
  });
  
    