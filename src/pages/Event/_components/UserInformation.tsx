import type { User } from '../../../types';

function UserInformation() {
    const user: User = JSON.parse(localStorage.getItem('user') || '{}');
    return (
        <>
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
        </>
    )
}

export default UserInformation