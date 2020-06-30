const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
}
const password = process.argv[2]
const url = 
    `mongodb+srv://fullstack:${password}@cluster0-cpxmk.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

// print the database
if (process.argv.length===3) {
    console.log('phonebook:')

    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
}

// add new person
if (process.argv.length>=4) {
    const name = process.argv[3]
    const number = process.argv[4] || ''

    const person = new Person({
        name: name,
        number: number
    })

    person.save().then(result => {
        console.log('person saved!')
        mongoose.connection.close()
    })
}





