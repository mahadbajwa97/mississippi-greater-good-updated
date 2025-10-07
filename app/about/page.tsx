"use client"
import { Phone, Envelope } from "@phosphor-icons/react"
import { ResponsiveHeader } from "@/components/responsive-header"

export default function AboutPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white">
      <div className="layout-container flex h-full grow flex-col">
        <ResponsiveHeader currentPath="/about" />

        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-2 sm:p-4">
              <h1 className="text-[#181311] tracking-light text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight">About Us</h1>
            </div>

            <p className="text-[#181311] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4">
              At Greater Good MS, our mission is to empower and equip Mississippi's non-profit organizations by
              connecting them with donors through innovative tax credit programs of Mississippi. Rooted in Christian
              values, we serve as a trusted liaison, fostering generosity and stewardship to advance the greater good
              across Mississippi. By building lasting partnerships between non-profits and supporters, we strive to
              impact people, strengthen communities, and glorify God through every gift given and life changed.
            </p>

            <h2 className="text-[#181311] text-lg sm:text-xl lg:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">
              Our Mission
            </h2>
            <p className="text-[#181311] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4">
              We facilitate the redirection of tax dollars towards impactful non-profit initiatives through
              Mississippi's Children's Promise Act and Pregnancy Resource Act. These programs allow businesses and
              individuals to receive dollar-for-dollar tax credits while supporting eligible nonprofits that provide
              critical services to children and families across our beautiful state. Every redirected tax dollar becomes
              an investment in Mississippi's children and families.
            </p>

            <h2 className="text-[#181311] text-lg sm:text-xl lg:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">
              Our Values
            </h2>
            <div className="text-[#181311] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4">
              <p className="mb-4">At Greater Good MS, we are guided by the following core values:</p>
              <ul className="space-y-3">
                <li>
                  <strong>Generosity:</strong> We believe in the power of giving and encourage a spirit of generosity
                  among taxpayers and businesses.
                </li>
                <li>
                  <strong>Stewardship:</strong> We are committed to responsible stewardship of resources, ensuring that
                  redirected tax dollars are utilized effectively and efficiently.
                </li>
                <li>
                  <strong>Community Impact:</strong> We strive to create a positive and lasting impact on communities
                  throughout Mississippi by supporting vital non-profit programs.
                </li>
                <li>
                  <strong>Integrity:</strong> We operate with the highest ethical standards, maintaining transparency
                  and accountability in all our activities.
                </li>
                <li>
                  <strong>Faith:</strong> Our work is grounded in Christian values, reflecting our commitment to serving
                  others and building a more compassionate society.
                </li>
              </ul>
            </div>

            <h2 className="text-[#181311] text-lg sm:text-xl lg:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">
              Our History
            </h2>
            <p className="text-[#181311] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4">
              Greater Good MS was established to maximize the impact of Mississippi's charitable tax credit programs.
              Since our inception, we have successfully facilitated the redirection of tax credits to support a wide
              range of non-profit organizations and their impactful programs. We currently represent six approved
              beneficiaries under the Children's Promise Act and Mississippi's Pregnancy Resource Act, each providing
              life-changing programs for the most vulnerable. Our journey has been marked by collaboration, innovation,
              and a steadfast commitment to our mission.
            </p>

            <h2 className="text-[#181311] text-lg sm:text-xl lg:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">
              Our Team
            </h2>
            
            {/* Team Member Photos and Bios */}
            <div className="grid gap-6 md:grid-cols-2 px-2 sm:px-4 py-4">
              {/* Boss Photo */}
              <div className="flex flex-col items-center text-center">
                <img 
                  src="/headshot for GG.JPG" 
                  alt="Team Member" 
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-bold text-[#181311] mb-2">Team Leader</h3>
                <p className="text-sm text-gray-600">Bio coming soon</p>
              </div>
              
              {/* Kalli Cox Photo */}
              <div className="flex flex-col items-center text-center">
                <img 
                  src="/kalli cox pic for website.JPEG" 
                  alt="Kalli Cox" 
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-bold text-[#181311] mb-2">Kalli Cox</h3>
                <p className="text-sm text-gray-600">Bio coming soon</p>
              </div>
            </div>

            <h2 className="text-[#181311] text-lg sm:text-xl lg:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">
              Contact Information
            </h2>
            <div className="text-[#181311] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4">
              <div className="flex items-center gap-3 mb-2">
                <Phone size={20} className="text-[#f46a25] flex-shrink-0" />
                <span className="break-all">601-938-3253</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Envelope size={20} className="text-[#f46a25] flex-shrink-0" />
                <span className="break-all">callie.waite@greatergoodms.com</span>
              </div>
              <p className="mt-4">
                <strong>Callie Rush Waite</strong>
                <br />
                Director of Donor Relations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
