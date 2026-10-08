import React from 'react';
import Image from 'next/image';
import NavLinks from './NavLinks';

const Navbar = () => {
     const date = new Date().toLocaleDateString("bn-BD", {
            dateStyle: "full"
        })
    return (
       <div>
         <div className='relative flex justify-between max-w-7xl p-5'>
            <div className='flex gap-2 px-20'>
                    <Image src={'/logo-icon.png'} alt='logo' height={50} width={50} className='w-12 h-12 object-contain bg-green-800 rounded-md'/>
                <div className='flex flex-col items-center sm:items-start'>
                    <h1 className='font-bold text-2xl'>বাজার দর</h1>
                    <p className='text-[10px] text-gray-500'>{date}</p>
                </div>
            </div>
            <div className='flex gap-2 px-20 text-sm'>
                <button className='cursor-pointer hover:bg-gray-200 py-1 px-3 rounded-md'>সাইন ইন</button>
                <button className='bg-green-900 text-white py-1 px-3 rounded-md hover:bg-[#136f63] cursor-pointer'>সাইন আপ</button>
            </div>
        </div>
        <NavLinks />
       </div>
    );
};

export default Navbar;