import { Dim, Gol, IMG1, IMG3, IMG5, Sur } from '../assets'

const Gallery = () => {
  return (
    <>

        <div className=" text-center flex items-center py-10 flex-col px-5 md:px-20">
                <h3 className="text-sm uppercase leading-loose text-gray-400 flex w-fit pb-2 fadeInPop">Gallery</h3>
                <h3 className="text-3xl leading-tight font-bold flex w-fit pb-2 mb-5 fadeInPop">Our Gallery</h3>
        </div>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-full md:w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={IMG1} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={Sur} />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={IMG3} />
                    </div>
                </div>
                <div className="flex w-full md:w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={Dim} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={IMG5} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={Gol} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery