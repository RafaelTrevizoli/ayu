'use client'
import { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'

const imagens = [
    '/img1.jpeg',
    '/img2.jpeg',
    '/img3.jpeg',
    '/img4.jpeg',
    '/img5.jpeg',
]

const mensagens = [
    "Meu amor, quero que você saiba o quanto eu te amo. Cada momento que passo ao seu lado é especial e inesquecível.\n" +
    "Seu sorriso ilumina meus dias e sua presença me traz uma paz que nunca senti antes.\n" +
    "Você é a razão pela qual eu acordo todos os dias com um sorriso no rosto e a motivação que me faz querer ser uma pessoa melhor.\n" +
    "Amo cada detalhe seu, desde o jeito que você ri até a forma como você me olha.\n" +
    "Sua bondade, sua inteligência e sua beleza me encantam e me fazem te amar mais a cada dia que passa. Sou eternamente grato por ter você na minha vida e por poder compartilhar tantos momentos incríveis ao seu lado.",
]

export default function Principal() {
    const [index, setIndex] = useState(0)
    const [duracao, setDuracao] = useState('')

    const inicioRelacao = new Date('2020-04-04T14:30:00')

    const calcularDuracao = () => {
        const agora = new Date()
        const diff = agora.getTime() - inicioRelacao.getTime()

        const segundosTotais = Math.floor(diff / 1000)
        const anos = Math.floor(segundosTotais / (365.25 * 24 * 3600))
        const meses = Math.floor((segundosTotais % (365.25 * 24 * 3600)) / (30.44 * 24 * 3600))
        const dias = Math.floor((segundosTotais % (30.44 * 24 * 3600)) / (24 * 3600))
        const horas = Math.floor((segundosTotais % (24 * 3600)) / 3600)
        const minutos = Math.floor((segundosTotais % 3600) / 60)
        const segundos = segundosTotais % 60

        setDuracao(`${anos} ano${anos !== 1 ? 's' : ''}, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`)
    }

    useEffect(() => {
        calcularDuracao()
        const interval = setInterval(calcularDuracao, 1000)
        return () => clearInterval(interval)
    }, [])

    const next = () => setIndex((index + 1) % imagens.length)
    const prev = () => setIndex((index - 1 + imagens.length) % imagens.length)

    const swipeHandlers = useSwipeable({
        onSwipedLeft: next,
        onSwipedRight: prev,
        preventScrollOnSwipe: true,
        trackMouse: true,
    })

    return (
        <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-between px-4 py-8 text-white relative">
            {/* Emojis flutuantes */}
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
                    > 💜 </span>
                ))}
            </div>

            <div className="w-full max-w-2xl flex flex-col items-center z-10">
                {/* Spotify Embed */}
                <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/track/2plbrEY59IikOBgBGLjaoe?utm_source=generator"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />

                {/* Título e introdução */}
                <h1 className="text-2xl sm:text-4xl font-bold text-rose-200 mt-6 text-center">
                    Feliz Dia dos Namorados! 💖
                </h1>
                <p className="text-lg sm:text-xl text-white mb-6 text-center">
                    Um pedacinho do quanto você é importante para mim.
                </p>

                {/* Carrossel */}
                <div
                    {...swipeHandlers}
                    className="relative w-full max-w-sm sm:max-w-md mb-4 overflow-hidden"
                >
                    <div className="relative w-full h-104">
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
                    <div className="flex justify-center mt-4 space-x-2">
                        {imagens.map((_, i) => (
                            <span
                                key={i}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    i === index ? 'bg-pink-500' : 'bg-pink-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Cronômetro */}
                <div className="text-center text-white text-xl font-medium mt-4">
                    Eu te amo há: <br />
                    <span className="text-rose-200 font-bold text-2xl">{duracao}</span>
                </div>

                {/* Linha divisória + frase */}
                <hr className="my-8 w-full border-pink-300" />
                <p className="text-pink-200 text-lg italic text-center">
                    Para sempre é só o começo da nossa história. 💞
                </p>

                {/* Mensagens */}
                <div className="w-full bg-[#1E293B] rounded-xl shadow p-4 space-y-4 mt-8">
                    {mensagens.map((msg, i) => (
                        <p
                            key={i}
                            className="text-white text-base sm:text-lg text-center leading-relaxed"
                        >
                            “{msg}”
                        </p>
                    ))}
                </div>
            </div>

            {/* Rodapé */}
            <footer className="mt-8 text-sm text-center text-rose-200">
                Feito com 💕 por Rafael Konscca – 2025
            </footer>
        </div>
    )
}
