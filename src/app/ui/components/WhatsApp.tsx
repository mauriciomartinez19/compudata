import Image from "next/image"
import Link from "next/link"

const WhatsApp = () => {
  return (
    <Link target="_blank" href="https://wa.me/+59899624437" className="fixed right-5 bottom-5 animate-bounce">
      <Image
        src='/images/WhatsApp.svg'
        width={60}
        height={60}
        alt="whats app icon"
      />
    </Link>
  )
}

export default WhatsApp
