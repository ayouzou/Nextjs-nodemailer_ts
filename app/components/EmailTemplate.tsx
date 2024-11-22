import { Body, Container, Head, Heading, Html, Link, Preview, Text } from '@react-email/components'
import React from 'react'
interface EmailTemplateProps {
    email: string
}
const EmailTemplate: React.FC<EmailTemplateProps> = ({ email }) => {
    return (
        <Html>
            <Head>
                <Preview>
                    Confirme your Abonnement for newsLetter
                </Preview>
                <Body className='bg-gray-100 text-gray-900'>
                    <Container className='bg-white rounded-lg shadow-md p-6'>
                        <Heading className='text-xl font-bold mb-4'>
                            Welcome in newsLetter
                        </Heading>
                        <Text className='mb-4'>Welcome, thank you for your Register</Text>
                        <Text className='mb-4'>confirme your Abonnement by clicking on url:</Text>
                        <Link href={`http://localhost:3001/confirm?email=${email}`} className='text-blue-600 underline'>
                            confirme your Abonnement
                        </Link>
                        <Text>if you don't have account, ignore email.</Text>
                    </Container>
                </Body>
            </Head>
        </Html>
    )
}
export default EmailTemplate