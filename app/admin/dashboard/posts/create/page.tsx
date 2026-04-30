'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/app/lib/supabase'

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [tags, setTags] = useState('')
  const [published, setPublished] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.from('posts').insert([
      {
        title,
        slug,
        excerpt,
        content,
        date,
        tags: tags.split(',').map(t => t.trim()),
        published,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])

    if (error) {
      alert('Error: ' + error.message)
    } else {
      router.push('/admin/dashboard')
    }
    setLoading(false)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Slug *</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Excerpt</label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            style={{ width: '100%', padding: '10px', height: '80px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Content *</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', height: '300px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Date *</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Tags (comma separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="react, nextjs, blog"
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
            Published
          </label>
        </div>

        <button type="submit" disabled={loading} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  )
}