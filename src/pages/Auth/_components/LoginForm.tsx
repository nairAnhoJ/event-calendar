import { useState } from "react"
import { useParams } from "react-router-dom";
import config from "../../../config/config";
import type { Error } from "../../../types";

interface Data {
    id_number: string;
    password: string;
}

function LoginForm() {
    const { event_id } = useParams<{ event_id: string }>();
    const [data, setData] = useState<Data>({
        id_number: '',
        password: '',
    });
    const [showPassword, setshowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Error[]>([]);

    const validation = () => {
        const newErrors: Error[] = [];
        if(data.id_number.trim() === ''){
            newErrors.push({ path: 'id_number', msg: 'Please enter your ID Number.' });
        }
        if(data.password.trim() === ''){
            newErrors.push({ path: 'password', msg: 'Please enter your password.' });
        }
        if(newErrors.length > 0){
            setErrors(newErrors);
            setLoading(false);
            return false;
        }
        return true;
    }

    const handleSubmit = async () => {
        setErrors([]);
        setLoading(true);
        if(!validation()) return;

        try {
            const res = await config.post('/auth/login', data);
            console.log(res);
            if(res.status === 200){
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                if(event_id){
                    window.location.href = `/event/${event_id}`;
                }else{
                    window.location.href = '/';
                }
            }
        } catch (error: any) {
            console.log(error.response);
            if(error.response?.data?.errors){
                setErrors(error.response.data.errors);
            }
        }

        setLoading(false);
    }

    return (
        <>
            <div className="w-full max-w-105">
                {/* <!-- Greeting --> */}
                <div className="mb-8 text-center">
                    <h2 className="font-serif text-[1.85rem] text-brand mb-1.5">Welcome back.</h2>
                    <p className="text-[0.875rem] text-muted">Sign in to continue to your portal.</p>
                </div>

                {/* <!-- Form Card --> */}
                <div className="bg-surface border border-border rounded-xl px-9 pt-9 pb-8">
                    <form id="loginForm" noValidate>

                        {
                            (errors.some(error => error.path === 'all')) && (
                                <div className="w-full flex items-center justify-center px-3 mb-6">
                                    <div className="bg-red-600/10 text-red-500 font-medium px-5 py-1.5 border border-red-500 rounded-lg">
                                        {errors.find(error => error.path === 'all')?.msg}
                                    </div>
                                </div>
                            )
                        }

                        {/* <!-- EMPLOYEE ID --> */}
                        <div className="flex flex-col gap-1.5 mb-5">
                        <label className="text-[0.75rem] font-semibold tracking-[0.06em] uppercase text-muted">
                            ID Number
                        </label>
                        <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted opacity-60 pointer-events-none" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="2" y="7" width="20" height="14" rx="2"/>
                                <path d="M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z"/>
                            </svg>
                            <input value={data.id_number} onChange={(e) => setData({...data, id_number: e.target.value})} type="text" placeholder="Enter your ID number" autoComplete="off" required className="path-input w-full bg-bg border-[1.5px] border-border rounded-lg pl-16.75 pr-3.5 py-2.75 text-[0.9rem] text-muted placeholder-[#bbb] transition-colors duration-200 font-sans tracking-wide"/>
                            <span className="absolute left-9.5 top-1/2 -translate-y-1/2 text-muted tracking-wider">HII-</span>
                        </div>
                        {
                            (errors.some(error => error.path === 'id_number')) && (
                                <div className="error-msg flex items-center gap-1 text-[0.75rem] text-red-600">
                                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                                    </svg>
                                    Please enter your ID Number.
                                </div>
                            )
                        }
                        </div>

                        {/* <!-- PASSWORD --> */}
                        <div className="flex flex-col gap-1.5">
                        <label className="text-[0.75rem] font-semibold tracking-[0.06em] uppercase text-muted">
                            Password
                        </label>
                        <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted opacity-60 pointer-events-none" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="3" y="11" width="18" height="11" rx="2"/>
                                <path d="M7 11V7a5 5 0 0110 0v4"/>
                            </svg>
                            <input value={data.password} onChange={(e) => setData({...data, password: e.target.value})} type={showPassword ? "text" : "password"} placeholder="Enter your password" autoComplete="off" required className="path-input w-full bg-bg border-[1.5px] border-border rounded-lg pl-10 pr-10 py-2.75 text-[0.9rem] text-muted placeholder-[#bbb] transition-colors duration-200 font-sans" />
                            {/* <!-- Show / Hide toggle --> */}
                            <button onClick={()=>setshowPassword(!showPassword)} type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted opacity-50 hover:opacity-100 transition-opacity flex items-center p-0.5 bg-transparent border-none cursor-pointer">
                                {
                                    !showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                                    ): (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>
                                    )
                                }
                            </button>
                        </div>
                        {
                            (errors.some(error => error.path === 'password')) && (
                                <div className="error-msg flex items-center gap-1 text-[0.75rem] text-red-600">
                                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                                    </svg>
                                    Please enter your password.
                                </div>
                            )
                        }
                        </div>

                        {/* <!-- Divider --> */}
                        <div className="h-px bg-border my-6"></div>

                        {/* <!-- Submit Button --> */}
                        <button onClick={handleSubmit} disabled={loading} type="button"  className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-[#2d2d50] active:scale-[0.99] text-white py-3.5 rounded-lg text-[0.9rem] font-semibold tracking-wide transition-all duration-200 hover:shadow-[0_6px_20px_rgba(26,26,46,0.2)] cursor-pointer border-none font-sans disabled:opacity-90 disabled:cursor-not-allowed">
                            <span>Sign In</span>
                            {
                                !loading ? (
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 lucide lucide-loader-circle-icon lucide-loader-circle animate-spin">
                                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                                    </svg>
                                )
                            }
                        </button>

                    </form>
                </div>

                {/* <!-- Footer --> */}
                <p className="text-center text-[0.75rem] text-muted mt-5 leading-relaxed">
                    Having trouble signing in? Contact HR for assistance.
                </p>
            </div>
        </>
    )
}

export default LoginForm