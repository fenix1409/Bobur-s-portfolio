import { useNavigate } from 'react-router-dom';
import { Css, Design, Diamond, Figma, Html, Js, ReactIcon, Seo, Speed, Tailwind } from '../assets/Icons/Icons';
import Navbar from '../components/Navbar';
import TS from '../assets/Icons/typescript.svg'
import Next from '../assets/Icons/nextjs.svg'

const About = () => {
    const navigate = useNavigate()
  return (
    <div className="flex">
      <Navbar />
      <div className='py-[54px] px-[20px]'>
        <div className='mb-[64px]'>
          <h1 className='text-[32px] leading-[48px] font-bold text-white mb-2'>Men haqimda</h1>
          <span className="block w-[112px] h-[8px] rounded-[10px] bg-[#39965F] mb-6"></span>
          <p className='text-[18px] leading-[27px] font-medium text-[#FFFFFFB2] mb-[30px]'>Men Bobur Oripov, 17 yoshdaman, Buxoro viloyatida tug‘ilganman. Zamonaviy va funksional veb-saytlar yaratishga qiziqaman, shuningdek, foydalanuvchilar uchun qulay va jozibali interfeyslar ishlab chiqishga e’tibor qarataman.</p>
          <p className='text-[18px] leading-[27px] font-medium text-[#FFFFFFB2] mb-[30px]'>Mening vazifam – veb-saytlarni foydalanuvchilar uchun intuitiv va samarali qilish, dizayn va funksionallikni mukammal darajada birlashtirish. Saytning tezkor va moslashuvchan bo‘lishini ta’minlash uchun JavaScript, TypeScript, React, Redux Toolkit, Next.js, React Query va Tailwind CSS kabi texnologiyalar bilan ishlayman.</p>
          <p className='text-[18px] leading-[27px] font-medium text-[#FFFFFFB2] mb-[24px]'>Mening maqsadim – mijozlar uchun yuqori sifatli va zamonaviy veb-loyihalarni hayotga tatbiq etish. Agar mening xizmatlarim sizni qiziqtirsa, men bilan bog‘laning – har qanday loyiha uchun ochiqman!</p>
          <button onClick={() => navigate('/projects')} className="w-[169px] py-[8px] text-center bg-[#39965F] text-[18px] leading-[27px] text-white rounded-lg">Loyihalar</button>
        </div>
        <div className="mb-[64px]">
          <h2 className='text-[32px] leading-[48px] font-bold text-white mb-2'>Asbob-uskunalar</h2>
          <span className="block w-[112px] h-[8px] rounded-[10px] bg-[#39965F] mb-6"></span>
          <ul className="flex items-center flex-wrap gap-[20px]">
            <li className='w-[213px] py-[30px] px-[75px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40]'><Html /></li>
            <li className='w-[213px] py-[30px] px-[75px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40]'><Css /></li>
            <li className='w-[213px] py-[30px] px-[75px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40]'><Js /></li>
            <li className='w-[213px] py-[30px] px-[75px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40]'><Figma /></li>
            <li className='w-[213px] py-[30px] px-[75px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40]'><ReactIcon /></li>
            <li className='w-[213px] py-[30px] px-[75px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40]'><Tailwind /></li>
            <li className='w-[213px] py-[30px] px-[75px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40]'>
              <img src={TS} alt="" width={64} height={64}/>
            </li>
            <li className='w-[213px] py-[30px] px-[75px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40]'>
              <img src={Next} alt="" width={64} height={64}/>
            </li>
          </ul>
        </div>
        <div className="mb-[64px]">
          <h2 className='text-[32px] leading-[48px] font-bold text-white mb-2'>Men nimalar qila olaman</h2>
          <span className="block w-[112px] h-[8px] rounded-[10px] bg-[#39965F] mb-6"></span>
          <ul className='flex items-center gap-[20px] flex-wrap'>
            <li className='w-[444px] p-[20px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40] flex items-center gap-[14px]'>
              <Seo/>
              <div>
                <span className='text-[20px] leading-[30px] font-semibold text-white mb-[6px]'>Seo</span>
                <p className='text-[16px] leading-[24px] text-white'>Qidiruv tizimining natijalarida sayt reytingini yaxshilash</p>
              </div>
            </li>
            <li className='w-[444px] p-[20px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40] flex items-center gap-[14px]'>
              <Design/>
              <div>
                <span className='text-[20px] leading-[30px] font-semibold text-white mb-[6px]'>Dizayn</span>
                <p className='text-[16px] leading-[24px] text-white'>Kuchli dizayn va kichik detallargacha e’tibor berish </p>
              </div>
            </li>
            <li className='w-[444px] p-[20px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40] flex items-center gap-[14px]'>
              <Diamond/>
              <div>
                <span className='text-[20px] leading-[30px] font-semibold text-white mb-[6px]'>Sifat</span>
                <p className='text-[16px] leading-[24px] text-white'>Ishonchli, aniq, mukammal ishlash va yuqori darajani ta'minlayman</p>
              </div>
            </li>
            <li className='w-[444px] p-[20px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40] flex items-center gap-[14px]'>
              <Speed/>
              <div>
                <span className='text-[20px] leading-[30px] font-semibold text-white mb-[6px]'>Unumdorlik</span>
                <p className='text-[16px] leading-[24px] text-white'>Vaqtni samarali boshqarish va maqsadlarga tez yetishishdir</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;