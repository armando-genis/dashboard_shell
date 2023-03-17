import React from "react"
import Logout from "./Logout"
import { IoExitOutline, IoGridOutline, IoInvertModeOutline, IoPeopleOutline, IoRadioButtonOnOutline, IoRadioSharp, IoRadioOutline } from "react-icons/io5";


export default function Header() {
    return (

        <div className="min-h-screen w-[4.5rem] border-r bg-[#000] border-white/40 grid content-between justify-items-center">
            <div className="flex flex-col space-y-8 pt-4">
                <div className="text-2xl p-2 text-white relative">
                    <div className="h-3 w-3 absolute flex justify-end right-1">
                        <div class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-gradient-to-br from-[#FF4D4D] to-[#F9CB28] opacity-75"></div>
                        <div class="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-br from-[#FF4D4D] to-[#F9CB28] "></div>
                    </div>
                    <IoRadioOutline />
                </div>
            </div>

            <div className="flex flex-col space-y-8">
                <div className="border-t border-gray-300 pt-4 mb-5">
                    <Logout />
                </div>
            </div>
        </div>
    )
};

