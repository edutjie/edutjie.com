import React from 'react'
import { props } from './interface'

export const Chips: React.FC<props> = ({
  className,
  onClick,
  enabled,
  leftIcon,
  rightIcon,
  text,
  color = '#000000',
}) => {
  // TODO: Write element's logic

  return (
    <>
      <div
        className={`${className} rounded-full border-2 border-[#9BF6FF] text-[#9BF6FF] font-bold select-none w-fit flex gap-1 py-2 px-4 transition-all ${
          enabled
            ? `shadow-lg shadow-[#9BF6FF]/25`
            : `shadow-none hover:shadow-lg hover:shadow-[#9BF6FF]/10 cursor-pointer`
        }`}
        onClick={onClick}
      >
        {leftIcon && <span>{leftIcon}</span>}
        {text}
        {rightIcon && <span>{rightIcon}</span>}
      </div>
    </>
  )
}
