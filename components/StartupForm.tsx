'use client'

import React from "react"
import { SyntheticEvent, useState } from "react"
import MDEditor from "@uiw/react-md-editor"
import { useRouter } from "next/navigation"

const StartupForm = () => {
    const [nama, setNama] = useState('')
    const [gambar, setGambar] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [kategori, setKategori] = useState('')
    const [pitch, setPitch] = useState<string>()

    const router = useRouter()

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()

        if (!pitch) {
            alert('isi pitch lebih dulu')
        } else {

            await fetch('http://localhost:8000/startup', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    nama_startup: nama,
                    gambar: gambar,
                    deskripsi: deskripsi,
                    kategori: kategori,
                    pitch: pitch
                })
            })

            setNama('')
            setGambar('')
            setDeskripsi('')
            setKategori('')
            setPitch('')
            router.push('/')
        }

    }

    return (
        <div className="min-h-screen max-w-2xl mx-auto flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-full border-4 rounded-2xl p-6 space-y-5 hover:shadow-xl hover:shadow-indigo-700  hover:-translate-y-2 duration-300"
            >
                <h1 className="text-2xl font-bold text-black text-center">
                    Create Startup
                </h1>

                <div className="space-y-1">
                    <label className="text-sm text-black">Nama Startup</label>
                    <input
                        type="text"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        className="w-full rounded-xl  px-4 py-2.5 text-black outline-none focus:ring-2 border"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-sm text-black">Link Gambar</label>
                    <input
                        type="text"
                        value={gambar}
                        onChange={(e) => setGambar(e.target.value)}
                        className="w-full rounded-xl  px-4 py-2.5 text-black outline-none focus:ring-2 border"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-sm text-black">Deskripsi Singkat</label>
                    <input
                        type="text"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        className="w-full rounded-xl  px-4 py-2.5 text-black outline-none focus:ring-2 border"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-sm text-black">Kategori</label>
                    <input
                        type="text"
                        value={kategori}
                        onChange={(e) => setKategori(e.target.value)}
                        className="w-full rounded-xl  px-4 py-2.5 text-black outline-none focus:ring-2 border"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-black">Pitch (Markdown)</label>
                    <div data-color-mode="light" className="rounded-xl overflow-hidden border border-neutral-700">
                        <MDEditor value={pitch} onChange={setPitch} height={260} />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full mt-4 rounded-xl bg-black text-white font-semibold py-3 hover:opacity-90 transition"
                >
                    Simpan
                </button>
            </form>
        </div>
    )

}

export default StartupForm