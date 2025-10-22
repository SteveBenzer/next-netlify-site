import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <div>
      <h1>Contact</h1>
      {sent ? (
        <p>Thanks! Your message has been sent.</p>
      ) : (
        <form name="contact" method="POST" data-netlify="true" className="card" onSubmit={()=>setSent(true)}>
          <input type="hidden" name="form-name" value="contact" />
          <label>Your name<input name="name" required /></label>
          <label>Your email<input name="email" type="email" required /></label>
          <label>Message<textarea name="message" rows="5" required /></label>
          <button className="btn" type="submit">Send</button>
        </form>
      )}
      <p style={{color:'#666', marginTop:'.5rem'}}>This form uses <a href="https://docs.netlify.com/forms/setup/">Netlify Forms</a>. Enable reCAPTCHA or spam filters in your Netlify dashboard if needed.</p>
    </div>
  )
}
