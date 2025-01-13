'use client'

import { useState } from 'react'
import Layout from '../components/Layout'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message })
    setSubmitted(true)
  }

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center font-nunito text-blue-600">Contact Us</h1>
      {submitted ? (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-[24rem]" role="alert">
          <p className="font-bold">Thank you!</p>
          <p>Your message has been sent. We&apos;ll get back to you soon!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white bg-green-100 border-l-4 text-green-700 rounded-lg shadow-lg p-6 h-[40rem] mb-24">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
            {/* <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label> */}
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Send Message
          </button>
        </form>
      )}
    </Layout>
  )
}

