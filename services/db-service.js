class DbService{

//GET

static getAllTodos(){

const url = 'https://64b512caf3dbab5a95c6a515.mockapi.io/todos'

return fetch(url)
.then(resp => resp.json())
.then(result => this.convertTodoArray(result))
.catch(error => console.log(error.message))

}


//DELETE
static deleteTodo(id){

    

    const deleteUrl = 'https://64b512caf3dbab5a95c6a515.mockapi.io/todos/' + id;
    
    return fetch(deleteUrl,{method:'delete'}).then(resp => resp.json())
}

static convertTodoArray(genericArray){

    const tempArray = []

    for (const obj of genericArray) {

        const newTodo = new Todo(obj.title,new Date(obj.creationDate), obj.isCompleted,obj.id)

        tempArray.push(newTodo)
        
        
    }
    
    return tempArray


}


//PUT


static updateTodo(todo){
    

}


//UPDATE
static saveTodo(todo){


}


}