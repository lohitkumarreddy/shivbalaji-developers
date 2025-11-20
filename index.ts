import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const listings = await prisma.listing.findMany({ take: 50 })
    return res.status(200).json(listings)
  }

  if (req.method === 'POST') {
    const data = req.body
    const created = await prisma.listing.create({ data })
    return res.status(201).json(created)
  }

  res.setHeader('Allow', ['GET','POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
