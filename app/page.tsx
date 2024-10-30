import { PrismaClient } from '@prisma/client'

export default async function Page() {
  'use server'
  const prisma = new PrismaClient()
  const videos = await prisma.video.findMany()
  console.log(videos)



  // Ensure videoList has meaningful content
  const videoList = videos.map((video) => (
    <li key={video.id}>{video.name}</li> 
  ))

  return (
    <div>
      <h1>Videos</h1>
      <ul>{videoList.length > 0 ? videoList : <li>No videos found</li>}</ul>
    </div>
  )
}