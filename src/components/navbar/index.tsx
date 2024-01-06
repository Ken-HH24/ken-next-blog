'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'
import { FolderClosedIcon, HomeIcon, MoonIcon, PenSquareIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const NavbarItems = [
  {
    icon: <HomeIcon strokeWidth={1} />,
    content: 'Home',
    url: '/',
  },
  {
    icon: <PenSquareIcon strokeWidth={1} />,
    content: 'Articles',
    url: '/article',
  },
  {
    icon: <FolderClosedIcon strokeWidth={1} />,
    content: 'Projects',
    url: '/project',
  },
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <TooltipProvider delayDuration={300}>
      <nav className="flex items-center px-4 my-2 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5">
        <ul className="flex flex-row w-full">
          {NavbarItems.map((item) => {
            const isActive = pathname === item.url

            return (
              <li key={item.content} className="p-2 relative">
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href={item.url}
                      className={cn(
                        'flex items-center justify-center w-8 h-8 hover:bg-gray-100 hover:text-blue-400 rounded-full',
                        {
                          'bg-gray-100 text-blue-400': isActive,
                        },
                      )}
                    >
                      {item.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={15}>{item.content}</TooltipContent>
                </Tooltip>
                {isActive && (
                  <motion.span
                    layoutId="active"
                    className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-400/70 to-blue-400/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"
                  />
                )}
              </li>
            )
          })}
          <li className="py-2 ml-auto">
            <div className="flex items-center justify-center w-8 h-8 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <MoonIcon strokeWidth={1} />
            </div>
          </li>
        </ul>
      </nav>
    </TooltipProvider>
  )
}

export default Navbar
