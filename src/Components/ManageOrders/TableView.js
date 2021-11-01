import React from "react";
import { Table } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";

/* table view for tablet and  large device  */
const TableView = ({ allOrder, handleApproved, handleDelete }) => {
  return (
    <Table striped hover className="table">
      <thead>
        <tr>
          <th>User Name</th>
          <th>service Name</th>
          <th>Order Date</th>
          <th>status</th>
          <th>Action</th>
        </tr>
      </thead>
      {allOrder.map((order) => {
        const { name, service, registerDate, status, _id, userId } =
          order;
        return (
          <tbody key={_id}>
            <tr style={{ borderWidth: "1px" }}>
              <td>{name}</td>
              <td>{service}</td>
              <td>{registerDate}</td>
              <td>
                {status === "approved" ? (
                  <span className="approved">Approved</span>
                ) : (
                  <span className="pending">Pending...</span>
                )}
              </td>
              <td>
                {/* action button  */}
                <button
                  onClick={() => handleApproved(_id, userId)}
                  className="_book-btn me-4"
                >Approved</button>
                <RiDeleteBin6Line
                  onClick={() => handleDelete(_id, userId)}
                  className="admin-delete-btn fs-3"
                />
              </td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
};

export default TableView;
