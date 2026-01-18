import React from 'react'
import Image from 'next/image'
import { Pen, Trash } from 'lucide-react'
import MarkdownIt from 'markdown-it'
import Link from 'next/link'
import DeleteButton from '@/components/DeleteButton'

const md = MarkdownIt()

export const getStartupsById = async (id: string) => {
    const res = await fetch(`http://localhost:8000/startup/${id}`, {
        cache: 'no-store'
    })
    return res.json()
}

const page = async ({ params }: { params: { id: string } }) => {

    const { id } = await params


    const startup = await getStartupsById(id)

    const pitchDetails = md.render(startup.pitch)



    return (
        <div className=''>
            <section className="relative w-full min-h-[420px] overflow-hidden flex flex-col items-center justify-center px-6 py-14">
                <Image
                    src='/hero-img.avif'
                    alt="hero"
                    fill
                    className="absolute w-full h-full object-cover -z-10"
                />
                <div className='absolute bg-black/50 inset-0 -z-10' />

                <div className="relative z-10 text-center pt-10">
                    <h1 className="text-4xl md:text-6xl leading-12 md:leading-18 uppercase font-extrabold text-white">
                        {startup.nama_startup}
                    </h1>
                </div>
                <h4 className='relative text-center max-w-5xl z-10 text-white mt-8 font-bold text-sm md:text-xl'>{startup.deskripsi}</h4>
            </section>

            <section className='mt-10 max-w-7xl mx-auto px-4 space-y-10'>
                <div className='space-y-7'>
                    <img src={startup.gambar} alt="startup img" className='w-full rounded-xl' />

                    <div className='flex gap-3 justify-end'>
                        <Link href={`/startup/${id}/edit`}>
                            <Pen />
                        </Link>
                        <DeleteButton id={startup.id}/>

                    </div>
                </div>

                <div className='max-w-4xl mx-auto space-y-10 py-10'>
                    <div className='flex justify-between items-center'>
                        <div className='flex space-x-2'>
                            <img src="/profile.jpeg" alt="profile" className='rounded-full w-12 h-12  md:w-16 md:h-16 object-cover' />
                            <div className='flex flex-col justify-center'>
                                <p className='font-bold text-md md:text-lg'>Anonymus</p>
                                <p className='text-sm md:text-md'>@Anonymus</p>
                            </div>
                        </div>
                        <div className='px-4 py-2 bg-black rounded-full'>
                            <p className='font-bold text-white text-sm md:text-lg'>{startup.kategori}</p>
                        </div>
                    </div>


                    <h1 className='font-bold text-4xl'>Detail Pitch</h1>

                    <article className='text-lg' dangerouslySetInnerHTML={{ __html: pitchDetails }}></article>



                    <hr />
                </div>

            </section>


        </div>
    )
}

export default page