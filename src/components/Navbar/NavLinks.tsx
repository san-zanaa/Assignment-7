import React from 'react';
import Marquee from './Marquee';


interface Navs {
    slug: string,
    icon: string;
    nameBn: string,
    url: string,
}

const NavLinks = async () => {
    const response = await fetch("https://api.api-store.workers.dev/api/bazardor/categories")
    const data:Navs[] = await response.json()

    return (
        <div>
            <div className='flex md:gap-5 border border-gray-200 px-4 md:px-20 py-2 text-sm mt-5 overflow-x-auto no-scrollbar md:justify-center items-center whitespace-nowrap'>
            {data.map((n, i) => (
                <div className='p-4 flex flex-col md:flex-row items-center gap-1 cursor-pointer shrink-0' key={i} >
                {n.icon}
                <span className='font-bold'>{n.nameBn}</span>
                </div>))}
            </div>
            <Marquee />
        </div>
    );
};

export default NavLinks;