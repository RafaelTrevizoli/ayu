'use client'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

const imagens = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
]

const mensagens = [
    "Desde que te conheci, minha vida ficou mais doce.",
    "Você é minha inspiração diária. 💗",
    "Nosso amor é a melhor história que já vivi.",
    "Ao seu lado, todos os dias são especiais.",
]

export default function Principal() {
    const [index, setIndex] = useState(0)

    const next = () => setIndex((index + 1) % imagens.length)
    const prev = () => setIndex((index - 1 + imagens.length) % imagens.length)

    const swipeHandlers = useSwipeable({
        onSwipedLeft: next,
        onSwipedRight: prev,
        preventScrollOnSwipe: true,
        trackMouse: true, // permite usar também com o mouse no desktop
    })

    return (
        <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-between px-4 py-8">
            <div className="w-full max-w-2xl flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-2 text-center">
                    Feliz Dia dos Namorados! 💖
                </h1>
                <p className="text-lg sm:text-xl text-pink-500 mb-6 text-center">
                    Um pedacinho do quanto você é importante para mim.
                </p>

                {/* Carrossel com swipe */}
                <div
                    {...swipeHandlers}
                    className="relative w-full max-w-sm sm:max-w-md mb-6"
                >
                    <img
                        src={imagens[index]}
                        alt="Foto especial"
                        className="rounded-xl w-full h-64 object-cover shadow-lg transition-all duration-300"
                    />
                </div>

                {/* Mensagens */}
                <div className="w-full bg-white rounded-xl shadow p-4 space-y-4">
                    {mensagens.map((msg, i) => (
                        <p
                            key={i}
                            className="text-pink-700 text-base sm:text-lg text-center leading-relaxed"
                        >
                            “{msg}”
                        </p>
                    ))}
                </div>
            </div>

            {/* Rodapé */}
            <footer className="mt-8 text-sm text-center text-rose-400">
                Feito com 💕 por Rafael – 2025
            </footer>
        </div>
    )
}
