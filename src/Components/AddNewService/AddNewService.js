import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const AddNewService = () => {
  const { setIsMenuOpen } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm(); // import from react hook form

  setValue("price", "$"); //set default value

  const onSubmit = (data) => {
    if (!data.img.includes("http")) {
      data.img = "//unsplash.it/300/300";
    }
    axios
      .post("https://backend-dot-tcc-088.et.r.appspot.com/travels", data)
      .then((res) => {
        if (res.data.insertedId) {
          // success message
          swal("Successful!", "New Service Successfully Added !", "success");
        }
        reset();
      })
      .catch((err) => {
        console.log(err.message);
        // error message
        swal("Failed to Add", "Something went wrong, try again", "error");
      });
  };

  return (
    <Container className="my-5" onClick={() => setIsMenuOpen(false)}>
      {/* top herder  */}
      <Row>
        <Col sm="12" className="text-start">
          <div className="serviceOne mt-1 mt-md-5 pt-1 pt-md-4">
            <h6 className="fw-bold">Travesia Travel</h6>
            <h2 className="display-6 pb-3" style={{ borderBottom: "3px solid #ff5227" }}>
              <span className="fw-bold">Add A </span>
              NEW SERVICE
            </h2>
          </div>
        </Col>
      </Row>
      {/* service adding form  */}
      <Row className="my-5 text-start">
        <Col xm="12" md="7" lg="6" className="mx-auto">
          <div className="reg-form bg-info">
            <h4 style={{ fontSize: "26px" }} className="header-text text-center mb-3">
              Add a Service
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="">Service Name</label>
              <br />
              <input {...register("name")} placeholder="Service Name" /> <br />
              <label htmlFor="">Location</label>
              <br />
              <input {...register("location", { required: true })} placeholder="Location" />
              <br />
              <label htmlFor="">Price</label>
              <br />
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="Service Price"
              />
              <br />
              <label htmlFor="">Description</label>
              <br />
              <textarea
                type="text"
                rows="3"
                className="w-100 p-2"
                {...register("title", { required: true })}
                placeholder="Service Description"
              />
              <br />
              <label htmlFor="">Service Image Url</label> <br />
              <input {...register("img")} placeholder="service image Url" />
              <br />
              <br />
              <button type="submit" className="rag-submit w-100">
                Add Service
              </button>
              {errors.exampleRequired && <span>This field is required</span>}
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNewService;
