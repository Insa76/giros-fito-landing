import { band } from "@/app/data/band"

export default function WhatsAppFloat() {
  return (
    <a
      href={band.whatsapp}
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
    >
      💬
    </a>
  )
}
