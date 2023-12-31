import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

import Link from 'next/link'

type AProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

export const A: React.FC<AProps> = (props) => {
  let href = props.href

  if (href?.startsWith('/')) {
    return <Link href={href}>{props.children}</Link>
  }

  if (href?.startsWith('#')) {
    return <a {...props} />
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer text-gray-500 hover:text-primary hover:!underline-offset-4 hover:!decoration-2 hover:!underline"
      {...props}
    />
  )
}
