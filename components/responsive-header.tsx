"use client"

import Link from "next/link"
import { MobileMenu } from "./mobile-menu"

interface ResponsiveHeaderProps {
  currentPath?: string
}

export function ResponsiveHeader({ currentPath = "/" }: ResponsiveHeaderProps) {
  const navItems = [
    { href: "/about", label: "About Us" },
    { href: "/tax-credits", label: "Tax Credits" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="flex items-center justify-between border-b border-solid border-b-[#f5f1f0] px-4 sm:px-6 lg:px-10 py-3">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 sm:gap-4 text-[#181311] hover:text-[#f46a25] transition-colors"
      >
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">
          Greater Good MS
        </h2>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-6 lg:gap-8">
        <nav className="flex items-center gap-6 lg:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium leading-normal transition-colors ${
                currentPath === item.href
                  ? "text-[#f46a25]"
                  : "text-[#181311] hover:text-[#f46a25]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="https://www.dor.ms.gov/charitable-contribution-credits"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f46a25] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e55a1f] transition-colors"
        >
          <span className="truncate">Donate Now</span>
        </Link>
      </div>

      {/* Mobile Menu */}
      <MobileMenu currentPath={currentPath} />
    </header>
  )
}


