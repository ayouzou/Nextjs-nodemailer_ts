import EmailTemplate from "@/app/components/EmailTemplate"
import { render } from "@react-email/render"
import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'
import { ReactElement } from "react"
console.log(process.env.GMAIL_USER as string)
console.log(process.env.GMAIL_PASS as string)
export async function POST(request: Request) {
    try {
        const { email } = await request.json()
        console.log("email", email)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER as string,
                pass: process.env.GMAIL_PASS as string
            }
        })

        const emailHtml = await render(EmailTemplate({ email }) as ReactElement)
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Confirm your Register.',
            html: emailHtml
        })
        return NextResponse.json({ message: "Email send successfully." }, { status: 200 })

    } catch (error) {
        console.log("error server", error)
        return NextResponse.json({ message: "error server", error }, { status: 500 })
    }
}