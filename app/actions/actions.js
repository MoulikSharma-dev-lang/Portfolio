"use server"
import { connectDb } from "../db/connectDb"
import ContactUser from "../model/Contact"

export const saveContactDetails = async (e) => {
    try {
        const body = Object.fromEntries(e)
        connectDb()
        await ContactUser.create({
            name: body.name,
            email: body.email,
            phone: body.phone,
            message: body.message
        })
        const successResponse = {
            data: "Contact details has been saved!",
            success: true
        }
        console.log(body.phone)
        return successResponse
    } catch (error) {
        console.log(error)
        const errorResponse = {
            data: "Internal server error",
            success: false
        }
        return errorResponse
    }
}