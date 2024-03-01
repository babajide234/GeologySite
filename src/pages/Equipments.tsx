import {  X } from 'lucide-react'
import { BallMill, Bulldozer, Centrifuge, ConeCrusher, ConveyorBelt, Crane, DRILL, Drone, DryingOven, DumpTruck, Equipment, Excavator, FilterPress, FlotationCell, Geo_Ex, Grader, ImpactCrusher, JawCrusher, MetalDetector, ROCK, RockDrill, SAGMill, Scraper, Thickener, Vent, WheelLoader, XRF } from '../assets'
import Container from '../components/Container'
import React, { useState } from 'react'
import { Equipment as EquipmentType } from '../types'

const Equipments = () => {
  const [selectEquip, setSelectEquip] = useState<EquipmentType | null>(null);
  const [ modal, setModal] = useState(false)

    const data= [
          {
            "name": "Geological Drilling Rig",
            "description": "High-capacity drilling rig for geological exploration. Suitable for various soil types.",
            "price": "$150,000",
            "usage": "The Geological Drilling Rig, equipped with diamond-tipped drill bits, is essential for conducting deep core sampling in geological surveys. It can penetrate various soil types, from soft sediments to hard rock formations, providing valuable data on subsurface geology.",
            "image": DRILL,
            "category": "Drilling Equipment"
          },
          {
            "name": "Core Sample Analysis Machine",
            "description": "State-of-the-art machine for analyzing core samples. Provides detailed mineral composition data.",
            "price": "$80,000",
            "usage": "The Core Sample Analysis Machine is a critical component of the analysis process. After retrieving core samples using the drilling rig, these samples are analyzed in detail to determine mineral composition, ore grades, and other valuable information. The machine provides precise data that informs mining decisions.",
            "image": ROCK,
            "category": "Analysis Equipment"
          },
          {
            "name": "Portable XRF Analyzer",
            "description": "Handheld XRF analyzer for rapid on-site elemental analysis. Suitable for mineral exploration.",
            "price": "$20,000",
            "usage": "The Portable XRF Analyzer allows for rapid on-site elemental analysis of rock and soil samples. Geologists use this device to quickly assess the presence and concentration of valuable minerals such as gold, silver, and copper. This real-time data aids in making immediate decisions during exploration.",
            "image": XRF,
            "category": "Analysis Equipment"
          },
          {
            "name": "Remote Sensing Drone",
            "description": "Advanced drone equipped with remote sensing technology. Ideal for aerial surveys and mapping.",
            "price": "$30,000",
            "usage": "The Remote Sensing Drone is used for aerial surveys of large exploration areas. Equipped with high-resolution cameras and remote sensing technology, it captures detailed images and data from above. This data is crucial for creating 3D maps, identifying potential mineral deposits, and planning ground operations.",
            "image": Drone,
            "category": "Surveying and Mapping Equipment"
          },
          {
            "name": "Geophysical Survey Equipment",
            "description": "Comprehensive set of geophysical instruments for subsurface exploration and mapping.",
            "price": "$120,000",
            "usage": "The Geophysical Survey Equipment includes tools such as ground-penetrating radar, magnetometers, and resistivity meters. These instruments are crucial for mapping subsurface geology and detecting anomalies indicative of mineral deposits. By analyzing variations in electromagnetic fields and resistivity, geophysicists pinpoint potential targets for further exploration.",
            "image": Geo_Ex,
            "category": "Surveying and Mapping Equipment"
          },
          {
            "name": "Mine Ventilation System",
            "description": "Ventilation system designed for underground mines. Ensures safe working conditions.",
            "price": "$200,000",
            "usage": "The Mine Ventilation System is indispensable for underground mining operations. It circulates fresh air throughout the mine, ensuring a safe working environment for miners by removing hazardous gases and preventing the buildup of dust and fumes. This system is vital for maintaining optimal air quality and preventing accidents.",
            "image": Vent,
            "category": "Safety and Operations Equipment"
          },
          {
            "name": "Heavy-Duty Excavator",
            "description": "Powerful excavator designed for large-scale earthmoving and mining operations.",
            "price": "$300,000",
            "usage": "The Heavy-Duty Excavator is built to tackle the toughest jobs in mining and construction. With its robust hydraulic system and high digging force, it can handle heavy materials and excavate large volumes of earth. Whether for open-pit mining or major construction projects, this excavator delivers exceptional performance.",
            "image": Excavator,
            "category": "Construction Equipment"
          },
          {
            "name": "Bulldozer",
            "description": "Versatile bulldozer for pushing, lifting, and moving heavy materials on construction sites.",
            "price": "$250,000",
            "usage": "The Bulldozer is a versatile machine used in various construction and mining applications. Its powerful engine and blade make it ideal for clearing land, pushing soil and rocks, and leveling surfaces. Whether for road construction, site preparation, or land reclamation, the bulldozer is a workhorse on the job site.",
            "image": Bulldozer,
            "category": "Construction Equipment"
          },
          {
            "name": "Dump Truck",
            "description": "Large-capacity dump truck for transporting materials such as ore, gravel, and rock.",
            "price": "$150,000",
            "usage": "The Dump Truck is essential for transporting large quantities of materials in mining and construction. Its robust design and high load capacity make it ideal for hauling ore, gravel, and rock from excavation sites to processing facilities. With its off-road capabilities, it navigates rough terrain with ease.",
            "image": DumpTruck,
            "category": "Transportation Equipment"
          },
          {
            "name": "Crane",
            "description": "Heavy-duty crane for lifting and moving heavy equipment and materials.",
            "price": "$400,000",
            "usage": "The Crane is a crucial piece of equipment for lifting heavy loads in construction and mining operations. With its telescopic boom and lifting capacity, it can hoist and place materials with precision. Whether for erecting structures, assembling machinery, or loading/unloading materials, the crane plays a vital role on the job site.",
            "image": Crane,
            "category": "Construction Equipment"
          },
          {
            "name": "Rock Drill",
            "description": "Specialized rock drill for precise drilling in hard rock formations.",
            "price": "$80,000",
            "usage": "The Rock Drill is designed for drilling in hard rock formations encountered in mining and tunneling. Equipped with high-powered hydraulic systems and durable drill bits, it can bore through tough rock with precision. This tool is essential for creating blast holes, anchor holes, and tunneling applications.",
            "image": RockDrill,
            "category": "Drilling Equipment"
          },
            {
              "name": "Wheel Loader",
              "description": "A versatile machine used for loading, transporting, and stockpiling loose materials such as sand, gravel, and coal.",
              "image": WheelLoader,
              "category": "Mining Equipment"
            },
            {
              "name": "Grader",
              "description": "A machine used for leveling, grading, and shaping surfaces on construction and mining sites.",
              "image": Grader,
              "category": "Mining Equipment"
            },
            {
              "name": "Scraper",
              "description": "A self-loading hauling unit used for excavating, transporting, and dumping earth and other loose materials over short distances.",
              "image": Scraper,
              "category": "Mining Equipment"
            },
            {
              "name": "Conveyor Belt",
              "description": "A continuous loop of belt used to transport loose materials over long distances.",
              "image": ConveyorBelt,
              "category": "Mining Equipment"
            },
            {
              "name": "Jaw Crusher",
              "description": "A machine that uses opposing jaws to crush large rocks into smaller pieces.",
              "image": JawCrusher,
              "category": "Processing Equipment"
            },
            {
              "name": "Cone Crusher",
              "description": "A machine that uses a cone-shaped crushing chamber to reduce the size of rocks.",
              "image": ConeCrusher,
              "category": "Processing Equipment"
            },
            {
              "name": "Impact Crusher",
              "description": "A machine that uses high-speed impact to break rocks into smaller pieces.",
              "image": ImpactCrusher,
              "category": "Processing Equipment"
            },
            {
              "name": "Ball Mill",
              "description": "A rotating cylindrical mill that uses grinding balls to grind rocks into a fine powder.",
              "image": BallMill,
              "category": "Processing Equipment"
            },
            {
              "name": "SAG Mill",
              "description": "A large, cylindrical mill that uses grinding balls and autogenous material (large rocks) to grind rocks into a fine powder.",
              "image": SAGMill,
              "category": "Processing Equipment"
            },
            {
              "name": "Flotation Cell",
              "description": "A device that uses air bubbles to separate valuable minerals from waste rock.",
              "image": FlotationCell,
              "category": "Processing Equipment"
            },
            {
              "name": "Thickener",
              "description": "A tank used to separate solids from liquids in a slurry.",
              "image": Thickener,
              "category": "Processing Equipment"
            },
            {
              "name": "Filter Press",
              "description": "A machine that uses pressure to separate solids from liquids in a slurry.",
              "image": FilterPress,
              "category": "Processing Equipment"
            },
            {
              "name": "Centrifuge",
              "description": "A machine that uses centrifugal force to separate solids from liquids in a slurry.",
              "image": Centrifuge,
              "category": "Processing Equipment"
            },
            {
              "name": "Drying Oven",
              "description": "An oven used to remove moisture from materials.",
              "image": DryingOven,
              "category": "Processing Equipment"
            },
            {
              "name": "Metal Detector",
              "description": "A device that can detect the presence of metal.",
              "image": MetalDetector,
              "category": "Exploration Equipment"
            }
    ]
      
    const HandleSelect: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      const name = event.currentTarget.getAttribute('data-name');

      if (name) {
        const selected = data.find((item) => item.name === name);
        if (selected) {
          setSelectEquip(selected);
          setModal(!modal);
        }
      }
    };
    const handleSubmit:React.MouseEventHandler<HTMLButtonElement>= ()=>{
      setModal(!modal);
    }

  return (
    <>
        <section className=" w-full bg-black/60 bg-center bg-blend-overlay bg-cover h-48 md:h-96" style={{ backgroundImage:`url(${Equipment})` }}>
            <Container>
                <div className=" w-full h-full flex justify-center items-center">
                    <h2 className=" font-bold text-2xl md:text-5xl text-white">Equipments</h2>
                </div>
            </Container>
        </section>
        <section className=" min-h-[50vh] py-10 ">
            <Container>
            <div className="w-full text-center flex flex-col items-center md:px-20 gap-5 md:gap-10 py-10">
                    <h3 className="md:text-3xl text-xl uppercase leading-loose text-black flex w-fit pb-2">Buy or purchase Geological Equipments</h3>
                    <p className="text-sm md:text-lg mb-5 text-gray-500">
                    At BRC Geologist Limited, we provide a seamless experience for acquiring top-quality geological equipment. Whether you're looking to purchase or lease, we offer a diverse range of tools tailored to meet the demands of various exploration and mining projects.                    </p>
                    </div>
                    <div className=" grid grid-cols-1 gap-2  md:grid-cols-3 md:gap-10">
                        {
                            data.map((item,index)=>(
                                <div key={index} className="flex flex-col gap-5 p-5 border rounded-xl">
                                    <img src={item.image} alt="" className=' h-[12rem] bg-cover object-cover md:h-[15rem] w-full' />
                                    <div className="flex flex-col gap-3 h-[10rem] justify-between">
                                        <h2 className=" font-medium text-center">{item.name}</h2>
                                        <p className=" text-sm text-center">{item.description}</p>
                                        <button onClick={(e)=> HandleSelect(e)} data-name={item.name} className=" px-10 py-2 bg-black text-white font-medium text-lg rounded-full">
                                          Get Quote
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            </Container>
        </section>
        {
          modal && 

          <div className=" z-50 fixed w-full h-screen bg-black/30 flex justify-center items-center top-0 left-0">
            <div className=" w-11/12 md:w-1/2 min-h-1/2 bg-white rounded-xl px-10 py-12 relative">
              <div className="mb-10">
                <h3 className=" font-semibold text-xl md:text-2xl ">Request a Quote </h3>
                <span onClick={ () => setModal(!modal)} className=" absolute top-4 right-5 w-10 h-10 cursor-pointer hover:bg-slate-50 rounded-full flex items-center justify-center">
                  <X />
                </span>
              </div>
              <div className=" mb-2 flex flex-col gap-1 ">
                <label htmlFor="" className=' font-medium  text-gray-400'>Full Name</label>
                <input type="text" className=' w-full px-3 py-2.5 border-2 border-gray-400 rounded-md outline-none focus:border-2 focus:border-solid focus:border-purple-800' />
              </div>
              <div className="mb-2 flex flex-col gap-1 ">
                <label htmlFor="" className=' font-medium  text-gray-400'>Email</label>
                <input type="text" className=' w-full px-3 py-2.5 border-2 border-gray-400 rounded-md outline-none focus:border-2 focus:border-solid focus:border-purple-800' />
              </div>
              <div className=" mb-5 flex flex-col gap-1 ">
                <label htmlFor="" className=' font-medium  text-gray-400'>Phone</label>
                <input type="text" className=' w-full px-3 py-2.5 border-2 border-gray-400 rounded-md outline-none focus:border-2 focus:border-solid focus:border-purple-800' />
              </div>
              <div className=" mb-5 flex flex-col gap-1 ">
                <label htmlFor="" className=' font-medium  text-gray-400'>Selected Equipment</label>
                  <h3 className=" text-lg ">{selectEquip && selectEquip.name}</h3>
              </div>
              <div className=" flex flex-col gap-1 peer">
                <button onClick={handleSubmit} className=" px-10 py-2 bg-black text-white font-medium text-lg rounded-full">Submit</button>
              </div>
            </div>
          </div>
        }
    </>
  )
}

export default Equipments