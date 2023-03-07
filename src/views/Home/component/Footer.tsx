import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias vero commodi neque! Quae fugiat consequuntur quod,
              maxime impedit illo ipsum fugit, exercitationem repudiandae
              voluptatum omnis natus delectus, enim distinctio. Velit.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <Link to={"/"} className="text-white">
                  Link 1
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-white">
                  Link 2
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-white">
                  Link 3
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-white">
                  Link 4
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Links</h5>

            <ul className="list-unstyled">
              <li>
                <Link to={"/"} className="text-white">
                  Link 1
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-white">
                  Link 2
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-white">
                  Link 3
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-white">
                  Link 4
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright: Yecta
      </div>
    </footer>
  );
};
export default Footer;
