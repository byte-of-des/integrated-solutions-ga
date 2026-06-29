import { buford } from '@/data/cities/buford-ga'
import LocationPage from '@/components/LocationPage/LocationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `AV Installation in Buford, GA | Integrated Solutions of Georgia`,
  description: buford.metaDescription,
}

export default function Page() {
  return <LocationPage city={buford} />
}
