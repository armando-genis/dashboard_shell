import Head from 'next/head'
import Login from '../components/Login'

export default function Home() {
  return (
    <div>
      <Head>
        <title>app shell telemetry</title>
      </Head>
      <div className="min-h-screen min-w-screen bg-[#000] overflow-hidden">
        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50 overflow-hidden">
          <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-10%] h-[110%] w-full skew-y-[-18deg]  fill-white/40 stroke-white/25"><defs><pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16"><path d="M.5 56V.5H72" fill="none"></path></pattern></defs><rect width="100%" height="100%" strokeWidth="0" fill="url(#:R56hd6:)"></rect><svg x="50%" y="16" class="overflow-visible"><rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect><rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect></svg></svg>
        </div>
        <div className="mx-auto max-w-7xl text-center pt-20 font-sans">
          <h1 className='text-white font-extrabold text-[7rem] tracking-tight '> Shell Borregos
            <span className="ml-3  text-transparent bg-clip-text bg-gradient-to-r to-[#F9CB28] from-[#FF4D4D]" >
              ccm.
            </span>
          </h1>
          <div className="mx-auto max-w-4xl pt-7 pb-12">
            <h2 className="text-[#888] tracking-wide font-normal text-[1.5rem]">Platform dedicated to the telemtry of the car of Shell Borregos CCM. Speed, volatje, amperage, engine temperature and torque are measured.</h2>
          </div>

          <Login />

          <div class="sm:flex sm:items-center sm:justify-between pt-56">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a class="hover:underline">Genis™</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            </div>
          </div>


        </div>
      </div>
    </div>

  )
}
