import type { RegistrationDetails } from "../../../types"
import { formatDateTime } from "../../../utils/formatDateTime"
import { formatTime } from "../../../utils/formatTime";

function Registered({details}: {details: RegistrationDetails | null}) {
     
    const date = details ? new Date(details.date) : '';
    const monthShort = date.toLocaleString("en-US", { month: "short" });
    const day = date && date.getDate();

    return (
        <main className="mx-auto w-full py-10 pb-24 flex flex-col gap-5">

            {/* <!-- ── REGISTRATION CARD ── --> */}
            <div className="anim-1 bg-surface rounded-2xl border border-border overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)]">

                {/* <!-- Header --> */}
                <div className="bg-brand px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                    <div className="flex items-center gap-5">
                        {/* <!-- Mini calendar --> */}
                        <div className="bg-[rgba(201,168,76,0.14)] border border-solid border-[rgba(201,168,76,0.3)] flex flex-col items-center justify-center w-13 h-13 rounded-xl shrink-0">
                            <span id="calMonth" className="text-[0.58rem] font-bold tracking-[0.12em] uppercase text-gold leading-none">{monthShort}</span>
                            <span id="calDay"   className="font-serif text-[1.5rem] text-white leading-none mt-0.5">{day}</span>
                        </div>

                        <div>
                            <div className="text-[0.63rem] font-bold tracking-[0.13em] uppercase text-white/30 mb-1">Reference Number</div>
                            <div id="refNumber" className="font-serif text-[1.4rem] text-white tracking-wide">{details?.reference_number}</div>
                            <div id="regMeta"   className="text-[0.73rem] text-white/40 mt-0.5">{`${details && formatTime(details?.start_time)}-${details && formatTime(details?.end_time)} • ${details?.venue}, ${details?.location}`}</div>
                        </div>
                    </div>

                    {/* <!-- Confirmed badge --> */}
                    <div className="bg-gold/10 border border-solid border-gold inline-flex items-center gap-2 px-4 py-1.5 rounded-full self-start sm:self-auto">
                        <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                        <span className="text-[0.67rem] font-bold tracking-widest uppercase text-gold">{details?.status}</span>
                    </div>
                </div>

                {/* <!-- Detail rows --> */}
                <div className="divide-y divide-border">
                    {/* <div className="flex items-center justify-between px-6 py-3.5 gap-4">
                        <span className="text-[0.7rem] font-semibold tracking-[0.06em] uppercase text-muted shrink-0">Full Name</span>
                        <span id="detailName" className="text-[0.875rem] font-medium text-brand text-right">Maria Santos</span>
                    </div>

                    <div className="flex items-center justify-between px-6 py-3.5 gap-4">
                        <span className="text-[0.7rem] font-semibold tracking-[0.06em] uppercase text-muted shrink-0">Employee ID</span>
                        <span id="detailEmpId" className="text-[0.875rem] font-medium text-brand text-right font-mono">EMP-00412</span>
                    </div>

                    <div className="flex items-center justify-between px-6 py-3.5 gap-4">
                        <span className="text-[0.7rem] font-semibold tracking-[0.06em] uppercase text-muted shrink-0">Department</span>
                        <span id="detailDept" className="text-[0.875rem] font-medium text-brand text-right">Information Technology</span>
                    </div>

                    <div className="flex items-center justify-between px-6 py-3.5 gap-4">
                        <span className="text-[0.7rem] font-semibold tracking-[0.06em] uppercase text-muted shrink-0">Site</span>
                        <span id="detailSite" className="text-[0.875rem] font-medium text-brand text-right">Site A – Quezon City</span>
                    </div> */}

                    <div className="flex items-center justify-between px-6 py-3.5 gap-4">
                        <span className="text-[0.7rem] font-semibold tracking-[0.06em] uppercase text-muted shrink-0">Registered</span>
                        <span id="detailSubmitted" className="text-[0.875rem] font-medium text-brand text-right">{ details && formatDateTime(details.created_at)}</span>
                    </div>
                </div>
            </div>

            {/* <!-- ── LOCKED NOTICE ── --> */}
            <div className="anim-2 flex gap-4 px-5 py-4 rounded-xl bg-[rgba(217,119,6,0.07)] border border-solid border-[rgba(217,119,6,0.2)]">
                <div className="shrink-0 pt-0.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[rgba(217,119,6,0.14)]">
                    <svg width="15" height="15" fill="none" stroke="#D97706" strokeWidth="2.2" viewBox="0 0 24 24">
                        <rect x="3" y="11" width="18" height="11" rx="2"/>
                        <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                    </div>
                </div>
                <div>
                    <div className="text-[0.825rem] font-semibold text-amber-700 mb-1">Registration is locked</div>
                    <p className="text-[0.795rem] leading-[1.7] text-[rgba(146,64,14,0.82)]">
                        You are already registered.
                        If you'd like to make changes or cancel, please contact HR and provide your reference number.
                    </p>
                </div>
            </div>

            {/* <!-- ── ACTIONS ── --> */}
            <div className="anim-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* <button onclick="window.print()"
                        className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-[0.85rem] font-semibold bg-brand text-white hover:bg-[#252542] transition-all active:scale-[0.98] border-none cursor-pointer font-sans shadow-[0_2px_12px_rgba(26,26,46,0.15)]">
                    <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <polyline points="6 9 6 2 18 2 18 9"/>
                    <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
                    <rect x="6" y="14" width="12" height="8"/>
                    </svg>
                    Print
                </button>

                <a id="hrMailto" href="mailto:hr@yourorg.com"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-[0.85rem] font-semibold transition-all no-underline active:scale-[0.98]"
                    style="background:rgba(217,119,6,0.09); border:1px solid rgba(217,119,6,0.28); color:#B45309;">
                    <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Contact HR
                </a> */}

                {/* <a href="#"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-[0.85rem] font-semibold text-brand border border-border hover:border-brand hover:bg-white transition-all bg-surface no-underline active:scale-[0.98]">
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    Dashboard
                </a> */}
            </div>

            {/* <!-- Footer note --> */}
            {/* <p className="anim-4 text-center text-[0.74rem] text-muted/75 pt-1 leading-[1.85]">
            Ref. No. <span id="footerRef" className="font-semibold text-brand">EC-2025-008412</span>
            &nbsp;·&nbsp; Present this number at the event entrance.
            </p> */}

        </main>
    )
}

export default Registered