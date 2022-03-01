const moongose = require('mongoose')

const authorSchema = moongose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = moongose.model('Author', authorSchema)