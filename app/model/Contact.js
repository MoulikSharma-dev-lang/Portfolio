import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: Number, required: true, unique: true},
    message: {type: String, required: true}
})

const ContactUser = mongoose.models.Contact || mongoose.model("Contact", contactSchema)
export default ContactUser