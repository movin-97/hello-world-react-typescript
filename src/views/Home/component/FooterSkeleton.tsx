import React from "react";
import Skeleton from "react-loading-skeleton";

const FooterSkeltion = () => {
  return (
    <>
      <footer className="bg-dark text-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <Skeleton circle width={50} height={50} />
              </h5>

              <Skeleton />
              <Skeleton width={400} />
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <Skeleton width={200} />
              </h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Skeleton width={100} />
                </li>
                <li>
                  <Skeleton width={150} />
                </li>
                <li>
                  <Skeleton width={200} />
                </li>
                <li>
                  <Skeleton width={150} />
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">
                <Skeleton width={200} />
              </h5>

              <ul className="list-unstyled">
                <li>
                  <Skeleton width={100} />
                </li>
                <li>
                  <Skeleton width={150} />
                </li>
                <li>
                  <Skeleton width={200} />
                </li>
                <li>
                  <Skeleton width={150} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <Skeleton width={500} />
        </div>
      </footer>
    </>
  );
};

export default FooterSkeltion;
