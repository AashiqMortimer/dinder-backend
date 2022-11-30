import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    sourceURL: {
        type: String,
        required: true,
    },
    cookTime: {
        type: String,
        required: true,
    },
    servings: {
        type: String,
        required: true,
    },

}, {
    timestamps: true,
})

export default mongoose.model('cards', cardSchema)