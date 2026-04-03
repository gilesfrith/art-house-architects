import ContactForm from './ContactForm'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <h2 className={styles.heading}>Let's create something together</h2>

        <div className={styles.detail}>
          <div className={styles.detailLabel}>Phone</div>
          <div className={styles.detailValue}>
            <a href="tel:2066505388">206-650-5388</a>
          </div>
        </div>

        <div className={styles.detail}>
          <div className={styles.detailLabel}>Email</div>
          <div className={styles.detailValue}>
            <a href="mailto:susan@arthousearchitects.com">
              susan@arthousearchitects.com
            </a>
          </div>
        </div>

        <div className={styles.detail}>
          <div className={styles.detailLabel}>Studio</div>
          <div className={styles.detailValue}>
            23403 95th Place SW
            <br />
            Vashon, WA 98070
          </div>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}
