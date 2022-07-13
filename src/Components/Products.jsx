import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Object from "../Object/Object";

export default function Products() {
  let [categoryFilter, setCategoryFilter] = useState("Fruits");
  let filterProducts = (e) => {
    setCategoryFilter(e.currentTarget.id);
  };
  let [objectCount, setObjectCount] = useState(0);

  return (
    <section className="fproducts">
      <div className="container">
        <div className="fproducts__boxs">
          <h2 className="fproducts__title">Featured Products</h2>
          <ul className="fproducts__clist">
            <li className="fproducts__citem">
              <button
                onClick={filterProducts}
                className="fproducts__cbtn"
                id="Fruits"
              >
                <i className="bx bxs-lemon"></i>
                <h3 className="fproducts__cname">Fruits</h3>
              </button>
            </li>
            <li className="fproducts__citem">
              <button
                onClick={filterProducts}
                className="fproducts__cbtn"
                id="Vegetables"
              >
                <i className="bx bxs-lemon"></i>
                <h3 className="fproducts__cname">Vegetables</h3>
              </button>
            </li>
            <li className="fproducts__citem">
              <button
                onClick={filterProducts}
                className="fproducts__cbtn"
                id="Milks & Creams"
              >
                <i className="bx bxs-lemon"></i>
                <h3 className="fproducts__cname">Milk & Cream</h3>
              </button>
            </li>
            <li className="fproducts__citem">
              <button
                onClick={filterProducts}
                className="fproducts__cbtn"
                id="Banana"
              >
                <i className="bx bxs-lemon"></i>
                <h3 className="fproducts__cname">Banana</h3>
              </button>
            </li>
            <li className="fproducts__citem">
              <button
                onClick={filterProducts}
                className="fproducts__cbtn"
                id="SeaFood"
              >
                <i className="bx bxs-lemon"></i>
                <h3 className="fproducts__cname">Sea Food</h3>
              </button>
            </li>
          </ul>
        </div>

        <ul className="fproducts__list">
          {Object.filter((el) => el.category === categoryFilter).map((el) => {
            return (
              <Link
                className="fproducts__link"
                key={el.id}
                to={`Quickview/${el.id}`}
              >
                <li className="fproducts__item">
                  <div className="fproducts__realative">
                    <Splide
                      options={{
                        perPage: 1,
                        arrows: true,
                        pagination: false,
                        drag: "free",
                      }}
                    >
                      {el.img.map((image, i) => {
                        return (
                          <SplideSlide key={i}>
                            <div className="fproducts__imgbox">
                              <img src={image} alt="" />
                            </div>
                          </SplideSlide>
                        );
                      })}
                    </Splide>
                    <button className="fproducts__hbtn">
                      <i className="bx bx-heart"></i>
                    </button>
                    <div className="fproducts__mbox">
                      <button
                        className="fproducts__mbtn"
                        aria-controls="offcanvasRight"
                        data-bs-target="#offcanvasRight2"
                        data-bs-toggle="offcanvas"
                      >
                        <i className="bx bx-shopping-bag"></i>
                      </button>
                      <button
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight1"
                        aria-controls="offcanvasRight"
                        className="fproducts__mbtn"
                      >
                        <i className="bx bx-low-vision"></i>
                      </button>
                      <button className="fproducts__mbtn">
                        <i className="bx bx-refresh"></i>
                      </button>
                    </div>
                  </div>
                  <div className="fproducts__box">
                    <h3 className="fproducts__subtitle">{el.name}</h3>
                    <div className="fproducts__dflex">
                      <div className="fproducts__dflex_price">
                        {el.discount_price !== null ? (
                          <del className="fproducts__price">
                            ${el.discount_price}
                          </del>
                        ) : (
                          ""
                        )}
                        <ins className="fproducts__price">${el.to_price}</ins>
                      </div>
                      <div className="fproducts__kgbox">
                        {el.total.one_kg !== undefined ? (
                          <button
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight1"
                            aria-controls="offcanvasRight"
                            className="fproducts__kgbtn"
                          >
                            1<br /> kg
                          </button>
                        ) : (
                          ""
                        )}

                        {el.total.half_kg !== undefined ? (
                          <button
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight1"
                            aria-controls="offcanvasRight"
                            className="fproducts__kgbtn"
                          >
                            500
                            <br /> gr
                          </button>
                        ) : (
                          ""
                        )}

                        {el.total.half_2_kg !== undefined ? (
                          <button
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight1"
                            aria-controls="offcanvasRight"
                            className="fproducts__kgbtn"
                          >
                            250 <br /> gr
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
