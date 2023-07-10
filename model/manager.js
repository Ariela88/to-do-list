class Manager {

    constructor(todoArray = []) {

        this.todoArray = todoArray;
        

    }

    addToDo(todo) {

        this.todoArray.push(todo)
        
        


    }



    orderoDosByTitle() {

        this.todoArray.sort((todo1, todo2) => todo1.compareByTitle(todo2))


    }




    ordertodosByDate() {
        

        this.todoArray.sort((todo1, todo2) => todo1.compareByDate(todo2))


    }



deleteTodo(index){

    this.todoArray.splice(index,1);

}











}