import Container from '../components/Container'
import { IMG5 } from '../assets'

const Services = () => {
  return (
    <>
      <section className=" w-full bg-black/60 bg-center bg-blend-overlay bg-cover h-48 md:h-96" style={{ backgroundImage:`url(${IMG5})` }}>
        <Container>
            <div className=" w-full h-full flex justify-center items-center">
                <h2 className=" font-bold text-2xl md:text-5xl text-white">Our Services</h2>
            </div>
        </Container>
      </section>
      <section className="min-h-screen ">
        <Container>
          <div className="">
          <div className=" w-full flex items-center">
            <img src="gold-mining.jpg" alt="Gold Mining"/>
            <div className="service-details">
              <h2 className="service-title">Gold and Diamond Mining Investment</h2>
              <p className="service-description">Explore investment opportunities in gold mining with BRC Geologist Limited. We provide expert analysis and strategic insights to maximize returns.</p>
              <p className="service-description">Our services include:</p>
              <ul className="service-description">
                <li>Market analysis and investment strategies</li>
                <li>Risk assessment and management</li>
                <li>Consultation with mining experts</li>
              </ul>
              <p className="service-description">Invest with confidence and tap into the potential of gold mining.</p>
            </div>
          </div>
    
    <div className="service">
      <img src="equipment-leasing.jpg" alt="Equipment Leasing"/>
      <div className="service-details">
        <h2 className="service-title">Machine Leasing and Purchase</h2>
        <p className="service-description">BRC Geologist Limited offers flexible options for machine leasing and purchase. Get access to top-quality equipment for your mining operations.</p>
        <p className="service-description">Our equipment services include:</p>
        <ul className="service-description">
          <li>Leasing of mining machinery and equipment</li>
          <li>Sale of new and used mining equipment</li>
          <li>Technical support and maintenance services</li>
        </ul>
        <p className="service-description">Maximize the efficiency and productivity of your mining projects with our reliable equipment solutions.</p>
      </div>
    </div>
    
    <div className="service">
      <img src="geological-surveys.jpg" alt="Geological Surveys"/>
      <div className="service-details">
        <h2 className="service-title">Geological Surveys and Analysis Services</h2>
        <p className="service-description">Benefit from our specialized geological surveys and analysis services. Our team of experts provides comprehensive insights to optimize your mining operations.</p>
        <p className="service-description">Our geological services include:</p>
        <ul className="service-description">
          <li>Geological mapping and exploration</li>
          <li>Geophysical surveys and data analysis</li>
          <li>Resource estimation and mine planning</li>
        </ul>
        <p className="service-description">Make informed decisions with our detailed geological analysis tailored to your mining needs.</p>
      </div>
    </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Services