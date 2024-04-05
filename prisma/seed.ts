import { prisma } from "../src/lib/prisma";

async function seed(){
    await prisma.event.create({
       data:{
        id: '2817e405-fb6a-4e0a-ac7d-55ae2b762179',
        title: 'Unite Summit',
        slug: 'unite-summit',
        details: 'details',
        maximumAttendees: 100,
       }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})