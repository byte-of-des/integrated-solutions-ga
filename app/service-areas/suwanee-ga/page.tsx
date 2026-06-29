import { suwanee } from '@/data/cities/suwanee-ga'
import LocationPage from '@/components/LocationPage/LocationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `AV Installation in Suwanee, GA | Integrated Solutions of Georgia`,
  description: suwanee.metaDescription,
}

export default function Page() {
  return <LocationPage city={suwanee} />
}
