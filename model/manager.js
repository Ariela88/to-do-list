class Manager{

    constructor(todoArray = []){

        this.todoArray = todoArray;

    }

    addToDo(todo){

        this.todoArray.push(todo)


    }



    ordertoDosByName(){

        this.todoArray.sort((todo1,todo2)=> todo1.title.localeCompare(todo2))
        

        
    }
    ordertoDosByDate(){


    }
}