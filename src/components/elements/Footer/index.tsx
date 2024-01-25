import Image from 'next/image'
import { InstagramIcon, LinkedinIcon, GithubIcon } from '@icons'
import React from 'react'

export const Footer: React.FC = () => {
  // TODO: Write element's logic

  return (
    <>
      <div className="flex w-full select-none flex-col items-center justify-between bg-primary py-5 md:flex-row md:py-10 md:px-20">
        <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left gap-4 text-white">
          <Image
            src="/assets/images/logo.jpg"
            alt="logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1">
            <div className="flex">
              <h3 className="font-bold text-display-small md:text-display-medium">
                edutjie
              </h3>
              <h3>&apos;s personal website</h3>
            </div>
            <p>
              Made using{' '}
              <a
                href="https://create.t3.gg/"
                target="_blank"
                rel="noreferrer"
                className="text-secondary underline underline-offset-4"
              >
                T3 App
              </a>
            </p>
          </div>
        </div>
        <div className="mt-5 flex select-none flex-col items-center justify-center md:mt-0">
          <div className="flex gap-4">
            <div className="cursor-pointer">
              <InstagramIcon />
            </div>
            <div className="cursor-pointer">
              <LinkedinIcon />
            </div>
            <div className=" cursor-pointer">
              <GithubIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
