import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    userID: String,
    userType: String,
    userEmail: String,
    userPassword: String,
    apiKey: String,
    dietary: String, 
    intolerances: String
})

export default mongoose.model('users', userSchema)