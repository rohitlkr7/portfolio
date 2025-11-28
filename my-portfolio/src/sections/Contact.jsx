import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [toast, setToast] = useState({ show: false, type: "", msg: "" });

  const showToast = (type, msg) => {
    setToast({ show: true, type, msg });
    setTimeout(() => setToast({ show: false, type: "", msg: "" }), 4000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          showToast("success", "Message sent successfully!");
          form.current.reset();
        },
        () => showToast("error", "Something went wrong. Try again!")
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-black text-white flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-20 w-[40vw] h-[40vw] bg-cyan-400/30 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-[35vw] h-[35vw] bg-purple-500/20 blur-[150px] rounded-full animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-xl bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-lg"
      >
        <h2 className="text-4xl font-bold text-center mb-8">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          
          {/* Input */}
          <div className="relative">
            <input
              type="text"
              name="from_name"
              required
              className="w-full bg-transparent border border-white/30 rounded-xl p-4 text-white peer focus:border-cyan-400 transition"
              placeholder=" "
            />
            <label className="absolute left-4 top-4 text-gray-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-300 transition-all">
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="from_email"
              required
              className="w-full bg-transparent border border-white/30 rounded-xl p-4 text-white peer focus:border-cyan-400 transition"
              placeholder=" "
            />
            <label className="absolute left-4 top-4 text-gray-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-300 transition-all">
              Your Email
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              required
              className="w-full bg-transparent border border-white/30 rounded-xl p-4 text-white h-32 peer focus:border-cyan-400 transition"
              placeholder=" "
            />
            <label className="absolute left-4 top-4 text-gray-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-300 transition-all">
              Your Message
            </label>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold py-3 rounded-xl shadow-md hover:shadow-cyan-400/40 transition-all duration-200"
          >
            Send Message 🚀
          </button>
        </form>
      </motion.div>

      {/* Toast Message */}
      {toast.show && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-3 rounded-xl shadow-xl text-white font-medium backdrop-blur-xl ${
            toast.type === "success" ? "bg-green-500/70" : "bg-red-500/70"
          }`}
        >
          {toast.msg}
        </div>
      )}
    </section>
  );
};

export default Contact;
