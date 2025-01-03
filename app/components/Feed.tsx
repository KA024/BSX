import Post from './Post'

const mockPosts = [
  {
    id: 1,
    user: { name: 'John Doe', username: 'johndoe', avatar: '/placeholder.svg?height=40&width=40' },
    content: 'Just had an amazing day at the beach! 🏖️ #summervibes',
    image: '/placeholder.svg?height=400&width=400',
    likes: 42,
    comments: 5,
  },
  {
    id: 2,
    user: { name: 'Jane Smith', username: 'janesmith', avatar: '/placeholder.svg?height=40&width=40' },
    content: 'Excited to announce my new project! Stay tuned for more details. 🚀 #newbeginnings',
    likes: 108,
    comments: 23,
  },
]

export default function Feed() {
  return (
    <div className="space-y-6">
      {mockPosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

