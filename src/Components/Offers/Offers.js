import React from 'react';
import { Fade } from 'react-reveal';
import { Col, Row } from 'react-bootstrap';
import './Offers.css';
const Offers = () => {
    return (
        <div className="container-fluid">
            <div className="tour mt-5">
                <Fade bottom>
                    <div className="text-center">
                        <h4 className="text-dark text-bold">Select Offers For Travelling</h4>
                        <small>Invent your tour by your favourite place</small>
                    </div>
                </Fade>
                <Fade bottom>
                    <Row lg={6} sm={3} className="mt-3">
                        {/* column 1 */}
                        <Col>
                            <div className="text-center">
                                <img style={{ width: "50px" }} src="https://i.ibb.co/cF5Wh4b/eiffel-tower.png" alt="" /> <br />
                                <small>Different Countries</small>
                            </div>
                        </Col>
                        {/* column 2 */}
                        <Col>
                            <div className="text-center">
                                <img style={{ width: "50px" }} src="https://i.ibb.co/2kF3ntq/bus.png" alt="" /> <br />
                                <small>Bus Tours</small>
                            </div>
                        </Col>
                        {/* column 3 */}
                        <Col>
                            <div className="text-center">
                                <img style={{ width: "50px" }} src="https://i.ibb.co/ccXqrpv/fast-food.png" alt="" /> <br />
                                <small>Food Tours</small>
                            </div>
                        </Col>
                        {/* column 4 */}
                        <Col>
                            <div className="text-center">
                                <img style={{ width: "50px" }} src="https://i.ibb.co/Scjgx6W/sunset.png" alt="" /> <br />
                                <small>Summer Rest</small>
                            </div>
                        </Col>
                        {/* column 5 */}
                        <Col>
                            <div className="text-center">
                                <img style={{ width: "50px" }} src="https://i.ibb.co/C8kbZGP/boat.png" alt="" /> <br />
                                <small>Ship Cruises</small>
                            </div>
                        </Col>
                        {/* column 6 */}
                        <Col>
                            <div className="text-center">
                                <img style={{ width: "50px" }} src="https://i.ibb.co/XJ9R4vD/mountain.png" alt="" /> <br />
                                <small>Mountains Tours</small>
                            </div>
                        </Col>
                    </Row>
                </Fade>
            </div>
        </div>
    );
};
export default Offers;