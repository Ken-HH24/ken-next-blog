'use client'

import { allPosts } from 'contentlayer/generated'
import { motion } from 'framer-motion'

import PostItem from '@/components/post-item'

export default function ArticlesPage() {
  return (
    <motion.div
      className="prose"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 100,
        duration: 2,
      }}
    >
      <h1 className="text-2xl font-bold">Articles</h1>
      <div className="flex flex-col gap-2">
        {allPosts.map((post) => {
          return <PostItem key={post.url} post={post} />
        })}
      </div>
    </motion.div>
  )
}
