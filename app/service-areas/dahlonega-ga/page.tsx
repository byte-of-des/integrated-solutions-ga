import { dahlonega } from '@/data/cities/dahlonega-ga'
import LocationPage from '@/components/LocationPage/LocationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `AV Installation in Dahlonega, GA | Integrated Solutions of Georgia`,
  description: dahlonega.metaDescription,
}

export default function Page() {
  return <LocationPage city={dahlonega} />
}
