export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight">
      {children}
    </h2>
  )
}
