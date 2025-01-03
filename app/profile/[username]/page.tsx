import Image from 'next/image'
import { notFound } from 'next/navigation'

// This would typically come from a database or API
const mockUsers = {
  johndoe: {
    name: 'John Doe',
    username: 'johndoe',
    avatar: '/placeholder.svg?height=150&width=150',
    bio: 'Passionate about technology and photography. Always learning, always growing.',
    followers: 1234,
    following: 567,
    posts: 42,
  },
  janesmith: {
    name: 'Jane Smith',
    username: 'janesmith',
    avatar: '/placeholder.svg?height=150&width=150',
    bio: 'Digital artist and web designer. Creating beautiful things every day.',
    followers: 5678,
    following: 432,
    posts: 98,
  },
}

export default function UserProfile({ params }: { params: { username: string } }) {
  const user = mockUsers[params.username as keyof typeof mockUsers]

  if (!user) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <Image
            src={user.avatar}
            alt={user.name}
            width={150}
            height={150}
            className="rounded-full mr-6"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">@{user.username}</p>
            <p className="mt-2">{user.bio}</p>
            <div className="flex space-x-4 mt-4">
              <p><strong>{user.posts}</strong> posts</p>
              <p><strong>{user.followers}</strong> followers</p>
              <p><strong>{user.following}</strong> following</p>
            </div>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Follow
        </button>
      </div>
    </div>
  )
}

