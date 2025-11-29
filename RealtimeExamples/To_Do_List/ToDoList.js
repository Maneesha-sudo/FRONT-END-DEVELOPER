const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const themeBtn = document.getElementById("themeBtn");
const prioritySelect = document.getElementById("prioritySelect");

// Load tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// THEME TOGGLE
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// SAVE TO LOCALSTORAGE
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// RENDER TASKS
function renderTasks() {
  taskList.innerHTML = "";

  // SORT: 1️⃣ Completed tasks last 2️⃣ Priority: High → Medium → Low
  const priorityOrder = { "High": 1, "Medium": 2, "Low": 3 };
  tasks.sort((a, b) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.draggable = true;
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span class="priority ${task.priority}">${task.priority}</span>
      <span class="text">${task.text}</span>
      <div class="actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    // MARK complete
    li.querySelector(".text").addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    });

    // DELETE
    li.querySelector(".delete-btn").addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    // EDIT
    li.querySelector(".edit-btn").addEventListener("click", () => {
      const newText = prompt("Edit task:", task.text);
      if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText;
        saveTasks();
        renderTasks();
      }
    });

    // DRAG & DROP
    li.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", index);
    });
    li.addEventListener("dragover", (e) => e.preventDefault());
    li.addEventListener("drop", (e) => {
      const fromIndex = e.dataTransfer.getData("text/plain");
      const toIndex = index;
      const [movedTask] = tasks.splice(fromIndex, 1);
      tasks.splice(toIndex, 0, movedTask);
      saveTasks();
      renderTasks();
    });

    taskList.appendChild(li);
  });
}

// ADD TASK
addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (!text) return alert("Enter a task!");

  tasks.push({ text, completed: false, priority });
  saveTasks();
  renderTasks();
  taskInput.value = "";
});

// INITIAL RENDER
renderTasks();
