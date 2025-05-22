'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
      <div className="flex items-center justify-center h-screen bg-pink-100">
        <button
            onClick={() => router.push('/principal')}
            className="bg-pink-500 text-white text-xl px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition"
        >
          Clique aqui ❤️
        </button>
      </div>
  )
}
