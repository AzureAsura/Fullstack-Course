'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


type products = {
    id: number,
    nama_produk: string,
    gambar: string,
    harga: number

}

const HapusProduk = (item: products) => {
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleModal = () => {
        setModal(!modal)
    }

    const handleSubmit = async (productId: number) => {

        setLoading(true)

        await fetch(`http://localhost:8000/products/${productId}`, {
            method: "DELETE",
        })

        
        setLoading(false)
        console.log(productId)
        router.refresh()
        setModal(false)

    }
    return (
        <div>

            <button onClick={handleModal} className='btn'>Hapus Produk</button>

            <input type="checkbox" checked={modal} onChange={handleModal} className='modal-toggle' />

            <div className="modal">
                <div className="modal-box">
                    <h3 className='font-bold text-xl text-center py-4'>Hapus {item.nama_produk} ?</h3>
                    <div className='modal-action'>

                        <button type='button' onClick={handleModal} className='btn'>Batal</button>

                        {!loading ? (
                            <button type='button' onClick={() => handleSubmit(item.id)} className='btn btn-primary'>Hapus</button>

                        ) : (
                            <button type='button' className='btn loading'>Menghapus ...</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HapusProduk