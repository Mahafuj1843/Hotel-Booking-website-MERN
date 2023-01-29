import express from 'express'
import { createHotel, updateHotel, deleteHotel, getHotel, getAllHotel, countByCity } 
        from '../controllers/hotelController.js'
import { verifyAdmin } from '../utils/verify.js'

const router = express.Router()

//create
router.post('/', verifyAdmin,  createHotel)
//update
router.put('/:id', verifyAdmin,  updateHotel)
//delete
router.delete('/:id', verifyAdmin, deleteHotel)
//get
router.get('/find/:id', getHotel)
//get all
router.get('/', getAllHotel)

router.get('/countByCity', countByCity)
router.get('/countByType', getAllHotel)

export default router