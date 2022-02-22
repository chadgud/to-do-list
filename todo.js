function myToDoApp() {
    let command = prompt('What would you like to do?').toLowerCase();
    const toDoList = [];
    let newItem;
    let listIndex;
    let deleteIndex;
    let badCommand;
    let removedItem;

    while (command !== 'quit') {
        listIndex = 0;
        badCommand = false;
        if (command === 'new') {
            newItem = prompt('Enter the new to do item.');
            toDoList.push(newItem);
            console.log(`${newItem} has been added to your list.`);
        } 
        else if (command === 'list') {
            console.log('*******');
            if (toDoList.length === 0) {
                console.log('Your To-Do List is Empty. Add To-Do items by typing "new".');
            }
            for (let item of toDoList) {
                console.log(`${listIndex}: ${item}`);
                listIndex++;
            }
            console.log('*******');
        } 
        else if (command === 'delete') {
            if (toDoList.length === 0) {
                console.log('Your To-Do List is Empty. Add To-Do items by typing "new".');
            } else {
                console.log('*******');
                for (let item of toDoList) {
                    console.log(`${listIndex}: ${item}`);
                    listIndex++;
                }  
                console.log('*******');  
                deleteIndex = parseInt(prompt('Enter the index of the item you would like to delete.'));
                if (!Number.isNaN(deleteIndex) && deleteIndex < (toDoList.length) && deleteIndex >= 0) {
                    removedItem = toDoList[deleteIndex];
                    toDoList.splice(deleteIndex, 1);
                    console.log(`${removedItem} has been removed from the list.`);
                } else {
                    console.log('Invalid Index');
                } 
            }
        }
        else {
            command = prompt('Command not recognized. Refer to app navigation instructions and try again.');
            badCommand = true;
        }
        
        if (!badCommand) {
            command = prompt('What would you like to do?').toLowerCase();
        }
        
    }

    console.log('App Closed');
}