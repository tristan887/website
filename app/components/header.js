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
        <Link href="/" className="hover:text-gray-600">
          home
        </Link>
        <Link href="/projects" className="hover:text-gray-600">
          about
        </Link>
        <Link href="/about" className="hover:text-gray-600">
          projects
        </Link>
        <Link href="/contact" className="hover:text-gray-600">
          contact
        </Link>
      </nav>
    </header>
  );
}