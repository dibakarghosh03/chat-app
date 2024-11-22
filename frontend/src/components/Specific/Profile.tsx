import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { CalendarDays, AtSign, CircleUser } from 'lucide-react';
import moment from 'moment';

const Profile = () => {
  return (
    <div className='p-10 flex flex-col items-center gap-6'>
        <Avatar className='size-32 text-4xl'>
            <AvatarImage src={""} />
            <AvatarFallback className='bg-[#2ECC71]'>DG</AvatarFallback>
        </Avatar>
        <ProfileCard heading={"Bio"} text={"Hello I am Dibakar Ghosh"}   />
        <ProfileCard heading={"Username"} text={"debugger"} icon={<AtSign />}  />
        <ProfileCard heading={"Name"} text={"Dibakar Ghosh"} icon={<CircleUser />} />
        <ProfileCard heading={"Joined"} text={moment("2024-08-25T18:30:00.000Z").fromNow()} icon={<CalendarDays />} />
    </div>
  )
}

const ProfileCard = (
{ 
    text, 
    icon, 
    heading 
}: { 
    text: string, 
    icon?: React.ReactNode, 
    heading: string
}) => {
    return <div className='text-center flex items-center gap-3'>
        {icon && icon}
        <div>
            <div className='text-lg font-semibold'>{text}</div>
            <div className='text-gray-400'>{heading}</div>
        </div>
    </div>
}

export default Profile