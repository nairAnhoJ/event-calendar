import Sidebar from './_components/Sidebar';
import Calendar from './_components/Calendar';
import { useEffect, useState } from 'react';
import config from '../../config/config';

export interface EventSlot {
    id:             string;
    description:    string;
    type:           string;
    date:           string; // "YYYY-MM-DD"
    date2:          string | null;
    date3:          string | null;
    from_date:      string | null;
    to_date:        string | null;
    start_time:     string | null;
    end_time:     	string | null;
    venue:          string | null;
    location:       string | null;
		slot_limit:     number;
		is_active:      boolean;
}

export interface CalendarEvent {
    id:          string;
    title:       string;
    description: string;
    date:        string;
    dates:       EventSlot[];
}

function CalendarPage() {
	// const [loading, setLoading] = useState<boolean>(true);
	const [events, setEvents] = useState<CalendarEvent[]>([])

	const formatDate = (date: string) => {

			return new Date(date).toLocaleDateString("en-CA", {
			timeZone: "Asia/Manila",
		});
	}

	const fetchEvents = async() => {
		config.get('/events')
			.then((res)=>{
				console.log(res.data);
				const formatted = res.data.map((d: any) => ({
					id: d.id,
					title: d.title,
					description: d.description,
					date: "1970-01-01",
					dates: d.dates.map((s: any) => ({
						id: s.id,
						description: s.description,
						type: s.type,
						date: s.date ? formatDate(s.date) : null,
						date2: s.date2 ? formatDate(s.date2) : null,
						date3: s.date3 ? formatDate(s.date3) : null,
						from_date: s.from_date ? formatDate(s.from_date) : null,
						to_date: s.to_date ? formatDate(s.to_date) : null,
						start_time: s.start_time,
						end_time: s.end_time,
						venue: s.venue,
						location: s.location,
						slot_limit: s.slot_limit,
						is_active: s.is_active
					}))
				}));
				setEvents(formatted);
			})
			.catch((err)=>console.log(err))
			// .finally(()=>setLoading(false))
	}

    useEffect(()=>{
			fetchEvents();
    }, [])

    return (
        <>
            <div className='fixed flex w-screen h-screen'>
                <Sidebar />
                <Calendar events={events}/>
            </div>
        </>
    )
}

export default CalendarPage