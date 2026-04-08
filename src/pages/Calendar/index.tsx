import Sidebar from './_components/Sidebar';
import Calendar from './_components/Calendar';
import { useEffect, useState } from 'react';
import config from '../../config/config';

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

function CalendarPage() {
	const [loading, setLoading] = useState<boolean>(true);
	const [events, setEvents] = useState<CalendarEvent[]>([])

	const fetchEvents = async() => {
		config.get('/events')
			.then((res)=>{
				const formatted = res.data.map((d: any) => ({
					id: d.id,
					title: d.title,
					description: d.description,
					date: "1970-01-01",
					dates: d.dates.map((s: any) => ({
						id: s.id,
						description: s.description,
						type: s.type,
						date: new Date(s.date).toISOString().split("T")[0],
						date2: new Date(s.date2).toISOString().split("T")[0],
						date3: new Date(s.date3).toISOString().split("T")[0],
						from_date: new Date(s.from_date).toISOString().split("T")[0],
						to_date: new Date(s.to_date).toISOString().split("T")[0]
					}))
				}));

				setEvents(formatted);
			})
			.catch((err)=>console.log(err))
			.finally(()=>setLoading(false))
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