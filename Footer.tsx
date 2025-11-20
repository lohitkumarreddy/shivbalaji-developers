export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between">
        <div>
          <div className="font-semibold">Shivbalaji Developers</div>
          <div className="text-sm text-gray-500">Building Visakhapatnam's Better Tomorrow</div>
        </div>
        <div className="text-sm text-gray-600">Shivbalaji Developers © {new Date().getFullYear()} • Visakhapatnam</div>
      </div>
    </footer>
  )
}
