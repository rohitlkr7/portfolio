import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [toast, setToast] = useState({ show: false, type: "", msg: "" });

  const showToast = (type, msg) => {
    setToast({ show: true, type, msg });
    setTimeout(() => setToast({ show: false, type: "", msg: "" }), 3500);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      showToast("success", "Message sent successfully!");
      form.current.reset();
    }).catch(() => showToast("error", "Failed to send. Try again."));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 relative">
      {/* blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 -left-20 w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw] bg-gradient-to-r from-cyan-600 to-purple-600 opacity-30 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw] bg-gradient-to-r from-purple-500 to-cyan-400 opacity-30 blur-[100px] rounded-full animate-pulse delay-500"></div>
      </div>

      <motion.form ref={form} onSubmit={sendEmail} className="relative z-10 w-full max-w-lg bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <div className="flex flex-col gap-4">
          <input name="from_name" placeholder="Your name" required className="bg-black/30 p-3 rounded-md border border-white/10" />
          <input name="from_email" type="email" placeholder="Your email" required className="bg-black/30 p-3 rounded-md border border-white/10" />
          <textarea name="message" placeholder="Your message" rows="5" required className="bg-black/30 p-3 rounded-md border border-white/10" />
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-xl">Send Message</button>
        </div>
      </motion.form>

      {toast.show && (
        <div className={`fixed bottom-6 right-6 px-5 py-3 rounded-xl text-white ${toast.type === "success" ? "bg-green-500/80" : "bg-red-500/80"}`}>
          {toast.msg}
        </div>
      )}
    </section>
  );
}
