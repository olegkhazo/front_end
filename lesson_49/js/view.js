export let elements = {
    container: document.getElementsByClassName("container"),
    highTaskForm: document.getElementById("highTaskForm"),
    lowTaskForm: document.getElementById("lowTaskForm"),
    check: document.getElementsByClassName("check__input"),
    deleteTask: document.getElementsByClassName("deleteTask"),
    btns: document.getElementsByClassName("little-btn"),
    inputs: document.getElementsByClassName("addTask"),
};


export function creatingHandlers(element, action, func) {
    element.addEventListener(action, func);
}

export function creatingHandlersForMany(elements, action, func) {
    for (let i = 0; i < elements.length; i++) {
        creatingHandlers(elements[i], action, func);
    }
}

export function changeBackground(element, color) {
    element.style.backgroundColor = color;
}

export function createTaskNode(task) {
    let newTask = task;
    let div = document.createElement('div');
    div.className = "description";
    div.innerHTML = '<label class="check"><input type="checkbox" class="check__input" id="' + newTask.id + '" name=""><span class="check__box"></span></label><p>' + newTask.name + '</p><img src="img/close-icon.png" onclick="removeElement()" class="deleteTask" alt="delete btn"></img>';
    (newTask.priority === "high") ? elements.highTaskForm.after(div) : elements.lowTaskForm.after(div);
}


export function removeElement(element) {
    element.remove();
}

export function showByPriority(priority, list) {

    for (let i = 0; i < priority.length; i++) {

        for (let key in list) {

            if (list[key].priority === priority[i]) {
                let div = document.createElement('div');
                div.className = "description";
                div.innerHTML = '<label class="check"><input type="checkbox" class="check__input" id="' + list[key].id + '" name=""><span class="check__box"></span></label><p>' + list[key].name + '</p><img src="img/close-icon.png" class="deleteTask" alt="delete btn"></img>';

                (priority[i] === "high") ? elements.highTaskForm.after(div) : elements.lowTaskForm.after(div);
            }

        }
    }
}




