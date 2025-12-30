import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full p-6 flex justify-between items-center bg-white border-b">
      {/* name */}
      <Link href="/" className="text-2xl font-bold">
        the orange project
      </Link>
      
      {/* Navigation */}
      <nav className="flex gap-8">
        <Link href="/" className="hover:text-[#de5003]">
          home
        </Link>
        <Link href="/about" className="hover:text-[#de5003]">
          about
        </Link>
        <Link href="/projects" className="hover:text-[#de5003]">
          projects
        </Link>
        <Link href="/contact" className="hover:text-[#de5003]">
          contact
        </Link>
      </nav>
    </header>
  );
}