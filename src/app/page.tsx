import Banner from '@/components/Banner'

import BottomBar from '@/components/Home/BottomBar'
import DetailBanner from '@/components/Home/DetailBanner'
import HomeBanner from '@/components/Home/HomeBanner'
import InfoBanner from '@/components/Home/InfoBanner'

export default function Home() {
  return (
    <main>
      <Banner />
      <HomeBanner />
      <InfoBanner/>
      <BottomBar/>
    </main>
  )
}
