import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ListingDetail() {
  const router = useRouter()
  const { id } = router.query
  const [listing, setListing] = useState<any>(null)

  useEffect(() => {
    if (!id) return
    fetch('/api/listings/' + id).then(r => r.json()).then(setListing)
  }, [id])

  if (!listing) return <div className="p-12">Loading...</div>

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">{listing.title}</h1>
      <p className="text-gray-600 mt-2">{listing.description}</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <img src={listing.images?.[0] || '/images/listing-1.jpg'} alt={listing.title} className="w-full h-96 object-cover rounded-lg" />
        </div>
        <aside className="glass p-4 rounded-lg">
          <div className="text-xl font-bold">₹{listing.price}</div>
          <div className="text-sm text-gray-600">{listing.areaSqft} sq.ft • {listing.bedrooms} BHK</div>
          <form className="mt-4 space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('Lead sent')}}>
            <input className="w-full p-2 border rounded" placeholder="Your name" />
            <input className="w-full p-2 border rounded" placeholder="Phone" />
            <button className="w-full p-2 rounded bg-green-700 text-white">Request Site Visit</button>
          </form>
        </aside>
      </div>
    </div>
  )
}
