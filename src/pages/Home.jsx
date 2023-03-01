import React from "react";
import { Breadcrumb, Card, Col, Row, Divider } from "antd";
import Carousel from "better-react-carousel";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import './Home.css'
// import Link from "antd/es/typography/Link";
// const contentStyle = {
//   height: '300px',
//   color: '#fff',
//   lineHeight: '300px',
//   textAlign: 'center',
//   background: '#364d79',
// };
const { Meta } = Card;
const Home = () => {

  // const { loading, error} = useFetch("http://localhost:1337/product")

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error :(</p>
  
  return (
    
    <>
      
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <Carousel cols={2} rows={1} gap={10} loop>
        <Carousel.Item>
          <img
            alt=""
            width="100%"
            src="https://media.wired.com/photos/63728604691ed08cc4b98976/master/pass/Nike-Swoosh-News-Gear.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt=""
            width="100%"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbumJeH4DfMRrdspCMM96lc9e-jeR3xmUrvUdRgi4JEql1pfRlMJL3HN6uC8Cyoo68qI&usqp=CAU"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt=""
            width="100%"
            src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F06%2Fnike-air-force-1-low-boricua-puerto-rican-day-dx6504-900-release-info-001.jpg?q=75&w=800&cbr=1&fit=max"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt=""
            width="100%"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4HyVgNpz-zVkzMk2Xl0R-vUtD-Qbv793a6X9Lo9KQDIVdI5RB9vyhLmXToALQ9eKgJw&usqp=CAU"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt=""
            width="100%"
            src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F10%2Fnike-signal-d-ms-x-pure-platinum-ocean-cube-cool-gray-at5303-003-004-release-000.jpg?w=960&cbr=1&q=90&fit=max"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt=""
            width="100%"
            src="https://sneakernews.com/wp-content/uploads/2019/09/nike-air-max-270-react-CT2536-300-1.jpg"
          />
        </Carousel.Item>
      </Carousel>
      <Divider />

      <br />
      
      <h3
        style={{
          fontFamily: "Hanalei Fill",
          fontSize: "4em",
          color: "#17191B",
        }}
      >
        С уважением к природе и заботой о вас
      </h3>

      <br />

      <Divider />

      <h3 style={{ fontFamily: "Hanalei Fill", color: "red", fontSize: "3em" }}>
        Новинки и акции
      </h3>
      
      <Divider />

      <Row gutter={16}>
        <Col span={8}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://media.wired.com/photos/63728604691ed08cc4b98976/master/pass/Nike-Swoosh-News-Gear.jpg"
              />
            }
          >
            <Meta title="NewNike" description="500$" />
            <ShoppingCartOutlined style={{ width: "3em" }} />
            <Link to="/cart"><button style={{
              background: "#ef4e42",
              color: "#fff",
              fontSize: 12,
              textTransform: "uppercase",
              paddingTop: 8,
              paddingRight: 16,
              paddingBottom: 8,
              paddingLeft: 16,
            }}>Quick add</button></Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbumJeH4DfMRrdspCMM96lc9e-jeR3xmUrvUdRgi4JEql1pfRlMJL3HN6uC8Cyoo68qI&usqp=CAU"
              />
            }
          >
            <Meta title="Yezzy 350z" description="89$" />
            <ShoppingCartOutlined style={{ width: "3em" }} />
            <Link to="/cart"><button style={{
              background: "#ef4e42",
              color: "#fff",
              fontSize: 12,
              textTransform: "uppercase",
              paddingTop: 8,
              paddingRight: 16,
              paddingBottom: 8,
              paddingLeft: 16,
            }} >Quick add</button></Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F06%2Fnike-air-force-1-low-boricua-puerto-rican-day-dx6504-900-release-info-001.jpg?q=75&w=800&cbr=1&fit=max"
              />
            }
          >
            <Meta title="Air Force 1" description="115$" />
            <ShoppingCartOutlined style={{ width: "3em" }} />
            <Link to="/cart"><button style={{
              background: "#ef4e42",
              color: "#fff",
              fontSize: 12,
              textTransform: "uppercase",
              paddingTop: 8,
              paddingRight: 16,
              paddingBottom: 8,
              paddingLeft: 16,
            }} >Quick add</button></Link>
          </Card>
        </Col>
        <Divider />
        <Col span={8}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4HyVgNpz-zVkzMk2Xl0R-vUtD-Qbv793a6X9Lo9KQDIVdI5RB9vyhLmXToALQ9eKgJw&usqp=CAU"
              />
            }
          >
            <Meta title="Nike && Balenciaga" description="280$" />
            <ShoppingCartOutlined style={{ width: "3em" }} />
            <Link to="/cart"><button style={{
              background: "#ef4e42",
              color: "#fff",
              fontSize: 12,
              textTransform: "uppercase",
              paddingTop: 8,
              paddingRight: 16,
              paddingBottom: 8,
              paddingLeft: 16,
            }} >Quick add</button></Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F10%2Fnike-signal-d-ms-x-pure-platinum-ocean-cube-cool-gray-at5303-003-004-release-000.jpg?w=960&cbr=1&q=90&fit=max"
              />
            }
          >
            <Meta title="Nike Air Zoom" description="98$" />
            <ShoppingCartOutlined style={{ width: "3em" }} />
            <Link to="/cart"><button style={{
              background: "#ef4e42",
              color: "#fff",
              fontSize: 12,
              textTransform: "uppercase",
              paddingTop: 8,
              paddingRight: 16,
              paddingBottom: 8,
              paddingLeft: 16,
            }} >Quick add</button></Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://sneakernews.com/wp-content/uploads/2019/09/nike-air-max-270-react-CT2536-300-1.jpg"
              />
            }
          >
            <Meta title="Nike Air Max 720" description="127$" />
            <ShoppingCartOutlined style={{ width: "3em" }} />
            <Link to="/cart"><button style={{
              background: "#ef4e42",
              color: "#fff",
              fontSize: 12,
              textTransform: "uppercase",
              paddingTop: 8,
              paddingRight: 16,
              paddingBottom: 8,
              paddingLeft: 16,
            }} >Quick add</button></Link>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
