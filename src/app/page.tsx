import Banner from '@/components/Banner'

import HomeBanner from '@/components/Home/HomeBanner'
import Blockathon from '@/components/Home/Blockathon'
import BottomBanner from '@/components/Home/BottomBanner'

export default function Home() {
  return (
    <main>
      <Banner />
      <Blockathon />
      <BottomBanner/>
    </main>
  )
}
