import { inter } from './fonts';
import Image from 'next/image';
import SocialIcons from './components/socialicons';
import Footer from './footer';

// frontend - runs the browser :D
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-8">
      {/*profile pic */}
      <Image
        src="/IMG_1254.JPG"
        alt="profile picture" 
        width={200}
        height={50}
        className='rounded-full mb-6'
       /> 
      <h1 className={`text-6xl font-black tracking-tight ${inter.className}`}>
        welcome
      </h1>
      <div className="mt-6 text-left max-w-2xl mx-auto text-gray-700 ">
        <p>Hi! My name is Diana Tristan and this is <i>the orange project</i>. I describe <i>the op</i> as the intersection between
      my professional projects and personal interests. I love researching and writing about how everything around us relates 
      to economics!
      </p>
      </div>
      <h2 className={`font-black text-center mt-6 ${inter.className}`}>
        Follow me:
      </h2>
      <SocialIcons />
    </main>
  );
}
