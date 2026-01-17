import Image from 'next/image'
import StartupForm from '@/components/StartupForm'


const page = () => {

    return (
        <div>
            <section className="relative w-full min-h-[420px] overflow-hidden flex flex-col items-center justify-center px-6">
                <Image
                    src='/hero-img.avif'
                    alt="hero"
                    fill
                    className="absolute w-full h-full object-cover -z-10"
                />
                <div className='absolute bg-black/50 inset-0 -z-10' />

                <div className="relative z-10 text-center pt-10">
                    <h1 className="text-4xl md:text-6xl leading-12 md:leading-18 uppercase font-extrabold text-white">
                        Publish Startup
                    </h1>
                </div>
                <h4 className='relative z-10 text-white mt-8 font-bold text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolores consequuntur debitis, quo </h4>
            </section>

            <div className='max-w-7xl mx-auto px-4 py-10'>
                <StartupForm/>
            </div>


        </div>
    )
}

export default page