
import About from '../components/About'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Cta from '../components/CTA'
// import Quote from '../components/Quote'
import Services from '../components/Services'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <>  
      
          <About/>
          <Cta/>
          <Services/>
          {/* <Quote/> */}
          <Gallery/>
          <Team/>
          <Contact/>
    </>
  )
}

export default Home