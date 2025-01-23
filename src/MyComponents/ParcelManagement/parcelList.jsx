import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import parcelData from "./ParcelData";
import "./Parcel.css";

const ParcelList = () => {
  const [parcels, setParcels] = useState(parcelData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);

  const parcelsPerPage = 4;

  const filteredParcels = parcels.filter(
    (parcel) =>
      (selectedStatus === "All" || parcel.status === selectedStatus) &&
      parcel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedParcels = filteredParcels.slice(
    currentPage * parcelsPerPage,
    (currentPage + 1) * parcelsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="tables-manage">
    <div className="parcel-container">
      <h1>PARCEL MANAGEMENT</h1>

      <input
        type="text"
        placeholder="Search Parcel..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />

      <div className="filter-buttons">
        {["All", "Pickup", "In Transit", "Delivered"].map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={selectedStatus === status ? "active" : ""}
          >
            {status}
          </button>
        ))}
      </div>

      <table className="parcel-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Parcel Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {displayedParcels.map((parcel) => (
            <tr key={parcel.id}>
              <td>{parcel.id}</td>
              <td>{parcel.name}</td>
              <td className="status-cell">{parcel.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={Math.ceil(filteredParcels.length / parcelsPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
    </div>
  );
};

export default ParcelList;
