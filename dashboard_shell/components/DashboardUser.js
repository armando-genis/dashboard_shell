import React from "react"

import Layout from './Layout'
import ConsuptionChart from "./ConsuptionChart";
import SpeedChart from "./SpeedChart";
import CurrentChart from "./CurrentChart";
import TorqueChart from "./TorqueChart";
// ICONS
import { IoStatsChart, IoBatteryFullOutline, IoSpeedometerOutline } from "react-icons/io5";
import { datafetching } from '../data/data'



export default function DashboardUser() {
    const data = datafetching();


    const d = new Date();
    let day = d.getDate();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let month = d.getMonth();

    // // console.log(day);

    // // console.log(minutes);

    // console.log(data);

    return (
        <Layout>
            <header className="flex items-center  p-4">

                <div className=" font-bold text-xl text-white">{hour}:{minutes}</div>
                <p className="text-lg text-gray-500 ml-3"> {day} / {month} / 2023</p>

            </header>
            <div className="not-prose grid gap-5 border-t border-white/5 grid-cols-4 p-4 min-w-fit">
                {/* Slides */}
                <div className="drop-shadow-lg group relative flex-cols items-center min-w-fit h-[38.5rem] rounded-2xl transition-shadow hover:shadow-md  bg-white/5 hover:shadow-black/5 overflow-hidden border-2 border-white/20">
                    <div className="p-5 flex flex-col items-center">
                        {/* Content */}
                        <div className="flex items-center">
                            <div className="text-lg text-white">
                                <IoStatsChart />
                            </div>
                            <h1 className="text-lg text-white ml-2">Overview</h1>
                        </div>

                        <div className=" w-[15rem] h-[17rem] rounded-xl mt-3 relative flex items-center justify-center">
                            <div className="absolute w-[1rem] h-[3rem] rounded-lg border-4 bg-[#F9CB28] border-yellow-500 place-self-center rotate-[0deg] bottom-[10px] "></div>
                            <div className="absolute w-[2.2rem] h-[3.8rem] rounded-b-full border-4 border-gray-500 place-self-center rotate-[0deg] bottom-[4px] "></div>
                            <div className="absolute w-[6rem] h-[3rem] rounded-b-lg border-4 border-gray-600 place-self-center rotate-[0deg] bottom-[90px] z-[2] "></div>
                            <div className="absolute w-[4rem] h-[5rem] rounded-t-lg border-4 border-gray-600 place-self-center rotate-[0deg]  bottom-[180px]  "></div>
                            <div className="absolute w-[0.2rem] h-[4rem] bg-gray-500 place-self-center rotate-[90deg] bottom-[200px]  "></div>
                            <div className="absolute w-[0.2rem] h-[8rem] bg-gray-500 place-self-center rotate-[90deg] bottom-[150px]  "></div>
                            <div className="absolute w-[1rem] h-[3rem] rounded-lg border-4 bg-[#F9CB28] border-yellow-500 place-self-center rotate-[0deg] bottom-[190px] left-[55px] "></div>
                            <div className="absolute w-[1rem] h-[3rem] rounded-lg border-4 bg-[#F9CB28] border-yellow-500 place-self-center rotate-[0deg] bottom-[190px] right-[55px] "></div>

                            <div className="absolute w-[0.2rem] h-[4.4rem] bg-gray-600 place-self-center rotate-[-23deg] bottom-[25px] left-[88px] "></div>
                            <div className="absolute w-[0.2rem] h-[4.4rem] bg-gray-600 place-self-center rotate-[23deg] bottom-[25px] right-[88px] "></div>
                            <div className="absolute w-[0.2rem] h-[7rem] bg-gray-500 place-self-center rotate-[-15deg] bottom-[25px] left-[88px] "></div>
                            <div className="absolute w-[0.2rem] h-[7rem] bg-gray-500 place-self-center rotate-[15deg] bottom-[25px] right-[88px] "></div>

                            <div className="absolute w-[0.2rem] h-[4rem] bg-gray-500 place-self-center rotate-[-15deg] bottom-[125px] right-[80px] z-[1] "></div>
                            <div className="absolute w-[0.2rem] h-[4rem] bg-gray-500 place-self-center rotate-[15deg] bottom-[125px] left-[80px] z-[1] "></div>
                        </div>

                        <div className="grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-6 place-content-center min-w-full mt-6">
                            <div className="text-white">
                                <h1 className="text-base font-normal  text-gray-400">Current</h1>
                                <h1 className="text-lg border-b-2 font-thin border-[#F9CB28] ">{data?.corriente} Amps</h1>
                            </div>
                            <div className="text-white">
                                <h1 className="text-base font-normal  text-gray-400">Voltage</h1>
                                <h1 className="text-lg border-b-2 font-thin border-[#F9CB28] ">{data?.voltaje} volts</h1>
                            </div>
                            <div className="text-white">
                                <h1 className="text-base font-normal  text-gray-400">Speed</h1>
                                <h1 className="text-lg border-b-2 font-thin border-[#F9CB28] ">{data?.velocidad} mph</h1>
                            </div>
                            <div className="text-white">
                                <h1 className="text-base font-normal  text-gray-400">Rpms</h1>
                                <h1 className="text-lg border-b-2 font-thin border-[#F9CB28] ">{data?.rpms} </h1>
                            </div>
                            <div className="text-white">
                                <h1 className="text-base font-normal  text-gray-400">Motor temp</h1>
                                <h1 className="text-lg border-b-2 font-thin border-[#F9CB28] ">100 °F </h1>
                            </div>
                            <div className="text-white">
                                <h1 className="text-base font-normal  text-gray-400">Torque</h1>
                                <h1 className="text-lg border-b-2 font-thin border-[#F9CB28] ">{data?.torque} </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="not-prose grid gap-5 grid-cols-3 grid-row-2 min-w-fit col-span-3">

                    {/* CARD CONSUMPTION */}
                    <div className="drop-shadow-lg group relative grid place-items-center min-w-fit h-[18rem] rounded-2xl transition-shadow hover:shadow-md  bg-white/5 hover:shadow-black/5 overflow-hidden border-2 border-white/20">
                        <div className="p-5 flex flex-col items-center">
                            <div className="flex items-center">
                                <div className="text-xl text-white">
                                    <IoBatteryFullOutline />
                                </div>
                                <h1 className="text-lg text-white ml-2">Consumption</h1>
                            </div>
                            <div className="flex items-center mt-3">
                                <div className="w-[6rem] bg-gray-700 border-2 border-gray-400 rounded">
                                    <div className="rounded bg-gray-600 h-[2.5rem] w-[6rem] text-xs font-medium text-blue-100 text-center p-0.5 leading-none" style={{ width: "75%" }} ></div>
                                </div>
                                <div className="ml-1 w-3 bg-gray-400 h-4 rounded-r-sm"></div>
                            </div>
                            <div className="grid grid-cols-2 grid-rows-1 place-content-center w-[10rem] mt-4 text-center">
                                <div className="text-white">
                                    <h1 className="text-base font-normal  text-gray-400">Percent</h1>
                                    <h1 className="text-lg font-thin">100 %</h1>
                                </div>
                                <div className="text-white">
                                    <h1 className="text-base font-normal  text-gray-400">Range</h1>
                                    <h1 className="text-lg font-thin">1000 mi</h1>
                                </div>
                            </div>
                            {/* Graph */}
                            <div className=" w-[15rem] h-[7rem]">
                                <ConsuptionChart data_fetching={data} />
                            </div>
                        </div>
                    </div>

                    <div className="group relative grid place-items-center min-w-fit h-[18rem] rounded-2xl transition-shadow hover:shadow-md  bg-white/5 hover:shadow-black/5 overflow-hidden col-span-2 border-2 border-white/20">

                        <div className="p-5 flex flex-col items-center">
                            <div className="flex items-center">
                                <div className="text-xl text-white">
                                    <IoSpeedometerOutline />
                                </div>
                                <h1 className="text-lg text-white ml-2">Speed</h1>
                            </div>
                            <div className=" w-[35rem] h-[13rem] rounded-xl mt-3 relative ">
                                <SpeedChart data_fetching={data} />

                            </div>
                        </div>
                    </div>

                    {/* CARD TRHEE */}
                    <div className="group relative grid place-items-center min-w-fit h-[18rem] rounded-2xl transition-shadow hover:shadow-md  bg-white/5 hover:shadow-black/5 overflow-hidden border-2 border-white/20">

                        <div className="p-5 flex flex-col items-center">
                            <div className="flex items-center">
                                <div className="text-xl text-white">
                                    <IoSpeedometerOutline />
                                </div>
                                <h1 className="text-lg text-white ml-2">Current</h1>
                            </div>
                            <div className=" w-[18rem] h-[13rem] rounded-xl mt-3 relative ">
                                <CurrentChart data_fetching={data} />
                            </div>
                        </div>
                    </div>


                    {/* CARD TRHEE */}
                    <div className="group relative grid place-items-center min-w-fit h-[18rem] rounded-2xl transition-shadow hover:shadow-md  bg-white/5 hover:shadow-black/5 overflow-hidden border-2 border-white/20">

                        <div className="p-5 flex flex-col items-center">
                            <div className="flex items-center">
                                <div className="text-xl text-white">
                                    <IoSpeedometerOutline />
                                </div>
                                <h1 className="text-lg text-white ml-2">Torque</h1>
                            </div>
                            <div className=" w-[18rem] h-[13rem] rounded-xl mt-3 relative ">
                                <TorqueChart data_fetching={data} />
                            </div>
                        </div>
                    </div>


                    {/* CARD TRHEE */}
                    <div className="group relative grid place-items-center min-w-fit h-[18rem] rounded-2xl transition-shadow hover:shadow-md  bg-white/5 hover:shadow-black/5 overflow-hidden border-2 border-white/20">

                        <div className="p-5 flex flex-col items-center">
                            <div className="flex items-center">
                                <div className="text-xl text-white">
                                    <IoSpeedometerOutline />
                                </div>
                                <h1 className="text-lg text-white ml-2">Speed</h1>
                            </div>
                            <div className=" w-[10rem] h-[10rem] rounded-xl mt-3 relative border-2 border-white/20 ">
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </Layout>
    )
};

