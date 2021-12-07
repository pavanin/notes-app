const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: "add",
    descirbe: "Add a new Note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log("Title", argv.title);
        console.log("body", argv.body);
        notes.addNotes(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    descirbe: "Remove the Notes",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
});

yargs.command({
    command: "read",
    descirbe: "Read the Note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
});
yargs.command({
    command: "list",
    descirbe: "list all notes",
    handler() {
        notes.listNotes();
    }
})
yargs.argv;