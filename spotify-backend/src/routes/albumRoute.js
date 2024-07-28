import expresss from 'express';
import { addAlbum,listAlbum,removeAlbum } from '../controllers/albumController.js';
import upload from '../middleware/multer.js';

const albumRouter = expresss.Router();

albumRouter.post('/add', upload.single('imageFile'), addAlbum);
albumRouter.get('/list', listAlbum);
albumRouter.post('/remove', removeAlbum);

export default albumRouter;