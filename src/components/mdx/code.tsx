import type { DetailedHTMLProps, HTMLAttributes } from 'react'

import { highlight } from 'sugar-high'

type CodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

export const Code: React.FC<CodeProps> = (props) => {
  const codeHTML = highlight(props.children as string)

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
}
