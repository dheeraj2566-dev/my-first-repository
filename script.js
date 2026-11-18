
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function updateCount() {
    const tasks = taskList.querySelectorAll("li");
    const remaining = [...tasks].filter(
        task => !task.querySelector("span").classList.contains("completed")
    ).length;

    taskCount.innerText = `${remaining} tasks remaining`;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = taskText;

    span.addEventListener("click", function () {
        span.classList.toggle("completed");
        updateCount();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateCount();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    updateCount();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
