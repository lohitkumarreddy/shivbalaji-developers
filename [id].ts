import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  if (req.method === 'GET') {
    const listing = await prisma.listing.findUnique({ where: { id: String(id) } })
    if (!listing) return res.status(404).json({ error: 'Not found' })
    return res.status(200).json(listing)
  }
  res.setHeader('Allow', ['GET'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
