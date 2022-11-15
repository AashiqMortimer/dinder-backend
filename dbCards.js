import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    mealID: String,
    title: String,
    image: String,
})

export default mongoose.model('cards', cardSchema)