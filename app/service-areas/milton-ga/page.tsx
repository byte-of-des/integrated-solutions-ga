import { milton } from '@/data/cities/milton-ga'
import LocationPage from '@/components/LocationPage/LocationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `AV Installation in Milton, GA | Integrated Solutions of Georgia`,
  description: milton.metaDescription,
}

export default function Page() {
  return <LocationPage city={milton} />
}
