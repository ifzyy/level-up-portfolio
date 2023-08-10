import Link from "next/link"

function Nav() {
  return (
    <nav className="lg:flex flex-row justify-between p-10">
      <Link href="/test"> Johnson</Link>

      <ul className="lg:flex flex-row gap-4">
        <li><Link href="">Home</Link></li>
        <li><Link href="">About</Link></li>
        <li><Link href="">Portfolio</Link></li>
        <li><Link href="contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
