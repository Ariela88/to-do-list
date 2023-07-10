class DataService{

    static getData(){

        const todo1 = new Todo('comprare il latte', new Date(2023,6,8),false)
        const todo2 = new Todo('pagare assicurazione',new Date(2023,6,10),false, )
        const todo3 = new Todo('chiamare uffico', new Date(2023,6,5),false, )
        const todo4 = new Todo('passare in tintoria', new Date(2023,6,1))
        const todo5 = new Todo('disdire abbonamento internet', new Date(2023,5,8),false, )
       

        const todoArray = [todo1,todo2,todo3,todo4,todo5]
        return todoArray
}


}