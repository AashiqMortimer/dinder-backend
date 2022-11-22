import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    _id: String, //mongo picks this
    id: String, // this is the API id
    title: String,
    image: String,

})

export default mongoose.model('cards', cardSchema)