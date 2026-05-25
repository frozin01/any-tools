import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

  const stats = useMemo(() => {
    const trimmed = text.trim()
    const words = trimmed ? trimmed.split(/\s+/).length : 0
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, '').length

    return { words, characters, charactersNoSpaces }
  }, [text])

  return (
    <main className="app">
      <section className="card" aria-label="Word counter">
        <h1>Word Counter</h1>
        <p className="subtitle">Type or paste your text and see the count instantly.</p>

        <label htmlFor="text-input" className="sr-only">
          Text input
        </label>
        <textarea
          id="text-input"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Start typing here..."
          rows={10}
        />

        <div className="stats" role="status" aria-live="polite">
          <article className="stat">
            <h2>Words</h2>
            <p>{stats.words}</p>
          </article>
          <article className="stat">
            <h2>Characters</h2>
            <p>{stats.characters}</p>
          </article>
          <article className="stat">
            <h2>No spaces</h2>
            <p>{stats.charactersNoSpaces}</p>
          </article>
        </div>

        <button type="button" onClick={() => setText('')} disabled={!text}>
          Clear text
        </button>
      </section>
    </main>
  )
}

export default App