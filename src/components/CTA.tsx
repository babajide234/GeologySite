import Container from './Container'

const Cta = () => {
  return (
    <section className="bg-black w-full py-10 md:max-lg:py-20 ">
       <Container>
         <div className="w-full flex flex-col items-center gap-5">
               <h2 className=" font-bold md:max-lg:text-4xl text-xl text-white text-center">Do you want to hire us? Please contact us at: (510) 224 2927</h2>
               <button className=" py-2.5 px-10 bg-white rounded-full font-semibold ">Contact Us</button>
         </div>
       </Container>
    </section>
  )
}

export default Cta