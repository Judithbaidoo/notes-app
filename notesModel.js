class NotesModel{
    constructor(){
        this.array = []
    }
    getNotes(){
        return this.array
    }
    addNote(item){
        this.array.push(item)
    }
    reset(){
        this.array.splice(0)
    }
}

const model = new NotesModel();
module.exports = model