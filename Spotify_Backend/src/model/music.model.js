// Collection/ Table for music 
const mongoose=require('mongoose')

const musicSchema=new mongoose.Schema({

    Uri: {
        type: String, 
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",   // Artist who has created the music his Id is stored
        required: true   // reference given is of user Schema as details is stored in user Schema only
    }
})

const musicModel=mongoose.model("music", musicSchema)

module.exports=musicModel;