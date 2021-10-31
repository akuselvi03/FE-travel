import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css'
const Features = () => {
    return (
        <div className="container-fluid">
            <div className="features-bg  margin1 d-flex justify-content-center align-items-center">
                <div>
                <h1 className="display-2 ">Our Features</h1>
                <p><Link to="/home">HOME</Link> /OUR FEATURES</p>
                </div>
            </div>
            {/* weekend in europe */}
            <div className="row  mt-5">
                <div className="col-lg-7 p-5 mt-5">
                    <h1 style={{ borderBottom: "4px solid black" }}><span className="text-danger text text-bold">Weekend in Europe,</span>London</h1>
                    <span className="text-danger text text-bold">Spain,Barcelona Villa de Bago</span> <br />
                    <small style={{ fontSize: "15px" }}>For a long time, London was a small city. All its people lived inside the walls that were built by the Romans. This area is still called the City of London. There were many villages around it and gradually they joined.</small>
                </div>
                <div className="col-lg-5">
                    <img className="img-fluid" src="http://travesia.axiomthemes.com/wp-content/uploads/2017/09/form_about_bg.png?id=892" alt="" />
                </div>
            </div>
            {/* section 3 popular package */}
            <div className="container">
                <h4 className="text-dark text-bold text-center m-5 text">POPULAR PACKAGE</h4>
                <div className="row ">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-8 ">
                                <img className="img-fluid" src="https://travelpress.skat.tf/wp-content/uploads/sites/20/2017/01/paris.jpg?fbclid=IwAR1rlNZet4-H3AOKZQXtJVEy89t03nIN6KpWC5L5QId8sbYr5djTsfwPJA8" alt="" />
                            </div>
                            <div className="col-lg-4">
                                <img className="img-fluid" src="https://travelpress.skat.tf/wp-content/uploads/sites/20/2017/01/greece.jpg?fbclid=IwAR1FwV44iGpHOLsrz8VihrVUwPxDY6KgbKVib6-nZlBimpn92VBvohwLDHI" alt="" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img className="img-fluid" src="https://travelpress.skat.tf/wp-content/uploads/sites/20/2017/01/uk.jpg?fbclid=IwAR1rlNZet4-H3AOKZQXtJVEy89t03nIN6KpWC5L5QId8sbYr5djTsfwPJA8" alt="" />
                                </div>
                                <div className="col-lg-8 ">
                                    <img style={{ width: "620px" }} className="img-fluid " src="https://travelpress.skat.tf/wp-content/uploads/sites/20/2017/01/dubai.jpg?fbclid=IwAR0mFQh3hDqAOvg4X4Hf_K92o1cQNlM-7qmEQe8SdCwQKycN6pvfYKCL4l8" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <img style={{ height: '430px' }} src="https://travelpress.skat.tf/wp-content/uploads/sites/20/2017/01/usa.jpg?fbclid=IwAR0fi9QRoZno5R1qaDYuZQdFlVR6NpYULoywnkGCtZ_0SZJbQ_0idrDfpAE" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Features;