import { useEffect, useState } from "react";
import { HiOutlineDownload, HiMenuAlt3, HiX } from "react-icons/hi";
import { nav, profile } from "../data";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const go = (id) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-5 md:px-[7%]">
      <div className="mx-auto flex max-w-[1250px] items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); go("home"); }} className="font-logo text-3xl font-medium tracking-tight">
          durga.
        </a>

        <nav className="hidden rounded-full border border-white/80 bg-black/20 px-3 py-1.5 backdrop-blur-md md:block" aria-label="Main">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => go(n.id)}
                  aria-current={active === n.id ? "page" : undefined}
                  className={`rounded-full px-6 py-2 text-lg transition-all duration-300 hover:text-brand2 ${active === n.id ? "text-brand" : "text-white/80"}`}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={profile.resume}
          download
          className="hidden items-center gap-3 rounded-full border border-brand/80 px-5 py-2.5 text-left text-sm leading-tight transition hover:bg-brand/15 hover:shadow-[0_0_24px_rgba(255,90,31,.45)] md:flex"
        >
          <HiOutlineDownload className="text-2xl" />
          <span>Download<br />Resume</span>
        </a>

        <button className="rounded-full border border-white/60 bg-black/30 p-2.5 text-2xl backdrop-blur md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-[1250px] rounded-3xl border border-white/30 bg-black/85 p-4 backdrop-blur-xl md:hidden">
          {nav.map((n) => (
            <button key={n.id} onClick={() => go(n.id)} className={`block w-full rounded-xl px-4 py-3 text-left text-lg ${active === n.id ? "text-brand" : "text-white/85"}`}>
              {n.label}
            </button>
          ))}
          <a href={profile.resume} download className="mt-2 flex items-center gap-2 rounded-xl border border-brand/80 px-4 py-3 text-brand2">
            <HiOutlineDownload className="text-xl" /> Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
