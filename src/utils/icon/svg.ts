export function useSvgDataUrl(path: string) {
  const dir = `/src/assets/svg`
  const svgMapper: Record<string, string> = import.meta.glob(
    `/src/assets/svg/**/*.svg`,
    {
      eager: true,
      as: 'raw',
    }
  )
  if (!svgMapper[`${dir}/${path}`]) {
    throw new Error(`svg not found: ${path}`)
  }
  const content = svgMapper[`${dir}/${path}`]
  return `data:image/svg+xml,${encodeURIComponent(content)}`
}
