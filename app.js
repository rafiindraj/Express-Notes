const colors = require('chalk')
const noteUtility = require('./notes')
const yargs = require('yargs')
const { argv } = require('yargs')
const notes = require('./notes')

//variable declaration
const log = console.log
const processed = process.argv
// const yargument = yargs.argv
const command = processed[2]


// customize yargs version
yargs.version('1.1.0')


//create add command yargs
yargs.command({
    command: 'add',
    describe : 'Add a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        contents:{
            describe: 'Note Contents',
            demandOption: true,
            type: 'string'
        }      
    },
    handler(argv){
        // log('Title: ' + argv.title)
        noteUtility.addNotes(argv.title, argv.contents)
    }
})

//create remove command yargs
yargs.command({
    command: 'remove',
    describe : 'Remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        noteUtility.removeNotes(argv.title)
    }
})

//create read command yargs
yargs.command({
    command: 'read',
    describe : 'read a note',
    builder:{
        title :{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(){
        // log('Reading a note..')
        noteUtility.readNotes(argv.title)
    }
})

//create list command yargs
yargs.command({
    command: 'list',
    describe : 'List a note',
    handler(){
        noteUtility.listNotes()
    }
})

// yargs.parse()
// log(processed)
console.log(yargs.argv)
// if(command == 'add'){
//     log('Adding Note')
// } else if(command == 'remove'){
//     log('Removing Note')
// }
// log(shownotes)
// log(colors.blue.inverse('success'))

// log(process.argv[2])

