import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    image: { 
        type: String
    },

    describition: {
        type: String,
        require:true
    },
    
    date: {
        type: Date,
        defoult: Date.now
    },
})

export default new mongoose.model('Image', postSchema);