import { Link } from "react-router-dom"
import { GitHub } from "../assets/Icons/Icons"

const Header = () => {
  return (
    <div className='bg-[#272727] p-[10px] flex items-center justify-between border-b-[#FFFFFF40] border-px'>
        <h1 className='text-[22px] leading-[28px] font-medium text-white'>BOBUR ORIPOV</h1>
        <div className='flex items-center gap-[24px]'>
            <Link to={'/'} className='text-[16px] leading-[24px] text-white pb-[7px] border-b-2 border-transparent hover:border-[#39965F]'>Bosh sahifa</Link>
            <Link to={'/about'} className='text-[16px] leading-[24px] text-white pb-[7px] border-b-2 border-transparent hover:border-[#39965F]'>Haqida</Link>
            <Link to={'/projects'} className='text-[16px] leading-[24px] text-white pb-[7px] border-b-2 border-transparent hover:border-[#39965F]'>Loyihalar</Link>
            <Link to={'/contact'} className='text-[16px] leading-[24px] text-white pb-[7px] border-b-2 border-transparent hover:border-[#39965F]'>Bog'lanish</Link>
            <Link to={'https://github.com/fenix1409'} target='_blank'><GitHub/></Link>
        </div>
    </div>
  )
}

export default Header