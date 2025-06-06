// src/pages/Contact.jsx
export default function Contact() {
    return (
      <section className="p-8 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Name" className="p-2 border rounded" />
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <textarea rows="4" placeholder="Message" className="p-2 border rounded" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
        </form>
      </section>
    );
  }