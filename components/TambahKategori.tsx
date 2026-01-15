'use client'
import { useState, SyntheticEvent } from "react"
import { useRouter } from "next/navigation"

const TambahKategori = () => {
    const [ namaKategori, setNamaKategori ] = useState('')
    const [ gambar, setGambar ] = useState('')
    const [ deskripsi, setDeskripsi ] = useState('')
    const [ modal, setModal ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    const router = useRouter()

    const handleModal = () => {
        setModal(!modal)
    }

    const handleSubmit = async (e: SyntheticEvent) => {

        e.preventDefault()

        setLoading(true)

        await fetch('http://localhost:8000/kategori', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                nama_kategori: namaKategori,
                gambar: gambar,
                deskripsi: deskripsi
            })
        })

        setLoading(false)
        setNamaKategori('')
        setGambar('')
        setDeskripsi('')
        router.refresh()
        setModal(!modal)



    }
    return (
        <div>

            <button onClick={handleModal} className='btn'>Tambah Kategori</button>

            <input type="checkbox" checked={modal} onChange={handleModal} className='modal-toggle' />

            <div className="modal">
                <div className="modal-box">
                    <h3 className='font-bold text-xl text-center py-4'>Tambah Kategori</h3>
                    <form onSubmit={handleSubmit} className='space-y-3'>
                        <div className="form-control">
                            <label htmlFor="" className='font-bold label'>Nama Kategori</label>
                            <input type="text" value={namaKategori} onChange={(e) => setNamaKategori(e.target.value)} className='input w-full input-bordered' />
                        </div>
                        <div className="form-control">
                            <label htmlFor="" className='font-bold label'>Link Gambar</label>
                            <input type="text" value={gambar} onChange={(e) => setGambar(e.target.value)} className='input w-full input-bordered' />
                        </div>
                        <div className="form-control">
                            <label htmlFor="" className='font-bold label'>Deskripsi</label>
                            <input type="text" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} className='input w-full input-bordered' />
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

export default TambahKategori