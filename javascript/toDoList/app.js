
let input = prompt("What would you like to do?"); 

const toDos = [];

while (input !== 'quit' && input !== 'q') {
    if(input === 'list') {
        console.log('**************')
        for (let i = 0; i < toDos.length; i++) {
            console.log(`${i}: ${toDos[i]}`)
        }
        console.log('**************')
    } else if (input === 'new') {
        const newToDo = prompt('Ok, what is the new todo?');
        toDos.push(newToDo);
        console.log(`${newToDo} added to the list!`)
    } else if(input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if(!Number.isNaN(index)) {
            const deleted = toDos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }    
    }
    input = prompt("what would you like to do?")
}
console.log("You quit the app")

// fix check for "Ok undefined deleted. When entered a unvalid index number."