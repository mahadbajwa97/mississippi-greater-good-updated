"use client"

import type React from "react"
import { useState } from "react"
import { ResponsiveHeader } from "@/components/responsive-header"

export default function DonatePage() {
  const [formData, setFormData] = useState({
    amount: "",
    organization: "",
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Donation form submitted:", formData)
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white">
      <div className="layout-container flex h-full grow flex-col">
        <ResponsiveHeader currentPath="/donate" />

        {/* Main Content */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-2 sm:p-4">
              <h1 className="text-[#181311] tracking-light text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight">Donate Now</h1>
            </div>
            <p className="text-[#181311] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4">
              Your donation directly supports Mississippi communities, and you'll receive a dollar-for-dollar tax
              credit. Choose an amount below to get started.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-2xl">
              {/* Donation Amount */}
              <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-4 py-3">
                <label className="flex flex-col flex-1">
                  <p className="text-[#181311] text-sm sm:text-base font-medium leading-normal pb-2">Donation Amount</p>
                  <input
                    name="amount"
                    type="text"
                    placeholder="$"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-12 sm:h-14 placeholder:text-[#8a6e60] p-3 sm:p-4 text-sm sm:text-base font-normal leading-normal"
                    value={formData.amount}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              {/* Organization Selection */}
              <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-4 py-3">
                <label className="flex flex-col flex-1">
                  <p className="text-[#181311] text-sm sm:text-base font-medium leading-normal pb-2">Organization (Optional)</p>
                  <select
                    name="organization"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-12 sm:h-14 placeholder:text-[#8a6e60] p-3 sm:p-4 text-sm sm:text-base font-normal leading-normal"
                    value={formData.organization}
                    onChange={handleInputChange}
                  >
                    <option value="">Select an organization</option>
                    <option value="camp-kamassa">Camp Kamassa</option>
                    <option value="hope-village">Hope Village for Children</option>
                    <option value="pregnancy-choices">Center for Pregnancy Choices of Meridian</option>
                    <option value="boys-girls-club">Boys & Girls Clubs of East Mississippi</option>
                    <option value="ms-police-sheriffs">Mississippi Center for Police & Sheriffs</option>
                  </select>
                </label>
              </div>

              {/* Contact Information */}
              <h3 className="text-[#181311] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-2 pt-4">
                Contact Information
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-4 py-3">
                <label className="flex flex-col flex-1">
                  <p className="text-[#181311] text-sm sm:text-base font-medium leading-normal pb-2">First Name</p>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-12 sm:h-14 placeholder:text-[#8a6e60] p-3 sm:p-4 text-sm sm:text-base font-normal leading-normal"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-4 py-3">
                <label className="flex flex-col flex-1">
                  <p className="text-[#181311] text-sm sm:text-base font-medium leading-normal pb-2">Last Name</p>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-12 sm:h-14 placeholder:text-[#8a6e60] p-3 sm:p-4 text-sm sm:text-base font-normal leading-normal"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-4 py-3">
                <label className="flex flex-col flex-1">
                  <p className="text-[#181311] text-sm sm:text-base font-medium leading-normal pb-2">Email</p>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-12 sm:h-14 placeholder:text-[#8a6e60] p-3 sm:p-4 text-sm sm:text-base font-normal leading-normal"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              {/* Payment Information */}
              <h3 className="text-[#181311] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-2 pt-4">
                Payment Information
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-4 py-3">
                <label className="flex flex-col flex-1">
                  <p className="text-[#181311] text-sm sm:text-base font-medium leading-normal pb-2">Card Number</p>
                  <input
                    name="cardNumber"
                    type="text"
                    placeholder="Enter your card number"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-12 sm:h-14 placeholder:text-[#8a6e60] p-3 sm:p-4 text-sm sm:text-base font-normal leading-normal"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-4 py-3">
                <label className="flex flex-col flex-1">
                  <p className="text-[#181311] text-sm sm:text-base font-medium leading-normal pb-2">Expiration Date</p>
                  <input
                    name="expirationDate"
                    type="text"
                    placeholder="MM/YY"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-12 sm:h-14 placeholder:text-[#8a6e60] p-3 sm:p-4 text-sm sm:text-base font-normal leading-normal"
                    value={formData.expirationDate}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="flex flex-col flex-1">
                  <p className="text-[#181311] text-sm sm:text-base font-medium leading-normal pb-2">CVV</p>
                  <input
                    name="cvv"
                    type="text"
                    placeholder="Enter CVV"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-12 sm:h-14 placeholder:text-[#8a6e60] p-3 sm:p-4 text-sm sm:text-base font-normal leading-normal"
                    value={formData.cvv}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-4 py-3">
                <label className="flex flex-col flex-1">
                  <p className="text-[#181311] text-sm sm:text-base font-medium leading-normal pb-2">Billing Address</p>
                  <input
                    name="billingAddress"
                    type="text"
                    placeholder="Enter your billing address"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181311] focus:outline-0 focus:ring-0 border-none bg-[#f5f1f0] focus:border-none h-12 sm:h-14 placeholder:text-[#8a6e60] p-3 sm:p-4 text-sm sm:text-base font-normal leading-normal"
                    value={formData.billingAddress}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex px-2 sm:px-4 py-3">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 sm:h-14 px-5 flex-1 bg-[#f46a25] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#e55a1f] transition-colors"
                >
                  <span className="truncate">Submit Donation</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
