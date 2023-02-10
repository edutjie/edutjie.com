import Link from 'next/link'
import React from 'react'
import { navItems } from './constant'
// import { Button } from 'antd'

export const Navbar: React.FC = () => {
  // TODO: Write element's logic

  return (
    <div className="w-full fixed py-5">
      <div className="flex justify-between max-w-[80%] mx-auto items-center">
        <div className="flex items-center gap-5">
          <img src="/assets/images/logo.png" alt="logo" className="w-10 h-10" />
          <p className="text-white font-bold text-xl">edutjie</p>
        </div>
        <div className="flex gap-14">
          {navItems.map((item, index) => (
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
