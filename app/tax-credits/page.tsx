"use client"
import { ResponsiveHeader } from "@/components/responsive-header"

export default function TaxCreditsPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white">
      <div className="layout-container flex h-full grow flex-col">
        <ResponsiveHeader currentPath="/tax-credits" />

        {/* Main Content */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Page Header */}
            <div className="flex flex-wrap justify-between gap-3 p-2 sm:p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-[#181311] tracking-light text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight">Tax Credits</h1>
                <p className="text-[#8a6e60] text-sm font-normal leading-normal">
                  Explore the various tax credit programs available in Mississippi that allow you to redirect your tax
                  dollars to support eligible nonprofits.
                </p>
              </div>
            </div>

            {/* MS DOR Link */}
            <div className="p-2 sm:p-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-[#181311] text-sm sm:text-base font-normal leading-normal mb-3">
                  For detailed information about Mississippi's tax credit programs, eligible organizations, and how to participate, visit the official Mississippi Department of Revenue website.
                </p>
                <a 
                  href="https://www.dor.ms.gov/charitable-contribution-credits" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#f46a25] text-white text-sm font-bold rounded-lg hover:bg-[#e55a1f] transition-colors"
                >
                  Visit MS Department of Revenue
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
