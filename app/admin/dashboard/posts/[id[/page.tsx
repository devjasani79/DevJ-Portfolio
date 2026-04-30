'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { supabase } from '@/app/lib/supabase'
import { Post } from '@/app/lib/types'

export default function EditPost() {
  const params = useParams()
  const id = params.id as string
  const [post, setPost] = useState<Post | null>(null)
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [tags, setTags] = useState('')
  const [published, setPublished] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchPost()
  }, [id])

  const fetchPost = async () => {
    const { data } = await supabase.from('posts').select('*').eq('id', id).single()
    if (data) {
      setPost(data)
      setTitle(data.title)
      setSlug(data.slug)
      setExcerpt(data.excerpt)
      setContent(data.content)
      setDate(data.date)
      setTags(data.tags.join(', '))
      setPublished(data.published)
    }
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    const { error } = await supabase
      .from('posts')
      .update({
        title,
        slug,
        excerpt,
        content,
        date,
        tags: tags.split(',').map(t => t.trim()),
        published,
        updated_at: new Date()
      })
      .eq('id', id)

    if (error) {
      alert('Error: ' + error.message)
    } else {
      router.push('/admin/dashboard')
    }
    setSaving(false)
  }

  if (loading) return <p style={{ padding: '2rem' }}>Loading...</p>

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Edit Post</h1>
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
            placeholder="react, nextjs"
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

        <button type="submit" disabled={saving} style={{ padding: '10px 20px', marginRight: '10px', cursor: 'pointer' }}>
          {saving ? 'Saving...' : 'Save Post'}
        </button>
        <button type="button" onClick={() => router.push('/admin/dashboard')} style={{ padding: '10px 20px' }}>
          Cancel
        </button>
      </form>
    </div>
  )
}