import LoginForm from "./_components/LoginForm"

function Auth() {


    return (
        <>
            <div className="w-screen h-screen overflow-hidden">
                <nav className="bg-brand flex items-center px-10 h-15.5 shrink-0 shadow-[0_2px_20px_rgba(0,0,0,0.15)]">
                    <div className="font-serif text-xl tracking-wide text-white flex items-center gap-2.5">
                        {/* <span className="text-gold">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                        </span> */}
                        <img src="/logo.ico" className="w-8 h-8" alt="" />
                        HR Training Calendar
                    </div>
                </nav>

                <main className="flex-1 grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-62px)]">
                    {/* <!-- LEFT PANEL --> */}
                    <div className="left-panel bg-brand hidden md:flex flex-col justify-center px-14 py-16 relative overflow-hidden  before:content-[''] before:absolute before:w-85 before:h-85 before:rounded-full before:border before:border-[rgba(201,168,76,0.15)] before:-top-20 before:-right-20 before:pointer-events-none after:content-[''] after:absolute after:w-55 after:h-55 after:rounded-full after:border after:border-[rgba(201,168,76,0.10)] after:bottom-10 after:-left-10 after:pointer-events-none">
                        {/* <!-- Tag --> */}
                        <div className="bg-[rgba(201,168,76,0.12)] border border-solid border-[rgba(201,168,76,0.3)] inline-flex items-center gap-1.5 mb-7 px-3 py-1.25 rounded-full text-gold text-[0.7rem] font-bold tracking-[0.12em] uppercase w-fit">
                            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-gold"></span>
                            Event Registration
                        </div>
                        {/* <!-- Heading --> */}
                        <h1 className="font-serif text-white leading-[1.15] mb-4 text-[clamp(2rem,3.5vw,2.8rem)]">
                            Your seat is waiting,<br />
                            <span className="text-gold">claim it.</span>
                        </h1>

                        {/* <!-- Description --> */}
                        <p className="text-[0.88rem] leading-[1.75] mb-11 max-w-90 text-[rgba(255,255,255,0.5)]">
                            Select your preferred date and confirm your attendance in under a minute.
                        </p>

                        {/* <!-- Features --> */}
                        <div className="flex flex-col gap-3.5">

                            <div className="flex items-center gap-3 text-[0.82rem] text-[rgba(255,255,255,0.6)]">
                                <div className="w-7.5 h-7.5 bg-[rgba(201,168,76,0.12)] border border-solid border-[rgba(201,168,76,0.2)] rounded-lg shrink-0 flex items-center justify-center text-gold">
                                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <rect x="3" y="4" width="18" height="18" rx="2"/>
                                        <path d="M16 2v4M8 2v4M3 10h18"/>
                                        <path d="M9 16l2 2 4-4"/>
                                    </svg>
                                </div>
                                Event registration
                            </div>

                            <div className="flex items-center gap-3 text-[0.82rem] text-[rgba(255,255,255,0.6)]">
                                <div className="w-7.5 h-7.5 bg-[rgba(201,168,76,0.12)] border border-solid border-[rgba(201,168,76,0.2)] rounded-lg shrink-0 flex items-center justify-center text-gold">
                                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                                    </svg>
                                </div>
                                Submit in under a minute
                            </div>

                            <div className="flex items-center gap-3 text-[0.82rem] text-[rgba(255,255,255,0.6)]">
                                <div className="w-7.5 h-7.5 bg-[rgba(201,168,76,0.12)] border border-solid border-[rgba(201,168,76,0.2)] rounded-lg shrink-0 flex items-center justify-center text-gold">
                                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
                                        <rect x="9" y="3" width="6" height="4" rx="1"/>
                                        <path d="M9 12l2 2 4-4"/>
                                    </svg>
                                </div>
                                View your confirmed schedule anytime
                            </div>
                        </div>
                    </div>

                    {/* <!-- RIGHT PANEL --> */}
                    <div className="bg-bg flex items-center justify-center px-8 py-16">
                        <LoginForm />
                    </div>
                </main>
            </div>

        </>
    )
}

export default Auth