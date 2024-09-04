import React from 'react'
import { IconProps } from './interface'

export const GooglescholarIcon: React.FC<IconProps> = ({
  fill = 'fill-current',
  stroke,
  className,
  size,
}) => {
  // TODO: Place svg's elements here and strip out sizing, fill, and stroke attribute then place className={`${size} ${fill} ${stroke} ${className}`} in the <svg> tag
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.27 39.06C9.76 39.06 1.24001 30.54 1.24001 20.03C1.24001 9.52 9.76 1 20.27 1C30.78 1 39.3 9.52 39.3 20.03C39.3 30.54 30.78 39.06 20.27 39.06Z"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <g clipPath="url(#clip0_795_900)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.9583 25.5417C27.9583 30.2131 24.1714 34 19.5 34C14.8286 34 11.0417 30.2131 11.0417 25.5417C11.0417 24.7506 11.1503 23.9848 11.3534 23.2585L19.5 29.8921L27.6466 23.2585C27.8497 23.9848 27.9583 24.7506 27.9583 25.5417Z"
          fill="white"
        />
        <path
          d="M11.8556 21.9167C13.2132 19.059 16.1259 17.0833 19.5 17.0833C22.8741 17.0833 25.7868 19.059 27.1444 21.9167H11.8556Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 16.4792L19.5 28.2861L34 16.4792L19.5 5L5 16.4792Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_795_900">
          <rect
            width="29"
            height="29"
            fill="white"
            transform="translate(5 5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
