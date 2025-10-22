import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="container">{children}</main>
      <footer>© {new Date().getFullYear()} My Netlify Next.js Site</footer>
    </>
  )
}
