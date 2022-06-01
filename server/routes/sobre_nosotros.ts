import { Router } from 'express'
const router = Router();


import {getAllInformation, deleteInfo,updateInfo,createInfo } from '../controllers/sobre_nosotros'

// middleware
// router.use(upload.single('image'));

// routes
router.route('/')
    .get(getAllInformation);

router.route('/')
    .post(createInfo);
    
router.route('/:id')
    .put(updateInfo);

router.route('/:id')
    .delete(deleteInfo);


export default router;