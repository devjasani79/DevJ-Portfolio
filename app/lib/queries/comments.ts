import { supabase } from '@/app/lib/supabase'
import { Comment } from '@/app/lib/types'

export async function getComments(postId: string) {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('post_id', postId)
    .eq('approved', true)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data as Comment[]
}

export async function createComment(postId: string, name: string, email: string, content: string) {
  const { data, error } = await supabase
    .from('comments')
    .insert([
      {
        post_id: postId,
        author_name: name,
        author_email: email,
        content: content,
        approved: false
      }
    ])
    .select()

  if (error) throw error
  return data[0] as Comment
}