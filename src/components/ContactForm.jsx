import { useState } from 'react'
import styles from './ContactForm.module.css'

// 👇 Replace this with your Formspree form ID after signing up at formspree.io
const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success}>
        Thank you — Susan will be in touch soon.
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="name">Name</label>
        <input
          id="name"
          className={styles.input}
          name="name"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input
          id="email"
          className={styles.input}
          name="email"
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea
          id="message"
          className={styles.textarea}
          name="message"
          placeholder="Tell us about your project..."
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      {status === 'error' && (
        <p className={styles.error}>Something went wrong — please try again or email us directly.</p>
      )}

      <button
        className={styles.btn}
        type="submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
