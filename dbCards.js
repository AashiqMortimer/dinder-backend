import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    iD: String,
    title: String,
    image: String,
})

export default mongoose.model('cards', cardSchema)