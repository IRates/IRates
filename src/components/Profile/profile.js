import React from 'react';

const Profile = () => {
    return (
        <div className="card w-75">
            <div className="card-header">Profile Information</div>
            <div className="card-body">
                <form>
                    <div className="form-group form-row">
                        <div className="input-group col-sm-2">
                            <img
                                src="./images/avatars/2.jpg"
                                alt="Avatar"
                                style={{
                                    width: '100px',
                                    borderRadius: '50%',
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label col-form-label-sm">
                            First Name
                        </label>
                        <div className="input-group col-sm-10">
                            <input
                                type="text"
                                className="form-control form-control-sm"

                                placeholder="First Name"
                            />
                            <div className="input-group-prepend">
                                <button className="btn btn-sm btn-warning">
                                    <span className="fa fa-pen"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label col-form-label-sm">
                            Last Name
                        </label>
                        <div className="input-group col-sm-10">
                            <input
                                type="text"
                                className="form-control form-control-sm"

                                placeholder="Last Name"
                            />
                            <div className="input-group-prepend">
                                <button className="btn btn-sm btn-warning">
                                    <span className="fa fa-pen"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label col-form-label-sm">
                            National Code
                        </label>
                        <div className="input-group col-sm-10">
                            <input
                                type="text"
                                className="form-control form-control-sm"

                                placeholder="National Code"
                            />
                            <div className="input-group-prepend">
                                <button className="btn btn-sm btn-warning">
                                    <span className="fa fa-pen"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label col-form-label-sm">
                            Email
                        </label>
                        <div className="input-group col-sm-10">
                            <input
                                type="email"
                                className="form-control form-control-sm"

                                placeholder="Email"
                            />
                            <div className="input-group-prepend">
                                <button className="btn btn-sm btn-warning">
                                    <span className="fa fa-pen"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label col-form-label-sm">
                            Password
                        </label>
                        <div className="input-group col-sm-10">
                            <input
                                type="password"
                                className="form-control form-control-sm"

                                placeholder="Password"
                            />
                            <div className="input-group-prepend">
                                <button className="btn btn-sm btn-warning">
                                    <span className="fa fa-pen"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label col-form-label-sm">
                            Company
                        </label>
                        <div className="input-group col-sm-10">
                            <input
                                type="text"
                                className="form-control form-control-sm"

                                placeholder="Company"
                            />
                            <div className="input-group-prepend">
                                <button className="btn btn-sm btn-warning">
                                    <span className="fa fa-pen"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label col-form-label-sm">
                            Tel
                        </label>
                        <div className="input-group col-sm-10">
                            <input
                                type="text"
                                className="form-control form-control-sm"

                                placeholder="Tel"
                            />
                            <div className="input-group-prepend">
                                <button className="btn btn-sm btn-warning">
                                    <span className="fa fa-pen"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label col-form-label-sm">
                            Mobile
                        </label>
                        <div className="input-group col-sm-10">
                            <input
                                type="text"
                                className="form-control form-control-sm"

                                placeholder="Mobile"
                            />
                            <div className="input-group-prepend">
                                <button className="btn btn-sm btn-warning">
                                    <span className="fa fa-pen"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label col-form-label-sm">
                            Address
                        </label>
                        <div className="input-group col-sm-10">
                            <textarea
                                type="text"
                                className="form-control form-control-sm"

                                placeholder="Address"
                            ></textarea>
                            <div className="input-group-prepend">
                                <button className="btn btn-sm btn-warning">
                                    <span className="fa fa-pen"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <button className="btn btn-success float-right">Update</button>
            </div>
        </div>
    );
};

export default Profile;
