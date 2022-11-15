import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    id: String,
    mealID: String,
    title: String,
    image: String,

})

export default mongoose.model('cards', cardSchema)