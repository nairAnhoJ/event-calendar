import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../config/config";
import type { Event, RegistrationDetails } from "../../types";
import Registered from "./_components/Registered";
import { formatDate } from "../../utils/formatDate";
import { formatTime } from "../../utils/formatTime";
import RegisterForm from "./_components/Form";
import InvalidLink from "./InvalidLink";

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
    const [registrationDetails, setRegistrationDetails] = useState<RegistrationDetails | null>(null)
    const [pageLoading, setPageLoading] = useState<boolean>(true);
    const [isValidId, setIsValidId] = useState<boolean>(false);
    const [registered, setRegistered] = useState<boolean | null>(null);

    const navigate = useNavigate()

    useEffect(() => {
        if(!event_id) { navigate('/', {replace: true}) }

        config.get(`/events/${event_id}`)
            .then((res)=>{ 
                if(res.data.id){
                    setEvent(res.data) 
                    setIsValidId(true) 
                }else{
                    setIsValidId(false)
                }
            })
            .catch((err)=>console.log(err))


        config.get(`/register/${event_id}`)
            .then((res) => {
                if(res.data !== ""){
                    setRegistrationDetails(res.data);
                    setRegistered(true)
                }else{
                    setRegistered(false)
                }
            })
            .catch((err)=>console.log(err))
            .finally(()=>setPageLoading(false))
    }, [])

    const handleRegister = () => {
        setPageLoading(true);
        config.get(`/register/${event_id}`)
        .then((res) => {
            if(res.data !== ""){
                setRegistrationDetails(res.data);
                setRegistered(true)
            }else{
                setRegistered(false)
            }
        })
        .catch((err)=>console.log(err))
        .finally(()=>setPageLoading(false))
    }

    return (
        <>
            { pageLoading && <div>Loading...</div> }
            {
                !isValidId ?
                    <InvalidLink />
                :
                <div>
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
                            <div className="flex items-center gap-2 text-sm text-white/60">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                                </svg>
                                {
                                    event.dates.length > 1 ? 'Multiple Dates Available' : formatDate(event.dates[0]?.date)
                                }
                            </div>
                            {/* Venue, Location */}
                            <div className="flex items-center gap-2 text-sm text-white/60">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                                    <circle cx="12" cy="9" r="2.5"/>
                                </svg>
                                {
                                    event.venue ? `${event.venue}, ${event.location}` : 'Multiple Venues'
                                }
                            </div>
                            {/* Time Schedule */}
                            <div className="flex items-center gap-2 text-sm text-white/60">
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

                        {
                            registered ?
                                <Registered details={registrationDetails}/>
                            :
                                <RegisterForm  registered={() => handleRegister()}/>
                        }

                        {/* <!-- Footer note --> */}
                        <p className="text-center text-[0.78rem] text-muted">
                            Having trouble? Contact HR for assistance.
                        </p>
                    </main>
                </div>
            }
        </>
    )
}

export default EventPage