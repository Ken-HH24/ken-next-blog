'use client'

import Image from 'next/image'
import Link from 'next/link'

import { allPosts } from 'contentlayer/generated'
import { type Spring, motion } from 'framer-motion'
import { ArrowRight, GithubIcon } from 'lucide-react'

import avatar from '@/assets/avatar.jpeg'
import PostItem from '@/components/post-item'

const springTransition: Spring = {
  type: 'spring',
  damping: 20,
  stiffness: 100,
  duration: 5,
}

export default function HomePage() {
  return (
    <div className="pt-8">
      <div className="flex mb-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springTransition}
        >
          <Image src={avatar} alt="avatar" className="ml-4 h-[150px] w-[150px] rounded-full" />
        </motion.div>
        <div className="ml-12">
          <motion.div
            className="font-medium text-2xl leading-5 mb-4 mt-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...springTransition,
              delay: 0.5,
            }}
          >
            Hi, I&apos;m Ken. 👋
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...springTransition,
              delay: 0.8,
            }}
          >
            <li className="leading-7">👨‍💻 I&apos;m working as a frontend engineer in Bytedance.</li>
            <li className="leading-7">💡 I&apos;m currently working on projects with React.</li>
            <li className="leading-7">🌱 I&apos;m studying Rust and other frontend frameworks.</li>
          </motion.ul>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ...springTransition,
          delay: 1.2,
        }}
      >
        <div className="flex flex-col mb-12">
          <h2 className="pl-4 text-xl mb-4 font-semibold">Articles</h2>
          <div>
            {allPosts.slice(0, 3).map((post) => (
              <PostItem key={post.url} post={post} />
            ))}
          </div>
          <Link
            href="/article"
            className="flex items-center justify-center mt-4 text-gray-600 hover:text-primary !duration-300"
          >
            <span>All articles</span>
            <ArrowRight width={16} height={16} className="ml-2" />
          </Link>
        </div>
        <div className="flex flex-col pl-4">
          <h2 className="text-xl mb-4 font-semibold">Links</h2>
          <Link
            href="https://github.com/Ken-HH24"
            className="flex items-end gap-4 group hover:cursor-pointer"
          >
            <span className="text-gray-500 group-hover:text-primary">GitHub</span>
            <div className="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"></div>
            <GithubIcon width={24} height={24} />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
