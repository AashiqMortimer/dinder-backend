import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    userName: String,
    userID: String,
    pic: String,
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
      },
    userEmail: String,
    userPassword: String,
    apiKey: String,
    dietary: String, 
    intolerances: String
})

export default mongoose.model('users', userSchema)