import React from 'react'
import { CONTACTS } from '@constants'

const Contacts = () => {
  return (
    <div className="flex gap-5 justify-center md:justify-start">
      {CONTACTS.map((contact) => (
        <a
          key={contact.name}
          href={contact.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:scale-125 transition-all cursor-pointer"
        >
          {contact.icon}
        </a>
      ))}
    </div>
  )
}

export default Contacts
