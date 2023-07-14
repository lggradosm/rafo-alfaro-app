import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavItem({linkName,link}) {
  const url = import.meta.env.BASE_URL;
  const underlineAfter = `after:content-[""] after:`

  return (
    <li className=' flex__center relative  '>
      <NavLink 
      to={`${url+link}`}
      className={({isActive})=>(isActive?`block w-full flex__center h-full  after:animate-underlineNavItem after:absolute after:block after:rounded-full  after:left-0 after:-bottom-0  after:h-0.5 after:bg-white`:`block h-full w-full flex__center hover:brightness-75 duration-200 `)
        }>
        {linkName}
      </NavLink>
    </li>
  )
}
