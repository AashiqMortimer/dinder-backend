import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    id: String,
    userID: String,
    title: String, 
    image: String,
    sourceURL: String,
    cookTime: String,
    servings: String
})
   /* {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        userID: {
            type: String,
            required: true,
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
})*/

export default mongoose.model('cards', cardSchema)