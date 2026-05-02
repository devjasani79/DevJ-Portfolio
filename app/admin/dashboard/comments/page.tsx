'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/app/lib/supabase'
import { Comment } from '@/app/lib/types'

export default function CommentsAdmin() {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    const { data } = await supabase
      .from('comments')
      .select('*')
      .eq('approved', false)
      .order('created_at', { ascending: false })
    setComments(data || [])
    setLoading(false)
  }

  const approveComment = async (id: string) => {
    await supabase.from('comments').update({ approved: true }).eq('id', id)
    fetchComments()
  }

  const deleteComment = async (id: string) => {
    await supabase.from('comments').delete().eq('id', id)
    fetchComments()
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Pending Comments</h1>

      {loading ? (
        <p>Loading...</p>
      ) : comments.length === 0 ? (
        <p>No pending comments</p>
      ) : (
        comments.map(comment => (
          <div key={comment.id} style={{ padding: '1rem', border: '1px solid #ddd', marginBottom: '1rem', borderRadius: '6px' }}>
            <p><strong>{comment.author_name}</strong> ({comment.author_email})</p>
            <p>{comment.content}</p>
            <div>
              <button onClick={() => approveComment(comment.id)} style={{ marginRight: '10px', padding: '5px 15px', background: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
                Approve
              </button>
              <button onClick={() => deleteComment(comment.id)} style={{ padding: '5px 15px', background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}