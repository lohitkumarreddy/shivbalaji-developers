import Link from 'next/link'

type Props = {
  listing: any
}

export default function PropertyCard({ listing }: Props) {
  return (
    <div className="glass p-4 rounded-2xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-2">
      <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
        <img src={listing.images?.[0] || '/images/listing-1.jpg'} alt={listing.title} className="w-full h-full object-cover" />
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold">{listing.title}</h3>
          <div className="text-green-700 font-bold">₹{(listing.price/100000).toFixed(2)}L</div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{listing.areaSqft} sq.ft • {listing.bedrooms} BHK</p>
        <div className="mt-3 flex gap-2">
          <Link href={`/listings/${listing.slug || listing.id}`} className="px-3 py-2 rounded-md bg-green-700 text-white text-sm interactive">View</Link>
          <button className="px-3 py-2 rounded-md border interactive">Save</button>
        </div>
      </div>
    </div>
  )
}
