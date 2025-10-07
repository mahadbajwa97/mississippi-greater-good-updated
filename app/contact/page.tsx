"use client"

import type React from "react"
import { useState } from "react"
import { ResponsiveHeader } from "@/components/responsive-header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden font-sans">
      <div className="layout-container flex h-full grow flex-col">
        <ResponsiveHeader currentPath="/contact" />

        {/* Main Content */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-2 sm:p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-[#181311] tracking-light text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight">Contact Us</h1>
                <p className="text-[#8a6e60] text-sm font-normal leading-normal">
                  We're here to help! Reach out with any questions or inquiries about redirecting taxes to support
                  Mississippi nonprofits.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-4 py-3">
                <label className="flex flex-col flex-1">
                  <input
                    name="name"
                    placeholder="Your Name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-12 sm:h-14 placeholder:text-[#8a6e60] p-3 sm:p-4 text-sm sm:text-base font-normal leading-normal"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-4 py-3">
                <label className="flex flex-col flex-1">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-12 sm:h-14 placeholder:text-[#8a6e60] p-3 sm:p-4 text-sm sm:text-base font-normal leading-normal"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-4 py-3">
                <label className="flex flex-col flex-1">
                  <input
                    name="subject"
                    placeholder="Subject"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-12 sm:h-14 placeholder:text-[#8a6e60] p-3 sm:p-4 text-sm sm:text-base font-normal leading-normal"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-4 py-3">
                <label className="flex flex-col flex-1">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none min-h-32 sm:min-h-36 placeholder:text-[#8a6e60] p-3 sm:p-4 text-sm sm:text-base font-normal leading-normal"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className="flex px-2 sm:px-4 py-3 justify-start">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 sm:h-12 px-4 sm:px-6 bg-[#f46a25] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#e55a1f] transition-colors"
                >
                  <span className="truncate">Submit</span>
                </button>
              </div>
            </form>

            <h3 className="text-[#181311] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-2 pt-4">
              Contact Information
            </h3>
            <p className="text-[#181311] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4">Callie Rush Waite</p>
            <p className="text-[#181311] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4">
              Director of Donor Relations
            </p>
            <p className="text-[#181311] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4">Phone: (601) 938-3253</p>
            <p className="text-[#181311] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4 break-all">
              Email: callie.waite@greatergoodms.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
