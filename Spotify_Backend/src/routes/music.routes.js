const express=require('express');
const musicMiddleware=require('../middlewares/music.middleware')
const musicController=require('../controllers/music.controller')
const multer=require('multer')

const upload=multer({
    storage: multer.memoryStorage()
})

const router=express.Router();

router.post("/upload", musicMiddleware.authArtist, upload.single("music"), musicController.createMusic)
router.post("/album", musicMiddleware.authArtist, musicController.createAlbum)

router.get("/musics", musicMiddleware.authUser, musicController.getAllMusics)
router.get("/albums", musicMiddleware.authUser, musicController.getAllAlbums)
router.get("/album/:albumId", musicMiddleware.authUser, musicController.getAlbumById)

module.exports=router;





