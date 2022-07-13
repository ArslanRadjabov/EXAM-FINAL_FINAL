import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About";
import Categories from "../Categories/Categories";
import FoodItem from "../FoodITem/FoodItem";
import Footer from "../Footer/Footer";
import Header from "../headerTop/Header";
import MainHeader from "../headerTop/MainHeader";
import Hero from "../hero/Hero";
import MyCart from "../Mycart";
import Navbar from "../navbar/Navbar";
import Partners from "../Partners/Partners";
import Products from "../Products";
import Quickview from "../Quickview";
import Sales from "../Sales/Sales";
// import FoodItem from "../FoodItem";

function Main() {
  return (
    <div>
      <Header />
      <MainHeader />
      <Navbar />
     
      <Routes>
        <Route path="Quickview/:id" element={<FoodItem />} />
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Categories />
              <Products />
              <MyCart />

              <Sales />
              <Partners />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
