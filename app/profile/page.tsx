import Image from 'next/image'

const mockUser = {
  name: 'John Doe',
  username: 'johndoe',
  avatar: '/placeholder.svg?height=150&width=150',
  bio: 'Passionate about technology and photography. Always learning, always growing.',
  followers: 1234,
  following: 567,
  posts: 42,
}

export default function UserProfile() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <Image
            src={mockUser.avatar}
            alt={mockUser.name}
            width={150}
            height={150}
            className="rounded-full mr-6"
          />
          <div>
            <h1 className="text-2xl font-bold">{mockUser.name}</h1>
            <p className="text-gray-600">@{mockUser.username}</p>
            <p className="mt-2">{mockUser.bio}</p>
            <div className="flex space-x-4 mt-4">
              <p><strong>{mockUser.posts}</strong> posts</p>
              <p><strong>{mockUser.followers}</strong> followers</p>
              <p><strong>{mockUser.following}</strong> following</p>
            </div>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Edit Profile
        </button>
      </div>
    </div>
  )
}

