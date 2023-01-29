import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";


export const createRoom = async (req, res, next) =>{
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms: savedRoom._id},
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
}

export const updateRoom = async (req,res,next) =>{
    try{
        const updatedRoom = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set : req.body}, 
            { new : true});
        res.status(200).json(updatedRoom)
    }catch(err){
        next(err);
    }
}

export const updateRoomAvaiablity = async (req,res,next) =>{
    try{
        console.log(req.body.dates)
        await Room.updateOne(
            { "roomNumbers._id" :  req.params.roomId },
            { $push : { "roomNumbers.$.unavailableDates" : req.body.dates } }, 
        );
        res.status(200).send("Room date has been updated.")
    }catch(err){
        next(err);
    }
}

export const deleteRoom = async (req,res,next) =>{
    try{
        await Room.findByIdAndDelete(req.params.roomId);
        try{
            await Hotel.findByIdAndUpdate(
                req.params.hotelId,
                { $pull : {rooms: req.params.roomId}}, 
                { new : true});
        }catch(err){
            next(err);
        }
        res.status(200).json("Room has been deleted.")
    }catch(err){
        next(err);
    }
}

export const getRoom = async (req,res,next) =>{
    try{
        const room = await Room.findById(
            req.params.id,
        );
        res.status(200).json(room)
    }catch(err){
        next(err);
    }
}

export const getAllRoom = async (req,res,next) =>{
    try{
        const rooms = await Room.find();
        res.status(200).json(rooms)
    }catch(err){
        next(err)
    }
}