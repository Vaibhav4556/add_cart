import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value + 1);
    console.log(value);
  };

  return (
    <div style={{ margin: "30px" }}>
      <Navbar value={value} /> <Header />
      <div
        style={{
          gap: "20px",
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          marginLeft: "30px",
          marginRight: "30px",
          marginBottom: "30px",
          flex: "wrap",
          alignItems: "center",
        }}
      >
        <Card
          item="Fancy Product"
          price="$40.00-$80.00"
          add="View Option"
          handleClick={handleClick}
        />{" "}
        <Card
          star="⭐⭐⭐⭐"
          sale="sale"
          item="Special Item"
          price="$35.00"
          add="Add to Cart"
          handleClick={handleClick}
        />{" "}
        <Card
          item="Popular Item"
          price="$99"
          add="Add to Cart"
          handleClick={handleClick}
        />{" "}
        <Card
          item="Fancy Product"
          price="$77"
          add="Add to Cart"
          star="⭐⭐⭐⭐⭐"
          handleClick={handleClick}
        />{" "}
        <Card
          star="⭐⭐⭐⭐"
          sale="sale"
          item="Special Item"
          price="$44.00"
          add="Add to Cart"
          handleClick={handleClick}
        />{" "}
      </div>{" "}
    </div>
  );
};

export default App;
