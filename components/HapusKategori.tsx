'use client'
import { useState, SyntheticEvent } from "react"
import { useRouter } from "next/navigation"

type kategoriType = {
    id: number,
    nama_kategori: string,
    gambar: string,
    deskripsi: string
}

const HapusKategori = (kategori: kategoriType) => {
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleModal = () => {
        setModal(!modal)
    }

    const handleSubmit = async (categoryId: number) => {

        setLoading(true)

        await fetch(`http://localhost:8000/kategori/${categoryId}`, {
            method: 'DELETE',
        })

        setLoading(false)
        router.refresh()
        setModal(!modal)



    }
    return (
        <div>

            <button onClick={handleModal} className='btn'>Hapus</button>

            <input type="checkbox" checked={modal} onChange={handleModal} className='modal-toggle' />

            <div className="modal">
                <div className="modal-box">
                    <h3 className='font-bold text-xl text-center py-4'>Hapus Kategori</h3>
                    <div className='modal-action'>
                        <button type='button' onClick={handleModal} className='btn'>Batal</button>
                        {!loading ? (
                            <button type='button' onClick={() => handleSubmit(kategori.id)} className='btn btn-primary'>Simpan</button>

                        ) : (
                            <button type='button' className='btn loading'>Menyimpan ...</button>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HapusKategori