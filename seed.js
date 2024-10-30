const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const seed = async () => {
    const createMany = await prisma.Video.createMany({
        data: [
            { name: 'Cat video', url: '/videos/test.mp4', votes: 10, length: 100, image: 'cat_video.jpg' },
            { name: 'Dog video', url: '/videos/test.mp4', votes: 0, length: 180, image: 'dog_video.jpg' },
            { name: 'An analysis of undersea audio structures', url: '/videos/test.mp4', votes: 2, length: 60, image: 'undersea_audio.jpg' },
            { name: 'Test video, please ignore', url: '/videos/test.mp4', votes: 100, length: 270, image: 'MeandJessie.jpg' },
        ],
        skipDuplicates: true
    })
}

seed()