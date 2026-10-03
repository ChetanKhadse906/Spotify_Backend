const mongoose=require('mongoose');

// create Schema for album 
const albumSchema=new mongoose.Schema({

    Title:{
        type: String,
        required: true
    },
    Musics:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "music"
    }],
    Artist:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
})

// create model
const albumModel=mongoose.model("album", albumSchema);

module.exports=albumModel;