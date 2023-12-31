import Link from 'next/link'

import type { Post } from 'contentlayer/generated'
import { format } from 'date-fns'

interface PostItemProps {
  post: Post
}

const PostItem: React.FC<PostItemProps> = (props) => {
  const { post } = props

  return (
    <Link
      key={post._raw.flattenedPath}
      href={`/article/${post._raw.flattenedPath}`}
      className="flex flex-col relative py-4 px-4 border-2 border-transparent rounded-lg hover:border-gray-200  !duration-300"
    >
      <time className="flex flex-row mb-2 items-center relative text-slate-400 text-sm font-light">
        <span className="h-3.5 w-0.5 mr-3.5 bg-slate-200" />
        {format(post.date, 'yyyy-MM-dd')}
      </time>
      <div className="font-semibold from-text">{post.title}</div>
      <div className="text-primary text-sm font-light mt-2">{post.description}</div>
    </Link>
  )
}

export default PostItem
