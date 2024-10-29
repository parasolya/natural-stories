import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <Link href="about">About Us</Link>
      <Link href="shop">Shop</Link>
      <Link href="blog">Blog</Link>
    </div>
  )
}

export default Header