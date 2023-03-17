import React from "react"

// For the authentication. 
import { initFirebase, auth } from '../Firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";

//For the icons. 
import { IoLogoGoogle } from "react-icons/io5";



export default function Login() {
    initFirebase();

    const provider = new GoogleAuthProvider();
    const auth_user = auth;
    const [user, loading] = useAuthState(auth_user);
    const router = useRouter();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (user) {
        router.push("/dashboard");
        return <div>Loading...</div>;
    }

    const signIn = async () => {
        const result = await signInWithPopup(auth_user, provider);
        console.log(result.user);
    };

    return (
        <div>

            <button onClick={signIn} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-[#FF4D4D] to-[#F9CB28] text-white focus:ring-4 focus:outline-none focus:ring-pink-800">
                <div class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#000] rounded-md group-hover:bg-opacity-0 space-x-3 flex-row flex">
                    <span>Log in with </span>
                    <div className="text-white text-xl">
                        <IoLogoGoogle />
                    </div>
                </div>
            </button>


        </div>
    )
};

