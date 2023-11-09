function addTask() {
    var title = document.getElementById("task-title").value;
    var description = document.getElementById("task-description").value;

    if (title === "" || description === "") {
        alert("Please enter task title and description.");
        return;
    }

    var taskList = document.getElementById("task-list");

    var taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
        <strong>${title}</strong>: ${description}
        <button onclick="assignTask(this)">Assign</button>
    `;

    taskList.appendChild(taskItem);

    // Clear input fields
    document.getElementById("task-title").value = "";
    document.getElementById("task-description").value = "";
}

function assignTask(button) {
    var taskItem = button.parentElement;
    var assignedUser = prompt("Assign this task to:");

    if (assignedUser !== null && assignedUser.trim() !== "") {
        taskItem.innerHTML += `<br><em>Assigned to: ${assignedUser}</em>`;
    }
}
