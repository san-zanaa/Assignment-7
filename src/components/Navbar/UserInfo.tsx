"use client"
import { Person } from "@gravity-ui/icons";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(user);

    return (
        <div>
            {
                user ? (
                <div className="flex items-center gap-2">
                <Avatar>
                    <Avatar.Fallback>
                        <Person />
                    </Avatar.Fallback>
                </Avatar>
                <span className="text-sm font-semibold text-[#26332b]"> {user.name} </span> 
                <span className="text-[10px] text-gray-500">▼</span>
            </div>
            ) : (
                <div className='flex gap-2 px-20 text-sm'>
                    <Link href={"/signin"} className='cursor-pointer hover:bg-gray-200 py-1 px-3 rounded-md'>সাইন ইন</Link>
                    <Link href={"/signup"} className='bg-green-900 text-white py-1 px-3 rounded-md hover:bg-[#136f63] cursor-pointer'>সাইন আপ</Link>
                </div>
            )
            }
        </div>
    )
};

export default UserInfo;