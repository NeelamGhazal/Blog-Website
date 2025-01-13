'use client'

import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/fun-activities', label: 'Fun Activities' },
  { href: '/contact', label: 'Contact' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800">
      <header className="bg-teal-500 p-4 text-white">
        <nav className="container mx-auto flex flex-wrap justify-between items-center" style={{ fontFamily: 'Rubik Vinyl, sans-serif' }}>
          <Link href="/" className="text-3xl font-bold hover:text-pink-400 transition-colors">
            <Image 
              src="/images/lg.png"
              alt="logo" 
              width={80} 
              height={80} 
              className="mt-[-15px]" 
            />
          </Link>
          <button
            className="lg:hidden text-white hover:text-pink-400 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          <ul className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:space-x-4 w-full lg:w-auto mt-4 lg:mt-0`}>
            {navItems.map((item) => (
              <li key={item.href} className="mb-2 lg:mb-0">
                <Link href={item.href} className="block hover:text-pink-400 transition-colors">
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


















// import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'

// const navItems = [
//   { href: '/', label: 'Home' },
//   { href: '/about', label: 'About' },
//   { href: '/fun-activities', label: 'Fun Activities' },
//   { href: '/contact', label: 'Contact' },
// ]

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="min-h-screen bg-yellow-50 text-gray-800">
//       <header className="bg-teal-500 p-4 text-white h-[74px]">
//         <nav className="container mx-auto flex flex-wrap justify-between items-center" style={{ fontFamily: 'Rubik Vinyl, sans-serif' }} >
//           <Link href="/" className="text-3xl font-bold hover:text-pink-400 transition-colors">
//             {/* Kids Blog */}
//             <Image 
//             src="/images/lg.png"
//             alt="logo" 
//             width={80} 
//             height={80} 
//             className="mt-[-15px]" />
//           </Link>
//           <ul className="flex space-x-4 mb-4">
//             {navItems.map((item) => (
//               <li key={item.href}>
//                 <Link href={item.href} className="hover:text-pink-400 transition-colors">
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </header>
//       <main className="container mx-auto p-4">
//         {children}
//       </main>
//       <footer className="bg-teal-500 p-4 text-white text-center">
//         <p>&copy; 2023 Kids Blog. All rights reserved.</p>
//         <Link href="/privacy-policy" className="hover:text-pink-300 transition-colors">
//           Privacy Policy
//         </Link>
//       </footer>
//     </div>
//   )
// }

