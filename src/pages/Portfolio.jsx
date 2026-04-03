import { projects } from '../data/projects'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  return (
    <div className="page">
      <div className={styles.wrapper}>
        <div className="section-label">All Work</div>
        <div className="section-title">Projects</div>
        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.id} className={styles.item}>
              <img src={p.img} alt={p.name} loading="lazy" />
              <div className={styles.overlay}>
                <div className={styles.name}>{p.name}</div>
                <div className={styles.caption}>
                  {p.location} — {p.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
      <Footer />
    </div>
  )
}
