import { motion } from "framer-motion";
import { FaReact, FaJava, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
import Bolt from "./Bolt";
import PhotoFrame from "./PhotoFrame";
import useTyping from "./useTyping";
import { roles } from "../data";

const floaters = [
  { I: FaHtml5, c: "#E44D26", pos: "left-[16%] top-[14%]", rot: -18, d: 0 },
  { I: FaCss3Alt, c: "#1E88E5", pos: "left-[2%] top-[46%]", rot: 14, d: 0.6 },
  { I: FaNodeJs, c: "#6CC24A", pos: "left-[8%] bottom-[4%]", rot: -10, d: 1.1 },
  { I: FaReact, c: "#61DAFB", pos: "right-[0%] top-[24%]", rot: 12, d: 0.3 },
  { I: SiJavascript, c: "#F7DF1E", pos: "right-[4%] top-[2%]", rot: -8, d: 0.9 },
  { I: FaJava, c: "#F89820", pos: "right-[2%] bottom-[30%]", rot: 10, d: 1.4 },
  { I: SiMongodb, c: "#47A248", pos: "left-[30%] top-[0%]", rot: 8, d: 0.2 },
];

export default function Hero() {
  const typed = useTyping(roles);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="p-3 md:p-5">
      <div className="hero-bg relative mx-auto min-h-[100svh] max-w-[1500px] overflow-hidden rounded-[32px] border-[3px] border-white/35 md:rounded-[48px]">
        <Bolt className="pointer-events-none absolute -right-10 -top-6 hidden w-40 rotate-[20deg] md:block lg:w-56" />
        <Bolt className="pointer-events-none absolute -bottom-10 -left-8 hidden w-44 rotate-[-12deg] md:block" />

        <div className="relative mx-auto grid max-w-[1250px] items-center gap-6 px-6 pb-10 pt-32 md:px-[7%] lg:grid-cols-[1.1fr_1fr] lg:pt-36">
          {/* LEFT */}
          <div className="z-10">
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="text-2xl text-muted md:text-3xl">
              Hey, I&apos;m <span className="text-brand">Durga</span>
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-2 text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl xl:text-[84px]">
              Full Stack Developer
            </motion.h1>
            <p className="mt-5 h-9 text-2xl font-medium text-brand2 md:text-3xl" aria-live="polite">
              {typed}<span className="animate-pulse">|</span>
            </p>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted">
              I build modern, responsive, and user-friendly web applications using React, Java, and modern web technologies. Passionate about transforming ideas into real-world digital experiences.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button onClick={() => go("connect")} className="rounded-full bg-brand px-8 py-4 text-xl font-medium transition hover:-translate-y-0.5 hover:bg-brand2 hover:shadow-[0_0_30px_rgba(255,90,31,.6)]">
                Let&apos;s Connect
              </button>
              <a href="#connect" onClick={(e) => { e.preventDefault(); go("connect"); }} aria-label="Contact by email" className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-white/60 bg-white/5 text-3xl transition hover:border-brand hover:text-brand">
                <HiOutlineMail />
              </a>
            </div>
            <div className="mt-10 hidden h-px w-[75%] bg-white/15 lg:block" />

            {/* Glass card */}
            <motion.div whileHover={{ y: -6 }} className="glass mt-8 max-w-[420px] rounded-[28px] border border-brand/50 p-6 shadow-[0_0_30px_rgba(255,90,31,.25)] transition-shadow hover:shadow-[0_0_45px_rgba(255,90,31,.5)] lg:mt-10">
              <FaQuoteLeft className="text-3xl text-white" />
              <h2 className="mt-3 text-sm font-semibold tracking-wide text-brand2">MY DEVELOPER JOURNEY</h2>
              <p className="mt-2 leading-relaxed text-white/90">
                Passionate about technology, continuous learning, and building practical solutions through code.
              </p>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative mx-auto h-[460px] w-full max-w-[560px] sm:h-[560px] lg:h-[680px]">
            {[1, 0.78, 0.56].map((s, i) => (
              <motion.div key={i} animate={{ rotate: i % 2 ? -360 : 360 }} transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-[56%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15"
                style={{ width: `${s * 100}%` }}>
                <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-brand shadow-[0_0_12px_#FF5A1F]" />
              </motion.div>
            ))}
            <div className="absolute left-1/2 top-[56%] h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[90px]" />

            <PhotoFrame className="absolute bottom-0 left-1/2 h-[88%] w-auto max-w-[80%] -translate-x-1/2" />

            {floaters.map(({ I, c, pos, rot, d }, i) => (
              <motion.div key={i} animate={{ y: [0, -14, 0] }} transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: d, ease: "easeInOut" }}
                className={`absolute ${pos} flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black/55 text-3xl shadow-lg backdrop-blur sm:h-14 sm:w-14 sm:text-4xl`}
                style={{ color: c, rotate: rot }}>
                <I />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
