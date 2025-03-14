import mongoose, { Schema } from 'mongoose'

const conversationSchema=new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',

    }],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Message',
            default:[],

        }
    ],
},{timestamps:true})

const Converstation = mongoose.model("Conversation",conversationSchema)

export default Converstation;