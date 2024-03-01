import { IMG8 } from '../assets'
import Container from '../components/Container'

const Privacy = () => {
  return (
    <>
    <section className=" w-full bg-black/60 bg-center bg-blend-overlay bg-cover h-48 md:h-96" style={{ backgroundImage:`url(${IMG8})` }}>
        <Container>
            <div className=" w-full h-full flex justify-center items-center">
                <h2 className=" font-bold text-2xl md:text-5xl text-white">Privacy Policy</h2>
            </div>
        </Container>
    </section>
      <section className="min-h-screen">
        <Container>
        <div className='py-20'>
          <h1 className=' font-semibold text-xl '>Privacy Policy</h1>
          <p className=' text-sm mb-2'>Last Updated: [Insert Date]</p>

          <h2 className='font-semibold text-xl mb-2'>1. Information We Collect</h2>
          <p className=' text-sm mb-2'>We may collect personal information when you:</p>
          <ul>
            <li>Use our website or services</li>
            <li>Contact us through email, phone, or other means</li>
            <li>Participate in surveys, promotions, or events</li>
          </ul>
          <p className=' text-sm mb-2'>The types of personal information we may collect include:</p>
          <ul>
            <li>Name</li>
            <li>Contact information (email, phone number, address)</li>
            <li>Company name</li>
            <li>Payment information (if applicable)</li>
          </ul>

          <h2 className='font-semibold text-xl mb-2'>2. How We Use Your Information</h2>
          <p className=' text-sm mb-2'>We use personal information for the following purposes:</p>
          <ul>
            <li>Providing and improving our services</li>
            <li>Communicating with you about our services, promotions, and events</li>
            <li>Processing payments (if applicable)</li>
            <li>Responding to inquiries and providing customer support</li>
          </ul>

          <h2 className='font-semibold text-xl mb-2'>3. Disclosure of Information</h2>
          <p className=' text-sm mb-2'>We may disclose personal information to:</p>
          <ul>
            <li>Service providers and partners who assist us in delivering our services</li>
            <li>Law enforcement or regulatory authorities as required by law</li>
            <li>Other parties with your consent or as permitted by law</li>
          </ul>

          <h2 className='font-semibold text-xl mb-2'>4. Data Security</h2>
          <p className=' text-sm mb-2'>We take reasonable measures to protect personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.</p>

          <h2 className='font-semibold text-xl mb-2'>5. Data Retention</h2>
          <p className=' text-sm mb-2'>We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>

          <h2 className='font-semibold text-xl mb-2'>6. Your Rights</h2>
          <p className=' text-sm mb-2'>You have the right to:</p>
          <ul>
            <li>Access, update, or delete your personal information</li>
            <li>Object to the processing of your personal information</li>
            <li>Opt-out of receiving marketing communications</li>
          </ul>

          <h2 className='font-semibold text-xl mb-2'>7. Cookies</h2>
          <p className=' text-sm mb-2'>Our website may use cookies and similar technologies to enhance user experience and analyze usage. You can manage cookies through your browser settings.</p>

          <h2 className='font-semibold text-xl mb-2'>8. Third-Party Links</h2>
          <p className=' text-sm mb-2'>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties.</p>

          <h2 className='font-semibold text-xl mb-2'>9. Children's Privacy</h2>
          <p className=' text-sm mb-2'>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe we have inadvertently collected personal information from your child, please contact us to request deletion.</p>

          <h2 className='font-semibold text-xl mb-2'>10. Changes to Privacy Policy</h2>
          <p className=' text-sm mb-2'>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on our website.</p>

          <h2 className='font-semibold text-xl mb-2'>11. Contact Us</h2>
          <p className=' text-sm mb-2'>If you have any questions, concerns, or requests regarding this Privacy Policy or our handling of personal information, please contact us at:</p>
          <p className=' text-sm mb-2'>Address: 201 Spear St, San Francisco, CA 94105, USA</p>
          <p className=' text-sm mb-2'>Phone: +1 (510) 224-2927</p>
          <p className=' text-sm mb-2'>Email: privacy@brcgeology.com</p>

          <p className=' text-sm mb-2'>By using our services, you consent to the collection and use of your personal information as described in this Privacy Policy.</p>
        </div>
        </Container>
      </section>
    </>
  )
}

export default Privacy