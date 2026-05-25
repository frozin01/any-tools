export function getTextStats(text) {
  const trimmed = text.trim()
  const words = trimmed ? trimmed.split(/\s+/).length : 0
  const characters = text.length
  const charactersWithoutSpaces = text.replace(/\s/g, '').length

  return { words, characters, charactersWithoutSpaces }
}
