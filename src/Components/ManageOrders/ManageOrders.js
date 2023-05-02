import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import swal from "sweetalert";
import TableView from "./TableView";
import useAuth from "../../hooks/useAuth";

const ManageOrders = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-dot-tcc-088.et.r.appspot.com/allOrder")
      .then((res) => {
        setAllOrder(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleDelete = (id, uid) => {
    // sid == serviceId and uid == userId
    swal({
      title: "Are you sure?",
      text: "Cancel This service form you Order list",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://backend-dot-tcc-088.et.r.appspot.com/userOrder/${id}/${uid}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              const remaining = allOrder.filter(
                (order) => !(order._id === id && order.userId === uid)
              );

              setAllOrder(remaining);
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

  const handleApproved = (id, uid) => {
    // sid == serviceId and uid == userId
    axios
      .put(`https://backend-dot-tcc-088.et.r.appspot.com/userOrder/${id}/${uid}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          const findItem = allOrder.find((order) => order._id === id && order.userId === uid);
          if (findItem) {
            findItem.status = "approved";
            const remaining = allOrder.filter(
              (order) => !(order._id === id && order.userId === uid)
            );

            setAllOrder([findItem, ...remaining]);
          }
        } else {
          swal({
            title: "This Service Already Approved !",
            icon: "warning",
          });
        }
      })
      .catch((err) => console.log(err.massage));
  };
  return (
    <Container className="my-5" style={{ minHeight: "100vh" }}>
      <Row>
        <Col sm="12" className="text-start">
          <div className="serviceOne mt-1 mt-md-5 pt-1 pt-md-4">
            <h6 className="fw-bold">Travelo Travel</h6>
            <h2 className="display-6 pb-3" style={{ borderBottom: "3px solid #ff5227" }}>
              <span className="fw-bold">MANAGE </span>
              All Booking Info
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        {allOrder.length > 0 ? (
          <TableView
            allOrder={allOrder}
            handleApproved={handleApproved}
            handleDelete={handleDelete}
          ></TableView>
        ) : (
          <Col sm="2" lg="1" className="mx-auto">
            <Spinner animation="border" variant="secondary" />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ManageOrders;
