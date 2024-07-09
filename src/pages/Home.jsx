import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductList from '../components/UI/ProductList';
import products from '../assets/data/products'; 
import counterImg from '../assets/images/counter-timer-img.png';

const Home = () => {
  
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestsalesProducts, setBestsalesProducts] = useState([]); 
  const year = new Date().getFullYear();
  
  useEffect(() => {
    const filteredTrendingProducts = products.filter(item => item.category === 'chair');
    const filteredBestSalesProducts = products.filter(item => item.category === 'sofa');
    
    setTrendingProducts(filteredTrendingProducts);
    setBestsalesProducts(filteredBestSalesProducts);
    
  }, []);
  
  return (
    <Helmet title={"Home"}>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <p className="hero__subtitle">Trending products in {year}</p>
                <h2>Make Your Interior Elegant and Modest Today!</h2>
                <p>
                  Introducing our luxurious and stylish Modern Sofa, 
                  designed to elevate the comfort and aesthetics of your living space. 
                  Crafted with premium, durable materials, this sofa features plush, high-density foam cushions that offer exceptional support and relaxation.
                  Its sleek, contemporary design seamlessly blends with any decor, while the sturdy hardwood frame ensures lasting durability. 
                  Perfect for entertaining guests or enjoying a cozy night in, the Modern Sofa is the ultimate blend of comfort, quality, and elegance. 
                  Transform your home with this exquisite piece that promises to be the centerpiece of your living room.
                </p>
                <motion.button whileTap={{ scale: 1.3 }} className='buy__btn'>
                  <Link to='/shop'> SHOP NOW</Link>
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
            <Col lg='12' className="text-center">
              <h2 className='Section__title'>Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts }></ProductList>
          </Row>
        </Container> 
      </section>
      <hr/>
      <section className='best sales'>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className="Section__title">Top Sales</h2>
            </Col>
            <ProductList data={bestsalesProducts}/>
          </Row>
        </Container>
      </section>
      <hr/>
      <section className='timer__count'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
            <img src={counterImg} alt=''/>
            </Col>
          </Row>
        </Container>
        <hr/>
        <section className='new__arrivals'>
          <Container>
            <Row>
              <Col lg='12' className="text-center">
              <h2 classsName='Section__title'>New Furniture</h2>
         
              </Col>
            </Row>
          </Container>
        <hr/>
        </section>
        <section className='popular__categories'>
          <Container>
            <Row>
              <Col lg='12' className="text-center">
              <h2 classsName='Section__title'>Popular Categories</h2>
         
              </Col>
            </Row>
          </Container>

        </section>
      </section>
    </Helmet>
  );
};
 export default Home;