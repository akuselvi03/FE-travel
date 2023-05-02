import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import "./MyOrder.css";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  console.log(myOrders);

  useEffect(() => {
    if (user.displayName) {
      axios
        .get(`https://backend-dot-tcc-088.et.r.appspot.com/userOrder/${user.uid}`)
        .then((res) => {
          setMyOrders(res.data);
        })
        .catch((err) => console.log(err.message));
    }
  }, [user]);

  const handleCancel = (id) => {
    swal({
      title: "Are you sure?",
      text: "Cancel This service form you Order list",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://backend-dot-tcc-088.et.r.appspot.com/userOrder/${id}/${user.uid}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              const remaining = myOrders.filter((order) => order._id !== id);
              // set localy remainit data
              setMyOrders(remaining);
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err.message));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <Container className="my-5 pt-5">
      <Row>
        <Col sm="12" md="12" className="text-start">
          <div className="serviceOne mt-1 mt-md-5 pt-1 pt-md-4">
            <h6 className="fw-bold">My Orders</h6>
            <h2 className="display-6 pb-3" style={{ borderBottom: "3px solid #ff5227" }}>
              <span className="fw-bold">POPULAR </span>
              DESTINATIONS AND HOTEL
            </h2>
          </div>
        </Col>
      </Row>

      <Row className="my-5 g-4 text-start">
        {myOrders.length > 0 ? (
          myOrders.map((order) => {
            const { _id, name, location, date, img, status } = order;
            return (
              <Col key={_id}>
                <Card className="text-start mx-auto" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "200px" }}
                    className="img-fluid"
                    src={img}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    <p>
                      <small>{location}</small>
                    </p>
                    {/* rating added  */}
                    <p className="my-3">
                      <strong>Travel Date : {date} </strong>
                    </p>
                    <h6>
                      {/* order status  */}
                      <strong>Status : </strong>
                      {status === "approved" ? (
                        <span className="approved">Approved</span>
                      ) : (
                        <span className="pending">Pending...</span>
                      )}
                    </h6>
                  </Card.Body>
                  <Card.Footer>
                    <button onClick={() => handleCancel(_id)} className="_book-btn">
                      Cancel Order
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })
        ) : (
          <Col sm="2" lg="1" className="mx-auto">
            <Spinner animation="border" variant="secondary" />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MyOrders;
