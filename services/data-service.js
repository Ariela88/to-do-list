class DataService{

    static getData(){

        const todo1 = new Todo('comprare il latte',false, new Date(2023,6,8))
        const todo2 = new Todo('pagare assicurazione',false, new Date(2023,6,10))
        const todo3 = new Todo('chiamare uffico',false, new Date(2023,6,5))
        const todo4 = new Todo('passare in tintoria',false, new Date(2023,6,1))
        const todo5 = new Todo('disdire abbonamento internet',true, new Date(2023,5,8))
       

        const todoArray = [todo1,todo2,todo3,todo4,todo5]
        return todoArray
}


}