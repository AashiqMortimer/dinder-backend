import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    id: String, //mongo picks this
    //mealid: String, // this is the API id
    title: String,
    image: String,

})

export default mongoose.model('cards', cardSchema)