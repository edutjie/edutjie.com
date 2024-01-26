import Image from 'next/image'
import React from 'react'
import { CONTACTS } from '@constants'

export const Footer: React.FC = () => {
  // TODO: Write element's logic

  return (
    <>
      <div className="flex w-full select-none flex-col items-center justify-between bg-primary py-5 md:flex-row md:py-10 md:px-20">
        <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left gap-4 text-white max-w-[80%]">
          <Image
            src="/assets/images/logo.jpg"
            alt="logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1">
            <div className="flex">
              <h3 className="text-lg md:text-display-medium">
                © {new Date().getFullYear()} Eduardus Tjitrahardja. All rights
                reserved.
              </h3>
            </div>
            <p>
              Created by{' '}
              <a
                href="https://edutjie.app"
                target="_blank"
                rel="noreferrer"
                className="text-secondary underline underline-offset-4 font-bold"
              >
                Eduardus Tjitrahardja
              </a>
            </p>
          </div>
        </div>
        <div className="mt-5 flex select-none flex-col items-center justify-center md:mt-0 max-w-[80%]">
          <div className="flex gap-4">
            {CONTACTS.map((contact) => (
              <a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:scale-125 transition-all cursor-pointer"
              >
                {contact.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
