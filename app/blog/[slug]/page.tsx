import { getPostBySlug } from '@/app/lib/queries/posts'
import { getComments } from '@/app/lib/queries/comments'
import CommentForm from '@/app/components/comments/CommentForm'
import CommentList from '@/app/components/comments/CommentList'
import { notFound } from 'next/navigation'

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  let post
  try {
    post = await getPostBySlug(slug)
  } catch {
    notFound()
  }

  const comments = await getComments(post.id)

  return (
    <main style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <article>
        <h1 style={{ marginBottom: '0.5rem' }}>{post.title}</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          {new Date(post.date).toLocaleDateString()} · {post.tags.join(', ')}
        </p>

        <div style={{ lineHeight: '1.8', marginBottom: '3rem', whiteSpace: 'pre-wrap' }}>
          {post.content}
        </div>

        <hr style={{ margin: '3rem 0' }} />

        <h2>Comments</h2>
        <CommentList comments={comments} />
        <CommentForm postId={post.id} />
      </article>
    </main>
  )
}