import { Alex, CEO, Emily, Garcie, Lee, Micheal, Thomson } from '../assets'
import Container from './Container'

const Team = () => {

    const teamMembers = [
        {
          name: 'Jane Smith',
          role: 'Chief Executive Officer',
          description: 'Jane has over 20 years of experience in the mining industry, leading our company with a vision for sustainable growth and innovation.',
          image: CEO,
        },
        {
          name: 'Michael Johnson',
          role: 'Chief Financial Officer',
          description: 'Michael brings a wealth of financial expertise, ensuring our companys financial health and strategic investments.',
          image: Micheal, 
        },
        {
          name: 'Emily Davis',
          role: 'Mining Analyst',
          description: "Emilys analytical skills and market insights drive our decision-making process, optimizing our mining operations for efficiency.",
          image: Emily, 
        },
        {
          name: 'Daniel Lee',
          role: 'Mining Engineer',
          description: 'Daniel is an expert in mining engineering, overseeing our projects from conception to execution, ensuring safety and productivity.',
          image: Lee,
        },
        {
          name: 'Sophia Garcia',
          role: 'Environmental Scientist',
          description: 'Sophia is dedicated to ensuring our mining activities are environmentally sustainable, conducting thorough assessments and implementing eco-friendly practices.',
          image: Garcie, 
        },
        {
          name: 'Alexandra Moore',
          role: 'Community Relations Manager',
          description: 'Alexandra fosters positive relationships with local communities affected by our mining activities, ensuring mutual benefit and support.',
          image: Alex, 
        },
        {
          name: 'Mark Thompson',
          role: 'Safety Inspector',
          description: 'Mark is committed to maintaining the highest safety standards across our mining sites, conducting inspections and training programs for our teams.',
          image: Thomson, 
        },
      ]
      

  return (
    <section id='team' className=" py-10 md:py-20 ">
        <Container>
            <div className="flex flex-col w-full gap-10">
                <div className="text-center ">
                    <h3 className="capitalize text-gray-500 text-base mb-3">invest</h3>
                    <h2 className="capitalize font-bold text-4xl mb-3">Meet Our Team</h2>
                    <p className=" capitalize text-base text-gray-500">Get to know the talented individuals behind our company.</p>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
                {teamMembers.map((member, index) => (
                    <div key={index} className="w-full overflow-hidden flex gap-4 flex-col items-center">
                        <div className="overflow-hidden rounded-full bg-cover bg-top w-[20rem] h-[20rem] " style={{ backgroundImage:`url(${member.image})` }}></div>
                        <div className='flex flex-col items-center'>
                          <h2 className="text-lg font-semibold">{member.name}</h2>
                          <h3 className="text-lg text-gray-400">{member.role}</h3>
                        </div>
                        <p className="text-sm text-gray-500 text-center">{member.description}</p>
                    </div>
                ))}
                    
                    
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Team