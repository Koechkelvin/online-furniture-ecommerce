import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductList from '../components/UI/ProductsList';
import products from '../assets/data/products';
import Clock from '../components/UI/Clock';
import heroImg from '../assets/images/hero-img.png';
import counterImg from '../assets/images/counter-timer-img.png';
import Services from "../services/Services"

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestsalesProducts, setBestsalesProducts] = useState([]);
  const [mobileProducts,setMobileProducts]= useState([]);  
  const [popularcategoriesProducts, setPopularcategories] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(item => item.category === 'chair');
    const filteredBestSalesProducts = products.filter(item => item.category === 'sofa');
    const filterMobileProducts = products.filter(item=>item.category ==='table');    
    const filteredPopularcategoriesProducts = products.filter(item => item.category === 'couch');

    

    setTrendingProducts(filteredTrendingProducts);
    setBestsalesProducts(filteredBestSalesProducts);
    setMobileProducts(filterMobileProducts);
    setPopularcategories(filteredPopularcategoriesProducts);
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
      <Services />
      <hr/>
      <section className='trending products'>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className='Section__title'>Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts}></ProductList>
          </Row>
        </Container>
      </section>
      <hr />
      <section className='best sales'>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className="Section__title">Top Sales</h2>
            </Col>
            <ProductList data={bestsalesProducts} />
          </Row>
        </Container>
      </section>
      <hr />
      <section className='timer__count'>
        <Container>
          <Row>
            <Col lg='6' md='12'>
              <div className='clock__top-content'>
                <h4 className='text-white fs-6 mb-2'>Limited Edition</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.2 }}
                className='buy__btn store__btn'>
                <Link to='/shop'>Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg='6' md='12' className='text-end counter__img'>
              <img src={counterImg} alt='Counter' />
            </Col>
          </Row>
        </Container>
      </section>
      <hr />
      <section className='new products'>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className='Section__title'>New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts}></ProductList>
          </Row>
        </Container>
      </section>
      <hr />
      <section className='popular products'>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className='Section__title'>Popular Categories</h2>
            </Col>
            <ProductList data={popularcategoriesProducts}></ProductList>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
