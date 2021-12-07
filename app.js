const getNotes = require('./notes.js');
let chalk = require('chalk');

const yargs = require('yargs');


yargs.command({
    command: "list",
    descirbe: "List the Notes",
    handler: function() {
        console.log("listing all the notes")
    }
})


yargs.command({
    command: "read",
    descirbe: "read the Notes",
    handler: function() {
        console.log("reading a note")
    }
})

yargs.command({
    command: "remove",
    descirbe: "Remove the Notes",
    handler: function() {
        console.log("Remove all the notes")
    }
})
console.log(yargs.argv)


console.log(chalk.underline.bgRed.bold.red('success'));