import mongoose from 'mongoose';

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    role: {
        type: String,
        default: "user",
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required:true,
        minlength: 5,
        maxlength: 1024
    }
});
export default mongoose.model('User', user);