import mongoose from 'mongoose';
//const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        min: 6, max: 12,
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
  },{timestamps: true}
  );

  export default mongoose.model("User", UserSchema)