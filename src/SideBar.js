import React from 'react'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-700 text-white shadow-lg'>

        <SideBarIcon icon={<FaFire size={28} />} text="Yoooo 🔥" />
        <Divider />
        <SideBarIcon icon={<BsPlus size={32} />} text=" Olalala 🚀" />
        <SideBarIcon icon={<BsFillLightningFill size={20} />} text="Hello there 💀" />
        <SideBarIcon icon={<FaPoo size={20} />} text="something something" />
        <Divider />
        <SideBarIcon icon={<BsGearFill size={20} />} />
    </div>
  )
}

const SideBarIcon = ({ icon, text = 'Tooltip 💡' }) => (
    <div className='sidebar-icon group'>
        {icon}

        <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
    </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar
