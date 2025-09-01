export default function OptimizedImage({ src, alt, className, isLcp = false }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={isLcp ? 'eager' : 'lazy'}
      fetchpriority={isLcp ? 'high' : 'auto'}
      decoding="async"
    />
  )
}
