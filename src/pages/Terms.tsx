import Container from '../components/Container'
import { IMG8 } from '../assets'

const Terms = () => {
  return (
    <>
      <section className=" w-full bg-black/60 bg-center bg-blend-overlay bg-cover h-48 md:h-96" style={{ backgroundImage:`url(${IMG8})` }}>
        <Container>
            <div className=" w-full h-full flex justify-center items-center">
                <h2 className=" font-bold text-2xl md:text-5xl text-white">Terms and Conditions</h2>
            </div>
        </Container>
    </section>
      <section className=" min-h-screen">
        <Container>
          <div className=" py-20">

            <h1 className=' font-semibold text-xl '>Terms and Conditions</h1>
            <p className=' text-sm mb-2'>Welcome to BRC Geology Limited, a leading provider of geology mining services. These terms and conditions govern your use of our services, so please read them carefully.</p>

            <h2 className='font-semibold text-xl mb-2'>1. Acceptance of Terms</h2>
            <p className=' text-sm mb-2'>By accessing or using our services, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use our services.</p>

            <h2 className='font-semibold text-xl mb-2'>2. Services</h2>
            <p className=' text-sm mb-2'>BRC Geology Limited provides expert geology mining services, including but not limited to:</p>
            <ul className=" ml-5 mb-2">
              <li className=''>Gold and Diamond Mining Investments</li>
              <li className=''>Machine Leasing and Purchase</li>
              <li className=''>Geological Surveys and Analysis Services</li>
            </ul>

            <h2 className='font-semibold text-xl mb-2'>3. Accuracy of Information</h2>
            <p className=' text-sm mb-2'>While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, accuracy, or reliability of any content on our website or provided through our services. Users should verify any information before making decisions based on it.</p>

            <h2 className='font-semibold text-xl mb-2'>4. Investment Risks</h2>
            <p className=' text-sm mb-2'>Investing in mining projects carries inherent risks. We provide information and analysis to assist in investment decisions, but it is the responsibility of investors to conduct their due diligence and understand the risks involved. BRC Geology Limited is not liable for any investment losses.</p>

            <h2 className='font-semibold text-xl mb-2'>5. Equipment Leasing and Purchase</h2>
            <p className=' text-sm mb-2'>Our equipment leasing and purchase services offer top-quality machinery for mining operations. Terms of lease or purchase are subject to agreement and may include maintenance and return conditions.</p>

            <h2 className='font-semibold text-xl mb-2'>6. Geological Surveys and Analysis</h2>
            <p className=' text-sm mb-2'>BRC Geology Limited's expert geologists provide comprehensive surveys and analysis to optimize mining operations. Results and recommendations are based on professional judgment and available data.</p>

            <h2 className='font-semibold text-xl mb-2'>7. Confidentiality</h2>
            <p className=' text-sm mb-2'>Any information shared with BRC Geology Limited during the course of our services is treated with confidentiality. We do not disclose sensitive information to third parties without consent, except as required by law.</p>

            <h2 className='font-semibold text-xl mb-2'>8. Intellectual Property</h2>
            <p className=' text-sm mb-2'>All content, logos, and materials provided by BRC Geology Limited are protected by intellectual property rights. Users may not use, modify, or distribute these materials without permission.</p>

            <h2 className='font-semibold text-xl mb-2'>9. Limitation of Liability</h2>
            <p className=' text-sm mb-2'>BRC Geology Limited is not liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of our services. This includes but is not limited to loss of profits, data, or business interruption.</p>

            <h2 className='font-semibold text-xl mb-2'>10. Indemnification</h2>
            <p className=' text-sm mb-2'>Users agree to indemnify and hold harmless BRC Geology Limited and its affiliates, employees, and partners from any claims, losses, or damages resulting from their use of our services.</p>

            <h2 className='font-semibold text-xl mb-2'>11. Changes to Terms</h2>
            <p className=' text-sm mb-2'>BRC Geology Limited reserves the right to update or modify these terms and conditions at any time. Users are responsible for regularly reviewing these terms. Continued use of our services after changes indicates acceptance of the updated terms.</p>

            <h2 className='font-semibold text-xl mb-2'>12. Governing Law</h2>
            <p className=' text-sm mb-2'>These terms and conditions are governed by and construed in accordance with the laws of the State of California, USA. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in San Francisco County, California.</p>

            <p className=' text-sm mb-2'>By using BRC Geology Limited's services, you acknowledge that you have read, understood, and agree to these terms and conditions.</p>

            <p className=' text-sm mb-2'>If you have any questions or concerns about these terms, please contact us at:</p>
            <p className=' text-sm mb-2'>Address: 201 Spear St, San Francisco, CA 94105, USA</p>
            <p className=' text-sm mb-2'>Phone: +1 (510) 224-2927</p>

            <p className=' text-sm mb-2'>Thank you for choosing BRC Geology Limited for your geology mining needs.</p>
          </div>

        </Container>
      </section>
    </>
  )
}

export default Terms