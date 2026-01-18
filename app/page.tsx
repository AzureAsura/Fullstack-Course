import StartupCard from '@/components/StartupCard'
import Image from 'next/image'

type startupType = {
  id: number,
  nama_startup: string,
  gambar: string,
  deskripsi: string,
  kategori: string,
  pitch: string

}

async function GetStartups() {
  const res = await fetch("http://localhost:8000/startup", {
    cache: "no-store"
  })
  return res.json()
}

const page = async () => {

  const startup: startupType[] = await GetStartups()

  return (
    <div>
      <section className="relative w-full min-h-[520px] overflow-hidden flex flex-col items-center justify-center px-6">
        <Image
          src='/hero-img.avif'
          alt="hero"
          fill
          className="absolute w-full h-full object-cover -z-10"
        />
        <div className='absolute bg-black/50 inset-0 -z-10' />

        <div className="relative z-10 text-center pt-10">
          <h1 className="text-4xl md:text-6xl leading-12 md:leading-18 uppercase font-extrabold text-white">
            Pitch your startup, <br /> Connect with entrepreneur
          </h1>
        </div>
        <h4 className='relative z-10 text-white mt-8 font-bold text-xl text-center'>Submit ideas, vote on pitches, and get noticed in virtual competitions</h4>
      </section>

      <section className='max-w-7xl mx-auto px-4 py-10'>
        <h1 className='text-2xl font-bold'>All startup</h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-7'>
          {startup.map((item, index) => (
            <StartupCard {...item} key={item.id} />
          ))}
        </div>





      </section>
    </div>

  )
}

export default page