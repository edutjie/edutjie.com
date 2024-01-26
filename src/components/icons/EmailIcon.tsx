import React from 'react'
import { IconProps } from './interface'

export const EmailIcon: React.FC<IconProps> = ({
  fill = 'fill-current',
  stroke,
  className,
  size,
}) => {
  // TODO: Place svg's elements here and strip out sizing, fill, and stroke attribute then place className={`${size} ${fill} ${stroke} ${className}`} in the <svg> tag
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.21 39.06C9.7 39.06 1.18001 30.54 1.18001 20.03C1.18001 9.52 9.7 1 20.21 1C30.72 1 39.24 9.52 39.24 20.03C39.24 30.54 30.72 39.06 20.21 39.06Z"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M9.60433 14.6486L19.9999 19.8464L30.3957 14.6486C30.3172 13.2831 29.1851 12.2 27.8 12.2H12.2C10.8149 12.2 9.68272 13.2831 9.60433 14.6486Z"
        fill="white"
      />
      <path
        d="M30.4 17.5533L19.9999 22.7533L9.6 17.5534V25.2C9.6 26.636 10.7641 27.8 12.2 27.8H27.8C29.2359 27.8 30.4 26.636 30.4 25.2V17.5533Z"
        fill="white"
      />
    </svg>
  )
}
