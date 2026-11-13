import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:px-[7%]">
      <div className="mx-auto max-w-[1250px]">
        <SectionTitle title="Experience" />
        <div className="relative ml-4 border-l-2 border-brand/40 pl-8 md:ml-6 md:pl-12">
          <span className="absolute -left-[22px] top-2 flex h-10 w-10 items-center justify-center rounded-full bg-brand shadow-[0_0_24px_rgba(255,90,31,.7)]">
            <FaBriefcase />
          </span>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="glass rounded-3xl border border-brand/40 p-7 transition-shadow hover:shadow-[0_0_40px_rgba(255,90,31,.3)] md:p-9">
            <h3 className="text-2xl font-medium md:text-3xl">Frontend Developer</h3>
            <p className="mt-1 text-lg text-brand2">Zionetix Solutions</p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
              Working with my founding team at Zionetix Solutions to develop modern, responsive, and user-friendly web applications. Contributing to frontend development, UI implementation, and creating engaging digital experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
