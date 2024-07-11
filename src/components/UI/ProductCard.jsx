import React from 'react'
//import productImg from '../../assets/images/arm-chair-01.jpg'
import {Col} from 'reactstrap';
import '../../styles/ProductCard.css';
import {motion} from "framer-motion";
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
import { toast } from 'react-toastify';
//import { addItem } from '../../redux/slices/cartSlice';

const ProductCard = ({item}) => {
   const dispatch = useDispatch()
   const addToCart=()=>{

    dispatch(
      cartActions.addItem({
      id:item.id,
      productName:item.productName,
      price:item.price,
      image:item.imgUrl,
    })
  );
  toast.success('Product added successfully');
  // };
  return ( 
    <Col lg="3" md="4">
        <div className='product__item'>
        <div className='product__img'>
        <motion.img whileHover ={{scale:0.9}}src={item.imgUrl} alt=""/>
        </div>
        <div className="product__info">
        <h3 className='product__name'>
         <Link to="/shop/id">{item.productName}</Link>
        </h3>
        <span>{item.category}</span>
        </div>
        <div className='product__card-bottom d-flex align-items-center 
        justify-content-between p-2'>
            <span className='price'>{item.price}</span>
            <motion.span whileTap={{scale:1.2}} onClick={addToCart}>
              <i className="ri-add-fill"></i>
              </motion.span>
        </div>
        
    </div>
    </Col>
    
  );
};
}

export default ProductCard;