import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')

export async function sendEmail({
  to,
  subject,
  react,
}: {
  to: string
  subject: string
  react: React.ReactElement
}) {
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to,
      subject,
      react,
    })
  } catch (error) {
    console.error('Failed to send email:', error)
    throw error
  }
}
