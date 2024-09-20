
const tasksList = document.getElementById("tasks")
const taskInput = document.getElementById("taskInput")

function addTask() {
    const taskText = taskInput.value.trim()
    if (taskText != "") {
        const div = document.createElement("div")
        div.classList.add("item")
        div.innerHTML = `
        <div class="task">
        <button class="check" onclick="checkTask(this)"></button>
        <span class="taskText">${taskText}</span>
        </div>
        <button onclick="removeTask(this)">
            <img src="assets/icons/trash.svg" alt="">
        </button>
        `
        tasksList.appendChild(div)
        taskInput.value = ""
    }
}

function checkTask(button) {
    const divTask = button.parentElement
    const divItem = divTask.parentElement

    // Mudar o texto
    const texto = divTask.getElementsByClassName("taskText")[0]
    texto.style.textDecoration = "line-through";
    texto.style.color = "#9CA3AF";

    //Mudar o checkbox
    button.style.backgroundImage = "url(assets/icons/check-selected.svg)"
}

function removeTask(button){
    const div = button.parentElement
    tasksList.removeChild(div)

    const taskForm = document.getElementById("task-form")

    const warning = document.createElement("div")
    warning.id = "warning"
    warning.innerHTML = `
    <div id="warning-info">
        <img src="assets/icons/warning-circle-filled.svg" alt="">
        <span>O item foi removido da lista</span>
    </div>
    <button onclick="removeWarning(this)"></button>
    `
    taskForm.appendChild(warning)
}

function removeWarning(button) {
    const div = button.parentElement
    const taskForm = document.getElementById("task-form")

    console.log(div)
    taskForm.removeChild(div)
    console.log(div)

}