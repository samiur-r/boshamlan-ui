import type { NextPage } from 'next'

import Hero from 'components/Home/Hero'
import Banner from 'components/Home/Banner'
import Guide from 'components/Articles/Guide'
import Cards from 'components/Home/Cards'
import ApartmentRent from 'components/Articles/ApartmentRent'
import Faq from 'components/Articles/Faq'
import Posts from 'components/Posts'
import SearchBox from 'components/SearchBox'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 md:bg-white">
      <Hero />
      <SearchBox />
      <Banner />
      <Posts />
      <Guide />
      <Cards />
      <div className="bg-primary grid gap-10 py-10">
        <ApartmentRent />
        <Faq bgPrimary />
      </div>
    </div>
  )
}

export default Home
