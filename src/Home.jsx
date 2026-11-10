import Header from "./components/Header";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Videos from "./components/Videos";
import Faculties from "./components/Faculties";
import Admissions from "./components/Admissions";
import CampusLife from "./components/CampusLife";
import Library from "./components/Library";
import News from "./components/News";
import Leadership from "./components/Leadership";
import Services from "./components/Services";
import UsefulLinks from "./components/UsefulLinks";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main role="main">
        <Hero />
        <Welcome />
        <Videos />
        <Faculties />
        <Admissions />
        <CampusLife />
        <Library />
        <News />
        <Leadership />
        <Services />
        <UsefulLinks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
