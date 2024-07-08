import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img.png';
import '../styles/home.css';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import ProductList from '../components/UI/ProductList';


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
                <motion.button whileTap={{scale:1.3}}
                className='buy__btn'><Link to ='/shop'> SHOP NOW</Link>
                </motion.button>
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
       <section className='trending products'>
          <Container>
            <Row>
              <Col lg='12'className="text-center">
                <h2 className='Section__title'>Trending Products</h2>
              </Col>
              <ProductList></ProductList>
            </Row>
          </Container>
       </section>
    </Helmet>
  );
};

export default Home;
