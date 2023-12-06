export function useSvgDataUrl(path: string) {
  const svgMapper: Record<string, string> = import.meta.glob(
    '/src/assets/svg/**/*.svg',
    {
      eager: true,
      as: 'raw',
    }
  )
  if (!svgMapper[`/src/assets/svg/${path}`]) {
    throw new Error(`svg not found: ${path}`)
  }
  const content = svgMapper[`/src/assets/svg/${path}`]
  return `data:image/svg+xml,${encodeURIComponent(content)}`
}
