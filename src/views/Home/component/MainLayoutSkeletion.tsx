import React from "react";
import Skeleton from "react-loading-skeleton";

const MainLayoutSkeletion = () => {
  return (
    <>
      <div className="container-fluid p-5 text-center">
        <Skeleton width={100} />
        <Skeleton width={500} />
      </div>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-sm-4">
            <Skeleton width={50} height={50} circle />
            <Skeleton width={400} />
            <Skeleton width={300} />
            <Skeleton width={200} />
          </div>
          <div className="col-sm-4">
            <Skeleton width={50} height={50} circle />
            <Skeleton width={400} />
            <Skeleton width={300} />
            <Skeleton width={200} />
          </div>
          <div className="col-sm-4">
            <Skeleton width={50} height={50} circle />
            <Skeleton width={400} />
            <Skeleton width={300} />
            <Skeleton width={200} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="row">
            <div className="col-sm-4">
              <Skeleton width={50} height={50} circle />
              <Skeleton width={400} />
              <Skeleton width={300} />
              <Skeleton width={200} />
            </div>
            <div className="col-sm-4">
              <Skeleton width={50} height={50} circle />
              <Skeleton width={400} />
              <Skeleton width={300} />
              <Skeleton width={200} />
            </div>
            <div className="col-sm-4">
              <Skeleton width={50} height={50} circle />
              <Skeleton width={400} />
              <Skeleton width={300} />
              <Skeleton width={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayoutSkeletion;
