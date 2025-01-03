import Image from 'next/image'
import Link from 'next/link'
import { Heart, MessageCircle, Share2 } from 'lucide-react'

interface PostProps {
  post: {
    user: { name: string; username: string; avatar: string }
    content: string
    image?: string
    likes: number
    comments: number
  }
}

export default function Post({ post }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex items-center mb-2">
          <Link href={`/profile/${post.user.username}`}>
            <Image
              src={post.user.avatar}
              alt={post.user.name}
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
          </Link>
          <div>
            <Link href={`/profile/${post.user.username}`} className="font-semibold hover:underline">
              {post.user.name}
            </Link>
            <p className="text-sm text-gray-500">@{post.user.username}</p>
          </div>
        </div>
        <p className="mb-2">{post.content}</p>
        {post.image && (
          <Image
            src={post.image}
            alt="Post image"
            width={400}
            height={400}
            className="w-full h-auto rounded-md"
          />
        )}
      </div>
      <div className="flex justify-between items-center px-4 py-2 border-t">
        <button className="flex items-center text-gray-600 hover:text-red-500">
          <Heart className="w-5 h-5 mr-1" />
          {post.likes}
        </button>
        <button className="flex items-center text-gray-600 hover:text-blue-500">
          <MessageCircle className="w-5 h-5 mr-1" />
          {post.comments}
        </button>
        <button className="flex items-center text-gray-600 hover:text-green-500">
          <Share2 className="w-5 h-5 mr-1" />
          Share
        </button>
      </div>
    </div>
  )
}

