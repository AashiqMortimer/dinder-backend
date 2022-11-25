import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    id: String, 
    user: String,
    title: String,
    image: String,
    sourceUrl: String,
    cookTime: String,
    servings: String
})

export default mongoose.model('cards', cardSchema)