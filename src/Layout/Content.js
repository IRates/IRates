import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Booking from '../components/Booking/Booking';
import Profile from './../components/Profile/profile';
import Inbox from './../components/Inbox/Inbox';

const Content = () => {
    return ( 
        <Switch>
            <Route path="/profile"  component={Profile} />
            <Route path="/bookings" exact component={Booking} />
            <Route path="/inbox" exact component={Inbox} />
        </Switch>
     );
}
 
export default Content;