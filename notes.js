const { default: chalk } = require('chalk');
const fs = require('fs');

const readNote = (title) => {
    const notes = loadNotes();
    const readNote = notes.find((note) => title === note.title);
    debugger
    if (readNote) {
        console.log(chalk.green.inverse(readNote.title), readNote.body);
    } else {
        console.log(chalk.red.inverse("No note found"));
    }

}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicatenote = notes.find((note) => title === note.title)
    if (duplicatenote) {
        console.log(chalk.red.inverse("No title taken"));

    } else {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added"));

    }
}

const listNotes = () => {
    console.log(chalk.inverse("Your Notes"));
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title);
    });
}


const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => title != note.title);
    console.log("here");
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note Removed"));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse("No note found"))
    }

}
saveNotes = (notes) => {
    const dataString = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataString);
}
loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString();
        return JSON.parse(dataString);
    } catch (e) {
        return [];
    }


}
module.exports = { addNotes: addNotes, readNote: readNote, removeNote: removeNote, listNotes: listNotes };