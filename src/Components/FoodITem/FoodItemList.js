import React from "react";
import { Link } from "react-router-dom";
import "./FoodItemList.scss";

function FoodItemList() {
  return (
    <div className="foodList">
      <div className="foodList__inner">
        <ul className="foodList__list">
          <li className="foodList__item delivery">
            <div className="foodList__item-box">
              <i className="bx bxs-truck"></i>
              <button
                className="foodList__item-text"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdropdeliver"
              >
                Delivery & return
              </button>
            </div>
            <div className="foodList__item-box">
              <i className="bx bx-help-circle"></i>
              <button className="foodList__item-text">Ask & Question</button>
            </div>
          </li>
          <li className="foodList__item jul">
            <i className="bx bx-exit"></i>
            <p className="foodList__item-text">
              {" "}
              Estimated Delivery: <span> Jul 09 – Jul 13</span>
            </p>
          </li>
          <li className="foodList__item">
            <i className="bx bx-smile"></i>
            <p className="foodList__item-text">
              53 people <span> are viewing this right now</span>
            </p>
          </li>
        </ul>
        <ul className="foodList__list-list">
          <li className="foodList__list-social share">
            <i className="bx bx-share-alt"></i>
            <p>Share</p>
          </li>
          <li className="foodList__list-social">
            <i className="bx bxl-twitter"></i>
          </li>
          <li className="foodList__list-social">
            <i className="bx bxl-facebook"></i>
          </li>
          <li className="foodList__list-social">
            <i className="bx bxl-telegram"></i>
          </li>
          <li className="foodList__list-social">
            <i className="bx bxl-vk"></i>
          </li>
          <li className="foodList__list-social">
            <i className="bx bx-envelope"></i>
          </li>
        </ul>
        <div className="foodList__safe-box">
          <p className="foodList__safe-text">Guaranteed Safe Checkout</p>
          <img className="foodList__img" src={""} alt="img" />
        </div>
      </div>

      {/* <div class="modal fade modal-dialog-scrollable" id="staticBackdropdeliver" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
       
                </div>
            </div>
            </div> */}
    </div>
  );
}

export default FoodItemList;
