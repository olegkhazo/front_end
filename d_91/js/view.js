export const ELEMENTS = {
    CONTAINER: document.getElementsByClassName("container"),
    HIGHT_TASK_FORM: document.getElementById("highTaskForm"),
    LOW_TASK_FORM: document.getElementById("lowTaskForm"),
    CHECK: document.getElementsByClassName("check__input"),
    DELETE_TASK: document.getElementsByClassName("deleteTask"),
    BTNS: document.getElementsByClassName("little-btn"),
    INPUTS: document.getElementsByClassName("addTask"),
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
    div.innerHTML = '<label class="check"><input type="checkbox" class="check__input" id="' + newTask.id + '" name=""><span class="check__box"></span></label><p>' + newTask.name + '</p><img src="img/close-icon.png" class="deleteTask" alt="delete btn"></img>';
    (newTask.priority === "high") ? ELEMENTS.HIGHT_TASK_FORM.after(div) : ELEMENTS.LOW_TASK_FORM.after(div);
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

                (priority[i] === "high") ? ELEMENTS.HIGHT_TASK_FORM.after(div) : ELEMENTS.LOW_TASK_FORM.after(div);
            }

        }
    }
}




