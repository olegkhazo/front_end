import { ELEMENTS, showByPriority, creatingHandlersForMany, changeBackground, removeElement, createTaskNode } from './view.js';

const STATUS = ['to do', 'done'];
const PRIORITY = ['high', 'low'];
let id = 0;

const list = [
    {
        id: ++id,
        name: 'create a post',
        status: 'to do',
        priority: 'low',
    },
    {
        id: ++id,
        name: 'feed a cat',
        status: 'to do',
        priority: 'high',
    },
    {
        id: ++id,
        name: 'feed a bird',
        status: 'to do',
        priority: 'high',
    },
];

showByPriority(PRIORITY, list);

creatingHandlersForMany(ELEMENTS.BTNS, "click", addNewTask);
creatingHandlersForMany(ELEMENTS.INPUTS, "keypress", addNewTask);


creatingHandlersForMany(ELEMENTS.CHECK, "click", statusSwitcher);
creatingHandlersForMany(ELEMENTS.DELETE_TASK, "click", deleteTask);

function NewTask() {
    this.id = ++arguments[0];
    this.name = arguments[1];
    this.status = arguments[2];
    this.priority = arguments[3];
}

function addNewTask(event) {
    let element;
    let choosenPrioirity;
    let newItem = {};
    if (event.type === 'keypress') {
        element = event.target;
        if (event.key !== 'Enter') return;
    } else {
        element = event.target.parentNode.children[1];
    }

    if (element.classList.contains('high')) {
        choosenPrioirity = PRIORITY[0];
    } else {
        choosenPrioirity = PRIORITY[1];
    }

    if (element.value === "") return;

    newItem = new NewTask(id, element.value, STATUS[0], choosenPrioirity);
   
    list.push(newItem);

    createTaskNode(newItem);

    creatingHandlersForMany(ELEMENTS.CHECK, "click", statusSwitcher);
    creatingHandlersForMany(ELEMENTS.DELETE_TASK, "click", deleteTask);

    element.value = "";

}

function statusSwitcher(event) {
    let id = +event.currentTarget.id;
    let parrent = event.currentTarget.parentNode.parentNode;
    let pressedTask = list.find(item => item.id === id);

    if (pressedTask.status === STATUS[0]) {

        pressedTask.status = STATUS[1];
        changeBackground(parrent, '#F4F4F4');
        return;

    }

    pressedTask.status = STATUS[0];
    changeBackground(parrent, '#FFFFFF');
    return;
}


function deleteTask(event) {
    let removeNode = event.currentTarget.parentNode;
    let removeId = removeNode.childNodes[0].childNodes[0].id;

    const index = list.findIndex(item => item.id == removeId)
    list.splice(index, 1);
    removeElement(removeNode);

}
