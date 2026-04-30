'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      document.cookie = `admin_token=${password}; path=/`
      router.push('/admin/dashboard')
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '2rem' }}>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
          style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ width: '100%', padding: '10px' }}>
          Login
        </button>
      </form>
    </div>
  )
}