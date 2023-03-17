import React from "react"
import { auth } from '../Firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";


import { IoExitOutline } from "react-icons/io5";
export default function Logout() {
    const authh = auth;
    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        router.push("/");
        return <div>Please sign in to continue</div>;
    }
    return (
        <div>


            <button onClick={() => authh.signOut()} class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg bg-[#F9CB28] text-zinc-100 ">
                <div class="relative px-2.5 py-2.5 transition-all ease-in duration-75 bg-[#000] rounded-md group-hover:bg-opacity-0 space-x-3 flex-row flex">

                    <div className="text-white text-2xl">
                        <IoExitOutline />
                    </div>
                </div>
            </button>

        </div>
    )
};

