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

            {/* Individual Tax Credits */}
            <h2 className="text-[#181311] text-lg sm:text-xl lg:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">
              Individual Tax Credits
            </h2>

            <div className="p-2 sm:p-4">
              <div className="border-t border-t-[#e6dfdb] py-4 sm:py-5">
                <p className="text-[#8a6e60] text-sm font-normal leading-normal mb-2">
                  Qualified Charitable Organization (QCO) Credit
                </p>
                <p className="text-[#181311] text-sm font-normal leading-normal">
                  Redirect up to 50% of your state income tax liability to eligible charitable organizations.
                </p>
              </div>
            </div>

            <div className="p-2 sm:p-4">
              <div className="border-t border-t-[#e6dfdb] py-4 sm:py-5">
                <p className="text-[#8a6e60] text-sm font-normal leading-normal mb-2">
                  Qualified Foster Care Charitable Organization (QFCCO) Credit
                </p>
                <p className="text-[#181311] text-sm font-normal leading-normal">
                  Redirect up to 50% of your state income tax liability to organizations supporting foster care.
                </p>
              </div>
            </div>

            <div className="p-2 sm:p-4">
              <div className="border-t border-t-[#e6dfdb] py-4 sm:py-5">
                <p className="text-[#8a6e60] text-sm font-normal leading-normal mb-2">
                  Educational Tax Home Organization (ETHO) Credit
                </p>
                <p className="text-[#181311] text-sm font-normal leading-normal">
                  Redirect up to 50% of your state income tax liability to organizations providing educational support
                  at home.
                </p>
              </div>
            </div>

            {/* Business Tax Credits */}
            <h2 className="text-[#181311] text-lg sm:text-xl lg:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">
              Business Tax Credits
            </h2>

            <div className="p-2 sm:p-4">
              <div className="border-t border-t-[#e6dfdb] py-4 sm:py-5">
                <p className="text-[#8a6e60] text-sm font-normal leading-normal mb-2">Economic Opportunity (ECO) Credit</p>
                <p className="text-[#181311] text-sm font-normal leading-normal">
                  Redirect up to 50% of your state corporate tax liability to organizations fostering economic
                  opportunities.
                </p>
              </div>
            </div>

            <div className="p-2 sm:p-4">
              <div className="border-t border-t-[#e6dfdb] py-4 sm:py-5">
                <p className="text-[#8a6e60] text-sm font-normal leading-normal mb-2">
                  Private Rehabilitation Charitable Organization (PRCO) Credit
                </p>
                <p className="text-[#181311] text-sm font-normal leading-normal">
                  Redirect up to 50% of your state corporate tax liability to organizations involved in private
                  rehabilitation.
                </p>
              </div>
            </div>

            <div className="p-2 sm:p-4">
              <div className="border-t border-t-[#e6dfdb] py-4 sm:py-5">
                <p className="text-[#8a6e60] text-sm font-normal leading-normal mb-2">
                  Educational Support Charitable Organization (ESCO) Credit
                </p>
                <p className="text-[#181311] text-sm font-normal leading-normal">
                  Redirect up to 50% of your state corporate tax liability to organizations providing educational
                  support.
                </p>
              </div>
            </div>

            {/* Eligible Organizations */}
            <h2 className="text-[#181311] text-lg sm:text-xl lg:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">
              Eligible Organizations
            </h2>
            <p className="text-[#181311] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4">
              Each tax credit program supports a specific category of nonprofits. You can view a list of eligible
              organizations under each program to make informed decisions about where to redirect your tax dollars.
              These organizations are vetted and approved by the state, ensuring your contributions support legitimate
              and impactful causes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
