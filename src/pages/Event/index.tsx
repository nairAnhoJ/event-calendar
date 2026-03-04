import { useState } from "react";

interface User {
    id: string;
    id_number: string;
    name: string;
    first_name: string;
    last_name: string;
    department_id: number;
    department: string;
    site_id: number;
    site_name: string;
    designation: string;
    email: string
    avatar: string;
    text_color: string;
    bg_color: string;
    first_time_login: boolean;
    allowed_app: string[];
    role: string;
    is_active: boolean;
}

function Event() {
    const user: User = JSON.parse(localStorage.getItem('user') || '{}');
    const [agree, setAgree] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = () => {
        setLoading(true);
    }

    return (
        <>
            <section className="hero-wave bg-brand relative overflow-hidden px-10 pt-14 pb-20">

                {/* <!-- Registration Open tag --> */}
                <div className="inline-block bg-gold text-brand text-[0.7rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                    Registration Open
                </div>

                {/* <!-- Event title --> */}
                <h1 className="font-serif text-white leading-[1.1] max-w-160 mb-4 text-[clamp(2rem,5vw,3.2rem)]">
                    Leadership Training 2026
                </h1>

                {/* <!-- Event meta --> */}
                <div className="flex flex-wrap gap-6 mt-2">
                    <div className="flex items-center gap-2 text-[0.85rem] text-white/60">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                        </svg>
                        Multiple Dates Available
                    </div>
                    <div className="flex items-center gap-2 text-[0.85rem] text-white/60">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                            <circle cx="12" cy="9" r="2.5"/>
                        </svg>
                        Parañaque(HO), Room 304
                    </div>
                    <div className="flex items-center gap-2 text-[0.85rem] text-white/60">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                        </svg>
                        8:00 AM – 5:00 PM
                    </div>
                </div>
            </section>



            <main className="max-w-190 mx-auto w-full px-5 py-10 pb-20 flex flex-col gap-6">

                {/* <!-- ABOUT THIS EVENT --> */}
                <div className="anim bg-surface border border-border rounded-xl px-8 py-6 relative">
                    {/* <!-- Gold left accent bar --> */}
                    <div className="absolute left-0 top-5 bottom-5 w-0.75 bg-gold rounded-r-sm"></div>
                    <div className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-gold mb-2.5">About This Event</div>
                    <p className="text-[0.925rem] text-muted leading-[1.75]">
                        Join us for our interactive Leadership Training Workshop — a focused full-day session designed to build essential leadership skills, enhance communication and decision-making, and empower you to inspire and guide high-performing teams. Open to managers, team leads, and emerging leaders. Attendance is highly recommended for those looking to advance their career and impact. Please select your preferred session date below and complete the registration form.
                    </p>
                </div>

                {/* <!-- FORM CARD --> */}
                <div className="anim bg-surface border border-border rounded-xl px-8 py-8" id="formCard">
                    <form>

                        {/* <!-- ── DATE SELECTION ── --> */}
                        <div className="font-serif text-[1.2rem] text-brand mb-6 pb-3.5 border-b border-border">
                            Select Your Preferred Date
                        </div>

                        <div className="flex flex-col gap-3 mb-2">

                        {/* <!-- Date option: Available --> */}
                        <label className="date-option flex items-center gap-3.5 border-[1.5px] border-border rounded-lg px-4 py-3.5 cursor-pointer hover:border-brand hover:bg-white transition-all bg-bg">
                            <input type="radio" name="date" value="March 10, 2025" className="w-4 h-4 shrink-0 cursor-pointer" required/>
                            <div className="flex-1">
                            <div className="text-[0.9rem] font-semibold text-brand">Monday, March 6, 2026</div>
                            <div className="text-[0.78rem] text-muted mt-0.5">8:00 AM – 5:00 PM &nbsp;·&nbsp; Main Hall</div>
                            </div>
                            <span className="text-[0.68rem] font-bold uppercase tracking-[0.06em] px-2.5 py-1 rounded-full bg-green-100 text-green-700">Available</span>
                        </label>

                        {/* <!-- Date option: Available --> */}
                        <label className="date-option flex items-center gap-3.5 border-[1.5px] border-border rounded-lg px-4 py-3.5 cursor-pointer hover:border-brand hover:bg-white transition-all bg-bg">
                            <input type="radio" name="date" value="March 12, 2025" className="w-4 h-4 shrink-0 cursor-pointer" required/>
                            <div className="flex-1">
                            <div className="text-[0.9rem] font-semibold text-brand">Wednesday, March 13, 2026</div>
                            <div className="text-[0.78rem] text-muted mt-0.5">8:00 AM – 5:00 PM &nbsp;·&nbsp; Main Hall</div>
                            </div>
                            <span className="text-[0.68rem] font-bold uppercase tracking-[0.06em] px-2.5 py-1 rounded-full bg-green-100 text-green-700">Available</span>
                        </label>

                        {/* <!-- Date option: Full --> */}
                        <label className="date-option date-option-disabled flex items-center gap-3.5 border-[1.5px] border-border rounded-lg px-4 py-3.5 bg-bg" id="date-full">
                            <input type="radio" name="date" value="March 14, 2025" className="w-4 h-4 shrink-0" disabled/>
                            <div className="flex-1">
                            <div className="text-[0.9rem] font-semibold text-brand">Friday, March 20, 2026</div>
                            <div className="text-[0.78rem] text-muted mt-0.5">8:00 AM – 5:00 PM &nbsp;·&nbsp; Main Hall</div>
                            </div>
                            <span className="text-[0.68rem] font-bold uppercase tracking-[0.06em] px-2.5 py-1 rounded-full bg-red-100 text-red-700">Full</span>
                        </label>

                        </div>

                        {/* <!-- ── YOUR INFORMATION ── --> */}
                        <div className="font-serif text-[1.2rem] text-brand mt-8 mb-5 pt-6 pb-3.5 border-t border-b border-border">
                            Your Information
                        </div>

                        {/* <!-- Autofill notice --> */}
                        <div className="flex items-center gap-2.5 bg-[#EEF0FB] border border-[#D0D5F5] rounded-lg px-3.5 py-2.5 mb-5 text-[0.8rem] text-[#3a3a6e]">
                            <svg className="shrink-0 opacity-80" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                            </svg>
                            Your details have been automatically filled in based on your account. These fields are read-only.
                        </div>

                        {/* <!-- Fields grid --> */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        {/* <!-- Full Name — full width --> */}
                        <div className="flex flex-col gap-1.5 sm:col-span-2">
                            <label className="text-[0.75rem] font-semibold tracking-[0.06em] uppercase text-muted">Full Name</label>
                            <div className="relative">
                            <input type="text" value={`${user.first_name} ${user.last_name}`} readOnly className="w-full border-[1.5px] rounded-lg px-3.5 py-2.75 pr-10 text-[0.9rem] text-muted font-sans transition-colors"/>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted opacity-50 pointer-events-none">
                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                                </svg>
                            </span>
                            </div>
                        </div>

                        {/* <!-- Department --> */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[0.75rem] font-semibold tracking-[0.06em] uppercase text-muted">Department</label>
                            <div className="relative">
                            <input type="text" value={user.department} readOnly className="w-full border-[1.5px] rounded-lg px-3.5 py-2.75 pr-10 text-[0.9rem] text-muted font-sans transition-colors"/>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted opacity-50 pointer-events-none">
                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                                </svg>
                            </span>
                            </div>
                        </div>

                        {/* <!-- Designation --> */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[0.75rem] font-semibold tracking-[0.06em] uppercase text-muted">Designation / Job Title</label>
                            <div className="relative">
                                <input type="text" value={user.designation} readOnly className="w-full border-[1.5px] rounded-lg px-3.5 py-2.75 pr-10 text-[0.9rem] text-muted font-sans transition-colors"/>
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted opacity-50 pointer-events-none">
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* <!-- Site --> */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[0.75rem] font-semibold tracking-[0.06em] uppercase text-muted">Site / Location</label>
                            <div className="relative">
                            <input type="text" value={user.site_name} readOnly className="w-full border-[1.5px] rounded-lg px-3.5 py-2.75 pr-10 text-[0.9rem] text-muted font-sans transition-colors text-"/>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted opacity-50 pointer-events-none">
                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                                </svg>
                            </span>
                            </div>
                        </div>

                            {/* <!-- Employee ID --> */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[0.75rem] font-semibold tracking-[0.06em] uppercase text-muted">Employee ID</label>
                                <div className="relative">
                                    <input type="text" value={`HII-${user.id_number}`} readOnly className="w-full border-[1.5px] rounded-lg px-3.5 py-2.75 pr-10 text-[0.9rem] text-muted font-sans transition-colors"/>
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted opacity-50 pointer-events-none">
                                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* <!-- ── TERMS ── --> */}
                        <div className="mt-7">
                            <label className="terms-box flex items-start gap-3.5 bg-bg border-[1.5px] border-border rounded-lg p-4 cursor-pointer transition-colors">
                                <input type="checkbox" className="w-4 h-4 mt-0.5 shrink-0 cursor-pointer" checked={agree} onChange={(e) => setAgree(e.target.checked)} required/>
                                <div className="text-[0.85rem] text-muted leading-[1.6]">
                                    I confirm that <strong className="text-brand">the date I selected above is my preferred attendance date</strong> for this event. I understand that changing my schedule after submission may not be accommodated, and I agree to attend on the confirmed date.
                                </div>
                            </label>
                        </div>

                        {/* <!-- ── SUBMIT BUTTON ── --> */}
                        <button disabled={loading} onClick={handleSubmit} type="button" className="w-full mt-7 flex items-center justify-center gap-2.5 bg-brand hover:bg-[#2d2d50] active:scale-[0.99] text-white py-4 rounded-lg text-[0.95rem] font-semibold tracking-wide transition-all hover:shadow-[0_6px_20px_rgba(26,26,46,0.2)] cursor-pointer border-none font-sans disabled:opacity-90 disabled:cursor-not-allowed">
                            Submit Registration
                            {
                                loading ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 lucide lucide-loader-circle-icon lucide-loader-circle animate-spin">
                                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                                    </svg>
                                ) : (
                                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                )
                            }
                        </button>
                    </form>

                    {/* <!-- ── SUCCESS STATE ── --> */}
                    <div className="hidden text-center py-14 px-5" id="successOverlay">
                        <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center mx-auto mb-5">
                            <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>
                        <h2 className="font-serif text-[1.8rem] text-brand mb-2">You're Registered!</h2>
                        <p id="successMsg" className="text-[0.9rem] text-muted">Your attendance has been confirmed. A confirmation will be sent to your department.</p>
                    </div>

                </div>

                {/* <!-- Footer note --> */}
                <p className="text-center text-[0.78rem] text-muted">
                    Having trouble? Contact HR for assistance.
                </p>

            </main>
        </>
    )
}

export default Event