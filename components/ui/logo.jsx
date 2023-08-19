import Image from "next/image"
import Link from "next/link"
const Logo = () => {
  return (
    <Link
        href="/" 
        className="flex align-center justify-center p-1"
    >
        <Image 
            alt="Logo"
            width={150}
            height={150}
            src="/assets/logo.png"
            className="object-cover object-center"
        />
    </Link>
  )
}

export default Logo