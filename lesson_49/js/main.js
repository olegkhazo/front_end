import { elements, showByPriority } from './view.js';
import { creatingHandlersForMany } from './view.js';
import { changeBackground } from './view.js';
import { removeElement } from './view.js';
import { createTaskNode } from './view.js';

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
    {
        id: ++id,
        name: 'feed a dog',
        status: 'to do',
        priority: 'high',
    },
    {
        id: ++id,
        name: 'by bred',
        status: 'to do',
        priority: 'low',
    },
];

showByPriority(PRIORITY, list);



creatingHandlersForMany(elements.btns, "click", addNewTask);
creatingHandlersForMany(elements.inputs, "keypress", addNewTask);


creatingHandlersForMany(elements.check, "click", statusSwitcher);
creatingHandlersForMany(elements.deleteTask, "click", deleteTask);


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

    newItem = {
        id: ++id,
        name: element.value,
        status: STATUS[0],
        priority: choosenPrioirity,
    };

    list.push(newItem);

    createTaskNode(newItem);
   
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
