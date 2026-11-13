export default function SectionTitle({ title, sub }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-medium tracking-tight md:text-6xl">{title}</h2>
      {sub && <p className="mt-3 max-w-xl text-lg text-muted">{sub}</p>}
      <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand to-brand2" />
    </div>
  );
}
