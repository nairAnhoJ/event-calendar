import { useEffect, useState } from 'react';
import { formatFull } from './EventModal';
import type { CalendarEvent, EventSlot } from '..';
import config from '../../../config/config';

interface Participant {
  id:                 string;
  reference_number:   string;
  id_number:          string;
  name:               string;
  department:         string;
}

interface Props {
  event:    CalendarEvent;
  slot:     EventSlot;
  onBack:   () => void;
}

function ParticipantsPanel({ event, slot, onBack }: Props) {
  const [participants, setParticipants] = useState<Participant[]>([]);

  const fetchParticipants = async() => {
    const response = await config.get(`/events/${event.id}/${slot.id}/participants`);
    setParticipants(response.data);
  }

  useEffect(()=>{
    fetchParticipants();
  },[])

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border shrink-0">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-brand transition-colors bg-transparent border-none cursor-pointer font-sans"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          Back
        </button>
        <span className="w-px h-4 bg-border" />
        <div className="min-w-0">
          <p className="text-[0.68rem] font-bold tracking-widest uppercase text-muted truncate">
            {event.title}
          </p>
          <p className="text-sm font-semibold text-brand truncate leading-snug">
            {formatFull(slot.date)}
          </p>
        </div>
      </div>

      {/* Slot meta */}
      <div className="px-6 py-3.5 bg-bg border-b border-border shrink-0">
        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
          <span className="flex items-center gap-1.5 text-xs text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            {slot.start_time} – {slot.end_time}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            {slot.venue}, {slot.location}
          </span>
        </div>
      </div>

      {/* Stats */}
      {/* <div className="px-6 py-4 border-b border-border shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="font-serif text-2xl text-brand leading-none">{slot.participants.length}</span>
            <span className="text-[0.65rem] font-bold tracking-widest uppercase text-muted mt-0.5">Total</span>
          </div>
          <span className="w-px h-8 bg-border" />
          <div className="flex flex-col">
            <span className="font-serif text-2xl text-emerald-600 leading-none">{confirmed}</span>
            <span className="text-[0.65rem] font-bold tracking-widest uppercase text-muted mt-0.5">Confirmed</span>
          </div>
          <span className="w-px h-8 bg-border" />
          <div className="flex flex-col">
            <span className="font-serif text-2xl text-amber-600 leading-none">{pending}</span>
            <span className="text-[0.65rem] font-bold tracking-widest uppercase text-muted mt-0.5">Pending</span>
          </div>
        </div>
      </div> */}

      {/* Participant list */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="flex flex-col gap-2">
          {participants.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-border hover:border-gold/40 hover:shadow-sm transition-all"
            >
              {/* <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center shrink-0 font-serif text-white text-sm font-bold">
                {getInitials(p.name)}
              </div> */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-brand truncate">{p.name}</p>
                <p className="text-xs text-muted truncate">{p.id_number} · {p.department}</p>
              </div>
              {/* <span className={`text-[0.65rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shrink-0 border ${
                p.status === "confirmed"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                  : "bg-amber-50 text-amber-700 border-amber-100"
              }`}>
                {p.status}
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParticipantsPanel