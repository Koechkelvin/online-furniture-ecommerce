import React from 'react'
import {Link} from "react-router-dom";
import {Container,Row,Col,ListGroup,ListGroupItem} from "reactstrap"
import './footer.css';

const Footer = () => {
  const year =new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md='6'>
          <div className='logo'>
              <div>
                <h1 className='text-white'>Furniture shop</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
            Furniture has been an essential part of human life for centuries,furniture has evolved significantly over time. In the contemporary era, furniture design blends art with functionality, providing comfort and style to living spaces.
              </p>
          </Col>
          <Col lg="3" md='3' className="mb-4">
          <div className="footer__quick-links">
            <h4 className='quick__links-title'>Top categories</h4>
              <ListGroup className='mb-3'>
                

                <ListGroupItem className='ps-0 border-0'> 
                  <Link to='#'>Modern sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Velvet sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to ="#">couches</Link>

                </ListGroupItem>
              </ListGroup>
          </div>
          </Col>
          
          <Col lg="3" md='4' > 
          <div className="footer__quick-links">
            <h4 className='quick__links-title'>Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'> 
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/signup'>Signup</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to=''>Home</Link>
                </ListGroupItem>
              </ListGroup>
              </div>
              
          </Col>
          <Col lg="2" md='3' className="mb-4">
           <div className="footer__quick-links">
            <h4 className='quick__links-title'>Contacts</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex
                align-items-center gap-2'>
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>234 Laikipia, Nakuru-Kenya</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex
                align-items-center gap-2'> 
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+(254)725364640</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex
                align-items-center gap-2'>
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>furnitureX@gmailcom</p>
                </ListGroupItem>
              </ListGroup>
              </div>
          </Col>
          <Col lg='12'>
          <p className="footer__copyright">Copyright {year} built by Kelvin.All rights reserved.

          </p>
          </Col>
        </Row>
      </Container>

    </footer>
  )
}

export default Footer;