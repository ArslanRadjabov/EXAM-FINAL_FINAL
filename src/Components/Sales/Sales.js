import React from "react";
import { Link } from "react-router-dom";
import cherry from "../../Images/cherrys.jpg";
import Object from "../../Object/Object";
function Sales() {
  return (
    <div className="sales">
      <div className="container">
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight1"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Offcanvas right
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight2"
              aria-controls="offcanvasRight"
            >
              Toggle right offcanvas
            </button>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight2"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Offcanvas hello
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">...</div>
        </div>
        <ul className="sales__list">
          <li className="sales__item col-4">
            <h3 className="sales__title">Top Rated</h3>
            <ul className="sales__lists">
              {Object.slice(6, 9).map((item, i) => {
                return (
                  <li className="sales__itms" key={i}>
                    <div className="sales__box">
                      <img
                        className="sales__img"
                        src={item.img[0]}
                        alt="cherry"
                      />
                      <button
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight1"
                        aria-controls="offcanvasRight"
                        className="sales__btn"
                      >
                        <i className="bx bx-expand"></i>
                      </button>
                    </div>
                    <div className="sales__inner">
                      <Link className="sales__name" to="/">
                        {item.name}
                      </Link>
                      <div className="sales__star">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                      <div>
                        <del className="sales__old">
                          ${item.discount_price.toFixed(1)}
                        </del>
                        <span className="sales__new">
                          ${item.to_price.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="sales__item col-4">
            <h3 className="sales__title">Best Selling</h3>
            <ul className="sales__lists">
              {Object.slice(20, 23).map((item, i) => {
                return (
                  <li className="sales__itms" key={i}>
                    <div className="sales__box">
                      <img
                        className="sales__img"
                        src={item.img[0]}
                        alt="cherry"
                      />
                      <button
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight1"
                        aria-controls="offcanvasRight"
                        className="sales__btn"
                      >
                        <i className="bx bx-expand"></i>
                      </button>
                    </div>
                    <div className="sales__inner">
                      <Link className="sales__name" to="/">
                        {item.name}
                      </Link>
                      <div className="sales__star">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                      <div>
                        <del className="sales__old">
                          ${item.discount_price.toFixed(1)}
                        </del>
                        <span className="sales__new">
                          ${item.to_price.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="sales__item col-4">
            <h3 className="sales__title">On Sales</h3>
            <ul className="sales__lists">
              {Object.slice(30, 33).map((item, i) => {
                return (
                  <li className="sales__itms" key={i}>
                    <div className="sales__box">
                      <img
                        className="sales__img"
                        src={item.img[0]}
                        alt="cherry"
                      />
                      <button
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight1"
                        aria-controls="offcanvasRight"
                        className="sales__btn"
                      >
                        <i className="bx bx-expand"></i>
                      </button>
                    </div>
                    <div className="sales__inner">
                      <Link className="sales__name" to="/">
                        {item.name}
                      </Link>
                      <div className="sales__star">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                      <div>
                        <del className="sales__old">
                          ${item.discount_price.toFixed(1)}
                        </del>
                        <span className="sales__new">
                          ${item.to_price.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sales;
