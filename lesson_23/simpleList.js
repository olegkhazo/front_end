const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",


    changeStatus( task, status ) {
        if ( [task] in list ) {
            list[task] = status;
        }
    },

    addTask( newTask ) {
        if ( !([newTask] in list) ) {
            list[newTask] = "To Do";
        } else {
            console.log("You tried to add task but you already have this one for today");
        }
    },

    deleteTask( task ) {
        if ( [task] in list ) {
            delete list[task];
        } else {
            "Nothing to delete, try another task name";
        }
    },

    showList() {
        const statuses = ["In Progress", "Done", "To Do"];
        for ( let i = 0; i <= statuses.length; i++ ) {
            console.log(statuses[i]);
            for ( let key in list ) {
                if ( list[key] == statuses[i] ) {
                    console.log(key);
                }
            }
        }
    },

};


list.addTask("have a walk");
list.addTask("make an exersizes");
list.addTask("feed a cat");
list.changeStatus("write a post", "Done");
list.changeStatus("have a walk", "In Progress");
list.changeStatus("make an exersizes", "In Progress");


list.showList();
