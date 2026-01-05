'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, MenuIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <>
      <nav className="hidden lg:flex gap-3 items-center">
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link} appearance="link" className="text-foreground" />
        })}
        <Link href="/search">
          <span className="sr-only">Cerca</span>
          <SearchIcon className="w-5 text-foreground" />
        </Link>
      </nav>
      <nav className="lg:hidden block">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon className="text-foreground" size={34} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
            {navItems.map(({ link }, i) => {
              return (
                <DropdownMenuItem key={i}>
                  <CMSLink
                    {...link}
                    appearance="link"
                    className="text-foreground w-[60vw] text-2xl py-2 px-4"
                  />
                </DropdownMenuItem>
              )
            })}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-end">
              <Link href="/search">
                <span className="sr-only">Cerca</span>
                <SearchIcon className="text-foreground" size={34} />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  )
}
