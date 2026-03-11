function InvalidLink() {
    return (
        <>
            <section className="hero-deco wave-divider bg-brand relative overflow-hidden px-10 pt-12 pb-20">
                {/* <!-- Breadcrumb --> */}
                {/* <div className="flex items-center gap-2 text-[0.75rem] text-white/40 mb-5">
                    <span>Events</span>
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
                    <span className="text-white/70">Access Issue</span>
                </div> */}

                {/* <!-- State icon + title --> */}
                <div className="flex items-center gap-4">
                    {/* <!-- Icon circle — changes per state --> */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)]">
                        <svg width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                        </svg>
                    </div>
                    <h1 className="font-serif text-white leading-[1.15] text-[clamp(1.6rem,4vw,2.4rem)]">
                        Link Issue Detected
                    </h1>
                </div>
            </section>
            
            <main className="max-w-190 mx-auto w-full px-5 py-10 pb-20 flex flex-col gap-6">

                {/* <!-- ── STATE CARD ── --> */}
                <div className="anim-1 bg-surface border border-border rounded-xl overflow-hidden">
                    {/* <!-- Top color bar — changes per state --> */}
                    <div className="h-1 w-full bg-gold"></div>
                    <div className="px-8 py-7">
                        {/* <!-- State tag --> */}
                        <div className="bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.25)] inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
                            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-gold"></span>
                            <span>Invalid Link</span>
                        </div>
                        {/* <!-- Message --> */}
                        <h2 className="font-serif text-[1.3rem] text-brand mb-2">
                            This registration link is invalid or missing.
                        </h2>
                        <p className="text-[0.875rem] text-muted leading-[1.75] max-w-130">
                            The link you followed does not contain a valid event. This may be because the link is incomplete, was typed incorrectly, or no longer exists.
                        </p>
                    </div>
                </div>

                {/* <!-- ── CONTACT HR CARD ── --> */}
                <div className="anim-2 bg-surface border border-border rounded-xl overflow-hidden">
                    <div className="px-8 py-7">
                        <div className="text-[0.7rem] font-bold tracking-widest uppercase text-muted mb-5">Contact HR</div>

                        <div className="flex flex-col gap-3">

                            {/* <!-- Email --> */}
                            <a href="mailto:hr@yourorg.com"
                                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-brand hover:bg-[#f5f5f8] transition-all group">
                                <div className="w-10 h-10 rounded-lg bg-bg border border-border flex items-center justify-center shrink-0 text-muted group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                </div>
                                <div>
                                <div className="text-[0.78rem] font-semibold tracking-[0.04em] uppercase text-muted mb-0.5">Email</div>
                                <div className="text-[0.9rem] font-medium text-brand">hr@yourorg.com</div>
                                </div>
                                <svg className="ml-auto text-border group-hover:text-brand transition-colors" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>

                            {/* <!-- Phone --> */}
                            <a href="tel:+639176057248"
                                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-brand hover:bg-[#f5f5f8] transition-all group">
                                <div className="w-10 h-10 rounded-lg bg-bg border border-border flex items-center justify-center shrink-0 text-muted group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.17 1.22 2 2 0 012.18 0h3a2 2 0 012 1.72c.13 1 .36 1.97.7 2.9a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.18-1.18a2 2 0 012.11-.45c.93.34 1.9.57 2.9.7A2 2 0 0122 14.92z"/>
                                </svg>
                                </div>
                                <div>
                                <div className="text-[0.78rem] font-semibold tracking-[0.04em] uppercase text-muted mb-0.5">Phone</div>
                                <div className="text-[0.9rem] font-medium text-brand">0917 605 7248 or local 404</div>
                                </div>
                                <svg className="ml-auto text-border group-hover:text-brand transition-colors" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>

                {/* <!-- ── ACTIONS ── --> */}
                {/* <div className="anim-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <a href="mailto:hr@yourorg.com" className="flex items-center justify-center gap-2 bg-brand hover:bg-[#2d2d50] text-white py-3.5 rounded-lg text-[0.875rem] font-semibold tracking-wide transition-all hover:shadow-[0_6px_20px_rgba(26,26,46,0.2)] active:scale-[0.99]">
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        Email HR
                    </a>
                    <Link to='/' className="flex items-center justify-center gap-2 bg-surface border-[1.5px] border-border hover:border-brand hover:bg-[#f5f5f8] text-brand py-3.5 rounded-lg text-[0.875rem] font-semibold tracking-wide transition-all active:scale-[0.99]">
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                        Back to Dashboard
                    </Link>
                </div> */}

                {/* <p className="text-center text-[0.75rem] text-muted leading-relaxed anim-4">
                    If you believe this is a system error, please also contact <strong className="text-brand">IT Support</strong> at <a href="mailto:itsupport@yourorg.com" className="text-brand hover:underline">itsupport@yourorg.com</a>.
                </p> */}

            </main>
        </>
    )
}

export default InvalidLink