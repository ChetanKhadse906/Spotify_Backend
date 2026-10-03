const{ImageKit}=require('@imagekit/nodejs')

const ImageKitClient=new ImageKit({

    privateKey: process.env.ImageKit_PRIVATE_KEY
})

const uploadFile= async(file)=>{

    const result= await ImageKitClient.files.upload({

        file,
        fileName: "Musics"+ Date.now(),
        folder: "SpotifyBackend/Musics"
    })

    return result;
}

module.exports={uploadFile};