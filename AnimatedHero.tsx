import { motion } from 'framer-motion'

export default function AnimatedHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-r from-green-50 to-white">
      <div className="max-w-4xl">
        <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1}} className="text-4xl md:text-5xl font-bold">Build your future in Visakhapatnam.</motion.h1>
        <motion.p initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2}} className="mt-4 text-lg text-gray-600">Premium homes, thoughtfully built. From single-family houses to apartment complexes and ventures — we deliver quality on schedule.</motion.p>
        <div className="mt-6 flex gap-4">
          <a href="/listings" className="px-6 py-3 rounded-md bg-gradient-to-r from-green-700 to-green-400 text-white interactive">View Listings</a>
          <a href="/contact" className="px-6 py-3 rounded-md border interactive">Book a Consultation</a>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-green-100 opacity-40 -translate-y-1/3 translate-x-1/4"></div>
    </section>
  )
}
