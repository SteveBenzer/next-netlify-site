import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="A simple Next.js site ready for Netlify" />
      </Head>

      <section className="hero" style={{backgroundImage:'url(/natural-hero.svg)', backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="card" style={{maxWidth:'740px', backdropFilter:'blur(3px)', background:'rgba(255,255,255,.85)'}}>
          <h1>Fresh air, simple stack.</h1>
          <p>This site is built with Next.js and tuned for Netlify. Explore the comments board, photo gallery, and a contact form that works with Netlify Forms—no backend required.</p>
          <div style={{display:'flex', gap:'.6rem', marginTop:'.6rem'}}>
            <Link className="btn" href="/comments">Open Comments</Link>
            <Link className="btn" href="/gallery">View Gallery</Link>
            <Link className="btn" href="/contact">Contact Me</Link>
          </div>
        </div>
      </section>

      <section style={{marginTop:'2rem'}} className="grid">
        <div className="card"><h3>Next.js</h3><p>Hybrid rendering, file-based routing, image optimization, and API routes.</p></div>
        <div className="card"><h3>Netlify</h3><p>CDN, build pipeline, deploy previews, and zero-config forms & functions.</p></div>
        <div className="card"><h3>Clean UI</h3><p>Minimal, responsive styling you can customize fast.</p></div>
      </section>
    </>
  )
}
