import Container from './Container'
import { IMG2 } from '../assets'

const Quote = () => {
  return (
    <section className=" py-10 md:py-20  bg-blend-overlay bg-cover bg-fixed bg-center bg-no-repeat" style={{
        backgroundImage:`url(${IMG2})`
    }}>
        <Container>
            <div className="flex flex-col justify-center items-center gap-10 md:gap-20 bg-white md:py-20 py-10 md:w-[70%] mx-auto rounded-xl">
                <div className=" text-center flex flex-col gap-3">
                    <h2 className=" font-bold text-4xl ">Request a Quote</h2>
                    <p className=" text-gray-500 text-base">Find Your Mining Solution - Request a Quote!</p>
                </div>
                <div className="w-[80%] mx-auto">
                    <form action="" method="post" className='w-full flex flex-col gap-4'>
                        <div className=" flex flex-col gap-2">
                            <label htmlFor="" className=" text-sm capitalize font-bold text-gray-400">Name</label>
                            <input type="text" name='' id='' className=" border-2 border-gray-200 py-2.5 px-2 outline-none focus:border-green-400" />
                        </div>
                        <div className=" flex flex-col gap-2">
                            <label htmlFor="" className=" text-sm capitalize font-bold text-gray-400">Email</label>
                            <input type="text" name='' id='' className=" border-2 border-gray-200 py-2.5 px-2 outline-none focus:border-green-400" />
                        </div>
                        <div className=" flex flex-col gap-2">
                            <label htmlFor="" className=" text-sm capitalize font-bold text-gray-400">Subject</label>
                            <input type="text" name='' id='' className=" border-2 border-gray-200 py-2.5 px-2 outline-none focus:border-green-400" />
                        </div>
                        <div className=" flex flex-col gap-2">
                            <label htmlFor="" className=" text-sm capitalize font-bold text-gray-400">Message</label>
                            <textarea name="" id="" cols="30" rows="10" className='border-2 border-gray-200 py-2.5 px-2 outline-none focus:border-green-400'></textarea>
                        </div>
                        <div className=" flex flex-col gap-2">
                            <button type="submit" className='w-full py-2.5 bg-black text-white capitalize font-semibold text-lg'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Quote