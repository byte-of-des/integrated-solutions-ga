import { johnsCreek } from '@/data/cities/johns-creek-ga'
import LocationPage from '@/components/LocationPage/LocationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `AV Installation in Johns Creek, GA | Integrated Solutions of Georgia`,
  description: johnsCreek.metaDescription,
}

export default function Page() {
  return <LocationPage city={johnsCreek} />
}
