import Container from "@/app/components/layout/Container"
import FadeIn from "@/app/components/animations/FadeIn"

export default function MediaSection() {
  return (
    <section id="media" className="py-28 bg-muted">
      <Container>

        <FadeIn>
          <h2 className="text-3xl font-semibold text-center mb-12">
            En vivo
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="aspect-video rounded-xl overflow-hidden border border-border shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              allowFullScreen
            />
          </div>
        </FadeIn>

      </Container>
    </section>
  )
}
