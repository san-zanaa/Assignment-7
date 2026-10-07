import React from 'react';


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
        <div className='flex gap-5 border border-gray-200 px-30 text-sm mt-5'>
            {data.map((n, i) => (
                <div className='p-4' key={i} >
                {n.icon}
                <span className='font-bold'>{n.nameBn}</span>
                </div>))}
        </div>
    );
};

export default NavLinks;