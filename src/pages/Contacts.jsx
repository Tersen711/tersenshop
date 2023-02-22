import React from "react";
import LayoutComponents from "../components/LayoutComponents";
import {PhoneOutlined, InstagramOutlined, EnvironmentOutlined} from "@ant-design/icons"; 
import {Space, QRCode, Row, Breadcrumb  } from 'antd';
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
      <hr />
      <Row gutter={16}>
      <h1 style={{textAlign: "left", fontFamily: "Chilanka", fontSize: "5em"}}>Контакты</h1>  
      <Space
    direction="vertical"
    size="large"
    style={{
      display: 'flex',
    }}
  >
      
      <QRCode style={{marginLeft: "780px"}} value="https://ant.design/" />;
      </Space></Row>
      <Space
    direction="vertical"
    size="large"
    style={{
      display: 'flex',
    }}
  >
      <h5 style={{textAlign: "left", fontFamily: "Hanalei Fill"}}>tersen - интернет-магазин</h5>

      <h5 style={{textAlign: "left", fontFamily: "Hanalei Fill"}}>С заботой и любовью о каждом!</h5>
      <h6 style={{textAlign: "left"}}><PhoneOutlined style={{width: '3em'}}/>+7(775)-684-01-67</h6>
      </Space>
      <h6 style={{textAlign: "left"}}><InstagramOutlined style={{width: '3em'}}/>@ali_tersen</h6>
      <h6 style={{textAlign: "left"}}><EnvironmentOutlined style={{width: '3em'}}/>Astana, KZ</h6>
      <hr />
    </LayoutComponents>
  );
};

export default Contacts;
