import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'admin@shivbalajidev.local' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@shivbalajidev.local',
      password: '$2a$10$saltsaltsaltplaceholder',
      role: 'admin'
    }
  })

  const project = await prisma.project.create({
    data: {
      name: 'BlueBay Residences',
      slug: 'bluebay-residences',
      description: 'Coastal-inspired 2/3 BHK homes with sea-view terraces.',
      status: 'ongoing',
      images: ['images/bluebay-1.jpg','images/bluebay-2.jpg'],
      location: 'MVP Colony, Visakhapatnam'
    }
  })

  await prisma.listing.create({
    data: {
      title: '3 BHK Sea-View Apartment — BlueBay Residences',
      slug: '3bhk-bluebay-mvp',
      price: 7500000,
      areaSqft: 1200,
      bedrooms: 3,
      bathrooms: 2,
      type: 'apartment',
      status: 'ready',
      projectId: project.id,
      address: { street: 'Plot 12, MVP Colony', city: 'Visakhapatnam', pincode: '530017' },
      lat: 17.7200,
      lng: 83.3000,
      amenities: { gym: true, rooftop: true, parking: true },
      images: ['images/listing-1.jpg','images/listing-2.jpg'],
      description: 'Modern 3 BHK with sea view balcony, modular kitchen, and rooftop amenities. Ready to occupy.'
    }
  })
}

main()
  .catch(e => console.error(e))
  .finally(() => process.exit())
