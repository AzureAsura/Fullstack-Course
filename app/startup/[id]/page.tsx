import React from 'react'


const getStartupsById = async (id: string) => {
    const res = await fetch(`http://localhost:8000/startup/${id}`, {
        cache: 'no-store'
    })
    return res.json()
}

const page = async ({ params }: { params: { id: string } }) => {

    const { id } = await params


    const startup = await getStartupsById(id)

    return (
        <div className='pt-20'>
            <p>{startup.deskripsi}</p>
        </div>
    )
}

export default page