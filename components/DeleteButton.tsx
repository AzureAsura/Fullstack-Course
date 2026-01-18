'use client'
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'

const DeleteButton = ({id}: { id: string}) => {

    const router = useRouter()

    const handleDelete = async (id: string) => {

        await fetch(`http://localhost:8000/startup/${id}`, {
            method: 'DELETE'
        })

        router.push('/')

    }
    return (
        <button onClick={() => handleDelete(id)} className='cursor-pointer'>
            <Trash className='text-red-600' />
        </button>
    )
}

export default DeleteButton