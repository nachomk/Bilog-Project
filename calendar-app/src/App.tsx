import './App.css'
import CalendarEvent from './components/CalendarEvent'
import { addDays, subDays } from 'date-fns'
function App() {

  return (
    <>
      <div>
        <CalendarEvent
          events = {[
            { date: subDays(new Date(), -6), title: 'Post Video'},
            { date: subDays(new Date(), -5), title: 'Edit Video'},
            { date: addDays(new Date(), 7), title: 'Code'}
          ]}
        />
      </div>
    </>
  )
}

export default App
