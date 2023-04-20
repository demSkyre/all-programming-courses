import React from "react";

const OutputDetails = ({ outputDetails }) => {
  return (
    <div className="metrics-container mt-4 flex flex-col space-y-3">
      <p className="text-sm text-orange-400">
        Estatus:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-[#1e293b] text-white">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm text-orange-400">
        Memoria:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-[#1e293b] text-white">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm text-orange-400">
        Tiempo:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-[#1e293b] text-white">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;