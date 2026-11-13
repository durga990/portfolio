import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { projects } from "../data";

// Cards use generated gradient art. To use real screenshots, add `image: "/projects/name.png"` in data.js.
const hues = ["from-[#FF5A1F] to-[#4a1503]", "from-[#FF8A3D] to-[#5a2206]", "from-[#e8431a] to-[#2d0e03]", "from-[#ff7a2f] to-[#3a1204]", "from-[#ff6a26] to-[#501a05]"];

export default function Projects() {
  return (
    <section id="projects" className="sec-bg px-6 py-24 md:px-[7%]">
      <div className="mx-auto max-w-[1250px]">
        <SectionTitle title="Projects" sub="Applications I have designed and built." />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }}
              whileHover={{ y: -8 }} className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors hover:border-brand/60 hover:shadow-[0_0_40px_rgba(255,90,31,.25)]">
              <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${hues[i % hues.length]}`}>
                {p.image ? <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover" /> : <FaCode className="text-6xl text-white/80 transition-transform duration-500 group-hover:scale-125" />}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-medium">{p.title}</h3>
                <p className="mt-2 flex-1 text-muted">{p.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => <li key={t} className="rounded-full border border-brand/40 px-3 py-1 text-sm text-brand2">{t}</li>)}
                </ul>
                <div className="mt-5 flex gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/30 py-2.5 transition hover:border-brand hover:text-brand"><FaGithub /> GitHub</a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand py-2.5 transition hover:bg-brand2"><FaExternalLinkAlt className="text-sm" /> Live Demo</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
