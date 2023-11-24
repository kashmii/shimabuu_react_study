import Link from 'next/link'
import classes from './header.module.css'

const NAV_ITEMS = [
  { href: '/', label: 'Index' },
  { href: '/about', label: 'About' },
]

export function Header() {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <div className={classes.anchor}>{item.label}</div>
          </Link>
        )
      })
      }
    </header>
  )
}
