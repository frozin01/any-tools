import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="page-shell" aria-label="Home">
      <h1 className="page-title">Welcome to Any Tools</h1>
      <p className="subtitle">Pick a tool below to start using it.</p>

      <div className="home-grid">
        <article className="card">
          <h2 className="tool-title">Word Counter</h2>
          <p className="text-muted">Count words, characters, and characters without spaces instantly.</p>
          <Link className="tool-button" to="/word-counter">
            Open Word Counter
          </Link>
        </article>

        <article className="card">
          <h2 className="tool-title">Stopwatch</h2>
          <p className="text-muted">Track elapsed time and save lap records.</p>
          <Link className="tool-button" to="/stopwatch">
            Open Stopwatch
          </Link>
        </article>
      </div>
    </section>
  )
}

export default Home