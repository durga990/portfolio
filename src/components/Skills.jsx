import { motion } from "framer-motion";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaChartBar, FaChartPie } from "react-icons/fa";
import { SiC, SiJavascript, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import SectionTitle from "./SectionTitle";
import { skills } from "../data";

const icons = {
  Java: FaJava, Python: FaPython, C: SiC, HTML: FaHtml5, CSS: FaCss3Alt, JavaScript: SiJavascript, "React.js": FaReact,
  "Node.js": FaNodeJs, "Express.js": SiExpress, "Java Backend": FaJava, MongoDB: SiMongodb, MySQL: SiMysql, SQL: FaDatabase,
  Git: FaGitAlt, GitHub: FaGithub, "VS Code": VscVscode, "Power BI": FaChartBar, Tableau: FaChartPie,
};

export default function Skills() {
  return (
    <section id="skills" className="sec-bg px-6 py-24 md:px-[7%]">
      <div className="mx-auto max-w-[1250px]">
        <SectionTitle title="Skills" sub="The languages, frameworks and tools I use to build full stack applications." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, gi) => (
            <motion.div key={g.group} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.06 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-6 transition-colors hover:border-brand/60">
              <h3 className="mb-5 text-xl font-medium text-brand2">{g.group}</h3>
              <div className="flex flex-wrap gap-3">
                {g.items.map((s) => {
                  const Icon = icons[s] || FaDatabase;
                  return (
                    <motion.span key={s} whileHover={{ y: -5, scale: 1.05 }}
                      className="flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-white/90 transition-shadow hover:border-brand hover:shadow-[0_0_20px_rgba(255,90,31,.45)]">
                      <Icon className="text-xl text-brand" /> {s}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}