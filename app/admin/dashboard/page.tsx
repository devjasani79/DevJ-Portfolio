'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/app/lib/supabase'
import { Post } from '@/app/lib/types'

export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const { data } = await supabase.from('posts').select('*').order('created_at', { ascending: false })
    setPosts(data || [])
    setLoading(false)
  }

  const deletePost = async (id: string) => {
    await supabase.from('posts').delete().eq('id', id)
    fetchPosts()
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Dashboard</h1>

      <button onClick={() => window.location.href = '/admin/dashboard/posts/create'}>
        + New Post
      </button>

      {loading ? <p>Loading...</p> : (
        <table style={{ width: '100%', marginTop: '2rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ccc' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Title</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{post.title}</td>
                <td>{post.published ? '✅' : '❌'}</td>
                <td style={{ padding: '10px' }}>
                  <button onClick={() => window.location.href = `/admin/dashboard/posts/${post.id}`}>
                    Edit
                  </button>
                  <button onClick={() => deletePost(post.id)} style={{ marginLeft: '10px', background: 'red', color: 'white' }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div style={{ marginBottom: '2rem' }}>
        <button onClick={() => window.location.href = '/admin/dashboard/posts/create'}>
          + New Post
        </button>
        <button onClick={() => window.location.href = '/admin/dashboard/comments'} style={{ marginLeft: '10px' }}>
          📋 Pending Comments
        </button>
      </div>
    </div>

  )
}