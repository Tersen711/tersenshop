import React from "react";
import LayoutComponents from "../components/LayoutComponents";
import { Card, Col, Row, Breadcrumb  } from 'antd';
import { ShoppingCartOutlined, LikeOutlined } from "@ant-design/icons";

const { Meta } = Card;
const Categories = () => {
  return (
    <LayoutComponents>
      <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Categories</Breadcrumb.Item>
          </Breadcrumb>
      <h1 style={{fontFamily: "Hanalei Fill", fontSize: "5em"}}>Catalog</h1>
      <Row gutter={16}>
  <Col span={8}>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://media.wired.com/photos/63728604691ed08cc4b98976/master/pass/Nike-Swoosh-News-Gear.jpg" />}
  >
    <Meta title="Europe Street beat" description="500$" /><ShoppingCartOutlined style={{width: '3em'}}/><LikeOutlined style={{width: '3em'}}/>
  </Card>
  </Col>
    <Col span={8}>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbumJeH4DfMRrdspCMM96lc9e-jeR3xmUrvUdRgi4JEql1pfRlMJL3HN6uC8Cyoo68qI&usqp=CAU" />}
  >
    <Meta title="Europe Street beat" description="89$" /><ShoppingCartOutlined style={{width: '3em'}}/><LikeOutlined style={{width: '3em'}}/>
  </Card>
  </Col>
    <Col span={8}>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F06%2Fnike-air-force-1-low-boricua-puerto-rican-day-dx6504-900-release-info-001.jpg?q=75&w=800&cbr=1&fit=max" />}
  >
    <Meta title="Europe Street beat" description="115$" /><ShoppingCartOutlined style={{width: '3em'}}/><LikeOutlined style={{width: '3em'}}/>
  </Card>
  </Col>
    <Col span={8}>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4HyVgNpz-zVkzMk2Xl0R-vUtD-Qbv793a6X9Lo9KQDIVdI5RB9vyhLmXToALQ9eKgJw&usqp=CAU" />}
  >
    <Meta title="Europe Street beat" description="280$" /><ShoppingCartOutlined style={{width: '3em'}}/><LikeOutlined style={{width: '3em'}}/>
  </Card>
  </Col>
    <Col span={8}>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F10%2Fnike-signal-d-ms-x-pure-platinum-ocean-cube-cool-gray-at5303-003-004-release-000.jpg?w=960&cbr=1&q=90&fit=max" />}
  >
    <Meta title="Europe Street beat" description="98$" /><ShoppingCartOutlined style={{width: '3em'}}/><LikeOutlined style={{width: '3em'}}/>
  </Card>
  </Col>
  <Col span={8}>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://sneakernews.com/wp-content/uploads/2019/09/nike-air-max-270-react-CT2536-300-1.jpg" />}
  >
    <Meta title="Europe Street beat" description="127$" /><ShoppingCartOutlined style={{width: '3em'}}/><LikeOutlined style={{width: '3em'}}/>
  </Card>
  </Col>
  </Row>
    </LayoutComponents>
  );
};

export default Categories;
