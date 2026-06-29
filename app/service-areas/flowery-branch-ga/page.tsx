import { floweryBranch } from '@/data/cities/flowery-branch-ga'
import LocationPage from '@/components/LocationPage/LocationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `AV Installation in Flowery Branch, GA | Integrated Solutions of Georgia`,
  description: floweryBranch.metaDescription,
}

export default function Page() {
  return <LocationPage city={floweryBranch} />
}
