// src/pages/Contact.jsx
import { useState } from 'react'

function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Submitted: ${email}, ${message}`)
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required 
        />
        <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact