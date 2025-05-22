'use client'
import { useState } from 'react'

const imagens = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
]

export default function Principal() {
    const [index, setIndex] = useState(0)

    const next = () => setIndex((index + 1) % imagens.length)
    const prev = () => setIndex((index - 1 + imagens.length) % imagens.length)

    return (
        <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold text-pink-600 mb-4 text-center">
                Feliz Dia dos Namorados! 💖
            </h1>

            <div className="relative w-full max-w-sm sm:max-w-md">
                <img
                    src={imagens[index]}
                    alt="Foto especial"
                    className="rounded-xl w-full h-64 object-cover shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-between px-2">
                    <button onClick={prev}>⬅️</button>
                    <button onClick={next}>➡️</button>
                </div>
            </div>

            <p className="mt-6 text-lg text-center text-pink-700">
                Cada momento com você é especial. Te amo! 💘
            </p>
        </div>
    )
}
