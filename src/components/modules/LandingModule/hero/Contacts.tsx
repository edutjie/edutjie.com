import Link from 'next/link'
import React from 'react'
import { CONTACTS } from '../constant'

const Contacts = () => {
  return (
    <div className="flex gap-5">
      {CONTACTS.map((contact) => (
        <Link key={contact.name} href={contact.url}>
          <div className="flex items-center gap-2 hover:scale-125 transition-all cursor-pointer">
            {contact.icon}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Contacts
