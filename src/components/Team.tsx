import { CEO } from '../assets'
import Container from './Container'

const Team = () => {
  return (
    <section className=" py-10 md:py-20">
        <Container>
            <div className="flex flex-col w-full gap-10">
                <div className="text-center ">
                    <h3 className="capitalize text-gray-500 text-base mb-3">invest</h3>
                    <h2 className="capitalize font-bold text-4xl mb-3">Meet Our Team</h2>
                    <p className=" capitalize text-base text-gray-500">Get to know the talented individuals behind our company.</p>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="w-full overflow-hidden flex gap-4 flex-col items-center">
                        <div className="  overflow-hidden bg-cover w-[30rem] h-[30rem] bg-right " style={{ backgroundImage:`url(${CEO})`}}>
                        </div>
                        <div className="">
                            <h2 className=" text-lg font-semibold ">John Doe</h2>
                            <h3 className="text-lg  text-gray-400">Geologist</h3>
                        </div>
                        <p className=" text-sm text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci similique.</p>
                    </div>
                    
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Team