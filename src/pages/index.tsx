import type { NextPage } from 'next'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SearchBox from 'components/SearchBox'
import Hero from 'components/Home/Hero'
import Banner from 'components/Home/Banner'
import Guide from 'components/Articles/Guide'
import Cards from 'components/Home/Cards'
import ApartmentRent from 'components/Articles/ApartmentRent'
import Faq from 'components/Articles/Faq'
import Posts from 'components/Posts'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 md:bg-white">
      <Hero />
      {/* <SearchBox /> */}
      <Banner />
      <Posts />
      <Guide />
      <Cards />
      <ApartmentRent />
      <Faq bgPrimary />
    </div>
  )
}

export default Home
