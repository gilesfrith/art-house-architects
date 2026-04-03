import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import styles from './About.module.css'

export default function About() {
  return (
    <div className="page">
      {/* ── Header image ── */}
      <div className={styles.hero}>
        <img
          src="/images/about-header.jpg"
          alt="ART HOUSE architects studio"
        />
        <div className={styles.heroText}>
          <h1>About Us</h1>
        </div>
      </div>

      {/* ── Body ── */}
      <div className={styles.body}>
        {/* Philosophy */}
        <div className={styles.philosophy}>
          <div className="section-label">Philosophy</div>
          <p>
            Architecture has the ability to enhance our lives — breathing soul and magic
            into our built environment, surprising us with unexpected views, and reminding
            us to pause in our busy, hectic lifestyles. To feel the warmth of a wood
            railing under our fingertips or the rough texture of hewn stone on a bench
            soaking up sunlight in a garden invites us to pause and be present.
          </p>
          <p>
            At ART HOUSE, we will work together to define your dreams and goals for your
            project. We can help visualize how to transform these ideas into spaces that
            are filled with sunlight, capture views and use materials to add warmth and
            comfort to your surroundings.
          </p>
          <p>
            Living in the Pacific Northwest we are surrounded by breathtaking landscapes,
            evergreen forests, snow-capped mountains, and rocky beaches strewn with
            driftwood logs. Let us work together to be inspired by this incredible natural
            scenery and create architecture that strengthens our sense of place in this
            stunning landscape we call home.
          </p>
        </div>

        <div className="divider" />

        {/* Bio */}
        <div className="section-label">The Architect</div>
        <div className={styles.bioGrid}>
          <img
            className={styles.bioPhoto}
            src="/images/susan-frith.jpg"
            alt="Susan Frith, Principal Architect"
          />
          <div>
            <div className={styles.bioName}>Susan Frith</div>
            <div className={styles.bioTitle}>Owner / Principal Architect</div>
            <p className={styles.bioText}>
              I started my solo practice in 2014 to follow my passion for architecture
              while incorporating my love of painting into my work. Every project is an
              opportunity to create something that endures — spaces that feel inevitable
              in hindsight, yet transform how people move through their daily lives.
            </p>
            <p className={styles.bioText}>
              I live with my husband and two daughters on Vashon Island, where I enjoy
              the natural beauty of this region every day. My hobbies include painting
              with oils and watercolors, and hiking and camping with my family.
            </p>
            <div className={styles.bioContact}>
              <a href="tel:2066505388">206-650-5388</a>
              <a href="mailto:susan@arthousearchitects.com">
                susan@arthousearchitects.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </div>
  )
}
