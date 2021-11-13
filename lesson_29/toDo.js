const STASUSES = ['To Do', 'In Progress', 'Done'];
const PRIORITY = ['high', 'low'];

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
    {
        id: 3,
        name: 'Build a house',
        status: 'Done',
        priority: 'low',
    },
];


function changeStatus(task, status) {
    let taskPosition = list.findIndex(item => item.name === task);

    if (taskPosition === -1) {
        return console.log('Not available such task, try again');
    } else if (!STASUSES.includes(status)) {
        return console.log(`Not availeble such status, try "${STASUSES[0]}", "${STASUSES[1]}" or "${STASUSES[2]}"`);
    }

    list[taskPosition].status = status;

};


function addTask(taskName, priority) {
    if (list.find(item => item.name === taskName)) {
        return console.log("You tried to add task but you already have this one for today");
    } else if (!PRIORITY.includes(priority)) {
        return console.log(`Not availeble such priority, try "${PRIORITY[0]}" or "${PRIORITY[1]}"`);
    }

    let nextId = list[list.length - 1].id + 1;
    let newItem = {
        id: nextId,
        name: taskName,
        status: STASUSES[0],
        priority: priority,
    };

    list.push(newItem);
    return console.log(`"${taskName}" is your new task for today`);
};


// Delete by ID
function deleteTask(id) {
    let deleteTask = list.findIndex(item => item.id === id);

    if (deleteTask === -1) {
        return "Nothin to delete, try another task ID";
    }

    list.splice(deleteTask, 1);

    return `Task with ID: ${id} has been deleted`;
};


function showList() {
    for (let i = 0; i < STASUSES.length; i++) {
        console.log(STASUSES[i] + ':');

        for (let key in list) {
            if (list[key].status === STASUSES[i]) {
                console.log(` "${list[key].name}" - prioriti is ${list[key].priority}`);
            }
        }
    }

};


function showByStatus(status) {
    if (!STASUSES.includes(status)) {
        return console.log(`Not availeble such status, try "${STASUSES[0]}", "${STASUSES[1]}" or "${STASUSES[2]}"`);
    }

    console.log(status + ":");
    for (let key in list) {
        if (list[key].status === status) {
            console.log(`${list[key].name}`);
        }
    }
};


function showByPriority(priority) {
    if (!PRIORITY.includes(priority)) {
        return console.log(`Not availeble such priority, try "${PRIORITY[0]}" or "${PRIORITY[1]}"`);
    }

    console.log(priority + ':');
    for (let key in list) {
        if (list[key].priority === priority) {
            console.log(`${list[key].name}`);
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