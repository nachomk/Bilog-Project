import { eachDayOfInterval, endOfMonth, format, isSameDay, isToday, startOfMonth } from "date-fns"
import clsx from "clsx";

const weekDays = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

interface Event {
    date: Date;
    title: string;
}

interface EventCalendarProps {
    events: Event[]
}

const CalendarEvent = ({ events }: EventCalendarProps) => {
    const currentDate = new Date()
    const firstDayOfMonth = startOfMonth(currentDate)
    const lastDayOfMonth = endOfMonth(currentDate)

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    })
    
    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <h2 className="text-center">{format(currentDate, 'MMMM yyyy')}</h2>
            </div>

            <div className="grid grid-cols-7 gap-2">
                {weekDays.map((day) => {
                    return <div key={day} className="font-bold text-center">{day}</div>
                })}
                {daysInMonth.map((day, index) => {
                    return <div key={index} className={clsx("border rounded-md p-2 text-center", {
                        "bg-gray-200": isToday(day),
                        "text-gray-900": isToday(day),
                      })}>
                {format(day,'d')}
                {events.filter((event) => isSameDay(event.date, day)).map((event) => {
                    return <div key={event.title}>{event.title}</div>
                })}
                </div>
                })}

            </div>
        </div>
    )
}
export default CalendarEvent