'use client'
import { SyntheticEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

type products = {
    id: number,
    nama_produk: string,
    gambar: string,
    harga: number

}

const UpdateProduk = (item: products) => {
    const [modal, setModal] = useState(false)
    const [produk, setProduk] = useState(item.nama_produk)
    const [gambar, setGambar] = useState(item.gambar)
    const [harga, setHarga] = useState(item.harga)
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleModal = () => {
        setModal(!modal)
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()

        setLoading(true)

        await fetch(`http://localhost:8000/products/${item.id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                nama_produk: produk,
                gambar: gambar,
                harga: harga
            })
        })
        setLoading(false)
        router.refresh()
        setModal(false)

    }

    return (
        <div>

            <button onClick={handleModal} className='btn'>Update</button>

            <input type="checkbox" checked={modal} onChange={handleModal} className='modal-toggle' />

            <div className="modal">
                <div className="modal-box">
                    <h3 className='font-bold text-xl text-center py-4'>Update {item.nama_produk}</h3>
                    <form onSubmit={handleSubmit} className='space-y-3'>
                        <div className="form-control">
                            <label htmlFor="" className='font-bold label'>Produk</label>
                            <input type="text" value={produk} onChange={(e) => setProduk(e.target.value)} className='input w-full input-bordered' />
                        </div>
                        <div className="form-control">
                            <label htmlFor="" className='font-bold label'>Link Gambar</label>
                            <input type="text" value={gambar} onChange={(e) => setGambar(e.target.value)} className='input w-full input-bordered' />
                        </div>
                        <div className="form-control">
                            <label htmlFor="" className='font-bold label'>Harga</label>
                            <input type="text" value={harga} onChange={(e) => setHarga(Number(e.target.value))} className='input w-full input-bordered' />
                        </div>
                        <div className='modal-action'>
                            <button type='button' onClick={handleModal} className='btn'>Batal</button>
                            {!loading ? (
                                <button type='submit' className='btn btn-primary'>Simpan</button>

                            ) : (
                                <button type='button' className='btn loading'>Menyimpan ...</button>
                            )}

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduk