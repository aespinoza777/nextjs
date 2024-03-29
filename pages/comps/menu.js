import Link from 'next/link'


function Menu() {
  return (
    <ul>
      <li>
        <Link href="/"component={Home}>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
    </ul>
  )
}

export default Menu;