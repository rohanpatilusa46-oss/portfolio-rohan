export default function Resume() {
  return (
    <section id="resume" className="section text-center">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>

      <p className="text-gray-400 max-w-xl mx-auto">
        Download my resume to learn more about my experience building
        scalable AI systems and ML infrastructure.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a href="/resume.pdf" className="btn-primary">
          Download Resume
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          className="btn-secondary"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}