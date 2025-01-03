import Feed from './components/Feed'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Feed</h1>
      <Feed />
    </div>
  )
}

