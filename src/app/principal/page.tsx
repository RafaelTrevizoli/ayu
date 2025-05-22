'use client'
import {useState} from 'react'
import {useSwipeable} from 'react-swipeable'

const imagens = [
    '/img1.jpg',
    '/img1.jpg',
    '/img1.jpg',
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
        trackMouse: true,
    })

    return (
        <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-between px-4 py-8">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(20)].map((_, i) => (
                    <span
                        key={i}
                        className="absolute text-pink-300 animate-floating"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            fontSize: `${Math.random() * 20 + 12}px`,
                        }}
                    >
      ❤️
    </span>
                ))}
            </div>

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
                    className="relative w-full max-w-sm sm:max-w-md mb-4 overflow-hidden"
                >
                    <div className="relative w-full h-64">
                        {imagens.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Foto ${i + 1}`}
                                className={`
                  absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-lg transition-all duration-700
                  ${i === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}
                `}
                            />
                        ))}
                    </div>

                    {/* Indicadores */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {imagens.map((_, i) => (
                            <span
                                key={i}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    i === index ? 'bg-pink-600' : 'bg-pink-300'
                                }`}
                            />
                        ))}
                    </div>
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

            <audio autoPlay loop hidden>
                <source src="/musica.mp3" type="audio/mpeg"/>
                Seu navegador não suporta áudio.
            </audio>
            
            {/* Rodapé */}
            <footer className="mt-8 text-sm text-center text-rose-400">
                Feito com 💕 por Rafael – 2025
            </footer>
        </div>
    )
}
