import React from 'react'
import TambahProduk from '@/components/TambahProduk'
import HapusProduk from '@/components/HapusProduk'
import UpdateProduk from '@/components/UpdateProduk'

type products = {
    id: number,
    nama_produk: string,
    gambar: string,
    harga: number

}

async function getProducts() {
    const res = await fetch('http://localhost:8000/products', {
        cache: 'no-store'
    })
    return res.json()
}

const page = async () => {

    const products: products[] = await getProducts()

    return (
        <div className='p-10'>
            <div className='py-4'>
                <TambahProduk/>
            </div>
            <table className='table w-full border border-black overflow-hidden'>
                <thead className=''>
                    <tr>
                        <th>#</th>
                        <th>Produk</th>
                        <th>Gambar</th>
                        <th>Harga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => (
                        <tr key={item.id}>
                            <th>{index + 1}</th>
                            <th>{item.nama_produk}</th>
                            <th><img src={item.gambar} alt="gambar" className='w-14' /></th>
                            <th>$ {item.harga}</th>
                            <th className='flex gap-5'>
                                <UpdateProduk {...item}/>
                                <HapusProduk {...item}/>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default page