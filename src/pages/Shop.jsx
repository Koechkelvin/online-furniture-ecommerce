import React from 'react'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from "reactstrap";
import '../styles/shop.css';

const Shop = () => {
  return (
    <Helmet title='Shop'>
      <CommonSection title="Products"/>
      <Container>
        <Row>
          <Col lg='3' md='3'>
            <div className='filter__widgets'>
              <select>
                <option>Filter by Category</option>
                <option value="sofa">Sofa</option>
                <option value="chair">Chair</option>
                <option value="couch">Couch</option>
              </select>
            </div>
          </Col>
          <Col lg="3" md="3">
            <div className='filter__widgets'>
              <select>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg="3" md="3">
            <div className='search__box'>
              <input type="text" placeholder="Search......"/>
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Shop;
