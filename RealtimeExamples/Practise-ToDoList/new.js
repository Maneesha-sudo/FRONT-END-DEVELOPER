let tasks = [];
let currentFilter = "all";

// Add task
function Addbtn() {
  const tasky = document.getElementById("Entertask");
  const task = tasky.value.trim();

  if (!task) {
    alert("text cannot be empty");
    return;
  }

  tasks.push({ name: task, completed: false });
  tasky.value = "";
  rendertasks();
}

// Update filter
function applyFilter() {
  currentFilter = document.getElementById("filter").value;
  rendertasks();
}

// Render tasks
function rendertasks() {
  const tasklist = document.getElementById("tasklist");
  tasklist.innerHTML = "";

  let filtered = [];

  // FILTER
  if (currentFilter === "completed") {
    filtered = tasks.filter(t => t.completed);
  }
  else if (currentFilter === "pending") {
    filtered = tasks.filter(t => !t.completed);
  }
  else {
    filtered = tasks;
  }

  // DISPLAY
  filtered.forEach((task) => {
    const originalIndex = tasks.indexOf(task);  // Correct index

    const li = document.createElement("li");
    li.textContent = task.name + " ";

    // Strike-through if completed
    if (task.completed) {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    }

    // Delete button
    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete";
    delbtn.onclick = () => deltask(originalIndex);

    // Complete button
    const completebtn = document.createElement("button");
    completebtn.textContent = "Complete";
    completebtn.onclick = () => cbtn(originalIndex);

    li.appendChild(delbtn);
    li.appendChild(completebtn);
    tasklist.appendChild(li);
  });
}

// Delete
function deltask(index) {
  tasks.splice(index, 1);
  rendertasks();
}

// Mark complete
function cbtn(index) {
  tasks[index].completed = !tasks[index].completed;
  rendertasks();
}

// Sort A-Z
function SortAtoZ() {
  tasks.sort((a, b) => a.name.localeCompare(b.name));
  rendertasks();
}

// Sort Z-A
function SortZtoA() {
  tasks.sort((a, b) => b.name.localeCompare(a.name));
  rendertasks();
}
