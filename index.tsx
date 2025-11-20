import { useState, useEffect } from 'react'
import PropertyCard from '../../components/PropertyCard'

export default function Listings() {
  const [listings, setListings] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/listings').then(r => r.json()).then(data => setListings(data))
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold">Properties for Sale in Visakhapatnam</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {listings.map(l => <PropertyCard key={l.id} listing={l} />)}
      </div>
    </div>
  )
}
