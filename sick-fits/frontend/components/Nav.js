import Link from 'next/link'

const Nav = () => (
  <div>
    <Link href="/">
      <a>Dorthy!</a>
    </Link>
    <Link href="/sell">
      <a>Sell out!</a>
    </Link>
  </div>
)

export default Nav