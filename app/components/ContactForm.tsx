'use client'
import React, { useState } from 'react'

interface SignUpFormProps {
    onSubmit: (email: string) => void
}
const ContactForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('')
    const [isSubmited, setIsSubmitted] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true)
            onSubmit(email)
            setEmail('')
            setMessage('you need to verifie your email for continue register !')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='w-[500px] mx-auto p-4 bg-white shadow-md rounded-md'>
            <h2 className='text-xl font-bold mb-4 '>
                Newsletter
            </h2>
            <div className="mb-4">
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>E-mail</label>
                <input type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 
                '/>
            </div>
            <button type='submit' disabled={isSubmited} className={`w-full ${isSubmited ? 'bg-gray-400' : 'bg-slate-500 hover:bg-indigo-600'} text-white py-2 px-4 rounded-md`}>
                Register
            </button>
            {message && <p className='text-center text-green-600 mt-4'>{message}</p>}
        </form>
    )
}

export default ContactForm