import React from 'react'
import Sidebar from './_components/Sidebar';
import Calendar from './_components/Calendar';

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const MONTHS_LONG  = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAYS_SHORT   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function parseDate(str: string)        { console.log(str);return new Date(str + "T00:00:00"); }
function getDaysInMonth(y: number, m: number)  { return new Date(y, m + 1, 0).getDate(); }
function getFirstDay(y: number, m: number)     { return new Date(y, m, 1).getDay(); }
function getInitials(name: string)     { return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase(); }

function formatFull(str: string) {
  return parseDate(str).toLocaleDateString("en-PH", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
}

function CalendarPage() {
    return (
        <>
            <div className='fixed flex w-screen h-screen'>
                <Sidebar />
                <Calendar />
            </div>
        </>
    )
}

export default CalendarPage