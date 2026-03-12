import { Link } from "react-router-dom"

function PageNotFound() {
    

    return (
        <>
            <style>
                {`
                    /* ── Keyframes ───────────────────────────────────────────────── */
                    @keyframes fadeSlideUp {
                        from { opacity: 0; transform: translateY(18px); }
                        to   { opacity: 1; transform: translateY(0);    }
                    }

                    @keyframes floatY {
                        0%, 100% { transform: translateY(0px);   }
                        50%       { transform: translateY(-12px); }
                    }

                    @keyframes pulseRing {
                        0%, 100% { opacity: 0.5;  transform: scale(1);    }
                        50%       { opacity: 0.15; transform: scale(1.08); }
                    }

                    @keyframes shimmerSlide {
                        0%   { transform: translateX(-100%); }
                        100% { transform: translateX(400%);  }
                    }

                    @keyframes pulseDot {
                        0%, 100% { opacity: 1;   transform: scale(1);    }
                        50%       { opacity: 0.4; transform: scale(0.75); }
                    }

                    @keyframes spinSlow {
                        from { transform: translate(-50%, -50%) rotate(0deg);   }
                        to   { transform: translate(-50%, -50%) rotate(360deg); }
                    }

                    @keyframes dropIn {
                        from { opacity: 0; transform: translateY(-6px) scale(0.98); }
                        to   { opacity: 1; transform: translateY(0)    scale(1);    }
                    }

                    /* ── Animation utility classNamees ───────────────────────────────── */
                    .anim-1 { animation: fadeSlideUp 0.45s 0.05s ease both; }
                    .anim-2 { animation: fadeSlideUp 0.45s 0.18s ease both; }
                    .anim-3 { animation: fadeSlideUp 0.45s 0.30s ease both; }
                    .anim-4 { animation: fadeSlideUp 0.45s 0.42s ease both; }
                    .anim-5 { animation: fadeSlideUp 0.45s 0.54s ease both; }

                    .float      { animation: floatY      4s   ease-in-out infinite; }
                    .pulse-ring { animation: pulseRing   3s   ease-in-out infinite; }
                    .shimmer    { animation: shimmerSlide 2.2s ease-in-out infinite; }
                    .pulse-dot  { animation: pulseDot   2s   infinite; }
                    .drop-in    { animation: dropIn     0.16s ease both; }

                    /* ── Spinning orbit (needs translate preserved) ───────────────── */
                    .spin-orbit {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 560px;
                        height: 560px;
                        border-radius: 9999px;
                        border: 1px dashed rgba(201, 168, 76, 0.08);
                        animation: spinSlow 18s linear infinite;
                        pointer-events: none;
                    }

                    /* ── 404 numeral responsive size ─────────────────────────────── */
                    .numeral-404 {
                        font-family: 'DM Serif Display', serif;
                        font-size: clamp(9rem, 22vw, 14rem);
                        line-height: 1;
                        color: rgba(255, 255, 255, 0.07);
                        pointer-events: none;
                        user-select: none;
                    }

                    /* ── Heading responsive size ─────────────────────────────────── */
                    .heading-404 {
                        font-family: 'DM Serif Display', serif;
                        font-size: clamp(1.8rem, 4.5vw, 2.8rem);
                        line-height: 1.15;
                    }

                    /* ── Caret rotation on dropdown open ────────────────────────── */
                    .caret-open { transform: rotate(180deg); }
                `}
            </style>

            <main className="flex-1 relative flex items-center justify-center px-5 py-16 overflow-hidden bg-brand h-screen w-screen">

                {/* <!-- ── Background rings ── --> */}
                <div className="pulse-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full border border-white/4 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 rounded-full border border-white/5 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-70 h-70 rounded-full border border-gold/10 pointer-events-none"></div>

                {/* <!-- Spinning dashed orbit — handled by .spin-orbit className (needs combined translate + rotate) --> */}
                <div className="spin-orbit"></div>

                {/* <!-- Ambient glow --> */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/4 blur-3xl pointer-events-none"></div>

                {/* <!-- Corner blobs --> */}
                <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gold/4 blur-2xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/3 blur-2xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                {/* <!-- ── Content ── --> */}
                <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">

                    {/* <!-- 404 numeral --> */}
                    <div className="anim-1 float relative mb-6 select-none">
                        <div className="relative overflow-hidden">
                            <span className="numeral-404">404</span>
                            {/* <!-- Shimmer sweep --> */}
                            <div className="shimmer absolute inset-0 bg-linear-to-r from-transparent via-gold/20 to-transparent pointer-events-none"></div>
                        </div>

                        {/* <!-- Icon overlaid on numeral --> */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center backdrop-blur-sm shadow-[0_0_40px_rgba(201,168,76,0.12)]">
                                <svg width="34" height="34" fill="none" stroke="#C9A84C" stroke-width="1.75" viewBox="0 0 24 24">
                                    <circle cx="11" cy="11" r="8"/>
                                    <path d="M21 21l-4.35-4.35"/>
                                    <line x1="11" y1="8" x2="11" y2="11"/>
                                    <line x1="11" y1="14" x2="11.01" y2="14"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Status chip --> */}
                    <div className="anim-2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/12 border border-gold/25 mb-5">
                        <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                        <span className="text-gold text-[0.68rem] font-bold tracking-[0.12em] uppercase">Page Not Found</span>
                    </div>

                    {/* <!-- Heading --> */}
                    <h1 className="anim-2 heading-404 text-white mb-4">
                        Lost in the<br/>
                        <span className="text-gold/85">wrong hallway.</span>
                    </h1>

                    {/* <!-- Body --> */}
                    <p className="anim-3 text-sm text-white/45 leading-relaxed max-w-sm mb-10">
                        The page you're looking for has moved, been removed, or never existed
                        in the first place. Let's get you back somewhere familiar.
                    </p>

                    {/* <!-- Actions --> */}
                    <div className="anim-3 flex flex-col sm:flex-row items-center gap-3 mb-12">
                        <Link to='/'
                            className="group flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gold text-brand text-sm font-semibold no-underline transition-all hover:bg-yellow-400 active:scale-[0.98] shadow-[0_4px_20px_rgba(201,168,76,0.25)]">
                            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                                <polyline points="9 22 9 12 15 12 15 22"/>
                            </svg>
                                Go to Dashboard / Login
                            <svg className="group-hover:translate-x-0.5 transition-transform" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PageNotFound