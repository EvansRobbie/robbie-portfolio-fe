import { EmailTemplate } from '@/components/shared/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const mailTo = process.env.RESEND_MAIL_TO;

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: `dev@evanrobbymacharia.com`,
      to: [mailTo as string],
      subject: 'Contact form submission',
      react: EmailTemplate({ message: body.message, email: body.email }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
