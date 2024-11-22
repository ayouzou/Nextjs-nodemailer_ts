'use client'
import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {

  const handleFormSubmit = async (email: string) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        console.log("Email Send success.")
      }
      else {
        console.log('error while sending.')
      }
    } catch (error) {
      console.log('error while sending the email.', error)
    }
  }
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  );
}
