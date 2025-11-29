const taskInput = document.getElementById('taskInput');
const dropdown = document.getElementById('dropdownlist');
const addBtn = document.getElementById('AddTask');
const editBtn = document.getElementById('Editing');
const deleteBtn = document.getElementById('Deleting');
const sortSelect = document.getElementById('Sorting');
const taskList = document.getElementById('taskList');

let tasks = [];
let selectedIndex = null;

// Add Task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const priority = dropdown.value;

    if(taskText === ""){
        alert("Enter a task");
        return;
    }

    tasks.push({text: taskText, priority: priority});
    taskInput.value = "";
    dropdown.value = "High";

    renderTasks(tasks);
});

// Render tasks
function renderTasks(taskArray){
    taskList.innerHTML = "";

    taskArray.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = `${task.text} [${task.priority}]`;
        li.style.cursor = "pointer";

        li.addEventListener('click', () => {
            selectedIndex = index;
            taskInput.value = task.text;
            dropdown.value = task.priority;
        });

        taskList.appendChild(li);
    });
}

// Edit Task
editBtn.addEventListener('click', () => {
    if(selectedIndex === null) {
        alert('Select a task to edit!');
        return;
    }

    tasks[selectedIndex].text = taskInput.value.trim();
    tasks[selectedIndex].priority = dropdown.value;

    taskInput.value = '';
    dropdown.value = 'High';
    selectedIndex = null;

    renderTasks(tasks);
});

// Delete Task
deleteBtn.addEventListener('click', () => {
    if(selectedIndex === null) {
        alert('Select a task to delete!');
        return;
    }

    tasks.splice(selectedIndex, 1);
    taskInput.value = '';
    dropdown.value = 'High';
    selectedIndex = null;

    renderTasks(tasks);
});

// Sort Tasks
sortSelect.addEventListener('change', () => {
    const sortedTasks = [...tasks];
    if(sortSelect.value === 'AtoZ') {
        sortedTasks.sort((a, b) => a.text.localeCompare(b.text));
    } else {
        sortedTasks.sort((a, b) => b.text.localeCompare(a.text));
    }
    renderTasks(sortedTasks);
});
