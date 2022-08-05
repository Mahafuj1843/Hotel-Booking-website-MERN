import express from 'express'
import { updateUser, deleteUser, getUser, getAllUser } 
        from '../controllers/userController.js'
import { verifyUser, verifyAdmin } from '../utils/verify.js'

const router = express.Router()

//update
router.put('/:id', verifyUser,  updateUser)
//delete
router.delete('/:id', verifyUser, deleteUser)
//get
router.get('/:id', getUser)
//get all
router.get('/', verifyAdmin, getAllUser)

export default router