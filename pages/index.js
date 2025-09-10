import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [msg, setMsg] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    const form = new FormData(e.target);
    const payload = {
      email: form.get('email'),
      firstName: form.get('firstName'),
      role: form.get('role'),
      consent: form.get('consent') === 'on'
    };
    setMsg('Submitting...');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (res.ok) {
        setMsg('Thank you — check your inbox to confirm subscription.');
        e.target.reset();
      } else {
        setMsg(json?.message || 'Submission failed. Try again later.');
      }
    } catch (err) {
      setMsg('Network error. Try again later.');
      console.error(err);
    }
  }

  return (
    <>
      <Head>
        <title>ROBOFLEX — Private Updates</title>
        <meta name="description" content="A private preview of the science and systems that redefine elite human performance." />
      </Head>

      <main style={{background:'#000',color:'#F5F6F7',minHeight:'100vh',padding:'48px',fontFamily:'Inter,system-ui'}}>
        <header style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{fontWeight:700,letterSpacing:2}}>ROBOFLEX</div>
          <div style={{opacity:0.8,fontSize:14}}>By invitation only</div>
        </header>

        <section style={{display:'flex',gap:48,marginTop:48,alignItems:'center'}}>
          <div style={{flex:1}}>
            <img src="/hero.jpg" alt="Roboflex hero" style={{width:'100%',maxHeight:420,objectFit:'cover',borderRadius:12,marginBottom:18}} />
            <h1 style={{fontSize:36,margin:'12px 0'}}>ROBOFLEX — Aerospace‑Grade Performance, By Invitation Only</h1>
            <p style={{color:'#9aa0a6',maxWidth:560}}>A private preview of the science and systems that redefine elite human performance. Join a curated list to receive invitation notices and rare technical updates.</p>
            <div style={{marginTop:18}}>
              <button onClick={()=>document.getElementById('email').focus()} style={{padding:'12px 18px',borderRadius:8,background:'#F5F6F7',color:'#000',border:0,fontWeight:600}}>Request Private Updates</button>
            </div>
          </div>

          <aside style={{width:380,background:'rgba(255,255,255,0.03)',padding:22,borderRadius:12}}>
            <form onSubmit={handleSubmit}>
              <label style={{fontSize:13,opacity:0.8}}>Email</label>
              <input id="email" name="email" type="email" required style={{width:'100%',padding:10,marginTop:6,marginBottom:12,borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.06)',color:'#fff'}}/>
              <label style={{fontSize:13,opacity:0.8}}>First name <small style={{opacity:0.7}}>(optional)</small></label>
              <input name="firstName" style={{width:'100%',padding:10,marginTop:6,marginBottom:12,borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.06)',color:'#fff'}}/>
              <label style={{fontSize:13,opacity:0.8}}>I am a</label>
              <select name="role" style={{width:'100%',padding:10,marginTop:6,marginBottom:12,borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.06)',color:'#fff'}}>
                <option value="">Select (optional)</option>
                <option>Investor</option>
                <option>Clinician</option>
                <option>Elite Athlete</option>
                <option>Prospective Owner</option>
                <option>Other</option>
              </select>

              {/* honeypot */}
              <input name="hp_field" style={{position:'absolute',left:-9999,opacity:0}}/>

              <label style={{display:'flex',gap:8,alignItems:'center'}}>
                <input name="consent" type="checkbox" required /> <span style={{opacity:0.8,fontSize:13}}>I agree to receive private updates</span>
              </label>

              <button type="submit" style={{width:'100%',padding:12,marginTop:12,background:'#F5F6F7',color:'#000',borderRadius:8,border:0}}>Request Updates</button>
            </form>
            <div style={{color:'#9aa0a6',marginTop:12,fontSize:13}}>{msg}</div>
          </aside>
        </section>

        <footer style={{marginTop:48,display:'flex',justifyContent:'space-between',opacity:0.7,fontSize:13}}>
          <div>By invitation only • Aerospace‑grade standards</div>
          <div>© Roboflex</div>
        </footer>
      </main>
    </>
  );
}