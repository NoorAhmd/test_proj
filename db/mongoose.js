const mongoose = require('mongoose')

export const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://ahmad:<password>@cluster0.aqbyw.mongodb.net/?retryWrites=true&w=majority')
    } catch (error) {
        console.log(error)
    }
}
