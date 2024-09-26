import { DATA } from '@/_data/resume';
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  email,
}) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={
            'https://res.cloudinary.com/dqg83cf9f/image/upload/v1724797770/IMG_0731_yadrdq.jpg'
          }
          width='50'
          height='50'
          alt='Evans Robby Macharia'
          // @ts-ignoreß
          style={{
            ...logo,
            width: '50px',
            height: '50px',
          }}
        />
        <Text style={paragraph}>Hi There,</Text>
        <Text style={paragraph}>{message}</Text>

        <Text style={paragraph}>
          Best,
          <br />
          {email}
        </Text>
        <Hr style={hr} />
        <Button style={footer} href={DATA.url}>
          {DATA.name}
        </Button>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
  borderRadius: '50%',
  objectFit: 'cover',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#5F51E8',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
