// const todos = Storage.loadTodos()
// console.log(todos)
// let manager;
// if (todos) {
//     manager = new Manager(todos)

// } else {
//     manager = new Manager()
// }

// const manager = new Manager(todos);

// const storage = new Storage(todos)

let manager;
DbService.getAllTodos().then(todos => {
    manager = new Manager(todos);
    render();
})


function render() {


    const todoContainer = document.getElementById('todo-container')

    todoContainer.innerHTML = '';

    for (let i = 0; i < manager.todoArray.length; i++) {
        const todo = manager.todoArray[i];


        const div = document.createElement('div')
        const titleStrong = document.createElement('strong')
        const titleNode = document.createTextNode(todo.title)

        div.classList.add('todo-card')

        if (todo.isCompleted) {

            div.classList.add('todo-completed')

        }

        titleStrong.appendChild(titleNode)
        div.appendChild(titleStrong)



        const completeBtn = document.createElement('button');

        const completeNode = document.createTextNode(todo.isCompleted ? '✘' : '✔')

        completeBtn.addEventListener('click', () => {

            const modifiedTodo = { ...todo };

            modifiedTodo.isCompleted = !modifiedTodo.isCompleted;

            DbService.updateTodo(modifiedTodo).then(res => {
                manager.changeCompleteStatus(i);
                render()
            })

        })








        completeBtn.appendChild(completeNode)
        div.appendChild(completeBtn)
        completeBtn.classList.add('completBtn')
        // completeBtn.addEventListener('mouseover', () => div.style.borderWidth = '3px')
        // completeBtn.addEventListener('mouseleave', () => div.style.borderWidth = '1px')


        const deleteBtn = document.createElement('button');

        const deleteNode = document.createTextNode("cancella");

        deleteBtn.appendChild(deleteNode);

        div.appendChild(deleteBtn);
        deleteBtn.classList.add('dltBtn')


        deleteBtn.addEventListener("click", () => {

            DbService.deleteTodo(todo.id).then(() => {
                manager.deleteTodo(i);

                render();

            })


        });



        const dateSpan = document.createElement('span')
        const dateNode = document.createTextNode(todo.creationDate.toISOString())


        dateSpan.appendChild(dateNode)
        div.appendChild(dateSpan)

        todoContainer.appendChild(div)




    }
}




function addTodoWithTitle() {

    const input = document.getElementById("eventIn")

    const title = input.value;

    if (title.trim() !== '') {

        const newTodo = new Todo(title,new Date(),false)

        DbService.saveTodo(newTodo).then(res => {
            manager.addTodo(res);
            input.value = '';

            render()
        })


        // manager.addTodoWithTitle(title)

        // input.value = ''

    }

    // render()


}




// function render2(){

//     const todoContainer = document.getElementById('todo-container')

//     todoContainer.innerHTML = '';

//     for (const todo of manager.todoArray) {

//         const template = `<div class="todo-card ${todo.isCompleted ? 'todo-completed': '' }"> 
//                             <strong> ${todo.title} </strong>
//                             <span> ${todo.creationDate.toISOString()}</span>
//                           </div>`

//       todoContainer.innerHTML += template;                    

//     }



// }

// render2()


function orderByTitle() {

    manager.orderoDosByTitle();
    render();

}



function orderByDate() {

    manager.ordertodosByDate();
    render();



}