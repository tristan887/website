import { inter } from "../fonts";
import Image from 'next/image'

export default function about() {
  return (
    <main className="min-h-screen p-8">
      <h1 className={`text-6xl font-bold text-center ${inter.className}`}>
        about me 
      </h1>
      <p className={`mt-6 text-left max-w-2xl mx-auto text-gray-700 ${inter.className}`}>
        I am a senior at the University of Central Florida and 
        I will be graduating with my Bachelor of Science (BS) in Economics and Minor in Middle Eastern Studies.
        Classes such as Econometrics (and Advanced Topics), International Macroeconomics, and Current Topics (mixing real analysis and economics)
        have been some of my favorites thus far!
      </p>
      <p className={`mt-6 text-left max-w-2xl mx-auto text-gray-700 ${inter.className}`}>
        <span className="font-bold">Hobbies: </span>
        Reading (literary fiction and nonfiction), writing, and running 
      </p>
    <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8 max-w-2xl mx-auto">
        <div className="aspect-w-1 aspect-h-1">
          <img src="/p1.png" alt="Pic 1" className="object-cover" />
        </div>
        <div className="aspect-w-1 aspect-h-1"> 
          <img src="/p2.png" alt="Pic 2" className="object-cover" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/p3.png" alt="Pic 3" className="object-cover" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/p4.png" alt="Pic 4" className="object-cover" />
        </div>
      </div>  
    </main>
  );
}