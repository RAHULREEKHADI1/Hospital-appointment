import mongoose, { Schema } from "mongoose";

export interface IService extends mongoose.Document{
    name:string,
    description:string,
    price:string,
    department:string,
}

const serviceSchema = new Schema<IService>({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true},
    department:{type:String,required:true}
})

const Service = mongoose.model("Service",serviceSchema);
export default Service;
