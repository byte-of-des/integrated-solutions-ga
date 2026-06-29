import { dawsonville } from '@/data/cities/dawsonville-ga'
import LocationPage from '@/components/LocationPage/LocationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `AV Installation in Dawsonville, GA | Integrated Solutions of Georgia`,
  description: dawsonville.metaDescription,
}

export default function Page() {
  return <LocationPage city={dawsonville} />
}
