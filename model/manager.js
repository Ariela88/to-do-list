class Manager {

    constructor(todoArray) {
        if (!todoArray) {
            const todoArray = Storage.loadTodos()
            if (todoArray) {
                this.todoArray = todoArray

            } else {
                this.todoArray = []
            }
        } else {
            this.todoArray = todoArray
        }

    }

    addToDo(todo) {

        this.todoArray.push(todo)

    }

    addTodoWithTitle(title) {

        const newTodo = new Todo(title)

        this.addToDo(newTodo)
        Storage.saveData(manager.todoArray)


    }

    orderoDosByTitle() {

        this.todoArray.sort((todo1, todo2) => todo1.compareByTitle(todo2))


    }

    ordertodosByDate() {


        this.todoArray.sort((todo1, todo2) => todo1.compareByDate(todo2))


    }

    changeCompleteStatus(index) {
        const todo = this.todoArray[index]
        todo.isCompleted = !todo.isCompleted
        Storage.saveData(manager.todoArray)
    }


    deleteTodo(index) {

        this.todoArray.splice(index, 1);
        Storage.saveData(manager.todoArray)

    }


}