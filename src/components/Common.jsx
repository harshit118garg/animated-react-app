import React from 'react';
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex mb-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row mt-lg-5">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-lg-center">
                                    <h1>{props.name}<strong className="brand-name"> ProDevs</strong></h1>
                                    <h5 className="my2">
                                        We are the team of talented developers making websites.
                                </h5>
                                    <div className="my-3">
                                        <NavLink to={props.visit} className="btn-get-started">{props.btname} </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} alt="home img" className="img-fluid animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;
