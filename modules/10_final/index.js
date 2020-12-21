const defaultTasks = {
    open: [{ title: "Make a homework", creationDate: "08:53 PM" },
    { title: "Go Shopping", creationDate: "07:53 PM" }],
    done: [{ title: "Here is an example of todo task with long text description, that wraps to the next row", creationDate: "07:53 PM", dueDate: "10:40 AM" }]
};

let taskInput = document.getElementById("new-task");
let addButton = document.getElementsByTagName("button")[0];
let incompleteTaskHolder = document.getElementById("incomplete-tasks");
let completedTasksHolder = document.getElementById("completed-tasks");
let clearOpenListBtn = document.getElementById("clearOpenList");
let clearDoneListBtn = document.getElementById("clearDoneList");
let searchInput = document.getElementById("search");
let items = document.getElementsByTagName('li');
let openTasksSelect = document.getElementById("open-sort");
let doneTasksSelect = document.getElementById("done-sort");

if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', JSON.stringify(defaultTasks));
}

let tasks = JSON.parse(localStorage.getItem('tasks'));

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function parseTime(timeString) {
    if (timeString == '') return null;

    let time = timeString.match(/(\d+)(:(\d\d))?\s*(p?)/i);
    if (time == null) return null;

    let hours = parseInt(time[1], 10);
    if (hours == 12 && !time[4]) {
        hours = 0;
    }
    else {
        hours += (hours < 12 && time[4]) ? 12 : 0;
    }
    let d = new Date();
    d.setHours(hours);
    d.setMinutes(parseInt(time[3], 10) || 0);
    d.setSeconds(0, 0);
    return d;
}

let createNewTaskElement = function (taskString, date, dueDate) {
    let listItem = document.createElement("li");
    let divWrapper = document.createElement("div");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");
    let editInput = document.createElement("input");
    let deleteButton = document.createElement("div");

    let dateWrapper = document.createElement("div");
    let creationDate = document.createElement("p");
    let doneDate = document.createElement("p");

    label.innerText = taskString;

    checkBox.type = "checkbox";
    editInput.type = "text";

    deleteButton.className = "delete";
    dateWrapper.className = "date__wrapper";
    creationDate.className = "creation__date";
    doneDate.className = "done__date";

    if (date) {
        creationDate.textContent = date;
    } else {
        creationDate.textContent = formatAMPM(new Date);
    }

    if (dueDate) {
        doneDate.textContent = dueDate;
        checkBox.checked = true;
    }
    listItem.appendChild(divWrapper);
    divWrapper.appendChild(checkBox);
    divWrapper.appendChild(label);
    divWrapper.appendChild(editInput);
    listItem.appendChild(dateWrapper);
    dateWrapper.appendChild(creationDate);
    dateWrapper.appendChild(doneDate);
    listItem.appendChild(deleteButton);
    return listItem;
}

let addTask = function () {
    let listItem = createNewTaskElement(taskInput.value);

    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "";

    tasks.open.push({ title: listItem.querySelector("label").textContent, creationDate: listItem.querySelector(".creation__date").textContent })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

let editTask = function () {

    let listItem = this.parentNode.parentNode;

    let editInput = listItem.querySelector('input[type=text]');
    let label = listItem.querySelector("label");

    editInput.value = label.innerText;

    listItem.classList.add("editMode");

    editInput.focus();

    editInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            tasks.open = tasks.open.map((el) => {
                if (el.title === label.textContent) {
                    el.title = editInput.value;
                }
                return el;
            })

            tasks.done = tasks.done.map((el) => {
                if (el.title === label.textContent) {
                    el.title = editInput.value;
                }
                return el;
            })
            localStorage.setItem('tasks', JSON.stringify(tasks));

            label.innerText = editInput.value;
            listItem.classList.remove("editMode");
        } else if (e.key === "Escape") {
            listItem.classList.remove("editMode");
        }
    })
}

let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;

    ul.removeChild(listItem);

    const label = listItem.querySelector("label").textContent;

    tasks.open = tasks.open.filter((el) => {
        return el.title !== label;
    })

    tasks.done = tasks.done.filter((el) => {
        return el.title !== label;
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

let taskCompleted = function () {
    let listItem = this.parentNode.parentNode;
    let doneDate = listItem.querySelector('.done__date');

    doneDate.textContent = formatAMPM(new Date);
    completedTasksHolder.appendChild(listItem);

    bindTaskEvents(listItem, taskIncomplete);

    const label = listItem.querySelector("label").textContent;

    tasks.open = tasks.open.filter((el) => {
        return el.title !== label;
    })

    tasks.done.push({
        title: label,
        creationDate: listItem.querySelector(".creation__date").textContent,
        dueDate: listItem.querySelector(".done__date").textContent
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


let taskIncomplete = function () {
    let listItem = this.parentNode.parentNode;
    listItem.querySelector('.done__date').textContent = "";

    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    const label = listItem.querySelector("label").textContent;

    tasks.done = tasks.done.filter((el) => {
        return el.title !== label;
    })

    tasks.open.push({
        title: label,
        creationDate: listItem.querySelector(".creation__date").textContent,
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

addButton.addEventListener("click", addTask);

let bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    let checkBox = taskListItem.querySelector("input[type=checkbox]");
    let label = taskListItem.querySelector("label");
    let deleteButton = taskListItem.querySelector("div.delete");

    label.addEventListener("dblclick", editTask);
    deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler;
}

tasks.open.forEach((el) => {
    const listItem = createNewTaskElement(el.title, el.creationDate);
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
})

tasks.done.forEach((el) => {
    const listItem = createNewTaskElement(el.title, el.creationDate, el.dueDate);
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
})

for (let i = 0; i < incompleteTaskHolder.children.length; i++) {
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

for (let i = 0; i < completedTasksHolder.children.length; i++) {
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

clearOpenListBtn.addEventListener("click", () => {
    while (incompleteTaskHolder.firstChild) {
        incompleteTaskHolder.removeChild(incompleteTaskHolder.firstChild);
        tasks.open = [];
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
})

clearDoneListBtn.addEventListener("click", () => {
    while (completedTasksHolder.firstChild) {
        completedTasksHolder.removeChild(completedTasksHolder.firstChild);
    }
    tasks.done = [];
    localStorage.setItem('tasks', JSON.stringify(tasks));
})

searchInput.addEventListener("keyup", (event) => {
    for (let i = 0; i < items.length; i++) {
        let searchedItem = event.target.value.toLowerCase();
        let label = items[i].querySelector("label").textContent;

        if (label.toLowerCase().indexOf(searchedItem) === -1) {
            items[i].style.display = "none"
        } else {
            items[i].style.display = "flex"
        }
    }
})

function sortItems(event, itemsHolder, doneItems = false) {
    let items = itemsHolder.getElementsByTagName('li');

    if (event.target.value === "text") {
        [].slice.call(items).sort(function (a, b) {
            return a.querySelector("label").textContent.localeCompare(b.querySelector("label").textContent);
        }).forEach(function (val) {
            itemsHolder.appendChild(val);
        });
    } else {
        [].slice.call(items).sort(function (a, b) {
            if (doneItems) {
                return new Date(parseTime(b.querySelector(".done__date").textContent)) - new Date(parseTime(a.querySelector(".done__date").textContent));
            }
            return new Date(parseTime(b.querySelector(".creation__date").textContent)) - new Date(parseTime(a.querySelector(".creation__date").textContent));
        }).forEach(function (val) {
            itemsHolder.appendChild(val);
        });
    }
}

openTasksSelect.addEventListener("change", (e) => sortItems(e, incompleteTaskHolder));
doneTasksSelect.addEventListener("change", (e) => sortItems(e, completedTasksHolder, true));