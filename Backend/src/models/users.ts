import mongoose, { Schema } from "mongoose";

export interface IUser extends mongoose.Document{
    firstName:string,
    lastName?:string,
    username:string,
    password:string,
}

const userSchema = new Schema<IUser>({
    firstName:{type:String,required:true},
    lastName:{type:String},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
},{
    timestamps:true,
})

const User = mongoose.model<IUser>("User",userSchema);
export default User ;

