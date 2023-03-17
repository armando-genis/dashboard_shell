import React from "react"
import Header from './Header'
export default function Layout(props) {
    const { children } = props
    return (
        <div className="min-h-screen bg-[#000] min-w-screen">
            <div className='flex flex-row'>
                <div>
                    <Header />
                </div>
                <div className='basis-full overflow-hidden relative'>
                    <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                        <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-10%] h-[110%] w-full skew-y-[-18deg]  fill-white/40 stroke-white/25">
                            <defs>
                                <pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
                                    <path d="M.5 56V.5H72" fill="none"></path>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" strokeWidth="0" fill="url(#:R56hd6:)"></rect>
                            <svg x="50%" y="16" class="overflow-visible">
                                <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
                                <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
                                <rect strokeWidth="0" width="73" height="57" x="-200" y="500"></rect>
                                <rect strokeWidth="0" width="73" height="57" x="-450" y="650"></rect>
                            </svg>
                        </svg>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
};

