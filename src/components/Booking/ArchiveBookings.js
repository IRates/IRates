import React,{useContext} from 'react';
import BookingContext from './../../context/BookingContext';

const ArchiveBookings = () => {
    const context = useContext(BookingContext);
    const { archiveBookings } = context;
    return (
      
        <div>
            {archiveBookings.length > 0
                ? archiveBookings.map((booking) => (
                    <div className="card w-75 mb-2">                  
                          <div className="row">
                              <div className="col-sm-6">
                                  <div className="card">
                                      <div className="card-header   bg-primary text-light">
                                          Booking Info
                                      </div>
                                      <div className="card-body">
                                          <div className="form-group row border-bottom border-1 border-light">
                                              <label className="col-sm-4 col-form-label col-form-label-sm">
                                                  Booking ID
                                              </label>
                                              <div className="input-group col-sm-8">
                                                  <label className="col-form-label col-form-label-sm font-weight-bold">
                                                      {booking.BookingId}
                                                  </label>
                                              </div>
                                          </div>
                                          <div className="form-group row border-bottom border-1 border-light">
                                              <label className="col-sm-4 col-form-label col-form-label-sm">
                                                  Origin
                                              </label>
                                              <div className="input-group col-sm-8">
                                                  <label className="col-form-label col-form-label-sm font-weight-bold">
                                                      {booking.Origin}
                                                  </label>
                                              </div>
                                          </div>
                                          <div className="form-group row border-bottom border-1 border-light">
                                              <label className="col-sm-4 col-form-label col-form-label-sm">
                                                  Destination
                                              </label>
                                              <div className="input-group col-sm-8">
                                                  <label className="col-form-label col-form-label-sm font-weight-bold">
                                                      {booking.Destination}
                                                  </label>
                                              </div>
                                          </div>
                                          <div className="form-group row border-bottom border-1 border-light">
                                              <label className="col-sm-4 col-form-label col-form-label-sm">
                                                  Carrier
                                              </label>
                                              <div className="input-group col-sm-8">
                                                  <label className="col-form-label col-form-label-sm font-weight-bold">
                                                      {booking.Carrier}
                                                  </label>
                                              </div>
                                          </div>
                                          <div className="form-group row border-bottom border-1 border-light">
                                              <label className="col-sm-4 col-form-label col-form-label-sm">
                                                  Departure Date
                                              </label>
                                              <div className="input-group col-sm-8">
                                                  <label className="col-form-label col-form-label-sm font-weight-bold">
                                                      {booking.DepartureDate}
                                                  </label>
                                              </div>
                                          </div>
                                          <div className="form-group row border-bottom border-1 border-light">
                                              <label className="col-sm-4 col-form-label col-form-label-sm">
                                                  Arrival Date
                                              </label>
                                              <div className="input-group col-sm-8">
                                                  <label className="col-form-label col-form-label-sm font-weight-bold">
                                                      {booking.ArrivalDate}
                                                  </label>
                                              </div>
                                          </div>
                                          <div className="form-group row border-bottom border-1 border-light">
                                              <label className="col-sm-4 col-form-label col-form-label-sm">
                                                  Cargo Detail
                                              </label>
                                              <div className="input-group col-sm-8">
                                                  <label className="col-form-label col-form-label-sm font-weight-bold">
                                                      {booking.CargoDetail}
                                                  </label>
                                              </div>
                                          </div>
                                          <div className="form-group row border-bottom border-1 border-light">
                                              <label className="col-sm-4 col-form-label col-form-label-sm">
                                                  Type Of Delivery
                                              </label>
                                              <div className="input-group col-sm-8">
                                                  <label className="col-form-label col-form-label-sm font-weight-bold">
                                                      {booking.TypeOfDelivery}
                                                  </label>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="card">
                                      <div className="card-header  bg-success">
                                          Finance
                                      </div>
                                      <div className="card-body">
                                          <div className="form-group row border-bottom border-1 border-light">
                                              <label className="col-sm-4 col-form-label col-form-label-sm">
                                                  Total
                                              </label>
                                              <div className="input-group col-sm-8">
                                                  <label className="col-form-label col-form-label-sm font-weight-bold">
                                                      {booking.Total}
                                                  </label>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))
                : null}
        </div>
    );
}
 
export default ArchiveBookings;