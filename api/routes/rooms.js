import express from 'express'
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvaiablity } from '../controllers/roomController.js'
import { verifyAdmin, verifyToken } from '../utils/verify.js'

const router = express.Router()

//create
router.post('/:hotelId', verifyAdmin,  createRoom)
//update
router.put('/:id', verifyAdmin,  updateRoom)
router.put('/availability/:roomId', verifyToken, updateRoomAvaiablity)
//delete
router.delete('/:hotelId/:roomId', verifyAdmin, deleteRoom)
//get
router.get('/:id', getRoom)
//get all
router.get('/', getAllRoom)

export default router