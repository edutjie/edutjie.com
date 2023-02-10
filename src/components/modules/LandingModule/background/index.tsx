import React from 'react'

export const BackgroundBlur = () => {
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          width: '869px',
          height: '869px',
          left: '-173px',
          top: '457px',

          background: '#95F9C3',
          opacity: 0.5,
          filter: 'blur(500px)',

          zIndex: 0,

          animation: 'pulse 5s ease infinite alternate',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          width: '869px',
          height: '869px',
          left: '850px',
          top: '1799px',

          background: '#95F9F3',
          opacity: 0.5,
          filter: 'blur(500px)',

          zIndex: 0,

          animation: 'pulse 5s ease infinite alternate-reverse',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          width: '869px',
          height: '869px',
          left: '-173px',
          top: '3227px',

          background: '#95D5F9',
          opacity: 0.5,
          filter: 'blur(500px)',

          zIndex: 0,

          animation: 'pulse 5s ease infinite alternate',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          width: '869px',
          height: '869px',
          left: '850px',
          top: '5166px',

          background: '#9795F9',
          opacity: 0.5,
          filter: 'blur(500px)',

          zIndex: 0,

          animation: 'pulse 5s ease infinite alternate-reverse',
        }}
      ></div>
    </div>
  )
}
