import { useEffect, useState } from 'react'

export default function Comments() {
  const [comments, setComments] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('comments') || '[]') : []
    setComments(saved)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('comments', JSON.stringify(comments))
    }
  }, [comments])

  function addComment(e) {
    e.preventDefault()
    if (!text.trim()) return
    const entry = { id: Date.now(), text: text.trim(), when: new Date().toISOString() }
    setComments([entry, ...comments])
    setText('')
  }

  function clearAll() {
    if (confirm('Clear all stored comments on this device?')) setComments([])
  }

  return (
    <div>
      <h1>Comments</h1>
      <form onSubmit={addComment} className="card" style={{display:'grid', gap:'.5rem'}}>
        <textarea rows={4} value={text} onChange={e=>setText(e.target.value)} placeholder="Write a comment…" />
        <div style={{display:'flex', gap:'.5rem'}}>
          <button className="btn" type="submit">Post</button>
          <button className="btn" type="button" onClick={clearAll} title="Clears only this browser's local storage">Clear all (this device)</button>
        </div>
      </form>

      <div className="grid" style={{marginTop:'1rem'}}>
        {comments.map(c => (
          <article key={c.id} className="card">
            <p style={{whiteSpace:'pre-wrap'}}>{c.text}</p>
            <small style={{color:'#666'}}>Posted {new Date(c.when).toLocaleString()}</small>
          </article>
        ))}
        {comments.length === 0 && <p>No comments yet. Be the first!</p>}
      </div>
    </div>
  )
}
