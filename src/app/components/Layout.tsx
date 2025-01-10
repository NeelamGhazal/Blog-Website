import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/fun-activities', label: 'Fun Activities' },
  { href: '/contact', label: 'Contact' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap" rel="stylesheet" />
      </Head>
      <header className="bg-teal-500 p-4 text-white h-[74px]">
        <nav className="container mx-auto flex flex-wrap justify-between items-center" style={{ fontFamily: 'Rubik Vinyl, sans-serif' }} >
          <Link href="/" className="text-3xl font-bold hover:text-pink-400 transition-colors">
            {/* Kids Blog */}
            <Image 
            src="/images/lg.png"
            alt="logo" 
            width={80} 
            height={80} 
            className="mt-[-15px]" />
          </Link>
          <ul className="flex space-x-4 mb-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-pink-400 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-teal-500 p-4 text-white text-center">
        <p>&copy; 2023 Kids Blog. All rights reserved.</p>
        <Link href="/privacy-policy" className="hover:text-pink-300 transition-colors">
          Privacy Policy
        </Link>
      </footer>
    </div>
  )
}

