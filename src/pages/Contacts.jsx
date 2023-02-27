import React from "react";
import LayoutComponents from "../components/LayoutComponents";
import {
  PhoneOutlined,
  InstagramOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { QRCode, Row, Breadcrumb, Divider } from "antd";
const Contacts = () => {
  return (
    <LayoutComponents>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Contacts</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      
      <Row gutter={16}>
        <h1
          style={{ 
            textAlign: "left", 
            fontFamily: "Chilanka", 
            fontSize: "5em",
            marginTop: 13,
            marginRight: 26,
            marginBottom: 13,
            marginLeft: 26
          }}
        >
          Контакты
        </h1>
          <QRCode style={{ marginLeft: "700px" }} value="https://ant.design/" />
      </Row>
      <div style={{
        marginTop: 13,
        marginRight: 26,
        marginBottom: 13,
        marginLeft: 26
              }}>
        <h5 style={{ textTransform: "uppercase", textAlign: "left", fontFamily: "Hanalei Fill" }}>
          Tersen - интернет-магазин кроссовок
        </h5>

        <h5 style={{ textTransform: "uppercase", textAlign: "left", fontFamily: "Hanalei Fill" }}>
          С заботой и любовью о каждом!
        </h5>
        <Divider />
        <h6 style={{ textAlign: "left" }}>
          <PhoneOutlined style={{ width: "3em" }} />
          +7(775)-684-01-67
        </h6>

      <h6 style={{ textAlign: "left" }}>
        <InstagramOutlined style={{ width: "3em" }} />
        @ali_tersen
      </h6>
      <h6 style={{ textAlign: "left" }}>
        <EnvironmentOutlined style={{ width: "3em" }} />
        Astana, KZ
      </h6>
      </div>
      <Divider />
    </LayoutComponents>
  );
};

export default Contacts;
