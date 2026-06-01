function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          I&apos;m always interested in hearing about new projects and opportunities.
        </p>
        <div className="contact-links">
          <a
            href="https://github.com/gauravdahale"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/gauravdahale"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="mailto:gaurav@example.com" className="contact-link">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
