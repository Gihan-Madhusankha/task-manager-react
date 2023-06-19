import React from "react";
import h from "../../assets/img/1.avif";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex align-items-center">
            <div>
              <h1 className="text-start mb-5">LOREM lorem</h1>
              <p style={{ textAlign: "justify", fontSize: "18px" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                odit eaque doloremque veritatis deserunt consequuntur corrupti
                soluta molestias sequi accusantium porro sapiente accusamus,
                obcaecati excepturi? Earum amet consectetur molestiae alias.
              </p>
              <ul className="text-start">
                <li className="nav-item">sample one</li>
                <li>sample two</li>
                <li>sample three</li>
                <li>sample four</li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <img style={{ width: "100%" }} src={h} alt="home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
