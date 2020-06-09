import React,{useState,useEffect} from 'react';
import BookingContext from './../../context/BookingContext';
import NewBookings from './NewBookings';
import InProcessBookings from './InProcessBookings';
import ArchiveBookings from './ArchiveBookings';

const Booking = () => {



    const [getNewBookings,setNewBookings]=useState([]);
    const [getInProcessBookings,setInProcessBookings]=useState([]);
    const [getArchiveBookings,setArchiveBookings]=useState([]);
    const [showNewBookings, setShowNewBookings] = useState(false);
    const [showInProcessBookings, setshowInProcessBookings] = useState(false);
    const [showArchiveBookings, setShowArchiveBookings] = useState(false);




    const dummyBookings=[
        {
            BookingId:'2245855',
            Origin:'Shanghai , China',
            Destination:'Jebel Ali , UAE',
            Carrier:'Maersk',
            DepartureDate:'2020/05/29',
            ArrivalDate:'2020/05/30',
            CargoDetail:'1 * 20 Standard',
            TypeOfDelivery:'FCL',
            Total:'1550$'

        },
        {
            BookingId:'6554563',
            Origin:'Ningbo , China',
            Destination:'Bandar Abbas , IRAN',
            Carrier:'COSCO',
            DepartureDate:'2020/05/12',
            ArrivalDate:'2020/05/16',
            CargoDetail:'2 * 40 Standard',
            TypeOfDelivery:'LCL',
            Total:'1740$'

        }
    ]

    const dummyBookingsInProcess=[
        {
            BookingId:'22222',
            Origin:'Shanghai , China',
            Destination:'Jebel Ali , UAE',
            Carrier:'Maersk',
            DepartureDate:'2020/05/29',
            ArrivalDate:'2020/05/30',
            CargoDetail:'1 * 20 Standard',
            TypeOfDelivery:'FCL',
            Total:'1550$'

        },
        {
            BookingId:'33333',
            Origin:'Ningbo , China',
            Destination:'Bandar Abbas , IRAN',
            Carrier:'COSCO',
            DepartureDate:'2020/05/12',
            ArrivalDate:'2020/05/16',
            CargoDetail:'2 * 40 Standard',
            TypeOfDelivery:'LCL',
            Total:'1740$'

        }
    ]

    useEffect(()=>{
        setNewBookingsHandler();
        setInProcessBookingsHandler();
    },[])

    const setNewBookingsHandler=()=>{
        setNewBookings(dummyBookings)
    }
    const setInProcessBookingsHandler=()=>{
        setInProcessBookings(dummyBookingsInProcess)
    }
  

    const showNewBookingsHandler=()=>{
        setShowNewBookings(true)
        setshowInProcessBookings(false)
        setShowArchiveBookings(false)
    }
    const showInProcessBookingsHandler=()=>{
        setshowInProcessBookings(true)
        setShowNewBookings(false)
        setShowArchiveBookings(false)
    }
    const showArchiveBookingsHandler=()=>{
        setShowArchiveBookings(true)
        setShowNewBookings(false)
        setshowInProcessBookings(false)
    }
    const addInProcessBookingsToArchiveHandler=(myId)=>{
        const inProcessBookings=[...getInProcessBookings]
        const archiveBookings=[...getArchiveBookings];
        const currentInProcessBooking=inProcessBookings.find(p=>p.BookingId===myId)
        const newArchiveBooking=currentInProcessBooking;
        archiveBookings.push(newArchiveBooking);
        setArchiveBookings(archiveBookings);

        const newInProcessBookings=inProcessBookings.filter(p=>p.BookingId!==myId)
        setInProcessBookings(newInProcessBookings)

    }

    let NewBookingsComponent=null;
    if(showNewBookings){
        NewBookingsComponent=<NewBookings/>
    }
    let InProcessBookingsComponent=null;
    if(showInProcessBookings){
        InProcessBookingsComponent=<InProcessBookings/>
    }
    let ArchiveBookingsComponent=null;
    if(showArchiveBookings){
        ArchiveBookingsComponent=<ArchiveBookings/>
    }

    return (
        <BookingContext.Provider 
        value={{
            newBookings:getNewBookings,
            inProcessBookings:getInProcessBookings,
            archiveBookings:getArchiveBookings,
            showNewBookings:showNewBookingsHandler,
            showInProcessBookings:showInProcessBookingsHandler,
            showArchiveBookings:showArchiveBookingsHandler,
            HandleAddInProcessBookingsToArchive:addInProcessBookingsToArchiveHandler
        }}>
            <div className="card w-75 mb-2">
                <div className="card-header">Summary</div>
                <div className="card-body">
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={showNewBookingsHandler}
                        >
                            New <span className="badge badge-light">{getNewBookings.length}</span>
                        </button>
                        <button type="button" className="btn btn-primary" onClick={showInProcessBookingsHandler}>
                            In Process
                            <span className="badge badge-light">{getInProcessBookings.length}</span>
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={showArchiveBookingsHandler}>
                            Archive<span className="badge badge-light">{getArchiveBookings.length}</span>
                        </button>
                    </div>
                </div>
            </div>
            {NewBookingsComponent}
            {InProcessBookingsComponent}
            {ArchiveBookingsComponent}
        </BookingContext.Provider>
        
            
    );
};

export default Booking;
