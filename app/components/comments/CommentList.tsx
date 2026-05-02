import { Comment } from '@/app/lib/types'

export default function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <div style={{ marginTop: '2rem' }}>
      {comments.length === 0 ? (
        <p style={{ color: '#999' }}>No comments yet. Be the first!</p>
      ) : (
        comments.map(comment => (
          <div key={comment.id} style={{ padding: '1rem', background: '#f9f9f9', marginBottom: '1rem', borderRadius: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <strong>{comment.author_name}</strong>
              <small style={{ color: '#999' }}>{new Date(comment.created_at).toLocaleDateString()}</small>
            </div>
            <p style={{ margin: '0.5rem 0 0 0', whiteSpace: 'pre-wrap' }}>{comment.content}</p>
          </div>
        ))
      )}
    </div>
  )
}