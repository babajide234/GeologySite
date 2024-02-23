import { Link } from 'react-router-dom'
import Container from './Container'
import { IMG6 } from '../assets'

const Cta = () => {
  return (
    <section className="bg-black/40 bg-blend-overlay w-full py-10 md:py-20 bg-cover bg-center bg-fixed " style={{backgroundImage:`url(${IMG6})`}}>
       <Container>
         <div className="w-full flex flex-col items-center gap-5">
               <h2 className=" font-bold md:text-4xl text-xl text-white text-center">Do you want to hire us? Please contact us at: (510) 224 2927</h2>
               <Link to={'/#contact'} className=" py-2.5 px-10 bg-white rounded-full font-semibold ">Contact Us</Link>
         </div>
       </Container>
    </section>
  )
}

export default Cta