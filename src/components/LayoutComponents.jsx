import {
  LaptopOutlined,
  NotificationOutlined,
  ShopOutlined,
  InfoCircleOutlined,
  CommentOutlined,
  CustomerServiceOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Space, FloatButton } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from ".././images/logo.png";

function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children,
  };
}
const { Header, Content, Sider, Footer } = Layout;
const items2 = [
  getItem(<Link to="/">Main</Link>, "1", <LaptopOutlined />),
  getItem(<Link to="/contacts">Contacts</Link>, "2", <NotificationOutlined />),
  getItem(<Link to="/categories">Categories</Link>, "3", <ShopOutlined />),
  getItem(<Link to="/about">About US</Link>, "4", <InfoCircleOutlined />),
  getItem(<Link to="/cart">Cart</Link>, "4", <ShoppingCartOutlined />),
];
const LayoutComponents = (props) => {
  const { children } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header" style={{ display: "flex" }}>
        <Space size={"large"}>
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt={"Logo"} width={"70px"} height={"50px"} />
            </Link>
          </div>
          <div className="register">
            <Link to="/register" className="btn btn-light text-black">
              Sign Up
            </Link>
          </div>
          <div className="login">
            <Link to="/login" className="btn btn-primary">
              Sign In
            </Link>
          </div>
          <div className="Cart">
            <span>
              <ShoppingCartOutlined style={{
                cursor: "pointer",
                fontSize: 32,
                color: "white",
                fontWeight: "bold",
                borderRadius: 5,
                position: "relative",

              }}/>
              </span>
          </div>
        </Space>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 600,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{
          right: 40,
          bottom: 30,
        }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
      <Footer style={{ textAlign: "center" }}>
        Online Shop ©2023 Created by Tersen
      </Footer>
      
    </Layout>
  );
};
export default LayoutComponents;
