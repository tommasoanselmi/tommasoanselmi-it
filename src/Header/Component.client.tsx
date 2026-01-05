import Link from 'next/link'
import React from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    <header className="container relative z-20   ">
      <div className="py-8 flex justify-between">
        <Link href="/" className="text-foreground font-logo text-4xl">
          TA.DEV
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
