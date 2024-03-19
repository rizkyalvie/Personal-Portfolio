"use server"

import React from "react"

import ContactFormEmail from "@/email/contact-form-email"
import { validateString, getErrorMessage } from "@/lib/utils"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('email')
    const message = formData.get('message')

    //A statement to validate user's input with the first parameter being the anything that the users input
    //and second parameter being the max length of characters that users allowed to input
    if (!validateString(senderEmail, 500)){
        return ({
            error: "Invalid E-mail"
        })
    }

    if (!validateString(message, 5000)){
        return ({
            error: "Invalid message"
        })
    }

    let data;
    //A statement to be tested for errors while being executed
    try {
        //Injecting all of the properties and values that the user will send, mostly just the message and the user's email
        //because anything else is hardcoded
        data = await resend.emails.send({
            from: 'Portfolio Contact<onbarding@resend.dev>',
            to: 'alvienuryahya@gmail.com',
            subject: 'Personal Portfolio Email Service',
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail
            })
        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }
    
    return {
        data
    }
}