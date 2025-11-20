import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full sticky top-0 bg-white/60 backdrop-blur z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-700 to-green-400 rounded-full flex items-center justify-center text-white font-bold">S</div>
          <div>
            <div className="font-semibold">Shivbalaji Developers</div>
            <div className="text-xs text-gray-500">Visakhapatnam</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/projects" className="interactive">Projects</Link>
          <Link href="/listings" className="interactive">Listings</Link>
          <Link href="/agents" className="interactive">Agents</Link>
          <Link href="/contact" className="interactive btn">Contact</Link>
        </nav>
        <div className="md:hidden"></div>
      </div>
    </header>
  )
}
