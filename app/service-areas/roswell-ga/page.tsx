import { roswell } from '@/data/cities/roswell-ga'
import LocationPage from '@/components/LocationPage/LocationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `AV Installation in Roswell, GA | Integrated Solutions of Georgia`,
  description: roswell.metaDescription,
}

export default function Page() {
  return <LocationPage city={roswell} />
}
