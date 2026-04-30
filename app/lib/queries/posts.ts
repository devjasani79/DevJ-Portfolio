import { supabase } from '@/app/lib/supabase'
import { Post } from '@/app/lib/types'

export async function getPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('date', { ascending: false })

  if (error) throw error
  return data as Post[]
}

export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Post
}