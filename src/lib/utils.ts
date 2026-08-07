import { type ClassValue, clsx } from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Parses a string for markdown-style links [text](url) and returns
// an array of React nodes with anchor elements for the links.
export function renderTextWithLinks(
  text: string,
  linkClassName = 'text-blue-400 hover:text-blue-300 underline decoration-blue-500/40 underline-offset-4 transition-colors'
): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  // Match [text](url) - text can be non-empty, url is http(s) or mailto
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\)/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = regex.exec(text)) !== null) {
    // Push preceding plain text
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const [, linkText, url] = match
    parts.push(
      React.createElement(
        'a',
        {
          key: `link-${key++}`,
          href: url,
          target: '_blank',
          rel: 'noopener noreferrer',
          className: linkClassName,
        },
        linkText
      )
    )
    lastIndex = regex.lastIndex
  }

  // Push trailing plain text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}
