import Link from 'next/link'
import React from 'react'
import { NAV_ROUTES } from './constant'
import Image from 'next/image'
// import { Button } from 'antd'

export const Desktop: React.FC = () => {
  // TODO: Write element's logic

  return (
    <div className="w-full fixed py-5">
      <div className="flex justify-between max-w-[80%] mx-auto items-center">
        <div className="flex items-center gap-5">
          <Image
            src="/assets/images/logo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-white font-bold text-xl">edutjie</p>
        </div>
        <div className="flex gap-14">
          {NAV_ROUTES.map((item, index) => (
            <Link href={item.path} key={index}>
              <button className="text-white hover:text-[#95F9C3] transition-all">
                {item.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
