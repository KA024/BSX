'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ImageIcon, X } from 'lucide-react'

export default function CreatePost() {
  const [content, setContent] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the post data to your backend
    console.log('Submitting post:', { content, image })
    // Reset form and redirect to home
    setContent('')
    setImage(null)
    router.push('/')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create Post</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full h-32 p-2 border rounded-md mb-4 resize-none"
          required
        />
        <div className="flex items-center mb-4">
          <label htmlFor="image-upload" className="cursor-pointer flex items-center text-blue-500 hover:text-blue-600">
            <ImageIcon className="w-6 h-6 mr-2" />
            {image ? 'Change Image' : 'Add Image'}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="hidden"
          />
          {image && (
            <button
              type="button"
              onClick={() => setImage(null)}
              className="ml-4 text-red-500 hover:text-red-600"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>
        {image && <p className="mb-4 text-sm text-gray-600">{image.name}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Post
        </button>
      </form>
    </div>
  )
}

