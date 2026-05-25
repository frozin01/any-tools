import { useMemo, useState } from 'react'
import { getTextStats } from '../utils/textStats.js'

function WordCounter() {
  const [text, setText] = useState('')

  const stats = useMemo(() => getTextStats(text), [text])

  return (
    <section className="page-shell" aria-label="Word counter">
      <h1 className="page-title">Word Counter</h1>
      <p className="subtitle">Type or paste your text and see the count instantly.</p>

      <div className="card">
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
            <h3>Words</h3>
            <p>{stats.words}</p>
          </article>
          <article className="stat">
            <h3>Characters</h3>
            <p>{stats.characters}</p>
          </article>
          <article className="stat">
            <h3>Without Spaces</h3>
            <p>{stats.charactersWithoutSpaces}</p>
          </article>
        </div>

        <button type="button" className="tool-button" onClick={() => setText('')} disabled={!text}>
          Clear text
        </button>
      </div>
    </section>
  )
}

export default WordCounter