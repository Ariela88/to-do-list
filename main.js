// console.log(DataService.getData())

const todos = DataService.getData();

const manager = new Manager(todos);



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

            // div.classList.add('todo-completed')
            div.style.borderColor = 'lime'

        }

        titleStrong.appendChild(titleNode)
        div.appendChild(titleStrong)

        const completeBtn = document.createElement('button');

        const completeNode = document.createTextNode(todo.isCompleted ? 'completato' : 'da completare')

        completeBtn.addEventListener('click', () => {
            todo.isCompleted = !todo.isCompleted;
            render()

        }

        )

       

       


        completeBtn.appendChild(completeNode)
        div.appendChild(completeBtn)
        // completeBtn.addEventListener('mouseover', () => div.style.borderWidth = '3px')
        // completeBtn.addEventListener('mouseleave', () => div.style.borderWidth = '1px')


        const deleteBtn = document.createElement('button');

        const deleteNode = document.createTextNode("cancella");

        deleteBtn.appendChild(deleteNode);

        div.appendChild(deleteBtn);


        deleteBtn.addEventListener("click", () => {
            manager.deleteTodo(i);
            render();
        });



        const dateSpan = document.createElement('span')
        const dateNode = document.createTextNode(todo.creationDate.toISOString())


        dateSpan.appendChild(dateNode)
        div.appendChild(dateSpan)

        todoContainer.appendChild(div)




    }
}

render()


function addTodoWithTitle(){

    const input = document.getElementById("eventIn")

    const title = input.value;
    const newTodo = new Todo()
    

    if (title) {

        manager.addToDo(newTodo)
    
    } render()


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