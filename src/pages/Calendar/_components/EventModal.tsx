import { useRef, useState } from 'react'
import { getEventStatus, parseDate, STATUS_STYLES } from './Calendar';
import type { CalendarEvent, EventSlot } from '..';
import ParticipantsPanel from './ParticipantsPanel';

interface Props {
  event: CalendarEvent;
  onClose: () => void;
  showModal: boolean;
}

function dotClass(event: CalendarEvent): string {
  return STATUS_STYLES[getEventStatus(event)].dot;
}

const MONTHS_SHORT: string[] = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
export function formatFull(str: string): string {
  return parseDate(str).toLocaleDateString("en-PH", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
}

function EventModal({ event, onClose, showModal }: Props) {
  const [selectedSlot, setSelectedSlot] = useState<EventSlot | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const maxLength = 120;
  const isLong = event.description.length > maxLength;

  const handleClose = () => {
    onClose();

    setTimeout(() => {
      setSelectedSlot(null);
      setExpanded(false);
    }, 300);
  };

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) handleClose();
  };

  const handleCopyLink = async () => {
    const link = `${window.location.origin}/event/${event.id}`;

    const textarea = document.createElement("textarea");
    textarea.value = link;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 1500);
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdrop}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-brand/70 backdrop-blur-sm transition-opacity duration-300 ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className={`bg-white rounded-2xl shadow-2xl w-lg max-h-[88vh] flex flex-col overflow-hidden border border-border transition-transform duration-300 ${showModal ? "translate-y-0 scale-100" : "translate-y-full scale-0"}`}>

        {selectedSlot ? (
          <ParticipantsPanel slot={selectedSlot} event={event} onBack={() => setSelectedSlot(null)} />
        ) : (
          <>
            {/* Dark modal header */}
            <div className="relative bg-brand px-6 py-5 shrink-0 overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-gold/10 pointer-events-none" />
              <div className="absolute top-4 right-12 w-16 h-16 rounded-full border border-gold/8 pointer-events-none" />

              <div className="relative flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center gap-1.5 text-[0.62rem] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full border ${STATUS_STYLES[getEventStatus(event)].badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${dotClass(event)}`} />
                      {STATUS_STYLES[getEventStatus(event)].label}
                    </span>
                  </div>
                  <h2 className="font-serif text-white text-[1.2rem] leading-snug pr-2">{event.title}</h2>
                </div>
                <div>
                  <button
                    onClick={handleCopyLink}
                    className="text-white/35 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1.5 rounded-lg hover:bg-white/10 shrink-0 mt-0.5"
                  >
                    {
                      linkCopied ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                      )
                    }
                  </button>
                  <button
                    onClick={handleClose}
                    className="text-white/35 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1.5 rounded-lg hover:bg-white/10 shrink-0 mt-0.5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto">

              {/* Description */}
              <div className="px-6 pt-5 pb-5 border-b border-border">
                <p className="text-[0.65rem] font-bold tracking-widest uppercase text-muted mb-2">About</p>
                <p className="text-sm text-brand/80 leading-relaxed">
                  {expanded || !isLong
                    ? event.description
                    : `${event.description.slice(0, maxLength)}... `}
                  
                  {isLong && (
                    <button
                      type="button"
                      onClick={() => setExpanded(!expanded)}
                      className="inline font-semibold text-primary hover:underline"
                    >
                      {expanded ? "See less" : "See more"}
                    </button>
                  )}
                </p>
              </div>

              {/* Dates list */}
              <div className="px-6 pt-5 pb-6">
                <div className="flex items-center justify-between mb-3.5">
                  <p className="text-[0.65rem] font-bold tracking-widest uppercase text-muted">Scheduled Dates</p>
                  <span className="text-[0.68rem] text-muted font-medium">
                    {event.dates.length} {event.dates.length === 1 ? "slot" : "slots"}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5 max-h-56 overflow-y-auto pr-2">
                  {event.dates.map((slot) => {
                    const isRange    = slot.type === "range"    && slot.from_date && slot.to_date;
                    const isMultiple = slot.type === "multiple";

                    const dateLabel = isRange
                      ? `${formatFull(slot.from_date!)} – ${formatFull(slot.to_date!)}`
                      : isMultiple
                        ? [slot.date, slot.date2, slot.date3]
                            .filter(Boolean)
                            .map(d => formatFull(d!))
                            .join(" · ")
                        : formatFull(slot.date);

                    const tileMonth = MONTHS_SHORT[parseDate(slot.date).getMonth()];
                    const tileDay   = isRange
                      ? `${parseDate(slot.from_date!).getDate()}–${parseDate(slot.to_date!).getDate()}`
                      : String(parseDate(slot.date).getDate());

                    const statusBadge = slot.is_active ? "Open" : "Full / Closed";
                    const typeBadgeClass = slot.is_active
                      ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                      : "bg-red-50 text-red-600 border-red-100";

                    return (
                      <button
                        key={slot.id}
                        onClick={() => setSelectedSlot(slot)}
                        className="group w-full text-left p-3 rounded-xl border border-border bg-white hover:border-gold/50 hover:bg-[#FDFCFA] hover:shadow-sm transition-all cursor-pointer font-sans"
                      >
                        <div className="flex items-start gap-3">
                          {/* Mini date tile */}
                          <div className="flex flex-col items-center justify-center w-11 h-11 rounded-xl bg-brand shrink-0 px-1">
                            <span className="text-[0.5rem] font-bold tracking-widest uppercase text-gold leading-none">
                              {tileMonth}
                            </span>
                            <span className={`font-serif text-white leading-none mt-0.5 ${isRange ? "text-[0.75rem]" : "text-[1.1rem]"}`}>
                              {tileDay}
                            </span>
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-1 text-sm font-semibold">
                              {slot.description}
                              <span className={`text-[0.58rem] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded border ${typeBadgeClass}`}>
                                {statusBadge}
                              </span>
                            </div>
                            <p className="text-sm font-semibold text-brand leading-snug line-clamp-2">
                              {dateLabel}
                            </p>
                            <div className="w-full flex gap-x-3 gap-y-1 mt-px">
                              <span className="flex items-center gap-1 text-xs text-muted whitespace-nowrap">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                                {slot.start_time} – {slot.end_time}
                              </span>
                              <span className="flex items-center gap-1 text-xs text-muted whitespace-nowrap">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                                {slot.venue}
                              </span>
                            </div>
                            <p className="text-xs text-muted/70 truncate mt-px">{slot.location}</p>
                          </div>

                          {/* Participant count + hover arrow */}
                          <div className="flex flex-col items-end gap-2 shrink-0">
                            {/* <span className="flex items-center gap-1 text-[0.68rem] font-semibold text-brand bg-bg border border-border rounded-full px-2.5 py-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
                              {slot.participants.length}5
                            </span> */}
                            <span className="text-[0.68rem] font-semibold text-gold flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                              View
                              <svg width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path d="M9 18l6-6-6-6"/>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default EventModal