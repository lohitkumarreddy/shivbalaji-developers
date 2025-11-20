export default function Contact() {
  async function handleSubmit(e:any){
    e.preventDefault()
    const form = new FormData(e.target)
    const body = Object.fromEntries(form.entries())
    await fetch('/api/leads', { method:'POST', body: JSON.stringify(body), headers: {'Content-Type':'application/json'} })
    alert('Thanks! We will contact you soon.')
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold">Contact Shivbalaji Developers</h1>
      <p className="text-gray-600 mt-2">We’re here to help — visit our office or drop a message.</p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <input name="name" className="w-full p-3 border rounded" placeholder="Your name" required />
        <input name="email" type="email" className="w-full p-3 border rounded" placeholder="Email" required />
        <input name="phone" className="w-full p-3 border rounded" placeholder="Phone" />
        <textarea name="message" className="w-full p-3 border rounded" placeholder="Message" />
        <button type="submit" className="px-6 py-3 bg-green-700 text-white rounded">Send Message</button>
      </form>
    </div>
  )
}
