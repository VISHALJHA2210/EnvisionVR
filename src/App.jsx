import './App.css'
import FeatureSection from './components/FeatureSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Price from './components/Pricing'
import Testimonials from './components/Testimonials'
import WorkFLow from './components/WorkFlow'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <FeatureSection/>
        <WorkFLow/>
        <Price/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}

export default App
