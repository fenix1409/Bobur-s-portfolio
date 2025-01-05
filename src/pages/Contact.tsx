import { Link } from "react-router-dom"
import { ContactEmail, ContactPhone, ContactTg } from "../assets/Icons/Icons"
import React, { useState } from "react";
import Navbar from "../components/Navbar";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact:React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("https://your-backend-url.com/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("So‘rov yuborildi!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            alert("Xato yuz berdi. Iltimos, qayta urinib ko‘ring.");
        }
    };
    return (
        <div className="flex">
            <Navbar />
            <div className="py-[32px] px-5">
                <h1 className='text-[32px] leading-[48px] font-bold text-white mb-2'>Bog’lanish</h1>
                <span className="block w-[112px] h-[8px] rounded-[10px] bg-[#39965F] mb-6"></span>
                <ul className="flex items-center gap-[20px]">
                    <li className='w-[290px] py-[28px] px-[48px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40] text-center'>
                        <div className="flex justify-center"><ContactEmail /></div>
                        <span className="text-[20px] leading-[30px] font-semibold text-white inline-block my-2">E-pochta</span>
                        <Link to={'mailto:oripovbobur208@gmail.com'} target="_blank" className="text-[16px] leading-[24px] text-[#FFFFFFB2]">oripovbobur208@gmail.com</Link>
                    </li>
                    <li className='w-[290px] py-[28px] px-[48px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40] text-center'>
                        <div className="flex justify-center"><ContactTg /></div>
                        <span className="text-[20px] leading-[30px] font-semibold text-white inline-block my-2">Telegram</span>
                        <Link to={'https://t.me/Boburjon_Oripov208'} target="_blank" className="text-[16px] leading-[24px] text-[#FFFFFFB2]">t.me/Boburjon_Oripov208</Link>
                    </li>
                    <li className='w-[290px] py-[28px] px-[48px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40] text-center flex flex-col items-center'>
                        <div className="flex justify-center"><ContactPhone /></div>
                        <span className="text-[20px] leading-[30px] font-semibold text-white inline-block my-2">Telefon raqam</span>
                        <Link to={'tel:+998977772439'} target="_blank" className="text-[16px] leading-[24px] text-[#FFFFFFB2]">+998-97-777-24-39</Link>
                    </li>
                </ul>
                <div className="mt-[64px]">
                    <h1 className='text-[32px] leading-[48px] font-bold text-white mb-2'>So’rov yuborish</h1>
                    <span className="block w-[112px] h-[8px] rounded-[10px] bg-[#39965F] mb-6"></span>
                    <form onSubmit={handleSubmit} className="w-[912px] py-[28px] px-[48px] bg-[#1B1B1B] border-[1px] rounded-xl border-[#FFFFFF40]">
                        <div className="flex flex-col gap-[10px]">
                            <label className="text-[16px] leading-[24px] text-white" htmlFor="name">Ismingiz*</label>
                            <input className="w-[420px] text-white border-[#FFFFFF40] border-[1px] bg-transparent rounded-lg pl-[20px] py-[10px] outline-none focus:border-[#39965F]" placeholder="Ismingizni kiriting" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label className="text-[16px] leading-[24px] text-white" htmlFor="email">Manzilingiz*</label>
                            <input className="w-[420px] text-white border-[#FFFFFF40] border-[1px] bg-transparent rounded-lg pl-[20px] py-[10px] outline-none focus:border-[#39965F]" placeholder="E-pochatingizni kiriting" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label className="text-[16px] leading-[24px] text-white" htmlFor="message">Izohingiz*</label>
                            <textarea className="border-[#FFFFFF40] border-[1px] text-white bg-transparent rounded-lg pl-[20px] py-[10px] outline-none focus:border-[#39965F]" id="message" name="message" placeholder="O’z izohingizni yozing..." value={formData.message} onChange={handleChange} required />
                        </div>
                        <button className="w-[169px] py-[8px] text-center bg-[#39965F] text-[18px] leading-[27px] text-white rounded-lg mt-5">Yuborish</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact