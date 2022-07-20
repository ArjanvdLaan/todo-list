export const addNewTask = function () {
    const button = document.getElementById("addTask");

        button.addEventListener('click', function (e) {
            e.preventDefault();
            const input = document.getElementById("task");
            const taskList = document.getElementById("container");
            const taskDiv = document.createElement("div");
            const newLi = document.createElement("li");
            const deleteButton = document.createElement('button');
            taskDiv.classList.add('todoDiv');
            deleteButton.classList.add("trash-button");
            taskList.appendChild(taskDiv);
            taskDiv.appendChild(newLi);
            taskDiv.appendChild(deleteButton);
            newLi.innerHTML = input.value;
            deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            let data = {description: input.value, done: false};
            input.value = "";
        })
}

addNewTask()

const taskList = document.getElementById("container")
taskList.addEventListener('click', deleteTask)

function deleteTask (e) {
    // console.log(e.target)
    const item = e.target;
    // console.log(item.classList[0]);
    if (item.classList[0] === "fa-solid") {
        // console.log(item.parentElement.parentElement)
        const task = item.parentElement.parentElement;
        task.remove();
    }
}