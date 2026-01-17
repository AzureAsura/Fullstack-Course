'use client'

import React, { useState } from 'react'

type startupType = {
    id: number,
    deskripsi: string,
}

const CardDescription = (item: startupType) => {
    const [showFullDescription, setShowFullDeskripsion] = useState(false)

    let deskripsi = item.deskripsi

    if (!showFullDescription) {
        if (deskripsi.length> 85) {
            deskripsi = deskripsi.substring(0, 85) + '... '
        }
    } else {
        deskripsi = deskripsi + ' '
    }



    return (

        <h3>{deskripsi}
            {deskripsi.length > 84 && (
                <button onClick={() => setShowFullDeskripsion(!showFullDescription)} className='text-indigo-600 cursor-pointer'>{!showFullDescription ? ' More': '  Less'}
                </button>
            )}
        </h3>
    )
}

export default CardDescription