import { getSortedWriting, getSortedProjects } from '@/lib/content'
import { TabsClient } from '@/components/tabs-client'

export default function Home() {
  const writings = getSortedWriting()
  const projects = getSortedProjects().slice(0, 4)

  return (
    <div className="w-full">
      <div className="w-full max-w-xl mx-auto px-4 py-12">
        <TabsClient writings={writings} projects={projects} />
      </div>
    </div>
  )
}
