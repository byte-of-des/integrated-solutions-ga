import { gainesville } from '@/data/cities/gainesville-ga'
import LocationPage from '@/components/LocationPage/LocationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `AV Installation in Gainesville, GA | Integrated Solutions of Georgia`,
  description: gainesville.metaDescription,
}

export default function Page() {
  return <LocationPage city={gainesville} />
}
