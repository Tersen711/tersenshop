import React from "react";
import { Divider, Breadcrumb } from "antd";
import list from "../product";
import Cards from "./Card";
import "./Cart.css";

const Categories = ({ handleAddProduct }) => {
  return (
    <>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Categories</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <h1 style={{ fontFamily: "Hanalei Fill", fontSize: "5em" }}>Catalog</h1>
      <Divider />
      <section>
        {list.map((item) => (
          <Cards
            key={item.id}
            item={item}
            handleAddProduct={handleAddProduct}
          />
        ))}
      </section>
      <Divider />
    </>
  );
};

export default Categories;
