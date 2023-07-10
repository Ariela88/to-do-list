class Storage{

    constructor(){

    }

saveData(data){

    const dataString = JSON.stringify(data)
    localStorage.setItem('todos', dataString)
}


loadData(){

    const dataString = localStorage.getItem('todos')     

        if (dataString) {
            const data = JSON.parse(dataString);
            return data
            
        }


return null;



}



}
