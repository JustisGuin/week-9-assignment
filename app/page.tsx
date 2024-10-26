import {PrismaClient} from '@prisma/client'


export default async function Page({videoId}: {videoId: number}){
  const prisma = new PrismaClient()
  let videos= await prisma.video.findMany()
  console.log(videos)

  const videoList = videos.map((video) =>
  <li>{video.name}</li>)

  return(
    <div>
      <h2>Videos</h2>
      <ul>{videoList}</ul>
    </div>
  )

}