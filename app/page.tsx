import {PrismaClient} from '@prisma/client'
import Image from 'next/image';


export default async function Page(){
  const prisma = new PrismaClient()
  const videos= await prisma.video.findMany()
  console.log(videos)

  const videoList = videos.map((video) =>
    <li key={video.id}>
    </li>
    )

  return(
    <div>
      <div>
      <h1>Videos</h1>
        <ul>{videoList}</ul>
        </div>
    </div>
  )

}
 {/* <Image src="/MeandJessie.jpg" alt="Me and jessie" width = {200} height={200} priority={true}/> */}