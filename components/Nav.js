import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="container">
      <Link href="/">Home</Link>
      <Link href="/comments">Comments</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}
