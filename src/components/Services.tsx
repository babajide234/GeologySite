import Container from './Container'
import { 
    FaIndustry, 
    FaMicroscope, 
    FaCode, 
    FaBriefcase, 
    FaFlask, 
    FaGlobe, 
    FaHandshake, 
    FaGraduationCap, 
    FaLeaf, 
    FaTools } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="py-20">
        <Container>
            <div id='services' className=" flex flex-col items-center gap-5 md:gap-20">
                <div className=" text-center flex flex-col gap-5">
                    <h2 className=" font-bold text-4xl ">Services</h2>
                    <p className="text-gray-600 text-base">Explore our range of services</p>
                </div>
                <div className=" grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 w-full">
                    <div className="flex flex-col items-center  text-center gap-5">
                        <FaIndustry className="w-12 h-12 mb-4" />

                        <h3 className="text-sm font-semibold">Mineral Exploration Projects</h3>
                        <p className="text-gray-600 text-xs">Investing in mineral exploration projects can yield significant returns if successful in discovering valuable mineral deposits such as gold, silver, copper, or rare earth elements.</p>
                    </div>
                    <div className="flex flex-col items-center  text-center gap-5">
                        <FaMicroscope className="w-12 h-12 mb-4" />

                        <h3 className="text-sm font-semibold">Geotechnical Testing Equipment</h3>
                        <p className="text-gray-600 text-xs">Investing in advanced geotechnical testing equipment can enhance the company's capabilities in conducting soil and rock testing for construction projects.</p>
                    </div>
                    <div className="flex flex-col items-center  text-center gap-5">
                        <FaCode className="w-12 h-12 mb-4" />

                        <h3 className="text-sm font-semibold">Technology and Software</h3>
                        <p className="text-gray-600 text-xs">Investing in specialized geological software and technology can improve efficiency and accuracy in data analysis, interpretation, and visualization.</p>
                    </div>
                    <div className="flex flex-col items-center  text-center gap-5">
                        <FaBriefcase className="w-12 h-12 mb-4" />

                        <h3 className="text-sm font-semibold">Expansion of Services</h3>
                        <p className="text-gray-600 text-xs">Investing in expanding the range of services offered by the geology company can open up new revenue streams and market opportunities.</p>
                    </div>
                    <div className="flex flex-col items-center  text-center gap-5">
                        <FaFlask className="w-12 h-12 mb-4" />

                        <h3 className="text-sm font-semibold">Research and Development</h3>
                        <p className="text-gray-600 text-xs">Investing in research and development initiatives can drive innovation and help the company stay at the forefront of advancements in geological science and technology.</p>
                    </div>
                    <div className="flex flex-col items-center  text-center gap-5">
                        <FaGlobe className="w-12 h-12 mb-4" />

                        <h3 className="text-sm font-semibold">International Expansion</h3>
                        <p className="text-gray-600 text-xs">Investing in expanding operations internationally can tap into new markets and opportunities for geological consulting services, mineral exploration, or environmental assessments.</p>
                    </div>
                    <div className="flex flex-col items-center  text-center gap-5">
                        <FaHandshake className="w-12 h-12 mb-4" />

                        <h3 className="text-sm font-semibold">Strategic Partnerships and Acquisitions</h3>
                        <p className="text-gray-600 text-xs">Investing in strategic partnerships or acquiring complementary businesses can accelerate growth and diversification.</p>
                    </div>
                    <div className="flex flex-col items-center  text-center gap-5">
                        <FaGraduationCap className="w-12 h-12 mb-4" />

                        <h3 className="text-sm font-semibold">Training and Development</h3>
                        <p className="text-gray-600 text-xs">Investing in training and development programs for employees can enhance expertise and skillsets.</p>
                    </div>
                    <div className="flex flex-col items-center  text-center gap-5">
                        <FaLeaf className="w-12 h-12 mb-4" />

                        <h3 className="text-sm font-semibold">Environmental Sustainability Initiatives</h3>
                        <p className="text-gray-600 text-xs">Investing in environmentally sustainable practices and technologies can enhance the company's reputation and appeal to clients.</p>
                    </div>
                    <div className="flex flex-col items-center  text-center gap-5">
                        <FaTools className="w-12 h-12 mb-4" />
                        <h3 className="text-sm font-semibold">Infrastructure Investments</h3>
                        <p className="text-gray-600 text-xs">Investing in upgrading company infrastructure can improve operational efficiency and support growth objectives.</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Services