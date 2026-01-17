import React from 'react'
import CardDescription from './CardDescription'
import Link from 'next/link'
import markdownit from 'markdown-it'

const md = new markdownit()


type startupType = {
    id: number,
    nama_startup: string,
    gambar: string,
    deskripsi: string,
    kategori: string,
    pitch: string

}

const StartupCard = (item: startupType) => {

    const pitchDetails = md.render(item.pitch)


    return (
        <div className='border-4 border-black p-6 rounded-2xl flex flex-col justify-between hover:shadow-lg hover:shadow-indigo-700 hover:-translate-y-2 duration-300'>
            <div className='flex flex-col space-y-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-medium'>Anonymus <br />
                        <span className='font-bold text-xl'>{item.nama_startup}</span>
                    </h1>

                    <img src="profile.jpeg" alt="profile photo" className='w-12 h-12 rounded-full object-cover' />
                </div>

                <CardDescription {...item} />

                <img src={item.gambar} alt="startup-img" className='object-cover  aspect-[15/10]' />


                <article dangerouslySetInnerHTML={{ __html: pitchDetails }} className='prose max-w-4xl font-work-sans break-all' />

            </div>

            <div className='pt-7 flex items-center justify-between'>
                <p className='font-bold'>{item.kategori}</p>

                <Link href={`/startup/${item.id}`}>
                    <div className='py-2 px-5 bg-black rounded-full'>
                        <p className='text-white'>Details</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default StartupCard