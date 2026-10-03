const musicModel=require('../model/music.model')
const albumModel=require('../model/album.model')
const {uploadFile}=require('../services/storage.services')

const createMusic=async(req, res)=>{

    const{title}=req.body;
    const file=req.file;

    const result=await uploadFile(file.buffer.toString("base64"));

    console.log("Result: ", result)

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const music=await musicModel.create({

        Uri: result.url,
        Title: title,
        Artist: req.user.id
    })

    res.status(201).json({

        message: "Music created Successfully",

        music: {
            id: music._id,
            Uri: music.Uri,
            Title: music.Title,
            Artist: music.Artist

        }
    })
}

const createAlbum=async(req, res)=>{

    // take title and musicId from request body or from the user
    const{title, musics}=req.body;

    const album=await albumModel.create({

        Title: title,
        Musics: musics,
        Artist: req.user.id
    })

    return res.status(200).json({

        message: "Music added andf album created Succesfully",

        album:{

            id: album._id,
            Title: album.Title,
            Musics: album.Musics,
            Artist: album.Artist
        }
    })
}

const getAllMusics=async(req, res)=>{

    const musics=await musicModel.find().populate("Artist", "Username Email");

    return res.status(200).json({

        message: "Musics fetched Scuuessfully",

        Musics: musics
    })
}

const getAllAlbums=async(req, res)=>{

    const albums=await albumModel.find().select("Title Artist").populate("Artist", "Username Email").limit(1);

    return res.status(200).json({

        message: "Albums fetched Successfully",

        Albums: albums
    })
}

const getAlbumById=async(req, res)=>{

    const albumId=req.params.albumId;

    const album=await albumModel.findById(albumId);

    return res.status(200).json({

        message: "Album fetched Successfully",

        album
    })

}

module.exports={createMusic, createAlbum, getAllMusics, getAllAlbums, getAlbumById}




