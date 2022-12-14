import React from 'react'
import Link from 'next/link'

import { AgencyType } from 'interfaces'
import Title from 'components/Title'
import Description from 'components/Description'
import PackageCard from './PackageCard'
import AgencyCard from './AgencyCard'

const Agency: React.FC<{
  agencyList: AgencyType[]
  thumbnailSmall?: boolean
}> = ({ agencyList, thumbnailSmall }) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex w-full justify-center">
        <PackageCard thumbnailSmall={thumbnailSmall} />
      </div>
      <Description textBlack>
        <span className="flex justify-center gap-2 pb-5 text-sm md:text-lg">
          <Link href="https://api.whatsapp.com/send/?phone=96560444900&text&type=phone_number&app_absent=0">
            <a className="text-primary hover:underline">راسلنا بالواتس اب</a>
          </Link>
          <span>او</span>
          <Link href="tel:+96560444900">
            <a className="text-primary hover:underline">اتصل بنا</a>
          </Link>
          <span>للمساعده</span>
        </span>
      </Description>
      <div className="flex justify-center">
        <Title value="قائمة المكاتب" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5">
        {agencyList.map((agency) => (
          <Link key={agency.id} href="/agency">
            <AgencyCard
              thumbnail={agency.thumbnail}
              title={agency.title}
              phone={agency.phone}
              socialLinks={agency.socialLinks}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Agency
