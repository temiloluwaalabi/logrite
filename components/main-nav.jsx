'use client'
import {usePathname} from "next/navigation"
import { routes as menuRoute } from "@/utils/constants"
import Link from "next/link"
const MainNav = () => {
  const pathname = usePathname()
  const routes = menuRoute.map((route) => (
        {
          href: route.href,
          label: route.label,
          active: pathname === route.href
        }
    ))
  return (
    <>
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={`text-md font-medium transition-colors cursor-pointer hover:text-dark-blue ${route.active ? "text-dark-blue" : "text-neutral-500"}`}
          >
            {route.label}
          </Link>
        ))}
    </>
  )
}

export default MainNav