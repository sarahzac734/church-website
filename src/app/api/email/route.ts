import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import Email from '@/emails/message'

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: Request) {
    const { firstName } = request.json();
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'churchcalendar242@gmail.com',
        subject: 'hello world :)',
        react: Email({
            firstName
        })
      });

    return NextResponse.json({
        status:'ok'
    })
}