import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
    name:{ type:String},
    comment:{ type:String},
    created_at:{ type: Date, default: Date.now }
   
});

export default mongoose.model('Comments', commentSchema)