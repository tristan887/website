// font

import { Playfair_Display, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

// frontend - runs the browser :D
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className={`text-8xl font-black tracking-tight ${playfair.className}`}>
        Diana Tristan
      </h1>
      {/* <h1 className="text-8xl font-black tracking-tight font-serif">My Portfolio</h1> */}
      <p className='mt-4 ${montserrat.className}`}'>
        Welcome to my finance and economics projects.</p>
      <p className="mt-6">Hi! My name is Diana and I am a senior at the University of Central Florida.
        I will be graduating with my Bachelor&apos;s in Economics with Minor in Middle Easter Studies.
      </p>

      {/* Option 2: Multiple buttons */}
      <div className="mt-6 flex gap-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded">
          Projects
        </button>
        <button className="bg-red-500 text-white px-6 py-2 rounded">
          Contact
        </button>
      </div>
    </main>
  );
}
