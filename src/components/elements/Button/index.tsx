import React from 'react'
import { props } from './interface'

export const Button: React.FC<props> = ({
  className,
  children,
  onClick,
  leftIcon,
  rightIcon,
  disabled,
}) => {
  // TODO: Write element's logic

  return (
    <>
      <button
        className={`${className} bg-[#0C182F] text-white rounded-lg px-5 py-3 font-bold shadow-lg hover:shadow-secondary/10 active:scale-105 transition-all duration-200 ease-in-out active:text-secondary`}
        onClick={onClick}
        disabled={disabled}
      >
        {leftIcon && <span className="stroke-current">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="stroke-current">{rightIcon}</span>}
      </button>
    </>
  )
}
