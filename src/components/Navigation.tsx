import { useState } from 'react';
import type { User } from '../types';

function Navigation() {
    const user: User = JSON.parse(localStorage.getItem('user') || '{}');
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
    }

    return (
        <nav className="bg-brand sticky top-0 z-50 flex items-center justify-between px-10 h-16 shadow-[0_2px_20px_rgba(0,0,0,0.15)]">

        {/* <!-- Logo --> */}
        <div className="font-serif text-xl tracking-wide text-white flex items-center gap-2.5">
            {/* <span className="text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
            </span> */}
            <img src="/logo.ico" className="w-8 h-8" alt="" />
            HR Training Calendar
        </div>

        {/* <!-- Profile dropdown --> */}
        <div className="relative" id="navProfile">
            <button onClick={() => setShowProfileMenu(!showProfileMenu)} className="flex items-center gap-2.5 px-1.5 py-1 rounded-full hover:bg-white/10 transition-colors border-none bg-transparent cursor-pointer">
                {
                    (user.avatar) ? (
                        <img src={user.avatar} alt="User Avatar" className="w-9 h-9 rounded-full object-cover" />
                    ) : (
                        <div className="w-9 h-9 rounded-full bg-gold border-2 border-gold flex items-center justify-center gap-x-px font-serif text-[0.95rem] text-brand font-bold shrink-0">
                            <span>{user.first_name[0]}</span>
                            <span>{user.last_name[0]}</span>
                        </div>
                    )
                }
                <span id="profileCaret" className="text-white/50 flex items-center transition-transform duration-200">
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"/>
                    </svg>
                </span>
            </button>

            {/* <!-- Dropdown menu --> */}
            {
                showProfileMenu && (
                    <div className="absolute top-[calc(100%+12px)] right-0 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.18)] min-w-55 overflow-hidden z-50">
                        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
                            {
                                (user.avatar) ? (
                                    <img src={user.avatar} alt="User Avatar" className="w-9 h-9 rounded-full object-cover" />
                                ) : (
                                    <div className="w-9 h-9 rounded-full bg-gold border-2 border-gold flex items-center justify-center gap-x-px font-serif text-[0.95rem] text-brand font-bold shrink-0">
                                        <span>{user.first_name[0]}</span>
                                        <span>{user.last_name[0]}</span>
                                    </div>
                                )
                            }
                            <div className="overflow-hidden">
                                <div id="dropName" className="text-[0.875rem] font-semibold text-brand truncate">{user.name}</div>
                                <div id="dropRole" className="text-[0.72rem] text-muted truncate">{user.designation}</div>
                            </div>
                        </div>
                        <button onClick={handleLogout} className="flex items-center gap-2.5 w-full px-4 py-3.5 text-[0.875rem] font-medium text-red-600 hover:bg-red-50 transition-colors border-none bg-transparent cursor-pointer font-sans text-left">
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
                            </svg>
                            Logout
                        </button>
                    </div>
                )
            }
        </div>
    </nav>
    )
}

export default Navigation
