import React from 'react';
import Marquee from './Marquee';
import NavLinksClient from './NavLinksClient';

interface Navs {
    id: string
    slug: string,
    icon: string;
    nameBn: string,
    url: string,
}

const NavLinks = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/bazardor/categories")
  const data: Navs[] = await response.json();

  return (
    <div>
      <NavLinksClient data={data} />
      <Marquee />
    </div>
  )
}
    

export default NavLinks;