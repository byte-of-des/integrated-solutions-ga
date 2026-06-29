import { alpharetta } from '@/data/cities/alpharetta-ga'
import LocationPage from '@/components/LocationPage/LocationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `AV Installation in Alpharetta, GA | Integrated Solutions of Georgia`,
  description: alpharetta.metaDescription,
}

export default function Page() {
  return <LocationPage city={alpharetta} />
}
