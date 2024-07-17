import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from "reactstrap";
import '../styles/shop.css';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "table") {
      const filteredProducts = products.filter(
        (item) => item.category === "table"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "couch") {
      const filteredProducts = products.filter(
        (item) => item.category === "couch"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch =e=> {
    const searchTerm =e.target.value

    const searchedProducts = products.filter(item=> item.productName
      .toLowerCase().includes(searchTerm.toLowerCase())
    )
    setProductsData(searchedProducts)
  }

  return (
    <Helmet title='Shop'>
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className='filter__widgets'>
                <select onChange={handleFilter}>
                  <option>Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="chair">Chair</option>
                  <option value="couch">Couch</option>
                  ,<option value="table">table</option>
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
                <input type="text" placeholder="Search......"
                onChange={handleSearch} 
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0 
                ? <h1 className='text-center fs-4'>No products available!</h1>
              : 
              <ProductsList data={productsData} />
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
