import { motion } from "framer-motion";
import PhotoFrame from "./PhotoFrame";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-[7%]">
      <div className="mx-auto grid max-w-[1250px] items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative mx-auto h-[420px] w-full max-w-[420px]">
          <div className="absolute inset-6 rounded-full bg-brand/25 blur-[80px]" />
          <div className="absolute inset-0 rounded-full border border-white/15" />
          <div className="absolute inset-8 rounded-full border border-brand/30" />
          <PhotoFrame className="absolute bottom-0 left-1/2 h-[95%] w-auto max-w-[85%] -translate-x-1/2" />
        </motion.div>
        <div>
          <SectionTitle title="About me" />
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m Durga, a B.Tech Computer Science and Engineering student at Sri Vasavi Institute of Engineering and Technology. I work as a Full Stack, MERN Stack, Java and Frontend developer, turning ideas into responsive, usable web applications.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            I am a Frontend Developer at Zionetix Solutions, a company I started with my friends. I enjoy learning new technologies and building practical solutions with clean, maintainable code.
          </p>
          <dl className="mt-8 grid max-w-md grid-cols-2 gap-4">
            {[["Degree", "B.Tech CSE"], ["Role", "Frontend Developer"], ["Company", "Zionetix Solutions"], ["Focus", "MERN & Java"]].map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <dt className="text-sm text-muted">{k}</dt>
                <dd className="mt-1 font-medium text-brand2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
