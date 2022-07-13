import React from "react";
import "./haeder.scss";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "./modal.scss";

import logo from "../img/logo.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__nesessary d-flex gap-2 ">
          <IoNewspaperOutline />
          <div> Add anything here or just remove it...</div>
        </div>
        <div className="header__langLogin">
          <div className="header__lang d-flex">
            <img
              className="headerimg_flag"
              src="https://cdn.icon-icons.com/icons2/97/PNG/256/united_kingdom_flags_flag_17079.png"
              alt="sr"
            />
            <p> English</p>

            <div className="lang__box slide-top">
              <div className="lang__text">
                <div className="d-flex">
                  <img
                    className="headerimg_flag"
                    src="https://cdn.icon-icons.com/icons2/97/PNG/256/united_kingdom_flags_flag_17079.png"
                    alt="sr"
                  />
                  <p> English</p>
                </div>
                <div className="d-flex mt-2">
                  <img
                    className="headerimg_flag"
                    src="https://cdn.icon-icons.com/icons2/97/PNG/256/united_kingdom_flags_flag_17079.png"
                    alt="sr"
                  />
                  <p> English</p>
                </div>
                <p className="mt-2">insert WPL</p>
              </div>
            </div>
          </div>
          <div className="dollar">
            US dollar
            <div className="dollar__inner">
              <ul className="dollar__inner-text">
                <li>Euro(EUR)</li>
                <li>Indian Rupee(INR)</li>
                <li>Pound(GBR)</li>
              </ul>
            </div>
          </div>
          <a
            className="header_login primary"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
      
          >
            Login / Register
          </a>
        </div>
      </div>
      <hr />

      {/* -----------------------------modal----------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <img className="imgLogoofModal" src={logo} alt="logo" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4>Great have you back!</h4>
              <form className="modal--inner">
                <div className="text--input mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username or email *
                  </label>
                  <input
                    type="email"
                    className="form-control "
                    required
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="text--input mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password *
                  </label>
                  <input
                    type="password"
                    className="form-control "
                    required
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="btn submit-btn">
                  Sign in to your accaunt
                </button>
              </form>
              <div className="login-hr d-flex">
                <div className="hr-line"></div>
                <div>Or Login with</div>
                <div className="hr-line"></div>
              </div>
              <div className="socials d-flex">
                <div className="social__item">
                  <BsFacebook />
                  Facebook
                </div>
                <div className="social__item2">
                  <FcGoogle />
                  Google
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
