

function Sidebar() {
    return (
        <aside className="hidden lg:flex flex-col w-66 h-full xl:w-70 bg-white border-r border-border shrink-0 overflow-hidden">
            <div className="flex w-full h-16">
                <div className="w-1/2 h-full flex flex-col items-center justify-center border-r border-b border-border">
                    <p className="font-serif text-2xl text-brand">9</p>
                    <h1 className="text-[0.62rem] font-bold tracking-widest uppercase text-muted">Events</h1>
                </div>
                <div className="w-1/2 h-full flex flex-col items-center justify-center border-b border-border">
                    <p className="font-serif text-2xl text-brand">4</p>
                    <h1 className="text-[0.62rem] font-bold tracking-widest uppercase text-muted">Registrants</h1>
                </div>
            </div>
            <div className="w-full h-[calc(100%-64px)] p-3">
                <p className="text-[0.62rem] font-bold tracking-widest uppercase text-muted mb-3">Events This Month</p>
                
                
                <div className="">
                    {/* <p className="text-sm text-muted text-center py-6">No events this month</p> */}
                    
                <button className="w-full text-left px-3 pb-1.5 pt-2 rounded-xl border border-border hover:border-gold/40 hover:bg-[#FDFCFA] hover:shadow-sm transition-all bg-white cursor-pointer font-sans">
                  <div className="flex items-start gap-2.5">
                    <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 bg-muted`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-brand leading-snug truncate">Title</p>
                      <p className="text-[0.68rem] text-muted mt-0.5">
                        2 dates · Done
                        {/* {slots.length} {slots.length === 1 ? "date" : "dates"} · {STATUS_STYLES[getEventStatus(event)].label} */}
                      </p>
                    </div>
                  </div>
                </button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar