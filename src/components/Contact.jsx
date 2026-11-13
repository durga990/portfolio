import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { profile } from "../data";

const inputCls = "w-full rounded-2xl border border-white/15 bg-black/40 px-5 py-3.5 text-white placeholder:text-white/40 outline-none transition focus:border-brand focus:shadow-[0_0_20px_rgba(255,90,31,.35)]";

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });

  // Opens the visitor's email app with the message pre-filled, addressed to your email in data.js.
  const submit = (e) => {
    e.preventDefault();
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio message from " + f.name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const links = [
    { I: FaEnvelope, label: "Email", text: profile.email, href: `mailto:${profile.email}` },
    { I: FaLinkedin, label: "LinkedIn", text: "Connect on LinkedIn", href: profile.linkedin },
    { I: FaGithub, label: "GitHub", text: "See my code", href: profile.github },
  ];

  return (
    <section id="connect" className="sec-bg px-6 pb-16 pt-24 md:px-[7%]">
      <div className="mx-auto max-w-[1250px]">
        <SectionTitle title="Let's work together" sub="Have a project or an opportunity in mind? Send me a message." />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {links.map(({ I, label, text, href }) => (
              <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noreferrer"
                className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-brand/60 hover:shadow-[0_0_30px_rgba(255,90,31,.25)]">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/15 text-2xl text-brand"><I /></span>
                <span><span className="block text-sm text-muted">{label}</span><span className="break-all font-medium">{text}</span></span>
              </a>
            ))}
          </div>
          <form onSubmit={submit} className="glass space-y-4 rounded-3xl border border-brand/30 p-6 md:p-8">
            <label className="block"><span className="sr-only">Name</span><input required className={inputCls} placeholder="Your name" value={f.name} onChange={on("name")} /></label>
            <label className="block"><span className="sr-only">Email</span><input required type="email" className={inputCls} placeholder="Your email" value={f.email} onChange={on("email")} /></label>
            <label className="block"><span className="sr-only">Message</span><textarea required rows={5} className={inputCls} placeholder="Your message" value={f.message} onChange={on("message")} /></label>
            <button type="submit" className="w-full rounded-full bg-brand py-4 text-lg font-medium transition hover:bg-brand2 hover:shadow-[0_0_30px_rgba(255,90,31,.6)]">Send message</button>
            {sent && <p role="status" className="text-center text-brand2">Your email app opened with the message ready to send.</p>}
          </form>
        </div>
        <p className="mt-16 text-center text-sm text-muted">© {new Date().getFullYear()} Durga. Built with React, Tailwind CSS and Framer Motion.</p>
      </div>
    </section>
  );
}
