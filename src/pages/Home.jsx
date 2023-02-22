import React from "react";
import LayoutComponents from "../components/LayoutComponents";
import { Breadcrumb, Card, Col, Row  } from 'antd';
import Carousel from 'better-react-carousel'
import { ShoppingCartOutlined, LikeOutlined } from "@ant-design/icons";
// const contentStyle = {
//   height: '300px',
//   color: '#fff',
//   lineHeight: '300px',
//   textAlign: 'center',
//   background: '#364d79',
// };
const { Meta } = Card;
const Home = () => {
  return (
    <LayoutComponents>
      <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img alt="" width="100%" src="https://media.wired.com/photos/63728604691ed08cc4b98976/master/pass/Nike-Swoosh-News-Gear.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img alt="" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbumJeH4DfMRrdspCMM96lc9e-jeR3xmUrvUdRgi4JEql1pfRlMJL3HN6uC8Cyoo68qI&usqp=CAU" />
      </Carousel.Item>
      <Carousel.Item>
        <img alt="" width="100%" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F06%2Fnike-air-force-1-low-boricua-puerto-rican-day-dx6504-900-release-info-001.jpg?q=75&w=800&cbr=1&fit=max" />
      </Carousel.Item>
      <Carousel.Item>
        <img alt="" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4HyVgNpz-zVkzMk2Xl0R-vUtD-Qbv793a6X9Lo9KQDIVdI5RB9vyhLmXToALQ9eKgJw&usqp=CAU" />
      </Carousel.Item>
      <Carousel.Item>
        <img alt="" width="100%" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F10%2Fnike-signal-d-ms-x-pure-platinum-ocean-cube-cool-gray-at5303-003-004-release-000.jpg?w=960&cbr=1&q=90&fit=max" />
      </Carousel.Item>
      <Carousel.Item>
        <img alt="" width="100%" src="https://sneakernews.com/wp-content/uploads/2019/09/nike-air-max-270-react-CT2536-300-1.jpg" />
      </Carousel.Item>
    </Carousel>
  <hr />
  <div style={{backgroundColor: "darkgray"}}>
  <br />
  
  <h3 style={{fontFamily: "Hanalei Fill", fontSize: "4em"}}>С уважением к природе и заботой о вас</h3>
  
  <br />
  </div>
  <hr />

  <h3>Новинки и акции</h3>
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
    <Meta title="Yezzy 350z" description="89$" /><ShoppingCartOutlined style={{width: '3em'}}/><LikeOutlined style={{width: '3em'}}/>
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
    <Meta title="Air Force 1" description="115$" /><ShoppingCartOutlined style={{width: '3em'}}/><LikeOutlined style={{width: '3em'}}/>
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
    <Meta title="Nike && Balenciaga" description="280$" /><ShoppingCartOutlined style={{width: '3em'}}/><LikeOutlined style={{width: '3em'}}/>
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
    <Meta title="Nike Zoom" description="98$" /><ShoppingCartOutlined style={{width: '3em'}}/><LikeOutlined style={{width: '3em'}}/>
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
    <Meta title="Nike Air Max 720" description="127$" /><ShoppingCartOutlined style={{width: '3em'}}/><LikeOutlined style={{width: '3em'}}/>
  </Card>
  </Col>
  </Row>
    </LayoutComponents>
  );
};

export default Home;
