import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className="page">
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <img
          className={styles.heroImg}
          src="/images/hero.jpg"
          alt="ART HOUSE architects — Pacific Northwest architecture"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>Residential Architecture — Vashon & Seattle</div>
          <h1 className={styles.heroTitle}>
            Architecture<br />as a way of<br />seeing
          </h1>
          <p className={styles.heroSub}>
            We work together to transform your ideas into spaces filled with sunlight,
            capturing views and using materials to add warmth to your surroundings.
          </p>
          <Link className={styles.heroCta} to="/portfolio">
            View Portfolio →
          </Link>
        </div>
        <div className={styles.scrollDot}>
          <div className={styles.scrollLine} />
          Scroll
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className={styles.featured}>
        <div className="section-label">Selected Work</div>
        <div className="section-title">Featured Projects</div>
        <div className={styles.featuredGrid}>
          {featuredProjects.map((p) => (
            <Link to="/portfolio" key={p.id} className={styles.card}>
              <img src={p.img} alt={p.name} loading="lazy" />
              <div className={styles.cardInfo}>
                <div className={styles.cardTitle}>{p.name}</div>
                <div className={styles.cardSub}>{p.location}</div>
                <div className={styles.cardDesc}>{p.description}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.allBtn}>
          <Link to="/portfolio" className={styles.outlineBtn}>
            View All Projects
          </Link>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <div className={styles.philosophyStrip}>
        <blockquote className={styles.philosophyQuote}>
          "Architecture has the ability to enhance our lives — breathing soul and magic
          into our built environment."
        </blockquote>
        <p className={styles.philosophyBody}>
          At ART HOUSE, we believe great architecture begins with listening. Every project
          is a conversation — about how you live, what you love, and how your home can
          better reflect who you are. Rooted in the Pacific Northwest, our work is shaped
          by the region's extraordinary light, landscape, and materials.
        </p>
      </div>

      <ContactSection />
      <Footer />
    </div>
  )
}
