import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img.png';
import '../styles/home.css';

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <p className="hero__subtitle">Trending products in {year}</p>
                <h2>Make Your Interior Elegant and Modest Now!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum pariatur dolore, placeat aliquid saepe praesentium
                  blanditiis sed soluta accusantium, nostrum minima 
                  ipsam cum aspernatur commodi aperiam animi labore.
                  At, possimus?
                </p>
                <button className='buy__btn'>SHOP NOW</button>
              </div>
            </Col> 
            
            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt='Hero' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
