import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Roboflex — Ultra‑Luxury Performance System</title>
        <meta
          name="description"
          content="From NASA black project to private ownership — the Roboflex exoskeletal performance system."
        />
      </Head>

      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>ROBOFLEX</h1>
        <h2>From NASA Black Project to Private Ownership</h2>
        <button
          onClick={() => {
            const formSection = document.getElementById('apply');
            if (formSection) {
              formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          Request Private Access
        </button>
      </div>

      {/* Intro Section */}
      <section className={styles.section}>
        <h3>Engineered in Secrecy</h3>
        <p>
          For 25 years, this technology was classified by the U.S. military. Engineered to harden astronauts for deep space missions and fighter pilots for 10G maneuvers, Roboflex is now available for private ownership for the first time.
        </p>
      </section>

      {/* Scarcity Section */}
      <section className={styles.section}>
        <h3>Scarcity</h3>
        <p>
          <strong>Limited to 10 Original NASA‑Spec Units</strong>
          <br />
          Each unit is hand-built from aerospace alloys and precision-crafted to military tolerances. No future units will match this specification.
        </p>
      </section>

      {/* Application Form */}
      <section id="apply" className={styles.section}>
        <h3>Apply for Consideration</h3>
        <form
          className={styles.form}
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = {
              name: e.target.name.value.trim(),
              email: e.target.email.value.trim(),
              message: e.target.message.value.trim(),
            };

            try {
              const res = await fetch('/api/submit-application', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
              });

              const data = await res.json();
              console.log('API Response:', data);

              if (res.ok) {
                alert('✅ Application submitted successfully!');
                e.target.reset();
              } else {
                alert(`❌ Error: ${data.error || 'Unknown error occurred'}`);
              }
            } catch (err) {
              console.error('❌ Fetch Error:', err);
              alert('❌ Network error while submitting. Please try again later.');
            }
          }}
        >
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Message / Intent"
            rows="4"
          ></textarea>
          <button type="submit">Submit Application</button>
        </form>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        Roboflex™ — By Invitation Only. All Rights Reserved.
      </footer>
    </>
  );
}