import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
    const navigate = useNavigate()
  return (
    <div className="flex items-center">
      <Navbar />
      <div className="w-[633px] text-center mx-auto">
        <h1 className="text-[36px] leading-[54px] font-bold text-white text-center mb-[16px]">Assalomu alaykum, Men <span className="text-[36px] leading-[54px] font-bold text-[#39965F]">Bobur Oripovman</span></h1>
        <p className="text-[18px] leading-[27px] text-[#FFFFFFB2] mb-[16px]">Veb dasturchi va dizayner sifatida natijaga yo'naltirilgan ishchi. Veb-saytlar va veb-ilovalarni yaratish va boshqarish orqali umumiy mahsulot muvaffaqiyatiga erishish maqsadimdir.</p>
        <button onClick={() => navigate('/projects')} className="w-[169px] py-[8px] text-center bg-[#39965F] text-[18px] leading-[27px] text-white rounded-lg">Loyihalar</button>
      </div>
    </div>
  );
}
