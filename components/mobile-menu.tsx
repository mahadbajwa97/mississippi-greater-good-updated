"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface MobileMenuProps {
  currentPath?: string
}

export function MobileMenu({ currentPath = "/" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { href: "/about", label: "About Us" },
    { href: "/tax-credits", label: "Tax Credits" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMenu} />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <Link
                href="/"
                className="flex items-center gap-2 text-[#181311] hover:text-[#f46a25] transition-colors"
                onClick={toggleMenu}
              >
                <div className="size-4">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                  </svg>
                </div>
                <span className="text-lg font-bold">Greater Good MS</span>
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="p-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    currentPath === item.href
                      ? "text-[#f46a25] bg-orange-50"
                      : "text-[#181311] hover:text-[#f46a25] hover:bg-gray-50"
                  }`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="https://www.dor.ms.gov/charitable-contribution-credits"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-6 py-3 px-4 text-center bg-[#f46a25] text-white text-sm font-bold rounded-xl hover:bg-[#e55a1f] transition-colors"
                onClick={toggleMenu}
              >
                Tax Credits
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}


