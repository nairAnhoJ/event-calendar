import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../config/config";
import type { Error, Event } from "../../types";
import UserInformation from "./_components/UserInformation";
import { formatDate } from "../../utils/formatDate";
import { formatTime } from "../../utils/formatTime";

function EventPage() {
    const { event_id } = useParams<{ event_id: string }>();
    const [event, setEvent] = useState<Event>({
        id: '',
        title: '',
        description: '',
        venue: '',
        location: '',
        start_time: '00:00:00',
        end_time: '00:00:00',
        registration_deadline: '',
        is_active: true,
        created_by_name: '',
        created_by: 0,
        created_at: '',
        dates: []
    });
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [agree, setAgree] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [registered, setRegistered] = useState<boolean>(false);
    
    const [errors, setErrors] = useState<Error[]>([]);

    const fetchEvent = async() => {
        try {
            const event = await config.get(`/events/${event_id}`);
            console.log(event.data);
            if(event.status === 200){
                setEvent(event.data);
            }
        } catch (error: any) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchEvent();
    }, [])

    const validate = () => {
        const newErrors: Error[] = [];
        if(selectedDate === ''){
            newErrors.push({ path: 'selected_date', msg: 'Please select a date.' });
        }
        if(newErrors.length > 0){
            setErrors(newErrors);
            setLoading(false);
            return false;
        }

        return true;
    }

    const handleSubmit = async () => {
        setErrors([]);
        setLoading(true);
        if(!validate()) return;

        try {
            const event = await config.post(`/register/store/${event_id}`, {date: selectedDate});
            console.log(event);
            if(event.status === 200){
                setRegistered(true);
            }
        } catch (error: any) {
            console.log(error);
        }

        setLoading(false);
    }

    return (
        <>
            {/* Header */}
            <section className="hero-wave bg-brand relative overflow-hidden px-10 pt-14 pb-20">
                {/* <!-- Registration Open tag --> */}
                <div className="inline-block bg-gold text-brand text-[0.7rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                    Registration { event.is_active ? 'Open' : 'Closed' }
                </div>

                {/* <!-- Event title --> */}
                <h1 className="font-serif text-white leading-[1.1] mb-4 text-[clamp(2rem,5vw,3.2rem)]">
                    {event.title}
                </h1>

                {/* <!-- Event meta --> */}
                <div className="flex flex-wrap gap-6 mt-2">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-[0.85rem] text-white/60">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                        </svg>
                        {
                            event.dates.length > 1 ? 'Multiple Dates Available' : formatDate(event.dates[0]?.date)
                        }
                    </div>
                    {/* Venue, Location */}
                    <div className="flex items-center gap-2 text-[0.85rem] text-white/60">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                            <circle cx="12" cy="9" r="2.5"/>
                        </svg>
                        {
                            event.venue ? `${event.venue}, ${event.location}` : 'Multiple Venues'
                        }
                    </div>
                    {/* Time Schedule */}
                    <div className="flex items-center gap-2 text-[0.85rem] text-white/60">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                        </svg>
                        {
                            event.start_time ? `${formatTime(event.start_time)} - ${formatTime(event.end_time)}` : 'Multiple Schedules'
                        }
                    </div>
                </div>

                <div className="absolute w-full h-20 bottom-0 left-0 translate-y-1/2 bg-white rounded-[100%]"></div>
            </section>



            <main className="max-w-190 mx-auto w-full px-5 py-10 pb-20 flex flex-col gap-6">

                {/* <!-- ABOUT THIS EVENT --> */}
                <div className="anim bg-surface border border-border rounded-xl px-8 py-6 relative">
                    {/* <!-- Gold left accent bar --> */}
                    <div className="absolute left-0 top-5 bottom-5 w-0.75 bg-gold rounded-r-sm"></div>
                    <div className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-gold mb-2.5">About This Event</div>
                    <p className="text-[0.925rem] text-muted leading-[1.75]">
                        {event.description}
                    </p>
                </div>

                {/* <!-- FORM CARD --> */}
                <div className="anim bg-surface border border-border rounded-xl px-8 py-8" id="formCard">
                    <form>
                        {/* <!-- ── DATE SELECTION ── --> */}
                        <div className="font-serif text-[1.2rem] text-brand mb-6 pb-3.5 border-b border-border">
                            Select Your Preferred Date
                        </div>

                        <div className="flex flex-col gap-3 mb-2">
                            {
                                event.dates.map((date, index) => (
                                    <label key={index} className={`date-option flex items-center gap-3.5 border-[1.5px] border-border rounded-lg px-4 py-3.5 cursor-pointer hover:border-brand hover:bg-white transition-all bg-bg ${!date.is_active && 'pointer-events-none'}`}>
                                        <input type="radio" name="date" onChange={()=>setSelectedDate(date.id)} checked={date.id === selectedDate} value={date.id} className="w-4 h-4 shrink-0 cursor-pointer" required={date.is_active} disabled={!date.is_active} />
                                        <div className="flex-1">
                                        <div className="text-[0.9rem] font-semibold text-brand">{ formatDate(date.date) }</div>
                                        <div className="text-[0.78rem] text-muted mt-0.5">
                                            {`
                                                ${formatTime(date.start_time)} - ${formatTime(date.end_time)} • 
                                                ${  event.venue ? `${event.venue}, ${event.location}` : `${date.venue}, ${date.location}` }
                                                `}</div>
                                        </div>
                                        <span className={`text-[0.68rem] font-bold uppercase tracking-[0.06em] px-2.5 py-1 rounded-full ${date.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} `}>{ date.is_active ? 'Available' : 'Full' }</span>
                                    </label>
                                ))
                            }
                            {
                                (errors.some(error => error.path === 'selected_date')) && (
                                    <div className="error-msg flex items-center gap-1 text-[0.75rem] text-red-600">
                                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                                        </svg>
                                        {errors.find(error => error.path === 'selected_date')?.msg}
                                    </div>
                                )
                            }
                        </div>

                        <UserInformation />

                        {/* <!-- ── TERMS ── --> */}
                        <div className="mt-7">
                            <label className="terms-box flex items-start gap-3.5 bg-bg border-[1.5px] border-border rounded-lg p-4 cursor-pointer transition-colors">
                                <input type="checkbox" className="w-4 h-4 mt-0.5 shrink-0 cursor-pointer" checked={agree} onChange={(e) => setAgree(e.target.checked)} required/>
                                <div className="text-[0.85rem] text-muted leading-[1.6]">
                                    I confirm that <strong className="text-brand">the date I selected above is my preferred attendance date</strong> for this event. I understand that changing my schedule after submission may not be accommodated, and I agree to attend on the confirmed date.
                                </div>
                            </label>
                        </div>

                        {/* <!-- ── SUBMIT BUTTON ── --> */}
                        <button disabled={!agree || loading} onClick={handleSubmit} type="button" className="w-full mt-7 flex items-center justify-center gap-2.5 bg-brand hover:bg-[#2d2d50] active:scale-[0.99] text-white py-4 rounded-lg text-[0.95rem] font-semibold tracking-wide transition-all hover:shadow-[0_6px_20px_rgba(26,26,46,0.2)] cursor-pointer border-none font-sans disabled:opacity-90 disabled:cursor-not-allowed">
                            Submit Registration
                            {
                                loading ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 lucide lucide-loader-circle-icon lucide-loader-circle animate-spin">
                                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                                    </svg>
                                ) : (
                                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                )
                            }
                        </button>
                    </form>
                </div>

                {/* <!-- Footer note --> */}
                <p className="text-center text-[0.78rem] text-muted">
                    Having trouble? Contact HR for assistance.
                </p>
            </main>
        </>
    )
}

export default EventPage