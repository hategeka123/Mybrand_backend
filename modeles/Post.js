const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    describition: {
        type: String,
        require:true
    },
    // image,
    date: {
        type: Date,
        defoult: Date.now
    },
})

module.exports = mongoose.model('posts', postSchema);