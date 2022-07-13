import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import obj from "../../Object/Object";
import Inside from "../quickviewInside/Inside";
import "./FoodItem.scss";
import FoodItemList from "./FoodItemList";

function FoodItem() {
  let location = useLocation();

  let [day, setDay] = useState("00");
  let [soat, setSoat] = useState("00");
  let [min, setMin] = useState("00");
  let [secund, setSecund] = useState("00");
  // let [secunds, setSecunds] = useState(0);

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date();
    interval = setInterval(() => {
      const now = new Date().getTime();
      console.log(countDownDate);
      const distance = countDownDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDay(days);
        setSoat(hours);
        setMin(minutes);
        setSecund(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
       clearInterval(interval.current);
    };
  });

  return (
    <div>
      {obj.map((item, i) => {
        if (item.id == location.pathname.split("/").at(-1)) {
          return (
            <li className="violet__item" key={i}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
                key={i}
              >
                {item.img.map((el, j) => (
                  <img
                    key={j}
                    className="violet__item-img"
                    src={el}
                    alt="img"
                  />
                ))}
              </div>
              <div className="violet__item-inner">
                <h3 className="violet__item-name">{item.name}</h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="violet__item-stars">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <p className="violet__item-custom"> (1 customer review)</p>
                </div>
                <div className="violet__item-prices">
                  <del className="violet__item-prev__price">
                    $
                    {item.discount_price === null
                      ? item.to_price
                      : item.discount_price}
                  </del>
                  <ins className="violet__item-next__price">
                    ${item.to_price}
                  </ins>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0 0 15px 0",
                  }}
                >
                  🔥
                  <p className="violet__item-last">
                    {" "}
                    {item.sold} sold in last {item.sold_hours} hours
                  </p>
                </div>
                <p className="violet__item-about">{item.some_about}</p>
                <div
                  className="violet__item-hurry__box"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0 0 10px 0",
                  }}
                >
                  <i className="bx bx-time"></i>
                  <p className="violet__item-hurry">Hurry up! Sale end in:</p>
                </div>

                <ul className="violet__date-list">
                  <li className="violet__date-item">
                    <p className="violet__date-date">{day}</p>
                    <p className="violet__date-text">days</p>
                  </li>
                  <li className="violet__date-item">
                    <p className="violet__date-date">{soat}</p>
                    <p className="violet__date-text">hours</p>
                  </li>
                  <li className="violet__date-item">
                    <p className="violet__date-date">{min}</p>
                    <p className="violet__date-text">mins</p>
                  </li>
                  <li className="violet__date-item">
                    <p className="violet__date-date">{secund}</p>
                    <p className="violet__date-text">secs</p>
                  </li>
                </ul>
                <div className="violet__input-box">
                  <p className="violet__already">
                    Only <span> 40 </span>item(s) left in stock.{" "}
                  </p>
                </div>
                <div className="violet__range"></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    className="violet__input-range"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <input
                      className="violet__input-place"
                      type="text"
                      placeholder="1"
                    />
                    <div className="violet__range-btns">
                      <button className="violet__range-btn">+</button>
                      <button className="violet__range-btn">-</button>
                    </div>
                  </div>
                  <button className="violet__item-btn">Buy now</button>
                  <button className="violet__item-btn">Add to Cart</button>
                </div>
                <FoodItemList />
              </div>
            </li>
          );
        }
      })}
          <Inside/>
    </div>
    
  );
}

export default FoodItem;
