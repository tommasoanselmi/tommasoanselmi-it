import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <section className="-mt-[10.4rem] min-h-[80vh] flex items-center justify-center bg-background text-foreground pt-32">
      <div className="container mb-8 flex flex-col items-center justify-center gap-12">
        <div className="max-w-[36.5rem] md:text-center">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <div className="select-none">
          {media && typeof media === 'object' && (
            <Media
              priority
              resource={media}
              imgClassName="border border-border rounded-[0.8rem] object-cover"
            />
          )}
        </div>
      </div>
    </section>
  )
}
