import { cumming } from '@/data/cities/cumming-ga'
import LocationPage from '@/components/LocationPage/LocationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `AV Installation in Cumming, GA | Integrated Solutions of Georgia`,
  description: cumming.metaDescription,
}

export default function Page() {
  return <LocationPage city={cumming} />
}
