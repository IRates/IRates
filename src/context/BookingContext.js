import {createContext} from 'react';


const BookingContext=createContext({
    newBookings:[],
    inProcessBookings:[],
    archiveBookings:[],
    showNewBookings:false,
    showInProcessBookings:false,
    showArchiveBookings:false,
    HandleAddInProcessBookingsToArchive:()=>{}
})

export default BookingContext;