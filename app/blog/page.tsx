import Link from 'next/link'
import { getPosts } from '@/app/lib/queries/posts'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Blog</h1>
      
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <div>
          {posts.map(post => (
            <Link key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <article style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #ccc', cursor: 'pointer' }}>
                <h2 style={{ margin: '0 0 0.5rem 0' }}>{post.title}</h2>
                <p style={{ color: '#666', margin: '0 0 1rem 0' }}>{new Date(post.date).toLocaleDateString()}</p>
                <p style={{ margin: '0' }}>{post.excerpt}</p>
                {post.tags.length > 0 && (
                  <div style={{ marginTop: '0.5rem' }}>
                    {post.tags.map(tag => (
                      <span key={tag} style={{ display: 'inline-block', marginRight: '0.5rem', padding: '2px 8px', background: '#f0f0f0', borderRadius: '4px', fontSize: '12px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}