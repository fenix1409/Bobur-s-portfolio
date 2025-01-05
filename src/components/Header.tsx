import { useState } from "react";
import { Link } from "react-router-dom";
import { GitHub } from "../assets/Icons/Icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-[#272727] p-[10px] flex items-center justify-between border-b-[#FFFFFF40] border-px relative'>
        <h1 className='text-[22px] leading-[28px] font-medium text-white'>BOBUR ORIPOV</h1>
        {/* Mobile Menu Button */}
        <button 
          className='sm:hidden text-white' 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle Menu'>
          <div className='w-[24px] h-[2px] bg-white mb-[4px]'></div>
          <div className='w-[24px] h-[2px] bg-white mb-[4px]'></div>
          <div className='w-[24px] h-[2px] bg-white'></div>
        </button>
        {/* Navigation Links */}
        <div className={`${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 fixed top-0 right-0 w-[70%] h-full bg-[#272727] flex flex-col items-start z-50 max-sm:p-[16px] sm:static sm:translate-x-0 sm:w-auto sm:h-auto sm:flex-row sm:items-center sm:gap-[24px] sm:bg-transparent`}>
            <button className='sm:hidden text-white self-end mb-[16px]' onClick={() => setIsMenuOpen(false)} aria-label='Close Menu'>
              <div className='w-[24px] h-[2px] bg-white mb-[4px] rotate-45 translate-y-[6px]'></div>
              <div className='w-[24px] h-[2px] bg-white -rotate-45'></div>
            </button>
            <Link  to={'/'}  className='text-[16px] leading-[24px] text-white pb-[7px] border-b-2 border-transparent hover:border-[#39965F]' onClick={() => setIsMenuOpen(false)}>Bosh sahifa</Link>
            <Link  to={'/about'}  className='text-[16px] leading-[24px] text-white pb-[7px] border-b-2 border-transparent hover:border-[#39965F]' onClick={() => setIsMenuOpen(false)}>Haqida</Link>
            <Link  to={'/projects'}  className='text-[16px] leading-[24px] text-white pb-[7px] border-b-2 border-transparent hover:border-[#39965F]' onClick={() => setIsMenuOpen(false)}>Loyihalar</Link>
            <Link  to={'/contact'}  className='text-[16px] leading-[24px] text-white pb-[7px] border-b-2 border-transparent hover:border-[#39965F]' onClick={() => setIsMenuOpen(false)}>Bog'lanish</Link>
            <Link  to={'https://github.com/fenix1409'}  target='_blank'  className='text-[16px] leading-[24px] text-white pb-[7px] border-b-2 border-transparent hover:border-[#39965F]'><GitHub /></Link>
        </div>
    </div>
  );
}

export default Header;