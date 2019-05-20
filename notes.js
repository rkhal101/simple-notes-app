const fs = require('fs')
const chalk = require('chalk')

// const getNotes = function() {
//     return 'These are my notes...'
// }

const addNote = (title, body) => {
    const notes = loadNotes()
    
    const duplicateNote = notes.find(
        (note) => note.title == title)
    

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.bold('New note added!'))
        saveNotes(notes)

    } else {
        console.log(chalk.red.bold('Title already taken!'))
    }

}

const loadNotes = () => {

    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch (e){
        return []
    }


}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title != title
    )

    if(notes.length == notesToKeep.length){
        console.log(chalk.red.bold("No note removed!"))

    }
    else {
        console.log(chalk.green.bold("Note removed!"))
    }

    saveNotes(notesToKeep)

}

const listNotes = () => {
    console.log(chalk.underline.magenta("Titles of Notes"))
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(element.title)
        
    });
}

const readNote = (title) => {

    const notes = loadNotes()
    const notesToRead = notes.filter((note) => note.title == title
    )

    if (notesToRead.length == 0) {
        
        console.log(chalk.red("No note with the provided title exists."))
    } else {

        notesToRead.forEach( note => console.log(chalk.magenta.underline(note.title)))
        notesToRead.forEach( note => console.log(note.body))
        
    }

    // console.log(chalk.underline.magenta("Titles of Notes"))
    // const notes = loadNotes()
    // notes.forEach(element => {
    //     console.log(element.title)
        
    // });
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}



module.exports = {
    //getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
