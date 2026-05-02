'use client'

import { useState } from 'react'
import { createComment } from '@/app/lib/queries/comments'
import { useRouter } from 'next/navigation'

export default function CommentForm({ postId }: { postId: string }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await createComment(postId, name, email, content)
      setSuccess(true)
      setName('')
      setEmail('')
      setContent('')
      setTimeout(() => setSuccess(false), 3000)
      router.refresh()
    } catch (error) {
      alert('Error posting comment')
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '2rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
      <h3>Leave a Comment</h3>

      {success && <p style={{ color: 'green', marginBottom: '1rem' }}>Comment posted! (awaiting approval)</p>}

      <div style={{ marginBottom: '1rem' }}>
        <label>Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Email *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Comment *</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box', height: '120px' }}
        />
      </div>

      <button type="submit" disabled={loading} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        {loading ? 'Posting...' : 'Post Comment'}
      </button>
    </form>
  )
}