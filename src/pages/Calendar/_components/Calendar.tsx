import { useState } from 'react'

// interface Participant {
//     name:   string;
//     empid:  string;
//     dept:   string;
//     status: string;
// }

interface EventSlot {
    id:             string;
    description:    string;
    type:           string;
    date:           string; // "YYYY-MM-DD"
    date2:          string | null;
    date3:          string | null;
    from_date:      string | null;
    to_date:        string | null;
}

interface CalendarEvent {
    id:          string;
    title:       string;
    description: string;
    date:        string;
    dates:       EventSlot[];
}

interface StatusStyle {
  pill:  string;
  dot:   string;
  badge: string;
  label: string;
}

interface EventMapEntry {
  event: CalendarEvent;
  date: string;
}

type EventMap = Record<string, EventMapEntry[]>;

type EventStatus = "upcoming" | "ongoing" | "done";





// const events: CalendarEvent[] = [
    // {
    //     id: "evt-001",
    //     title: "Annual Leadership Summit Annual Leadership Summit Annual Leadership Summit",
    //     description: "A full-day gathering of department heads and team leads to align on company vision, strategic goals, and cross-functional initiatives for the year ahead.",
    //     dates: [
    //     { id: "d-001-1", date: "2025-03-10", start: "08:00 AM", end: "05:00 PM", venue: "Main Conference Hall", location: "Head Office – Makati City", participants: [
    //         { name: "Maria Santos",   empid: "EMP-00412", dept: "Information Technology", status: "confirmed" },
    //         { name: "James Reyes",    empid: "EMP-00318", dept: "Finance",                status: "confirmed" },
    //         { name: "Carla Domingo",  empid: "EMP-00521", dept: "Human Resources",        status: "confirmed" },
    //         { name: "Roberto Cruz",   empid: "EMP-00209", dept: "Operations",             status: "pending"   },
    //         { name: "Ana Villanueva", empid: "EMP-00634", dept: "Marketing",              status: "confirmed" },
    //     ]},
    //     { id: "d-001-2", date: "2025-03-11", start: "08:00 AM", end: "05:00 PM", venue: "Conference Hall A", location: "Site A – Quezon City", participants: [
    //         { name: "Leo Bautista",   empid: "EMP-00445", dept: "Admin",                  status: "confirmed" },
    //         { name: "Nina Flores",    empid: "EMP-00390", dept: "Finance",                status: "confirmed" },
    //         { name: "Marco Lim",      empid: "EMP-00501", dept: "Information Technology", status: "pending"   },
    //     ]},
    //     { id: "d-001-3", date: "2025-03-12", start: "08:00 AM", end: "05:00 PM", venue: "Conference Hall B", location: "Site C – Pasig City", participants: [
    //         { name: "Diane Torres",   empid: "EMP-00612", dept: "Operations", status: "confirmed" },
    //         { name: "Samuel Ong",     empid: "EMP-00278", dept: "Marketing",  status: "confirmed" },
    //     ]},
    //     ],
    // },
    // {
    //     id: "evt-002",
    //     title: "Q1 All-Hands Town Hall",
    //     description: "Company-wide town hall featuring updates from the executive team on Q1 performance, upcoming milestones, and open Q&A.",
    //     dates: [
    //     { id: "d-002-1", date: "2025-03-15", start: "09:00 AM", end: "12:00 PM", venue: "Main Auditorium", location: "Head Office – Makati City", participants: [
    //         { name: "Maria Santos",  empid: "EMP-00412", dept: "Information Technology", status: "confirmed" },
    //         { name: "Carla Domingo", empid: "EMP-00521", dept: "Human Resources",        status: "confirmed" },
    //         { name: "Tomas Reyes",   empid: "EMP-00190", dept: "Facilities",             status: "confirmed" },
    //         { name: "Grace Tan",     empid: "EMP-00388", dept: "Finance",                status: "pending"   },
    //     ]},
    //     { id: "d-002-2", date: "2025-03-15", start: "02:00 PM", end: "05:00 PM", venue: "Main Auditorium", location: "Head Office – Makati City", participants: [
    //         { name: "Leo Bautista", empid: "EMP-00445", dept: "Admin",      status: "confirmed" },
    //         { name: "Riza Mendoza", empid: "EMP-00566", dept: "Operations", status: "confirmed" },
    //     ]},
    //     ],
    // },
    // {
    //     id: "evt-003",
    //     title: "New Employee Orientation",
    //     description: "Onboarding program for new hires covering company culture, policies, benefits, IT setup, and department introductions.",
    //     dates: [
    //     { id: "d-003-1", date: "2025-04-07", start: "08:00 AM", end: "05:00 PM", venue: "Training Room A", location: "Head Office – Makati City", participants: [
    //         { name: "Paulo Garcia",     empid: "EMP-00701", dept: "Information Technology", status: "confirmed" },
    //         { name: "Sofia Aquino",     empid: "EMP-00702", dept: "Finance",                status: "confirmed" },
    //         { name: "Miguel dela Cruz", empid: "EMP-00703", dept: "Human Resources",        status: "confirmed" },
    //     ]},
    //     { id: "d-003-2", date: "2025-04-08", start: "08:00 AM", end: "05:00 PM", venue: "Training Room B", location: "Site A – Quezon City", participants: [
    //         { name: "Iris Castillo", empid: "EMP-00704", dept: "Marketing",  status: "confirmed" },
    //         { name: "Ben Santos",    empid: "EMP-00705", dept: "Operations", status: "pending"   },
    //     ]},
    //     { id: "d-003-3", date: "2025-04-09", start: "08:00 AM", end: "05:00 PM", venue: "Training Room C", location: "Site B – Quezon City", participants: [
    //         { name: "Mia Reyes",      empid: "EMP-00706", dept: "Admin",     status: "confirmed" },
    //         { name: "Kurt Dela Rosa", empid: "EMP-00707", dept: "Finance",   status: "confirmed" },
    //         { name: "Pia Santos",     empid: "EMP-00708", dept: "Marketing", status: "confirmed" },
    //     ]},
    //     ],
    // },
    // {
    //     id: "evt-004",
    //     title: "Mental Health & Wellness Day",
    //     description: "A dedicated day for employee wellness featuring mindfulness sessions, one-on-one counseling, and group stress management workshops.",
    //     dates: [
    //     { id: "d-004-1", date: "2025-04-17", start: "08:00 AM", end: "05:00 PM", venue: "Wellness Center", location: "Site B – Quezon City", participants: [
    //         { name: "Maria Santos",   empid: "EMP-00412", dept: "Information Technology", status: "confirmed" },
    //         { name: "Ana Villanueva", empid: "EMP-00634", dept: "Marketing",              status: "confirmed" },
    //         { name: "Carla Domingo",  empid: "EMP-00521", dept: "Human Resources",        status: "confirmed" },
    //         { name: "Leo Bautista",   empid: "EMP-00445", dept: "Admin",                  status: "confirmed" },
    //         { name: "Grace Tan",      empid: "EMP-00388", dept: "Finance",                status: "pending"   },
    //         { name: "Riza Mendoza",   empid: "EMP-00566", dept: "Operations",             status: "confirmed" },
    //     ]},
    //     { id: "d-004-2", date: "2025-04-18", start: "08:00 AM", end: "05:00 PM", venue: "Function Room 1", location: "Head Office – Makati City", participants: [
    //         { name: "Nina Flores",  empid: "EMP-00390", dept: "Finance",     status: "confirmed" },
    //         { name: "Samuel Ong",   empid: "EMP-00278", dept: "Marketing",   status: "confirmed" },
    //         { name: "Diane Torres", empid: "EMP-00612", dept: "Operations",  status: "confirmed" },
    //     ]},
    //     ],
    // },
    // {
    //     id: "evt-005",
    //     title: "Data Privacy Training",
    //     description: "Mandatory training for all employees on the Data Privacy Act, proper handling of personal data, and company data governance policies.",
    //     dates: [
    //     { id: "d-005-1", date: "2026-04-04", start: "09:00 AM", end: "12:00 PM", venue: "Training Room A", location: "Head Office – Makati City", participants: [
    //         { name: "James Reyes",  empid: "EMP-00318", dept: "Finance",                status: "confirmed" },
    //         { name: "Roberto Cruz", empid: "EMP-00209", dept: "Operations",             status: "confirmed" },
    //         { name: "Marco Lim",    empid: "EMP-00501", dept: "Information Technology", status: "confirmed" },
    //     ]},
    //     { id: "d-005-2", date: "2026-04-08", start: "01:00 PM", end: "04:00 PM", venue: "Training Room C", location: "Site B – Quezon City", participants: [
    //         { name: "Tomas Reyes",  empid: "EMP-00190", dept: "Facilities",             status: "confirmed" },
    //         { name: "Paulo Garcia", empid: "EMP-00701", dept: "Information Technology", status: "pending"   },
    //     ]},
    //     ],
    // },
    // {
    //     id: "evt-006",
    //     title: "IT Security & Cyber Forum",
    //     description: "Forum covering the latest cyber threats, phishing simulations, password best practices, and the company's incident response protocol.",
    //     dates: [
    //     { id: "d-006-1", date: "2026-04-01", start: "09:00 AM", end: "05:00 PM", venue: "Conference Hall B", location: "Site C – Pasig City", participants: [
    //         { name: "Maria Santos", empid: "EMP-00412", dept: "Information Technology", status: "confirmed" },
    //         { name: "Marco Lim",    empid: "EMP-00501", dept: "Information Technology", status: "confirmed" },
    //         { name: "Paulo Garcia", empid: "EMP-00701", dept: "Information Technology", status: "confirmed" },
    //         { name: "James Reyes",  empid: "EMP-00318", dept: "Finance",                status: "confirmed" },
    //     ]},
    //     { id: "d-006-2", date: "2026-04-06", start: "09:00 AM", end: "05:00 PM", venue: "Conference Hall A", location: "Head Office – Makati City", participants: [
    //         { name: "Ana Villanueva", empid: "EMP-00634", dept: "Marketing",        status: "confirmed" },
    //         { name: "Leo Bautista",   empid: "EMP-00445", dept: "Admin",            status: "pending"   },
    //         { name: "Carla Domingo",  empid: "EMP-00521", dept: "Human Resources",  status: "confirmed" },
    //     ]},
    //     ],
    // },
//     {
//         id: "evt-008",
//         title: "Sportsfest",
//         description: "A fun-filled day of inter-department sports competitions. Open to all employees across all sites.",
// 				date: "1970-01-01",
//         dates: [
//             { 
//                  id: "d-008-1", 
//                  description: "Day 1: Opening Ceremony & Team Sports", 
//                  type: "single", 
//                  date: "2026-04-07", 
//                  date2: null,
//                  date3: null,
//                  from_date: null,
//                  to_date: null,
//              },
//             { 
//                  id: "d-008-2", 
//                  description: "Basketball", 
//                  type: "multiple", 
//                  date: "2026-04-10", 
//                  date2: "2026-04-13",
//                  date3: "2026-04-15",
//                  from_date: null,
//                  to_date: null,
//              },
//             { 
//                  id: "d-008-3", 
//                  description: "Volleyball", 
//                  type: "range", 
//                  date: "2026-04-21", 
//                  date2: null,
//                  date3: null,
//                  from_date: "2026-04-21",
//                  to_date: "2026-04-23",
//              },
//         ],
//     },
//     {
//         id: "evt-007",
//         title: "IT Security & Cyber Forum",
//         description: "Forum covering the latest cyber threats, phishing simulations, password best practices, and the company's incident response protocol.",
// 				date: "1970-01-01",
//         dates: [
// 					{ 
// 						id: "d-007-1", 
// 						description: "Day 1: Opening Ceremony & Team Sports", 
// 						type: "single", 
// 						date: "2026-04-08", 
// 						date2: null,
// 						date3: null,
// 						from_date: null,
// 						to_date: null,
// 						},
//         ],
//     },
// ];














const MONTHS_LONG: string[]  = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const MONTHS_SHORT: string[] = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAYS_SHORT: string[]   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function parseDate(str: string): Date        { return new Date(str + "T00:00:00"); }
function getDaysInMonth(y: number, m: number): number { return new Date(y, m + 1, 0).getDate(); }
function getFirstDay(y: number, m: number): number    { return new Date(y, m, 1).getDay(); }

function buildEventMap(events: CalendarEvent[]): EventMap {
  const map: EventMap = {};
  events.forEach(evt => {
    evt.dates.forEach(slot => {
			if(slot.type === "single"){
				if (!map[slot.date]) map[slot.date] = [];
				map[slot.date].push({ event: { ...evt, description: slot.description, date: slot.date }, date: slot.date });
			}
			if(slot.type === "multiple"){
				if (!map[slot.date]) map[slot.date] = [];
				map[slot.date].push({ event: { ...evt, description: slot.description, date: slot.date }, date: slot.date });
				if(slot.date2){
					if (!map[slot.date2]) map[slot.date2] = [];
					map[slot.date2].push({ event: { ...evt, description: slot.description, date: slot.date }, date: slot.date2 });
				}
				if(slot.date3){
					if (!map[slot.date3]) map[slot.date3] = [];
					map[slot.date3].push({ event: { ...evt, description: slot.description, date: slot.date }, date: slot.date3 });
				}
			}
			if(slot.type === "range"){
				const from = new Date(slot.from_date!);
				const to = new Date(slot.to_date!);

				for (let d = new Date(from); d <= to; d.setDate(d.getDate() + 1)) {
					const date = d.toISOString().split("T")[0];
					if (!map[date]) map[date] = [];
					map[date].push({ event: { ...evt, description: slot.description, date: slot.date }, date: date });
				}
			}
    });
  });
	console.log(map);
  return map;
}
function getEventStatus(event: CalendarEvent): EventStatus {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

	const date = parseDate(event.date);
  const earliest = new Date(Math.min(date.getTime()));
  const latest   = new Date(Math.max(date.getTime()));

  if (latest < today)   return "done";
  if (earliest > today) return "upcoming";
  return "ongoing";
}

function pillClass(event: CalendarEvent): string {
  return STATUS_STYLES[getEventStatus(event)].pill;
}
const STATUS_STYLES: Record<EventStatus, StatusStyle> = {
    upcoming: {
        pill:  "bg-blue-200 text-blue-700 border-blue-200",
        dot:   "bg-blue-500",
        badge: "bg-blue-50 text-blue-700 border-blue-200",
        label: "Upcoming",
    },
    ongoing: {
        pill:  "bg-amber-200 text-amber-700 border-amber-200",
        dot:   "bg-amber-500",
        badge: "bg-amber-50 text-amber-700 border-amber-200",
        label: "Ongoing",
    },
    done: {
        pill:  "bg-bg text-[#6B6B7B] border-border",
        dot:   "bg-[#6B6B7B]",
        badge: "bg-bg text-[#6B6B7B] border-border",
        label: "Done",
    },
};

function Calendar({events}: {events: CalendarEvent[]}) {
		// console.log(events)
    const now = new Date();
    const [year,  setYear]  = useState<number>(now.getFullYear());
    const [month, setMonth] = useState<number>(now.getMonth());
    // const [events, setEvents] = useState<CalendarEvent[]>([]);
    // const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

    const eventMap = buildEventMap(events);

    function prevMonth(): void {
        if (month === 0) { setMonth(11); setYear(y => y - 1); }
        else setMonth(m => m - 1);
    }
    function nextMonth(): void {
        if (month === 11) { setMonth(0); setYear(y => y + 1); }
        else setMonth(m => m + 1);
    }

    const today     = new Date();
    const daysCount = getDaysInMonth(year, month);
    const firstDay  = getFirstDay(year, month);
    
    const cells: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysCount; d++) cells.push(d);
    while (cells.length % 7 !== 0) cells.push(null);

    return (
        <div className='w-[calc(100%-88px)] h-full p-6 overflow-y-auto'>

            {/* Toolbar */}
            <div className="flex items-center justify-between px-5 pb-3 bg-white border-b border-border shrink-0">
                <div className="flex items-center gap-3">
                    <button onClick={() => { setYear(now.getFullYear()); setMonth(now.getMonth()); }} className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-bg border border-border text-brand hover:border-brand/30 transition-colors cursor-pointer font-sans">
                        Today
                    </button>
                    <div className="flex items-center">
                        <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center rounded-lg text-muted hover:bg-bg hover:text-brand transition-colors border-none bg-transparent cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
                        </button>
                            <h2 className="font-serif text-xl text-brand w-40 text-center">
                                {MONTHS_LONG[month]} <span className="text-muted font-serif">{year}</span>
                            </h2>
                        <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center rounded-lg text-muted hover:bg-bg hover:text-brand transition-colors border-none bg-transparent cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                        </button>
                    </div>
                </div>

                <div className="hidden sm:flex items-center gap-4">
                    {(["upcoming", "ongoing", "done"] as EventStatus[]).map(s => (
                    <div key={s} className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${STATUS_STYLES[s].dot}`} />
                        <span className="text-[0.68rem] font-semibold text-muted capitalize">{STATUS_STYLES[s].label}</span>
                    </div>
                    ))}
                </div>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 border-b border-border shrink-0 bg-white">
                {DAYS_SHORT.map(d => (
                    <div key={d} className="py-3 text-center text-[0.65rem] font-bold tracking-widest uppercase text-muted">
                        {d}
                    </div>
                ))}
            </div>

            {/* Grid cells */}
            <div className="grid grid-cols-7 flex-1 auto-rows-fr">
                {
                    cells.map((day, idx) => {
                        if (!day) return (
                            <div key={`e-${idx}`} className={`border-b border-border bg-bg/50 min-h-22.5} ${(idx % 7 !== 6) && 'border-r'}`} />
                        );

                        const dateStr   = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                        const evs       = eventMap[dateStr] ?? [];
                        const isToday   = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
                        const isWeekend = (idx % 7 === 0) || (idx % 7 === 6);

                        return (
                            <div key={dateStr} className={`border-b border-border py-2 flex flex-col gap-1 min-h-24 overflow-visible ${isWeekend ? idx % 7 === 0 ? "bg-bg/70 border-r" : "bg-bg/70" : "bg-white border-r"}`}>
                                <div className="flex justify-end">
                                    <span className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-semibold ${isToday ? "bg-brand text-white" : "text-brand"}`}>
                                        {day}
                                    </span>
                                </div>

                                {   
                                    evs.slice(0, 5).map(({ event }) => {
                                        return (
                                            <button key={event.id} title={event.title} className={`w-full px-2 text-[0.65rem] font-semibold border border-transparent cursor-pointer font-sans leading-snug`}>
                                                <p className={`w-full px-2 py-1 text-left rounded-md truncate transition-all hover:scale-105 active:scale-95 ${pillClass(event)}`}>
                                                    { event.title } - { event.description }
                                                </p>
                                            </button>
                                        )
                                    }
                                )}

                                {/* {evs.length > 2 && (
                                    <button onClick={() => onEventClick(evs[0].event)} className="text-[0.62rem] text-[#6B6B7B] font-medium px-1 text-left hover:text-brand transition-colors bg-transparent border-none cursor-pointer font-sans">
                                        +{evs.length - 2} more
                                    </button>
                                )} */}
                            </div>
                        );
                })}
            </div>
        </div>
    )
}

export default Calendar