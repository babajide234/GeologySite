import { Equipment, Survey } from '../assets'
import Container from '../components/Container'

const Aboutceo = () => {
  return (
    <>
    <section className=" w-full bg-black/60 bg-center bg-blend-overlay bg-cover h-48 md:h-96" style={{ backgroundImage:`url(${Equipment})` }}>
        <Container>
            <div className=" w-full h-full flex justify-center items-center">
                <h2 className=" font-bold text-2xl md:text-5xl text-white">About Us</h2>
            </div>
        </Container>
    </section>
    <section className="w-full">
        <Container>
            <div className=" flex flex-col py-5 md:py-20">
                <div className="w-full text-center flex flex-col items-center md:px-20 gap-5 md:gap-10">
                    <h3 className="md:text-3xl text-xl uppercase leading-loose text-black flex w-fit pb-2">About BRC Geologist Limited</h3>
                    <p className="text-sm md:text-lg mb-5 text-gray-500">
                        At BRC Geologist Limited, we are pioneers in the geological investment sphere, providing a comprehensive platform tailored for those looking to invest in the future. With a steadfast focus on geology, we offer a range of services designed to empower our clients to explore opportunities, track performance, and make informed decisions that drive success.
                    </p>
                    <div className=" flex flex-col md:flex-row md:items-center md:py-20 ">
                        <div className="flex-grow">
                            <h3 className=" text-center  text-3xl uppercase leading-loose text-black ">Our Mission</h3>
                        </div>
                        <div className=" md:w-1/2 w-full">
                            <p className=" text-sm md:text-lg mb-5 text-gray-500 text-center md:text-left">
                            Our mission at BRC Geologist Limited is simple yet profound: to bridge the gap between geological potential and investment opportunity. We strive to create a seamless environment where investors can harness the power of geology for financial growth, all while contributing to the advancement of the field.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className='text-center  text-3xl uppercase leading-loose text-black '>Services</h3>
                    </div>
                    <div className=" flex flex-col md:flex-row items-center gap-10 ">
                        <div className="md:w-1/2 w-full bg-cover bg-center bg-black/40 bg-blend-overlay overflow-hidden rounded-lg h-[10rem] md:h-[20rem] flex items-center justify-center" style={{backgroundImage:`url(${Survey})`}}>
                            <h3 className=" text-center text-white text-2xl md:text-3xl  uppercase leading-loose">Gold & Diamond Investing</h3>
                        </div>
                        <div className=" md:w-1/2 w-full">
                            <p className=" text-sm md:text-lg mb-5 text-gray-500 text-left">
                            Investing in Gold & Diamond has long been a cornerstone of wealth preservation and growth. At BRC Geologist Limited, we provide a specialized avenue for Gold & Diamond investment, leveraging our expertise in geological analysis to identify promising opportunities in Gold & Diamond mining and exploration. Whether you're a seasoned investor or new to the world of Gold & Diamond, our platform offers a range of investment options tailored to your preferences and risk profile.                            </p>
                        </div>
                    </div>
                    <div className=" flex flex-col md:flex-row items-center gap-10 ">
                        <div className="md:w-1/2 w-full bg-cover bg-center bg-black/40 bg-blend-overlay overflow-hidden rounded-lg h-[10rem] md:h-[20rem] flex items-center justify-center" style={{backgroundImage:`url(${Survey})`}}>
                            <h3 className="text-center text-white text-2xl md:text-3xl  uppercase leading-loose ">Equipment Purchase and Leasing</h3>
                        </div>
                        <div className=" md:w-1/2 w-full">
                            <p className=" text-sm md:text-lg mb-5 text-gray-500 text-left">
                            Geological exploration and mining require specialized equipment, often representing a significant investment. BRC Geologist Limited offers a unique solution with our equipment purchase and leasing services. Through strategic partnerships and a keen understanding of the industry, we provide access to high-quality equipment essential for efficient and effective operations. Whether you're looking to purchase equipment outright or explore flexible leasing options, we have you covered.
                            </p>
                        </div>
                    </div>
                    <div className=" flex flex-col md:flex-row items-center gap-10 ">
                        <div className="md:w-1/2 w-full bg-cover bg-center bg-black/40 bg-blend-overlay overflow-hidden rounded-lg h-[10rem] md:h-[20rem] flex items-center justify-center" style={{backgroundImage:`url(${Survey})`}}>
                            <h3 className=" text-center text-white text-2xl md:text-3xl uppercase leading-loose ">Surveys and Analysis</h3>
                        </div>
                        <div className=" md:w-1/2 w-full">
                            <p className=" text-xs md:text-lg mb-5 text-gray-500 text-left">
                            In the realm of geology, informed decisions are rooted in comprehensive surveys and analysis. BRC Geologist Limited boasts a team of experienced geologists and analysts who conduct detailed surveys to assess geological potential. From mineral exploration to site assessments, our surveys deliver invaluable insights that form the bedrock of investment strategies. Our commitment to accuracy and thoroughness ensures that our clients are equipped with the knowledge needed to make sound investment decisions.                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className='text-center  text-xl md:text-3xl  uppercase leading-loose text-black '>Why Choose BRC Geologist Limited?</h3>
                    </div>
                    <div className=" w-full">
                        <ul className=" text-center md:text-left">
                            <li className=' text-sm md:text-lg text-gray-500'> <span className=" font-semibold text-lg md:text-xl text-black mr-3"> Expertise:</span>  Our team comprises seasoned geologists, analysts, and industry experts who bring a wealth of knowledge and experience to the table.</li>
                            <li className=" text-sm md:text-lg text-gray-500"> <span className=" font-semibold text-lg md:text-xl text-black mr-3"> Tailored Solutions:</span>  We understand that every investor is unique. That's why we offer personalized investment options and advisory services to align with your goals.</li>
                            <li className=" text-sm md:text-lg text-gray-500"> <span className=" font-semibold text-lg md:text-xl text-black mr-3"> Transparency:</span>  We believe in transparency at every step. From detailed project reports to clear investment terms, we keep our clients informed and empowered.</li>
                            <li className=" text-sm md:text-lg text-gray-500"> <span className=" font-semibold text-lg md:text-xl text-black mr-3"> Industry Insights:</span>  Stay ahead of the curve with our regular updates and insights into the geology and mining sectors. Our platform offers a wealth of resources to keep you informed.</li>
                        </ul>
                    </div>
                    <div className=" w-full bg-light/20 p-10 rounded-lg ">
                        <h2 className="text-center  text-2xl md:text-3xl uppercase leading-loose text-black">Get Started Today</h2>
                        <p className=" text-sm md:text-lg mb-5 text-gray-500 ">
                            Whether you're a seasoned investor looking to diversify your portfolio or someone intrigued by the potential of geological investments, BRC Geologist Limited is your partner for success. Explore our platform, discover investment opportunities, and embark on a journey fueled by the power of geology. Join us as we invest in the future, one geological opportunity at a time.
                        </p>

                        <h2 className="text-center  text-2xl md:text-3xl  uppercase leading-loose text-black">Contact Us</h2>
                        <p className="text-sm md:text-lg mb-5 text-gray-500">
                            Ready to learn more? Get in touch with us today to explore how BRC Geologist Limited can help you achieve your investment goals.
                        </p>
                        <ul className="">
                            <li className="">Phone: 555-123-4567</li>
                            <li className="">Email: info@brcgeologist.com</li>
                            <li className="">Website: www.brcgeologist.com</li>
                        </ul>
                        
                        Invest in the future with BRC Geologist Limited – where geology meets opportunity.
                    </div>
                </div>
            </div>
        </Container>
    </section>
</>
  )
}

export default Aboutceo