export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  tags: string[]
  published: boolean
  created_at: string
  updated_at: string
}

export interface Comment {
  id: string
  post_id: string
  author_name: string
  author_email: string
  content: string
  approved: boolean
  created_at: string
}