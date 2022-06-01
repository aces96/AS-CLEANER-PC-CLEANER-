import express from 'express'
const  router = express.Router();
import {getFileSize, deleteFiles} from '../controllers/files.controller'




router.route('/getFile')
        .get(getFileSize)



export default router;