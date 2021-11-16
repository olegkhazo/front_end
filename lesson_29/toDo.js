const list = [
    {
        id: 1,
        name: 'create a post',
        status: 'To Do',
        priority: 'low',
    },
    {
        id: 2,
        name: 'feed a cat',
        status: 'In Progress',
        priority: 'high',
    },
];

const STASUSES = ['To Do', 'In Progress', 'Done'];
const PRIORITY = ['high', 'low'];

function changeStatus(task, status) {
    let taskPosition = list.findIndex(item => item.name === task);

    if (taskPosition !== -1 && STASUSES.includes(status)) {
        list[taskPosition].status = status;
    }

};


function addTask(taskName) {
    let nextId = list[list.length - 1].id + 1;
    let newItem = {
        id: nextId,
        name: taskName,
        status: STASUSES[0],
        priority: PRIORITY[1],
    };

    list.push(newItem);
};


function deleteTask(name) {
    let deleteTask = list.findIndex(item => item.name === name);

    if (deleteTask !== -1) {
        list.splice(deleteTask, 1);
    }

};


function showList() {

    for (let i = 0; i < STASUSES.length; i++) {
        console.log(STASUSES[i] + ':');

        for (let key in list) {
            if (list[key].status === STASUSES[i]) {
                console.log(`${list[key].id}: "${list[key].name}" - prioriti is ${list[key].priority}`);
            }
        }
    }

};


function showByStatus(status) {

    if (STASUSES.includes(status)) {
        console.log(status + ":");
        for (let key in list) {
            if (list[key].status === status) {
                console.log(`${list[key].name}`);
            }
        }
    }

};


function showByPriority(priority) {

    if (PRIORITY.includes(priority)) {
        console.log(priority + ':');
        for (let key in list) {
            if (list[key].priority === priority) {
                console.log(`${list[key].name}`);
            }
        }       
    }

};

//showList();

//showByStatus('Done');
//showByStatus('In Progress');
//showByStatus('To Do');

//showByPriority('high');
//showByPriority('low');

// changeStatus('Build a house', 'In Progress');
// addTask('Go to the gym', 'high');
//deleteTask(2);