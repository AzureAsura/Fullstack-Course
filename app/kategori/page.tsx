import HapusKategori from '@/components/HapusKategori'
import TambahKategori from '@/components/TambahKategori'
import UpdateKategori from '@/components/UpdateKategori'
import React from 'react'

type Kategori = {
    id: number,
    nama_kategori: string,
    gambar: string,
    deskripsi: string

}

async function getCategory() {
    const res = await fetch('http://localhost:8000/kategori', {
        cache: 'no-store'
    })
    return res.json()
}

const page = async () => {

    const kategori: Kategori[] = await getCategory()

    return (
        <div className='p-10'>
            <div className='py-4'>
                <TambahKategori />
            </div>
            <table className='table w-full border border-black overflow-hidden'>
                <thead className='bg-gray-100'>
                    <tr>
                        <th>#</th>
                        <th>Produk</th>
                        <th>Gambar</th>
                        <th>Deskripsi</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {kategori.map((kategori, index) => (
                        <tr key={kategori.id}>
                            <th>{index + 1}</th>
                            <th>{kategori.nama_kategori}</th>
                            <th><img src={kategori.gambar} alt="gambar" className='w-14' /></th>
                            <th>$ {kategori.deskripsi}</th>
                            <th className='flex gap-5'>
                                <UpdateKategori {...kategori}/>
                                <HapusKategori {...kategori} />
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default page