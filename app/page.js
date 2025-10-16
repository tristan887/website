// font

import { inter } from './fonts';
import Image from 'next/image';
import SocialIcons from './components/socialicons';

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
      <div className="grid grid-cols-2 gap-5 mt-6">
        <div>Hi! My name is Diana Tristan and this is <i>the orange project</i>. I describe <i>the op</i> as an intersection between
      my professional projects and personal interests in research and writing about how everything is economics!</div>
        <div>I am a senior at the University of Central Florida.
        I will be graduating with my Bachelor of Science (BS) in Economics and a Minor in Middle Easter Studies.
        Classes such as the Introduction to Econometrics, Advanceded Topics of International Macroeconomics, Advanceded Topics in Econometrics,
        and </div>
      </div>

      <p className="text-center mt-6">Follow me:</p>
      <SocialIcons />
      {/* option 2: buttons!
      <div className="mt-6 flex gap-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded">
          Projects
        </button>
        <button className="bg-red-500 text-white px-6 py-2 rounded">
          Contact
        </button>
      </div> */}
    </main>
  );
}
