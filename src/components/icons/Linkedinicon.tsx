import React from 'react'
import { IconProps } from './interface'

export const Linkedinicon: React.FC<IconProps> = ({
  fill = 'fill-current',
  stroke,
  className,
  size,
}) => {
  // TODO: Place svg's elements here and strip out sizing, fill, and stroke attribute then place className={`${size} ${fill} ${stroke} ${className}`} in the <svg> tag
  return (
    <svg
      width="33"
      height="34"
      viewBox="0 0 33 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.8201 32.2036C8.42474 32.2036 1.61902 25.404 1.61902 17.0161C1.61902 8.62827 8.42474 1.82861 16.8201 1.82861C25.2154 1.82861 32.0211 8.62827 32.0211 17.0161C32.0211 25.404 25.2154 32.2036 16.8201 32.2036Z"
        stroke="white"
        strokeWidth="1.6875"
        strokeMiterlimit="10"
      />
      <path d="M13.0739 13.624H9.92664V23.7756H13.0739V13.624Z" fill="white" />
      <path
        d="M11.4842 12.2993C12.5147 12.2993 13.3454 11.4613 13.3454 10.4238C13.3454 9.38632 12.5147 8.54834 11.4842 8.54834C10.4538 8.54834 9.62305 9.38632 9.62305 10.4238C9.62305 11.4613 10.4538 12.2993 11.4842 12.2993Z"
        fill="white"
      />
      <path
        d="M18.0983 18.4526C18.0983 17.0241 18.7533 16.1781 20.0154 16.1781C21.1737 16.1781 21.7248 16.9921 21.7248 18.4526C21.7248 19.9131 21.7248 23.7838 21.7248 23.7838H24.8561C24.8561 23.7838 24.8561 20.0727 24.8561 17.3513C24.8561 14.6298 23.3144 13.313 21.1577 13.313C19.0009 13.313 18.0983 14.989 18.0983 14.989V13.6242H15.0789V23.7758H18.0983C18.0983 23.7838 18.0983 20.0169 18.0983 18.4526Z"
        fill="white"
      />
    </svg>
  )
}
