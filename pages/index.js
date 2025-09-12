import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Roboflex — Ultra‑Luxury Performance System</title>
        <meta
          name="description"
          content="From military black project to private ownership — the Roboflex exoskeletal performance system."
        />
      </Head>

      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>ROBOFLEX</h1>
        <h2>From Military Black Project to Private Ownership</h2>
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
          For 25 years, this technology was classified by the U.S. military. Originally engineered to harden astronauts for deep space missions and fighter pilots for 10G maneuvers, the technology was obtained by the military after 9/11 to be part of their "Iron Man" project. When that project recently ended, the original tech and the portfolio of advanced, formerly secret IP was returned to the inventor. After decades of military service, Roboflex is now available for private ownership to an extremely limited and discerning clientele. Roboflex is not about fitness. It's about life power mastery, performance longevity, and career extension, as well as skill enhancement, mental clarity, and psychological focus. The health benefits are just icing on the cake.
        </p>
      </section>

      {/* Scarcity Section */}
      <section className={styles.section}>
        <h3>Scarcity</h3>
        <p>
          <strong>Unit #1 of 10 Now Available - Only 10 Limited Edition Original NASA‑Spec Units In The World</strong>
          <br />
          Recovered from a military warehouse, each NASA OG unit is hand-built and precision-crafted to aerospace tolerances. These special units are pieces of history as much as they are collectible art. All 10 units are still in pristine condition and are being updated with current computers, sensors, luxury styling, and a healthy dose of formerly secret technology. No future units will match this original specification. This is a once in a lifetime opportunity to own a piece of technological history more rare than a Bugatti, more elite than a Gulfstream, and actually harder to obtain than many hard assets. It fits nicely on a yacht, too. If you appreciate fine engineering, incredible manufacturing, and performance beyond what is available anywhere at any price, Roboflex is for you.
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