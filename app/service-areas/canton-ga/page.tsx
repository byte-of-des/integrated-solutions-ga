import { canton } from '@/data/cities/canton-ga'
import LocationPage from '@/components/LocationPage/LocationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `AV Installation in Canton, GA | Integrated Solutions of Georgia`,
  description: canton.metaDescription,
}

export default function Page() {
  return <LocationPage city={canton} />
}
