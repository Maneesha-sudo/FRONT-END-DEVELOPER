const dbUrl = "https://mynewapp-59685-default-rtdb.asia-southeast1.firebasedatabase.app/Todos.json";

// Add Task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if (!task) return alert("Enter a task");

    fetch(dbUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task, completed: false })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Added:", data);
        taskInput.value = "";
        getTasks();
    })
    .catch(err => console.error(err));
}

// Get Tasks
function getTasks() {
    fetch(dbUrl)
    .then(res => res.json())
    .then(data => {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        for (let id in data) {
            const li = document.createElement("li");
            li.textContent = data[id].task + (data[id].completed ? " ✅" : "");
            
            // Complete button
            const completeBtn = document.createElement("button");
            completeBtn.textContent = "Complete";
            completeBtn.onclick = () => updateTask(id, true);

            // Delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = () => deleteTask(id);

            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        }
    })
    .catch(err => console.error(err));
}

// Update Task
function updateTask(id, completed) {
    fetch(`https://mynewapp-59685-default-rtdb.asia-southeast1.firebasedatabase.app/Todos/${id}.json`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed })
    })
    .then(res => res.json())
    .then(() => getTasks())
    .catch(err => console.error(err));
}

// Delete Task
function deleteTask(id) {
    fetch(`https://mynewapp-59685-default-rtdb.asia-southeast1.firebasedatabase.app/Todos/${id}.json`, {
        method: "DELETE"
    })
    .then(() => getTasks())
    .catch(err => console.error(err));
}

// Load tasks on page load
window.onload = getTasks;
