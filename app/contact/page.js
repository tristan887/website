import { inter } from "../fonts";
import ContactForm from '../components/contactform';
import Image from 'next/image'

export default function contact() {
  return (
    <main className="min-h-screen p-8 flex justify-center items-center">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-15 md:pr-8">
            <h1 className={`text-6xl font-bold -mt-20 ${inter.className}`}>
              Say Hello
            </h1>
            <p className={`mt-4 ${inter.className}`} style={{ color: '#de5003ff' }}>
              <i>I'd love for you to reach out!</i>
            </p>
            {/* add your picture */}
            <img src="/contactme.jpg" alt="Your Picture" className="mt-2" 
            style={{ width: '400px', height: '400px' }}
            />
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
