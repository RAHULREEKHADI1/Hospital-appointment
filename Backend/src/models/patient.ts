import mongoose from "mongoose";
import User from "./users";


export interface IPatient extends mongoose.Document{
    userId : mongoose.Types.ObjectId;
    specialization: string;
    department: string;
    availableDays: string[];
    timeSlots: string[]; 
}

const patientSchema = new mongoose.Schema<IPatient>({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true,
    },
    specialization: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    availableDays:{
        type:[String],
        required:true,
        validate:{
            validator: (days:string[]) =>{
                const validDays = [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ];
                return days.every(d => validDays.includes(d));
            },
            message: "availableDays must contain valid day names only (e.g., Monday to Sunday)",
        }
    }
})  

const Patient = mongoose.model("Patient",patientSchema);
export default Patient;