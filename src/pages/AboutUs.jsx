import React from "react";
import LayoutComponents from "../components/LayoutComponents";
import { Breadcrumb, Space, Divider} from "antd";
import { SafetyCertificateOutlined, ScheduleOutlined } from "@ant-design/icons";

const AboutUs = () => {
  return (
    <LayoutComponents>
      <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>About Us</Breadcrumb.Item>
          </Breadcrumb>
          <Divider />
          <div style={{
        marginTop: 13,
        marginRight: 26,
        marginBottom: 13,
        marginLeft: 26
              }}>
      <Space
    direction="vertical"
    size="large"
    style={{
      display: 'flex',
    }}
  >
      <h1 style={{textAlign: "left" ,fontFamily: "Hanalei Fill", fontSize: "4em"}}>Интернет-магазин созданный с заботой о вас</h1>
      <Divider />
      <h3 style={{textAlign: "left" ,fontFamily: "Hanalei Fill"}}><SafetyCertificateOutlined style={{width: '3em'}}/>Признанный онлайн-магазин оригинальной продукции, который уже более 4х лет работает на территории Казахстана.
<br /><ScheduleOutlined style={{width: '3em'}}/>Мы ориентируемся на европейские стандарты для эко продукции. Забота о вас и польза наших продуктов это наш приоритет</h3>

</Space>
</div>
<Divider />

    </LayoutComponents>
  );
};

export default AboutUs;
