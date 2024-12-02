"use client"
import { saveContactDetails } from "../actions/actions"

export default function Contact(){
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold">I would like to talk with you!</h1>
            <br />
            <br />
            <div>
                <form action={(e)=>{saveContactDetails(e); alert("Thanks for contacting")}}>
                    <input type="text" name="name" placeholder="Enter your name" className="border-2 border-white w-[358px] rounded-lg px-2 py-1" />
                    <br />
                    <br />
                    <input type="email" name="email" placeholder="Enter your email" className="border-2 border-white w-[358px] rounded-lg px-2 py-1" />
                    <br />
                    <br />
                    <input type="number" name="phone" placeholder="Enter your phone number" className="border-2 border-white w-[358px] rounded-lg px-2 py-1" />
                    <br />
                    <br />
                    <input type="text" name="message" placeholder="Enter your message" className="border-2 border-white text-black w-[358px] rounded-lg px-2 py-1" />
                    <br />
                    <br />
                    <button type="submit" className="bg-red-400 px-4 py-2 rounded-lg hover:bg-red-500 text-white">Submit</button>
                </form>
            </div>
        </div>
    )
}