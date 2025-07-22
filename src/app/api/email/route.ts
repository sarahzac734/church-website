import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import Email from '@/emails/message'

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: Request) {
    const { firstName, lastName, email, comment, reason} = await request.json();

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'churchcalendar242@gmail.com',
        subject: reason,
        react: Email({firstName, lastName, email, comment})
      });

    return NextResponse.json({
        status:'ok'
    })
}