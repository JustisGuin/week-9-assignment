import {PrismaClient} from '@prisma/client'
import { redirect } from 'next/navigation';

export default async function Page({params}: {params: {slug: string}}) {
  const prisma = new PrismaClient()
  const video = await prisma.video.findUnique({
    where: {
      id: Number(params.slug),
    }
  })

  return(
    <div>
      <span>{video?.name}</span>-{video?.length}-{video?.votes}
    </div>
  )
  
  
}