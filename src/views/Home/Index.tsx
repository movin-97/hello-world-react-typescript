import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import LoadingSkeleton from "./component/LoadingSkeleton";
import Footer from "./component/Footer";
import MainLayout from "./component/MainLayout";
import MainLayoutSkeleton from "./component/MainLayoutSkeletion";
import FooterSkeleton from "./component/FooterSkeleton";

const Home:React.FC = () => {
  const [isLooading, setIsLooding] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLooding(true);
    }, 3000);
  });
  return (
    <SkeletonTheme baseColor="#bfbebe" highlightColor="#ffcaca">
      <div>
        {isLooading ? (
          <Header />
        ) : (
          <LoadingSkeleton>
            <div className="header">
              <div className="container">
                <div className="row  header justify-content-evenly align-items-center">
                  <div className="col-4 fw-bolder text-white">
                    <Skeleton width={100} />
                  </div>
                  <div className="col-6 d-flex justify-content-evenly p-3 text-white">
                    <Skeleton width={300} />
                    <Skeleton width={300} />
                  </div>
                </div>
              </div>
            </div>
          </LoadingSkeleton>
        )}
      </div>
      <div className="">
        {isLooading ? (
          <MainLayout />
        ) : (
          <LoadingSkeleton>
            <MainLayoutSkeleton />
          </LoadingSkeleton>
        )}
      </div>
      <div className="">
        {isLooading ? (
          <Footer />
        ) : (
          <LoadingSkeleton>
            <FooterSkeleton />
          </LoadingSkeleton>
        )}
      </div>
    </SkeletonTheme>
  );
};

export default Home;
