import { useEffect, useMemo, useRef, useState } from 'react'
import { formatElapsedTime } from '../utils/time.js'

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedMs, setElapsedMs] = useState(0)
  const [laps, setLaps] = useState([])
  const startMsRef = useRef(0)

  useEffect(() => {
    if (!isRunning) {
      return undefined
    }

    const intervalId = setInterval(() => {
      setElapsedMs(performance.now() - startMsRef.current)
    }, 10)

    return () => clearInterval(intervalId)
  }, [isRunning])

  const formattedElapsed = useMemo(() => formatElapsedTime(elapsedMs), [elapsedMs])

  const toggleRunning = () => {
    if (isRunning) {
      setIsRunning(false)
      return
    }

    startMsRef.current = performance.now() - elapsedMs
    setIsRunning(true)
  }

  const resetStopwatch = () => {
    setIsRunning(false)
    setElapsedMs(0)
    setLaps([])
    startMsRef.current = 0
  }

  const saveLap = () => {
    if (elapsedMs <= 0) {
      return
    }

    setLaps((current) => [formatElapsedTime(elapsedMs), ...current])
  }

  return (
    <section className="page-shell" aria-label="Stopwatch">
      <h1 className="page-title">Stopwatch</h1>
      <p className="subtitle">Track time with start, pause, reset, and lap records.</p>

      <div className="card">
        <div className="stopwatch-display" role="status" aria-live="polite">
          {formattedElapsed}
        </div>

        <div className="stopwatch-controls">
          <button type="button" className="tool-button stopwatch-btn" onClick={toggleRunning}>
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button type="button" className="tool-button stopwatch-btn reset-btn" onClick={resetStopwatch} disabled={elapsedMs <= 0 && laps.length === 0}>
            Reset
          </button>
          <button type="button" className="tool-button stopwatch-btn lap-btn" onClick={saveLap} disabled={elapsedMs <= 0}>
            Lap
          </button>
        </div>

        <section className="laps" aria-label="Lap times">
          <h2>Lap Times</h2>
          {laps.length === 0 ? (
            <p className="text-muted">No laps yet.</p>
          ) : (
            <ol>
              {laps.map((lap, index) => (
                <li key={`${lap}-${index}`}>
                  <span>Lap {laps.length - index}</span>
                  <strong>{lap}</strong>
                </li>
              ))}
            </ol>
          )}
        </section>
      </div>
    </section>
  )
}

export default Stopwatch