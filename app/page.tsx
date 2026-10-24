import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Videos } from '@/components/site/videos'
import { Admissions } from '@/components/site/admissions'
import { StudentLife } from '@/components/site/student-life'
import { Academics } from '@/components/site/academics'
import { NewsEvents } from '@/components/site/news-events'
import { Leadership } from '@/components/site/leadership'
import { Facilities } from '@/components/site/facilities'
import { QuickResources } from '@/components/site/quick-resources'
import { CampusVoices } from '@/components/site/campus-voices'
import { GetInTouch } from '@/components/site/get-in-touch'
import { Footer } from '@/components/site/footer'
import { ScrollTop } from '@/components/site/scroll-top'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Videos />
        <Admissions />
        <StudentLife />
        <Academics />
        <NewsEvents />
        <Leadership />
        <Facilities />
        <QuickResources />
        <CampusVoices />
        <GetInTouch />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
