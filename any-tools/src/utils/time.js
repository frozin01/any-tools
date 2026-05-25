export function formatElapsedTime(totalMs) {
  const clamped = Math.max(0, totalMs)
  const hours = Math.floor(clamped / 3_600_000)
  const minutes = Math.floor((clamped % 3_600_000) / 60_000)
  const seconds = Math.floor((clamped % 60_000) / 1000)
  const centiseconds = Math.floor((clamped % 1000) / 10)

  const hh = String(hours).padStart(2, '0')
  const mm = String(minutes).padStart(2, '0')
  const ss = String(seconds).padStart(2, '0')
  const cc = String(centiseconds).padStart(2, '0')

  return `${hh}:${mm}:${ss}.${cc}`
}
