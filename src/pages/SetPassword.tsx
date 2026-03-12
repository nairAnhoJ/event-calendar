import { useState } from "react";
import type { Error, User } from "../types";
import config from "../config/config";
import { useParams } from "react-router-dom";

interface Data {
    password: string;
    password_confirmation: string;
}

function SetPassword() {
    const { event_id } = useParams<{ event_id: string }>();
    const user: User = JSON.parse(localStorage.getItem('user') || '{}');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Data>({ password: '', password_confirmation: '' })
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const [errors, setErrors] = useState<Error[]>([]);

    const validation = () => {
        const newErrors: Error[]  = [];
        if(data.password.trim() === ''){
            newErrors.push({ path: 'password', msg: 'Please enter your password.' });
        }else if(data.password.length < 8){
            newErrors.push({ path: 'password', msg: 'Password must be at least 8 characters long.' });
        }
        if(data.password_confirmation.trim() === ''){
            newErrors.push({ path: 'password_confirmation', msg: 'Please confirm your password.' });
        }

        if(data.password !== data.password_confirmation){
            newErrors.push({ path: 'password_confirmation', msg: 'Passwords do not match' })
        }

        if(newErrors.length > 0){
            setErrors(newErrors);
            setLoading(false);
            return false;
        }

        return true;
    }

    const handleSubmit = () => {
        setLoading(true);
        if(!validation()) return;

        config.post('/auth/change-password/0', data)
            .then((res) => {
                if(res.status === 200){
                    if(event_id){
                        window.location.href = `/event/${event_id}`
                    }else{
                        window.location.href = `/event`
                    }
                }
            })
            .catch((err)=>console.log(err))
            .finally(()=>setLoading(false))
    }

    return (

        <>
            <style>
                {`
                    /* ── Entrance animations ── */
                    @keyframes fadeSlideUp {
                        from { opacity: 0; transform: translateY(14px); }
                        to   { opacity: 1; transform: translateY(0);    }
                    }
                    .anim-1 { animation: fadeSlideUp 0.4s 0.05s ease both; }
                    .anim-2 { animation: fadeSlideUp 0.4s 0.15s ease both; }
                    .anim-3 { animation: fadeSlideUp 0.4s 0.25s ease both; }
                    .anim-4 { animation: fadeSlideUp 0.4s 0.35s ease both; }

                    /* ── Password input focus ring ── */
                    .pw-input:focus {
                        outline: none;
                        border-color: #C9A84C !important;
                        box-shadow: 0 0 0 3px rgba(201,168,76,0.15);
                    }
                    .pw-input.error:focus {
                        border-color: #ef4444 !important;
                        box-shadow: 0 0 0 3px rgba(239,68,68,0.12);
                    }

                    /* ── Strength bar segments ── */
                    .strength-seg {
                        height: 4px;
                        border-radius: 99px;
                        flex: 1;
                        transition: background 0.3s ease;
                        background: #E0DDD8;
                    }

                    /* ── Requirement item ── */
                    .req-item {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        font-size: 0.775rem;
                        color: #6B6B7B;
                        transition: color 0.2s ease;
                    }
                    .req-item.met { color: #16a34a; }
                    .req-item .req-dot {
                        width: 16px; height: 16px;
                        border-radius: 50%;
                        border: 1.5px solid #E0DDD8;
                        display: flex; align-items: center; justify-content: center;
                        flex-shrink: 0;
                        transition: all 0.2s ease;
                    }
                    .req-item.met .req-dot {
                        background: #16a34a;
                        border-color: #16a34a;
                    }
                `}
            </style>

            <div className="absolute top-0 left-0 h-screen w-screen flex">
                {/* <!-- ── LEFT PANEL (dark, decorative) ── --> */}
                <div className="hidden lg:flex lg:w-1/2 bg-brand relative overflow-hidden flex-col justify-between px-14 py-12">
                    {/* <!-- Decorative circles --> */}
                    <div className="absolute rounded-[50%] pointer-events-none w-105 h-105 -top-25 -right-35 border border-[rgba(201,168,76,0.08)]"></div>
                    <div className="absolute rounded-[50%] pointer-events-none w-70 h-70 -bottom-15 -left-20 border border-[rgba(201,168,76,0.06)]"></div>
                    <div className="absolute rounded-[50%] pointer-events-none w-40 h-40 top-[38%] left-[20%] border border-[rgba(201,168,76,0.07)]"></div>

                    {/* <!-- Logo --> */}
                    <div>
                        {/* <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                        <span className="font-serif text-white text-xl tracking-wide">YourOrg</span> */}
                    </div>

                    {/* <!-- Center content --> */}
                    <div className="relative z-10 flex flex-col gap-6">

                        {/* <!-- Lock icon --> */}
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2 bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.25)]">
                            <svg width="24" height="24" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="3" y="11" width="18" height="11" rx="2"/>
                                <path d="M7 11V7a5 5 0 0110 0v4"/>
                            </svg>
                        </div>

                        {/* <!-- Tag --> */}
                        <div className="inline-flex items-center gap-2 self-start text-[0.68rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full text-gold bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.25)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                            First-Time Setup
                        </div>

                        <h2 className="font-serif text-white leading-[1.1] text-[clamp(1.8rem,2.5vw,2.5rem)]">
                            Secure your<br/>account before<br/><span className="text-[rgba(201,168,76,0.85)]">you get started.</span>
                        </h2>

                        <p className="text-[0.875rem] leading-[1.75] text-[rgba(255,255,255,0.45)] max-w-[320px]">
                            You've been granted access using a temporary credential. Set a strong personal password to protect your account.
                        </p>

                        {/* <!-- Tips --> */}
                        <div className="flex flex-col gap-3 mt-2">
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)]">
                                    <svg width="12" height="12" fill="none" stroke="#C9A84C" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    </svg>
                                </div>
                                <span className="text-[0.8rem] text-[rgba(255,255,255,0.5)]">Use a unique password you don't use elsewhere</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)]">
                                    <svg width="12" height="12" fill="none" stroke="#C9A84C" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                                        <path d="M8 21h8M12 17v4"/>
                                    </svg>
                                </div>
                                <span className="text-[0.8rem] text-[rgba(255,255,255,0.5)]">Avoid using your name, employee ID, or birthdate</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)]">
                                    <svg width="12" height="12" fill="none" stroke="#C9A84C" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                                    </svg>
                                </div>
                                <span className="text-[0.8rem] text-[rgba(255,255,255,0.5)]">Contact IT Support if you need help accessing your account</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="relative z-10 text-[0.72rem] text-[rgba(255,255,255,0.2)]">
                        © <span id="yr"></span> Handling Innovation Inc. · All rights reserved.
                    </div>

                </div>

                {/* <!-- ── RIGHT PANEL (form) ── --> */}
                <div className="flex-1 flex flex-col justify-center items-center px-6 sm:px-12 py-12 bg-bg min-h-screen">

                    <div className="w-full max-w-105">

                        {/* <!-- Welcome header --> */}
                        <div className="anim-1 mb-8">
                            {/* <!-- User greeting pill --> */}
                            <div className="inline-flex items-center gap-2.5 mb-5 px-3 pt-2 pb-1.25 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.22)]">
                                {/* <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center font-serif text-brand font-bold text-[0.65rem]">
                                    MS
                                </div> */}
                                <span className="text-[0.775rem] font-semibold text-[#92700a]">
                                    Welcome, 
                                    <span className=""> {(user.first_name).toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}</span>
                                </span>
                            </div>

                            <h1 className="font-serif text-brand mb-2 text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.15]">
                                Set your password
                            </h1>
                            <p className="text-[0.875rem] leading-[1.7] text-muted">
                                Create a strong password to secure your YourOrg account. You'll use this every time you sign in.
                            </p>
                        </div>

                        {/* <!-- ── FORM ── --> */}
                        <form className="anim-2 flex flex-col gap-5">

                            {/* <!-- New password --> */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[0.78rem] font-semibold text-brand tracking-[0.03em]">New Password</label>
                                <div className="relative">
                                    <input type={showPassword ? 'text' : 'password'} onChange={(e)=>setData({...data, password: e.target.value})} placeholder="Enter your new password" autoComplete="off" className="pw-input w-full px-4 py-3 pr-11 rounded-xl text-[0.9rem] text-brand bg-surface transition-all border-[1.5px] border-border" />
                                    <button type="button" onClick={()=>setShowPassword(!showPassword)} className="toggle-vis absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-brand transition-colors bg-0 border-0 cursor-pointer p-0 flex">
                                        {
                                            showPassword ? (
                                                <svg className="eye-closed" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                                                    <line x1="1" y1="1" x2="23" y2="23"/>
                                                </svg>
                                            ) : (
                                                <svg className="eye-open" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                                                </svg>
                                            )
                                        }
                                    </button>
                                </div>
                                {
                                    errors.some((err)=>err.path === 'password') && (
                                        <span className="text-[0.75rem] text-red-500 flex items-center gap-1 mt-0.5">
                                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                            <span>{ errors.find((err)=>err.path === 'password')?.msg }</span>
                                        </span>
                                    )
                                }
                            </div>

                            {/* <!-- Confirm password --> */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[0.78rem] font-semibold text-brand tracking-[0.03em]">Confirm Password</label>
                                <div className="relative">
                                    <input type={showPasswordConfirmation ? 'text' : 'password'} onChange={(e)=>setData({...data, password_confirmation: e.target.value})} placeholder="Re-enter your password" autoComplete='off' className="pw-input w-full px-4 py-3 pr-11 rounded-xl text-[0.9rem] text-brand bg-surface transition-all border-[1.5px] border-border"/>
                                    <button type="button" onClick={()=>setShowPasswordConfirmation(!showPasswordConfirmation)} className="toggle-vis absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-brand transition-colors bg-none border-0 cursor-pointer p-0 flex">
                                        {
                                            showPasswordConfirmation ? (
                                                <svg className="eye-closed" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                                                    <line x1="1" y1="1" x2="23" y2="23"/>
                                                </svg>
                                            ) : (
                                                <svg className="eye-open" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                                                </svg>
                                            )
                                        }
                                    </button>
                                </div>
                                {
                                    errors.some((err)=>err.path === 'password_confirmation') && (
                                        <span className="text-[0.75rem] text-red-500 flex items-center gap-1 mt-0.5">
                                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                            <span>{ errors.find((err)=>err.path === 'password_confirmation')?.msg }</span>
                                        </span>
                                    )
                                }
                                <span id="confirmPassError" className="hidden text-[0.75rem] text-red-500 flex items-center gap-1 mt-0.5">
                                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                    <span></span>
                                </span>
                            </div>

                            {/* <!-- Submit --> */}
                            <button onClick={handleSubmit} type="button" className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-[0.9rem] font-medium transition-all mt-1 bg-brand text-white border-0 cursor-pointer tracking-wide">
                                <span id="btnText">Set Password & Continue</span>
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

                        {/* <!-- Footer note --> */}
                        <p className="anim-3 text-center text-[0.73rem] text-muted/90 mt-6 leading-[1.8]">
                            Having trouble? Contact
                            <span className="text-brand/90 font-semibold"> IT Support </span>
                            for assistance.
                        </p>

                    </div>

                </div>
            </div>
        </>
    )
}

export default SetPassword