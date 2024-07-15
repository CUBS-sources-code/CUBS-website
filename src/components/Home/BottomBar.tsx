import { FaFacebook, FaInstagram } from "react-icons/fa";


export default function BottomBar() {
    return (
        <div className="bg-black text-[#F9F9F9] py-4 px-6 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center space-y-2 h-19 w-full">
            <div className="flex flex-row items-center space-x-6">
                <span className="text-md font-bold">GET IN TOUCH</span>
                <a href="https://www.facebook.com/ChulaEngineering" aria-label="Facebook" className="" target="_blank">
                    <FaFacebook className="text-white text-xl" />
                </a>
                <a href="https://www.instagram.com/chulaengineeringlibrary" aria-label="Instagram"className="" target="_blank">
                    <FaInstagram className="text-white text-xl" />
                </a>
            </div>
            <div>
                <span className="text-md font-bold">
                    Copyright © 2024. All Rights Reserved
                </span>
            </div>
        </div>
    );
}

