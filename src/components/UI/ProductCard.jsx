import React from 'react'
import productImg from '../../assets/images/arm-chair-01.jpg'
import {motion} from 'framer-motion';
import '../../styles/productcard'
import {Col} from 'reactstrap';

const ProductCard = () => {
  return (
    <Col lg="3" md="4">
        <div className='product__item'>
        <div className='product__img'>
        <img src={productImg} alt=""/>
        </div>
        <h3 className='product__name'>Modern Armchair
        </h3>
        <span>chair</span>
        <div className='productcard-bottom'>
            <span className='price'>KES 4999</span>
            <span><i class="ri-add-fill"></i></span>
        </div>
    </div>
    </Col>
    
  )
}

export default ProductCard;