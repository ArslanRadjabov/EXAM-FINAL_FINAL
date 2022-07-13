import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Inside from "./quickviewInside/Inside";

export default function Quickview() {
  return (
    <>
      <section
        className="offcanvas offcanvas-end quickview"
        tabIndex="-1"
        id="offcanvasRight1"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="quickview__bigbox">
          
          <button
            type="button"
            className="quickview__xbtn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="bx bx-chevron-right"></i>
          </button>

          <div className="quickview__imgbox">
            <div className="quickview__imgboxs">
              <img src="https://picsum.photos/id/48/275/303" alt="" />
            </div>
            <div className="quickview__imgboxs">
              <img src="https://picsum.photos/id/49/275/303" alt="" />
            </div>
          </div>
          <div className="quickview__box">
            <Link className="quickview__link" to="/">
              <h2 className="quickview__title">Orange Cauliflower</h2>
            </Link>
            <div className="d-flex">
              <i className="bx bxs-star quickview__istar"></i>
              <i className="bx bxs-star quickview__istar"></i>
              <i className="bx bxs-star quickview__istar"></i>
              <i className="bx bxs-star quickview__istar"></i>
              <i className="bx bxs-star quickview__istar"></i>
            </div>
            <p className="quickview__price">$5.00 - $12.00</p>
            <p className="quickview__desc">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s.
            </p>

            <p className="quickview__kg">WEIGHT: 1KG</p>
            <div className="quickview__kgbox">
              <button className="quickview__kgbtn">
                1 <br /> kg
              </button>
              <button className="quickview__kgbtn">
                500
                <br />g
              </button>
              <button className="quickview__kgbtn">
                250
                <br />g
              </button>
            </div>

            <p className="quickview__kgprice">$12.00</p>

            <p className="quickview__stock">99 in stock</p>

            <div className="quickview__inputbox">
              <div className="d-flex">
                <input
                  className="quickview__input"
                  type="number"
                  defaultValue="1"
                />
                <div className="d-flex flex-column">
                  <button className="quickview__plus">+</button>
                  <button className="quickview__plus">-</button>
                </div>
              </div>
              <button
                className="quickview__addbtn"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight2"
                aria-controls="offcanvasRight"
              >
                Add to cart
              </button>
              <button className="quickview__addbtn">Buy now</button>
            </div>

            <p className="quickview__tag">
              <strong>SKU:</strong>OGN_EW9G9-03
            </p>
            <p className="quickview__tag">
              <strong>Categories:</strong>{" "}
              <Link to="/" className="quickview__tag-link">
                {" "}
                Nut Gifts
              </Link>
              ,{" "}
              <Link to="/" className="quickview__tag-link">
                {" "}
                Root Vegetables
              </Link>
            </p>
            <p className="quickview__tag">
              <strong>Tags:</strong>
              <Link to="/" className="quickview__tag-link">
                {" "}
                Fruits
              </Link>
              ,{" "}
              <Link to="/" className="quickview__tag-link">
                Organics
              </Link>
              ,{" "}
              <Link to="/" className="quickview__tag-link">
                Vegetables
              </Link>
            </p>

            <div className="quickview__sharebox">
              <i class="bx bx-share-alt quickview__ishare"></i>
              Share
              <Link className="quickview__share-link" to="/" target="_blank">
                <i class="bx bxl-twitter"></i>{" "}
              </Link>
              <Link className="quickview__share-link" to="/" target="_blank">
                <i class="bx bxl-facebook"></i>{" "}
              </Link>
              <Link className="quickview__share-link" to="/" target="_blank">
                <i class="bx bxl-telegram"></i>{" "}
              </Link>
              <Link className="quickview__share-link" to="/" target="_blank">
                <i class="bx bxl-vk"></i>{" "}
              </Link>
              <Link className="quickview__share-link" to="/" target="_blank">
                <i class="bx bx-envelope"></i>
              </Link>
            </div>
          </div>
          <h2>hello www</h2>
        </div>
      </section>
    </>
  );
}
